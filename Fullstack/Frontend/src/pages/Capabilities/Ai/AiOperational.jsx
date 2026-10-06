import React from "react";

const steps = [
  {
    tag: "01 / Clarity",
    number: "1",
    title: "Technology Without Unnecessary Complexity",
    description:
      "Our Artificial Intelligence as a Service model is designed around a straightforward idea: businesses should be able to harness the power of AI without having to build and maintain the complete infrastructure themselves. By providing AI as a service, TechTorch makes the technology more accessible while keeping the focus on business requirements.",
  },
  {
    tag: "02 / Unification",
    number: "2",
    title: "One Partner for Multiple Technology Needs",
    description:
      "Artificial Intelligence may be one part of your technology requirement, while other areas may require consulting, infrastructure, cybersecurity, engineering, software development or skilled resources. TechTorch brings these capabilities together within one technology services portfolio.",
  },
  {
    tag: "03 / Evolution",
    number: "3",
    title: "A Future-Ready Technology Direction",
    description:
      "Artificial Intelligence is part of the changing technology landscape. TechTorch helps businesses take advantage of modern technology through services designed to support their evolving technology requirements.",
  },
];

export default function TechTorchApproach() {
  return (
    <>
      <section className="tech-approach">
        {/* =====================================================
            TOP ACCENT BAR
        ====================================================== */}

        <div className="tech-approach-accent" />

        <div className="tech-approach-container">
          {/* =================================================
              EYEBROW
          ================================================== */}

          <div className="tech-approach-eyebrow">
            <span className="tech-approach-eyebrow-line" />

            <span className="tech-approach-eyebrow-text">
              Operational Principles
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1 className="tech-approach-title">
            The TechTorch Approach
          </h1>

          {/* =================================================
              CARD GRID
          ================================================== */}

          <div className="tech-approach-grid">
            {steps.map((step) => (
              <div
                key={step.number}
                className="tech-approach-card"
              >
                {/* =================================================
                    CARD TOP
                ================================================== */}

                <div className="tech-approach-card-top">
                  {/* Step Tag */}

                  <span className="tech-approach-tag">
                    {step.tag.toUpperCase()}
                  </span>

                  {/* Number */}

                  <span className="tech-approach-number">
                    {step.number}
                  </span>
                </div>

                {/* =================================================
                    CARD HEADING
                ================================================== */}

                <h3 className="tech-approach-card-title">
                  {step.title}
                </h3>

                {/* =================================================
                    CARD DESCRIPTION
                ================================================== */}

                <p className="tech-approach-card-description">
                  {step.description}
                </p>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}

                <div className="tech-approach-bottom-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* =====================================================
           FONTS
        ====================================================== */

        .tech-approach {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
        }

        .tech-approach,
        .tech-approach * {
          box-sizing: border-box;
        }

        /* =====================================================
           TOP ACCENT
        ====================================================== */

        .tech-approach-accent {
          width: 100%;
          height: 4px;
          background: #730024;
        }

        /* =====================================================
           MAIN CONTAINER
           
           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ====================================================== */

        .tech-approach-container {
          width: 100%;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           EYEBROW
        ====================================================== */

        .tech-approach-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
        }

        .tech-approach-eyebrow-line {
          width: 32px;
          height: 1px;
          flex-shrink: 0;
          background: #730024;
        }

        .tech-approach-eyebrow-text {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.08em;
          color: #730024;
        }

        /* =====================================================
           MAIN HEADING
        ====================================================== */

        .tech-approach-title {
          margin: 0 0 48px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: #1c1c1c;
        }

        /* =====================================================
           CARD GRID
        ====================================================== */

        .tech-approach-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          width: 100%;
        }

        /* =====================================================
           CARD
        ====================================================== */

        .tech-approach-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 390px;
          padding: 26px;
          border: 1px solid #e5e5e5;
          border-radius: 14px;
          background: #fafafa;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .tech-approach-card:hover {
          transform: translateY(-5px);
          border-color: #ead4dd;
          box-shadow: 0 14px 35px rgba(115, 0, 36, 0.08);
        }

        /* =====================================================
           CARD TOP
        ====================================================== */

        .tech-approach-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 28px;
        }

        /* =====================================================
           TAG
        ====================================================== */

        .tech-approach-tag {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.08em;
          color: #730024;
        }

        /* =====================================================
           NUMBER
        ====================================================== */

        .tech-approach-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #f9e8ef;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #730024;
        }

        /* =====================================================
           CARD TITLE
        ====================================================== */

        .tech-approach-card-title {
          margin: 0 0 14px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.015em;
          color: #1c1c1c;
        }

        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .tech-approach-card-description {
          flex: 1;
          margin: 0 0 28px 0;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.75;
          color: #666666;
        }

        /* =====================================================
           BOTTOM ACCENT
        ====================================================== */

        .tech-approach-bottom-line {
          width: 100%;
          height: 1px;
          flex-shrink: 0;
          background: linear-gradient(
            to right,
            #730024,
            rgba(115, 0, 36, 0)
          );
        }

        /* =====================================================
           LARGE TABLET
        ====================================================== */

        @media (max-width: 1200px) {
          .tech-approach-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .tech-approach-title {
            font-size: 35px;
            margin-bottom: 42px;
          }

          .tech-approach-grid {
            gap: 20px;
          }

          .tech-approach-card {
            padding: 24px;
            min-height: 380px;
          }

          .tech-approach-card-title {
            font-size: 17px;
          }

          .tech-approach-card-description {
            font-size: 12.5px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .tech-approach-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .tech-approach-title {
            font-size: 32px;
            margin-bottom: 36px;
          }

          .tech-approach-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .tech-approach-card {
            min-height: 370px;
            padding: 22px;
          }

          .tech-approach-card-top {
            margin-bottom: 24px;
          }

          .tech-approach-card-title {
            font-size: 16px;
          }

          .tech-approach-card-description {
            font-size: 12px;
            line-height: 1.7;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {
          .tech-approach-accent {
            height: 3px;
          }

          .tech-approach-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .tech-approach-eyebrow {
            margin-bottom: 12px;
          }

          .tech-approach-eyebrow-line {
            width: 26px;
          }

          .tech-approach-eyebrow-text {
            font-size: 9px;
          }

          .tech-approach-title {
            margin-bottom: 30px;
            font-size: 28px;
            line-height: 1.22;
          }

          .tech-approach-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .tech-approach-card {
            min-height: auto;
            padding: 22px;
            border-radius: 12px;
          }

          .tech-approach-card-top {
            margin-bottom: 22px;
          }

          .tech-approach-tag {
            font-size: 9px;
          }

          .tech-approach-number {
            width: 28px;
            height: 28px;
            font-size: 10px;
          }

          .tech-approach-card-title {
            margin-bottom: 12px;
            font-size: 16px;
            line-height: 1.4;
          }

          .tech-approach-card-description {
            margin-bottom: 24px;
            font-size: 12px;
            line-height: 1.7;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {
          .tech-approach-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .tech-approach-title {
            margin-bottom: 26px;
            font-size: 25px;
          }

          .tech-approach-grid {
            gap: 14px;
          }

          .tech-approach-card {
            padding: 19px;
          }

          .tech-approach-card-top {
            margin-bottom: 20px;
          }

          .tech-approach-card-title {
            font-size: 15px;
          }

          .tech-approach-card-description {
            font-size: 11.5px;
            line-height: 1.7;
          }

          .tech-approach-bottom-line {
            margin-top: 2px;
          }
        }
      `}</style>
    </>
  );
}