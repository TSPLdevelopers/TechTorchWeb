import React from "react";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Settings,
  Cog,
  Radio,
  Zap,
  Monitor,
  Package,
  ArrowUpRight,
} from "lucide-react";

// =================================================
// COLORS
// =================================================

const MAROON_DARK = "#4a0a30";
const MAROON = "#7a0f47";
const MAROON_LIGHT = "#8a1450";

// =================================================
// INDUSTRIES
// =================================================

const industries = [
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Automated compliance, fraud anomaly detection & risk modeling",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Adaptive learning platforms, student analytics & automated grading",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Clinical diagnostic telemetry & secure patient data workflows",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Real-time hyper-personalization & automated inventory prediction",
  },
  {
    icon: Settings,
    title: "Information Technology",
    description:
      "Autonomous system observability & intelligent code assistance",
  },
  {
    icon: Cog,
    title: "Manufacturing",
    description:
      "Computer-vision defect analysis & predictive equipment maintenance",
  },
  {
    icon: Radio,
    title: "Telecommunications",
    description:
      "Network bandwidth orchestration & proactive customer care",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Smart grid load balancing & carbon telemetry optimization",
  },
  {
    icon: Monitor,
    title: "Transportation",
    description:
      "Fleet routing algorithms & predictive supply chain logistics",
  },
  {
    icon: Package,
    title: "FMCG",
    description:
      "Multi-echelon demand forecasting & distributor automation",
  },
];

// =================================================
// COMPONENT
// =================================================

export default function AIEcosystemIntegration() {
  return (
    <section className="ai-ecosystem-section">

      {/* =================================================
          DIAGONAL STRIPE OVERLAY
      ================================================= */}

      <div className="ai-ecosystem-stripes" />

      {/* =================================================
          SOFT GRADIENT OVERLAY
      ================================================= */}

      <div className="ai-ecosystem-soft-layer" />

      {/* =================================================
          MAIN CONTAINER

          Desktop: 100px
          Tablet: 40px
          Mobile: 24px
          Small Mobile: 16px
      ================================================= */}

      <div className="ai-ecosystem-container">

        {/* =================================================
            EYEBROW
        ================================================= */}

        <div className="ai-ecosystem-eyebrow">
          <span className="ai-ecosystem-dot" />

          <span className="ai-ecosystem-eyebrow-text">
            Ecosystem Integration
          </span>
        </div>

        {/* =================================================
            HEADING
        ================================================= */}

        <h1 className="ai-ecosystem-heading">
          Artificial Intelligence Within Your Business Technology Environment
        </h1>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="ai-ecosystem-description">
          How TechTorch embeds sovereign artificial intelligence seamlessly
          into industry-specific digital architectures, ensuring
          high-compliance execution, data isolation, and immediate domain
          value.
        </p>

        {/* =================================================
            INDUSTRY GRID
        ================================================= */}

        <div className="ai-ecosystem-grid">
          {industries.map(
            ({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="ai-ecosystem-card"
              >

                {/* =================================================
                    ICON
                ================================================= */}

                <div className="ai-ecosystem-icon-wrapper">
                  <Icon className="ai-ecosystem-icon" />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="ai-ecosystem-card-content">

                  <h3 className="ai-ecosystem-card-title">
                    {title}
                  </h3>

                  <p className="ai-ecosystem-card-description">
                    {description}
                  </p>
                </div>

                {/* =================================================
                    ARROW
                ================================================= */}

                <ArrowUpRight className="ai-ecosystem-arrow" />
              </div>
            )
          )}
        </div>
      </div>

      {/* =================================================
          RESPONSIVE CSS
      ================================================= */}

      <style>{`

        /* =================================================
           MAIN SECTION
        ================================================= */

        .ai-ecosystem-section {
          position: relative;

          width: 100%;
          min-height: 650px;

          display: flex;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              120% 140% at 10% 100%,
              ${MAROON_DARK} 0%,
              ${MAROON} 45%,
              ${MAROON_LIGHT} 100%
            );
        }

        /* =================================================
           DIAGONAL STRIPES
        ================================================= */

        .ai-ecosystem-stripes {
          position: absolute;
          inset: 0;

          pointer-events: none;

          opacity: 0.035;

          background-image:
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.9) 0px,
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px,
              transparent 30px
            );
        }

        /* =================================================
           SOFT LAYER
        ================================================= */

        .ai-ecosystem-soft-layer {
          position: absolute;
          inset: 0;

          pointer-events: none;

          opacity: 0.025;

          background-image:
            linear-gradient(
              135deg,
              transparent 0%,
              rgba(255, 255, 255, 0.15) 50%,
              transparent 100%
            );
        }

        /* =================================================
           MAIN CONTAINER

           Desktop
           100px left/right
        ================================================= */

        .ai-ecosystem-container {
          position: relative;
          z-index: 10;

          width: 100%;
          box-sizing: border-box;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 72px;
          padding-bottom: 72px;
        }

        /* =================================================
           EYEBROW
        ================================================= */

        .ai-ecosystem-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 20px;

          padding: 7px 13px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.05);
        }

        .ai-ecosystem-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #fda4af;
        }

        .ai-ecosystem-eyebrow-text {
          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 500;

          line-height: 1.3;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          color: rgba(255, 241, 242, 0.9);
        }

        /* =================================================
           MAIN HEADING
        ================================================= */

        .ai-ecosystem-heading {
          max-width: 900px;

          margin: 0 0 16px 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 44px;
          font-weight: 700;

          line-height: 1.15;

          letter-spacing: -0.025em;

          color: #ffffff;
        }

        /* =================================================
           DESCRIPTION
        ================================================= */

        .ai-ecosystem-description {
          max-width: 850px;

          margin: 0 0 42px 0;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.7;

          color: rgba(255, 241, 242, 0.7);
        }

        /* =================================================
           INDUSTRY GRID
        ================================================= */

        .ai-ecosystem-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 14px 18px;
        }

        /* =================================================
           INDUSTRY CARD
        ================================================= */

        .ai-ecosystem-card {
          min-width: 0;

          min-height: 86px;

          display: flex;
          align-items: flex-start;

          gap: 15px;

          box-sizing: border-box;

          padding: 15px 17px;

          border: 1px solid rgba(255, 255, 255, 0.1);

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.055);

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ai-ecosystem-card:hover {
          transform: translateY(-2px);

          border-color: rgba(255, 255, 255, 0.18);

          background: rgba(255, 255, 255, 0.09);

          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.08);
        }

        /* =================================================
           ICON WRAPPER
        ================================================= */

        .ai-ecosystem-icon-wrapper {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          box-sizing: border-box;

          border: 1px solid rgba(255, 255, 255, 0.1);

          border-radius: 8px;

          background: rgba(255, 255, 255, 0.08);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .ai-ecosystem-card:hover
        .ai-ecosystem-icon-wrapper {
          transform: scale(1.07);

          border-color: rgba(255, 255, 255, 0.2);

          background: rgba(255, 255, 255, 0.12);
        }

        .ai-ecosystem-icon {
          width: 17px;
          height: 17px;

          color: rgba(255, 255, 255, 0.9);

          transition: transform 0.3s ease;
        }

        .ai-ecosystem-card:hover
        .ai-ecosystem-icon {
          transform: scale(1.12);
        }

        /* =================================================
           CARD CONTENT
        ================================================= */

        .ai-ecosystem-card-content {
          min-width: 0;

          flex: 1;
        }

        /* =================================================
           CARD TITLE
        ================================================= */

        .ai-ecosystem-card-title {
          margin: 0 0 4px 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;
          font-weight: 600;

          line-height: 1.4;

          color: #ffffff;
        }

        /* =================================================
           CARD DESCRIPTION
        ================================================= */

        .ai-ecosystem-card-description {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;
          font-weight: 400;

          line-height: 1.55;

          color: rgba(255, 241, 242, 0.55);
        }

        /* =================================================
           ARROW
        ================================================= */

        .ai-ecosystem-arrow {
          width: 14px;
          height: 14px;

          flex-shrink: 0;

          margin-top: 2px;

          color: rgba(255, 241, 242, 0.35);

          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .ai-ecosystem-card:hover
        .ai-ecosystem-arrow {
          transform:
            translateX(2px)
            translateY(-2px);

          color: rgba(255, 255, 255, 0.75);
        }

        /* =================================================
           LARGE TABLET
           <= 1200px

           Horizontal spacing = 40px
        ================================================= */

        @media (max-width: 1200px) {

          .ai-ecosystem-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 62px;
            padding-bottom: 62px;
          }

          .ai-ecosystem-heading {
            max-width: 800px;

            font-size: 40px;
          }

          .ai-ecosystem-description {
            max-width: 760px;

            margin-bottom: 38px;

            font-size: 13.5px;
          }

          .ai-ecosystem-grid {
            gap: 13px 16px;
          }
        }

        /* =================================================
           TABLET
           <= 900px

           Horizontal spacing = 40px
        ================================================= */

        @media (max-width: 900px) {

          .ai-ecosystem-section {
            min-height: auto;
          }

          .ai-ecosystem-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 54px;
            padding-bottom: 54px;
          }

          .ai-ecosystem-eyebrow {
            margin-bottom: 17px;
          }

          .ai-ecosystem-heading {
            max-width: 720px;

            font-size: 34px;

            line-height: 1.18;
          }

          .ai-ecosystem-description {
            max-width: 700px;

            margin-bottom: 34px;

            font-size: 13px;
          }

          .ai-ecosystem-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 12px 14px;
          }

          .ai-ecosystem-card {
            min-height: 84px;

            gap: 12px;

            padding: 13px 14px;
          }

          .ai-ecosystem-icon-wrapper {
            width: 36px;
            height: 36px;
          }

          .ai-ecosystem-icon {
            width: 16px;
            height: 16px;
          }

          .ai-ecosystem-card-title {
            font-size: 13px;
          }

          .ai-ecosystem-card-description {
            font-size: 10.5px;
          }
        }

        /* =================================================
           MOBILE
           <= 700px

           Horizontal spacing = 24px
        ================================================= */

        @media (max-width: 700px) {

          .ai-ecosystem-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 46px;
            padding-bottom: 46px;
          }

          .ai-ecosystem-eyebrow {
            gap: 7px;

            margin-bottom: 15px;

            padding: 6px 11px;
          }

          .ai-ecosystem-dot {
            width: 5px;
            height: 5px;
          }

          .ai-ecosystem-eyebrow-text {
            font-size: 9px;

            letter-spacing: 0.1em;
          }

          .ai-ecosystem-heading {
            max-width: 100%;

            margin-bottom: 13px;

            font-size: 29px;

            line-height: 1.2;
          }

          .ai-ecosystem-description {
            max-width: 100%;

            margin-bottom: 30px;

            font-size: 12px;

            line-height: 1.65;
          }

          .ai-ecosystem-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .ai-ecosystem-card {
            min-height: auto;

            gap: 12px;

            padding: 13px;
          }

          .ai-ecosystem-icon-wrapper {
            width: 36px;
            height: 36px;
          }

          .ai-ecosystem-card-title {
            font-size: 13px;
          }

          .ai-ecosystem-card-description {
            font-size: 10.5px;

            line-height: 1.55;
          }

          .ai-ecosystem-arrow {
            width: 13px;
            height: 13px;
          }
        }

        /* =================================================
           SMALL MOBILE
           <= 480px

           Horizontal spacing = 16px
        ================================================= */

        @media (max-width: 480px) {

          .ai-ecosystem-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 38px;
            padding-bottom: 38px;
          }

          .ai-ecosystem-eyebrow {
            margin-bottom: 13px;

            padding: 5px 9px;
          }

          .ai-ecosystem-eyebrow-text {
            font-size: 8px;

            letter-spacing: 0.09em;
          }

          .ai-ecosystem-heading {
            margin-bottom: 11px;

            font-size: 25px;

            line-height: 1.2;
          }

          .ai-ecosystem-description {
            margin-bottom: 25px;

            font-size: 11.5px;

            line-height: 1.65;
          }

          .ai-ecosystem-grid {
            gap: 10px;
          }

          .ai-ecosystem-card {
            gap: 10px;

            padding: 12px;

            border-radius: 10px;
          }

          .ai-ecosystem-icon-wrapper {
            width: 34px;
            height: 34px;

            border-radius: 7px;
          }

          .ai-ecosystem-icon {
            width: 15px;
            height: 15px;
          }

          .ai-ecosystem-card-title {
            margin-bottom: 3px;

            font-size: 12px;
          }

          .ai-ecosystem-card-description {
            font-size: 10px;

            line-height: 1.55;
          }

          .ai-ecosystem-arrow {
            width: 12px;
            height: 12px;

            margin-top: 1px;
          }
        }

        /* =================================================
           EXTRA SMALL
           <= 360px

           Horizontal spacing = 16px
        ================================================= */

        @media (max-width: 360px) {

          .ai-ecosystem-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .ai-ecosystem-heading {
            font-size: 23px;
          }

          .ai-ecosystem-description {
            font-size: 10.8px;
          }

          .ai-ecosystem-card {
            padding: 11px;
          }

          .ai-ecosystem-icon-wrapper {
            width: 32px;
            height: 32px;
          }

          .ai-ecosystem-icon {
            width: 14px;
            height: 14px;
          }

          .ai-ecosystem-card-title {
            font-size: 11.5px;
          }

          .ai-ecosystem-card-description {
            font-size: 9.5px;
          }
        }

      `}</style>
    </section>
  );
}