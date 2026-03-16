import { useRef, useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SolutionPanel from "../components/SolutionPanel";
import PlanSidebar from "../components/PlanSidebar";
import { useAuth } from "../context/AuthContext";
import { hmQuestions } from "../data/hmQuestions";
import { MathJax } from "better-react-mathjax";

export default function Solver() {

  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const numericId = Number(id);
  const scrollRef = useRef(null);

  const questionData = useMemo(() => {
    if (!numericId) return null;
    return hmQuestions.find(q => q.id === numericId);
  }, [numericId]);

  const currentIndex = hmQuestions.findIndex(q => q.id === numericId);

  const [step, setStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(0);
  const [stepTime, setStepTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const [showPlan, setShowPlan] = useState(false); // MOBILE PLAN

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  if (!id || isNaN(numericId)) {
    return <div className="text-white p-10">Invalid Question</div>;
  }

  if (!questionData) {
    return <div className="text-white p-10">Question not found</div>;
  }

  const goNext = () => {
    if (currentIndex < hmQuestions.length - 1) {
      navigate(`/solve/hm/${hmQuestions[currentIndex + 1].id}`);
    }
  };

  useEffect(() => {

    if (!isCompleted) return;
    if (currentIndex === hmQuestions.length - 1) return;

    const timer = setTimeout(() => {
      goNext();
    }, 2000);

    return () => clearTimeout(timer);

  }, [isCompleted, currentIndex]);

  const handleComplete = () => {
    setIsCompleted(true);
  };

  return (
    <div className="flex w-full">

      {/* MAIN CONTENT */}
      <div className="flex-1">

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

            {/* PROGRESS BAR */}
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

            {/* MOBILE PLAN BUTTON */}
            {questionData.plan?.length > 0 && (
              <button
                onClick={() => setShowPlan(true)}
                className="lg:hidden mt-4 bg-blue-600 px-4 py-2 rounded-xl text-sm"
              >
                ☰ View Plan
              </button>
            )}

          </div>
        </div>

        {/* SOLVER CONTENT */}
        <div
          className="max-w-5xl mx-auto px-6 py-6 space-y-6"
          ref={scrollRef}
        >

          <SolutionPanel
            user={user}
            questionId={questionData.id}
            steps={questionData.steps || []}
            plan={questionData.plan || []}
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

      {/* DESKTOP PLAN SIDEBAR */}
      <div className="hidden lg:block w-[320px] border-l border-white/10 bg-black">

        <PlanSidebar
          plan={questionData.plan}
          currentStep={step - 1}
          steps={questionData.steps}
        />

      </div>

      {/* MOBILE PLAN DRAWER */}
      {showPlan && (

        <div className="fixed inset-0 z-50 flex">

          <div
            className="flex-1 bg-black/70"
            onClick={() => setShowPlan(false)}
          />

          <div className="w-[85%] max-w-[320px] bg-[#0f0f0f] p-6">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-lg font-semibold text-white">
                Plan of Attack
              </h2>

              <button
                onClick={() => setShowPlan(false)}
                className="text-gray-400"
              >
                ✕
              </button>

            </div>

            <PlanSidebar
              plan={questionData.plan}
              currentStep={step - 1}
              steps={questionData.steps}
              mobile
            />

          </div>

        </div>

      )}

    </div>
  );
}