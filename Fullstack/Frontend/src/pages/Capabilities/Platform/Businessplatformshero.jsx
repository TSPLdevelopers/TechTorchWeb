import React from "react";
import { ArrowRight } from "lucide-react";

export default function BusinessPlatformsHero() {
  return (
    <>
      <section className="business-platforms-hero">
        {/* ================= BACKGROUND IMAGE ================= */}

        <div className="business-platforms-bg" />

        {/* ================= WHITE LEFT FADE ================= */}

        <div className="business-platforms-fade" />

        {/* ================= MOBILE OVERLAY ================= */}

        <div className="business-platforms-mobile-overlay" />

        {/* ================= CONTENT ================= */}

        <div className="business-platforms-content">
          <div className="business-platforms-inner">
            {/* ================= BADGE ================= */}

            <div className="business-platforms-badge">
              <span className="business-platforms-badge-dot" />

              <span>Unified Business Platforms</span>
            </div>

            {/* ================= HEADING ================= */}

            <h1 className="business-platforms-heading">
              Technology That Works Around Your Business
            </h1>

            {/* ================= SUB HEADING ================= */}

            <p className="business-platforms-description">
              Connected platforms that simplify everyday work, bring your
              teams together, and help your business move forward with
              confidence.
            </p>

            {/* ================= CTA ================= */}

            <button className="business-platforms-cta">
              <span>Talk to Our Experts</span>

              <ArrowRight size={15} strokeWidth={2} />
            </button>

            {/* ================= DIVIDER ================= */}

            <div className="business-platforms-divider" />

            {/* ================= STATS ================= */}

            <div className="business-platforms-stats">
              {/* STAT 1 */}

              <div className="business-platform-stat">
                <p className="business-platform-stat-number">100%</p>

                <p className="business-platform-stat-label">
                  Cloud Connected
                </p>
              </div>

              {/* STAT 2 */}

              <div className="business-platform-stat">
                <p className="business-platform-stat-number">24/7</p>

                <p className="business-platform-stat-label">
                  Enterprise Reliability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STYLES ================= */}

      <style>{`
        /* =========================================================
           BUSINESS PLATFORMS HERO
        ========================================================= */

        .business-platforms-hero {
          position: relative;
          width: 100%;
          min-height: 620px;
          overflow: hidden;
          background: #ffffff;
        }

        /* =========================================================
           BACKGROUND IMAGE
        ========================================================= */

        .business-platforms-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: url("/platformhero.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 80% center;
        }

        /* =========================================================
           WHITE LEFT FADE
        ========================================================= */

        .business-platforms-fade {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.97) 18%,
              rgba(255, 255, 255, 0.9) 34%,
              rgba(255, 255, 255, 0.55) 50%,
              rgba(255, 255, 255, 0) 72%
            );
        }

        /* =========================================================
           MOBILE OVERLAY
        ========================================================= */

        .business-platforms-mobile-overlay {
          display: none;
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.45);
        }

        /* =========================================================
           CONTENT
        ========================================================= */

        .business-platforms-content {
          position: relative;
          z-index: 10;
          width: 100%;
          min-height: 620px;

          padding-left: 100px;
          padding-right: 100px;

          display: flex;
          align-items: center;
        }

        .business-platforms-inner {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* =========================================================
           CONTENT WIDTH
        ========================================================= */

        .business-platforms-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .business-platforms-badge,
        .business-platforms-heading,
        .business-platforms-description,
        .business-platforms-cta,
        .business-platforms-divider,
        .business-platforms-stats {
          margin-left: 0;
        }

        /* =========================================================
           BADGE
        ========================================================= */

        .business-platforms-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: #730024;
        }

        .business-platforms-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #9d174d;
        }

        /* =========================================================
           HEADING
        ========================================================= */

        .business-platforms-heading {
          max-width: 650px;
          margin-top: 0;
          margin-bottom: 16px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.025em;

          color: #0f172a;
        }

        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .business-platforms-description {
          max-width: 540px;
          margin-top: 0;
          margin-bottom: 28px;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;

          color: #64748b;
        }

        /* =========================================================
           CTA
        ========================================================= */

        .business-platforms-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          margin: 0 0 30px 0;
          padding: 12px 20px;

          border: none;
          border-radius: 6px;

          background: #7a1750;
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease,
            box-shadow 0.3s ease;
        }

        .business-platforms-cta:hover {
          opacity: 0.92;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(122, 23, 80, 0.18);
        }

        .business-platforms-cta svg {
          transition: transform 0.3s ease;
        }

        .business-platforms-cta:hover svg {
          transform: translateX(3px);
        }

        /* =========================================================
           DIVIDER
        ========================================================= */

        .business-platforms-divider {
          width: 100%;
          max-width: 440px;
          height: 1px;
          margin-bottom: 22px;

          background: #e2e8f0;
        }

        /* =========================================================
           STATS
        ========================================================= */

        .business-platforms-stats {
          display: flex;
          align-items: flex-start;
          gap: 58px;
        }

        .business-platform-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .business-platform-stat-number {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 23px;
          font-weight: 700;
          line-height: 1.2;

          color: #0f172a;
        }

        .business-platform-stat-label {
          margin: 5px 0 0 0;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;

          color: #64748b;
        }

        /* =========================================================
           TABLET — 1200px
        ========================================================= */

        @media (max-width: 1200px) {
          .business-platforms-content {
            padding-left: 40px;
            padding-right: 40px;
          }

          .business-platforms-heading {
            font-size: 38px;
          }

          .business-platforms-description {
            max-width: 500px;
          }
        }

        /* =========================================================
           TABLET — 900px
        ========================================================= */

        @media (max-width: 900px) {
          .business-platforms-hero {
            min-height: 570px;
          }

          .business-platforms-content {
            min-height: 570px;
            align-items: center;
          }

          .business-platforms-bg {
            background-position: 76% center;
          }

          .business-platforms-fade {
            background:
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(255, 255, 255, 0.96) 25%,
                rgba(255, 255, 255, 0.78) 48%,
                rgba(255, 255, 255, 0.25) 72%,
                rgba(255, 255, 255, 0) 100%
              );
          }

          .business-platforms-heading {
            max-width: 570px;
            font-size: 35px;
          }

          .business-platforms-description {
            font-size: 14px;
          }
        }

        /* =========================================================
           MOBILE — 700px
        ========================================================= */

        @media (max-width: 700px) {
          .business-platforms-hero {
            min-height: 560px;
          }

          .business-platforms-bg {
            background-position: 70% center;
          }

          .business-platforms-fade {
            background:
              linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.98) 0%,
                rgba(255, 255, 255, 0.93) 35%,
                rgba(255, 255, 255, 0.65) 65%,
                rgba(255, 255, 255, 0.2) 100%
              );
          }

          .business-platforms-mobile-overlay {
            display: block;
          }

          .business-platforms-content {
            min-height: 560px;

            padding-left: 24px;
            padding-right: 24px;
            padding-top: 55px;
            padding-bottom: 55px;

            align-items: center;
          }

          .business-platforms-inner {
            max-width: 100%;
          }

          .business-platforms-badge {
            margin-bottom: 14px;
            font-size: 10px;
          }

          .business-platforms-heading {
            max-width: 500px;
            margin-bottom: 14px;

            font-size: 30px;
            line-height: 1.2;
          }

          .business-platforms-description {
            max-width: 460px;
            margin-bottom: 24px;

            font-size: 13.5px;
            line-height: 1.65;
          }

          .business-platforms-cta {
            margin-bottom: 26px;
            padding: 11px 18px;
            font-size: 12.5px;
          }

          .business-platforms-divider {
            max-width: 380px;
            margin-bottom: 20px;
          }

          .business-platforms-stats {
            gap: 42px;
          }

          .business-platform-stat-number {
            font-size: 20px;
          }

          .business-platform-stat-label {
            font-size: 11px;
          }
        }

        /* =========================================================
           SMALL MOBILE — 480px
        ========================================================= */

        @media (max-width: 480px) {
          .business-platforms-hero {
            min-height: 540px;
          }

          .business-platforms-bg {
            background-position: 68% center;
          }

          .business-platforms-content {
            min-height: 540px;

            padding-left: 16px;
            padding-right: 16px;
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .business-platforms-badge {
            gap: 7px;
            margin-bottom: 12px;

            font-size: 9px;
            letter-spacing: 0.1em;
          }

          .business-platforms-badge-dot {
            width: 5px;
            height: 5px;
          }

          .business-platforms-heading {
            max-width: 100%;
            margin-bottom: 12px;

            font-size: 26px;
            line-height: 1.2;
          }

          .business-platforms-description {
            max-width: 100%;
            margin-bottom: 22px;

            font-size: 12.5px;
            line-height: 1.65;
          }

          .business-platforms-cta {
            gap: 7px;
            margin-bottom: 23px;
            padding: 10px 16px;

            font-size: 12px;
          }

          .business-platforms-cta svg {
            width: 14px;
            height: 14px;
          }

          .business-platforms-divider {
            max-width: 100%;
            margin-bottom: 18px;
          }

          .business-platforms-stats {
            width: 100%;
            gap: 30px;
          }

          .business-platform-stat-number {
            font-size: 18px;
          }

          .business-platform-stat-label {
            max-width: 110px;
            margin-top: 4px;
            font-size: 10px;
          }
        }

        /* =========================================================
           VERY SMALL MOBILE — 360px
        ========================================================= */

        @media (max-width: 360px) {
          .business-platforms-content {
            padding-left: 16px;
            padding-right: 16px;
          }

          .business-platforms-heading {
            font-size: 24px;
          }

          .business-platforms-description {
            font-size: 12px;
          }

          .business-platforms-stats {
            gap: 24px;
          }

          .business-platform-stat-number {
            font-size: 17px;
          }

          .business-platform-stat-label {
            font-size: 9.5px;
          }
        }
      `}</style>
    </>
  );
}