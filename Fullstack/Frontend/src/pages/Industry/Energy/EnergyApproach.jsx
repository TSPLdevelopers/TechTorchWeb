import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Understand your business objectives, existing environment and technology requirements.",
  },
  {
    num: "02",
    title: "Design & Develop",
    body: "Plan and develop the solution around the identified requirements.",
  },
  {
    num: "03",
    title: "Test & Deploy",
    body: "Test the solution and prepare it for implementation.",
  },
  {
    num: "04",
    title: "Support & Maintain",
    body: "Provide ongoing maintenance and support as requirements evolve.",
  },
];

export default function ApproachAndImageCtaSections() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           BASE
        ================================================= */

        .approach-page {
          width: 100%;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .approach-page *,
        .approach-page *::before,
        .approach-page *::after {
          box-sizing: border-box;
        }

        /* =================================================
           SECTION 1 — OUR APPROACH
        ================================================= */

        .approach-section {
          width: 100%;
          background: #f2f2f5;
        }

        .approach-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /*
            HERO SPACING SYSTEM
            Desktop: 100px
          */
          padding: 72px 100px;
        }

        .approach-eyebrow {
          margin: 0 0 12px;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .approach-heading {
          margin: 0 0 34px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.03em;
        }

        /* =================================================
           APPROACH CARDS
        ================================================= */

        .approach-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          width: 100%;
        }

        .approach-card {
          min-height: 255px;

          display: flex;
          flex-direction: column;

          padding: 26px 22px 24px;

          background: #ffffff;
          border-radius: 16px;

          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .approach-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 12px 30px rgba(27, 27, 42, 0.08);
        }

        .approach-number {
          margin: 0 0 22px;

          color: #e3d3d9;

          font-family: "Inter", Arial, sans-serif;
          font-size: 36px;
          line-height: 1;
          font-weight: 700;
        }

        .approach-card-title {
          margin: 0 0 10px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 700;
        }

        .approach-card-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        .approach-line {
          width: 28px;
          height: 2px;

          margin-top: auto;

          background: ${WINE};
        }

        /* =================================================
           SECTION 2 — CTA
        ================================================= */

        .energy-cta {
          position: relative;
          width: 100%;
          overflow: hidden;

          background: #1c2230;
        }

        .energy-cta-bg {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              135deg,
              #1c2230 0%,
              #2a2f3d 50%,
              #4a1230 100%
            );
        }

        .energy-cta-overlay {
          position: absolute;
          inset: 0;

          background: rgba(30, 10, 25, 0.55);
        }

        .energy-cta-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /*
            Same Hero horizontal spacing
            Desktop: 100px
          */
          padding: 100px 100px;

          text-align: center;
        }

        .cta-eyebrow {
          margin: 0 0 20px;

          color: #e3c3cf;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .cta-heading {
          max-width: 950px;

          margin: 0 auto 26px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 44px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .cta-description {
          max-width: 720px;

          margin: 0 auto 34px;

          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cta-description p {
          margin: 0;

          color: #e3c3cf;

          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
        }

        /* =================================================
           CTA BUTTONS
        ================================================= */

        .cta-buttons {
          display: flex;
          flex-wrap: wrap;

          justify-content: center;
          align-items: center;

          gap: 12px;
        }

        .cta-button {
          min-height: 46px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 12px 22px;

          border-radius: 999px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        .cta-primary {
          color: ${WINE};

          background: #ffffff;
          border: 1px solid #ffffff;
        }

        .cta-primary:hover {
          background: #f7f7f7;
        }

        .cta-secondary {
          color: #ffffff;

          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .cta-secondary:hover {
          border-color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.06);
        }

        /* =================================================
           TABLET
           40px LEFT / RIGHT
        ================================================= */

        @media (max-width: 1100px) {
          .approach-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .approach-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .approach-card {
            min-height: 235px;
          }

          .energy-cta-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 85px;
            padding-bottom: 85px;
          }

          .cta-heading {
            font-size: 38px;
          }
        }

        /* =================================================
           MOBILE
           24px LEFT / RIGHT
        ================================================= */

        @media (max-width: 700px) {
          .approach-container {
            padding-top: 50px;
            padding-bottom: 50px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .approach-eyebrow {
            font-size: 11px;
            margin-bottom: 10px;
          }

          .approach-heading {
            font-size: 30px;
            line-height: 1.25;
            margin-bottom: 26px;
          }

          .approach-steps {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .approach-card {
            min-height: auto;
            padding: 23px 20px;
          }

          .approach-number {
            font-size: 31px;
            margin-bottom: 17px;
          }

          .approach-card-title {
            font-size: 16px;
          }

          .approach-card-body {
            font-size: 13px;
            line-height: 1.65;
          }

          /* CTA */

          .energy-cta-container {
            padding-top: 70px;
            padding-bottom: 70px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .cta-eyebrow {
            font-size: 10px;
            margin-bottom: 16px;
          }

          .cta-heading {
            font-size: 30px;
            line-height: 1.25;
            margin-bottom: 22px;
          }

          .cta-description {
            margin-bottom: 28px;
          }

          .cta-description p {
            font-size: 13px;
            line-height: 1.7;
          }

          .cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .cta-button {
            width: 100%;
            max-width: 320px;
            min-height: 48px;
          }

          .desktop-break {
            display: none;
          }
        }

        /* =================================================
           SMALL MOBILE
           16px LEFT / RIGHT
        ================================================= */

        @media (max-width: 480px) {
          .approach-container {
            padding-top: 42px;
            padding-bottom: 42px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .approach-heading {
            font-size: 26px;
          }

          .approach-card {
            border-radius: 13px;
            padding: 21px 18px;
          }

          .approach-number {
            font-size: 28px;
          }

          .approach-card-title {
            font-size: 15px;
          }

          .approach-card-body {
            font-size: 12px;
          }

          /* CTA */

          .energy-cta-container {
            padding-top: 58px;
            padding-bottom: 58px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .cta-heading {
            font-size: 26px;
          }

          .cta-description p {
            font-size: 12px;
          }

          .cta-button {
            max-width: 100%;
            font-size: 12px;
          }
        }

        /* =================================================
           VERY SMALL DEVICES
        ================================================= */

        @media (max-width: 340px) {
          .approach-heading {
            font-size: 23px;
          }

          .cta-heading {
            font-size: 23px;
          }

          .cta-description p {
            font-size: 11.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .approach-card,
          .cta-button {
            transition: none;
          }
        }
      `}</style>

      <div className="approach-page">

        {/* =================================================
            SECTION 1: OUR APPROACH
        ================================================= */}

        <section className="approach-section">
          <div className="approach-container">

            <p className="approach-eyebrow">
              OUR APPROACH
            </p>

            <h2 className="approach-heading">
              From Requirement to Support
            </h2>

            <div className="approach-steps">
              {steps.map(({ num, title, body }) => (
                <div
                  className="approach-card"
                  key={num}
                >
                  <p className="approach-number">
                    {num}
                  </p>

                  <h3 className="approach-card-title">
                    {title}
                  </h3>

                  <p className="approach-card-body">
                    {body}
                  </p>

                  <div className="approach-line" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =================================================
            SECTION 2: CTA
        ================================================= */}

        <section className="energy-cta">

          <div className="energy-cta-bg" />

          <div className="energy-cta-overlay" />

          <div className="energy-cta-container">

            <p className="cta-eyebrow">
              GET IN TOUCH
            </p>

            <h2 className="cta-heading">
              Let's Build Technology Around
              <br className="desktop-break" />
              Your Business
            </h2>

            <div className="cta-description">

              <p>
                Discuss your Energy business and technology
                requirements with the TechTorch team.
              </p>

              <p>
                Whether you need ERP, operations management,
                software development, cloud infrastructure,
                cybersecurity or other technology services,
                our team can discuss your requirements and
                the appropriate approach.
              </p>

            </div>

            <div className="cta-buttons">

              <button
                type="button"
                className="cta-button cta-primary"
              >
                Get in Touch
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="cta-button cta-secondary"
              >
                Talk to Our Experts
                <ArrowRight size={15} />
              </button>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}