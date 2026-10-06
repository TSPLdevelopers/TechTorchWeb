import React from "react";
import { Layers, ArrowRight } from "lucide-react";

export default function StrengthenTeamCTA() {
  return (
    <section className="strengthen-team-section">
      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .strengthen-team-section {
          width: 100%;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          background: #f9f9f9;
          padding: 64px 100px;
          font-family: "Inter", sans-serif;
        }

        .strengthen-team-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =====================================================
           CTA CARD
        ===================================================== */

        .strengthen-team-card {
          width: 100%;
          max-width: 1100px;
          box-sizing: border-box;
          padding: 64px 60px;
          text-align: center;
          border: 1px solid rgba(115, 0, 36, 0.10);
          border-radius: 18px;
          background: rgba(115, 0, 36, 0.045);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .strengthen-team-card:hover {
          transform: translateY(-2px);
          border-color: rgba(115, 0, 36, 0.16);
          box-shadow: 0 14px 35px rgba(115, 0, 36, 0.06);
        }

        /* =====================================================
           ICON BADGE
        ===================================================== */

        .strengthen-team-icon {
          width: 46px;
          height: 46px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #730024;
          box-shadow: 0 7px 18px rgba(115, 0, 36, 0.12);
        }

        .strengthen-team-icon svg {
          width: 20px;
          height: 20px;
          color: #ffffff;
          stroke-width: 1.8;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .strengthen-team-heading {
          max-width: 760px;
          margin: 0 auto 17px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 34px;
          line-height: 1.25;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .strengthen-team-description {
          max-width: 650px;
          margin: 0 auto 34px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .strengthen-team-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 27px;
          border: 0;
          border-radius: 6px;
          background: #730024;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .strengthen-team-button:hover {
          background: #5c001d;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(115, 0, 36, 0.16);
        }

        .strengthen-team-button svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .strengthen-team-section {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .strengthen-team-card {
            max-width: 1000px;
            padding: 58px 50px;
          }

          .strengthen-team-heading {
            font-size: 32px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .strengthen-team-section {
            min-height: auto;
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 44px;
            padding-bottom: 44px;
          }

          .strengthen-team-card {
            padding: 45px 25px;
            border-radius: 15px;
          }

          .strengthen-team-icon {
            width: 43px;
            height: 43px;
            margin-bottom: 20px;
          }

          .strengthen-team-icon svg {
            width: 18px;
            height: 18px;
          }

          .strengthen-team-heading {
            font-size: 27px;
            line-height: 1.25;
            margin-bottom: 15px;
          }

          .strengthen-team-description {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 27px;
          }

          .strengthen-team-button {
            padding: 13px 22px;
            font-size: 12.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .strengthen-team-section {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 36px;
            padding-bottom: 36px;
          }

          .strengthen-team-card {
            padding: 38px 18px;
            border-radius: 13px;
          }

          .strengthen-team-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 18px;
            border-radius: 9px;
          }

          .strengthen-team-icon svg {
            width: 17px;
            height: 17px;
          }

          .strengthen-team-heading {
            font-size: 23px;
            line-height: 1.3;
          }

          .strengthen-team-description {
            font-size: 11.5px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .strengthen-team-button {
            width: auto;
            padding: 12px 18px;
            font-size: 11.5px;
          }

          .strengthen-team-button svg {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>

      <div className="strengthen-team-container">
        <div className="strengthen-team-card">

          {/* Icon Badge */}
          <div className="strengthen-team-icon">
            <Layers />
          </div>

          {/* Headline */}
          <h1 className="strengthen-team-heading">
            Strengthen Your Technology Team with TechTorch
          </h1>

          {/* Body Copy */}
          <p className="strengthen-team-description">
            Bring the right technical expertise to your projects with flexible
            IT augmentation and skilled technology professionals aligned with
            your business requirements.
          </p>

          {/* CTA */}
          <button className="strengthen-team-button">
            Talk to Our Experts
            <ArrowRight />
          </button>

        </div>
      </div>
    </section>
  );
}