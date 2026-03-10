import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Home, FileText, User, BarChart2 } from "lucide-react";

export default function MobileSidebar({ isOpen, setIsOpen }) {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
     ${
       isActive
         ? "bg-white/10 text-blue-400"
         : "text-gray-300"
     }`;

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-[11000]"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-0 left-0 h-screen w-64 z-[11001]
        bg-gradient-to-b from-[#1a1a1a] to-[#111]
        border-r border-white/10 p-4 flex flex-col justify-between"
      >
        <div>


          <div className="space-y-2">

            <NavLink to="/" onClick={()=>setIsOpen(false)} className={linkStyle}>
              <Home size={20}/> Home
            </NavLink>

            <NavLink to="/solve" onClick={()=>setIsOpen(false)} className={linkStyle}>
              <FileText size={20}/> Questions
            </NavLink>

            <NavLink to="/profile" onClick={()=>setIsOpen(false)} className={linkStyle}>
              <User size={20}/> Profile
            </NavLink>

            <NavLink to="/dashboard" onClick={()=>setIsOpen(false)} className={linkStyle}>
              <BarChart2 size={20}/> Analytics
            </NavLink>

          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          ☀️ Light Mode
        </div>
      </motion.div>
    </>
  );
}