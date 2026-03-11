import { useRef, useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SolutionPanel from "../components/SolutionPanel";
import { useAuth } from "../context/AuthContext";
import { hmQuestions } from "../data/hmQuestions";

import { markSolved } from "../utils/markSolved";
import { updateUserStats } from "../utils/updateStats";

import { MathJax } from "better-react-mathjax";

export default function Solver() {

  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = Number(id);
  const scrollRef = useRef(null);

  // =========================
  // GET QUESTION
  // =========================
  const questionData = useMemo(() => {
    if (!numericId) return null;
    return hmQuestions.find(q => q.id === numericId);
  }, [numericId]);

  const currentIndex = hmQuestions.findIndex(q => q.id === numericId);

  // =========================
  // STATES
  // =========================
  const [step, setStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(0);
  const [stepTime, setStepTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // =========================
  // FORMAT TIME
  // =========================
  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // =========================
  // SAFETY CHECKS
  // =========================
  if (!id || isNaN(numericId)) {
    return <div className="text-white p-10">Invalid Question</div>;
  }

  if (!questionData) {
    return <div className="text-white p-10">Question not found</div>;
  }

  // =========================
  // NAVIGATION
  // =========================
  const goNext = () => {
    if (currentIndex < hmQuestions.length - 1) {
      navigate(`/solve/hm/${hmQuestions[currentIndex + 1].id}`);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(`/solve/hm/${hmQuestions[currentIndex - 1].id}`);
    }
  };

  // =========================
  // AUTO NEXT AFTER COMPLETE
  // =========================
  useEffect(() => {
    if (!isCompleted) return;
    if (currentIndex === hmQuestions.length - 1) return;

    const timer = setTimeout(() => {
      goNext();
    }, 2000);

    return () => clearTimeout(timer);

  }, [isCompleted, currentIndex]);

  // =========================
  // HANDLE QUESTION COMPLETE
  // =========================
const handleComplete = async () => {

  setIsCompleted(true);

  if (!user?.uid) return;

  try {

    const isNewSolve = await markQuestionSolved(
      user.uid,
      numericId
    );

    if (isNewSolve) {

      await updateUserStats({
        userId: user.uid,
        isCorrect: true,
        steps: questionData.steps?.length || 1,
        timeTaken: totalTime || 0,
      });

    }

  } catch (err) {

    console.error("Solve tracking error:", err);

  }

};

  // =========================
  // UI
  // =========================
  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">

          {/* QUESTION */}
          <div className="flex justify-between items-start gap-4">
            <div className="text-lg md:text-2xl font-semibold max-w-[70%] text-white">

              <MathJax dynamic>
                {questionData.question}
              </MathJax>

            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-4">
            <div className="flex justify-between text-gray-400 text-sm mb-2">

              <span>
                Step {step} of {totalSteps || questionData.steps?.length || 1}
              </span>

              <span>
                ⏱ {formatTime(stepTime)} &nbsp; ⏱ {formatTime(totalTime)}
              </span>

            </div>

            <div className="w-full h-2 bg-[#222] rounded-full">
              <div
                className="h-full bg-blue-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-6" ref={scrollRef}>

        <SolutionPanel
          user={user}
          questionId={questionData.id}
          steps={questionData.steps || []}
          scrollRef={scrollRef}
          setStep={setStep}
          setTotalSteps={setTotalSteps}
          setStepTime={setStepTime}
          setTotalTime={setTotalTime}
          setProgress={setProgress}
          onComplete={handleComplete}
        />

      </div>

    </div>
  );
}