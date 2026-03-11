import { doc, setDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const markSolved = async (userId, questionId) => {
  try {
    if (!userId || !questionId) {
      console.error("❌ Invalid userId or questionId");
      return;
    }

    const userRef = doc(db, "users", userId);

    await setDoc( 
      userRef,
      {
        solvedQuestions: arrayUnion(questionId),
        lastQuestionId: questionId,
        lastSolvedAt: serverTimestamp()
      },
      { merge: true } // creates doc if not exists
    );

    console.log("✅ Question saved:", questionId);

    return true;

  } catch (err) {
    console.error("❌ Firestore error:", err);
    return false;
  }
};
