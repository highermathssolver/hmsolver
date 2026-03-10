import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // 🔥 STATS
  const [stats, setStats] = useState({
    questionsSolved: 0,
    accuracy: "0%",
    avgTime: "0s",
  });

  // 🔥 RESUME STATE
  const [lastQuestionId, setLastQuestionId] = useState(null);

  // =========================
  // 🔥 FETCH USER DATA
  // =========================
  useEffect(() => {
    if (!user?.uid) return;

    const ref = doc(db, "users", user.uid);

    const unsubscribe = onSnapshot(ref, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();

        const accuracy =
          data.questionsSolved > 0
            ? ((data.correctAnswers / data.questionsSolved) * 100).toFixed(1)
            : 0;

        const avgTime =
          data.totalSteps > 0
            ? Math.round(data.totalTime / data.totalSteps)
            : 0;

        setStats({
          questionsSolved: data.questionsSolved || 0,
          accuracy: accuracy + "%",
          avgTime: avgTime + "s",
        });

        setLastQuestionId(data.lastQuestionId || null);
      }
    });

    return () => unsubscribe();
  }, [user]);

  // =========================
  // 🔥 RESUME LOGIC
  // =========================
  const handleResume = () => {
    if (lastQuestionId) {
      const next = Number(lastQuestionId);
      navigate(`/solve/hm/${next}`);
    } else {
      navigate("/hm");
    }
  };

  // =========================
  // 🚀 DASHBOARD VIEW
  // =========================
  if (user) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >

          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">
              Welcome back{user?.displayName ? `, ${user.displayName}` : ""}! 👋
            </h1>
            <p className="text-gray-400 mt-2">
              Ready to solve some problems today?
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { title: "Questions Solved", value: stats.questionsSolved },
              { title: "Accuracy", value: stats.accuracy },
              { title: "Avg Time", value: stats.avgTime }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-gray-400">{item.title}</div>
                <div className="text-3xl font-bold mt-2">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 to-black border border-blue-500/20 flex items-center justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Continue Your Journey
              </h2>
              <p className="text-gray-400">
                {lastQuestionId
                  ? `Resume from Question ${lastQuestionId}`
                  : "Start solving questions and improve your JEE preparation"}
              </p>
            </div>

            <button
              onClick={handleResume}
              className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-600 transition"
            >
              {lastQuestionId ? "Resume" : "Start Solving"}
            </button>
          </motion.div>

          {/* TOPICS */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-6">
              Recent Topics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <motion.div
                className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/10 flex justify-between cursor-pointer hover:border-pink-500"
                onClick={() => navigate("/hm")}
              >
                <div>
                  <div className="font-medium">HM Instagram Ques</div>
                  <div className="text-gray-400 text-sm">
                    Practice trending problems
                  </div>
                </div>
                <div className="text-pink-400 text-xl">🔥</div>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl bg-[#1a1a1a] border border-white/10 flex justify-between cursor-pointer hover:border-blue-500"
                onClick={() => navigate("/jee")}
              >
                <div>
                  <div className="font-medium">JEE Mains Ques</div>
                  <div className="text-gray-400 text-sm">
                    Previous year questions
                  </div>
                </div>
                <div className="text-blue-400 text-xl">📘</div>
              </motion.div>

            </div>
          </div>

        </motion.div>
      </div>
    );
  }

  // =========================
  // LANDING PAGE (UPDATED)
  // =========================
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <div className="text-center max-w-4xl">

        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Solve math differently.
        </h1>

        <h3 className="text-3xl md:text-6xl font-bold text-blue-500 mt-2">
          Think, Tap and Solve.
        </h3>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Learn mathematics the right way.
Break complex problems into clear, simple steps.
        </p>

        {/* BUTTONS */}

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">

          <button
            onClick={() => navigate("/signup")}
            className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90"
          >
            Create Account →
          </button>

          <button
            onClick={() => navigate("/login")}
            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Sign In
          </button>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-3 gap-10 mt-24 text-center">

        <div>
          <p className="text-4xl font-bold">9K+</p>
          <p className="text-gray-400 mt-2">Questions</p>
        </div>

        <div>
          <p className="text-4xl font-bold">95%</p>
          <p className="text-gray-400 mt-2">Accuracy Rate</p>
        </div>

        <div>
          <p className="text-4xl font-bold">1K+</p>
          <p className="text-gray-400 mt-2">Active Users</p>
        </div>

      </div>

    </div>
  );
}