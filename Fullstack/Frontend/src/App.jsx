import React from "react";
import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";

// ================= COMMON COMPONENTS =================
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

// ================= OUR STORY =================
import PhiosophySection from "./pages/OurStory/PhilosophySection.jsx";
import EnterpriseHero from "./pages/OurStory/EnterpriseReadiness.jsx";
import ScaleAtSpeed from "./pages/OurStory/ScaleAtSpeed.jsx";
import CoreFoundation from "./pages/OurStory/CoreFoundation.jsx";
import StrategicCapabilities from "./pages/OurStory/StrategicCapabilities.jsx";
import TransformationForm from "./pages/OurStory/TransformationForm.jsx";

// ================= KNOW MORE =================
import EnterpriseAcceleration from "./pages/KnowMore/EnterpriseAcceleration.jsx";
import PracticalIntelligence from "./pages/KnowMore/PracticalIntelligence.jsx";
import ProvenImpact from "./pages/KnowMore/ProvenImpact.jsx";
import TransformationReady from "./pages/KnowMore/TransformationReady.jsx";

// ================= WHAT'S NEXT =================
// import TechTorchView from "./pages/What'sNext/TechTorchView.jsx";
// import Philosophy from "./pages/What'sNext/Philosophy.jsx";
// import Capabilities from "./pages/What'sNext/Capabilities.jsx";
// import Methodology from "./pages/What'sNext/DeploymentMethodology.jsx";
// import ReadyScale from "./pages/What'sNext/ReadyScale.jsx";

// ================= TECHTORCH VIEW =================
import TechTorchView from "./pages/What'sNext/TechTorchView/TechTorchView.jsx";
import Philosophy from "./pages/What'sNext/TechTorchView/Philosophy.jsx";
import Capabilities from "./pages/What'sNext/TechTorchView/Capabilities.jsx";
import Methodology from "./pages/What'sNext/TechTorchView/DeploymentMethodology.jsx";
import ReadyScale from "./pages/What'sNext/TechTorchView/ReadyScale.jsx";

// ================= FIELD NOTE =================
import Banner from "./pages/What'sNext/FieldNote/Banner.jsx";
import TechnologySection from "./pages/What'sNext/FieldNote/TechnologySection.jsx";
import ConnectSection from "./pages/What'sNext/FieldNote/ConnectSection.jsx";
import OperationalAdvantage from "./pages/What'sNext/FieldNote/OperationalAdvantage.jsx";
import IntegratedCapabilities from "./pages/What'sNext/FieldNote/IntegratedCapabilities.jsx";

// ================= INTEGRATED CAPABILITIES =================
import IntegratedCapLayout from "./pages/What'sNext/FieldNote/IntegratedCapabilities/IntegratedCapLayout.jsx";
import ERPIntegration from "./pages/What'sNext/FieldNote/IntegratedCapabilities/ERPIntegration.jsx";
import OpManagement from "./pages/What'sNext/FieldNote/IntegratedCapabilities/OpManagement.jsx";
import DataOrchestration from "./pages/What'sNext/FieldNote/IntegratedCapabilities/DataOrchestration.jsx";
import Legacy from "./pages/What'sNext/FieldNote/IntegratedCapabilities/Legacy.jsx";

// ================= THINK AHEAD =================
import ReadSection from "./pages/What'sNext/ThinkAhead/ReadSection.jsx";
import Technologyarticlesection from "./pages/What'sNext/ThinkAhead/Technologyarticlesection.jsx";
import EcosystemHeroSection from "./pages/What'sNext/ThinkAhead/Ecosystem.jsx";
import PerspectiveSection from "./pages/What'sNext/ThinkAhead/Perspectivesection.jsx";

// ================= CYBER SECURITY =================
import WhatsNextSection from "./pages/What'sNext/CyberSecurity/WhatNextSection.jsx";
import CyberSecurityHeroSection from "./pages/What'sNext/CyberSecurity/CyberSecurityHeroSection.jsx";
import SecurityCapabilitiesSection from "./pages/What'sNext/CyberSecurity/SecurityCapabilities.jsx";
import ResiliencePillarsSection from "./pages/What'sNext/CyberSecurity/Resiliencepillarssection.jsx";
import SecurityOutcomes from "./pages/What'sNext/CyberSecurity/SecurityOutcomes.jsx";
import SecurityPerspectiveSection from "./pages/What'sNext/CyberSecurity/Securityperspectivesection.jsx";
import AboutSecurity from "./pages/What'sNext/CyberSecurity/AboutSecurity.jsx";
import SecurityChallenge from "./pages/What'sNext/CyberSecurity/SecurityChallenge.jsx";
import EditorialReflection from "./pages/What'sNext/CyberSecurity/EditorialReflection.jsx";
import OurApproach from "./pages/What'sNext/CyberSecurity/OurApproach.jsx";
import WhyTechtorch from "./pages/What'sNext/CyberSecurity/WhyTechtorch.jsx";

// ================= BUSINESS GROWTH =================
import GrowWithBusinessSection from "./pages/What'sNext/BusinessGrowth/GrowwTechnology.jsx";
import PurspectiveSection from "./pages/What'sNext/BusinessGrowth/PurspectiveSection.jsx";
import ArchitectureSection from "./pages/What'sNext/BusinessGrowth/ArchitectureSection.jsx";
import MethodologySection from "./pages/What'sNext/BusinessGrowth/MethodologySection.jsx";
import EcosystemCapabilitiesSection from "./pages/What'sNext/BusinessGrowth/EcosystemCapabilities.jsx";
import TechnologyCapabilities from "./pages/What'sNext/BusinessGrowth/TechnologyCapabilties.jsx";
import CoreEngineering from "./pages/What'sNext/BusinessGrowth/CoreEngineering.jsx";
import MarketExpertiseSection from "./pages/What'sNext/BusinessGrowth/MarketExpertise.jsx";
import InstitutionalCommitmentSection from "./pages/What'sNext/BusinessGrowth/InstitutionalCommitment.jsx";
import ParadigmSection from "./pages/What'sNext/BusinessGrowth/ParadigmSection.jsx";

// ================= TECH PULSE =================
import DataDecisions from "./pages/What'sNext/TechPulse/DataDecisions.jsx";
import PerspectiveAnalysis from "./pages/What'sNext/TechPulse/PerspectiveAnalysis.jsx";
import StrategicInquiry from "./pages/What'sNext/TechPulse/StrategicInquiry.jsx";
import StructuredMethodology from "./pages/What'sNext/TechPulse/StructuredMethodology.jsx";
import OperationalImpact from "./pages/What'sNext/TechPulse/OperationalImpact.jsx";
import Automation from "./pages/What'sNext/TechPulse/Automation.jsx";
import CrossFunctional from "./pages/What'sNext/TechPulse/CrossFunctional.jsx";
import Discipline from "./pages/What'sNext/TechPulse/Discipline.jsx";

// ================= DIGITAL SOLUTIONS =================

import EnterpriseSolution from "./pages/What'sNext/TechPulse/DigitalSolution/Enterprisesolution.jsx";
import SystemicAgility from "./pages/What'sNext/TechPulse/DigitalSolution/SystemicAgility.jsx";


// =================================================
// COMMON LAYOUT
// =================================================
function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

// =================================================
// HOME PAGE
// =================================================
function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </>
  );
}

// =================================================
// SLIDE 1 PAGE
// =================================================
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

// =================================================
// SLIDE 2 PAGE
// =================================================
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

// =================================================
// SLIDE 3 PAGE
// =================================================
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

// =================================================
// SLIDE 4 PAGE
// =================================================
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

// =================================================
// SLIDE 5 PAGE
// =================================================
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

// =================================================
// OUR STORY PAGE
// =================================================
function PhilosophyPage() {
  return (
    <>
      <EnterpriseHero />
      <CoreFoundation />
      <ScaleAtSpeed />
      <StrategicCapabilities />
      <PhiosophySection />
      <TransformationForm />
    </>
  );
}

// =================================================
// KNOW MORE PAGE
// =================================================
function KnowMorePage() {
  return (
    <>
      <EnterpriseAcceleration />
      <TransformationReady />
      <ProvenImpact />
      <PracticalIntelligence />
    </>
  );
}

// =================================================
// TECHTORCH VIEW PAGE
// =================================================
function WhatNextPage() {
  return (
    <>
      <TechTorchView />
      <Philosophy />
      <Capabilities />
      <Methodology />
      <ReadyScale />
    </>
  );
}

// =================================================
// FIELD NOTE PAGE
// =================================================
function FieldNotePage() {
  return (
    <>
      <Banner />
      <TechnologySection />
      <ConnectSection />
      <OperationalAdvantage />
      <IntegratedCapabilities />
    </>
  );
}


// =================================================
// THINK AHEAD PAGE
// =================================================

function ThinkAheadPage() {
  return (
    <>
      <ReadSection />
      <Technologyarticlesection />
      <PerspectiveSection />
      <EcosystemHeroSection />
    </>
  );
}

// =================================================
// CYBER SECURITY PAGE
// =================================================
function CyberSecurityPage() {
  return (
    <>
      <CyberSecurityHeroSection />
      <SecurityPerspectiveSection />
      <SecurityChallenge />
      <OurApproach />
      <SecurityCapabilitiesSection />
      <ResiliencePillarsSection />
      <WhyTechtorch />
      <SecurityOutcomes />
      <EditorialReflection />
      <AboutSecurity />
      <WhatsNextSection />
    </>
  );
}
function BusinessGrowthPage() {
  return (
    <>
      <GrowWithBusinessSection />
      <PurspectiveSection />
      <ArchitectureSection />
      <MethodologySection />
      <EcosystemCapabilitiesSection />
      <TechnologyCapabilities />
      <CoreEngineering />
      <MarketExpertiseSection />
      <InstitutionalCommitmentSection />
      <ParadigmSection />
    </>
  );
}

function TechPulsePage() {
  return (
    <>
      <DataDecisions />
      <PerspectiveAnalysis />
      <StrategicInquiry />
      <StructuredMethodology />
      <OperationalImpact />
      <Automation />
      <CrossFunctional />
      <Discipline />
    </>
  );
}
function DigitalSolution() {
  return (
    <>
      <EnterpriseSolution />
      <SystemicAgility />
    </>
  );
}

// =================================================
// APP ROUTES
// =================================================
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

          <Route
            path="operations-management"
            element={<OpManagement />}
          />
          <Route
            path="data-orchestration"
            element={<DataOrchestration />}
          />
          <Route
            path="legacy-modernization"
            element={<Legacy />}
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

        <Route
          path="/data-decisions"
          element={<TechPulsePage />}
        />

        {/* DIGITAL SOLUTIONS */}
        <Route
          path="/digital-solutions"
          element={<DigitalSolution />}
        />

      </Route>
    </Routes>
  );
}

export default App;