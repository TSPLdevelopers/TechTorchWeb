import React from "react";
import {
  Boxes,
  Truck,
  SlidersHorizontal,
  CreditCard,
  Users,
  UserCheck,
  Code2,
  Cloud,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Boxes,
    title: "Enterprise Resource Planning",
    body: "Connect inventory, finance, human resources, customer relationships and supply chain management through an integrated ERP environment.",
    tags: ["Inventory", "Finance", "Supply Chain"],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    body: "Support supply chain activities across procurement, inventory, suppliers, orders and logistics.",
    tags: ["Procurement", "Suppliers", "Logistics"],
  },
  {
    icon: SlidersHorizontal,
    title: "Operations Management",
    body: "Support everyday operational processes through technology designed around business requirements.",
    tags: ["Operations", "Workflows"],
  },
  {
    icon: CreditCard,
    title: "Financial Management",
    body: "Manage financial activities and connect financial information with the wider business environment.",
    tags: ["Finance", "Records", "Reporting"],
  },
  {
    icon: Users,
    title: "People Resources",
    body: "Support workforce and human resource activities through digital solutions.",
    tags: ["People", "Workforce", "HR"],
  },
  {
    icon: UserCheck,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a connected CRM environment.",
    tags: ["Client Data", "Interactions"],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    body: "Develop, integrate and modernize software around specific business requirements.",
    tags: ["Custom Software", "Modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud & IT Services",
    body: "Support your technology environment through cloud infrastructure, cybersecurity, artificial intelligence and other IT services.",
    tags: ["Cloud", "Security", "IT Services"],
  },
];

export default function ManufacturingSolutionsGridSection() {
  return (
    <section className="manufacturing-solutions-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .manufacturing-solutions-section {
          width: 100%;
          background: #f4f1ec;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .manufacturing-solutions-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* =========================
           HEADER
        ========================= */

        .manufacturing-solutions-header {
          width: 100%;
          max-width: 720px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .manufacturing-solutions-label {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* Heading - Plus Jakarta Sans */
        .manufacturing-solutions-heading {
          margin: 0 0 14px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        /* Subheading - Plus Jakarta Sans */
        .manufacturing-solutions-subheading {
          max-width: 620px;
          margin: 0 auto;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =========================
           GRID
        ========================= */

        .manufacturing-solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        /* =========================
           CARD
        ========================= */

        .manufacturing-solution-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          border: 1px solid transparent;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .manufacturing-solution-card:hover {
          transform: translateY(-5px);
          border-color: #eadde1;
          box-shadow: 0 12px 28px rgba(122, 31, 61, 0.08);
        }

        .manufacturing-solution-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 18px;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* Card Heading - Plus Jakarta Sans */
        .manufacturing-solution-title {
          margin: 0 0 9px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        /* Card Body - Inter */
        .manufacturing-solution-body {
          margin: 0 0 18px;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =========================
           TAGS
        ========================= */

        .manufacturing-solution-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .manufacturing-solution-tag {
          display: inline-flex;
          align-items: center;
          min-height: 24px;
          padding: 4px 8px;
          border-radius: 6px;
          background: #f2f1f5;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 500;
        }

        /* =========================
           LARGE TABLET
        ========================= */

        @media (max-width: 1100px) {
          .manufacturing-solutions-container {
            padding: 64px 32px;
          }

          .manufacturing-solutions-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .manufacturing-solutions-heading {
            font-size: 32px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 850px) {
          .manufacturing-solutions-container {
            padding: 56px 24px;
          }

          .manufacturing-solutions-header {
            margin-bottom: 40px;
          }

          .manufacturing-solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .manufacturing-solutions-heading {
            font-size: 29px;
          }

          .manufacturing-solutions-subheading {
            font-size: 13.5px;
          }

          .manufacturing-solution-card {
            padding: 20px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .manufacturing-solutions-container {
            padding: 44px 16px;
          }

          .manufacturing-solutions-header {
            margin-bottom: 32px;
          }

          .manufacturing-solutions-label {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .manufacturing-solutions-heading {
            font-size: 25px;
            line-height: 1.28;
            letter-spacing: -0.02em;
          }

          .manufacturing-solutions-subheading {
            font-size: 13px;
            line-height: 1.7;
          }

          .manufacturing-solutions-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .manufacturing-solution-card {
            padding: 19px;
            border-radius: 14px;
          }

          .manufacturing-solution-icon {
            width: 37px;
            height: 37px;
            margin-bottom: 16px;
          }

          .manufacturing-solution-title {
            font-size: 14px;
          }

          .manufacturing-solution-body {
            font-size: 12px;
            line-height: 1.65;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {
          .manufacturing-solutions-container {
            padding: 36px 12px;
          }

          .manufacturing-solutions-heading {
            font-size: 22px;
          }

          .manufacturing-solutions-subheading {
            font-size: 12.5px;
          }

          .manufacturing-solutions-grid {
            gap: 11px;
          }

          .manufacturing-solution-card {
            padding: 17px;
          }

          .manufacturing-solution-title {
            font-size: 13.5px;
          }

          .manufacturing-solution-body {
            font-size: 11.5px;
          }

          .manufacturing-solution-tag {
            font-size: 9.5px;
            padding: 4px 7px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .manufacturing-solutions-container {
            padding: 30px 10px;
          }

          .manufacturing-solutions-heading {
            font-size: 20px;
          }

          .manufacturing-solutions-subheading {
            font-size: 12px;
          }

          .manufacturing-solution-card {
            padding: 15px;
          }

          .manufacturing-solution-title {
            font-size: 13px;
          }

          .manufacturing-solution-body {
            font-size: 11px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .manufacturing-solution-card {
            transition: none;
          }

          .manufacturing-solution-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="manufacturing-solutions-container">

        {/* Header */}
        <div className="manufacturing-solutions-header">
          <p className="manufacturing-solutions-label">
            MANUFACTURING SOLUTIONS
          </p>

          <h2 className="manufacturing-solutions-heading">
            Technology Built Around Your Business
          </h2>

          <p className="manufacturing-solutions-subheading">
            Explore capabilities designed to connect operations and drive
            manufacturing agility.
          </p>
        </div>

        {/* Cards */}
        <div className="manufacturing-solutions-grid">
          {cards.map(({ icon: Icon, title, body, tags }) => (
            <div
              key={title}
              className="manufacturing-solution-card"
            >
              {/* Icon */}
              <span className="manufacturing-solution-icon">
                <Icon size={17} strokeWidth={1.8} />
              </span>

              {/* Card Heading */}
              <h3 className="manufacturing-solution-title">
                {title}
              </h3>

              {/* Card Description */}
              <p className="manufacturing-solution-body">
                {body}
              </p>

              {/* Tags */}
              <div className="manufacturing-solution-tags">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="manufacturing-solution-tag"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}