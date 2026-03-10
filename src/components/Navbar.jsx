export default function Navbar() {
  return (
    <div className="h-14 bg-[#262626] flex items-center justify-between px-8 border-b border-gray-800">
      
      <div className="text-green-400 font-semibold text-lg tracking-wide">
        ∫Solve
      </div>

      <input
        className="bg-[#333] px-4 py-2 rounded-xl w-[400px] outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Search problem..."
      />

      <div className="flex gap-4 items-center">
        <button className="hover:text-green-400">🌙</button>
        <div className="w-9 h-9 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );
}