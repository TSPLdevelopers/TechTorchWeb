import React from "react";
import {
  Headphones,
  Cloud,
  ShieldCheck,
  Bot,
  FileCode,
  Briefcase,
  Share2,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Headphones,
    title: "IT Consultancy",
    body: "Technology guidance based on business and digital requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Cloud infrastructure services to support evolving IT requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "Cybersecurity services focused on protecting digital assets and technology environments.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    body: "AI as a Service for business and technology requirements.",
  },
  {
    icon: FileCode,
    title: "Software Development & Support",
    body: "End-to-end software development and ongoing support.",
  },
  {
    icon: Briefcase,
    title: "Resource & Staffing",
    body: "Skilled technology professionals and flexible workforce solutions.",
  },
];

export default function TechnologyServicesGridSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           SECTION
        ================================================= */

        .technology-services-section {
          width: 100%;
          background: #f7f5f2;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .technology-services-section *,
        .technology-services-section *::before,
        .technology-services-section *::after {
          box-sizing: border-box;
        }

        .technology-services-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 78px 100px;
        }

        /* =================================================
           SECTION HEADER
        ================================================= */

        .technology-services-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .technology-services-heading {
          margin: 0 0 38px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.03em;
          max-width: 850px;
        }

        /* =================================================
           SERVICES GRID
        ================================================= */

        .technology-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }

        /* =================================================
           SERVICE CARD
        ================================================= */

        .technology-service-card {
          min-height: 215px;
          display: flex;
          flex-direction: column;
          padding: 25px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .technology-service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(27, 27, 42, 0.09);
        }

        /* =================================================
           SERVICE ICON
        ================================================= */

        .technology-service-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
          flex-shrink: 0;
        }

        /* =================================================
           SERVICE TITLE
        ================================================= */

        .technology-service-title {
          margin: 0 0 9px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* =================================================
           SERVICE BODY
        ================================================= */

        .technology-service-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        /* =================================================
           BPO CARD
        ================================================= */

        .technology-bpo-card {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 25px;
          background: #ffffff;
          border-top: 4px solid ${WINE};
          border-radius: 0 0 16px 16px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .technology-bpo-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(27, 27, 42, 0.08);
        }

        .technology-bpo-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #fbeef1;
          color: ${WINE};
          flex-shrink: 0;
        }

        .technology-bpo-title {
          margin: 0 0 5px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .technology-bpo-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.65;
        }

        /* =================================================
           LAPTOP
        ================================================= */

        @media (max-width: 1200px) {
          .technology-services-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .technology-services-heading {
            font-size: 36px;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {
          .technology-services-container {
            padding-top: 65px;
            padding-bottom: 65px;
            padding-left: 40px;
            padding-right: 40px;
          }

          .technology-services-heading {
            font-size: 34px;
            margin-bottom: 32px;
          }

          .technology-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .technology-service-card {
            min-height: 205px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {
          .technology-services-container {
            padding-top: 52px;
            padding-bottom: 52px;
            padding-left: 24px;
            padding-right: 24px;
          }

          .technology-services-eyebrow {
            font-size: 11px;
            margin-bottom: 10px;
          }

          .technology-services-heading {
            font-size: 30px;
            line-height: 1.25;
            margin-bottom: 28px;
          }

          .technology-services-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .technology-service-card {
            min-height: auto;
            padding: 22px 20px;
            border-radius: 14px;
          }

          .technology-service-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 16px;
          }

          .technology-service-title {
            font-size: 15px;
          }

          .technology-service-body {
            font-size: 13px;
            line-height: 1.65;
          }

          .technology-bpo-card {
            align-items: flex-start;
            padding: 21px 20px;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .technology-services-container {
            padding-top: 44px;
            padding-bottom: 44px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .technology-services-heading {
            font-size: 26px;
            margin-bottom: 24px;
          }

          .technology-service-card {
            padding: 20px 18px;
          }

          .technology-service-icon {
            width: 38px;
            height: 38px;
            margin-bottom: 14px;
          }

          .technology-service-title {
            font-size: 14px;
          }

          .technology-service-body {
            font-size: 12px;
            line-height: 1.65;
          }

          .technology-bpo-card {
            gap: 13px;
            padding: 19px 17px;
          }

          .technology-bpo-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .technology-bpo-title {
            font-size: 14px;
          }

          .technology-bpo-body {
            font-size: 12px;
          }
        }

        /* =================================================
           VERY SMALL DEVICES
        ================================================= */

        @media (max-width: 340px) {
          .technology-services-container {
            padding-top: 38px;
            padding-bottom: 38px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .technology-services-heading {
            font-size: 23px;
          }

          .technology-service-card {
            padding: 18px 16px;
          }

          .technology-service-title {
            font-size: 13px;
          }

          .technology-service-body {
            font-size: 11.5px;
          }

          .technology-bpo-card {
            padding: 17px 15px;
          }

          .technology-bpo-title {
            font-size: 13px;
          }

          .technology-bpo-body {
            font-size: 11.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .technology-service-card,
          .technology-bpo-card {
            transition: none;
          }
        }
      `}</style>

      <section className="technology-services-section">
        <div className="technology-services-container">

          {/* Section Header */}
          <p className="technology-services-eyebrow">
            TECHNOLOGY SERVICES
          </p>

          <h2 className="technology-services-heading">
            Support Across Your Technology Environment
          </h2>

          {/* Services Grid */}
          <div className="technology-services-grid">
            {cards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="technology-service-card"
              >
                <span className="technology-service-icon">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>

                <h3 className="technology-service-title">
                  {title}
                </h3>

                <p className="technology-service-body">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Full Width BPO */}
          <div className="technology-bpo-card">
            <span className="technology-bpo-icon">
              <Share2
                size={18}
                strokeWidth={1.8}
              />
            </span>

            <div>
              <h3 className="technology-bpo-title">
                Business Process Outsourcing
              </h3>

              <p className="technology-bpo-body">
                Technology-enabled support for selected business processes.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}