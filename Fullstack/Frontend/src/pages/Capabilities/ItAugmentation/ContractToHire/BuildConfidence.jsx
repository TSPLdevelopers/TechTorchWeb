import React from "react";
import { UserRound, ArrowRight } from "lucide-react";

export default function BuildYourTeamCTA() {
  return (
    <section className="build-team-cta">
      <div className="build-team-container">

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="build-team-content">

          {/* =====================================================
              ICON BADGE
          ===================================================== */}

          <div className="build-team-icon">
            <UserRound />
          </div>

          {/* =====================================================
              HEADLINE
          ===================================================== */}

          <h2 className="build-team-heading">
            Build Your Team with Confidence
          </h2>

          {/* =====================================================
              BODY COPY
          ===================================================== */}

          <p className="build-team-description">
            Find the right technology talent and create a stronger path from
            project engagement to long-term partnership.
          </p>

          {/* =====================================================
              CTA BUTTON
          ===================================================== */}

          <button
            type="button"
            className="build-team-button"
          >
            <span>Talk to Our Experts</span>

            <ArrowRight className="build-team-arrow" />
          </button>

        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .build-team-cta {
          width: 100%;
          min-height: 420px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(115, 0, 36, 0.05);

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .build-team-container {
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

        .build-team-content {
          width: 100%;
          max-width: 760px;

          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .build-team-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 21px;

          border-radius: 10px;

          background: #730024;

          box-shadow:
            0 8px 20px rgba(115, 0, 36, 0.12);
        }

        .build-team-icon svg {
          width: 20px;
          height: 20px;

          color: #ffffff;

          stroke-width: 1.8;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .build-team-heading {
          width: 100%;
          max-width: 700px;

          margin: 0 0 15px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(30px, 3.2vw, 44px);
          font-weight: 600;

          line-height: 1.18;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .build-team-description {
          width: 100%;
          max-width: 570px;

          margin: 0 0 29px;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .build-team-button {
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

        .build-team-button:hover {
          background: #5c001d;

          transform: translateY(-2px);

          box-shadow:
            0 8px 22px rgba(115, 0, 36, 0.16);
        }

        .build-team-arrow {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          transition: transform 0.25s ease;
        }

        .build-team-button:hover .build-team-arrow {
          transform: translateX(3px);
        }

        /* =====================================================
           LARGE TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .build-team-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .build-team-heading {
            font-size: 40px;
          }
        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .build-team-cta {
            min-height: 390px;
          }

          .build-team-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 55px;
            padding-bottom: 55px;
          }

          .build-team-heading {
            font-size: 36px;
          }

          .build-team-description {
            font-size: 13.5px;
          }
        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .build-team-cta {
            min-height: auto;
          }

          .build-team-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 48px;
            padding-bottom: 48px;
          }

          .build-team-icon {
            width: 44px;
            height: 44px;

            margin-bottom: 18px;
          }

          .build-team-icon svg {
            width: 19px;
            height: 19px;
          }

          .build-team-heading {
            font-size: 31px;

            line-height: 1.2;

            margin-bottom: 13px;
          }

          .build-team-description {
            font-size: 13px;

            line-height: 1.65;

            margin-bottom: 24px;
          }

          .build-team-button {
            min-height: 44px;

            padding: 0 20px;

            font-size: 11.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .build-team-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .build-team-icon {
            width: 41px;
            height: 41px;

            margin-bottom: 16px;

            border-radius: 9px;
          }

          .build-team-icon svg {
            width: 17px;
            height: 17px;
          }

          .build-team-heading {
            font-size: 27px;

            letter-spacing: -0.02em;
          }

          .build-team-description {
            max-width: 390px;

            font-size: 12px;

            line-height: 1.65;

            margin-bottom: 21px;
          }

          .build-team-button {
            min-height: 42px;

            padding: 0 17px;

            font-size: 10.5px;
          }

          .build-team-arrow {
            width: 13px;
            height: 13px;
          }
        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .build-team-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .build-team-heading {
            font-size: 24px;
          }

          .build-team-description {
            font-size: 11.5px;
          }

          .build-team-button {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}