import React from "react";
import { ArrowLeftRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function ConnectedTransportationSection() {
  return (
    <section className="connected-transportation-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .connected-transportation-section {
          width: 100%;
          overflow: hidden;

          background: #f7f5f2;
          color: ${INK};

          font-family: "Inter", sans-serif;
        }

        .connected-transportation-section *,
        .connected-transportation-section *::before,
        .connected-transportation-section *::after {
          box-sizing: border-box;
        }

        /* =========================================
           MAIN CONTAINER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .connected-transportation-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;

          padding: 88px 100px;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);

          gap: 65px;
          align-items: center;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .connected-transportation-content {
          min-width: 0;
        }

        .connected-transportation-label {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.13em;
        }

        /* =========================================
           MAIN HEADING
        ========================================= */

        .connected-transportation-heading {
          max-width: 600px;

          margin: 0 0 25px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .connected-transportation-description {
          max-width: 650px;

          display: flex;
          flex-direction: column;
          gap: 15px;

          margin-bottom: 27px;
        }

        .connected-transportation-description p {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           INTEGRATED FLOW
        ========================================= */

        .connected-flow {
          display: flex;
          align-items: flex-start;
          gap: 12px;

          max-width: 500px;
        }

        .connected-flow-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #e9e8ec;
          color: ${INK};

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .connected-flow:hover .connected-flow-icon {
          transform: scale(1.08);
          background: #e3e0e5;
        }

        .connected-flow-content {
          min-width: 0;
        }

        .connected-flow-title {
          margin: 0 0 4px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          line-height: 1.4;
        }

        .connected-flow-description {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.6;
        }

        /* =========================================
           IMAGE CARD
        ========================================= */

        .connected-transportation-image-card {
          width: 100%;

          padding: 10px;

          background: #ffffff;

          border-radius: 22px;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.06),
            0 12px 35px rgba(30, 20, 25, 0.045);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .connected-transportation-image-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 12px 35px rgba(30, 20, 25, 0.1);
        }

        /* =========================================
           IMAGE
        ========================================= */

        .connected-transportation-image-wrapper {
          position: relative;

          width: 100%;
          height: 370px;

          overflow: hidden;

          border-radius: 15px;

          background: #d9d2c8;
        }

        .connected-transportation-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.65s ease;
        }

        .connected-transportation-image-card:hover
        .connected-transportation-image {
          transform: scale(1.04);
        }

        /* =========================================
           IMAGE OVERLAY
        ========================================= */

        .connected-transportation-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(10, 10, 15, 0.02) 25%,
              rgba(10, 10, 15, 0.18) 100%
            );

          pointer-events: none;
        }

        /* =========================================
           IMAGE LABEL
        ========================================= */

        .connected-transportation-image-label {
          position: absolute;

          top: 16px;
          left: 16px;

          display: inline-flex;
          align-items: center;

          padding: 7px 11px;

          border-radius: 6px;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.08em;
        }

        /* =========================================
           LARGE TABLET
           Desktop 100px → Tablet 40px
        ========================================= */

        @media (max-width: 1200px) {
          .connected-transportation-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 80px;
            padding-bottom: 80px;

            gap: 55px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .connected-transportation-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 75px;
            padding-bottom: 75px;

            gap: 45px;
          }

          .connected-transportation-heading {
            font-size: 34px;
          }

          .connected-transportation-image-wrapper {
            height: 330px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 850px) {
          .connected-transportation-container {
            grid-template-columns: 1fr;

            gap: 42px;

            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .connected-transportation-heading {
            max-width: 700px;
            font-size: 34px;
          }

          .connected-transportation-description {
            max-width: 760px;
          }

          .connected-transportation-image-card {
            max-width: 760px;
          }

          .connected-transportation-image-wrapper {
            height: 360px;
          }
        }

        /* =========================================
           MOBILE
           40px → 24px
        ========================================= */

        @media (max-width: 600px) {
          .connected-transportation-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 58px;
            padding-bottom: 58px;

            gap: 32px;
          }

          .connected-transportation-label {
            margin-bottom: 11px;

            font-size: 9px;
            letter-spacing: 0.11em;
          }

          .connected-transportation-heading {
            margin-bottom: 20px;

            font-size: 28px;
            line-height: 1.27;
            letter-spacing: -0.03em;
          }

          .connected-transportation-description {
            gap: 13px;
            margin-bottom: 24px;
          }

          .connected-transportation-description p {
            font-size: 12.5px;
            line-height: 1.75;
          }

          .connected-flow {
            gap: 10px;
          }

          .connected-flow-icon {
            width: 36px;
            height: 36px;
          }

          .connected-flow-title {
            font-size: 11.5px;
          }

          .connected-flow-description {
            font-size: 10.5px;
          }

          .connected-transportation-image-card {
            padding: 7px;
            border-radius: 17px;
          }

          .connected-transportation-image-wrapper {
            height: 280px;
            border-radius: 12px;
          }

          .connected-transportation-image-label {
            top: 12px;
            left: 12px;

            padding: 6px 9px;

            font-size: 8px;
          }
        }

        /* =========================================
           SMALL MOBILE
           24px → 16px
        ========================================= */

        @media (max-width: 400px) {
          .connected-transportation-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .connected-transportation-heading {
            font-size: 25px;
          }

          .connected-transportation-description p {
            font-size: 12px;
          }

          .connected-transportation-image-wrapper {
            height: 230px;
          }

          .connected-flow-description {
            font-size: 10px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .connected-transportation-image,
          .connected-transportation-image-card,
          .connected-flow-icon {
            transition: none;
          }
        }
      `}</style>

      <div className="connected-transportation-container">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="connected-transportation-content">

          <p className="connected-transportation-label">
            CONNECTED TRANSPORTATION OPERATIONS
          </p>

          <h2 className="connected-transportation-heading">
            Bring Your Business Together
          </h2>

          <div className="connected-transportation-description">

            <p>
              Transportation operations often involve multiple business
              functions working together. TechTorch helps connect these
              areas through ERP, Operations Management, Supply Chain
              Management, Financial Management, CRM, Project Management and
              Web Portals.
            </p>

            <p>
              The focus is to understand your requirements and provide
              technology that fits your existing business environment.
            </p>

          </div>

          {/* =====================================
              INTEGRATED FLOW
          ===================================== */}

          <div className="connected-flow">

            <span className="connected-flow-icon">
              <ArrowLeftRight
                size={16}
                strokeWidth={1.8}
              />
            </span>

            <div className="connected-flow-content">

              <p className="connected-flow-title">
                Integrated Functional Flow
              </p>

              <p className="connected-flow-description">
                Cross-department coordination without structural silos
              </p>

            </div>

          </div>

        </div>

        {/* =====================================
            RIGHT IMAGE
        ===================================== */}

        <div className="connected-transportation-image-card">

          <div className="connected-transportation-image-wrapper">

            <img
              src="/transportation2.png"
              alt="Connected transportation operations"
              className="connected-transportation-image"
            />

            <div className="connected-transportation-image-overlay" />

            <span className="connected-transportation-image-label">
              ENTERPRISE SYNC
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}