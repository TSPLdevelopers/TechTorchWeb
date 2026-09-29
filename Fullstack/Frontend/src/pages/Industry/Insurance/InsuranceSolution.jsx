import React from "react";
import {
  Users,
  FileText,
  CreditCard,
  Briefcase,
  Code2,
  Cloud,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const solutions = [
  {
    icon: Users,
    title: "Customer Relationship Management",
    body:
      "Manage customer information and interactions through a structured digital environment that supports consistent relationship management.",
    bullets: [
      "Customer Information",
      "Relationship Management",
      "Communication",
      "Service Management",
    ],
  },
  {
    icon: FileText,
    title: "Financial Management",
    body:
      "Improve control and visibility across financial activities with connected systems for managing information, transactions and reporting.",
    bullets: [
      "Financial Operations",
      "Transaction Management",
      "Financial Records",
      "Business Reporting",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    body:
      "Support payment-related operations with digital processes that provide better organization, visibility and control over transactions.",
    bullets: [
      "Payment Processing",
      "Transaction Management",
      "Payment Information",
      "Reporting",
    ],
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    body:
      "Connect core business functions through an integrated technology environment that supports centralized information and coordinated operations.",
    bullets: [
      "Process Integration",
      "Centralized Data",
      "Workflow Management",
      "Business Analytics",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    body:
      "Develop and modernize digital applications according to your organization's specific business and technology requirements.",
    bullets: [
      "Custom Software",
      "Web Applications",
      "Enterprise Applications",
      "System Integration",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Cybersecurity",
    body:
      "Establish a reliable technology foundation with scalable infrastructure and security-focused solutions for your digital environment.",
    bullets: [
      "Cloud Infrastructure",
      "Cybersecurity",
      "Data Protection",
      "Technical Support",
    ],
  },
];

export default function InsuranceSolutionsGridSection() {
  return (
    <section className="insurance-solutions-section">
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

        .insurance-solutions-section {
          width: 100%;

          background: #f5f2ec;

          color: ${INK};

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .insurance-solutions-container {
          width: 100%;

          max-width: 1280px;

          margin: 0 auto;

          padding: 72px 24px;

          box-sizing: border-box;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .insurance-solutions-header {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 60px;

          align-items: start;

          margin-bottom: 52px;
        }


        .insurance-solutions-header-left {
          min-width: 0;

          max-width: 580px;
        }


        .insurance-solutions-header-right {
          min-width: 0;

          max-width: 570px;

          padding-top: 8px;
        }


        /* =====================================================
           BADGE
           INTER
        ===================================================== */

        .insurance-solutions-badge {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 18px;

          padding: 6px 11px;

          border-radius: 999px;

          background: #fbeef1;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 9px;

          line-height: 1.3;

          font-weight: 700;

          letter-spacing: 0.06em;
        }


        .insurance-solutions-badge-dot {
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

        .insurance-solutions-heading {
          margin: 0;

          max-width: 580px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 36px;

          line-height: 1.16;

          font-weight: 700;

          letter-spacing: -0.8px;

          color: ${INK};
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .insurance-solutions-subheading {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;

          line-height: 1.75;

          font-weight: 500;

          color: ${MUTED};
        }


        /* =====================================================
           CARDS GRID
        ===================================================== */

        .insurance-solutions-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;

          width: 100%;
        }


        /* =====================================================
           CARD
           INTER
        ===================================================== */

        .insurance-solution-card {
          min-width: 0;

          padding: 22px;

          background: #ffffff;

          border: 1px solid rgba(27, 27, 42, 0.05);

          border-radius: 13px;

          box-sizing: border-box;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }


        .insurance-solution-card:hover {
          transform: translateY(-4px);

          border-color: rgba(122, 31, 61, 0.1);

          box-shadow:
            0 12px 28px rgba(27, 27, 42, 0.08);
        }


        /* =====================================================
           CARD ICON
           INTER
        ===================================================== */

        .insurance-solution-icon {
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
           CARD TITLE
           INTER
        ===================================================== */

        .insurance-solution-title {
          margin: 0 0 9px;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          line-height: 1.45;

          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           CARD BODY
           INTER
        ===================================================== */

        .insurance-solution-body {
          margin: 0 0 17px;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          line-height: 1.7;

          font-weight: 400;

          color: ${MUTED};
        }


        /* =====================================================
           BULLETS
           INTER
        ===================================================== */

        .insurance-solution-list {
          display: flex;

          flex-direction: column;

          gap: 7px;

          margin: 0;

          padding: 0;

          list-style: none;
        }


        .insurance-solution-list-item {
          display: flex;

          align-items: flex-start;

          gap: 8px;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          line-height: 1.5;

          font-weight: 500;

          color: ${INK};
        }


        .insurance-solution-list-dot {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          margin-top: 5px;

          border-radius: 50%;

          background: ${WINE};
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1200px) {

          .insurance-solutions-container {
            padding: 80px 40px;
          }

          .insurance-solutions-header {
            gap: 72px;

            margin-bottom: 56px;
          }

          .insurance-solutions-heading {
            font-size: 38px;
          }

          .insurance-solutions-subheading {
            font-size: 14px;
          }

          .insurance-solution-card {
            padding: 23px;
          }

        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .insurance-solutions-container {
            padding: 64px 32px;
          }

          .insurance-solutions-header {
            gap: 40px;

            margin-bottom: 45px;
          }

          .insurance-solutions-heading {
            font-size: 33px;
          }

          .insurance-solutions-subheading {
            font-size: 13.5px;
          }

          .insurance-solution-card {
            padding: 20px;
          }

          .insurance-solutions-grid {
            gap: 16px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .insurance-solutions-container {
            padding: 58px 24px;
          }

          .insurance-solutions-header {
            grid-template-columns: 1fr;

            gap: 18px;

            margin-bottom: 38px;
          }

          .insurance-solutions-header-left,
          .insurance-solutions-header-right {
            max-width: 720px;
          }

          .insurance-solutions-header-right {
            padding-top: 0;
          }

          .insurance-solutions-heading {
            font-size: 34px;
          }

          .insurance-solutions-subheading {
            font-size: 13px;

            line-height: 1.7;
          }

          .insurance-solutions-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .insurance-solutions-container {
            padding: 48px 20px;
          }

          .insurance-solutions-header {
            gap: 16px;

            margin-bottom: 32px;
          }

          .insurance-solutions-badge {
            margin-bottom: 14px;

            padding: 5px 10px;

            font-size: 8px;
          }

          .insurance-solutions-badge-dot {
            width: 5px;
            height: 5px;
          }

          .insurance-solutions-heading {
            font-size: 29px;

            line-height: 1.18;

            letter-spacing: -0.5px;
          }

          .insurance-solutions-subheading {
            font-size: 12px;

            line-height: 1.7;
          }

          .insurance-solutions-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }

          .insurance-solution-card {
            padding: 19px;

            border-radius: 12px;
          }

          .insurance-solution-icon {
            width: 37px;
            height: 37px;

            margin-bottom: 14px;
          }

          .insurance-solution-title {
            font-size: 13px;

            margin-bottom: 7px;
          }

          .insurance-solution-body {
            font-size: 11px;

            line-height: 1.68;

            margin-bottom: 15px;
          }

          .insurance-solution-list {
            gap: 6px;
          }

          .insurance-solution-list-item {
            font-size: 10.5px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .insurance-solutions-container {
            padding: 42px 16px;
          }

          .insurance-solutions-heading {
            font-size: 26px;

            line-height: 1.18;
          }

          .insurance-solutions-subheading {
            font-size: 11.5px;

            line-height: 1.68;
          }

          .insurance-solution-card {
            padding: 18px;
          }

          .insurance-solution-title {
            font-size: 12.5px;
          }

          .insurance-solution-body {
            font-size: 10.8px;
          }

          .insurance-solution-list-item {
            font-size: 10.2px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .insurance-solutions-container {
            padding: 36px 14px;
          }

          .insurance-solutions-heading {
            font-size: 24px;
          }

          .insurance-solutions-subheading {
            font-size: 11px;
          }

          .insurance-solution-card {
            padding: 16px;
          }

          .insurance-solution-body {
            font-size: 10.5px;
          }

          .insurance-solution-list-item {
            font-size: 10px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .insurance-solution-card {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="insurance-solutions-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="insurance-solutions-header">

          {/* LEFT */}

          <div className="insurance-solutions-header-left">

            <span className="insurance-solutions-badge">

              <span className="insurance-solutions-badge-dot" />

              INSURANCE SOLUTIONS

            </span>

            <h2 className="insurance-solutions-heading">
              Connected Technology for Insurance Businesses
            </h2>

          </div>


          {/* RIGHT */}

          <div className="insurance-solutions-header-right">

            <p className="insurance-solutions-subheading">
              Technology should support the way your organization operates.
              TechTorch helps bring essential business functions, information
              and digital systems together through solutions designed around
              specific operational requirements.
            </p>

          </div>

        </div>


        {/* =================================================
            SOLUTIONS CARDS
        ================================================= */}

        <div className="insurance-solutions-grid">

          {solutions.map(
            ({
              icon: Icon,
              title,
              body,
              bullets,
            }) => (

              <div
                key={title}
                className="insurance-solution-card"
              >

                {/* ICON */}

                <span className="insurance-solution-icon">

                  <Icon
                    size={18}
                    strokeWidth={1.8}
                  />

                </span>


                {/* TITLE */}

                <h3 className="insurance-solution-title">
                  {title}
                </h3>


                {/* BODY */}

                <p className="insurance-solution-body">
                  {body}
                </p>


                {/* BULLETS */}

                <ul className="insurance-solution-list">

                  {bullets.map((bullet) => (

                    <li
                      key={bullet}
                      className="insurance-solution-list-item"
                    >

                      <span className="insurance-solution-list-dot" />

                      <span>
                        {bullet}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  );
}