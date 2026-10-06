import React, { useEffect, useRef, useState } from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    tag: "PROCUREMENT",
    body: "Manage purchasing and supplier activities.",
  },
  {
    num: "02",
    tag: "INVENTORY",
    body: "Maintain visibility across inventory information.",
  },
  {
    num: "03",
    tag: "LOGISTICS",
    body: "Support transportation, shipment and freight processes.",
  },
  {
    num: "04",
    tag: "SUPPLIER MANAGEMENT",
    body: "Improve coordination and communication with suppliers.",
  },
];

export default function SupplyChainProcurementSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let timers = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timers.forEach((timer) => clearTimeout(timer));
          timers = [];

          setVisibleCards([]);

          cards.forEach((_, index) => {
            const timer = setTimeout(() => {
              setVisibleCards((prev) => {
                if (prev.includes(index)) return prev;
                return [...prev, index];
              });
            }, index * 170);

            timers.push(timer);
          });
        } else {
          timers.forEach((timer) => clearTimeout(timer));
          timers = [];

          setVisibleCards([]);
        }
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(section);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="supply-chain-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .supply-chain-section {
          width: 100%;
          overflow: hidden;

          background: #f7f5f2;
          color: ${INK};

          font-family: "Inter", sans-serif;

          box-sizing: border-box;
        }

        .supply-chain-section *,
        .supply-chain-section *::before,
        .supply-chain-section *::after {
          box-sizing: border-box;
        }

        .supply-chain-container {
          width: 100%;
          max-width: 1440px;

          margin: 0 auto;

          padding: 88px 100px;

          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);

          gap: 70px;

          align-items: center;
        }

        /* =========================================
           IMAGE
        ========================================= */

        .supply-chain-image-card {
          width: 100%;

          padding: 9px;

          border-radius: 22px;

          background: #ffffff;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 14px 35px rgba(30, 20, 25, 0.045);

          overflow: hidden;

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .supply-chain-image-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 14px 35px rgba(30, 20, 25, 0.10);
        }

        .supply-chain-image-wrapper {
          position: relative;

          width: 100%;
          height: 440px;

          overflow: hidden;

          border-radius: 16px;

          background: #dfe3e6;
        }

        .supply-chain-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.7s ease;
        }

        .supply-chain-image-card:hover
        .supply-chain-image {
          transform: scale(1.045);
        }

        /* =========================================
           IMAGE OVERLAY
        ========================================= */

        .supply-chain-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(15, 18, 25, 0.02) 35%,
              rgba(15, 18, 25, 0.22) 100%
            );

          pointer-events: none;
        }

        /* =========================================
           IMAGE LABEL
        ========================================= */

        .supply-chain-image-label {
          position: absolute;

          top: 18px;
          left: 18px;

          padding: 7px 11px;

          border-radius: 6px;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.08em;
        }

        /* =========================================
           CONTENT
        ========================================= */

        .supply-chain-content {
          min-width: 0;
        }

        /* =========================================
           SECTION LABEL
           INTER
        ========================================= */

        .supply-chain-section-label {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.13em;
        }

        /* =========================================
           HEADING
           PLUS JAKARTA SANS
        ========================================= */

        .supply-chain-heading {
          max-width: 650px;

          margin: 0 0 20px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(31px, 3.4vw, 43px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.045em;
        }

        /* =========================================
           SUBHEADING
           PLUS JAKARTA SANS
        ========================================= */

        .supply-chain-subheading {
          max-width: 650px;

          margin: 0 0 32px;

          color: ${MUTED};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.8;
        }

        /* =========================================
           CARDS GRID
        ========================================= */

        .supply-chain-cards {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 13px;
        }

        /* =========================================
           CARD
        ========================================= */

        .supply-chain-card {
          position: relative;

          min-height: 145px;

          padding: 19px;

          border-radius: 13px;

          background: #ffffff;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05);

          overflow: hidden;

          opacity: 0;

          transform:
            translateY(38px)
            scale(0.95);

          transition:
            opacity 0.65s ease,
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        /* =========================================
           VISIBLE CARD
        ========================================= */

        .supply-chain-card.is-visible {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =========================================
           HOVER
        ========================================= */

        .supply-chain-card:hover {
          background: #fffdfd;

          box-shadow:
            0 12px 28px rgba(40, 15, 30, 0.09);

          transform:
            translateY(-5px)
            scale(1.01);
        }

        /* =========================================
           CARD NUMBER
           INTER
        ========================================= */

        .supply-chain-card-number {
          margin: 0 0 7px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.2;
        }

        /* =========================================
           CARD TAG
           INTER
        ========================================= */

        .supply-chain-card-tag {
          margin: 0 0 8px;

          color: ${INK};

          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.07em;
        }

        /* =========================================
           CARD BODY
           INTER
        ========================================= */

        .supply-chain-card-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           CARD BOTTOM LINE
        ========================================= */

        .supply-chain-card::after {
          content: "";

          position: absolute;

          left: 19px;
          right: 19px;
          bottom: 0;

          height: 2px;

          background: ${WINE};

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 0.4s ease;
        }

        .supply-chain-card:hover::after {
          transform: scaleX(1);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .supply-chain-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 82px;
            padding-bottom: 82px;

            gap: 55px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .supply-chain-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 76px;
            padding-bottom: 76px;

            gap: 48px;
          }

          .supply-chain-image-wrapper {
            height: 390px;
          }

          .supply-chain-heading {
            font-size: 36px;
          }

          .supply-chain-subheading {
            font-size: 12.5px;
          }
        }

        /* =========================================
           MOBILE / TABLET
        ========================================= */

        @media (max-width: 850px) {
          .supply-chain-container {
            grid-template-columns: 1fr;

            gap: 42px;

            padding-left: 40px;
            padding-right: 40px;

            padding-top: 70px;
            padding-bottom: 70px;
          }

          .supply-chain-image-card {
            max-width: 760px;

            margin: 0 auto;

            order: 1;
          }

          .supply-chain-content {
            order: 2;

            width: 100%;
            max-width: 760px;

            margin: 0 auto;
          }

          .supply-chain-image-wrapper {
            height: 390px;
          }

          .supply-chain-heading {
            font-size: 34px;
          }

          .supply-chain-subheading {
            max-width: 700px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .supply-chain-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 58px;
            padding-bottom: 58px;

            gap: 34px;
          }

          .supply-chain-image-card {
            padding: 7px;

            border-radius: 17px;
          }

          .supply-chain-image-wrapper {
            height: 280px;

            border-radius: 12px;
          }

          .supply-chain-image-label {
            top: 12px;
            left: 12px;

            padding: 6px 9px;

            font-size: 8px;
          }

          .supply-chain-section-label {
            margin-bottom: 11px;

            font-size: 9px;
            letter-spacing: 0.11em;
          }

          .supply-chain-heading {
            margin-bottom: 17px;

            font-size: 28px;
            line-height: 1.25;
            letter-spacing: -0.035em;
          }

          .supply-chain-subheading {
            margin-bottom: 27px;

            font-size: 11.5px;
            line-height: 1.75;
          }

          .supply-chain-cards {
            grid-template-columns: 1fr;

            gap: 11px;
          }

          .supply-chain-card {
            min-height: 135px;

            padding: 18px;
          }

          .supply-chain-card-number {
            font-size: 17px;
          }

          .supply-chain-card-tag {
            font-size: 9px;
          }

          .supply-chain-card-body {
            font-size: 10.5px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .supply-chain-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .supply-chain-image-wrapper {
            height: 235px;
          }

          .supply-chain-heading {
            font-size: 25px;
          }

          .supply-chain-subheading {
            font-size: 11px;
          }

          .supply-chain-card {
            min-height: 125px;

            padding: 16px;
          }

          .supply-chain-card-body {
            font-size: 10px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .supply-chain-card {
            opacity: 1;
            transform: none;

            transition: none;
          }

          .supply-chain-image,
          .supply-chain-image-card {
            transition: none;
          }
        }
      `}</style>

      <div className="supply-chain-container">

        {/* =====================================
            LEFT IMAGE
        ===================================== */}

        <div className="supply-chain-image-card">
          <div className="supply-chain-image-wrapper">

            <img
              src="/supply-chain-logistics.png"
              alt="Supply chain and logistics operations"
              className="supply-chain-image"
            />

            <div className="supply-chain-image-overlay" />

            <span className="supply-chain-image-label">
              SUPPLY CHAIN OPERATIONS
            </span>

          </div>
        </div>

        {/* =====================================
            RIGHT CONTENT
        ===================================== */}

        <div className="supply-chain-content">

          <p className="supply-chain-section-label">
            SUPPLY CHAIN &amp; LOGISTICS
          </p>

          <h2 className="supply-chain-heading">
            Connect Procurement to Delivery
          </h2>

          <p className="supply-chain-subheading">
            TechTorch's Supply Chain Management solution supports
            visibility across inventory, orders, suppliers and logistics,
            with capabilities including logistics management, shipment
            tracking, route planning and freight management.
          </p>

          {/* =====================================
              CARDS
          ===================================== */}

          <div className="supply-chain-cards">
            {cards.map(({ num, tag, body }, index) => (
              <div
                key={num}
                className={`supply-chain-card ${
                  visibleCards.includes(index) ? "is-visible" : ""
                }`}
              >
                <p className="supply-chain-card-number">
                  {num}
                </p>

                <p className="supply-chain-card-tag">
                  {tag}
                </p>

                <p className="supply-chain-card-body">
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}