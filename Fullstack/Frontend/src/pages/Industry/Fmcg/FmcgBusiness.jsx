import React from "react";
import {
  Share2,
  LineChart,
  Briefcase,
  ArrowUpDown,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: Share2,
    title: "Centralized Data",
    body: "Bring important business information together across business functions.",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    body: "Use integrated reporting and analytics to understand business information.",
  },
  {
    icon: Briefcase,
    title: "Process Automation",
    body: "Reduce repetitive manual activities through technology-supported processes.",
  },
  {
    icon: ArrowUpDown,
    title: "Scalable Solutions",
    body: "Adapt technology according to changing business requirements.",
  },
];

export default function BusinessVisibilitySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .business-visibility-section {
          width: 100%;
          background: #f5f6f8;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .business-visibility-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        /* =========================
           HEADER
        ========================= */

        .business-visibility-eyebrow {
          margin: 0 0 14px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .business-visibility-heading {
          max-width: 720px;
          margin: 0 0 18px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .business-visibility-subheading {
          max-width: 650px;
          margin: 0 0 42px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.8;
          font-weight: 500;
        }

        /* =========================
           FEATURE GRID
        ========================= */

        .business-visibility-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .business-visibility-card {
          min-height: 205px;
          padding: 24px;
          background: #ffffff;
          border-radius: 17px;
          border: 1px solid rgba(0, 0, 0, 0.045);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.035);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .business-visibility-card:hover {
          transform: translateY(-5px);
          border-color: rgba(122, 31, 61, 0.12);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.075);
        }

        .business-visibility-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        .business-visibility-card-title {
          margin: 0 0 9px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 700;
        }

        .business-visibility-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* =========================
           LARGE TABLET
        ========================= */

        @media (max-width: 1100px) {
          .business-visibility-container {
            padding: 70px 32px;
          }

          .business-visibility-heading {
            font-size: 36px;
          }

          .business-visibility-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 800px) {
          .business-visibility-container {
            padding: 60px 28px;
          }

          .business-visibility-heading {
            font-size: 34px;
          }

          .business-visibility-subheading {
            margin-bottom: 32px;
          }

          .business-visibility-card {
            min-height: 185px;
            padding: 21px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .business-visibility-container {
            padding: 50px 20px;
          }

          .business-visibility-eyebrow {
            margin-bottom: 10px;
            font-size: 10px;
            letter-spacing: 0.1em;
          }

          .business-visibility-heading {
            font-size: 28px;
            line-height: 1.27;
            margin-bottom: 15px;
          }

          .business-visibility-subheading {
            margin-bottom: 28px;
            font-size: 13px;
            line-height: 1.7;
          }

          .business-visibility-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .business-visibility-card {
            min-height: auto;
            padding: 19px;
            border-radius: 15px;
          }

          .business-visibility-icon {
            width: 38px;
            height: 38px;
            margin-bottom: 15px;
          }

          .business-visibility-card-title {
            font-size: 15px;
          }

          .business-visibility-card-body {
            font-size: 12px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {
          .business-visibility-container {
            padding: 42px 15px;
          }

          .business-visibility-heading {
            font-size: 25px;
          }

          .business-visibility-subheading {
            font-size: 12px;
          }

          .business-visibility-card {
            padding: 16px;
          }

          .business-visibility-card-title {
            font-size: 14px;
          }

          .business-visibility-card-body {
            font-size: 11px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .business-visibility-container {
            padding: 35px 12px;
          }

          .business-visibility-heading {
            font-size: 22px;
          }

          .business-visibility-subheading {
            font-size: 11.5px;
          }

          .business-visibility-card {
            padding: 14px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .business-visibility-card {
            transition: none;
          }

          .business-visibility-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="business-visibility-section">
        <div className="business-visibility-container">

          {/* HEADER */}
          <p className="business-visibility-eyebrow">
            BUSINESS VISIBILITY
          </p>

          <h2 className="business-visibility-heading">
            Bring Business Information Together
          </h2>

          <p className="business-visibility-subheading">
            Connected information can help teams work with a clearer view of
            business activities and support informed decision-making.
          </p>

          {/* FEATURE CARDS */}
          <div className="business-visibility-grid">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="business-visibility-card"
              >
                <span className="business-visibility-icon">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="business-visibility-card-title">
                  {title}
                </h3>

                <p className="business-visibility-card-body">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}