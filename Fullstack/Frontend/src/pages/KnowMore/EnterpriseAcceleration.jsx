import React from "react";

const MAROON = "#a50050";

export default function EnterpriseAcceleration() {
  return (
    <section className="enterprise-hero">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="enterprise-hero-bg" />

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}
      <div className="enterprise-hero-overlay" />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="enterprise-hero-content">

        {/* BADGE */}
        <div className="enterprise-badge">
          <span className="enterprise-badge-dot"></span>
          <span>ENTERPRISE ACCELERATION</span>
        </div>

        {/* HEADING */}
        <h1>
          Innovate at Speed,
          <br />
          <span>Scale with Confidence.</span>
        </h1>

        {/* DESCRIPTION */}
        <p>
          Architecting digital dominance through high-performance engineering
          <br />
          and actionable AI. TechTorch provides the foundational precision
          <br />
          required for enterprise resilience in a hyper-connected era.
        </p>

        {/* BUTTON */}
        <a href="#" className="enterprise-button">
          <span>Explore Solutions</span>
          <span className="enterprise-arrow">→</span>
        </a>

      </div>

      {/* =====================================================
          BOTTOM WHITE EFFECT
      ===================================================== */}
      <div className="enterprise-bottom-fade" />

      <style>{`

        /* =====================================================
           RESET
        ===================================================== */

        .enterprise-hero,
        .enterprise-hero * {
          box-sizing: border-box;
        }

        .enterprise-hero h1,
        .enterprise-hero p {
          overflow-wrap: break-word;
          word-wrap: break-word;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .enterprise-hero {
          position: relative;

          width: 100%;
          min-height: 660px;

          margin: 0;
          padding: 0;

          overflow: hidden;

          background: #111111;
        }


        /* =====================================================
           BACKGROUND IMAGE
        ===================================================== */

        .enterprise-hero-bg {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          background-image: url("/Enterprise Acceleration.png");

          background-repeat: no-repeat;

          background-size: 100% 100%;

          background-position: center center;

          z-index: 0;
        }


        /* =====================================================
           DARK OVERLAY
        ===================================================== */

        .enterprise-hero-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(5, 15, 30, 0.92) 0%,
              rgba(5, 15, 30, 0.82) 28%,
              rgba(5, 15, 30, 0.52) 58%,
              rgba(5, 15, 30, 0.20) 100%
            );
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .enterprise-hero-content {
          position: relative;

          z-index: 3;

          width: 100%;
          max-width: 1400px;

          min-height: 660px;

          margin: 0 auto;

          padding: 65px 50px 130px;

          display: flex;

          flex-direction: column;

          align-items: flex-start;

          justify-content: flex-start;
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .enterprise-badge {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          max-width: 100%;

          padding: 10px 18px;

          border: 1px solid rgba(255, 255, 255, 0.35);

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.14);

          backdrop-filter: blur(8px);

          -webkit-backdrop-filter: blur(8px);

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 600;

          letter-spacing: 1.5px;

          white-space: nowrap;
        }


        .enterprise-badge-dot {
          width: 8px;
          height: 8px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #ffd3df;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .enterprise-hero-content h1 {
          margin: 55px 0 0;

          max-width: 900px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 50px;

          line-height: 1.08;

          font-weight: 600;

          letter-spacing: -2px;

          color: #ffffff;
        }


        .enterprise-hero-content h1 span {
          color: #ffd0dc;
        }


        /* =====================================================
           PARAGRAPH
        ===================================================== */

        .enterprise-hero-content p {
          width: 100%;

          max-width: 820px;

          margin: 35px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 16px;

          line-height: 1.6;

          font-weight: 300;

          color: rgba(255, 255, 255, 0.88);
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .enterprise-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 12px;

          min-width: 200px;

          max-width: 100%;

          /* BUTTON THODA NICHE */
          margin-top: 52px;

          padding: 10px 15px;

          /* OLD HOVER COLOR AS NORMAL */
          background: #83003f;

          color: #ffffff;

          border-radius: 0;

          font-family: "Inter", sans-serif;

          font-size: 16px;

          /* LIGHTER BUTTON TEXT */
          font-weight: 400;

          text-decoration: none;

          white-space: nowrap;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }


        .enterprise-button:hover {
          /* OLD ORIGINAL COLOR AS HOVER */
          background: ${MAROON};

          transform: translateY(-2px);
        }


        .enterprise-arrow {
          font-size: 23px;

          line-height: 1;
        }


        /* =====================================================
           BOTTOM WHITE EFFECT
        ===================================================== */

        .enterprise-bottom-fade {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 115px;

          z-index: 2;

          pointer-events: none;

          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.08) 30%,
            rgba(255, 255, 255, 0.65) 78%,
            #ffffff 100%
          );
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1201px) {

          .enterprise-hero-content {
            padding-left: 50px;
            padding-right: 70px;
          }
        }


        /* =====================================================
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .enterprise-hero {
            min-height: 620px;
          }

          .enterprise-hero-content {
            min-height: 620px;

            padding: 60px 40px 120px;
          }

          .enterprise-hero-content h1 {
            margin-top: 48px;

            max-width: 850px;

            font-size: 46px;
          }

          .enterprise-hero-content p {
            max-width: 700px;

            margin-top: 30px;

            font-size: 17px;
          }

          .enterprise-button {
            margin-top: 45px;
          }
        }


        /* =====================================================
           MEDIUM DEVICES
        ===================================================== */

        @media (max-width: 1023px) {

          .enterprise-hero {
            min-height: 600px;
          }

          .enterprise-hero-content {
            min-height: 600px;

            padding: 55px 30px 115px;
          }

          .enterprise-hero-content h1 {
            margin-top: 42px;

            max-width: 720px;

            font-size: 42px;

            line-height: 1.1;
          }

          .enterprise-hero-content p {
            max-width: 650px;

            margin-top: 27px;

            font-size: 16px;
          }

          .enterprise-button {
            margin-top: 42px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .enterprise-hero {
            min-height: 600px;
          }

          .enterprise-hero-bg {
            background-size: 100% 100%;

            background-position: center center;
          }

          .enterprise-hero-content {
            min-height: 600px;

            padding: 50px 30px 110px;
          }

          .enterprise-badge {
            padding: 9px 15px;

            font-size: 10px;
          }

          .enterprise-hero-content h1 {
            margin-top: 40px;

            max-width: 700px;

            font-size: 40px;

            letter-spacing: -1.5px;
          }

          .enterprise-hero-content p {
            max-width: 650px;

            margin-top: 25px;

            font-size: 16px;

            line-height: 1.6;
          }

          .enterprise-button {
            min-width: 190px;

            margin-top: 40px;

            padding: 12px 18px;

            font-size: 14px;
          }

          .enterprise-bottom-fade {
            height: 100px;
          }
        }


        /* =====================================================
           LARGE MOBILE / SMALL TABLET
        ===================================================== */

        @media (max-width: 767px) {

          .enterprise-hero {
            min-height: 630px;
          }

          .enterprise-hero-content {
            min-height: 630px;

            padding: 45px 24px 105px;
          }

          .enterprise-hero-content h1 {
            max-width: 100%;

            font-size: 36px;

            line-height: 1.12;
          }

          .enterprise-hero-content p {
            max-width: 100%;

            font-size: 15px;
          }

          .enterprise-button {
            min-width: 180px;

            margin-top: 38px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .enterprise-hero {
            min-height: 650px;
          }

          /* COMPACT MOBILE IMAGE */
          .enterprise-hero-bg {
            background-size: auto 100%;

            background-position: 75% center;
          }

          .enterprise-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(5, 15, 30, 0.92) 0%,
                rgba(5, 15, 30, 0.82) 35%,
                rgba(5, 15, 30, 0.52) 70%,
                rgba(5, 15, 30, 0.20) 100%
              );
          }

          .enterprise-hero-content {
            min-height: 650px;

            padding: 40px 18px 100px;
          }

          .enterprise-badge {
            padding: 8px 13px;

            font-size: 9px;

            letter-spacing: 1.1px;

            gap: 8px;
          }

          .enterprise-badge-dot {
            width: 7px;
            height: 7px;
          }

          .enterprise-hero-content h1 {
            margin-top: 32px;

            max-width: 100%;

            font-size: 32px;

            line-height: 1.12;

            letter-spacing: -1px;
          }

          .enterprise-hero-content p {
            max-width: 100%;

            margin-top: 22px;

            font-size: 14px;

            line-height: 1.6;
          }

          .enterprise-button {
            min-width: 175px;

            margin-top: 36px;

            padding: 11px 16px;

            font-size: 13px;
          }

          .enterprise-arrow {
            font-size: 19px;
          }

          .enterprise-bottom-fade {
            height: 85px;
          }
        }


        /* =====================================================
           481px - 600px
        ===================================================== */

        @media (min-width: 481px) and (max-width: 600px) {

          .enterprise-hero-bg {
            background-size: auto 100%;

            background-position: 78% center;
          }

          .enterprise-hero-content {
            padding-left: 22px;
            padding-right: 28px;
          }

          .enterprise-hero-content h1 {
            font-size: 34px;
          }

          .enterprise-hero-content p {
            font-size: 15px;
          }
        }


        /* =====================================================
           381px - 480px
        ===================================================== */

        @media (max-width: 480px) {

          .enterprise-hero {
            min-height: 640px;
          }

          .enterprise-hero-bg {
            background-size: auto 100%;

            background-position: 78% center;
          }

          .enterprise-hero-content {
            min-height: 640px;

            padding: 38px 18px 95px;
          }

          .enterprise-hero-content h1 {
            font-size: 31px;

            line-height: 1.12;
          }

          .enterprise-hero-content p {
            font-size: 14px;

            line-height: 1.6;
          }

          .enterprise-button {
            min-width: 170px;

            margin-top: 34px;
          }
        }


        /* =====================================================
           380px AND BELOW
        ===================================================== */

        @media (max-width: 380px) {

          .enterprise-hero {
            min-height: 620px;
          }

          .enterprise-hero-bg {
            background-size: auto 100%;

            background-position: 82% center;
          }

          .enterprise-hero-content {
            min-height: 620px;

            padding: 34px 16px 90px;
          }

          .enterprise-badge {
            padding: 8px 11px;

            font-size: 8px;

            letter-spacing: 1px;
          }

          .enterprise-hero-content h1 {
            margin-top: 28px;

            font-size: 29px;

            line-height: 1.12;
          }

          .enterprise-hero-content p {
            margin-top: 20px;

            font-size: 13px;

            line-height: 1.6;
          }

          .enterprise-button {
            margin-top: 32px;

            min-width: 165px;

            padding: 10px 14px;

            font-size: 12px;
          }

          .enterprise-arrow {
            font-size: 18px;
          }

          .enterprise-bottom-fade {
            height: 75px;
          }
        }


        /* =====================================================
           320px AND BELOW
        ===================================================== */

        @media (max-width: 320px) {

          .enterprise-hero {
            min-height: 610px;
          }

          .enterprise-hero-bg {
            background-size: auto 100%;

            background-position: 84% center;
          }

          .enterprise-hero-content {
            min-height: 610px;

            padding-left: 14px;
            padding-right: 14px;
          }

          .enterprise-badge {
            font-size: 7.5px;

            letter-spacing: 0.8px;

            gap: 7px;
          }

          .enterprise-hero-content h1 {
            font-size: 26px;

            letter-spacing: -0.8px;
          }

          .enterprise-hero-content p {
            font-size: 12px;
          }

          .enterprise-button {
            min-width: 155px;

            margin-top: 30px;

            font-size: 11px;
          }
        }


        /* =====================================================
           SHORT SCREEN SAFETY
        ===================================================== */

        @media (max-height: 700px) and (min-width: 768px) {

          .enterprise-hero {
            min-height: 600px;
          }

          .enterprise-hero-content {
            min-height: 600px;

            padding-top: 48px;
            padding-bottom: 110px;
          }

          .enterprise-hero-content h1 {
            margin-top: 40px;
          }

          .enterprise-hero-content p {
            margin-top: 25px;
          }

          .enterprise-button {
            margin-top: 38px;
          }
        }

      `}</style>
    </section>
  );
}