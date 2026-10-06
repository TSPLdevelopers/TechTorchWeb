import React from "react";
import {
  Share2,
  Settings,
  CreditCard,
  Users,
  GitBranch,
  Monitor,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Share2,
    title: "ERP",
    body: "Connect business functions such as finance, human resources, customer relations, inventory and supply chain management through an integrated system.",
  },
  {
    icon: Settings,
    title: "Operations Management",
    body: "Support, monitor and improve business operations through digital solutions.",
  },
  {
    icon: CreditCard,
    title: "Financial Management",
    body: "Manage financial operations and business information through digital financial solutions.",
  },
  {
    icon: Users,
    title: "CRM",
    body: "Manage customer information and interactions through a dedicated CRM solution.",
  },
  {
    icon: GitBranch,
    title: "Project Management",
    body: "Support collaboration, workflows and project activities through digital project management solutions.",
  },
  {
    icon: Monitor,
    title: "Web Portals",
    body: "Create digital portals for customers, partners and employees.",
  },
];

export default function KeySolutionsExploreGridSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .key-solutions-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .key-solutions-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* =========================
           HEADER
        ========================= */

        .key-solutions-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .key-solutions-heading {
          margin: 0 0 38px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        /* =========================
           GRID
        ========================= */

        .key-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        /* =========================
           CARD
        ========================= */

        .key-solution-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 275px;
          padding: 24px;
          background: #f7f7fa;
          border-top: 4px solid ${WINE};
          border-radius: 0 0 16px 16px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .key-solution-card:hover {
          transform: translateY(-5px);
          background: #ffffff;
          box-shadow: 0 14px 32px rgba(27, 27, 42, 0.09);
        }

        .key-solution-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
          flex-shrink: 0;
        }

        .key-solution-title {
          margin: 0 0 10px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 700;
        }

        .key-solution-body {
          margin: 0 0 22px;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        .key-solution-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: gap 0.25s ease;
        }

        .key-solution-card:hover .key-solution-link {
          gap: 9px;
        }

        /* =========================
           LARGE TABLET
        ========================= */

        @media (max-width: 1050px) {
          .key-solutions-container {
            padding: 62px 30px;
          }

          .key-solutions-heading {
            font-size: 34px;
            margin-bottom: 32px;
          }

          .key-solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .key-solution-card {
            min-height: 250px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 700px) {
          .key-solutions-container {
            padding: 52px 20px;
          }

          .key-solutions-eyebrow {
            font-size: 11px;
            margin-bottom: 10px;
          }

          .key-solutions-heading {
            font-size: 30px;
            line-height: 1.25;
            margin-bottom: 28px;
          }

          .key-solutions-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .key-solution-card {
            min-height: auto;
            padding: 22px 20px;
            border-radius: 0 0 14px 14px;
          }

          .key-solution-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 16px;
          }

          .key-solution-title {
            font-size: 16px;
          }

          .key-solution-body {
            font-size: 13px;
            line-height: 1.65;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 450px) {
          .key-solutions-container {
            padding: 44px 16px;
          }

          .key-solutions-heading {
            font-size: 26px;
            margin-bottom: 24px;
          }

          .key-solution-card {
            padding: 20px 18px;
          }

          .key-solution-icon {
            width: 38px;
            height: 38px;
            margin-bottom: 14px;
          }

          .key-solution-title {
            font-size: 15px;
            margin-bottom: 8px;
          }

          .key-solution-body {
            font-size: 12px;
            line-height: 1.65;
            margin-bottom: 20px;
          }

          .key-solution-link {
            font-size: 11.5px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .key-solutions-container {
            padding: 38px 14px;
          }

          .key-solutions-heading {
            font-size: 23px;
          }

          .key-solution-card {
            padding: 18px 16px;
          }

          .key-solution-title {
            font-size: 14px;
          }

          .key-solution-body {
            font-size: 11.5px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .key-solution-card,
          .key-solution-link {
            transition: none;
          }
        }
      `}</style>

      <section className="key-solutions-section">
        <div className="key-solutions-container">

          {/* Header */}
          <p className="key-solutions-eyebrow">
            KEY SOLUTIONS
          </p>

          <h2 className="key-solutions-heading">
            Technology for Core Business Functions
          </h2>

          {/* Cards */}
          <div className="key-solutions-grid">
            {cards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="key-solution-card"
              >
                <span className="key-solution-icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <h3 className="key-solution-title">
                  {title}
                </h3>

                <p className="key-solution-body">
                  {body}
                </p>

                <span className="key-solution-link">
                  Explore Solution
                  <ArrowRight size={13} />
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}