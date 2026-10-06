import React from "react";
import { Handshake, ArrowRight } from "lucide-react";

export default function StrengthenEngineeringPipelineCTA() {
  return (
    <section className="engineering-pipeline-cta">
      <div className="engineering-pipeline-container">

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="engineering-pipeline-content">

          {/* =====================================================
              ICON BADGE
          ===================================================== */}

          <div className="engineering-pipeline-icon">
            <Handshake />
          </div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}

          <h2 className="engineering-pipeline-heading">
            Strengthen Your Engineering Pipeline
          </h2>

          {/* =====================================================
              SUB HEADING
          ===================================================== */}

          <p className="engineering-pipeline-description">
            Equip your technical organization with on-demand capacity,
            senior-tier domain expertise, and zero hiring risk.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}

          <div className="engineering-pipeline-actions">

            {/* Primary Button */}
            <button
              type="button"
              className="engineering-pipeline-primary"
            >
              <span>
                Talk to Our Augmentation Experts
              </span>

              <ArrowRight className="engineering-pipeline-arrow" />
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className="engineering-pipeline-secondary"
            >
              Review Framework Details
            </button>

          </div>

        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .engineering-pipeline-cta {
          width: 100%;
          min-height: 420px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #fcedf2;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .engineering-pipeline-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 64px;
          padding-bottom: 64px;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .engineering-pipeline-content {
          width: 100%;
          max-width: 820px;

          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .engineering-pipeline-icon {
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 22px;

          border-radius: 50%;

          background: #730024;

          box-shadow:
            0 8px 22px rgba(115, 0, 36, 0.12);
        }

        .engineering-pipeline-icon svg {
          width: 21px;
          height: 21px;

          color: #ffffff;
          stroke-width: 1.8;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .engineering-pipeline-heading {
          width: 100%;
          max-width: 760px;

          margin: 0 0 15px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(30px, 3.2vw, 46px);
          font-weight: 600;

          line-height: 1.18;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .engineering-pipeline-description {
          width: 100%;
          max-width: 620px;

          margin: 0 0 30px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          font-weight: 500;

          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           ACTIONS
        ===================================================== */

        .engineering-pipeline-actions {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          width: 100%;
        }

        /* =====================================================
           PRIMARY BUTTON
        ===================================================== */

        .engineering-pipeline-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 46px;

          padding: 0 22px;

          border: 1px solid #730024;
          border-radius: 6px;

          background: #730024;
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .engineering-pipeline-primary:hover {
          background: #5c001d;

          transform: translateY(-2px);

          box-shadow:
            0 8px 22px rgba(115, 0, 36, 0.16);
        }

        .engineering-pipeline-arrow {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          transition: transform 0.25s ease;
        }

        .engineering-pipeline-primary:hover
        .engineering-pipeline-arrow {
          transform: translateX(3px);
        }

        /* =====================================================
           SECONDARY BUTTON
        ===================================================== */

        .engineering-pipeline-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 46px;

          padding: 0 22px;

          border: 1px solid #dedede;
          border-radius: 6px;

          background: #ffffff;
          color: #1c1c1c;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .engineering-pipeline-secondary:hover {
          background: #fafafa;

          border-color: #d2d2d2;

          transform: translateY(-2px);

          box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.05);
        }

        /* =====================================================
           LARGE TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .engineering-pipeline-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .engineering-pipeline-heading {
            font-size: 40px;
          }

        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .engineering-pipeline-cta {
            min-height: 390px;
          }

          .engineering-pipeline-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 55px;
            padding-bottom: 55px;
          }

          .engineering-pipeline-content {
            max-width: 720px;
          }

          .engineering-pipeline-heading {
            font-size: 36px;
          }

          .engineering-pipeline-description {
            font-size: 14px;
            max-width: 570px;
          }

        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .engineering-pipeline-cta {
            min-height: auto;
          }

          .engineering-pipeline-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 48px;
            padding-bottom: 48px;
          }

          .engineering-pipeline-icon {
            width: 46px;
            height: 46px;

            margin-bottom: 18px;
          }

          .engineering-pipeline-icon svg {
            width: 19px;
            height: 19px;
          }

          .engineering-pipeline-heading {
            font-size: 32px;

            line-height: 1.2;

            margin-bottom: 13px;
          }

          .engineering-pipeline-description {
            font-size: 13px;

            line-height: 1.65;

            margin-bottom: 25px;
          }

          .engineering-pipeline-actions {
            flex-direction: column;

            align-items: stretch;

            gap: 10px;

            max-width: 430px;
          }

          .engineering-pipeline-primary,
          .engineering-pipeline-secondary {
            width: 100%;

            min-height: 44px;

            font-size: 11px;
          }

        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .engineering-pipeline-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .engineering-pipeline-content {
            max-width: 100%;
          }

          .engineering-pipeline-icon {
            width: 42px;
            height: 42px;

            margin-bottom: 16px;
          }

          .engineering-pipeline-icon svg {
            width: 17px;
            height: 17px;
          }

          .engineering-pipeline-heading {
            font-size: 27px;

            letter-spacing: -0.02em;
          }

          .engineering-pipeline-description {
            font-size: 12px;

            max-width: 390px;

            margin-bottom: 22px;
          }

          .engineering-pipeline-actions {
            max-width: 100%;
          }

          .engineering-pipeline-primary,
          .engineering-pipeline-secondary {
            min-height: 42px;

            padding: 0 15px;

            font-size: 10px;
          }

          .engineering-pipeline-arrow {
            width: 13px;
            height: 13px;
          }

        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .engineering-pipeline-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .engineering-pipeline-heading {
            font-size: 24px;
          }

          .engineering-pipeline-description {
            font-size: 11.5px;
          }

          .engineering-pipeline-primary,
          .engineering-pipeline-secondary {
            font-size: 9.5px;
          }

        }
      `}</style>
    </section>
  );
}