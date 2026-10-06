import React from "react";
import {
  LayoutGrid,
  Eye,
  ArrowLeftRight,
  ShieldCheck,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const pillars = [
  {
    icon: Eye,
    title: "Operational Visibility",
    body: "Real-time visibility across energy operations, telemetry data, and critical assets.",
  },
  {
    icon: ArrowLeftRight,
    title: "Process Synchronization",
    body: "Unified workflows linking ERP, finance, supply chain, and field workforce management.",
  },
  {
    icon: ShieldCheck,
    title: "Resilient Architecture",
    body: "Robust cloud infrastructure, cyber defense, and tailored enterprise software support.",
  },
];

export default function EnergyTechnologySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .energy-tech-section {
          width: 100%;
          background: #f7f5f2;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .energy-tech-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 40px;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 60px;
          align-items: center;
        }

        /* =========================
           LEFT CONTENT
        ========================= */

        .energy-tech-eyebrow {
          margin: 0 0 13px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .energy-tech-heading {
          margin: 0 0 27px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .energy-tech-copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .energy-tech-description {
          margin: 0;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* =========================
           RIGHT PANEL
        ========================= */

        .energy-tech-panel {
          width: 100%;
          background: #ffffff;
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .energy-tech-panel-header {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 28px;
        }

        .energy-tech-panel-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        .energy-tech-panel-title {
          margin: 0 0 4px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 700;
        }

        .energy-tech-panel-subtitle {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.5;
        }

        /* =========================
           PILLARS
        ========================= */

        .energy-tech-pillars {
          display: flex;
          flex-direction: column;
          gap: 23px;
        }

        .energy-tech-pillar {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .energy-tech-pillar-icon {
          flex-shrink: 0;
          margin-top: 3px;
          color: ${WINE};
        }

        .energy-tech-pillar-title {
          margin: 0 0 5px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
        }

        .energy-tech-pillar-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.65;
        }

        /* =========================
           LARGE TABLET
        ========================= */

        @media (max-width: 1100px) {
          .energy-tech-container {
            padding: 62px 30px;
            grid-template-columns: minmax(0, 1fr) minmax(300px, 0.85fr);
            gap: 42px;
          }

          .energy-tech-heading {
            font-size: 35px;
          }

          .energy-tech-description {
            font-size: 13.5px;
          }

          .energy-tech-panel {
            padding: 26px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 850px) {
          .energy-tech-container {
            padding: 55px 24px;
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .energy-tech-heading {
            font-size: 34px;
            max-width: 700px;
          }

          .energy-tech-copy {
            max-width: 850px;
          }

          .energy-tech-panel {
            max-width: 850px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .energy-tech-container {
            padding: 48px 20px;
            gap: 28px;
          }

          .energy-tech-eyebrow {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .energy-tech-heading {
            font-size: 28px;
            line-height: 1.25;
            margin-bottom: 21px;
          }

          .energy-tech-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .energy-tech-copy {
            gap: 14px;
          }

          .energy-tech-panel {
            padding: 22px 20px;
            border-radius: 15px;
          }

          .energy-tech-panel-header {
            margin-bottom: 23px;
          }

          .energy-tech-panel-icon {
            width: 39px;
            height: 39px;
            min-width: 39px;
          }

          .energy-tech-panel-title {
            font-size: 15px;
          }

          .energy-tech-pillars {
            gap: 21px;
          }

          .energy-tech-pillar-title {
            font-size: 13px;
          }

          .energy-tech-pillar-body {
            font-size: 11.5px;
            line-height: 1.65;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .energy-tech-container {
            padding: 42px 16px;
          }

          .energy-tech-heading {
            font-size: 25px;
          }

          .energy-tech-description {
            font-size: 12px;
          }

          .energy-tech-panel {
            padding: 20px 17px;
          }

          .energy-tech-panel-icon {
            width: 37px;
            height: 37px;
            min-width: 37px;
          }

          .energy-tech-panel-title {
            font-size: 14px;
          }

          .energy-tech-panel-subtitle {
            font-size: 10px;
          }

          .energy-tech-pillar {
            gap: 11px;
          }

          .energy-tech-pillar-title {
            font-size: 12.5px;
          }

          .energy-tech-pillar-body {
            font-size: 11px;
          }
        }

        /* =========================
           VERY SMALL DEVICES
        ========================= */

        @media (max-width: 340px) {
          .energy-tech-container {
            padding: 36px 14px;
          }

          .energy-tech-heading {
            font-size: 23px;
          }

          .energy-tech-description {
            font-size: 11.5px;
          }

          .energy-tech-panel {
            padding: 18px 15px;
          }

          .energy-tech-pillar-body {
            font-size: 10.5px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <section className="energy-tech-section">
        <div className="energy-tech-container">

          {/* LEFT CONTENT */}
          <div className="energy-tech-content">
            <p className="energy-tech-eyebrow">
              ENERGY TECHNOLOGY
            </p>

            <h2 className="energy-tech-heading">
              Connecting Technology With Business
              <br className="desktop-break" />
              Operations
            </h2>

            <div className="energy-tech-copy">
              <p className="energy-tech-description">
                Modern energy businesses work across multiple departments,
                applications and business processes. A connected technology
                environment can help organizations manage these areas more
                effectively and maintain better visibility across their
                business.
              </p>

              <p className="energy-tech-description">
                TechTorch Solutions brings together digital solutions
                including ERP, Operations Management, Supply Chain
                Management, People Resources, Web Portals, Financial
                Management, Payment Management, CRM, E-Commerce and Project
                Management. Its technology services include IT Consultancy,
                Artificial Intelligence, Cloud Infrastructure, Cyber Security,
                Software Engineering, Software Development &amp; Support, BPO
                and Resource &amp; Staffing.
              </p>

              <p className="energy-tech-description">
                The focus is on understanding the organization's requirements
                and providing technology that fits its existing environment.
                This can include developing software, connecting systems,
                improving business processes or supporting the technology
                infrastructure required for day-to-day operations.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="energy-tech-panel">

            <div className="energy-tech-panel-header">
              <span className="energy-tech-panel-icon">
                <LayoutGrid size={18} strokeWidth={1.8} />
              </span>

              <div>
                <h3 className="energy-tech-panel-title">
                  Core Focus Pillars
                </h3>

                <p className="energy-tech-panel-subtitle">
                  Technology Integration Principles
                </p>
              </div>
            </div>

            <div className="energy-tech-pillars">
              {pillars.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="energy-tech-pillar"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="energy-tech-pillar-icon"
                  />

                  <div>
                    <h4 className="energy-tech-pillar-title">
                      {title}
                    </h4>

                    <p className="energy-tech-pillar-body">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}