import React from "react";
import { Check } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const items = [
  {
    title: "Business-Aligned",
    body: "Technology shaped around your business requirements.",
  },
  {
    title: "Connected",
    body: "Solutions designed to work across applications, systems and business functions.",
  },
  {
    title: "Flexible",
    body: "Technology that can adapt to changing requirements.",
  },
  {
    title: "Scalable",
    body: "Solutions designed with future business needs in mind.",
  },
  {
    title: "Supported",
    body: "Continued assistance across development, deployment and ongoing technology needs.",
  },
];

export default function WhyTechTorchChecklistSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .why-techtorch-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .why-techtorch-container {
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

        .why-techtorch-eyebrow {
          margin: 0 0 13px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.4;
        }

        .why-techtorch-heading {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: -0.9px;
        }

        /* ================= CHECKLIST ================= */

        .why-techtorch-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .why-techtorch-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          padding: 17px 18px;
          background: #f6f7fa;
          border-radius: 12px;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .why-techtorch-item:hover {
          background: #ffffff;
          transform: translateX(4px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.06);
        }

        /* ================= CHECK ICON ================= */

        .why-techtorch-check {
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border-radius: 50%;
          background: ${WINE};
          color: #ffffff;
        }

        /* ================= ITEM CONTENT ================= */

        .why-techtorch-item-content {
          min-width: 0;
        }

        .why-techtorch-item-title {
          margin: 0 0 5px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .why-techtorch-item-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* ================= TABLET / MEDIUM ================= */

        @media (max-width: 1199px) {
          .why-techtorch-container {
            padding-left: 40px;
            padding-right: 40px;
            gap: 50px;
          }

          .why-techtorch-heading {
            font-size: 33px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 800px) {
          .why-techtorch-container {
            grid-template-columns: 1fr;
            gap: 35px;
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .why-techtorch-heading {
            font-size: 30px;
          }

          .why-techtorch-list {
            width: 100%;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 767px) {
          .why-techtorch-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 28px;
          }

          .why-techtorch-eyebrow {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .why-techtorch-heading {
            font-size: 27px;
            line-height: 1.27;
            letter-spacing: -0.6px;
          }

          .why-techtorch-list {
            gap: 10px;
          }

          .why-techtorch-item {
            padding: 15px;
            gap: 11px;
            border-radius: 10px;
          }

          .why-techtorch-check {
            width: 25px;
            height: 25px;
          }

          .why-techtorch-item-title {
            font-size: 13.5px;
          }

          .why-techtorch-item-body {
            font-size: 11.5px;
            line-height: 1.6;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .why-techtorch-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .why-techtorch-heading {
            font-size: 24px;
            line-height: 1.28;
          }

          .why-techtorch-item {
            padding: 14px;
          }

          .why-techtorch-check {
            width: 24px;
            height: 24px;
          }

          .why-techtorch-item-title {
            font-size: 13px;
          }

          .why-techtorch-item-body {
            font-size: 11px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .why-techtorch-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 35px;
            padding-bottom: 35px;
          }

          .why-techtorch-heading {
            font-size: 22px;
          }

          .why-techtorch-item {
            padding: 12px;
            gap: 9px;
          }

          .why-techtorch-item-title {
            font-size: 12.5px;
          }

          .why-techtorch-item-body {
            font-size: 10.5px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .why-techtorch-item {
            transition: none;
          }

          .why-techtorch-item:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="why-techtorch-section">
        <div className="why-techtorch-container">

          {/* LEFT: HEADING */}
          <div>
            <p className="why-techtorch-eyebrow">
              WHY TECHTORCH
            </p>

            <h2 className="why-techtorch-heading">
              Technology With a
              <br />
              Clear Business Focus
            </h2>
          </div>

          {/* RIGHT: CHECKLIST */}
          <div className="why-techtorch-list">
            {items.map(({ title, body }) => (
              <div
                key={title}
                className="why-techtorch-item"
              >
                <span className="why-techtorch-check">
                  <Check
                    size={13}
                    strokeWidth={3}
                  />
                </span>

                <div className="why-techtorch-item-content">
                  <h3 className="why-techtorch-item-title">
                    {title}
                  </h3>

                  <p className="why-techtorch-item-body">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}