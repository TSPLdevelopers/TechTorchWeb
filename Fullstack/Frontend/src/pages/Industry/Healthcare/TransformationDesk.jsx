import React from "react";
import { ArrowRight, CheckCircle2, Lock, Users } from "lucide-react";

const WINE = "#7A1F3D";

const trustItems = [
  {
    icon: CheckCircle2,
    label: "HIPAA & Data Privacy Aligned",
  },
  {
    icon: Lock,
    label: "Bilateral Mutual NDA",
  },
  {
    icon: Users,
    label: "Dedicated Clinical Engineering Pod",
  },
];

export default function HealthcareCtaBarSection() {
  return (
    <div className="healthcare-cta-section">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           GLOBAL
        ===================================================== */

        .healthcare-cta-section {
          width: 100%;
          overflow: hidden;
          background: ${WINE};
          font-family: "Inter", sans-serif;
        }

        .healthcare-cta-section *,
        .healthcare-cta-section *::before,
        .healthcare-cta-section *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .healthcare-cta-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 58px 100px;
        }

        /* =====================================================
           MAIN CTA
        ===================================================== */

        .healthcare-cta-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 55px;
          margin-bottom: 30px;
        }

        .healthcare-cta-content {
          min-width: 0;
          flex: 1;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .healthcare-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          margin-bottom: 15px;
          padding: 6px 12px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.12);
          color: #f3d9e2;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .healthcare-cta-heading {
          max-width: 760px;

          margin: 0 0 12px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 31px;
          line-height: 1.28;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .healthcare-cta-description {
          max-width: 720px;

          margin: 0;

          color: #e3c3cf;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .healthcare-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;

          gap: 10px;

          flex-shrink: 0;
        }

        .healthcare-cta-primary,
        .healthcare-cta-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          min-height: 45px;

          padding: 11px 19px;

          /* UPDATED BUTTON RADIUS */
          border-radius: 6px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;

          white-space: nowrap;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .healthcare-cta-primary {
          border: 1px solid #ffffff;

          background: #ffffff;

          color: ${WINE};
        }

        .healthcare-cta-secondary {
          border: 1px solid rgba(255, 255, 255, 0.3);

          background: transparent;

          color: #ffffff;
        }

        .healthcare-cta-primary:hover,
        .healthcare-cta-secondary:hover {
          transform: translateY(-2px);
        }

        .healthcare-cta-primary:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .healthcare-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.08);

          border-color: rgba(255, 255, 255, 0.5);
        }

        /* =====================================================
           TRUST BAR
        ===================================================== */

        .healthcare-cta-trust {
          width: 100%;

          padding-top: 17px;

          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .healthcare-cta-trust-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px 34px;
        }

        .healthcare-cta-trust-item {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          min-width: 0;
        }

        .healthcare-cta-trust-icon {
          flex-shrink: 0;

          color: #e3c3cf;
        }

        .healthcare-cta-trust-text {
          color: #e3c3cf;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {
          .healthcare-cta-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .healthcare-cta-main {
            gap: 38px;
          }

          .healthcare-cta-heading {
            font-size: 29px;
          }

          .healthcare-cta-buttons {
            max-width: 360px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .healthcare-cta-container {
            padding-top: 52px;
            padding-bottom: 52px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .healthcare-cta-main {
            flex-direction: column;
            align-items: flex-start;

            gap: 25px;

            margin-bottom: 27px;
          }

          .healthcare-cta-content {
            width: 100%;
          }

          .healthcare-cta-heading {
            max-width: 800px;
            font-size: 28px;
          }

          .healthcare-cta-description {
            max-width: 760px;
          }

          .healthcare-cta-buttons {
            justify-content: flex-start;

            width: 100%;
            max-width: none;
          }

          .healthcare-cta-trust-list {
            gap: 10px 26px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 700px) {
          .healthcare-cta-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 48px;
            padding-bottom: 48px;
          }

          .healthcare-cta-heading {
            font-size: 26px;
          }

          .healthcare-cta-description {
            font-size: 12px;
          }

          .healthcare-cta-buttons {
            gap: 9px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .healthcare-cta-container {
            padding: 44px 24px;
          }

          .healthcare-cta-main {
            gap: 22px;
            margin-bottom: 24px;
          }

          .healthcare-cta-badge {
            margin-bottom: 12px;

            padding: 5px 10px;

            font-size: 8px;
          }

          .healthcare-cta-heading {
            max-width: 100%;

            margin-bottom: 11px;

            font-size: 24px;
            line-height: 1.3;

            letter-spacing: -0.5px;
          }

          .healthcare-cta-description {
            max-width: 100%;

            font-size: 11.5px;
            line-height: 1.7;
          }

          .healthcare-cta-buttons {
            width: 100%;

            flex-direction: column;
            align-items: stretch;

            gap: 9px;
          }

          .healthcare-cta-primary,
          .healthcare-cta-secondary {
            width: 100%;

            min-height: 45px;

            padding: 11px 16px;

            font-size: 11px;

            /* SAME RADIUS ON MOBILE */
            border-radius: 6px;
          }

          .healthcare-cta-trust {
            padding-top: 15px;
          }

          .healthcare-cta-trust-list {
            display: grid;

            grid-template-columns: 1fr;

            gap: 10px;
          }

          .healthcare-cta-trust-text {
            font-size: 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .healthcare-cta-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .healthcare-cta-heading {
            font-size: 22px;
            line-height: 1.32;
          }

          .healthcare-cta-description {
            font-size: 11px;
          }

          .healthcare-cta-primary,
          .healthcare-cta-secondary {
            min-height: 43px;

            font-size: 10.5px;

            border-radius: 6px;
          }

          .healthcare-cta-trust-text {
            font-size: 9.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {
          .healthcare-cta-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 36px;
            padding-bottom: 36px;
          }

          .healthcare-cta-heading {
            font-size: 20px;
          }

          .healthcare-cta-description {
            font-size: 10.5px;
          }

          .healthcare-cta-primary,
          .healthcare-cta-secondary {
            font-size: 10px;

            border-radius: 6px;
          }

          .healthcare-cta-trust-text {
            font-size: 9px;
          }
        }

        /* =====================================================
           DESKTOP LINE BREAK
        ===================================================== */

        @media (max-width: 700px) {
          .desktop-break {
            display: none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .healthcare-cta-primary,
          .healthcare-cta-secondary {
            transition: none;
          }
        }
      `}</style>

      {/* =====================================================
          MAIN CTA
      ===================================================== */}

      <div className="healthcare-cta-container">
        <div className="healthcare-cta-main">

          <div className="healthcare-cta-content">
            <span className="healthcare-cta-badge">
              HEALTHCARE TRANSFORMATION DESK
            </span>

            <h2 className="healthcare-cta-heading">
              Build a More Connected Healthcare
              <br className="desktop-break" />
              Environment
            </h2>

            <p className="healthcare-cta-description">
              Bring healthcare operations, information and digital services
              together with technology designed around the way your
              organization works.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="healthcare-cta-buttons">

            <button className="healthcare-cta-primary">
              Talk to Our Healthcare Experts
              <ArrowRight size={15} />
            </button>

            <button className="healthcare-cta-secondary">
              Get in Touch
            </button>

          </div>
        </div>

        {/* TRUST ITEMS */}

        <div className="healthcare-cta-trust">
          <div className="healthcare-cta-trust-list">

            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="healthcare-cta-trust-item"
              >
                <Icon
                  size={13}
                  strokeWidth={1.8}
                  className="healthcare-cta-trust-icon"
                />

                <span className="healthcare-cta-trust-text">
                  {label}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}