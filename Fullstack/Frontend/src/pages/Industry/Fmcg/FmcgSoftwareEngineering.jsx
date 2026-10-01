import React from "react";

const services = [
  {
    title: "Custom Software",
    description: "Develop software around specific business requirements.",
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Build applications for different business and user requirements.",
  },
  {
    title: "Enterprise Software",
    description:
      "Develop business applications including ERP, CRM and HRMS solutions.",
  },
  {
    title: "API & System Integration",
    description:
      "Connect applications and enable data exchange between systems.",
  },
  {
    title: "Software Modernization",
    description:
      "Modernize existing software and move toward current technology environments.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Test applications for functionality, performance, security and usability.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Provide ongoing updates, maintenance and technical support.",
  },
];

export default function TechServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        .tech-services-section {
          width: 100%;
          background: #3a0a25;
          color: #f5eef1;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .tech-services-container {
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* ================= BADGE ================= */

        .tech-services-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 7px 14px;
          margin-bottom: 20px;

          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);

          color: #f5eef1;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        /* ================= HEADING ================= */

        .tech-services-heading {
          max-width: 760px;
          margin: 0 0 18px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 44px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -1.2px;
        }

        /* ================= SUBHEADING ================= */

        .tech-services-subheading {
          max-width: 680px;
          margin: 0 0 44px;

          color: rgba(255, 255, 255, 0.72);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* ================= SERVICES GRID ================= */

        .tech-services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        /* ================= CARD ================= */

        .tech-service-card {
          min-width: 0;
          padding: 23px;

          background: #4c1536;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .tech-service-card:hover {
          transform: translateY(-5px);
          background: #52183c;
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
        }

        .tech-service-number {
          display: block;
          margin-bottom: 14px;

          color: rgba(255, 255, 255, 0.42);

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.7px;
        }

        .tech-service-title {
          margin: 0 0 10px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: -0.2px;
        }

        .tech-service-description {
          margin: 0;

          color: rgba(255, 255, 255, 0.68);

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 400;
        }

        /* ================= 1050px ================= */

        @media (max-width: 1050px) {
          .tech-services-container {
            padding: 62px 32px;
          }

          .tech-services-heading {
            font-size: 40px;
          }

          .tech-services-grid {
            gap: 15px;
          }

          .tech-service-card {
            padding: 21px;
          }
        }

        /* ================= 800px ================= */

        @media (max-width: 800px) {
          .tech-services-container {
            padding: 54px 24px;
          }

          .tech-services-heading {
            max-width: 650px;
            font-size: 35px;
            line-height: 1.2;
          }

          .tech-services-subheading {
            max-width: 620px;
            margin-bottom: 34px;
            font-size: 14px;
          }

          .tech-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .tech-service-card {
            padding: 20px;
            border-radius: 12px;
          }

          .tech-service-title {
            font-size: 15px;
          }

          .tech-service-description {
            font-size: 12.5px;
          }
        }

        /* ================= 600px ================= */

        @media (max-width: 600px) {
          .tech-services-container {
            padding: 46px 17px;
          }

          .tech-services-badge {
            padding: 6px 11px;
            margin-bottom: 16px;
            font-size: 9px;
          }

          .tech-services-heading {
            margin-bottom: 14px;
            font-size: 29px;
            line-height: 1.22;
            letter-spacing: -0.7px;
          }

          .tech-services-subheading {
            margin-bottom: 28px;
            font-size: 13px;
            line-height: 1.65;
          }

          .tech-services-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .tech-service-card {
            padding: 19px;
            border-radius: 12px;
          }

          .tech-service-number {
            margin-bottom: 11px;
            font-size: 10px;
          }

          .tech-service-title {
            margin-bottom: 8px;
            font-size: 15px;
          }

          .tech-service-description {
            font-size: 12px;
            line-height: 1.6;
          }
        }

        /* ================= 400px ================= */

        @media (max-width: 400px) {
          .tech-services-container {
            padding: 40px 14px;
          }

          .tech-services-heading {
            font-size: 26px;
            letter-spacing: -0.5px;
          }

          .tech-services-subheading {
            font-size: 12px;
          }

          .tech-service-card {
            padding: 17px;
          }

          .tech-service-title {
            font-size: 14px;
          }

          .tech-service-description {
            font-size: 11.5px;
          }
        }

        /* ================= 340px ================= */

        @media (max-width: 340px) {
          .tech-services-container {
            padding: 34px 12px;
          }

          .tech-services-heading {
            font-size: 24px;
          }

          .tech-service-card {
            padding: 15px;
          }

          .tech-service-title {
            font-size: 13.5px;
          }

          .tech-service-description {
            font-size: 11px;
          }
        }

        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .tech-service-card {
            transition: none;
          }

          .tech-service-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="tech-services-section">
        <div className="tech-services-container">

          {/* Badge */}
          <span className="tech-services-badge">
            Software &amp; Engineering
          </span>

          {/* Main Heading */}
          <h2 className="tech-services-heading">
            Technology Designed Around
            <br className="desktop-break" />
            Your Requirements
          </h2>

          {/* Subheading */}
          <p className="tech-services-subheading">
            When your business requires custom applications or improvements to
            existing systems, TechTorch provides software development and
            engineering services.
          </p>

          {/* Services */}
          <div className="tech-services-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="tech-service-card"
              >
                <span className="tech-service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="tech-service-title">
                  {service.title}
                </h3>

                <p className="tech-service-description">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}