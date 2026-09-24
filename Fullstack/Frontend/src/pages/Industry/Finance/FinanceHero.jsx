import React from "react";

import { ArrowRight, Landmark, Building2, Calculator, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FinancialHeroSection() {
    const navigate = useNavigate();
  return (
    <section className="financial-hero">
      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


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
           CONTAINER
        ===================================================== */

        .financial-hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 70px 24px;
          box-sizing: border-box;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 55px;
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
          padding: 6px 11px;

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
           HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .financial-heading {
          margin: 0 0 20px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 42px;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -1px;

          color: ${INK};
        }


        .financial-heading-highlight {
          color: ${WINE};
        }


        /* =====================================================
           DESCRIPTION
           INTER
        ===================================================== */

        .financial-description {
          max-width: 580px;

          margin: 0 0 13px;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          line-height: 1.72;
          font-weight: 400;

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

          border-radius: 999px;

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


        .financial-primary-button {
          border: 1px solid ${WINE};
          background: ${WINE};
          color: #ffffff;
        }


        .financial-primary-button:hover {
          background: #5c1730;
          border-color: #5c1730;
          transform: translateY(-1px);

          box-shadow:
            0 8px 20px
            rgba(122, 31, 61, 0.18);
        }


        .financial-secondary-button {
          border: 1px solid #ead4db;
          background: #ffffff;
          color: ${WINE};
        }


        .financial-secondary-button:hover {
          border-color: ${WINE};
          transform: translateY(-1px);
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
          height: 410px;

          object-fit: cover;
          object-position: center;

          border-radius: 24px;

          z-index: 1;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .financial-hero-container {
            max-width: 1000px;
            gap: 40px;
            padding: 60px 30px;
          }


          .financial-heading {
            font-size: 37px;
          }


          .financial-image {
            height: 370px;
            border-radius: 22px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .financial-hero-container {
            grid-template-columns: 1fr;
            gap: 45px;

            padding:
              55px 24px 60px;
          }


          .financial-hero-content {
            max-width: 700px;
          }


          .financial-heading {
            font-size: 36px;
          }


          .financial-description {
            max-width: 680px;
          }


          .financial-image-wrapper {
            max-width: 700px;
          }


          .financial-image {
            height: 390px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .financial-hero-container {
            padding:
              45px 20px 50px;

            gap: 38px;
          }


          .financial-badge {
            margin-bottom: 15px;
            padding: 5px 10px;
            font-size: 8.5px;
          }


          .financial-badge-dot {
            width: 5px;
            height: 5px;
          }


          .financial-heading {
            margin-bottom: 16px;

            font-size: 30px;
            line-height: 1.14;
            letter-spacing: -0.6px;
          }


          .financial-description {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 11px;
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

        @media (max-width: 400px) {

          .financial-hero-container {
            padding:
              40px 16px 45px;

            gap: 32px;
          }


          .financial-heading {
            font-size: 27px;
            line-height: 1.16;
          }


          .financial-description {
            font-size: 12px;
            line-height: 1.68;
          }


          .financial-buttons {
            flex-direction: column;
            align-items: stretch;
          }


          .financial-primary-button,
          .financial-secondary-button {
            width: 100%;
          }


          .financial-image {
            height: 255px;
            border-radius: 16px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .financial-heading {
            font-size: 25px;
          }


          .financial-description {
            font-size: 11.5px;
          }


          .financial-image {
            height: 230px;
          }

        }


        /* =====================================================
           REDUCED MOTION
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

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="financial-hero-content">

          <span className="financial-badge">
            <span className="financial-badge-dot" />
            FINANCIAL TECHNOLOGY SOLUTIONS
          </span>


          <h1 className="financial-heading">

            Modern Technology Solutions for a
            <br />

            More Connected
            <br />

            <span className="financial-heading-highlight">
              Financial Enterprise
            </span>

          </h1>


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


          <div className="financial-buttons">

            <button
              type="button"
              className="financial-primary-button"
            >
              CONSULT OUR SOLUTION ARCHITECTS

              <ArrowRight size={14} />
            </button>


            <button

              className="px-6 py-3.5 rounded-full text-sm font-medium border financial-secondary-button"
              style={{ borderColor: "#f0d6de", color: WINE }}
              onClick={() => navigate("/finance-get-in-touch")}

              type="button"

            >
              GET IN TOUCH
            </button>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE — ONLY IMAGE
        ================================================= */}

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