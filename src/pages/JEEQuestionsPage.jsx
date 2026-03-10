import { useParams, useNavigate } from "react-router-dom";

export default function JEEQuestionsPage() {
  const { year, shift } = useParams();
  const navigate = useNavigate();

  const questions = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-2xl mb-6">
        {year} • {shift}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {questions.map((q) => (
          <div
            key={q}
            onClick={() =>
              navigate(`/solve?type=jee&year=${year}&shift=${shift}&q=${q}`)
            }
            className="p-4 rounded-xl bg-[#1a1a1a] border border-white/10 text-center cursor-pointer"
          >
            Q{q}
          </div>
        ))}
      </div>
    </div>
  );
}