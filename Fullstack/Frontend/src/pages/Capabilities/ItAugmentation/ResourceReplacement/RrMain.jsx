import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  ShieldCheck,
  UserCog,
  ArrowLeftRight,
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  RefreshCw,
  Search,
  CheckCircle2,
  Repeat2,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const heroTags = [
  "Skilled Resources",
  "Flexible Support",
  "Project Continuity",
];

const pillars = [
  {
    badge: "PILLAR 01",
    title: "Continuous Project Momentum",
    description:
      "Minimise delivery disruption and maintain critical engineering timelines through planned resource alignment.",
    linkLabel: "Supporting Engineering Continuity",
  },
  {
    badge: "PILLAR 02",
    title: "Rapid Knowledge Handover",
    description:
      "A practical transition approach designed to help incoming resources understand your technology environment, project context, and team workflows.",
    linkLabel: "Contextual codebase & process onboarding",
  },
];

const approachCards = [
  {
    icon: UserCog,
    number: "01",
    title: "Skill-Aligned Replacement",
    description:
      "Identify technical capabilities based on your project requirements, technology environment, and existing team structure.",
    tags: [
      "Relevant Expertise",
      "Technical Skills",
      "Project Requirements",
    ],
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Smooth Team Transition",
    description:
      "Support a practical transition when a technology resource needs to be replaced, helping the incoming resource understand the project environment and responsibilities.",
    tags: [
      "Knowledge Transfer",
      "Team Collaboration",
      "Project Context",
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Flexible Workforce Support",
    description:
      "Access skilled technology professionals when your project or business requirements change, complementing your existing workforce with flexible resource support.",
    tags: [
      "Skilled Professionals",
      "Flexible Resources",
      "Team Support",
    ],
  },
];

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Software Development",
    description:
      "Support development projects with technical resources aligned with your software requirements and business objectives.",
    tag: "Enterprise Aligned",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Web & Mobile Application Development",
    description:
      "Strengthen web and mobile development teams with professionals suited to your application requirements.",
    tag: "Full-Stack & Native",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Enterprise Software Solutions",
    description:
      "Support enterprise applications and business systems with relevant technical capabilities.",
    tag: "ERP & Core Systems",
  },
  {
    icon: Workflow,
    number: "04",
    title: "API Development & System Integration",
    description:
      "Provide technical support for APIs, integrations, and connected application environments.",
    tag: "Secure REST & Microservices",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality Assurance & Testing",
    description:
      "Strengthen testing activities with resources supporting software quality, functionality, performance, and usability.",
    tag: "Functional & Automated QA",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Software Modernization",
    description:
      "Support modernization initiatives involving existing applications, legacy systems, and updated technology approaches.",
    tag: "Legacy to Cloud & Modern Stack",
  },
];

const phases = [
  {
    icon: Search,
    phase: "PHASE 1: DISCOVERY",
    number: "01",
    title: "Understand",
    description:
      "We understand your project requirements, technology environment, and the capabilities needed for the role.",
    tag: "Needs & Tech Profile",
  },
  {
    icon: CheckCircle2,
    phase: "PHASE 2: ALIGNMENT",
    number: "02",
    title: "Identify",
    description:
      "The required technical expertise and resource profile are identified against your project needs.",
    tag: "Capability Matching",
  },
  {
    icon: Repeat2,
    phase: "PHASE 3: INTEGRATION",
    number: "03",
    title: "Transition",
    description:
      "The selected resource can work with your existing team and project environment to support a practical transition.",
    tag: "Team Integration",
  },
  {
    icon: Zap,
    phase: "PHASE 4: MOMENTUM",
    number: "04",
    title: "Support",
    description:
      "The resource contributes to ongoing project activities based on your technical requirements and business priorities.",
    tag: "Continuous Velocity",
    active: true,
  },
];

const whyCards = [
  {
    title: "Relevant Technical Expertise",
    description:
      "Access professionals based on your project's technology and skill requirements.",
  },
  {
    title: "Flexible Resource Support",
    description:
      "Strengthen your team when workforce or technical requirements change.",
  },
  {
    title: "Project-Focused Collaboration",
    description:
      "Resources can work alongside your existing teams and development processes.",
  },
  {
    title: "Broader Technology Capabilities",
    description:
      "Access support across software development, applications, integration, testing, modernization, and maintenance.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ResourceReplacementPage() {
  return (
    <div className="resource-replacement-page">
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        .resource-replacement-page {
          width: 100%;
          min-height: 100vh;
          background: #f8f7f5;
          color: #1c1c1c;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .rr-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          box-sizing: border-box;
        }

        .rr-jakarta {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .rr-inter {
          font-family: "Inter", sans-serif;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .rr-hero {
          padding-top: 64px;
          padding-bottom: 48px;
        }

        .rr-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          gap: 64px;
          align-items: center;
          margin-bottom: 42px;
        }

        .rr-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .rr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          background: #fff0f4;
          color: #7a1338;
          border-radius: 999px;
          padding: 7px 12px;
          margin-bottom: 22px;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .rr-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7a1338;
          flex-shrink: 0;
        }

        .rr-hero-title {
          max-width: 700px;
          margin: 0 0 20px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          line-height: 1.13;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: #1c1c1c;
        }

        .rr-hero-description {
          max-width: 570px;
          margin: 0 0 26px;
          font-family: "Inter", sans-serif;
          font-size: 14.5px;
          line-height: 1.7;
          color: #737373;
        }

        .rr-primary-button {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          border-radius: 7px;
          background: #7a1338;
          color: #ffffff;
          padding: 13px 24px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
          margin-bottom: 24px;
        }

        .rr-primary-button:hover {
          background: #5c0e2b;
          transform: translateY(-1px);
        }

        .rr-primary-button svg {
          width: 16px;
          height: 16px;
        }

        .rr-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .rr-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 999px;
          padding: 7px 12px;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 500;
        }

        .rr-hero-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7a1338;
        }

        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .rr-image-card {
          width: 100%;
          overflow: hidden;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }

        .rr-image {
          position: relative;
          width: 100%;
          height: 310px;
          overflow: hidden;
        }

        .rr-image-background {
          position: absolute;
          inset: 0;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        .rr-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.6),
            transparent 65%
          );
        }

        .rr-image-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          color: #ffffff;
          border-radius: 999px;
          padding: 6px 10px;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
        }

        .rr-image-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
        }

        .rr-image-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 16px;
        }

        .rr-image-footer-left {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
        }

        .rr-image-footer-left svg {
          width: 14px;
          height: 14px;
          color: #7a1338;
          flex-shrink: 0;
        }

        .rr-image-footer-right {
          color: #999999;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
        }

        /* =====================================================
           PILLARS
        ===================================================== */

        .rr-pillars {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .rr-pillar {
          padding: 24px;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          background: #ffffff;
        }

        .rr-pillar-badge {
          margin-bottom: 10px;
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .rr-pillar-title {
          margin: 0 0 9px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 600;
        }

        .rr-pillar-description {
          margin: 0 0 16px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        .rr-pillar-link {
          padding-top: 13px;
          border-top: 1px solid #eeeeee;
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 600;
        }

        /* =====================================================
           SECTION COMMON
        ===================================================== */

        .rr-section {
          width: 100%;
        }

        .rr-section-container {
          padding-top: 42px;
          padding-bottom: 42px;
        }

        .rr-section-label {
          margin-bottom: 10px;
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .rr-section-title {
          max-width: 700px;
          margin: 0 0 24px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 26px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -0.015em;
        }

        .rr-section-description {
          max-width: 700px;
          margin: 0 0 30px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
        }

        /* =====================================================
           STRATEGIC RESOURCING
        ===================================================== */

        .rr-strategic-card {
          padding: 48px;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          background: #ffffff;
        }

        .rr-copy {
          max-width: 820px;
          color: #5f5f5f;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.75;
        }

        .rr-copy p {
          margin: 0 0 16px;
        }

        .rr-copy p:last-child {
          margin-bottom: 0;
        }

        .rr-quote {
          max-width: 820px;
          margin: 28px 0 30px;
          padding: 20px 24px;
          border-left: 3px solid #7a1338;
          background: rgba(255, 240, 244, 0.6);
        }

        .rr-quote-text {
          margin: 0 0 8px;
          color: #555555;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.65;
          font-style: italic;
        }

        .rr-quote-author {
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.07em;
        }

        .rr-subtitle {
          margin: 0 0 12px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 600;
        }

        /* =====================================================
           APPROACH CARDS
        ===================================================== */

        .rr-approach-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .rr-card {
          padding: 24px;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          background: #ffffff;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .rr-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
        }

        .rr-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .rr-icon-box {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #fff0f4;
          flex-shrink: 0;
        }

        .rr-icon-box svg {
          width: 17px;
          height: 17px;
          color: #7a1338;
        }

        .rr-card-number {
          color: #d8d8d8;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
        }

        .rr-card-title {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
        }

        .rr-card-description {
          margin: 0 0 18px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          line-height: 1.7;
        }

        .rr-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .rr-tag {
          padding: 5px 9px;
          border-radius: 999px;
          background: #f3f3f3;
          color: #626262;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 500;
        }

        /* =====================================================
           CAPABILITIES
        ===================================================== */

        .rr-capability-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        .rr-capability-card {
          min-height: 245px;
          padding: 22px;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          background: #ffffff;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .rr-capability-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.05);
        }

        .rr-capability-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .rr-capability-number {
          color: #d2d2d2;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
        }

        .rr-capability-label {
          margin-bottom: 7px;
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .rr-capability-title {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
        }

        .rr-capability-description {
          margin: 0 0 16px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.65;
        }

        .rr-special-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 22px;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          background: #ffffff;
        }

        .rr-special-content {
          display: flex;
          align-items: center;
          gap: 15px;
          min-width: 0;
        }

        .rr-special-text {
          min-width: 0;
        }

        .rr-special-label {
          margin-bottom: 5px;
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .rr-special-title {
          margin: 0 0 4px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 600;
        }

        .rr-special-description {
          max-width: 700px;
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.65;
        }

        .rr-special-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-shrink: 0;
        }

        .rr-special-link {
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* =====================================================
           DELIVERY WORKFLOW
        ===================================================== */

        .rr-workflow-box {
          padding: 28px;
          border: 1px solid #e4e4e4;
          border-radius: 14px;
          background: #ffffff;
        }

        .rr-workflow-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        .rr-workflow-item {
          position: relative;
        }

        .rr-workflow-item:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 18px;
          right: -16px;
          width: 1px;
          height: 42px;
          background: #eeeeee;
        }

        .rr-workflow-top {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 14px;
        }

        .rr-workflow-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #fff0f4;
          flex-shrink: 0;
        }

        .rr-workflow-icon svg {
          width: 17px;
          height: 17px;
          color: #7a1338;
        }

        .rr-workflow-icon.active {
          background: #7a1338;
        }

        .rr-workflow-icon.active svg {
          color: #ffffff;
        }

        .rr-workflow-number {
          color: #999999;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
        }

        .rr-workflow-number.active {
          padding: 2px 7px;
          border-radius: 999px;
          background: #7a1338;
          color: #ffffff;
        }

        .rr-workflow-phase {
          margin-bottom: 5px;
          color: #999999;
          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.07em;
        }

        .rr-workflow-title {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14.5px;
          font-weight: 600;
        }

        .rr-workflow-description {
          margin: 0 0 9px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.65;
        }

        .rr-workflow-tag {
          color: #7a1338;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
        }

        /* =====================================================
           WHY TECHTORCH
        ===================================================== */

        .rr-why-box {
          padding: 48px;
          border-radius: 16px;
          background:
            radial-gradient(
              120% 140% at 90% 0%,
              #7a0f47 0%,
              #4a0a30 60%
            );
        }

        .rr-why-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 20px;
          padding: 6px 11px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffe5ef;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .rr-why-label-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fda4af;
        }

        .rr-why-title {
          max-width: 700px;
          margin: 0 0 10px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          line-height: 1.25;
          font-weight: 600;
        }

        .rr-why-description {
          max-width: 650px;
          margin: 0 0 28px;
          color: rgba(255, 229, 239, 0.7);
          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          line-height: 1.6;
        }

        .rr-why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .rr-why-card {
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
        }

        .rr-why-card-title {
          margin: 0 0 7px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
        }

        .rr-why-card-description {
          margin: 0;
          color: rgba(255, 229, 239, 0.62);
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.65;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .rr-final {
          padding-top: 58px;
          padding-bottom: 72px;
        }

        .rr-final-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .rr-final-title {
          margin: 0 0 15px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.25;
          font-weight: 600;
        }

        .rr-final-description {
          max-width: 700px;
          margin: 0 auto 28px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
        }

        .rr-final-button {
          margin-bottom: 26px;
        }

        .rr-final-tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 22px;
        }

        .rr-final-tag {
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 500;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .rr-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .rr-hero {
            padding-top: 52px;
          }

          .rr-hero-grid {
            gap: 40px;
          }

          .rr-hero-title {
            font-size: 38px;
          }

          .rr-image {
            height: 280px;
          }

          .rr-strategic-card,
          .rr-why-box {
            padding: 38px;
          }

          .rr-section-container {
            padding-top: 36px;
            padding-bottom: 36px;
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {
          .rr-hero-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .rr-hero-title {
            max-width: 760px;
          }

          .rr-hero-description {
            max-width: 650px;
          }

          .rr-image {
            height: 300px;
          }

          .rr-approach-grid,
          .rr-capability-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 30px 24px;
          }

          .rr-workflow-item:not(:last-child)::after {
            display: none;
          }

          .rr-special-card {
            align-items: flex-start;
            flex-direction: column;
          }

          .rr-special-actions {
            justify-content: flex-start;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .rr-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .rr-hero {
            padding-top: 38px;
            padding-bottom: 34px;
          }

          .rr-hero-grid {
            gap: 30px;
            margin-bottom: 30px;
          }

          .rr-eyebrow {
            font-size: 8.5px;
            padding: 6px 10px;
            margin-bottom: 17px;
          }

          .rr-hero-title {
            font-size: 31px;
            line-height: 1.16;
            margin-bottom: 16px;
          }

          .rr-hero-description {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 20px;
          }

          .rr-primary-button {
            font-size: 12px;
            padding: 11px 18px;
            margin-bottom: 20px;
          }

          .rr-hero-tag {
            font-size: 10px;
            padding: 6px 9px;
          }

          .rr-image {
            height: 245px;
          }

          .rr-image-footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 12px 14px;
          }

          .rr-pillars {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .rr-pillar {
            padding: 20px;
          }

          .rr-section-container {
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .rr-strategic-card {
            padding: 26px 20px;
            border-radius: 14px;
          }

          .rr-section-title {
            font-size: 23px;
            margin-bottom: 20px;
          }

          .rr-copy {
            font-size: 12.5px;
          }

          .rr-quote {
            padding: 16px 18px;
            margin: 22px 0 25px;
          }

          .rr-quote-text {
            font-size: 13px;
          }

          .rr-subtitle {
            font-size: 16px;
          }

          .rr-approach-grid,
          .rr-capability-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .rr-card {
            padding: 20px;
          }

          .rr-capability-card {
            min-height: auto;
            padding: 20px;
          }

          .rr-special-card {
            padding: 18px;
            gap: 18px;
          }

          .rr-special-content {
            align-items: flex-start;
          }

          .rr-special-actions {
            width: 100%;
            justify-content: flex-start;
          }

          .rr-workflow-box {
            padding: 20px;
          }

          .rr-workflow-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .rr-why-box {
            padding: 28px 20px;
            border-radius: 14px;
          }

          .rr-why-title {
            font-size: 25px;
          }

          .rr-why-description {
            font-size: 12px;
          }

          .rr-why-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .rr-why-card {
            padding: 17px;
          }

          .rr-final {
            padding-top: 40px;
            padding-bottom: 52px;
          }

          .rr-final-title {
            font-size: 25px;
          }

          .rr-final-description {
            font-size: 12.5px;
          }

          .rr-final-tags {
            gap: 12px 18px;
          }

          .rr-final-tag {
            font-size: 10.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .rr-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .rr-hero {
            padding-top: 30px;
            padding-bottom: 28px;
          }

          .rr-hero-title {
            font-size: 28px;
          }

          .rr-hero-description {
            font-size: 12px;
          }

          .rr-primary-button {
            width: 100%;
            padding: 11px 16px;
          }

          .rr-hero-tags {
            gap: 7px;
          }

          .rr-hero-tag {
            font-size: 9.5px;
          }

          .rr-image {
            height: 210px;
          }

          .rr-image-badge {
            top: 10px;
            left: 10px;
            font-size: 8px;
            padding: 5px 8px;
          }

          .rr-image-footer-left,
          .rr-image-footer-right {
            font-size: 9.5px;
          }

          .rr-pillar {
            padding: 17px;
          }

          .rr-strategic-card {
            padding: 21px 16px;
          }

          .rr-section-title {
            font-size: 21px;
          }

          .rr-copy {
            font-size: 11.5px;
          }

          .rr-quote {
            padding: 14px 15px;
          }

          .rr-quote-text {
            font-size: 12px;
          }

          .rr-card,
          .rr-capability-card {
            padding: 17px;
          }

          .rr-workflow-box {
            padding: 17px;
          }

          .rr-why-box {
            padding: 24px 16px;
          }

          .rr-why-title {
            font-size: 22px;
          }

          .rr-final-title {
            font-size: 22px;
          }

          .rr-final-description {
            font-size: 11.5px;
          }

          .rr-final-button {
            width: auto;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="rr-section rr-hero">
        <div className="rr-container">
          <div className="rr-hero-grid">

            {/* LEFT */}
            <div className="rr-hero-content">
              <div className="rr-eyebrow">
                <Zap size={11} />
                <span>IT AUGMENTATION • RESOURCE REPLACEMENT</span>
              </div>

              <h1 className="rr-hero-title">
                Support Project Continuity with the Right Technology
                Resources
              </h1>

              <p className="rr-hero-description">
                Replace technology resources when your project requirements
                change, while keeping your teams supported with the skills
                and expertise they need.
              </p>

              <button className="rr-primary-button">
                Talk to Our Experts
                <ArrowRight />
              </button>

              <div className="rr-hero-tags">
                {heroTags.map((tag) => (
                  <span className="rr-hero-tag" key={tag}>
                    <span className="rr-hero-tag-dot" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rr-image-card">
              <div className="rr-image">
                <div
                  className="rr-image-background"
                  style={{
                    backgroundImage: "url('/rrmain.png')",
                  }}
                />

                <div className="rr-image-overlay" />

                <span className="rr-image-badge">
                  <span className="rr-image-badge-dot" />
                  Project Continuity Support
                </span>
              </div>

              <div className="rr-image-footer">
                <span className="rr-image-footer-left">
                  <CheckCircle2 />
                  Seamless Transition & Knowledge Transfer
                </span>

                <span className="rr-image-footer-right">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </div>

          {/* PILLARS */}
          <div className="rr-pillars">
            {pillars.map((pillar) => (
              <div className="rr-pillar" key={pillar.badge}>
                <div className="rr-pillar-badge">
                  {pillar.badge}
                </div>

                <h3 className="rr-pillar-title">
                  {pillar.title}
                </h3>

                <p className="rr-pillar-description">
                  {pillar.description}
                </p>

                <div className="rr-pillar-link">
                  {pillar.linkLabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGIC RESOURCING
      ===================================================== */}

      <section className="rr-section">
        <div className="rr-container rr-section-container">
          <div className="rr-strategic-card">

            <div className="rr-section-label">
              STRATEGIC RESOURCING
            </div>

            <h2 className="rr-section-title">
              Flexible Resource Replacement for Changing Technology Needs
            </h2>

            <div className="rr-copy">
              <p>
                Technology projects depend on the right people, skills, and
                technical expertise. When a resource becomes unavailable or
                project requirements change, businesses may need additional
                support to maintain progress and meet their technology
                objectives.
              </p>

              <p>
                TechTorch provides flexible Resource and Staffing solutions
                that help businesses access skilled professionals based on
                their technical requirements. Our approach allows
                organisations to strengthen their existing teams and address
                changing workforce needs with appropriate technology
                resources.
              </p>
            </div>

            <blockquote className="rr-quote">
              <p className="rr-quote-text">
                "The focus is simple: understand the requirement, align the
                right expertise, and support the project effectively."
              </p>

              <span className="rr-quote-author">
                — TECHTORCH RESOURCING FRAMEWORK
              </span>
            </blockquote>

            <h3 className="rr-subtitle">
              Supporting Your Team When Requirements Change
            </h3>

            <div className="rr-copy">
              <p>
                Resource replacement can be important when a project requires
                a different skill set, additional technical support, or
                continuity within an existing development environment.
              </p>

              <p>
                TechTorch works around your business and technology
                requirements to help identify the appropriate resource
                capabilities for your project. This can support software
                development, application projects, system integration,
                testing, maintenance, and other technology activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRUCTURED APPROACH
      ===================================================== */}

      <section className="rr-section">
        <div className="rr-container rr-section-container">

          <div className="rr-section-label">
            RESOURCE REPLACEMENT SUPPORT
          </div>

          <h2 className="rr-section-title">
            Structured Approach to Engineering Continuity
          </h2>

          <div className="rr-approach-grid">
            {approachCards.map((card) => {
              const Icon = card.icon;

              return (
                <div className="rr-card" key={card.number}>
                  <div className="rr-card-top">
                    <div className="rr-icon-box">
                      <Icon />
                    </div>

                    <span className="rr-card-number">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="rr-card-title">
                    {card.title}
                  </h3>

                  <p className="rr-card-description">
                    {card.description}
                  </p>

                  <div className="rr-tags">
                    {card.tags.map((tag) => (
                      <span className="rr-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY CAPABILITIES
      ===================================================== */}

      <section className="rr-section">
        <div className="rr-container rr-section-container">

          <div className="rr-section-label">
            TECHNOLOGY CAPABILITIES
          </div>

          <h2 className="rr-section-title">
            Support Across Your Technology Requirements
          </h2>

          <p className="rr-section-description">
            Resource replacement can support a range of technology activities
            depending on the requirements of your project.
          </p>

          <div className="rr-capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  className="rr-capability-card"
                  key={capability.number}
                >
                  <div className="rr-capability-top">
                    <div className="rr-icon-box">
                      <Icon />
                    </div>

                    <span className="rr-capability-number">
                      • {capability.number}
                    </span>
                  </div>

                  <div className="rr-capability-label">
                    CAPABILITY {capability.number}
                  </div>

                  <h3 className="rr-capability-title">
                    {capability.title}
                  </h3>

                  <p className="rr-capability-description">
                    {capability.description}
                  </p>

                  <span className="rr-tag">
                    {capability.tag}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CAPABILITY 07 */}
          <div className="rr-special-card">
            <div className="rr-special-content">
              <div className="rr-icon-box">
                <RefreshCw />
              </div>

              <div className="rr-special-text">
                <div className="rr-special-label">
                  CAPABILITY 07 • 07
                </div>

                <h3 className="rr-special-title">
                  Ongoing Maintenance & Support
                </h3>

                <p className="rr-special-description">
                  Maintain and improve existing software through technical
                  support, updates, maintenance, and ongoing enhancements.
                </p>
              </div>
            </div>

            <div className="rr-special-actions">
              <span className="rr-tag">
                SLA & Continuous Health
              </span>

              <span className="rr-special-link">
                Specialized Support →
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY WORKFLOW
      ===================================================== */}

      <section className="rr-section">
        <div className="rr-container rr-section-container">

          <div className="rr-section-label">
            DELIVERY WORKFLOW
          </div>

          <h2 className="rr-section-title">
            From Requirement to Resource Alignment
          </h2>

          <p className="rr-section-description">
            A systematic four-stage methodology engineered to maintain
            project velocity, smooth onboarding, and uninterrupted
            operational continuity.
          </p>

          <div className="rr-workflow-box">
            <div className="rr-workflow-grid">
              {phases.map((phase) => {
                const Icon = phase.icon;

                return (
                  <div
                    className="rr-workflow-item"
                    key={phase.number}
                  >
                    <div className="rr-workflow-top">
                      <div
                        className={
                          phase.active
                            ? "rr-workflow-icon active"
                            : "rr-workflow-icon"
                        }
                      >
                        <Icon />
                      </div>

                      <span
                        className={
                          phase.active
                            ? "rr-workflow-number active"
                            : "rr-workflow-number"
                        }
                      >
                        {phase.number}
                      </span>
                    </div>

                    <div className="rr-workflow-phase">
                      {phase.phase}
                    </div>

                    <h3 className="rr-workflow-title">
                      {phase.title}
                    </h3>

                    <p className="rr-workflow-description">
                      {phase.description}
                    </p>

                    <span className="rr-workflow-tag">
                      • {phase.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY TECHTORCH
      ===================================================== */}

      <section className="rr-section">
        <div className="rr-container rr-section-container">

          <div className="rr-why-box">

            <span className="rr-why-label">
              <span className="rr-why-label-dot" />
              WHY TECHTORCH
            </span>

            <h2 className="rr-why-title">
              Technology Resources Aligned with Your Business Needs
            </h2>

            <p className="rr-why-description">
              Technical capabilities aligned with your project requirements
              and operational continuity.
            </p>

            <div className="rr-why-grid">
              {whyCards.map((card) => (
                <div className="rr-why-card" key={card.title}>
                  <h3 className="rr-why-card-title">
                    {card.title}
                  </h3>

                  <p className="rr-why-card-description">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="rr-section rr-final">
        <div className="rr-container">
          <div className="rr-final-inner">

            <h2 className="rr-final-title">
              Keep Your Technology Projects Moving Forward
            </h2>

            <p className="rr-final-description">
              When your resource requirements change, TechTorch can help you
              explore the right technical capabilities to support your team
              and technology initiatives.
            </p>

            <button className="rr-primary-button rr-final-button">
              Talk to Our Experts
              <ArrowRight />
            </button>

            <div className="rr-final-tags">
              {heroTags.map((tag) => (
                <span className="rr-final-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}