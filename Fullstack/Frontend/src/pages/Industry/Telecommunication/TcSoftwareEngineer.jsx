import React from "react";
import {
  FileCode,
  Code2,
  Smartphone,
  Briefcase,
  Share2,
  RefreshCw,
  CheckCircle2,
  Headphones,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const items = [
  { icon: Code2, label: "Custom Software Development" },
  { icon: Smartphone, label: "Web & Mobile Applications" },
  { icon: Briefcase, label: "Enterprise Software" },
  { icon: Share2, label: "API & System Integration" },
  { icon: RefreshCw, label: "Software Modernization" },
  { icon: CheckCircle2, label: "Testing & Quality Assurance" },
  { icon: Headphones, label: "Maintenance & Support" },
];

export default function SoftwareEngineeringMatrixSection() {
  return (
    <section className="software-engineering-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .software-engineering-section {
          width: 100%;
          overflow: hidden;

          background: #f7f5f2;
          color: ${INK};

          font-family: "Inter", sans-serif;
        }

        .software-engineering-section *,
        .software-engineering-section *::before,
        .software-engineering-section *::after {
          box-sizing: border-box;
        }

        /* =========================================
           CONTAINER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .software-engineering-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;

          padding: 90px 100px;

          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 70px;
          align-items: start;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .software-engineering-copy {
          padding-top: 8px;
        }

        .software-engineering-label {
          margin: 0 0 13px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .software-engineering-heading {
          max-width: 500px;
          margin: 0 0 18px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: -0.035em;
        }

        .software-engineering-description {
          max-width: 510px;
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           MATRIX PANEL
        ========================================= */

        .engineering-matrix-panel {
          width: 100%;
          padding: 28px;

          background: #ffffff;
          border-radius: 20px;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.06),
            0 12px 35px rgba(30, 20, 25, 0.035);
        }

        .engineering-matrix-header {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 9px;
        }

        .engineering-matrix-header-icon {
          flex-shrink: 0;
          color: ${WINE};
        }

        .engineering-matrix-title {
          margin: 0;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
        }

        .engineering-matrix-description {
          margin: 0 0 23px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           MATRIX ITEMS
        ========================================= */

        .engineering-matrix-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .engineering-matrix-item {
          min-width: 0;

          display: flex;
          align-items: center;
          gap: 11px;

          padding: 13px 14px;

          border-radius: 10px;

          background: #f6f7fa;

          transition:
            background-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .engineering-matrix-item:hover {
          transform: translateY(-2px);

          background: #f3f1f3;

          box-shadow:
            0 5px 14px rgba(40, 20, 30, 0.06);
        }

        .engineering-matrix-item-icon {
          flex-shrink: 0;
          color: ${WINE};

          transition: transform 0.3s ease;
        }

        .engineering-matrix-item:hover
        .engineering-matrix-item-icon {
          transform: scale(1.12);
        }

        .engineering-matrix-item-label {
          min-width: 0;

          color: ${INK};

          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          line-height: 1.45;
        }

        /* =========================================
           LARGE TABLET
           100px → 40px
        ========================================= */

        @media (max-width: 1200px) {
          .software-engineering-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 80px;
            padding-bottom: 80px;

            gap: 50px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .software-engineering-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 75px;
            padding-bottom: 75px;

            gap: 45px;
          }

          .software-engineering-heading {
            font-size: 32px;
          }

          .engineering-matrix-panel {
            padding: 25px;
          }
        }

        /* =========================================
           SINGLE COLUMN TABLET
        ========================================= */

        @media (max-width: 850px) {
          .software-engineering-container {
            grid-template-columns: 1fr;

            gap: 42px;

            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .software-engineering-copy {
            padding-top: 0;
          }

          .software-engineering-heading {
            max-width: 650px;
            font-size: 32px;
          }

          .software-engineering-description {
            max-width: 700px;
            font-size: 14px;
          }

          .engineering-matrix-panel {
            max-width: 100%;
          }
        }

        /* =========================================
           MOBILE
           40px → 24px
        ========================================= */

        @media (max-width: 600px) {
          .software-engineering-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 60px;
            padding-bottom: 60px;

            gap: 32px;
          }

          .software-engineering-label {
            margin-bottom: 11px;

            font-size: 10px;
            letter-spacing: 0.13em;
          }

          .software-engineering-heading {
            margin-bottom: 14px;

            font-size: 27px;
            line-height: 1.28;
            letter-spacing: -0.025em;
          }

          .software-engineering-description {
            font-size: 13px;
            line-height: 1.75;
          }

          .engineering-matrix-panel {
            padding: 21px;
            border-radius: 17px;
          }

          .engineering-matrix-header {
            gap: 8px;
          }

          .engineering-matrix-title {
            font-size: 14px;
          }

          .engineering-matrix-description {
            margin-bottom: 20px;

            font-size: 11.5px;
            line-height: 1.7;
          }

          .engineering-matrix-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .engineering-matrix-item {
            padding: 12px 13px;
          }

          .engineering-matrix-item-label {
            font-size: 11.5px;
          }
        }

        /* =========================================
           SMALL MOBILE
           24px → 16px
        ========================================= */

        @media (max-width: 400px) {
          .software-engineering-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .software-engineering-heading {
            font-size: 24px;
          }

          .software-engineering-description {
            font-size: 12.5px;
          }

          .engineering-matrix-panel {
            padding: 18px;
          }

          .engineering-matrix-title {
            font-size: 13.5px;
          }

          .engineering-matrix-item {
            padding: 11px 12px;
          }

          .engineering-matrix-item-label {
            font-size: 11px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .engineering-matrix-item,
          .engineering-matrix-item-icon {
            transition: none !important;
          }
        }
      `}</style>

      <div className="software-engineering-container">

        {/* =========================================
            LEFT: COPY
        ========================================= */}

        <div className="software-engineering-copy">
          <p className="software-engineering-label">
            Software &amp; Engineering
          </p>

          <h2 className="software-engineering-heading">
            Build and Modernize Your Technology
          </h2>

          <p className="software-engineering-description">
            TechTorch provides software development and engineering
            services covering custom software, web and mobile applications,
            enterprise software, API integration, software modernization,
            testing and ongoing support.
          </p>
        </div>

        {/* =========================================
            RIGHT: MATRIX PANEL
        ========================================= */}

        <div className="engineering-matrix-panel">

          <div className="engineering-matrix-header">
            <FileCode
              size={18}
              strokeWidth={1.8}
              className="engineering-matrix-header-icon"
            />

            <h3 className="engineering-matrix-title">
              Full-Lifecycle Engineering Matrix
            </h3>
          </div>

          <p className="engineering-matrix-description">
            Engineered for telecommunications businesses requiring
            high-availability environments, robust data throughput, and
            maintainable software stacks.
          </p>

          <div className="engineering-matrix-grid">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="engineering-matrix-item"
              >
                <Icon
                  size={15}
                  strokeWidth={1.8}
                  className="engineering-matrix-item-icon"
                />

                <span className="engineering-matrix-item-label">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}