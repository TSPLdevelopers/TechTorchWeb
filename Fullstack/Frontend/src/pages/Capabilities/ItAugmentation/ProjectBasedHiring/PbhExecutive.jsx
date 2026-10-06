import React from "react";
import {
  TrendingUp,
  Users,
  Check,
  ClipboardList,
  Code2,
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";

const deliveryChecks = [
  "Objective & Milestone Alignment",
  "Target Technical Capabilities",
  "Outcome-Focused Execution",
];

const podRoles = [
  { icon: ClipboardList, label: "Project Planning" },
  { icon: Code2, label: "Development Support" },
  { icon: ShieldCheck, label: "Quality & Testing" },
];

export default function ProjectBasedEngineeringDeepDive() {
  return (
    <section className="pbe-section">
      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .pbe-section {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #1c1c1c;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .pbe-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 58px 100px 70px;
          box-sizing: border-box;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .pbe-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 28px;
        }

        .pbe-header-content {
          min-width: 0;
        }

        .pbe-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 9px;
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.065em;
        }

        .pbe-heading {
          max-width: 900px;
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.25;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .pbe-header-description {
          max-width: 820px;
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          line-height: 1.7;
        }

        .pbe-project-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          width: fit-content;
          padding: 7px 12px;
          border-radius: 999px;
          background: #f3f3f3;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          line-height: 1.3;
          font-weight: 500;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .pbe-project-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        .pbe-divider {
          width: 100%;
          height: 1px;
          margin-bottom: 30px;
          background: #e5e5e5;
        }

        /* =====================================================
           TOP CARDS
        ===================================================== */

        .pbe-top-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 65px;
        }

        .pbe-card {
          position: relative;
          min-width: 0;
          padding: 21px;
          border: 1px solid #e4e4e4;
          border-radius: 12px;
          background: #ffffff;
          transition:
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .pbe-card:hover {
          border-color: rgba(115, 0, 36, 0.20);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
        }

        .pbe-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 17px;
        }

        .pbe-card-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          max-width: calc(100% - 30px);
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(115, 0, 36, 0.05);
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: 0.035em;
        }

        .pbe-card-tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
          flex-shrink: 0;
        }

        .pbe-card-icon {
          width: 17px;
          height: 17px;
          color: #d2d2d2;
          flex-shrink: 0;
        }

        .pbe-card-heading {
          margin: 0 0 9px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
        }

        .pbe-card-description {
          margin: 0 0 17px;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================================
           DELIVERY CHECKS
        ===================================================== */

        .pbe-check-list {
          padding-top: 13px;
          border-top: 1px solid #eeeeee;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .pbe-check-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.4;
        }

        .pbe-check-item svg {
          width: 13px;
          height: 13px;
          color: #730024;
          flex-shrink: 0;
        }

        /* =====================================================
           POD ROLES
        ===================================================== */

        .pbe-roles-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          padding-left: 9px;
          border-left: 2px solid #730024;
        }

        .pbe-roles-title span {
          color: #999999;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: 0.065em;
        }

        .pbe-role-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .pbe-role {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 8px;
          border-radius: 4px;
          background: #f3f3f3;
          color: #666666;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 500;
        }

        .pbe-role svg {
          width: 12px;
          height: 12px;
          color: #730024;
          flex-shrink: 0;
        }

        /* =====================================================
           DARK CARD
        ===================================================== */

        .pbe-dark-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 260px;
          overflow: hidden;
          padding: 21px;
          border-radius: 12px;
          background: #730024;
        }

        .pbe-dark-decoration {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 128px;
          height: 128px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          filter: blur(24px);
          pointer-events: none;
        }

        .pbe-dark-top {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 17px;
        }

        .pbe-dark-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 600;
        }

        .pbe-dark-tag svg {
          width: 12px;
          height: 12px;
        }

        .pbe-active-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          flex-shrink: 0;
        }

        .pbe-dark-heading {
          position: relative;
          z-index: 1;
          margin: 0 0 9px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
        }

        .pbe-dark-description {
          position: relative;
          z-index: 1;
          flex: 1;
          margin: 0 0 20px;
          color: rgba(255, 255, 255, 0.72);
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        .pbe-dark-button {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: fit-content;
          padding: 10px 15px;
          border: 0;
          border-radius: 5px;
          background: #ffffff;
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          line-height: 1;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .pbe-dark-button:hover {
          background: #f5f5f5;
          transform: translateY(-1px);
        }

        .pbe-dark-button svg {
          width: 14px;
          height: 14px;
        }

        /* =====================================================
           DEEP DIVE
        ===================================================== */

        .pbe-deep-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 15px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(115, 0, 36, 0.05);
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.045em;
        }

        .pbe-deep-label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
        }

        .pbe-deep-heading {
          max-width: 900px;
          margin: 0 0 31px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        /* =====================================================
           TWO COLUMN TEXT
        ===================================================== */

        .pbe-text-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 55px;
          margin-bottom: 29px;
        }

        .pbe-text-grid p {
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 13.5px;
          line-height: 1.8;
        }

        /* =====================================================
           JOURNEY BOX
        ===================================================== */

        .pbe-journey {
          margin-bottom: 30px;
          padding: 20px 22px;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          background: #fafafa;
        }

        .pbe-journey-title {
          margin: 0 0 8px;
          color: #730024;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.055em;
        }

        .pbe-journey-text {
          margin: 0;
          color: #737373;
          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          line-height: 1.75;
        }

        /* =====================================================
           QUOTE
        ===================================================== */

        .pbe-quote {
          position: relative;
          overflow: hidden;
          padding: 34px 42px;
          border-left: 4px solid #730024;
          border-radius: 0 14px 14px 0;
          background: rgba(115, 0, 36, 0.045);
        }

        .pbe-quote-mark {
          position: absolute;
          top: 9px;
          left: 19px;
          color: rgba(115, 0, 36, 0.14);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 52px;
          line-height: 1;
          font-weight: 700;
          user-select: none;
          pointer-events: none;
        }

        .pbe-quote-text {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 0 18px;
          padding-left: 5px;
          color: #1c1c1c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 22px;
          line-height: 1.45;
          font-weight: 600;
          font-style: italic;
        }

        .pbe-quote-author {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-left: 5px;
        }

        .pbe-quote-line {
          width: 16px;
          height: 1px;
          background: #730024;
          flex-shrink: 0;
        }

        .pbe-quote-author span {
          color: #730024;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          line-height: 1.3;
          font-weight: 600;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .pbe-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 52px;
            padding-bottom: 60px;
          }

          .pbe-heading,
          .pbe-deep-heading {
            font-size: 29px;
          }

          .pbe-header {
            gap: 25px;
          }

          .pbe-top-cards {
            gap: 15px;
            margin-bottom: 55px;
          }

          .pbe-card,
          .pbe-dark-card {
            padding: 19px;
          }

          .pbe-text-grid {
            gap: 35px;
          }

          .pbe-quote {
            padding: 31px 35px;
          }

          .pbe-quote-text {
            font-size: 20px;
          }
        }

        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .pbe-header {
            flex-direction: column;
            gap: 16px;
          }

          .pbe-project-pill {
            white-space: normal;
          }

          .pbe-top-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pbe-dark-card {
            grid-column: 1 / -1;
            min-height: 220px;
          }

          .pbe-text-grid {
            gap: 25px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .pbe-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 40px;
            padding-bottom: 48px;
          }

          .pbe-header {
            margin-bottom: 22px;
          }

          .pbe-eyebrow {
            font-size: 9px;
          }

          .pbe-heading,
          .pbe-deep-heading {
            font-size: 26px;
            line-height: 1.3;
          }

          .pbe-header-description {
            font-size: 12.5px;
            line-height: 1.7;
          }

          .pbe-divider {
            margin-bottom: 24px;
          }

          .pbe-top-cards {
            grid-template-columns: 1fr;
            gap: 13px;
            margin-bottom: 45px;
          }

          .pbe-card,
          .pbe-dark-card {
            padding: 18px;
          }

          .pbe-dark-card {
            grid-column: auto;
            min-height: 220px;
          }

          .pbe-card-heading,
          .pbe-dark-heading {
            font-size: 14px;
          }

          .pbe-card-description,
          .pbe-dark-description {
            font-size: 11.5px;
          }

          .pbe-deep-label {
            font-size: 8.5px;
          }

          .pbe-deep-heading {
            margin-bottom: 24px;
          }

          .pbe-text-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 23px;
          }

          .pbe-text-grid p {
            font-size: 12px;
            line-height: 1.75;
          }

          .pbe-journey {
            padding: 18px;
            margin-bottom: 24px;
          }

          .pbe-journey-title {
            font-size: 10px;
          }

          .pbe-journey-text {
            font-size: 11.5px;
          }

          .pbe-quote {
            padding: 29px 22px 27px 25px;
            border-left-width: 3px;
          }

          .pbe-quote-mark {
            left: 12px;
            font-size: 44px;
          }

          .pbe-quote-text {
            padding-left: 3px;
            font-size: 17px;
            line-height: 1.5;
          }

          .pbe-quote-author {
            padding-left: 3px;
          }

          .pbe-quote-author span {
            font-size: 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .pbe-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 32px;
            padding-bottom: 40px;
          }

          .pbe-heading,
          .pbe-deep-heading {
            font-size: 22px;
          }

          .pbe-header-description {
            font-size: 11.5px;
          }

          .pbe-project-pill {
            font-size: 9.5px;
            padding: 6px 10px;
          }

          .pbe-card {
            padding: 16px;
          }

          .pbe-card-tag,
          .pbe-dark-tag {
            font-size: 8px;
          }

          .pbe-card-heading,
          .pbe-dark-heading {
            font-size: 13.5px;
          }

          .pbe-card-description,
          .pbe-dark-description {
            font-size: 11px;
          }

          .pbe-check-item {
            font-size: 10px;
          }

          .pbe-role {
            font-size: 9px;
          }

          .pbe-deep-label {
            font-size: 8px;
            padding: 6px 9px;
          }

          .pbe-text-grid p {
            font-size: 11px;
          }

          .pbe-journey {
            padding: 16px;
          }

          .pbe-journey-title {
            font-size: 9.5px;
          }

          .pbe-journey-text {
            font-size: 10.5px;
          }

          .pbe-quote {
            padding: 25px 17px 23px 20px;
          }

          .pbe-quote-text {
            font-size: 15px;
          }

          .pbe-quote-author span {
            font-size: 9.5px;
          }
        }
      `}</style>

      <div className="pbe-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="pbe-header">
          <div className="pbe-header-content">
            <div className="pbe-eyebrow">
              EXECUTIVE BRIEFING & GOVERNANCE
            </div>

            <h1 className="pbe-heading">
              Supporting Technology Projects with the Right Expertise
            </h1>

            <p className="pbe-header-description">
              Technology projects can require specialised skills at different
              stages of development. The right engineering support can help
              businesses address technical requirements while complementing
              their existing teams.
            </p>
          </div>

          <span className="pbe-project-pill">
            <span className="pbe-project-dot" />
            Project-Aligned Engineering Support
          </span>
        </div>

        <div className="pbe-divider" />

        {/* =====================================================
            THREE CARDS
        ===================================================== */}

        <div className="pbe-top-cards">

          {/* CARD 1 */}
          <div className="pbe-card">
            <div className="pbe-card-top">
              <span className="pbe-card-tag">
                <span className="pbe-card-tag-dot" />
                DELIVERY ALIGNMENT
              </span>

              <TrendingUp className="pbe-card-icon" />
            </div>

            <h3 className="pbe-card-heading">
              Project-Aligned Delivery
            </h3>

            <p className="pbe-card-description">
              Align technical expertise with your project requirements,
              development objectives, and expected outcomes.
            </p>

            <div className="pbe-check-list">
              {deliveryChecks.map((item) => (
                <div
                  key={item}
                  className="pbe-check-item"
                >
                  <Check />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="pbe-card">
            <div className="pbe-card-top">
              <span className="pbe-card-tag">
                <span className="pbe-card-tag-dot" />
                STRUCTURED COLLABORATION
              </span>

              <Users className="pbe-card-icon" />
            </div>

            <h3 className="pbe-card-heading">
              Structured Project Collaboration
            </h3>

            <p className="pbe-card-description">
              Work alongside your existing teams across software development,
              integration, testing, and other technical activities.
            </p>

            <div className="pbe-roles-title">
              <span>CORE POD ROLES</span>
            </div>

            <div className="pbe-role-list">
              {podRoles.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="pbe-role"
                >
                  <Icon />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 3 */}
          <div className="pbe-dark-card">

            <div
              className="pbe-dark-decoration"
              aria-hidden="true"
            />

            <div className="pbe-dark-top">
              <span className="pbe-dark-tag">
                <Layers />
                FLEXIBLE CAPABILITY
              </span>

              <span className="pbe-active-dot" />
            </div>

            <h3 className="pbe-dark-heading">
              Flexible Engineering Support
            </h3>

            <p className="pbe-dark-description">
              Access additional technical capabilities based on your project
              requirements and changing business priorities.
            </p>

            <button className="pbe-dark-button">
              Talk to Our Experts
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* =====================================================
            DEEP DIVE
        ===================================================== */}

        <div className="pbe-deep-label">
          <span className="pbe-deep-label-dot" />
          CAPABILITY DEEP DIVE • PROJECT-BASED ENGINEERING
        </div>

        <h2 className="pbe-deep-heading">
          Project-Based Engineering for Evolving Technology Needs
        </h2>

        {/* =====================================================
            TWO COLUMN TEXT
        ===================================================== */}

        <div className="pbe-text-grid">
          <p>
            Technology requirements can change throughout the project
            lifecycle. Businesses may need additional expertise when
            developing new applications, improving existing systems,
            integrating platforms, testing software, or modernising legacy
            technology.
          </p>

          <p>
            TechTorch provides software engineering and resource support
            designed to complement existing teams and address specific
            technology requirements. Our approach starts with understanding
            business needs and objectives, then aligning the appropriate
            technical capabilities with the project.
          </p>
        </div>

        {/* =====================================================
            JOURNEY BOX
        ===================================================== */}

        <div className="pbe-journey">
          <h3 className="pbe-journey-title">
            SUPPORTING YOUR COMPLETE TECHNOLOGY JOURNEY
          </h3>

          <p className="pbe-journey-text">
            From custom software development and web and mobile applications
            to enterprise solutions, API development, system integration,
            quality assurance, software modernization, and ongoing
            maintenance, TechTorch supports businesses across different
            stages of their technology journey.
          </p>
        </div>

        {/* =====================================================
            PULL QUOTE
        ===================================================== */}

        <div className="pbe-quote">

          <span className="pbe-quote-mark">
            &rdquo;
          </span>

          <p className="pbe-quote-text">
            "The right expertise. Flexible support. Technology built around
            your business needs."
          </p>

          <div className="pbe-quote-author">
            <span className="pbe-quote-line" />

            <span>
              TechTorch Engineering Approach
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}