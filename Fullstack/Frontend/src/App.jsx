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
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/Footer";

// ================= SLIDE 1 PAGE =================
import Slide1 from "./components/hero1slides/Slide1.jsx";


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
      <HeroSlide02/>
      <HeroSlide04/>
    </div>
  );
}

function Slide2Page() {
  return (
    <div>
      <Hero02Slide02 />
    </div>
  );
}

// =================================================
// SLIDE 1 PAGE
// =================================================
function Slide1Page() {
  return (
    <div>
      <Slide1 />
      <Slide13 />
    </div>
  );
}

// =================================================
// SLIDE 2 PAGE
// =================================================
function Slide2Page() {
  return (
    <div>
      <Slide21 />
      <Slide25 />
    </div>
  );
}

// =================================================
// APP
// =================================================
function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* SLIDE 1 */}
      <Route
        path="/Slide1"
        element={<Slide1 />}
      />

      {/* SLIDE 2 */}
      <Route
        path="/Slide21"
        element={<Slide2Page />}
      />
    </Routes>
  );
}

export default App;