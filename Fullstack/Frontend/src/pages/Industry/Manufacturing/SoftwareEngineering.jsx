import React from "react";
import {
  Code2,
  LayoutGrid,
  Share2,
  RefreshCw,
  CheckCircle2,
  Headphones,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Code2,
    title: "Custom Software",
    body: "Develop applications around specific business requirements.",
  },
  {
    icon: LayoutGrid,
    title: "Enterprise Applications",
    body: "Build software supporting important business processes.",
  },
  {
    icon: Share2,
    title: "System Integration",
    body: "Connect applications and platforms for better information exchange.",
  },
  {
    icon: RefreshCw,
    title: "Software Modernization",
    body: "Modernize existing applications and technology environments.",
  },
  {
    icon: CheckCircle2,
    title: "Testing & Quality Assurance",
    body: "Test software before deployment to support quality and reliability.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    body: "Continue supporting and improving software after implementation.",
  },
];

export default function SoftwareEngineeringGridSection() {
  return (
    <section className="software-engineering-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .software-engineering-section {
          width: 100%;
          background: #f2f2f5;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =========================================
           MAIN CONTAINER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .software-engineering-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 76px 100px;
        }

        /* =========================================
           HEADER
        ========================================= */

        .software-engineering-header {
          width: 100%;
          max-width: 760px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .software-engineering-label {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .software-engineering-heading {
          margin: 0 0 16px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 35px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.025em;
        }

        .software-engineering-subheading {
          max-width: 680px;
          margin: 0 auto;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* =========================================
           CARDS GRID
        ========================================= */

        .software-engineering-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .software-engineering-card {
          min-width: 0;
          padding: 26px;
          background: #ffffff;
          border: 1px solid transparent;
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .software-engineering-card:hover {
          transform: translateY(-4px);
          border-color: #eadde1;
          box-shadow: 0 12px 28px rgba(122, 31, 61, 0.08);
        }

        /* =========================================
           ICON
        ========================================= */

        .software-engineering-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;

          margin-bottom: 18px;

          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* =========================================
           CARD TITLE
        ========================================= */

        .software-engineering-card-title {
          margin: 0 0 10px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.45;
        }

        /* =========================================
           CARD BODY
        ========================================= */

        .software-engineering-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* =========================================
           LARGE TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .software-engineering-container {
            padding: 68px 40px;
          }

          .software-engineering-grid {
            gap: 18px;
          }

          .software-engineering-card {
            padding: 23px;
          }

          .software-engineering-heading {
            font-size: 32px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .software-engineering-container {
            padding: 58px 40px;
          }

          .software-engineering-header {
            margin-bottom: 40px;
          }

          .software-engineering-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 17px;
          }

          .software-engineering-heading {
            font-size: 30px;
          }

          .software-engineering-subheading {
            font-size: 13.5px;
          }

          .software-engineering-card {
            padding: 21px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .software-engineering-container {
            padding: 44px 24px;
          }

          .software-engineering-header {
            margin-bottom: 32px;
          }

          .software-engineering-label {
            margin-bottom: 10px;
            font-size: 10px;
          }

          .software-engineering-heading {
            font-size: 26px;
            line-height: 1.32;
            letter-spacing: -0.02em;
          }

          .software-engineering-subheading {
            font-size: 13px;
            line-height: 1.7;
          }

          .software-engineering-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .software-engineering-card {
            padding: 20px;
            border-radius: 14px;
          }

          .software-engineering-icon {
            width: 38px;
            height: 38px;
            margin-bottom: 15px;
          }

          .software-engineering-card-title {
            font-size: 14px;
          }

          .software-engineering-card-body {
            font-size: 12px;
            line-height: 1.7;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .software-engineering-container {
            padding: 36px 16px;
          }

          .software-engineering-header {
            margin-bottom: 28px;
          }

          .software-engineering-heading {
            font-size: 23px;
          }

          .software-engineering-subheading {
            font-size: 12.5px;
          }

          .software-engineering-grid {
            gap: 12px;
          }

          .software-engineering-card {
            padding: 18px;
          }

          .software-engineering-card-title {
            font-size: 13.5px;
          }

          .software-engineering-card-body {
            font-size: 11.5px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {
          .software-engineering-container {
            padding: 30px 16px;
          }

          .software-engineering-heading {
            font-size: 21px;
          }

          .software-engineering-subheading {
            font-size: 12px;
          }

          .software-engineering-card {
            padding: 16px;
          }

          .software-engineering-card-title {
            font-size: 13px;
          }

          .software-engineering-card-body {
            font-size: 11px;
          }
        }

        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .software-engineering-card {
            transition: none;
          }

          .software-engineering-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="software-engineering-container">

        {/* Header */}
        <div className="software-engineering-header">
          <p className="software-engineering-label">
            SOFTWARE ENGINEERING
          </p>

          <h2 className="software-engineering-heading">
            Build Technology Around Your Business Requirements
          </h2>

          <p className="software-engineering-subheading">
            Every business has different technology requirements. TechTorch
            provides software engineering services to help organizations
            develop, integrate, modernize and support their software
            environment.
          </p>
        </div>

        {/* Cards */}
        <div className="software-engineering-grid">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="software-engineering-card"
            >
              <span className="software-engineering-icon">
                <Icon
                  size={17}
                  strokeWidth={1.8}
                />
              </span>

              <h3 className="software-engineering-card-title">
                {title}
              </h3>

              <p className="software-engineering-card-body">
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}