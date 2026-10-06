import React from "react";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "99.8%", label: "Reliability SLA" },
  { value: "120+", label: "Deployments" },
  { value: "10+", label: "Global Sectors" },
];

export default function DigitalSolutionsHero() {
  return (
    <>
      <section className="digital-solutions-hero">
        {/* =====================================================
            NETWORK BACKGROUND
        ====================================================== */}

        <svg
          className="digital-network-bg"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 500"
          aria-hidden="true"
        >
          <g stroke="#ffffff" strokeWidth="0.6">
            <line x1="60" y1="60" x2="180" y2="120" />
            <line x1="180" y1="120" x2="140" y2="230" />
            <line x1="180" y1="120" x2="320" y2="90" />
            <line x1="320" y1="90" x2="420" y2="180" />
            <line x1="420" y1="180" x2="560" y2="130" />
            <line x1="560" y1="130" x2="680" y2="70" />

            <line x1="140" y1="230" x2="260" y2="310" />
            <line x1="260" y1="310" x2="400" y2="280" />
            <line x1="400" y1="280" x2="520" y2="340" />
            <line x1="520" y1="340" x2="650" y2="290" />

            <line x1="420" y1="180" x2="400" y2="280" />
            <line x1="60" y1="60" x2="120" y2="180" />
          </g>

          <g fill="#ffffff">
            <circle cx="60" cy="60" r="2.5" />
            <circle cx="180" cy="120" r="2.5" />
            <circle cx="140" cy="230" r="2.5" />
            <circle cx="320" cy="90" r="2.5" />
            <circle cx="420" cy="180" r="2.5" />
            <circle cx="560" cy="130" r="2.5" />
            <circle cx="680" cy="70" r="2.5" />
            <circle cx="260" cy="310" r="2.5" />
            <circle cx="400" cy="280" r="2.5" />
            <circle cx="520" cy="340" r="2.5" />
            <circle cx="650" cy="290" r="2.5" />
            <circle cx="120" cy="180" r="2.5" />
          </g>
        </svg>

        {/* =====================================================
            BOTTOM DARK OVERLAY
        ====================================================== */}

        <div className="digital-bottom-overlay" />

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="digital-solutions-container">
          <div className="digital-solutions-content">
            {/* =================================================
                BADGE
            ================================================= */}

            <div className="digital-badge-wrapper">
              <span className="digital-badge">
                <span className="digital-badge-dot" />
                Digital Solutions
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1 className="digital-solutions-heading">
              Technology Designed Around Your
              <br className="desktop-break" />
              <span>Business</span>
            </h1>

            {/* =================================================
                SUB HEADING
            ================================================= */}

            <p className="digital-solutions-subheading">
              Every business has its own way of working. Your digital solutions
              should reflect that.
            </p>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="digital-solutions-description">
              At TechTorch, we design and deliver digital solutions that help
              businesses simplify operations, connect processes, manage
              information, and make better decisions. From enterprise systems
              to customer-facing platforms, we build technology around real
              business needs.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="digital-cta-wrapper">
              <button className="digital-cta">
                <span>Talk to Our Experts</span>

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="digital-cta-icon"
                />
              </button>
            </div>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="digital-divider" />

            {/* =================================================
                STATS
            ================================================= */}

            <div className="digital-stats">
              {STATS.map((stat) => (
                <div className="digital-stat-card" key={stat.label}>
                  <p className="digital-stat-value">{stat.value}</p>

                  <p className="digital-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================================
           DIGITAL SOLUTIONS HERO
        ========================================================= */

        .digital-solutions-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
          box-sizing: border-box;
          padding: 70px 100px;
          background:
            radial-gradient(
              100% 90% at 50% 15%,
              #5c0037 0%,
              #430029 42%,
              #26091f 68%,
              #0b0b12 100%
            );
        }

        /* =========================================================
           NETWORK BACKGROUND
        ========================================================= */

        .digital-network-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.16;
          pointer-events: none;
        }

        /* =========================================================
           BOTTOM OVERLAY
        ========================================================= */

        .digital-bottom-overlay {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 35%;
          pointer-events: none;
          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.35),
              rgba(0, 0, 0, 0.1),
              transparent
            );
        }

        /* =========================================================
           MAIN CONTAINER
        ========================================================= */

        .digital-solutions-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .digital-solutions-content {
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        /* =========================================================
           BADGE
        ========================================================= */

        .digital-badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 18px;
        }

        .digital-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px);
        }

        .digital-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #34d399;
        }

        /* =========================================================
           HEADING
        ========================================================= */

        .digital-solutions-heading {
          max-width: 780px;
          margin: 0 auto 14px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.025em;
          color: #ffffff;
        }

        .digital-solutions-heading span {
          color: #fecdd3;
        }

        /* =========================================================
           SUB HEADING
        ========================================================= */

        .digital-solutions-subheading {
          max-width: 720px;
          margin: 0 auto 8px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.45;
          color: #ffffff;
        }

        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .digital-solutions-description {
          max-width: 740px;
          margin: 0 auto 28px;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
        }

        /* =========================================================
           CTA
        ========================================================= */

        .digital-cta-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 26px;
        }

        .digital-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 24px;
          border: 0;
          border-radius: 6px;
          background: #730024;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          color: #ffffff;
          cursor: pointer;
          transition:
            opacity 0.3s ease,
            transform 0.3s ease,
            background 0.3s ease;
        }

        .digital-cta:hover {
          opacity: 0.92;
          background: #85002d;
          transform: translateY(-1px);
        }

        .digital-cta-icon {
          transition: transform 0.3s ease;
        }

        .digital-cta:hover .digital-cta-icon {
          transform: translateX(3px);
        }

        /* =========================================================
           DIVIDER
        ========================================================= */

        .digital-divider {
          width: 100%;
          max-width: 500px;
          height: 1px;
          margin: 0 auto 26px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* =========================================================
           STATS
        ========================================================= */

        .digital-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          width: 100%;
          max-width: 620px;
          margin: 0 auto;
        }

        .digital-stat-card {
          padding: 15px 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.06);
          box-sizing: border-box;
          backdrop-filter: blur(6px);
        }

        .digital-stat-value {
          margin: 0 0 5px;
          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          color: #ffffff;
        }

        .digital-stat-label {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 400;
          line-height: 1.3;
          color: rgba(255, 255, 255, 0.55);
        }

        /* =========================================================
           TABLET - 1200px
           Horizontal spacing: 40px
        ========================================================= */

        @media (max-width: 1200px) {
          .digital-solutions-hero {
            padding: 64px 40px;
          }

          .digital-solutions-heading {
            font-size: 38px;
          }
        }

        /* =========================================================
           TABLET - 900px
           Horizontal spacing: 40px
        ========================================================= */

        @media (max-width: 900px) {
          .digital-solutions-hero {
            padding: 58px 40px;
          }

          .digital-solutions-content {
            max-width: 760px;
          }

          .digital-solutions-heading {
            font-size: 35px;
          }

          .digital-solutions-subheading {
            font-size: 13px;
          }

          .digital-solutions-description {
            font-size: 12.5px;
          }

          .digital-stats {
            max-width: 580px;
          }
        }

        /* =========================================================
           MOBILE - 700px
           Horizontal spacing: 24px
        ========================================================= */

        @media (max-width: 700px) {
          .digital-solutions-hero {
            padding: 50px 24px;
          }

          .digital-network-bg {
            opacity: 0.12;
          }

          .digital-badge-wrapper {
            margin-bottom: 15px;
          }

          .digital-badge {
            padding: 6px 12px;
            font-size: 9px;
          }

          .digital-solutions-heading {
            margin-bottom: 13px;
            font-size: 29px;
            line-height: 1.1;
          }

          .desktop-break {
            display: none;
          }

          .digital-solutions-subheading {
            margin-bottom: 7px;
            font-size: 12.5px;
            line-height: 1.5;
          }

          .digital-solutions-description {
            margin-bottom: 23px;
            font-size: 11.5px;
            line-height: 1.6;
          }

          .digital-cta-wrapper {
            margin-bottom: 22px;
          }

          .digital-cta {
            padding: 11px 21px;
            font-size: 11px;
          }

          .digital-divider {
            margin-bottom: 22px;
          }

          .digital-stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
          }

          .digital-stat-card {
            padding: 12px 8px;
          }

          .digital-stat-value {
            font-size: 17px;
          }

          .digital-stat-label {
            font-size: 8px;
          }
        }

        /* =========================================================
           SMALL MOBILE - 480px
           Horizontal spacing: 16px
        ========================================================= */

        @media (max-width: 480px) {
          .digital-solutions-hero {
            padding: 42px 16px;
          }

          .digital-badge {
            padding: 5px 10px;
            font-size: 8px;
            letter-spacing: 0.12em;
          }

          .digital-badge-dot {
            width: 5px;
            height: 5px;
          }

          .digital-solutions-heading {
            font-size: 24px;
            line-height: 1.12;
          }

          .digital-solutions-subheading {
            font-size: 11.5px;
          }

          .digital-solutions-description {
            font-size: 10.5px;
            line-height: 1.6;
          }

          .digital-cta {
            gap: 7px;
            padding: 10px 18px;
            font-size: 10px;
          }

          .digital-cta-icon {
            width: 13px;
            height: 13px;
          }

          .digital-divider {
            margin-bottom: 18px;
          }

          .digital-stats {
            gap: 6px;
          }

          .digital-stat-card {
            padding: 11px 5px;
            border-radius: 8px;
          }

          .digital-stat-value {
            font-size: 15px;
          }

          .digital-stat-label {
            font-size: 7px;
          }
        }

        /* =========================================================
           VERY SMALL MOBILE - 360px
        ========================================================= */

        @media (max-width: 360px) {
          .digital-solutions-hero {
            padding-left: 16px;
            padding-right: 16px;
          }

          .digital-solutions-heading {
            font-size: 22px;
          }

          .digital-solutions-subheading {
            font-size: 11px;
          }

          .digital-solutions-description {
            font-size: 10px;
          }

          .digital-stat-value {
            font-size: 14px;
          }

          .digital-stat-label {
            font-size: 6.5px;
          }
        }
      `}</style>
    </>
  );
}