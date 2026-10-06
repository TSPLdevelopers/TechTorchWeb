import React from "react";
import { ChevronLeft, ShieldAlert } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const bullets = [
  "ERP Architecture",
  "Operations Mgmt",
  "Supply Chain",
  "People Resources",
  "Web Portals",
  "Finance Systems",
  "Payment Solutions",
  "CRM Platforms",
];

export default function TelecomTechnologySection() {
  return (
    <section className="telecom-technology-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .telecom-technology-section {
          width: 100%;
          overflow: hidden;

          background: #f4f1ec;
          color: ${INK};

          font-family: "Inter", sans-serif;
        }

        .telecom-technology-section *,
        .telecom-technology-section *::before,
        .telecom-technology-section *::after {
          box-sizing: border-box;
        }

        /* =========================================
           MAIN CONTAINER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .telecom-technology-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;

          padding: 90px 100px;

          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 70px;
          align-items: start;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .telecom-technology-label {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .telecom-technology-heading {
          margin: 0 0 25px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: -0.035em;
        }

        .telecom-technology-copy {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .telecom-technology-copy p {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           RIGHT FRAMEWORK PANEL
        ========================================= */

        .telecom-framework-panel {
          width: 100%;
          padding: 28px;

          background: #ffffff;
          border-radius: 20px;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.06),
            0 12px 35px rgba(30, 20, 25, 0.035);
        }

        /* =========================================
           FRAMEWORK BADGE
        ========================================= */

        .telecom-framework-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          margin-bottom: 20px;
          padding: 6px 11px;

          border-radius: 999px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.04em;
        }

        /* =========================================
           PANEL HEADING
        ========================================= */

        .telecom-framework-title {
          margin: 0 0 11px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.02em;
        }

        .telecom-framework-description {
          margin: 0 0 23px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* =========================================
           BULLETS
        ========================================= */

        .telecom-bullets {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 22px;
          row-gap: 11px;
        }

        .telecom-bullet {
          min-width: 0;

          display: flex;
          align-items: center;
          gap: 9px;
        }

        .telecom-bullet-dot {
          width: 5px;
          height: 5px;
          flex-shrink: 0;

          border-radius: 50%;
          background: ${WINE};
        }

        .telecom-bullet-text {
          color: ${INK};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.5;
        }

        /* =========================================
           ARCHITECTURAL NOTE
        ========================================= */

        .telecom-cohesion-note {
          width: 100%;

          display: flex;
          align-items: flex-start;
          gap: 12px;

          margin-top: 17px;
          padding: 17px;

          background: #ffffff;
          border-radius: 15px;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .telecom-cohesion-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #fbeef1;
          color: ${WINE};
        }

        .telecom-cohesion-content {
          min-width: 0;
        }

        .telecom-cohesion-title {
          margin: 0 0 5px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          line-height: 1.4;
        }

        .telecom-cohesion-description {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* =========================================
           LARGE TABLET
           100px → 40px
        ========================================= */

        @media (max-width: 1200px) {
          .telecom-technology-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 80px;
            padding-bottom: 80px;

            gap: 50px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .telecom-technology-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 75px;
            padding-bottom: 75px;

            gap: 45px;
          }

          .telecom-technology-heading {
            font-size: 32px;
          }

          .telecom-framework-panel {
            padding: 25px;
          }
        }

        /* =========================================
           SINGLE COLUMN TABLET
        ========================================= */

        @media (max-width: 850px) {
          .telecom-technology-container {
            grid-template-columns: 1fr;

            gap: 40px;

            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .telecom-technology-heading {
            max-width: 650px;
            font-size: 32px;
          }

          .telecom-technology-copy {
            max-width: 750px;
          }

          .telecom-framework-panel {
            max-width: 100%;
          }
        }

        /* =========================================
           MOBILE
           40px → 24px
        ========================================= */

        @media (max-width: 600px) {
          .telecom-technology-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 60px;
            padding-bottom: 60px;

            gap: 30px;
          }

          .telecom-technology-label {
            margin-bottom: 11px;

            font-size: 10px;
            letter-spacing: 0.12em;
          }

          .telecom-technology-heading {
            margin-bottom: 20px;

            font-size: 27px;
            line-height: 1.28;
            letter-spacing: -0.025em;
          }

          .telecom-technology-copy {
            gap: 14px;
          }

          .telecom-technology-copy p {
            font-size: 12.5px;
            line-height: 1.75;
          }

          .telecom-framework-panel {
            padding: 21px;
            border-radius: 17px;
          }

          .telecom-framework-badge {
            margin-bottom: 17px;
            padding: 6px 10px;
            font-size: 8.5px;
          }

          .telecom-framework-title {
            font-size: 16px;
            line-height: 1.4;
          }

          .telecom-framework-description {
            margin-bottom: 20px;

            font-size: 11px;
            line-height: 1.7;
          }

          .telecom-bullets {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .telecom-bullet-text {
            font-size: 11px;
          }

          .telecom-cohesion-note {
            margin-top: 14px;
            padding: 15px;
            gap: 10px;
          }

          .telecom-cohesion-title {
            font-size: 11px;
          }

          .telecom-cohesion-description {
            font-size: 10px;
          }
        }

        /* =========================================
           SMALL MOBILE
           24px → 16px
        ========================================= */

        @media (max-width: 400px) {
          .telecom-technology-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .telecom-technology-heading {
            font-size: 24px;
          }

          .telecom-technology-copy p {
            font-size: 12px;
          }

          .telecom-framework-panel {
            padding: 18px;
          }

          .telecom-framework-title {
            font-size: 15px;
          }

          .telecom-framework-description {
            font-size: 10.5px;
          }

          .telecom-cohesion-note {
            padding: 14px;
          }
        }

        /* =========================================
           DESKTOP BREAK
        ========================================= */

        .desktop-break {
          display: block;
        }

        @media (max-width: 850px) {
          .desktop-break {
            display: none;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .telecom-technology-section * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="telecom-technology-container">

        {/* =====================================
            LEFT: COPY
        ===================================== */}

        <div>
          <p className="telecom-technology-label">
            Telecommunications Technology
          </p>

          <h2 className="telecom-technology-heading">
            Connecting Technology With Business
            <br className="desktop-break" />
            Operations
          </h2>

          <div className="telecom-technology-copy">
            <p>
              Modern telecommunications businesses work across multiple
              functions, applications and digital processes. Managing these
              areas effectively requires technology that fits the
              organization's requirements and works with its existing
              business environment.
            </p>

            <p>
              TechTorch Solutions brings together a range of technology
              services and business solutions to support these requirements.
              Its capabilities include IT Consultancy, Software Engineering,
              Cloud Infrastructure, Cyber Security, Artificial Intelligence,
              Software Development &amp; Support, Business Process
              Outsourcing and Resource &amp; Staffing.
            </p>

            <p>
              The approach is centered around understanding the business
              requirement first and then developing or implementing
              technology that fits the organization. This can include
              building new software, improving existing systems, connecting
              applications, supporting cloud infrastructure or strengthening
              the technology environment.
            </p>
          </div>
        </div>

        {/* =====================================
            RIGHT: FRAMEWORK
        ===================================== */}

        <div>

          <div className="telecom-framework-panel">

            <span className="telecom-framework-badge">
              <ChevronLeft
                size={10}
                strokeWidth={3}
              />

              Integrated Core Framework
            </span>

            <h3 className="telecom-framework-title">
              Unified Enterprise Portfolio
            </h3>

            <p className="telecom-framework-description">
              TechTorch also provides digital solutions across Enterprise
              Resource Planning, Operations Management, Supply Chain
              Management, People Resources, Web Portals, Financial
              Management, Payment Management, Customer Relationship
              Management, E-Commerce and Project Management.
            </p>

            <div className="telecom-bullets">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="telecom-bullet"
                >
                  <span className="telecom-bullet-dot" />

                  <span className="telecom-bullet-text">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* =====================================
              ARCHITECTURAL COHESION
          ===================================== */}

          <div className="telecom-cohesion-note">

            <span className="telecom-cohesion-icon">
              <ShieldAlert
                size={14}
                strokeWidth={1.8}
              />
            </span>

            <div className="telecom-cohesion-content">
              <p className="telecom-cohesion-title">
                Architectural Cohesion
              </p>

              <p className="telecom-cohesion-description">
                Every software component is integrated with strict adherence
                to organizational security, regulatory mandates, and
                operational continuous uptime.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}