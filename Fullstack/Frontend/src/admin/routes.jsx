import React from "react";
import { Navigate, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Overview from "./pages/Overview";
import Account from "./pages/Account";
import Admins from "./pages/Admins";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import { EventsPage, JobsPage, NewsPage, UpdatesPage, WhitepapersPage } from "./pages/ContentPages";

// Drop this into <Routes> in App.jsx:  {adminRoutes}
export const adminRoutes = (
  <>
    <Route path="/admin-login" element={<Login />} />
    <Route path="/admin-signup" element={<Signup />} />
    <Route path="/admin-forgot-password" element={<ForgotPassword />} />
    <Route path="/admin-verify-otp" element={<Navigate to="/admin-forgot-password" replace />} />
    <Route path="/admin-reset-password" element={<Navigate to="/admin-forgot-password" replace />} />

    <Route element={<AdminLayout />}>
      <Route path="/admin-dashboard" element={<Overview />} />
      <Route path="/news-insights" element={<NewsPage />} />
      <Route path="/job-openings" element={<JobsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/whitepapers" element={<WhitepapersPage />} />
      <Route path="/latest-updates" element={<UpdatesPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/admin-accounts" element={<Admins />} />
    </Route>
  </>
);
