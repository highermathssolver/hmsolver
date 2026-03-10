import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

export const markSolved = async (userId, questionId) => {
  try {
    const ref = doc(db, "users", userId);

    await updateDoc(ref, {
      solvedQuestions: arrayUnion(questionId),
      lastQuestionId: questionId
    });

    console.log("✅ Question saved:", questionId);

  } catch (err) {
    console.error("❌ Firestore error:", err);
  }
};