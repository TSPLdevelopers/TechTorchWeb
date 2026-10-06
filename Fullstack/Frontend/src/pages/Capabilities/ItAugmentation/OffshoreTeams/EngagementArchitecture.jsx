import React from "react";
import { Check } from "lucide-react";

const BRAND = "#8B0046";

/* ============================================================
   FLEXIBLE TEAM MODELS
============================================================ */

const teamModels = [
  {
    number: "01",
    title: "Dedicated Development Team",
    description:
      "A dedicated group of professionals focused on your product, application, or long-term development requirements.",
    label: "AUTONOMOUS POD",
  },
  {
    number: "02",
    title: "Extended Development Team",
    description:
      "Additional developers and technical specialists who work alongside your existing internal team.",
    label: "HYBRID ALIGNMENT",
  },
  {
    number: "03",
    title: "Project-Based Team",
    description:
      "A focused team assembled around a defined project, development requirement, or technology objective.",
    label: "TARGETED MILESTONE",
  },
  {
    number: "04",
    title: "Specialized Technical Resources",
    description:
      "Access specific technical expertise when your project requires skills that are not currently available within your internal team.",
    label: "NICHE SUBJECT MATTER EXPERTS",
  },
];

/* ============================================================
   TECHNOLOGY EXPERTISE
============================================================ */

const technology = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces and user-focused web applications.",
  },
  {
    title: "Backend Development",
    description:
      "Application logic, databases, APIs, and server-side development.",
  },
  {
    title: "Mobile Development",
    description:
      "Development support for modern mobile applications.",
  },
  {
    title: "Cloud Development",
    description:
      "Cloud-oriented applications and infrastructure requirements.",
  },
  {
    title: "Integration",
    description:
      "APIs, third-party services, and business-system integration.",
  },
  {
    title: "Quality Assurance",
    description:
      "Testing and quality checks throughout the development process.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical improvements, updates, and application support.",
  },
];

/* ============================================================
   WHY WORK WITH OFFSHORE TEAM
============================================================ */

const benefits = [
  {
    title: "Access Additional Expertise",
    description:
      "Bring relevant technical skills into your development projects.",
  },
  {
    title: "Increase Development Capacity",
    description:
      "Add resources when your existing team needs additional support.",
  },
  {
    title: "Flexible Team Structure",
    description:
      "Build a team based on your current project instead of following a fixed model.",
  },
  {
    title: "Support Long-Term Development",
    description:
      "Continue working with the team for maintenance, enhancements, and future development requirements.",
  },
  {
    title: "Work Alongside Your Existing Team",
    description:
      "The offshore team can complement your internal developers and technical professionals.",
  },
];

/* ============================================================
   OUR APPROACH
============================================================ */

const approach = [
  {
    number: "01",
    label: "DISCOVERY",
    title: "Understand",
    description:
      "We first understand your project, business objectives, technology environment, and team requirements.",
  },
  {
    number: "02",
    label: "SCOPING",
    title: "Define",
    description:
      "We identify the technical skills, roles, and responsibilities required for the project.",
  },
  {
    number: "03",
    label: "ASSEMBLY",
    title: "Build",
    description:
      "The development team is structured around the capabilities and experience your project requires.",
  },
  {
    number: "04",
    label: "EXECUTION",
    title: "Collaborate",
    description:
      "The team works with your existing processes, stakeholders, and development environment.",
  },
  {
    number: "05",
    label: "SCALE",
    title: "Evolve",
    description:
      "As your product and business requirements change, the team can adapt to support future development needs.",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function OffshoreTeamSections() {
  return (
    <>
      <style>{`
        /* =========================================================
           BASE
        ========================================================= */

        .offshore-page {
          --brand: #8B0046;
          --dark-maroon: #6d0038;
          --heading: #172033;
          --body: #69768b;

          width: 100%;
          overflow: hidden;

          background: #ffffff;

          font-family: "Inter", sans-serif;
        }

        .offshore-page h1,
        .offshore-page h2,
        .offshore-page h3,
        .offshore-page h4 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* =========================================================
           UNIVERSAL SPACING

           Desktop     100px
           Tablet       40px
           Mobile       24px
           Small mobile 16px
        ========================================================= */

        .offshore-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          box-sizing: border-box;
        }

        .offshore-inner {
          width: 100%;
          max-width: 1380px;

          margin: 0 auto;
        }

        /* =========================================================
           COMMON SECTION
        ========================================================= */

        .offshore-section {
          width: 100%;
        }

        .offshore-section-inner {
          padding-top: 70px;
          padding-bottom: 70px;
        }

        /* =========================================================
           EYEBROW
        ========================================================= */

        .offshore-eyebrow {
          display: inline-flex;
          align-items: center;

          width: fit-content;

          padding: 7px 12px;

          border-radius: 5px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .offshore-eyebrow-dark {
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
        }

        .offshore-eyebrow-light {
          padding: 0;
          color: var(--brand);
        }

        /* =========================================================
           SECTION 1
        ========================================================= */

        .engagement-section {
          background: var(--dark-maroon);
          color: #ffffff;
        }

        .engagement-header {
          max-width: 850px;
        }

        .engagement-title {
          margin: 16px 0 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3vw, 40px);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .engagement-description {
          max-width: 850px;

          margin: 16px 0 0;

          color: rgba(255, 255, 255, 0.92);

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.65;
        }

        .engagement-description strong {
          font-weight: 700;
        }

        /* =========================================================
           TEAM MODEL GRID
        ========================================================= */

        .team-model-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;

          margin-top: 34px;
        }

        .team-model-card {
          position: relative;

          min-height: 290px;

          display: flex;
          flex-direction: column;

          overflow: hidden;

          padding: 20px;

          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.13) 0%,
              rgba(255, 255, 255, 0.08) 45%,
              rgba(255, 255, 255, 0.05) 100%
            );

          cursor: default;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .team-model-card:hover {
          transform: translateY(-7px);

          border-color: #ffffff;

          background: #ffffff;

          box-shadow: 0 16px 32px rgba(30, 0, 20, 0.24);
        }

        .team-model-glow {
          position: absolute;

          right: -45px;
          top: -45px;

          width: 130px;
          height: 130px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.1);

          filter: blur(28px);

          pointer-events: none;

          transition: opacity 0.3s ease;
        }

        .team-model-card:hover .team-model-glow {
          opacity: 0;
        }

        .team-model-number {
          position: relative;
          z-index: 2;

          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;

          background: rgba(255, 255, 255, 0.13);

          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;

          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .team-model-card:hover .team-model-number {
          border-color: #e5bfd0;
          background: #fff5f8;
          color: var(--brand);
        }

        .team-model-content {
          position: relative;
          z-index: 2;

          margin-top: 20px;
        }

        .team-model-title {
          max-width: 210px;

          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.28;

          transition: color 0.3s ease;
        }

        .team-model-card:hover .team-model-title {
          color: var(--brand);
        }

        .team-model-description {
          margin: 12px 0 0;

          color: rgba(255, 255, 255, 0.75);

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.6;

          transition: color 0.3s ease;
        }

        .team-model-card:hover .team-model-description {
          color: #222222;
        }

        .team-model-bottom {
          position: relative;
          z-index: 2;

          margin-top: auto;
          padding-top: 20px;
        }

        .team-model-line {
          width: 100%;
          height: 1px;

          margin-bottom: 12px;

          background: rgba(255, 255, 255, 0.15);

          transition: background 0.3s ease;
        }

        .team-model-card:hover .team-model-line {
          background: var(--brand);
        }

        .team-model-meta {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 8px;
        }

        .team-model-label {
          color: rgba(255, 255, 255, 0.75);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.06em;
          text-transform: uppercase;

          transition: color 0.3s ease;
        }

        .team-model-card:hover .team-model-label {
          color: var(--brand);
        }

        .team-model-dot {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #20d89a;

          transition: background 0.3s ease;
        }

        .team-model-card:hover .team-model-dot {
          background: var(--brand);
        }

        /* =========================================================
           SECTION 2 — TECHNOLOGY
        ========================================================= */

        .technology-section {
          background: #f8fafc;
        }

        .technology-header {
          max-width: 850px;
        }

        .technology-title {
          margin: 12px 0 0;

          color: var(--heading);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3vw, 38px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .technology-description {
          max-width: 850px;

          margin: 13px 0 0;

          color: #536075;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.65;
        }

        .technology-description strong {
          font-weight: 700;
        }

        .technology-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;

          margin-top: 34px;
        }

        .technology-card {
          min-height: 125px;

          padding: 20px;

          border: 1px solid #e2e7ed;
          border-radius: 10px;

          background: #ffffff;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .technology-card:hover {
          transform: translateY(-3px);

          border-color: #e2bfd0;

          box-shadow: 0 8px 22px rgba(60, 20, 40, 0.06);
        }

        .technology-card:last-child {
          grid-column: 1 / -1;
        }

        .technology-content {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .technology-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          margin-top: 6px;

          border-radius: 50%;

          background: var(--brand);
        }

        .technology-card-title {
          margin: 0;

          color: #1d293d;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
        }

        .technology-card-description {
          margin: 8px 0 0;

          color: #69768b;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }

        /* =========================================================
           SECTION 3 — BENEFITS
        ========================================================= */

        .benefits-section {
          background: var(--dark-maroon);
          color: #ffffff;
        }

        .benefits-header {
          max-width: 850px;
        }

        .benefits-title {
          max-width: 760px;

          margin: 16px 0 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3.2vw, 42px);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        .benefits-title span {
          display: block;
        }

        .benefits-description {
          max-width: 850px;

          margin: 20px 0 0;

          color: rgba(255, 255, 255, 0.92);

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.65;
        }

        .benefits-description strong {
          font-weight: 700;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;

          margin-top: 34px;
        }

        .benefit-card {
          position: relative;

          min-height: 150px;

          overflow: hidden;

          padding: 20px;

          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.13) 0%,
              rgba(255, 255, 255, 0.08) 45%,
              rgba(255, 255, 255, 0.05) 100%
            );

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .benefit-card:nth-child(4) {
          grid-column: span 1;
        }

        .benefit-card:nth-child(5) {
          grid-column: span 2;
        }

        .benefit-card:hover {
          transform: translateY(-7px);

          box-shadow: 0 16px 32px rgba(30, 0, 20, 0.24);
        }

        .benefit-glow {
          position: absolute;

          right: -45px;
          top: -45px;

          width: 130px;
          height: 130px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.1);

          filter: blur(28px);

          pointer-events: none;
        }

        .benefit-content {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .benefit-check {
          width: 20px;
          height: 20px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          margin-top: 1px;

          border-radius: 50%;

          background: #ffffff;
        }

        .benefit-check svg {
          width: 12px;
          height: 12px;

          color: var(--brand);
        }

        .benefit-title {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.3;
        }

        .benefit-description {
          margin: 10px 0 0;

          color: rgba(255, 255, 255, 0.75);

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.6;
        }

        /* =========================================================
           SECTION 4 — APPROACH
        ========================================================= */

        .approach-section {
          background: #ffffff;
        }

        .approach-header {
          text-align: center;
        }

        .approach-title {
          margin: 12px 0 0;

          color: var(--heading);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3vw, 38px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.04em;
        }

        .approach-subtitle {
          margin: 12px 0 0;

          color: #69768b;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .approach-process {
          position: relative;

          margin-top: 38px;
        }

        .approach-line {
          position: absolute;

          left: 9%;
          right: 9%;
          top: 26px;

          height: 2px;

          background: #d4a6bc;

          pointer-events: none;
        }

        .approach-grid {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .approach-card {
          position: relative;

          min-height: 235px;

          display: flex;
          flex-direction: column;

          padding: 16px 20px;

          border: 1px solid #e5e9ee;
          border-radius: 14px;

          background: #ffffff;

          box-shadow: 0 2px 8px rgba(20, 30, 45, 0.025);

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .approach-card:hover {
          transform: translateY(-5px);

          border-color: #e2bfd0;

          box-shadow: 0 12px 28px rgba(70, 20, 45, 0.08);
        }

        .approach-top-line {
          position: absolute;

          left: 20px;
          right: 20px;
          top: 20px;

          height: 3px;

          border-radius: 999px;

          background: #d4a6bc;

          transition: background 0.3s ease;
        }

        .approach-card:hover .approach-top-line {
          background: var(--brand);
        }

        .approach-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;

          margin-top: 28px;
        }

        .approach-number {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border: 1px solid #e9ccda;
          border-radius: 10px;

          background: #fff7fa;

          color: var(--brand);

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 700;
        }

        .approach-label {
          color: #9aabc0;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.05em;
          text-align: right;
        }

        .approach-content {
          margin-top: 18px;
        }

        .approach-card-title {
          margin: 0;

          color: var(--heading);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .approach-card-description {
          margin: 10px 0 0;

          color: #6a7689;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================================
           LARGE TABLET / SMALL LAPTOP
           <= 1200px
        ========================================================= */

        @media (max-width: 1200px) {
          .offshore-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .team-model-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .technology-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .technology-card:last-child {
            grid-column: span 2;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .benefit-card:nth-child(4),
          .benefit-card:nth-child(5) {
            grid-column: span 1;
          }

          .approach-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .approach-line {
            display: none;
          }
        }

        /* =========================================================
           TABLET
           <= 900px
        ========================================================= */

        @media (max-width: 900px) {
          .offshore-section-inner {
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .engagement-title,
          .technology-title,
          .approach-title {
            font-size: 32px;
          }

          .benefits-title {
            font-size: 35px;
          }

          .team-model-grid,
          .technology-grid,
          .benefits-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .technology-card:last-child {
            grid-column: span 2;
          }

          .approach-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .approach-card {
            min-height: 220px;
          }
        }

        /* =========================================================
           MOBILE
           <= 700px
        ========================================================= */

        @media (max-width: 700px) {
          .offshore-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .offshore-section-inner {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .engagement-title,
          .technology-title,
          .approach-title {
            font-size: 29px;
          }

          .benefits-title {
            font-size: 31px;
          }

          .engagement-description,
          .technology-description,
          .benefits-description {
            font-size: 13px;
          }

          .team-model-grid,
          .technology-grid,
          .benefits-grid,
          .approach-grid {
            grid-template-columns: 1fr;
          }

          .team-model-grid,
          .technology-grid,
          .benefits-grid {
            margin-top: 28px;
          }

          .technology-card:last-child {
            grid-column: auto;
          }

          .benefit-card:nth-child(4),
          .benefit-card:nth-child(5) {
            grid-column: auto;
          }

          .approach-process {
            margin-top: 30px;
          }

          .approach-card {
            min-height: 210px;
          }

          .approach-label {
            font-size: 9px;
          }
        }

        /* =========================================================
           SMALL MOBILE
           <= 480px
        ========================================================= */

        @media (max-width: 480px) {
          .offshore-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .offshore-section-inner {
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .offshore-eyebrow {
            font-size: 8px;
            padding: 6px 10px;
          }

          .offshore-eyebrow-light {
            padding: 0;
          }

          .engagement-title,
          .technology-title,
          .approach-title {
            font-size: 27px;
          }

          .benefits-title {
            font-size: 29px;
          }

          .engagement-description,
          .technology-description,
          .benefits-description {
            font-size: 12px;
          }

          .team-model-card,
          .technology-card,
          .benefit-card,
          .approach-card {
            padding: 18px;
          }

          .team-model-card {
            min-height: 265px;
          }

          .team-model-title {
            font-size: 15px;
          }

          .team-model-description {
            font-size: 11px;
          }

          .technology-card-title {
            font-size: 14px;
          }

          .technology-card-description {
            font-size: 11px;
          }

          .benefit-title {
            font-size: 14px;
          }

          .benefit-description {
            font-size: 11px;
          }

          .approach-card-title {
            font-size: 17px;
          }

          .approach-card-description {
            font-size: 12px;
          }
        }

        /* =========================================================
           VERY SMALL MOBILE
           <= 360px
        ========================================================= */

        @media (max-width: 360px) {
          .offshore-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .engagement-title,
          .technology-title,
          .approach-title {
            font-size: 25px;
          }

          .benefits-title {
            font-size: 27px;
          }

          .team-model-card {
            min-height: 250px;
          }
        }
      `}</style>

      <main className="offshore-page">

        {/* ======================================================
            SECTION 1 — ENGAGEMENT ARCHITECTURE
        ====================================================== */}

        <section className="offshore-section engagement-section">
          <div className="offshore-container">
            <div className="offshore-inner offshore-section-inner">

              <div className="engagement-header">

                <span className="offshore-eyebrow offshore-eyebrow-dark">
                  Engagement Architecture
                </span>

                <h2 className="engagement-title">
                  Flexible Team Models
                </h2>

                <p className="engagement-description">
                  <strong>
                    Choose a Development Model That Works for You:
                  </strong>{" "}
                  Different projects require different levels of technical
                  involvement. Our team models can be structured according to
                  your project scope and development requirements.
                </p>

              </div>

              <div className="team-model-grid">

                {teamModels.map((item) => (
                  <div
                    key={item.number}
                    className="team-model-card"
                  >

                    <div className="team-model-glow" />

                    <div className="team-model-number">
                      {item.number}
                    </div>

                    <div className="team-model-content">

                      <h3 className="team-model-title">
                        {item.title}
                      </h3>

                      <p className="team-model-description">
                        {item.description}
                      </p>

                    </div>

                    <div className="team-model-bottom">

                      <div className="team-model-line" />

                      <div className="team-model-meta">

                        <span className="team-model-label">
                          {item.label}
                        </span>

                        <span className="team-model-dot" />

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* ======================================================
            SECTION 2 — TECHNOLOGY EXPERTISE
        ====================================================== */}

        <section className="offshore-section technology-section">
          <div className="offshore-container">
            <div className="offshore-inner offshore-section-inner">

              <div className="technology-header">

                <span className="offshore-eyebrow offshore-eyebrow-light">
                  Technical Foundation
                </span>

                <h2 className="technology-title">
                  Technology Expertise
                </h2>

                <p className="technology-description">
                  <strong>
                    Technical Skills for Modern Development:
                  </strong>{" "}
                  Our development capabilities can support different stages of
                  the software lifecycle, including:
                </p>

              </div>

              <div className="technology-grid">

                {technology.map((item, index) => (
                  <div
                    key={index}
                    className="technology-card"
                  >

                    <div className="technology-content">

                      <span className="technology-dot" />

                      <div>
                        <h3 className="technology-card-title">
                          {item.title}
                        </h3>

                        <p className="technology-card-description">
                          {item.description}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* ======================================================
            SECTION 3 — STRATEGIC VALUE
        ====================================================== */}

        <section className="offshore-section benefits-section">
          <div className="offshore-container">
            <div className="offshore-inner offshore-section-inner">

              <div className="benefits-header">

                <span className="offshore-eyebrow offshore-eyebrow-dark">
                  Strategic Value
                </span>

                <h2 className="benefits-title">
                  Why Work With an Offshore
                  <span>
                    Development Team?
                  </span>
                </h2>

                <p className="benefits-description">
                  <strong>
                    Extend Your Team Without Limiting Your Growth:
                  </strong>{" "}
                  An offshore development team can give businesses additional
                  technical capacity when internal resources are not enough for
                  current or upcoming requirements.
                </p>

              </div>

              <div className="benefits-grid">

                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="benefit-card"
                  >

                    <div className="benefit-glow" />

                    <div className="benefit-content">

                      <div className="benefit-check">
                        <Check />
                      </div>

                      <div>
                        <h3 className="benefit-title">
                          {item.title}
                        </h3>

                        <p className="benefit-description">
                          {item.description}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          </div>
        </section>


        {/* ======================================================
            SECTION 4 — OUR APPROACH
        ====================================================== */}

        <section className="offshore-section approach-section">
          <div className="offshore-container">
            <div className="offshore-inner offshore-section-inner">

              <div className="approach-header">

                <span className="offshore-eyebrow offshore-eyebrow-light">
                  Execution Methodology
                </span>

                <h2 className="approach-title">
                  Our Approach
                </h2>

                <p className="approach-subtitle">
                  A Clear Process for Building Your Development Team
                </p>

              </div>

              <div className="approach-process">

                {/* Desktop Connecting Line */}
                <div className="approach-line" />

                <div className="approach-grid">

                  {approach.map((item) => (
                    <div
                      key={item.number}
                      className="approach-card"
                    >

                      <div className="approach-top-line" />

                      <div className="approach-card-top">

                        <div className="approach-number">
                          {item.number}
                        </div>

                        <span className="approach-label">
                          {item.label}
                        </span>

                      </div>

                      <div className="approach-content">

                        <h3 className="approach-card-title">
                          {item.title}
                        </h3>

                        <p className="approach-card-description">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
}