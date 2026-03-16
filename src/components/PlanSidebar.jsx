import { motion } from "framer-motion";

export default function PlanSidebar({
  plan = [],
  currentStep = 0,
  steps = [],
}) {

  const currentPlanIndex = steps[currentStep]?.planIndex ?? 0;

  return (
    <div
  className="
    w-full p-6
    lg:fixed lg:right-0 lg:top-[72px] lg:h-[calc(100vh-72px)] lg:w-[300px]
    lg:border-l lg:border-white/10 lg:bg-[#0f0f0f]
    lg:overflow-y-auto
  "
>

      <h2 className="hidden lg:block text-xl font-semibold mb-6 text-white">
  Plan of Attack
</h2>

      <div className="space-y-4">

        {plan.map((item, i) => {

          const isActive = i === currentPlanIndex;
          const isDone = i < currentPlanIndex;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`
                flex items-center gap-3 p-3 rounded-xl transition
                ${isActive ? "bg-blue-900/30 border border-blue-500/40" : ""}
              `}
            >

              <div
                className={`
                  w-4 h-4 rounded-full border
                  ${isDone ? "bg-green-400 border-green-400" : "border-gray-500"}
                `}
              />

              <span
                className={`
                  text-sm
                  ${isActive ? "text-blue-400 font-semibold" : "text-gray-400"}
                `}
              >
                {item}
              </span>

            </motion.div>
          );

        })}

      </div>

    </div>
  );
}