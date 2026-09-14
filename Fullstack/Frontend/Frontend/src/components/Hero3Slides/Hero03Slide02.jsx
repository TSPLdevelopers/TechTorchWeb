import React from "react";

export default function SoftwareThatWorks() {
  return (
    <section
      className="software-works-section"
      style={{
        background: "#f7f4ef",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <div className="software-works-container">
        <div className="software-works-grid">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="software-works-content">
            {/* HEADING */}

            <h1 className="software-works-heading">
              Software That Works
              <br />
              For <span>Your Business</span>
            </h1>

            {/* FIRST PARAGRAPH */}

            <p>
              Every organization has different processes, priorities and
              challenges. Yet many businesses still rely on software that
              doesn't fully fit the way their teams work. We take a different
              approach.
            </p>

            {/* SECOND PARAGRAPH */}

            <p>
              At TechTorch, we start by understanding your business and the
              problem you want to solve. We look at your existing processes,
              systems and user needs before defining the right solution.
            </p>

            {/* THIRD PARAGRAPH */}

            <p>
              That could mean building a new application, connecting systems
              that currently operate separately, or modernizing an existing
              platform.
            </p>

            {/* FOURTH PARAGRAPH */}

            <p>
              The technology is important, but the business outcome comes
              first.
            </p>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <div className="software-works-right">
            {/* IMAGE */}

            <div className="software-works-image">
              <img
                src="/Slide3.2.png"
                alt="Business team working together"
              />
            </div>

            {/* HIGHLIGHT TEXT */}

            <p className="software-works-highlight">
              We build software to make your business
              <br className="desktop-break" />
              work better—not simply to add another
              <br className="desktop-break" />
              system.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* =====================================================
           SECTION
        ====================================================== */

        .software-works-section {
          width: 100%;
          box-sizing: border-box;
        }

        /* =====================================================
           CONTAINER
        ====================================================== */

        .software-works-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 45px 80px;
          box-sizing: border-box;
        }

        /* =====================================================
           GRID
        ====================================================== */

        .software-works-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 70px;
          align-items: start;
        }

        /* =====================================================
           LEFT CONTENT
        ====================================================== */

        .software-works-content {
          min-width: 0;
          padding-top: 10px;
          transform: translateX(25px);
        }

        /* =====================================================
           HEADING
        ====================================================== */

        .software-works-heading {
          margin: 0;
          max-width: 700px;

          font-size: 48px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -1.8px;

          color: #111111;
        }

        .software-works-heading span {
          color: #850052;
        }

        /* =====================================================
           PARAGRAPHS
        ====================================================== */

        .software-works-content > p {
          max-width: 680px;
          margin: 0;
          margin-top: 28px;

          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.65;

          color: #292929;
        }

        .software-works-content > p:first-of-type {
          margin-top: 40px;
        }

        /* =====================================================
           RIGHT CONTENT
        ====================================================== */

        .software-works-right {
          min-width: 0;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          padding-top: 0;
        }

        /* =====================================================
           IMAGE
        ====================================================== */

        .software-works-image {
          width: 100%;
          max-width: 520px;

          border-radius: 20px;
          overflow: hidden;
        }

        .software-works-image img {
          width: 100%;
          height: auto;
          display: block;

          object-fit: contain;
        }

        /* =====================================================
           HIGHLIGHT TEXT
        ====================================================== */

        .software-works-highlight {
          width: 100%;
          max-width: 520px;

          margin: 38px 0 0;

          font-size: 21px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.4px;

          color: #850052;
        }

        /* =====================================================
           LARGE LAPTOP
        ====================================================== */

        @media (max-width: 1200px) {
          .software-works-container {
            padding: 45px 55px;
          }

          .software-works-grid {
            gap: 50px;
          }

          .software-works-content {
            transform: translateX(15px);
          }

          .software-works-heading {
            font-size: 42px;
          }

          .software-works-image {
            max-width: 480px;
          }

          .software-works-highlight {
            font-size: 20px;
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ====================================================== */

        @media (max-width: 1000px) {
          .software-works-container {
            padding: 40px 40px;
          }

          .software-works-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr);
            gap: 35px;
          }

          .software-works-content {
            transform: translateX(8px);
          }

          .software-works-heading {
            font-size: 38px;
          }

          .software-works-content > p {
            font-size: 15.5px;
            line-height: 1.6;
          }

          .software-works-image {
            max-width: 100%;
          }

          .software-works-highlight {
            margin-top: 28px;
            font-size: 18px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 768px) {
          .software-works-container {
            padding: 45px 30px;
          }

          .software-works-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .software-works-content {
            transform: translateX(0);
            padding-top: 0;
          }

          .software-works-heading {
            font-size: 36px;
            line-height: 1.12;
          }

          .software-works-content > p {
            max-width: 100%;
            font-size: 16px;
          }

          .software-works-right {
            align-items: center;
            width: 100%;
          }

          .software-works-image {
            width: 100%;
            max-width: 600px;
          }

          .software-works-highlight {
            max-width: 600px;
            font-size: 20px;
            margin-top: 28px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 600px) {
          .software-works-container {
            padding: 40px 20px;
          }

          .software-works-grid {
            gap: 38px;
          }

          .software-works-heading {
            font-size: 30px;
            line-height: 1.15;
            letter-spacing: -1px;
          }

          .software-works-content > p {
            margin-top: 20px;

            font-size: 15px;
            line-height: 1.6;
          }

          .software-works-content > p:first-of-type {
            margin-top: 28px;
          }

          .software-works-image {
            border-radius: 14px;
          }

          .software-works-highlight {
            margin-top: 24px;

            font-size: 17px;
            line-height: 1.4;
          }

          .desktop-break {
            display: none;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 380px) {
          .software-works-container {
            padding: 35px 16px;
          }

          .software-works-heading {
            font-size: 27px;
          }

          .software-works-content > p {
            font-size: 14px;
          }

          .software-works-highlight {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}