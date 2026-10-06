import React from "react";
import {
  CheckSquare,
  Code2,
  Share2,
  Shield,
  Compass,
  Monitor,
  Users,
  Gauge,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const services = [
  {
    num: "01",
    icon: CheckSquare,
    title: "IT Consultancy",
    body: "Technology guidance aligned with your business requirements, IT environment and digital transformation objectives.",
    tags: "Technology Strategy · IT Planning · Digital Transformation",
  },
  {
    num: "02",
    icon: Code2,
    title: "Software Engineering",
    body: "End-to-end engineering services for custom software, enterprise applications, web and mobile solutions, and system integration.",
    tags: "Custom Software · Web & Mobile · Enterprise Systems",
  },
  {
    num: "03",
    icon: Share2,
    title: "Cloud Infrastructure",
    body: "Infrastructure solutions designed to support applications, IT operations and changing business requirements.",
    tags: "Cloud Infrastructure · Scalability · IT Operations",
  },
  {
    num: "04",
    icon: Shield,
    title: "Cyber Security",
    body: "Security-focused technology services designed to help protect systems, applications and business information.",
    tags: "Data Protection · Access Management · Security",
  },
  {
    num: "05",
    icon: Compass,
    title: "Artificial Intelligence",
    body: "AI services that help businesses explore and adopt intelligent technologies without the complexity of building and maintaining their own infrastructure.",
    tags: "AI Services · Automation · Intelligent Solutions",
  },
  {
    num: "06",
    icon: Monitor,
    title: "Software Development & Support",
    body: "Software development services covering requirements, development, testing, deployment and ongoing maintenance.",
    tags: "Development · Testing · Deployment · Support",
  },
  {
    num: "07",
    icon: Users,
    title: "Resource & Staffing",
    body: "Technology professionals and flexible workforce solutions aligned with project and business requirements.",
    tags: "IT Professionals · Technical Resources · Project Support",
  },
  {
    num: "08",
    icon: Gauge,
    title: "Business Process Outsourcing",
    body: "Technology-enabled services designed to support business processes and operational requirements.",
    tags: "Process Support · Operations · Business Services",
  },
];

export default function ItServicesGridSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        /* =========================================================
           SECTION
        ========================================================= */

        .it-services-section {
          width: 100%;
          overflow: hidden;

          background: #ffffff;
          color: ${INK};

          font-family: "Inter", Arial, sans-serif;
        }

        /*
          HORIZONTAL SPACING STANDARD

          Desktop      : 100px
          Tablet       : 40px
          Mobile       : 24px
          Small Mobile : 16px
        */

        .it-services-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-top: 70px;
          padding-bottom: 70px;
          padding-left: 100px;
          padding-right: 100px;
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .it-services-eyebrow {
          margin: 0 0 12px;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.4;
        }

        .it-services-heading {
          margin: 0 0 14px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: -0.8px;
        }

        .desktop-break {
          display: block;
        }

        .it-services-description {
          max-width: 800px;

          margin: 0 0 42px;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* =========================================================
           GRID
        ========================================================= */

        .it-services-grid {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        /* =========================================================
           CARD
        ========================================================= */

        .it-service-card {
          min-width: 0;

          display: flex;
          flex-direction: column;

          padding: 22px;

          background: #ffffff;

          border: 1px solid #ece9e4;
          border-radius: 14px;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .it-service-card:hover {
          transform: translateY(-4px);

          border-color: #e5c5d0;

          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.07);
        }

        /* =========================================================
           TOP
        ========================================================= */

        .it-service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .it-service-number {
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          line-height: 1;
        }

        .it-service-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: #f2f1f5;
          color: #8a8fa0;
        }

        /* =========================================================
           CARD HEADING
        ========================================================= */

        .it-service-title {
          margin: 0 0 9px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
        }

        /* =========================================================
           CARD BODY
        ========================================================= */

        .it-service-body {
          margin: 0 0 20px;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================================
           TAG
        ========================================================= */

        .it-service-tags {
          margin-top: auto;

          padding: 10px 12px;

          border: 1px solid #f0d6de;
          border-radius: 9px;

          background: #fffafb;
        }

        .it-service-tags p {
          margin: 0;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.6;
        }

        /* =========================================================
           LARGE TABLET
           40px horizontal spacing
        ========================================================= */

        @media (max-width: 1199px) {
          .it-services-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .it-services-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));

            gap: 18px;
          }

          .it-services-heading {
            font-size: 31px;
          }
        }

        /* =========================================================
           TABLET
           40px horizontal spacing
        ========================================================= */

        @media (max-width: 900px) {
          .it-services-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 55px;
            padding-bottom: 55px;
          }

          .it-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 17px;
          }

          .it-services-heading {
            font-size: 29px;
          }

          .it-services-description {
            font-size: 13.5px;

            margin-bottom: 34px;
          }

          .it-service-card {
            padding: 20px;
          }
        }

        /* =========================================================
           MOBILE
           24px horizontal spacing
        ========================================================= */

        @media (max-width: 767px) {
          .it-services-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 48px;
            padding-bottom: 48px;
          }

          .it-services-eyebrow {
            font-size: 10px;
            margin-bottom: 10px;
          }

          .it-services-heading {
            font-size: 27px;

            line-height: 1.27;
            letter-spacing: -0.6px;

            margin-bottom: 14px;
          }

          .desktop-break {
            display: none;
          }

          .it-services-description {
            max-width: none;

            font-size: 13px;
            line-height: 1.7;

            margin-bottom: 30px;
          }

          .it-services-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .it-service-card {
            padding: 20px;

            border-radius: 12px;
          }

          .it-service-title {
            font-size: 14px;
          }

          .it-service-body {
            font-size: 12px;
            line-height: 1.65;
          }
        }

        /* =========================================================
           SMALL MOBILE
           16px horizontal spacing
        ========================================================= */

        @media (max-width: 480px) {
          .it-services-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .it-services-heading {
            font-size: 24px;
            line-height: 1.28;
          }

          .it-services-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .it-service-card {
            padding: 18px;
          }

          .it-service-top {
            margin-bottom: 15px;
          }

          .it-service-icon {
            width: 34px;
            height: 34px;
          }

          .it-service-title {
            font-size: 13.5px;
          }

          .it-service-body {
            font-size: 11.5px;
          }

          .it-service-tags {
            padding: 9px 10px;
          }

          .it-service-tags p {
            font-size: 9.5px;
          }
        }

        /* =========================================================
           VERY SMALL MOBILE
           Keep 16px horizontal spacing
        ========================================================= */

        @media (max-width: 340px) {
          .it-services-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 35px;
            padding-bottom: 35px;
          }

          .it-services-heading {
            font-size: 22px;
          }

          .it-services-description {
            font-size: 12px;
          }

          .it-service-card {
            padding: 16px;
          }

          .it-service-title {
            font-size: 13px;
          }

          .it-service-body {
            font-size: 11px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .it-service-card {
            transition: none;
          }

          .it-service-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="it-services-section">
        <div className="it-services-container">

          {/* ================= HEADER ================= */}

          <p className="it-services-eyebrow">
            OUR IT SERVICES
          </p>

          <h2 className="it-services-heading">
            Technology Services for Different
            <br className="desktop-break" />
            Business Needs
          </h2>

          <p className="it-services-description">
            From consulting and software development to cloud, security and
            technology resources, our services support different stages of
            your technology journey.
          </p>

          {/* ================= SERVICES GRID ================= */}

          <div className="it-services-grid">
            {services.map(
              ({ num, icon: Icon, title, body, tags }) => (
                <div
                  key={num}
                  className="it-service-card"
                >
                  {/* Top */}
                  <div className="it-service-top">
                    <span className="it-service-number">
                      {num}
                    </span>

                    <span className="it-service-icon">
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="it-service-title">
                    {title}
                  </h3>

                  {/* Body */}
                  <p className="it-service-body">
                    {body}
                  </p>

                  {/* Tags */}
                  <div className="it-service-tags">
                    <p>{tags}</p>
                  </div>
                </div>
              )
            )}
          </div>

        </div>
      </section>
    </>
  );
}