import React from "react";
import {
  Target,
  Link2,
  SlidersHorizontal,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const reasons = [
  {
    icon: Target,
    title: "Business-Aligned",
    body: "Solutions shaped around your business requirements.",
  },
  {
    icon: Link2,
    title: "Connected",
    body: "Bring business processes and information together.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible",
    body: "Technology that can adapt to changing requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Supported",
    body: "Support across implementation, training and ongoing maintenance.",
  },
];

export default function WhyTechTorchAndBuildCtaSections() {
  return (
    <section className="why-techtorch-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .why-techtorch-section {
          width: 100%;
          background: #f5f6f8;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =====================================================
           MAIN CONTAINER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ===================================================== */

        .why-techtorch-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 100px;
        }

        /* =====================================================
           WHY TECHTORCH HEADER
        ===================================================== */

        .why-techtorch-header {
          width: 100%;
          text-align: center;
          margin-bottom: 42px;
        }

        .why-techtorch-label {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .why-techtorch-heading {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 36px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        /* =====================================================
           REASONS GRID
        ===================================================== */

        .why-techtorch-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 64px;
        }

        .why-techtorch-card {
          min-width: 0;
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid transparent;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .why-techtorch-card:hover {
          transform: translateY(-4px);
          border-color: #eadde1;
          box-shadow: 0 12px 28px rgba(122, 31, 61, 0.08);
        }

        .why-techtorch-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .why-techtorch-card-title {
          margin: 0 0 8px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 700;
        }

        .why-techtorch-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* =====================================================
           BUILD CTA
        ===================================================== */

        .build-cta {
          width: 100%;
          padding: 64px 60px;
          border-radius: 28px;
          background: ${WINE};
          text-align: center;
        }

        .build-cta-heading {
          margin: 0 0 17px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 36px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .build-cta-description {
          max-width: 680px;
          margin: 0 auto 30px;
          color: #e3c3cf;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 400;
        }

        .build-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 50px;
          padding: 0 26px;
          border: none;
          border-radius: 999px;
          background: #ffffff;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .build-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .build-cta-button:active {
          transform: translateY(0);
        }

        /* =====================================================
           LARGE TABLET
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1100px) {
          .why-techtorch-container {
            padding: 68px 40px;
          }

          .why-techtorch-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .why-techtorch-heading,
          .build-cta-heading {
            font-size: 32px;
          }

          .build-cta {
            padding: 58px 48px;
          }
        }

        /* =====================================================
           TABLET
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 800px) {
          .why-techtorch-container {
            padding: 58px 40px;
          }

          .why-techtorch-header {
            margin-bottom: 34px;
          }

          .why-techtorch-heading {
            font-size: 29px;
          }

          .why-techtorch-grid {
            gap: 14px;
            margin-bottom: 48px;
          }

          .why-techtorch-card {
            padding: 20px;
          }

          .build-cta {
            padding: 50px 32px;
            border-radius: 24px;
          }

          .build-cta-heading {
            font-size: 29px;
          }

          .build-cta-description {
            font-size: 13.5px;
          }
        }

        /* =====================================================
           MOBILE
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 600px) {
          .why-techtorch-container {
            padding: 44px 24px;
          }

          .why-techtorch-header {
            margin-bottom: 30px;
          }

          .why-techtorch-label {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .why-techtorch-heading {
            font-size: 25px;
            line-height: 1.3;
          }

          .why-techtorch-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 36px;
          }

          .why-techtorch-card {
            padding: 19px;
            border-radius: 14px;
          }

          .why-techtorch-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 15px;
          }

          .why-techtorch-card-title {
            font-size: 14px;
          }

          .why-techtorch-card-body {
            font-size: 12px;
            line-height: 1.65;
          }

          .build-cta {
            padding: 40px 20px;
            border-radius: 20px;
          }

          .build-cta-heading {
            font-size: 25px;
            line-height: 1.3;
          }

          .build-cta-description {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 26px;
          }

          .build-cta-button {
            width: 100%;
            min-height: 48px;
            padding: 0 20px;
            font-size: 12.5px;
          }

          .desktop-break {
            display: none;
          }
        }

        /* =====================================================
           SMALL MOBILE
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 400px) {
          .why-techtorch-container {
            padding: 36px 16px;
          }

          .why-techtorch-heading {
            font-size: 22px;
          }

          .why-techtorch-card {
            padding: 17px;
          }

          .why-techtorch-card-title {
            font-size: 13.5px;
          }

          .why-techtorch-card-body {
            font-size: 11.5px;
          }

          .build-cta {
            padding: 34px 16px;
            border-radius: 18px;
          }

          .build-cta-heading {
            font-size: 22px;
          }

          .build-cta-description {
            font-size: 12px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 340px) {
          .why-techtorch-container {
            padding: 30px 16px;
          }

          .why-techtorch-heading {
            font-size: 20px;
          }

          .why-techtorch-grid {
            gap: 10px;
          }

          .why-techtorch-card {
            padding: 15px;
          }

          .build-cta {
            padding: 30px 14px;
          }

          .build-cta-heading {
            font-size: 20px;
          }

          .build-cta-description {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .why-techtorch-card,
          .build-cta-button {
            transition: none;
          }

          .why-techtorch-card:hover,
          .build-cta-button:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="why-techtorch-container">

        {/* =========================
            WHY TECHTORCH
        ========================= */}

        <div className="why-techtorch-header">
          <p className="why-techtorch-label">
            WHY TECHTORCH
          </p>

          <h2 className="why-techtorch-heading">
            Technology With a Clear Business
            <br className="desktop-break" />
            Focus
          </h2>
        </div>

        {/* =========================
            REASONS GRID
        ========================= */}

        <div className="why-techtorch-grid">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="why-techtorch-card"
            >
              <span className="why-techtorch-icon">
                <Icon
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <h3 className="why-techtorch-card-title">
                {title}
              </h3>

              <p className="why-techtorch-card-body">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* =========================
            BUILD CTA
        ========================= */}

        <div className="build-cta">
          <h2 className="build-cta-heading">
            Build a More Connected
            <br className="desktop-break" />
            Manufacturing Business
          </h2>

          <p className="build-cta-description">
            Bring your business processes, supply chain and technology
            environment together with solutions designed around your
            requirements.
          </p>

          <button className="build-cta-button">
            Talk to Our Experts
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}