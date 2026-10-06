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

        .approach-section {
          width: 100%;
          background: #ffffff;
          color: #1b1b2a;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =========================
           APPROACH AREA
        ========================= */

        .approach-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
        }

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

        .approach-heading {
          max-width: 720px;
          margin: 14px 0 0;
          color: #1b1b2a;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        /* =========================
           STEPS
        ========================= */

        .approach-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 42px;
        }

        .approach-step-card {
          min-height: 190px;
          padding: 24px;
          background: #fafafa;
          border: 1px solid rgba(0, 0, 0, 0.055);
          border-radius: 18px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.025);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .approach-step-card:hover {
          transform: translateY(-5px);
          border-color: rgba(122, 31, 61, 0.12);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
        }

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

        .approach-step-title {
          margin: 11px 0 0;
          color: #1b1b2a;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .approach-step-description {
          margin: 10px 0 0;
          color: #6b6b74;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* =========================
           CTA BANNER
        ========================= */

        .approach-cta {
          position: relative;
          width: 100%;
          overflow: hidden;
          min-height: 430px;
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
          background: rgba(20, 20, 25, 0.76);
        }

        .approach-cta-content {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          min-height: 430px;
          margin: 0 auto;
          padding: 90px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .approach-cta-heading {
          max-width: 650px;
          margin: 0;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          line-height: 1.22;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .approach-cta-description {
          max-width: 610px;
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.74);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
        }

        .approach-cta-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }

        .approach-primary-button,
        .approach-secondary-button {
          min-height: 44px;
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

        /* =========================
           LARGE TABLET
        ========================= */

        @media (max-width: 1100px) {
          .approach-content {
            padding: 70px 32px;
          }

          .approach-heading {
            font-size: 36px;
          }

          .approach-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .approach-cta-content {
            padding: 80px 32px;
          }

          .approach-cta-heading {
            font-size: 36px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 800px) {
          .approach-content {
            padding: 60px 28px;
          }

          .approach-heading {
            font-size: 34px;
            max-width: 650px;
          }

          .approach-steps {
            margin-top: 34px;
          }

          .approach-step-card {
            min-height: 175px;
            padding: 21px;
          }

          .approach-cta {
            min-height: 390px;
          }

          .approach-cta-content {
            min-height: 390px;
            padding: 70px 28px;
          }

          .approach-cta-heading {
            font-size: 34px;
            max-width: 600px;
          }

          .approach-cta-description {
            max-width: 580px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .approach-content {
            padding: 50px 20px;
          }

          .approach-eyebrow {
            font-size: 10px;
            letter-spacing: 0.1em;
          }

          .approach-heading {
            margin-top: 10px;
            font-size: 28px;
            line-height: 1.27;
          }

          .approach-steps {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 28px;
          }

          .approach-step-card {
            min-height: auto;
            padding: 19px;
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

          .approach-cta {
            min-height: 430px;
          }

          .approach-cta-content {
            min-height: 430px;
            padding: 55px 20px;
          }

          .approach-cta-heading {
            font-size: 28px;
            line-height: 1.28;
          }

          .approach-cta-description {
            margin-top: 14px;
            font-size: 13px;
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
            min-height: 45px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {
          .approach-content {
            padding: 42px 15px;
          }

          .approach-heading {
            font-size: 25px;
          }

          .approach-step-card {
            padding: 16px;
          }

          .approach-step-description {
            font-size: 11px;
          }

          .approach-cta {
            min-height: 410px;
          }

          .approach-cta-content {
            min-height: 410px;
            padding: 45px 15px;
          }

          .approach-cta-heading {
            font-size: 24px;
          }

          .approach-cta-description {
            font-size: 12px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .approach-content {
            padding: 35px 12px;
          }

          .approach-heading {
            font-size: 22px;
          }

          .approach-cta-content {
            padding: 40px 12px;
          }

          .approach-cta-heading {
            font-size: 22px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

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

        {/* =========================
            APPROACH / STEPS
        ========================= */}

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

        {/* =========================
            CTA BANNER
        ========================= */}

        <div className="approach-cta">

          <img
            src="/Diversemodern engineeringteam.png"
            alt="FMCG business technology and operations"
            className="approach-cta-image"
          />

          <div className="approach-cta-overlay"></div>

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
                <ArrowRight className="h-4 w-4" />
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