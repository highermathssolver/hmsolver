import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "users"),
      orderBy("questionsSolved", "desc"), // 🔥 ranking logic
      limit(10)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc, index) => {
        const d = doc.data();

        // ✅ calculate accuracy
        const accuracy =
          d.questionsSolved > 0
            ? ((d.correctAnswers / d.questionsSolved) * 100).toFixed(1)
            : "0.0";

        return {
          id: doc.id,
          name: d.name || "User",
          questionsSolved: d.questionsSolved || 0,
          score: accuracy + "%",
          rank: index + 1,
        };
      });

      setUsers(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <motion.div
      className="rounded-2xl p-6 bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-semibold mb-4">🏆 Leaderboard</h2>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 rounded-xl border border-blue-500/20 bg-[#0f0f0f]"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full
                ${
                  user.rank === 1
                    ? "bg-yellow-500"
                    : user.rank === 2
                    ? "bg-gray-400"
                    : user.rank === 3
                    ? "bg-orange-500"
                    : "bg-[#222]"
                }`}
              >
                {user.rank}
              </div>

              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-gray-400 text-sm">
                  {user.questionsSolved} questions solved
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-blue-400 font-semibold">
              {user.score}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}