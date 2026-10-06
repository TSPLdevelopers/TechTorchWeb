import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FmcgHeroSection() {
  return (
    <section className="fmcg-hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .fmcg-hero-section,
        .fmcg-hero-section * {
          box-sizing: border-box;
        }

        .fmcg-hero-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =========================
           MAIN CONTAINER
        ========================= */

        .fmcg-hero-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /* HERO STANDARD SPACING */
          padding: 78px 100px;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }

        /* =========================
           LEFT CONTENT
        ========================= */

        .fmcg-hero-content {
          min-width: 0;
        }

        .fmcg-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 22px;
          padding: 7px 12px;

          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .fmcg-hero-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: ${WINE};
        }

        /* =========================
           HEADING
           PLUS JAKARTA SANS
        ========================= */

        .fmcg-hero-heading {
          max-width: 650px;
          margin: 0 0 22px;

          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;

          font-size: 46px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        /* =========================
           DESCRIPTION
           PLUS JAKARTA SANS
        ========================= */

        .fmcg-hero-description {
          max-width: 620px;
          margin: 0 0 14px;

          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;

          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
        }

        .fmcg-hero-description.last {
          margin-bottom: 30px;
        }

        /* =========================
           BUTTON
           INTER
        ========================= */

        .fmcg-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 48px;
          padding: 0 21px;

          border: none;
          border-radius: 7px;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .fmcg-hero-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(122, 31, 61, 0.18);
        }

        .fmcg-hero-button:active {
          transform: translateY(0);
        }

        /* =========================
           IMAGE
        ========================= */

        .fmcg-hero-image-wrapper {
          position: relative;

          width: 100%;
          height: 430px;

          overflow: hidden;

          border-radius: 22px;
          background: #ececef;

          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
        }

        .fmcg-hero-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
          object-position: center;
        }

        .fmcg-hero-image-overlay {
          position: absolute;
          inset: 0;

          background: linear-gradient(
            180deg,
            rgba(15, 18, 27, 0.05) 30%,
            rgba(15, 18, 27, 0.35) 100%
          );

          pointer-events: none;
        }

        .fmcg-hero-image-label {
          position: absolute;

          top: 18px;
          left: 18px;

          display: inline-flex;
          align-items: center;

          padding: 8px 12px;

          border-radius: 7px;

          background: rgba(255, 255, 255, 0.96);
          color: ${INK};

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;

          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .fmcg-hero-image-caption {
          position: absolute;

          left: 20px;
          right: 20px;
          bottom: 18px;

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        /* =========================
           LARGE TABLET / LAPTOP
        ========================= */

        @media (max-width: 1200px) {
          .fmcg-hero-container {
            padding-left: 40px;
            padding-right: 40px;

            gap: 48px;
          }

          .fmcg-hero-heading {
            font-size: 42px;
          }

          .fmcg-hero-image-wrapper {
            height: 400px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 850px) {
          .fmcg-hero-container {
            grid-template-columns: 1fr;

            gap: 42px;

            padding-top: 56px;
            padding-bottom: 56px;
          }

          .fmcg-hero-content {
            max-width: 760px;
            margin: 0 auto;

            text-align: center;
          }

          .fmcg-hero-badge {
            margin-bottom: 18px;
          }

          .fmcg-hero-heading {
            max-width: 700px;

            margin-left: auto;
            margin-right: auto;

            font-size: 36px;
          }

          .fmcg-hero-description {
            max-width: 700px;

            margin-left: auto;
            margin-right: auto;

            font-size: 14px;
          }

          .fmcg-hero-description.last {
            margin-bottom: 26px;
          }

          .fmcg-hero-button {
            margin: 0 auto;
          }

          .fmcg-hero-image-wrapper {
            width: 100%;
            max-width: 760px;

            height: 390px;

            margin: 0 auto;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .fmcg-hero-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 44px;
            padding-bottom: 44px;

            gap: 30px;
          }

          .fmcg-hero-badge {
            font-size: 10px;
            padding: 7px 10px;
            margin-bottom: 16px;
          }

          .fmcg-hero-heading {
            font-size: 28px;
            line-height: 1.25;

            letter-spacing: -0.025em;

            margin-bottom: 17px;
          }

          .fmcg-hero-description {
            font-size: 13px;
            line-height: 1.7;

            margin-bottom: 11px;
          }

          .fmcg-hero-description.last {
            margin-bottom: 24px;
          }

          .fmcg-hero-button {
            width: 100%;
            max-width: 280px;

            min-height: 47px;

            font-size: 10.5px;
          }

          .fmcg-hero-image-wrapper {
            height: 320px;
            border-radius: 17px;
          }

          .fmcg-hero-image-label {
            top: 13px;
            left: 13px;

            font-size: 9px;
            padding: 7px 9px;
          }

          .fmcg-hero-image-caption {
            left: 15px;
            right: 15px;
            bottom: 14px;

            font-size: 11px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {
          .fmcg-hero-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 36px;
            padding-bottom: 36px;

            gap: 26px;
          }

          .fmcg-hero-heading {
            font-size: 24px;
          }

          .fmcg-hero-description {
            font-size: 12px;
          }

          .fmcg-hero-image-wrapper {
            height: 270px;
            border-radius: 15px;
          }

          .fmcg-hero-image-label {
            font-size: 8.5px;
          }

          .fmcg-hero-image-caption {
            font-size: 10px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .fmcg-hero-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 30px;
            padding-bottom: 30px;
          }

          .fmcg-hero-heading {
            font-size: 21px;
          }

          .fmcg-hero-description {
            font-size: 11.5px;
          }

          .fmcg-hero-image-wrapper {
            height: 235px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .fmcg-hero-button {
            transition: none;
          }

          .fmcg-hero-button:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="fmcg-hero-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}

        <div className="fmcg-hero-content">

          <span className="fmcg-hero-badge">
            <span className="fmcg-hero-badge-dot" />
            FMCG
          </span>

          <h1 className="fmcg-hero-heading">
            Technology Solutions for Modern FMCG Businesses
          </h1>

          <p className="fmcg-hero-description">
            FMCG businesses need connected processes, organized information
            and technology that can support day-to-day operations.
          </p>

          <p className="fmcg-hero-description last">
            TechTorch provides business technology solutions across ERP,
            operations, supply chain, finance, customer management and
            digital applications, helping businesses build a more connected
            technology environment.
          </p>

          <button className="fmcg-hero-button">
            TALK TO OUR EXPERTS
            <ArrowRight size={14} />
          </button>

        </div>

        {/* =========================
            RIGHT IMAGE
        ========================= */}

        <div className="fmcg-hero-image-wrapper">

          <img
            src="/fmcghero.png"
            alt="Modern FMCG warehouse and business operations"
            className="fmcg-hero-image"
          />

          <div className="fmcg-hero-image-overlay" />

          <span className="fmcg-hero-image-label">
            FMCG TECHNOLOGY
          </span>

          <div className="fmcg-hero-image-caption">
            Connected FMCG operations & technology
          </div>

        </div>

      </div>
    </section>
  );
}