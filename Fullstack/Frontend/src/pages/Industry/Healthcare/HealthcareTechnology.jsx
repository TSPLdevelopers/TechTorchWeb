import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

// ========================================
// IMAGE URL
// ========================================
const IMAGE_URL = "/healthcarehero.png";

export default function ConnectHealthcareSection() {
  return (
    <div className="connect-healthcare-section">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           SCOPED BOX SIZING
        ===================================================== */

        .connect-healthcare-section,
        .connect-healthcare-section *,
        .connect-healthcare-section *::before,
        .connect-healthcare-section *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .connect-healthcare-section {
          width: 100%;

          overflow: hidden;

          background: #f4f1ec;

          color: ${INK};

          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           MAIN CONTAINER
           DESKTOP = 100px LEFT / RIGHT
        ===================================================== */

        .connect-healthcare-container {
          width: 100%;

          max-width: 1600px;

          margin: 0 auto;

          padding:
            78px 100px;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 70px;

          align-items: center;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .connect-healthcare-content {
          width: 100%;

          min-width: 0;

          max-width: 700px;
        }


        /* =====================================================
           EYEBROW
           INTER
        ===================================================== */

        .connect-healthcare-eyebrow {
          margin: 0 0 12px;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.4;

          font-weight: 700;

          letter-spacing: 0.08em;
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .connect-healthcare-heading {
          max-width: 680px;

          margin: 0 0 22px;

          color: ${INK};

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 32px;

          line-height: 1.25;

          font-weight: 700;

          letter-spacing: -0.8px;
        }


        /* =====================================================
           DESCRIPTION
           INTER
        ===================================================== */

        .connect-healthcare-description {
          margin: 0 0 14px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;

          font-size: 13px;

          line-height: 1.75;

          font-weight: 500;
        }


        .connect-healthcare-description:last-child {
          margin-bottom: 0;
        }


        .connect-healthcare-description-wrapper {
          margin-bottom: 28px;
        }


        /* =====================================================
           QUOTE CARD
        ===================================================== */

        .connect-healthcare-quote {
          width: 100%;

          padding: 18px 20px;

          border-radius: 10px;

          background: #ffffff;

          box-shadow:
            0 1px 4px
            rgba(0, 0, 0, 0.05);
        }


        .connect-healthcare-quote-text {
          margin: 0;

          color: ${INK};

          font-family: "Inter", sans-serif;

          font-size: 12px;

          line-height: 1.7;

          font-style: italic;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .connect-healthcare-image-wrapper {
          position: relative;

          width: 100%;

          min-width: 0;

          max-width: 760px;

          margin-left: auto;
        }


        .connect-healthcare-image-box {
          position: relative;

          width: 100%;

          height: 430px;

          overflow: hidden;

          border:
            3px solid ${WINE};

          border-radius: 18px;

          background: #e7e3de;

          box-shadow:
            0 12px 32px
            rgba(0, 0, 0, 0.07);
        }


        .connect-healthcare-image {
          display: block;

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center;
        }


        /* =====================================================
           LAPTOP
           100px -> 40px
        ===================================================== */

        @media (max-width: 1200px) {

          .connect-healthcare-container {
            padding:
              70px 40px;

            gap: 50px;
          }


          .connect-healthcare-heading {
            font-size: 29px;
          }


          .connect-healthcare-image-box {
            height: 400px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .connect-healthcare-container {
            grid-template-columns: 1fr;

            gap: 42px;

            padding:
              62px 40px;
          }


          .connect-healthcare-content {
            max-width: 800px;

            margin: 0 auto;
          }


          .connect-healthcare-image-wrapper {
            width: 100%;

            max-width: 800px;

            margin: 0 auto;
          }


          .connect-healthcare-image-box {
            height: 410px;
          }


          .connect-healthcare-heading {
            max-width: 760px;
          }

        }


        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 700px) {

          .connect-healthcare-container {
            padding:
              54px 24px;

            gap: 36px;
          }


          .connect-healthcare-eyebrow {
            margin-bottom: 10px;

            font-size: 9px;
          }


          .connect-healthcare-heading {
            margin-bottom: 18px;

            font-size: 26px;

            line-height: 1.3;

            letter-spacing: -0.6px;
          }


          .connect-healthcare-description-wrapper {
            margin-bottom: 23px;
          }


          .connect-healthcare-description {
            margin-bottom: 12px;

            font-size: 12px;

            line-height: 1.7;
          }


          .connect-healthcare-quote {
            padding: 16px 18px;
          }


          .connect-healthcare-quote-text {
            font-size: 11px;

            line-height: 1.65;
          }


          .connect-healthcare-image-box {
            height: 340px;

            border-width: 2px;

            border-radius: 16px;
          }

        }


        /* =====================================================
           MOBILE
           24px LEFT / RIGHT
        ===================================================== */

        @media (max-width: 600px) {

          .connect-healthcare-container {
            padding:
              48px 24px;

            gap: 32px;
          }


          .connect-healthcare-heading {
            font-size: 24px;

            line-height: 1.32;

            letter-spacing: -0.5px;
          }


          .connect-healthcare-description {
            font-size: 11.5px;

            line-height: 1.72;
          }


          .connect-healthcare-quote {
            padding: 15px 17px;

            border-radius: 9px;
          }


          .connect-healthcare-quote-text {
            font-size: 10.5px;

            line-height: 1.65;
          }


          .connect-healthcare-image-box {
            height: 300px;

            border-radius: 15px;
          }

        }


        /* =====================================================
           SMALL MOBILE
           16px LEFT / RIGHT
        ===================================================== */

        @media (max-width: 480px) {

          .connect-healthcare-container {
            padding:
              42px 16px;

            gap: 28px;
          }


          .connect-healthcare-heading {
            font-size: 22px;

            line-height: 1.34;
          }


          .connect-healthcare-description {
            font-size: 11px;

            line-height: 1.7;
          }


          .connect-healthcare-description-wrapper {
            margin-bottom: 21px;
          }


          .connect-healthcare-quote {
            padding: 14px 15px;
          }


          .connect-healthcare-quote-text {
            font-size: 10px;

            line-height: 1.65;
          }


          .connect-healthcare-image-box {
            height: 270px;

            border-radius: 13px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .connect-healthcare-container {
            padding-left: 16px;

            padding-right: 16px;

            gap: 25px;
          }


          .connect-healthcare-heading {
            font-size: 20px;
          }


          .connect-healthcare-description {
            font-size: 10.5px;
          }


          .connect-healthcare-image-box {
            height: 235px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .connect-healthcare-section * {
            scroll-behavior: auto;
          }

        }
      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="connect-healthcare-container">

        {/* =================================================
            LEFT: COPY
        ================================================= */}

        <div className="connect-healthcare-content">

          <p className="connect-healthcare-eyebrow">
            HEALTHCARE TECHNOLOGY
          </p>


          <h2 className="connect-healthcare-heading">
            Connect Healthcare Information, People and Processes
          </h2>


          <div className="connect-healthcare-description-wrapper">

            <p className="connect-healthcare-description">
              Healthcare operations depend on coordination between patients,
              clinical teams, administrative staff and supporting functions.
            </p>


            <p className="connect-healthcare-description">
              A connected technology environment can help organizations
              manage information more consistently and coordinate
              activities across different areas of the organization.
            </p>


            <p className="connect-healthcare-description">
              TechTorch brings healthcare management capabilities together
              with broader technology services such as ERP, software
              development, integration and ongoing support to address
              different operational requirements.
            </p>

          </div>


          {/* =================================================
              QUOTE
          ================================================= */}

          <div className="connect-healthcare-quote">

            <p className="connect-healthcare-quote-text">
              &ldquo;Connected healthcare systems reduce administrative
              friction, enhance diagnostic turnaround, and establish
              seamless clinical continuity across departments.&rdquo;
            </p>

          </div>

        </div>


        {/* =================================================
            RIGHT: IMAGE
        ================================================= */}

        <div className="connect-healthcare-image-wrapper">

          <div className="connect-healthcare-image-box">

            <img
              src={IMAGE_URL}
              alt="Healthcare technology"
              className="connect-healthcare-image"
              loading="lazy"
            />

          </div>

        </div>

      </div>

    </div>
  );
}