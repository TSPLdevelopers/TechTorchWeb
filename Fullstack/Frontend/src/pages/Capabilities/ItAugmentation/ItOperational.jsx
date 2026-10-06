import React from "react";
import { ArrowRight } from "lucide-react";

const BRAND_COLOR = "#730024";

const steps = [
  {
    number: "01",
    phase: "Phase I · Assessment",
    title: "Requirement Mapping",
    description:
      "Deep architectural evaluation of technical stack specifications, project timeline constraints, engineering maturity, and cultural synergies.",
    metaLabel: "Deliverable",
    metaValue: "Stack Blueprinting",
    featured: false,
  },
  {
    number: "02",
    phase: "Phase II · Curation",
    title: "Precision Talent Curation",
    description:
      "Identification, live coding validation, and rigorous vetting of senior technical talent tailored precisely for immediate velocity and seamless impact.",
    metaLabel: "Benchmark",
    metaValue: "48 Hour Matching",
    featured: true,
    badge: "FAST-TRACK",
  },
  {
    number: "03",
    phase: "Phase III · Deployment",
    title: "Seamless Integration & Delivery",
    description:
      "Frictionless assimilation into daily standups, Jira/Git sprint pipelines, and corporate security frameworks with guaranteed ramp-up speed.",
    metaLabel: "Guarantee",
    metaValue: "SLA-Backed Velocity",
    featured: false,
  },
];

export default function IntegratedResourcing() {
  return (
    <>
      <section className="integrated-resourcing-section">

        {/* =====================================================
            TOP CONTENT
        ===================================================== */}

        <div className="integrated-resourcing-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="integrated-resourcing-header">
            <div className="integrated-resourcing-eyebrow-wrap">
              <div className="integrated-resourcing-eyebrow">
                <span className="integrated-resourcing-eyebrow-dot" />

                Operational Excellence & Resourcing Architecture
              </div>
            </div>

            <h1 className="integrated-resourcing-heading">
              Integrated Resourcing Across Every Critical Dimension
            </h1>

            <p className="integrated-resourcing-subheading">
              Our services include{" "}
              <span>
                contract staffing, contract-to-hire, dedicated development
                teams, remote engineers, project-based hiring, resource
                replacement, bench hiring, vendor partnership, MSP support,
                and offshore development teams.
              </span>
            </p>
          </div>

          {/* =================================================
              STEP CARDS
          ================================================= */}

          <div className="integrated-resourcing-grid">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`integrated-resourcing-card ${
                  step.featured
                    ? "integrated-resourcing-card-featured"
                    : ""
                }`}
              >
                {/* Featured Badge */}

                {step.badge && (
                  <span className="integrated-resourcing-badge">
                    {step.badge}
                  </span>
                )}

                {/* Card Header */}

                <div className="integrated-resourcing-card-header">
                  <span
                    className={`integrated-resourcing-number ${
                      step.featured
                        ? "integrated-resourcing-number-active"
                        : ""
                    }`}
                  >
                    {step.number}
                  </span>

                  <span className="integrated-resourcing-phase">
                    {step.phase}
                  </span>
                </div>

                {/* Title */}

                <h3 className="integrated-resourcing-card-title">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="integrated-resourcing-card-description">
                  {step.description}
                </p>

                {/* Meta */}

                <div className="integrated-resourcing-meta">
                  <span className="integrated-resourcing-meta-label">
                    {step.metaLabel}
                  </span>

                  <span className="integrated-resourcing-meta-value">
                    {step.metaValue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="integrated-resourcing-cta">

          {/* Background Overlay */}

          <div className="integrated-resourcing-cta-overlay" />

          {/* CTA Content */}

          <div className="integrated-resourcing-cta-content">

            {/* Label */}

            <div className="integrated-resourcing-cta-label-wrap">
              <span className="integrated-resourcing-cta-label">
                Flexible Technology Support
              </span>
            </div>

            {/* Heading */}

            <h2 className="integrated-resourcing-cta-heading">
              Flexible Technology Support When You Need It
            </h2>

            {/* Description */}

            <p className="integrated-resourcing-cta-description">
              Technology requirements can change quickly. Our IT augmentation
              services give businesses the flexibility to strengthen their
              teams, access additional expertise, and support their technology
              initiatives according to their changing needs.
            </p>

            {/* Button */}

            <button className="integrated-resourcing-cta-button">
              <span>Talk to Our Experts</span>

              <ArrowRight className="integrated-resourcing-cta-arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .integrated-resourcing-section {
          width: 100%;
          overflow: hidden;

          background: #f7f5f2;
        }

        /* =====================================================
           TOP CONTAINER
           Desktop: 100px
        ===================================================== */

        .integrated-resourcing-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .integrated-resourcing-header {
          width: 100%;
          max-width: 950px;

          margin: 0 auto 48px;

          text-align: center;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .integrated-resourcing-eyebrow-wrap {
          display: flex;
          justify-content: center;

          margin-bottom: 17px;
        }

        .integrated-resourcing-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          padding: 6px 12px;

          border-radius: 999px;

          background: #f9e8ef;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        .integrated-resourcing-eyebrow-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${BRAND_COLOR};
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .integrated-resourcing-heading {
          margin: 0 0 15px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           SUBHEADING
        ===================================================== */

        .integrated-resourcing-subheading {
          max-width: 900px;

          margin: 0 auto;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        .integrated-resourcing-subheading span {
          font-weight: 600;

          color: #525252;
        }

        /* =====================================================
           CARD GRID
        ===================================================== */

        .integrated-resourcing-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;

          width: 100%;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .integrated-resourcing-card {
          position: relative;

          display: flex;
          flex-direction: column;

          min-width: 0;
          min-height: 275px;

          padding: 27px;

          border: 1px solid #e3e1df;
          border-radius: 14px;

          background: #ffffff;

          box-shadow:
            0 4px 18px rgba(0, 0, 0, 0.025);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .integrated-resourcing-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 14px 32px rgba(0, 0, 0, 0.07);
        }

        /* =====================================================
           FEATURED CARD
        ===================================================== */

        .integrated-resourcing-card-featured {
          border: 2px solid ${BRAND_COLOR};

          box-shadow:
            0 10px 30px rgba(115, 0, 36, 0.1);
        }

        .integrated-resourcing-card-featured:hover {
          box-shadow:
            0 18px 38px rgba(115, 0, 36, 0.14);
        }

        /* =====================================================
           FEATURED BADGE
        ===================================================== */

        .integrated-resourcing-badge {
          position: absolute;

          top: -11px;
          right: 20px;

          padding: 5px 10px;

          border-radius: 999px;

          background: ${BRAND_COLOR};

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: #ffffff;
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .integrated-resourcing-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 24px;
        }

        /* =====================================================
           NUMBER
        ===================================================== */

        .integrated-resourcing-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 37px;
          height: 37px;

          flex-shrink: 0;

          border-radius: 9px;

          background: #f9e8ef;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;

          color: ${BRAND_COLOR};
        }

        .integrated-resourcing-number-active {
          background: ${BRAND_COLOR};

          color: #ffffff;
        }

        /* =====================================================
           PHASE
        ===================================================== */

        .integrated-resourcing-phase {
          text-align: right;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 500;
          line-height: 1.4;

          color: #a3a3a3;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .integrated-resourcing-card-title {
          margin: 0 0 10px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;

          color: #1c1c1c;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .integrated-resourcing-card-description {
          flex: 1;

          margin: 0 0 24px;

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           CARD META
        ===================================================== */

        .integrated-resourcing-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding-top: 13px;

          border-top: 1px solid #eeeeee;
        }

        .integrated-resourcing-meta-label {
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 500;
          line-height: 1.4;

          color: #a3a3a3;
        }

        .integrated-resourcing-meta-value {
          text-align: right;

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          line-height: 1.4;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .integrated-resourcing-cta {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;

          min-height: 440px;

          overflow: hidden;

          background-image: url("/Professionalmodern.png");
          background-size: cover;
          background-position: center;
        }

        /* =====================================================
           CTA OVERLAY
        ===================================================== */

        .integrated-resourcing-cta-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(20, 10, 15, 0.55) 0%,
              rgba(20, 10, 15, 0.8) 100%
            );
        }

        /* =====================================================
           CTA CONTENT
        ===================================================== */

        .integrated-resourcing-cta-content {
          position: relative;
          z-index: 1;

          width: 100%;
          max-width: 900px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 85px;
          padding-bottom: 85px;

          text-align: center;
        }

        /* =====================================================
           CTA LABEL
        ===================================================== */

        .integrated-resourcing-cta-label-wrap {
          display: flex;
          justify-content: center;

          margin-bottom: 18px;
        }

        .integrated-resourcing-cta-label {
          display: inline-flex;

          padding: 6px 12px;

          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.1);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.8);

          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        /* =====================================================
           CTA HEADING
        ===================================================== */

        .integrated-resourcing-cta-heading {
          margin: 0 0 17px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;

          color: #ffffff;
        }

        /* =====================================================
           CTA DESCRIPTION
        ===================================================== */

        .integrated-resourcing-cta-description {
          max-width: 760px;

          margin: 0 auto 30px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: rgba(255, 255, 255, 0.75);
        }

        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .integrated-resourcing-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 12px 21px;

          border: none;
          border-radius: 999px;

          background: ${BRAND_COLOR};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;

          color: #ffffff;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease,
            box-shadow 0.3s ease;
        }

        .integrated-resourcing-cta-button:hover {
          transform: translateY(-2px);

          opacity: 0.92;

          box-shadow:
            0 10px 25px rgba(115, 0, 36, 0.35);
        }

        .integrated-resourcing-cta-arrow {
          width: 15px;
          height: 15px;

          transition: transform 0.3s ease;
        }

        .integrated-resourcing-cta-button:hover
          .integrated-resourcing-cta-arrow {
          transform: translateX(3px);
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .integrated-resourcing-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .integrated-resourcing-heading {
            font-size: 34px;
          }

          .integrated-resourcing-subheading {
            font-size: 13px;
          }

          .integrated-resourcing-grid {
            gap: 20px;
          }

          .integrated-resourcing-card {
            min-height: 260px;

            padding: 23px;
          }

          .integrated-resourcing-card-title {
            font-size: 15px;
          }

          .integrated-resourcing-card-description {
            font-size: 12px;
          }

          .integrated-resourcing-cta-content {
            padding-left: 40px;
            padding-right: 40px;
          }

          .integrated-resourcing-cta-heading {
            font-size: 36px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .integrated-resourcing-container {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .integrated-resourcing-header {
            margin-bottom: 38px;
          }

          .integrated-resourcing-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .integrated-resourcing-cta {
            min-height: 400px;
          }

          .integrated-resourcing-cta-content {
            padding-top: 70px;
            padding-bottom: 70px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .integrated-resourcing-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .integrated-resourcing-header {
            margin-bottom: 30px;
          }

          .integrated-resourcing-eyebrow-wrap {
            margin-bottom: 14px;
          }

          .integrated-resourcing-eyebrow {
            padding: 5px 9px;

            font-size: 8px;
          }

          .integrated-resourcing-eyebrow-dot {
            width: 5px;
            height: 5px;
          }

          .integrated-resourcing-heading {
            margin-bottom: 12px;

            font-size: 28px;
            line-height: 1.22;
          }

          .integrated-resourcing-subheading {
            font-size: 11px;
            line-height: 1.7;
          }

          .integrated-resourcing-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .integrated-resourcing-card {
            min-height: 220px;

            padding: 21px;
          }

          .integrated-resourcing-card-header {
            margin-bottom: 20px;
          }

          .integrated-resourcing-number {
            width: 34px;
            height: 34px;

            border-radius: 8px;

            font-size: 10px;
          }

          .integrated-resourcing-phase {
            font-size: 8px;
          }

          .integrated-resourcing-card-title {
            margin-bottom: 8px;

            font-size: 14px;
          }

          .integrated-resourcing-card-description {
            margin-bottom: 20px;

            font-size: 10.5px;
          }

          .integrated-resourcing-meta-label {
            font-size: 8.5px;
          }

          .integrated-resourcing-meta-value {
            font-size: 9.5px;
          }

          .integrated-resourcing-badge {
            right: 17px;

            font-size: 7px;
          }

          /* CTA */

          .integrated-resourcing-cta {
            min-height: 350px;

            background-position: center;
          }

          .integrated-resourcing-cta-content {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .integrated-resourcing-cta-label-wrap {
            margin-bottom: 14px;
          }

          .integrated-resourcing-cta-label {
            padding: 5px 10px;

            font-size: 8px;
          }

          .integrated-resourcing-cta-heading {
            margin-bottom: 13px;

            font-size: 28px;
            line-height: 1.22;
          }

          .integrated-resourcing-cta-description {
            margin-bottom: 24px;

            font-size: 11px;
            line-height: 1.7;
          }

          .integrated-resourcing-cta-button {
            padding: 11px 18px;

            font-size: 10px;
          }

          .integrated-resourcing-cta-arrow {
            width: 14px;
            height: 14px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .integrated-resourcing-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .integrated-resourcing-header {
            margin-bottom: 25px;
          }

          .integrated-resourcing-eyebrow {
            font-size: 7px;
          }

          .integrated-resourcing-heading {
            font-size: 24px;
          }

          .integrated-resourcing-subheading {
            font-size: 10px;
          }

          .integrated-resourcing-grid {
            gap: 13px;
          }

          .integrated-resourcing-card {
            min-height: 205px;

            padding: 18px;
          }

          .integrated-resourcing-card-header {
            margin-bottom: 18px;
          }

          .integrated-resourcing-number {
            width: 32px;
            height: 32px;

            font-size: 9px;
          }

          .integrated-resourcing-phase {
            font-size: 7.5px;
          }

          .integrated-resourcing-card-title {
            font-size: 13px;
          }

          .integrated-resourcing-card-description {
            font-size: 10px;
          }

          .integrated-resourcing-meta-label {
            font-size: 8px;
          }

          .integrated-resourcing-meta-value {
            font-size: 9px;
          }

          .integrated-resourcing-badge {
            top: -9px;
            right: 15px;

            padding: 4px 8px;

            font-size: 6.5px;
          }

          /* CTA */

          .integrated-resourcing-cta {
            min-height: 315px;
          }

          .integrated-resourcing-cta-content {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .integrated-resourcing-cta-label {
            font-size: 7px;
          }

          .integrated-resourcing-cta-heading {
            font-size: 24px;
          }

          .integrated-resourcing-cta-description {
            font-size: 10px;
          }

          .integrated-resourcing-cta-button {
            padding: 10px 16px;

            font-size: 9.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .integrated-resourcing-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .integrated-resourcing-heading {
            font-size: 22px;
          }

          .integrated-resourcing-subheading {
            font-size: 9.5px;
          }

          .integrated-resourcing-card {
            padding: 17px;
          }

          .integrated-resourcing-card-title {
            font-size: 12.5px;
          }

          .integrated-resourcing-card-description {
            font-size: 9.5px;
          }

          .integrated-resourcing-cta {
            min-height: 295px;
          }

          .integrated-resourcing-cta-heading {
            font-size: 22px;
          }

          .integrated-resourcing-cta-description {
            font-size: 9.5px;
          }
        }
      `}</style>
    </>
  );
}