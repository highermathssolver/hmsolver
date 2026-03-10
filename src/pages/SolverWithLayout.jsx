import Layout from "../components/Layout";
import Solver from "./Solver";
import { useNavigate, useParams } from "react-router-dom";
import { hmQuestions } from "../data/hmQuestions";

export default function SolverWithLayout() {
  const navigate = useNavigate();
  const { id } = useParams();

  const numericId = Number(id);
  const currentIndex = hmQuestions.findIndex(q => q.id === numericId);

  const goNext = () => {
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
      <Solver />
    </Layout>
  );
}