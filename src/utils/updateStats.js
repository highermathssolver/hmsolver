import {
  doc,
  updateDoc,
  increment,
  getDoc,
  setDoc
} from "firebase/firestore";
import { db } from "../firebase";

/*
----------------------------------------
MARK QUESTION AS SOLVED
----------------------------------------
*/
export async function markQuestionSolved(userId, questionId) {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        solvedQuestions: [questionId],
        currentQuestionId: questionId,
        questionsSolved: 1
      });
      return true;
    }

    const data = snap.data();
    const solved = data.solvedQuestions || [];

    // prevent duplicates
    if (solved.includes(questionId)) {
      await updateDoc(ref, {
        currentQuestionId: questionId
      });
      return false;
    }

    const updatedSolved = [...solved, questionId];

    await updateDoc(ref, {
      solvedQuestions: updatedSolved,
      currentQuestionId: questionId,
      questionsSolved: increment(1)
    });

    return true;

  } catch (err) {
    console.error("markQuestionSolved error:", err);
    return false;
  }
}

/*
----------------------------------------
UPDATE USER STATS
----------------------------------------
*/
export const updateUserStats = async ({
  userId,
  isCorrect,
  steps,
  timeTaken
}) => {
  try {
    const ref = doc(db, "users", userId);
    const snap = await getDoc(ref);

    if (!snap.exists()) return;

    const data = snap.data();

    // today's date
    const today = new Date().toISOString().split("T")[0];

    let newStreak = data.streak || 0;

    if (!data.lastSolvedDate) {
      newStreak = 1;
    } else {
      const lastDate = new Date(data.lastSolvedDate);
      const todayDate = new Date(today);

      const diffDays =
        (todayDate - lastDate) / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1;
      }
    }

    await updateDoc(ref, {
      correctAnswers: increment(isCorrect ? 1 : 0),
      totalSteps: increment(steps || 0),
      totalTime: increment(timeTaken || 0),
      maxStepTime: Math.max(data.maxStepTime || 0, timeTaken || 0),
      streak: newStreak,
      lastSolvedDate: today
    });

  } catch (err) {
    console.error("Stats update error:", err);
  }
};
