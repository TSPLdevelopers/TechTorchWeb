import React from "react";
import {
  User,
  ClipboardList,
  Package,
  CreditCard,
  FlaskConical,
  Smartphone,
  BarChart2,
  Lock,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: User,
    title: "Patient Management",
    body: "Manage patient information and everyday patient-related activities through a centralized digital environment.",
    tags: ["Patient Registration", "Records", "Appointments", "Queue Management"],
  },
  {
    icon: ClipboardList,
    title: "Staff & Operations",
    body: "Support healthcare workforce and operational activities through organized digital processes.",
    tags: ["Staff Records", "Payroll", "Shift Scheduling", "Duty Rosters"],
  },
  {
    icon: Package,
    title: "Inventory & Supplies",
    body: "Maintain visibility across medical supplies, equipment and procurement activities.",
    tags: ["Inventory Tracking", "Procurement", "Vendor Management", "Supply Monitoring"],
  },
  {
    icon: CreditCard,
    title: "Billing & Finance",
    body: "Support billing, payment and financial activities through structured digital workflows.",
    tags: ["Patient Billing", "Payments", "Financial Records", "Reporting"],
  },
  {
    icon: FlaskConical,
    title: "Clinical & Laboratory",
    body: "Connect laboratory and diagnostic workflows with relevant healthcare systems and information.",
    tags: ["Laboratory Workflows", "Diagnostic Reports", "System Integration", "Information Sharing"],
  },
  {
    icon: Smartphone,
    title: "Patient Engagement",
    body: "Provide digital channels that support patient access, communication and engagement.",
    tags: ["Patient Portals", "Virtual Consultations", "Reminders", "Follow-Ups"],
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    body: "Bring operational information into dashboards and reports to support better visibility.",
    tags: ["Dashboards", "Analytics", "Reporting", "Operational Insights"],
  },
  {
    icon: Lock,
    title: "Security & Access",
    body: "Support controlled access and responsible management of healthcare information.",
    tags: ["Role-Based Access", "Data Protection", "Audit Trails", "Security Controls"],
  },
];

export default function HealthcareSolutionsGridSection() {
  return (
    <section className="healthcare-solutions-section">
      <style>{`
        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .healthcare-solutions-section {
          width: 100%;

          background: #f7f7fa;

          color: ${INK};

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .healthcare-solutions-container {
          width: 100%;

          max-width: 1280px;

          margin: 0 auto;

          padding: 72px 40px;

          box-sizing: border-box;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .healthcare-solutions-header {
          display: grid;

          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(0, 0.85fr);

          gap: 60px;

          align-items: start;

          margin-bottom: 42px;
        }


        .healthcare-solutions-header-left {
          min-width: 0;
        }


        .healthcare-solutions-header-right {
          min-width: 0;

          padding-top: 30px;
        }


        /* =====================================================
           BADGE / EYEBROW
           INTER
        ===================================================== */

        .healthcare-solutions-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin: 0 0 13px;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.4;

          font-weight: 700;

          letter-spacing: 0.07em;

          color: ${WINE};

          text-transform: uppercase;
        }


        .healthcare-solutions-eyebrow-dot {
          width: 6px;

          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .healthcare-solutions-heading {
          margin: 0;

          max-width: 650px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 35px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.7px;

          color: ${INK};
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .healthcare-solutions-subheading {
          margin: 0;

          max-width: 560px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 13px;

          line-height: 1.75;

          font-weight: 500;

          color: ${MUTED};
        }


        /* =====================================================
           CARDS GRID
        ===================================================== */

        .healthcare-solutions-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;

          margin-bottom: 36px;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .healthcare-solution-card {
          min-width: 0;

          padding: 22px;

          background: #ffffff;

          border-radius: 14px;

          box-sizing: border-box;

          box-shadow:
            0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .healthcare-solution-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.08);
        }


        /* =====================================================
           ICON
        ===================================================== */

        .healthcare-solution-icon {
          width: 40px;

          height: 40px;

          display: flex;

          align-items: center;

          justify-content: center;

          margin-bottom: 17px;

          border-radius: 9px;

          background: #fbeef1;

          color: ${WINE};
        }


        /* =====================================================
           CARD HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .healthcare-solution-title {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;

          line-height: 1.4;

          font-weight: 700;

          letter-spacing: -0.15px;

          color: ${INK};
        }


        /* =====================================================
           CARD DESCRIPTION
           INTER
        ===================================================== */

        .healthcare-solution-body {
          margin: 0 0 16px;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          line-height: 1.7;

          font-weight: 400;

          color: ${MUTED};
        }


        /* =====================================================
           TAGS
           INTER
        ===================================================== */

        .healthcare-solution-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;
        }


        .healthcare-solution-tag {
          display: inline-flex;

          align-items: center;

          padding: 5px 8px;

          border-radius: 6px;

          background: #f2f1f5;

          color: ${MUTED};

          font-family: "Inter", sans-serif;

          font-size: 9px;

          line-height: 1.3;

          font-weight: 500;

          white-space: normal;
        }


        /* =====================================================
           FOOTER NOTE
           INTER
        ===================================================== */

        .healthcare-solutions-footer {
          margin: 0;

          text-align: center;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.6;

          font-weight: 400;

          color: #a29b8f;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .healthcare-solutions-container {
            padding: 65px 32px;
          }


          .healthcare-solutions-header {
            gap: 40px;

            margin-bottom: 36px;
          }


          .healthcare-solutions-heading {
            font-size: 32px;
          }


          .healthcare-solutions-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 18px;
          }


          .healthcare-solution-card {
            padding: 20px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .healthcare-solutions-container {
            padding: 58px 26px;
          }


          .healthcare-solutions-header {
            grid-template-columns: 1fr;

            gap: 18px;

            margin-bottom: 34px;
          }


          .healthcare-solutions-header-right {
            padding-top: 0;
          }


          .healthcare-solutions-heading {
            max-width: 700px;

            font-size: 30px;

            line-height: 1.22;
          }


          .healthcare-solutions-subheading {
            max-width: 700px;

            font-size: 12.5px;

            line-height: 1.72;
          }


          .healthcare-solutions-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;

            margin-bottom: 30px;
          }


          .healthcare-solution-card {
            padding: 20px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .healthcare-solutions-container {
            padding:
              48px 20px 52px;
          }


          .healthcare-solutions-header {
            gap: 15px;

            margin-bottom: 30px;
          }


          .healthcare-solutions-eyebrow {
            margin-bottom: 10px;

            font-size: 8.5px;
          }


          .healthcare-solutions-eyebrow-dot {
            width: 5px;

            height: 5px;
          }


          .healthcare-solutions-heading {
            font-size: 27px;

            line-height: 1.2;

            letter-spacing: -0.5px;
          }


          .healthcare-solutions-subheading {
            font-size: 11.5px;

            line-height: 1.72;
          }


          .healthcare-solutions-grid {
            grid-template-columns: 1fr;

            gap: 14px;

            margin-bottom: 28px;
          }


          .healthcare-solution-card {
            padding: 19px;

            border-radius: 13px;
          }


          .healthcare-solution-icon {
            width: 38px;

            height: 38px;

            margin-bottom: 14px;
          }


          .healthcare-solution-title {
            font-size: 13px;

            margin-bottom: 7px;
          }


          .healthcare-solution-body {
            font-size: 11px;

            line-height: 1.68;

            margin-bottom: 14px;
          }


          .healthcare-solution-tag {
            font-size: 8.5px;

            padding: 5px 7px;
          }


          .healthcare-solutions-footer {
            font-size: 9.5px;

            line-height: 1.6;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .healthcare-solutions-container {
            padding:
              42px 16px 46px;
          }


          .healthcare-solutions-heading {
            font-size: 24px;

            line-height: 1.2;
          }


          .healthcare-solutions-subheading {
            font-size: 11px;

            line-height: 1.68;
          }


          .healthcare-solution-card {
            padding: 17px;
          }


          .healthcare-solution-icon {
            width: 36px;

            height: 36px;

            margin-bottom: 13px;
          }


          .healthcare-solution-title {
            font-size: 12.5px;
          }


          .healthcare-solution-body {
            font-size: 10.5px;
          }


          .healthcare-solution-tag {
            font-size: 8px;

            padding: 4px 6px;
          }


          .healthcare-solutions-footer {
            font-size: 9px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .healthcare-solutions-container {
            padding:
              38px 14px 42px;
          }


          .healthcare-solutions-heading {
            font-size: 22px;
          }


          .healthcare-solutions-subheading {
            font-size: 10.5px;
          }


          .healthcare-solution-body {
            font-size: 10px;
          }


          .healthcare-solutions-footer {
            font-size: 8.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .healthcare-solution-card {
            transition: none;
          }


          .healthcare-solution-card:hover {
            transform: none;
          }

        }

      `}</style>


      <div className="healthcare-solutions-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="healthcare-solutions-header">

          <div className="healthcare-solutions-header-left">

            {/* Badge - Inter */}

            <p className="healthcare-solutions-eyebrow">
              <span className="healthcare-solutions-eyebrow-dot" />
              EXPLORE HEALTHCARE SOLUTIONS
            </p>


            {/* Main Heading - Plus Jakarta Sans */}

            <h2 className="healthcare-solutions-heading">
              Digital Solutions Built Around Healthcare Operations
            </h2>

          </div>


          {/* Subheading - Plus Jakarta Sans */}

          <div className="healthcare-solutions-header-right">

            <p className="healthcare-solutions-subheading">
              Healthcare organizations have different workflows, teams and
              operational requirements. Our solutions are designed to support
              essential healthcare functions while keeping information and
              processes better connected.
            </p>

          </div>

        </div>


        {/* =================================================
            CARDS
        ================================================= */}

        <div className="healthcare-solutions-grid">

          {cards.map(({ icon: Icon, title, body, tags }) => (
            <div
              key={title}
              className="healthcare-solution-card"
            >

              {/* Icon */}

              <span className="healthcare-solution-icon">
                <Icon
                  size={17}
                  strokeWidth={1.8}
                />
              </span>


              {/* Card Heading - Plus Jakarta Sans */}

              <h3 className="healthcare-solution-title">
                {title}
              </h3>


              {/* Card Body - Inter */}

              <p className="healthcare-solution-body">
                {body}
              </p>


              {/* Tags - Inter */}

              <div className="healthcare-solution-tags">

                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="healthcare-solution-tag"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>


        {/* =================================================
            FOOTER NOTE
        ================================================= */}

        <p className="healthcare-solutions-footer">
          These solution areas are based on the capabilities TechTorch
          currently documents for Healthcare &amp; Hospital Management.
        </p>

      </div>

    </section>
  );
}