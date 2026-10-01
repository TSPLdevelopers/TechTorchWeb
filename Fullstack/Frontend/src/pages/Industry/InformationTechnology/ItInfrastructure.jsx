import React from "react";
import { ArrowUp, Cloud, Share2, LayoutGrid } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: ArrowUp,
    title: "System Modernization",
    body: "Improve existing applications and technology environments.",
  },
  {
    icon: Cloud,
    title: "Cloud Adoption",
    body: "Build a flexible infrastructure foundation for changing requirements.",
  },
  {
    icon: Share2,
    title: "System Integration",
    body: "Connect applications and platforms to improve information flow.",
  },
  {
    icon: LayoutGrid,
    title: "Digital Applications",
    body: "Develop web, mobile and enterprise applications around business needs.",
  },
];

export default function InfrastructureEvolutionSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .infrastructure-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .infrastructure-container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 64px 40px;
        }

        /* ================= EYEBROW ================= */

        .infrastructure-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.4;
        }

        /* ================= HEADING ================= */

        .infrastructure-heading {
          margin: 0 0 18px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: -0.8px;
        }

        /* ================= SUBHEADING ================= */

        .infrastructure-description {
          max-width: 850px;
          margin: 0 0 42px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.75;
        }

        /* ================= FEATURE GRID ================= */

        .infrastructure-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          overflow: hidden;
          border: 1px solid #ece9e4;
          border-radius: 18px;
          background: #ece9e4;
        }

        .infrastructure-card {
          min-width: 0;
          padding: 28px;
          background: #f7f7fa;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .infrastructure-card:nth-child(1),
        .infrastructure-card:nth-child(2) {
          border-bottom: 1px solid #ece9e4;
        }

        .infrastructure-card:nth-child(1),
        .infrastructure-card:nth-child(3) {
          border-right: 1px solid #ece9e4;
        }

        .infrastructure-card:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        /* ================= ICON ================= */

        .infrastructure-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
        }

        /* ================= CARD HEADING ================= */

        .infrastructure-card-title {
          margin: 0 0 7px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
        }

        /* ================= CARD BODY ================= */

        .infrastructure-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .infrastructure-container {
            max-width: 100%;
            padding: 55px 30px;
          }

          .infrastructure-heading {
            font-size: 29px;
          }

          .infrastructure-description {
            font-size: 13.5px;
            margin-bottom: 34px;
          }

          .infrastructure-card {
            padding: 24px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 650px) {
          .infrastructure-container {
            padding: 48px 20px;
          }

          .infrastructure-eyebrow {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .infrastructure-heading {
            font-size: 27px;
            line-height: 1.25;
            letter-spacing: -0.6px;
            margin-bottom: 15px;
          }

          .infrastructure-description {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .infrastructure-grid {
            grid-template-columns: 1fr;
            border-radius: 15px;
          }

          .infrastructure-card {
            padding: 22px 20px;
            border-right: none !important;
            border-bottom: 1px solid #ece9e4 !important;
          }

          .infrastructure-card:last-child {
            border-bottom: none !important;
          }

          .infrastructure-icon {
            width: 38px;
            height: 38px;
            margin-bottom: 14px;
          }

          .infrastructure-card-title {
            font-size: 14px;
          }

          .infrastructure-card-body {
            font-size: 12px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 420px) {
          .infrastructure-container {
            padding: 40px 15px;
          }

          .infrastructure-heading {
            font-size: 24px;
            line-height: 1.28;
          }

          .infrastructure-description {
            font-size: 12.5px;
            line-height: 1.65;
            margin-bottom: 25px;
          }

          .infrastructure-card {
            padding: 20px 17px;
          }

          .infrastructure-card-title {
            font-size: 13.5px;
          }

          .infrastructure-card-body {
            font-size: 11.5px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .infrastructure-container {
            padding: 35px 12px;
          }

          .infrastructure-heading {
            font-size: 22px;
          }

          .infrastructure-description {
            font-size: 12px;
          }

          .infrastructure-card {
            padding: 18px 15px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .infrastructure-card {
            transition: none;
          }

          .infrastructure-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="infrastructure-section">
        <div className="infrastructure-container">

          {/* Eyebrow */}
          <p className="infrastructure-eyebrow">
            INFRASTRUCTURE &amp; EVOLUTION
          </p>

          {/* Main Heading */}
          <h2 className="infrastructure-heading">
            Build, Connect and Improve Your Digital
            <br className="desktop-break" />
            Infrastructure
          </h2>

          {/* Subheading / Description */}
          <p className="infrastructure-description">
            Technology requirements continue to evolve as businesses grow.
            Modernization can involve improving existing applications,
            connecting different systems, adopting cloud infrastructure or
            developing new digital solutions. TechTorch brings together
            software engineering, system integration, cloud capabilities and
            technology services to help organizations move forward with their
            technology requirements.
          </p>

          {/* Feature Grid */}
          <div className="infrastructure-grid">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="infrastructure-card"
              >
                <span className="infrastructure-icon">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="infrastructure-card-title">
                  {title}
                </h3>

                <p className="infrastructure-card-body">
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