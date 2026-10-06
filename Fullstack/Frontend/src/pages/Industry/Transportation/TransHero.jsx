import React from "react";
import { ArrowRight, Mail, Sparkle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function TransportationHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="transportation-hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .transportation-hero-section {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        .transportation-hero-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 88px 32px;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          gap: 65px;
          align-items: center;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .transportation-hero-content {
          min-width: 0;
        }

        .transportation-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin: 0 0 20px;

          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.14em;
        }

        .transportation-hero-label-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        /* =========================================
           HEADING
        ========================================= */

        .transportation-hero-heading {
          max-width: 670px;
          margin: 0 0 25px;

          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.16;
          letter-spacing: -0.045em;
        }

        /* =========================================
           SUBHEADING / DESCRIPTION
        ========================================= */

        .transportation-hero-description {
          max-width: 650px;
          margin: 0 0 15px;

          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        .transportation-hero-description:last-of-type {
          margin-bottom: 30px;
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .transportation-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .transportation-primary-btn,
        .transportation-secondary-btn {
          min-height: 46px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 12px 19px;

          border-radius: 7px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.06em;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .transportation-primary-btn {
          border: 1px solid ${WINE};
          background: ${WINE};
          color: #ffffff;
        }

        .transportation-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(122, 31, 61, 0.2);
        }

        .transportation-secondary-btn {
          border: 1px solid #d8d5d0;
          background: #ffffff;
          color: ${INK};
        }

        .transportation-secondary-btn:hover {
          transform: translateY(-2px);
          border-color: ${WINE};
          color: ${WINE};
          box-shadow: 0 6px 18px rgba(30, 20, 25, 0.07);
        }

        /* =========================================
           IMAGE CONTAINER
        ========================================= */

        .transportation-hero-visual {
          position: relative;

          width: 100%;
          height: 440px;
          min-width: 0;

          overflow: hidden;

          border-radius: 24px;

          background: #171923;

          box-shadow:
            0 18px 45px rgba(20, 20, 30, 0.12);
        }

        .transportation-hero-image {
          position: absolute;
          inset: 0;

          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition: transform 0.7s ease;
        }

        .transportation-hero-visual:hover
        .transportation-hero-image {
          transform: scale(1.035);
        }

        /* =========================================
           IMAGE OVERLAY
        ========================================= */

        .transportation-hero-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(10, 13, 22, 0.05) 15%,
              rgba(10, 13, 22, 0.12) 45%,
              rgba(10, 13, 22, 0.75) 100%
            );

          pointer-events: none;
        }

        /* =========================================
           IMAGE LABEL
        ========================================= */

        .transportation-hero-image-bottom {
          position: absolute;

          left: 20px;
          right: 20px;
          bottom: 18px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;
        }

        .transportation-hero-image-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.1em;
        }

        .transportation-hero-image-label svg {
          flex-shrink: 0;
          color: #e05a8a;
        }

        .transportation-hero-image-code {
          color: rgba(255, 255, 255, 0.68);

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .transportation-hero-container {
            padding: 75px 28px;
            gap: 45px;
          }

          .transportation-hero-heading {
            font-size: 38px;
          }

          .transportation-hero-visual {
            height: 390px;
            border-radius: 20px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 850px) {
          .transportation-hero-container {
            grid-template-columns: 1fr;
            gap: 42px;

            padding: 70px 28px;
          }

          .transportation-hero-heading {
            max-width: 760px;
            font-size: 38px;
          }

          .transportation-hero-description {
            max-width: 760px;
          }

          .transportation-hero-visual {
            height: 380px;
            border-radius: 20px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .transportation-hero-container {
            padding: 55px 20px;
            gap: 34px;
          }

          .transportation-hero-label {
            margin-bottom: 15px;
            font-size: 10px;
            letter-spacing: 0.12em;
          }

          .transportation-hero-label-dot {
            width: 5px;
            height: 5px;
          }

          .transportation-hero-heading {
            margin-bottom: 20px;

            font-size: 29px;
            line-height: 1.25;
            letter-spacing: -0.03em;
          }

          .transportation-hero-description {
            margin-bottom: 13px;

            font-size: 12.5px;
            line-height: 1.75;
          }

          .transportation-hero-description:last-of-type {
            margin-bottom: 25px;
          }

          .transportation-hero-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .transportation-primary-btn,
          .transportation-secondary-btn {
            width: 100%;
            min-height: 46px;
            padding: 12px 16px;
          }

          .transportation-hero-visual {
            height: 300px;
            border-radius: 17px;
          }

          .transportation-hero-image-bottom {
            left: 15px;
            right: 15px;
            bottom: 14px;
          }

          .transportation-hero-image-label {
            font-size: 8.5px;
          }

          .transportation-hero-image-code {
            font-size: 8px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .transportation-hero-container {
            padding: 48px 16px;
          }

          .transportation-hero-heading {
            font-size: 25px;
          }

          .transportation-hero-description {
            font-size: 12px;
          }

          .transportation-hero-visual {
            height: 250px;
            border-radius: 15px;
          }

          .transportation-hero-image-label {
            font-size: 7.5px;
          }

          .transportation-hero-image-code {
            font-size: 7px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .transportation-primary-btn,
          .transportation-secondary-btn,
          .transportation-hero-image {
            transition: none;
          }
        }
      `}</style>

      <div className="transportation-hero-container">

        {/* ================================
            LEFT CONTENT
        ================================= */}

        <div className="transportation-hero-content">

          <span className="transportation-hero-label">
            <span className="transportation-hero-label-dot" />
            TRANSPORTATION
          </span>

          <h1 className="transportation-hero-heading">
            Technology Solutions for a More Connected Transportation Business
          </h1>

          <p className="transportation-hero-description">
            Transportation businesses need connected operations, organized
            information and reliable technology across their day-to-day
            processes.
          </p>

          <p className="transportation-hero-description">
            TechTorch provides digital solutions and technology services
            designed around business requirements — helping transportation
            organizations connect operations, supply chain, finance,
            customers and technology.
          </p>

          <div className="transportation-hero-actions">

            <button
              type="button"
              className="transportation-primary-btn"
            >
              TALK TO OUR EXPERTS
              <ArrowRight size={14} />
            </button>

            <button
              type="button"
              className="transportation-secondary-btn"
              onClick={() =>
                navigate("/transportation-get-in-touch")
              }
            >
              GET IN TOUCH
              <Mail size={14} />
            </button>

          </div>

        </div>

        {/* ================================
            RIGHT IMAGE
        ================================= */}

        <div className="transportation-hero-visual">

          <img
            src="/transportation-hero.png"
            alt="Connected transportation technology"
            className="transportation-hero-image"
          />

          <div className="transportation-hero-image-overlay" />

          <div className="transportation-hero-image-bottom">

            <span className="transportation-hero-image-label">
              <Sparkle size={13} />
              OPERATIONAL ARCHITECTURE
            </span>

            <span className="transportation-hero-image-code">
              TECHTORCH SYS_01
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}