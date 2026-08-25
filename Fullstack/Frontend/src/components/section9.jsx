import React from "react";

const COLORS = {
  maroon: "#7A1350",
  white: "#FFFFFF",
};

export default function CtaSection({
  backgroundImage = "/sec9.png",
}) {
  return (
    <section className="cta-section">
      <style>{`
        /* =========================
           MAIN SECTION
        ========================== */

        .cta-section {
          position: relative;
          width: 100%;
          min-height: 560px;

          border-radius: 10px;
          overflow: hidden;

          display: flex;
          align-items: center;

          font-family: "Plus Jakarta Sans", sans-serif;
        }


        /* =========================
           BACKGROUND IMAGE
        ========================== */

        .cta-bg {
          position: absolute;
          inset: 0;

          background-image: url("${backgroundImage}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }


        /* =========================
           OVERLAY
        ========================== */

        .cta-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,0.72) 0%,
              rgba(0,0,0,0.45) 45%,
              rgba(0,0,0,0.15) 75%,
              rgba(0,0,0,0) 100%
            );
        }


        /* =========================
           CONTENT
        ========================== */

        .cta-content {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 640px;

          padding: 0 64px;
        }


        /* =========================
           HEADING
        ========================== */

        .cta-title {
          margin: 0 0 24px;

          font-size: 45px;
          line-height: 1.2;
          font-weight: 800;

          color: ${COLORS.white};

          letter-spacing: -0.5px;
        }


        /* =========================
           DESCRIPTION
        ========================== */

        .cta-description {
          max-width: 480px;

          margin: 0 0 40px;

          font-size: 17px;
          line-height: 1.6;

          color: rgba(255,255,255,0.9);
        }


        /* =========================
           BUTTON
        ========================== */

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          background: ${COLORS.white};
          color: ${COLORS.maroon};

          font-weight: 700;
          font-size: 16px;

          padding: 14px 24px;

          border-radius: 10px;

          text-decoration: none;

          width: fit-content;

          margin-top: 30px;

          transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px rgba(0,0,0,0.25);
        }

        .cta-button svg {
          flex-shrink: 0;

          transition:
            transform 0.2s ease;
        }

        .cta-button:hover svg {
          transform: translateX(3px);
        }


        /* =========================
           TABLET
           768px - 1023px
        ========================== */

        @media (max-width: 1023px) {

          .cta-section {
            min-height: 500px;
          }

          .cta-content {
            max-width: 580px;
            padding: 0 48px;
          }

          .cta-title {
            font-size: 40px;
            line-height: 1.18;
          }

          .cta-description {
            font-size: 16px;
            max-width: 440px;
          }

          .cta-button {
            font-size: 15px;
            padding: 15px 24px;
          }
        }


        /* =========================
           MOBILE
           Below 767px
        ========================== */

        @media (max-width: 767px) {

          .cta-section {
            min-height: 520px;

            border-radius: 8px;

            align-items: flex-end;
          }

          .cta-bg {
            background-position: center;
          }

          .cta-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,0.15) 0%,
                rgba(0,0,0,0.35) 35%,
                rgba(0,0,0,0.72) 70%,
                rgba(0,0,0,0.85) 100%
              );
          }

          .cta-content {
            max-width: 100%;

            padding:
              40px
              24px
              42px;
          }

          .cta-title {
            font-size: 32px;
            line-height: 1.2;

            letter-spacing: -0.3px;

            margin-bottom: 18px;
          }

          .cta-description {
            max-width: 100%;

            font-size: 15px;
            line-height: 1.55;

            margin-bottom: 24px;
          }

          .cta-button {
            width: fit-content;

            font-size: 14px;

            padding:
              14px
              20px;

            margin-top: 18px;

            border-radius: 8px;
          }

          .cta-button svg {
            width: 17px;
            height: 17px;
          }
        }


        /* =========================
           SMALL MOBILE
           Below 480px
        ========================== */

        @media (max-width: 479px) {

          .cta-section {
            min-height: 500px;
          }

          .cta-content {
            padding:
              32px
              18px
              30px;
          }

          .cta-title {
            font-size: 28px;
            line-height: 1.2;

            margin-bottom: 16px;
          }

          .cta-description {
            font-size: 14px;
            line-height: 1.55;

            margin-bottom: 20px;
          }

          .cta-description br {
            display: none;
          }

          .cta-button {
            width: 100%;

            padding:
              14px
              18px;

            font-size: 14px;
          }
        }


        /* =========================
           VERY SMALL DEVICES
           Below 360px
        ========================== */

        @media (max-width: 359px) {

          .cta-section {
            min-height: 470px;
          }

          .cta-content {
            padding:
              28px
              16px
              26px;
          }

          .cta-title {
            font-size: 25px;
          }

          .cta-description {
            font-size: 13.5px;
          }

          .cta-button {
            font-size: 13px;
          }
        }


        /* =========================
           REDUCED MOTION
        ========================== */

        @media (prefers-reduced-motion: reduce) {

          .cta-button,
          .cta-button svg {
            transition: none;
          }
        }
      `}</style>

      {/* Background */}
      <div className="cta-bg" />

      {/* Overlay */}
      <div className="cta-overlay" />

      {/* Content */}
      <div className="cta-content">

        <h2 className="cta-title">
          Let&rsquo;s build something great together.
        </h2>

        <p className="cta-description">
          Have an idea, a challenge, or a vision?
          <br />
          Let&rsquo;s talk about how technology can help bring it to life.
        </p>

        <a
          href="#contact"
          className="cta-button"
        >
          Start a conversation

          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
            />

            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

      </div>
    </section>
  );
}