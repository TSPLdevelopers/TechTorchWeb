import React from "react";
import { ArrowRight, Shield, Lock, Heart } from "lucide-react";

const WINE = "#7A1F3D";

const trustItems = [
  { icon: Shield, label: "Strict IP Ownership" },
  { icon: Lock, label: "Mutual NDA Compliant" },
  { icon: Heart, label: "Transparent Engagement" },
];

export default function CreateTechnologyCtaSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .create-tech-cta,
        .create-tech-cta * {
          box-sizing: border-box;
        }

        /* =================================================
           MAIN CTA
        ================================================= */

        .create-tech-cta {
          position: relative;
          width: 100%;
          overflow: hidden;

          color: #ffffff;

          font-family: "Inter", Arial, sans-serif;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.25)
            ),
            url("/it.png");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* =================================================
           BACKGROUND OVERLAY
        ================================================= */

        .create-tech-cta-glow {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(255, 255, 00, 0.0) 100%,
              rgba(255, 255, 255, 0.0) 100%,
              transparent 65%
            );

          z-index: 0;
        }

        /* =================================================
           CONTAINER
        ================================================= */

        .create-tech-cta-container {
          position: relative;
          z-index: 1;

          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding: 82px 100px;

          text-align: center;
        }

        .create-tech-cta-content {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        /* =================================================
           BADGE
        ================================================= */

        .create-tech-cta-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 24px;
          padding: 7px 13px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.12);
          color: #f3d9e2;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        /* =================================================
           HEADING
        ================================================= */

        .create-tech-cta-heading {
          max-width: 800px;
          margin: 0 auto 20px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.9px;
        }

        .cta-heading-break {
          display: block;
        }

        /* =================================================
           DESCRIPTION
        ================================================= */

        .create-tech-cta-description {
          max-width: 760px;
          margin: 0 auto 32px;

          color: #e3c3cf;

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =================================================
           BUTTON
        ================================================= */

        .create-tech-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 50px;
          padding: 13px 25px;

          margin-bottom: 30px;

          border: none;
          border-radius: 6px;

          background: #ffffff;
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background-color 0.25s ease,
            color 0.25s ease;
        }

        .create-tech-cta-button:hover {
          transform: translateY(-2px);

          background: #730042;
          color: #ffffff;

          box-shadow:
            0 8px 22px rgba(0, 0, 0, 0.18);
        }

        .create-tech-cta-button svg {
          flex-shrink: 0;

          transition: transform 0.25s ease;
        }

        .create-tech-cta-button:hover svg {
          transform: translateX(3px);
        }

        /* =================================================
           TRUST ITEMS
        ================================================= */

        .create-tech-trust-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;

          gap: 9px 28px;
        }

        .create-tech-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          font-family: "Inter", Arial, sans-serif;
        }

        .create-tech-trust-item svg {
          flex-shrink: 0;
          color: #e3c3cf;
        }

        .create-tech-trust-item span {
          color: #e3c3cf;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11.5px;
          line-height: 1.4;
          font-weight: 500;
        }

        /* =================================================
           1200px
        ================================================= */

        @media (max-width: 1200px) {
          .create-tech-cta-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .create-tech-cta-heading {
            font-size: 37px;
          }
        }

        /* =================================================
           900px
        ================================================= */

        @media (max-width: 900px) {
          .create-tech-cta-container {
            padding-top: 68px;
            padding-bottom: 68px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .create-tech-cta-heading {
            max-width: 720px;
            font-size: 34px;
          }

          .create-tech-cta-description {
            max-width: 680px;
            font-size: 13.5px;
          }
        }

        /* =================================================
           700px
        ================================================= */

        @media (max-width: 700px) {
          .create-tech-cta {
            background-position: center;
          }

          .create-tech-cta-container {
            padding-top: 56px;
            padding-bottom: 56px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .create-tech-cta-badge {
            margin-bottom: 19px;
            padding: 6px 11px;
            font-size: 9px;
          }

          .create-tech-cta-heading {
            margin-bottom: 17px;

            font-size: 30px;
            line-height: 1.26;
            letter-spacing: -0.6px;
          }

          .create-tech-cta-description {
            margin-bottom: 27px;

            font-size: 12.5px;
            line-height: 1.7;
          }

          .create-tech-cta-button {
            min-height: 47px;
            padding: 12px 22px;

            margin-bottom: 26px;

            font-size: 12px;
            border-radius: 6px;
          }

          .create-tech-trust-list {
            gap: 10px 18px;
          }

          .create-tech-trust-item span {
            font-size: 10.5px;
          }

          .create-tech-trust-item svg {
            width: 12px;
            height: 12px;
          }
        }

        /* =================================================
           480px
        ================================================= */

        @media (max-width: 480px) {
          .create-tech-cta-container {
            padding-top: 48px;
            padding-bottom: 48px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .create-tech-cta-heading {
            font-size: 27px;
            line-height: 1.28;
          }

          .create-tech-cta-description {
            font-size: 12px;
            line-height: 1.7;
          }

          .create-tech-cta-button {
            min-height: 46px;
            padding: 12px 20px;

            font-size: 11.5px;
            border-radius: 6px;
          }

          .create-tech-trust-list {
            gap: 9px 16px;
          }

          .create-tech-trust-item span {
            font-size: 10px;
          }
        }

        /* =================================================
           340px
        ================================================= */

        @media (max-width: 340px) {
          .create-tech-cta-container {
            padding-top: 40px;
            padding-bottom: 40px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .create-tech-cta-heading {
            font-size: 24px;
            line-height: 1.3;
          }

          .create-tech-cta-description {
            font-size: 11.5px;
          }

          .create-tech-cta-button {
            min-height: 44px;
            padding: 11px 18px;

            font-size: 11px;
            border-radius: 6px;
          }

          .create-tech-trust-list {
            flex-direction: column;
            gap: 8px;
          }

          .create-tech-trust-item span {
            font-size: 9.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .create-tech-cta-button,
          .create-tech-cta-button svg {
            transition: none;
          }

          .create-tech-cta-button:hover {
            transform: none;
          }

          .create-tech-cta-button:hover svg {
            transform: none;
          }
        }
      `}</style>

      <section className="create-tech-cta">
        <div className="create-tech-cta-glow" />

        <div className="create-tech-cta-container">
          <div className="create-tech-cta-content">

            <span className="create-tech-cta-badge">
              BUILD YOUR TECHNOLOGY FOUNDATION
            </span>

            <h2 className="create-tech-cta-heading">
              Let's Create Technology Around
              <br className="cta-heading-break" />
              Your Business
            </h2>

            <p className="create-tech-cta-description">
              Whether you are building a new application, modernizing an
              existing system, strengthening your IT environment or looking
              for ongoing technology support, TechTorch brings together the
              capabilities needed to address your business requirements.
            </p>

            <button className="create-tech-cta-button">
              <span>Talk to Our Experts</span>

              <ArrowRight
                size={16}
                strokeWidth={1.8}
              />
            </button>

            <div className="create-tech-trust-list">
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="create-tech-trust-item"
                >
                  <Icon
                    size={13}
                    strokeWidth={1.8}
                  />

                  <span>{label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}