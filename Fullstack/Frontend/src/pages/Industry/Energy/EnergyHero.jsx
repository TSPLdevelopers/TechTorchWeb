import React from "react";
import { ArrowRight, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EnergyHeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .energy-hero-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .energy-hero-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 40px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }

        /* ================= LEFT CONTENT ================= */

        .energy-hero-content {
          min-width: 0;
        }

        .energy-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 22px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.4;
        }

        .energy-hero-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .energy-hero-heading {
          margin: 0 0 22px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 45px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -1.1px;
        }

        .energy-hero-description {
          margin: 0 0 14px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        .energy-hero-description:last-of-type {
          margin-bottom: 28px;
        }

        /* ================= BUTTONS ================= */

        .energy-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .energy-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 44px;
          padding: 11px 20px;
          border-radius: 999px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .energy-hero-button-primary {
          border: 1px solid ${WINE};
          background: ${WINE};
          color: #ffffff;
        }

        .energy-hero-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(122, 31, 61, 0.2);
        }

        .energy-hero-button-secondary {
          border: 1px solid #d8d5d0;
          background: #ffffff;
          color: ${INK};
        }

        .energy-hero-button-secondary:hover {
          transform: translateY(-2px);
          background: #faf9f7;
        }

        /* ================= IMAGE AREA ================= */

        .energy-hero-visual {
          position: relative;
          min-width: 0;
          padding-bottom: 25px;
        }

        .energy-hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 440px;
          overflow: hidden;
          border-radius: 22px;
          background: #242936;
        }

        .energy-hero-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .energy-hero-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(18, 22, 32, 0.05) 25%,
              rgba(18, 22, 32, 0.35) 100%
            );
          pointer-events: none;
        }

        .energy-hero-image-label {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 7px 10px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          background: rgba(15, 18, 27, 0.65);
          color: #ffffff;
          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.08em;
          backdrop-filter: blur(8px);
        }

        /* ================= FLOATING CARD ================= */

        .energy-hero-floating-card {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 15px;
          border-radius: 13px;
          background: #ffffff;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.13);
        }

        .energy-hero-floating-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .energy-hero-floating-content {
          min-width: 0;
        }

        .energy-hero-floating-label {
          margin: 0 0 3px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.07em;
          line-height: 1.4;
        }

        .energy-hero-floating-title {
          margin: 0;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        /* ================= LARGE TABLET ================= */

        @media (max-width: 1100px) {
          .energy-hero-container {
            padding: 60px 32px;
            gap: 42px;
          }

          .energy-hero-heading {
            font-size: 38px;
          }

          .energy-hero-image-wrapper {
            height: 400px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 850px) {
          .energy-hero-container {
            grid-template-columns: 1fr;
            gap: 45px;
            padding: 55px 28px 70px;
          }

          .energy-hero-heading {
            max-width: 760px;
            font-size: 36px;
          }

          .energy-hero-description {
            max-width: 800px;
            font-size: 13.5px;
          }

          .energy-hero-visual {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
          }

          .energy-hero-image-wrapper {
            height: 410px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .energy-hero-container {
            padding: 45px 20px 60px;
            gap: 35px;
          }

          .energy-hero-badge {
            margin-bottom: 17px;
            font-size: 9px;
            padding: 6px 10px;
          }

          .energy-hero-heading {
            font-size: 29px;
            line-height: 1.25;
            letter-spacing: -0.7px;
            margin-bottom: 17px;
          }

          .energy-hero-description {
            font-size: 12.5px;
            line-height: 1.7;
            margin-bottom: 12px;
          }

          .energy-hero-description:last-of-type {
            margin-bottom: 23px;
          }

          .energy-hero-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .energy-hero-button {
            width: 100%;
            min-height: 45px;
            padding: 12px 18px;
          }

          .energy-hero-visual {
            padding-bottom: 23px;
          }

          .energy-hero-image-wrapper {
            height: 340px;
            border-radius: 17px;
          }

          .energy-hero-image-label {
            top: 13px;
            left: 13px;
            font-size: 8px;
          }

          .energy-hero-floating-card {
            left: 15px;
            right: 15px;
            padding: 11px 12px;
            gap: 10px;
          }

          .energy-hero-floating-icon {
            width: 35px;
            height: 35px;
          }

          .energy-hero-floating-title {
            font-size: 12px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 420px) {
          .energy-hero-container {
            padding: 40px 15px 55px;
          }

          .energy-hero-heading {
            font-size: 25px;
            line-height: 1.27;
          }

          .energy-hero-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .energy-hero-image-wrapper {
            height: 285px;
            border-radius: 15px;
          }

          .energy-hero-floating-card {
            left: 10px;
            right: 10px;
          }

          .energy-hero-floating-label {
            font-size: 8px;
          }

          .energy-hero-floating-title {
            font-size: 11px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .energy-hero-container {
            padding: 35px 12px 48px;
          }

          .energy-hero-heading {
            font-size: 22px;
          }

          .energy-hero-description {
            font-size: 11.5px;
          }

          .energy-hero-image-wrapper {
            height: 245px;
          }

          .energy-hero-floating-card {
            padding: 9px 10px;
          }

          .energy-hero-floating-icon {
            width: 32px;
            height: 32px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .energy-hero-button {
            transition: none;
          }

          .energy-hero-button:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="energy-hero-section">
        <div className="energy-hero-container">

          {/* ================= LEFT CONTENT ================= */}
          <div className="energy-hero-content">

            <span className="energy-hero-badge">
              <span className="energy-hero-badge-dot" />
              ENERGY TECHNOLOGY PRACTICE
            </span>

            <h1 className="energy-hero-heading">
              Technology Solutions for a More Connected Energy Business
            </h1>

            <p className="energy-hero-description">
              Energy businesses manage multiple functions across operations,
              people, finance, customer relationships and business processes.
              As these areas grow, organizations need technology that can
              bring information together and support the way their business
              operates.
            </p>

            <p className="energy-hero-description">
              TechTorch Solutions provides technology services and digital
              solutions designed around business requirements, helping
              organizations develop, manage and improve the technology behind
              their operations.
            </p>

            <div className="energy-hero-actions">
              <button
                type="button"
                className="energy-hero-button energy-hero-button-primary"
                onClick={() => navigate("/energy-get-in-touch")}
              >
                Get in Touch
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="energy-hero-button energy-hero-button-secondary"
              >
                Talk to Our Experts
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="energy-hero-visual">

            <div className="energy-hero-image-wrapper">

              <img
                src="/EnergyHero.png"
                alt="Energy operations control room"
                className="energy-hero-image"
              />

              <div className="energy-hero-image-overlay" />

              <span className="energy-hero-image-label">
                ENERGY TECHNOLOGY
              </span>
            </div>

            {/* Floating Caption Card */}
            <div className="energy-hero-floating-card">

              <span className="energy-hero-floating-icon">
                <Settings size={16} />
              </span>

              <div className="energy-hero-floating-content">
                <p className="energy-hero-floating-label">
                  • TECHNOLOGY CONSULTATION
                </p>

                <p className="energy-hero-floating-title">
                  Technology Solutions for Energy Businesses
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}