import React from "react";

export default function PracticalIntelligence() {
  return (
    <section className="practical-intelligence-section">
      <div className="practical-intelligence-card">

        {/* ================= LEFT IMAGE ================= */}
        <div className="practical-image-wrap">
          <img
            src="/Practical Intelligence.png"
            alt="AI and Analytics"
            className="practical-image"
          />

          <div className="practical-image-overlay"></div>

          <div className="image-bottom-text">
            AI & ANALYTICS SUITE
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="practical-content">

          <div className="practical-label">
            <span className="practical-label-icon">♙</span>
            <span>PRACTICAL INTELLIGENCE</span>
          </div>

          <h2>
            AI Delivered Right:
            <br />
            Human-Centric &
            <br />
            Actionable
          </h2>

          <p className="practical-description">
            We demystify artificial intelligence. Moving beyond
            buzzwords, TechTorch implements pragmatic ML
            models that augment human capability. Through
            initiatives like TorchX Talent, we utilize predictive
            analytics and AI-driven matching to assemble high-
            performance engineering teams precisely calibrated
            for your specific architectural challenges.
          </p>

          <div className="practical-divider"></div>

          <div className="practical-stats">

            <div className="practical-stat">
              <strong>40%</strong>
              <span>FASTER ONBOARDING</span>
            </div>

            <div className="practical-stat">
              <strong>92%</strong>
              <span>MATCH PRECISION</span>
            </div>

          </div>

        </div>
      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =====================================================
           SECTION
        ===================================================== */

        .practical-intelligence-section {
          width: 100%;
          padding: 30px 20px;
          background: #ffffff;
        }


        /* =====================================================
           MAIN CARD
        ===================================================== */

        .practical-intelligence-card {
          width: 100%;
          max-width: 1320px;

          min-height: 570px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: 34% 66%;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid #eeeeee;

          border-radius: 16px;

          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.02);
        }


        /* =====================================================
           LEFT IMAGE
        ===================================================== */

        .practical-image-wrap {
          position: relative;

          width: 100%;
          height: 100%;

          min-height: 570px;

          overflow: hidden;

          background: #ffffff;
        }


        .practical-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: fill;

          object-position: center;

          background: #ffffff;
        }


        .practical-image-overlay {
          position: absolute;

          inset: 0;

          background: linear-gradient(
            to top,
            rgba(5, 12, 35, 0.45),
            transparent 45%
          );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE TEXT
        ===================================================== */

        .image-bottom-text {
          position: absolute;

          left: 50px;
          bottom: 48px;

          z-index: 2;

          color: #ffffff;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 0.3px;

          text-shadow:
            0 1px 4px rgba(0, 0, 0, 0.4);
        }


        .image-bottom-text::after {
          content: "";

          display: block;

          width: 22px;
          height: 2px;

          margin-top: 7px;

          background: #b00062;
        }


        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .practical-content {
          display: flex;

          flex-direction: column;

          justify-content: center;

          min-width: 0;

          /* CONTENT RIGHT SHIFTED */
          padding: 48px 45px 44px 85px;
        }


        /* =====================================================
           LABEL
        ===================================================== */

        .practical-label {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 20px;

          color: #8b1450;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 1.1px;
        }


        .practical-label-icon {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          font-size: 16px;

          line-height: 1;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .practical-content h2 {
          margin: 0;

          color: #07182f;

          font-family: "Plus Jakarta Sans";

          font-size: 40px;

          line-height: 1.18;

          font-weight: 700;

          letter-spacing: -2px;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .practical-description {
          max-width: 760px;

          margin: 20px 0 0;

          color: #5e5e5e;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 17px;

          line-height: 1.55;

          font-weight: 400;
        }


        /* =====================================================
           DIVIDER
        ===================================================== */

        .practical-divider {
          width: 100%;

          height: 1px;

          margin-top: 27px;

          background: #eadfe5;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .practical-stats {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 50px;

          margin-top: 17px;
        }


        .practical-stat {
          display: flex;

          flex-direction: column;
        }


        .practical-stat strong {
          color: #8b0047;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 38px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: -1px;
        }


        .practical-stat span {
          margin-top: 7px;

          color: #666666;

          font-size: 11px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: 0.4px;
        }


        /* =====================================================
           1100px
        ===================================================== */

        @media (max-width: 1100px) {

          .practical-intelligence-section {
            padding: 28px 18px;
          }


          .practical-intelligence-card {
            max-width: 1100px;

            min-height: 540px;

            grid-template-columns: 36% 64%;
          }


          .practical-image-wrap {
            min-height: 540px;
          }


          .practical-content {
            padding: 42px 35px 42px 60px;
          }


          .practical-content h2 {
            font-size: 42px;
          }


          .practical-description {
            font-size: 16px;
          }


          .image-bottom-text {
            left: 35px;
            bottom: 38px;
          }
        }


        /* =====================================================
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .practical-intelligence-card {
            min-height: 510px;

            grid-template-columns: 38% 62%;
          }


          .practical-image-wrap {
            min-height: 510px;
          }


          .practical-content {
            padding: 35px 25px 35px 45px;
          }


          .practical-label {
            margin-bottom: 15px;

            font-size: 11px;
          }


          .practical-content h2 {
            font-size: 35px;

            line-height: 1.15;

            letter-spacing: -1.4px;
          }


          .practical-description {
            margin-top: 15px;

            font-size: 15px;

            line-height: 1.5;
          }


          .practical-divider {
            margin-top: 20px;
          }


          .practical-stat strong {
            font-size: 31px;
          }
        }


        /* =====================================================
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .practical-intelligence-section {
            padding: 22px 14px;
          }


          .practical-intelligence-card {
            display: flex;

            flex-direction: column;

            min-height: auto;

            border-radius: 14px;
          }


          .practical-image-wrap {
            width: 100%;

            height: 320px;

            min-height: 320px;
          }


          .practical-image {
            width: 100%;
            height: 100%;

            object-fit: fill;
          }


          .image-bottom-text {
            left: 28px;

            bottom: 25px;

            font-size: 11px;
          }


          .practical-content {
            padding: 30px 24px;
          }


          .practical-label {
            margin-bottom: 15px;

            font-size: 10px;

            letter-spacing: 1px;
          }


          .practical-content h2 {
            font-size: 32px;

            line-height: 1.15;

            letter-spacing: -1.2px;
          }


          .practical-description {
            margin-top: 17px;

            font-size: 15px;

            line-height: 1.55;
          }


          .practical-stats {
            gap: 25px;
          }


          .practical-stat strong {
            font-size: 30px;
          }


          .practical-stat span {
            font-size: 10px;
          }
        }


        /* =====================================================
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .practical-intelligence-section {
            padding: 18px 10px;
          }


          .practical-image-wrap {
            height: 270px;

            min-height: 270px;
          }


          .practical-image {
            width: 100%;
            height: 100%;

            object-fit: fill;
          }


          .practical-content {
            padding: 24px 18px;
          }


          .practical-label {
            font-size: 9px;

            gap: 6px;
          }


          .practical-content h2 {
            font-size: 28px;

            line-height: 1.18;
          }


          .practical-description {
            font-size: 14px;

            line-height: 1.55;
          }


          .practical-divider {
            margin-top: 21px;
          }


          .practical-stats {
            gap: 18px;

            margin-top: 14px;
          }


          .practical-stat strong {
            font-size: 27px;
          }


          .practical-stat span {
            font-size: 9px;
          }
        }

      `}</style>
    </section>
  );
}