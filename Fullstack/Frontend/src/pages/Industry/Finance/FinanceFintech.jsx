import React from "react";
import {
  Link2,
  RefreshCw,
  Briefcase,
  LifeBuoy,
  MoreHorizontal,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const capabilities = [
  {
    icon: Link2,
    title: "Integrate",
    body: "Connect applications and systems for better information flow.",
  },
  {
    icon: RefreshCw,
    title: "Modernize",
    body: "Upgrade and improve existing technology environments.",
  },
  {
    icon: Briefcase,
    title: "Build",
    body: "Develop custom solutions for specific business needs.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    body: "Ensure systems stay reliable with ongoing maintenance and assistance.",
  },
];

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Analyze requirements and existing technology.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define solution and implementation approach.",
  },
  {
    num: "03",
    title: "Develop",
    body: "Build and integrate the required technology.",
  },
  {
    num: "04",
    title: "Deploy",
    body: "Test and implement with focus on usability.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance and technical support.",
  },
];

export default function FintechEngineeringAndApproachSections() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           MAIN WRAPPER
        ================================================= */

        .fintech-sections {
          width: 100%;
          overflow: hidden;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          box-sizing: border-box;
        }

        .fintech-sections *,
        .fintech-sections *::before,
        .fintech-sections *::after {
          box-sizing: border-box;
        }

        /* =================================================
           COMMON CONTAINER
        ================================================= */

        .fintech-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
        }

        /* =================================================
           SECTION 1
        ================================================= */

        .fintech-engineering {
          width: 100%;
          background: ${WINE};
        }

        .fintech-engineering-container {
          padding-top: 78px;
          padding-bottom: 78px;

          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 60px;
          align-items: start;
        }

        /* =================================================
           BADGES
        ================================================= */

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          padding: 6px 12px;
          margin-bottom: 20px;

          border-radius: 999px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .engineering-badge {
          background: rgba(255, 255, 255, 0.12);
          color: #f3d9e2;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .engineering-dot {
          background: #ffffff;
        }

        /* =================================================
           ENGINEERING CONTENT
        ================================================= */

        .engineering-heading {
          margin: 0 0 24px;

          color: #ffffff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
          max-width: 760px;
        }

        .engineering-copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 780px;
        }

        .engineering-description {
          margin: 0;

          color: #e3c3cf;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
        }

        .engineering-description.highlight {
          color: #f3e2e8;
          font-weight: 600;
        }

        /* =================================================
           CAPABILITY CARDS
        ================================================= */

        .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .capability-card {
          min-width: 0;
          padding: 22px;

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .capability-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.11);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .capability-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 16px;

          border-radius: 8px;

          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
        }

        .capability-title {
          margin: 0 0 6px;

          color: #ffffff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
        }

        .capability-body {
          margin: 0;

          color: #d9b7c4;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =================================================
           SECTION 2
        ================================================= */

        .approach-section {
          width: 100%;
          background: #f4f1ec;
        }

        .approach-container {
          padding-top: 78px;
          padding-bottom: 78px;
        }

        /* =================================================
           APPROACH HEADER
        ================================================= */

        .approach-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

          gap: 60px;
          align-items: start;

          margin-bottom: 40px;
        }

        .approach-badge {
          background: #fbeef1;
          color: ${WINE};
        }

        .approach-dot {
          background: ${WINE};
        }

        .approach-heading {
          margin: 0;

          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .approach-heading span {
          color: ${WINE};
        }

        .approach-description {
          margin: 0;
          padding-top: 4px;

          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
          max-width: 700px;
        }

        /* =================================================
           STEPS
        ================================================= */

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .step-card {
          min-width: 0;
          padding: 22px;

          background: #ffffff;
          border-radius: 12px;

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
        }

        .step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 16px;
        }

        .step-number {
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
        }

        .step-title {
          margin: 0 0 6px;

          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
        }

        .step-body {
          margin: 0;

          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =================================================
           LAPTOP
        ================================================= */

        @media (max-width: 1200px) {
          .fintech-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .fintech-engineering-container {
            gap: 42px;
          }

          .engineering-heading {
            font-size: 34px;
          }

          .approach-header {
            gap: 42px;
          }

          .approach-heading {
            font-size: 31px;
          }

          .steps-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {
          .fintech-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .fintech-engineering-container {
            grid-template-columns: 1fr;
            gap: 36px;

            padding-top: 62px;
            padding-bottom: 62px;
          }

          .engineering-heading {
            max-width: 760px;
            font-size: 32px;
          }

          .engineering-copy {
            max-width: 800px;
          }

          .capabilities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .approach-container {
            padding-top: 62px;
            padding-bottom: 62px;
          }

          .approach-header {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 34px;
          }

          .approach-description {
            padding-top: 0;
            max-width: 800px;
          }

          .approach-heading {
            font-size: 30px;
          }

          .steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {
          .fintech-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .fintech-engineering-container {
            padding-top: 52px;
            padding-bottom: 52px;
            gap: 30px;
          }

          .section-badge {
            margin-bottom: 16px;
            font-size: 10px;
          }

          .engineering-heading {
            margin-bottom: 20px;
            font-size: 26px;
            line-height: 1.3;
          }

          .engineering-copy {
            gap: 14px;
          }

          .engineering-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .capabilities-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .capability-card {
            padding: 19px;
          }

          .capability-title {
            font-size: 14px;
          }

          .capability-body {
            font-size: 12px;
            line-height: 1.65;
          }

          .approach-container {
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .approach-header {
            gap: 16px;
            margin-bottom: 28px;
          }

          .approach-heading {
            font-size: 25px;
            line-height: 1.35;
          }

          .approach-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .step-card {
            padding: 19px;
          }

          .step-title {
            font-size: 14px;
          }

          .step-body {
            font-size: 12px;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .fintech-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .fintech-engineering-container,
          .approach-container {
            padding-top: 44px;
            padding-bottom: 44px;
          }

          .engineering-heading {
            font-size: 23px;
          }

          .engineering-description {
            font-size: 12px;
          }

          .approach-heading {
            font-size: 22px;
          }

          .approach-description {
            font-size: 12px;
          }

          .capability-card,
          .step-card {
            padding: 17px;
          }

          .capability-icon {
            width: 35px;
            height: 35px;
            margin-bottom: 14px;
          }

          .step-number {
            width: 30px;
            height: 30px;
            font-size: 10px;
          }
        }

        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 340px) {
          .fintech-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .fintech-engineering-container,
          .approach-container {
            padding-top: 38px;
            padding-bottom: 38px;
          }

          .engineering-heading {
            font-size: 21px;
          }

          .approach-heading {
            font-size: 20px;
          }

          .engineering-description,
          .approach-description {
            font-size: 11.5px;
          }

          .capability-body,
          .step-body {
            font-size: 11px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .capability-card,
          .step-card {
            transition: none;
          }

          .capability-card:hover,
          .step-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="fintech-sections">

        {/* =========================================
            SECTION 1: FINTECH ENGINEERING
        ========================================== */}

        <section className="fintech-engineering">
          <div className="fintech-container fintech-engineering-container">

            {/* Left Content */}
            <div>
              <span className="section-badge engineering-badge">
                <span className="badge-dot engineering-dot" />
                FINTECH ENGINEERING &amp; TRANSFORMATION
              </span>

              <h2 className="engineering-heading">
                Modernize the Technology Behind Your Financial Operations
              </h2>

              <div className="engineering-copy">
                <p className="engineering-description">
                  Legacy financial applications and disjointed spreadsheets
                  increase compliance liabilities and slow execution.
                  TechTorch delivers purpose-built software engineering to
                  refactor, integrate, and modernize critical transaction
                  platforms.
                </p>

                <p className="engineering-description">
                  Our senior engineering teams develop bespoke client portals,
                  secure API integrations, high-performance microservices,
                  automated payment gateways, and compliant cloud
                  infrastructures tailored to stringent financial standards.
                </p>

                <p className="engineering-description highlight">
                  We engineer modular systems designed for scale—ensuring your
                  tech stack evolves as your transaction volume and reporting
                  mandates expand.
                </p>
              </div>
            </div>

            {/* Capability Cards */}
            <div className="capabilities-grid">
              {capabilities.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="capability-card"
                >
                  <span className="capability-icon">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h3 className="capability-title">
                    {title}
                  </h3>

                  <p className="capability-body">
                    {body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================
            SECTION 2: OUR APPROACH
        ========================================== */}

        <section className="approach-section">
          <div className="fintech-container approach-container">

            {/* Header */}
            <div className="approach-header">

              <div>
                <span className="section-badge approach-badge">
                  <span className="badge-dot approach-dot" />
                  OUR APPROACH
                </span>

                <h2 className="approach-heading">
                  From Business Requirements
                  <br />
                  to Practical{" "}
                  <span>Technology</span>
                </h2>
              </div>

              <p className="approach-description">
                Every technology initiative begins with an understanding of
                the business requirement. Our approach focuses on creating
                practical solutions that align technology with operational
                objectives.
              </p>

            </div>

            {/* Steps */}
            <div className="steps-grid">
              {steps.map(({ num, title, body }) => (
                <div
                  key={num}
                  className="step-card"
                >
                  <div className="step-top">
                    <span className="step-number">
                      {num}
                    </span>

                    <MoreHorizontal
                      size={14}
                      style={{ color: "#c9c4bc" }}
                    />
                  </div>

                  <h3 className="step-title">
                    {title}
                  </h3>

                  <p className="step-body">
                    {body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>
    </>
  );
}