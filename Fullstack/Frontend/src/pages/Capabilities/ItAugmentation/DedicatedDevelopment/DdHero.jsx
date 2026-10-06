import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  CheckCircle2,
  Code2,
  UsersRound,
} from "lucide-react";

// =================================================
// DATA
// =================================================

const roles = [
  "System Architect / Lead",
  "Full-Stack Engineers",
  "DevOps & Cloud Automation",
  "QA & Reliability Specialist",
];

const highlights = [
  {
    icon: Code2,
    tag: "HIGHLIGHT 01",
    title: "01 — Skilled Technology Resources",
    description:
      "Access professionals with relevant technical expertise to support software engineering, development, integration, testing, and other technology requirements.",
  },
  {
    icon: UsersRound,
    tag: "HIGHLIGHT 02",
    title: "02 — Flexible Team Support",
    description:
      "Strengthen your existing technology team with flexible workforce solutions designed around your project requirements, business objectives, and changing needs.",
  },
];

// =================================================
// COMPONENT
// =================================================

export default function DedicatedTeamPodHero() {
  return (
    <section className="dedicated-team-section">
      <div className="dedicated-team-container">

        {/* =================================================
            TOP GRID
        ================================================= */}

        <div className="dedicated-team-top-grid">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="dedicated-team-content">

            {/* Eyebrow */}
            <div className="dedicated-team-eyebrow">

              <Zap />

              <span>
                IT AUGMENTATION • DEDICATED TEAMS
              </span>

            </div>

            {/* Heading */}
            <h1 className="dedicated-team-heading">
              Strengthen Your Technology Team with the{" "}
              <span>Right Expertise</span>
            </h1>

            {/* Description */}
            <p className="dedicated-team-description">
              Scale your technology capabilities with skilled professionals
              and flexible workforce solutions aligned with your business
              requirements, project goals, and technical needs.
            </p>

            {/* CTA */}
            <button className="dedicated-team-button">
              <span>Talk to Our Experts</span>

              <ArrowRight />
            </button>

          </div>

          {/* =================================================
              RIGHT ARCHITECTURE CARD
          ================================================= */}

          <div className="dedicated-team-card">

            {/* Card Header */}
            <div className="dedicated-team-card-header">

              <div className="dedicated-team-card-title-wrap">

                <div className="dedicated-team-card-icon">
                  <Users />
                </div>

                <div className="dedicated-team-card-title-content">

                  <div className="dedicated-team-card-title">
                    Dedicated Team Pod Architecture
                  </div>

                  <div className="dedicated-team-card-subtitle">
                    Continuous sprint alignment & high cohesion
                  </div>

                </div>

              </div>

              <span className="dedicated-team-status">
                <span />
                Full Pod Model
              </span>

            </div>

            {/* Card Image */}
            <div className="dedicated-team-image">

              <div
                className="dedicated-team-image-bg"
                style={{
                  backgroundImage: "url('/dd.png')",
                }}
              />

              <div className="dedicated-team-image-overlay" />

              <div className="dedicated-team-image-info">

                <span>
                  <CheckCircle2 />
                  Cross-Functional Team
                </span>

                <span>
                  Autonomous Delivery Unit
                </span>

              </div>

            </div>

            {/* Pod Composition */}
            <div className="dedicated-team-composition">

              <div className="dedicated-team-composition-label">
                POD COMPOSITION & SPECIALIZED ROLES
              </div>

              <div className="dedicated-team-roles">

                {roles.map((role) => (
                  <div
                    key={role}
                    className="dedicated-team-role"
                  >
                    <span />
                    <span>{role}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>

        {/* =================================================
            BOTTOM HIGHLIGHTS
        ================================================= */}

        <div className="dedicated-team-highlights">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.tag}
                className="dedicated-team-highlight-card"
              >

                {/* Icon */}
                <div className="dedicated-team-highlight-icon">
                  <Icon />
                </div>

                {/* Content */}
                <div className="dedicated-team-highlight-content">

                  <div className="dedicated-team-highlight-tag">
                    {item.tag}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        .dedicated-team-section {
          width: 100%;

          background: #f7f6f4;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .dedicated-team-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 70px;
          padding-bottom: 70px;
        }

        /* =====================================================
           TOP GRID
        ===================================================== */

        .dedicated-team-top-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(360px, 430px);

          gap: 70px;

          align-items: center;

          margin-bottom: 42px;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .dedicated-team-content {
          width: 100%;
          max-width: 760px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .dedicated-team-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          padding: 7px 12px;

          margin-bottom: 21px;

          width: fit-content;

          border-radius: 999px;

          background: rgba(115, 0, 36, 0.05);
        }

        .dedicated-team-eyebrow svg {
          width: 12px;
          height: 12px;

          flex-shrink: 0;

          color: #730024;
        }

        .dedicated-team-eyebrow span {
          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.055em;

          color: #730024;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .dedicated-team-heading {
          margin: 0 0 20px;

          max-width: 780px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(34px, 3.4vw, 52px);

          font-weight: 600;

          line-height: 1.13;

          letter-spacing: -0.035em;

          color: #1c1c1c;
        }

        .dedicated-team-heading span {
          color: #730024;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .dedicated-team-description {
          max-width: 650px;

          margin: 0 0 28px;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          font-weight: 400;

          line-height: 1.75;

          color: #686868;
        }

        /* =====================================================
           BUTTON
        ===================================================== */

        .dedicated-team-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 46px;

          padding: 12px 21px;

          border: none;

          border-radius: 6px;

          background: #730024;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 12.5px;

          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .dedicated-team-button svg {
          width: 15px;
          height: 15px;

          transition: transform 0.3s ease;
        }

        .dedicated-team-button:hover {
          background: #5c001d;

          transform: translateY(-2px);

          box-shadow: 0 8px 20px rgba(115, 0, 36, 0.15);
        }

        .dedicated-team-button:hover svg {
          transform: translateX(3px);
        }

        /* =====================================================
           RIGHT CARD
        ===================================================== */

        .dedicated-team-card {
          width: 100%;

          background: #ffffff;

          border: 1px solid #e4e4e4;

          border-radius: 14px;

          overflow: hidden;

          box-shadow:
            0 5px 20px rgba(0, 0, 0, 0.035);
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .dedicated-team-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 14px;

          padding: 17px 18px;
        }

        .dedicated-team-card-title-wrap {
          display: flex;
          align-items: center;

          gap: 11px;

          min-width: 0;
        }

        .dedicated-team-card-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          background: rgba(115, 0, 36, 0.05);
        }

        .dedicated-team-card-icon svg {
          width: 16px;
          height: 16px;

          color: #730024;
        }

        .dedicated-team-card-title-content {
          min-width: 0;
        }

        .dedicated-team-card-title {
          margin-bottom: 3px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 12.5px;

          font-weight: 600;

          line-height: 1.35;

          color: #1c1c1c;
        }

        .dedicated-team-card-subtitle {
          font-family: "Inter", sans-serif;

          font-size: 9.5px;

          line-height: 1.4;

          color: #999999;
        }

        /* =====================================================
           STATUS
        ===================================================== */

        .dedicated-team-status {
          display: inline-flex;
          align-items: center;

          gap: 5px;

          flex-shrink: 0;

          padding: 5px 9px;

          border-radius: 999px;

          background: #ecfdf3;

          color: #059669;

          font-family: "Inter", sans-serif;

          font-size: 8.5px;

          font-weight: 600;

          white-space: nowrap;
        }

        .dedicated-team-status > span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #10b981;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .dedicated-team-image {
          position: relative;

          height: 245px;

          margin: 0 12px;

          overflow: hidden;

          border-radius: 9px;
        }

        .dedicated-team-image-bg {
          position: absolute;

          inset: 0;

          background-size: cover;

          background-position: center;

          transition: transform 0.6s ease;
        }

        .dedicated-team-card:hover .dedicated-team-image-bg {
          transform: scale(1.025);
        }

        .dedicated-team-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.64),
              rgba(0, 0, 0, 0.05) 70%,
              transparent
            );
        }

        .dedicated-team-image-info {
          position: absolute;

          left: 13px;
          right: 13px;
          bottom: 12px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 9px;

          font-weight: 500;
        }

        .dedicated-team-image-info span {
          display: inline-flex;
          align-items: center;

          gap: 5px;
        }

        .dedicated-team-image-info svg {
          width: 13px;
          height: 13px;

          flex-shrink: 0;
        }

        /* =====================================================
           COMPOSITION
        ===================================================== */

        .dedicated-team-composition {
          padding: 19px 18px 20px;
        }

        .dedicated-team-composition-label {
          margin-bottom: 11px;

          font-family: "Inter", sans-serif;

          font-size: 8.5px;

          font-weight: 600;

          letter-spacing: 0.055em;

          color: #999999;
        }

        .dedicated-team-roles {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 8px;
        }

        .dedicated-team-role {
          min-width: 0;

          display: flex;
          align-items: center;

          gap: 7px;

          padding: 9px 10px;

          border: 1px solid #e7e7e7;

          border-radius: 8px;

          background: #fafafa;
        }

        .dedicated-team-role > span:first-child {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #730024;
        }

        .dedicated-team-role > span:last-child {
          min-width: 0;

          font-family: "Inter", sans-serif;

          font-size: 9.5px;

          line-height: 1.35;

          color: #555555;

          font-weight: 500;
        }

        /* =====================================================
           HIGHLIGHTS
        ===================================================== */

        .dedicated-team-highlights {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 20px;
        }

        .dedicated-team-highlight-card {
          display: flex;
          align-items: flex-start;

          gap: 17px;

          min-width: 0;

          padding: 23px;

          background: #ffffff;

          border: 1px solid #e4e4e4;

          border-radius: 12px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .dedicated-team-highlight-card:hover {
          transform: translateY(-3px);

          border-color: rgba(115, 0, 36, 0.18);

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.045);
        }

        .dedicated-team-highlight-icon {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 9px;

          background: rgba(115, 0, 36, 0.05);
        }

        .dedicated-team-highlight-icon svg {
          width: 17px;
          height: 17px;

          color: #730024;
        }

        .dedicated-team-highlight-content {
          min-width: 0;
        }

        .dedicated-team-highlight-tag {
          margin-bottom: 4px;

          font-family: "Inter", sans-serif;

          font-size: 8.5px;

          font-weight: 700;

          letter-spacing: 0.055em;

          color: #730024;
        }

        .dedicated-team-highlight-content h3 {
          margin: 0 0 7px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;

          font-weight: 600;

          line-height: 1.4;

          color: #1c1c1c;
        }

        .dedicated-team-highlight-content p {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .dedicated-team-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .dedicated-team-top-grid {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(340px, 400px);

            gap: 45px;
          }

          .dedicated-team-heading {
            font-size: 42px;
          }
        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .dedicated-team-container {
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .dedicated-team-top-grid {
            grid-template-columns: 1fr;

            gap: 35px;

            align-items: start;
          }

          .dedicated-team-content {
            max-width: 760px;
          }

          .dedicated-team-card {
            max-width: 600px;
          }

          .dedicated-team-heading {
            font-size: 40px;
          }

          .dedicated-team-description {
            max-width: 680px;
          }
        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .dedicated-team-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .dedicated-team-top-grid {
            gap: 30px;

            margin-bottom: 30px;
          }

          .dedicated-team-eyebrow {
            margin-bottom: 17px;

            padding: 6px 10px;
          }

          .dedicated-team-eyebrow span {
            font-size: 8px;
          }

          .dedicated-team-heading {
            font-size: 32px;

            line-height: 1.18;

            margin-bottom: 17px;
          }

          .dedicated-team-description {
            font-size: 12.5px;

            line-height: 1.7;

            margin-bottom: 23px;
          }

          .dedicated-team-button {
            min-height: 44px;

            padding: 11px 18px;

            font-size: 11.5px;
          }

          .dedicated-team-card-header {
            padding: 15px;
          }

          .dedicated-team-image {
            height: 225px;
          }

          .dedicated-team-composition {
            padding: 17px 15px 18px;
          }

          .dedicated-team-highlights {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .dedicated-team-highlight-card {
            padding: 19px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .dedicated-team-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 38px;
            padding-bottom: 38px;
          }

          .dedicated-team-top-grid {
            gap: 25px;

            margin-bottom: 25px;
          }

          .dedicated-team-heading {
            font-size: 27px;

            letter-spacing: -0.025em;
          }

          .dedicated-team-description {
            font-size: 11.5px;

            line-height: 1.7;
          }

          .dedicated-team-button {
            width: auto;

            padding: 10px 16px;

            font-size: 10.5px;
          }

          .dedicated-team-card-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 11px;

            padding: 14px;
          }

          .dedicated-team-card-title {
            font-size: 11px;
          }

          .dedicated-team-card-subtitle {
            font-size: 8.5px;
          }

          .dedicated-team-status {
            font-size: 8px;
          }

          .dedicated-team-image {
            height: 200px;

            margin: 0 10px;
          }

          .dedicated-team-image-info {
            left: 10px;
            right: 10px;
            bottom: 10px;

            font-size: 8px;
          }

          .dedicated-team-image-info svg {
            width: 11px;
            height: 11px;
          }

          .dedicated-team-roles {
            grid-template-columns: 1fr;

            gap: 7px;
          }

          .dedicated-team-role {
            padding: 8px 9px;
          }

          .dedicated-team-role > span:last-child {
            font-size: 9px;
          }

          .dedicated-team-highlight-card {
            gap: 13px;

            padding: 17px;
          }

          .dedicated-team-highlight-icon {
            width: 36px;
            height: 36px;
          }

          .dedicated-team-highlight-icon svg {
            width: 15px;
            height: 15px;
          }

          .dedicated-team-highlight-content h3 {
            font-size: 13px;
          }

          .dedicated-team-highlight-content p {
            font-size: 10.5px;

            line-height: 1.65;
          }
        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .dedicated-team-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .dedicated-team-heading {
            font-size: 24px;
          }

          .dedicated-team-description {
            font-size: 10.5px;
          }

          .dedicated-team-image {
            height: 180px;
          }

          .dedicated-team-highlight-card {
            align-items: flex-start;
          }
        }

      `}</style>
    </section>
  );
}