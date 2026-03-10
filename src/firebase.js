// src/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBDtqzTQfsj958YKleKj3fj77XF9ey0rx0",
  authDomain: "hm-new-1fd48.firebaseapp.com",
  projectId: "hm-new-1fd48",
  storageBucket: "hm-new-1fd48.firebasestorage.app",
  messagingSenderId: "279631657972",
  appId: "1:279631657972:web:0ef68956aba197cf8497a1",
  measurementId: "G-T9J9Y59B5P"
};

// ✅ Prevent multiple Firebase initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// ✅ Google Sign In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};