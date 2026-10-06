import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    step: "Step 01",
    title: "Understand",
    description:
      "Understand your business objectives, processes and technology requirements.",
  },
  {
    step: "Step 02",
    title: "Design & Develop",
    description:
      "Plan and develop a solution around the identified requirements.",
  },
  {
    step: "Step 03",
    title: "Test & Deploy",
    description: "Test the solution and prepare it for implementation.",
  },
  {
    step: "Step 04",
    title: "Support & Maintain",
    description:
      "Provide ongoing support and maintenance after deployment.",
  },
];

export default function ApproachSection() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =====================================================
           MAIN
        ===================================================== */

        .approach-section,
        .approach-section * {
          box-sizing: border-box;
        }

        .approach-section {
          width: 100%;
          background: #ffffff;
          color: #1b1b2a;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }


        /* =====================================================
           APPROACH AREA
           HERO SPACING STANDARD
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ===================================================== */

        .approach-content {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;
        }


        /* =====================================================
           EYEBROW
           INTER
        ===================================================== */

        .approach-eyebrow {
          margin: 0;

          color: #7a1f3d;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;

          letter-spacing: 0.12em;

          text-transform: uppercase;
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .approach-heading {
          max-width: 760px;

          margin: 14px 0 0;

          color: #1b1b2a;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 42px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.035em;
        }


        /* =====================================================
           STEPS
        ===================================================== */

        .approach-steps {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;

          margin-top: 44px;
        }


        /* =====================================================
           STEP CARD
        ===================================================== */

        .approach-step-card {
          min-height: 190px;

          padding: 25px;

          background: #fafafa;

          border: 1px solid rgba(0, 0, 0, 0.055);

          border-radius: 18px;

          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.025);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }


        .approach-step-card:hover {
          transform: translateY(-5px);

          border-color: rgba(122, 31, 61, 0.12);

          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.07);
        }


        /* =====================================================
           STEP NUMBER
           INTER
        ===================================================== */

        .approach-step-number {
          margin: 0;

          color: #a0a0a8;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          line-height: 1.4;

          font-weight: 700;

          letter-spacing: 0.1em;

          text-transform: uppercase;
        }


        /* =====================================================
           STEP TITLE
           PLUS JAKARTA SANS
        ===================================================== */

        .approach-step-title {
          margin: 11px 0 0;

          color: #1b1b2a;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;

          line-height: 1.4;

          font-weight: 700;
        }


        /* =====================================================
           STEP DESCRIPTION
           INTER
        ===================================================== */

        .approach-step-description {
          margin: 10px 0 0;

          color: #6b6b74;

          font-family: "Inter", sans-serif;

          font-size: 13px;

          line-height: 1.75;

          font-weight: 400;
        }


        /* =====================================================
           CTA BANNER
           FULL WIDTH BACKGROUND
        ===================================================== */

        .approach-cta {
          position: relative;

          width: 100%;

          min-height: 430px;

          overflow: hidden;
        }


        .approach-cta-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;
        }


        .approach-cta-overlay {
          position: absolute;

          inset: 0;

          background:
            rgba(20, 20, 25, 0.76);
        }


        /* =====================================================
           CTA CONTENT
           SAME HERO HORIZONTAL ALIGNMENT
        ===================================================== */

        .approach-cta-content {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1600px;

          min-height: 430px;

          margin: 0 auto;

          padding: 90px 100px;

          display: flex;

          flex-direction: column;

          justify-content: center;
        }


        /* =====================================================
           CTA HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .approach-cta-heading {
          max-width: 760px;

          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 42px;

          line-height: 1.22;

          font-weight: 700;

          letter-spacing: -0.035em;
        }


        /* =====================================================
           CTA DESCRIPTION
           INTER
        ===================================================== */

        .approach-cta-description {
          max-width: 700px;

          margin: 18px 0 0;

          color: rgba(255, 255, 255, 0.74);

          font-family: "Inter", sans-serif;

          font-size: 14px;

          line-height: 1.8;

          font-weight: 400;
        }


        /* =====================================================
           CTA BUTTONS
        ===================================================== */

        .approach-cta-buttons {
          display: flex;

          flex-wrap: wrap;

          align-items: center;

          gap: 12px;

          margin-top: 32px;
        }


        .approach-primary-button,
        .approach-secondary-button {
          min-height: 45px;

          padding: 11px 20px;

          border-radius: 8px;

          border: none;

          font-family: "Inter", sans-serif;

          font-size: 13px;

          font-weight: 600;

          cursor: pointer;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          transition:
            background-color 0.25s ease,
            transform 0.25s ease;
        }


        .approach-primary-button {
          background: #7a1f3d;

          color: #ffffff;
        }


        .approach-primary-button:hover {
          background: #64182f;

          transform: translateY(-2px);
        }


        .approach-secondary-button {
          background: #ffffff;

          color: #1b1b2a;
        }


        .approach-secondary-button:hover {
          background: #f1f1f1;

          transform: translateY(-2px);
        }


        /* =====================================================
           LARGE TABLET / LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {

          .approach-content {
            padding-left: 40px;
            padding-right: 40px;
          }

          .approach-cta-content {
            padding-left: 40px;
            padding-right: 40px;
          }

          .approach-heading,
          .approach-cta-heading {
            font-size: 38px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .approach-content {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .approach-heading {
            font-size: 35px;

            max-width: 680px;
          }

          .approach-steps {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;

            margin-top: 38px;
          }

          .approach-step-card {
            min-height: 180px;

            padding: 22px;
          }

          .approach-cta {
            min-height: 410px;
          }

          .approach-cta-content {
            min-height: 410px;

            padding-top: 75px;
            padding-bottom: 75px;
          }

          .approach-cta-heading {
            font-size: 35px;

            max-width: 650px;
          }

          .approach-cta-description {
            max-width: 620px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .approach-content {
            padding:
              50px 24px;
          }


          .approach-eyebrow {
            font-size: 10px;

            letter-spacing: 0.1em;
          }


          .approach-heading {
            margin-top: 10px;

            font-size: 29px;

            line-height: 1.25;
          }


          .approach-steps {
            grid-template-columns: 1fr;

            gap: 12px;

            margin-top: 30px;
          }


          .approach-step-card {
            min-height: auto;

            padding: 20px;

            border-radius: 15px;
          }


          .approach-step-title {
            font-size: 15px;
          }


          .approach-step-description {
            margin-top: 8px;

            font-size: 12px;

            line-height: 1.7;
          }


          /* CTA */

          .approach-cta {
            min-height: 430px;
          }


          .approach-cta-content {
            min-height: 430px;

            padding:
              55px 24px;
          }


          .approach-cta-heading {
            font-size: 29px;

            line-height: 1.27;
          }


          .approach-cta-description {
            margin-top: 14px;

            font-size: 12.5px;

            line-height: 1.7;
          }


          .approach-cta-buttons {
            width: 100%;

            flex-direction: column;

            align-items: stretch;

            margin-top: 25px;
          }


          .approach-primary-button,
          .approach-secondary-button {
            width: 100%;

            min-height: 46px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .approach-content {
            padding:
              44px 16px;
          }


          .approach-heading {
            font-size: 26px;

            line-height: 1.25;
          }


          .approach-step-card {
            padding: 18px;
          }


          .approach-step-description {
            font-size: 11.5px;
          }


          .approach-cta {
            min-height: 415px;
          }


          .approach-cta-content {
            min-height: 415px;

            padding:
              48px 16px;
          }


          .approach-cta-heading {
            font-size: 25px;

            line-height: 1.27;
          }


          .approach-cta-description {
            font-size: 11.5px;
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .approach-content {
            padding:
              38px 16px;
          }


          .approach-heading {
            font-size: 23px;
          }


          .approach-step-card {
            padding: 16px;
          }


          .approach-cta-content {
            padding:
              42px 16px;
          }


          .approach-cta-heading {
            font-size: 22px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .approach-step-card,
          .approach-primary-button,
          .approach-secondary-button {
            transition: none;
          }

          .approach-step-card:hover,
          .approach-primary-button:hover,
          .approach-secondary-button:hover {
            transform: none;
          }
        }

      `}</style>


      <section className="approach-section">

        {/* =================================================
            APPROACH / STEPS
        ================================================= */}

        <div className="approach-content">

          <p className="approach-eyebrow">
            Our Approach
          </p>


          <h2 className="approach-heading">
            From requirement to implementation
          </h2>


          <div className="approach-steps">

            {steps.map((s) => (
              <div
                key={s.step}
                className="approach-step-card"
              >

                <p className="approach-step-number">
                  {s.step}
                </p>


                <h3 className="approach-step-title">
                  {s.title}
                </h3>


                <p className="approach-step-description">
                  {s.description}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* =================================================
            CTA BANNER
        ================================================= */}

        <div className="approach-cta">

          <img
            src="/Diversemodern engineeringteam.png"
            alt="FMCG business technology and operations"
            className="approach-cta-image"
          />


          <div className="approach-cta-overlay" />


          <div className="approach-cta-content">

            <h2 className="approach-cta-heading">
              Build a more connected FMCG business
            </h2>


            <p className="approach-cta-description">
              Bring your business processes, supply chain activities and
              digital systems together with technology designed around your
              requirements.
            </p>


            <div className="approach-cta-buttons">

              <button
                type="button"
                className="approach-primary-button"
              >
                Talk to our experts

                <ArrowRight
                  size={16}
                  strokeWidth={2}
                />
              </button>


              <button
                type="button"
                className="approach-secondary-button"
                onClick={() => navigate("/fmcg-get-in-touch")}
              >
                Get in touch
              </button>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}