import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getLeaderboard = async () => {
  try {
    const leaderboardQuery = query(
      collection(db, "users"),
      orderBy("questionsSolved", "desc"),
      limit(10)
    );

    const snapshot = await getDocs(leaderboardQuery);

    const leaderboard = snapshot.docs.map((docSnap) => {
      const data = docSnap.data();

      return {
        id: docSnap.id,
        name: data.name || "Anonymous",
        photoURL: data.photoURL || null,
        questionsSolved:
          data.questionsSolved ||
          (data.solvedQuestions ? data.solvedQuestions.length : 0),
      };
    });

    return leaderboard;

  } catch (error) {
    console.error("❌ Leaderboard fetch error:", error);
    return [];
  }
};
