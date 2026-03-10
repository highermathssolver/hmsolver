import { NavLink } from "react-router-dom";
import { Home, FileText, User, BarChart2 } from "lucide-react";

export default function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
     ${
       isActive
         ? "bg-white/10 text-blue-400 shadow-inner"
         : "text-gray-300 hover:bg-white/5"
     }`;

  return (
    <div className="hidden md:flex w-72 h-screen fixed left-0 top-0 z-40
      bg-gradient-to-b from-[#1a1a1a] to-[#111]
      border-r border-white/10 p-4 flex-col justify-between">

      {/* TOP */}
      <div>


        <div className="space-y-2">

          <NavLink to="/" className={linkStyle}>
            <Home size={20} />
            Home
          </NavLink>

          <NavLink to="/solve" className={linkStyle}>
            <FileText size={20} />
            Questions
          </NavLink>

          <NavLink to="/profile" className={linkStyle}>
            <User size={20} />
            Profile
          </NavLink>

          <NavLink to="/dashboard" className={linkStyle}>
            <BarChart2 size={20} />
            Analytics
          </NavLink>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 pt-4">
        <button className="flex items-center gap-3 text-gray-300 hover:text-white">
          ☀️ Light Mode
        </button>
      </div>
    </div>
  );
}