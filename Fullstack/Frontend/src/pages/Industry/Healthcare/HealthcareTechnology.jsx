import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

// 👇 Yahan apni image URL paste karein
const IMAGE_URL = "/healthcarehero.png";

export default function ConnectHealthcareSection() {
  return (
    <div className="connect-healthcare-section">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* ========================================
           GLOBAL
        ======================================== */

        .connect-healthcare-section {
          width: 100%;
          overflow: hidden;
          background: #f4f1ec;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        .connect-healthcare-section *,
        .connect-healthcare-section *::before,
        .connect-healthcare-section *::after {
          box-sizing: border-box;
        }

        .connect-healthcare-container {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding: 72px 24px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }

        /* ========================================
           LEFT CONTENT
        ======================================== */

        .connect-healthcare-content {
          width: 100%;
          min-width: 0;
        }

        .connect-healthcare-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        /* Main Heading - Plus Jakarta Sans */

        .connect-healthcare-heading {
          max-width: 650px;
          margin: 0 0 22px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        /* Sub Heading / Description - Plus Jakarta Sans */

        .connect-healthcare-description {
          margin: 0 0 14px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 500;
        }

        .connect-healthcare-description:last-child {
          margin-bottom: 0;
        }

        .connect-healthcare-description-wrapper {
          margin-bottom: 26px;
        }

        /* ========================================
           QUOTE CARD
        ======================================== */

        .connect-healthcare-quote {
          width: 100%;
          padding: 17px 20px;
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        .connect-healthcare-quote-text {
          margin: 0;
          color: ${INK};
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-style: italic;
        }

        /* ========================================
           IMAGE
        ======================================== */

        .connect-healthcare-image-wrapper {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .connect-healthcare-image-box {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
          border: 3px solid ${WINE};
          border-radius: 18px;
          background: #e7e3de;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
        }

        .connect-healthcare-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* ========================================
           LARGE TABLET
        ======================================== */

        @media (max-width: 1100px) {
          .connect-healthcare-container {
            max-width: 100%;
            padding: 64px 32px;
            gap: 44px;
          }

          .connect-healthcare-heading {
            font-size: 28px;
          }

          .connect-healthcare-image-box {
            height: 370px;
          }
        }

        /* ========================================
           TABLET
        ======================================== */

        @media (max-width: 850px) {
          .connect-healthcare-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 58px 24px;
          }

          .connect-healthcare-content {
            max-width: 760px;
            margin: 0 auto;
          }

          .connect-healthcare-image-wrapper {
            max-width: 760px;
            margin: 0 auto;
          }

          .connect-healthcare-image-box {
            height: 400px;
          }

          .connect-healthcare-heading {
            max-width: 720px;
          }
        }

        /* ========================================
           MOBILE
        ======================================== */

        @media (max-width: 600px) {
          .connect-healthcare-container {
            gap: 32px;
            padding: 48px 20px;
          }

          .connect-healthcare-eyebrow {
            margin-bottom: 10px;
            font-size: 9px;
          }

          .connect-healthcare-heading {
            margin-bottom: 18px;
            font-size: 25px;
            line-height: 1.3;
            letter-spacing: -0.5px;
          }

          .connect-healthcare-description-wrapper {
            margin-bottom: 22px;
          }

          .connect-healthcare-description {
            font-size: 12px;
            line-height: 1.7;
            margin-bottom: 12px;
          }

          .connect-healthcare-quote {
            padding: 15px 17px;
          }

          .connect-healthcare-quote-text {
            font-size: 11px;
            line-height: 1.65;
          }

          .connect-healthcare-image-box {
            height: 310px;
            border-width: 2px;
            border-radius: 15px;
          }
        }

        /* ========================================
           SMALL MOBILE
        ======================================== */

        @media (max-width: 400px) {
          .connect-healthcare-container {
            padding: 42px 16px;
            gap: 28px;
          }

          .connect-healthcare-heading {
            font-size: 23px;
            line-height: 1.32;
          }

          .connect-healthcare-description {
            font-size: 11.5px;
            line-height: 1.7;
          }

          .connect-healthcare-quote {
            padding: 14px 15px;
          }

          .connect-healthcare-quote-text {
            font-size: 10.5px;
          }

          .connect-healthcare-image-box {
            height: 270px;
            border-radius: 13px;
          }
        }

        /* ========================================
           VERY SMALL MOBILE
        ======================================== */

        @media (max-width: 340px) {
          .connect-healthcare-container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .connect-healthcare-heading {
            font-size: 21px;
          }

          .connect-healthcare-description {
            font-size: 11px;
          }

          .connect-healthcare-image-box {
            height: 235px;
          }
        }

        /* ========================================
           REDUCED MOTION
        ======================================== */

        @media (prefers-reduced-motion: reduce) {
          .connect-healthcare-section * {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <div className="connect-healthcare-container">

        {/* ========================================
            LEFT: COPY
        ======================================== */}

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

          {/* Quote */}

          <div className="connect-healthcare-quote">
            <p className="connect-healthcare-quote-text">
              &ldquo;Connected healthcare systems reduce administrative
              friction, enhance diagnostic turnaround, and establish
              seamless clinical continuity across departments.&rdquo;
            </p>
          </div>

        </div>

        {/* ========================================
            RIGHT: IMAGE
        ======================================== */}

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