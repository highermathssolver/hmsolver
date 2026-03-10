import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ AUTH STATE LISTENER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ LOGIN
  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    setUser(res.user);
    return res.user;
  };

  // ✅ SIGNUP
  const signup = async (name, email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    // 🔥 SAVE NAME
    await updateProfile(res.user, {
      displayName: name
    });

    setUser({
      ...res.user,
      displayName: name
    });

    return res.user;
  };

  // ✅ LOGOUT
  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// ✅ CUSTOM HOOK
export const useAuth = () => useContext(AuthContext);

import { getDoc } from "firebase/firestore";

const createUserDoc = async (user) => {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      name: user.displayName || "",
      email: user.email || "",
      questionsSolved: 0,
      correctAnswers: 0,
      totalSteps: 0,
      totalTime: 0,
      streak: 0,
      lastSolvedDate: "",
      solvedQuestions: [],
      lastQuestionId: null
    });
  }
};