import { motion } from "framer-motion";

export default function StepCard({ step, title, children }) {
  return (
    <motion.div
      className="bg-[#1f1f1f] p-5 rounded-2xl border border-gray-800"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-xs text-gray-500 mb-1">{step}</div>
      <div className="text-green-400 font-semibold mb-2">{title}</div>
      <div>{children}</div>
    </motion.div>
  );
}