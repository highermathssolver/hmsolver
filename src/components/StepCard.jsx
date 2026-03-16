import { motion } from "framer-motion";
import { useState } from "react";
import { MathJax } from "better-react-mathjax";

export default function StepCard({
  step,
  title,
  why,
  children
}) {

  const [showWhy, setShowWhy] = useState(false);

  return (
    <motion.div
      className="bg-[#1f1f1f] p-5 rounded-2xl border border-gray-800"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* STEP NUMBER */}

      {step && (
        <div className="text-xs text-gray-500 mb-1">
          {step}
        </div>
      )}

      {/* STEP TITLE */}

      {title && (
        <div className="text-green-400 font-semibold mb-3">
          <MathJax dynamic>{title}</MathJax>
        </div>
      )}

      {/* MAIN CONTENT */}

      <div className="text-gray-200">
        {children}
      </div>

      {/* WHY THIS STEP */}

      {why && (
        <div className="mt-5">

          <button
            onClick={() => setShowWhy(!showWhy)}
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 rounded-xl flex justify-between items-center hover:bg-[#232323] transition"
          >

            <span className="text-gray-300 text-sm">
              Why this step?
            </span>

            <span className="text-gray-400 text-sm">
              {showWhy ? "▲" : "▼"}
            </span>

          </button>

          {showWhy && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 p-4 rounded-xl bg-blue-900/20 border border-blue-500/30 text-gray-300 text-sm"
            >

              <MathJax dynamic>
                {why}
              </MathJax>

            </motion.div>
          )}

        </div>
      )}

    </motion.div>
  );
}