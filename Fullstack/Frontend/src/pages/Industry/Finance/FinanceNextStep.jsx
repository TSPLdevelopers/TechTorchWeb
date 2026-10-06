import React from "react";
import {
  User,
  Link2,
  Square,
  BarChart2,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const reasons = [
  {
    icon: User,
    title: "Business-Focused",
    body: "Solutions begin with your operational requirements.",
    tag: "TAILORED ARCHITECTURE",
  },
  {
    icon: Link2,
    title: "Connected",
    body: "Bring systems and information together.",
    tag: "INTEGRATED SYSTEMS",
  },
  {
    icon: Square,
    title: "Scalable",
    body: "Adapt to changing business needs.",
    tag: "DYNAMIC SCALING",
  },
  {
    icon: BarChart2,
    title: "Data-Aware",
    body: "Support better visibility with reporting and analytics.",
    tag: "ACTIONABLE TELEMETRY",
  },
  {
    icon: RefreshCcw,
    title: "Supported",
    body: "Provide ongoing maintenance and technical assistance.",
    tag: "FULL-LIFECYCLE SUPPORT",
  },
];

export default function WhyTechTorchAndReadySections() {
  return (
    <div className="why-techtorch-page">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           BOX SIZING
        ===================================================== */

        .why-techtorch-page,
        .why-techtorch-page * {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN
        ===================================================== */

        .why-techtorch-page {
          width: 100%;
          overflow: hidden;

          color: ${INK};

          font-family: "Inter", sans-serif;
        }

        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .why-techtorch-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;
        }

        /* =====================================================
           SECTION 1
        ===================================================== */

        .why-section {
          width: 100%;
          background: #ffffff;
        }

        .why-section-container {
          padding-top: 72px;
          padding-bottom: 76px;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .why-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 17px;

          padding: 6px 11px;

          border-radius: 999px;

          background: #fbeef1;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;

          letter-spacing: 0.05em;
        }

        .why-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .why-main-heading {
          margin: 0 0 32px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;

          letter-spacing: -0.75px;

          color: ${INK};
        }

        .why-main-heading span {
          color: ${WINE};
        }

        /* =====================================================
           REASONS GRID
        ===================================================== */

        .why-reasons-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 18px;
        }

        /* =====================================================
           REASON CARD
        ===================================================== */

        .why-reason-card {
          min-width: 0;
          min-height: 185px;

          padding: 20px;

          background: #ffffff;

          border: 1px solid #ece9e4;
          border-radius: 14px;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .why-reason-card:hover {
          transform: translateY(-4px);

          border-color: #e4d4da;

          box-shadow:
            0 12px 28px
            rgba(0, 0, 0, 0.07);
        }

        /* =====================================================
           ICON
        ===================================================== */

        .why-reason-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 16px;

          border-radius: 9px;

          background: #fbeef1;

          color: ${WINE};
        }

        /* =====================================================
           CARD HEADING
        ===================================================== */

        .why-reason-title {
          margin: 0 0 8px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;

          color: ${INK};
        }

        /* =====================================================
           CARD BODY
        ===================================================== */

        .why-reason-body {
          margin: 0 0 16px;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          line-height: 1.65;

          color: ${MUTED};
        }

        /* =====================================================
           CARD TAG
        ===================================================== */

        .why-reason-tag {
          display: inline-block;

          max-width: 100%;

          padding: 5px 8px;

          border-radius: 6px;

          background: #f2f1f5;

          color: ${MUTED};

          font-family: "Inter", sans-serif;

          font-size: 7.5px;
          line-height: 1.3;
          font-weight: 700;

          letter-spacing: 0.04em;

          word-break: break-word;
        }

        /* =====================================================
           CTA SECTION
        ===================================================== */

        .ready-section {
          position: relative;

          width: 100%;

          overflow: hidden;

          background:
            linear-gradient(
              115deg,
              #1a0d15 0%,
              #2a1220 40%,
              #3d1226 70%,
              #1a0d15 100%
            );
        }

        .ready-background {
          position: absolute;

          inset: 0;

          opacity: 0.25;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 70% 40%,
              rgba(122, 31, 61, 0.6),
              transparent 60%
            );
        }

        /* =====================================================
           CTA CONTAINER
        ===================================================== */

        .ready-container {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1.4fr)
            minmax(0, 1fr);

          gap: 70px;

          align-items: center;

          padding-top: 70px;
          padding-bottom: 70px;
        }

        /* =====================================================
           CTA CONTENT
        ===================================================== */

        .ready-content {
          min-width: 0;
        }

        /* =====================================================
           CTA BADGE
        ===================================================== */

        .ready-badge {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 18px;

          padding: 6px 11px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.1);

          color: #e3c3cf;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;

          letter-spacing: 0.05em;
        }

        .ready-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #ffffff;
        }

        /* =====================================================
           CTA HEADING
        ===================================================== */

        .ready-heading {
          max-width: 760px;

          margin: 0 0 17px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 32px;
          line-height: 1.25;
          font-weight: 700;

          letter-spacing: -0.75px;

          color: #ffffff;
        }

        /* =====================================================
           CTA DESCRIPTION
        ===================================================== */

        .ready-description {
          max-width: 680px;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 12px;
          line-height: 1.72;
          font-weight: 500;

          color: #d9c3cf;
        }

        /* =====================================================
           CTA BUTTONS
        ===================================================== */

        .ready-buttons {
          display: flex;

          align-items: center;
          justify-content: flex-end;

          flex-wrap: wrap;

          gap: 10px;
        }

        .ready-primary-button,
        .ready-secondary-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          min-height: 43px;

          padding: 0 20px;

          /* UPDATED BUTTON RADIUS */
          border-radius: 6px;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.03em;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        /* =====================================================
           PRIMARY CTA
        ===================================================== */

        .ready-primary-button {
          border: 1px solid #ffffff;

          background: #ffffff;

          color: ${WINE};
        }

        .ready-primary-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px
            rgba(255, 255, 255, 0.12);
        }

        /* =====================================================
           SECONDARY CTA
        ===================================================== */

        .ready-secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.3);

          background: transparent;

          color: #ffffff;
        }

        .ready-secondary-button:hover {
          border-color: rgba(255, 255, 255, 0.65);

          background: rgba(255, 255, 255, 0.06);

          transform: translateY(-2px);
        }

        /* =====================================================
           LARGE DESKTOP / LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {
          .why-techtorch-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .why-reasons-grid {
            gap: 15px;
          }

          .why-reason-card {
            padding: 18px;
          }

          .ready-container {
            gap: 50px;
          }

          .ready-heading {
            font-size: 29px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .why-techtorch-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .why-section-container {
            padding-top: 56px;
            padding-bottom: 60px;
          }

          .why-main-heading {
            font-size: 28px;
          }

          .why-reasons-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 15px;
          }

          .why-reason-card {
            min-height: 165px;

            padding: 18px;
          }

          .ready-container {
            grid-template-columns: 1fr;

            gap: 32px;

            padding-top: 58px;
            padding-bottom: 60px;
          }

          .ready-heading {
            font-size: 28px;
          }

          .ready-description {
            max-width: 720px;

            font-size: 11.5px;
          }

          .ready-buttons {
            justify-content: flex-start;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .why-techtorch-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .why-section-container {
            padding-top: 44px;
            padding-bottom: 48px;
          }

          .why-badge {
            margin-bottom: 14px;

            padding: 5px 9px;

            font-size: 8px;
          }

          .why-badge-dot {
            width: 5px;
            height: 5px;
          }

          .why-main-heading {
            margin-bottom: 24px;

            font-size: 24px;
            line-height: 1.22;

            letter-spacing: -0.5px;
          }

          .why-reasons-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .why-reason-card {
            min-height: auto;

            padding: 16px;
          }

          .why-reason-icon {
            width: 34px;
            height: 34px;

            margin-bottom: 13px;
          }

          .why-reason-title {
            font-size: 12px;
          }

          .why-reason-body {
            margin-bottom: 13px;

            font-size: 10px;
            line-height: 1.62;
          }

          .why-reason-tag {
            font-size: 7.5px;
          }

          /* CTA */

          .ready-container {
            padding-top: 46px;
            padding-bottom: 48px;

            gap: 28px;
          }

          .ready-badge {
            margin-bottom: 15px;

            padding: 5px 9px;

            font-size: 8px;
          }

          .ready-badge-dot {
            width: 5px;
            height: 5px;
          }

          .ready-heading {
            margin-bottom: 14px;

            font-size: 24px;
            line-height: 1.25;

            letter-spacing: -0.45px;
          }

          .ready-description {
            font-size: 11px;

            line-height: 1.7;
          }

          .ready-buttons {
            width: 100%;

            flex-direction: column;

            align-items: stretch;
            justify-content: stretch;

            gap: 9px;
          }

          .ready-primary-button,
          .ready-secondary-button {
            width: 100%;

            min-height: 42px;

            padding: 0 16px;

            font-size: 9px;

            /* SAME 6PX RADIUS ON MOBILE */
            border-radius: 6px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .why-techtorch-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .why-section-container {
            padding-top: 40px;
            padding-bottom: 44px;
          }

          .why-main-heading {
            font-size: 22px;
          }

          .why-reason-card {
            padding: 15px;
          }

          .why-reason-title {
            font-size: 11.5px;
          }

          .why-reason-body {
            font-size: 9.5px;
          }

          .ready-container {
            padding-top: 42px;
            padding-bottom: 44px;
          }

          .ready-heading {
            font-size: 22px;
          }

          .ready-description {
            font-size: 10.5px;
          }

          .ready-primary-button,
          .ready-secondary-button {
            border-radius: 6px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {
          .why-techtorch-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .why-main-heading {
            font-size: 20px;
          }

          .why-reason-title {
            font-size: 11px;
          }

          .why-reason-body {
            font-size: 9px;
          }

          .ready-heading {
            font-size: 20px;
          }

          .ready-description {
            font-size: 9.5px;
          }

          .ready-primary-button,
          .ready-secondary-button {
            min-height: 40px;

            font-size: 8.5px;

            border-radius: 6px;
          }
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .why-reason-card,
          .ready-primary-button,
          .ready-secondary-button {
            transition: none;
          }

          .why-reason-card:hover,
          .ready-primary-button:hover,
          .ready-secondary-button:hover {
            transform: none;
          }
        }
      `}</style>

      {/* =====================================================
          SECTION 1 — WHY TECHTORCH
      ===================================================== */}

      <section className="why-section">
        <div className="why-techtorch-container why-section-container">

          <span className="why-badge">
            <span className="why-badge-dot" />
            WHY TECHTORCH
          </span>

          <h2 className="why-main-heading">
            Technology Built Around the Way{" "}
            <span>You Work</span>
          </h2>

          <div className="why-reasons-grid">
            {reasons.map(
              ({
                icon: Icon,
                title,
                body,
                tag,
              }) => (
                <div
                  key={title}
                  className="why-reason-card"
                >
                  <span className="why-reason-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h3 className="why-reason-title">
                    {title}
                  </h3>

                  <p className="why-reason-body">
                    {body}
                  </p>

                  <span className="why-reason-tag">
                    {tag}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — NEXT STEPS CTA
      ===================================================== */}

      <section className="ready-section">
        <div
          className="ready-background"
          aria-hidden="true"
        />

        <div className="why-techtorch-container ready-container">

          <div className="ready-content">
            <span className="ready-badge">
              <span className="ready-badge-dot" />
              NEXT STEPS
            </span>

            <h2 className="ready-heading">
              Ready to Modernize Your Financial
              Technology Infrastructure?
            </h2>

            <p className="ready-description">
              Discover how TechTorch's unified ERP, TorchX Accounts
              platform, and bespoke engineering capabilities accelerate
              growth, safeguard compliance, and streamline financial
              operations.
            </p>
          </div>

          {/* CTA BUTTONS */}

          <div className="ready-buttons">
            <button
              type="button"
              className="ready-primary-button"
            >
              Talk to Our Experts
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              className="ready-secondary-button"
            >
              Get in Touch
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}