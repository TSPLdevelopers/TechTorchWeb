import React from "react";
import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";

// Admin Pages
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminForgotPassword from "./pages/AdminForgotPassword.jsx";
import AdminVerifyOTP from "./pages/AdminVerifyOTP.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import NewsInsights from "./pages/NewsInsights.jsx";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ================= HOME COMPONENTS =================
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";

// ================= HERO SLIDE 1 =================
import HeroSlide01 from "./components/HeroSlides/HeroSlide01.jsx";
import HeroSlide02 from "./components/HeroSlides/HeroSlide02.jsx";
import HeroSlide03 from "./components/HeroSlides/HeroSlide03.jsx";
import HeroSlide04 from "./components/HeroSlides/HeroSlide04.jsx";

// ================= HERO SLIDE 2 =================
import Hero02Slide01 from "./components/Hero2Slides/Hero02Slide01.jsx";
import Hero02Slide02 from "./components/Hero2Slides/Hero02Slide02.jsx";
import Hero02Slide03 from "./components/Hero2Slides/Hero02Slide03.jsx";
import Hero02Slide04 from "./components/Hero2Slides/Hero02Slide04.jsx";
import Hero02Slide05 from "./components/Hero2Slides/Hero02Slide05.jsx";
import Hero02Slide06 from "./components/Hero2Slides/Hero02Slide06.jsx";

// ================= HERO SLIDE 3 =================
import Hero03Slide01 from "./components/Hero3Slides/Hero03Slide01.jsx";
import Hero03Slide02 from "./components/Hero3Slides/Hero03Slide02.jsx";
import Hero03Slide03 from "./components/Hero3Slides/Hero03Slide03.jsx";
import Hero03Slide04 from "./components/Hero3Slides/Hero03Slide04.jsx";
import Hero03Slide05 from "./components/Hero3Slides/Hero03Slide05.jsx";
import Hero03Slide06 from "./components/Hero3Slides/Hero03Slide06.jsx";
import Hero03Slide07 from "./components/Hero3Slides/Hero03Slide07.jsx";

// ================= HERO SLIDE 4 =================
import Hero04Slide01 from "./components/Hero4Slides/Hero04Slide01.jsx";
import Hero04Slide02 from "./components/Hero4Slides/Hero04Slide02.jsx";
import Hero04Slide03 from "./components/Hero4Slides/Hero04Slide03.jsx";
import Hero04Slide04 from "./components/Hero4Slides/Hero04Slide04.jsx";
import Hero04Slide05 from "./components/Hero4Slides/Hero04Slide05.jsx";

// ================= HERO SLIDE 5 =================
import Hero05Slide01 from "./components/Hero5Slides/Hero05Slide01.jsx";
import Hero05Slide02 from "./components/Hero5Slides/Hero05Slide02.jsx";
import Hero05Slide03 from "./components/Hero5Slides/Hero05Slide03.jsx";
import Hero05Slide04 from "./components/Hero5Slides/Hero05Slide04.jsx";


// ================= HOME =================

function Home() {
  return (
    <>
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


// ================= SLIDE 1 =================

function Slide1Page() {
  return (
    <>
      <HeroSlide01 />
      <HeroSlide02 />
      <HeroSlide03 />
      <HeroSlide04 />
    </>
  );
}


// ================= SLIDE 2 =================

function Slide2Page() {
  return (
    <>
      <Hero02Slide01 />
      <Hero02Slide02 />
      <Hero02Slide03 />
      <Hero02Slide04 />
      <Hero02Slide05 />
      <Hero02Slide06 />
    </>
  );
}


// ================= SLIDE 3 =================

function Slide3Page() {
  return (
    <>
      <Hero03Slide01 />
      <Hero03Slide02 />
      <Hero03Slide03 />
      <Hero03Slide04 />
      <Hero03Slide05 />
      <Hero03Slide06 />
      <Hero03Slide07 />
    </>
  );
}


// ================= SLIDE 4 =================

function Slide4Page() {
  return (
    <>
      <Hero04Slide01 />
      <Hero04Slide02 />
      <Hero04Slide03 />
      <Hero04Slide04 />
      <Hero04Slide05 />
    </>
  );
}


// ================= SLIDE 5 =================

function Slide5Page() {
  return (
    <>
      <Hero05Slide01 />
      <Hero05Slide02 />
      <Hero05Slide03 />
      <Hero05Slide04 />
    </>
  );
}


// ================= APP =================

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SLIDE PAGES */}
        <Route path="/Slide1" element={<Slide1Page />} />
        <Route path="/Slide2" element={<Slide2Page />} />
        <Route path="/Slide3" element={<Slide3Page />} />
        <Route path="/Slide4" element={<Slide4Page />} />
        <Route path="/Slide5" element={<Slide5Page />} />

        {/* OUR STORY */}
        <Route path="/Philosophy" element={<PhilosophyPage />} />

        {/* KNOW MORE */}
        <Route path="/KnowMore" element={<KnowMorePage />} />

        {/* WHAT'S NEXT - TECHTORCH */}
        <Route
          path="/TechTorchView"
          element={<WhatNextPage />}
        />

        {/* WHAT'S NEXT - FIELD NOTE */}
        <Route
          path="/field-note"
          element={<FieldNotePage />}
        />


{/* INTEGRATED CAPABILITIES */}
<Route
  path="/integrated-capabilities"
  element={<IntegratedCapLayout />}
>
  <Route
    path="erp-integration"
    element={<ERPIntegration />}
  />
</Route>


        {/* WHAT'S NEXT - THINK AHEAD */}
        <Route
          path="/think-ahead"
          element={<ThinkAheadPage />}
        />

        {/* WHAT'S NEXT - CYBER SECURITY */}
        <Route
          path="/cyber-security"
          element={<CyberSecurityPage />}
        />

        <Route
          path="/Business-growth"
          element={<BusinessGrowthPage />}
        />

      {/* ADMIN PAGES */}

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
        path="/admin-dashboard"
        element={<AdminDashboard />}
      />
  <Route
  path="/News-Insights"
  element={<NewsInsights />}
/>


      {/* HOME */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* SLIDES */}

      <Route
        path="/Slide1"
        element={<Slide1Page />}
      />

      <Route
        path="/Slide2"
        element={<Slide2Page />}
      />

      <Route
        path="/Slide3"
        element={<Slide3Page />}
      />

      <Route
        path="/Slide4"
        element={<Slide4Page />}
      />

      <Route
        path="/Slide5"
        element={<Slide5Page />}
      />

    </Routes>
  );
}

export default App;