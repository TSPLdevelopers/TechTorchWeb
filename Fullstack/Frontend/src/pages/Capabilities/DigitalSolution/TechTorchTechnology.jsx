import React from "react";
import {
  Users,
  SlidersHorizontal,
  Link2,
  TrendingUp,
  Clock,
} from "lucide-react";

// =================================================
// STEPS
// =================================================

const STEPS = [
  {
    step: "STEP 01",
    icon: Users,
    title: "Business Understanding",
    description:
      "We start by understanding your business, requirements, and challenges before defining the right solution.",
    phase: "Phase: Discovery",
  },
  {
    step: "STEP 02",
    icon: SlidersHorizontal,
    title: "Flexible Solutions",
    description:
      "Our solutions can be adapted to different business processes, industries, and unique operational environments.",
    phase: "Phase: Custom Fit",
  },
  {
    step: "STEP 03",
    icon: Link2,
    title: "Connected Systems",
    description:
      "We focus on bringing information and processes together so your cross-functional teams work with full synergy.",
    phase: "Phase: Integration",
  },
  {
    step: "STEP 04",
    icon: TrendingUp,
    title: "Scalable Technology",
    description:
      "As your business surges, your architecture scales effortlessly to handle massive transaction volumes.",
    phase: "Phase: Expansion",
  },
  {
    step: "STEP 05",
    icon: Clock,
    title: "Long-Term Support",
    description:
      "Our partnership extends past launch day. We provide proactive enhancements to keep your tech competitive.",
    phase: "Phase: Partnership",
  },
];

// =================================================
// COMPONENT
// =================================================

export default function WhyTechTorchStepsSection() {
  return (
    <section className="why-techtorch-section">
      <div className="why-techtorch-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="why-techtorch-header">

          {/* LABEL */}

          <div className="why-techtorch-label">
            <span className="why-label-line" />

            <span className="why-label-text">
              Why TechTorch
            </span>

            <span className="why-label-line" />
          </div>

          {/* HEADING */}

          <h2 className="why-techtorch-heading">
            Technology With a Business Perspective
          </h2>

          {/* SUB HEADING */}

          <p className="why-techtorch-subheading">
            We believe technology should be practical, reliable, and built
            around the people who use it.
          </p>
        </div>

        {/* =================================================
            STEP CARDS
        ================================================= */}

        <div className="why-techtorch-grid">
          {STEPS.map(
            ({
              step,
              icon: Icon,
              title,
              description,
              phase,
            }) => (
              <div
                key={step}
                className="why-techtorch-card"
              >

                {/* =================================================
                    ICON + STEP
                ================================================= */}

                <div className="why-card-top">

                  {/* ICON */}

                  <div className="why-icon-box">
                    <Icon
                      size={16}
                      strokeWidth={2}
                    />
                  </div>

                  {/* STEP BADGE */}

                  <span className="why-step-badge">
                    {step}
                  </span>
                </div>

                {/* =================================================
                    CARD HEADING
                ================================================= */}

                <h3 className="why-card-heading">
                  {title}
                </h3>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="why-card-description">
                  {description}
                </p>

                {/* =================================================
                    PHASE
                ================================================= */}

                <div className="why-card-phase">
                  <span>{phase}</span>

                  <span className="why-phase-dot" />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`
        /* =================================================
           MAIN SECTION
        ================================================= */

        .why-techtorch-section {
          width: 100%;
          overflow: hidden;

          box-sizing: border-box;

          background: #f6f4ee;

          padding-top: 72px;
          padding-bottom: 72px;

          padding-left: 100px;
          padding-right: 100px;
        }

        .why-techtorch-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          box-sizing: border-box;
        }

        /* =================================================
           HEADER
        ================================================= */

        .why-techtorch-header {
          width: 100%;
          max-width: 760px;

          margin: 0 auto 46px;

          text-align: center;
        }

        /* =================================================
           LABEL
        ================================================= */

        .why-techtorch-label {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-bottom: 15px;
        }

        .why-label-line {
          width: 40px;
          height: 1px;

          flex-shrink: 0;

          background: #9d174d;
        }

        .why-label-text {
          font-family: "Inter", sans-serif;

          font-size: 11px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: #9d174d;

          white-space: nowrap;
        }

        /* =================================================
           MAIN HEADING
        ================================================= */

        .why-techtorch-heading {
          margin: 0 0 13px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 32px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #0f172a;
        }

        /* =================================================
           SUB HEADING
        ================================================= */

        .why-techtorch-subheading {
          width: 100%;
          max-width: 650px;

          margin: 0 auto;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.7;

          color: #64748b;
        }

        /* =================================================
           CARD GRID
        ================================================= */

        .why-techtorch-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 16px;

          width: 100%;
        }

        /* =================================================
           CARD
        ================================================= */

        .why-techtorch-card {
          position: relative;

          display: flex;
          flex-direction: column;

          width: 100%;
          min-width: 0;
          min-height: 260px;

          box-sizing: border-box;

          padding: 21px 19px;

          border: 1px solid #eef0f2;

          border-radius: 14px;

          background: #ffffff;

          box-shadow:
            0 4px 15px rgba(15, 23, 42, 0.035);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .why-techtorch-card:hover {
          transform: translateY(-5px);

          border-color: #f1d7e2;

          box-shadow:
            0 14px 30px rgba(15, 23, 42, 0.08);
        }

        /* =================================================
           CARD TOP
        ================================================= */

        .why-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          margin-bottom: 19px;
        }

        /* =================================================
           ICON
        ================================================= */

        .why-icon-box {
          width: 40px;
          height: 40px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #fdeef4;

          color: #9d174d;

          transition:
            transform 0.3s ease,
            background-color 0.3s ease;
        }

        .why-techtorch-card:hover .why-icon-box {
          transform: translateY(-2px);

          background: #f9e3ec;
        }

        /* =================================================
           STEP BADGE
        ================================================= */

        .why-step-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          padding: 6px 9px;

          border-radius: 999px;

          background: #fdeef4;

          font-family: "Inter", sans-serif;

          font-size: 8.5px;
          font-weight: 700;

          line-height: 1;

          letter-spacing: 0.04em;

          color: #9d174d;

          white-space: nowrap;
        }

        /* =================================================
           CARD HEADING
        ================================================= */

        .why-card-heading {
          margin: 0 0 10px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          font-weight: 700;

          line-height: 1.35;

          letter-spacing: -0.01em;

          color: #0f172a;
        }

        /* =================================================
           CARD DESCRIPTION
        ================================================= */

        .why-card-description {
          flex: 1;

          margin: 0 0 18px;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          font-weight: 400;

          line-height: 1.68;

          color: #64748b;
        }

        /* =================================================
           PHASE
        ================================================= */

        .why-card-phase {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-top: auto;

          padding-top: 13px;

          border-top: 1px solid #f0f1f3;
        }

        .why-card-phase span:first-child {
          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 400;

          line-height: 1.3;

          color: #94a3b8;
        }

        .why-phase-dot {
          width: 4px;
          height: 4px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #9d174d;
        }

        /* =================================================
           TABLET - 1200px
        ================================================= */

        @media (max-width: 1200px) {
          .why-techtorch-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 64px;
            padding-bottom: 64px;
          }

          .why-techtorch-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 17px;
          }

          .why-techtorch-card {
            min-height: 250px;
          }
        }

        /* =================================================
           TABLET - 900px
        ================================================= */

        @media (max-width: 900px) {
          .why-techtorch-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 58px;
            padding-bottom: 58px;
          }

          .why-techtorch-header {
            margin-bottom: 38px;
          }

          .why-techtorch-heading {
            font-size: 29px;
          }

          .why-techtorch-subheading {
            font-size: 13.5px;
          }

          .why-techtorch-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .why-techtorch-card {
            min-height: 245px;

            padding: 21px 20px;
          }
        }

        /* =================================================
           MOBILE - 700px
        ================================================= */

        @media (max-width: 700px) {
          .why-techtorch-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .why-techtorch-header {
            margin-bottom: 32px;
          }

          .why-techtorch-label {
            gap: 8px;

            margin-bottom: 12px;
          }

          .why-label-line {
            width: 24px;
          }

          .why-label-text {
            font-size: 9px;

            letter-spacing: 0.11em;
          }

          .why-techtorch-heading {
            font-size: 26px;

            line-height: 1.25;
          }

          .why-techtorch-subheading {
            max-width: 560px;

            font-size: 12.5px;

            line-height: 1.65;
          }

          .why-techtorch-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .why-techtorch-card {
            min-height: 0;

            padding: 20px;
          }

          .why-card-heading {
            font-size: 15px;
          }

          .why-card-description {
            font-size: 12px;
          }
        }

        /* =================================================
           SMALL MOBILE - 480px
        ================================================= */

        @media (max-width: 480px) {
          .why-techtorch-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 43px;
            padding-bottom: 43px;
          }

          .why-techtorch-header {
            margin-bottom: 29px;
          }

          .why-techtorch-label {
            gap: 6px;
          }

          .why-label-line {
            width: 16px;
          }

          .why-label-text {
            font-size: 8px;

            letter-spacing: 0.08em;
          }

          .why-techtorch-heading {
            font-size: 23px;

            letter-spacing: -0.02em;
          }

          .why-techtorch-subheading {
            font-size: 11.5px;

            line-height: 1.65;
          }

          .why-techtorch-grid {
            gap: 13px;
          }

          .why-techtorch-card {
            padding: 18px;

            border-radius: 12px;
          }

          .why-card-top {
            margin-bottom: 16px;
          }

          .why-icon-box {
            width: 37px;
            height: 37px;

            border-radius: 8px;
          }

          .why-step-badge {
            padding: 5px 8px;

            font-size: 8px;
          }

          .why-card-heading {
            margin-bottom: 8px;

            font-size: 14px;
          }

          .why-card-description {
            margin-bottom: 15px;

            font-size: 11.5px;

            line-height: 1.62;
          }

          .why-card-phase {
            padding-top: 11px;
          }

          .why-card-phase span:first-child {
            font-size: 9px;
          }
        }

        /* =================================================
           VERY SMALL MOBILE - 360px
        ================================================= */

        @media (max-width: 360px) {
          .why-techtorch-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .why-techtorch-heading {
            font-size: 22px;
          }

          .why-techtorch-subheading {
            font-size: 11px;
          }

          .why-techtorch-card {
            padding: 17px;
          }

          .why-card-heading {
            font-size: 13.5px;
          }

          .why-card-description {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}