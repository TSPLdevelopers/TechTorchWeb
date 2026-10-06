import React from "react";
import { FlaskConical, Share2, FileText, Key } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

// ========================================
// IMAGE URL
// ========================================
const IMAGE_URL = "/healthcare technology.png";

const operations = [
  {
    num: "01",
    tag: "Centralized Intake",
    title: "Patient Operations",
    body: "Organize registration, patient information, appointments and related activities within a connected environment.",
  },
  {
    num: "02",
    tag: "Staff Roster",
    title: "Workforce Management",
    body: "Support staff information, payroll, scheduling and day-to-day workforce requirements.",
  },
  {
    num: "03",
    tag: "Inventory Visibility",
    title: "Resource Management",
    body: "Manage information related to medical supplies, equipment, procurement and vendors.",
  },
  {
    num: "04",
    tag: "Fiscal Accuracy",
    title: "Financial Operations",
    body: "Support patient billing, payments and financial reporting requirements.",
  },
  {
    num: "05",
    tag: "Diagnostic Integrity",
    title: "Clinical Workflows",
    body: "Connect laboratory and diagnostic activities with relevant information and systems.",
  },
];

const clinicalFeatures = [
  {
    icon: FlaskConical,
    title: "Laboratory Management",
    body: "Support diagnostic workflows and related information.",
  },
  {
    icon: Share2,
    title: "System Integration",
    body: "Connect relevant clinical systems and departments.",
  },
  {
    icon: FileText,
    title: "Report Management",
    body: "Organize and share diagnostic reports and results.",
  },
  {
    icon: Key,
    title: "Information Access",
    body: "Provide relevant information to authorized users.",
  },
];

export default function CoreOperationsAndClinicalSections() {
  return (
    <div className="core-healthcare-page">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           SCOPED BOX SIZING
        ===================================================== */

        .core-healthcare-page,
        .core-healthcare-page *,
        .core-healthcare-page *::before,
        .core-healthcare-page *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        .core-healthcare-page {
          width: 100%;
          overflow: hidden;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =====================================================
           COMMON CONTAINER
           DESKTOP = 100px LEFT / RIGHT
        ===================================================== */

        .healthcare-common-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
        }

        /* =====================================================
           SECTION 1
        ===================================================== */

        .core-operations-section {
          width: 100%;
          background: #f6f7fa;
          padding: 78px 0;
        }

        .core-operations-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .core-operations-heading {
          max-width: 760px;
          margin: 0 0 34px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        /* =====================================================
           OPERATIONS GRID
        ===================================================== */

        .core-operations-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .core-operation-card {
          min-width: 0;
          min-height: 210px;
          padding: 21px 18px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .core-operation-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
        }

        .core-operation-top {
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 18px;
        }

        .core-operation-number {
          color: #c9c4bc;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .core-operation-tag {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          padding: 5px 8px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 8px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .core-operation-title {
          margin: 0 0 8px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .core-operation-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.65;
        }

        /* =====================================================
           SECTION 2
        ===================================================== */

        .clinical-workflow-section {
          width: 100%;
          background: #f4f1ec;
          padding: 78px 0;
        }

        .clinical-workflow-container {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);
          gap: 70px;
          align-items: center;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .clinical-image-wrapper {
          width: 100%;
          min-width: 0;
        }

        .clinical-image-box {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
          border: 3px solid ${WINE};
          border-radius: 18px;
          background: #e8e5e0;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
        }

        .clinical-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .clinical-content {
          width: 100%;
          min-width: 0;
          max-width: 700px;
        }

        .clinical-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .clinical-heading {
          max-width: 680px;
          margin: 0 0 20px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        .clinical-description {
          margin: 0 0 12px;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 500;
        }

        .clinical-description:last-child {
          margin-bottom: 0;
        }

        .clinical-description-wrapper {
          margin-bottom: 28px;
        }

        /* =====================================================
           FEATURE CARDS
        ===================================================== */

        .clinical-features-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .clinical-feature-card {
          min-width: 0;
          padding: 16px;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .clinical-feature-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(0, 0, 0, 0.07);
        }

        .clinical-feature-header {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          margin-bottom: 7px;
        }

        .clinical-feature-icon {
          flex-shrink: 0;
          color: ${WINE};
        }

        .clinical-feature-title {
          min-width: 0;
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
        }

        .clinical-feature-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.6;
        }

        /* =====================================================
           DESKTOP / LAPTOP
           100px -> 40px
        ===================================================== */

        @media (max-width: 1200px) {

          .healthcare-common-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .core-operations-section {
            padding: 68px 0;
          }

          .core-operations-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 15px;
          }

          .core-operation-card {
            min-height: 195px;
          }

          .clinical-workflow-section {
            padding: 68px 0;
          }

          .clinical-workflow-container {
            gap: 48px;
          }

          .clinical-image-box {
            height: 390px;
          }

          .clinical-heading,
          .core-operations-heading {
            font-size: 29px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .healthcare-common-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .core-operations-section {
            padding: 58px 0 64px;
          }

          .core-operations-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .core-operation-card {
            min-height: 180px;
          }

          .clinical-workflow-section {
            padding: 62px 0;
          }

          .clinical-workflow-container {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .clinical-image-wrapper {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }

          .clinical-image-box {
            height: 410px;
          }

          .clinical-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .clinical-heading {
            max-width: 760px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 700px) {

          .healthcare-common-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .core-operations-section {
            padding: 52px 0 58px;
          }

          .core-operations-heading,
          .clinical-heading {
            font-size: 26px;
            line-height: 1.3;
            letter-spacing: -0.6px;
          }

          .core-operations-heading {
            margin-bottom: 27px;
          }

          .core-operations-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .core-operation-card {
            min-height: auto;
            padding: 18px;
          }

          .clinical-workflow-section {
            padding: 56px 0;
          }

          .clinical-image-box {
            height: 340px;
          }

          .clinical-description {
            font-size: 12px;
            line-height: 1.72;
          }

          .clinical-features-grid {
            gap: 11px;
          }
        }

        /* =====================================================
           MOBILE
           24px LEFT / RIGHT
        ===================================================== */

        @media (max-width: 600px) {

          .healthcare-common-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .core-operations-section {
            padding: 46px 0 52px;
          }

          .core-operations-eyebrow,
          .clinical-eyebrow {
            margin-bottom: 10px;
            font-size: 9px;
          }

          .core-operations-heading,
          .clinical-heading {
            font-size: 24px;
            line-height: 1.32;
            letter-spacing: -0.5px;
          }

          .core-operations-heading {
            margin-bottom: 24px;
          }

          .core-operation-card {
            padding: 17px;
            border-radius: 11px;
          }

          .core-operation-top {
            margin-bottom: 14px;
          }

          .core-operation-title {
            font-size: 13px;
          }

          .core-operation-body {
            font-size: 11px;
            line-height: 1.65;
          }

          .clinical-workflow-section {
            padding: 50px 0;
          }

          .clinical-workflow-container {
            gap: 34px;
          }

          .clinical-image-box {
            height: 300px;
            border-width: 2px;
            border-radius: 15px;
          }

          .clinical-heading {
            margin-bottom: 17px;
          }

          .clinical-description {
            font-size: 11.5px;
            line-height: 1.72;
          }

          .clinical-description-wrapper {
            margin-bottom: 22px;
          }

          .clinical-features-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .clinical-feature-card {
            padding: 14px;
          }

          .clinical-feature-title {
            font-size: 11px;
          }

          .clinical-feature-body {
            font-size: 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           16px LEFT / RIGHT
        ===================================================== */

        @media (max-width: 480px) {

          .healthcare-common-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .core-operations-section {
            padding: 42px 0 48px;
          }

          .clinical-workflow-section {
            padding: 46px 0;
          }

          .core-operations-heading,
          .clinical-heading {
            font-size: 22px;
            line-height: 1.34;
          }

          .core-operation-card {
            padding: 15px;
          }

          .core-operation-tag {
            font-size: 7.5px;
          }

          .core-operation-body {
            font-size: 10.5px;
          }

          .clinical-image-box {
            height: 260px;
            border-radius: 13px;
          }

          .clinical-description {
            font-size: 11px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .healthcare-common-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .core-operations-heading,
          .clinical-heading {
            font-size: 20px;
          }

          .clinical-image-box {
            height: 225px;
          }

          .core-operation-body {
            font-size: 10px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .core-operation-card,
          .clinical-feature-card {
            transition: none;
          }

        }
      `}</style>

      {/* =====================================================
          SECTION 1
          CORE HEALTHCARE OPERATIONS
      ===================================================== */}

      <section className="core-operations-section">
        <div className="healthcare-common-container">

          <p className="core-operations-eyebrow">
            CORE HEALTHCARE OPERATIONS
          </p>

          <h2 className="core-operations-heading">
            Supporting the Functions Behind
            <br className="desktop-break" />
            Healthcare Delivery
          </h2>

          <div className="core-operations-grid">

            {operations.map(
              ({ num, tag, title, body }) => (
                <div
                  key={num}
                  className="core-operation-card"
                >

                  <div className="core-operation-top">

                    <span className="core-operation-number">
                      {num}
                    </span>

                    <span className="core-operation-tag">
                      {tag}
                    </span>

                  </div>

                  <h3 className="core-operation-title">
                    {title}
                  </h3>

                  <p className="core-operation-body">
                    {body}
                  </p>

                </div>
              )
            )}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2
          CLINICAL & DIAGNOSTIC TECHNOLOGY
      ===================================================== */}

      <section className="clinical-workflow-section">

        <div
          className="
            healthcare-common-container
            clinical-workflow-container
          "
        >

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="clinical-image-wrapper">

            <div className="clinical-image-box">

              <img
                src={IMAGE_URL}
                alt="Clinicians reviewing lab diagnostic screens"
                className="clinical-image"
                loading="lazy"
              />

            </div>

          </div>


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="clinical-content">

            <p className="clinical-eyebrow">
              CLINICAL &amp; DIAGNOSTIC TECHNOLOGY
            </p>

            <h2 className="clinical-heading">
              Connect Clinical Workflows With Relevant Information
            </h2>


            <div className="clinical-description-wrapper">

              <p className="clinical-description">
                Clinical and diagnostic activities generate information
                that needs to move between the appropriate teams and
                systems.
              </p>

              <p className="clinical-description">
                TechTorch's healthcare solution includes laboratory
                management capabilities and integration with radiology,
                pharmacy and pathology systems, along with the sharing of
                reports and test results with patients and physicians.
              </p>

            </div>


            {/* =================================================
                FEATURE CARDS
            ================================================= */}

            <div className="clinical-features-grid">

              {clinicalFeatures.map(
                ({ icon: Icon, title, body }) => (

                  <div
                    key={title}
                    className="clinical-feature-card"
                  >

                    <div className="clinical-feature-header">

                      <Icon
                        size={14}
                        strokeWidth={1.8}
                        className="clinical-feature-icon"
                      />

                      <h3 className="clinical-feature-title">
                        {title}
                      </h3>

                    </div>

                    <p className="clinical-feature-body">
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