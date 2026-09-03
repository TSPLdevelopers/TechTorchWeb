import React from "react";

import backgroundImage from "/hero5slide1.png";

const MAROON = "#7a1338";

export default function TorchXSuiteSection() {
  return (
    <section className="torchx-suite-section">
      {/* ================= BACKGROUND OVERLAY ================= */}

      <div className="torchx-overlay" />

      {/* ================= CONTENT ================= */}

      <div className="torchx-content">
        {/* HEADING */}

        <h1>
          Everything Your Business Needs,
          <br />
          <span>Working Together</span>
        </h1>

        {/* FIRST PARAGRAPH */}

        <p className="torchx-paragraph paragraph-one">
          TorchX Suite brings your essential business functions together in
          one connected platform, helping teams manage people, customers,
          finance, payroll and inventory with greater clarity and control.
        </p>

        {/* SECOND PARAGRAPH */}

        <p className="torchx-paragraph paragraph-two">
          From everyday operations to business-wide decision-making, TorchX
          Suite gives your organization a more connected way to work,
          collaborate and grow.
        </p>

        {/* BUTTON */}

        <a href="#" className="torchx-button">
          Explore TorchX Suite →
        </a>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .torchx-suite-section {
          position: relative;
          width: 100%;
          min-height: 650px;

          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          font-family: "Plus Jakarta Sans", "Segoe UI", Arial, sans-serif;

          display: flex;
          align-items: center;

          overflow: hidden;
          box-sizing: border-box;
        }

        /* ================= OVERLAY ================= */

        .torchx-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,0.94) 0%,
              rgba(255,255,255,0.80) 28%,
              rgba(255,255,255,0.30) 52%,
              rgba(255,255,255,0) 72%
            );

          pointer-events: none;
        }

        /* ================= CONTENT ================= */

        .torchx-content {
          position: relative;
          z-index: 1;

          width: 100%;
          max-width: 620px;

          padding: 60px 80px;

          box-sizing: border-box;
        }

        /* ================= HEADING ================= */

        .torchx-content h1 {
          font-size: 34px;
          line-height: 1.3;
          font-weight: 700;

          color: #1a1a1a;

          margin: 0 0 22px;

          white-space: nowrap;

          transform: translateY(-70px);
        }

        .torchx-content h1 span {
          color: ${MAROON};
        }

        /* ================= PARAGRAPHS ================= */

        .torchx-paragraph {
          font-size: 15px;
          line-height: 1.7;

          color: #3a3a3a;

          margin-left: 0;
          margin-right: 0;
        }

        .paragraph-one {
          margin-top: 0;
          margin-bottom: 20px;

          transform: translateY(-35px);
        }

        .paragraph-two {
          margin-top: 0;
          margin-bottom: 32px;

          transform: translateY(-25px);
        }

        /* ================= BUTTON ================= */

        .torchx-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: ${MAROON};
          color: #ffffff;

          font-size: 15px;
          font-weight: 600;

          padding: 13px 26px;

          border-radius: 6px;

          text-decoration: none;

          margin-top: 40px;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .torchx-button:hover {
          background: #5e0d2a;
          transform: translateY(-2px);
        }

        /* ================= LARGE LAPTOP ================= */

        @media (max-width: 1200px) {
          .torchx-suite-section {
            min-height: 600px;
            background-position: 58% center;
          }

          .torchx-content {
            max-width: 590px;
            padding: 55px 65px;
          }

          .torchx-content h1 {
            font-size: 32px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .torchx-suite-section {
            min-height: 560px;
            background-position: 62% center;
          }

          .torchx-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255,255,255,0.95) 0%,
                rgba(255,255,255,0.85) 42%,
                rgba(255,255,255,0.40) 65%,
                rgba(255,255,255,0.05) 100%
              );
          }

          .torchx-content {
            max-width: 560px;
            padding: 50px 45px;
          }

          .torchx-content h1 {
            font-size: 30px;
            white-space: normal;

            transform: translateY(-45px);
          }

          .torchx-paragraph {
            font-size: 15px;
          }

          .paragraph-one {
            transform: translateY(-25px);
          }

          .paragraph-two {
            transform: translateY(-18px);
          }

          .torchx-button {
            margin-top: 28px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .torchx-suite-section {
            min-height: 620px;

            align-items: flex-start;

            background-position: 65% center;
          }

          .torchx-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255,255,255,0.96) 0%,
                rgba(255,255,255,0.90) 55%,
                rgba(255,255,255,0.45) 100%
              );
          }

          .torchx-content {
            max-width: 100%;

            padding: 60px 24px 45px;
          }

          .torchx-content h1 {
            font-size: 27px;
            line-height: 1.28;

            white-space: normal;

            margin-bottom: 18px;

            transform: translateY(0);
          }

          .torchx-paragraph {
            font-size: 14px;
            line-height: 1.65;
          }

          .paragraph-one {
            margin-bottom: 18px;
            transform: translateY(0);
          }

          .paragraph-two {
            margin-bottom: 25px;
            transform: translateY(0);
          }

          .torchx-button {
            margin-top: 20px;

            padding: 12px 22px;

            font-size: 14px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 380px) {
          .torchx-suite-section {
            min-height: 600px;
          }

          .torchx-content {
            padding: 50px 18px 40px;
          }

          .torchx-content h1 {
            font-size: 24px;
          }

          .torchx-paragraph {
            font-size: 13.5px;
          }

          .torchx-button {
            padding: 11px 20px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}