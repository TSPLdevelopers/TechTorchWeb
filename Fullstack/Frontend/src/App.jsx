import React, { useEffect } from "react";
import "./App.css";

import {
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

// =================================================
// COMMON COMPONENTS
// =================================================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// =================================================
// HOME COMPONENTS
// =================================================
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Section4 from "./components/Section4";
// import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/section7";
import Section8 from "./components/section8";
import Section9 from "./components/section9";

// =================================================
// HERO SLIDE 1
// =================================================
import HeroSlide01 from "./components/HeroSlides/HeroSlide01.jsx";
import HeroSlide02 from "./components/HeroSlides/HeroSlide02.jsx";
import HeroSlide03 from "./components/HeroSlides/HeroSlide03.jsx";
import HeroSlide04 from "./components/HeroSlides/HeroSlide04.jsx";

// =================================================
// HERO SLIDE 2
// =================================================
import Hero02Slide01 from "./components/Hero2Slides/Hero02Slide01.jsx";
import Hero02Slide02 from "./components/Hero2Slides/Hero02Slide02.jsx";
import Hero02Slide03 from "./components/Hero2Slides/Hero02Slide03.jsx";
import Hero02Slide04 from "./components/Hero2Slides/Hero02Slide04.jsx";
import Hero02Slide05 from "./components/Hero2Slides/Hero02Slide05.jsx";
import Hero02Slide06 from "./components/Hero2Slides/Hero02Slide06.jsx";

// =================================================
// HERO SLIDE 3
// =================================================
import Hero03Slide01 from "./components/Hero3Slides/Hero03Slide01.jsx";
import Hero03Slide02 from "./components/Hero3Slides/Hero03Slide02.jsx";
import Hero03Slide03 from "./components/Hero3Slides/Hero03Slide03.jsx";
import Hero03Slide04 from "./components/Hero3Slides/Hero03Slide04.jsx";
import Hero03Slide05 from "./components/Hero3Slides/Hero03Slide05.jsx";
import Hero03Slide06 from "./components/Hero3Slides/Hero03Slide06.jsx";
import Hero03Slide07 from "./components/Hero3Slides/Hero03Slide07.jsx";

// =================================================
// HERO SLIDE 4
// =================================================
import Hero04Slide01 from "./components/Hero4Slides/Hero04Slide01.jsx";
import Hero04Slide02 from "./components/Hero4Slides/Hero04Slide02.jsx";
import Hero04Slide03 from "./components/Hero4Slides/Hero04Slide03.jsx";
import Hero04Slide04 from "./components/Hero4Slides/Hero04Slide04.jsx";
import Hero04Slide05 from "./components/Hero4Slides/Hero04Slide05.jsx";

// =================================================
// HERO SLIDE 5
// =================================================
import Hero05Slide01 from "./components/Hero5Slides/Hero05Slide01.jsx";
import Hero05Slide02 from "./components/Hero5Slides/Hero05Slide02.jsx";
import Hero05Slide03 from "./components/Hero5Slides/Hero05Slide03.jsx";
import Hero05Slide04 from "./components/Hero5Slides/Hero05Slide04.jsx";

// =================================================
// OUR STORY
// =================================================
import PhiosophySection from "./pages/OurStory/PhilosophySection.jsx";
import EnterpriseHero from "./pages/OurStory/EnterpriseReadiness.jsx";
import ScaleAtSpeed from "./pages/OurStory/ScaleAtSpeed.jsx";
import CoreFoundation from "./pages/OurStory/CoreFoundation.jsx";
import StrategicCapabilities from "./pages/OurStory/StrategicCapabilities.jsx";
import TransformationForm from "./pages/OurStory/TransformationForm.jsx";

// =================================================
// KNOW MORE
// =================================================
import EnterpriseAcceleration from "./pages/KnowMore/EnterpriseAcceleration.jsx";
import PracticalIntelligence from "./pages/KnowMore/PracticalIntelligence.jsx";
import ProvenImpact from "./pages/KnowMore/ProvenImpact.jsx";
import TransformationReady from "./pages/KnowMore/TransformationReady.jsx";

// =================================================
// TECHTORCH VIEW
// =================================================
import TechTorchView from "./pages/What'sNext/TechTorchView/TechTorchView.jsx";
import Philosophy from "./pages/What'sNext/TechTorchView/Philosophy.jsx";
import Capabilities from "./pages/What'sNext/TechTorchView/Capabilities.jsx";
import Methodology from "./pages/What'sNext/TechTorchView/DeploymentMethodology.jsx";
import ReadyScale from "./pages/What'sNext/TechTorchView/ReadyScale.jsx";

// =================================================
// FIELD NOTE
// =================================================
import Banner from "./pages/What'sNext/FieldNote/Banner.jsx";
import TechnologySection from "./pages/What'sNext/FieldNote/TechnologySection.jsx";
import ConnectSection from "./pages/What'sNext/FieldNote/ConnectSection.jsx";
import OperationalAdvantage from "./pages/What'sNext/FieldNote/OperationalAdvantage.jsx";
import IntegratedCapabilities from "./pages/What'sNext/FieldNote/IntegratedCapabilities.jsx";

// =================================================
// INTEGRATED CAPABILITIES
// =================================================
import IntegratedCapLayout from "./pages/What'sNext/FieldNote/IntegratedCapabilities/IntegratedCapLayout.jsx";
import ERPIntegration from "./pages/What'sNext/FieldNote/IntegratedCapabilities/ERPIntegration.jsx";
import OpManagement from "./pages/What'sNext/FieldNote/IntegratedCapabilities/OpManagement.jsx";
import DataOrchestration from "./pages/What'sNext/FieldNote/IntegratedCapabilities/DataOrchestration.jsx";
import Legacy from "./pages/What'sNext/FieldNote/IntegratedCapabilities/Legacy.jsx";

// =================================================
// THINK AHEAD
// =================================================
import ReadSection from "./pages/What'sNext/ThinkAhead/ReadSection.jsx";
import Technologyarticlesection from "./pages/What'sNext/ThinkAhead/Technologyarticlesection.jsx";
import EcosystemHeroSection from "./pages/What'sNext/ThinkAhead/Ecosystem.jsx";
import PerspectiveSection from "./pages/What'sNext/ThinkAhead/Perspectivesection.jsx";

// =================================================
// CYBER SECURITY
// =================================================
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

// =================================================
// SECURE BUSINESS
// =================================================
import SecurityInitiative from "./pages/What'sNext/CyberSecurity/SecureBusiness/SecurityInitiative.jsx";
import ProtocolDelivery from "./pages/What'sNext/CyberSecurity/SecureBusiness/ProtocolDelivery.jsx";
import SelectionEngine from "./pages/What'sNext/CyberSecurity/SecureBusiness/SelectionEngine.jsx";
import AdvisoryFramework from "./pages/What'sNext/CyberSecurity/SecureBusiness/AdvisoryFramework.jsx";

// =================================================
// ENGAGEMENT PROTOCOL
// =================================================
import ViewEngagementProtocol from "./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/ViewEngagementProtocol.jsx";
import AcceptProceed from "./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/AcceptProceed.jsx";
import ExportProtocolPackage from "./pages/What'sNext/CyberSecurity/SecureBusiness/EngagementProtocol/ExportProtocolPackage.jsx";

// =================================================
// SCHEDULE ADVISORY
// =================================================
import AdvisoryDesk from "./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/AdvisoryDesk";
import DispatchConsole from "./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/DispatchConsole.jsx";
import TimeboxProtocol from "./pages/What'sNext/CyberSecurity/SecureBusiness/ScheduleAdvisoryBriefing/TimeboxProtocol.jsx";

// =================================================
// BUSINESS GROWTH
// =================================================
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

// =================================================
// TECH PULSE
// =================================================
import DataDecisions from "./pages/What'sNext/TechPulse/DataDecisions.jsx";
import PerspectiveAnalysis from "./pages/What'sNext/TechPulse/PerspectiveAnalysis.jsx";
import StrategicInquiry from "./pages/What'sNext/TechPulse/StrategicInquiry.jsx";
import StructuredMethodology from "./pages/What'sNext/TechPulse/StructuredMethodology.jsx";
import OperationalImpact from "./pages/What'sNext/TechPulse/OperationalImpact.jsx";
import Automation from "./pages/What'sNext/TechPulse/Automation.jsx";
import CrossFunctional from "./pages/What'sNext/TechPulse/CrossFunctional.jsx";
import Discipline from "./pages/What'sNext/TechPulse/Discipline.jsx";
import ExecutiveStrategy from "./pages/What'sNext/TechPulse/ExecutiveStrategy.jsx";

// =================================================
// DIGITAL SOLUTIONS
// =================================================
import EnterpriseSolution from "./pages/What'sNext/TechPulse/DigitalSolution/Enterprisesolution.jsx";
import SystemicAgility from "./pages/What'sNext/TechPulse/DigitalSolution/SystemicAgility.jsx";
import ArchitectureLifecycle from "./pages/What'sNext/TechPulse/DigitalSolution/ArchitectureLifecycle.jsx";
import ValidatedSystems from "./pages/What'sNext/TechPulse/DigitalSolution/ValidatedSystem.jsx";

// =================================================
// CAPABILITIES - PLATFORM
// =================================================
import Businessplatformshero from "./pages/Capabilities/Platform/Businessplatformshero.jsx";
import OurAproach from "./pages/Capabilities/Platform/OurAproach.jsx";
import OurPlatforms from "./pages/Capabilities/Platform/OurPlatforms.jsx";
import TechTorchPlatform from "./pages/Capabilities/Platform/TechTorchPlatform.jsx";
import DirectEnterprise from "./pages/Capabilities/Platform/DirectEnterprise.jsx";

// =================================================
// CAPABILITIES - DIGITAL SOLUTIONS
// =================================================
import DigitalSolutionHero from "./pages/Capabilities/DigitalSolution/DigitalSolutionHero.jsx";
import DigitalTransformation from "./pages/Capabilities/DigitalSolution/DigitalTransformation.jsx";
import OurDigitalSolution from "./pages/Capabilities/DigitalSolution/OurDigitalSolution.jsx";
import DiffrentIndustries from "./pages/Capabilities/DigitalSolution/DiffrentIndustries.jsx";
import ConnectedBusiness from "./pages/Capabilities/DigitalSolution/ConnectedBusiness.jsx";
import TechTorchTechnology from "./pages/Capabilities/DigitalSolution/TechTorchTechnology.jsx";
import RequirementReality from "./pages/Capabilities/DigitalSolution/RequirementReality.jsx";

// =================================================
// CAPABILITIES - OUR SERVICE
// =================================================
import OurServiceHero from "./pages/Capabilities/OurService/OurServiceHero.jsx";
import StrategicPerspective from "./pages/Capabilities/OurService/StrategicPerspective.jsx";
import PortfolioArchitecture from "./pages/Capabilities/OurService/PortfolioArchitecture.jsx";
import DeliveryBlueprint from "./pages/Capabilities/OurService/DeliveryBlueprint.jsx";
import TechnologyRoadmap from "./pages/Capabilities/OurService/TechnologyRoadmap.jsx";

// =================================================
// CAPABILITIES - ARTIFICIAL INTELLIGENCE
// =================================================
import AiService from "./pages/Capabilities/Ai/AiService.jsx";
import AiStrategic from "./pages/Capabilities/Ai/AiStrategic.jsx";
import AiAdvantage from "./pages/Capabilities/Ai/AiAdvantage.jsx";
import AiEcosystem from "./pages/Capabilities/Ai/AiEcosystem.jsx";
import AiEcosystemIntegration from "./pages/Capabilities/Ai/AiEcosystemIntegration.jsx";

// =================================================
// CAPABILITIES - IT AUGMENTATION
// =================================================
import ItWorkforceVelocity from "./pages/Capabilities/ItAugmentation/ItWorkforceVelocity.jsx";
import ItStrategicperspective from "./pages/Capabilities/ItAugmentation/ItStrategicperspective.jsx";
import ItFlexibleEngagement from "./pages/Capabilities/ItAugmentation/ItFlexibleEngagement.jsx";
import ItOperational from "./pages/Capabilities/ItAugmentation/ItOperational.jsx";

// =================================================
// CONTRACT STAFFING
// =================================================
import Contracthero from "./pages/Capabilities/ItAugmentation/ContractStaffing/Contracthero.jsx";
import CapabilityAnalysis from "./pages/Capabilities/ItAugmentation/ContractStaffing/CapabilityAnalysis.jsx";
import Pipeline from "./pages/Capabilities/ItAugmentation/ContractStaffing/Pipeline.jsx";

// =================================================
// CONTRACT TO HIRE
// =================================================
import ContractToHireHero from "./pages/Capabilities/ItAugmentation/ContractToHire/ContractToHireHero.jsx";
import CthFramework from "./pages/Capabilities/ItAugmentation/ContractToHire/CthFramework.jsx";
import BuildConfidence from "./pages/Capabilities/ItAugmentation/ContractToHire/BuildConfidence.jsx";

// =================================================
// DEDICATED DEVELOPMENT
// =================================================
import DdHero from "./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdHero.jsx";
import DdOverview from "./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdOverview.jsx";
import DdStrenghten from "./pages/Capabilities/ItAugmentation/DedicatedDevelopment/DdStrenghten.jsx";

// =================================================
// REMOTE ENGINEER
// =================================================
import ReHero from "./pages/Capabilities/ItAugmentation/RemoteEngineer/ReHero.jsx";
import CapabilityOverview from "./pages/Capabilities/ItAugmentation/RemoteEngineer/CapabilityOverview.jsx";
import ReStrengthen from "./pages/Capabilities/ItAugmentation/RemoteEngineer/ReStrengthen.jsx";

// =================================================
// PROJECT BASED HIRING
// =================================================
import PbhHero from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhHero.jsx";
import PbhExecutive from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhExecutive.jsx";
import PbhSpecialized from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhSpecialized.jsx";
import PbhProjectForward from "./pages/Capabilities/ItAugmentation/ProjectBasedHiring/PbhProjectForward.jsx";

// =================================================
// RESOURCE / BENCH / VENDOR
// =================================================
import RrMain from "./pages/Capabilities/ItAugmentation/ResourceReplacement/RrMain.jsx";
import BhMain from "./pages/Capabilities/ItAugmentation/BenchHiring/BhMain.jsx";
import VpMain from "./pages/Capabilities/ItAugmentation/VendorPartnership/VpMain.jsx";
import BecomePartner from "./pages/Capabilities/ItAugmentation/VendorPartnership/BecomePartner.jsx";

// =================================================
// MSP SUPPORT
// =================================================
import MSP1 from "./pages/Capabilities/ItAugmentation/MSPSupport/MSP1.jsx";
import MSP2 from "./pages/Capabilities/ItAugmentation/MSPSupport/MSP2.jsx";
import MSP3 from "./pages/Capabilities/ItAugmentation/MSPSupport/MSP3.jsx";
import DiscussPriorities from "./pages/Capabilities/ItAugmentation/MSPSupport/DiscussPriorities.jsx";
import ConnectMSP from "./pages/Capabilities/ItAugmentation/MSPSupport/ConnectMSP.jsx";


import OffshoreStrategy  from "./pages/Capabilities/ItAugmentation/OffshoreTeams/OffshoreStrategy.jsx";


// =================================================
// SCROLL TO TOP
// =================================================
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

// =================================================
// COMMON LAYOUT
// =================================================
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
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
      {/* <Section5 /> */}
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
// OUR STORY
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
// KNOW MORE
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
// TECHTORCH VIEW
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
// FIELD NOTE
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
// THINK AHEAD
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
// CYBER SECURITY
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

// =================================================
// SECURE BUSINESS
// =================================================
function SecureBusinessPage() {
  return (
    <>
      <SecurityInitiative />
      <ProtocolDelivery />
      <SelectionEngine />
      <AdvisoryFramework />
    </>
  );
}

// =================================================
// SCHEDULE ADVISORY
// =================================================
function ScheduleAdvisoryPage() {
  return (
    <>
      <AdvisoryDesk />
      <DispatchConsole />
      <TimeboxProtocol />
    </>
  );
}

// =================================================
// BUSINESS GROWTH
// =================================================
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

// =================================================
// TECH PULSE
// =================================================
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
      <ExecutiveStrategy />
    </>
  );
}

// =================================================
// DIGITAL SOLUTION
// =================================================
function DigitalSolution() {
  return (
    <>
      <EnterpriseSolution />
      <SystemicAgility />
      <ArchitectureLifecycle />
      <ValidatedSystems />
    </>
  );
}

// =================================================
// PLATFORM
// =================================================
function Platform() {
  return (
    <>
      <Businessplatformshero />
      <OurAproach />
      <OurPlatforms />
      <TechTorchPlatform />
      <DirectEnterprise />
    </>
  );
}

// =================================================
// DIGITAL SOLUTIONS - CAPABILITIES
// =================================================
function CapabilitiesDigitalSolution() {
  return (
    <>
      <DigitalSolutionHero />
      <DigitalTransformation />
      <OurDigitalSolution />
      <DiffrentIndustries />
      <ConnectedBusiness />
      <TechTorchTechnology />
      <RequirementReality />
    </>
  );
}

// =================================================
// OUR SERVICE
// =================================================
function OurServiceSection() {
  return (
    <>
      <OurServiceHero />
      <StrategicPerspective />
      <PortfolioArchitecture />
      <DeliveryBlueprint />
      <TechnologyRoadmap />
    </>
  );
}

// =================================================
// ARTIFICIAL INTELLIGENCE
// =================================================
function ArtificialIntelligent() {
  return (
    <>
      <AiService />
      <AiStrategic />
      <AiAdvantage />
      <AiEcosystem />
      <AiEcosystemIntegration />
    </>
  );
}

// =================================================
// IT AUGMENTATION
// =================================================
function ItAugmentational() {
  return (
    <>
      <ItWorkforceVelocity />
      <ItStrategicperspective />
      <ItFlexibleEngagement />
      <ItOperational />
    </>
  );
}

// =================================================
// CONTRACT STAFFING
// =================================================
function ContractStaffing() {
  return (
    <>
      <Contracthero />
      <CapabilityAnalysis />
      <Pipeline />
    </>
  );
}

// =================================================
// CONTRACT TO HIRE
// =================================================
function ContractToHire() {
  return (
    <>
      <ContractToHireHero />
      <CthFramework />
      <BuildConfidence />
    </>
  );
}

// =================================================
// DEDICATED DEVELOPMENT
// =================================================
function DedicatedDevelopment() {
  return (
    <>
      <DdHero />
      <DdOverview />
      <DdStrenghten />
    </>
  );
}

// =================================================
// REMOTE ENGINEERS
// =================================================
function RemoteEngineers() {
  return (
    <>
      <ReHero />
      <CapabilityOverview />
      <ReStrengthen />
    </>
  );
}

// =================================================
// PROJECT BASED HIRING
// =================================================
function ProjectBasedHiring() {
  return (
    <>
      <PbhHero />
      <PbhExecutive />
      <PbhSpecialized />
      <PbhProjectForward />
    </>
  );
}

// =================================================
// RESOURCE REPLACEMENT
// =================================================
function ResourceReplacement() {
  return (
    <>
      <RrMain />
    </>
  );
}

// =================================================
// BENCH HIRING
// =================================================
function BenchHiring() {
  return (
    <>
      <BhMain />
    </>
  );
}

// =================================================
// VENDOR PARTNERSHIP
// =================================================
function VendorPartnership() {
  return (
    <>
      <VpMain />
    </>
  );
}

// =================================================
// MSP SUPPORT
// =================================================
function MSPSupport() {
  return (
    <>
      <MSP1 />
      <MSP2 />
      <MSP3 />
    </>
  );
}

function OffshoreTeams() {
  return (
    <>
     <OffshoreStrategy/>
    </>
  );
}

// =================================================
// APP
// =================================================
function App() {
  return (
    <>
      {/* Always move to top when route changes */}
      <ScrollToTop />

      <Routes>

        {/* =================================================
            ALL PAGES USE SAME NAVBAR + FOOTER
        ================================================= */}
        <Route element={<MainLayout />}>

          {/* ================= HOME ================= */}
          <Route path="/" element={<Home />} />

          {/* ================= SLIDES ================= */}
          <Route path="/Slide1" element={<Slide1Page />} />
          <Route path="/Slide2" element={<Slide2Page />} />
          <Route path="/Slide3" element={<Slide3Page />} />
          <Route path="/Slide4" element={<Slide4Page />} />
          <Route path="/Slide5" element={<Slide5Page />} />

          {/* ================= OUR STORY ================= */}
          <Route
            path="/Philosophy"
            element={<PhilosophyPage />}
          />

          {/* ================= KNOW MORE ================= */}
          <Route
            path="/KnowMore"
            element={<KnowMorePage />}
          />

          {/* ================= TECHTORCH VIEW ================= */}
          <Route
            path="/TechTorchView"
            element={<WhatNextPage />}
          />

          {/* ================= FIELD NOTE ================= */}
          <Route
            path="/field-note"
            element={<FieldNotePage />}
          />

          {/* ================= INTEGRATED CAPABILITIES ================= */}
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

          {/* ================= THINK AHEAD ================= */}
          <Route
            path="/think-ahead"
            element={<ThinkAheadPage />}
          />

          {/* ================= CYBER SECURITY ================= */}
          <Route
            path="/cyber-security"
            element={<CyberSecurityPage />}
          />

          {/* ================= SECURE BUSINESS ================= */}
          <Route
            path="/secure-business"
            element={<SecureBusinessPage />}
          />

          {/* ================= SCHEDULE ADVISORY ================= */}
          <Route
            path="/schedule-advisory"
            element={<ScheduleAdvisoryPage />}
          />

          {/* ================= ENGAGEMENT PROTOCOL ================= */}
          <Route
            path="/engagement-protocol"
            element={<ViewEngagementProtocol />}
          />

          <Route
            path="/accept-proceed"
            element={<AcceptProceed />}
          />

          <Route
            path="/export-protocol"
            element={<ExportProtocolPackage />}
          />

          {/* ================= BUSINESS GROWTH ================= */}
          <Route
            path="/Business-growth"
            element={<BusinessGrowthPage />}
          />

          {/* ================= TECH PULSE ================= */}
          <Route
            path="/data-decisions"
            element={<TechPulsePage />}
          />

          {/* ================= DIGITAL SOLUTION ================= */}
          <Route
            path="/digital-solutions"
            element={<DigitalSolution />}
          />

          {/* =================================================
              CAPABILITIES
          ================================================= */}

          {/* PLATFORM */}
          <Route
            path="/platform"
            element={<Platform />}
          />

          {/* DIGITAL SOLUTION */}
          <Route
            path="/digitalsolution"
            element={<CapabilitiesDigitalSolution />}
          />

          {/* OUR SERVICE */}
          <Route
            path="/OurService"
            element={<OurServiceSection />}
          />

          {/* ARTIFICIAL INTELLIGENCE */}
          <Route
            path="/ArtificialIntelligent"
            element={<ArtificialIntelligent />}
          />

          {/* IT AUGMENTATION */}
          <Route
            path="/ItAugmentation"
            element={<ItAugmentational />}
          />

          {/* =================================================
              STAFFING
          ================================================= */}

          {/* CONTRACT STAFFING */}
          <Route
            path="/Contract-Staffing"
            element={<ContractStaffing />}
          />

          {/* CONTRACT TO HIRE */}
          <Route
            path="/contract-to-hire"
            element={<ContractToHire />}
          />

          {/* DEDICATED DEVELOPMENT */}
          <Route
            path="/Dedicated-Development-Teams"
            element={<DedicatedDevelopment />}
          />

          {/* REMOTE ENGINEERS */}
          <Route
            path="/remote-engineers"
            element={<RemoteEngineers />}
          />

          {/* PROJECT BASED HIRING */}
          <Route
            path="/project-based-hiring"
            element={<ProjectBasedHiring />}
          />

          {/* RESOURCE REPLACEMENT */}
          <Route
            path="/resource-replacement"
            element={<ResourceReplacement />}
          />

          {/* BENCH HIRING */}
          <Route
            path="/bench-hiring"
            element={<BenchHiring />}
          />

          {/* VENDOR PARTNERSHIP */}
          <Route
            path="/vendor-partnership"
            element={<VendorPartnership />}
          />

          {/* BECOME PARTNER */}
          <Route
            path="/become-partner"
            element={<BecomePartner />}
          />

          {/* MSP SUPPORT */}
          <Route
            path="/msp-support"
            element={<MSPSupport />}
          />

          {/* MSP SUB PAGES */}
          <Route
            path="/discuss-priorities"
            element={<DiscussPriorities />}
          />

          <Route
            path="/connect-msp"
            element={<ConnectMSP />}
          />
           
           <Route
            path="/offshore-teams"
            element={<OffshoreTeams />}
          />
        </Route>

      </Routes>
    </>
  );
}

export default App;