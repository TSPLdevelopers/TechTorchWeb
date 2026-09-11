import React from "react";

export default function StructuredMethodology() {
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
            An end-to-end framework turning disorganized raw inputs into strategic business momentum.
          </p>
        </div>

        {/* PHASE CARDS */}
        <div className="methodology-cards">
          {phases.map((phase) => (
            <div
              className={`methodology-card phase-${phase.number}`}
              key={phase.number}
            >
              <div className="phase-number">
                PHASE {phase.number}
              </div>

              <h3>{phase.title}</h3>

              <p>{phase.description}</p>
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
        * {
          box-sizing: border-box;
        }

        .structured-methodology {
          width: 100%;
          margin: 0;
          padding: 48px 0 50px;
          background: #6d0038;
          font-family: "Inter", sans-serif;
          color: #ffffff;
          overflow: hidden;
        }

        .methodology-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 38px;
        }

        /* TOP CONTENT */

        .methodology-top-content {
          width: 92%;
          margin: 0 auto;
          transform: translateX(-1.5%);
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
          white-space: nowrap;
        }

        /* CARDS */

        .methodology-cards {
          width: 96%;
          margin: 54px auto 0;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          align-items: start;
        }

        .methodology-card {
          width: 92%;
          justify-self: center;
          min-width: 0;
          min-height: 235px;
          padding: 21px 20px 16px;
          display: flex;
          flex-direction: column;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.12),
              rgba(255, 255, 255, 0.07)
            );
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          box-shadow:
            0 7px 18px rgba(30, 0, 20, 0.10);
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
        }

        /* HOVER */

        .methodology-card:hover {
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.20),
              rgba(255, 255, 255, 0.15)
            );
          border-color: #970052;
          box-shadow:
            0 10px 25px rgba(30, 0, 20, 0.16);
          transform: translateY(-3px);
        }

        /* HOVER CONTENT */

        .methodology-card:hover .phase-number {
          color: #ffffff;
        }

        .methodology-card:hover h3 {
          color: #ffffff;
        }

        .methodology-card:hover p {
          color: rgba(255, 255, 255, 0.92);
        }

        /* 2ND & 4TH CARD HEIGHT */

        .methodology-card.phase-02,
        .methodology-card.phase-04 {
          min-height: 255px;
        }

        /* PHASE */

        .phase-number {
          color: #f0a2bd;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          margin-bottom: 17px;
          transition: color 0.2s ease;
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
          transition: color 0.2s ease;
        }

        /* TEXT */

        .methodology-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.73);
          font-size: 12px;
          font-family: "Inter", sans-serif;
          line-height: 1.65;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        /* BOTTOM MESSAGE */

        .methodology-bottom {
          width: 58%;
          min-height: 70px;
          margin: 46px auto 0;
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
          .methodology-container {
            max-width: 1600px;
            padding: 0 45px;
          }

          .methodology-top-content {
            width: 92%;
          }

          .methodology-heading {
            font-size: 42px;
          }

          .methodology-cards {
            width: 96%;
            gap: 18px;
          }

          .methodology-card {
            width: 92%;
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
            font-size: 11px;
          }
        }

        /* TABLET */

        @media (max-width: 1100px) {
          .structured-methodology {
            padding: 45px 0 48px;
          }

          .methodology-container {
            padding: 0 25px;
          }

          .methodology-top-content {
            width: 92%;
          }

          .methodology-heading {
            font-size: 34px;
          }

          .methodology-description {
            font-size: 12px;
          }

          .methodology-cards {
            width: 100%;
            gap: 11px;
          }

          .methodology-card {
            width: 92%;
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
            font-size: 9.5px;
          }

          .methodology-bottom {
            width: 70%;
          }
        }

        /* TABLET */

        @media (max-width: 850px) {
          .methodology-top-content {
            width: 92%;
          }

          .methodology-heading {
            font-size: 31px;
          }

          .methodology-description {
            white-space: normal;
          }

          .methodology-cards {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .methodology-card {
            width: 92%;
            min-height: 220px;
          }

          .methodology-card.phase-02,
          .methodology-card.phase-04 {
            min-height: 220px;
          }

          .methodology-card:last-child {
            grid-column: span 2;
            width: 46%;
            justify-self: center;
          }

          .methodology-bottom {
            width: 80%;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .structured-methodology {
            padding: 38px 0 42px;
          }

          .methodology-container {
            padding: 0 17px;
          }

          .methodology-top-content {
            width: 92%;
            transform: none;
          }

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
            width: 100%;
            font-size: 11px;
            line-height: 1.6;
            white-space: normal;
          }

          .desktop-break {
            display: none;
          }

          .methodology-cards {
            width: 100%;
            margin-top: 34px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .methodology-card {
            width: 92%;
            min-height: 0;
            padding: 19px 18px 16px;
          }

          .methodology-card.phase-02,
          .methodology-card.phase-04 {
            min-height: 0;
          }

          .methodology-card:last-child {
            width: 92%;
          }

          .phase-number {
            margin-bottom: 14px;
          }

          .methodology-card h3 {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .methodology-card p {
            font-size: 10px;
            line-height: 1.6;
          }

          .methodology-bottom {
            width: 100%;
            min-height: 0;
            margin-top: 32px;
            padding: 16px 18px;
            font-size: 10px;
            line-height: 1.55;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 380px) {
          .methodology-container {
            padding: 0 14px;
          }

          .methodology-top-content {
            width: 92%;
            transform: none;
          }

          .methodology-heading {
            font-size: 24px;
          }

          .methodology-description {
            font-size: 10px;
          }

          .methodology-card {
            width: 92%;
            padding: 17px 16px 15px;
          }

          .methodology-card h3 {
            font-size: 15px;
          }

          .methodology-card p {
            font-size: 9.5px;
          }
        }
      `}</style>
    </section>
  );
}