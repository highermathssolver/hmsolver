import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

export default function Layout({ children, headerActions }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">

      {/* SIDEBARS */}
      <Sidebar />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN */}
      <div className="flex-1 md:ml-72 flex flex-col">

        {/* 🔥 GLOBAL HEADER */}
        <div className="sticky top-0 z-50 bg-black border-b border-white/10">

          <div className="flex items-center justify-between px-6 py-4">

            {/* LEFT */}
            <div className="flex items-center gap-4">
              <button
  onClick={() => setIsOpen(true)}
  className="
    md:hidden
    w-14 h-14
    flex items-center justify-center
    rounded-2xl
    bg-gradient-to-b from-[#1f1f1f] to-[#121212]
    border border-white/10
    transition hover:scale-105
  "
>
  <div className="flex flex-col gap-[6px]">
    <span className="w-5 h-[3px] bg-white rounded-full"></span>
    <span className="w-5 h-[3px] bg-white rounded-full"></span>
    <span className="w-5 h-[3px] bg-white rounded-full"></span>
  </div>
</button>

              <h1 className="text-lg font-semibold">HM Solver</h1>
            </div>

            {/* RIGHT (DYNAMIC BUTTONS) */}
            <div className="flex gap-3">
              {headerActions}
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 py-6">
          {children}
        </div>

      </div>
    </div>
  );
}