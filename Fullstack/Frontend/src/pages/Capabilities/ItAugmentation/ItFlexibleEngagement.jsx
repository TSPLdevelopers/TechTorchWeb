import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BRAND_COLOR = "#730024";

const cards = [
  {
    number: "01",
    tag: "On-Demand",
    title: "Contract Staffing",
    description:
      "Flexible technology resources for short-term or ongoing project requirements.",
    linkLabel: "Agile team injection",
    path: "/Contract-Staffing",
  },
  {
    number: "02",
    tag: "De-Risked",
    title: "Contract-to-Hire",
    description:
      "A flexible hiring model that allows businesses to work with professionals before making a long-term commitment.",
    linkLabel: "Evaluate technical fit",
    path: "/contract-to-hire",
  },
  {
    number: "03",
    tag: "Autonomous",
    title: "Dedicated Development Teams",
    description:
      "Dedicated technology professionals focused on specific development and project requirements.",
    linkLabel: "Full lifecycle pods",
    path: "/Dedicated-Development-Teams",
  },
  {
    number: "04",
    tag: "Distributed",
    title: "Remote Engineers",
    description:
      "Remote engineering resources that can work alongside your existing technology team.",
    linkLabel: "Timezone aligned",
    path: "/remote-engineers",
  },
  {
    number: "05",
    tag: "Milestone",
    title: "Project-Based Hiring",
    description:
      "Technology professionals selected to support specific projects and delivery requirements.",
    linkLabel: "Targeted objectives",
    path: "/project-based-hiring",
  },
  {
    number: "06",
    tag: "Immediate",
    title: "Resource Replacement",
    description:
      "Flexible support when an existing technology resource needs to be replaced.",
    linkLabel: "Zero productivity loss",
    path: "/resource-replacement",
  },
  {
    number: "07",
    tag: "Pre-Vetted",
    title: "Bench Hiring",
    description:
      "Access to available IT professionals for immediate or upcoming technology requirements.",
    linkLabel: "Deploy within 48 hours",
    path: "/bench-hiring",
  },
  {
    number: "08",
    tag: "Enterprise",
    title: "Vendor Partnership",
    description:
      "Technology resource support through a flexible vendor partnership model.",
    linkLabel: "Strategic SLA framework",
    path: "/vendor-partnership",
  },
  {
    number: "09",
    tag: "Managed",
    title: "MSP Support",
    description:
      "Managed support for technology workforce and resource requirements.",
    linkLabel: "Workforce governance",
    path: "/msp-support",
  },
];

export default function ITAugmentationServices() {
  return (
    <>
      <section className="it-augmentation-section">
        <div className="it-augmentation-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="it-augmentation-header">
            <span className="it-augmentation-eyebrow">
              Flexible Engagement Capabilities
            </span>

            <h1 className="it-augmentation-heading">
              Our IT Augmentation Services
            </h1>

            <p className="it-augmentation-subheading">
              With a flexible approach to technology resourcing, businesses can
              respond to changing workloads, strengthen project teams, and bring
              additional technical capabilities into their existing working
              environment.
            </p>
          </div>

          {/* =================================================
              SERVICE CARDS
          ================================================= */}

          <div className="it-augmentation-grid">
            {cards.map((card) => (
              <Link
                key={card.number}
                to={card.path}
                className="it-service-card"
              >
                {/* Top Accent */}

                <div className="it-service-card-accent" />

                {/* Card Top */}

                <div className="it-service-card-top">
                  <span className="it-service-number">
                    {card.number}
                  </span>

                  <span className="it-service-tag">
                    {card.tag}
                  </span>
                </div>

                {/* Content */}

                <div className="it-service-card-content">
                  <h3 className="it-service-title">
                    {card.title}
                  </h3>

                  <p className="it-service-description">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Link */}

                <div className="it-service-card-bottom">
                  <span className="it-service-link">
                    {card.linkLabel}

                    <ArrowRight className="it-service-arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* =================================================
              OFFSHORE DEVELOPMENT TEAMS
          ================================================= */}

          <div className="it-offshore-card">
            <div className="it-offshore-content">

              {/* Left Content */}

              <div className="it-offshore-left">
                <span className="it-offshore-number">
                  10
                </span>

                <div className="it-offshore-copy">
                  <span className="it-offshore-tag">
                    Global Scale
                  </span>

                  <h3 className="it-offshore-title">
                    Offshore Development Teams
                  </h3>

                  <p className="it-offshore-description">
                    Extended development capabilities through offshore
                    technology teams.
                  </p>
                </div>
              </div>

              {/* Link */}

              <a
                href="/offshore-teams"
                className="it-offshore-link"
              >
                <span>Global Delivery Centers</span>

                <ArrowRight className="it-offshore-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .it-augmentation-section {
          width: 100%;
          overflow: hidden;

          background: #f7f5f2;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .it-augmentation-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .it-augmentation-header {
          width: 100%;
          max-width: 850px;

          margin-bottom: 45px;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .it-augmentation-eyebrow {
          display: inline-flex;
          align-items: center;

          margin-bottom: 16px;

          padding: 6px 11px;

          border-radius: 6px;

          background: #f9e8ef;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .it-augmentation-heading {
          margin: 0 0 15px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           SUBHEADING
        ===================================================== */

        .it-augmentation-subheading {
          max-width: 780px;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.75;

          color: #737373;
        }

        /* =====================================================
           SERVICE GRID
        ===================================================== */

        .it-augmentation-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 24px;

          width: 100%;
        }

        /* =====================================================
           SERVICE CARD
        ===================================================== */

        .it-service-card {
          position: relative;

          display: flex;
          flex-direction: column;

          min-width: 0;
          min-height: 245px;

          overflow: hidden;

          padding: 25px;

          border: 1px solid #e5e2df;
          border-radius: 13px;

          background: #ffffff;

          text-decoration: none;
          color: inherit;

          box-shadow:
            0 3px 15px rgba(0, 0, 0, 0.025);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .it-service-card:hover {
          transform: translateY(-5px);

          border-color: #ead4de;

          box-shadow:
            0 14px 35px rgba(115, 0, 36, 0.09);
        }

        /* =====================================================
           TOP ACCENT
        ===================================================== */

        .it-service-card-accent {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 3px;

          background: ${BRAND_COLOR};

          opacity: 0;

          transition: opacity 0.3s ease;
        }

        .it-service-card:hover
          .it-service-card-accent {
          opacity: 1;
        }

        /* =====================================================
           CARD TOP
        ===================================================== */

        .it-service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 24px;
        }

        /* =====================================================
           NUMBER
        ===================================================== */

        .it-service-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 37px;
          height: 37px;

          flex-shrink: 0;

          border-radius: 9px;

          background: ${BRAND_COLOR};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;

          color: #ffffff;
        }

        /* =====================================================
           TAG
        ===================================================== */

        .it-service-tag {
          display: inline-flex;
          align-items: center;

          padding: 5px 9px;

          border: 1px solid #ead5df;
          border-radius: 999px;

          background: #fcf5f8;

          font-family: "Inter", sans-serif;
          font-size: 8.5px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.04em;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .it-service-card-content {
          flex: 1;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .it-service-title {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;

          color: #1c1c1c;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .it-service-description {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           CARD BOTTOM
        ===================================================== */

        .it-service-card-bottom {
          margin-top: 22px;

          padding-top: 13px;

          border-top: 1px solid #eeeeee;
        }

        .it-service-link {
          display: inline-flex;
          align-items: center;

          gap: 5px;

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          line-height: 1.4;

          color: ${BRAND_COLOR};

          transition: gap 0.3s ease;
        }

        .it-service-card:hover
          .it-service-link {
          gap: 9px;
        }

        .it-service-arrow {
          width: 13px;
          height: 13px;

          flex-shrink: 0;
        }

        /* =====================================================
           OFFSHORE CARD
        ===================================================== */

        .it-offshore-card {
          width: 100%;

          margin-top: 24px;

          overflow: hidden;

          border: 1px solid #e5e2df;
          border-radius: 13px;

          background: #ffffff;

          box-shadow:
            0 3px 15px rgba(0, 0, 0, 0.025);
        }

        .it-offshore-content {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 35px;

          padding: 25px;
        }

        /* =====================================================
           OFFSHORE LEFT
        ===================================================== */

        .it-offshore-left {
          display: flex;
          align-items: center;

          min-width: 0;

          gap: 15px;
        }

        .it-offshore-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 37px;
          height: 37px;

          flex-shrink: 0;

          border-radius: 9px;

          background: ${BRAND_COLOR};

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;

          color: #ffffff;
        }

        .it-offshore-copy {
          min-width: 0;
        }

        /* =====================================================
           OFFSHORE TAG
        ===================================================== */

        .it-offshore-tag {
          display: block;

          margin-bottom: 4px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           OFFSHORE TITLE
        ===================================================== */

        .it-offshore-title {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;

          color: #1c1c1c;
        }

        /* =====================================================
           OFFSHORE DESCRIPTION
        ===================================================== */

        .it-offshore-description {
          max-width: 700px;

          margin: 5px 0 0;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.6;

          color: #737373;
        }

        /* =====================================================
           OFFSHORE LINK
        ===================================================== */

        .it-offshore-link {
          display: inline-flex;
          align-items: center;

          flex-shrink: 0;

          gap: 5px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;

          color: ${BRAND_COLOR};

          text-decoration: none;

          transition: gap 0.3s ease;
        }

        .it-offshore-link:hover {
          gap: 9px;
        }

        .it-offshore-arrow {
          width: 13px;
          height: 13px;
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .it-augmentation-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .it-augmentation-heading {
            font-size: 34px;
          }

          .it-augmentation-subheading {
            font-size: 13px;
          }

          .it-augmentation-grid {
            gap: 20px;
          }

          .it-service-card {
            min-height: 235px;

            padding: 22px;
          }

          .it-service-title {
            font-size: 14px;
          }

          .it-service-description {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .it-augmentation-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .it-augmentation-header {
            margin-bottom: 35px;
          }

          .it-augmentation-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .it-offshore-content {
            align-items: flex-start;
          }

          .it-offshore-link {
            margin-top: 4px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .it-augmentation-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .it-augmentation-header {
            margin-bottom: 30px;
          }

          .it-augmentation-eyebrow {
            margin-bottom: 13px;

            padding: 5px 9px;

            font-size: 8px;
          }

          .it-augmentation-heading {
            margin-bottom: 12px;

            font-size: 28px;
          }

          .it-augmentation-subheading {
            font-size: 11px;
            line-height: 1.7;
          }

          .it-augmentation-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .it-service-card {
            min-height: 215px;

            padding: 20px;
          }

          .it-service-card-top {
            margin-bottom: 20px;
          }

          .it-service-number {
            width: 34px;
            height: 34px;

            font-size: 10px;
          }

          .it-service-tag {
            font-size: 8px;
          }

          .it-service-title {
            font-size: 14px;
          }

          .it-service-description {
            font-size: 10.5px;
          }

          .it-service-card-bottom {
            margin-top: 18px;
          }

          .it-service-link {
            font-size: 10px;
          }

          .it-offshore-card {
            margin-top: 15px;
          }

          .it-offshore-content {
            flex-direction: column;
            align-items: flex-start;

            gap: 20px;

            padding: 20px;
          }

          .it-offshore-left {
            align-items: flex-start;

            gap: 12px;
          }

          .it-offshore-number {
            width: 34px;
            height: 34px;

            font-size: 10px;
          }

          .it-offshore-tag {
            font-size: 8px;
          }

          .it-offshore-title {
            font-size: 14px;
          }

          .it-offshore-description {
            font-size: 10.5px;
          }

          .it-offshore-link {
            margin-left: 46px;

            font-size: 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .it-augmentation-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .it-augmentation-header {
            margin-bottom: 25px;
          }

          .it-augmentation-eyebrow {
            margin-bottom: 11px;

            font-size: 7px;
          }

          .it-augmentation-heading {
            font-size: 24px;
          }

          .it-augmentation-subheading {
            font-size: 10px;
          }

          .it-augmentation-grid {
            gap: 13px;
          }

          .it-service-card {
            min-height: 205px;

            padding: 18px;
          }

          .it-service-card-top {
            margin-bottom: 18px;
          }

          .it-service-number {
            width: 32px;
            height: 32px;

            border-radius: 8px;

            font-size: 9px;
          }

          .it-service-tag {
            padding: 4px 8px;

            font-size: 7.5px;
          }

          .it-service-title {
            font-size: 13px;
          }

          .it-service-description {
            font-size: 10px;
          }

          .it-service-link {
            font-size: 9.5px;
          }

          .it-offshore-content {
            padding: 18px;
          }

          .it-offshore-number {
            width: 32px;
            height: 32px;

            border-radius: 8px;
          }

          .it-offshore-title {
            font-size: 13px;
          }

          .it-offshore-description {
            font-size: 9.5px;
          }

          .it-offshore-link {
            margin-left: 44px;

            font-size: 9.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .it-augmentation-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .it-augmentation-heading {
            font-size: 22px;
          }

          .it-augmentation-subheading {
            font-size: 9.5px;
          }

          .it-service-card {
            padding: 17px;
          }

          .it-service-title {
            font-size: 12.5px;
          }

          .it-service-description {
            font-size: 9.5px;
          }

          .it-offshore-content {
            padding: 17px;
          }

          .it-offshore-left {
            gap: 10px;
          }

          .it-offshore-link {
            margin-left: 42px;
          }
        }
      `}</style>
    </>
  );
}