
import React from "react";

import backgroundImage from "/hero5slide4.png";

export default function BringBusinessTogetherSection() {
  return (
    <section className="business-together-section">

      {/* BACKGROUND IMAGE */}
      <img
        src={backgroundImage}
        alt=""
        className="business-bg-image"
      />

      {/* Dark Gradient Overlay */}
      <div className="business-overlay" />

      <div className="business-content">

        {/* TEXT CONTENT */}
        <div className="business-text">
          <h1>Bring Your Business Together</h1>

          <p>
            Your business shouldn't have to depend on disconnected systems to
            get work done.
          </p>

          <p>
            With TorchX Suite, your teams can manage essential business
            functions through one connected platform built to simplify
            operations, improve visibility and support sustainable growth.
          </p>

          <p className="business-highlight">
            Ready to see how TorchX Suite can work for your business?
          </p>
        </div>

        {/* BUTTON */}
        <a href="#" className="business-button">
          Talk to Our Experts →
        </a>
      </div>


      <style>{`

        .business-together-section {
          position: relative;
          width: 100%;
          min-height: 520px;

          background: #0a0a0f;

          font-family: "Plus Jakarta Sans", sans-serif;

          display: flex;
          align-items: center;

          overflow: hidden;
          box-sizing: border-box;
        }


        /* ================= BACKGROUND IMAGE ================= */

        .business-bg-image {
          position: absolute;

          /* MAKE IMAGE WIDER */
          width: 100%;
          height: auto;

          /* Keep complete image */
          max-width: none;

          left: 0;
          top: 50%;

          transform: translateY(-50%);

          object-fit: contain;

          z-index: 0;
        }


        /* ================= OVERLAY ================= */

        .business-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(5,5,10,0.85) 0%,
              rgba(5,5,10,0.6) 35%,
              rgba(5,5,10,0.15) 60%,
              rgba(5,5,10,0) 75%
            );

          z-index: 1;
        }


        /* ================= CONTENT ================= */

        .business-content {
          position: relative;
          z-index: 2;

          max-width: 560px;

          padding: 45px 70px;

          box-sizing: border-box;
        }


        .business-text {
          transform: translateY(-25px);
        }


        .business-content h1 {
          font-size: 28px;
          line-height: 1.3;
          font-weight: 700;

          color: #ffffff;

          margin: 0 0 18px 0;
        }


        .business-content p {
          font-size: 14px;
          line-height: 1.7;

          color: #d5d5da;

          margin: 0 0 14px 0;
        }


        .business-content .business-highlight {
          color: #ffffff;
          font-weight: 700;

          margin-bottom: 30px;
        }


        /* ================= BUTTON ================= */

        .business-button {
          display: inline-block;

          background: transparent;
          color: #ffffff;

          font-size: 14px;
          font-weight: 600;

          padding: 12px 22px;

          border-radius: 6px;

          border: 1px solid rgba(255,255,255,0.6);

          text-decoration: none;

          transition: all 0.3s ease;
        }


        .business-button:hover {
          background: #ffffff;
          color: #0a0a0f;
        }


        /* ================= LAPTOP ================= */

        @media (max-width: 1200px) {

          .business-together-section {
            min-height: 480px;
          }

          .business-content {
            padding: 40px 55px;
          }

        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .business-together-section {
            min-height: 440px;
          }

          .business-bg-image {
            width: 100%;
          }

          .business-content {
            max-width: 520px;
            padding: 40px 45px;
          }

          .business-text {
            transform: translateY(-15px);
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 768px) {

          .business-together-section {
            min-height: 480px;
          }

          .business-bg-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .business-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(5,5,10,0.88) 0%,
                rgba(5,5,10,0.75) 55%,
                rgba(5,5,10,0.35) 100%
              );
          }

          .business-content {
            max-width: 100%;
            padding: 40px 30px;
          }

          .business-text {
            transform: translateY(0);
          }

          .business-content h1 {
            font-size: 25px;
          }

          .business-content p {
            font-size: 14px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {

          .business-together-section {
            min-height: 500px;
          }

          .business-bg-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .business-content {
            padding: 35px 20px;
          }

          .business-content h1 {
            font-size: 23px;
            margin-bottom: 16px;
          }

          .business-content p {
            font-size: 13.5px;
            line-height: 1.65;
          }

          .business-button {
            padding: 11px 18px;
            font-size: 13px;
          }

        }

      `}</style>
    </section>
  );
}

