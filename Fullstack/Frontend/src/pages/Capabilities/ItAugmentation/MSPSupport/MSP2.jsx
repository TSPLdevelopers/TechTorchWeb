import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  Cloud,
  ShieldCheck,
  Layers,
  Check,
  Lightbulb,
} from "lucide-react";

const MSPSections = () => {
  const navigate = useNavigate();

  const auditPillars = [
    {
      icon: <Server />,
      title: "Infrastructure",
      text: "Network topology, on-prem servers, hardware lifecycles, and core connectivity.",
    },
    {
      icon: <Layers />,
      title: "Applications",
      text: "Critical line-of-business software, patch governance, and vendor interfaces.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Services",
      text: "Tenant administration, access management, hybrid setups, and cloud storage.",
    },
    {
      icon: <ShieldCheck />,
      title: "Operational Priorities",
      text: "Workforce workflows, business continuity standards, and peak operational windows.",
    },
  ];

  const benefits = [
    "More consistent IT operations",
    "Faster response to technical issues",
    "Better system maintenance",
    "Reduced technology-related interruptions",
    "Improved management of IT resources",
    "Greater visibility into technology requirements",
    "Support for changing business needs",
    "A more structured approach to IT management",
  ];

  const process = [
    {
      number: "01",
      tag: "DISCOVERY",
      category: "DISCOVERY & ALIGNMENT",
      title: "01 — Understand",
      text: "We begin by understanding your technology environment, business requirements, and existing challenges.",
    },
    {
      number: "02",
      tag: "DIAGNOSTICS",
      category: "GAP & DIAGNOSTIC",
      title: "02 — Assess",
      text: "We identify areas that require support, maintenance, improvement, or ongoing attention.",
    },
    {
      number: "03",
      tag: "ACTIVE DESK",
      category: "DAY-TO-DAY OPERATIONS",
      title: "03 — Support",
      text: "Our technical team assists with day-to-day IT requirements and works toward resolving technical issues efficiently.",
    },
    {
      number: "04",
      tag: "HYGIENE",
      category: "PROACTIVE HYGIENE",
      title: "04 — Maintain",
      text: "Ongoing maintenance helps keep systems, applications, and infrastructure properly supported.",
    },
    {
      number: "05",
      tag: "EVOLUTION",
      category: "STRATEGIC EXPANSION",
      title: "05 — Evolve",
      text: "As your business grows and technology requirements change, your support approach can evolve with it.",
    },
  ];

  return (
    <div className="msp-sections">
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        * {
          box-sizing: border-box;
        }

        .msp-sections {
          width: 100%;
          overflow: hidden;
          color: #252529;
          background: #ffffff;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        .msp-sections h1,
        .msp-sections h2,
        .msp-sections h3,
        .msp-sections h4,
        .msp-sections h5,
        .msp-sections h6 {
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        .msp-container,
        .msp-engagement-inner {
          width: min(1600px, calc(100% - 200px));
          margin: 0 auto;
        }

        /* =====================================================
           COMMON LABEL
        ===================================================== */

        .msp-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 6px 11px;

          border-radius: 20px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          line-height: 1;

          text-transform: uppercase;
        }

        .msp-label::before {
          content: "";

          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;
        }

        /* =====================================================
           SECTION 1 — TAILORED ENGAGEMENT
        ===================================================== */

        .msp-engagement {
          width: 100%;
          padding: 92px 0 96px;

          color: #ffffff;

          background:
            radial-gradient(
              circle at 78% 18%,
              rgba(155, 0, 85, 0.42),
              transparent 38%
            ),
            radial-gradient(
              circle at 15% 85%,
              rgba(120, 0, 65, 0.35),
              transparent 38%
            ),
            linear-gradient(
              135deg,
              #72003f 0%,
              #850047 48%,
              #57002f 100%
            );
        }

        .msp-engagement-inner {
          display: grid;
          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(430px, 0.88fr);

          gap: 80px;
          align-items: center;
        }

        .msp-engagement-content {
          min-width: 0;
        }

        .msp-engagement .msp-label {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .msp-engagement .msp-label::before {
          background: #ffffff;
        }

        .msp-engagement h2 {
          max-width: 720px;

          margin: 21px 0 20px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(38px, 4vw, 56px);
          line-height: 1.06;
          letter-spacing: -2.8px;
          font-weight: 600;
        }

        .msp-engagement-text {
          max-width: 700px;

          margin: 0;

          color: rgba(255, 255, 255, 0.88);

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.7;
        }

        .msp-engagement-text + .msp-engagement-text {
          margin-top: 16px;
        }

        .msp-engagement-highlight {
          max-width: 700px;

          margin-top: 22px;
          padding: 18px 20px;

          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 10px;

          background: rgba(255, 255, 255, 0.11);
        }

        .msp-engagement-highlight p {
          margin: 0;

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 700;
        }

        /* =====================================================
           AUDIT PANEL
        ===================================================== */

        .msp-audit {
          position: relative;

          min-width: 0;

          padding: 30px;

          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 19px;

          background: rgba(45, 0, 25, 0.28);

          box-shadow:
            inset 0 0 40px rgba(0, 0, 0, 0.08),
            0 20px 45px rgba(32, 0, 20, 0.12);
        }

        .msp-audit-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding-bottom: 16px;

          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .msp-audit-heading {
          color: rgba(255, 255, 255, 0.86);

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .msp-audit-badge {
          flex-shrink: 0;

          padding: 6px 10px;

          border-radius: 20px;

          background: rgba(255, 255, 255, 0.16);

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
        }

        .msp-audit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 14px;

          margin-top: 18px;
        }

        .msp-audit-card {
          min-width: 0;
          min-height: 125px;

          padding: 15px;

          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 11px;

          background: rgba(255, 255, 255, 0.11);

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .msp-audit-card:hover {
          transform: translateY(-4px);

          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .msp-audit-card-top {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 10px;
        }

        .msp-audit-icon {
          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 7px;

          background: rgba(255, 255, 255, 0.15);

          color: #ffffff;
        }

        .msp-audit-icon svg {
          width: 16px;
          height: 16px;
        }

        .msp-audit-card h3 {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.25;
          font-weight: 700;
        }

        .msp-audit-card p {
          margin: 0;

          color: rgba(255, 255, 255, 0.68);

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.55;
        }

        .msp-audit-footer {
          margin-top: 17px;
          padding: 12px 14px;

          border-radius: 8px;

          background: rgba(255, 255, 255, 0.12);

          color: rgba(255, 255, 255, 0.76);

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.9px;
        }

        /* =====================================================
           SECTION 2 — WHY MSP SUPPORT
        ===================================================== */

        .msp-matters {
          width: 100%;

          padding: 88px 0 96px;

          background: #faf9f6;
        }

        .msp-matters-header {
          margin-bottom: 38px;
        }

        .msp-matters-header .msp-label {
          color: #70003f;
          background: #f0e5eb;
        }

        .msp-matters-header .msp-label::before {
          background: #70003f;
        }

        .msp-matters-header h2 {
          margin: 15px 0 10px;

          color: #29292d;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(32px, 3vw, 46px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 600;
        }

        .msp-matters-header p {
          max-width: 800px;

          margin: 0;

          color: #746b70;

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.65;
        }

        /* =====================================================
           BENEFITS
        ===================================================== */

        .msp-benefits {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 14px;
        }

        .msp-benefit {
          min-height: 92px;

          display: flex;
          align-items: flex-start;

          gap: 12px;

          padding: 20px 18px;

          border: 1px solid #eeeeee;
          border-radius: 12px;

          background: #ffffff;

          box-shadow: 0 2px 6px rgba(30, 20, 25, 0.025);

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .msp-benefit:hover {
          transform: translateY(-4px);

          border-color: #d8bdca;

          box-shadow:
            0 10px 25px rgba(68, 18, 43, 0.07);
        }

        .msp-check {
          width: 25px;
          height: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: #f0e7ec;
          color: #70003f;
        }

        .msp-check svg {
          width: 13px;
          height: 13px;
        }

        .msp-benefit span {
          color: #303035;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;
        }

        /* =====================================================
           MISSION BAR
        ===================================================== */

        .msp-mission {
          margin-top: 30px;

          display: flex;
          align-items: center;

          gap: 16px;

          padding: 21px 24px;

          border-radius: 12px;

          background: #eeeeef;
        }

        .msp-mission-icon {
          width: 35px;
          height: 35px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: #70003f;
          color: #ffffff;
        }

        .msp-mission-icon svg {
          width: 17px;
          height: 17px;
        }

        .msp-mission p {
          flex: 1;

          margin: 0;

          color: #343438;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 600;
        }

        .msp-discuss-button {
          flex-shrink: 0;

          padding: 11px 19px;

          border: 0;
          border-radius: 7px;

          background: #70003f;
          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.6px;

          text-transform: uppercase;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .msp-discuss-button:hover {
          background: #8c0753;

          transform: translateY(-2px);

          box-shadow: 0 7px 18px rgba(112, 0, 63, 0.18);
        }

        /* =====================================================
           SECTION 3 — APPROACH
        ===================================================== */

        .msp-approach {
          width: 100%;

          padding: 100px 0 105px;

          background: #ffffff;
        }

        .msp-approach-header {
          max-width: 820px;

          margin: 0 auto 58px;

          text-align: center;
        }

        .msp-approach-header .msp-label {
          color: #70003f;
          background: #f0e5eb;
        }

        .msp-approach-header .msp-label::before {
          background: #70003f;
        }

        .msp-approach-header h2 {
          margin: 17px 0 11px;

          color: #28282c;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(32px, 3vw, 46px);
          line-height: 1.08;

          letter-spacing: -2px;
          font-weight: 600;
        }

        .msp-approach-header p {
          margin: 0;

          color: #776c71;

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.65;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .msp-process {
          position: relative;

          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));

          gap: 16px;
        }

        .msp-process::before {
          content: "";

          position: absolute;

          top: 31px;

          left: 7%;
          right: 7%;

          height: 1px;

          background: #ddd5d9;

          z-index: 0;
        }

        .msp-process-card {
          position: relative;
          z-index: 1;

          min-width: 0;
          min-height: 275px;

          padding: 20px 20px 22px;

          border: 1px solid #ebe4e8;
          border-radius: 13px;

          background: #ffffff;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .msp-process-card:hover {
          transform: translateY(-5px);

          border-color: #d3b3c2;

          box-shadow:
            0 12px 28px rgba(67, 18, 43, 0.07);
        }

        .msp-process-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 8px;

          margin-bottom: 20px;
        }

        .msp-process-number {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          background: #f0e9ed;
          color: #70003f;

          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          font-weight: 800;
        }

        .msp-process-card:first-child .msp-process-number {
          background: #70003f;
          color: #ffffff;

          box-shadow:
            0 4px 10px rgba(112, 0, 63, 0.18);
        }

        .msp-process-tag {
          padding: 6px 9px;

          border-radius: 20px;

          background: #eee9ec;
          color: #777076;

          font-family: "Inter", Arial, sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.4px;

          white-space: nowrap;
        }

        .msp-process-category {
          margin-bottom: 8px;

          color: #70003f;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .msp-process-card h3 {
          margin: 0;

          color: #28282c;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.25;
          font-weight: 700;
        }

        .msp-process-card p {
          margin: 11px 0 0;

          color: #746b70;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .msp-container,
          .msp-engagement-inner {
            width: calc(100% - 80px);
          }

          .msp-engagement-inner {
            gap: 50px;
          }

          .msp-benefits {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .msp-process {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .msp-process::before {
            display: none;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .msp-container,
          .msp-engagement-inner {
            width: calc(100% - 80px);
          }

          .msp-engagement {
            padding: 72px 0 78px;
          }

          .msp-engagement-inner {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .msp-engagement-content {
            max-width: 800px;
          }

          .msp-audit {
            width: 100%;
            max-width: 760px;
          }

          .msp-process {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .msp-mission {
            align-items: flex-start;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .msp-container,
          .msp-engagement-inner {
            width: calc(100% - 48px);
          }

          .msp-engagement {
            padding: 60px 0 65px;

            background:
              radial-gradient(
                circle at 80% 15%,
                rgba(170, 0, 92, 0.35),
                transparent 45%
              ),
              linear-gradient(
                145deg,
                #72003f,
                #850047,
                #590031
              );
          }

          .msp-label {
            padding: 6px 9px;

            font-size: 8px;
          }

          .msp-engagement h2 {
            margin: 17px 0 17px;

            font-size: 35px;
            line-height: 1.08;

            letter-spacing: -1.5px;
          }

          .msp-engagement-text {
            font-size: 12.5px;
            line-height: 1.68;
          }

          .msp-engagement-highlight {
            margin-top: 18px;
            padding: 15px;
          }

          .msp-engagement-highlight p {
            font-size: 12px;
            line-height: 1.62;
          }

          /* AUDIT */

          .msp-audit {
            padding: 21px 17px;

            border-radius: 15px;
          }

          .msp-audit-header {
            align-items: flex-start;
          }

          .msp-audit-heading {
            font-size: 8px;
            line-height: 1.4;
          }

          .msp-audit-badge {
            padding: 5px 8px;

            font-size: 7px;
          }

          .msp-audit-grid {
            grid-template-columns: 1fr;

            gap: 10px;
          }

          .msp-audit-card {
            min-height: auto;

            padding: 13px;
          }

          .msp-audit-card h3 {
            font-size: 13px;
          }

          .msp-audit-card p {
            font-size: 10.5px;
          }

          .msp-audit-footer {
            font-size: 7px;
            line-height: 1.5;
            letter-spacing: 0.7px;
          }

          /* MATTERS */

          .msp-matters {
            padding: 62px 0 68px;
          }

          .msp-matters-header {
            margin-bottom: 28px;
          }

          .msp-matters-header h2 {
            margin-top: 12px;

            font-size: 34px;
            letter-spacing: -1.4px;
          }

          .msp-matters-header p {
            font-size: 12px;
            line-height: 1.65;
          }

          .msp-benefits {
            grid-template-columns: 1fr;

            gap: 9px;
          }

          .msp-benefit {
            min-height: auto;

            padding: 15px;
          }

          .msp-benefit span {
            font-size: 12.5px;
          }

          .msp-mission {
            flex-wrap: wrap;

            margin-top: 22px;

            padding: 16px;

            gap: 12px;
          }

          .msp-mission p {
            min-width: 0;

            font-size: 11.5px;
          }

          .msp-discuss-button {
            width: 100%;
          }

          /* APPROACH */

          .msp-approach {
            padding: 70px 0 74px;
          }

          .msp-approach-header {
            margin-bottom: 37px;
          }

          .msp-approach-header h2 {
            margin-top: 16px;

            font-size: 34px;

            letter-spacing: -1.4px;
          }

          .msp-approach-header p {
            font-size: 12px;
            line-height: 1.65;
          }

          .msp-process {
            grid-template-columns: 1fr;

            gap: 11px;
          }

          .msp-process-card {
            min-height: auto;

            padding: 18px;
          }

          .msp-process-top {
            margin-bottom: 17px;
          }

          .msp-process-number {
            width: 37px;
            height: 37px;

            font-size: 14px;
          }

          .msp-process-tag {
            font-size: 7px;
          }

          .msp-process-category {
            font-size: 8px;
          }

          .msp-process-card h3 {
            font-size: 15px;
          }

          .msp-process-card p {
            font-size: 11px;
            line-height: 1.62;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .msp-container,
          .msp-engagement-inner {
            width: calc(100% - 32px);
          }

          .msp-engagement {
            padding: 52px 0 58px;
          }

          .msp-engagement h2 {
            font-size: 30px;
            letter-spacing: -1.2px;
          }

          .msp-engagement-text {
            font-size: 11.5px;
          }

          .msp-audit {
            padding: 19px 14px;
          }

          .msp-audit-header {
            gap: 8px;
          }

          .msp-audit-heading {
            font-size: 7px;
          }

          .msp-audit-badge {
            font-size: 6.5px;
          }

          .msp-matters {
            padding: 54px 0 60px;
          }

          .msp-matters-header h2 {
            font-size: 29px;
          }

          .msp-benefit span {
            font-size: 12px;
          }

          .msp-mission p {
            font-size: 11px;
          }

          .msp-approach {
            padding: 59px 0 64px;
          }

          .msp-approach-header h2 {
            font-size: 29px;
          }

          .msp-process-card {
            padding: 16px;
          }

          .msp-process-card p {
            font-size: 10.5px;
          }
        }
      `}</style>

      {/* =========================================================
          SECTION 1 — TAILORED ENGAGEMENT
      ========================================================= */}

      <section className="msp-engagement">
        <div className="msp-engagement-inner">

          {/* LEFT CONTENT */}

          <div className="msp-engagement-content">
            <div className="msp-label">
              Tailored Engagement
            </div>

            <h2>
              A Support Model Built Around Your Business
            </h2>

            <p className="msp-engagement-text">
              Every organization has a different technology environment.
              The systems you use, the way your teams work, and the
              challenges you face are unique to your business.
            </p>

            <p className="msp-engagement-text">
              That is why our MSP Support approach begins with
              understanding your environment.
            </p>

            <p className="msp-engagement-text">
              We consider your existing infrastructure, applications,
              cloud requirements, users, and operational priorities before
              determining the appropriate support approach.
            </p>

            <div className="msp-engagement-highlight">
              <p>
                This allows us to provide IT support that is practical,
                relevant, and aligned with your business rather than
                relying on a one-size-fits-all model.
              </p>
            </div>
          </div>

          {/* RIGHT AUDIT PANEL */}

          <div className="msp-audit">
            <div className="msp-audit-header">
              <div className="msp-audit-heading">
                INTEGRATED AUDIT PILLARS
              </div>

              <div className="msp-audit-badge">
                Comprehensive Baseline
              </div>
            </div>

            <div className="msp-audit-grid">
              {auditPillars.map((item, index) => (
                <div
                  className="msp-audit-card"
                  key={index}
                >
                  <div className="msp-audit-card-top">
                    <div className="msp-audit-icon">
                      {item.icon}
                    </div>

                    <h3>
                      {item.title}
                    </h3>
                  </div>

                  <p>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="msp-audit-footer">
              Environment Assessment Complete
              &nbsp;&nbsp;
              Zero Template Deployments
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — WHY MSP SUPPORT MATTERS
      ========================================================= */}

      <section className="msp-matters">
        <div className="msp-container">

          <div className="msp-matters-header">
            <div className="msp-label">
              Operational Advantage
            </div>

            <h2>
              Why MSP Support Matters
            </h2>

            <p>
              Effective IT management can make a significant difference
              to everyday business operations. With the right support
              structure in place, organizations can work toward:
            </p>
          </div>

          <div className="msp-benefits">
            {benefits.map((benefit, index) => (
              <div
                className="msp-benefit"
                key={index}
              >
                <div className="msp-check">
                  <Check />
                </div>

                <span>
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="msp-mission">
            <div className="msp-mission-icon">
              <Lightbulb />
            </div>

            <p>
              Our mission is definitive: engineering resilient
              infrastructure governance that reduces operational
              friction and accelerates business velocity.
            </p>

            <button
              type="button"
              className="msp-discuss-button"
              onClick={() => navigate("/discuss-priorities")}
            >
              DISCUSS PRIORITIES
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3 — OUR APPROACH
      ========================================================= */}

      <section className="msp-approach">
        <div className="msp-container">

          <div className="msp-approach-header">
            <div className="msp-label">
              Operational Lifecycle • Engagement Methodology
            </div>

            <h2>
              Our Approach to MSP Support
            </h2>

            <p>
              A disciplined, five-step lifecycle ensuring ongoing
              stabilization, rapid resolution, and predictable
              continuous evolution for your critical systems.
            </p>
          </div>

          <div className="msp-process">
            {process.map((item, index) => (
              <article
                className="msp-process-card"
                key={index}
              >
                <div className="msp-process-top">
                  <div className="msp-process-number">
                    {item.number}
                  </div>

                  <div className="msp-process-tag">
                    {item.tag}
                  </div>
                </div>

                <div className="msp-process-category">
                  {item.category}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default MSPSections;