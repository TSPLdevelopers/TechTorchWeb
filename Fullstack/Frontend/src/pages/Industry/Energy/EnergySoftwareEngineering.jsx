import React from "react";
import {
  Code2,
  Smartphone,
  LayoutGrid,
  Share2,
  RefreshCw,
  Settings,
  Wrench,
} from "lucide-react";

const WINE = "#730042";

const items = [
  {
    icon: Code2,
    label: "Custom Software Development",
  },
  {
    icon: Smartphone,
    label: "Web & Mobile Applications",
  },
  {
    icon: LayoutGrid,
    label: "Enterprise Software",
  },
  {
    icon: Share2,
    label: "API & System Integration",
  },
  {
    icon: RefreshCw,
    label: "Software Modernization",
  },
  {
    icon: Settings,
    label: "Quality Assurance & Testing",
  },
  {
    icon: Wrench,
    label: "Maintenance & Support",
  },
];

export default function SoftwareEngineeringWineSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           SECTION
        ================================================= */

        .software-engineering-section,
        .software-engineering-section * {
          box-sizing: border-box;
        }

        .software-engineering-section {
          width: 100%;
          background: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =================================================
           CONTAINER
           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ================================================= */

        .software-engineering-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          padding: 78px 100px;
        }

        /* =================================================
           HEADER
        ================================================= */

        .software-eyebrow {
          margin: 0 0 13px;

          color: #f3d9e2;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .software-heading {
          max-width: 850px;

          margin: 0 0 17px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        .software-subheading {
          max-width: 900px;

          margin: 0 0 42px;

          color: #e3c3cf;

          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* =================================================
           GRID
        ================================================= */

        .software-items-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 16px;
        }

        /* =================================================
           ITEM CARD
        ================================================= */

        .software-item {
          min-height: 100px;

          display: flex;
          align-items: center;
          gap: 13px;

          padding: 20px;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .software-item:hover {
          transform: translateY(-4px);

          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.22);
        }

        /* =================================================
           ICON
        ================================================= */

        .software-item-icon {
          width: 40px;
          height: 40px;
          min-width: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;

          flex-shrink: 0;
        }

        /* =================================================
           LABEL
        ================================================= */

        .software-item-label {
          margin: 0;

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 600;
        }

        /* =================================================
           LARGE LAPTOP
        ================================================= */

        @media (max-width: 1200px) {
          .software-engineering-container {
            padding-left: 60px;
            padding-right: 60px;
          }

          .software-heading {
            font-size: 38px;
          }

          .software-items-grid {
            gap: 15px;
          }
        }

        /* =================================================
           TABLET
           Exact spacing: 40px
        ================================================= */

        @media (max-width: 1000px) {
          .software-engineering-container {
            padding: 62px 40px;
          }

          .software-heading {
            font-size: 35px;
          }

          .software-subheading {
            max-width: 850px;
            font-size: 14px;
            margin-bottom: 34px;
          }

          .software-items-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 15px;
          }

          .software-item {
            min-height: 96px;
            padding: 18px;
          }
        }

        /* =================================================
           SMALL TABLET
        ================================================= */

        @media (max-width: 800px) {
          .software-engineering-container {
            padding: 55px 40px;
          }

          .software-heading {
            font-size: 32px;
          }

          .software-subheading {
            font-size: 13.5px;
            line-height: 1.7;
            margin-bottom: 32px;
          }

          .software-items-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

          .software-item {
            min-height: 92px;
            padding: 18px;
          }
        }

        /* =================================================
           MOBILE
           Exact spacing: 24px
        ================================================= */

        @media (max-width: 600px) {
          .software-engineering-container {
            padding: 48px 24px;
          }

          .software-eyebrow {
            margin-bottom: 11px;
            font-size: 10px;
          }

          .software-heading {
            font-size: 28px;
            line-height: 1.25;
            margin-bottom: 15px;
          }

          .software-subheading {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 28px;
          }

          .software-items-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .software-item {
            min-height: auto;
            padding: 18px;

            border-radius: 12px;
          }

          .software-item-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
          }

          .software-item-label {
            font-size: 13px;
          }
        }

        /* =================================================
           SMALL MOBILE
           Exact spacing: 16px
        ================================================= */

        @media (max-width: 480px) {
          .software-engineering-container {
            padding: 42px 16px;
          }

          .software-heading {
            font-size: 25px;
            line-height: 1.27;
          }

          .software-subheading {
            font-size: 12px;
            line-height: 1.65;
          }

          .software-item {
            padding: 16px;
            gap: 11px;
          }

          .software-item-icon {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }

          .software-item-label {
            font-size: 12px;
          }
        }

        /* =================================================
           VERY SMALL DEVICES
        ================================================= */

        @media (max-width: 340px) {
          .software-engineering-container {
            padding: 36px 16px;
          }

          .software-heading {
            font-size: 23px;
          }

          .software-subheading {
            font-size: 11.5px;
          }

          .software-item {
            padding: 14px;
          }

          .software-item-label {
            font-size: 11.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .software-item {
            transition: none;
          }

          .software-item:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="software-engineering-section">
        <div className="software-engineering-container">

          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <p className="software-eyebrow">
            SOFTWARE &amp; ENGINEERING
          </p>

          <h2 className="software-heading">
            Build and Modernize Your Technology
          </h2>

          <p className="software-subheading">
            Technology requirements can change as an organization grows.
            TechTorch provides software engineering and development services
            covering custom software, web and mobile applications, enterprise
            software, API and system integration, software modernization,
            testing and ongoing support.
          </p>

          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <div className="software-items-grid">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="software-item"
              >
                <span className="software-item-icon">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <span className="software-item-label">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}