import React from "react";
import { Layers, ArrowRight } from "lucide-react";

export default function StrengthenTeamWithTechTorchCTA() {
  return (
    <section className="strengthen-team-cta">
      <div className="strengthen-team-cta-container">

        {/* =================================================
            CTA CARD
        ================================================= */}

        <div className="strengthen-team-cta-card">

          {/* Icon Badge */}
          <div className="strengthen-team-cta-icon">
            <Layers />
          </div>

          {/* Heading */}
          <h2>
            Strengthen Your Technology Team with TechTorch
          </h2>

          {/* Description */}
          <p>
            Get the technical expertise and flexible workforce support your
            business needs to move projects forward.
          </p>

          {/* CTA */}
          <button className="strengthen-team-cta-button">
            <span>Talk to Our Experts</span>

            <ArrowRight />
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

        .strengthen-team-cta {
          width: 100%;

          background: #fafafa;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .strengthen-team-cta-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 55px;
          padding-bottom: 55px;
        }

        /* =====================================================
           CTA CARD
        ===================================================== */

        .strengthen-team-cta-card {
          width: 100%;

          min-height: 350px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 55px 70px;

          text-align: center;

          border-radius: 18px;

          background: rgba(115, 0, 36, 0.05);

          border: 1px solid rgba(115, 0, 36, 0.1);

          box-sizing: border-box;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .strengthen-team-cta-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 22px;

          border-radius: 10px;

          background: #730024;

          box-shadow:
            0 8px 20px rgba(115, 0, 36, 0.12);
        }

        .strengthen-team-cta-icon svg {
          width: 20px;
          height: 20px;

          color: #ffffff;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .strengthen-team-cta-card h2 {
          max-width: 850px;

          margin: 0 0 15px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(28px, 3vw, 44px);

          font-weight: 600;

          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .strengthen-team-cta-card p {
          max-width: 620px;

          margin: 0 0 27px;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          font-weight: 400;

          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           BUTTON
        ===================================================== */

        .strengthen-team-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 46px;

          padding: 12px 21px;

          border: none;

          border-radius: 6px;

          background: #730024;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 12.5px;

          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .strengthen-team-cta-button svg {
          width: 15px;
          height: 15px;

          transition: transform 0.3s ease;
        }

        .strengthen-team-cta-button:hover {
          background: #5c001d;

          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(115, 0, 36, 0.16);
        }

        .strengthen-team-cta-button:hover svg {
          transform: translateX(3px);
        }

        /* =====================================================
           TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .strengthen-team-cta-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .strengthen-team-cta-card {
            padding-left: 55px;
            padding-right: 55px;
          }

        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .strengthen-team-cta-container {
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .strengthen-team-cta-card {
            min-height: 330px;

            padding: 50px 40px;
          }

          .strengthen-team-cta-card h2 {
            font-size: 36px;
          }

        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .strengthen-team-cta-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 38px;
            padding-bottom: 38px;
          }

          .strengthen-team-cta-card {
            min-height: 310px;

            padding: 42px 25px;

            border-radius: 15px;
          }

          .strengthen-team-cta-icon {
            width: 43px;
            height: 43px;

            margin-bottom: 19px;
          }

          .strengthen-team-cta-icon svg {
            width: 18px;
            height: 18px;
          }

          .strengthen-team-cta-card h2 {
            font-size: 30px;

            line-height: 1.23;

            margin-bottom: 13px;
          }

          .strengthen-team-cta-card p {
            max-width: 530px;

            font-size: 12.5px;

            line-height: 1.7;

            margin-bottom: 23px;
          }

          .strengthen-team-cta-button {
            min-height: 44px;

            padding: 11px 18px;

            font-size: 11.5px;
          }

        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .strengthen-team-cta-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 32px;
            padding-bottom: 32px;
          }

          .strengthen-team-cta-card {
            min-height: 285px;

            padding: 35px 18px;

            border-radius: 13px;
          }

          .strengthen-team-cta-icon {
            width: 40px;
            height: 40px;

            margin-bottom: 17px;

            border-radius: 9px;
          }

          .strengthen-team-cta-icon svg {
            width: 17px;
            height: 17px;
          }

          .strengthen-team-cta-card h2 {
            font-size: 25px;

            line-height: 1.25;

            letter-spacing: -0.02em;
          }

          .strengthen-team-cta-card p {
            font-size: 11px;

            line-height: 1.7;

            margin-bottom: 21px;
          }

          .strengthen-team-cta-button {
            min-height: 42px;

            padding: 10px 16px;

            font-size: 10.5px;

            gap: 7px;
          }

          .strengthen-team-cta-button svg {
            width: 13px;
            height: 13px;
          }

        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .strengthen-team-cta-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .strengthen-team-cta-card {
            min-height: 270px;

            padding-left: 15px;
            padding-right: 15px;
          }

          .strengthen-team-cta-card h2 {
            font-size: 22px;
          }

          .strengthen-team-cta-card p {
            font-size: 10.5px;
          }

        }

      `}</style>
    </section>
  );
}