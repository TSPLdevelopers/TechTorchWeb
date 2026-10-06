import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function TransportationImageCtaSection() {
  return (
    <section className="transportation-cta-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .transportation-cta-section {
          position: relative;
          width: 100%;
          min-height: 500px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background: #171b25;
          color: #ffffff;

          font-family: "Inter", sans-serif;
        }

        .transportation-cta-section *,
        .transportation-cta-section *::before,
        .transportation-cta-section *::after {
          box-sizing: border-box;
        }

        /* =========================================
           BACKGROUND IMAGE
        ========================================= */

        .transportation-cta-background {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          background-image: url("/transportation-cta.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          transform: scale(1.01);

          transition: transform 1s ease;
        }

        .transportation-cta-section:hover
        .transportation-cta-background {
          transform: scale(1.04);
        }

        /* =========================================
           DARK OVERLAY
        ========================================= */

        .transportation-cta-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              115deg,
              rgba(9, 13, 22, 0.88) 0%,
              rgba(18, 24, 37, 0.76) 38%,
              rgba(42, 25, 39, 0.70) 70%,
              rgba(58, 25, 42, 0.78) 100%
            );
        }

        /* =========================================
           CONTENT CONTAINER

           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .transportation-cta-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1440px;

          margin: 0 auto;

          padding: 105px 100px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        /* =========================================
           TOP BADGE
        ========================================= */

        .transportation-cta-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          margin-bottom: 25px;

          padding: 8px 14px;

          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.10);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);

          color: #f0e0e6;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.3;

          letter-spacing: 0.11em;
        }

        .transportation-cta-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #ffffff;
        }

        /* =========================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ========================================= */

        .transportation-cta-heading {
          max-width: 780px;

          margin: 0 0 20px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(34px, 4.2vw, 52px);
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.045em;
        }

        /* =========================================
           SUBHEADING
           PLUS JAKARTA SANS
        ========================================= */

        .transportation-cta-subheading {
          max-width: 650px;

          margin: 0 0 34px;

          color: #ddd9de;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* =========================================
           CTA BUTTON
           INTER
        ========================================= */

        .transportation-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 48px;

          padding: 0 23px;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 7px;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.08em;

          cursor: pointer;

          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .transportation-cta-button svg {
          transition: transform 0.3s ease;
        }

        .transportation-cta-button:hover {
          transform: translateY(-3px);

          background: #8e294d;

          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
        }

        .transportation-cta-button:hover svg {
          transform: translateX(4px);
        }

        .transportation-cta-button:active {
          transform: translateY(-1px);
        }

        /* =========================================
           LARGE TABLET
           100px → 40px
        ========================================= */

        @media (max-width: 1200px) {
          .transportation-cta-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 95px;
            padding-bottom: 95px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .transportation-cta-section {
            min-height: 470px;
          }

          .transportation-cta-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 90px;
            padding-bottom: 90px;
          }

          .transportation-cta-heading {
            max-width: 700px;
            font-size: 43px;
          }

          .transportation-cta-subheading {
            max-width: 600px;
            font-size: 13.5px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 850px) {
          .transportation-cta-section {
            min-height: 450px;
          }

          .transportation-cta-background {
            background-position: center center;
          }

          .transportation-cta-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 82px;
            padding-bottom: 82px;
          }

          .transportation-cta-badge {
            margin-bottom: 21px;
          }

          .transportation-cta-heading {
            max-width: 650px;

            font-size: 38px;
            line-height: 1.2;
          }

          .transportation-cta-subheading {
            max-width: 560px;

            margin-bottom: 30px;

            font-size: 13px;
            line-height: 1.75;
          }
        }

        /* =========================================
           MOBILE
           40px → 24px
        ========================================= */

        @media (max-width: 600px) {
          .transportation-cta-section {
            min-height: 430px;
          }

          .transportation-cta-background {
            background-position: 58% center;
          }

          .transportation-cta-overlay {
            background:
              linear-gradient(
                115deg,
                rgba(9, 13, 22, 0.91) 0%,
                rgba(18, 24, 37, 0.83) 45%,
                rgba(42, 25, 39, 0.82) 100%
              );
          }

          .transportation-cta-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .transportation-cta-badge {
            gap: 6px;

            margin-bottom: 19px;

            padding: 7px 11px;

            font-size: 8px;
            letter-spacing: 0.09em;
          }

          .transportation-cta-badge-dot {
            width: 5px;
            height: 5px;
          }

          .transportation-cta-heading {
            max-width: 100%;

            margin-bottom: 17px;

            font-size: 30px;
            line-height: 1.23;
            letter-spacing: -0.035em;
          }

          .transportation-cta-subheading {
            max-width: 480px;

            margin-bottom: 27px;

            font-size: 12px;
            line-height: 1.75;
          }

          .transportation-cta-button {
            min-height: 45px;

            padding: 0 19px;

            font-size: 9px;
            letter-spacing: 0.065em;
          }

          .transportation-cta-button svg {
            width: 13px;
            height: 13px;
          }
        }

        /* =========================================
           SMALL MOBILE
           24px → 16px
        ========================================= */

        @media (max-width: 400px) {
          .transportation-cta-section {
            min-height: 400px;
          }

          .transportation-cta-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 62px;
            padding-bottom: 62px;
          }

          .transportation-cta-badge {
            padding: 6px 9px;
            font-size: 7.5px;
          }

          .transportation-cta-heading {
            font-size: 26px;
            line-height: 1.25;
          }

          .transportation-cta-subheading {
            font-size: 11.5px;
            line-height: 1.7;
          }

          .transportation-cta-button {
            min-height: 43px;

            padding: 0 17px;

            font-size: 8.5px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .transportation-cta-background,
          .transportation-cta-button,
          .transportation-cta-button svg {
            transition: none;
          }
        }
      `}</style>

      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}

      <div className="transportation-cta-background" />

      {/* =========================================
          DARK OVERLAY
      ========================================= */}

      <div className="transportation-cta-overlay" />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="transportation-cta-container">

        {/* BADGE */}

        <span className="transportation-cta-badge">
          <span className="transportation-cta-badge-dot" />
          ENTERPRISE LOGISTICS ARCHITECTURE
        </span>

        {/* HEADING */}

        <h2 className="transportation-cta-heading">
          Build a More Connected
          <br />
          Transportation Business
        </h2>

        {/* SUBHEADING */}

        <p className="transportation-cta-subheading">
          Bring your operations, business applications and technology
          together with solutions designed around your requirements.
        </p>

        {/* CTA BUTTON */}

        <button
          type="button"
          className="transportation-cta-button"
        >
          TALK TO OUR EXPERTS
          <ArrowRight size={14} strokeWidth={2} />
        </button>

      </div>
    </section>
  );
}