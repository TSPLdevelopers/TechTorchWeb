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

        .software-engineering-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* Header */
        .software-engineering-header {
          width: 100%;
          max-width: 720px;
          margin: 0 auto 48px;
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

        /* Main heading - Plus Jakarta Sans */
        .software-engineering-heading {
          margin: 0 0 16px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.025em;
        }

        /* Subheading - Plus Jakarta Sans */
        .software-engineering-subheading {
          max-width: 650px;
          margin: 0 auto;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* Cards grid */
        .software-engineering-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .software-engineering-card {
          min-width: 0;
          padding: 24px;
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

        .software-engineering-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin-bottom: 18px;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* Card headings - Plus Jakarta Sans */
        .software-engineering-card-title {
          margin: 0 0 10px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.45;
        }

        /* Card descriptions - Inter */
        .software-engineering-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* Large tablet */
        @media (max-width: 1024px) {
          .software-engineering-container {
            padding: 64px 32px;
          }

          .software-engineering-grid {
            gap: 16px;
          }

          .software-engineering-card {
            padding: 21px;
          }

          .software-engineering-heading {
            font-size: 31px;
          }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .software-engineering-container {
            padding: 54px 24px;
          }

          .software-engineering-header {
            margin-bottom: 36px;
          }

          .software-engineering-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .software-engineering-heading {
            font-size: 29px;
          }

          .software-engineering-subheading {
            font-size: 13.5px;
          }

          .software-engineering-card {
            padding: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .software-engineering-container {
            padding: 42px 16px;
          }

          .software-engineering-header {
            margin-bottom: 30px;
          }

          .software-engineering-label {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .software-engineering-heading {
            font-size: 25px;
            line-height: 1.3;
            letter-spacing: -0.02em;
          }

          .software-engineering-subheading {
            font-size: 13px;
            line-height: 1.7;
          }

          .software-engineering-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .software-engineering-card {
            padding: 20px;
            border-radius: 14px;
          }

          .software-engineering-icon {
            width: 37px;
            height: 37px;
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

        /* Small mobile */
        @media (max-width: 400px) {
          .software-engineering-container {
            padding: 34px 12px;
          }

          .software-engineering-heading {
            font-size: 22px;
          }

          .software-engineering-subheading {
            font-size: 12.5px;
          }

          .software-engineering-card {
            padding: 17px;
          }

          .software-engineering-card-title {
            font-size: 13.5px;
          }

          .software-engineering-card-body {
            font-size: 11.5px;
          }
        }

        /* Very small mobile */
        @media (max-width: 340px) {
          .software-engineering-container {
            padding: 28px 10px;
          }

          .software-engineering-heading {
            font-size: 20px;
          }

          .software-engineering-subheading {
            font-size: 12px;
          }

          .software-engineering-card {
            padding: 15px;
          }
        }

        /* Accessibility */
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
                <Icon size={17} strokeWidth={1.8} />
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