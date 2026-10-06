import React from "react";

const BRAND_COLOR = "#730024";

const sections = [
  {
    title: "Strategic Guidance & Intelligent Modernization",
    body: "Our services cover the key areas businesses need to build, modernize, protect and scale their technology environment. We provide IT Consultancy to help organizations make informed technology decisions and create practical digital strategies. Our AI Solutions help businesses explore automation, intelligent workflows, and data-driven opportunities that genuinely improve productivity and executive decision-making.",
  },
  {
    title: "Resilient Infrastructure & Proactive Defense",
    body: "With our Cloud Infrastructure services, businesses can build flexible, scalable and reliable technology environments that support evolving operational demands. Concurrently, our Cyber Security services help protect critical systems, proprietary data, and digital operations while systematically strengthening the overall security posture of the enterprise.",
  },
  {
    title: "Purpose-Built Software & Full Lifecycle Engineering",
    body: "For organizations developing or modernizing digital products, our Software Engineering and Development services cover the complete technology journey — from requirements discovery and systems architecture to development, migration, testing, deployment, and ongoing support. We prioritize engineering software around genuine business requirements rather than forcing business processes to bend to off-the-shelf software limitations.",
  },
  {
    title: "Operational Continuity & Specialized Staffing",
    body: "We provide Business Process Outsourcing and technology support services to help organizations improve operational efficiency and allow internal teams to focus on higher-value initiatives. Through our Resource & Staffing services, businesses gain agile access to skilled technology specialists and flexible engineering capacity precisely when needed.",
  },
];

const philosophyPoints = [
  "Zero-force, technical build",
  "Aggressive architecture built to scale",
  "Transparent, governed delivery milestones",
];

export default function TechTorchContent() {
  return (
    <>
      <section className="techtorch-content-section">
        <div className="techtorch-content-container">
          <div className="techtorch-content-grid">

            {/* =================================================
                LEFT COLUMN
            ================================================= */}

            <div className="techtorch-content-left">
              {/* Label */}

              <span className="techtorch-content-label">
                Strategic Perspective
              </span>

              {/* Main Heading */}

              <h2 className="techtorch-content-heading">
                Technology That Helps Your Business Move Forward
              </h2>

              {/* Intro */}

              <p className="techtorch-content-intro">
                Technology should make your business simpler, more efficient
                and better prepared for the future. At TechTorch, we work with
                businesses to understand their technology challenges and
                deliver solutions that fit the way they actually work.
              </p>

              {/* Divider */}

              <div className="techtorch-content-divider" />

              {/* Content Sections */}

              <div className="techtorch-content-sections">
                {sections.map((section) => (
                  <div
                    key={section.title}
                    className="techtorch-content-item"
                  >
                    {/* Bullet */}

                    <span className="techtorch-content-bullet" />

                    <div className="techtorch-content-item-body">
                      <h3 className="techtorch-content-item-title">
                        {section.title}
                      </h3>

                      <p className="techtorch-content-item-text">
                        {section.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Highlight */}

              <div className="techtorch-content-highlight">
                <p>
                  Whether a business is starting a new digital initiative,
                  modernizing existing legacy platforms, strengthening
                  zero-trust security, moving to the cloud, or scaling
                  engineering bandwidth, TechTorch brings the disciplined
                  execution needed to bridge strategy and practical reality.
                </p>
              </div>
            </div>

            {/* =================================================
                RIGHT COLUMN
            ================================================= */}

            <aside className="techtorch-content-right">

              {/* =================================================
                  CORE PHILOSOPHY CARD
              ================================================= */}

              <div className="techtorch-philosophy-card">
                {/* Label */}

                <span className="techtorch-philosophy-label">
                  Our Core Philosophy
                </span>

                {/* Heading */}

                <p className="techtorch-philosophy-heading">
                  "Understand the business problem first, identify the right
                  technology approach, and deliver long-term value."
                </p>

                {/* Description */}

                <p className="techtorch-philosophy-description">
                  As a vendor-agnostic firm, our approach remains the same
                  regardless of the technology involved. We do not lose focused
                  engineering, sustainable operational leverage that grows
                  seamlessly alongside your organization.
                </p>

                {/* Points */}

                <div className="techtorch-philosophy-points">
                  {philosophyPoints.map((point) => (
                    <div
                      key={point}
                      className="techtorch-philosophy-point"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>

                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  TRANSFORMATION CARD
              ================================================= */}

              <div className="techtorch-transformation-card">
                <span className="techtorch-transformation-label">
                  Ready For Every Transformation Stage
                </span>

                <p className="techtorch-transformation-text">
                  Whether a business is starting a new digital initiative,
                  modernizing existing systems, strengthening security, moving
                  to cloud or expanding its technology use, TechTorch brings
                  the experience and capability needed to move from ideas and
                  challenges to practical solutions.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .techtorch-content-section {
          width: 100%;
          overflow: hidden;

          background: #ffffff;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .techtorch-content-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .techtorch-content-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            350px;

          align-items: start;

          gap: 70px;

          width: 100%;
        }

        /* =====================================================
           LEFT COLUMN
        ===================================================== */

        .techtorch-content-left {
          min-width: 0;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .techtorch-content-label {
          display: inline-block;

          margin-bottom: 16px;

          padding: 6px 11px;

          border-radius: 5px;

          background: #fbe4ef;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .techtorch-content-heading {
          max-width: 850px;

          margin: 0 0 16px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #171717;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .techtorch-content-intro {
          max-width: 820px;

          margin: 0 0 26px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .techtorch-content-divider {
          width: 100%;
          height: 1px;

          margin-bottom: 30px;

          background: #e5e5e5;
        }

        /* =====================================================
           CONTENT SECTIONS
        ===================================================== */

        .techtorch-content-sections {
          display: flex;
          flex-direction: column;

          gap: 28px;
        }

        .techtorch-content-item {
          display: flex;
          align-items: flex-start;

          gap: 14px;
        }

        /* =====================================================
           BULLET
        ===================================================== */

        .techtorch-content-bullet {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          margin-top: 8px;

          border-radius: 50%;

          background: ${BRAND_COLOR};
        }

        /* =====================================================
           ITEM BODY
        ===================================================== */

        .techtorch-content-item-body {
          min-width: 0;
        }

        /* =====================================================
           ITEM TITLE
        ===================================================== */

        .techtorch-content-item-title {
          margin: 0 0 7px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;

          color: #171717;
        }

        /* =====================================================
           ITEM TEXT
        ===================================================== */

        .techtorch-content-item-text {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           BOTTOM HIGHLIGHT
        ===================================================== */

        .techtorch-content-highlight {
          margin-top: 30px;

          padding-left: 17px;

          border-left: 2px solid ${BRAND_COLOR};
        }

        .techtorch-content-highlight p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.75;

          color: #525252;
        }

        /* =====================================================
           RIGHT COLUMN
        ===================================================== */

        .techtorch-content-right {
          display: flex;
          flex-direction: column;

          gap: 18px;

          min-width: 0;

          padding-top: 46px;
        }

        /* =====================================================
           PHILOSOPHY CARD
        ===================================================== */

        .techtorch-philosophy-card {
          position: relative;

          overflow: hidden;

          padding: 27px;

          border-radius: 14px;

          background:
            linear-gradient(
              160deg,
              #7a0f45 0%,
              #4a0a2c 100%
            );

          box-shadow:
            0 12px 30px rgba(74, 10, 44, 0.12);
        }

        /* Subtle decorative glow */

        .techtorch-philosophy-card::before {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          top: -90px;
          right: -70px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.06);

          pointer-events: none;
        }

        /* =====================================================
           PHILOSOPHY LABEL
        ===================================================== */

        .techtorch-philosophy-label {
          position: relative;
          z-index: 1;

          display: block;

          margin-bottom: 15px;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.68);
        }

        /* =====================================================
           PHILOSOPHY HEADING
        ===================================================== */

        .techtorch-philosophy-heading {
          position: relative;
          z-index: 1;

          margin: 0 0 18px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.5;

          color: #ffffff;
        }

        /* =====================================================
           PHILOSOPHY DESCRIPTION
        ===================================================== */

        .techtorch-philosophy-description {
          position: relative;
          z-index: 1;

          margin: 0 0 20px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.75;

          color: rgba(255, 255, 255, 0.7);
        }

        /* =====================================================
           PHILOSOPHY POINTS
        ===================================================== */

        .techtorch-philosophy-points {
          position: relative;
          z-index: 1;

          display: flex;
          flex-direction: column;

          gap: 11px;
        }

        .techtorch-philosophy-point {
          display: flex;
          align-items: center;

          gap: 9px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.5;

          color: rgba(255, 255, 255, 0.88);
        }

        .techtorch-philosophy-point svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;

          color: rgba(255, 255, 255, 0.82);
        }

        /* =====================================================
           TRANSFORMATION CARD
        ===================================================== */

        .techtorch-transformation-card {
          padding: 23px;

          border: 1px solid #e5e5e5;
          border-radius: 14px;

          background: #fafafa;
        }

        /* =====================================================
           TRANSFORMATION LABEL
        ===================================================== */

        .techtorch-transformation-label {
          display: block;

          margin-bottom: 11px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: #737373;
        }

        /* =====================================================
           TRANSFORMATION TEXT
        ===================================================== */

        .techtorch-transformation-text {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .techtorch-content-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .techtorch-content-grid {
            grid-template-columns:
              minmax(0, 1fr)
              320px;

            gap: 45px;
          }

          .techtorch-content-heading {
            font-size: 34px;
          }

          .techtorch-content-intro {
            font-size: 13px;
          }

          .techtorch-content-item-text {
            font-size: 12px;
          }

          .techtorch-content-right {
            padding-top: 42px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .techtorch-content-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .techtorch-content-grid {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .techtorch-content-heading {
            max-width: 760px;

            font-size: 32px;
          }

          .techtorch-content-right {
            display: grid;
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;

            padding-top: 0;
          }

          .techtorch-philosophy-card {
            padding: 24px;
          }

          .techtorch-transformation-card {
            padding: 24px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .techtorch-content-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .techtorch-content-grid {
            gap: 30px;
          }

          .techtorch-content-label {
            margin-bottom: 13px;

            font-size: 8px;
          }

          .techtorch-content-heading {
            margin-bottom: 13px;

            font-size: 28px;
            line-height: 1.22;
          }

          .techtorch-content-intro {
            margin-bottom: 22px;

            font-size: 11.5px;
            line-height: 1.7;
          }

          .techtorch-content-divider {
            margin-bottom: 24px;
          }

          .techtorch-content-sections {
            gap: 23px;
          }

          .techtorch-content-item {
            gap: 11px;
          }

          .techtorch-content-item-title {
            margin-bottom: 6px;

            font-size: 14px;
          }

          .techtorch-content-item-text {
            font-size: 11px;
            line-height: 1.7;
          }

          .techtorch-content-highlight {
            margin-top: 24px;

            padding-left: 14px;
          }

          .techtorch-content-highlight p {
            font-size: 11px;
          }

          .techtorch-content-right {
            display: flex;
            flex-direction: column;

            gap: 14px;
          }

          .techtorch-philosophy-card {
            padding: 21px;
          }

          .techtorch-philosophy-label {
            margin-bottom: 12px;

            font-size: 8px;
          }

          .techtorch-philosophy-heading {
            margin-bottom: 15px;

            font-size: 16px;
          }

          .techtorch-philosophy-description {
            margin-bottom: 17px;

            font-size: 10px;
          }

          .techtorch-philosophy-point {
            font-size: 10px;
          }

          .techtorch-transformation-card {
            padding: 20px;
          }

          .techtorch-transformation-label {
            font-size: 8px;
          }

          .techtorch-transformation-text {
            font-size: 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .techtorch-content-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .techtorch-content-grid {
            gap: 26px;
          }

          .techtorch-content-label {
            margin-bottom: 11px;

            padding: 5px 9px;

            font-size: 7px;
          }

          .techtorch-content-heading {
            font-size: 24px;
          }

          .techtorch-content-intro {
            font-size: 10.5px;
          }

          .techtorch-content-sections {
            gap: 21px;
          }

          .techtorch-content-item {
            gap: 9px;
          }

          .techtorch-content-bullet {
            width: 5px;
            height: 5px;

            margin-top: 7px;
          }

          .techtorch-content-item-title {
            font-size: 13px;
          }

          .techtorch-content-item-text {
            font-size: 10px;
          }

          .techtorch-content-highlight {
            padding-left: 12px;
          }

          .techtorch-content-highlight p {
            font-size: 10px;
          }

          .techtorch-philosophy-card {
            padding: 19px;
          }

          .techtorch-philosophy-heading {
            font-size: 15px;
          }

          .techtorch-philosophy-description {
            font-size: 9.5px;
          }

          .techtorch-philosophy-point {
            font-size: 9.5px;
          }

          .techtorch-transformation-card {
            padding: 18px;
          }

          .techtorch-transformation-text {
            font-size: 9.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .techtorch-content-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .techtorch-content-heading {
            font-size: 22px;
          }

          .techtorch-content-intro {
            font-size: 10px;
          }

          .techtorch-content-item-title {
            font-size: 12.5px;
          }

          .techtorch-content-item-text {
            font-size: 9.5px;
          }

          .techtorch-philosophy-card {
            padding: 17px;
          }

          .techtorch-philosophy-heading {
            font-size: 14px;
          }

          .techtorch-transformation-card {
            padding: 17px;
          }
        }
      `}</style>
    </>
  );
}