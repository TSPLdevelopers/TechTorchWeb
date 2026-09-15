import React from "react";

import bgImage from "/bgslide07.png";
import photoImage from "/hero03slide07.png";

export default function BusinessChallengeSection() {
  return (
    <section className="business-challenge-section">
      <div className="business-challenge-container">

        {/* ================= TEXT CONTENT ================= */}
        <div className="business-challenge-content">
          <h1 className="business-challenge-heading">
            Have a Business
            <br />
            Challenge to Solve
          </h1>

          <p className="business-challenge-paragraph">
            Whether you're planning a new application, modernizing an existing
            system or looking for a better way to manage a business process,
            the right place to start is with the problem.
          </p>

          <p className="business-challenge-paragraph">
            We'll work with you to understand the opportunity, define a
            practical solution and build software that fits the way your
            business works.
          </p>

          <a href="#" className="business-challenge-button">
            Talk to Experts
          </a>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="business-challenge-image-wrapper">
          <img
            className="business-challenge-image"
            src={photoImage}
            alt="Team discussing business challenge"
          />
        </div>

      </div>

      <style>{`
        /* ================= MAIN SECTION ================= */

        .business-challenge-section {
          position: relative;
          width: 100%;
          overflow: hidden;

          padding: 55px 80px;

          background-color: #ffffff;
          background-image: url(${bgImage});
          background-repeat: no-repeat;
          background-position: right bottom;
          background-size: 55% auto;

          font-family: "Plus Jakarta Sans", sans-serif;
          box-sizing: border-box;
        }


        /* ================= CONTAINER ================= */

        .business-challenge-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1300px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 60px;
        }


        /* ================= LEFT CONTENT ================= */

        .business-challenge-content {
          flex: 1 1 420px;

          width: 100%;
          max-width: 500px;

          /* Halka sa right shift */
          transform: translateX(15px);
        }


        /* ================= HEADING ================= */

        .business-challenge-heading {
          margin: 0 0 30px;

          font-size: 40px;
          font-weight: 700;
          line-height: 1.2;

          color: #1a1a1a;
        }


        /* ================= PARAGRAPH ================= */

        .business-challenge-paragraph {
          max-width: 420px;

          margin: 0 0 20px;

          font-size: 16px;
          line-height: 1.7;

          color: #4a4a4a;
        }


        /* ================= BUTTON ================= */

        .business-challenge-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          margin-top: 25px;

          padding: 14px 30px;

          background: #7a1338;
          color: #ffffff;

          font-size: 16px;
          font-weight: 600;

          text-decoration: none;

          border-radius: 6px;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .business-challenge-button:hover {
          background: #5c0e2a;
          transform: translateY(-2px);
        }


        /* ================= IMAGE WRAPPER ================= */

        .business-challenge-image-wrapper {
          flex: 1 1 420px;

          width: 100%;
          max-width: 620px;

          transform: translateX(40px);
        }


        /* ================= IMAGE ================= */

        .business-challenge-image {
          display: block;

          width: 100%;
          height: auto;

          min-height: 420px;
          max-height: 520px;

          object-fit: cover;

          border-radius: 18px;

          box-shadow:
            0 25px 50px rgba(122, 19, 56, 0.15);
        }


        /* =====================================================
           LARGE LAPTOP
        ====================================================== */

        @media (max-width: 1200px) {

          .business-challenge-section {
            padding: 55px 50px;
            background-size: 60% auto;
          }

          .business-challenge-container {
            gap: 45px;
          }

          .business-challenge-content {
            max-width: 460px;
            transform: translateX(10px);
          }

          .business-challenge-image-wrapper {
            max-width: 540px;
            transform: translateX(20px);
          }

          .business-challenge-heading {
            font-size: 38px;
          }

          .business-challenge-image {
            min-height: 400px;
            max-height: 480px;
          }
        }


        /* =====================================================
           TABLET / SMALL LAPTOP
        ====================================================== */

        @media (max-width: 950px) {

          .business-challenge-section {
            padding: 50px 35px;
            background-size: 65% auto;
          }

          .business-challenge-container {
            gap: 35px;
          }

          .business-challenge-content {
            flex: 1 1 330px;
            max-width: 430px;

            transform: translateX(5px);
          }

          .business-challenge-image-wrapper {
            flex: 1 1 330px;
            max-width: 470px;

            transform: translateX(0);
          }

          .business-challenge-heading {
            font-size: 34px;
          }

          .business-challenge-paragraph {
            font-size: 15px;
          }

          .business-challenge-image {
            min-height: 380px;
            max-height: 430px;
          }
        }


        /* =====================================================
           MOBILE / TABLET PORTRAIT
        ====================================================== */

        @media (max-width: 700px) {

          .business-challenge-section {
            padding: 50px 25px;

            background-size: 100% auto;
            background-position: right bottom;
          }

          .business-challenge-container {
            flex-direction: column;

            align-items: flex-start;

            gap: 40px;
          }

          .business-challenge-content {
            flex: none;

            width: 100%;
            max-width: 100%;

            transform: translateX(0);
          }

          .business-challenge-heading {
            font-size: 32px;
            line-height: 1.22;

            margin-bottom: 25px;
          }

          .business-challenge-paragraph {
            width: 100%;
            max-width: 100%;

            font-size: 15px;
            line-height: 1.7;

            margin-bottom: 18px;
          }

          .business-challenge-button {
            margin-top: 20px;

            padding: 13px 26px;

            font-size: 15px;
          }

          .business-challenge-image-wrapper {
            flex: none;

            width: 100%;
            max-width: 100%;

            transform: translateX(0);
          }

          .business-challenge-image {
            width: 100%;

            min-height: unset;
            max-height: unset;

            aspect-ratio: 4 / 3;

            object-fit: cover;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {

          .business-challenge-section {
            padding: 40px 20px;
          }

          .business-challenge-container {
            gap: 32px;
          }

          .business-challenge-heading {
            font-size: 28px;
            line-height: 1.25;

            margin-bottom: 22px;
          }

          .business-challenge-paragraph {
            font-size: 14px;
            line-height: 1.65;

            margin-bottom: 16px;
          }

          .business-challenge-button {
            width: auto;

            padding: 12px 23px;

            font-size: 14px;
          }

          .business-challenge-image {
            aspect-ratio: 1 / 1;

            border-radius: 14px;
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 360px) {

          .business-challenge-section {
            padding: 35px 16px;
          }

          .business-challenge-heading {
            font-size: 25px;
          }

          .business-challenge-paragraph {
            font-size: 13.5px;
          }
        }
      `}</style>
    </section>
  );
}