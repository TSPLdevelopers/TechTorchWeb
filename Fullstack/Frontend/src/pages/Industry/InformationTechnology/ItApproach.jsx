import React from "react";
import {
  Search,
  PenLine,
  CheckCircle2,
  Headphones,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    body: "Understand your business objectives, existing environment and technology requirements.",
  },
  {
    num: "02",
    icon: PenLine,
    title: "Design & Develop",
    body: "Plan and develop a solution around the identified requirements.",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Test & Deploy",
    body: "Validate the solution and prepare it for implementation.",
  },
  {
    num: "04",
    icon: Headphones,
    title: "Support & Maintain",
    body: "Provide ongoing technical support, maintenance and improvements as your requirements evolve.",
  },
];

export default function OurApproachStepsSection() {
  return (
    <>
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           GLOBAL
        ===================================================== */

        .our-approach-section {
          width: 100%;
          overflow: hidden;
          background: #f4f1ec;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
        }

        .our-approach-section *,
        .our-approach-section *::before,
        .our-approach-section *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           CONTAINER
           
           Desktop : 100px
           Tablet  : 40px
           Mobile  : 24px
           Small   : 16px
        ===================================================== */

        .our-approach-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 78px 100px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .approach-eyebrow {
          margin: 0 0 12px;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .approach-heading {
          max-width: 760px;

          margin: 0 0 40px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.22;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        /* =====================================================
           STEPS GRID
        ===================================================== */

        .approach-steps-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 18px;
        }

        /* =====================================================
           STEP CARD
        ===================================================== */

        .approach-step-card {
          min-width: 0;

          padding: 22px;

          background: #ffffff;

          border-radius: 15px;

          box-shadow:
            0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .approach-step-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 12px 28px rgba(27, 27, 42, 0.08);
        }

        /* =====================================================
           CARD TOP
        ===================================================== */

        .approach-step-top {
          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 20px;
        }

        .approach-step-number {
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 21px;
          line-height: 1;
          font-weight: 700;
        }

        .approach-step-icon {
          display: flex;

          align-items: center;
          justify-content: center;

          width: 40px;
          height: 40px;

          flex-shrink: 0;

          border-radius: 9px;

          background: #fbeef1;
          color: ${WINE};
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .approach-step-title {
          margin: 0 0 9px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: -0.1px;
        }

        .approach-step-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {
          .our-approach-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .approach-heading {
            font-size: 35px;
            margin-bottom: 34px;
          }

          .approach-steps-grid {
            gap: 15px;
          }

          .approach-step-card {
            padding: 20px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .our-approach-container {
            padding-top: 60px;
            padding-bottom: 60px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .approach-heading {
            font-size: 32px;
            margin-bottom: 30px;
          }

          .approach-steps-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 15px;
          }

          .approach-step-card {
            padding: 20px;
          }

          .approach-step-title {
            font-size: 15px;
          }

          .approach-step-body {
            font-size: 12px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 700px) {
          .our-approach-container {
            padding-top: 52px;
            padding-bottom: 52px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .approach-heading {
            font-size: 30px;
          }

          .approach-steps-grid {
            gap: 14px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .our-approach-container {
            padding-top: 48px;
            padding-bottom: 48px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .approach-eyebrow {
            margin-bottom: 10px;

            font-size: 10px;
            letter-spacing: 0.8px;
          }

          .approach-heading {
            margin-bottom: 26px;

            font-size: 27px;
            line-height: 1.25;

            letter-spacing: -0.6px;
          }

          .approach-steps-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .approach-step-card {
            padding: 18px;

            border-radius: 13px;
          }

          .approach-step-top {
            margin-bottom: 16px;
          }

          .approach-step-number {
            font-size: 19px;
          }

          .approach-step-icon {
            width: 37px;
            height: 37px;
          }

          .approach-step-title {
            margin-bottom: 8px;

            font-size: 15px;
          }

          .approach-step-body {
            font-size: 12px;
            line-height: 1.6;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .our-approach-container {
            padding-top: 42px;
            padding-bottom: 42px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .approach-heading {
            font-size: 25px;
            letter-spacing: -0.4px;
          }

          .approach-step-card {
            padding: 16px;
          }

          .approach-step-number {
            font-size: 18px;
          }

          .approach-step-icon {
            width: 35px;
            height: 35px;
          }

          .approach-step-title {
            font-size: 14px;
          }

          .approach-step-body {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {
          .our-approach-container {
            padding-top: 36px;
            padding-bottom: 36px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .approach-heading {
            font-size: 23px;
          }

          .approach-step-card {
            padding: 15px;
          }

          .approach-step-title {
            font-size: 13.5px;
          }

          .approach-step-body {
            font-size: 11px;
          }
        }

        /* =====================================================
           DESKTOP LINE BREAK
        ===================================================== */

        @media (max-width: 700px) {
          .approach-desktop-break {
            display: none;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .approach-step-card {
            transition: none;
          }

          .approach-step-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="our-approach-section">
        <div className="our-approach-container">

          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div>
            <p className="approach-eyebrow">
              Our Approach
            </p>

            <h2 className="approach-heading">
              From Requirement to Long-Term
              <br className="approach-desktop-break" />
              Support
            </h2>
          </div>

          {/* =================================================
              STEPS
          ================================================= */}

          <div className="approach-steps-grid">
            {steps.map(
              ({ num, icon: Icon, title, body }) => (
                <article
                  key={num}
                  className="approach-step-card"
                >
                  <div className="approach-step-top">

                    <span className="approach-step-number">
                      {num}
                    </span>

                    <span className="approach-step-icon">
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>

                  </div>

                  <h3 className="approach-step-title">
                    {title}
                  </h3>

                  <p className="approach-step-body">
                    {body}
                  </p>
                </article>
              )
            )}
          </div>

        </div>
      </section>
    </>
  );
}