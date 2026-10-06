import React from "react";
import { Users, Settings, Database, Code2 } from "lucide-react";

const PILLARS = [
  {
    pillar: "PILLAR 01",
    icon: Users,
    title: "People",
    description:
      "Empowered teams, human-centered UI/UX, transparent collaboration tools, and organizational synergy across all departments.",
    footnote: "Intuitive team adoption & enablement",
  },
  {
    pillar: "PILLAR 02",
    icon: Settings,
    title: "Processes",
    description:
      "Streamlined operational workflows, automated handoffs, zero bottlenecks, and governed approvals with real-time auditability.",
    footnote: "Agile & standardized execution",
  },
  {
    pillar: "PILLAR 03",
    icon: Database,
    title: "Data",
    description:
      "Unified master data management, verified single source of truth, real-time context streaming, and predictive intelligence models.",
    footnote: "Synchronized real-time telemetry",
  },
  {
    pillar: "PILLAR 04",
    icon: Code2,
    title: "Technology",
    description:
      "Resilient platforms, API-first architecture, robust cyber security defense, and modular core engines built for continuous growth.",
    footnote: "Cloud-native & API-first foundation",
  },
];

export default function ConnectedBusinessPillarsSection() {
  return (
    <>
      <section className="connected-pillars">
        <div className="connected-pillars-container">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="connected-pillars-header">

            {/* Label */}

            <div className="connected-pillars-label-wrap">
              <span className="connected-pillars-label">
                <span className="connected-pillars-label-dot" />
                One Connected Business
              </span>
            </div>

            {/* Main Heading */}

            <h2 className="connected-pillars-title">
              Bringing People, Processes, Data and Technology Together
            </h2>

            {/* Sub Heading */}

            <p className="connected-pillars-subtitle">
              Businesses don't succeed through fragmented silos. Our solutions
              connect the essential pillars of your enterprise to create an
              integrated ecosystem of continuous visibility and execution.
            </p>
          </div>

          {/* =====================================================
              PILLAR CARDS
          ====================================================== */}

          <div className="connected-pillars-grid">
            {PILLARS.map(
              ({
                pillar,
                icon: Icon,
                title,
                description,
                footnote,
              }) => (
                <div
                  key={pillar}
                  className="connected-pillar-card"
                >
                  {/* =================================================
                      ICON + PILLAR
                  ================================================== */}

                  <div className="connected-pillar-top">

                    {/* Icon */}

                    <div className="connected-pillar-icon">
                      <Icon
                        size={16}
                        strokeWidth={2}
                      />
                    </div>

                    {/* Pillar Label */}

                    <span className="connected-pillar-number">
                      {pillar}
                    </span>
                  </div>

                  {/* =================================================
                      TITLE
                  ================================================== */}

                  <h3 className="connected-pillar-title">
                    {title}
                  </h3>

                  {/* =================================================
                      DESCRIPTION
                  ================================================== */}

                  <p className="connected-pillar-description">
                    {description}
                  </p>

                  {/* =================================================
                      FOOTNOTE
                  ================================================== */}

                  <div className="connected-pillar-footnote">
                    <span className="connected-pillar-footnote-dot" />

                    <span>{footnote}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* =====================================================
           BASE
        ====================================================== */

        .connected-pillars {
          width: 100%;
          overflow: hidden;

          background:
            linear-gradient(
              160deg,
              #6e1345 0%,
              #3a0e20 100%
            );
        }

        .connected-pillars,
        .connected-pillars * {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN CONTAINER

           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ====================================================== */

        .connected-pillars-container {
          width: 100%;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           HEADER
        ====================================================== */

        .connected-pillars-header {
          width: 100%;
          max-width: 850px;

          margin: 0 auto 52px auto;

          text-align: center;
        }

        /* =====================================================
           LABEL
        ====================================================== */

        .connected-pillars-label-wrap {
          display: flex;
          justify-content: center;

          margin-bottom: 20px;
        }

        .connected-pillars-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 7px 14px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.1);

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.4;

          text-transform: uppercase;
          letter-spacing: 0.12em;

          color: rgba(255, 255, 255, 0.8);
        }

        .connected-pillars-label-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #34d399;
        }

        /* =====================================================
           MAIN TITLE
        ====================================================== */

        .connected-pillars-title {
          margin: 0 0 14px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;

          color: #ffffff;
        }

        /* =====================================================
           SUBTITLE
        ====================================================== */

        .connected-pillars-subtitle {
          width: 100%;
          max-width: 720px;

          margin: 0 auto;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;

          color: rgba(255, 255, 255, 0.6);
        }

        /* =====================================================
           GRID
        ====================================================== */

        .connected-pillars-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        /* =====================================================
           CARD
        ====================================================== */

        .connected-pillar-card {
          width: 100%;
          min-width: 0;

          display: flex;
          flex-direction: column;

          min-height: 330px;

          padding: 22px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;

          background: rgba(255, 255, 255, 0.06);

          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .connected-pillar-card:hover {
          transform: translateY(-5px);

          background: rgba(255, 255, 255, 0.09);

          border-color: rgba(255, 255, 255, 0.16);

          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.14);
        }

        /* =====================================================
           CARD TOP
        ====================================================== */

        .connected-pillar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;

          margin-bottom: 24px;
        }

        /* =====================================================
           ICON
        ====================================================== */

        .connected-pillar-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: rgba(255, 255, 255, 0.1);

          color: rgba(255, 255, 255, 0.82);
        }

        /* =====================================================
           PILLAR NUMBER
        ====================================================== */

        .connected-pillar-number {
          padding: 5px 8px;

          border-radius: 4px;

          background: rgba(255, 255, 255, 0.1);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;

          letter-spacing: 0.06em;

          color: rgba(255, 255, 255, 0.5);
        }

        /* =====================================================
           CARD TITLE
        ====================================================== */

        .connected-pillar-title {
          margin: 0 0 10px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;

          color: #ffffff;
        }

        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .connected-pillar-description {
          flex: 1;

          margin: 0 0 20px 0;

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.7;

          color: rgba(255, 255, 255, 0.56);
        }

        /* =====================================================
           FOOTNOTE
        ====================================================== */

        .connected-pillar-footnote {
          display: flex;
          align-items: flex-start;
          gap: 8px;

          padding-top: 14px;

          border-top: 1px solid rgba(255, 255, 255, 0.1);

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          line-height: 1.5;

          color: rgba(255, 255, 255, 0.5);
        }

        .connected-pillar-footnote-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          margin-top: 5px;

          border-radius: 50%;

          background: #34d399;
        }

        /* =====================================================
           LARGE TABLET
           Horizontal spacing: 40px
        ====================================================== */

        @media (max-width: 1200px) {
          .connected-pillars-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .connected-pillars-header {
            margin-bottom: 44px;
          }

          .connected-pillars-title {
            font-size: 30px;
          }

          .connected-pillars-subtitle {
            font-size: 13.5px;
          }

          .connected-pillars-grid {
            gap: 16px;
          }

          .connected-pillar-card {
            min-height: 320px;
            padding: 20px;
          }

          .connected-pillar-title {
            font-size: 16px;
          }

          .connected-pillar-description {
            font-size: 12px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .connected-pillars-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .connected-pillars-header {
            max-width: 720px;
            margin-bottom: 36px;
          }

          .connected-pillars-label-wrap {
            margin-bottom: 17px;
          }

          .connected-pillars-title {
            font-size: 27px;
          }

          .connected-pillars-subtitle {
            font-size: 13px;
          }

          .connected-pillars-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }

          .connected-pillar-card {
            min-height: 310px;
            padding: 20px;
          }

          .connected-pillar-top {
            margin-bottom: 21px;
          }

          .connected-pillar-icon {
            width: 36px;
            height: 36px;
          }

          .connected-pillar-title {
            font-size: 16px;
          }

          .connected-pillar-description {
            font-size: 12px;
          }
        }

        /* =====================================================
           MOBILE
           Horizontal spacing: 24px
        ====================================================== */

        @media (max-width: 700px) {
          .connected-pillars-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .connected-pillars-header {
            margin-bottom: 30px;
          }

          .connected-pillars-label-wrap {
            margin-bottom: 15px;
          }

          .connected-pillars-label {
            padding: 6px 11px;
            font-size: 8.5px;
          }

          .connected-pillars-label-dot {
            width: 5px;
            height: 5px;
          }

          .connected-pillars-title {
            margin-bottom: 11px;

            font-size: 25px;
            line-height: 1.22;
          }

          .connected-pillars-subtitle {
            font-size: 11.5px;
            line-height: 1.7;
          }

          .connected-pillars-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .connected-pillar-card {
            min-height: auto;
            padding: 18px;

            border-radius: 12px;
          }

          .connected-pillar-top {
            margin-bottom: 19px;
          }

          .connected-pillar-icon {
            width: 35px;
            height: 35px;
          }

          .connected-pillar-icon svg {
            width: 15px;
            height: 15px;
          }

          .connected-pillar-number {
            font-size: 8px;
          }

          .connected-pillar-title {
            margin-bottom: 9px;
            font-size: 15px;
          }

          .connected-pillar-description {
            margin-bottom: 18px;

            font-size: 11.5px;
            line-height: 1.7;
          }

          .connected-pillar-footnote {
            padding-top: 12px;
            font-size: 9.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           Horizontal spacing: 16px
        ====================================================== */

        @media (max-width: 480px) {
          .connected-pillars-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .connected-pillars-header {
            margin-bottom: 26px;
          }

          .connected-pillars-label {
            padding: 5px 10px;
            font-size: 8px;
          }

          .connected-pillars-title {
            font-size: 23px;
          }

          .connected-pillars-subtitle {
            font-size: 11px;
          }

          .connected-pillars-grid {
            gap: 12px;
          }

          .connected-pillar-card {
            padding: 17px;
          }

          .connected-pillar-top {
            margin-bottom: 17px;
          }

          .connected-pillar-icon {
            width: 33px;
            height: 33px;
          }

          .connected-pillar-title {
            font-size: 14px;
          }

          .connected-pillar-description {
            font-size: 11px;
          }

          .connected-pillar-footnote {
            font-size: 9px;
          }
        }
      `}</style>
    </>
  );
}