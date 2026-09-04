
import React from "react";

const MAROON = "#7a1338";

export default function ConnectedExperienceSection() {
  return (
    <section className="connected-experience-section">
      {/* Left Image */}
      <div className="connected-image-wrapper">
        <img
          src="/Hero5Slide3.png"
          alt="Connected Experience"
          className="connected-image"
        />
      </div>

      {/* Right Content */}
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
        .connected-experience-section {
          display: flex;
          width: 100%;
          min-height: 550px;
          height: 550px;
          background: #ffffff;
          font-family: 'Segoe UI', Arial, sans-serif;
          overflow: hidden;
        }

        /* ================= IMAGE ================= */

        .connected-image-wrapper {
          flex: 0 0 50%;
          width: 50%;
          height: 550px;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          padding: 0;
          margin: 0;
        }

        .connected-image {
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          object-fit: contain;
          object-position: left center;
        }

        /* ================= CONTENT ================= */

        .connected-content {
          flex: 0 0 50%;
          min-width: 0;
          padding: 45px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
        }

        /* ================= HEADING ================= */

        .connected-content h1 {
          font-size: 32px;
          font-['']
          line-height: 1.35;
          font-weight: 500;
          color: #1a1a1a;
          margin: 0 0 20px 0;
          transform: translateY(-55px);
        }

        .connected-content h1 span {
          color: ${MAROON};
        }

        /* ================= PARAGRAPH ================= */

        .connected-content p {
          font-size: 17px;
          line-height: 1.7;
          color: #3a3a3a;
          max-width: 520px;
          margin: -35px 0 28px 0;
        }

        /* ================= BUTTON ================= */

        .connected-content a {
          display: inline-flex;
          align-self: flex-start;
          align-items: center;
          background: ${MAROON};
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 24px;
          border-radius: 6px;
          text-decoration: none;
          transition: 0.3s ease;
        }

        .connected-content a:hover {
          background: #5e0d2a;
        }

        /* ================= TABLET ================= */

        @media (max-width: 1024px) {
          .connected-experience-section {
            min-height: 520px;
            height: 520px;
          }

          .connected-image-wrapper {
            flex: 0 0 50%;
            width: 50%;
            height: 520px;
            padding: 0;
          }

          .connected-image {
            width: 96%;
            height: 100%;
            object-fit: contain;
            object-position: left center;
          }

          .connected-content {
            flex: 0 0 50%;
            padding: 40px 40px;
          }

          .connected-content h1 {
            font-size: 28px;
            line-height: 1.3;
            transform: translateY(-30px);
            margin-bottom: 15px;
          }

          .connected-content p {
            font-size: 16px;
            line-height: 1.65;
            margin: -10px 0 24px 0;
            max-width: 500px;
          }

          .connected-content a {
            font-size: 14px;
            padding: 12px 21px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 768px) {
          .connected-experience-section {
            display: flex;
            flex-direction: column;
            min-height: auto;
            height: auto;
          }

          .connected-image-wrapper {
            width: 100%;
            flex: none;
            height: auto;
            min-height: 0;
            padding: 0;
            margin: 0;
            justify-content: center;
          }

          .connected-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 500px;
            margin: 0 auto;
            padding: 0;
            object-fit: contain;
            object-position: center;
          }

          .connected-content {
            width: 100%;
            flex: none;
            padding: 40px 25px 45px;
          }

          .connected-content h1 {
            font-size: 27px;
            line-height: 1.3;
            transform: none;
            margin: 0 0 18px 0;
          }

          .connected-content p {
            font-size: 16px;
            line-height: 1.65;
            margin: 0 0 25px 0;
            max-width: 100%;
          }

          .connected-content a {
            font-size: 14px;
            padding: 12px 20px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .connected-image-wrapper {
            padding: 0;
          }

          .connected-image {
            width: 92%;
            height: auto;
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
          }
        }

        /* ================= VERY SMALL DEVICES ================= */

        @media (max-width: 360px) {
          .connected-image-wrapper {
            padding: 0;
          }

          .connected-image {
            width: 90%;
          }

          .connected-content {
            padding: 28px 17px 35px;
          }

          .connected-content h1 {
            font-size: 22px;
          }

          .connected-content p {
            font-size: 14px;
            line-height: 1.6;
          }

          .connected-content a {
            font-size: 13px;
            padding: 10px 16px;
          }
        }
      `}</style>
    </section>
  );
}

