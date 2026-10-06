import React from "react";
import {
  Building2,
  Share2,
  Network,
  BadgeCheck,
  ArrowDown,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function BusinessToTechnologySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           BUSINESS TO TECHNOLOGY SECTION
        ================================================= */

        .business-tech-section,
        .business-tech-section * {
          box-sizing: border-box;
        }

        .business-tech-section {
          width: 100%;
          background: #f4f1ec;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =================================================
           MAIN CONTAINER
           Same Hero spacing system
        ================================================= */

        .business-tech-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 78px 100px;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }

        /* =================================================
           LEFT CONTENT
        ================================================= */

        .business-tech-eyebrow {
          margin: 0 0 12px;

          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .business-tech-heading {
          margin: 0 0 22px;
          max-width: 680px;

          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.9px;
        }

        .business-tech-description-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 26px;
          max-width: 700px;
        }

        .business-tech-description {
          margin: 0;

          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 14.5px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =================================================
           CAPABILITY BOX
        ================================================= */

        .business-tech-capability {
          width: 100%;
          max-width: 700px;

          display: flex;
          align-items: flex-start;
          gap: 12px;

          padding: 19px 20px;

          background: #ffffff;
          border-radius: 13px;

          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        .business-tech-capability-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;

          color: ${WINE};
        }

        .business-tech-capability-text {
          margin: 0;

          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 500;
        }

        /* =================================================
           RIGHT DIAGRAM
        ================================================= */

        .business-tech-diagram {
          width: 100%;

          padding: 36px 30px;

          background: #ffffff;
          border-radius: 20px;

          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        }

        .business-tech-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .business-tech-flow-card {
          width: 100%;
          max-width: 360px;

          padding: 20px;

          text-align: center;
          border-radius: 13px;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .business-tech-flow-card:hover {
          transform: translateY(-3px);
        }

        .business-tech-light-card {
          background: #f6f6f8;
          border: 1px solid #e8e7ea;
        }

        .business-tech-main-card {
          background: ${WINE};
          border: 1px solid ${WINE};
          box-shadow: 0 8px 22px rgba(122, 31, 61, 0.25);
        }

        /* =================================================
           FLOW ICON
        ================================================= */

        .business-tech-flow-icon {
          width: 38px;
          height: 38px;

          margin: 0 auto 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;
        }

        .business-tech-light-icon {
          background: #fbeef1;
          color: ${WINE};
        }

        .business-tech-main-icon {
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        /* =================================================
           FLOW LABEL
        ================================================= */

        .business-tech-flow-label {
          margin: 0 0 5px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9.5px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .business-tech-light-label {
          color: #a29b8f;
        }

        .business-tech-main-label {
          color: #f0d0dc;
        }

        /* =================================================
           FLOW TITLE
        ================================================= */

        .business-tech-flow-title {
          margin: 0;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
        }

        .business-tech-light-title {
          color: ${INK};
        }

        .business-tech-main-title {
          color: #ffffff;
        }

        /* =================================================
           ARROW
        ================================================= */

        .business-tech-arrow {
          margin: 8px 0;
          color: ${WINE};
          flex-shrink: 0;
        }

        /* =================================================
           LARGE TABLET / SMALL LAPTOP
        ================================================= */

        @media (max-width: 1200px) {
          .business-tech-container {
            padding-left: 40px;
            padding-right: 40px;
            gap: 48px;
          }

          .business-tech-heading {
            font-size: 36px;
          }

          .business-tech-description {
            font-size: 14px;
          }

          .business-tech-diagram {
            padding: 32px 24px;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {
          .business-tech-container {
            grid-template-columns: 1fr;
            gap: 48px;

            padding-top: 68px;
            padding-bottom: 68px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .business-tech-heading {
            max-width: 760px;
            font-size: 34px;
          }

          .business-tech-description-wrapper {
            max-width: 820px;
          }

          .business-tech-capability {
            max-width: 820px;
          }

          .business-tech-diagram {
            max-width: 700px;
            margin: 0 auto;
          }

          .business-tech-flow-card {
            max-width: 420px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 700px) {
          .business-tech-container {
            padding-top: 56px;
            padding-bottom: 56px;

            padding-left: 24px;
            padding-right: 24px;

            gap: 36px;
          }

          .business-tech-eyebrow {
            margin-bottom: 10px;
            font-size: 10px;
            letter-spacing: 0.8px;
          }

          .business-tech-heading {
            margin-bottom: 18px;
            font-size: 30px;
            line-height: 1.24;
            letter-spacing: -0.6px;
          }

          .business-tech-description-wrapper {
            gap: 14px;
            margin-bottom: 22px;
          }

          .business-tech-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .business-tech-capability {
            padding: 17px;
            gap: 10px;
            border-radius: 11px;
          }

          .business-tech-capability-text {
            font-size: 12px;
            line-height: 1.6;
          }

          .business-tech-diagram {
            padding: 28px 18px;
            border-radius: 17px;
          }

          .business-tech-flow-card {
            max-width: 100%;
            padding: 18px 15px;
            border-radius: 12px;
          }

          .business-tech-flow-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 10px;
          }

          .business-tech-flow-title {
            font-size: 14px;
          }

          .business-tech-flow-label {
            font-size: 9px;
          }

          .business-tech-arrow {
            margin: 6px 0;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .business-tech-container {
            padding-top: 48px;
            padding-bottom: 48px;

            padding-left: 16px;
            padding-right: 16px;

            gap: 30px;
          }

          .business-tech-heading {
            font-size: 27px;
            line-height: 1.25;
            letter-spacing: -0.5px;
          }

          .business-tech-description-wrapper {
            gap: 12px;
            margin-bottom: 20px;
          }

          .business-tech-description {
            font-size: 12.5px;
            line-height: 1.7;
          }

          .business-tech-capability {
            padding: 15px;
          }

          .business-tech-capability-text {
            font-size: 11.5px;
          }

          .business-tech-diagram {
            padding: 24px 14px;
            border-radius: 15px;
          }

          .business-tech-flow-card {
            padding: 17px 12px;
          }

          .business-tech-flow-title {
            font-size: 13.5px;
          }

          .business-tech-flow-label {
            font-size: 8.5px;
          }
        }

        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 340px) {
          .business-tech-container {
            padding-top: 40px;
            padding-bottom: 40px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .business-tech-heading {
            font-size: 24px;
          }

          .business-tech-description {
            font-size: 11.5px;
          }

          .business-tech-capability-text {
            font-size: 11px;
          }

          .business-tech-flow-title {
            font-size: 12.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .business-tech-flow-card {
            transition: none;
          }

          .business-tech-flow-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="business-tech-section">
        <div className="business-tech-container">

          {/* =================================================
              LEFT: CONTENT
          ================================================= */}

          <div>
            <p className="business-tech-eyebrow">
              Technology That Works For Your Business
            </p>

            <h2 className="business-tech-heading">
              Turning Business Requirements Into Practical Technology
            </h2>

            <div className="business-tech-description-wrapper">
              <p className="business-tech-description">
                Every business has different technology requirements. Whether
                you are developing a new application, improving an existing
                system, connecting multiple platforms or strengthening your IT
                environment, the right technology starts with understanding
                the business behind it.
              </p>

              <p className="business-tech-description">
                At TechTorch, we focus on understanding your requirements,
                existing technology environment and business objectives
                before shaping a solution around them.
              </p>
            </div>

            <div className="business-tech-capability">
              <BadgeCheck
                className="business-tech-capability-icon"
                size={19}
                strokeWidth={2}
              />

              <p className="business-tech-capability-text">
                Our capabilities cover IT consultancy, software engineering,
                cloud infrastructure, cybersecurity, AI, software development
                and support, BPO, and technology resources.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT: FLOW DIAGRAM
          ================================================= */}

          <div className="business-tech-diagram">
            <div className="business-tech-flow">

              {/* BUSINESS */}
              <div className="business-tech-flow-card business-tech-light-card">
                <span className="business-tech-flow-icon business-tech-light-icon">
                  <Building2 size={17} strokeWidth={1.8} />
                </span>

                <p className="business-tech-flow-label business-tech-light-label">
                  PRIMARY DRIVER
                </p>

                <p className="business-tech-flow-title business-tech-light-title">
                  Business
                </p>
              </div>

              <ArrowDown
                className="business-tech-arrow"
                size={17}
                strokeWidth={1.8}
              />

              {/* TECHNOLOGY */}
              <div className="business-tech-flow-card business-tech-main-card">
                <span className="business-tech-flow-icon business-tech-main-icon">
                  <Share2 size={17} strokeWidth={1.8} />
                </span>

                <p className="business-tech-flow-label business-tech-main-label">
                  ARCHITECTURAL CORE
                </p>

                <p className="business-tech-flow-title business-tech-main-title">
                  Technology
                </p>
              </div>

              <ArrowDown
                className="business-tech-arrow"
                size={17}
                strokeWidth={1.8}
              />

              {/* CONNECTED SYSTEMS */}
              <div className="business-tech-flow-card business-tech-light-card">
                <span className="business-tech-flow-icon business-tech-light-icon">
                  <Network size={17} strokeWidth={1.8} />
                </span>

                <p className="business-tech-flow-label business-tech-light-label">
                  TARGET REALIZATION
                </p>

                <p className="business-tech-flow-title business-tech-light-title">
                  Connected Systems
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}