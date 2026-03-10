import { motion } from "framer-motion";

export default function ProfileStatCard({
  title,
  value,
  subtitle,
  icon,
  highlight
}) {
  return (
    <motion.div
      className="rounded-2xl p-6 bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {icon && (
        <div className="mb-4 text-2xl">{icon}</div>
      )}

      <div className="text-gray-400 text-sm">{title}</div>

      <div
        className={`text-3xl font-bold mt-1 ${
          highlight === "green" ? "text-green-400" : ""
        }`}
      >
        {value}
      </div>

      {subtitle && (
        <div className="text-gray-500 text-sm mt-1">
          {subtitle}
        </div>
      )}
    </motion.div>
  );
}