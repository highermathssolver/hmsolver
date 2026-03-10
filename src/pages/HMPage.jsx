import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function HMPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [solvedQuestions, setSolvedQuestions] = useState([]);

  const questions = Array.from({ length: 50 }, (_, i) => i + 1);

  // 🔥 FETCH SOLVED QUESTIONS
  useEffect(() => {
    const fetchSolved = async () => {
      if (!user?.uid) return;

      try {
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          setSolvedQuestions(data.solvedQuestions || []);
        }
      } catch (err) {
        console.error("Error fetching solved questions:", err);
      }
    };

    fetchSolved();
  }, [user]);

  return (
    <div className="p-6 text-blue-400">
      <h1 className="text-2xl mb-6">HM Instagram Questions</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {questions.map((id) => {
          const isSolved = solvedQuestions.includes(Number(id));

          return (
            <div
              key={id}
              onClick={() => navigate(`/solve/hm/${id}`)}
              className={`
                p-6 rounded-xl cursor-pointer transition-all border
                ${
                  isSolved
                    ? "border-green-500 bg-green-500/10 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                    : "border-white/10 bg-[#1a1a1a] hover:bg-[#222]"
                }
              `}
            >
              
              <div className="text-lg font-medium">
                Question {id}
              </div>

              {/* ✅ SOLVED LABEL */}
              {isSolved && (
                <div className="text-green-400 text-sm mt-2">
                  ✓ Solved
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}