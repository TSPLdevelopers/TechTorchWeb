import React from "react";
import {
  CloudOff,
  Gauge,
  ShieldCheck,
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
    icon: CloudOff,
    title: "Zero Capital Infrastructure Burden",
    description:
      "Bypass multi-million dollar hardware procurement cycles, specialized GPU cluster maintenance, and specialized data-center cooling overhead.",
    linkLabel: "Architectural Efficiency",
    featured: false,
  },
  {
    icon: Gauge,
    title: "Rapid Enterprise Model Deployment",
    description:
      "Integrate advanced cognitive workflows, LLM orchestration, and enterprise predictive models immediately into your operational stack without delay.",
    linkLabel: "Accelerated Time-to-Value",
    featured: true,
    badge: "CORE BENEFIT",
    linkIcon: CircleCheck,
  },
  {
    icon: ShieldCheck,
    title: "Governed & Scalable Operations",
    description:
      "Benefit from institutional-grade model safety, compliance isolation, continuous data privacy protocols, and automatic capacity auto-scaling.",
    linkLabel: "Enterprise Compliance",
    featured: false,
  },
];

// =================================================
// COMPONENT
// =================================================

export default function WhyAIAsAService() {
  return (
    <section className="why-ai-section">
      <div className="why-ai-container">

        {/* =================================================
            EYEBROW
        ================================================= */}

        <div className="why-ai-eyebrow">
          <span className="why-ai-eyebrow-line"></span>

          <span className="why-ai-eyebrow-text">
            Architectural Advantage
          </span>
        </div>

        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <h1 className="why-ai-heading">
          Why Artificial Intelligence as a Service?
        </h1>

        {/* =================================================
            SUB HEADING
        ================================================= */}

        <h2 className="why-ai-subheading">
          Access AI Without Building the Entire Infrastructure
        </h2>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p className="why-ai-description">
          Building and maintaining technology infrastructure can add
          complexity to an organization's technology environment. TechTorch's
          Artificial Intelligence as a Service approach enables businesses to
          harness AI capabilities without taking on the complete
          responsibility of building and maintaining their own
          infrastructure.
        </p>

        {/* =================================================
            CARDS
        ================================================= */}

        <div className="why-ai-cards">
          {cards.map((card) => {
            const Icon = card.icon;
            const LinkIcon = card.linkIcon || ArrowRight;

            return (
              <div className="why-ai-card" key={card.title}>

                {/* ICON + BADGE */}
                <div className="why-ai-card-top">
                  <div className="why-ai-icon">
                    <Icon className="why-ai-icon-svg" />
                  </div>

                  {card.badge && (
                    <span className="why-ai-badge">
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* CARD HEADING */}
                <h3 className="why-ai-card-title">
                  {card.title}
                </h3>

                {/* CARD DESCRIPTION */}
                <p className="why-ai-card-description">
                  {card.description}
                </p>

                {/* CARD LINK */}
                <div className="why-ai-card-footer">
                  <a href="#" className="why-ai-card-link">
                    <span>{card.linkLabel}</span>

                    <LinkIcon className="why-ai-link-icon" />
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

        .why-ai-section {
          width: 100%;
          overflow: hidden;
          background: #f2f1ef;
        }

        /* =================================================
           MAIN CONTAINER
        ================================================= */

        .why-ai-container {
          width: 100%;
          box-sizing: border-box;

          /*
            Small Mobile: 16px
            Mobile: 24px
            Tablet: 40px
            Desktop: 100px
          */

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 64px;
          padding-bottom: 64px;
        }

        /* =================================================
           EYEBROW
        ================================================= */

        .why-ai-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 14px;
        }

        .why-ai-eyebrow-line {
          width: 32px;
          height: 1px;
          flex-shrink: 0;
          background: ${MAROON};
        }

        .why-ai-eyebrow-text {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.08em;
          color: ${MAROON};
        }

        /* =================================================
           MAIN HEADING
        ================================================= */

        .why-ai-heading {
          max-width: 850px;

          margin: 0 0 10px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =================================================
           SUB HEADING
        ================================================= */

        .why-ai-subheading {
          margin: 0 0 12px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;

          color: ${MAROON};
        }

        /* =================================================
           DESCRIPTION
        ================================================= */

        .why-ai-description {
          max-width: 850px;

          margin: 0 0 48px 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;

          color: #737373;
        }

        /* =================================================
           CARDS CONTAINER
        ================================================= */

        .why-ai-cards {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 24px;
        }

        /* =================================================
           CARD
        ================================================= */

        .why-ai-card {
          min-width: 0;
          min-height: 280px;

          display: flex;
          flex-direction: column;

          box-sizing: border-box;

          padding: 24px;

          border: 1px solid #e5e5e5;
          border-radius: 12px;

          background: #ffffff;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .why-ai-card:hover {
          transform: translateY(-5px);

          border-color: rgba(115, 0, 36, 0.15);

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.08);
        }

        /* =================================================
           CARD TOP
        ================================================= */

        .why-ai-card-top {
          width: 100%;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 22px;
        }

        /* =================================================
           ICON
        ================================================= */

        .why-ai-icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border: 1px solid rgba(115, 0, 36, 0.15);
          border-radius: 8px;

          background: rgba(115, 0, 36, 0.05);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .why-ai-card:hover .why-ai-icon {
          transform: scale(1.05);
          background: rgba(115, 0, 36, 0.08);
        }

        .why-ai-icon-svg {
          width: 20px;
          height: 20px;

          color: ${MAROON};

          transition: transform 0.3s ease;
        }

        .why-ai-card:hover .why-ai-icon-svg {
          transform: scale(1.2);
        }

        /* =================================================
           BADGE
        ================================================= */

        .why-ai-badge {
          flex-shrink: 0;

          padding: 5px 10px;

          border-radius: 999px;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.06em;

          white-space: nowrap;

          color: #ffffff;
          background: ${MAROON};
        }

        /* =================================================
           CARD TITLE
        ================================================= */

        .why-ai-card-title {
          margin: 0 0 10px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;

          color: #1c1c1c;
        }

        /* =================================================
           CARD DESCRIPTION
        ================================================= */

        .why-ai-card-description {
          flex: 1;

          margin: 0 0 20px 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;

          color: #737373;
        }

        /* =================================================
           CARD FOOTER
        ================================================= */

        .why-ai-card-footer {
          width: 100%;

          padding-top: 14px;

          border-top: 1px solid #eeeeee;
        }

        /* =================================================
           CARD LINK
        ================================================= */

        .why-ai-card-link {
          display: inline-flex;
          align-items: center;

          gap: 5px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;

          text-decoration: none;

          color: ${MAROON};

          transition: gap 0.3s ease;
        }

        .why-ai-card-link:hover {
          gap: 9px;
        }

        .why-ai-link-icon {
          width: 14px;
          height: 14px;

          flex-shrink: 0;

          transition: transform 0.3s ease;
        }

        .why-ai-card:hover .why-ai-link-icon {
          transform: translateX(2px);
        }

        /* =================================================
           LARGE TABLET
           <= 1200px
        ================================================= */

        @media (max-width: 1200px) {
          .why-ai-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 56px;
            padding-bottom: 56px;
          }

          .why-ai-heading {
            font-size: 35px;
          }

          .why-ai-cards {
            gap: 20px;
          }

          .why-ai-card {
            padding: 22px;
          }
        }

        /* =================================================
           TABLET
           <= 900px
        ================================================= */

        @media (max-width: 900px) {
          .why-ai-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .why-ai-heading {
            max-width: 750px;

            font-size: 32px;
          }

          .why-ai-subheading {
            font-size: 18px;
          }

          .why-ai-description {
            max-width: 750px;

            margin-bottom: 38px;

            font-size: 13px;
          }

          .why-ai-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .why-ai-card {
            min-height: 270px;

            padding: 20px;
          }

          .why-ai-card-title {
            font-size: 14px;
          }

          .why-ai-card-description {
            font-size: 12.5px;
          }
        }

        /* =================================================
           MOBILE
           <= 700px
        ================================================= */

        @media (max-width: 700px) {
          .why-ai-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .why-ai-eyebrow {
            gap: 7px;

            margin-bottom: 12px;
          }

          .why-ai-eyebrow-line {
            width: 26px;
          }

          .why-ai-eyebrow-text {
            font-size: 10px;
          }

          .why-ai-heading {
            max-width: 100%;

            margin-bottom: 9px;

            font-size: 28px;
            line-height: 1.22;
          }

          .why-ai-subheading {
            margin-bottom: 10px;

            font-size: 17px;
            line-height: 1.4;
          }

          .why-ai-description {
            max-width: 100%;

            margin-bottom: 32px;

            font-size: 12.5px;
            line-height: 1.7;
          }

          .why-ai-cards {
            grid-template-columns: 1fr;

            gap: 16px;
          }

          .why-ai-card {
            min-height: auto;

            padding: 20px;
          }

          .why-ai-card-top {
            margin-bottom: 18px;
          }

          .why-ai-card-title {
            font-size: 14px;
          }

          .why-ai-card-description {
            margin-bottom: 18px;

            font-size: 12px;
          }

          .why-ai-card-link {
            font-size: 11px;
          }
        }

        /* =================================================
           SMALL MOBILE
           <= 480px
        ================================================= */

        @media (max-width: 480px) {
          .why-ai-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 36px;
            padding-bottom: 36px;
          }

          .why-ai-eyebrow {
            margin-bottom: 10px;
          }

          .why-ai-eyebrow-line {
            width: 22px;
          }

          .why-ai-eyebrow-text {
            font-size: 9px;
            letter-spacing: 0.07em;
          }

          .why-ai-heading {
            font-size: 25px;
            line-height: 1.2;
          }

          .why-ai-subheading {
            font-size: 16px;
            line-height: 1.45;
          }

          .why-ai-description {
            margin-bottom: 28px;

            font-size: 11.5px;
            line-height: 1.7;
          }

          .why-ai-cards {
            gap: 14px;
          }

          .why-ai-card {
            padding: 18px;

            border-radius: 10px;
          }

          .why-ai-card-top {
            margin-bottom: 16px;
          }

          .why-ai-icon {
            width: 38px;
            height: 38px;
          }

          .why-ai-icon-svg {
            width: 19px;
            height: 19px;
          }

          .why-ai-badge {
            padding: 4px 8px;

            font-size: 7px;
          }

          .why-ai-card-title {
            margin-bottom: 8px;

            font-size: 13.5px;
          }

          .why-ai-card-description {
            margin-bottom: 16px;

            font-size: 11.5px;
            line-height: 1.65;
          }

          .why-ai-card-footer {
            padding-top: 12px;
          }

          .why-ai-card-link {
            font-size: 10.5px;
          }

          .why-ai-link-icon {
            width: 12px;
            height: 12px;
          }
        }

        /* =================================================
           EXTRA SMALL DEVICES
           <= 360px
        ================================================= */

        @media (max-width: 360px) {
          .why-ai-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .why-ai-heading {
            font-size: 23px;
          }

          .why-ai-subheading {
            font-size: 15px;
          }

          .why-ai-description {
            font-size: 11px;
          }

          .why-ai-card {
            padding: 16px;
          }

          .why-ai-badge {
            font-size: 6.5px;
            padding: 4px 7px;
          }
        }
      `}</style>
    </section>
  );
}