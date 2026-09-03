import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

// ================= COMPONENTS =================
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6"
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/Footer";

import HeroSlide01 from "./components/HeroSlides/HeroSlide01.jsx";
import HeroSlide02 from "./components/HeroSlides/HeroSlide02.jsx";
import HeroSlide03 from "./components/HeroSlides/HeroSlide03.jsx";
import HeroSlide04 from "./components/HeroSlides/HeroSlide04.jsx";


import Hero02Slide01 from "./components/Hero2Slides/Hero02Slide01.jsx";
import Hero02Slide02 from "./components/Hero2Slides/Hero02Slide02.jsx";
import Hero02Slide03 from "./components/Hero2Slides/Hero02Slide03.jsx";
import Hero02Slide04 from "./components/Hero2Slides/Hero02Slide04.jsx";
import Hero02Slide05 from "./components/Hero2Slides/Hero02Slide05.jsx";
import Hero02Slide06 from "./components/Hero2Slides/Hero02Slide06.jsx";

import Hero03Slide01 from "./components/Hero3Slides/Hero03Slide01.jsx";
import Hero03Slide02 from "./components/Hero3Slides/Hero03Slide02.jsx";
import Hero03Slide03 from "./components/Hero3Slides/Hero03Slide03.jsx";
import Hero03Slide04 from "./components/Hero3Slides/Hero03Slide04.jsx";
import Hero03Slide05 from "./components/Hero3Slides/Hero03Slide05.jsx";
import Hero03Slide06 from "./components/Hero3Slides/Hero03Slide06.jsx";
import Hero03Slide07 from "./components/Hero3Slides/Hero03Slide07.jsx";

import Hero04Slide01 from "./components/Hero4Slides/Hero04Slide01.jsx";
import Hero04Slide02 from "./components/Hero4Slides/Hero04Slide02.jsx";
import Hero04Slide03 from "./components/Hero4Slides/Hero04Slide03.jsx";
import Hero04Slide04 from "./components/Hero4Slides/Hero04Slide04.jsx";
import Hero04Slide05 from "./components/Hero4Slides/Hero04Slide05.jsx";

import Hero05Slide01 from "./components/Hero5Slides/Hero05Slide01.jsx";
import Hero05Slide02 from "./components/Hero5Slides/Hero05Slide02.jsx";
import Hero05Slide03 from "./components/Hero5Slides/Hero05Slide03.jsx";
import Hero05Slide04 from "./components/Hero5Slides/Hero05Slide04.jsx";


// Hero2 sections


import PhiosophySection from "./pages/OurStory/PhilosophySection.jsx";
import EnterpriseHero from "./pages/OurStory/EnterpriseReadiness.jsx";
import ScaleAtSpeed from "./pages/OurStory/ScaleAtSpeed.jsx";
import CoreFoundation from "./pages/OurStory/CoreFoundation.jsx";
import StrategicCapabilities from "./pages/OurStory/StrategicCapabilities.jsx";


// =================================================
// HOME PAGE
// =================================================
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

function Slide1Page() {
  return (
    <div>
      <HeroSlide01 />
      <HeroSlide02 />
      <HeroSlide03 />
      <HeroSlide04 />
    </div>
  );
}

function Slide2Page() {
  return (
    <div>
      <Hero02Slide01 />
      <Hero02Slide02 />
      <Hero02Slide03 />
      <Hero02Slide04 />
      <Hero02Slide05 />
      <Hero02Slide06 />
    </div>
  );
}

function Slide3Page() {
  return (
    <div>
      <Hero03Slide01 />
      <Hero03Slide02 />
      <Hero03Slide03 />
      <Hero03Slide04 />
      <Hero03Slide05 />
      <Hero03Slide06 />
      <Hero03Slide07 />
    </div>
  );
}

function Slide4Page() {
  return (
    <div>
      <Hero04Slide01 />
      <Hero04Slide02 />
      <Hero04Slide03 />
      <Hero04Slide04 />
      <Hero04Slide05 />
    </div>
  );
}
function Slide5Page() {
  return (
    <div>
      <Hero05Slide01 />
      <Hero05Slide02 />
      <Hero05Slide03 />
      <Hero05Slide04 />
    </div>
  );
}


function PhilosophyPage() {
  return (
    <div>
      <EnterpriseHero />
      <CoreFoundation />
      <ScaleAtSpeed />
      <StrategicCapabilities />
      <PhiosophySection />
      
    </div>
  );
}

// =================================================
// APP
// =================================================
function App() {
  return (
    <Routes>

      {/* ================= HOME PAGE ================= */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* ================= SLIDE 1 / SOLUTIONS PAGE ================= */}
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

      <Route
        path="/Philosophy"
        element={<PhilosophyPage />}
      />
    </Routes>
  );
}

export default App;