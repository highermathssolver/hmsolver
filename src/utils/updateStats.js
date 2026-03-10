import { doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "../firebase";


export async function markQuestionSolved(userId, questionId) {
  const ref = doc(db, "users", userId);

  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      solvedQuestions: [questionId],
      currentQuestionId: questionId
    });
    return;
  }

  const data = snap.data();

  const updatedSolved = Array.from(
    new Set([...(data.solvedQuestions || []), questionId])
  );

  await updateDoc(ref, {
    solvedQuestions: updatedSolved,
    currentQuestionId: questionId
  });
}

export const updateUserStats = async ({
  userId,
  isCorrect,
  steps,
  timeTaken,
}) => {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);

    if (!snap.exists()) return;

    const data = snap.data();

    // 📅 TODAY DATE
    const today = new Date().toISOString().split("T")[0];

    let newStreak = data.streak || 0;

    if (!data.lastSolvedDate) {
      newStreak = 1;
    } else {
      const lastDate = new Date(data.lastSolvedDate);
      const diffDays =
        (new Date(today) - lastDate) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        newStreak += 1; // 🔥 continue streak
      } else if (diffDays > 1) {
        newStreak = 1; // 🔥 reset
      }
    }

    await updateDoc(ref, {
      questionsSolved: increment(1),
      correctAnswers: increment(isCorrect ? 1 : 0),
      totalSteps: increment(steps),
      totalTime: increment(timeTaken),
      maxStepTime: Math.max(data.maxStepTime || 0, timeTaken),
      streak: newStreak,
      lastSolvedDate: today,
    });

  } catch (err) {
    console.error("Stats update error:", err);
  }
};