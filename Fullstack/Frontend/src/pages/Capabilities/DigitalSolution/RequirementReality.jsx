import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Clipboard,
  Code2,
  UploadCloud,
  TrendingUp,
  Clock,
  ShieldCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

// =================================================
// STEPS
// =================================================

const STEPS = [
  {
    number: "01",
    label: "UNDERSTAND",
    icon: Users,
    description:
      "We begin by analyzing your workflows, objectives, pain points, and current legacy systems.",
  },
  {
    number: "02",
    label: "PLAN",
    icon: Clipboard,
    description:
      "We engineer solution blueprints, technical roadmaps, database schemas, and UX user flows.",
  },
  {
    number: "03",
    label: "BUILD",
    icon: Code2,
    description:
      "Our engineering squads build and integrate with focus on quality, speed, security, and scalability.",
  },
  {
    number: "04",
    label: "DEPLOY",
    icon: UploadCloud,
    description:
      "We execute seamless rollouts with comprehensive staff onboarding and zero downtime transition.",
  },
  {
    number: "05",
    label: "IMPROVE",
    icon: TrendingUp,
    description:
      "Ongoing performance telemetry, agile iterations, and scalable enhancements as your team expands.",
  },
];

// =================================================
// CTA PILLS
// =================================================

const PILLS = [
  {
    icon: Clock,
    label: "24h Rapid Response",
  },
  {
    icon: ShieldCheck,
    label: "Direct Senior Architect Advisory",
  },
  {
    icon: Lock,
    label: "Enterprise NDA & Security First",
  },
];

// =================================================
// COMPONENT
// =================================================

export default function ApproachAndCtaSection() {
  const timelineRef = useRef(null);
  const timersRef = useRef([]);

  const [activeSteps, setActiveSteps] = useState([]);

  // =================================================
  // TIMELINE ANIMATION
  // =================================================

  useEffect(() => {
    const section = timelineRef.current;

    if (!section) return;

    const clearAnimation = () => {
      timersRef.current.forEach((timer) => {
        clearTimeout(timer);
      });

      timersRef.current = [];

      setActiveSteps([]);
    };

    const startAnimation = () => {
      clearAnimation();

      STEPS.forEach((_, index) => {
        const timer = setTimeout(() => {
          setActiveSteps((prev) => {
            if (prev.includes(index)) {
              return prev;
            }

            return [...prev, index];
          });
        }, index * 550);

        timersRef.current.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          startAnimation();
        } else {
          clearAnimation();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      clearAnimation();
      observer.disconnect();
    };
  }, []);

  // =================================================
  // JSX
  // =================================================

  return (
    <section className="approach-section">

      {/* =================================================
          TIMELINE SECTION
      ================================================= */}

      <div
        ref={timelineRef}
        className="approach-timeline"
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="approach-header">

          {/* LABEL */}

          <div className="approach-label">
            <span className="approach-label-line" />

            <span className="approach-label-text">
              From Requirement to Reality
            </span>

            <span className="approach-label-line" />
          </div>

          {/* HEADING */}

          <h2 className="approach-heading">
            Our Approach
          </h2>
        </div>

        {/* =================================================
            STEPS
        ================================================= */}

        <div className="approach-steps">

          {/* DESKTOP CONNECTING LINE */}

          <div className="approach-connecting-line" />

          {STEPS.map(
            (
              {
                number,
                label,
                icon: Icon,
                description,
              },
              index
            ) => {
              const isActive = activeSteps.includes(index);

              return (
                <div
                  key={number}
                  className="approach-step"
                >
                  {/* =================================================
                      ICON
                  ================================================= */}

                  <div
                    className={`approach-icon ${
                      isActive ? "approach-icon-active" : ""
                    }`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="approach-icon-svg"
                    />

                    {/* ACTIVE PULSE */}

                    {isActive && (
                      <span className="approach-icon-pulse" />
                    )}
                  </div>

                  {/* =================================================
                      STEP TITLE
                  ================================================= */}

                  <p
                    className={`approach-step-title ${
                      isActive
                        ? "approach-step-title-active"
                        : ""
                    }`}
                  >
                    {number} — {label}
                  </p>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p className="approach-step-description">
                    {description}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* =================================================
          CTA SECTION
      ================================================= */}

      <div className="approach-cta-wrapper">

        <div className="approach-cta">

          {/* =================================================
              CTA LABEL
          ================================================= */}

          <div className="approach-cta-label-wrapper">
            <span className="approach-cta-label">
              <span className="approach-cta-dot" />

              Tailored Architecture & Delivery Advisory
            </span>
          </div>

          {/* =================================================
              CTA HEADING
          ================================================= */}

          <h2 className="approach-cta-heading">
            Ready to Move Your Business Forward?
          </h2>

          {/* =================================================
              CTA DESCRIPTION
          ================================================= */}

          <p className="approach-cta-description">
            Let's build the right digital solution for your business.
            Connect with our principal enterprise architects to explore
            tailored systems, legacy migrations, and high-impact digital
            transformation roadmaps.
          </p>

          {/* =================================================
              CTA BUTTON
          ================================================= */}

          <div className="approach-cta-button-wrapper">
            <button
              type="button"
              className="approach-cta-button"
            >
              <span>Talk to Our Experts</span>

              <ArrowRight
                size={16}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="approach-cta-divider" />

          {/* =================================================
              PILLS
          ================================================= */}

          <div className="approach-pills">
            {PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="approach-pill"
              >
                <Icon
                  size={12}
                  strokeWidth={1.8}
                />

                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`
        /* =================================================
           GLOBAL SECTION
        ================================================= */

        .approach-section {
          width: 100%;
          overflow: hidden;

          background: #faf9fb;

          box-sizing: border-box;
        }

        /* =================================================
           TIMELINE CONTAINER
        ================================================= */

        .approach-timeline {
          position: relative;

          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          box-sizing: border-box;

          padding-top: 72px;
          padding-bottom: 68px;

          padding-left: 100px;
          padding-right: 100px;
        }

        /* =================================================
           HEADER
        ================================================= */

        .approach-header {
          width: 100%;
          max-width: 720px;

          margin: 0 auto 48px;

          text-align: center;
        }

        .approach-label {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-bottom: 15px;
        }

        .approach-label-line {
          width: 40px;
          height: 1px;

          flex-shrink: 0;

          background: #730024;
        }

        .approach-label-text {
          font-family: "Inter", sans-serif;

          font-size: 11px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: 0.14em;
          text-transform: uppercase;

          color: #730024;

          white-space: nowrap;
        }

        .approach-heading {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 32px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #0f172a;
        }

        /* =================================================
           STEPS GRID
        ================================================= */

        .approach-steps {
          position: relative;

          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 20px;

          width: 100%;
        }

        /* =================================================
           CONNECTING LINE
        ================================================= */

        .approach-connecting-line {
          position: absolute;

          left: 10%;
          right: 10%;

          top: 24px;

          height: 1px;

          background: #e2dce0;

          z-index: 0;
        }

        /* =================================================
           STEP
        ================================================= */

        .approach-step {
          position: relative;

          display: flex;
          flex-direction: column;
          align-items: center;

          min-width: 0;

          padding-left: 8px;
          padding-right: 8px;

          text-align: center;

          box-sizing: border-box;
        }

        /* =================================================
           ICON
        ================================================= */

        .approach-icon {
          position: relative;

          z-index: 2;

          width: 48px;
          height: 48px;

          margin-bottom: 17px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: #faf9fb;

          border: 1.5px solid #d9b8c6;

          color: #730024;

          box-sizing: border-box;

          transition:
            transform 0.5s ease,
            background-color 0.5s ease,
            border-color 0.5s ease,
            box-shadow 0.5s ease;
        }

        .approach-icon-active {
          background: #730024;

          border-color: #730024;

          color: #ffffff;

          transform: scale(1.1);

          box-shadow:
            0 0 0 6px rgba(115, 0, 36, 0.10);
        }

        .approach-icon-svg {
          position: relative;
          z-index: 2;

          transition:
            color 0.5s ease,
            transform 0.5s ease;
        }

        .approach-icon-pulse {
          position: absolute;

          inset: 0;

          border-radius: 50%;

          border: 1px solid #730024;

          pointer-events: none;

          animation: approachPulse 1.8s ease-out infinite;

          opacity: 0.2;
        }

        @keyframes approachPulse {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }

          70% {
            transform: scale(1.35);
            opacity: 0;
          }

          100% {
            transform: scale(1.35);
            opacity: 0;
          }
        }

        /* =================================================
           STEP TITLE
        ================================================= */

        .approach-step-title {
          margin: 0 0 9px;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          font-weight: 700;

          line-height: 1.4;

          letter-spacing: 0.06em;

          color: #0f172a;

          transition:
            color 0.5s ease,
            transform 0.5s ease;
        }

        .approach-step-title-active {
          color: #730024;

          transform: translateY(-1px);
        }

        /* =================================================
           STEP DESCRIPTION
        ================================================= */

        .approach-step-description {
          width: 100%;
          max-width: 210px;

          margin: 0 auto;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          font-weight: 400;

          line-height: 1.65;

          color: #64748b;
        }

        /* =================================================
           CTA WRAPPER
        ================================================= */

        .approach-cta-wrapper {
          width: 100%;

          box-sizing: border-box;

          padding-bottom: 80px;

          padding-left: 100px;
          padding-right: 100px;
        }

        /* =================================================
           CTA CARD
        ================================================= */

        .approach-cta {
          position: relative;

          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          box-sizing: border-box;

          overflow: hidden;

          padding-top: 58px;
          padding-bottom: 54px;

          padding-left: 60px;
          padding-right: 60px;

          border-radius: 28px;

          text-align: center;

          background:
            radial-gradient(
              120% 140% at 50% 0%,
              #730024 0%,
              #3a0e20 70%
            );
        }

        /* =================================================
           CTA LABEL
        ================================================= */

        .approach-cta-label-wrapper {
          display: flex;
          justify-content: center;

          margin-bottom: 20px;
        }

        .approach-cta-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          max-width: 100%;

          box-sizing: border-box;

          padding: 7px 14px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.05);

          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 600;

          line-height: 1.3;

          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: rgba(255, 255, 255, 0.8);
        }

        .approach-cta-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.6);
        }

        /* =================================================
           CTA HEADING
        ================================================= */

        .approach-cta-heading {
          width: 100%;
          max-width: 900px;

          margin: 0 auto 16px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 38px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #ffffff;
        }

        /* =================================================
           CTA DESCRIPTION
        ================================================= */

        .approach-cta-description {
          width: 100%;
          max-width: 720px;

          margin: 0 auto 28px;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.75;

          color: rgba(255, 255, 255, 0.62);
        }

        /* =================================================
           CTA BUTTON
        ================================================= */

        .approach-cta-button-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 30px;
        }

        .approach-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 46px;

          padding: 0 24px;

          border: none;
          border-radius: 8px;

          background: #ffffff;

          color: #730024;

          font-family: "Inter", sans-serif;

          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease,
            box-shadow 0.3s ease;
        }

        .approach-cta-button:hover {
          transform: translateY(-2px);

          opacity: 0.95;

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.16);
        }

        .approach-cta-button:active {
          transform: translateY(0);
        }

        /* =================================================
           DIVIDER
        ================================================= */

        .approach-cta-divider {
          width: 100%;
          max-width: 720px;

          height: 1px;

          margin: 0 auto 20px;

          background: rgba(255, 255, 255, 0.1);
        }

        /* =================================================
           PILLS
        ================================================= */

        .approach-pills {
          display: flex;
          align-items: center;
          justify-content: center;

          flex-wrap: wrap;

          gap: 10px;
        }

        .approach-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 7px 13px;

          border: 1px solid rgba(255, 255, 255, 0.1);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.05);

          font-family: "Inter", sans-serif;

          font-size: 10.5px;
          font-weight: 500;

          line-height: 1.3;

          color: rgba(255, 255, 255, 0.7);
        }

        .approach-pill svg {
          flex-shrink: 0;

          color: rgba(255, 255, 255, 0.5);
        }

        /* =================================================
           TABLET - 1200px
        ================================================= */

        @media (max-width: 1200px) {
          .approach-timeline {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 64px;
            padding-bottom: 60px;
          }

          .approach-cta-wrapper {
            padding-left: 40px;
            padding-right: 40px;

            padding-bottom: 65px;
          }

          .approach-cta {
            padding-left: 45px;
            padding-right: 45px;
          }

          .approach-step-description {
            max-width: 190px;
          }
        }

        /* =================================================
           TABLET - 900px
        ================================================= */

        @media (max-width: 900px) {
          .approach-timeline {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 58px;
            padding-bottom: 55px;
          }

          .approach-header {
            margin-bottom: 42px;
          }

          .approach-heading {
            font-size: 30px;
          }

          .approach-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            column-gap: 35px;
            row-gap: 42px;
          }

          .approach-connecting-line {
            display: none;
          }

          .approach-step-description {
            max-width: 270px;
          }

          .approach-cta-wrapper {
            padding-left: 40px;
            padding-right: 40px;

            padding-bottom: 60px;
          }

          .approach-cta {
            padding-top: 52px;
            padding-bottom: 48px;

            padding-left: 40px;
            padding-right: 40px;

            border-radius: 25px;
          }

          .approach-cta-heading {
            font-size: 33px;
          }

          .approach-cta-description {
            font-size: 13px;
          }
        }

        /* =================================================
           MOBILE - 700px
        ================================================= */

        @media (max-width: 700px) {
          .approach-timeline {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 48px;
          }

          .approach-header {
            margin-bottom: 35px;
          }

          .approach-label {
            gap: 8px;

            margin-bottom: 12px;
          }

          .approach-label-line {
            width: 24px;
          }

          .approach-label-text {
            font-size: 9px;
            letter-spacing: 0.11em;
          }

          .approach-heading {
            font-size: 26px;
          }

          .approach-steps {
            grid-template-columns: 1fr;

            gap: 32px;
          }

          .approach-step {
            padding-left: 0;
            padding-right: 0;
          }

          .approach-icon {
            width: 46px;
            height: 46px;

            margin-bottom: 14px;
          }

          .approach-step-title {
            font-size: 11px;

            margin-bottom: 8px;
          }

          .approach-step-description {
            max-width: 420px;

            font-size: 12px;
            line-height: 1.65;
          }

          /* CTA */

          .approach-cta-wrapper {
            padding-left: 24px;
            padding-right: 24px;

            padding-bottom: 50px;
          }

          .approach-cta {
            padding-top: 44px;
            padding-bottom: 40px;

            padding-left: 24px;
            padding-right: 24px;

            border-radius: 22px;
          }

          .approach-cta-label {
            font-size: 8.5px;

            padding: 6px 11px;

            letter-spacing: 0.09em;
          }

          .approach-cta-heading {
            font-size: 27px;

            margin-bottom: 14px;
          }

          .approach-cta-description {
            max-width: 580px;

            margin-bottom: 24px;

            font-size: 12px;
            line-height: 1.7;
          }

          .approach-cta-button-wrapper {
            margin-bottom: 26px;
          }

          .approach-cta-button {
            min-height: 44px;

            padding: 0 21px;

            font-size: 12px;
          }

          .approach-pills {
            gap: 7px;
          }

          .approach-pill {
            padding: 6px 10px;

            font-size: 9px;
          }
        }

        /* =================================================
           SMALL MOBILE - 480px
        ================================================= */

        @media (max-width: 480px) {
          .approach-timeline {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 43px;
            padding-bottom: 42px;
          }

          .approach-header {
            margin-bottom: 31px;
          }

          .approach-label {
            gap: 6px;
          }

          .approach-label-line {
            width: 16px;
          }

          .approach-label-text {
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .approach-heading {
            font-size: 23px;
          }

          .approach-steps {
            gap: 29px;
          }

          .approach-icon {
            width: 44px;
            height: 44px;

            margin-bottom: 13px;
          }

          .approach-step-title {
            font-size: 10px;
          }

          .approach-step-description {
            max-width: 330px;

            font-size: 11.5px;
          }

          /* CTA */

          .approach-cta-wrapper {
            padding-left: 16px;
            padding-right: 16px;

            padding-bottom: 42px;
          }

          .approach-cta {
            padding-top: 38px;
            padding-bottom: 34px;

            padding-left: 18px;
            padding-right: 18px;

            border-radius: 19px;
          }

          .approach-cta-label-wrapper {
            margin-bottom: 17px;
          }

          .approach-cta-label {
            max-width: 100%;

            padding: 6px 9px;

            font-size: 7.5px;

            letter-spacing: 0.07em;

            white-space: normal;
          }

          .approach-cta-dot {
            width: 5px;
            height: 5px;
          }

          .approach-cta-heading {
            font-size: 23px;

            line-height: 1.25;
          }

          .approach-cta-description {
            margin-bottom: 22px;

            font-size: 11.5px;
            line-height: 1.65;
          }

          .approach-cta-button-wrapper {
            margin-bottom: 23px;
          }

          .approach-cta-button {
            width: 100%;
            max-width: 230px;

            min-height: 42px;

            padding: 0 18px;

            font-size: 11.5px;
          }

          .approach-cta-divider {
            margin-bottom: 17px;
          }

          .approach-pills {
            gap: 6px;
          }

          .approach-pill {
            width: 100%;

            max-width: 100%;

            padding: 7px 9px;

            font-size: 8.5px;
          }
        }

        /* =================================================
           VERY SMALL MOBILE - 360px
        ================================================= */

        @media (max-width: 360px) {
          .approach-timeline {
            padding-left: 16px;
            padding-right: 16px;
          }

          .approach-heading {
            font-size: 22px;
          }

          .approach-label-text {
            font-size: 7.5px;
          }

          .approach-step-description {
            font-size: 11px;
          }

          .approach-cta-wrapper {
            padding-left: 16px;
            padding-right: 16px;
          }

          .approach-cta {
            padding-left: 15px;
            padding-right: 15px;
          }

          .approach-cta-heading {
            font-size: 21px;
          }

          .approach-cta-description {
            font-size: 11px;
          }

          .approach-pill {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}