import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { markQuestionSolved, updateUserStats } from "../utils/updateStats";
import { MathJax } from "better-react-mathjax";

export default function SolutionPanel({
  user,
  questionId,
  steps = [],
  scrollRef,
  setStep,
  setTotalSteps,
  setStepTime,
  setTotalTime,
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

  const [totalTimeLocal, setTotalTimeLocal] = useState(0);
  const [stepTimeLocal, setStepTimeLocal] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const [showWhy, setShowWhy] = useState(false);

  const stepRef = useRef(null);

  /* TIMER */

  useEffect(() => {

    if (!isRunning) return;

    const interval = setInterval(() => {

      setTotalTimeLocal(prev => {
        const t = prev + 1;
        setTotalTime(t);
        return t;
      });

      setStepTimeLocal(prev => {
        const t = prev + 1;
        setStepTime(t);
        return t;
      });

    }, 1000);

    return () => clearInterval(interval);

  }, [isRunning]);

  /* STEP PROGRESS */

  useEffect(() => {

    setStep(currentStep + 1);
    setTotalSteps(steps.length);
    setProgress((currentStep / steps.length) * 100);

    setShowWhy(false);

  }, [currentStep]);

  /* AUTO SCROLL */

  useEffect(() => {

    setTimeout(() => {

      if (!stepRef.current || !scrollRef?.current) return;

      scrollRef.current.scrollTo({
        top: stepRef.current.offsetTop - 320,
        behavior: "smooth"
      });

    }, 300);

  }, [currentStep, completed]);

  /* FINAL SAVE */

  const handleFinalSave = async () => {

    try {

      if (!user?.uid || !questionId) return;

      const qId = Number(questionId);

      const isNewSolve = await markQuestionSolved(user.uid, qId);

      if (isNewSolve) {

        await updateUserStats({
          userId: user.uid,
          isCorrect: true,
          steps: steps.length,
          timeTaken: totalTimeLocal,
        });

      }

      if (onComplete) onComplete();

    } catch (err) {

      console.error("❌ Final update failed:", err);

    }

  };

  /* OPTION CLICK */

  const handleClick = (opt) => {

    if (isTransitioning) return;

    setSelected(opt);

    if (opt === steps[currentStep].correct) {

      setIsTransitioning(true);

      setTimeout(() => {

        setCompleted(prev => [
          ...prev,
          { ...steps[currentStep], answer: opt }
        ]);

        if (currentStep < steps.length - 1) {

          setCurrentStep(prev => prev + 1);
          setStepTimeLocal(0);
          setStepTime(0);

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

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 pb-32">

      {/* COMPLETED STEPS */}

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

            <MathJax dynamic className="text-gray-300">
              {step.question}
            </MathJax>

          </div>

          <div className="ml-14 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full inline-block">
            <MathJax dynamic>{step.answer}</MathJax>
          </div>

        </motion.div>
      ))}

      <AnimatePresence mode="wait">

        {currentStep < steps.length && (

          <>
          
          {/* STEP CARD */}

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

              <MathJax dynamic>
                {steps[currentStep].question}
              </MathJax>

            </div>

            {/* OPTIONS */}

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

                    <MathJax dynamic>{opt}</MathJax>

                  </div>

                );

              })}

            </div>

          </motion.div>

          {/* WHY CARD (SEPARATE) */}

          {steps[currentStep]?.why && (

            <motion.div
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >

              <button
                onClick={() => setShowWhy(!showWhy)}
                className="w-full flex justify-between items-center"
              >

                <span className="text-gray-300">
                  Why this step?
                </span>

                <span className="text-gray-400">
                  {showWhy ? "▲" : "▼"}
                </span>

              </button>

              {showWhy && (

                <div className="mt-4 p-4 rounded-xl bg-blue-900/20 border border-blue-500/30 text-gray-300">

                  <MathJax dynamic>
                    {steps[currentStep].why}
                  </MathJax>

                </div>

              )}

            </motion.div>

          )}

          </>

        )}

      </AnimatePresence>

      {currentStep === steps.length && (

        <motion.div className="p-10 text-center bg-gradient-to-r from-blue-900/30 to-green-900/20 border border-blue-500/30 rounded-2xl">

          <div className="text-5xl mb-4">✅</div>

          <div className="text-2xl font-semibold mb-2">
            Question Completed!
          </div>

          <div className="text-gray-400">
            Time: {formatTime(totalTimeLocal)}
          </div>

        </motion.div>

      )}

    </div>
  );
}