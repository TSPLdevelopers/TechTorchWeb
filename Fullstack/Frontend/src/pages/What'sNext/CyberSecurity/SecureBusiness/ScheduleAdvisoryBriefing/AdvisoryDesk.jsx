import React from "react";

export default function AdvisoryDesk() {
  return (
    <section className="advisory-desk-hero">

      {/* CENTER PURPLE GLOW */}
      <div className="advisory-purple-glow"></div>

      {/* UPPER CORNER GLASS */}
      <div className="hero-glass-left"></div>
      <div className="hero-glass-right"></div>

      <div className="advisory-desk-content">

        {/* CONFIDENTIAL BADGE */}
        <div className="advisory-confidential-badge">
          <span className="confidential-dot"></span>

          <span>
            TECHTORCH ADVISORY DESK · CONFIDENTIAL BRIEFING
          </span>
        </div>

        {/* HEADING */}
        <h1 className="advisory-desk-title">
          Schedule Your Executive Security
          <br />
          Advisory Briefing
        </h1>

        {/* DESCRIPTION */}
        <p className="advisory-desk-description">
          A focused, 45-minute tactical consultation with TechTorch Principal
          <br className="desktop-break" />
          Cyber Architects and Practice Directors. Formulate your actionable 30-
          <br className="desktop-break" />
          60-90 day defense posture roadmap.
        </p>

        {/* PILLS */}
        <div className="advisory-desk-pills">

          <div className="advisory-desk-pill">
            <span className="advisory-pill-icon">◷</span>
            <span>45-Minute Timeboxed Consultation</span>
          </div>

          <div className="advisory-desk-pill">
            <span className="advisory-pill-icon">♢</span>
            <span>Zero-Data Retention Discovery</span>
          </div>

          <div className="advisory-desk-pill">
            <span className="advisory-pill-icon">▣</span>
            <span>C-Level 30-60-90 Playbook Included</span>
          </div>

          <div className="advisory-desk-pill">
            <span className="advisory-pill-icon">♙</span>
            <span>Bilateral MNDA Safeguarded</span>
          </div>

        </div>
      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           MAIN HERO
        ========================================= */

        .advisory-desk-hero {
          position: relative;
          width: 100%;
          height: 520px;
          min-height: 520px;
          overflow: hidden;

          display: flex;
          justify-content: center;
          align-items: flex-start;

          background:

            radial-gradient(
              ellipse 42% 48% at 0% 0%,
              #32182f 0%,
              #261526 32%,
              #171019 58%,
              transparent 78%
            ),

            radial-gradient(
              ellipse 42% 48% at 100% 0%,
              #32182f 0%,
              #261526 32%,
              #171019 58%,
              transparent 78%
            ),

            radial-gradient(
              ellipse 46% 52% at 0% 100%,
              #2d172b 0%,
              #211320 32%,
              #120d15 60%,
              transparent 80%
            ),

            radial-gradient(
              ellipse 46% 52% at 100% 100%,
              #2d172b 0%,
              #211320 32%,
              #120d15 60%,
              transparent 80%
            ),

            radial-gradient(
              ellipse 72% 86% at 50% 0%,
              #9a6685 0%,
              #8b5a78 13%,
              #754b66 28%,
              #58394d 45%,
              #352431 62%,
              #171219 80%,
              #07090d 100%
            );

          font-family: "Inter", sans-serif;
        }


        /* =========================================
           CENTER LIGHT PURPLE / MAUVE GLOW
        ========================================= */

        .advisory-purple-glow {
          position: absolute;

          top: -145px;
          left: 50%;

          width: 1250px;
          height: 650px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(174, 119, 151, 0.70) 0%,
              rgba(157, 103, 136, 0.60) 20%,
              rgba(132, 81, 112, 0.46) 40%,
              rgba(92, 57, 79, 0.28) 60%,
              rgba(45, 29, 40, 0.10) 74%,
              transparent 84%
            );

          filter: blur(55px);

          pointer-events: none;
          z-index: 1;
        }


        /* =========================================
           UPPER LEFT GLASS
        ========================================= */

        .hero-glass-left {
          position: absolute;

          top: -70px;
          left: -80px;

          width: 300px;
          height: 240px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.055);

          filter: blur(35px);

          pointer-events: none;
          z-index: 2;
        }


        /* =========================================
           UPPER RIGHT GLASS
        ========================================= */

        .hero-glass-right {
          position: absolute;

          top: -70px;
          right: -80px;

          width: 300px;
          height: 240px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.055);

          filter: blur(35px);

          pointer-events: none;
          z-index: 2;
        }


        /* =========================================
           CONTENT
        ========================================= */

        .advisory-desk-content {
          position: relative;

          z-index: 5;

          width: 100%;
          max-width: 1200px;

          /* SHIFTED FURTHER DOWN */
          padding-top: 68px;

          text-align: center;
        }


        /* =========================================
           CONFIDENTIAL BADGE
        ========================================= */

        .advisory-confidential-badge {
          position: relative;

          z-index: 10;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          height: 36px;

          padding: 0 20px;

          border: 1px solid rgba(218, 153, 187, 0.35);

          border-radius: 25px;

          background: rgba(120, 55, 95, 0.28);

          color: #f2e5ed;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 1.4px;

          white-space: nowrap;

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 4px 18px rgba(50, 0, 35, 0.25);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }


        .confidential-dot {
          display: block;

          width: 9px;
          height: 9px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #e58ab5;

          box-shadow:
            0 0 8px rgba(229, 138, 181, 0.8);
        }


        /* =========================================
           HEADING
        ========================================= */

        .advisory-desk-title {
          position: relative;

          z-index: 5;

          margin: 38px 0 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 34px;

          line-height: 1.02;

          font-weight: 700;

          letter-spacing: 0px;
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .advisory-desk-description {
          position: relative;

          z-index: 5;

          margin: 27px auto 0;

          max-width: 900px;

          color: #eee6ec;

          font-size: 15px;

          line-height: 1.40;

          font-weight: 400;

          letter-spacing: -0.15px;
        }


        /* =========================================
           PILLS
        ========================================= */

        .advisory-desk-pills {
          position: relative;

          z-index: 5;

          width: 100%;

          max-width: 700px;

          margin: 45px auto 0;

          display: flex;

          justify-content: center;

          align-items: center;

          flex-wrap: wrap;

          column-gap: 20px;

          row-gap: 14px;
        }


        .advisory-desk-pill {
          height: 36px;

          padding: 0 15px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 9px;

          border-radius: 22px;

          border: 1px solid rgba(207, 145, 179, 0.22);

          background: rgba(110, 55, 86, 0.18);

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.055),
            0 4px 15px rgba(25, 0, 18, 0.12);

          color: #e3d9e0;

          font-size: 12px;

          font-weight: 500;

          white-space: nowrap;

          backdrop-filter: blur(8px);

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }


        .advisory-desk-pill:hover {
          background: rgba(126, 57, 96, 0.30);

          border-color: rgba(210, 133, 174, 0.38);

          transform: translateY(-2px);
        }


        .advisory-pill-icon {
          color: #dc87b2;

          font-size: 17px;

          line-height: 1;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .advisory-desk-hero {
            height: 500px;
            min-height: 500px;
          }

          .advisory-desk-content {
            padding: 68px 25px 0;
          }

          .advisory-desk-title {
            font-size: 53px;
            letter-spacing: -2px;
          }

          .advisory-desk-description {
            font-size: 18px;
            margin-top: 25px;
          }

          .advisory-desk-pills {
            margin-top: 42px;
          }

          .advisory-purple-glow {
            width: 950px;
            height: 550px;
          }

          .hero-glass-left,
          .hero-glass-right {
            width: 250px;
            height: 200px;
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .advisory-desk-hero {
            height: auto;
            min-height: 470px;
          }

          .advisory-desk-content {
            padding: 40px 18px 45px;
          }

          .advisory-confidential-badge {
            height: 36px;

            padding: 0 15px;

            font-size: 9px;

            letter-spacing: 0.8px;
          }

          .confidential-dot {
            width: 7px;
            height: 7px;
          }

          .advisory-desk-title {
            margin-top: 32px;

            font-size: 39px;

            line-height: 1.06;

            letter-spacing: -1.4px;
          }

          .advisory-desk-description {
            margin-top: 22px;

            font-size: 15px;

            line-height: 1.5;
          }

          .advisory-desk-description br {
            display: none;
          }

          .advisory-desk-pills {
            margin-top: 34px;

            gap: 9px;
          }

          .advisory-desk-pill {
            height: 35px;

            padding: 0 11px;

            font-size: 9px;

            gap: 6px;
          }

          .advisory-pill-icon {
            font-size: 13px;
          }

          .advisory-purple-glow {
            width: 750px;
            height: 480px;

            top: -110px;

            filter: blur(55px);
          }

          .hero-glass-left,
          .hero-glass-right {
            width: 190px;
            height: 160px;

            filter: blur(28px);
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 420px) {

          .advisory-desk-hero {
            min-height: 450px;
          }

          .advisory-desk-content {
            padding: 38px 12px 40px;
          }

          .advisory-confidential-badge {
            font-size: 8px;

            padding: 0 11px;

            letter-spacing: 0.5px;
          }

          .advisory-desk-title {
            font-size: 31px;

            letter-spacing: -1px;
          }

          .advisory-desk-description {
            font-size: 14px;
          }

          .advisory-desk-pills {
            max-width: 360px;
          }

          .advisory-desk-pill {
            font-size: 8px;

            padding: 0 9px;
          }

          .advisory-purple-glow {
            width: 600px;
            height: 430px;

            top: -90px;

            filter: blur(50px);
          }

          .hero-glass-left,
          .hero-glass-right {
            width: 150px;
            height: 130px;

            filter: blur(24px);
          }
        }

      `}</style>
    </section>
  );
}