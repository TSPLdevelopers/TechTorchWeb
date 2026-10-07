import React from "react";
import { ArrowRight } from "lucide-react";
const ctaBackground = "/energy2.png";

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

        /* =========================
           BASE
        ========================= */

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


        /* =========================
           OUR APPROACH
        ========================= */

        .approach-section {
          width: 100%;
          background: #f2f2f5;
        }

        .approach-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 72px 100px;
        }

        .approach-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
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


        /* =========================
           APPROACH CARDS
        ========================= */

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
          box-shadow: 0 12px 30px rgba(27, 27, 42, 0.08);
        }

        .approach-number {
          margin: 0 0 22px;

          color: #e3d3d9;

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

          font-size: 13px;
          line-height: 1.7;
        }

        .approach-line {
          width: 28px;
          height: 2px;

          margin-top: auto;

          background: ${WINE};
        }


        /* =====================================
           CTA WITH BACKGROUND IMAGE
        ===================================== */

        .energy-cta {
          position: relative;

          width: 100%;
          min-height: 520px;

          overflow: hidden;

          background: #1c2230;
        }

        .energy-cta-bg {
          position: absolute;
          inset: 0;

          background-image: url("${ctaBackground}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          z-index: 0;

          transform: scale(1.02);
        }

        .energy-cta-overlay {
          position: absolute;
          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              135deg,
              rgba(16, 18, 28, 0.84) 0%,
              rgba(30, 20, 31, 0.78) 48%,
              rgba(74, 18, 48, 0.82) 100%
            );
        }

        .energy-cta-container {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1600px;
          min-height: 520px;

          margin: 0 auto;
          padding: 100px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          text-align: center;
        }

        .cta-eyebrow {
          margin: 0 0 20px;

          color: #f0ceda;

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

          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.22);
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

          color: #f0dce4;

          font-size: 15px;
          line-height: 1.75;

          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.22);
        }


        /* =========================
           CTA BUTTONS
        ========================= */

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

          /* UPDATED: reduced border radius */
          border-radius: 8px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }


        /* LEFT BUTTON */

        .cta-secondary {
          color: #ffffff;

          background: rgba(255, 255, 255, 0.04);

          border: 1px solid rgba(255, 255, 255, 0.45);

          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .cta-secondary:hover {
          border-color: rgba(255, 255, 255, 0.8);

          background: rgba(255, 255, 255, 0.1);
        }


        /* RIGHT BUTTON */

        .cta-primary {
          color: ${WINE};

          background: #ffffff;

          border: 1px solid #ffffff;
        }

        .cta-primary:hover {
          background: #f7f7f7;

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.15);
        }


        /* =========================
           TABLET
        ========================= */

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

          .energy-cta,
          .energy-cta-container {
            min-height: 480px;
          }

          .energy-cta-container {
            padding: 85px 40px;
          }

          .cta-heading {
            font-size: 38px;
          }
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {
          .approach-container {
            padding: 50px 24px;
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

          .energy-cta,
          .energy-cta-container {
            min-height: 500px;
          }

          .energy-cta-bg {
            background-position: center center;
          }

          .energy-cta-container {
            padding: 70px 24px;
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


          /* BUTTONS */

          .cta-buttons {
            flex-direction: column;

            width: 100%;
          }

          .cta-button {
            width: 100%;
            max-width: 320px;

            min-height: 48px;

            border-radius: 8px;
          }

          .desktop-break {
            display: none;
          }
        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {
          .approach-container {
            padding: 42px 16px;
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
            padding: 58px 16px;
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

            border-radius: 8px;
          }
        }


        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .approach-heading,
          .cta-heading {
            font-size: 23px;
          }

          .cta-description p {
            font-size: 11.5px;
          }
        }


        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .approach-card,
          .cta-button {
            transition: none;
          }

          .cta-button:hover {
            transform: none;
          }
        }
      `}</style>


      <div className="approach-page">

        {/* =============================
            SECTION 1: OUR APPROACH
        ============================== */}

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


        {/* =============================
            SECTION 2: CTA
        ============================== */}

        <section className="energy-cta">

          {/* BACKGROUND IMAGE */}
          <div className="energy-cta-bg" />

          {/* DARK OVERLAY */}
          <div className="energy-cta-overlay" />


          {/* CTA CONTENT */}
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


            {/* =============================
                UPDATED / SWAPPED BUTTONS
            ============================== */}

            <div className="cta-buttons">

              {/* LEFT BUTTON */}
              <button
                type="button"
                className="cta-button cta-secondary"
              >
                Talk to Our Experts
                <ArrowRight size={15} />
              </button>


              {/* RIGHT BUTTON */}
              <button
                type="button"
                className="cta-button cta-primary"
              >
                Get in Touch
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}