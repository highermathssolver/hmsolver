import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { updateUserStats } from "../utils/updateStats";
import { markSolved } from "../utils/markSolved";
import { MathJax } from "better-react-mathjax"; // ✅ ADDED

export default function SolutionPanel({
  user,
  questionId,
  steps = [],
  scrollRef,
  setStep,
  setTotalSteps,
  setStepTime: setStepTimeGlobal,
  setTotalTime: setTotalTimeGlobal,
  setProgress,
  onComplete
}) {

  if (!steps || steps.length === 0) {
    return (
      <div className="text-white text-center mt-10">
        ❌ No steps found
      </div>
    );
  }

  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [totalTime, setTotalTime] = useState(0);
  const [stepTime, setStepTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const stepRef = useRef(null);

  // ================= TIMER =================
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTotalTime((prev) => {
        const t = prev + 1;
        setTotalTimeGlobal(t);
        return t;
      });

      setStepTime((prev) => {
        const t = prev + 1;
        setStepTimeGlobal(t);
        return t;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // ================= HEADER =================
  useEffect(() => {
    setStep(currentStep + 1);
    setTotalSteps(steps.length);
    setProgress((currentStep / steps.length) * 100);
  }, [currentStep, steps]);

  // ================= SCROLL =================
  useEffect(() => {
    setTimeout(() => {
      if (!stepRef.current || !scrollRef?.current) return;

      scrollRef.current.scrollTo({
        top: stepRef.current.offsetTop - 320,
        behavior: "smooth"
      });
    }, 300);
  }, [currentStep, completed]);

  // ================= FINAL SAVE =================
const handleFinalSave = async () => {
  try {

    if (!user?.uid || !questionId) return;

    const qId = Number(questionId);

    // ⭐ First mark solved
    const isNewSolve = await markSolved(user.uid, qId);

    // ⭐ Only update stats if new question
    if (isNewSolve) {

      await updateUserStats({
        userId: user.uid,
        isCorrect: true,
        steps: steps.length,
        timeTaken: totalTime,
      });

    }

    if (onComplete) onComplete();

  } catch (err) {

    console.error("❌ Final update failed:", err);

  }
};

  // ================= CLICK =================
  const handleClick = (opt) => {
    if (isTransitioning) return;

    setSelected(opt);

    if (opt === steps[currentStep].correct) {
      setIsTransitioning(true);

      setTimeout(() => {
        setCompleted((prev) => [
          ...prev,
          { ...steps[currentStep], answer: opt }
        ]);

        if (currentStep < steps.length - 1) {
          setCurrentStep((prev) => prev + 1);
          setStepTime(0);
          setStepTimeGlobal(0);
        } else {
          setCurrentStep(steps.length);
          setIsRunning(false);
          handleFinalSave();
        }

        setSelected(null);
        setIsTransitioning(false);
      }, 600);

    } else {
      if (navigator.vibrate) navigator.vibrate(200);
      setTimeout(() => setSelected(null), 300);
    }
  };

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // ================= UI =================
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 pb-32">

      {/* ✅ COMPLETED */}
      {completed.map((step, i) => (
        <motion.div
          key={i}
          className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              ✓
            </div>

            {/* ✅ MathJax FIX */}
            <MathJax dynamic className="text-gray-300">
              {step.question}
            </MathJax>
          </div>

          <div className="ml-14 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full inline-block">
             <MathJax dynamic>{step.answer}</MathJax>
          </div>
        </motion.div>
      ))}

      {/* 🔥 CURRENT */}
      <AnimatePresence mode="wait">
        {currentStep < steps.length && (
          <motion.div
            ref={stepRef}
            key={currentStep}
            className="bg-[#1a1a1a] border border-blue-500/40 rounded-2xl p-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
                {currentStep + 1}
              </div>

              {/* ✅ MathJax FIX */}
              <MathJax dynamic>
                {steps[currentStep].question}
              </MathJax>
            </div>

            <div className="space-y-4">
              {steps[currentStep].options.map((opt, i) => {
                const isSelected = selected === opt;
                const isCorrect = opt === steps[currentStep].correct;

                return (
                  <div
                    key={i}
                    onClick={() => handleClick(opt)}
                    className={`
                      p-4 rounded-xl cursor-pointer transition border
                      ${
                        isSelected && isCorrect
                          ? "border-green-400 bg-green-500/10"
                          : isSelected && !isCorrect
                          ? "border-red-400 bg-red-500/10"
                          : "border-[#2a2a2a] bg-[#222] hover:bg-[#2a2a2a]"
                      }
                    `}
                  >
                    {/* ✅ MathJax FIX (MOST IMPORTANT) */}
                    <MathJax dynamic>{opt}</MathJax>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎉 FINAL */}
      {currentStep === steps.length && (
        <motion.div className="p-10 text-center bg-gradient-to-r from-blue-900/30 to-green-900/20 border border-blue-500/30 rounded-2xl">
          <div className="text-5xl mb-4">✅</div>
          <div className="text-2xl font-semibold mb-2">
            Question Completed!
          </div>
          <div className="text-gray-400">
            Time: {formatTime(totalTime)}
          </div>
        </motion.div>
      )}
    </div>
  );
}