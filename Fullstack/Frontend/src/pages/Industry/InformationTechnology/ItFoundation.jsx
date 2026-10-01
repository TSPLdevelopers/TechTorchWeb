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

        * {
          box-sizing: border-box;
        }

        .create-tech-cta {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: ${WINE};
          color: #ffffff;
          font-family: "Inter", Arial, sans-serif;
        }

        .create-tech-cta-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(255, 255, 255, 0.12) 0%,
              transparent 60%
            );
        }

        .create-tech-cta-container {
          position: relative;
          width: min(900px, 100%);
          margin: 0 auto;

          padding: 76px 40px;

          text-align: center;
        }

        /* ================= BADGE ================= */

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

        /* ================= HEADING ================= */

        .create-tech-cta-heading {
          max-width: 720px;
          margin: 0 auto 20px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.22;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        /* ================= SUBHEADING ================= */

        .create-tech-cta-description {
          max-width: 650px;
          margin: 0 auto 32px;

          color: #e3c3cf;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* ================= BUTTON ================= */

        .create-tech-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          min-height: 50px;
          padding: 13px 25px;

          margin-bottom: 30px;

          border: none;
          border-radius: 999px;

          background: #ffffff;
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .create-tech-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
        }

        .create-tech-cta-button svg {
          transition: transform 0.25s ease;
        }

        .create-tech-cta-button:hover svg {
          transform: translateX(3px);
        }

        /* ================= TRUST ITEMS ================= */

        .create-tech-trust-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 9px 28px;
        }

        .create-tech-trust-item {
          display: flex;
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

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .create-tech-cta-container {
            padding: 64px 32px;
          }

          .create-tech-cta-heading {
            font-size: 34px;
          }

          .create-tech-cta-description {
            font-size: 13.5px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .create-tech-cta-container {
            padding: 52px 20px;
          }

          .create-tech-cta-badge {
            margin-bottom: 19px;
            padding: 6px 11px;
            font-size: 9px;
          }

          .create-tech-cta-heading {
            margin-bottom: 17px;

            font-size: 28px;
            line-height: 1.27;
            letter-spacing: -0.5px;
          }

          .create-tech-cta-description {
            margin-bottom: 26px;

            font-size: 12.5px;
            line-height: 1.7;
          }

          .create-tech-cta-button {
            width: auto;
            min-height: 47px;
            padding: 12px 22px;

            margin-bottom: 25px;

            font-size: 12px;
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

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {
          .create-tech-cta-container {
            padding: 44px 15px;
          }

          .create-tech-cta-heading {
            font-size: 25px;
            line-height: 1.3;
          }

          .create-tech-cta-description {
            font-size: 11.5px;
          }

          .create-tech-cta-button {
            width: 100%;
            max-width: 250px;
            padding: 12px 18px;
          }

          .create-tech-trust-list {
            flex-direction: column;
            gap: 9px;
          }

          .create-tech-trust-item span {
            font-size: 10px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .create-tech-cta-container {
            padding: 38px 12px;
          }

          .create-tech-cta-heading {
            font-size: 23px;
          }

          .create-tech-cta-description {
            font-size: 11px;
          }

          .create-tech-cta-button {
            max-width: 230px;
            font-size: 11.5px;
          }
        }

        /* ================= REDUCED MOTION ================= */

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
        {/* Background Glow */}
        <div className="create-tech-cta-glow" />

        <div className="create-tech-cta-container">

          {/* Badge */}
          <span className="create-tech-cta-badge">
            BUILD YOUR TECHNOLOGY FOUNDATION
          </span>

          {/* Main Heading */}
          <h2 className="create-tech-cta-heading">
            Let's Create Technology Around
            <br className="cta-heading-break" />
            Your Business
          </h2>

          {/* Subheading */}
          <p className="create-tech-cta-description">
            Whether you are building a new application, modernizing an
            existing system, strengthening your IT environment or looking for
            ongoing technology support, TechTorch brings together the
            capabilities needed to address your business requirements.
          </p>

          {/* CTA Button */}
          <button className="create-tech-cta-button">
            <span>Talk to Our Experts</span>
            <ArrowRight size={16} strokeWidth={1.8} />
          </button>

          {/* Trust Items */}
          <div className="create-tech-trust-list">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="create-tech-trust-item"
              >
                <Icon size={13} strokeWidth={1.8} />
                <span>{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}