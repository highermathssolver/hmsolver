import { useNavigate } from "react-router-dom";

export default function JEEYearPage() {
  const navigate = useNavigate();

  const years = [];
  const months = ["January", "April", "June", "September", "December"];

  for (let y = 2020; y <= 2025; y++) {
    months.forEach((m) => {
      years.push(`${m} ${y}`);
    });
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">JEE Mains Papers</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {years.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(`/jee/${item}`)}
            className="p-5 rounded-xl bg-[#1a1a1a] border border-white/10 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}