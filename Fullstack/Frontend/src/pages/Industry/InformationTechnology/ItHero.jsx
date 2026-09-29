import React from "react";
import { ArrowRight, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function ItHeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .it-hero-section {
          width: 100%;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #fbeef1 0%,
            #f7f5f2 40%,
            #ffffff 100%
          );
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
        }

        .it-hero-container {
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 78px 40px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
          gap: 64px;
          align-items: center;
        }

        /* ================= LEFT CONTENT ================= */

        .it-hero-content {
          min-width: 0;
        }

        .it-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 22px;
          padding: 7px 13px;

          border: 1px solid #f0d6de;
          border-radius: 999px;
          background: #ffffff;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.7px;
        }

        .it-hero-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .it-hero-heading {
          max-width: 680px;
          margin: 0 0 22px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 44px;
          line-height: 1.16;
          font-weight: 800;
          letter-spacing: -1.2px;
        }

        .it-hero-description {
          max-width: 650px;
          margin: 0 0 14px;

          color: ${MUTED};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        .it-hero-description:last-of-type {
          margin-bottom: 30px;
        }

        /* ================= BUTTONS ================= */

        .it-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 11px;
        }

        .it-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          min-height: 44px;
          padding: 0 19px;

          border-radius: 999px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1;
          font-weight: 600;

          cursor: pointer;
          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease,
            background 0.22s ease;
        }

        .it-hero-primary {
          border: 1px solid ${WINE};
          background: ${WINE};
          color: #ffffff;
        }

        .it-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(122, 31, 61, 0.2);
        }

        .it-hero-secondary {
          border: 1px solid #d8d5d0;
          background: #ffffff;
          color: ${INK};
        }

        .it-hero-secondary:hover {
          transform: translateY(-2px);
          border-color: ${WINE};
          color: ${WINE};
        }

        /* ================= IMAGE AREA ================= */

        .it-hero-visual {
          position: relative;
          min-width: 0;
          padding-bottom: 28px;
        }

        .it-hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 440px;
          overflow: hidden;

          border-radius: 22px;
          background: #1c2230;

          box-shadow:
            0 18px 45px rgba(27, 27, 42, 0.13);
        }

        .it-hero-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 0.5s ease;
        }

        .it-hero-image-wrapper:hover .it-hero-image {
          transform: scale(1.03);
        }

        .it-hero-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.02) 30%,
              rgba(0, 0, 0, 0.48) 100%
            );
        }

        .it-hero-image-label {
          position: absolute;
          left: 18px;
          bottom: 18px;

          padding: 7px 11px;

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;

          background: rgba(20, 20, 25, 0.6);
          backdrop-filter: blur(8px);

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* ================= FLOATING CARD ================= */

        .it-status-card {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 0;

          display: flex;
          align-items: center;
          gap: 11px;

          min-width: 0;
          padding: 12px 14px;

          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 13px;

          background: #ffffff;

          box-shadow:
            0 12px 30px rgba(27, 27, 42, 0.12);
        }

        .it-status-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 37px;
          height: 37px;
          flex-shrink: 0;

          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .it-status-content {
          min-width: 0;
          flex: 1;
        }

        .it-status-title {
          margin: 0 0 3px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
        }

        .it-status-description {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 400;
        }

        .it-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;

          padding: 6px 9px;

          border-radius: 999px;
          background: #e5f7ec;
          color: #1a9455;

          font-family: "Inter", Arial, sans-serif;
          font-size: 8px;
          line-height: 1;
          font-weight: 600;
          white-space: nowrap;
        }

        .it-status-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #1a9455;
        }

        /* ================= 1100px ================= */

        @media (max-width: 1100px) {
          .it-hero-container {
            padding: 65px 32px;
            gap: 42px;
          }

          .it-hero-heading {
            font-size: 39px;
          }

          .it-hero-image-wrapper {
            height: 400px;
          }

          .it-status-card {
            left: 14px;
            right: 14px;
          }
        }

        /* ================= 900px ================= */

        @media (max-width: 900px) {
          .it-hero-container {
            grid-template-columns: 1fr;
            gap: 45px;
            padding: 58px 28px 70px;
          }

          .it-hero-content {
            max-width: 760px;
          }

          .it-hero-heading {
            max-width: 700px;
            font-size: 38px;
          }

          .it-hero-description {
            max-width: 720px;
          }

          .it-hero-visual {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
          }

          .it-hero-image-wrapper {
            height: 410px;
          }
        }

        /* ================= 650px ================= */

        @media (max-width: 650px) {
          .it-hero-container {
            padding: 48px 18px 60px;
            gap: 35px;
          }

          .it-hero-badge {
            margin-bottom: 17px;
            padding: 6px 11px;
            font-size: 9px;
          }

          .it-hero-badge-dot {
            width: 5px;
            height: 5px;
          }

          .it-hero-heading {
            margin-bottom: 17px;
            font-size: 30px;
            line-height: 1.22;
            letter-spacing: -0.7px;
          }

          .it-hero-description {
            margin-bottom: 12px;
            font-size: 12.5px;
            line-height: 1.7;
          }

          .it-hero-description:last-of-type {
            margin-bottom: 24px;
          }

          .it-hero-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .it-hero-button {
            width: 100%;
            min-height: 45px;
          }

          .it-hero-visual {
            padding-bottom: 24px;
          }

          .it-hero-image-wrapper {
            height: 350px;
            border-radius: 17px;
          }

          .it-hero-image-label {
            left: 13px;
            bottom: 13px;
            font-size: 8px;
          }

          .it-status-card {
            left: 10px;
            right: 10px;

            gap: 8px;
            padding: 10px;
            border-radius: 11px;
          }

          .it-status-icon {
            width: 34px;
            height: 34px;
            border-radius: 8px;
          }

          .it-status-title {
            font-size: 10.5px;
          }

          .it-status-description {
            font-size: 8px;
          }

          .it-status-badge {
            padding: 5px 7px;
            font-size: 7px;
          }
        }

        /* ================= 450px ================= */

        @media (max-width: 450px) {
          .it-hero-container {
            padding: 42px 14px 52px;
          }

          .it-hero-heading {
            font-size: 27px;
            letter-spacing: -0.5px;
          }

          .it-hero-description {
            font-size: 11.5px;
          }

          .it-hero-image-wrapper {
            height: 300px;
            border-radius: 15px;
          }

          .it-status-card {
            left: 7px;
            right: 7px;
          }

          .it-status-description {
            font-size: 7.5px;
          }

          .it-status-badge {
            display: none;
          }
        }

        /* ================= 360px ================= */

        @media (max-width: 360px) {
          .it-hero-container {
            padding: 36px 11px 45px;
          }

          .it-hero-heading {
            font-size: 24px;
          }

          .it-hero-description {
            font-size: 11px;
          }

          .it-hero-image-wrapper {
            height: 260px;
          }

          .it-status-card {
            padding: 9px;
          }

          .it-status-icon {
            width: 31px;
            height: 31px;
          }

          .it-status-title {
            font-size: 9.5px;
          }

          .it-status-description {
            font-size: 7px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .it-hero-button,
          .it-hero-image {
            transition: none;
          }

          .it-hero-button:hover {
            transform: none;
          }

          .it-hero-image-wrapper:hover .it-hero-image {
            transform: none;
          }
        }
      `}</style>

      <section className="it-hero-section">
        <div className="it-hero-container">

          {/* ================= LEFT CONTENT ================= */}

          <div className="it-hero-content">

            <span className="it-hero-badge">
              <span className="it-hero-badge-dot" />
              INFORMATION TECHNOLOGY
            </span>

            <h1 className="it-hero-heading">
              Technology Solutions Designed Around Your Business
            </h1>

            <p className="it-hero-description">
              Technology plays an important role in how businesses operate,
              communicate and grow. From software applications and cloud
              infrastructure to cybersecurity and digital platforms,
              organizations need technology that supports their business
              requirements and evolving needs.
            </p>

            <p className="it-hero-description">
              TechTorch Solutions brings together technology consulting,
              software engineering, cloud infrastructure, cybersecurity,
              artificial intelligence, software development and technology
              support to help businesses build and improve their digital
              environment.
            </p>

            {/* Buttons */}
            <div className="it-hero-actions">

              <button
                type="button"
                className="it-hero-button it-hero-primary"
              >
                Talk to Our Experts
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="it-hero-button it-hero-secondary"
                onClick={() => navigate("/it-get-in-touch")}
              >
                Get in Touch
                <ArrowRight size={15} />
              </button>

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="it-hero-visual">

            <div className="it-hero-image-wrapper">

              <img
                src="/ITHero.png"
                alt="Information technology team reviewing business architecture"
                className="it-hero-image"
              />

              <div className="it-hero-image-overlay" />

              <span className="it-hero-image-label">
                INFORMATION TECHNOLOGY
              </span>

            </div>

            {/* Floating Status Card */}
            <div className="it-status-card">

              <span className="it-status-icon">
                <Share2 size={16} />
              </span>

              <div className="it-status-content">
                <p className="it-status-title">
                  Enterprise Ops Command Center
                </p>

                <p className="it-status-description">
                  Cloud Architecture · Real-time Telemetry
                </p>
              </div>

              <span className="it-status-badge">
                <span className="it-status-badge-dot" />
                Verified Architecture
              </span>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}