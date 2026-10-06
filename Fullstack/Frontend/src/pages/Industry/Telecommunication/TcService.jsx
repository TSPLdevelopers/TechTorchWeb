import React from "react";
import {
  MapPin,
  Cloud,
  Shield,
  Briefcase,
  Monitor,
  Users,
} from "lucide-react";

const WINE = "#7A1F3D";

const cards = [
  {
    icon: MapPin,
    cap: "CAPABILITY 01",
    title: "IT Consultancy",
    body: "Technology guidance based on business requirements.",
  },
  {
    icon: Cloud,
    cap: "CAPABILITY 02",
    title: "Cloud Infrastructure",
    body: "Cloud infrastructure services for evolving IT requirements.",
  },
  {
    icon: Shield,
    cap: "CAPABILITY 03",
    title: "Cyber Security",
    body: "Technology services addressing cybersecurity requirements.",
  },
  {
    icon: Briefcase,
    cap: "CAPABILITY 04",
    title: "Artificial Intelligence",
    body: "AI services designed to support business requirements.",
  },
  {
    icon: Monitor,
    cap: "CAPABILITY 05",
    title: "Software Development & Support",
    body: "Development, deployment and ongoing software support.",
  },
  {
    icon: Users,
    cap: "CAPABILITY 06",
    title: "Resource & Staffing",
    body: "Skilled technology professionals and flexible workforce solutions.",
  },
];

export default function TechnologyServicesWineGridSection() {
  return (
    <section className="technology-services-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .technology-services-section {
          width: 100%;
          overflow: hidden;
          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              #3d0d28 0%,
              #5c1730 60%,
              #3d0d28 100%
            );

          font-family: "Inter", sans-serif;
        }

        .technology-services-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 90px 32px;
        }

        /* =========================================
           HEADER
        ========================================= */

        .technology-services-label {
          margin: 0 0 12px;

          color: #e3a9c1;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .technology-services-heading {
          margin: 0 0 14px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.035em;
        }

        .technology-services-subheading {
          max-width: 650px;
          margin: 0 0 52px;

          color: #d9b7c4;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.7;
        }

        /* =========================================
           CARDS GRID
        ========================================= */

        .technology-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        /* =========================================
           CARD
        ========================================= */

        .technology-service-card {
          position: relative;

          min-height: 245px;
          padding: 27px;

          display: flex;
          flex-direction: column;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;

          background: rgba(255, 255, 255, 0.06);

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .technology-service-card:hover {
          transform: translateY(-6px);

          border-color: rgba(255, 255, 255, 0.18);

          background: rgba(255, 255, 255, 0.085);

          box-shadow:
            0 18px 45px rgba(0, 0, 0, 0.16);
        }

        /* =========================================
           ICON
        ========================================= */

        .technology-service-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 24px;

          border-radius: 12px;

          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;

          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .technology-service-card:hover
        .technology-service-icon {
          transform: scale(1.12);

          background: rgba(255, 255, 255, 0.18);

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.12);
        }

        /* =========================================
           CARD TITLE
        ========================================= */

        .technology-service-title {
          margin: 0 0 9px;

          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        /* =========================================
           CARD DESCRIPTION
        ========================================= */

        .technology-service-body {
          margin: 0 0 22px;

          color: #d9b7c4;

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           CAPABILITY LABEL
        ========================================= */

        .technology-service-capability {
          margin-top: auto;
          margin-bottom: 0;

          color: #a9738a;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        /* =========================================
           1050px
        ========================================= */

        @media (max-width: 1050px) {
          .technology-services-container {
            padding: 80px 28px;
          }

          .technology-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .technology-service-card {
            min-height: 230px;
          }
        }

        /* =========================================
           768px
        ========================================= */

        @media (max-width: 768px) {
          .technology-services-container {
            padding: 70px 24px;
          }

          .technology-services-heading {
            font-size: 30px;
          }

          .technology-services-subheading {
            margin-bottom: 40px;
            font-size: 14px;
          }

          .technology-services-grid {
            gap: 16px;
          }

          .technology-service-card {
            min-height: 220px;
            padding: 23px;
          }

          .technology-service-icon {
            width: 44px;
            height: 44px;
            margin-bottom: 21px;
          }
        }

        /* =========================================
           600px - MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .technology-services-container {
            padding: 60px 20px;
          }

          .technology-services-label {
            margin-bottom: 11px;
            font-size: 10px;
            letter-spacing: 0.14em;
          }

          .technology-services-heading {
            margin-bottom: 12px;

            font-size: 27px;
            line-height: 1.25;
            letter-spacing: -0.025em;
          }

          .technology-services-subheading {
            margin-bottom: 34px;

            font-size: 13.5px;
            line-height: 1.7;
          }

          .technology-services-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .technology-service-card {
            min-height: auto;
            padding: 22px;
            border-radius: 16px;
          }

          .technology-service-icon {
            width: 43px;
            height: 43px;
            margin-bottom: 20px;
          }

          .technology-service-title {
            font-size: 15px;
          }

          .technology-service-body {
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 1.65;
          }

          .technology-service-capability {
            font-size: 9px;
          }
        }

        /* =========================================
           400px - SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .technology-services-container {
            padding: 52px 16px;
          }

          .technology-services-heading {
            font-size: 24px;
          }

          .technology-services-subheading {
            font-size: 13px;
          }

          .technology-service-card {
            padding: 20px;
          }

          .technology-service-title {
            font-size: 14px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .technology-service-card,
          .technology-service-icon {
            transition: none !important;
          }
        }
      `}</style>

      <div className="technology-services-container">

        {/* HEADER */}
        <p className="technology-services-label">
          Our Technology Services
        </p>

        <h2 className="technology-services-heading">
          Our Technology Services
        </h2>

        <p className="technology-services-subheading">
          Technology services designed to support your business and
          technology requirements.
        </p>

        {/* CARDS */}
        <div className="technology-services-grid">
          {cards.map(({ icon: Icon, cap, title, body }) => (
            <div
              key={title}
              className="technology-service-card"
            >
              <span className="technology-service-icon">
                <Icon
                  size={19}
                  strokeWidth={1.8}
                />
              </span>

              <h3 className="technology-service-title">
                {title}
              </h3>

              <p className="technology-service-body">
                {body}
              </p>

              <p className="technology-service-capability">
                {cap}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}