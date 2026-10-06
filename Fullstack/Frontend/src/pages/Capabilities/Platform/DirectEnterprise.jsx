import React from "react";
import {
  Zap,
  Handshake,
  Lock,
  ArrowRight,
  Building2,
} from "lucide-react";

const PILLS = [
  { icon: Zap, label: "Response in 24h" },
  { icon: Handshake, label: "Senior Architect Call" },
  { icon: Lock, label: "NDA & Security First" },
];

export default function FinalCtaSection() {
  return (
    <>
      <section className="final-cta-section">
        {/* =====================================================
            BACKGROUND
        ===================================================== */}

        <div className="final-cta-bg" />

        {/* =====================================================
            MAIN CONTAINER
        ===================================================== */}

        <div className="final-cta-container">
          {/* ===================================================
              LEFT — CONTENT
          =================================================== */}

          <div className="final-cta-content">
            {/* ================= BADGE ================= */}

            <span className="final-cta-badge">
              <span className="final-cta-badge-dot" />
              <span>Direct Enterprise Advisory</span>
            </span>

            {/* ================= HEADING ================= */}

            <h2 className="final-cta-heading">
              <span className="final-cta-heading-white">
                Let's build something great
              </span>

              <br />

              <span className="final-cta-heading-accent">
                together.
              </span>
            </h2>

            {/* ================= DESCRIPTION ================= */}

            <p className="final-cta-description">
              Have an idea, a challenge, or a vision? Connect directly with
              our platform architects to see how unified digital systems
              transform operations.
            </p>

            {/* ================= PILLS ================= */}

            <div className="final-cta-pills">
              {PILLS.map(({ icon: Icon, label }) => (
                <span className="final-cta-pill" key={label}>
                  <Icon
                    size={13}
                    className="final-cta-pill-icon"
                    strokeWidth={2}
                  />

                  <span>{label}</span>
                </span>
              ))}
            </div>

            {/* ================= CTA ================= */}

            <button className="final-cta-button">
              <span>Talk to Us</span>

              <ArrowRight
                size={15}
                strokeWidth={2}
                className="final-cta-arrow"
              />
            </button>
          </div>

          {/* ===================================================
              RIGHT — IMAGE CARD
          =================================================== */}

          <div className="final-cta-image-card">
            <img
              src="/desktop3.png"
              alt="Executive office overlooking a city skyline at dusk"
              className="final-cta-image"
            />

            {/* ================= BOTTOM INFO BAR ================= */}

            <div className="final-cta-info-bar">
              {/* Icon */}

              <div className="final-cta-info-icon">
                <Building2 size={16} strokeWidth={2} />
              </div>

              {/* Text */}

              <div className="final-cta-info-text">
                <p className="final-cta-info-title">
                  Executive Advisory Suite
                </p>

                <p className="final-cta-info-subtitle">
                  Dedicated Enterprise Support
                </p>
              </div>

              {/* Available */}

              <span className="final-cta-available">
                <span className="final-cta-available-dot" />
                <span>Available Now</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`
        /* =====================================================
           FINAL CTA SECTION
        ===================================================== */

        .final-cta-section {
          position: relative;
          width: 100%;
          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;

          background: #0a0509;
        }

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .final-cta-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(
              120% 100% at 10% 0%,
              #4a0e2e 0%,
              #0d0508 55%,
              #0a0509 100%
            );
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .final-cta-container {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
          align-items: center;

          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          gap: 60px;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .final-cta-content {
          width: 100%;
          max-width: 680px;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .final-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 20px;
          padding: 7px 13px;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.08);

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: #fecdd3;
        }

        .final-cta-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #fb7185;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .final-cta-heading {
          margin: 0 0 18px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.14;
          letter-spacing: -0.025em;
        }

        .final-cta-heading-white {
          color: #ffffff;
        }

        .final-cta-heading-accent {
          color: #fecdd3;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .final-cta-description {
          max-width: 560px;

          margin: 0 0 28px 0;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;

          color: rgba(255, 255, 255, 0.62);
        }

        /* =====================================================
           PILLS
        ===================================================== */

        .final-cta-pills {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px;

          margin-bottom: 30px;
        }

        .final-cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 8px 13px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.05);

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.3;

          color: rgba(255, 255, 255, 0.82);

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .final-cta-pill:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.16);
          transform: translateY(-2px);
        }

        .final-cta-pill-icon {
          flex-shrink: 0;
          color: #fda4af;
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .final-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 13px 21px;

          border: none;
          border-radius: 6px;

          background: #730042;
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease,
            box-shadow 0.3s ease;
        }

        .final-cta-button:hover {
          opacity: 0.94;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(115, 0, 66, 0.3);
        }

        .final-cta-arrow {
          transition: transform 0.3s ease;
        }

        .final-cta-button:hover .final-cta-arrow {
          transform: translateX(3px);
        }

        /* =====================================================
           IMAGE CARD
        ===================================================== */

        .final-cta-image-card {
          position: relative;

          width: 100%;
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;

          background: #12090d;

          box-shadow:
            0 25px 60px rgba(0, 0, 0, 0.35);

          isolation: isolate;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .final-cta-image {
          display: block;

          width: 100%;
          aspect-ratio: 16 / 11;

          object-fit: cover;
          object-position: center;

          transition: transform 0.6s ease;
        }

        .final-cta-image-card:hover .final-cta-image {
          transform: scale(1.025);
        }

        /* =====================================================
           INFO BAR
        ===================================================== */

        .final-cta-info-bar {
          position: absolute;
          z-index: 3;

          left: 12px;
          right: 12px;
          bottom: 12px;

          display: flex;
          align-items: center;
          gap: 11px;

          padding: 11px 13px;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 13px;

          background: rgba(0, 0, 0, 0.62);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* =====================================================
           INFO ICON
        ===================================================== */

        .final-cta-info-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 38px;
          height: 38px;
          flex-shrink: 0;

          border-radius: 9px;

          background: #7a1750;
          color: #ffffff;
        }

        /* =====================================================
           INFO TEXT
        ===================================================== */

        .final-cta-info-text {
          min-width: 0;
          flex: 1;
        }

        .final-cta-info-title {
          overflow: hidden;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.35;

          white-space: nowrap;
          text-overflow: ellipsis;

          color: #ffffff;
        }

        .final-cta-info-subtitle {
          overflow: hidden;

          margin: 3px 0 0 0;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.3;

          white-space: nowrap;
          text-overflow: ellipsis;

          color: rgba(255, 255, 255, 0.5);
        }

        /* =====================================================
           AVAILABLE
        ===================================================== */

        .final-cta-available {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          flex-shrink: 0;

          padding: 6px 9px;

          border-radius: 999px;

          background: rgba(16, 185, 129, 0.2);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1;

          color: #86efac;
        }

        .final-cta-available-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #34d399;

          box-shadow: 0 0 0 3px rgba(52, 211, 153, 0.08);
        }

        /* =====================================================
           TABLET — 1200px
        ===================================================== */

        @media (max-width: 1200px) {
          .final-cta-section {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .final-cta-container {
            gap: 45px;
          }

          .final-cta-heading {
            font-size: 42px;
          }

          .final-cta-description {
            font-size: 14px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .final-cta-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .final-cta-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .final-cta-content {
            max-width: 700px;
          }

          .final-cta-heading {
            max-width: 650px;
            font-size: 40px;
          }

          .final-cta-description {
            max-width: 620px;
          }

          .final-cta-image-card {
            max-width: 760px;
          }

          .final-cta-image {
            aspect-ratio: 16 / 9;
          }
        }

        /* =====================================================
           MOBILE — 700px
        ===================================================== */

        @media (max-width: 700px) {
          .final-cta-section {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .final-cta-container {
            gap: 35px;
          }

          .final-cta-badge {
            margin-bottom: 16px;
            padding: 6px 11px;
            font-size: 9px;
          }

          .final-cta-heading {
            margin-bottom: 15px;
            font-size: 32px;
            line-height: 1.18;
          }

          .final-cta-description {
            margin-bottom: 23px;
            font-size: 13px;
            line-height: 1.65;
          }

          .final-cta-pills {
            gap: 7px;
            margin-bottom: 25px;
          }

          .final-cta-pill {
            padding: 7px 10px;
            font-size: 10px;
          }

          .final-cta-button {
            padding: 12px 19px;
            font-size: 12px;
          }

          .final-cta-image-card {
            border-radius: 17px;
          }

          .final-cta-image {
            aspect-ratio: 16 / 10;
          }

          .final-cta-info-bar {
            left: 9px;
            right: 9px;
            bottom: 9px;

            gap: 8px;

            padding: 9px 10px;
            border-radius: 11px;
          }

          .final-cta-info-icon {
            width: 34px;
            height: 34px;
            border-radius: 8px;
          }

          .final-cta-info-title {
            font-size: 10px;
          }

          .final-cta-info-subtitle {
            font-size: 8.5px;
          }

          .final-cta-available {
            gap: 4px;
            padding: 5px 7px;
            font-size: 8px;
          }

          .final-cta-available-dot {
            width: 5px;
            height: 5px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
        ===================================================== */

        @media (max-width: 480px) {
          .final-cta-section {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 44px;
            padding-bottom: 44px;
          }

          .final-cta-container {
            gap: 30px;
          }

          .final-cta-badge {
            gap: 6px;
            margin-bottom: 14px;
            padding: 6px 10px;
            font-size: 8.5px;
          }

          .final-cta-badge-dot {
            width: 5px;
            height: 5px;
          }

          .final-cta-heading {
            margin-bottom: 13px;
            font-size: 27px;
            line-height: 1.2;
          }

          .final-cta-description {
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 1.65;
          }

          .final-cta-pills {
            gap: 6px;
            margin-bottom: 22px;
          }

          .final-cta-pill {
            gap: 5px;
            padding: 6px 9px;
            font-size: 9px;
          }

          .final-cta-pill-icon {
            width: 11px;
            height: 11px;
          }

          .final-cta-button {
            gap: 7px;
            padding: 11px 17px;
            font-size: 11px;
          }

          .final-cta-button svg {
            width: 13px;
            height: 13px;
          }

          .final-cta-image-card {
            border-radius: 15px;
          }

          .final-cta-image {
            aspect-ratio: 16 / 10.5;
          }

          .final-cta-info-bar {
            left: 7px;
            right: 7px;
            bottom: 7px;
            gap: 7px;
            padding: 7px 8px;
            border-radius: 9px;
          }

          .final-cta-info-icon {
            width: 30px;
            height: 30px;
            border-radius: 7px;
          }

          .final-cta-info-icon svg {
            width: 13px;
            height: 13px;
          }

          .final-cta-info-title {
            font-size: 9px;
          }

          .final-cta-info-subtitle {
            margin-top: 2px;
            font-size: 7.5px;
          }

          .final-cta-available {
            padding: 5px 6px;
            font-size: 7px;
          }

          .final-cta-available-dot {
            width: 4px;
            height: 4px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .final-cta-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .final-cta-heading {
            font-size: 24px;
          }

          .final-cta-description {
            font-size: 11.5px;
          }

          .final-cta-pill {
            font-size: 8.5px;
          }

          .final-cta-info-bar {
            gap: 6px;
          }

          .final-cta-info-icon {
            width: 28px;
            height: 28px;
          }

          .final-cta-info-title {
            font-size: 8px;
          }

          .final-cta-info-subtitle {
            font-size: 7px;
          }

          .final-cta-available {
            padding: 4px 5px;
            font-size: 6.5px;
          }
        }
      `}</style>
    </>
  );
}