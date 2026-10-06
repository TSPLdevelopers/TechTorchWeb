import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function BuildOnlineBusinessCtaSection() {
  return (
    <section className="build-online-cta-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .build-online-cta-section {
          position: relative;
          width: 100%;
          overflow: hidden;

          color: #ffffff;
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           BACKGROUND
        ========================================= */

        .build-online-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .build-online-bg img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transform: scale(1.02);
        }

        /* =========================================
           DARK OVERLAY
        ========================================= */

        .build-online-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              115deg,
              rgba(20, 22, 28, 0.88) 0%,
              rgba(26, 28, 36, 0.78) 45%,
              rgba(20, 22, 28, 0.88) 100%
            );
        }

        /* =========================================
           CONTENT WRAPPER
           Universal spacing:
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small mobile: 16px
        ========================================= */

        .build-online-wrapper {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          padding: 96px 100px;

          box-sizing: border-box;

          text-align: center;
        }

        /* =========================================
           INNER CONTENT
        ========================================= */

        .build-online-content {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        /* =========================================
           BADGE
        ========================================= */

        .build-online-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;

          margin: 0 0 20px;
          padding: 7px 12px;

          border-radius: 999px;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.08em;

          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .build-online-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(122, 31, 61, 0.25);
        }

        /* =========================================
           HEADING
        ========================================= */

        .build-online-heading {
          margin: 0 0 17px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .build-online-heading-break {
          display: block;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .build-online-description {
          max-width: 720px;
          margin: 0 auto 30px;

          color: #c9c6cc;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .build-online-actions {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .build-online-button {
          min-height: 46px;
          padding: 0 27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          border-radius: 7px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;

          cursor: pointer;

          transition:
            transform 300ms ease,
            box-shadow 300ms ease,
            background 300ms ease,
            border-color 300ms ease;
        }

        /* Primary */

        .build-online-primary {
          border: 1px solid ${WINE};
          background: ${WINE};
          color: #ffffff;
        }

        .build-online-primary:hover {
          transform: translateY(-3px);
          box-shadow:
            0 10px 25px rgba(122, 31, 61, 0.35);
        }

        /* Secondary */

        .build-online-secondary {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .build-online-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.20);
          border-color: rgba(255, 255, 255, 0.30);
        }

        /* =========================================
           ARROW
        ========================================= */

        .build-online-arrow {
          transition: transform 300ms ease;
        }

        .build-online-primary:hover .build-online-arrow {
          transform: translateX(4px);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .build-online-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .build-online-heading {
            font-size: 35px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .build-online-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 64px;
            padding-bottom: 64px;
          }

          .build-online-badge {
            margin-bottom: 17px;
          }

          .build-online-heading {
            margin-bottom: 15px;
            font-size: 29px;
            line-height: 1.22;
          }

          .build-online-description {
            margin-bottom: 25px;
            font-size: 13px;
            line-height: 1.7;
          }

          .build-online-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 11px;
          }

          .build-online-button {
            width: 100%;
            min-height: 45px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .build-online-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .build-online-heading {
            font-size: 25px;
            line-height: 1.24;
          }

          .build-online-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .build-online-button {
            font-size: 13px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {
          .build-online-heading {
            font-size: 23px;
          }

          .build-online-description {
            font-size: 12px;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {
          .build-online-badge:hover {
            transform: none;
            box-shadow: none;
          }

          .build-online-primary:hover,
          .build-online-secondary:hover {
            transform: none;
            box-shadow: none;
          }

          .build-online-primary:hover .build-online-arrow {
            transform: none;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .build-online-badge,
          .build-online-button,
          .build-online-arrow {
            transition: none !important;
          }
        }
      `}</style>

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="build-online-bg">
        <img
          src="/ecommerce3.png"
          alt="Building online business with technology"
        />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div className="build-online-overlay" />

      {/* ================= CONTENT ================= */}
      <div className="build-online-wrapper">
        <div className="build-online-content">
          {/* Badge */}
          <span className="build-online-badge">
            <ChevronRight
              size={11}
              strokeWidth={3}
            />

            NEXT PHASE
          </span>

          {/* Heading */}
          <h2 className="build-online-heading">
            Build Your Online Business With the
            <span className="build-online-heading-break">
              Right Technology
            </span>
          </h2>

          {/* Description */}
          <p className="build-online-description">
            Bring your products, customers and e-commerce
            operations together with technology designed around
            your business requirements.
          </p>

          {/* Buttons */}
          <div className="build-online-actions">
            {/* Primary Button */}
            <button
              type="button"
              className="
                build-online-button
                build-online-primary
              "
            >
              Talk to Our Experts

              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="build-online-arrow"
              />
            </button>

            {/* Secondary Button */}
            <button
              type="button"
              className="
                build-online-button
                build-online-secondary
              "
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}