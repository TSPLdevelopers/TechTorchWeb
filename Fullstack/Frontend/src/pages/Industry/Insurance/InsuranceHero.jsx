import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function InsuranceHeroBgSection() {
  return (
    <section className="insurance-hero">
      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           HERO
        ===================================================== */

        .insurance-hero {
          position: relative;
          width: 100%;
          min-height: 520px;
          overflow: hidden;

          font-family: "Inter", sans-serif;

          background: #ffffff;
        }


        /* =====================================================
           BACKGROUND IMAGE
        ===================================================== */

        .insurance-hero-bg {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          background-image: url("/Insurance.png");

          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;

          z-index: 0;
        }


        /* =====================================================
           OVERLAY
        ===================================================== */

        .insurance-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              #ffffff 0%,
              #ffffff 38%,
              rgba(255, 255, 255, 0.94) 50%,
              rgba(255, 255, 255, 0.55) 65%,
              rgba(255, 255, 255, 0.08) 82%,
              rgba(255, 255, 255, 0) 100%
            );

          z-index: 1;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .insurance-hero-container {
          position: relative;

          z-index: 2;

          width: 100%;
          max-width: 1250px;

          margin: 0 auto;

          padding:
            62px 20px 58px;

          box-sizing: border-box;
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .insurance-hero-content {
          max-width: 570px;
        }


        /* =====================================================
           DESKTOP RIGHT SHIFT
        ===================================================== */

        @media (min-width: 1101px) {

          .insurance-hero-container {
            transform: translateX(20px);
          }

        }


        /* =====================================================
           BADGE
        ===================================================== */

        .insurance-badge {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 18px;

          padding:
            6px 11px;

          border-radius: 999px;

          background: #fbeef1;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.3;

          font-weight: 700;

          letter-spacing: 0.06em;
        }


        .insurance-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
        }


        /* =====================================================
           HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .insurance-heading {
          margin: 0 0 18px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 42px;

          line-height: 1.08;

          font-weight: 700;

          letter-spacing: -1px;

          color: ${INK};
        }


        .insurance-heading-highlight {
          color: ${WINE};
        }


        /* =====================================================
           BODY TEXT
           INTER
        ===================================================== */

        .insurance-description {
          margin: 0 0 13px;

          max-width: 555px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 14px;

          line-height: 1.7;

          font-weight: 400;

          color: ${MUTED};
        }


        .insurance-description:last-of-type {
          margin-bottom: 24px;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .insurance-buttons {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;
        }


        .insurance-primary-button,
        .insurance-secondary-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          min-height: 42px;

          padding:
            0 20px;

          border-radius: 999px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 10px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 0.05em;

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        /* =====================================================
           PRIMARY BUTTON
        ===================================================== */

        .insurance-primary-button {
          border:
            1px solid ${WINE};

          background: ${WINE};

          color: #ffffff;
        }


        .insurance-primary-button:hover {
          background: #5c1730;

          border-color: #5c1730;

          transform:
            translateY(-1px);

          box-shadow:
            0 7px 18px
            rgba(122, 31, 61, 0.18);
        }


        /* =====================================================
           SECONDARY BUTTON
        ===================================================== */

        .insurance-secondary-button {
          border:
            1px solid #d8d5d0;

          background:
            rgba(255, 255, 255, 0.92);

          color: ${INK};
        }


        .insurance-secondary-button:hover {
          border-color: ${WINE};

          color: ${WINE};

          transform:
            translateY(-1px);
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .insurance-hero {
            min-height: 500px;
          }


          .insurance-hero-container {
            padding:
              58px 32px 54px;

            transform: none;
          }


          .insurance-heading {
            font-size: 39px;
          }


          .insurance-hero-overlay {
            background:
              linear-gradient(
                90deg,
                #ffffff 0%,
                #ffffff 42%,
                rgba(255, 255, 255, 0.92) 57%,
                rgba(255, 255, 255, 0.25) 78%,
                rgba(255, 255, 255, 0) 100%
              );
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 767px) {

          .insurance-hero {
            min-height: auto;
          }


          .insurance-hero-bg {
            background-position:
              65% center;
          }


          .insurance-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(255, 255, 255, 0.98) 0%,
                rgba(255, 255, 255, 0.95) 48%,
                rgba(255, 255, 255, 0.78) 72%,
                rgba(255, 255, 255, 0.42) 100%
              );
          }


          .insurance-hero-container {
            padding:
              48px 20px 46px;

            transform: none;
          }


          .insurance-hero-content {
            max-width: 620px;
          }


          .insurance-badge {
            margin-bottom: 15px;

            font-size: 9px;
          }


          .insurance-heading {
            max-width: 570px;

            margin-bottom: 16px;

            font-size: 34px;

            line-height: 1.12;

            letter-spacing: -0.7px;
          }


          .insurance-description {
            max-width: 600px;

            font-size: 13.5px;

            line-height: 1.7;

            margin-bottom: 11px;
          }


          .insurance-description:last-of-type {
            margin-bottom: 22px;
          }


          .insurance-primary-button,
          .insurance-secondary-button {
            min-height: 40px;

            padding:
              0 18px;

            font-size: 9.5px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .insurance-hero-bg {
            background-position:
              62% center;
          }


          .insurance-hero-overlay {
            background:
              linear-gradient(
                180deg,
                #ffffff 0%,
                rgba(255, 255, 255, 0.97) 45%,
                rgba(255, 255, 255, 0.86) 70%,
                rgba(255, 255, 255, 0.58) 100%
              );
          }


          .insurance-hero-container {
            padding:
              40px 16px 38px;

            transform: none;
          }


          .insurance-badge {
            margin-bottom: 13px;

            padding:
              5px 10px;

            font-size: 8.5px;
          }


          .insurance-badge-dot {
            width: 5px;
            height: 5px;
          }


          .insurance-heading {
            margin-bottom: 14px;

            font-size: 28px;

            line-height: 1.15;

            letter-spacing: -0.5px;
          }


          .insurance-description {
            font-size: 12.5px;

            line-height: 1.68;

            margin-bottom: 10px;
          }


          .insurance-description:last-of-type {
            margin-bottom: 20px;
          }


          .insurance-buttons {
            width: 100%;

            gap: 9px;
          }


          .insurance-primary-button,
          .insurance-secondary-button {
            min-height: 40px;

            padding:
              0 15px;

            font-size: 8.5px;
          }


          .insurance-primary-button svg {
            width: 13px;
            height: 13px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .insurance-hero-container {
            padding:
              34px 14px 34px;

            transform: none;
          }


          .insurance-heading {
            font-size: 25px;

            line-height: 1.16;
          }


          .insurance-description {
            font-size: 12px;

            line-height: 1.65;
          }


          .insurance-buttons {
            flex-direction: column;

            align-items: stretch;
          }


          .insurance-primary-button,
          .insurance-secondary-button {
            width: 100%;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .insurance-primary-button,
          .insurance-secondary-button {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="insurance-hero-bg"
        aria-hidden="true"
      />


      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        className="insurance-hero-overlay"
        aria-hidden="true"
      />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="insurance-hero-container">

        <div className="insurance-hero-content">

          {/* BADGE */}

          <span className="insurance-badge">

            <span className="insurance-badge-dot" />

            INSURANCE

          </span>


          {/* HEADING */}

          <h1 className="insurance-heading">

            Technology Solutions

            <br />

            for{" "}

            <span className="insurance-heading-highlight">
              Modern Insurance
            </span>

            <br />

            Operations

          </h1>


          {/* DESCRIPTION */}

          <p className="insurance-description">

            Insurance organizations operate across complex processes,
            customer relationships, financial activities and business
            systems. Managing these functions effectively requires
            technology that is connected, reliable and aligned with business
            requirements.

          </p>


          <p className="insurance-description">

            TechTorch delivers digital and technology solutions that help
            insurance organizations streamline operations, connect business
            functions and build a scalable technology environment.

          </p>


          {/* BUTTONS */}

          <div className="insurance-buttons">

            <button
              type="button"
              className="insurance-primary-button"
            >

              TALK TO OUR EXPERTS

              <ArrowRight
                size={14}
              />

            </button>


            <button
              type="button"
              className="insurance-secondary-button"
               onClick={() => nav("/get-in-touch")}
            >

              GET IN TOUCH

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}