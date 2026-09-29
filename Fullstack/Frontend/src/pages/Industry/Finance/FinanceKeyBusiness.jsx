import React from "react";
import {
  Briefcase,
  RefreshCw,
  BarChart2,
  SlidersHorizontal,
  Link2,
  FileText,
  CircleDollarSign,
  TrendingUp,
  Share2,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

/* =========================================================
   IMAGE PATH
   Put your image inside the public folder.
   Example:
   public/financeentprise.png
========================================================= */

const TORCHX_IMAGE = "/financeentprise.png";


const areas = [
  {
    num: "01",
    icon: Briefcase,
    title: "Connected Information",
    body:
      "Bring relevant financial and business information together within connected systems.",
  },
  {
    num: "02",
    icon: RefreshCw,
    title: "Organized Processes",
    body:
      "Support everyday activities through structured digital workflows and integrated business systems.",
  },
  {
    num: "03",
    icon: BarChart2,
    title: "Clearer Reporting",
    body:
      "Use reporting and analytics capabilities to help teams understand business information more effectively.",
  },
  {
    num: "04",
    icon: SlidersHorizontal,
    title: "Flexible Technology",
    body:
      "Adapt technology around changing business requirements through scalable and customizable solutions.",
  },
  {
    num: "05",
    icon: Link2,
    title: "Secure Environment",
    body:
      "Support business systems and sensitive information with security-focused technology capabilities.",
  },
];


const modules = [
  {
    icon: FileText,
    title: "Automated Invoicing",
    body:
      "Generate branded invoices, recurring schedules, and automated client payment reminders with integrated ledgers.",
  },
  {
    icon: CircleDollarSign,
    title: "Expense & Payroll Control",
    body:
      "Capture employee receipts, track approval hierarchies, and sync payroll commitments directly into Accounts.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Financial Reports",
    body:
      "Instant P&L, balance sheets, cash flow projections, and regulatory compliance snapshots at your fingertips.",
  },
  {
    icon: Share2,
    title: "Unified Operational Data",
    body:
      "Native multi-module synchronization across clients, staff timesheets, project budgets, and bank feeds.",
  },
];


function Pill({ children }) {
  return (
    <span className="finance-pill">
      <span className="finance-pill-dot" />
      {children}
    </span>
  );
}


export default function KeyAreasAndTorchXSections() {
  return (
    <div className="finance-page">

      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN
        ===================================================== */

        .finance-page {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }


        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .finance-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;

          padding-left: 32px;
          padding-right: 32px;

          box-sizing: border-box;
        }


        /* =====================================================
           PILL
           INTER
        ===================================================== */

        .finance-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 6px 11px;
          margin-bottom: 16px;

          border-radius: 999px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;

          letter-spacing: 0.04em;
        }


        .finance-pill-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;
          background: ${WINE};
        }


        /* =====================================================
           SECTION 1
        ===================================================== */

        .finance-areas-section {
          width: 100%;
          background: #f4f1ec;
        }


        .finance-areas-container {
          padding-top: 52px;
          padding-bottom: 55px;
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-main-heading {
          margin: 0 0 28px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 29px;
          line-height: 1.2;
          font-weight: 700;

          letter-spacing: -0.7px;

          color: ${INK};
        }


        /* =====================================================
           AREAS GRID
        ===================================================== */

        .finance-areas-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 14px;
        }


        /* =====================================================
           AREA CARD
        ===================================================== */

        .finance-area-card {
          min-width: 0;
          min-height: 145px;

          padding: 16px;

          box-sizing: border-box;

          background: #ffffff;

          border: 1px solid #e7e4df;
          border-radius: 12px;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.035);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }


        .finance-area-card:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.06);
        }


        .finance-area-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 14px;
        }


        .finance-area-icon {
          width: 31px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 8px;

          background: #fbeef1;
          color: ${WINE};
        }


        .finance-area-number {
          font-family: "Inter", sans-serif;

          font-size: 8px;
          line-height: 1;

          font-weight: 700;

          color: ${WINE};

          letter-spacing: 0.05em;
        }


        /* =====================================================
           AREA CARD HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-area-title {
          margin: 0 0 6px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 11px;
          line-height: 1.4;

          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           AREA CARD BODY
           INTER
        ===================================================== */

        .finance-area-body {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 8.5px;
          line-height: 1.58;

          color: ${MUTED};
        }


        /* =====================================================
           SECTION 2
        ===================================================== */

        .finance-torchx-section {
          width: 100%;
          background: #ffffff;
        }


        .finance-torchx-container {
          padding-top: 68px;
          padding-bottom: 72px;

          display: grid;

          grid-template-columns:
            minmax(0, 0.88fr)
            minmax(0, 1.32fr);

          gap: 55px;

          align-items: center;
        }


        /* =====================================================
           IMAGE AREA
        ===================================================== */

        .finance-image-wrapper {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          min-width: 0;
        }


        .finance-image {
          width: 100%;
          max-width: 480px;

          height: auto;

          display: block;

          object-fit: contain;

          border-radius: 18px;

          filter:
            drop-shadow(
              0 16px 20px
              rgba(0, 0, 0, 0.13)
            );
        }


        /* =====================================================
           TORCHX CONTENT
        ===================================================== */

        .finance-torchx-content {
          min-width: 0;
        }


        /* =====================================================
           TORCHX HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-torchx-heading {
          margin: 0 0 14px;

          max-width: 560px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 28px;
          line-height: 1.18;

          font-weight: 700;

          letter-spacing: -0.7px;

          color: ${INK};
        }


        /* =====================================================
           TORCHX SUBHEADING / DESCRIPTION
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-torchx-description {
          max-width: 610px;

          margin: 0 0 20px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 11px;
          line-height: 1.7;

          font-weight: 500;

          color: ${MUTED};
        }


        /* =====================================================
           MODULE LABEL
           INTER
        ===================================================== */

        .finance-module-label {
          margin: 0 0 11px;

          font-family: "Inter", sans-serif;

          font-size: 8px;
          line-height: 1.4;

          font-weight: 700;

          color: #8a8378;

          letter-spacing: 0.04em;
        }


        /* =====================================================
           MODULE GRID
        ===================================================== */

        .finance-module-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 11px;
        }


        /* =====================================================
           MODULE CARD
        ===================================================== */

        .finance-module-card {
          min-width: 0;

          padding: 15px;

          box-sizing: border-box;

          background: #ffffff;

          border: 1px solid #e8e5e1;

          border-radius: 11px;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }


        .finance-module-card:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.06);
        }


        .finance-module-icon {
          width: 29px;
          height: 29px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 10px;

          border-radius: 7px;

          background: #fbeef1;
          color: ${WINE};
        }


        /* =====================================================
           MODULE HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-module-title {
          margin: 0 0 6px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 10px;
          line-height: 1.45;

          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           MODULE BODY
           INTER
        ===================================================== */

        .finance-module-body {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 8px;
          line-height: 1.58;

          color: ${MUTED};
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .finance-container {
            padding-left: 30px;
            padding-right: 30px;
          }


          .finance-areas-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }


          .finance-torchx-container {
            gap: 42px;
          }


          .finance-torchx-heading {
            font-size: 26px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .finance-container {
            padding-left: 24px;
            padding-right: 24px;
          }


          .finance-areas-container {
            padding-top: 45px;
            padding-bottom: 48px;
          }


          .finance-main-heading {
            font-size: 27px;
          }


          .finance-areas-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }


          .finance-area-card {
            min-height: 145px;
            padding: 16px;
          }


          .finance-torchx-container {
            grid-template-columns: 1fr;

            gap: 42px;

            align-items: start;

            padding-top: 58px;
            padding-bottom: 62px;
          }


          .finance-image-wrapper {
            max-width: 580px;
            margin: 0 auto;
          }


          .finance-image {
            max-width: 520px;
          }


          .finance-torchx-content {
            width: 100%;
            max-width: 700px;

            margin: 0 auto;
          }


          .finance-torchx-heading {
            font-size: 27px;
          }


          .finance-torchx-description {
            font-size: 12px;
          }


          .finance-module-title {
            font-size: 11px;
          }


          .finance-module-body {
            font-size: 9px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .finance-container {
            padding-left: 18px;
            padding-right: 18px;
          }


          /* Section 1 */

          .finance-areas-container {
            padding-top: 38px;
            padding-bottom: 42px;
          }


          .finance-pill {
            font-size: 8px;

            padding: 5px 9px;

            margin-bottom: 13px;
          }


          .finance-pill-dot {
            width: 5px;
            height: 5px;
          }


          .finance-main-heading {
            font-size: 23px;
            line-height: 1.22;

            letter-spacing: -0.5px;

            margin-bottom: 22px;
          }


          .finance-areas-grid {
            grid-template-columns: 1fr;

            gap: 11px;
          }


          .finance-area-card {
            min-height: auto;

            padding: 15px;
          }


          .finance-area-top {
            margin-bottom: 12px;
          }


          .finance-area-title {
            font-size: 12px;
          }


          .finance-area-body {
            font-size: 10px;

            line-height: 1.58;
          }


          /* Section 2 */

          .finance-torchx-container {
            padding-top: 45px;
            padding-bottom: 50px;

            gap: 34px;
          }


          .finance-image-wrapper {
            width: 100%;
          }


          .finance-image {
            width: 94%;

            max-width: 430px;

            border-radius: 15px;
          }


          .finance-torchx-heading {
            font-size: 23px;

            line-height: 1.2;

            letter-spacing: -0.45px;
          }


          .finance-torchx-description {
            font-size: 11px;

            line-height: 1.68;

            margin-bottom: 19px;
          }


          .finance-module-label {
            font-size: 8px;

            margin-bottom: 9px;
          }


          .finance-module-grid {
            grid-template-columns: 1fr;

            gap: 11px;
          }


          .finance-module-card {
            padding: 15px;
          }


          .finance-module-title {
            font-size: 11px;
          }


          .finance-module-body {
            font-size: 9px;

            line-height: 1.6;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .finance-container {
            padding-left: 15px;
            padding-right: 15px;
          }


          .finance-main-heading {
            font-size: 21px;
          }


          .finance-torchx-heading {
            font-size: 21px;
          }


          .finance-image {
            width: 96%;
          }


          .finance-area-card {
            padding: 14px;
          }


          .finance-area-body {
            font-size: 9.5px;
          }


          .finance-module-card {
            padding: 14px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .finance-main-heading {
            font-size: 20px;
          }


          .finance-torchx-heading {
            font-size: 20px;
          }


          .finance-torchx-description {
            font-size: 10px;
          }


          .finance-area-title {
            font-size: 11px;
          }


          .finance-area-body {
            font-size: 9px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .finance-area-card,
          .finance-module-card {
            transition: none;
          }


          .finance-area-card:hover,
          .finance-module-card:hover {
            transform: none;
          }

        }

      `}</style>


      {/* =====================================================
          SECTION 1 — KEY BUSINESS AREAS
      ===================================================== */}

      <section className="finance-areas-section">

        <div className="finance-container finance-areas-container">

          <Pill>
            KEY BUSINESS AREAS
          </Pill>


          {/* Heading - Plus Jakarta Sans */}

          <h2 className="finance-main-heading">
            Supporting Better Financial Operations
          </h2>


          <div className="finance-areas-grid">

            {areas.map(
              ({
                num,
                icon: Icon,
                title,
                body,
              }) => (

                <div
                  key={title}
                  className="finance-area-card"
                >

                  <div className="finance-area-top">

                    <span className="finance-area-icon">

                      <Icon
                        size={15}
                        strokeWidth={1.8}
                      />

                    </span>


                    <span className="finance-area-number">
                      {num}
                    </span>

                  </div>


                  {/* Card Heading - Plus Jakarta Sans */}

                  <h3 className="finance-area-title">
                    {title}
                  </h3>


                  {/* Card Body - Inter */}

                  <p className="finance-area-body">
                    {body}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2 — TORCHX
      ===================================================== */}

      <section className="finance-torchx-section">

        <div className="finance-container finance-torchx-container">


          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="finance-image-wrapper">

            <img
              src={TORCHX_IMAGE}
              alt="TorchX financial management dashboard"
              className="finance-image"
            />

          </div>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="finance-torchx-content">

            <Pill>
              TORCHX ENTERPRISE SUITE
            </Pill>


            {/* Heading - Plus Jakarta Sans */}

            <h2 className="finance-torchx-heading">

              Financial Management Within
              <br />
              a Unified Operating Platform

            </h2>


            {/* Subheading - Plus Jakarta Sans */}

            <p className="finance-torchx-description">

              TorchX is TechTorch's proprietary all-in-one operating
              platform. Its dedicated Accounts module integrates directly
              with CRM, Human Resource Management, and project invoicing—
              eliminating duplicate data entry and manual reconciliation.

            </p>


            {/* Label - Inter */}

            <p className="finance-module-label">
              CORE INTEGRATED MODULES
            </p>


            <div className="finance-module-grid">

              {modules.map(
                ({
                  icon: Icon,
                  title,
                  body,
                }) => (

                  <div
                    key={title}
                    className="finance-module-card"
                  >

                    <span className="finance-module-icon">

                      <Icon
                        size={14}
                        strokeWidth={1.8}
                      />

                    </span>


                    {/* Module Heading - Plus Jakarta Sans */}

                    <h3 className="finance-module-title">
                      {title}
                    </h3>


                    {/* Module Body - Inter */}

                    <p className="finance-module-body">
                      {body}
                    </p>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}