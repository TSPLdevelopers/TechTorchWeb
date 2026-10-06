import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  Zap,
  Award,
  DollarSign,
  Network,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    icon: Zap,
    title: "48-Hour",
    subtitle: "Rapid Onboarding",
    description:
      "Matched profiles vetted and ready for client interview within two business days.",
  },
  {
    icon: Award,
    title: "Top 3%",
    subtitle: "Senior Talent",
    description:
      "Evaluated across rigorous system design and live programming challenges.",
  },
  {
    icon: DollarSign,
    title: "Zero",
    subtitle: "Hiring Overhead",
    description:
      "No upfront recruitment retainers, long-term liabilities, or severance risks.",
  },
];

const stacks = [
  { label: "React / Next.js", highlighted: false },
  { label: "Node.js", highlighted: false },
  { label: "Python / FastAPI", highlighted: false },
  { label: "AWS Cloud", highlighted: true },
  { label: "Kubernetes", highlighted: false },
  { label: "Go", highlighted: false },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FlexibleTechResourcesHero() {
  return (
    <div className="flexible-tech-hero">
      <div className="flexible-tech-container">

        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div className="flexible-tech-top-grid">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="flexible-tech-content">

            {/* Eyebrow */}
            <div className="flexible-tech-eyebrow">
              <ShieldCheck className="flexible-tech-eyebrow-icon" />

              <span>
                IT AUGMENTATION • CAPABILITY 01
              </span>
            </div>

            {/* Heading */}
            <h1 className="flexible-tech-heading">
              Flexible Technology Resources for{" "}
              <span>Dynamic Project</span>{" "}
              Demands
            </h1>

            {/* Description */}
            <p className="flexible-tech-description">
              Scale engineering capacity rapidly with pre-vetted senior
              software engineers, architects, and technical specialists who
              seamlessly integrate into your sprint cycles.
            </p>

            {/* CTA */}
            <button
              type="button"
              className="flexible-tech-button"
            >
              Talk to Our Experts

              <ArrowRight className="flexible-tech-button-icon" />
            </button>

          </div>

          {/* =====================================================
              RIGHT TALENT CARD
          ===================================================== */}

          <div className="flexible-tech-talent-card">

            {/* Header */}
            <div className="flexible-tech-card-header">

              <div className="flexible-tech-card-title-group">

                <div className="flexible-tech-network-icon">
                  <Network />
                </div>

                <div className="flexible-tech-title-content">

                  <div className="flexible-tech-card-title">
                    Active Talent Pool
                  </div>

                  <div className="flexible-tech-card-subtitle">
                    Live Engineering Bench
                  </div>

                </div>

              </div>

              <span className="flexible-tech-status">
                <span />
                Instant Deploy
              </span>

            </div>

            {/* Image */}
            <div className="flexible-tech-image">

              <div className="flexible-tech-image-bg" />

              <div className="flexible-tech-image-overlay" />

              <div className="flexible-tech-image-info">

                <span>
                  <ShieldCheck />
                  Production Verified Staff
                </span>

                <span>
                  Tier 1 Bench
                </span>

              </div>

            </div>

            {/* Stack Label */}
            <div className="flexible-tech-stack-label">
              AVAILABLE CORE STACKS
            </div>

            {/* Stack Tags */}
            <div className="flexible-tech-stacks">

              {stacks.map((stack) => (
                <span
                  key={stack.label}
                  className={
                    stack.highlighted
                      ? "flexible-tech-stack highlighted"
                      : "flexible-tech-stack"
                  }
                >
                  {stack.label}
                </span>
              ))}

            </div>

          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="flexible-tech-divider" />

        {/* =====================================================
            STAT CARDS
        ===================================================== */}

        <div className="flexible-tech-stats">

          {stats.map(
            ({ icon: Icon, title, subtitle, description }) => (
              <div
                key={subtitle}
                className="flexible-tech-stat-card"
              >

                {/* Icon */}
                <div className="flexible-tech-stat-icon">
                  <Icon />
                </div>

                {/* Content */}
                <div className="flexible-tech-stat-content">

                  <div className="flexible-tech-stat-title">
                    {title}
                  </div>

                  <div className="flexible-tech-stat-subtitle">
                    {subtitle}
                  </div>

                  <p className="flexible-tech-stat-description">
                    {description}
                  </p>

                </div>

              </div>
            )
          )}

        </div>

      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           FONTS
        ===================================================== */

        .flexible-tech-hero {
          width: 100%;
          min-height: auto;
          background: linear-gradient(
            to bottom,
            rgba(115, 0, 36, 0.045),
            #ffffff 65%
          );
          font-family: "Inter", sans-serif;
          color: #1c1c1c;
          overflow: hidden;
        }

        .flexible-tech-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 64px;
          padding-bottom: 64px;
        }

        /* =====================================================
           TOP GRID
        ===================================================== */

        .flexible-tech-top-grid {
          width: 100%;

          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(340px, 400px);

          gap: 64px;
          align-items: center;

          margin-bottom: 52px;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .flexible-tech-content {
          width: 100%;
          max-width: 760px;
        }

        .flexible-tech-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 7px 12px;

          margin-bottom: 22px;

          border-radius: 999px;

          background: rgba(115, 0, 36, 0.05);
          border: 1px solid rgba(115, 0, 36, 0.1);

          color: #730024;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.04em;
          line-height: 1;
        }

        .flexible-tech-eyebrow-icon {
          width: 13px;
          height: 13px;
          flex-shrink: 0;
        }

        .flexible-tech-heading {
          margin: 0 0 18px;

          max-width: 760px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(36px, 3.3vw, 52px);
          font-weight: 600;

          line-height: 1.1;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        .flexible-tech-heading span {
          color: #730024;
        }

        .flexible-tech-description {
          max-width: 650px;

          margin: 0 0 28px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 500;

          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .flexible-tech-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          border: none;
          border-radius: 6px;

          background: #730024;
          color: #ffffff;

          padding: 12px 22px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .flexible-tech-button:hover {
          background: #5c001d;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(115, 0, 36, 0.16);
        }

        .flexible-tech-button-icon {
          width: 15px;
          height: 15px;

          transition: transform 0.25s ease;
        }

        .flexible-tech-button:hover
        .flexible-tech-button-icon {
          transform: translateX(3px);
        }

        /* =====================================================
           TALENT CARD
        ===================================================== */

        .flexible-tech-talent-card {
          width: 100%;
          max-width: 400px;

          justify-self: end;

          padding: 20px;

          background: #ffffff;

          border: 1px solid #e5e5e5;
          border-radius: 16px;

          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.045);
        }

        .flexible-tech-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 14px;

          margin-bottom: 17px;
        }

        .flexible-tech-card-title-group {
          display: flex;
          align-items: center;

          gap: 11px;

          min-width: 0;
        }

        .flexible-tech-network-icon {
          width: 38px;
          height: 38px;

          border-radius: 9px;

          background: #730024;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;
        }

        .flexible-tech-network-icon svg {
          width: 17px;
          height: 17px;

          color: #ffffff;
        }

        .flexible-tech-title-content {
          min-width: 0;
        }

        .flexible-tech-card-title {
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;

          color: #1c1c1c;

          line-height: 1.3;
        }

        .flexible-tech-card-subtitle {
          margin-top: 2px;

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 400;

          color: #a3a3a3;
        }

        .flexible-tech-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          padding: 6px 9px;

          border-radius: 999px;

          background: #ecfdf3;
          color: #059669;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;

          white-space: nowrap;
        }

        .flexible-tech-status span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #10b981;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .flexible-tech-image {
          position: relative;

          width: 100%;
          height: 220px;

          overflow: hidden;

          border-radius: 10px;

          margin-bottom: 17px;
        }

        .flexible-tech-image-bg {
          position: absolute;
          inset: 0;

          background-image: url("/DeploymentMethodology.png");
          background-size: cover;
          background-position: center;
        }

        .flexible-tech-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.05) 65%,
              transparent
            );
        }

        .flexible-tech-image-info {
          position: absolute;

          left: 12px;
          right: 12px;
          bottom: 11px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 500;
        }

        .flexible-tech-image-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .flexible-tech-image-info svg {
          width: 13px;
          height: 13px;

          flex-shrink: 0;
        }

        /* =====================================================
           STACKS
        ===================================================== */

        .flexible-tech-stack-label {
          margin-bottom: 9px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;

          letter-spacing: 0.05em;

          color: #a3a3a3;
        }

        .flexible-tech-stacks {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .flexible-tech-stack {
          display: inline-flex;
          align-items: center;

          padding: 6px 10px;

          border-radius: 6px;

          background: #f3f3f3;

          color: #666666;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 500;

          border: 1px solid transparent;

          transition: all 0.25s ease;
        }

        .flexible-tech-stack.highlighted {
          background: rgba(115, 0, 36, 0.05);
          color: #730024;

          border-color: rgba(115, 0, 36, 0.1);
        }

        /* =====================================================
           DIVIDER
        ===================================================== */

        .flexible-tech-divider {
          width: 100%;

          height: 1px;

          background: #e5e5e5;

          margin-bottom: 28px;
        }

        /* =====================================================
           STATS
        ===================================================== */

        .flexible-tech-stats {
          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 20px;
        }

        .flexible-tech-stat-card {
          display: flex;
          align-items: flex-start;

          gap: 15px;

          padding: 20px;

          background: #fafafa;

          border: 1px solid #e5e5e5;

          border-radius: 12px;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .flexible-tech-stat-card:hover {
          transform: translateY(-3px);

          border-color: rgba(115, 0, 36, 0.15);

          box-shadow:
            0 8px 24px rgba(115, 0, 36, 0.05);
        }

        .flexible-tech-stat-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          border-radius: 9px;

          background: rgba(115, 0, 36, 0.05);

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flexible-tech-stat-icon svg {
          width: 17px;
          height: 17px;

          color: #730024;
        }

        .flexible-tech-stat-content {
          min-width: 0;
        }

        .flexible-tech-stat-title {
          margin-bottom: 2px;

          font-family: "Inter", sans-serif;
          font-size: 17px;
          font-weight: 600;

          line-height: 1.2;

          color: #1c1c1c;
        }

        .flexible-tech-stat-subtitle {
          margin-bottom: 7px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;

          color: #666666;
        }

        .flexible-tech-stat-description {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 400;

          line-height: 1.6;

          color: #737373;
        }

        /* =====================================================
           LARGE TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .flexible-tech-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .flexible-tech-top-grid {
            gap: 45px;
          }

          .flexible-tech-heading {
            font-size: 44px;
          }

        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .flexible-tech-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .flexible-tech-top-grid {
            grid-template-columns: 1fr;

            gap: 38px;

            margin-bottom: 42px;
          }

          .flexible-tech-content {
            max-width: 760px;
          }

          .flexible-tech-talent-card {
            max-width: 100%;
            justify-self: stretch;
          }

          .flexible-tech-image {
            height: 250px;
          }

          .flexible-tech-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .flexible-tech-stat-card:last-child {
            grid-column: 1 / -1;
          }

        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .flexible-tech-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .flexible-tech-eyebrow {
            font-size: 8.5px;
            padding: 7px 10px;
          }

          .flexible-tech-heading {
            font-size: 36px;

            line-height: 1.12;

            margin-bottom: 16px;
          }

          .flexible-tech-description {
            font-size: 13.5px;
            line-height: 1.65;

            margin-bottom: 23px;
          }

          .flexible-tech-button {
            font-size: 11px;

            padding: 11px 19px;
          }

          .flexible-tech-image {
            height: 225px;
          }

          .flexible-tech-stats {
            grid-template-columns: 1fr;
          }

          .flexible-tech-stat-card:last-child {
            grid-column: auto;
          }

        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .flexible-tech-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 34px;
            padding-bottom: 34px;
          }

          .flexible-tech-top-grid {
            gap: 30px;
          }

          .flexible-tech-eyebrow {
            gap: 6px;

            font-size: 7.5px;

            padding: 6px 9px;

            margin-bottom: 17px;
          }

          .flexible-tech-eyebrow-icon {
            width: 11px;
            height: 11px;
          }

          .flexible-tech-heading {
            font-size: 29px;

            letter-spacing: -0.02em;
          }

          .flexible-tech-description {
            font-size: 12px;

            line-height: 1.65;

            margin-bottom: 20px;
          }

          .flexible-tech-button {
            width: auto;

            font-size: 10px;

            padding: 10px 16px;
          }

          .flexible-tech-button-icon {
            width: 13px;
            height: 13px;
          }

          .flexible-tech-talent-card {
            padding: 14px;

            border-radius: 12px;
          }

          .flexible-tech-card-header {
            align-items: flex-start;

            margin-bottom: 13px;
          }

          .flexible-tech-network-icon {
            width: 34px;
            height: 34px;
          }

          .flexible-tech-network-icon svg {
            width: 15px;
            height: 15px;
          }

          .flexible-tech-card-title {
            font-size: 11px;
          }

          .flexible-tech-card-subtitle {
            font-size: 9px;
          }

          .flexible-tech-status {
            font-size: 7.5px;

            padding: 5px 7px;
          }

          .flexible-tech-image {
            height: 190px;

            margin-bottom: 14px;
          }

          .flexible-tech-image-info {
            font-size: 8px;

            flex-direction: column;
            align-items: flex-start;

            gap: 3px;
          }

          .flexible-tech-stack-label {
            font-size: 8px;
          }

          .flexible-tech-stack {
            font-size: 8.5px;

            padding: 5px 8px;
          }

          .flexible-tech-divider {
            margin-bottom: 20px;
          }

          .flexible-tech-stat-card {
            padding: 15px;

            gap: 12px;
          }

          .flexible-tech-stat-icon {
            width: 34px;
            height: 34px;
          }

          .flexible-tech-stat-icon svg {
            width: 15px;
            height: 15px;
          }

          .flexible-tech-stat-title {
            font-size: 15px;
          }

          .flexible-tech-stat-subtitle {
            font-size: 10.5px;
          }

          .flexible-tech-stat-description {
            font-size: 10px;
          }

        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .flexible-tech-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .flexible-tech-heading {
            font-size: 26px;
          }

          .flexible-tech-description {
            font-size: 11.5px;
          }

          .flexible-tech-status {
            display: none;
          }

          .flexible-tech-image {
            height: 175px;
          }

          .flexible-tech-stat-card {
            padding: 13px;
          }

        }
      `}</style>
    </div>
  );
}