import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FinancialHeroSection() {
  const navigate = useNavigate();

  return (
    <section className="financial-hero">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           BOX SIZING
        ===================================================== */

        .financial-hero,
        .financial-hero * {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .financial-hero {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .financial-hero-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          padding: 78px 100px;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);

          gap: 70px;

          align-items: center;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .financial-hero-content {
          min-width: 0;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .financial-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 20px;
          padding: 7px 12px;

          border-radius: 999px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 700;

          letter-spacing: 0.06em;
        }

        .financial-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;
          background: ${WINE};
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .financial-heading {
          margin: 0 0 22px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 44px;
          line-height: 1.1;
          font-weight: 700;

          letter-spacing: -1.3px;

          color: ${INK};
        }

        .financial-heading-highlight {
          color: ${WINE};
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .financial-description {
          max-width: 650px;

          margin: 0 0 14px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;

          color: ${MUTED};
        }

        .financial-description:last-of-type {
          margin-bottom: 28px;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .financial-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px;
        }

        .financial-primary-button,
        .financial-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          min-height: 43px;
          padding: 0 20px;

          /* UPDATED BORDER RADIUS */
          border-radius: 6px;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.04em;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        /* =====================================================
           PRIMARY BUTTON
        ===================================================== */

        .financial-primary-button {
          border: 1px solid ${WINE};

          background: ${WINE};
          color: #ffffff;
        }

        .financial-primary-button:hover {
          background: #5c1730;
          border-color: #5c1730;

          transform: translateY(-2px);

          box-shadow: 0 8px 20px rgba(122, 31, 61, 0.18);
        }

        /* =====================================================
           SECONDARY BUTTON
        ===================================================== */

        .financial-secondary-button {
          border: 1px solid #ead4db;

          background: #ffffff;
          color: ${WINE};
        }

        .financial-secondary-button:hover {
          border-color: ${WINE};

          transform: translateY(-2px);

          box-shadow: 0 6px 16px rgba(122, 31, 61, 0.08);
        }

        /* =====================================================
           RIGHT IMAGE
        ===================================================== */

        .financial-image-wrapper {
          position: relative;

          width: 100%;
          min-width: 0;
        }

        .financial-image-glow {
          position: absolute;

          inset: -15px;

          border-radius: 30px;

          background: ${WINE};

          filter: blur(30px);

          opacity: 0.16;

          pointer-events: none;
        }

        .financial-image {
          position: relative;

          display: block;

          width: 100%;
          height: 430px;

          object-fit: cover;
          object-position: center;

          border-radius: 24px;

          z-index: 1;
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (max-width: 1200px) {
          .financial-hero-container {
            padding-left: 40px;
            padding-right: 40px;

            gap: 55px;
          }

          .financial-heading {
            font-size: 40px;
          }

          .financial-description {
            font-size: 13.5px;
          }

          .financial-image {
            height: 400px;
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 1000px) {
          .financial-hero-container {
            padding-left: 40px;
            padding-right: 40px;

            grid-template-columns: 1fr 0.95fr;

            gap: 40px;
          }

          .financial-heading {
            font-size: 36px;

            letter-spacing: -1px;
          }

          .financial-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .financial-image {
            height: 360px;

            border-radius: 20px;
          }

          .financial-image-glow {
            inset: -10px;

            filter: blur(25px);
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {
          .financial-hero-container {
            grid-template-columns: 1fr;

            gap: 45px;

            padding: 60px 40px 65px;
          }

          .financial-hero-content {
            max-width: 760px;
          }

          .financial-heading {
            font-size: 38px;
          }

          .financial-description {
            max-width: 760px;
          }

          .financial-image-wrapper {
            width: 100%;
            max-width: 760px;
          }

          .financial-image {
            height: 390px;

            border-radius: 22px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .financial-hero-container {
            padding: 45px 24px 50px;

            gap: 35px;
          }

          .financial-badge {
            margin-bottom: 15px;

            padding: 6px 10px;

            font-size: 8.5px;

            letter-spacing: 0.05em;
          }

          .financial-badge-dot {
            width: 5px;
            height: 5px;
          }

          .financial-heading {
            margin-bottom: 17px;

            font-size: 30px;

            line-height: 1.15;

            letter-spacing: -0.7px;
          }

          .financial-description {
            margin-bottom: 11px;

            font-size: 12.5px;

            line-height: 1.72;

            font-weight: 500;
          }

          .financial-description:last-of-type {
            margin-bottom: 24px;
          }

          .financial-buttons {
            gap: 9px;
          }

          .financial-primary-button,
          .financial-secondary-button {
            min-height: 40px;

            padding: 0 16px;

            font-size: 9px;

            /* SAME RADIUS ON MOBILE */
            border-radius: 6px;
          }

          .financial-primary-button svg {
            width: 13px;
            height: 13px;
          }

          .financial-image {
            height: 300px;

            border-radius: 18px;
          }

          .financial-image-glow {
            inset: -8px;

            filter: blur(20px);
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .financial-hero-container {
            padding: 40px 16px 45px;

            gap: 32px;
          }

          .financial-heading {
            font-size: 28px;

            line-height: 1.16;

            letter-spacing: -0.6px;
          }

          .financial-description {
            font-size: 12px;

            line-height: 1.7;
          }

          .financial-buttons {
            flex-direction: column;
            align-items: stretch;

            width: 100%;
          }

          .financial-primary-button,
          .financial-secondary-button {
            width: 100%;

            min-height: 42px;

            padding: 0 14px;

            border-radius: 6px;
          }

          .financial-primary-button {
            gap: 6px;
          }

          .financial-image {
            height: 270px;

            border-radius: 17px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .financial-hero-container {
            padding: 36px 16px 40px;

            gap: 28px;
          }

          .financial-badge {
            font-size: 8px;
          }

          .financial-heading {
            font-size: 25px;

            line-height: 1.17;
          }

          .financial-description {
            font-size: 11.5px;

            line-height: 1.68;
          }

          .financial-image {
            height: 240px;

            border-radius: 15px;
          }

          .financial-primary-button,
          .financial-secondary-button {
            font-size: 8.5px;

            border-radius: 6px;
          }
        }

        /* =====================================================
           EXTRA SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {
          .financial-hero-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .financial-heading {
            font-size: 23px;
          }

          .financial-description {
            font-size: 11px;
          }

          .financial-image {
            height: 220px;
          }
        }

        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .financial-primary-button,
          .financial-secondary-button {
            transition: none;
          }
        }
      `}</style>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="financial-hero-container">

        {/* LEFT CONTENT */}
        <div className="financial-hero-content">

          {/* Badge */}
          <span className="financial-badge">
            <span className="financial-badge-dot" />
            FINANCIAL TECHNOLOGY SOLUTIONS
          </span>

          {/* Main Heading */}
          <h1 className="financial-heading">
            Modern Technology Solutions for a
            <br />

            More Connected
            <br />

            <span className="financial-heading-highlight">
              Financial Enterprise
            </span>
          </h1>

          {/* Description */}
          <p className="financial-description">
            Financial institutions and forward-looking finance departments
            depend on streamlined accounting workflows, automated audit
            trails, and unified enterprise systems. When core operations
            operate in silos, growth introduces friction.
          </p>

          <p className="financial-description">
            TechTorch empowers finance-focused organizations with integrated
            digital platforms: unifying ERP, Accounts, CRM, secure customer
            portals, and tailored software engineering to ensure compliant,
            real-time financial oversight.
          </p>

          {/* Buttons */}
          <div className="financial-buttons">

            <button
              type="button"
              className="financial-primary-button"
            >
              CONSULT OUR SOLUTION ARCHITECTS
              <ArrowRight size={14} />
            </button>

            <button
              type="button"
              className="financial-secondary-button"
              onClick={() => navigate("/finance-get-in-touch")}
            >
              GET IN TOUCH
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="financial-image-wrapper">

          <div
            className="financial-image-glow"
            aria-hidden="true"
          />

          <img
            src="/financehero.png"
            alt="Financial technology solutions"
            className="financial-image"
          />

        </div>
      </div>
    </section>
  );
}