import React from "react";

const phases = [
  {
    number: "01",
    title: "CONNECT",
    description:
      "Bring relevant information together across business functions, legacy tools, and third-party systems.",
  },
  {
    number: "02",
    title: "ORGANIZE",
    description:
      "Create structured, clean, and accessible single-source datasets that teams can reliably depend upon.",
  },
  {
    number: "03",
    title: "ANALYZE",
    description:
      "Deploy analytics, reporting, and key performance indicators to identify meaningful underlying patterns.",
  },
  {
    number: "04",
    title: "UNDERSTAND",
    description:
      "Put information into business context so decision-makers understand what numbers actually mean in practice.",
  },
  {
    number: "05",
    title: "ACT",
    description:
      "Turn analytical insights into decisions that improve operational efficiency, agility, and business outcomes.",
  },
];

export default function StructuredMethodology() {
  return (
    <section className="structured-methodology">
      <div className="methodology-container">
        {/* TOP CONTENT */}
        <div className="methodology-top-content">
          <div className="methodology-badge">
            <span className="methodology-dot"></span>
            STRUCTURED METHODOLOGY
          </div>

          <h2 className="methodology-heading">
            A Clearer Path From Information to Action
          </h2>

          <p className="methodology-description">
            An end-to-end framework turning disorganized raw inputs into
            strategic business momentum.
          </p>
        </div>

        {/* PHASE CARDS */}
        <div className="methodology-cards">
          {phases.map((phase) => (
            <div
              className={`methodology-card phase-${phase.number}`}
              key={phase.number}
            >
              <div className="phase-number">PHASE {phase.number}</div>

              <h3>{phase.title}</h3>

              <p>{phase.description}</p>

              <div className="methodology-card-line"></div>
            </div>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="methodology-bottom">
          TechTorch's ERP solutions follow this broader direction through
          centralized data, integrated
          <br className="desktop-break" />
          reporting and analytics, automation, scalability and data-led
          decision-making.
        </div>
      </div>

      <style>{`
        /* ================= SECTION (padding same as other sections) ================= */

        .structured-methodology {
          width: 100%;
          margin: 0;
          padding: 40px 16px;
          background: #6d0038;
          font-family: "Inter", sans-serif;
          color: #ffffff;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .structured-methodology {
            padding: 48px 24px;
          }
        }

        @media (min-width: 768px) {
          .structured-methodology {
            padding: 56px 40px;
          }
        }

        @media (min-width: 1024px) {
          .structured-methodology {
            padding: 64px 100px;
          }
        }

        @media (min-width: 1280px) {
          .structured-methodology {
            padding: 80px 100px;
          }
        }

        .methodology-container {
          width: 100%;
        }

        /* TOP CONTENT */

        .methodology-top-content {
          width: 100%;
        }

        /* BADGE */

        .methodology-badge {
          width: fit-content;
          height: 27px;
          padding: 0 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.10);
          color: rgba(255, 255, 255, 0.75);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.7px;
          margin-bottom: 19px;
        }

        .methodology-dot {
          width: 6px;
          height: 6px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #f0a2bd;
        }

        /* HEADING */

        .methodology-heading {
          margin: 0;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 35px;
          line-height: 1.08;
          letter-spacing: -1.2px;
          font-weight: 700;
        }

        /* DESCRIPTION */

        .methodology-description {
          margin: 15px 0 0;
          width: 100%;
          color: rgba(255, 255, 255, 0.68);
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* CARDS */

        .methodology-cards {
          width: 100%;
          margin: 54px 0 0;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }

        .methodology-card {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-width: 0;
          min-height: 235px;
          padding: 21px 20px 16px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.08) 45%,
            rgba(255, 255, 255, 0.05) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          box-shadow: 0 7px 18px rgba(30, 0, 20, 0.10);
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.35s ease;
        }

        /* SUBTLE GLASS GLOW - UPPER RIGHT */

        .methodology-card::before {
          content: "";
          position: absolute;
          top: -45px;
          right: -45px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.10);
          filter: blur(28px);
          pointer-events: none;
          z-index: 0;
        }

        /* KEEP CONTENT ABOVE GLASS EFFECT */

        .methodology-card .phase-number,
        .methodology-card h3,
        .methodology-card p,
        .methodology-card-line {
          position: relative;
          z-index: 1;
        }

        /* HOVER CARD */

        .methodology-card:hover {
          background: #eee9ec;
          border-color: #970052;
          box-shadow: 0 16px 32px rgba(30, 0, 20, 0.24);
          transform: translateY(-8px);
        }

        /* PHASE NUMBER */

        .phase-number {
          color: #f0a2bd;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 17px;
          transition: color 0.35s ease;
        }

        /* TITLE */

        .methodology-card h3 {
          margin: 0 0 11px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.2px;
          transition: color 0.35s ease;
        }

        /* TEXT */

        .methodology-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.73);
          font-size: 12px;
          font-family: "Inter", sans-serif;
          line-height: 1.65;
          font-weight: 500;
          transition: color 0.35s ease;
        }

        /* BEETROOT LINE */

        .methodology-card-line {
          width: 18px;
          height: 2px;
          margin-top: 18px;
          border-radius: 999px;
          background: #970052;
          opacity: 0.35;
          transition:
            width 0.5s ease,
            opacity 0.5s ease,
            transform 0.5s ease;
        }

        /* HOVER CONTENT */

        .methodology-card:hover .phase-number {
          color: #970052;
        }

        .methodology-card:hover h3 {
          color: #970052;
        }

        .methodology-card:hover p {
          color: #475569;
        }

        .methodology-card:hover .methodology-card-line {
          width: 48px;
          opacity: 1;
          transform: translateX(2px);
        }

        /* 2ND & 4TH CARD HEIGHT */

        .methodology-card.phase-02,
        .methodology-card.phase-04 {
          min-height: 255px;
        }

        /* BOTTOM MESSAGE */

        .methodology-bottom {
          width: 100%;
          min-height: 70px;
          margin: 46px 0 0;
          padding: 17px 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          background: rgba(30, 0, 18, 0.22);
          color: rgba(255, 255, 255, 0.78);
          font-size: 12.5px;
          line-height: 1.6;
          font-weight: 500;
        }

        /* LARGE DESKTOP */

        @media (min-width: 1600px) {
          .methodology-heading {
            font-size: 42px;
          }

          .methodology-cards {
            gap: 18px;
          }

          .methodology-card {
            min-height: 250px;
            padding: 23px 22px 17px;
          }

          .methodology-card.phase-02,
          .methodology-card.phase-04 {
            min-height: 270px;
          }

          .methodology-card h3 {
            font-size: 18px;
          }

          .methodology-card p {
            font-size: 12.5px;
          }
        }

        /* TABLET / SMALL DESKTOP */

        @media (max-width: 1100px) {
          .methodology-heading {
            font-size: 34px;
          }

          .methodology-description {
            font-size: 12px;
          }

          .methodology-cards {
            gap: 11px;
          }

          .methodology-card {
            padding: 19px 15px 15px;
            min-height: 240px;
          }

          .methodology-card.phase-02,
          .methodology-card.phase-04 {
            min-height: 255px;
          }

          .methodology-card h3 {
            font-size: 15px;
          }

          .methodology-card p {
            font-size: 11.5px;
          }
        }

        /* TABLET */

        @media (max-width: 850px) {
          .methodology-heading {
            font-size: 31px;
          }

          .methodology-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .methodology-card {
            min-height: 220px;
          }

          .methodology-card.phase-02,
          .methodology-card.phase-04 {
            min-height: 220px;
          }

          .methodology-card:last-child {
            grid-column: span 2;
            width: calc(50% - 7px);
            justify-self: center;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .methodology-badge {
            height: 25px;
            font-size: 8px;
            padding: 0 11px;
          }

          .methodology-heading {
            font-size: 27px;
            line-height: 1.12;
            letter-spacing: -0.8px;
          }

          .methodology-description {
            font-size: 11px;
            line-height: 1.6;
          }

          .desktop-break {
            display: none;
          }

          .methodology-cards {
            margin-top: 34px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .methodology-card {
            min-height: 0;
            padding: 19px 18px 16px;
          }

          .methodology-card.phase-02,
          .methodology-card.phase-04 {
            min-height: 0;
          }

          .methodology-card:last-child {
            width: 100%;
          }

          .phase-number {
            margin-bottom: 14px;
          }

          .methodology-card h3 {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .methodology-card p {
            font-size: 11.5px;
            line-height: 1.6;
          }

          .methodology-card-line {
            margin-top: 15px;
          }

          .methodology-bottom {
            min-height: 0;
            margin-top: 32px;
            padding: 16px 18px;
            font-size: 11px;
            line-height: 1.55;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {
          .methodology-heading {
            font-size: 24px;
          }

          .methodology-description {
            font-size: 10.5px;
          }

          .methodology-card {
            padding: 17px 16px 15px;
          }

          .methodology-card h3 {
            font-size: 15px;
          }

          .methodology-card p {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
}