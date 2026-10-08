import React from "react";

const stats = [
  {
    num: "01",
    label: "Orientation",
    title: "Business-First Approach",
  },
  {
    num: "02",
    label: "Architecture",
    title: "Scalable & Secure",
  },
  {
    num: "03",
    label: "Capacity",
    title: "Full-Stack Lifecycle",
  },
  {
    num: "04",
    label: "Commitment",
    title: "Long-Term Value",
  },
];

export default function TechTorchHero() {
  return (
    <>
      <section className="techtorch-hero">
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="techtorch-hero-background" />

        {/* Decorative Glow */}

        <div className="techtorch-hero-glow techtorch-hero-glow-left" />
        <div className="techtorch-hero-glow techtorch-hero-glow-right" />

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="techtorch-hero-container">
          <div className="techtorch-hero-content">
            {/* =================================================
                BADGE
            ================================================= */}

            <div className="techtorch-hero-badge-wrap">
              <span className="techtorch-hero-badge">
                <span className="techtorch-hero-badge-dot" />
                Our Services
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1 className="techtorch-hero-heading">
              Technology Solutions Built Around Your Business
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="techtorch-hero-description">
              At TechTorch, we help businesses solve real technology
              challenges with practical, scalable and secure solutions. From
              IT consulting and software development to cloud infrastructure,
              cybersecurity, AI and technology staffing, our services are
              designed to help your business work better and grow with
              confidence.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <button className="techtorch-hero-button">
              <span>Talk to Our Experts</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* =================================================
                DIVIDER
            ================================================= */}

            <div className="techtorch-hero-divider" />

            {/* =================================================
                STATS
            ================================================= */}

            <div className="techtorch-hero-stats">
              {stats.map((stat) => (
                <div
                  className="techtorch-hero-stat"
                  key={stat.num}
                >
                  {/* Number */}

                  <span className="techtorch-hero-stat-number">
                    {stat.num}
                  </span>

                  {/* Text */}

                  <span className="techtorch-hero-stat-text">
                    {stat.label}

                    <strong>{stat.title}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           HERO
        ===================================================== */

        .techtorch-hero {
          position: relative;

          width: 100%;
          min-height: 610px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 72px;
          padding-bottom: 72px;

          isolation: isolate;
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .techtorch-hero-background {
          position: absolute;
          inset: 0;

          z-index: -3;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(230, 57, 128, 0.18),
              transparent 45%
            ),
            radial-gradient(
              circle at 85% 15%,
              rgba(196, 28, 110, 0.15),
              transparent 40%
            ),
            linear-gradient(
              160deg,
              #3a0d2c 0%,
              #5c1240 45%,
              #2a0a20 100%
            );
        }

        /* =====================================================
           DECORATIVE GLOWS
        ===================================================== */

        .techtorch-hero-glow {
          position: absolute;

          z-index: -2;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(90px);

          opacity: 0.15;
        }

        .techtorch-hero-glow-left {
          top: -170px;
          left: -120px;

          background: #e63980;
        }

        .techtorch-hero-glow-right {
          right: -150px;
          bottom: -220px;

          background: #c41c6e;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .techtorch-hero-container {
          position: relative;

          z-index: 2;

          width: 100%;
          max-width: 1600px;

          margin: 0 auto;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .techtorch-hero-content {
          width: 100%;
          max-width: 900px;

          margin: 0 auto;

          text-align: center;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .techtorch-hero-badge-wrap {
          display: flex;
          justify-content: center;

          margin-bottom: 22px;
        }

        .techtorch-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 7px 15px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.07);

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;

          color: rgba(255, 255, 255, 0.72);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .techtorch-hero-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;

          background: #e63980;

          box-shadow:
            0 0 10px rgba(230, 57, 128, 0.7);
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .techtorch-hero-heading {
          max-width: 850px;

          margin: 0 auto 17px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 44px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.035em;

          color: #ffffff;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .techtorch-hero-description {
          max-width: 750px;

          margin: 0 auto 27px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: rgba(255, 255, 255, 0.7);
        }

        /* =====================================================
   CTA
===================================================== */

.techtorch-hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  margin-bottom: 34px;

  padding: 13px 25px;

  border: 0;
  border-radius: 9px;

  background: #730042;

  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  color: #ffffff;

  cursor: pointer;

  box-shadow:
    0 8px 24px rgba(115, 0, 66, 0.35);

  transition:
    transform 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.techtorch-hero-button:hover {
  transform: translateY(-3px);

  background: #ffffff;
  color: #730042;

  box-shadow:
    0 13px 30px rgba(115, 0, 66, 0.3);
}

.techtorch-hero-button svg {
  width: 14px;
  height: 14px;

  transition: transform 0.3s ease;
}

.techtorch-hero-button:hover svg {
  transform: translateY(2px);
}

.techtorch-hero-button:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 4px;
}

        /* =====================================================
           DIVIDER
        ===================================================== */

        .techtorch-hero-divider {
          width: 100%;
          height: 1px;

          margin-bottom: 22px;

          background:
            linear-gradient(
              to right,
              transparent,
              rgba(255, 255, 255, 0.11),
              transparent
            );
        }

        /* =====================================================
           STATS
        ===================================================== */

        .techtorch-hero-stats {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 12px;

          width: 100%;
        }

        /* =====================================================
           STAT CARD
        ===================================================== */

        .techtorch-hero-stat {
          display: flex;
          align-items: center;

          gap: 13px;

          min-width: 0;

          padding: 13px 15px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;

          background: rgba(255, 255, 255, 0.06);

          text-align: left;

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          transition:
            background 0.3s ease,
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .techtorch-hero-stat:hover {
          transform: translateY(-2px);

          border-color: rgba(255, 255, 255, 0.16);

          background: rgba(255, 255, 255, 0.09);
        }

        /* =====================================================
           STAT NUMBER
        ===================================================== */

        .techtorch-hero-stat-number {
          flex-shrink: 0;

          font-family: "Inter", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;

          color: #e63980;
        }

        /* =====================================================
           STAT TEXT
        ===================================================== */

        .techtorch-hero-stat-text {
          min-width: 0;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: 0.04em;

          color: rgba(255, 255, 255, 0.62);
        }

        .techtorch-hero-stat-text strong {
          display: block;

          margin-top: 2px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.35;

          color: #ffffff;
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .techtorch-hero {
            min-height: 570px;

            padding-left: 40px;
            padding-right: 40px;

            padding-top: 65px;
            padding-bottom: 65px;
          }

          .techtorch-hero-heading {
            font-size: 40px;
          }

          .techtorch-hero-description {
            font-size: 13.5px;
          }

          .techtorch-hero-stats {
            gap: 10px;
          }

          .techtorch-hero-stat {
            padding: 12px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .techtorch-hero {
            min-height: auto;

            padding-top: 58px;
            padding-bottom: 58px;
          }

          .techtorch-hero-content {
            max-width: 760px;
          }

          .techtorch-hero-heading {
            max-width: 700px;

            font-size: 36px;
          }

          .techtorch-hero-description {
            max-width: 650px;

            font-size: 13px;
            line-height: 1.7;
          }

          .techtorch-hero-stats {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 10px;
          }

          .techtorch-hero-stat {
            padding: 13px 14px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .techtorch-hero {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .techtorch-hero-badge-wrap {
            margin-bottom: 18px;
          }

          .techtorch-hero-badge {
            padding: 6px 12px;

            font-size: 9px;
          }

          .techtorch-hero-heading {
            margin-bottom: 14px;

            font-size: 30px;
            line-height: 1.17;
          }

          .techtorch-hero-description {
            margin-bottom: 23px;

            font-size: 12px;
            line-height: 1.7;
          }

          .techtorch-hero-button {
            margin-bottom: 28px;

            padding: 12px 21px;

            font-size: 11px;
          }

          .techtorch-hero-divider {
            margin-bottom: 18px;
          }

          .techtorch-hero-stat {
            gap: 10px;

            padding: 12px;
          }

          .techtorch-hero-stat-number {
            font-size: 18px;
          }

          .techtorch-hero-stat-text {
            font-size: 8.5px;
          }

          .techtorch-hero-stat-text strong {
            font-size: 11px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .techtorch-hero {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .techtorch-hero-badge-wrap {
            margin-bottom: 16px;
          }

          .techtorch-hero-badge {
            gap: 7px;

            padding: 5px 10px;

            font-size: 8px;
          }

          .techtorch-hero-badge-dot {
            width: 5px;
            height: 5px;
          }

          .techtorch-hero-heading {
            margin-bottom: 12px;

            font-size: 25px;
            line-height: 1.18;
          }

          .techtorch-hero-description {
            margin-bottom: 21px;

            font-size: 11px;
            line-height: 1.7;
          }

          .techtorch-hero-button {
            margin-bottom: 25px;

            padding: 11px 18px;

            border-radius: 8px;

            font-size: 10px;
          }

          .techtorch-hero-button svg {
            width: 12px;
            height: 12px;
          }

          .techtorch-hero-divider {
            margin-bottom: 15px;
          }

          .techtorch-hero-stats {
            gap: 8px;
          }

          .techtorch-hero-stat {
            gap: 8px;

            padding: 10px;

            border-radius: 8px;
          }

          .techtorch-hero-stat-number {
            font-size: 16px;
          }

          .techtorch-hero-stat-text {
            font-size: 7.5px;
            line-height: 1.45;
          }

          .techtorch-hero-stat-text strong {
            font-size: 9.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .techtorch-hero {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .techtorch-hero-heading {
            font-size: 23px;
          }

          .techtorch-hero-description {
            font-size: 10.5px;
          }

          .techtorch-hero-stats {
            grid-template-columns: 1fr;
          }

          .techtorch-hero-stat {
            padding: 10px 11px;
          }

          .techtorch-hero-stat-number {
            font-size: 17px;
          }

          .techtorch-hero-stat-text {
            font-size: 8px;
          }

          .techtorch-hero-stat-text strong {
            font-size: 10px;
          }
        }
      `}</style>
    </>
  );
}