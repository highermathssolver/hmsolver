import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

// 🔥 MARK QUESTION AS SOLVED
export const markSolved = async (userId, questionId) => {
  try {
    const ref = doc(db, "users", userId);

    await updateDoc(ref, {
      solvedQuestions: arrayUnion(questionId),
      lastQuestionId: questionId
    });

  } catch (error) {
    console.error("Error updating progress:", error);
  }
};