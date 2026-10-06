import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Custom Software Development",
    body: "Purpose-built applications designed around specific business requirements.",
  },
  {
    num: "02",
    title: "Web & Mobile Applications",
    body: "Responsive digital applications focused on usability, functionality and performance.",
  },
  {
    num: "03",
    title: "Enterprise Software",
    body: "Business systems such as ERP, CRM and HR management solutions.",
  },
  {
    num: "04",
    title: "API & System Integration",
    body: "Connect applications and platforms to support reliable data exchange.",
  },
  {
    num: "05",
    title: "Software Modernization",
    body: "Improve existing applications through modern architectures and technologies.",
  },
  {
    num: "06",
    title: "Quality Assurance & Testing",
    body: "Functional, performance, security and usability testing before deployment.",
  },
  {
    num: "07",
    title: "Maintenance & Support",
    body: "Ongoing updates, improvements and technical assistance after deployment.",
  },
];

export default function SoftwareEngineeringTimelineSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .software-timeline-section {
          width: 100%;
          background: #f4f1ec;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .software-timeline-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 72px 100px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 70px;
          align-items: start;
        }

        /* ================= LEFT CONTENT ================= */

        .software-timeline-eyebrow {
          margin: 0 0 13px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.4;
        }

        .software-timeline-heading {
          margin: 0 0 20px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: -0.9px;
        }

        .software-timeline-description {
          max-width: 570px;
          margin: 0 0 25px;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* ================= CAPABILITY BADGE ================= */

        .software-capability-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border: 1px solid #f0d6de;
          border-radius: 999px;
          background: #ffffff;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1.4;
        }

        .software-capability-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        /* ================= TIMELINE ================= */

        .software-timeline-list {
          position: relative;
          padding-left: 27px;
          border-left: 2px solid ${WINE};
        }

        .software-timeline-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ================= TIMELINE CARD ================= */

        .software-timeline-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 17px 18px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 2px 7px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .software-timeline-card:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
        }

        /* ================= NUMBER ================= */

        .software-timeline-number {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: -32px;
          border-radius: 50%;
          background: ${WINE};
          color: #ffffff;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
        }

        /* ================= CARD CONTENT ================= */

        .software-timeline-card-content {
          min-width: 0;
        }

        .software-timeline-card-title {
          margin: 0 0 5px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .software-timeline-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* ================= TABLET / MEDIUM ================= */

        @media (max-width: 1199px) {
          .software-timeline-container {
            padding-left: 40px;
            padding-right: 40px;
            gap: 50px;
          }

          .software-timeline-heading {
            font-size: 33px;
          }

          .software-timeline-description {
            font-size: 13.5px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 850px) {
          .software-timeline-container {
            grid-template-columns: 1fr;
            gap: 40px;
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .software-timeline-description {
            max-width: 750px;
          }

          .software-timeline-list {
            width: 100%;
            max-width: 800px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 767px) {
          .software-timeline-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 32px;
          }

          .software-timeline-eyebrow {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .software-timeline-heading {
            font-size: 27px;
            line-height: 1.27;
            letter-spacing: -0.6px;
            margin-bottom: 16px;
          }

          .software-timeline-description {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 22px;
          }

          .software-timeline-list {
            padding-left: 23px;
          }

          .software-timeline-items {
            gap: 12px;
          }

          .software-timeline-card {
            gap: 12px;
            padding: 16px;
            border-radius: 11px;
          }

          .software-timeline-number {
            width: 27px;
            height: 27px;
            margin-left: -30px;
            font-size: 9px;
          }

          .software-timeline-card-title {
            font-size: 13.5px;
          }

          .software-timeline-card-body {
            font-size: 11.5px;
            line-height: 1.6;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .software-timeline-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .software-timeline-heading {
            font-size: 24px;
            line-height: 1.28;
          }

          .software-timeline-description {
            font-size: 12.5px;
          }

          .software-capability-badge {
            font-size: 9px;
            padding: 6px 10px;
          }

          .software-timeline-list {
            padding-left: 20px;
          }

          .software-timeline-card {
            padding: 14px;
          }

          .software-timeline-number {
            width: 25px;
            height: 25px;
            margin-left: -28px;
          }

          .software-timeline-card-title {
            font-size: 13px;
          }

          .software-timeline-card-body {
            font-size: 11px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .software-timeline-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 35px;
            padding-bottom: 35px;
          }

          .software-timeline-heading {
            font-size: 22px;
          }

          .software-timeline-description {
            font-size: 12px;
          }

          .software-timeline-card {
            padding: 13px;
          }

          .software-timeline-card-title {
            font-size: 12.5px;
          }

          .software-timeline-card-body {
            font-size: 10.5px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .software-timeline-card {
            transition: none;
          }

          .software-timeline-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="software-timeline-section">
        <div className="software-timeline-container">

          {/* LEFT: COPY */}
          <div>
            <p className="software-timeline-eyebrow">
              SOFTWARE ENGINEERING
            </p>

            <h2 className="software-timeline-heading">
              From Business Requirements to Working Solutions
            </h2>

            <p className="software-timeline-description">
              Effective software begins with a clear understanding of what
              the business needs. TechTorch provides software engineering
              across the development lifecycle — from requirement analysis
              and solution design to development, testing, deployment and
              ongoing support.
            </p>

            <span className="software-capability-badge">
              <span className="software-capability-dot" />
              OUR CAPABILITIES
            </span>
          </div>

          {/* RIGHT: TIMELINE */}
          <div className="software-timeline-list">
            <div className="software-timeline-items">
              {steps.map(({ num, title, body }) => (
                <div
                  key={num}
                  className="software-timeline-card"
                >
                  <span className="software-timeline-number">
                    {num}
                  </span>

                  <div className="software-timeline-card-content">
                    <h3 className="software-timeline-card-title">
                      {title}
                    </h3>

                    <p className="software-timeline-card-body">
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