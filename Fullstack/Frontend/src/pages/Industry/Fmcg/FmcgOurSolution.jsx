import React from "react";
import {
  LayoutGrid,
  Share2,
  Layers,
  Landmark,
  UserPlus,
  CreditCard,
  Monitor,
  CheckSquare,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: LayoutGrid,
    title: "ERP",
    body: "Bring core business processes together through an integrated ERP environment covering areas such as inventory, finance, human resources, customer relationships and supply chain management.",
  },
  {
    num: "02",
    icon: Share2,
    title: "Operations Management",
    body: "Support and organize operational processes through technology designed around your business workflows.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Supply Chain Management",
    body: "Connect supply chain activities from procurement through delivery, with visibility across inventory, orders, suppliers and logistics.",
  },
  {
    num: "04",
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial operations with organized information, financial processes and reporting capabilities.",
  },
  {
    num: "05",
    icon: UserPlus,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a connected CRM environment.",
  },
  {
    num: "06",
    icon: CreditCard,
    title: "E-Commerce",
    body: "Support online business activities through digital commerce solutions for managing online stores and customer experiences.",
  },
  {
    num: "07",
    icon: Monitor,
    title: "Web Portals",
    body: "Create digital portals that provide access to information and services for customers, employees and business users.",
  },
  {
    num: "08",
    icon: CheckSquare,
    title: "Project Management",
    body: "Support project planning, collaboration and workflow management through structured digital solutions.",
  },
];

export default function OurSolutionsGridSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .solutions-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .solutions-container {
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* ================= HEADER ================= */

        .solutions-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .solutions-heading {
          max-width: 700px;
          margin: 0 0 42px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -1px;
        }

        /* ================= GRID ================= */

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        /* ================= CARD ================= */

        .solution-card {
          min-width: 0;
          padding: 22px;
          border: 1px solid #ece9e4;
          border-radius: 16px;
          background: #ffffff;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .solution-card:hover {
          transform: translateY(-5px);
          border-color: rgba(122, 31, 61, 0.18);
          box-shadow: 0 12px 30px rgba(27, 27, 42, 0.07);
        }

        /* ================= CARD TOP ================= */

        .solution-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 20px;
        }

        .solution-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 32px;
          height: 26px;
          padding: 0 8px;

          border-radius: 7px;
          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
        }

        .solution-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 40px;
          height: 40px;

          flex-shrink: 0;

          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* ================= CARD CONTENT ================= */

        .solution-title {
          margin: 0 0 10px;
          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: -0.2px;
        }

        .solution-body {
          margin: 0;
          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* ================= TABLET ================= */

        @media (max-width: 1050px) {
          .solutions-container {
            padding: 60px 30px;
          }

          .solutions-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .solutions-heading {
            font-size: 35px;
            margin-bottom: 36px;
          }

          .solution-card {
            padding: 20px;
          }
        }

        /* ================= SMALL TABLET ================= */

        @media (max-width: 800px) {
          .solutions-container {
            padding: 52px 24px;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .solutions-heading {
            max-width: 600px;
            font-size: 32px;
            margin-bottom: 30px;
          }

          .solution-card {
            padding: 19px;
            border-radius: 14px;
          }

          .solution-title {
            font-size: 15px;
          }

          .solution-body {
            font-size: 12.5px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .solutions-container {
            padding: 44px 16px;
          }

          .solutions-eyebrow {
            margin-bottom: 10px;
            font-size: 10px;
            letter-spacing: 0.8px;
          }

          .solutions-heading {
            margin-bottom: 26px;
            font-size: 28px;
            line-height: 1.25;
            letter-spacing: -0.6px;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .solution-card {
            padding: 18px;
            border-radius: 13px;
          }

          .solution-card-top {
            margin-bottom: 17px;
          }

          .solution-number {
            min-width: 30px;
            height: 24px;
            font-size: 9px;
          }

          .solution-icon {
            width: 37px;
            height: 37px;
            border-radius: 9px;
          }

          .solution-title {
            margin-bottom: 8px;
            font-size: 15px;
          }

          .solution-body {
            font-size: 12px;
            line-height: 1.6;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {
          .solutions-container {
            padding: 38px 13px;
          }

          .solutions-heading {
            font-size: 25px;
            line-height: 1.25;
            letter-spacing: -0.4px;
          }

          .solutions-grid {
            gap: 10px;
          }

          .solution-card {
            padding: 16px;
          }

          .solution-title {
            font-size: 14px;
          }

          .solution-body {
            font-size: 11.5px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .solutions-container {
            padding: 34px 11px;
          }

          .solutions-heading {
            font-size: 23px;
          }

          .solution-card {
            padding: 15px;
          }

          .solution-icon {
            width: 34px;
            height: 34px;
          }

          .solution-title {
            font-size: 13.5px;
          }

          .solution-body {
            font-size: 11px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .solution-card {
            transition: none;
          }

          .solution-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="solutions-section">
        <div className="solutions-container">

          {/* Header */}
          <div>
            <p className="solutions-eyebrow">
              Our Solutions
            </p>

            <h2 className="solutions-heading">
              Solutions Built Around Your Business
            </h2>
          </div>

          {/* Solutions Grid */}
          <div className="solutions-grid">
            {cards.map(({ num, icon: Icon, title, body }) => (
              <article
                key={num}
                className="solution-card"
              >
                <div className="solution-card-top">
                  <span className="solution-number">
                    {num}
                  </span>

                  <span className="solution-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                <h3 className="solution-title">
                  {title}
                </h3>

                <p className="solution-body">
                  {body}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}