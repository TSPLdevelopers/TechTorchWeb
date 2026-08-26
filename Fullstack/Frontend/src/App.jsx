import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/Footer";

import AdminLogin from "./pages/AdminLogin";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminVerifyOTP from "./pages/AdminVerifyOTP";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin-forgot-password"
        element={<AdminForgotPassword />}
      />
      <Route
  path="/admin-verify-otp"
  element={<AdminVerifyOTP />}
/>
    </Routes>
  );
}

export default App;