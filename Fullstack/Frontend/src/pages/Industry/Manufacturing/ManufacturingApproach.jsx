import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Understand your business processes, technology environment and requirements.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define an approach aligned with your business objectives and technology needs.",
  },
  {
    num: "03",
    title: "Develop & Integrate",
    body: "Develop, configure or integrate the required technology solutions.",
  },
  {
    num: "04",
    title: "Implement",
    body: "Support the implementation of the solution within your business environment.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance, training and technology support as requirements evolve.",
  },
];

export default function ApproachStepsCenteredSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .approach-section {
          width: 100%;
          background: #f4f1ec;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .approach-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* HEADER */

        .approach-header {
          width: 100%;
          max-width: 680px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .approach-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 13px;
          margin-bottom: 18px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .approach-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${WINE};
          flex-shrink: 0;
        }

        .approach-heading {
          margin: 0 0 14px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 3vw, 38px);
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${INK};
        }

        .approach-subheading {
          margin: 0 auto;
          max-width: 620px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 500;
          color: ${MUTED};
        }

        /* STEPS */

        .approach-steps {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
        }

        .approach-card {
          min-width: 0;
          background: #ffffff;
          border-radius: 16px;
          padding: 22px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.045);
          border: 1px solid rgba(27, 27, 42, 0.035);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .approach-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(27, 27, 42, 0.09);
        }

        .approach-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          height: 26px;
          padding: 0 8px;
          margin-bottom: 17px;
          border-radius: 7px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .approach-card-title {
          margin: 0 0 9px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          color: ${INK};
        }

        .approach-card-body {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
          color: ${MUTED};
        }

        /* LARGE TABLET */

        @media (max-width: 1100px) {
          .approach-container {
            padding: 64px 32px;
          }

          .approach-steps {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .approach-card {
            padding: 22px;
          }
        }

        /* TABLET */

        @media (max-width: 800px) {
          .approach-container {
            padding: 58px 28px;
          }

          .approach-header {
            margin-bottom: 38px;
          }

          .approach-heading {
            font-size: 30px;
          }

          .approach-subheading {
            font-size: 13.5px;
            line-height: 1.75;
          }

          .approach-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .approach-card {
            padding: 20px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .approach-container {
            padding: 50px 20px;
          }

          .approach-header {
            margin-bottom: 32px;
          }

          .approach-badge {
            font-size: 10px;
            padding: 6px 11px;
            margin-bottom: 16px;
          }

          .approach-heading {
            font-size: 27px;
            line-height: 1.25;
            letter-spacing: -0.02em;
            margin-bottom: 12px;
          }

          .approach-subheading {
            font-size: 13px;
            line-height: 1.75;
          }

          .approach-steps {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .approach-card {
            padding: 20px;
            border-radius: 14px;
          }

          .approach-number {
            margin-bottom: 14px;
          }

          .approach-card-title {
            font-size: 15px;
          }

          .approach-card-body {
            font-size: 12px;
            line-height: 1.7;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 400px) {
          .approach-container {
            padding: 44px 16px;
          }

          .approach-heading {
            font-size: 25px;
          }

          .approach-subheading {
            font-size: 12.5px;
          }

          .approach-card {
            padding: 18px;
          }

          .approach-card-title {
            font-size: 14px;
          }

          .approach-card-body {
            font-size: 11.5px;
          }
        }

        /* VERY SMALL MOBILE */

        @media (max-width: 340px) {
          .approach-container {
            padding: 40px 14px;
          }

          .approach-heading {
            font-size: 23px;
          }

          .approach-subheading {
            font-size: 12px;
          }

          .approach-card {
            padding: 16px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .approach-card {
            transition: none;
          }
        }
      `}</style>

      <section className="approach-section">
        <div className="approach-container">

          {/* HEADER */}
          <div className="approach-header">
            <span className="approach-badge">
              <span className="approach-badge-dot" />
              OUR APPROACH
            </span>

            <h2 className="approach-heading">
              From Requirement to Long-Term Support
            </h2>

            <p className="approach-subheading">
              Our approach starts with understanding your business
              requirements and continues through development, implementation
              and ongoing support.
            </p>
          </div>

          {/* STEPS */}
          <div className="approach-steps">
            {steps.map(({ num, title, body }) => (
              <div className="approach-card" key={num}>
                <span className="approach-number">
                  {num}
                </span>

                <h3 className="approach-card-title">
                  {title}
                </h3>

                <p className="approach-card-body">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}