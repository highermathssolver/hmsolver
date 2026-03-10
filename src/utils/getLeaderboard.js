import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getLeaderboard = async () => {
  try {
    const q = query(
      collection(db, "users"),
      orderBy("questionsSolved", "desc"),
      limit(10)
    );

    const snap = await getDocs(q);

    return snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

  } catch (err) {
    console.error(err);
    return [];
  }
};