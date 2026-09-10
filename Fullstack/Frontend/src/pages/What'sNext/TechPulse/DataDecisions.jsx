import React from "react";

export default function DataDecisions() {
  return (
    <div className="data-decisions-page">

      {/* ================= HERO ================= */}
      <section className="data-decisions-hero">

        <img
          src="/DataDecisions.png"
          alt="Data and Decision Making"
          className="data-decisions-hero-image"
        />

        <div className="data-decisions-hero-overlay"></div>

        <div className="data-decisions-hero-content">

          <div className="data-decisions-eyebrow">
            <span></span>
            TECH PULSE · DATA & DECISIONS
          </div>

          <h1>
            MORE DATA DOESN'T MEAN BETTER
            <br />
            DECISIONS
          </h1>

          <h2>
            The value of data is not in how much you have. It's in how clearly
            you can use it.
          </h2>

          <p>
            Modern businesses generate information across finance, operations,
            customers, supply chains and everyday business processes. But more
            information does not automatically create better decisions.
          </p>

          <p>
            What matters is having the right information, in the right context,
            at the right time.
          </p>

          <p>
            TechTorch Solutions helps businesses connect technology, processes
            and information to create greater visibility, improve operational
            efficiency and support more informed business decisions.
          </p>

          <div className="data-decisions-buttons">

            <button className="data-decisions-primary-btn">
              Explore Digital Solutions
            </button>

            <button className="data-decisions-secondary-btn">
              Talk to Our Experts
            </button>

          </div>

        </div>

      </section>


      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }


        .data-decisions-page {
          width: 100%;
          background: #f7f8fa;
          color: #171717;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }


        /* ================= HERO ================= */

        .data-decisions-hero {
          position: relative;
          width: 100%;
          height: 500px;
          margin: 0;
          overflow: hidden;
          background: #101d32;
        }


        .data-decisions-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }


        .data-decisions-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(3, 8, 20, 0.88) 0%,
              rgba(5, 12, 28, 0.76) 40%,
              rgba(5, 13, 30, 0.48) 72%,
              rgba(4, 10, 22, 0.58) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.15),
              rgba(0, 0, 0, 0.5)
            );
        }


        .data-decisions-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          padding: 38px 6%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }


        .data-decisions-eyebrow {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          padding: 6px 11px;
          border: 1px solid rgba(183, 200, 228, 0.28);
          border-radius: 20px;
          background: rgba(85, 111, 153, 0.25);
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.7px;
        }


        .data-decisions-eyebrow span {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;
          border-radius: 50%;
          background: #f49ab9;
        }


        .data-decisions-hero h1 {
          max-width: 850px;
          margin: 0 0 12px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 31px;
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: -1.2px;
        }


        .data-decisions-hero h2 {
          max-width: 900px;
          margin: 0 0 17px;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 500;
        }


        .data-decisions-hero p {
          max-width: 850px;
          margin: 0 0 12px;
          color: rgba(235, 240, 248, 0.82);
          font-size: 11px;
          line-height: 1.5;
          font-weight: 400;
        }


        .data-decisions-buttons {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 17px;
        }


        .data-decisions-primary-btn,
        .data-decisions-secondary-btn {
          min-height: 40px;
          padding: 0 21px;
          border-radius: 6px;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }


        .data-decisions-primary-btn {
          border: 1px solid #970052;
          background: #970052;
          color: #ffffff;
          box-shadow: 0 7px 18px rgba(128, 0, 68, 0.25);
        }


        .data-decisions-primary-btn:hover {
          background: #ad075f;
          border-color: #ad075f;
        }


        .data-decisions-secondary-btn {
          border: 1px solid rgba(220, 228, 241, 0.3);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          backdrop-filter: blur(5px);
        }


        .data-decisions-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .data-decisions-hero {
            height: 470px;
          }


          .data-decisions-hero-content {
            padding: 35px 5%;
          }


          .data-decisions-hero h1 {
            font-size: 28px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 650px) {

          .data-decisions-hero {
            height: 570px;
          }


          .data-decisions-hero-content {
            padding: 35px 22px;
          }


          .data-decisions-eyebrow {
            font-size: 8px;
          }


          .data-decisions-hero h1 {
            font-size: 27px;
            line-height: 1.08;
            letter-spacing: -1px;
          }


          .data-decisions-hero h2 {
            font-size: 14px;
          }


          .data-decisions-hero p {
            font-size: 11px;
          }


          .data-decisions-buttons {
            flex-direction: column;
            align-items: stretch;
            width: fit-content;
          }


          .data-decisions-primary-btn,
          .data-decisions-secondary-btn {
            width: 210px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 420px) {

          .data-decisions-hero {
            height: 560px;
          }


          .data-decisions-hero-content {
            padding-left: 18px;
            padding-right: 18px;
          }


          .data-decisions-hero h1 {
            font-size: 24px;
          }


          .data-decisions-hero h2 {
            font-size: 13px;
          }


          .data-decisions-hero p {
            font-size: 10px;
          }

        }

      `}</style>

    </div>
  );
}