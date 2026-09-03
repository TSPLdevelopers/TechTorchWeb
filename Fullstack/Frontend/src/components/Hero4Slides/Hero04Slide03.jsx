import React, { useState } from "react";
import {
  Target,
  BrainCircuit,
  Cloud,
  IdCard,
  Repeat2,
  FolderKanban,
  Settings2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const MAROON = "#7a1338";
const CREAM = "#f7f4ef";

const cards = [
  {
    id: "it-consultancy",
    icon: Target,
    title: "IT Consultancy",
    description:
      "We help you assess your technology, identify opportunities and create a clear direction aligned with your business goals.",
    cta: "Explore IT Consultancy",
  },
  {
    id: "ai",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "We help businesses apply AI to automate processes, improve insights and create smarter ways of working.",
    cta: "Explore AI Services",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "We build and modernize cloud environments that improve flexibility, reliability, performance and scalability.",
    cta: "Explore Cloud Services",
  },
  {
    id: "staffing",
    icon: IdCard,
    title: "Resource & Staffing",
    description:
      "We provide skilled technology professionals and flexible resources to support projects and evolving business requirements.",
    cta: "Explore Staffing Services",
  },
  {
    id: "bpo",
    icon: Repeat2,
    title: "Business Process Outsourcing",
    description:
      "We support essential business processes so your teams can focus on strategic priorities and growth.",
    cta: "Explore BPO Services",
  },
  {
    id: "software-dev-support",
    icon: FolderKanban,
    title: "Software Development & Support",
    description:
      "We develop, maintain and improve software to keep your systems reliable and ready for changing needs.",
    cta: "Explore Software Development",
  },
  {
    id: "software-engineering",
    icon: Settings2,
    title: "Software Engineering",
    description:
      "We design and develop reliable software solutions around your business requirements.",
    cta: "Explore Software Engineering",
  },
  {
    id: "cybersecurity",
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "We help businesses strengthen security, reduce risk and protect critical systems and information.",
    cta: "Explore Cybersecurity",
  },
];

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 280;
const CARD_GAP = 37;

const totalPages = Math.ceil(cards.length / VISIBLE_CARDS);

export default function TechnologyServicesSection() {
  const [page, setPage] = useState(0);

  const goPrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const goNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  return (
    <section className="technology-services-section">
      <div className="technology-services-container">
        {/* ================= HEADING ================= */}

        <div className="services-header">
          <div className="services-header-content">
            <h2>OUR TECHNOLOGY SERVICES</h2>

            <p>
              We provide practical technology services that help businesses
              modernize, improve efficiency and solve complex challenges. From
              software and cloud to AI, cybersecurity and technical expertise,
              our solutions are built around your business needs.
            </p>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="slider-controls">
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="slider-control"
              aria-label="Previous cards"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              onClick={goNext}
              disabled={page === totalPages - 1}
              className="slider-control"
              aria-label="Next cards"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        {/* ================= SLIDER ================= */}

        <div className="cards-viewport">
          <div
            className="cards-track"
            style={{
              transform: `translateX(-${
                page * VISIBLE_CARDS * (CARD_WIDTH + CARD_GAP)
              }px)`,
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="service-card"
                  style={{
                    flex: `0 0 ${CARD_WIDTH}px`,
                  }}
                >
                  {/* ================= ICON ================= */}

                  <div className="service-icon">
                    <Icon
                      size={23}
                      color="#ffffff"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* ================= TITLE ================= */}

                  <h3>{card.title}</h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p>{card.description}</p>

                  {/* ================= CTA ================= */}

                  <a href="#">
                    {card.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .technology-services-section {
          position: relative;
          padding: 60px 80px;

          background: ${MAROON};

          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 0px,
              rgba(255,255,255,0.08) 1px,
              transparent 1px,
              transparent 90px
            );

          font-family: "Plus Jakarta Sans", sans-serif;

          overflow: hidden;
          box-sizing: border-box;
        }

        /* ================= CONTAINER ================= */

        .technology-services-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        /* ================= HEADER ================= */

        .services-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          gap: 30px;

          margin-bottom: 40px;
        }

        .services-header-content {
          max-width: 640px;
        }

        .services-header h2 {
          font-size: 24px;
          font-weight: 700;

          letter-spacing: 0.5px;

          color: #ffffff;

          margin: 0 0 16px;
        }

        .services-header p {
          font-size: 15px;
          line-height: 1.7;

          color: #e9d3dd;

          margin: 0;
        }

        /* ================= CONTROLS ================= */

        .slider-controls {
          display: flex;
          gap: 12px;

          flex-shrink: 0;
        }

        .slider-control {
          width: 40px;
          height: 40px;

          border-radius: 50%;
          border: none;

          background: #ffffff;
          color: ${MAROON};

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .slider-control:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .slider-control:disabled {
          opacity: 0.5;
          cursor: default;
        }

        /* ================= VIEWPORT ================= */

        .cards-viewport {
          width: 100%;
          overflow: hidden;
        }

        /* ================= TRACK ================= */

        .cards-track {
          display: flex;

          gap: ${CARD_GAP}px;

          /*
            Cards ko halka sa right side shift
          */
          padding-left: 20px;

          box-sizing: border-box;

          transition: transform 0.45s ease;

          will-change: transform;
        }

        /* ================= CARD ================= */

        .service-card {
          background: ${CREAM};

          border: 1px solid #e6b8cf;
          border-radius: 14px;

          min-height: 330px;

          padding: 30px 28px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          flex-shrink: 0;
        }

        /* ================= ICON ================= */

        .service-icon {
          width: 50px;
          height: 50px;

          border-radius: 50%;

          background: ${MAROON};

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 22px;
        }

        /* ================= TITLE ================= */

        .service-card h3 {
          font-size: 18px;
          font-weight: 700;

          line-height: 1.3;

          color: #1a1a1a;

          margin: 0 0 13px;
        }

        /* ================= DESCRIPTION ================= */

        .service-card p {
          font-size: 14px;
          line-height: 1.65;

          color: #555555;

          margin: 0 0 22px;

          flex-grow: 1;
        }

        /* ================= LINK ================= */

        .service-card a {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          font-size: 14px;
          font-weight: 700;

          color: #1a1a1a;

          text-decoration: none;

          transition: gap 0.2s ease;
        }

        .service-card a:hover {
          gap: 11px;
        }

        /* ================= LAPTOP ================= */

        @media (max-width: 1300px) {
          .technology-services-section {
            padding: 60px 50px;
          }

          .cards-track {
            padding-left: 18px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .technology-services-section {
            padding: 55px 35px;
          }

          .services-header {
            gap: 25px;
          }

          .cards-track {
            padding-left: 12px;
          }

          .service-card {
            min-height: 320px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 768px) {
          .technology-services-section {
            padding: 50px 25px;
          }

          .services-header {
            flex-direction: column;
          }

          .services-header-content {
            max-width: 100%;
          }

          .slider-controls {
            align-self: flex-start;
          }

          .services-header h2 {
            font-size: 22px;
          }

          .cards-track {
            padding-left: 8px;
          }

          .service-card {
            min-height: 310px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .technology-services-section {
            padding: 42px 20px;
          }

          .services-header {
            margin-bottom: 30px;
          }

          .services-header h2 {
            font-size: 20px;
          }

          .services-header p {
            font-size: 14px;
          }

          .cards-track {
            padding-left: 5px;
          }

          .service-card {
            min-height: 300px;
            padding: 26px 22px;
          }
        }
      `}</style>
    </section>
  );
}