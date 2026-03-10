import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { MathJaxContext } from "better-react-mathjax"; // ✅ ADDED

import Home from "./pages/Home";
import Solver from "./pages/Solver";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// 🔥 HM + JEE PAGES
import HMPage from "./pages/HMPage";
import JEEYearPage from "./pages/JEEYearPage";
import JEEShiftPage from "./pages/JEEShiftPage";
import JEEQuestionsPage from "./pages/JEEQuestionsPage";

// ✅ NEW WRAPPER
import SolverWithLayout from "./pages/SolverWithLayout";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

// ✅ MathJax Config
const mathJaxConfig = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
  },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ================= HM FLOW ================= */}
        <Route
          path="/hm"
          element={
            <ProtectedRoute>
              <Layout>
                <HMPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/solve/hm/:id"
          element={
            <ProtectedRoute>
              <SolverWithLayout />
            </ProtectedRoute>
          }
        />

        {/* ================= JEE FLOW ================= */}
        <Route
          path="/jee"
          element={
            <ProtectedRoute>
              <Layout>
                <JEEYearPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/jee/:year"
          element={
            <ProtectedRoute>
              <Layout>
                <JEEShiftPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/jee/:year/:shift"
          element={
            <ProtectedRoute>
              <Layout>
                <JEEQuestionsPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ================= GENERAL SOLVER ================= */}
        <Route
          path="/solve"
          element={
            <ProtectedRoute>
              <Layout>
                <Solver />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ================= PROFILE ================= */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ================= DASHBOARD ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route
          path="*"
          element={
            <div className="text-white text-center mt-20 text-xl">
              ❌ Page Not Found
            </div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* ✅ Wrap EVERYTHING with MathJax */}
        <MathJaxContext config={mathJaxConfig}>
          <AnimatedRoutes />
        </MathJaxContext>
      </AuthProvider>
    </BrowserRouter>
  );
}