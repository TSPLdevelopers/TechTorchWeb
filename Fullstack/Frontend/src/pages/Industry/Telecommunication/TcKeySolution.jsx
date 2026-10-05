import React, { useEffect, useRef, useState } from "react";
import {
  Boxes,
  HeartHandshake,
  SlidersHorizontal,
  LineChart,
  CreditCard,
  Monitor,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  { icon: Boxes, sys: "SYSTEM 01", title: "ERP" },
  { icon: HeartHandshake, sys: "SYSTEM 02", title: "CRM" },
  { icon: SlidersHorizontal, sys: "SYSTEM 03", title: "Operations Management" },
  { icon: LineChart, sys: "SYSTEM 04", title: "Financial Management" },
  { icon: CreditCard, sys: "SYSTEM 05", title: "Payment Management" },
  { icon: Monitor, sys: "SYSTEM 06", title: "Web Portals" },
];

const desc =
  "Technology solutions designed around telecommunications business requirements.";

export default function KeySolutionsGridSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, index * 140);
          });
        } else {
          // Reset so animation plays again when section re-enters viewport
          setVisibleCards([]);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="key-solutions-section"
      style={{
        "--wine": WINE,
        "--ink": INK,
        "--muted": MUTED,
      }}
    >
      <style>{`
        /* =========================================
           FONTS
        ========================================= */

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .key-solutions-section {
          width: 100%;
          background: #ffffff;
          color: var(--ink);
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .key-solutions-container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding: 90px 32px;
        }

        /* =========================================
           HEADER
        ========================================= */

        .key-solutions-header {
          width: 100%;
          max-width: 720px;
          margin: 0 auto 56px;
          text-align: center;
        }

        .key-solutions-label {
          margin: 0 0 14px;
          color: var(--wine);
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .key-solutions-heading {
          margin: 0 0 16px;
          color: var(--ink);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.22;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .key-solutions-description {
          max-width: 620px;
          margin: 0 auto;
          color: var(--muted);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =========================================
           GRID
        ========================================= */

        .key-solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        /* =========================================
           CARD
        ========================================= */

        .solution-card {
          position: relative;
          min-height: 225px;
          padding: 26px;
          background: #ffffff;
          border: 1px solid #ece9e4;
          border-radius: 18px;

          opacity: 0;
          transform: translateY(35px) scale(0.97);

          transition:
            opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .solution-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .solution-card:hover {
          border-color: #dfd4d8;
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 16px 38px rgba(40, 20, 30, 0.08);
        }

        /* =========================================
           TOP ROW
        ========================================= */

        .solution-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 30px;
        }

        /* =========================================
           ICON
        ========================================= */

        .solution-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;
          background: #fbeef1;
          color: var(--wine);

          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .solution-card:hover .solution-icon {
          transform: scale(1.18);
          background: #f8e4e9;
          box-shadow: 0 8px 18px rgba(122, 31, 61, 0.12);
        }

        .solution-icon svg {
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .solution-card:hover .solution-icon svg {
          transform: scale(1.08);
        }

        /* =========================================
           SYSTEM BADGE
        ========================================= */

        .solution-system {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          padding: 6px 10px;
          border-radius: 999px;

          background: #f2f1f5;
          color: var(--muted);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        /* =========================================
           CARD CONTENT
        ========================================= */

        .solution-title {
          margin: 0 0 9px;
          color: var(--ink);

          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: -0.015em;
        }

        .solution-description {
          margin: 0;
          color: var(--muted);

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          line-height: 1.7;
          font-weight: 400;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {
          .key-solutions-container {
            padding: 75px 28px;
          }

          .key-solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .solution-card {
            min-height: 215px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {
          .key-solutions-container {
            padding: 65px 20px;
          }

          .key-solutions-header {
            margin-bottom: 40px;
          }

          .key-solutions-label {
            font-size: 10px;
            margin-bottom: 11px;
          }

          .key-solutions-heading {
            font-size: 27px;
            line-height: 1.28;
          }

          .key-solutions-description {
            font-size: 13.5px;
            line-height: 1.7;
          }

          .key-solutions-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .solution-card {
            min-height: auto;
            padding: 22px;
            border-radius: 16px;
          }

          .solution-card-top {
            margin-bottom: 24px;
          }

          .solution-icon {
            width: 44px;
            height: 44px;
          }

          .solution-title {
            font-size: 15px;
          }

          .solution-description {
            font-size: 12px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .key-solutions-container {
            padding: 55px 16px;
          }

          .key-solutions-heading {
            font-size: 24px;
          }

          .key-solutions-description {
            font-size: 13px;
          }

          .solution-card {
            padding: 20px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .solution-card,
          .solution-icon,
          .solution-icon svg {
            transition: none !important;
          }

          .solution-card {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="key-solutions-container">
        {/* HEADER */}
        <div className="key-solutions-header">
          <p className="key-solutions-label">Key Solutions</p>

          <h2 className="key-solutions-heading">
            Technology Solutions for Telecommunications
          </h2>

          <p className="key-solutions-description">{desc}</p>
        </div>

        {/* CARDS */}
        <div className="key-solutions-grid">
          {cards.map(({ icon: Icon, sys, title }, index) => (
            <div
              key={title}
              className={`solution-card ${
                visibleCards.includes(index) ? "visible" : ""
              }`}
            >
              <div className="solution-card-top">
                <span className="solution-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>

                <span className="solution-system">{sys}</span>
              </div>

              <h3 className="solution-title">{title}</h3>

              <p className="solution-description">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}