import React from "react";
import { Quote } from "lucide-react";

const BRAND_COLOR = "#730024";

export default function StrengthenYourTeam() {
  return (
    <section className="strengthen-team-section">
      <div className="strengthen-team-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="strengthen-team-header">
          {/* Eyebrow */}
          <div className="strengthen-team-eyebrow">
            Strategic Perspective
          </div>

          {/* Heading */}
          <h1 className="strengthen-team-heading">
            Strengthen Your Team. Support Your Technology Requirements.
          </h1>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="strengthen-team-content">

          {/* Paragraph 1 */}
          <p>
            Technology projects often require additional expertise at
            different stages. A business may need extra developers for a
            project, remote engineers to extend an existing team, specialized
            resources for a specific requirement, or a dedicated development
            team for ongoing technology initiatives.
          </p>

          {/* =================================================
              PULL QUOTE
          ================================================= */}

          <blockquote className="strengthen-team-quote">
            <p>
              "TechTorch Solutions provides flexible IT augmentation services
              that help businesses extend their existing technology
              capabilities without making every requirement a permanent
              addition to their internal team."
            </p>

            <Quote className="strengthen-team-quote-icon" />
          </blockquote>

          {/* Paragraph 2 */}
          <p>
            Our approach is built around understanding the requirement first
            and then providing an engagement model that fits the project and
            business environment. This allows organizations to add the
            resources and technical capabilities they need while their
            existing teams continue to focus on their core responsibilities.
          </p>

          {/* Paragraph 3 */}
          <p>
            From individual technology resources to dedicated teams and
            offshore development capabilities, our IT augmentation services
            support different business and project requirements. Whether the
            need is temporary, project-based, or ongoing, the right
            engagement model can help businesses maintain flexibility while
            supporting technology delivery.
          </p>
        </div>

        {/* =====================================================
            BOTTOM ACCENT
        ===================================================== */}

        <div className="strengthen-team-accent">
          <span className="strengthen-team-line" />

          <span className="strengthen-team-accent-text">
            Flexible Technology Expertise
          </span>

          <span className="strengthen-team-line" />
        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .strengthen-team-section {
          width: 100%;

          overflow: hidden;

          background: #ffffff;
        }

        /* =====================================================
           MAIN CONTAINER
           Desktop: 100px
        ===================================================== */

        .strengthen-team-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 80px;
          padding-bottom: 75px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .strengthen-team-header {
          width: 100%;
          max-width: 900px;

          margin: 0 auto 48px;

          text-align: center;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .strengthen-team-eyebrow {
          margin-bottom: 16px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .strengthen-team-heading {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .strengthen-team-content {
          width: 100%;
          max-width: 1050px;

          margin: 0 auto;

          display: flex;
          flex-direction: column;

          gap: 26px;
        }

        .strengthen-team-content > p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;

          color: #5f5f5f;
        }

        /* =====================================================
           QUOTE
        ===================================================== */

        .strengthen-team-quote {
          position: relative;

          width: 100%;

          margin: 2px 0;

          padding: 27px 65px 27px 28px;

          border-left: 3px solid ${BRAND_COLOR};
          border-radius: 0 12px 12px 0;

          background: #fbf1f5;

          overflow: hidden;
        }

        .strengthen-team-quote p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          font-style: italic;
          line-height: 1.75;

          color: #555555;
        }

        /* =====================================================
           QUOTE ICON
        ===================================================== */

        .strengthen-team-quote-icon {
          position: absolute;

          right: 22px;
          top: 22px;

          width: 25px;
          height: 25px;

          color: ${BRAND_COLOR};

          opacity: 0.2;
        }

        /* =====================================================
           BOTTOM ACCENT
        ===================================================== */

        .strengthen-team-accent {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          margin-top: 45px;
        }

        .strengthen-team-line {
          width: 42px;
          height: 1px;

          flex-shrink: 0;

          background: ${BRAND_COLOR};
        }

        .strengthen-team-accent-text {
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.4;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: #a3a3a3;

          text-align: center;
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .strengthen-team-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 65px;
          }

          .strengthen-team-heading {
            font-size: 34px;
          }

          .strengthen-team-content {
            max-width: 950px;

            gap: 24px;
          }

          .strengthen-team-content > p {
            font-size: 13px;
          }

          .strengthen-team-quote {
            padding: 25px 60px 25px 25px;
          }

          .strengthen-team-quote p {
            font-size: 13px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .strengthen-team-container {
            padding-top: 60px;
            padding-bottom: 55px;
          }

          .strengthen-team-header {
            margin-bottom: 38px;
          }

          .strengthen-team-heading {
            font-size: 31px;
          }

          .strengthen-team-content {
            gap: 22px;
          }

          .strengthen-team-content > p {
            font-size: 12.5px;
            line-height: 1.78;
          }

          .strengthen-team-quote {
            padding: 23px 55px 23px 23px;
          }

          .strengthen-team-quote p {
            font-size: 12.5px;
          }

          .strengthen-team-quote-icon {
            right: 18px;
            top: 18px;

            width: 23px;
            height: 23px;
          }

          .strengthen-team-accent {
            margin-top: 38px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .strengthen-team-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 50px;
          }

          .strengthen-team-header {
            margin-bottom: 30px;
          }

          .strengthen-team-eyebrow {
            margin-bottom: 13px;

            font-size: 9px;
          }

          .strengthen-team-heading {
            font-size: 27px;
            line-height: 1.22;
          }

          .strengthen-team-content {
            gap: 20px;
          }

          .strengthen-team-content > p {
            font-size: 11.5px;
            line-height: 1.8;
          }

          .strengthen-team-quote {
            padding: 21px 48px 21px 20px;

            border-left-width: 3px;
            border-radius: 0 10px 10px 0;
          }

          .strengthen-team-quote p {
            font-size: 11.5px;
            line-height: 1.75;
          }

          .strengthen-team-quote-icon {
            right: 16px;
            top: 16px;

            width: 21px;
            height: 21px;
          }

          .strengthen-team-accent {
            gap: 8px;

            margin-top: 32px;
          }

          .strengthen-team-line {
            width: 32px;
          }

          .strengthen-team-accent-text {
            font-size: 7.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .strengthen-team-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 44px;
          }

          .strengthen-team-header {
            margin-bottom: 26px;
          }

          .strengthen-team-eyebrow {
            margin-bottom: 11px;

            font-size: 8px;
          }

          .strengthen-team-heading {
            font-size: 24px;
          }

          .strengthen-team-content {
            gap: 18px;
          }

          .strengthen-team-content > p {
            font-size: 10.5px;
            line-height: 1.78;
          }

          .strengthen-team-quote {
            padding: 19px 43px 19px 18px;
          }

          .strengthen-team-quote p {
            font-size: 10.5px;
            line-height: 1.72;
          }

          .strengthen-team-quote-icon {
            right: 13px;
            top: 14px;

            width: 19px;
            height: 19px;
          }

          .strengthen-team-accent {
            margin-top: 28px;
          }

          .strengthen-team-line {
            width: 25px;
          }

          .strengthen-team-accent-text {
            font-size: 7px;
            letter-spacing: 0.1em;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .strengthen-team-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .strengthen-team-heading {
            font-size: 22px;
          }

          .strengthen-team-content > p {
            font-size: 10px;
          }

          .strengthen-team-quote {
            padding: 17px 40px 17px 16px;
          }

          .strengthen-team-quote p {
            font-size: 10px;
          }

          .strengthen-team-accent-text {
            font-size: 6.5px;
          }
        }
      `}</style>
    </section>
  );
}