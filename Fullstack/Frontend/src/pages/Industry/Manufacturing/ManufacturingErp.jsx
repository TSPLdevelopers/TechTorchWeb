import React from "react";
import {
  Database,
  RefreshCw,
  LayoutGrid,
  Briefcase,
  SlidersHorizontal,
} from "lucide-react";

const WINE = "#7A1F3D";

const cards = [
  {
    icon: Database,
    title: "Centralized Data",
    body: "Bring important business information together.",
  },
  {
    icon: RefreshCw,
    title: "Integrated Processes",
    body: "Connect different business functions through technology.",
  },
  {
    icon: LayoutGrid,
    title: "Reporting & Analytics",
    body: "Use business information to support better visibility.",
  },
  {
    icon: Briefcase,
    title: "Process Automation",
    body: "Support routine activities through technology-enabled workflows.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Technology",
    body: "Adapt solutions to changing business requirements.",
  },
];

export default function ErpForManufacturingSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .erp-manufacturing-section {
          width: 100%;
          background: #f2f2f5;
          padding: 40px;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .erp-manufacturing-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 42px;
          border-radius: 28px;
          background: ${WINE};
        }

        /* HEADER */

        .erp-manufacturing-label {
          margin: 0 0 12px;
          color: #f3d9e2;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          line-height: 1.4;
        }

        .erp-manufacturing-heading {
          margin: 0 0 14px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.03em;
        }

        .erp-manufacturing-subheading {
          max-width: 720px;
          margin: 0 0 34px;
          color: #e3c3cf;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* CARDS */

        .erp-manufacturing-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .erp-manufacturing-card {
          min-width: 0;
          padding: 21px 18px;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .erp-manufacturing-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .erp-manufacturing-icon {
          display: block;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .erp-manufacturing-card-title {
          margin: 0 0 8px;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .erp-manufacturing-card-body {
          margin: 0;
          color: #d9b7c4;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* LARGE TABLET */

        @media (max-width: 1100px) {
          .erp-manufacturing-section {
            padding: 32px;
          }

          .erp-manufacturing-container {
            padding: 36px;
          }

          .erp-manufacturing-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* TABLET */

        @media (max-width: 800px) {
          .erp-manufacturing-section {
            padding: 28px;
          }

          .erp-manufacturing-container {
            padding: 32px;
            border-radius: 24px;
          }

          .erp-manufacturing-heading {
            font-size: 30px;
          }

          .erp-manufacturing-subheading {
            font-size: 13.5px;
            line-height: 1.75;
            margin-bottom: 28px;
          }

          .erp-manufacturing-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .erp-manufacturing-card {
            padding: 20px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .erp-manufacturing-section {
            padding: 22px 18px;
          }

          .erp-manufacturing-container {
            padding: 28px 20px;
            border-radius: 20px;
          }

          .erp-manufacturing-label {
            font-size: 9.5px;
            letter-spacing: 0.13em;
          }

          .erp-manufacturing-heading {
            font-size: 26px;
            line-height: 1.25;
            letter-spacing: -0.02em;
          }

          .erp-manufacturing-subheading {
            font-size: 13px;
            line-height: 1.75;
            margin-bottom: 25px;
          }

          .erp-manufacturing-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .erp-manufacturing-card {
            padding: 19px;
            border-radius: 14px;
          }

          .erp-manufacturing-icon {
            margin-bottom: 13px;
          }

          .erp-manufacturing-card-title {
            font-size: 14px;
          }

          .erp-manufacturing-card-body {
            font-size: 12px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 400px) {
          .erp-manufacturing-section {
            padding: 18px 14px;
          }

          .erp-manufacturing-container {
            padding: 25px 17px;
            border-radius: 18px;
          }

          .erp-manufacturing-heading {
            font-size: 24px;
          }

          .erp-manufacturing-subheading {
            font-size: 12px;
          }

          .erp-manufacturing-card {
            padding: 17px;
          }

          .erp-manufacturing-card-title {
            font-size: 13px;
          }

          .erp-manufacturing-card-body {
            font-size: 11.5px;
          }
        }

        /* VERY SMALL MOBILE */

        @media (max-width: 340px) {
          .erp-manufacturing-container {
            padding: 22px 14px;
          }

          .erp-manufacturing-heading {
            font-size: 22px;
          }

          .erp-manufacturing-subheading {
            font-size: 11.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .erp-manufacturing-card {
            transition: none;
          }
        }
      `}</style>

      <section className="erp-manufacturing-section">
        <div className="erp-manufacturing-container">

          {/* HEADER */}
          <div>
            <p className="erp-manufacturing-label">
              ERP FOR MANUFACTURING
            </p>

            <h2 className="erp-manufacturing-heading">
              Bring Core Business Functions Together
            </h2>

            <p className="erp-manufacturing-subheading">
              Manufacturing businesses depend on different functions working
              together. Connecting these areas through technology can create a
              more organized environment for managing business information and
              processes.
            </p>
          </div>

          {/* CARDS */}
          <div className="erp-manufacturing-grid">
            {cards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="erp-manufacturing-card"
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className="erp-manufacturing-icon"
                />

                <h3 className="erp-manufacturing-card-title">
                  {title}
                </h3>

                <p className="erp-manufacturing-card-body">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}