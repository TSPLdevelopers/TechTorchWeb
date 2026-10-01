import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function CtaBannerSection() {
  return (
    <div className="cta-banner-section">
      <style>{`
        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .cta-banner-section {
          position: relative;
          width: 100%;
          overflow: hidden;

          background:
            linear-gradient(
              115deg,
              #2a0f1d 0%,
              #4a1530 30%,
              #7a1f3d 62%,
              #2a0f1d 100%
            );

          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           DIAGONAL TEXTURE
        ===================================================== */

        .cta-banner-texture {
          position: absolute;
          inset: 0;

          pointer-events: none;

          opacity: 0.2;

          background-image:
            repeating-linear-gradient(
              115deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 60px
            );
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .cta-banner-container {
          position: relative;

          width: 100%;
          max-width: 1152px;

          margin: 0 auto;

          padding: 64px 24px;

          box-sizing: border-box;
        }


        /* =====================================================
           EYEBROW
           INTER
        ===================================================== */

        .cta-banner-eyebrow {
          display: flex;
          align-items: center;

          gap: 4px;

          margin-bottom: 20px;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          line-height: 1.4;

          font-weight: 600;

          letter-spacing: 0.06em;

          color: #e3a9c1;
        }


        /* =====================================================
           HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .cta-banner-heading {
          max-width: 680px;

          margin: 0 0 20px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 36px;

          line-height: 1.18;

          font-weight: 700;

          letter-spacing: -0.7px;

          color: #ffffff;
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .cta-banner-subheading {
          max-width: 680px;

          margin: 0 0 32px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;

          line-height: 1.7;

          font-weight: 500;

          color: #d9c3cf;
        }


        /* =====================================================
           BUTTON GROUP
        ===================================================== */

        .cta-banner-buttons {
          display: flex;

          flex-wrap: wrap;

          align-items: center;

          gap: 12px;
        }


        /* =====================================================
           PRIMARY BUTTON
           INTER
        ===================================================== */

        .cta-primary-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          min-height: 46px;

          padding: 0 20px;

          border: 1px solid ${WINE};

          border-radius: 6px;

          background: ${WINE};

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          line-height: 1.4;

          font-weight: 500;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            border-color 0.25s ease;
        }


        .cta-primary-button:hover {
          background: #651831;

          border-color: #651831;

          transform: translateY(-2px);
        }


        /* =====================================================
           SECONDARY BUTTON
           INTER
        ===================================================== */

        .cta-secondary-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-height: 46px;

          padding: 0 20px;

          border: 1px solid rgba(255, 255, 255, 0.3);

          border-radius: 6px;

          background: transparent;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          line-height: 1.4;

          font-weight: 500;

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }


        .cta-secondary-button:hover {
          background: rgba(255, 255, 255, 0.08);

          border-color: rgba(255, 255, 255, 0.55);

          transform: translateY(-2px);
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1280px) {

          .cta-banner-container {
            max-width: 1180px;

            padding-top: 72px;
            padding-bottom: 72px;
          }

          .cta-banner-heading {
            font-size: 40px;

            max-width: 720px;
          }

          .cta-banner-subheading {
            font-size: 17px;

            max-width: 720px;
          }

        }


        /* =====================================================
           TABLET / LAPTOP
        ===================================================== */

        @media (max-width: 1100px) {

          .cta-banner-container {
            padding-left: 32px;
            padding-right: 32px;
          }

          .cta-banner-heading {
            max-width: 650px;

            font-size: 34px;
          }

          .cta-banner-subheading {
            max-width: 650px;

            font-size: 15.5px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 767px) {

          .cta-banner-container {
            padding: 52px 20px;
          }

          .cta-banner-eyebrow {
            margin-bottom: 16px;

            font-size: 11px;
          }

          .cta-banner-heading {
            max-width: 600px;

            margin-bottom: 16px;

            font-size: 30px;

            line-height: 1.2;

            letter-spacing: -0.5px;
          }

          .cta-banner-subheading {
            max-width: 600px;

            margin-bottom: 26px;

            font-size: 14px;

            line-height: 1.7;
          }

          .cta-banner-buttons {
            gap: 10px;
          }

          .cta-primary-button,
          .cta-secondary-button {
            min-height: 44px;

            padding: 0 17px;

            font-size: 13px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .cta-banner-container {
            padding: 44px 16px;
          }

          .cta-banner-eyebrow {
            gap: 3px;

            margin-bottom: 13px;

            font-size: 10px;

            letter-spacing: 0.045em;
          }

          .cta-banner-heading {
            max-width: 100%;

            margin-bottom: 14px;

            font-size: 26px;

            line-height: 1.22;

            letter-spacing: -0.4px;
          }

          .cta-banner-subheading {
            max-width: 100%;

            margin-bottom: 24px;

            font-size: 13px;

            line-height: 1.7;
          }

          .cta-banner-buttons {
            width: 100%;

            flex-direction: column;

            align-items: stretch;

            gap: 10px;
          }

          .cta-primary-button,
          .cta-secondary-button {
            width: 100%;

            min-height: 45px;

            padding: 0 14px;

            font-size: 13px;

            text-align: center;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .cta-banner-container {
            padding: 38px 14px;
          }

          .cta-banner-heading {
            font-size: 23px;

            line-height: 1.24;
          }

          .cta-banner-subheading {
            font-size: 12.5px;
          }

          .cta-primary-button,
          .cta-secondary-button {
            font-size: 12.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .cta-primary-button,
          .cta-secondary-button {
            transition: none;
          }

        }
      `}</style>


      {/* =====================================================
          BACKGROUND TEXTURE
      ===================================================== */}

      <div className="cta-banner-texture" />


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="cta-banner-container">

        {/* EYEBROW - INTER */}

        <div className="cta-banner-eyebrow">
          <ChevronRight
            size={12}
            strokeWidth={3}
          />

          <span>
            TRANSFORM YOUR INSTITUTION
          </span>
        </div>


        {/* HEADING - PLUS JAKARTA SANS */}

        <h2 className="cta-banner-heading">
          Have an Education Technology Challenge?
        </h2>


        {/* SUBHEADING - PLUS JAKARTA SANS */}

        <p className="cta-banner-subheading">
          Whether you are modernizing legacy student systems, unifying
          fragmented campus workflows, or building a connected digital
          campus, TechTorch architects are ready to partner with you.
        </p>


        {/* BUTTONS - INTER */}

        <div className="cta-banner-buttons">

          <button className="cta-primary-button">
            <span>
              Talk to Our Education Specialists
            </span>

            <ArrowRight size={16} />
          </button>


          <button className="cta-secondary-button">
            Explore Architecture Capabilities
          </button>

        </div>

      </div>
    </div>
  );
}