import React from "react";
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeftRight,
  LayoutGrid,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const heroTags = [
  "Targeted Engineering",
  "Flexible Pod Integration",
  "End-to-End Delivery",
];

const specializations = [
  "Software Engineering",
  "Web & Mobile Development",
  "System Integration",
  "Quality Assurance",
];

const pillars = [
  {
    icon: ClipboardCheck,
    badge: "PILLAR 01",
    title: "01 — Project-Aligned Engineering",
    description:
      "Bring the right technical capabilities into your projects based on your development requirements, business objectives, and technology needs.",
    tags: ["Targeted Expertise", "Skilled Resources", "Project Support"],
  },
  {
    icon: ArrowLeftRight,
    badge: "PILLAR 02",
    title: "02 — Flexible Extension of Your Team",
    description:
      "Strengthen your existing technology team with skilled professionals who can contribute to your projects and adapt to changing technical requirements.",
    tags: ["Flexible Resources", "Team Support", "Scalable Capabilities"],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ProjectBasedEngineeringHero() {
  return (
    <section className="project-engineering-page">
      <style>{`
        /* =====================================================
           BASE
        ===================================================== */

        .project-engineering-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #1c1c1c;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .project-engineering-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 64px 100px 68px;
          box-sizing: border-box;
        }

        /* =====================================================
           TOP GRID
        ===================================================== */

        .project-engineering-top {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 400px;
          gap: 55px;
          align-items: start;
          margin-bottom: 52px;
        }

        .project-engineering-left {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .project-engineering-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          margin-bottom: 23px;
          padding: 7px 13px;
          border-radius: 999px;
          background: rgba(115, 0, 36, 0.05);
        }

        .project-engineering-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        .project-engineering-eyebrow span:last-child {
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.055em;
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .project-engineering-heading {
          max-width: 900px;
          margin: 0 0 21px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        .project-engineering-heading-highlight {
          color: #730024;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .project-engineering-description {
          max-width: 700px;
          margin: 0 0 30px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.75;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .project-engineering-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: fit-content;
          margin-bottom: 24px;
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

        .project-engineering-cta:hover {
          background: #5c001d;
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(115, 0, 36, 0.14);
        }

        .project-engineering-cta svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
        }

        /* =====================================================
           HERO TAGS
        ===================================================== */

        .project-engineering-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-engineering-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #f3f3f3;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 500;
        }

        .project-engineering-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        /* =====================================================
           RIGHT CARD
        ===================================================== */

        .project-engineering-card {
          width: 100%;
          max-width: 400px;
          margin-left: auto;
          overflow: hidden;
          border: 1px solid #e3e3e3;
          border-radius: 13px;
          background: #ffffff;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.035);
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .project-engineering-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 17px 18px;
        }

        .project-engineering-card-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
        }

        .project-engineering-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(115, 0, 36, 0.05);
          flex-shrink: 0;
        }

        .project-engineering-card-icon svg {
          width: 17px;
          height: 17px;
          color: #730024;
        }

        .project-engineering-card-title-wrap {
          min-width: 0;
        }

        .project-engineering-card-title {
          margin: 0 0 3px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12.5px;
          line-height: 1.35;
          font-weight: 600;
        }

        .project-engineering-card-subtitle {
          margin: 0;
          color: #999999;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          line-height: 1.4;
        }

        .project-engineering-status {
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
          line-height: 1.2;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .project-engineering-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          flex-shrink: 0;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .project-engineering-image {
          position: relative;
          height: 270px;
          margin: 0 12px;
          overflow: hidden;
          border-radius: 9px;
        }

        .project-engineering-image-bg {
          position: absolute;
          inset: 0;
          background-image: url("/dd.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          transition: transform 0.5s ease;
        }

        .project-engineering-card:hover
          .project-engineering-image-bg {
          transform: scale(1.025);
        }

        .project-engineering-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.72),
            rgba(0, 0, 0, 0.12) 65%,
            transparent
          );
        }

        .project-engineering-image-info {
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

        .project-engineering-image-info span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .project-engineering-image-info svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* =====================================================
           SPECIALIZATIONS
        ===================================================== */

        .project-engineering-specializations {
          padding: 18px 18px 17px;
        }

        .project-engineering-specializations-label {
          margin-bottom: 12px;
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .project-engineering-specializations-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px;
        }

        .project-engineering-specialization {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          padding: 9px 10px;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          background: #fafafa;
        }

        .project-engineering-specialization-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        .project-engineering-specialization span:last-child {
          color: #555555;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          line-height: 1.35;
          font-weight: 500;
        }

        /* =====================================================
           CARD FOOTER
        ===================================================== */

        .project-engineering-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 13px 18px;
          border-top: 1px solid #eeeeee;
        }

        .project-engineering-delivery-model,
        .project-engineering-delivery-value {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 500;
        }

        .project-engineering-delivery-model {
          color: #777777;
        }

        .project-engineering-delivery-value {
          color: #059669;
          font-weight: 600;
        }

        .project-engineering-delivery-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
        }

        /* =====================================================
           PILLAR CARDS
        ===================================================== */

        .project-engineering-pillars {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .project-engineering-pillar {
          min-width: 0;
          padding: 27px;
          border: 1px solid #e4e4e4;
          border-top: 4px solid #730024;
          border-radius: 12px;
          background: #ffffff;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .project-engineering-pillar:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }

        .project-engineering-pillar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 21px;
        }

        .project-engineering-pillar-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 9px;
          background: rgba(115, 0, 36, 0.05);
          flex-shrink: 0;
        }

        .project-engineering-pillar-icon svg {
          width: 18px;
          height: 18px;
          color: #730024;
        }

        .project-engineering-pillar-badge {
          padding: 6px 10px;
          border-radius: 7px;
          background: rgba(115, 0, 36, 0.05);
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 600;
          white-space: nowrap;
        }

        .project-engineering-pillar-title {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.4;
          font-weight: 600;
        }

        .project-engineering-pillar-description {
          max-width: 800px;
          margin: 0 0 19px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.75;
        }

        .project-engineering-pillar-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 15px;
          border-top: 1px solid #eeeeee;
        }

        .project-engineering-pillar-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #f3f3f3;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          line-height: 1.3;
          font-weight: 500;
        }

        .project-engineering-pillar-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .project-engineering-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 54px;
            padding-bottom: 60px;
          }

          .project-engineering-top {
            grid-template-columns: minmax(0, 1fr) 370px;
            gap: 38px;
            margin-bottom: 45px;
          }

          .project-engineering-heading {
            font-size: 36px;
          }

          .project-engineering-image {
            height: 250px;
          }

          .project-engineering-pillar {
            padding: 23px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .project-engineering-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .project-engineering-card {
            max-width: 560px;
            margin-left: 0;
          }

          .project-engineering-heading {
            max-width: 800px;
          }

          .project-engineering-description {
            max-width: 720px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .project-engineering-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 40px;
            padding-bottom: 45px;
          }

          .project-engineering-top {
            gap: 28px;
            margin-bottom: 35px;
          }

          .project-engineering-eyebrow {
            margin-bottom: 18px;
            padding: 6px 11px;
          }

          .project-engineering-eyebrow span:last-child {
            font-size: 8.5px;
          }

          .project-engineering-heading {
            font-size: 29px;
            line-height: 1.18;
            margin-bottom: 18px;
          }

          .project-engineering-description {
            font-size: 12.5px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .project-engineering-cta {
            padding: 12px 20px;
            font-size: 12px;
            margin-bottom: 20px;
          }

          .project-engineering-tag {
            padding: 6px 10px;
            font-size: 10px;
          }

          .project-engineering-card {
            max-width: 100%;
          }

          .project-engineering-card-header {
            padding: 15px;
          }

          .project-engineering-card-title {
            font-size: 11.5px;
          }

          .project-engineering-card-subtitle {
            font-size: 10px;
          }

          .project-engineering-status {
            font-size: 8.5px;
          }

          .project-engineering-image {
            height: 225px;
          }

          .project-engineering-specializations {
            padding: 15px;
          }

          .project-engineering-specializations-grid {
            grid-template-columns: 1fr;
          }

          .project-engineering-card-footer {
            padding: 12px 15px;
            flex-direction: column;
            align-items: flex-start;
          }

          .project-engineering-pillars {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .project-engineering-pillar {
            padding: 20px;
          }

          .project-engineering-pillar-title {
            font-size: 15px;
          }

          .project-engineering-pillar-description {
            font-size: 12px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .project-engineering-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 32px;
            padding-bottom: 38px;
          }

          .project-engineering-eyebrow span:last-child {
            font-size: 7.8px;
            letter-spacing: 0.035em;
          }

          .project-engineering-heading {
            font-size: 25px;
          }

          .project-engineering-description {
            font-size: 11.5px;
          }

          .project-engineering-cta {
            width: auto;
            padding: 11px 17px;
            font-size: 11.5px;
          }

          .project-engineering-tag {
            font-size: 9px;
            padding: 6px 9px;
          }

          .project-engineering-card-header {
            padding: 13px;
          }

          .project-engineering-card-brand {
            align-items: flex-start;
          }

          .project-engineering-card-icon {
            width: 32px;
            height: 32px;
          }

          .project-engineering-card-title {
            font-size: 10.5px;
          }

          .project-engineering-card-subtitle {
            font-size: 9px;
          }

          .project-engineering-status {
            padding: 6px 7px;
            font-size: 7.5px;
          }

          .project-engineering-image {
            height: 200px;
            margin-left: 10px;
            margin-right: 10px;
          }

          .project-engineering-image-info {
            font-size: 9px;
          }

          .project-engineering-specializations-label {
            font-size: 8.5px;
          }

          .project-engineering-specialization span:last-child {
            font-size: 10.5px;
          }

          .project-engineering-pillar {
            padding: 17px;
          }

          .project-engineering-pillar-top {
            margin-bottom: 17px;
          }

          .project-engineering-pillar-icon {
            width: 36px;
            height: 36px;
          }

          .project-engineering-pillar-icon svg {
            width: 16px;
            height: 16px;
          }

          .project-engineering-pillar-badge {
            font-size: 8px;
            padding: 5px 8px;
          }

          .project-engineering-pillar-title {
            font-size: 13.5px;
          }

          .project-engineering-pillar-description {
            font-size: 11px;
          }

          .project-engineering-pillar-tag {
            font-size: 9px;
            padding: 5px 8px;
          }
        }
      `}</style>

      <div className="project-engineering-container">

        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div className="project-engineering-top">

          {/* LEFT COLUMN */}
          <div className="project-engineering-left">

            {/* Eyebrow */}
            <div className="project-engineering-eyebrow">
              <span className="project-engineering-eyebrow-dot" />

              <span>
                IT AUGMENTATION • PROJECT-BASED ENGINEERING
              </span>
            </div>

            {/* Heading */}
            <h1 className="project-engineering-heading">
              Deliver Your Technology Projects with the{" "}
              <span className="project-engineering-heading-highlight">
                Right Engineering Expertise
              </span>
            </h1>

            {/* Description */}
            <p className="project-engineering-description">
              Bring skilled technical capabilities into your projects with
              flexible engineering support aligned with your business
              requirements, project objectives, and technology needs.
            </p>

            {/* CTA */}
            <button className="project-engineering-cta">
              Talk to Our Experts

              <ArrowRight />
            </button>

            {/* Tags */}
            <div className="project-engineering-tags">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="project-engineering-tag"
                >
                  <span className="project-engineering-tag-dot" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT CARD
          ================================================= */}

          <div className="project-engineering-card">

            {/* Header */}
            <div className="project-engineering-card-header">

              <div className="project-engineering-card-brand">

                <div className="project-engineering-card-icon">
                  <ClipboardCheck />
                </div>

                <div className="project-engineering-card-title-wrap">
                  <div className="project-engineering-card-title">
                    Project-Aligned Engineering Support
                  </div>

                  <p className="project-engineering-card-subtitle">
                    Sprint-Validated Delivery Pods
                  </p>
                </div>
              </div>

              <span className="project-engineering-status">
                <span className="project-engineering-status-dot" />
                Project-Aligned Support
              </span>
            </div>

            {/* Image */}
            <div className="project-engineering-image">

              <div className="project-engineering-image-bg" />

              <div className="project-engineering-image-overlay" />

              <div className="project-engineering-image-info">
                <span>
                  <LayoutGrid />
                  SPRINT EXECUTION POD
                </span>

                <span>
                  Multi-Disciplinary
                </span>
              </div>
            </div>

            {/* Specializations */}
            <div className="project-engineering-specializations">

              <div className="project-engineering-specializations-label">
                CORE SPRINT SPECIALIZATIONS
              </div>

              <div className="project-engineering-specializations-grid">
                {specializations.map((item) => (
                  <div
                    key={item}
                    className="project-engineering-specialization"
                  >
                    <span className="project-engineering-specialization-dot" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="project-engineering-card-footer">

              <span className="project-engineering-delivery-model">
                <span className="project-engineering-delivery-dot" />
                DELIVERY MODEL
              </span>

              <span className="project-engineering-delivery-value">
                ✓ Project-Aligned Engineering
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            PILLAR CARDS
        ===================================================== */}

        <div className="project-engineering-pillars">

          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.badge}
                className="project-engineering-pillar"
              >

                {/* Top Row */}
                <div className="project-engineering-pillar-top">

                  <div className="project-engineering-pillar-icon">
                    <Icon />
                  </div>

                  <span className="project-engineering-pillar-badge">
                    {item.badge}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="project-engineering-pillar-title">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="project-engineering-pillar-description">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="project-engineering-pillar-tags">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-engineering-pillar-tag"
                    >
                      <span className="project-engineering-pillar-tag-dot" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}