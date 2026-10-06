import React from "react";
import { BookOpen, Zap } from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    title: "Custom Software Development",
    description:
      "Build software solutions designed around your specific business requirements, with a focus on scalability, flexibility, and long-term usability.",
  },
  {
    title: "Web & Mobile Application Development",
    description:
      "Develop responsive and feature-rich applications designed to provide reliable experiences across platforms and devices.",
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Support core business operations with solutions that integrate with existing systems and help streamline workflows.",
  },
  {
    title: "API Development & System Integration",
    description:
      "Enable secure and reliable data exchange between applications and connect technology platforms with third-party services.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through functional, performance, security, and usability testing, including automated and manual approaches.",
  },
  {
    title: "Software Modernization",
    description:
      "Upgrade legacy systems and move toward modern architectures and cloud-based environments where appropriate.",
  },
];

const whyCards = [
  {
    title: "Technology Expertise Aligned to Your Business",
    description:
      "TechTorch combines expertise in modern technologies and development methodologies with an agile approach to project delivery. Our focus is on understanding your requirements and delivering technology solutions that align with your goals.",
  },
  {
    title: "Flexible Workforce Solutions",
    description:
      "Our Resource and Staffing services are designed to provide businesses with skilled professionals and flexible workforce solutions, helping organisations strengthen their technology capabilities according to their needs.",
  },
  {
    title: "Dedicated Technical Support",
    description:
      "From development and testing to deployment, maintenance, and ongoing support, TechTorch provides technical capabilities that can support your technology journey from project requirements through continued improvement.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ScaleCapabilitiesPage() {
  return (
    <div className="scale-capabilities-page">
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        .scale-capabilities-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #1c1c1c;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .scale-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          box-sizing: border-box;
        }

        .scale-jakarta {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .scale-inter {
          font-family: "Inter", sans-serif;
        }

        /* =====================================================
           MAIN LAYOUT
        ===================================================== */

        .scale-main {
          padding-top: 64px;
          padding-bottom: 64px;
        }

        .scale-layout {
          display: grid;
          grid-template-columns: 285px minmax(0, 1fr);
          gap: 46px;
          align-items: start;
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .scale-sidebar {
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: sticky;
          top: 30px;
        }

        .scale-side-card {
          padding: 24px;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          background: #ffffff;
        }

        .scale-side-card.support {
          border-color: rgba(115, 0, 36, 0.1);
          background: rgba(115, 0, 36, 0.045);
        }

        .scale-side-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .scale-side-heading svg {
          width: 15px;
          height: 15px;
          color: #730024;
          flex-shrink: 0;
        }

        .scale-side-label {
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .scale-side-title {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
        }

        .scale-side-description {
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        .scale-side-card.support .scale-side-description {
          color: #666666;
        }

        /* =====================================================
           MAIN CONTENT CARD
        ===================================================== */

        .scale-content {
          min-width: 0;
          padding: 38px;
          border: 1px solid #e4e4e4;
          border-radius: 16px;
          background: #ffffff;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .scale-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 15px;
        }

        .scale-eyebrow-line {
          width: 21px;
          height: 1px;
          background: #730024;
          flex-shrink: 0;
        }

        .scale-eyebrow-text {
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .scale-main-title {
          max-width: 900px;
          margin: 0 0 28px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        /* =====================================================
           BODY COPY
        ===================================================== */

        .scale-body {
          max-width: 1000px;
          margin-bottom: 42px;
          color: #5f5f5f;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.75;
        }

        .scale-body p {
          margin: 0 0 17px;
        }

        .scale-body p:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .scale-section-header {
          margin-bottom: 18px;
        }

        .scale-section-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 11px;
        }

        .scale-section-heading-line {
          width: 21px;
          height: 1px;
          background: #730024;
          flex-shrink: 0;
        }

        .scale-section-heading-label {
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .scale-section-title {
          margin: 0;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 600;
        }

        /* =====================================================
           CAPABILITY GRID
        ===================================================== */

        .scale-capability-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 42px;
        }

        .scale-capability-card {
          padding: 21px;
          border: 1px solid #e4e4e4;
          border-radius: 11px;
          background: rgba(249, 249, 249, 0.65);
          transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .scale-capability-card:hover {
          border-color: rgba(115, 0, 36, 0.22);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.035);
        }

        .scale-capability-card.full {
          grid-column: 1 / -1;
        }

        .scale-card-title {
          margin: 0 0 8px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13.5px;
          line-height: 1.4;
          font-weight: 600;
        }

        .scale-card-description {
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================================
           WHY TECHTORCH
        ===================================================== */

        .scale-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .scale-why-card {
          padding: 21px;
          border: 1px solid #e4e4e4;
          border-radius: 11px;
          background: #ffffff;
          transition:
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .scale-why-card:hover {
          border-color: rgba(115, 0, 36, 0.22);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.035);
        }

        .scale-why-dot {
          display: block;
          width: 6px;
          height: 6px;
          margin-bottom: 13px;
          border-radius: 50%;
          background: #730024;
        }

        .scale-why-title {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13.5px;
          line-height: 1.4;
          font-weight: 600;
        }

        .scale-why-description {
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .scale-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .scale-main {
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .scale-layout {
            grid-template-columns: 270px minmax(0, 1fr);
            gap: 34px;
          }

          .scale-content {
            padding: 32px;
          }

          .scale-main-title {
            font-size: 32px;
          }

          .scale-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {
          .scale-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .scale-sidebar {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .scale-side-card {
            padding: 21px;
          }

          .scale-content {
            padding: 30px;
          }

          .scale-main-title {
            max-width: 760px;
          }

          .scale-capability-grid {
            gap: 14px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .scale-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .scale-main {
            padding-top: 36px;
            padding-bottom: 40px;
          }

          .scale-sidebar {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .scale-side-card {
            padding: 19px;
          }

          .scale-content {
            padding: 24px;
            border-radius: 14px;
          }

          .scale-main-title {
            font-size: 28px;
            line-height: 1.18;
            margin-bottom: 21px;
          }

          .scale-body {
            font-size: 12.5px;
            line-height: 1.72;
            margin-bottom: 34px;
          }

          .scale-body p {
            margin-bottom: 14px;
          }

          .scale-section-heading {
            margin-bottom: 9px;
          }

          .scale-section-title {
            font-size: 19px;
          }

          .scale-capability-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 34px;
          }

          .scale-capability-card {
            padding: 18px;
          }

          .scale-capability-card.full {
            grid-column: auto;
          }

          .scale-why-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .scale-why-card {
            padding: 18px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .scale-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .scale-main {
            padding-top: 28px;
            padding-bottom: 32px;
          }

          .scale-content {
            padding: 19px 16px;
            border-radius: 12px;
          }

          .scale-side-card {
            padding: 17px;
            border-radius: 12px;
          }

          .scale-side-label {
            font-size: 9px;
          }

          .scale-side-title {
            font-size: 14px;
          }

          .scale-side-description {
            font-size: 11.5px;
          }

          .scale-eyebrow-text,
          .scale-section-heading-label {
            font-size: 9px;
          }

          .scale-main-title {
            font-size: 25px;
          }

          .scale-body {
            font-size: 11.5px;
          }

          .scale-section-title {
            font-size: 18px;
          }

          .scale-card-title,
          .scale-why-title {
            font-size: 12.5px;
          }

          .scale-card-description,
          .scale-why-description {
            font-size: 11px;
          }

          .scale-capability-card,
          .scale-why-card {
            padding: 16px;
          }
        }
      `}</style>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="scale-main">
        <div className="scale-container">

          <div className="scale-layout">

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="scale-sidebar">

              {/* Executive Briefing */}
              <div className="scale-side-card">
                <div className="scale-side-heading">
                  <BookOpen />

                  <span className="scale-side-label">
                    EXECUTIVE BRIEFING
                  </span>
                </div>

                <h3 className="scale-side-title">
                  The Value of Flexible Engineering Support
                </h3>

                <p className="scale-side-description">
                  Access the right technical expertise and additional
                  engineering capacity to support your projects, strengthen
                  existing teams, and respond to changing technology
                  requirements.
                </p>
              </div>

              {/* Flexible Support */}
              <div className="scale-side-card support">
                <div className="scale-side-heading">
                  <Zap />

                  <span className="scale-side-label">
                    FLEXIBLE & SCALABLE SUPPORT
                  </span>
                </div>

                <p className="scale-side-description">
                  TechTorch provides flexible technology resources that can
                  complement your existing teams and adapt to your project
                  requirements and business priorities.
                </p>
              </div>
            </aside>

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="scale-content">

              {/* Eyebrow */}
              <div className="scale-eyebrow">
                <span className="scale-eyebrow-line" />

                <span className="scale-eyebrow-text">
                  CAPABILITY OVERVIEW
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="scale-main-title">
                Scale Your Technology Capabilities with Skilled Remote
                Engineers
              </h1>

              {/* Body */}
              <div className="scale-body">
                <p>
                  Building and maintaining digital products requires the
                  right technical expertise and engineering capacity. As
                  technology requirements evolve, organisations may need
                  additional skills and resources to support software
                  development, implementation, testing, and ongoing
                  improvement.
                </p>

                <p>
                  TechTorch IT Augmentation provides access to skilled
                  professionals and flexible workforce solutions designed to
                  complement your existing technology teams. Our approach
                  focuses on understanding your business requirements and
                  providing technical capabilities aligned with your project
                  goals.
                </p>

                <p>
                  From software engineering and application development to
                  system integration, quality assurance, modernization,
                  maintenance, and support, our technology expertise can help
                  organisations address a wide range of software and
                  engineering requirements.
                </p>

                <p>
                  Our professionals can work as an extension of your existing
                  team, helping support development initiatives while your
                  organisation remains focused on its core business
                  priorities.
                </p>
              </div>

              {/* =================================================
                  TECHNICAL OFFERINGS
              ================================================= */}

              <div className="scale-section-header">
                <div className="scale-section-heading">
                  <span className="scale-section-heading-line" />

                  <span className="scale-section-heading-label">
                    TECHNICAL OFFERINGS
                  </span>
                </div>

                <h2 className="scale-section-title">
                  Our Technology Capabilities
                </h2>
              </div>

              {/* Capability Cards */}
              <div className="scale-capability-grid">
                {capabilities.map((item) => (
                  <div
                    key={item.title}
                    className="scale-capability-card"
                  >
                    <h3 className="scale-card-title">
                      {item.title}
                    </h3>

                    <p className="scale-card-description">
                      {item.description}
                    </p>
                  </div>
                ))}

                {/* Maintenance & Technical Support */}
                <div className="scale-capability-card full">
                  <h3 className="scale-card-title">
                    Maintenance & Technical Support
                  </h3>

                  <p className="scale-card-description">
                    Provide ongoing support to address technical challenges,
                    maintain software performance, and support continuous
                    improvement.
                  </p>
                </div>
              </div>

              {/* =================================================
                  VALUE PROPOSITION
              ================================================= */}

              <div className="scale-section-header">
                <div className="scale-section-heading">
                  <span className="scale-section-heading-line" />

                  <span className="scale-section-heading-label">
                    VALUE PROPOSITION
                  </span>
                </div>

                <h2 className="scale-section-title">
                  Why TechTorch
                </h2>
              </div>

              {/* Why TechTorch Cards */}
              <div className="scale-why-grid">
                {whyCards.map((item) => (
                  <div
                    key={item.title}
                    className="scale-why-card"
                  >
                    <span className="scale-why-dot" />

                    <h3 className="scale-why-title">
                      {item.title}
                    </h3>

                    <p className="scale-why-description">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}