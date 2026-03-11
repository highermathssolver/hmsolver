
import Layout from "../components/Layout";
import Solver from "./Solver";
import { useNavigate, useParams } from "react-router-dom";
import { hmQuestions } from "../data/hmQuestions";

import { useAuth } from "../context/AuthContext";
import { markQuestionSolved, updateUserStats } from "../utils/updateStat";

export default function SolverWithLayout() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  const numericId = Number(id);

  const currentIndex = hmQuestions.findIndex((q) => q.id === numericId);

  // if invalid id
  if (currentIndex === -1) {
    return (
      <Layout>
        <div className="text-white text-center mt-10">
          ❌ Question not found
        </div>
      </Layout>
    );
  }

  const currentQuestion = hmQuestions[currentIndex];

  const goNext = async () => {
    if (!user) return;

    // mark question solved
    await markQuestionSolved(user.uid, currentQuestion.id);

    // update stats
    await updateUserStats({
      userId: user.uid,
      isCorrect: true, // you can change based on answer logic
      steps: currentQuestion.steps?.length || 1,
      timeTaken: 10 // replace with real timer later
    });

    if (currentIndex < hmQuestions.length - 1) {
      navigate(`/solve/hm/${hmQuestions[currentIndex + 1].id}`);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(`/solve/hm/${hmQuestions[currentIndex - 1].id}`);
    }
  };

  const headerActions = (
    <>
      <button
        onClick={goPrev}
        disabled={currentIndex === 0}
        className="px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-lg disabled:opacity-40"
      >
        ⬅ Prev
      </button>

      <button
        onClick={goNext}
        disabled={currentIndex === hmQuestions.length - 1}
        className="px-4 py-2 bg-green-600 rounded-lg disabled:opacity-40"
      >
        Next ➡
      </button>
    </>
  );

  return (
    <Layout headerActions={headerActions}>
      <Solver question={currentQuestion} />
    </Layout>
  );
}