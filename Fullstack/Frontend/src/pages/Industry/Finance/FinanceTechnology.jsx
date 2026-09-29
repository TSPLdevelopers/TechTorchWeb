import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FinanceTechnologyHeroSection() {
  return (
    <section className="finance-technology-section">
      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .finance-technology-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .finance-technology-container {
          width: 100%;
          max-width: 1280px;

          margin: 0 auto;

          padding: 70px 40px;

          box-sizing: border-box;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 55px;

          align-items: center;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .finance-technology-content {
          min-width: 0;
        }


        /* =====================================================
           BADGE
           INTER
        ===================================================== */

        .finance-technology-badge {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 18px;

          padding: 6px 11px;

          border-radius: 999px;

          background: #fbeef1;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.3;

          font-weight: 700;

          letter-spacing: 0.06em;
        }


        .finance-technology-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-technology-heading {
          margin: 0 0 22px;

          max-width: 610px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 40px;

          line-height: 1.15;

          font-weight: 700;

          letter-spacing: -0.9px;

          color: ${INK};
        }


        /* =====================================================
           SUBHEADING / CONTENT
           PLUS JAKARTA SANS
        ===================================================== */

        .finance-technology-text {
          display: flex;

          flex-direction: column;

          gap: 15px;

          max-width: 610px;
        }


        .finance-technology-text p {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 13px;

          line-height: 1.75;

          font-weight: 500;

          color: ${MUTED};
        }


        /* =====================================================
           RIGHT IMAGE
        ===================================================== */

        .finance-technology-image-wrapper {
          width: 100%;

          min-width: 0;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .finance-technology-image {
          display: block;

          width: 100%;

          height: 400px;

          object-fit: cover;

          object-position: center;

          border: 4px solid ${WINE};

          border-radius: 24px;

          box-sizing: border-box;

          background: #eee;

          box-shadow:
            0 16px 30px rgba(0, 0, 0, 0.08);
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (max-width: 1200px) {

          .finance-technology-container {
            max-width: 1120px;

            padding: 65px 32px;

            gap: 45px;
          }


          .finance-technology-heading {
            font-size: 37px;
          }


          .finance-technology-text p {
            font-size: 13px;
          }


          .finance-technology-image {
            height: 380px;
          }

        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .finance-technology-container {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 0.95fr);

            gap: 35px;

            padding: 55px 28px;
          }


          .finance-technology-heading {
            font-size: 34px;

            letter-spacing: -0.7px;
          }


          .finance-technology-text {
            gap: 13px;
          }


          .finance-technology-text p {
            font-size: 12.5px;

            line-height: 1.7;
          }


          .finance-technology-image {
            height: 350px;

            border-radius: 21px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .finance-technology-container {
            grid-template-columns: 1fr;

            gap: 42px;

            padding:
              55px 26px 60px;
          }


          .finance-technology-content {
            width: 100%;

            max-width: 720px;
          }


          .finance-technology-heading {
            font-size: 35px;
          }


          .finance-technology-text {
            max-width: 720px;
          }


          .finance-technology-text p {
            font-size: 13px;

            line-height: 1.72;
          }


          .finance-technology-image-wrapper {
            width: 100%;

            max-width: 720px;

            margin: 0 auto;
          }


          .finance-technology-image {
            height: 390px;

            border-radius: 22px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .finance-technology-container {
            padding:
              45px 20px 50px;

            gap: 35px;
          }


          /* Badge */

          .finance-technology-badge {
            margin-bottom: 15px;

            padding: 5px 10px;

            font-size: 8.5px;
          }


          .finance-technology-badge-dot {
            width: 5px;
            height: 5px;
          }


          /* Main Heading */

          .finance-technology-heading {
            margin-bottom: 17px;

            font-size: 29px;

            line-height: 1.18;

            letter-spacing: -0.55px;
          }


          /* Subheading / Body */

          .finance-technology-text {
            gap: 12px;
          }


          .finance-technology-text p {
            font-size: 12px;

            line-height: 1.72;
          }


          /* Image */

          .finance-technology-image {
            height: 300px;

            border-width: 3px;

            border-radius: 18px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .finance-technology-container {
            padding:
              42px 17px 46px;

            gap: 31px;
          }


          .finance-technology-heading {
            font-size: 27px;

            line-height: 1.18;
          }


          .finance-technology-text {
            gap: 11px;
          }


          .finance-technology-text p {
            font-size: 11.5px;

            line-height: 1.7;
          }


          .finance-technology-image {
            height: 270px;

            border-radius: 17px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .finance-technology-container {
            padding:
              38px 15px 43px;

            gap: 29px;
          }


          .finance-technology-heading {
            font-size: 25px;

            line-height: 1.18;

            letter-spacing: -0.45px;
          }


          .finance-technology-text p {
            font-size: 11px;

            line-height: 1.68;
          }


          .finance-technology-image {
            height: 250px;

            border-radius: 16px;
          }

        }


        /* =====================================================
           EXTRA SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .finance-technology-heading {
            font-size: 23px;
          }


          .finance-technology-text p {
            font-size: 10.5px;
          }


          .finance-technology-image {
            height: 225px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          * {
            scroll-behavior: auto;
          }

        }

      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="finance-technology-container">


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="finance-technology-content">

          {/* Badge - Inter */}

          <span className="finance-technology-badge">

            <span className="finance-technology-badge-dot" />

            FINANCE TECHNOLOGY

          </span>


          {/* Main Heading - Plus Jakarta Sans */}

          <h2 className="finance-technology-heading">
            Connect Financial Operations With the Rest of Your Business
          </h2>


          {/* Subheading / Description - Plus Jakarta Sans */}

          <div className="finance-technology-text">

            <p>
              Financial information rarely exists in isolation. It often
              connects with customers, employees, payments, operations and
              other business functions.
            </p>


            <p>
              A connected technology environment can make it easier for
              teams to work with shared information and maintain greater
              visibility across business activities.
            </p>


            <p>
              TechTorch brings together ERP, financial management, payment
              management, CRM and software development capabilities to help
              organizations create technology environments suited to their
              operational requirements.
            </p>


            <p>
              Our focus is not simply on introducing another system. We
              start by understanding the business requirement and then work
              toward a solution that fits the organization's existing
              processes, technology and future needs.
            </p>

          </div>

        </div>


        {/* =================================================
            RIGHT IMAGE
        ================================================= */}

        <div className="finance-technology-image-wrapper">

          <img
            src="/financetechnology.png"
            alt="Financial technology dashboard"
            className="finance-technology-image"
          />

        </div>

      </div>

    </section>
  );
}