import React, { useEffect, useRef } from "react";
import {
  FileSearch,
  Wand2,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: FileSearch,
    label: "REQUIREMENT ANALYSIS",
    title: "UNDERSTAND",
    body: "Understand your business objectives and technology requirements.",
    footer: "Phase 01 • Discovery",
  },
  {
    num: "02",
    icon: Wand2,
    label: "SOLUTION ARCHITECTURE",
    title: "DESIGN & DEVELOP",
    body: "Plan and develop the solution around your requirements.",
    footer: "Phase 02 • Engineering",
  },
  {
    num: "03",
    icon: ShieldCheck,
    label: "QUALITY VERIFICATION",
    title: "TEST & DEPLOY",
    body: "Test the solution and prepare it for implementation.",
    footer: "Phase 03 • Validation",
  },
  {
    num: "04",
    icon: Headphones,
    label: "CONTINUOUS EVOLUTION",
    title: "SUPPORT & MAINTAIN",
    body: "Provide ongoing support and maintenance as requirements evolve.",
    footer: "Phase 04 • Lifecycle",
  },
];

export default function ConnectedApproachStepsSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;

          if (entry.isIntersecting) {
            const index = Number(card.dataset.index);

            setTimeout(() => {
              card.classList.add("approach-card-visible");
            }, index * 180);
          } else {
            card.classList.remove("approach-card-visible");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="connected-approach-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .connected-approach-section {
          width: 100%;
          overflow: hidden;
          background: #f5f6f8;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        .connected-approach-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 85px 32px;
        }

        /* =========================================
           SECTION BADGE
        ========================================= */

        .approach-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin: 0 0 18px;
          padding: 6px 11px;

          border-radius: 999px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.08em;
        }

        .approach-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: ${WINE};
        }

        /* =========================================
           HEADING
        ========================================= */

        .approach-heading {
          margin: 0 0 14px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3.4vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        /* =========================================
           SUBHEADING
        ========================================= */

        .approach-subheading {
          max-width: 720px;

          margin: 0 0 48px;

          color: ${MUTED};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* =========================================
           CARDS AREA
        ========================================= */

        .approach-cards-wrapper {
          position: relative;

          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 0;
        }

        /* =========================================
           CONNECTING LINE
        ========================================= */

        .approach-connecting-line {
          position: absolute;

          top: 51px;
          left: 7%;
          right: 7%;

          height: 1px;

          background: #ddd9d3;

          z-index: 0;
        }

        /* =========================================
           CARD
        ========================================= */

        .approach-card-wrapper {
          position: relative;

          min-width: 0;

          padding: 0 8px;

          z-index: 1;
        }

        .approach-card {
          position: relative;

          width: 100%;
          height: 100%;
          min-height: 285px;

          display: flex;
          flex-direction: column;

          padding: 21px;

          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05);

          opacity: 0;
          transform: translateY(35px) scale(0.97);

          transition:
            opacity 0.65s ease,
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease;
        }

        .approach-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .approach-card:hover {
          transform: translateY(-6px) scale(1);

          box-shadow:
            0 14px 32px rgba(30, 20, 25, 0.09);
        }

        /* =========================================
           CARD TOP
        ========================================= */

        .approach-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .approach-number,
        .approach-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #fbeef1;
          color: ${WINE};
        }

        .approach-number {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
        }

        .approach-icon {
          transition:
            transform 0.35s ease,
            background 0.35s ease;
        }

        .approach-card:hover .approach-icon {
          transform: scale(1.14) rotate(-3deg);
          background: #f8e4e9;
        }

        /* =========================================
           CARD LABEL
        ========================================= */

        .approach-card-label {
          margin: 0 0 7px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.09em;
        }

        /* =========================================
           CARD TITLE
        ========================================= */

        .approach-card-title {
          margin: 0 0 9px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.02em;
        }

        /* =========================================
           CARD BODY
        ========================================= */

        .approach-card-body {
          margin: 0 0 22px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           CARD FOOTER
        ========================================= */

        .approach-card-footer {
          margin-top: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding-top: 13px;

          border-top: 1px solid #ece9e4;
        }

        .approach-card-footer-text {
          color: #a9a6b0;

          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 500;
          line-height: 1.4;
        }

        .approach-card-arrow {
          color: #c9c4bc;

          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .approach-card:hover .approach-card-arrow {
          transform: translateX(4px);
          color: ${WINE};
        }

        /* =========================================
           LARGE TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .connected-approach-container {
            padding: 75px 28px;
          }

          .approach-cards-wrapper {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .approach-connecting-line {
            display: none;
          }

          .approach-card-wrapper {
            padding: 0;
          }

          .approach-card {
            min-height: 280px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 768px) {
          .connected-approach-container {
            padding: 65px 24px;
          }

          .approach-heading {
            font-size: 32px;
          }

          .approach-subheading {
            margin-bottom: 38px;
            font-size: 13px;
          }

          .approach-cards-wrapper {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .approach-card {
            min-height: 275px;
            padding: 19px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .connected-approach-container {
            padding: 55px 20px;
          }

          .approach-badge {
            margin-bottom: 15px;
            font-size: 9px;
          }

          .approach-heading {
            margin-bottom: 13px;

            font-size: 28px;
            line-height: 1.25;
            letter-spacing: -0.03em;
          }

          .approach-subheading {
            margin-bottom: 32px;

            font-size: 12px;
            line-height: 1.75;
          }

          .approach-cards-wrapper {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .approach-card-wrapper {
            width: 100%;
          }

          .approach-card {
            min-height: 0;
            padding: 19px;

            transform: translateY(30px) scale(0.98);
          }

          .approach-card-visible {
            transform: translateY(0) scale(1);
          }

          .approach-card:hover {
            transform: translateY(-4px) scale(1);
          }

          .approach-card-top {
            margin-bottom: 16px;
          }

          .approach-number,
          .approach-icon {
            width: 36px;
            height: 36px;
          }

          .approach-card-label {
            font-size: 8.5px;
          }

          .approach-card-title {
            font-size: 14px;
          }

          .approach-card-body {
            font-size: 11px;
            line-height: 1.7;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .connected-approach-container {
            padding: 48px 16px;
          }

          .approach-heading {
            font-size: 25px;
          }

          .approach-subheading {
            font-size: 11.5px;
          }

          .approach-card {
            padding: 17px;
          }

          .approach-card-title {
            font-size: 13.5px;
          }

          .approach-card-body {
            font-size: 10.5px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .approach-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .approach-card:hover {
            transform: none;
          }

          .approach-icon,
          .approach-card-arrow {
            transition: none;
          }
        }
      `}</style>

      <div className="connected-approach-container">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <span className="approach-badge">
          <span className="approach-badge-dot" />
          OUR APPROACH
        </span>

        <h2 className="approach-heading">
          From Requirement to Support
        </h2>

        <p className="approach-subheading">
          A disciplined engineering workflow structured to deliver
          transparent governance, end-to-end integration, and continuous
          platform evolution.
        </p>

        {/* =====================================
            CARDS
        ===================================== */}

        <div className="approach-cards-wrapper">

          {/* Connecting Line */}
          <div className="approach-connecting-line" />

          {steps.map(
            (
              {
                num,
                icon: Icon,
                label,
                title,
                body,
                footer,
              },
              index
            ) => (
              <div
                key={num}
                className="approach-card-wrapper"
              >
                <div
                  ref={(element) => {
                    cardsRef.current[index] = element;
                  }}
                  data-index={index}
                  className="approach-card"
                >

                  {/* CARD TOP */}

                  <div className="approach-card-top">

                    <span className="approach-number">
                      {num}
                    </span>

                    <span className="approach-icon">
                      <Icon
                        size={16}
                        strokeWidth={1.8}
                      />
                    </span>

                  </div>

                  {/* LABEL */}

                  <p className="approach-card-label">
                    {label}
                  </p>

                  {/* TITLE */}

                  <h3 className="approach-card-title">
                    {title}
                  </h3>

                  {/* BODY */}

                  <p className="approach-card-body">
                    {body}
                  </p>

                  {/* FOOTER */}

                  <div className="approach-card-footer">

                    <span className="approach-card-footer-text">
                      {footer}
                    </span>

                    <ArrowRight
                      size={13}
                      className="approach-card-arrow"
                    />

                  </div>

                </div>
              </div>
            )
          )}

        </div>
      </div>
    </section>
  );
}