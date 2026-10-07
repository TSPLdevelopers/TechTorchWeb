import React, { useEffect, useRef, useState } from "react";
import { Zap, ArrowDown, RefreshCw } from "lucide-react";

const PILLARS = [
  {
    label: "CLARITY",
    description: "Single pane of truth across operations",
  },
  {
    label: "CONTROL",
    description: "Governed workflows & zero bottlenecks",
  },
  {
    label: "SCALE",
    description: "Modular architecture built for surges",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Business Need & Discovery",
    tag: "Input",
    tagColor: "#64748b",
    description:
      "Decouple domain constraints, map operational friction points, and isolate core business goals.",
  },
  {
    number: "02",
    title: "Intelligent Architecture",
    tag: "Engine",
    tagColor: "#730024",
    description:
      "Modular cloud pipelines, event-driven data fabrics, governed automation & resilient APIs.",
    highlight: true,
  },
  {
    number: "03",
    title: "Measurable Enterprise Value",
    tag: "Outcome",
    tagColor: "#059669",
    description:
      "Single source of operational truth, automated compliance audits, and scalable revenue capacity.",
  },
];

export default function StrategicTransformationSection() {
  const sectionRef = useRef(null);
  const [stepsVisible, setStepsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`strategic-transformation ${
          stepsVisible ? "strategic-steps-visible" : ""
        }`}
      >
        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div className="strategic-container">
          {/* =================================================
              DECORATIVE GLOW
          ================================================== */}

          <div className="strategic-glow" />

          {/* =================================================
              CONTENT GRID
          ================================================== */}

          <div className="strategic-grid">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="strategic-left">
              {/* Label */}

              <div className="strategic-label">
                <Zap size={14} strokeWidth={2} />

                <span>Strategic Digital Transformation</span>
              </div>

              {/* Heading */}

              <h2 className="strategic-heading">
                Turning Business Needs into Digital Solutions
              </h2>

              {/* Description */}

              <p className="strategic-description">
                <strong>
                  Technology is most valuable when it solves a real business
                  problem.
                </strong>{" "}
                Our digital solutions bring greater operational visibility,
                cross-departmental agility, and precision control to the way
                your enterprise performs. We combine contextual business
                intelligence with scalable cloud engineering to create digital
                assets that drive bottom-line resilience.
              </p>

              {/* =================================================
                  PILLARS
              ================================================== */}

              <div className="strategic-pillars">
                {PILLARS.map(({ label, description }) => (
                  <div className="strategic-pillar" key={label}>
                    <p className="strategic-pillar-label">{label}</p>

                    <p className="strategic-pillar-description">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                RIGHT FLOW CARD
            ================================================== */}

            <div className="strategic-flow-card">
              {/* Flow Header */}

              <div className="strategic-flow-header">
                <div className="strategic-flow-title">
                  <span className="strategic-flow-dot" />

                  <span>Solution Synthesis Flow</span>
                </div>

                <span className="strategic-flow-badge">
                  End-to-End Delivery
                </span>
              </div>

              {/* =================================================
                  STEPS
              ================================================== */}

              <div className="strategic-steps">
                {STEPS.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div
                      className={`strategic-step ${
                        step.highlight ? "strategic-step-highlight" : ""
                      }`}
                      style={{
                        "--step-delay": `${index * 220}ms`,
                      }}
                    >
                      {/* Step Header */}

                      <div className="strategic-step-header">
                        <div className="strategic-step-main">
                          <span
                            className={`strategic-step-number ${
                              step.highlight
                                ? "strategic-step-number-active"
                                : ""
                            }`}
                          >
                            {step.number}
                          </span>

                          <p
                            className={`strategic-step-title ${
                              step.highlight
                                ? "strategic-step-title-active"
                                : ""
                            }`}
                          >
                            {step.title}
                          </p>
                        </div>

                        <span
                          className="strategic-step-tag"
                          style={{ color: step.tagColor }}
                        >
                          {step.tag}
                        </span>
                      </div>

                      {/* Description */}

                      <p className="strategic-step-description">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    {index < STEPS.length - 1 && (
                      <div
                        className="strategic-arrow"
                        style={{
                          "--arrow-delay": `${index * 220 + 150}ms`,
                        }}
                      >
                        <ArrowDown size={15} strokeWidth={2} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* =================================================
                  BOTTOM BAR
              ================================================== */}

              <div className="strategic-bottom-bar">
                <span className="strategic-bottom-left">
                  <RefreshCw size={12} strokeWidth={2} />
                  Zero Silo Architecture
                </span>

                <span className="strategic-bottom-right">
                  ENTERPRISE VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================================
           MAIN SECTION
        ========================================================= */

        .strategic-transformation {
          width: 100%;
          box-sizing: border-box;
          padding: 80px 100px;
          background: #f3f1f5;
        }

        /* =========================================================
           MAIN CONTAINER
        ========================================================= */

        .strategic-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          overflow: hidden;
          box-sizing: border-box;
          padding: 48px;
          border: 1px solid #e7e4e8;
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
        }

        /* =========================================================
           DECORATIVE GLOW
        ========================================================= */

        .strategic-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: #f4c9dd;
          opacity: 0.4;
          filter: blur(70px);
          pointer-events: none;
        }

        /* =========================================================
           GRID
        ========================================================= */

        .strategic-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          align-items: start;
          gap: 60px;
        }

        /* =========================================================
           LEFT CONTENT
        ========================================================= */

        .strategic-left {
          width: 100%;
          min-width: 0;
        }

        /* =========================================================
           LABEL
        ========================================================= */

        .strategic-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #730024;
        }

        /* =========================================================
           HEADING
        ========================================================= */

        .strategic-heading {
          max-width: 700px;
          margin: 0 0 18px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.025em;

          color: #0f172a;
        }

        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .strategic-description {
          max-width: 720px;
          margin: 0 0 32px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;

          color: #64748b;
        }

        .strategic-description strong {
          font-weight: 700;
          color: #334155;
        }

        /* =========================================================
           PILLARS
        ========================================================= */

        .strategic-pillars {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          width: 100%;
        }

        .strategic-pillar {
          min-width: 0;
        }

        .strategic-pillar-label {
          margin: 0 0 7px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: #730024;
        }

        .strategic-pillar-description {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.6;

          color: #64748b;
        }

        /* =========================================================
           RIGHT FLOW CARD
        ========================================================= */

        .strategic-flow-card {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;

          padding: 24px;

          border: 1px solid #f4c9dd;
          border-radius: 18px;

          background: #fdf6f9;
        }

        /* =========================================================
           FLOW HEADER
        ========================================================= */

        .strategic-flow-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;

          margin-bottom: 22px;
        }

        .strategic-flow-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 0;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: #730024;
        }

        .strategic-flow-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #730024;
        }

        .strategic-flow-badge {
          flex-shrink: 0;

          padding: 6px 10px;
          border-radius: 999px;

          background: #fbe4ed;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.2;

          color: #730024;
        }

        /* =========================================================
           STEPS
        ========================================================= */

        .strategic-steps {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        /* =========================================================
           STEP — VIEWPORT REVEAL
        ========================================================= */

        .strategic-step {
          width: 100%;
          box-sizing: border-box;

          padding: 16px;

          border: 1px solid #eef0f2;
          border-radius: 12px;

          background: #ffffff;

          opacity: 0;
          transform: translateX(35px) scale(0.96);

          transition:
            opacity 0.55s ease,
            transform 0.55s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;

          transition-delay: var(--step-delay);
        }

        .strategic-steps-visible .strategic-step {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        .strategic-step:hover {
          transform: translateY(-2px) scale(1);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
        }

        .strategic-step-highlight {
          border-color: #730024;
          box-shadow: 0 5px 18px rgba(115, 0, 36, 0.06);
        }

        /* =========================================================
           STEP HEADER
        ========================================================= */

        .strategic-step-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;

          margin-bottom: 8px;
        }

        .strategic-step-main {
          display: flex;
          align-items: center;
          min-width: 0;
          gap: 10px;
        }

        .strategic-step-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 25px;
          height: 25px;
          flex-shrink: 0;

          border-radius: 6px;
          background: #f1f5f9;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1;

          color: #64748b;
        }

        .strategic-step-number-active {
          background: #730024;
          color: #ffffff;
        }

        .strategic-step-title {
          min-width: 0;
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.35;

          color: #0f172a;
        }

        .strategic-step-title-active {
          color: #730024;
        }

        .strategic-step-tag {
          flex-shrink: 0;
          margin-top: 3px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* =========================================================
           STEP DESCRIPTION
        ========================================================= */

        .strategic-step-description {
          margin: 0;
          padding-left: 35px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;

          color: #64748b;
        }

        /* =========================================================
           ARROW — VIEWPORT REVEAL
        ========================================================= */

        .strategic-arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          height: 28px;

          color: #730024;

          opacity: 0;
          transform: translateY(-6px);

          transition:
            opacity 0.35s ease,
            transform 0.35s ease;

          transition-delay: var(--arrow-delay);
        }

        .strategic-steps-visible .strategic-arrow {
          opacity: 1;
          transform: translateY(0);
        }

        /* =========================================================
           BOTTOM BAR
        ========================================================= */

        .strategic-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;

          margin-top: 20px;
          padding-top: 16px;

          border-top: 1px solid #f4c9dd;
        }

        .strategic-bottom-left {
          display: inline-flex;
          align-items: center;
          gap: 6px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.3;

          color: #64748b;
        }

        .strategic-bottom-right {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.3;

          color: #730024;
        }

        /* =========================================================
           TABLET - 1200px
        ========================================================= */

        @media (max-width: 1200px) {
          .strategic-transformation {
            padding: 70px 40px;
          }

          .strategic-container {
            padding: 40px;
          }

          .strategic-grid {
            gap: 45px;
          }

          .strategic-heading {
            font-size: 33px;
          }

          .strategic-flow-card {
            padding: 21px;
          }
        }

        /* =========================================================
           TABLET - 900px
        ========================================================= */

        @media (max-width: 900px) {
          .strategic-transformation {
            padding: 60px 40px;
          }

          .strategic-container {
            padding: 34px;
            border-radius: 24px;
          }

          .strategic-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .strategic-heading {
            max-width: 700px;
            font-size: 31px;
          }

          .strategic-description {
            max-width: 760px;
          }

          .strategic-flow-card {
            max-width: none;
          }
        }

        /* =========================================================
           MOBILE - 700px
        ========================================================= */

        @media (max-width: 700px) {
          .strategic-transformation {
            padding: 50px 24px;
          }

          .strategic-container {
            padding: 26px;
            border-radius: 20px;
          }

          .strategic-grid {
            gap: 30px;
          }

          .strategic-label {
            margin-bottom: 15px;
            font-size: 9.5px;
          }

          .strategic-heading {
            margin-bottom: 15px;
            font-size: 27px;
            line-height: 1.2;
          }

          .strategic-description {
            margin-bottom: 26px;
            font-size: 12.5px;
            line-height: 1.65;
          }

          .strategic-pillars {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .strategic-pillar-label {
            margin-bottom: 5px;
            font-size: 10px;
          }

          .strategic-pillar-description {
            font-size: 12px;
          }

          .strategic-flow-card {
            padding: 19px;
            border-radius: 16px;
          }

          .strategic-flow-header {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 18px;
          }

          .strategic-flow-title {
            font-size: 10px;
          }

          .strategic-flow-badge {
            font-size: 8.5px;
          }

          .strategic-step {
            padding: 14px;
          }

          .strategic-step-title {
            font-size: 12px;
          }

          .strategic-step-description {
            padding-left: 35px;
            font-size: 11px;
          }

          .strategic-bottom-bar {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        /* =========================================================
           SMALL MOBILE - 480px
        ========================================================= */

        @media (max-width: 480px) {
          .strategic-transformation {
            padding: 42px 16px;
          }

          .strategic-container {
            padding: 20px;
            border-radius: 18px;
          }

          .strategic-glow {
            width: 220px;
            height: 220px;
            top: -80px;
            right: -80px;
          }

          .strategic-label {
            gap: 6px;
            margin-bottom: 13px;
            font-size: 8.5px;
            letter-spacing: 0.08em;
          }

          .strategic-label svg {
            width: 12px;
            height: 12px;
          }

          .strategic-heading {
            margin-bottom: 13px;
            font-size: 23px;
          }

          .strategic-description {
            margin-bottom: 23px;
            font-size: 11.5px;
          }

          .strategic-pillars {
            gap: 16px;
          }

          .strategic-pillar-label {
            font-size: 9px;
          }

          .strategic-pillar-description {
            font-size: 11px;
            line-height: 1.55;
          }

          .strategic-flow-card {
            padding: 16px;
          }

          .strategic-flow-title {
            font-size: 9px;
          }

          .strategic-flow-badge {
            padding: 5px 8px;
            font-size: 8px;
          }

          .strategic-step {
            padding: 12px;
            border-radius: 10px;
          }

          .strategic-step-header {
            gap: 8px;
          }

          .strategic-step-main {
            gap: 8px;
          }

          .strategic-step-number {
            width: 23px;
            height: 23px;
            font-size: 8px;
          }

          .strategic-step-title {
            font-size: 11px;
          }

          .strategic-step-tag {
            font-size: 7.5px;
          }

          .strategic-step-description {
            padding-left: 31px;
            font-size: 10.5px;
            line-height: 1.6;
          }

          .strategic-arrow {
            height: 24px;
          }

          .strategic-arrow svg {
            width: 13px;
            height: 13px;
          }

          .strategic-bottom-bar {
            margin-top: 16px;
            padding-top: 13px;
          }

          .strategic-bottom-left {
            font-size: 9.5px;
          }

          .strategic-bottom-right {
            font-size: 9px;
          }
        }

        /* =========================================================
           VERY SMALL MOBILE - 360px
        ========================================================= */

        @media (max-width: 360px) {
          .strategic-transformation {
            padding-left: 16px;
            padding-right: 16px;
          }

          .strategic-container {
            padding: 17px;
          }

          .strategic-heading {
            font-size: 21px;
          }

          .strategic-description {
            font-size: 10.5px;
          }

          .strategic-flow-card {
            padding: 14px;
          }

          .strategic-step {
            padding: 11px;
          }

          .strategic-step-title {
            font-size: 10.5px;
          }

          .strategic-step-description {
            font-size: 10px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .strategic-step,
          .strategic-arrow {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </>
  );
}