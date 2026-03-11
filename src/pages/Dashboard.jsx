import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  // =========================
  // USER STATS
  // =========================
  const [stats, setStats] = useState({
    questionsSolved: 0,
    accuracy: "0%",
    avgTime: "0s",
  });

  const [lastQuestionId, setLastQuestionId] = useState(null);

  // =========================
  // FETCH USER DATA (REALTIME)
  // =========================
  useEffect(() => {
    if (!user?.uid) return;

    const userRef = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(userRef, (docSnap) => {
      if (!docSnap.exists()) return;

      const data = docSnap.data();

      const questionsSolved = data.questionsSolved || 0;
      const correctAnswers = data.correctAnswers || 0;
      const totalSteps = data.totalSteps || 0;
      const totalTime = data.totalTime || 0;

      const accuracy =
        questionsSolved > 0
          ? ((correctAnswers / questionsSolved) * 100).toFixed(1)
          : 0;

      const avgTime =
        totalSteps > 0
          ? Math.round(totalTime / totalSteps)
          : 0;

      setStats({
        questionsSolved,
        accuracy: accuracy + "%",
        avgTime: avgTime + "s",
      });

      // store last solved question
      setLastQuestionId(
        data.lastQuestionId !== undefined ? data.lastQuestionId : null
      );
    });

    return () => unsubscribe();
  }, [user]);

  // =========================
  // RESUME SOLVING
  // =========================
  const handleResume = () => {
    if (lastQuestionId !== null) {
      navigate(`/solve/hm/${lastQuestionId}`);
    } else {
      navigate("/hm");
    }
  };

  // =========================
  // ANIMATIONS
  // =========================
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4 },
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">

      {/* MOBILE SIDEBAR */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto px-6 py-8">

        {/* HEADER */}
        <motion.div {...fadeUp} className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome back{user?.displayName ? `, ${user.displayName}` : ""}! 👋
          </h1>

          <p className="text-gray-400">
            Ready to solve some problems today?
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Questions Solved", value: stats.questionsSolved },
            { title: "Accuracy", value: stats.accuracy },
            { title: "Avg Time per Step", value: stats.avgTime },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#2a2a2a]"
            >
              <div className="text-gray-400">{item.title}</div>

              <div className="text-3xl font-semibold mt-2">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESUME CARD */}
        <motion.div
          {...scaleIn}
          className="flex items-center justify-between p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-blue-500/10 border border-blue-500/30 mb-12"
        >
          <div>
            <div className="text-2xl font-semibold mb-2">
              Continue Your Journey
            </div>

            <div className="text-gray-400">
              {lastQuestionId !== null
                ? `Resume from Question ${lastQuestionId}`
                : "Start solving questions and improve your JEE preparation"}
            </div>
          </div>

          <button
            onClick={handleResume}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl transition"
          >
            {lastQuestionId !== null ? "Resume" : "Start Solving"}
          </button>
        </motion.div>

      </div>
    </div>
  );
}
