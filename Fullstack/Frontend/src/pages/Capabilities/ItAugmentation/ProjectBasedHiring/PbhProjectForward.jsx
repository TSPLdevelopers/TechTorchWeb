import React from "react";
import {
  Target,
  Layers,
  Radar,
  Infinity as InfinityIcon,
  Check,
  ArrowRight,
  Code2,
  Sparkle,
  ClipboardCheck,
} from "lucide-react";

// =====================================================
// DATA
// =====================================================

const cards = [
  {
    icon: Target,
    title: "Project-Aligned Expertise",
    description:
      "Technical capabilities aligned with your specific project and business requirements.",
    tag: "Direct Fit",
  },
  {
    icon: Layers,
    title: "Flexible Engineering Support",
    description:
      "Resources that can complement your existing teams and technical capabilities.",
    tag: "Dynamic Scale",
  },
  {
    icon: Radar,
    title: "Technology-Focused Approach",
    description:
      "Support across software development, applications, integration, testing, and modernization.",
    tag: "Full Stack Depth",
  },
  {
    icon: InfinityIcon,
    title: "End-to-End Technology Support",
    description:
      "Technical capabilities covering development through deployment, maintenance, and continuous improvement.",
    tag: "Complete Lifecycle",
  },
];

const ctaTags = [
  {
    icon: Code2,
    label: "Software Engineering",
  },
  {
    icon: Sparkle,
    label: "Flexible Resources",
  },
  {
    icon: ClipboardCheck,
    label: "Project-Based Support",
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function WhyTechTorchSection() {
  return (
    <section className="why-techtorch-section">
      <div className="why-techtorch-container">

        {/* =====================================================
            DARK WHY TECHTORCH CARD
        ====================================================== */}

        <div className="why-techtorch-card">
          {/* Background Glow */}
          <div
            className="why-techtorch-glow"
            aria-hidden="true"
          />

          {/* Header */}
          <div className="why-techtorch-header">

            {/* Label */}
            <span className="why-techtorch-label">
              <span className="why-techtorch-label-dot" />
              WHY TECHTORCH
            </span>

            {/* Heading */}
            <h1 className="why-techtorch-heading">
              Technology Expertise Built Around Your Requirements
            </h1>

            {/* Sub Heading */}
            <p className="why-techtorch-subheading">
              Technical capabilities aligned with your project requirements
              and technology objectives.
            </p>
          </div>

          {/* =====================================================
              FEATURE CARDS
          ====================================================== */}

          <div className="why-techtorch-grid">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="why-feature-card"
                >
                  {/* Icon */}
                  <div className="why-feature-icon">
                    <Icon
                      className="why-feature-icon-svg"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="why-feature-title">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="why-feature-description">
                    {card.description}
                  </p>

                  {/* Bottom Tag */}
                  <div className="why-feature-tag">
                    <Check
                      className="why-feature-check"
                      strokeWidth={2}
                    />

                    <span>{card.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            LIGHT CTA CARD
        ====================================================== */}

        <div className="why-cta-card">

          {/* Icon */}
          <div className="why-cta-icon">
            <Layers
              className="why-cta-icon-svg"
              strokeWidth={1.8}
            />
          </div>

          {/* Heading */}
          <h2 className="why-cta-heading">
            Move Your Next Technology Project Forward
          </h2>

          {/* Sub Heading */}
          <p className="why-cta-description">
            Discuss your project requirements with TechTorch and explore the
            right engineering capabilities and resource support for your
            business.
          </p>

          {/* Button */}
          <button className="why-cta-button">
            <span>Talk to Our Experts</span>

            <ArrowRight
              className="why-cta-arrow"
              strokeWidth={2}
            />
          </button>

          {/* CTA Tags */}
          <div className="why-cta-tags">
            {ctaTags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="why-cta-tag"
              >
                <Icon
                  className="why-cta-tag-icon"
                  strokeWidth={1.8}
                />

                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* =====================================================
           FONTS
        ====================================================== */

        .why-techtorch-section {
          width: 100%;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          box-sizing: border-box;
        }

        .why-techtorch-section *,
        .why-techtorch-section *::before,
        .why-techtorch-section *::after {
          box-sizing: border-box;
        }

        .why-techtorch-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /* Universal spacing */
          padding-left: 100px;
          padding-right: 100px;

          padding-top: 50px;
          padding-bottom: 50px;

          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* =====================================================
           DARK WHY TECHTORCH CARD
        ====================================================== */

        .why-techtorch-card {
          position: relative;
          width: 100%;
          overflow: hidden;

          border-radius: 20px;

          padding: 52px 42px;

          background:
            radial-gradient(
              120% 140% at 90% 0%,
              #4a0a30 0%,
              #2c0620 60%
            );

          isolation: isolate;
        }

        .why-techtorch-glow {
          position: absolute;

          top: -70px;
          right: -50px;

          width: 240px;
          height: 240px;

          border-radius: 50%;

          background: rgba(115, 0, 36, 0.4);

          filter: blur(60px);

          pointer-events: none;

          z-index: -1;
        }

        /* =====================================================
           HEADER
        ====================================================== */

        .why-techtorch-header {
          position: relative;
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          margin-bottom: 38px;
        }

        .why-techtorch-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;

          width: fit-content;

          padding: 6px 12px;

          border-radius: 999px;

          border: 1px solid rgba(255, 255, 255, 0.1);

          background: rgba(255, 255, 255, 0.1);

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 0.08em;

          margin-bottom: 16px;
        }

        .why-techtorch-label-dot {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #ffffff;

          flex-shrink: 0;
        }

        .why-techtorch-heading {
          margin: 0 0 12px;

          max-width: 760px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 32px;
          line-height: 1.2;

          font-weight: 600;

          letter-spacing: -0.02em;
        }

        .why-techtorch-subheading {
          margin: 0;

          max-width: 620px;

          color: rgba(255, 255, 255, 0.6);

          font-family: "Inter", sans-serif;

          font-size: 13px;
          line-height: 1.7;

          font-weight: 400;
        }

        /* =====================================================
           FEATURE GRID
        ====================================================== */

        .why-techtorch-grid {
          position: relative;

          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 16px;
        }

        .why-feature-card {
          width: 100%;
          min-width: 0;

          display: flex;
          flex-direction: column;

          padding: 18px;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.06);

          border: 1px solid rgba(255, 255, 255, 0.1);

          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .why-feature-card:hover {
          background: rgba(255, 255, 255, 0.09);

          border-color: rgba(255, 255, 255, 0.2);

          transform: translateY(-3px);
        }

        /* =====================================================
           FEATURE ICON
        ====================================================== */

        .why-feature-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: rgba(255, 255, 255, 0.1);

          margin-bottom: 17px;
        }

        .why-feature-icon-svg {
          width: 17px;
          height: 17px;

          color: #ffffff;
        }

        /* =====================================================
           FEATURE TEXT
        ====================================================== */

        .why-feature-title {
          margin: 0 0 9px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 13px;
          line-height: 1.4;

          font-weight: 600;
        }

        .why-feature-description {
          margin: 0 0 17px;

          color: rgba(255, 255, 255, 0.55);

          font-family: "Inter", sans-serif;

          font-size: 11px;
          line-height: 1.65;

          font-weight: 400;
        }

        .why-feature-tag {
          margin-top: auto;

          display: flex;
          align-items: center;

          gap: 6px;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          line-height: 1.4;

          font-weight: 500;
        }

        .why-feature-check {
          width: 13px;
          height: 13px;

          color: #ffffff;

          flex-shrink: 0;
        }

        /* =====================================================
           CTA CARD
        ====================================================== */

        .why-cta-card {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          padding: 54px 42px;

          border-radius: 20px;

          background: #fafafa;

          border: 1px solid #e5e5e5;
        }

        .why-cta-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #730024;

          margin-bottom: 22px;
        }

        .why-cta-icon-svg {
          width: 20px;
          height: 20px;

          color: #ffffff;
        }

        .why-cta-heading {
          margin: 0 0 13px;

          max-width: 760px;

          color: #1c1c1c;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 28px;
          line-height: 1.25;

          font-weight: 600;

          letter-spacing: -0.015em;
        }

        .why-cta-description {
          margin: 0 0 28px;

          max-width: 650px;

          padding: 0 8px;

          color: #737373;

          font-family: "Inter", sans-serif;

          font-size: 13px;
          line-height: 1.7;

          font-weight: 400;
        }

        /* =====================================================
           CTA BUTTON
        ====================================================== */

        .why-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 44px;

          padding: 11px 24px;

          border: none;
          border-radius: 6px;

          background: #730024;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 13px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .why-cta-button:hover {
          background: #5c001d;

          transform: translateY(-2px);
        }

        .why-cta-arrow {
          width: 16px;
          height: 16px;

          flex-shrink: 0;
        }

        /* =====================================================
           CTA TAGS
        ====================================================== */

        .why-cta-tags {
          width: 100%;

          display: flex;
          flex-wrap: wrap;

          align-items: center;
          justify-content: center;

          column-gap: 28px;
          row-gap: 12px;

          margin-top: 27px;
        }

        .why-cta-tag {
          display: inline-flex;
          align-items: center;

          gap: 6px;

          color: #730024;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;
          line-height: 1.4;

          font-weight: 500;
        }

        .why-cta-tag-icon {
          width: 14px;
          height: 14px;

          flex-shrink: 0;
        }

        /* =====================================================
           LARGE TABLET
        ====================================================== */

        @media (max-width: 1200px) {
          .why-techtorch-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .why-techtorch-card {
            padding: 46px 32px;
          }

          .why-techtorch-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .why-cta-card {
            padding: 48px 32px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .why-techtorch-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .why-techtorch-card {
            border-radius: 18px;

            padding: 42px 28px;
          }

          .why-techtorch-heading {
            font-size: 29px;
          }

          .why-techtorch-header {
            margin-bottom: 32px;
          }

          .why-feature-card {
            padding: 17px;
          }

          .why-cta-card {
            border-radius: 18px;

            padding: 46px 28px;
          }

          .why-cta-heading {
            font-size: 26px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {
          .why-techtorch-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 36px;
            padding-bottom: 36px;

            gap: 18px;
          }

          .why-techtorch-card {
            padding: 36px 20px;

            border-radius: 16px;
          }

          .why-techtorch-heading {
            font-size: 25px;

            max-width: 600px;
          }

          .why-techtorch-subheading {
            font-size: 12px;

            max-width: 500px;
          }

          .why-techtorch-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .why-feature-card {
            padding: 18px;
          }

          .why-feature-title {
            font-size: 13px;
          }

          .why-feature-description {
            font-size: 10.5px;
          }

          .why-cta-card {
            padding: 40px 20px;

            border-radius: 16px;
          }

          .why-cta-heading {
            font-size: 23px;
          }

          .why-cta-description {
            font-size: 11.5px;

            max-width: 520px;

            margin-bottom: 25px;
          }

          .why-cta-tags {
            column-gap: 20px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {
          .why-techtorch-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 30px;
            padding-bottom: 30px;
          }

          .why-techtorch-card {
            padding: 30px 16px;

            border-radius: 14px;
          }

          .why-techtorch-label {
            font-size: 8px;

            padding: 5px 10px;

            margin-bottom: 13px;
          }

          .why-techtorch-heading {
            font-size: 22px;

            line-height: 1.25;
          }

          .why-techtorch-subheading {
            font-size: 11px;

            line-height: 1.6;
          }

          .why-techtorch-header {
            margin-bottom: 27px;
          }

          .why-feature-card {
            padding: 16px;
          }

          .why-feature-icon {
            width: 36px;
            height: 36px;

            margin-bottom: 15px;
          }

          .why-feature-title {
            font-size: 12.5px;
          }

          .why-feature-description {
            font-size: 10px;

            line-height: 1.6;

            margin-bottom: 15px;
          }

          .why-feature-tag {
            font-size: 9.5px;
          }

          .why-cta-card {
            padding: 34px 16px;

            border-radius: 14px;
          }

          .why-cta-icon {
            width: 42px;
            height: 42px;

            margin-bottom: 18px;
          }

          .why-cta-heading {
            font-size: 20px;

            line-height: 1.3;
          }

          .why-cta-description {
            font-size: 10.5px;

            line-height: 1.65;

            padding: 0;
          }

          .why-cta-button {
            min-height: 42px;

            padding: 10px 20px;

            font-size: 11.5px;
          }

          .why-cta-tags {
            flex-direction: column;

            gap: 11px;

            margin-top: 23px;
          }

          .why-cta-tag {
            font-size: 9.5px;
          }
        }

        /* =====================================================
           VERY SMALL DEVICES
        ====================================================== */

        @media (max-width: 360px) {
          .why-techtorch-heading {
            font-size: 20px;
          }

          .why-techtorch-subheading {
            font-size: 10.5px;
          }

          .why-cta-heading {
            font-size: 19px;
          }

          .why-cta-description {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}