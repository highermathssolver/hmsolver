import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import { useState } from "react";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-black text-white">

      {/* DESKTOP SIDEBAR */}
      <Sidebar />

      {/* MOBILE SIDEBAR */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <div className="flex-1 md:ml-72 min-h-screen">

        {/* MOBILE TOP BAR */}
        <div className="md:hidden flex items-center gap-4 px-4 py-4 border-b border-white/10">

          <button
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#1a1a1a]"
          >
            ☰
          </button>

          <h1 className="font-semibold">HM Solver</h1>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}