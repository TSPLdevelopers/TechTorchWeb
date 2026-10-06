import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  Check,
  Code2,
  UsersRound,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  "Software Engineering",
  "Web & Mobile Development",
  "API & System Integration",
  "Quality Assurance & Testing",
];

const features = [
  {
    icon: Code2,
    tag: "TECHNICAL EXPERTISE",
    title: "01 — Seamless Team Collaboration",
    description:
      "Remote technology professionals can work alongside your existing teams, supporting development activities, project requirements, and day-to-day engineering needs.",
    pill: "Software Development • Technical Collaboration",
    ghost: "01",
  },
  {
    icon: UsersRound,
    tag: "SCALABLE DELIVERY",
    title: "02 — Flexible Engineering Support",
    description:
      "Strengthen your technology capabilities with skilled resources that can support changing project requirements and business priorities.",
    pill: "Flexible Resources • Project-Aligned Support",
    ghost: "02",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function RemoteEngineersHero() {
  return (
    <div className="remote-engineers-page">
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        .remote-engineers-page {
          width: 100%;
          min-height: 100vh;
          background: #f8f8f9;
          color: #1c1c1c;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .remote-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 64px;
          padding-bottom: 64px;
          box-sizing: border-box;
        }

        /* =====================================================
           HERO GRID
        ===================================================== */

        .remote-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 400px;
          gap: 52px;
          align-items: center;
          margin-bottom: 48px;
        }

        .remote-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .remote-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          margin-bottom: 23px;
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(115, 0, 36, 0.05);
        }

        .remote-eyebrow svg {
          width: 12px;
          height: 12px;
          color: #730024;
          flex-shrink: 0;
        }

        .remote-eyebrow span {
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        /* =====================================================
           HERO HEADING
        ===================================================== */

        .remote-heading {
          max-width: 850px;
          margin: 0 0 21px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .remote-heading-highlight {
          color: #730024;
        }

        /* =====================================================
           HERO DESCRIPTION
        ===================================================== */

        .remote-description {
          max-width: 680px;
          margin: 0 0 30px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .remote-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: fit-content;
          padding: 13px 23px;
          border: 0;
          border-radius: 6px;
          background: #730024;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .remote-cta:hover {
          background: #5c001d;
          transform: translateY(-1px);
          box-shadow: 0 7px 18px rgba(115, 0, 36, 0.15);
        }

        .remote-cta svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        /* =====================================================
           RIGHT ENGINEERING CARD
        ===================================================== */

        .remote-engineering-card {
          width: 100%;
          max-width: 400px;
          margin-left: auto;
          overflow: hidden;
          border: 1px solid #e3e3e3;
          border-radius: 13px;
          background: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.035);
        }

        .remote-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 17px 18px;
        }

        .remote-card-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
        }

        .remote-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(115, 0, 36, 0.05);
          flex-shrink: 0;
        }

        .remote-card-icon svg {
          width: 16px;
          height: 16px;
          color: #730024;
        }

        .remote-card-title-wrap {
          min-width: 0;
        }

        .remote-card-title {
          margin: 0 0 3px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: 0.035em;
        }

        .remote-card-subtitle {
          margin: 0;
          color: #9a9a9a;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          line-height: 1.45;
        }

        .remote-active {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          padding: 7px 9px;
          border-radius: 7px;
          background: #ecfdf3;
          color: #059669;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.15;
          font-weight: 700;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .remote-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          flex-shrink: 0;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .remote-image {
          position: relative;
          height: 250px;
          margin: 0 12px;
          overflow: hidden;
          border-radius: 9px;
        }

        .remote-image-bg {
          position: absolute;
          inset: 0;
          background-image: url("/dd.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          transition: transform 0.5s ease;
        }

        .remote-engineering-card:hover .remote-image-bg {
          transform: scale(1.025);
        }

        .remote-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.62),
            rgba(0, 0, 0, 0.04) 68%,
            transparent
          );
        }

        .remote-image-info {
          position: absolute;
          right: 12px;
          bottom: 11px;
          left: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          line-height: 1.3;
          font-weight: 500;
        }

        .remote-image-info span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .remote-image-info svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* =====================================================
           CAPABILITIES
        ===================================================== */

        .remote-capabilities {
          padding: 17px 18px 19px;
        }

        .remote-capabilities-label {
          margin-bottom: 12px;
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.065em;
        }

        .remote-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .remote-capability {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          padding: 9px 10px;
          border: 1px solid #e6e6e6;
          border-radius: 8px;
          background: #fafafa;
        }

        .remote-capability-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        .remote-capability span:last-child {
          color: #555555;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          line-height: 1.35;
          font-weight: 500;
        }

        /* =====================================================
           FEATURE CARDS
        ===================================================== */

        .remote-features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .remote-feature-card {
          position: relative;
          min-width: 0;
          overflow: hidden;
          padding: 25px;
          border: 1px solid #e3e3e3;
          border-radius: 13px;
          background: #ffffff;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .remote-feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(115, 0, 36, 0.18);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.045);
        }

        .remote-ghost {
          position: absolute;
          right: 17px;
          bottom: 3px;
          z-index: 0;
          color: #f0f0f0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 55px;
          line-height: 1;
          font-weight: 700;
          user-select: none;
          pointer-events: none;
        }

        .remote-feature-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 20px;
        }

        .remote-feature-tag {
          padding: 6px 10px;
          border-radius: 4px;
          background: rgba(115, 0, 36, 0.05);
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .remote-feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: rgba(115, 0, 36, 0.05);
          flex-shrink: 0;
        }

        .remote-feature-icon svg {
          width: 16px;
          height: 16px;
          color: #730024;
        }

        .remote-feature-title {
          position: relative;
          z-index: 1;
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 600;
        }

        .remote-feature-description {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 0 17px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        .remote-feature-pill {
          position: relative;
          z-index: 1;
          display: inline-block;
          max-width: 100%;
          padding: 6px 11px;
          border: 1px solid #e4e4e4;
          border-radius: 4px;
          background: #fafafa;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          line-height: 1.35;
          font-weight: 500;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .remote-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .remote-hero-grid {
            grid-template-columns: minmax(0, 1fr) 370px;
            gap: 38px;
          }

          .remote-heading {
            font-size: 35px;
          }

          .remote-image {
            height: 235px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .remote-hero-grid {
            grid-template-columns: 1fr;
            gap: 34px;
            align-items: start;
          }

          .remote-engineering-card {
            max-width: 560px;
            margin-left: 0;
          }

          .remote-heading {
            max-width: 760px;
          }

          .remote-description {
            max-width: 700px;
          }

          .remote-features {
            gap: 16px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .remote-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 38px;
            padding-bottom: 42px;
          }

          .remote-hero-grid {
            gap: 28px;
            margin-bottom: 32px;
          }

          .remote-eyebrow {
            margin-bottom: 18px;
            padding: 6px 11px;
          }

          .remote-eyebrow span {
            font-size: 9px;
          }

          .remote-heading {
            font-size: 29px;
            line-height: 1.18;
            margin-bottom: 18px;
          }

          .remote-description {
            font-size: 12.5px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .remote-cta {
            padding: 12px 20px;
            font-size: 12px;
          }

          .remote-engineering-card {
            max-width: 100%;
          }

          .remote-card-header {
            padding: 15px;
          }

          .remote-card-title {
            font-size: 11px;
          }

          .remote-card-subtitle {
            font-size: 10px;
          }

          .remote-image {
            height: 225px;
          }

          .remote-capabilities {
            padding: 15px;
          }

          .remote-capabilities-grid {
            grid-template-columns: 1fr;
          }

          .remote-features {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .remote-feature-card {
            padding: 20px;
          }

          .remote-feature-title {
            font-size: 15px;
          }

          .remote-feature-description {
            font-size: 12px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .remote-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 30px;
            padding-bottom: 34px;
          }

          .remote-eyebrow {
            max-width: 100%;
          }

          .remote-eyebrow span {
            font-size: 8px;
            letter-spacing: 0.04em;
          }

          .remote-heading {
            font-size: 25px;
          }

          .remote-description {
            font-size: 11.5px;
          }

          .remote-cta {
            width: auto;
            padding: 11px 17px;
            font-size: 11.5px;
          }

          .remote-card-header {
            align-items: flex-start;
            padding: 14px;
          }

          .remote-card-brand {
            align-items: flex-start;
          }

          .remote-active {
            font-size: 8px;
            padding: 6px 7px;
          }

          .remote-image {
            height: 205px;
            margin-left: 10px;
            margin-right: 10px;
          }

          .remote-image-info {
            font-size: 9.5px;
          }

          .remote-capabilities-label {
            font-size: 9px;
          }

          .remote-capability span:last-child {
            font-size: 11px;
          }

          .remote-feature-card {
            padding: 17px;
          }

          .remote-feature-top {
            margin-bottom: 16px;
          }

          .remote-feature-tag {
            font-size: 8.5px;
          }

          .remote-feature-title {
            font-size: 13.5px;
          }

          .remote-feature-description {
            font-size: 11px;
          }

          .remote-feature-pill {
            font-size: 9px;
          }

          .remote-ghost {
            font-size: 45px;
          }
        }
      `}</style>

      <div className="remote-container">

        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div className="remote-hero-grid">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="remote-hero-content">

            {/* Eyebrow */}
            <div className="remote-eyebrow">
              <Zap />

              <span>
                IT AUGMENTATION • REMOTE ENGINEERS
              </span>
            </div>

            {/* Heading */}
            <h1 className="remote-heading">
              Extend Your Engineering Team with{" "}
              <span className="remote-heading-highlight">
                Skilled Remote Engineers
              </span>
            </h1>

            {/* Description */}
            <p className="remote-description">
              Access skilled technology professionals who can work alongside
              your existing team and support your software development,
              engineering, and technology requirements with a flexible
              approach.
            </p>

            {/* CTA */}
            <button className="remote-cta">
              Talk to Our Experts

              <ArrowRight />
            </button>
          </div>

          {/* =================================================
              RIGHT CARD
          ================================================= */}

          <div className="remote-engineering-card">

            {/* Header */}
            <div className="remote-card-header">

              <div className="remote-card-brand">

                <div className="remote-card-icon">
                  <Users />
                </div>

                <div className="remote-card-title-wrap">
                  <div className="remote-card-title">
                    REMOTE ENGINEERING SUPPORT
                  </div>

                  <p className="remote-card-subtitle">
                    Flexible technical expertise aligned with your project
                    requirements
                  </p>
                </div>
              </div>

              <span className="remote-active">
                <span className="remote-active-dot" />
                ACTIVE
              </span>
            </div>

            {/* Image */}
            <div className="remote-image">

              <div className="remote-image-bg" />

              <div className="remote-image-overlay" />

              <div className="remote-image-info">

                <span>
                  <Check />
                  Skilled Remote Talent
                </span>

                <span>
                  Seamless Integration
                </span>
              </div>
            </div>

            {/* Capabilities */}
            <div className="remote-capabilities">

              <div className="remote-capabilities-label">
                CORE CAPABILITIES & SPECIALIZATIONS
              </div>

              <div className="remote-capabilities-grid">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="remote-capability"
                  >
                    <span className="remote-capability-dot" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FEATURE CARDS
        ===================================================== */}

        <div className="remote-features">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.ghost}
                className="remote-feature-card"
              >

                {/* Ghost Number */}
                <span className="remote-ghost">
                  {item.ghost}
                </span>

                {/* Top Row */}
                <div className="remote-feature-top">

                  <span className="remote-feature-tag">
                    {item.tag}
                  </span>

                  <div className="remote-feature-icon">
                    <Icon />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="remote-feature-title">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="remote-feature-description">
                  {item.description}
                </p>

                {/* Pill */}
                <span className="remote-feature-pill">
                  {item.pill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}