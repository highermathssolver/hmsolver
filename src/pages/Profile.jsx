import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import ProfileStatCard from "../components/ProfileStatCard";
import Leaderboard from "../components/Leaderboard";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const [stats, setStats] = useState({
    questionsSolved: 0,
    accuracy: "0%",
    avgTime: "0s",
    maxTime: "0s",
    totalTime: "0h 0m",
    streak: 0,
  });

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // 🔥 REALTIME FIRESTORE DATA
  useEffect(() => {
    if (!user) return;

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

        const totalHours = Math.floor((data.totalTime || 0) / 3600);
        const totalMinutes = Math.floor(((data.totalTime || 0) % 3600) / 60);

        setStats({
          questionsSolved: data.questionsSolved || 0,
          accuracy: accuracy + "%",
          avgTime: avgTime + "s",
          maxTime: (data.maxStepTime || 0) + "s",
          totalTime: `${totalHours}h ${totalMinutes}m`,
          streak: data.streak || 0,
        });
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-6 py-6 max-w-4xl mx-auto space-y-6">

        {/* TITLE */}
        <div>
          <h1 className="text-4xl font-bold">Your Profile</h1>
          <p className="text-gray-400 mt-2">
            Welcome {user?.displayName || "User"} 👋
          </p>
        </div>

        {/* 🔥 STATS (REAL DATA) */}
        <div className="space-y-4">
          <ProfileStatCard title="Questions Solved" value={stats.questionsSolved} icon="🎯" />
          <ProfileStatCard title="Accuracy" value={stats.accuracy} icon="🏆" />
          <ProfileStatCard title="Avg Time per Step" value={stats.avgTime} icon="⏱" />
          <ProfileStatCard title="Max Step Time" value={stats.maxTime} icon="📈" />
        </div>

        {/* LEADERBOARD */}
        <Leaderboard />

        {/* EXTRA STATS */}
        <ProfileStatCard
          title="Total Time Spent"
          value={stats.totalTime}
          subtitle="This month"
        />

        <ProfileStatCard
          title="Daily Streak"
          value={`${stats.streak} days`}
          subtitle="Keep it up! 🔥"
        />

        {/* LOGOUT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-12"
        >
          <div className="border-t border-white/10 pt-8 flex justify-center">

            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4
                rounded-2xl
                bg-gradient-to-r from-red-500 to-red-600
                shadow-[0_10px_30px_rgba(239,68,68,0.4)]
                font-semibold text-lg
                transition-all duration-300
              "
            >
              Logout
            </motion.button>

          </div>
        </motion.div>

      </div>
    </div>
  );
}