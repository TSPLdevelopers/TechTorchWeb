import React from "react";

export default function ConnectedBusinessSection() {
  return (
    <>
      <section className="connected-business-section">
        <div className="connected-business-container">
          {/* =====================================================
              LEFT — IMAGE
          ===================================================== */}

          <div className="connected-business-image-wrap">
            {/* Decorative offset panel */}

            <div className="connected-business-offset" />

            {/* Image */}

            <div className="connected-business-image-card">
              <img
                src="/platformhero2.png"
                alt="TechTorch headquarters building at dusk"
                className="connected-business-image"
              />
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ===================================================== */}

          <div className="connected-business-content">
            {/* Small Label */}

            <div className="connected-business-label">
              <span>Our Approach</span>

              <span className="connected-business-label-line" />
            </div>

            {/* Heading */}

            <h2 className="connected-business-heading">
              One Platform. Connected Business.
            </h2>

            {/* Paragraphs */}

            <div className="connected-business-paragraphs">
              <p>
                Running a business means managing people, customers, finances,
                operations and information—often across different systems.
              </p>

              <p>
                TechTorch brings these essential functions closer together
                through connected digital platforms designed around the way
                businesses actually work.
              </p>

              <p>
                Our platforms help organizations reduce complexity, improve
                collaboration and gain better visibility across their
                operations. Whether you are managing a growing business or a
                specialized institution, our solutions are built to make
                everyday work simpler and more connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           CONNECTED BUSINESS SECTION
        ===================================================== */

        .connected-business-section {
          width: 100%;
          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 75px;
          padding-bottom: 75px;

          background: #7a0e4a;
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .connected-business-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.15fr);

          align-items: center;

          gap: 70px;
        }

        /* =====================================================
           LEFT IMAGE
        ===================================================== */

        .connected-business-image-wrap {
          position: relative;

          width: 100%;
          max-width: 570px;

          margin: 0;
        }

        /* Decorative panel */

        .connected-business-offset {
          position: absolute;

          left: -12px;
          bottom: -12px;

          width: 100%;
          height: 100%;

          border-radius: 20px;

          background: rgba(255, 255, 255, 0.1);
        }

        /* Image card */

        .connected-business-image-card {
          position: relative;
          z-index: 2;

          width: 100%;
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;

          background: rgba(255, 255, 255, 0.04);

          box-shadow:
            0 25px 55px rgba(0, 0, 0, 0.2);
        }

        /* Image */

        .connected-business-image {
          display: block;

          width: 100%;
          aspect-ratio: 5 / 4;

          object-fit: cover;
          object-position: center;

          transition: transform 0.6s ease;
        }

        .connected-business-image-card:hover
          .connected-business-image {
          transform: scale(1.025);
        }

        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .connected-business-content {
          width: 100%;
          max-width: 700px;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .connected-business-label {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 16px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.3;

          color: rgba(255, 255, 255, 0.7);
        }

        .connected-business-label-line {
          width: 42px;
          height: 1px;

          background: rgba(255, 255, 255, 0.3);
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .connected-business-heading {
          max-width: 650px;

          margin: 0 0 22px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #ffffff;
        }

        /* =====================================================
           PARAGRAPHS
        ===================================================== */

        .connected-business-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;

          max-width: 680px;
        }

        .connected-business-paragraphs p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;

          color: rgba(255, 255, 255, 0.8);
        }

        /* =====================================================
           TABLET — 1200px
           Universal spacing: 40px
        ===================================================== */

        @media (max-width: 1200px) {
          .connected-business-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 65px;
            padding-bottom: 65px;
          }

          .connected-business-container {
            gap: 50px;
          }

          .connected-business-heading {
            font-size: 34px;
          }

          .connected-business-paragraphs p {
            font-size: 14px;
            line-height: 1.7;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .connected-business-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .connected-business-container {
            grid-template-columns: 1fr;

            gap: 42px;
          }

          .connected-business-image-wrap {
            max-width: 650px;
            margin: 0 auto;
          }

          .connected-business-content {
            max-width: 720px;
          }

          .connected-business-heading {
            font-size: 34px;
          }

          .connected-business-paragraphs {
            max-width: 700px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           Universal spacing: 24px
        ===================================================== */

        @media (max-width: 700px) {
          .connected-business-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .connected-business-container {
            gap: 34px;
          }

          .connected-business-image-wrap {
            max-width: 100%;
          }

          .connected-business-offset {
            left: -8px;
            bottom: -8px;

            border-radius: 16px;
          }

          .connected-business-image-card {
            border-radius: 16px;
          }

          .connected-business-image {
            aspect-ratio: 5 / 4;
          }

          .connected-business-label {
            gap: 10px;

            margin-bottom: 13px;

            font-size: 11px;
          }

          .connected-business-label-line {
            width: 35px;
          }

          .connected-business-heading {
            margin-bottom: 17px;

            font-size: 29px;
            line-height: 1.2;
          }

          .connected-business-paragraphs {
            gap: 13px;
          }

          .connected-business-paragraphs p {
            font-size: 13px;
            line-height: 1.7;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           Universal spacing: 16px
        ===================================================== */

        @media (max-width: 480px) {
          .connected-business-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .connected-business-container {
            gap: 28px;
          }

          .connected-business-offset {
            left: -6px;
            bottom: -6px;

            border-radius: 14px;
          }

          .connected-business-image-card {
            border-radius: 14px;
          }

          .connected-business-image {
            aspect-ratio: 5 / 4;
          }

          .connected-business-label {
            gap: 8px;

            margin-bottom: 11px;

            font-size: 9.5px;
          }

          .connected-business-label-line {
            width: 30px;
          }

          .connected-business-heading {
            margin-bottom: 15px;

            font-size: 25px;
            line-height: 1.2;
          }

          .connected-business-paragraphs {
            gap: 12px;
          }

          .connected-business-paragraphs p {
            font-size: 12px;
            line-height: 1.68;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .connected-business-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .connected-business-heading {
            font-size: 23px;
          }

          .connected-business-paragraphs p {
            font-size: 11.5px;
          }
        }
      `}</style>
    </>
  );
}