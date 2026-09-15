import React from "react";

const MAROON = "#7a1338";

export default function ConnectedExperienceSection() {
  return (
    <section className="connected-experience-section">

      {/* ================= LEFT IMAGE ================= */}
      <div className="connected-image-wrapper">
        <img
          src="/Hero5Slide3.png"
          alt="Connected Experience"
          className="connected-image"
        />
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="connected-content">
        <h1>
          Everything Your Teams Need.
          <br />
          One <span>Connected Experience.</span>
        </h1>

        <p>
          TorchX Suite brings Talent, Engage, Finance, Pay and Inventory
          together to help businesses manage their most important operations
          from one connected platform. From people and customer relationships
          to financial management, payroll and inventory, each solution is
          designed to work as part of a broader business ecosystem—giving your
          teams greater visibility, simpler workflows and a more consistent way
          to work.
        </p>

        <a href="#">Explore TorchX Suite →</a>
      </div>

      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .connected-experience-section {
          display: flex;
          width: 100%;
          min-height: 550px;
          height: auto;
          background: #ffffff;
          font-family: 'Segoe UI', Arial, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .connected-image-wrapper {
          flex: 0 0 50%;
          width: 50%;
          min-width: 0;
          height: 550px;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          padding: 0;
          margin: 0;

          overflow: hidden;
          box-sizing: border-box;
        }

        .connected-image {
          display: block;

          width: 100%;
          height: 100%;

          margin: 0;
          padding: 0;

          object-fit: contain;
          object-position: left center;

          transform: scaleX(1.19);
          transform-origin: left center;
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .connected-content {
          flex: 0 0 50%;
          width: 50%;
          min-width: 0;

          padding: 45px 120px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          box-sizing: border-box;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .connected-content h1 {
          font-size: 30px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          line-height: 1.35;
          font-weight: 600;

          color: #1a1a1a;

          margin: 0 0 20px 0;

          transform: translateY(-55px);

          overflow-wrap: break-word;
        }

        .connected-content h1 span {
          color: ${MAROON};
        }


        /* =====================================================
           PARAGRAPH
        ===================================================== */

        .connected-content p {
          font-size: 15px;
          font-family: 'Inter', sans-serif;
          line-height: 1.7;

          color: #3a3a3a;

          max-width: 520px;

          margin: -35px 0 28px 0;

          overflow-wrap: break-word;
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .connected-content a {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;

          background: ${MAROON};
          color: #ffffff;

          font-size: 16px;
          font-weight: 500;

          padding: 10px 20px;

          border-radius: 6px;
          text-decoration: none;

          transition: 0.3s ease;

          margin-top: 60px;
        }

        .connected-content a:hover {
          background: #5e0d2a;
        }


        /* =====================================================
           MEDIUM / TABLET
           769px - 1100px
        ===================================================== */

        @media (max-width: 1100px) and (min-width: 769px) {

          .connected-experience-section {
            min-height: 520px;
            height: auto;
            align-items: stretch;
          }


          /* IMAGE STAYS ON LEFT */

          .connected-image-wrapper {
            flex: 0 0 50%;
            width: 50%;
            height: auto;
            min-height: 520px;

            align-self: stretch;

            justify-content: flex-start;
            align-items: center;

            overflow: hidden;
          }

          .connected-image {
            width: 100%;
            height: 100%;

            object-fit: contain;
            object-position: left center;

            transform: none;
          }


          /* CONTENT */

          .connected-content {
            flex: 0 0 50%;
            width: 50%;

            padding: 40px 45px;

            justify-content: center;
          }

          .connected-content h1 {
            font-size: 27px;
            line-height: 1.3;

            transform: none;

            margin: 0 0 18px 0;
          }

          .connected-content p {
            font-size: 15px;
            line-height: 1.65;

            margin: 0 0 25px 0;

            max-width: 100%;
          }

          .connected-content a {
            font-size: 14px;
            padding: 11px 20px;

            margin-top: 15px;
          }
        }


        /* =====================================================
           TABLET
           769px - 1024px
        ===================================================== */

        @media (max-width: 1024px) and (min-width: 769px) {

          .connected-experience-section {
            min-height: 500px;
          }

          .connected-image-wrapper {
            min-height: 500px;
          }

          .connected-content {
            padding: 35px 35px;
          }

          .connected-content h1 {
            font-size: 25px;
          }

          .connected-content p {
            font-size: 14px;
            line-height: 1.65;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .connected-experience-section {
            display: flex;
            flex-direction: column;

            width: 100%;

            min-height: 0;
            height: auto;

            overflow: hidden;
          }


          /* IMAGE */

          .connected-image-wrapper {
            width: 100%;
            flex: none;

            height: auto;
            min-height: 0;

            display: flex;

            align-items: flex-start;
            justify-content: flex-start;

            padding: 0;
            margin: 0;

            overflow: hidden;
          }

          .connected-image {
            display: block;

            width: 100%;
            height: auto;

            max-width: none;

            margin: 0;
            padding: 0;

            object-fit: contain;
            object-position: left top;

            transform: none;
          }


          /* CONTENT */

          .connected-content {
            width: 100%;
            flex: none;

            padding: 40px 25px 45px;

            box-sizing: border-box;

            justify-content: flex-start;
          }


          /* HEADING */

          .connected-content h1 {
            font-size: 27px;
            line-height: 1.3;

            transform: none;

            margin: 0 0 18px 0;
          }


          /* PARAGRAPH */

          .connected-content p {
            font-size: 16px;
            line-height: 1.65;

            margin: 0 0 25px 0;

            max-width: 100%;
          }


          /* BUTTON */

          .connected-content a {
            font-size: 14px;

            padding: 12px 20px;

            margin-top: 0;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .connected-image-wrapper {
            width: 100%;
            padding: 0;
            margin: 0;

            justify-content: flex-start;
            align-items: flex-start;
          }

          .connected-image {
            width: 100%;
            height: auto;

            margin: 0;
            padding: 0;

            transform: none;

            object-fit: contain;
            object-position: left top;
          }


          .connected-content {
            padding: 32px 20px 38px;
          }

          .connected-content h1 {
            font-size: 24px;
            line-height: 1.3;

            margin-bottom: 16px;
          }

          .connected-content p {
            font-size: 15px;
            line-height: 1.65;

            margin-bottom: 23px;
          }

          .connected-content a {
            font-size: 14px;
            padding: 11px 18px;

            margin-top: 0;
          }
        }


        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 360px) {

          .connected-image-wrapper {
            width: 100%;
            padding: 0;
            margin: 0;

            justify-content: flex-start;
            align-items: flex-start;
          }

          .connected-image {
            width: 100%;
            height: auto;

            margin: 0;
            padding: 0;

            transform: none;
          }

          .connected-content {
            padding: 28px 17px 35px;
          }

          .connected-content h1 {
            font-size: 22px;
            line-height: 1.3;
          }

          .connected-content p {
            font-size: 14px;
            line-height: 1.6;
          }

          .connected-content a {
            font-size: 13px;
            padding: 10px 16px;

            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}