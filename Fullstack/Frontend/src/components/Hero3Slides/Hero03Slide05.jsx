import React from "react";

// Public folder image
const apartmentImage = "/Apartment2.png";

export default function SoftwareGrowthSection() {
  return (
    <section className="software-growth-section">
      <div className="software-growth-container">
        {/* ================= TEXT ================= */}
        <div className="software-growth-text">
          <h1>
            Software That Can Grow
            <br />
            With <span>Your Business</span>
          </h1>

          <p>
            Business requirements don't stay the same.
          </p>

          <p>
            Teams change. Customers grow. Processes evolve. New systems are
            introduced and existing ones need to connect.
          </p>

          <p>
            That's why we consider the future from the beginning.
          </p>

          <p>
            We build with scalability, maintainability, integration and
            long-term requirements in mind, so your software can continue to
            support the business as it evolves.
          </p>

          <p>
            We don't believe good software needs to be unnecessarily
            complicated.
          </p>

          {/* Highlight Text */}
          <p className="software-growth-highlight">
            It needs to be right for the business today—and ready for
            tomorrow.
          </p>
        </div>

        {/* ================= IMAGE ================= */}
        <div className="apartment-image-wrapper">
          <img
            src={apartmentImage}
            alt="Residential apartment towers"
          />
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .software-growth-section {
          width: 100%;
          padding: 0 80px;
          background: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .software-growth-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 60px;
          box-sizing: border-box;
        }

        /* ================= TEXT ================= */

        .software-growth-text {
          width: 100%;
          max-width: 500px;
          flex: 1 1 380px;

          padding: 60px 0;

          transform: translateX(35px);
          box-sizing: border-box;
        }

        .software-growth-text h1 {
          font-size: 36px;
          line-height: 1.25;
          font-weight: 700;
          color: #1a1a1a;

          margin: 0 0 32px 0;
        }

        .software-growth-text h1 span {
          color: #7a1338;
        }

        .software-growth-text p {
          font-size: 16px;
          line-height: 1.7;
          color: #4a4a4a;

          margin: 0 0 28px 0;
        }

        .software-growth-text .software-growth-highlight {
          font-size: 17px;
          line-height: 1.6;
          font-weight: 700;
          color: #7a1338;

          margin: 0;
        }

        /* ================= IMAGE ================= */

        .apartment-image-wrapper {
          width: 100%;
          max-width: 600px;
          flex: 1 1 340px;

          display: flex;
          align-items: center;
          justify-content: center;

          transform: translateX(80px);
          box-sizing: border-box;
        }

        .apartment-image-wrapper img {
          width: 100%;
          height: 660px;

          display: block;

          object-fit: contain;

          margin: 0;
          padding: 0;
        }


        /* =====================================================
           LARGE LAPTOP
        ===================================================== */

        @media (max-width: 1300px) {
          .software-growth-section {
            padding: 0 60px;
          }

          .software-growth-container {
            gap: 50px;
          }

          .software-growth-text {
            transform: translateX(28px);
          }

          .apartment-image-wrapper {
            transform: translateX(60px);
          }

          .apartment-image-wrapper img {
            height: 620px;
          }
        }


        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1100px) {
          .software-growth-section {
            padding: 0 50px;
          }

          .software-growth-container {
            gap: 40px;
          }

          .software-growth-text {
            max-width: 470px;
            transform: translateX(20px);
          }

          .software-growth-text h1 {
            font-size: 34px;
          }

          .apartment-image-wrapper {
            max-width: 540px;
            transform: translateX(35px);
          }

          .apartment-image-wrapper img {
            height: 570px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .software-growth-section {
            padding: 0 40px;
          }

          .software-growth-container {
            gap: 30px;
          }

          .software-growth-text {
            flex: 1 1 320px;
            max-width: 440px;

            transform: translateX(10px);
          }

          .software-growth-text h1 {
            font-size: 32px;
          }

          .software-growth-text p {
            font-size: 15px;
          }

          .software-growth-highlight {
            font-size: 16px !important;
          }

          .apartment-image-wrapper {
            flex: 1 1 300px;
            max-width: 450px;

            transform: translateX(15px);
          }

          .apartment-image-wrapper img {
            height: 500px;
          }
        }


        /* =====================================================
           SMALL TABLET / MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .software-growth-section {
            padding: 0;
          }

          .software-growth-container {
            flex-direction: column;

            align-items: stretch;

            gap: 0;
          }

          .software-growth-text {
            width: 100%;
            max-width: none;

            flex: none;

            padding: 55px 30px;

            transform: translateX(0);
          }

          .software-growth-text h1 {
            font-size: 32px;
            margin-bottom: 28px;
          }

          .software-growth-text p {
            font-size: 16px;
            margin-bottom: 24px;
          }

          .software-growth-text .software-growth-highlight {
            font-size: 17px;
            margin-bottom: 0;
          }

          .apartment-image-wrapper {
            width: 100%;
            max-width: none;

            flex: none;

            transform: translateX(0);

            padding: 0;
          }

          .apartment-image-wrapper img {
            width: 100%;
            height: auto;

            max-height: none;

            object-fit: contain;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .software-growth-text {
            padding: 45px 20px;
          }

          .software-growth-text h1 {
            font-size: 28px;
            line-height: 1.25;

            margin-bottom: 25px;
          }

          .software-growth-text p {
            font-size: 15px;
            line-height: 1.65;

            margin-bottom: 22px;
          }

          .software-growth-text .software-growth-highlight {
            font-size: 16px;
            line-height: 1.55;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {
          .software-growth-text {
            padding: 40px 16px;
          }

          .software-growth-text h1 {
            font-size: 25px;
          }

          .software-growth-text p {
            font-size: 14px;
          }

          .software-growth-text .software-growth-highlight {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}