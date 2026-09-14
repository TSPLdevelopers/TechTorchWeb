import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// ================= ADMIN PAGES =================

import AdminLogin from "./pages/AdminLogin.jsx";
import AdminForgotPassword from "./pages/AdminForgotPassword.jsx";
import AdminVerifyOTP from "./pages/AdminVerifyOTP.jsx";
import AdminResetPassword from "./pages/AdminResetPassword.jsx";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import NewsInsights from "./pages/News&Inshights.jsx";
import JobOpenings from "./pages/JobOpenings.jsx";
import Events from "./pages/Events.jsx";
import LatestUpdate from "./pages/LatestUpdate.jsx";
import SystemSettings from "./pages/SystemSettings.jsx";

// ================= ADMIN LAYOUT =================

import AdminLayout from "./layout/AdminLayout.jsx";

function App() {
  return (
    <Routes>

      {/* ================= AUTH PAGES ================= */}

      <Route path="/" element={<AdminLogin />} />

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      <Route
        path="/admin-forgot-password"
        element={<AdminForgotPassword />}
      />

      <Route
        path="/admin-verify-otp"
        element={<AdminVerifyOTP />}
      />

      <Route
        path="/admin-reset-password"
        element={<AdminResetPassword />}
      />

      {/* ================= ADMIN PAGES ================= */}

      <Route element={<AdminLayout />}>

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/News-Insights"
          element={<NewsInsights />}
        />

        <Route
          path="/job-openings"
          element={<JobOpenings />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/latest-updates"
          element={<LatestUpdate />}
        />

        <Route
          path="/system-settings"
          element={<SystemSettings />}
        />

      </Route>

    </Routes>
  );
}

export default App;