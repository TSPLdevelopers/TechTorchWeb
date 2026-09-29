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

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


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
          max-width: 1200px;

          margin: 0 auto;

          padding-left: 32px;
          padding-right: 32px;

          box-sizing: border-box;
        }


        /* =====================================================
           SECTION 1
        ===================================================== */

        .why-section {
          width: 100%;
          background: #ffffff;
        }


        .why-section-container {
          padding-top: 64px;
          padding-bottom: 68px;
        }


        /* =====================================================
           BADGE
           INTER
        ===================================================== */

        .why-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 16px;

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
           PLUS JAKARTA SANS
        ===================================================== */

        .why-main-heading {
          margin: 0 0 32px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 30px;
          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.7px;

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

          gap: 14px;
        }


        /* =====================================================
           REASON CARD
        ===================================================== */

        .why-reason-card {
          min-width: 0;

          padding: 18px;

          background: #ffffff;

          border: 1px solid #ece9e4;

          border-radius: 13px;

          box-sizing: border-box;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }


        .why-reason-card:hover {
          transform: translateY(-3px);

          border-color: #e4d4da;

          box-shadow:
            0 10px 25px
            rgba(0, 0, 0, 0.06);
        }


        /* =====================================================
           ICON
        ===================================================== */

        .why-reason-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 15px;

          border-radius: 9px;

          background: #fbeef1;
          color: ${WINE};
        }


        /* =====================================================
           CARD HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .why-reason-title {
          margin: 0 0 7px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 12px;
          line-height: 1.4;

          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           CARD BODY
           INTER
        ===================================================== */

        .why-reason-body {
          margin: 0 0 15px;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1.6;

          color: ${MUTED};
        }


        /* =====================================================
           CARD TAG
           INTER
        ===================================================== */

        .why-reason-tag {
          display: inline-block;

          max-width: 100%;

          padding: 5px 7px;

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


        .ready-container {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1.4fr)
            minmax(0, 1fr);

          gap: 45px;

          align-items: center;

          padding-top: 64px;
          padding-bottom: 64px;
        }


        /* =====================================================
           CTA CONTENT
        ===================================================== */

        .ready-content {
          min-width: 0;
        }


        /* =====================================================
           CTA BADGE
           INTER
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
           PLUS JAKARTA SANS
        ===================================================== */

        .ready-heading {
          max-width: 680px;

          margin: 0 0 16px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 30px;

          line-height: 1.25;

          font-weight: 700;

          letter-spacing: -0.7px;

          color: #ffffff;
        }


        /* =====================================================
           CTA SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .ready-description {
          max-width: 590px;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 12px;

          line-height: 1.7;

          font-weight: 500;

          color: #d9c3cf;
        }


        /* =====================================================
           CTA BUTTONS
           INTER
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

          border-radius: 999px;

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
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .why-techtorch-container {
            padding-left: 30px;
            padding-right: 30px;
          }


          .why-reasons-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 15px;
          }


          .ready-container {
            gap: 35px;
          }


          .ready-heading {
            font-size: 27px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .why-techtorch-container {
            padding-left: 24px;
            padding-right: 24px;
          }


          .why-section-container {
            padding-top: 52px;
            padding-bottom: 56px;
          }


          .why-main-heading {
            font-size: 27px;
          }


          .why-reasons-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }


          .why-reason-card {
            padding: 17px;
          }


          .ready-container {
            grid-template-columns: 1fr;

            gap: 30px;

            padding-top: 54px;
            padding-bottom: 56px;
          }


          .ready-heading {
            font-size: 27px;
          }


          .ready-description {
            max-width: 680px;

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
            padding-left: 18px;
            padding-right: 18px;
          }


          .why-section-container {
            padding-top: 42px;
            padding-bottom: 46px;
          }


          .why-badge {
            margin-bottom: 13px;

            padding: 5px 9px;

            font-size: 8px;
          }


          .why-badge-dot {
            width: 5px;
            height: 5px;
          }


          .why-main-heading {
            margin-bottom: 24px;

            font-size: 23px;

            line-height: 1.22;

            letter-spacing: -0.5px;
          }


          .why-reasons-grid {
            grid-template-columns: 1fr;

            gap: 11px;
          }


          .why-reason-card {
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
            font-size: 10px;

            line-height: 1.6;

            margin-bottom: 13px;
          }


          .why-reason-tag {
            font-size: 7.5px;
          }


          /* CTA */

          .ready-container {
            padding-top: 44px;
            padding-bottom: 46px;

            gap: 27px;
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

            font-size: 23px;

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
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .why-techtorch-container {
            padding-left: 15px;
            padding-right: 15px;
          }


          .why-main-heading {
            font-size: 21px;
          }


          .why-reason-card {
            padding: 14px;
          }


          .why-reason-title {
            font-size: 11.5px;
          }


          .why-reason-body {
            font-size: 9.5px;
          }


          .ready-container {
            padding-top: 40px;
            padding-bottom: 42px;
          }


          .ready-heading {
            font-size: 21px;
          }


          .ready-description {
            font-size: 10px;
          }


          .ready-primary-button,
          .ready-secondary-button {
            min-height: 40px;

            font-size: 8.5px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

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
            font-size: 19px;
          }


          .ready-description {
            font-size: 9.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
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

          {/* Badge - Inter */}

          <span className="why-badge">

            <span className="why-badge-dot" />

            WHY TECHTORCH

          </span>


          {/* Main Heading - Plus Jakarta Sans */}

          <h2 className="why-main-heading">

            Technology Built Around the Way{" "}

            <span>
              You Work
            </span>

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

                  {/* Icon */}

                  <span className="why-reason-icon">

                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />

                  </span>


                  {/* Card Heading - Plus Jakarta Sans */}

                  <h3 className="why-reason-title">
                    {title}
                  </h3>


                  {/* Card Body - Inter */}

                  <p className="why-reason-body">
                    {body}
                  </p>


                  {/* Tag - Inter */}

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


          {/* =================================================
              CTA CONTENT
          ================================================= */}

          <div className="ready-content">

            {/* Badge - Inter */}

            <span className="ready-badge">

              <span className="ready-badge-dot" />

              NEXT STEPS

            </span>


            {/* CTA Heading - Plus Jakarta Sans */}

            <h2 className="ready-heading">

              Ready to Modernize Your Financial
              Technology Infrastructure?

            </h2>


            {/* CTA Subheading - Plus Jakarta Sans */}

            <p className="ready-description">

              Discover how TechTorch's unified ERP, TorchX Accounts
              platform, and bespoke engineering capabilities accelerate
              growth, safeguard compliance, and streamline financial
              operations.

            </p>

          </div>


          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="ready-buttons">

            <button
              type="button"
              className="ready-primary-button"
            >

              Talk to Our Experts

              <ArrowRight
                size={15}
              />

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