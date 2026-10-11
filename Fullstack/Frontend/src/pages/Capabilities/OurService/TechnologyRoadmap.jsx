import React from "react";
import { ArrowRight } from "lucide-react";

const BRAND_COLOR = "#730024";

const stats = [
  {
    title: "24h Response SLA",
    sub: "Rapid Architecture Review",
  },
  {
    title: "Senior Technical Leads",
    sub: "Direct Architect Access",
  },
  {
    title: "Enterprise NDA First",
    sub: "Rigorous Governance & Security",
  },
];

export default function TechTorchFinalCTA() {
  return (
    <>
      <section className="techtorch-final-cta">
        <div className="techtorch-final-cta-container">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="techtorch-final-cta-content">
            <div className="techtorch-final-cta-main">
              {/* Label */}

              <div className="techtorch-final-cta-label">
                <span className="techtorch-final-cta-label-dot" />

                <span>
                  Let's Talk About Your Technology Roadmap
                </span>
              </div>

              {/* Heading */}

              <h2 className="techtorch-final-cta-heading">
                Ready to Move Your Business Forward?
              </h2>

              {/* Description */}

              <p className="techtorch-final-cta-description">
                From strategic advisory to enterprise execution, TechTorch
                partners with leading organizations to build scalable,
                resilient, and future-proof digital solutions.
              </p>

              {/* CTA */}

              <button className="techtorch-final-cta-button">
                <span>Talk to Our Experts</span>

                <ArrowRight className="techtorch-final-cta-arrow" />
              </button>
            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <div className="techtorch-final-cta-stats">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="techtorch-final-cta-stat"
                >
                  <p className="techtorch-final-cta-stat-title">
                    {stat.title}
                  </p>

                  <p className="techtorch-final-cta-stat-sub">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="techtorch-final-cta-image-wrap">
            {/* Image */}

            <img
              src="/roadmap.png"
              alt="TechTorch technology consultation"
              className="techtorch-final-cta-image"
            />

            {/* Dark overlay */}

            <div className="techtorch-final-cta-image-overlay" />

            {/* Bottom gradient */}

            <div className="techtorch-final-cta-bottom-gradient" />

            {/* Image Label */}

            <div className="techtorch-final-cta-image-label">
              <p className="techtorch-final-cta-image-label-title">
                TECHTORCH
              </p>

              <p className="techtorch-final-cta-image-label-sub">
                Technology. Strategy. Growth.
              </p>
            </div>
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

        .techtorch-final-cta {
          width: 100%;
          overflow: hidden;

          background: #0a0a0c;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .techtorch-final-cta-container {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(0, 0.95fr);

          width: 100%;
          max-width: 1600px;

          min-height: 500px;

          margin: 0 auto;

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;

          background:
            radial-gradient(
              circle at 0% 0%,
              rgba(115, 0, 36, 0.28),
              transparent 52%
            ),
            linear-gradient(
              160deg,
              #1a151b 0%,
              #0d0b0f 100%
            );

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.28);
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .techtorch-final-cta-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          min-width: 0;

          padding: 58px 58px 45px;
        }

        .techtorch-final-cta-main {
          min-width: 0;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .techtorch-final-cta-label {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 18px;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: #d98aa7;
        }

        .techtorch-final-cta-label-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;

          background: ${BRAND_COLOR};

          box-shadow:
            0 0 0 4px rgba(115, 0, 36, 0.15);
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .techtorch-final-cta-heading {
          max-width: 700px;

          margin: 0 0 18px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.025em;

          color: #ffffff;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .techtorch-final-cta-description {
          max-width: 620px;

          margin: 0 0 28px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: rgba(255, 255, 255, 0.6);
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .techtorch-final-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: fit-content;

          gap: 9px;

          padding: 13px 22px;

          border: 0;
          border-radius: 8px;

          background: #730042;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;

          color: #ffffff;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .techtorch-final-cta-button:hover {
          transform: translateY(-2px);

          background: #ffffff;
          color: #730042;

          box-shadow:
            0 10px 24px rgba(115, 0, 36, 0.28);
        }

        .techtorch-final-cta-arrow {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          transition: transform 0.3s ease;
        }

        .techtorch-final-cta-button:hover
          .techtorch-final-cta-arrow {
          transform: translateX(3px);
        }

        /* =====================================================
           STATS
        ===================================================== */

        .techtorch-final-cta-stats {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;

          margin-top: 45px;

          padding-top: 25px;

          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .techtorch-final-cta-stat {
          min-width: 0;
        }

        .techtorch-final-cta-stat-title {
          margin: 0 0 5px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;

          color: #ffffff;
        }

        .techtorch-final-cta-stat-sub {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.6;

          color: rgba(255, 255, 255, 0.4);
        }

        /* =====================================================
           RIGHT IMAGE
        ===================================================== */

        .techtorch-final-cta-image-wrap {
          position: relative;

          min-width: 0;
          min-height: 500px;

          overflow: hidden;
        }

        .techtorch-final-cta-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform 0.7s ease;
        }

        .techtorch-final-cta-image-wrap:hover
          .techtorch-final-cta-image {
          transform: scale(1.025);
        }

        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .techtorch-final-cta-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(10, 10, 12, 0.62) 0%,
              rgba(10, 10, 12, 0.2) 48%,
              transparent 100%
            );

          pointer-events: none;
        }

        /* =====================================================
           BOTTOM GRADIENT
        ===================================================== */

        .techtorch-final-cta-bottom-gradient {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 38%;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.5),
              transparent
            );

          pointer-events: none;
        }

        /* =====================================================
           IMAGE LABEL
        ===================================================== */

        .techtorch-final-cta-image-label {
          position: absolute;

          left: 25px;
          bottom: 25px;

          padding: 9px 12px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;

          background: rgba(0, 0, 0, 0.3);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .techtorch-final-cta-image-label-title {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.12em;

          color: rgba(255, 255, 255, 0.82);
        }

        .techtorch-final-cta-image-label-sub {
          margin: 2px 0 0;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 400;
          line-height: 1.4;

          color: rgba(255, 255, 255, 0.5);
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .techtorch-final-cta {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .techtorch-final-cta-container {
            min-height: 470px;
          }

          .techtorch-final-cta-content {
            padding: 50px 42px 38px;
          }

          .techtorch-final-cta-heading {
            font-size: 36px;
          }

          .techtorch-final-cta-description {
            font-size: 13px;
          }

          .techtorch-final-cta-image-wrap {
            min-height: 470px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .techtorch-final-cta {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .techtorch-final-cta-container {
            grid-template-columns: 1fr;

            min-height: auto;
          }

          .techtorch-final-cta-content {
            padding: 45px 40px 38px;
          }

          .techtorch-final-cta-heading {
            max-width: 680px;

            font-size: 34px;
          }

          .techtorch-final-cta-description {
            max-width: 650px;
          }

          .techtorch-final-cta-image-wrap {
            min-height: 340px;
          }

          .techtorch-final-cta-image-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(10, 10, 12, 0.05),
                rgba(10, 10, 12, 0.35)
              );
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .techtorch-final-cta {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .techtorch-final-cta-container {
            border-radius: 15px;
          }

          .techtorch-final-cta-content {
            padding: 35px 25px 30px;
          }

          .techtorch-final-cta-label {
            margin-bottom: 14px;

            font-size: 8px;
          }

          .techtorch-final-cta-label-dot {
            width: 5px;
            height: 5px;
          }

          .techtorch-final-cta-heading {
            margin-bottom: 14px;

            font-size: 28px;
            line-height: 1.22;
          }

          .techtorch-final-cta-description {
            margin-bottom: 22px;

            font-size: 11px;
            line-height: 1.7;
          }

          .techtorch-final-cta-button {
            padding: 12px 18px;

            font-size: 10px;
          }

          .techtorch-final-cta-arrow {
            width: 14px;
            height: 14px;
          }

          .techtorch-final-cta-stats {
            grid-template-columns: 1fr;

            gap: 14px;

            margin-top: 32px;

            padding-top: 20px;
          }

          .techtorch-final-cta-stat-title {
            font-size: 11px;
          }

          .techtorch-final-cta-stat-sub {
            font-size: 9px;
          }

          .techtorch-final-cta-image-wrap {
            min-height: 280px;
          }

          .techtorch-final-cta-image-label {
            left: 18px;
            bottom: 18px;

            padding: 8px 10px;
          }

          .techtorch-final-cta-image-label-title {
            font-size: 8px;
          }

          .techtorch-final-cta-image-label-sub {
            font-size: 8px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .techtorch-final-cta {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .techtorch-final-cta-container {
            border-radius: 13px;
          }

          .techtorch-final-cta-content {
            padding: 28px 19px 25px;
          }

          .techtorch-final-cta-heading {
            font-size: 24px;
          }

          .techtorch-final-cta-description {
            font-size: 10px;
          }

          .techtorch-final-cta-button {
            padding: 11px 16px;

            font-size: 9.5px;
          }

          .techtorch-final-cta-stats {
            gap: 12px;

            margin-top: 27px;

            padding-top: 18px;
          }

          .techtorch-final-cta-stat-title {
            font-size: 10px;
          }

          .techtorch-final-cta-stat-sub {
            font-size: 8.5px;
          }

          .techtorch-final-cta-image-wrap {
            min-height: 235px;
          }

          .techtorch-final-cta-image-label {
            left: 14px;
            bottom: 14px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .techtorch-final-cta {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 38px;
            padding-bottom: 38px;
          }

          .techtorch-final-cta-content {
            padding: 25px 17px 23px;
          }

          .techtorch-final-cta-heading {
            font-size: 22px;
          }

          .techtorch-final-cta-description {
            font-size: 9.5px;
          }

          .techtorch-final-cta-image-wrap {
            min-height: 215px;
          }
        }
      `}</style>
    </>
  );
}