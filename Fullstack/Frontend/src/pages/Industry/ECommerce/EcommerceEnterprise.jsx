import React from "react";
import { Share2 } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EnterpriseAlignmentSection() {
  return (
    <section className="enterprise-alignment-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .enterprise-alignment-section {
          width: 100%;
          overflow: hidden;
          background: #f7f5f2;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .enterprise-alignment-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: start;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .enterprise-alignment-label {
          margin: 0 0 14px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        .enterprise-alignment-heading {
          max-width: 620px;
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.025em;
        }

        /* =========================================
           RIGHT CONTENT
        ========================================= */

        .enterprise-alignment-right {
          width: 100%;
          min-width: 0;
        }

        .enterprise-alignment-description {
          max-width: 720px;
          margin: 0 0 28px;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           OPERATIONAL CARD
        ========================================= */

        .enterprise-alignment-card {
          position: relative;
          width: 100%;
          padding: 24px;
          box-sizing: border-box;

          background: #ffffff;
          border-left: 4px solid ${WINE};
          border-radius: 10px;

          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .enterprise-alignment-card:hover {
          transform: translateY(-7px) scale(1.012);
          box-shadow:
            0 18px 35px rgba(122, 31, 61, 0.12),
            0 5px 12px rgba(0, 0, 0, 0.04);
        }

        .enterprise-alignment-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .enterprise-alignment-card-icon {
          flex-shrink: 0;
          color: ${WINE};
        }

        .enterprise-alignment-card-title {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;
        }

        .enterprise-alignment-card-description {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .enterprise-alignment-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
            gap: 48px;
          }

          .enterprise-alignment-heading {
            font-size: 33px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 900px) {
          .enterprise-alignment-wrapper {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .enterprise-alignment-heading {
            max-width: 700px;
          }

          .enterprise-alignment-description {
            max-width: 800px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .enterprise-alignment-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
            gap: 26px;
          }

          .enterprise-alignment-label {
            margin-bottom: 12px;
            font-size: 9px;
          }

          .enterprise-alignment-heading {
            font-size: 28px;
            line-height: 1.22;
          }

          .enterprise-alignment-description {
            margin-bottom: 22px;
            font-size: 13px;
            line-height: 1.7;
          }

          .enterprise-alignment-card {
            padding: 21px;
            border-radius: 9px;
          }

          .enterprise-alignment-card-header {
            gap: 9px;
            margin-bottom: 10px;
          }

          .enterprise-alignment-card-title {
            font-size: 15px;
          }

          .enterprise-alignment-card-description {
            font-size: 12.5px;
            line-height: 1.65;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .enterprise-alignment-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 22px;
          }

          .enterprise-alignment-heading {
            font-size: 24px;
          }

          .enterprise-alignment-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .enterprise-alignment-card {
            padding: 19px;
            border-left-width: 3px;
          }

          .enterprise-alignment-card-title {
            font-size: 14px;
          }

          .enterprise-alignment-card-description {
            font-size: 12px;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {
          .enterprise-alignment-card:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .enterprise-alignment-card {
            transition: none;
          }

          .enterprise-alignment-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="enterprise-alignment-wrapper">
        {/* ================= LEFT ================= */}
        <div className="enterprise-alignment-left">
          <p className="enterprise-alignment-label">
            ENTERPRISE ALIGNMENT
          </p>

          <h2 className="enterprise-alignment-heading">
            Build a More Connected Online
            <br className="enterprise-alignment-break" />
            Business
          </h2>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="enterprise-alignment-right">
          <p className="enterprise-alignment-description">
            An e-commerce business depends on more than an online store.
            Product information, inventory, pricing, payments, customer
            data and business insights all play an important role in
            managing online operations. TechTorch provides e-commerce
            solutions that bring these areas together in a practical
            digital environment, with support from implementation and
            training through ongoing maintenance and updates.
          </p>

          {/* ================= CARD ================= */}
          <div className="enterprise-alignment-card">
            <div className="enterprise-alignment-card-header">
              <Share2
                className="enterprise-alignment-card-icon"
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <h3 className="enterprise-alignment-card-title">
                Operational Coherence
              </h3>
            </div>

            <p className="enterprise-alignment-card-description">
              Bridging the gap between the front-of-house shopping
              experience and back-of-house supply chain execution creates
              stable, predictable growth for expanding enterprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}