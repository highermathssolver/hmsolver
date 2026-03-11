import {
  doc,
  updateDoc,
  increment,
  getDoc,
  setDoc,
  arrayUnion
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

    // Create document if not exist
    if (!snap.exists()) {

      await setDoc(ref, {
        solvedQuestions: [questionId],
        currentQuestionId: questionId,
        questionsSolved: 1,
        correctAnswers: 0,
        totalSteps: 0,
        totalTime: 0,
        maxStepTime: 0,
        streak: 1,
        lastSolvedDate: new Date().toISOString().split("T")[0]
      });

      return true;
    }

    const data = snap.data();
    const solved = data.solvedQuestions || [];

    // Prevent duplicate solving
    if (solved.includes(questionId)) {

      await updateDoc(ref, {
        currentQuestionId: questionId
      });

      return false;
    }

    // Safe Firestore update
    await updateDoc(ref, {
      solvedQuestions: arrayUnion(questionId),
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

    const today = new Date().toISOString().split("T")[0];

    // Create document if missing
    if (!snap.exists()) {

      await setDoc(ref, {
        questionsSolved: 1,
        correctAnswers: isCorrect ? 1 : 0,
        totalSteps: steps || 0,
        totalTime: timeTaken || 0,
        maxStepTime: timeTaken || 0,
        streak: 1,
        lastSolvedDate: today
      });

      return;
    }

    const data = snap.data();

    /*
    -----------------------
    STREAK CALCULATION
    -----------------------
    */

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

    /*
    -----------------------
    MAX STEP TIME
    -----------------------
    */

    const maxTime = Math.max(
      data.maxStepTime || 0,
      timeTaken || 0
    );

    /*
    -----------------------
    UPDATE STATS
    -----------------------
    */

    await updateDoc(ref, {
      correctAnswers: increment(isCorrect ? 1 : 0),
      totalSteps: increment(steps || 0),
      totalTime: increment(timeTaken || 0),
      maxStepTime: maxTime,
      streak: newStreak,
      lastSolvedDate: today
    });

  } catch (err) {

    console.error("Stats update error:", err);

  }

};