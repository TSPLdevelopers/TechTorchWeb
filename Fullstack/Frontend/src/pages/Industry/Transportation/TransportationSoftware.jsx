import React, { useEffect, useRef, useState } from "react";

const capabilities = [
  { num: "01", title: "Custom Software" },
  { num: "02", title: "Web & Mobile Applications" },
  { num: "03", title: "Enterprise Software" },
  { num: "04", title: "API & System Integration" },
  { num: "05", title: "Software Modernization" },
  { num: "06", title: "Testing & Quality Assurance" },
  { num: "07", title: "Maintenance & Support" },
];

export default function SoftwareCapabilitiesGridSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards([]);

          capabilities.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 160);
          });
        } else {
          setVisibleCards([]);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="software-capabilities-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .software-capabilities-section {
          width: 100%;
          overflow: hidden;

          background: #3d0d28;
          color: #ffffff;

          font-family: "Inter", sans-serif;
        }

        .software-capabilities-section *,
        .software-capabilities-section *::before,
        .software-capabilities-section *::after {
          box-sizing: border-box;
        }

        /* =========================================
           MAIN CONTAINER
           
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .software-capabilities-container {
          width: 100%;
          max-width: 1440px;

          margin: 0 auto;

          padding: 88px 100px;
        }

        /* =========================================
           TOP BADGE
        ========================================= */

        .software-capabilities-badge {
          display: inline-flex;
          align-items: center;

          margin-bottom: 18px;

          padding: 7px 12px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.1);
          color: #e3c3cf;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.1em;
        }

        /* =========================================
           HEADING
           PLUS JAKARTA SANS
        ========================================= */

        .software-capabilities-heading {
          max-width: 800px;

          margin: 0 0 17px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(30px, 3.4vw, 43px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.04em;
        }

        /* =========================================
           SUBHEADING
           PLUS JAKARTA SANS
        ========================================= */

        .software-capabilities-subheading {
          max-width: 720px;

          margin: 0 0 48px;

          color: #d9b7c4;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* =========================================
           GRID
        ========================================= */

        .software-capabilities-grid {
          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 16px;
        }

        /* =========================================
           CARD
        ========================================= */

        .software-capability-card {
          position: relative;

          min-height: 145px;

          padding: 22px 20px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;

          background: rgba(255, 255, 255, 0.06);

          overflow: hidden;

          opacity: 0;

          transform:
            translateY(45px)
            scale(0.94);

          transition:
            opacity 0.65s ease,
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        /* =========================================
           CARD VISIBLE STATE
        ========================================= */

        .software-capability-card.is-visible {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =========================================
           CARD HOVER
        ========================================= */

        .software-capability-card:hover {
          background: rgba(255, 255, 255, 0.1);

          border-color: rgba(255, 255, 255, 0.18);

          box-shadow:
            0 14px 35px rgba(0, 0, 0, 0.15);

          transform:
            translateY(-5px)
            scale(1.01);
        }

        /* =========================================
           CARD SHINE EFFECT
        ========================================= */

        .software-capability-card::after {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 70%;
          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.07),
            transparent
          );

          transform: skewX(-18deg);

          transition: left 0.7s ease;

          pointer-events: none;
        }

        .software-capability-card:hover::after {
          left: 130%;
        }

        /* =========================================
           CAPABILITY NUMBER
           INTER
        ========================================= */

        .software-capability-number {
          margin: 0 0 25px;

          color: #c48fa4;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.1em;
        }

        /* =========================================
           CARD TITLE
           PLUS JAKARTA SANS
        ========================================= */

        .software-capability-title {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
        }

        /* =========================================
           LARGE TABLET
           100px → 40px
        ========================================= */

        @media (max-width: 1200px) {
          .software-capabilities-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 82px;
            padding-bottom: 82px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .software-capabilities-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 76px;
            padding-bottom: 76px;
          }

          .software-capabilities-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .software-capabilities-subheading {
            margin-bottom: 40px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 800px) {
          .software-capabilities-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 68px;
            padding-bottom: 68px;
          }

          .software-capabilities-heading {
            font-size: 34px;
          }

          .software-capabilities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .software-capability-card {
            min-height: 140px;
          }
        }

        /* =========================================
           MOBILE
           40px → 24px
        ========================================= */

        @media (max-width: 600px) {
          .software-capabilities-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 58px;
            padding-bottom: 58px;
          }

          .software-capabilities-badge {
            margin-bottom: 14px;

            padding: 6px 10px;

            font-size: 8px;
          }

          .software-capabilities-heading {
            margin-bottom: 15px;

            font-size: 28px;
            line-height: 1.25;
            letter-spacing: -0.035em;
          }

          .software-capabilities-subheading {
            margin-bottom: 32px;

            font-size: 11.5px;
            line-height: 1.75;
          }

          .software-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .software-capability-card {
            min-height: 125px;

            padding: 20px 18px;

            border-radius: 12px;
          }

          .software-capability-number {
            margin-bottom: 20px;

            font-size: 8.5px;
          }

          .software-capability-title {
            font-size: 12px;
          }
        }

        /* =========================================
           SMALL MOBILE
           24px → 16px
        ========================================= */

        @media (max-width: 400px) {
          .software-capabilities-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .software-capabilities-heading {
            font-size: 25px;
          }

          .software-capabilities-subheading {
            font-size: 11px;
          }

          .software-capability-card {
            min-height: 115px;

            padding: 18px 16px;
          }

          .software-capability-title {
            font-size: 11.5px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .software-capability-card {
            transition: none;

            opacity: 1;
            transform: none;
          }

          .software-capability-card::after {
            display: none;
          }
        }
      `}</style>

      <div className="software-capabilities-container">

        {/* =====================================
            BADGE
        ===================================== */}

        <span className="software-capabilities-badge">
          SOFTWARE &amp; ENGINEERING
        </span>

        {/* =====================================
            HEADING
        ===================================== */}

        <h2 className="software-capabilities-heading">
          Build Technology Around Your Requirements
        </h2>

        {/* =====================================
            SUBHEADING
        ===================================== */}

        <p className="software-capabilities-subheading">
          When existing systems need improvement or new applications are
          required, TechTorch provides software engineering across the
          development lifecycle.
        </p>

        {/* =====================================
            CAPABILITIES GRID
        ===================================== */}

        <div className="software-capabilities-grid">
          {capabilities.map(({ num, title }, index) => (
            <div
              key={num}
              className={`software-capability-card ${
                visibleCards.includes(index) ? "is-visible" : ""
              }`}
            >
              <p className="software-capability-number">
                CAPABILITY {num}
              </p>

              <h3 className="software-capability-title">
                {title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}