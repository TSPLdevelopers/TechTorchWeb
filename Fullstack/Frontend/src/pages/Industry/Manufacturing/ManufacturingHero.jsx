import React from "react";
import { ArrowRight, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const HERO_IMAGE = "/manufacturinghero.png";

export default function ManufacturingHeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .manufacturing-hero {
          width: 100%;
          background: #f7f7fa;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .manufacturing-hero-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        /* LEFT CONTENT */

        .manufacturing-hero-content {
          width: 100%;
        }

        .manufacturing-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 13px;
          margin-bottom: 22px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .manufacturing-hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${WINE};
          flex-shrink: 0;
        }

        .manufacturing-hero-heading {
          margin: 0 0 22px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(36px, 4vw, 54px);
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -0.035em;
          color: ${INK};
          max-width: 650px;
        }

        .manufacturing-hero-description {
          margin: 0 0 30px;
          max-width: 650px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* BUTTONS */

        .manufacturing-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .manufacturing-hero-primary,
        .manufacturing-hero-secondary {
          border: none;
          cursor: pointer;
          border-radius: 999px;
          padding: 13px 21px;
          min-height: 46px;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .manufacturing-hero-primary {
          background: ${WINE};
          color: #ffffff;
        }

        .manufacturing-hero-secondary {
          background: #e9e8ec;
          color: ${INK};
        }

        .manufacturing-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(122, 31, 61, 0.22);
        }

        .manufacturing-hero-secondary:hover {
          transform: translateY(-2px);
          background: #dedde2;
        }

        /* IMAGE */

        .manufacturing-hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 470px;
          border-radius: 24px;
          overflow: hidden;
          background: #2a1a30;
          box-shadow: 0 24px 60px rgba(27, 27, 42, 0.14);
        }

        .manufacturing-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .manufacturing-hero-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              135deg,
              rgba(42, 26, 48, 0.20) 0%,
              rgba(74, 36, 64, 0.08) 45%,
              rgba(107, 42, 74, 0.20) 100%
            );
          pointer-events: none;
        }

        /* IMAGE CENTER LABEL */

        .manufacturing-hero-image-caption {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: max-content;
          max-width: 80%;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(20, 10, 20, 0.48);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 500;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .manufacturing-hero-image-wrapper:hover
          .manufacturing-hero-image-caption {
          opacity: 1;
        }

        /* IMAGE BOTTOM CARD */

        .manufacturing-hero-status {
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 13px 15px;
          border-radius: 14px;
          background: rgba(20, 10, 20, 0.64);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.10);
        }

        .manufacturing-hero-status-content {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .manufacturing-hero-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #e05a8a;
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(224, 90, 138, 0.7);
        }

        .manufacturing-hero-status-text {
          margin: 0;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .manufacturing-hero-status-icon {
          color: #e05a8a;
          flex-shrink: 0;
        }

        /* TABLET */

        @media (max-width: 1100px) {
          .manufacturing-hero-container {
            padding: 64px 32px;
            gap: 42px;
          }

          .manufacturing-hero-heading {
            font-size: 42px;
          }

          .manufacturing-hero-description {
            font-size: 14px;
            line-height: 1.75;
          }

          .manufacturing-hero-image-wrapper {
            height: 420px;
          }
        }

        /* TABLET / SMALL LAPTOP */

        @media (max-width: 900px) {
          .manufacturing-hero-container {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 60px 28px;
          }

          .manufacturing-hero-content {
            max-width: 760px;
          }

          .manufacturing-hero-heading {
            max-width: 700px;
            font-size: 44px;
          }

          .manufacturing-hero-description {
            max-width: 720px;
            font-size: 15px;
          }

          .manufacturing-hero-image-wrapper {
            height: 440px;
            border-radius: 22px;
          }

          .manufacturing-hero-image-caption {
            opacity: 1;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .manufacturing-hero-container {
            padding: 50px 20px;
            gap: 34px;
          }

          .manufacturing-hero-badge {
            margin-bottom: 18px;
            font-size: 10px;
            padding: 6px 11px;
          }

          .manufacturing-hero-heading {
            font-size: 34px;
            line-height: 1.15;
            letter-spacing: -0.025em;
            margin-bottom: 18px;
          }

          .manufacturing-hero-description {
            font-size: 14px;
            line-height: 1.75;
            margin-bottom: 25px;
          }

          .manufacturing-hero-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .manufacturing-hero-primary,
          .manufacturing-hero-secondary {
            width: 100%;
            padding: 13px 18px;
          }

          .manufacturing-hero-image-wrapper {
            height: 360px;
            border-radius: 18px;
          }

          .manufacturing-hero-image-caption {
            max-width: 88%;
            font-size: 11px;
            padding: 8px 12px;
          }

          .manufacturing-hero-status {
            left: 10px;
            right: 10px;
            bottom: 10px;
            padding: 11px 12px;
          }

          .manufacturing-hero-status-text {
            font-size: 8.5px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 400px) {
          .manufacturing-hero-container {
            padding: 42px 16px;
            gap: 28px;
          }

          .manufacturing-hero-heading {
            font-size: 30px;
          }

          .manufacturing-hero-description {
            font-size: 13px;
          }

          .manufacturing-hero-image-wrapper {
            height: 310px;
          }

          .manufacturing-hero-status-icon {
            width: 14px;
            height: 14px;
          }
        }

        /* VERY SMALL MOBILE */

        @media (max-width: 340px) {
          .manufacturing-hero-heading {
            font-size: 27px;
          }

          .manufacturing-hero-description {
            font-size: 12.5px;
          }

          .manufacturing-hero-image-wrapper {
            height: 275px;
          }

          .manufacturing-hero-status-text {
            font-size: 7.5px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .manufacturing-hero-primary,
          .manufacturing-hero-secondary,
          .manufacturing-hero-image-caption {
            transition: none;
          }
        }
      `}</style>

      <section className="manufacturing-hero">
        <div className="manufacturing-hero-container">

          {/* LEFT CONTENT */}
          <div className="manufacturing-hero-content">

            <span className="manufacturing-hero-badge">
              <span className="manufacturing-hero-badge-dot" />
              MANUFACTURING
            </span>

            <h1 className="manufacturing-hero-heading">
              Technology Solutions for Modern Manufacturing
            </h1>

            <p className="manufacturing-hero-description">
              Manufacturing businesses depend on connected processes,
              reliable information and efficient supply chain operations.
              TechTorch Solutions provides technology solutions designed to
              help businesses connect important functions and manage their
              operations through a more organized digital environment.
            </p>

            <div className="manufacturing-hero-actions">
              <button className="manufacturing-hero-primary">
                Talk to Our Experts
                <ArrowRight size={16} />
              </button>

              <button
                className="manufacturing-hero-secondary"
                onClick={() => navigate("/manufacturing-get-in-touch")}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="manufacturing-hero-image-wrapper">

            <img
              src={HERO_IMAGE}
              alt="Modern manufacturing and smart factory operations"
              className="manufacturing-hero-image"
            />

            <div className="manufacturing-hero-image-overlay" />

            <div className="manufacturing-hero-image-caption">
              Engineers reviewing robotic assembly line
            </div>

            {/* BOTTOM STATUS CARD */}
            <div className="manufacturing-hero-status">
              <div className="manufacturing-hero-status-content">
                <span className="manufacturing-hero-status-dot" />

                <p className="manufacturing-hero-status-text">
                  SMART FACTORY FABRIC · REAL-TIME TELEMETRY &amp; FLOOR
                  AUTOMATION
                </p>
              </div>

              <Cpu
                size={17}
                className="manufacturing-hero-status-icon"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}