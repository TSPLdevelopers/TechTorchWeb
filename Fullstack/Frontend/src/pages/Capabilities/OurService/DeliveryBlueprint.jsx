import React from "react";

const BRAND_COLOR = "#730024";

const steps = [
  {
    num: "01",
    title: "Understand & Scope",
    desc: "Deep discovery of enterprise workflows, architecture audit, and ROI benchmarking.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Scalable systems blueprinting, security governance, and modular technology roadmaps.",
  },
  {
    num: "03",
    title: "Engineering & Deployment",
    desc: "Agile sprint cycles, CI/CD automated deployment, and enterprise-grade testing.",
  },
  {
    num: "04",
    title: "Continuous Evolution & Support",
    desc: "24/7 SLA monitoring, proactive optimization, and ongoing architectural support.",
  },
];

export default function TechTorchDeliveryBlueprint() {
  return (
    <>
      <section className="delivery-blueprint-section">
        <div className="delivery-blueprint-container">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="delivery-blueprint-header">
            {/* Label */}

            <div className="delivery-blueprint-label">
              <span className="delivery-blueprint-label-line" />

              <span>Our Delivery Blueprint</span>

              <span className="delivery-blueprint-label-line" />
            </div>

            {/* Heading */}

            <h2 className="delivery-blueprint-heading">
              How We Work Together
            </h2>

            {/* Description */}

            <p className="delivery-blueprint-description">
              A disciplined, human-driven framework ensuring every technical
              deployment solves genuine business needs.
            </p>
          </div>

          {/* =================================================
              STEPS
          ================================================= */}

          <div className="delivery-blueprint-grid">
            {steps.map((step, index) => (
              <div className="delivery-blueprint-card" key={step.num}>
                {/* Top Accent */}

                <div className="delivery-blueprint-accent" />

                {/* Top Row */}

                <div className="delivery-blueprint-top">
                  {/* Number */}

                  <span className="delivery-blueprint-number">
                    {step.num}
                  </span>

                  {/* Step Indicator */}

                  <span className="delivery-blueprint-step">
                    Step {index + 1}
                  </span>
                </div>

                {/* Title */}

                <h3 className="delivery-blueprint-card-title">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="delivery-blueprint-card-description">
                  {step.desc}
                </p>

                {/* Bottom */}

                <div className="delivery-blueprint-bottom">
                  <span className="delivery-blueprint-bottom-line" />

                  <span className="delivery-blueprint-bottom-text">
                    TechTorch Framework
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .delivery-blueprint-section {
          width: 100%;
          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 78px;
          padding-bottom: 78px;

          background: #ffffff;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .delivery-blueprint-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .delivery-blueprint-header {
          width: 100%;
          max-width: 760px;

          margin: 0 auto 42px;

          text-align: center;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .delivery-blueprint-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          margin-bottom: 13px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        .delivery-blueprint-label-line {
          width: 32px;
          height: 1px;
          flex-shrink: 0;

          background: ${BRAND_COLOR};
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .delivery-blueprint-heading {
          margin: 0 0 12px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 35px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #171717;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .delivery-blueprint-description {
          max-width: 650px;

          margin: 0 auto;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .delivery-blueprint-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 18px;

          width: 100%;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .delivery-blueprint-card {
          position: relative;

          display: flex;
          flex-direction: column;

          min-height: 255px;

          overflow: hidden;

          padding: 23px;

          border: 1px solid #e5e5e5;
          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 5px 22px rgba(0, 0, 0, 0.035);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .delivery-blueprint-card:hover {
          transform: translateY(-5px);

          border-color: rgba(115, 0, 36, 0.15);

          box-shadow:
            0 15px 35px rgba(115, 0, 36, 0.09);
        }

        /* =====================================================
           TOP ACCENT
        ===================================================== */

        .delivery-blueprint-accent {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 3px;

          background: ${BRAND_COLOR};

          opacity: 0;

          transition: opacity 0.3s ease;
        }

        .delivery-blueprint-card:hover
          .delivery-blueprint-accent {
          opacity: 1;
        }

        /* =====================================================
           TOP ROW
        ===================================================== */

        .delivery-blueprint-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 22px;
        }

        /* =====================================================
           NUMBER
        ===================================================== */

        .delivery-blueprint-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 40px;
          height: 40px;
          flex-shrink: 0;

          border-radius: 10px;

          background: ${BRAND_COLOR};

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1;

          color: #ffffff;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .delivery-blueprint-card:hover
          .delivery-blueprint-number {
          transform: translateY(-2px);

          box-shadow:
            0 7px 15px rgba(115, 0, 36, 0.18);
        }

        /* =====================================================
           STEP INDICATOR
        ===================================================== */

        .delivery-blueprint-step {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: #d4d4d4;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .delivery-blueprint-card-title {
          margin: 0 0 10px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;

          color: #171717;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .delivery-blueprint-card-description {
          flex: 1;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           BOTTOM
        ===================================================== */

        .delivery-blueprint-bottom {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-top: 22px;

          padding-top: 13px;

          border-top: 1px solid #f0f0f0;
        }

        .delivery-blueprint-bottom-line {
          width: 32px;
          height: 1px;
          flex-shrink: 0;

          background: ${BRAND_COLOR};

          transition: width 0.3s ease;
        }

        .delivery-blueprint-card:hover
          .delivery-blueprint-bottom-line {
          width: 48px;
        }

        .delivery-blueprint-bottom-text {
          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #a3a3a3;
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .delivery-blueprint-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 68px;
            padding-bottom: 68px;
          }

          .delivery-blueprint-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .delivery-blueprint-heading {
            font-size: 32px;
          }

          .delivery-blueprint-card {
            min-height: 245px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .delivery-blueprint-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .delivery-blueprint-header {
            margin-bottom: 34px;
          }

          .delivery-blueprint-heading {
            font-size: 30px;
          }

          .delivery-blueprint-description {
            font-size: 13px;
          }

          .delivery-blueprint-card {
            padding: 21px;
            min-height: 235px;
          }

          .delivery-blueprint-card-title {
            font-size: 16px;
          }

          .delivery-blueprint-card-description {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .delivery-blueprint-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .delivery-blueprint-header {
            margin-bottom: 28px;
          }

          .delivery-blueprint-label {
            gap: 8px;

            margin-bottom: 11px;

            font-size: 9.5px;
          }

          .delivery-blueprint-label-line {
            width: 27px;
          }

          .delivery-blueprint-heading {
            margin-bottom: 10px;

            font-size: 27px;
          }

          .delivery-blueprint-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .delivery-blueprint-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .delivery-blueprint-card {
            min-height: auto;

            padding: 20px;

            border-radius: 15px;
          }

          .delivery-blueprint-top {
            margin-bottom: 18px;
          }

          .delivery-blueprint-number {
            width: 38px;
            height: 38px;

            font-size: 11px;
          }

          .delivery-blueprint-step {
            font-size: 9px;
          }

          .delivery-blueprint-card-title {
            font-size: 16px;
          }

          .delivery-blueprint-card-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .delivery-blueprint-bottom {
            margin-top: 19px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .delivery-blueprint-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .delivery-blueprint-header {
            margin-bottom: 24px;
          }

          .delivery-blueprint-label {
            gap: 7px;

            margin-bottom: 10px;

            font-size: 8.5px;
          }

          .delivery-blueprint-label-line {
            width: 24px;
          }

          .delivery-blueprint-heading {
            font-size: 24px;
          }

          .delivery-blueprint-description {
            font-size: 11.5px;
          }

          .delivery-blueprint-grid {
            gap: 12px;
          }

          .delivery-blueprint-card {
            padding: 17px;

            border-radius: 14px;
          }

          .delivery-blueprint-top {
            margin-bottom: 16px;
          }

          .delivery-blueprint-number {
            width: 35px;
            height: 35px;

            border-radius: 9px;

            font-size: 10px;
          }

          .delivery-blueprint-step {
            font-size: 8px;
          }

          .delivery-blueprint-card-title {
            margin-bottom: 8px;

            font-size: 15px;
          }

          .delivery-blueprint-card-description {
            font-size: 11px;
            line-height: 1.65;
          }

          .delivery-blueprint-bottom {
            margin-top: 17px;
            padding-top: 11px;
          }

          .delivery-blueprint-bottom-line {
            width: 27px;
          }

          .delivery-blueprint-card:hover
            .delivery-blueprint-bottom-line {
            width: 40px;
          }

          .delivery-blueprint-bottom-text {
            font-size: 7.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .delivery-blueprint-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .delivery-blueprint-heading {
            font-size: 22px;
          }

          .delivery-blueprint-description {
            font-size: 11px;
          }

          .delivery-blueprint-card {
            padding: 15px;
          }

          .delivery-blueprint-card-title {
            font-size: 14px;
          }

          .delivery-blueprint-card-description {
            font-size: 10.5px;
          }
        }
      `}</style>
    </>
  );
}