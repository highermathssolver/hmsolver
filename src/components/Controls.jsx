export default function Controls() {
  return (
    <div className="fixed bottom-0 left-[280px] right-0 bg-[#262626] p-4 flex justify-center gap-8 border-t border-gray-800">
      
      <button className="text-xl hover:text-green-400">⏪</button>
      <button className="text-2xl text-green-400">▶</button>
      <button className="text-xl hover:text-green-400">⏩</button>

      <select className="bg-[#333] px-3 py-1 rounded-lg">
        <option>1x</option>
        <option>2x</option>
      </select>
    </div>
  );
}