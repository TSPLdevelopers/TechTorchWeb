import React from "react";
import {
  MessageSquareText,
  Briefcase,
  Cloud,
  Shield,
  MonitorCog,
  ArrowLeftRight,
  Smartphone,
  Users,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

// =================================================
// COLORS
// =================================================

const MAROON = "#730024";

// =================================================
// CARDS
// =================================================

const cards = [
  {
    icon: MessageSquareText,
    title: "IT Consultancy",
    description:
      "Technology consulting designed to guide businesses through their digital transformation journey.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence as a Service that enables businesses to harness AI without the complexity of building and maintaining their own infrastructure.",
    linkLabel: "Featured Offering",
    featured: true,
    badge: "ACTIVE FOCUS",
    linkIcon: CircleCheck,
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud Infrastructure as a Service designed to help businesses scale and optimize their IT operations.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Cybersecurity services focused on protecting an organization's digital assets in an environment where cyber threats continue to evolve.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: MonitorCog,
    title: "Software Engineering Services",
    description:
      "Engineering services designed to support businesses in achieving their technical and operational goals.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: ArrowLeftRight,
    title: "Business Process Outsourcing",
    description:
      "BPO services designed to improve operational efficiency and allow businesses to focus on their core competencies.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Software Development & Support",
    description:
      "End-to-end software development and support services designed to help businesses achieve operational excellence and drive innovation.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Users,
    title: "Resource & Staffing",
    description:
      "Resource and staffing services that provide businesses with skilled professionals and flexible workforce solutions.",
    linkLabel: "Explore Practice",
    featured: false,
  },
];

// =================================================
// COMPONENT
// =================================================

export default function TechTorchEcosystem() {
  return (
    <section className="ecosystem-section">
      <div className="ecosystem-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="ecosystem-header">

          <div className="ecosystem-header-content">

            {/* Eyebrow */}

            <div className="ecosystem-eyebrow">
              <span className="ecosystem-eyebrow-line"></span>

              <span className="ecosystem-eyebrow-text">
                TechTorch Ecosystem
              </span>
            </div>

            {/* Heading */}

            <h1 className="ecosystem-heading">
              TechTorch Technology Services
            </h1>

            {/* Subheading */}

            <p className="ecosystem-subheading">
              Artificial Intelligence is one part of the wider technology
              capabilities offered by TechTorch Solutions.
            </p>
          </div>

          {/* Practice Count */}

          <span className="ecosystem-count">
            8 Integrated Practices
          </span>
        </div>

        {/* =================================================
            CARD GRID
        ================================================= */}

        <div className="ecosystem-grid">

          {cards.map((card) => {
            const Icon = card.icon;
            const LinkIcon = card.linkIcon || ArrowRight;

            return (
              <div
                key={card.title}
                className="ecosystem-card"
              >

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="ecosystem-card-top">

                  {/* Icon */}

                  <div className="ecosystem-icon-wrapper">
                    <Icon className="ecosystem-icon" />
                  </div>

                  {/* Badge */}

                  {card.badge && (
                    <span className="ecosystem-badge">
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* =================================================
                    CARD HEADING
                ================================================= */}

                <h3 className="ecosystem-card-title">
                  {card.title}
                </h3>

                {/* =================================================
                    CARD DESCRIPTION
                ================================================= */}

                <p className="ecosystem-card-description">
                  {card.description}
                </p>

                {/* =================================================
                    CARD LINK
                ================================================= */}

                <div className="ecosystem-card-footer">
                  <a
                    href="#"
                    className="ecosystem-card-link"
                  >
                    <span>{card.linkLabel}</span>

                    <LinkIcon className="ecosystem-link-icon" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================
          RESPONSIVE CSS
      ================================================= */}

      <style>{`

        /* =================================================
           SECTION
        ================================================= */

        .ecosystem-section {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
        }

        /* =================================================
           MAIN CONTAINER

           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ================================================= */

        .ecosystem-container {
          width: 100%;
          box-sizing: border-box;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 70px;
          padding-bottom: 70px;
        }

        /* =================================================
           HEADER
        ================================================= */

        .ecosystem-header {
          width: 100%;

          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 30px;

          margin-bottom: 42px;
        }

        .ecosystem-header-content {
          min-width: 0;
          flex: 1;
        }

        /* =================================================
           EYEBROW
        ================================================= */

        .ecosystem-eyebrow {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 14px;
        }

        .ecosystem-eyebrow-line {
          width: 32px;
          height: 1px;

          flex-shrink: 0;

          background: ${MAROON};
        }

        .ecosystem-eyebrow-text {
          font-family: "Inter", sans-serif;

          font-size: 11px;
          font-weight: 600;

          line-height: 1.4;

          letter-spacing: 0.08em;

          color: ${MAROON};
        }

        /* =================================================
           HEADING
        ================================================= */

        .ecosystem-heading {
          max-width: 850px;

          margin: 0 0 8px 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 38px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: -0.02em;

          color: #1c1c1c;
        }

        /* =================================================
           SUBHEADING
        ================================================= */

        .ecosystem-subheading {
          max-width: 700px;

          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.65;

          color: #737373;
        }

        /* =================================================
           PRACTICE COUNT
        ================================================= */

        .ecosystem-count {
          flex-shrink: 0;

          white-space: nowrap;

          padding: 7px 13px;

          border-radius: 999px;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 500;

          line-height: 1.3;

          color: #737373;

          background: #f5f5f5;
        }

        /* =================================================
           CARD GRID
        ================================================= */

        .ecosystem-grid {
          width: 100%;

          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 24px;
        }

        /* =================================================
           CARD
        ================================================= */

        .ecosystem-card {
          min-width: 0;
          min-height: 285px;

          display: flex;
          flex-direction: column;

          box-sizing: border-box;

          padding: 24px;

          border: 1px solid #e5e5e5;

          border-radius: 12px;

          background: #ffffff;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .ecosystem-card:hover {
          transform: translateY(-5px);

          border-color: rgba(115, 0, 36, 0.16);

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.07);
        }

        /* =================================================
           CARD TOP
        ================================================= */

        .ecosystem-card-top {
          width: 100%;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 10px;

          margin-bottom: 21px;
        }

        /* =================================================
           ICON
        ================================================= */

        .ecosystem-icon-wrapper {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          box-sizing: border-box;

          border: 1px solid #e5e5e5;

          border-radius: 8px;

          background: #fafafa;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease;
        }

        .ecosystem-card:hover .ecosystem-icon-wrapper {
          transform: scale(1.08);

          border-color: ${MAROON};

          background: #fdf1f6;
        }

        .ecosystem-icon {
          width: 17px;
          height: 17px;

          color: ${MAROON};

          transition: transform 0.35s ease;
        }

        .ecosystem-card:hover .ecosystem-icon {
          transform: scale(1.18);
        }

        /* =================================================
           BADGE
        ================================================= */

        .ecosystem-badge {
          flex-shrink: 0;

          padding: 5px 9px;

          border-radius: 999px;

          font-family: "Inter", sans-serif;

          font-size: 8px;
          font-weight: 600;

          line-height: 1.2;

          letter-spacing: 0.06em;

          white-space: nowrap;

          color: ${MAROON};

          background: #fdf1f6;
        }

        /* =================================================
           CARD TITLE
        ================================================= */

        .ecosystem-card-title {
          margin: 0 0 9px 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;
          font-weight: 700;

          line-height: 1.4;

          color: #1c1c1c;
        }

        /* =================================================
           CARD DESCRIPTION
        ================================================= */

        .ecosystem-card-description {
          flex: 1;

          margin: 0 0 20px 0;

          font-family: "Inter", sans-serif;

          font-size: 12.5px;
          font-weight: 400;

          line-height: 1.7;

          color: #737373;
        }

        /* =================================================
           CARD FOOTER
        ================================================= */

        .ecosystem-card-footer {
          width: 100%;

          padding-top: 13px;

          border-top: 1px solid #eeeeee;
        }

        /* =================================================
           CARD LINK
        ================================================= */

        .ecosystem-card-link {
          display: inline-flex;
          align-items: center;

          gap: 5px;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          font-weight: 600;

          line-height: 1.4;

          text-decoration: none;

          color: ${MAROON};

          transition: gap 0.3s ease;
        }

        .ecosystem-card-link:hover {
          gap: 9px;
        }

        .ecosystem-link-icon {
          width: 13px;
          height: 13px;

          flex-shrink: 0;

          transition: transform 0.3s ease;
        }

        .ecosystem-card:hover .ecosystem-link-icon {
          transform: translateX(2px);
        }

        /* =================================================
           LARGE TABLET
           <= 1200px
        ================================================= */

        @media (max-width: 1200px) {

          .ecosystem-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .ecosystem-heading {
            font-size: 35px;
          }

          .ecosystem-grid {
            gap: 20px;
          }

          .ecosystem-card {
            padding: 21px;
          }
        }

        /* =================================================
           TABLET
           <= 900px
        ================================================= */

        @media (max-width: 900px) {

          .ecosystem-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .ecosystem-header {
            align-items: flex-start;

            gap: 18px;

            margin-bottom: 32px;
          }

          .ecosystem-heading {
            font-size: 32px;
          }

          .ecosystem-subheading {
            font-size: 13px;
          }

          .ecosystem-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .ecosystem-card {
            min-height: 275px;

            padding: 20px;
          }

          .ecosystem-card-title {
            font-size: 14px;
          }

          .ecosystem-card-description {
            font-size: 12px;
          }
        }

        /* =================================================
           MOBILE
           <= 700px
        ================================================= */

        @media (max-width: 700px) {

          .ecosystem-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .ecosystem-header {
            flex-direction: column;
            align-items: flex-start;

            gap: 16px;

            margin-bottom: 28px;
          }

          .ecosystem-eyebrow {
            gap: 7px;

            margin-bottom: 11px;
          }

          .ecosystem-eyebrow-line {
            width: 26px;
          }

          .ecosystem-eyebrow-text {
            font-size: 10px;
          }

          .ecosystem-heading {
            max-width: 100%;

            margin-bottom: 8px;

            font-size: 28px;

            line-height: 1.22;
          }

          .ecosystem-subheading {
            max-width: 100%;

            font-size: 12px;

            line-height: 1.65;
          }

          .ecosystem-count {
            font-size: 9px;

            padding: 6px 11px;
          }

          .ecosystem-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .ecosystem-card {
            min-height: auto;

            padding: 20px;
          }

          .ecosystem-card-top {
            margin-bottom: 18px;
          }

          .ecosystem-card-title {
            font-size: 14px;
          }

          .ecosystem-card-description {
            font-size: 12px;

            line-height: 1.65;
          }

          .ecosystem-card-link {
            font-size: 11px;
          }
        }

        /* =================================================
           SMALL MOBILE
           <= 480px
        ================================================= */

        @media (max-width: 480px) {

          .ecosystem-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 36px;
            padding-bottom: 36px;
          }

          .ecosystem-header {
            margin-bottom: 24px;
          }

          .ecosystem-eyebrow {
            margin-bottom: 9px;
          }

          .ecosystem-eyebrow-line {
            width: 22px;
          }

          .ecosystem-eyebrow-text {
            font-size: 9px;

            letter-spacing: 0.07em;
          }

          .ecosystem-heading {
            font-size: 25px;

            line-height: 1.2;
          }

          .ecosystem-subheading {
            font-size: 11.5px;

            line-height: 1.65;
          }

          .ecosystem-count {
            padding: 5px 10px;

            font-size: 8.5px;
          }

          .ecosystem-grid {
            gap: 13px;
          }

          .ecosystem-card {
            padding: 17px;

            border-radius: 10px;
          }

          .ecosystem-card-top {
            margin-bottom: 16px;
          }

          .ecosystem-icon-wrapper {
            width: 36px;
            height: 36px;
          }

          .ecosystem-icon {
            width: 16px;
            height: 16px;
          }

          .ecosystem-badge {
            padding: 4px 8px;

            font-size: 7px;
          }

          .ecosystem-card-title {
            margin-bottom: 8px;

            font-size: 13px;
          }

          .ecosystem-card-description {
            margin-bottom: 16px;

            font-size: 11.5px;

            line-height: 1.65;
          }

          .ecosystem-card-footer {
            padding-top: 11px;
          }

          .ecosystem-card-link {
            font-size: 10.5px;
          }

          .ecosystem-link-icon {
            width: 12px;
            height: 12px;
          }
        }

        /* =================================================
           EXTRA SMALL
           <= 360px
        ================================================= */

        @media (max-width: 360px) {

          .ecosystem-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .ecosystem-heading {
            font-size: 23px;
          }

          .ecosystem-subheading {
            font-size: 11px;
          }

          .ecosystem-card {
            padding: 16px;
          }

          .ecosystem-card-title {
            font-size: 12.5px;
          }

          .ecosystem-card-description {
            font-size: 11px;
          }

          .ecosystem-badge {
            font-size: 6.5px;
          }
        }

      `}</style>
    </section>
  );
}