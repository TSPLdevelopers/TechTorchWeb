import React from "react";
import { Zap, ArrowRight } from "lucide-react";

const BRAND_COLOR = "#730024";

export default function ITAugmentationHero() {
  return (
    <section className="it-augmentation-hero">
      <div className="it-augmentation-hero-container">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="it-augmentation-hero-content">

          {/* Eyebrow */}
          <div className="it-augmentation-hero-eyebrow">
            <span className="it-augmentation-hero-eyebrow-dot" />

            <span>
              IT Augmentation · Workforce Velocity
            </span>
          </div>

          {/* Heading */}
          <h1 className="it-augmentation-hero-heading">
            Extend Your Technology Team with{" "}
            <span>Flexible IT Expertise</span>
          </h1>

          {/* Body */}
          <div className="it-augmentation-hero-copy">

            {/* Subheading */}
            <p className="it-augmentation-hero-subheading">
              Build stronger technology capabilities with flexible IT
              augmentation services designed around your project, resource,
              and business requirements.
            </p>

            {/* Description */}
            <p className="it-augmentation-hero-description">
              TechTorch Solutions helps businesses access the right
              technology expertise when they need additional support, whether
              for a specific project, ongoing development, or changing
              workforce requirements.
            </p>
          </div>

          {/* CTA */}
          <button className="it-augmentation-hero-button">
            <span>Talk to Our Experts</span>

            <ArrowRight className="it-augmentation-hero-button-icon" />
          </button>
        </div>

        {/* =====================================================
            RIGHT IMAGE
        ===================================================== */}

        <div className="it-augmentation-hero-visual">

          {/* Image Card */}
          <div className="it-augmentation-hero-image-card">
            <div className="it-augmentation-hero-image" />
          </div>

          {/* =================================================
              FLOATING STATS
          ================================================= */}

          <div className="it-augmentation-hero-stats">

            <div className="it-augmentation-hero-stats-inner">

              {/* Deployment Speed */}
              <div className="it-augmentation-hero-stat">
                <div className="it-augmentation-hero-stat-icon">
                  <Zap />
                </div>

                <div>
                  <div className="it-augmentation-hero-stat-label">
                    DEPLOYMENT SPEED
                  </div>

                  <div className="it-augmentation-hero-stat-value">
                    48h Rapid Deployment
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="it-augmentation-hero-stat-divider" />

              {/* Vetting Tier */}
              <div className="it-augmentation-hero-stat vetting-stat">
                <div className="it-augmentation-hero-stat-label">
                  VETTING TIER
                </div>

                <div className="it-augmentation-hero-stat-value">
                  Top 3% Vetted Talent
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           HERO
        ===================================================== */

        .it-augmentation-hero {
          width: 100%;

          overflow: hidden;

          background: #f7f5f3;
        }

        /* =====================================================
           CONTAINER
           Desktop: 100px
        ===================================================== */

        .it-augmentation-hero-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          align-items: center;

          gap: 65px;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .it-augmentation-hero-content {
          width: 100%;
          max-width: 680px;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .it-augmentation-hero-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 22px;

          padding: 7px 13px;

          border: 1px solid #e5e2df;
          border-radius: 999px;

          background: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.4;

          letter-spacing: 0.06em;

          color: ${BRAND_COLOR};
        }

        .it-augmentation-hero-eyebrow-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${BRAND_COLOR};
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .it-augmentation-hero-heading {
          margin: 0 0 21px;

          max-width: 680px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;

          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        .it-augmentation-hero-heading span {
          color: ${BRAND_COLOR};
        }

        /* =====================================================
           COPY
        ===================================================== */

        .it-augmentation-hero-copy {
          display: flex;
          flex-direction: column;

          gap: 13px;

          max-width: 640px;

          margin-bottom: 30px;
        }

        .it-augmentation-hero-subheading {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.6;

          color: #454545;
        }

        .it-augmentation-hero-description {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .it-augmentation-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          padding: 12px 21px;

          border: none;
          border-radius: 8px;

          background: ${BRAND_COLOR};

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;

          color: #ffffff;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease,
            box-shadow 0.3s ease;
        }

        .it-augmentation-hero-button:hover {
          transform: translateY(-2px);

          opacity: 0.92;

          box-shadow:
            0 10px 24px rgba(115, 0, 36, 0.22);
        }

        .it-augmentation-hero-button-icon {
          width: 16px;
          height: 16px;

          transition: transform 0.3s ease;
        }

        .it-augmentation-hero-button:hover
          .it-augmentation-hero-button-icon {
          transform: translateX(3px);
        }

        /* =====================================================
           RIGHT VISUAL
        ===================================================== */

        .it-augmentation-hero-visual {
          position: relative;

          width: 100%;

          min-width: 0;
        }

        /* =====================================================
           IMAGE CARD
        ===================================================== */

        .it-augmentation-hero-image-card {
          width: 100%;

          padding: 7px;

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.11);
        }

        .it-augmentation-hero-image {
          width: 100%;
          height: 455px;

          border-radius: 11px;

          background-image: url("/DeploymentMethodology.png");
          background-size: cover;
          background-position: center;

          transition: transform 0.5s ease;
        }

        .it-augmentation-hero-image-card:hover
          .it-augmentation-hero-image {
          transform: scale(1.025);
        }

        /* =====================================================
           FLOATING STATS
        ===================================================== */

        .it-augmentation-hero-stats {
          position: absolute;

          z-index: 2;

          left: 50%;
          bottom: 18px;

          width: calc(100% - 50px);

          transform: translateX(-50%);

          padding: 15px 18px;

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.97);

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.14);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .it-augmentation-hero-stats-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;
        }

        /* =====================================================
           STAT
        ===================================================== */

        .it-augmentation-hero-stat {
          display: flex;
          align-items: center;

          gap: 10px;

          min-width: 0;
        }

        .it-augmentation-hero-stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 38px;
          height: 38px;

          flex-shrink: 0;

          border-radius: 9px;

          background: #f9e8ef;
        }

        .it-augmentation-hero-stat-icon svg {
          width: 16px;
          height: 16px;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           STAT TEXT
        ===================================================== */

        .it-augmentation-hero-stat-label {
          margin-bottom: 3px;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;

          letter-spacing: 0.08em;

          color: #a3a3a3;
        }

        .it-augmentation-hero-stat-value {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;

          color: #1c1c1c;
        }

        .vetting-stat {
          display: block;

          text-align: right;
        }

        .vetting-stat .it-augmentation-hero-stat-value {
          color: ${BRAND_COLOR};
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .it-augmentation-hero-stat-divider {
          width: 1px;
          height: 34px;

          flex-shrink: 0;

          background: #e5e5e5;
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .it-augmentation-hero-container {
            gap: 45px;

            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .it-augmentation-hero-heading {
            font-size: 42px;
          }

          .it-augmentation-hero-subheading {
            font-size: 14px;
          }

          .it-augmentation-hero-description {
            font-size: 13px;
          }

          .it-augmentation-hero-image {
            height: 390px;
          }

          .it-augmentation-hero-stats {
            width: calc(100% - 35px);

            padding: 13px 15px;
          }

          .it-augmentation-hero-stats-inner {
            gap: 14px;
          }

          .it-augmentation-hero-stat-value {
            font-size: 10px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .it-augmentation-hero-container {
            grid-template-columns: 1fr;

            gap: 45px;

            padding-top: 60px;
            padding-bottom: 65px;
          }

          .it-augmentation-hero-content {
            max-width: 760px;
          }

          .it-augmentation-hero-heading {
            max-width: 720px;

            font-size: 40px;
          }

          .it-augmentation-hero-copy {
            max-width: 700px;
          }

          .it-augmentation-hero-visual {
            max-width: 760px;

            margin: 0 auto;
          }

          .it-augmentation-hero-image {
            height: 400px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .it-augmentation-hero-container {
            gap: 36px;

            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 55px;
          }

          .it-augmentation-hero-eyebrow {
            margin-bottom: 17px;

            padding: 6px 10px;

            font-size: 8px;
          }

          .it-augmentation-hero-eyebrow-dot {
            width: 5px;
            height: 5px;
          }

          .it-augmentation-hero-heading {
            margin-bottom: 17px;

            font-size: 30px;
            line-height: 1.18;
          }

          .it-augmentation-hero-copy {
            gap: 11px;

            margin-bottom: 24px;
          }

          .it-augmentation-hero-subheading {
            font-size: 12px;
            line-height: 1.65;
          }

          .it-augmentation-hero-description {
            font-size: 11px;
            line-height: 1.75;
          }

          .it-augmentation-hero-button {
            padding: 11px 18px;

            font-size: 10.5px;
          }

          .it-augmentation-hero-button-icon {
            width: 15px;
            height: 15px;
          }

          .it-augmentation-hero-image-card {
            padding: 6px;

            border-radius: 13px;
          }

          .it-augmentation-hero-image {
            height: 330px;

            border-radius: 9px;
          }

          .it-augmentation-hero-stats {
            bottom: 13px;

            width: calc(100% - 28px);

            padding: 12px 13px;

            border-radius: 10px;
          }

          .it-augmentation-hero-stats-inner {
            gap: 12px;
          }

          .it-augmentation-hero-stat {
            gap: 8px;
          }

          .it-augmentation-hero-stat-icon {
            width: 33px;
            height: 33px;

            border-radius: 8px;
          }

          .it-augmentation-hero-stat-icon svg {
            width: 14px;
            height: 14px;
          }

          .it-augmentation-hero-stat-label {
            font-size: 7px;
          }

          .it-augmentation-hero-stat-value {
            font-size: 9px;
          }

          .it-augmentation-hero-stat-divider {
            height: 30px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .it-augmentation-hero-container {
            gap: 30px;

            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .it-augmentation-hero-eyebrow {
            margin-bottom: 15px;

            padding: 5px 9px;

            font-size: 7px;
          }

          .it-augmentation-hero-heading {
            margin-bottom: 15px;

            font-size: 25px;
          }

          .it-augmentation-hero-copy {
            margin-bottom: 21px;
          }

          .it-augmentation-hero-subheading {
            font-size: 11px;
          }

          .it-augmentation-hero-description {
            font-size: 10px;
          }

          .it-augmentation-hero-button {
            padding: 10px 16px;

            font-size: 9.5px;
          }

          .it-augmentation-hero-image-card {
            padding: 5px;

            border-radius: 11px;
          }

          .it-augmentation-hero-image {
            height: 280px;

            border-radius: 8px;

            background-position: center;
          }

          .it-augmentation-hero-stats {
            bottom: 10px;

            width: calc(100% - 18px);

            padding: 10px;
          }

          .it-augmentation-hero-stats-inner {
            gap: 8px;
          }

          .it-augmentation-hero-stat {
            gap: 6px;
          }

          .it-augmentation-hero-stat-icon {
            width: 29px;
            height: 29px;
          }

          .it-augmentation-hero-stat-icon svg {
            width: 12px;
            height: 12px;
          }

          .it-augmentation-hero-stat-label {
            font-size: 6px;
          }

          .it-augmentation-hero-stat-value {
            font-size: 8px;
          }

          .it-augmentation-hero-stat-divider {
            height: 27px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .it-augmentation-hero-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .it-augmentation-hero-heading {
            font-size: 23px;
          }

          .it-augmentation-hero-subheading {
            font-size: 10px;
          }

          .it-augmentation-hero-description {
            font-size: 9.5px;
          }

          .it-augmentation-hero-image {
            height: 245px;
          }

          .it-augmentation-hero-stats {
            width: calc(100% - 14px);

            padding: 9px;
          }

          .it-augmentation-hero-stat-label {
            font-size: 5.5px;
          }

          .it-augmentation-hero-stat-value {
            font-size: 7px;
          }
        }
      `}</style>
    </section>
  );
}