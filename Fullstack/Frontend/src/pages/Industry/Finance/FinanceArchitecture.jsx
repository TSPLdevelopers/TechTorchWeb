import React from "react";
import {
  FileText,
  CreditCard,
  Briefcase,
  Users,
  Globe,
  Code2,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: FileText,
    title: "Financial Management",
    body: "Bring financial activities and information into a more organized digital environment to support everyday business operations.",
    tags: ["Financial Operations", "Records", "Reporting", "Data Management"],
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    body: "Support payment-related activities with technology that helps organize transactions and financial information.",
    tags: ["Payments", "Transactions", "Tracking", "Reporting"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    body: "Connect finance with other important business functions through an integrated ERP environment.",
    tags: ["Business Processes", "Finance", "Centralized Data", "Workflows"],
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a connected CRM environment designed around business needs.",
    tags: ["Customer Data", "Interactions", "Sales", "Service"],
  },
  {
    icon: Globe,
    title: "Web Portals",
    body: "Create digital portals that provide customers, partners or employees with easier access to relevant services and information.",
    tags: ["Web Applications", "Digital Access", "User Experience", "Integration"],
  },
  {
    icon: Code2,
    title: "Software Development",
    body: "Develop software around specific business requirements, whether you need a new application, system integration or modernization.",
    tags: ["Custom Software", "Web Applications", "Integration", "Modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Build a flexible technology foundation that supports changing operational and business requirements.",
    tags: ["Cloud Infrastructure", "Scalability", "Accessibility", "Support"],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "Strengthen the security of business applications, systems and information through technology-focused security services.",
    tags: ["Data Protection", "System Security", "Access Management", "Support"],
  },
];

export default function CoreArchitectureGridSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           SECTION
        ================================================= */

        .core-architecture-section {
          width: 100%;
          background: #f7f7fa;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .core-architecture-section *,
        .core-architecture-section *::before,
        .core-architecture-section *::after {
          box-sizing: border-box;
        }

        .core-architecture-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 78px 100px;
        }

        /* =================================================
           HEADER
        ================================================= */

        .core-architecture-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 56px;
          align-items: start;
          margin-bottom: 40px;
        }

        /* =================================================
           BADGE
        ================================================= */

        .core-architecture-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          margin-bottom: 16px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1;
        }

        .core-architecture-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        /* =================================================
           HEADING
        ================================================= */

        .core-architecture-heading {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 36px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .core-architecture-heading span {
          color: ${WINE};
        }

        /* =================================================
           SUBHEADING
        ================================================= */

        .core-architecture-subheading {
          margin: 0;
          padding-top: 4px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
          max-width: 680px;
        }

        /* =================================================
           CARDS GRID
        ================================================= */

        .core-architecture-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        /* =================================================
           CARD
        ================================================= */

        .core-architecture-card {
          min-width: 0;
          padding: 22px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .core-architecture-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
        }

        /* =================================================
           CARD ICON
        ================================================= */

        .core-architecture-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 8px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* =================================================
           CARD TITLE
        ================================================= */

        .core-architecture-card-title {
          margin: 0 0 8px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* =================================================
           CARD BODY
        ================================================= */

        .core-architecture-card-body {
          margin: 0 0 16px;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =================================================
           TAGS
        ================================================= */

        .core-architecture-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .core-architecture-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 6px;
          background: #f2f1f5;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 500;
        }

        /* =================================================
           LAPTOP
        ================================================= */

        @media (max-width: 1200px) {
          .core-architecture-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .core-architecture-header {
            gap: 40px;
          }

          .core-architecture-heading {
            font-size: 33px;
          }

          .core-architecture-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {
          .core-architecture-container {
            padding-top: 62px;
            padding-bottom: 62px;
            padding-left: 40px;
            padding-right: 40px;
          }

          .core-architecture-header {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 34px;
          }

          .core-architecture-heading {
            font-size: 30px;
          }

          .core-architecture-subheading {
            padding-top: 0;
            max-width: 760px;
          }

          .core-architecture-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .core-architecture-card {
            padding: 20px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {
          .core-architecture-container {
            padding-top: 52px;
            padding-bottom: 52px;
            padding-left: 24px;
            padding-right: 24px;
          }

          .core-architecture-header {
            gap: 16px;
            margin-bottom: 28px;
          }

          .core-architecture-badge {
            margin-bottom: 14px;
            font-size: 10px;
          }

          .core-architecture-heading {
            font-size: 26px;
            line-height: 1.3;
          }

          .core-architecture-subheading {
            font-size: 14px;
            line-height: 1.7;
          }

          .core-architecture-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .core-architecture-card {
            padding: 19px;
            border-radius: 12px;
          }

          .core-architecture-card-title {
            font-size: 14px;
          }

          .core-architecture-card-body {
            font-size: 12px;
            line-height: 1.65;
          }

          .core-architecture-tag {
            font-size: 10px;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .core-architecture-container {
            padding-top: 44px;
            padding-bottom: 44px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .core-architecture-heading {
            font-size: 23px;
          }

          .core-architecture-subheading {
            font-size: 13px;
          }

          .core-architecture-card {
            padding: 17px;
          }

          .core-architecture-icon {
            width: 35px;
            height: 35px;
            margin-bottom: 14px;
          }

          .core-architecture-card-body {
            font-size: 12px;
          }

          .core-architecture-tag {
            font-size: 9px;
            padding: 4px 7px;
          }
        }

        /* =================================================
           VERY SMALL DEVICES
        ================================================= */

        @media (max-width: 340px) {
          .core-architecture-container {
            padding-top: 38px;
            padding-bottom: 38px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .core-architecture-heading {
            font-size: 21px;
          }

          .core-architecture-subheading {
            font-size: 12px;
          }

          .core-architecture-card {
            padding: 16px;
          }

          .core-architecture-card-body {
            font-size: 11px;
          }

          .core-architecture-tag {
            font-size: 8.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .core-architecture-card {
            transition: none;
          }

          .core-architecture-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="core-architecture-section">
        <div className="core-architecture-container">

          {/* Header */}
          <div className="core-architecture-header">
            <div>
              <span className="core-architecture-badge">
                <span className="core-architecture-badge-dot" />
                TECHTORCH CORE ARCHITECTURE
              </span>

              <h2 className="core-architecture-heading">
                Digital Solutions Designed
                <br />
                <span>Around Operational Precision</span>
              </h2>
            </div>

            <p className="core-architecture-subheading">
              Every financial organization demands tailored compliance, speed,
              and reliability. TechTorch builds, modernizes, and deploys
              cohesive digital infrastructure engineered around your exact
              workflows.
            </p>
          </div>

          {/* Cards */}
          <div className="core-architecture-grid">
            {cards.map(({ icon: Icon, title, body, tags }) => (
              <div
                key={title}
                className="core-architecture-card"
              >
                <span className="core-architecture-icon">
                  <Icon
                    size={16}
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="core-architecture-card-title">
                  {title}
                </h3>

                <p className="core-architecture-card-body">
                  {body}
                </p>

                <div className="core-architecture-tags">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="core-architecture-tag"
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
    </>
  );
}