import { useParams, useNavigate } from "react-router-dom";

export default function JEEShiftPage() {
  const { year } = useParams();
  const navigate = useNavigate();

  const shifts = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">{year}</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shifts.map((s) => (
          <div
            key={s}
            onClick={() => navigate(`/jee/${year}/shift-${s}`)}
            className="p-6 rounded-xl bg-[#1a1a1a] border border-white/10 text-center cursor-pointer"
          >
            Shift {s}
          </div>
        ))}
      </div>
    </div>
  );
}