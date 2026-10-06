import React, { useEffect, useRef, useState } from "react";
import {
  Monitor,
  Package,
  CreditCard,
  Users,
  LineChart,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: Monitor,
    title: "Storefront Design",
    body: "Create responsive online storefronts that provide customers with an easy way to browse and interact with your business.",
  },
  {
    num: "02",
    icon: Package,
    title: "Product Management",
    body: "Manage product listings, inventory information, pricing and promotions through an organized platform.",
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Payment Processing",
    body: "Support online transactions through payment gateway capabilities designed for the purchasing process.",
  },
  {
    num: "04",
    icon: Users,
    title: "Customer Relationship Tools",
    body: "Manage customer information, preferences and purchase history to support customer engagement and service.",
  },
  {
    num: "05",
    icon: LineChart,
    title: "Analytics & Reporting",
    body: "Review sales performance, customer trends and website activity through reporting and analytics.",
  },
];

function Card({ num, icon: Icon, title, body, index, isVisible }) {
  return (
    <article
      className={`ecommerce-card ${
        isVisible ? "ecommerce-card-visible" : ""
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 140}ms` : "0ms",
      }}
    >
      {/* Top Row */}
      <div className="ecommerce-card-top">
        <span className="ecommerce-card-icon">
          <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
        </span>

        <span className="ecommerce-card-number">{num}</span>
      </div>

      {/* Title */}
      <h3 className="ecommerce-card-title">{title}</h3>

      {/* Description */}
      <p className="ecommerce-card-body">{body}</p>
    </article>
  );
}

export default function EcommerceCapabilitiesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
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
      className="ecommerce-capabilities-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .ecommerce-capabilities-section {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .ecommerce-capabilities-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;
        }

        /* =========================================
           HEADER
        ========================================= */

        .ecommerce-capabilities-label {
          margin: 0 0 14px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        .ecommerce-capabilities-heading {
          margin: 0 0 48px;
          max-width: 900px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        /* =========================================
           GRID
        ========================================= */

        .ecommerce-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 20px;
        }

        .ecommerce-capabilities-card-wrapper {
          min-width: 0;
        }

        /* First two cards */
        .ecommerce-capabilities-card-wrapper:nth-child(1),
        .ecommerce-capabilities-card-wrapper:nth-child(2) {
          grid-column: span 3;
        }

        /* Last three cards */
        .ecommerce-capabilities-card-wrapper:nth-child(3),
        .ecommerce-capabilities-card-wrapper:nth-child(4),
        .ecommerce-capabilities-card-wrapper:nth-child(5) {
          grid-column: span 2;
        }

        /* =========================================
           CARD
        ========================================= */

        .ecommerce-card {
          min-height: 220px;
          height: 100%;
          padding: 24px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          background: #ffffff;
          border: 1px solid #ece9e4;
          border-radius: 16px;

          opacity: 0;
          transform: translateY(32px) scale(0.97);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms ease,
            border-color 350ms ease;
        }

        .ecommerce-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .ecommerce-card:hover {
          transform: translateY(-8px) scale(1);
          border-color: rgba(122, 31, 61, 0.16);
          box-shadow: 0 16px 35px rgba(122, 31, 61, 0.10);
        }

        /* =========================================
           CARD TOP
        ========================================= */

        .ecommerce-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 22px;
        }

        .ecommerce-card-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .ecommerce-card-number {
          color: #e3d3d9;
          font-family: "Inter", sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
        }

        /* =========================================
           CARD CONTENT
        ========================================= */

        .ecommerce-card-title {
          margin: 0 0 10px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
        }

        .ecommerce-card-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .ecommerce-capabilities-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .ecommerce-capabilities-heading {
            font-size: 34px;
            margin-bottom: 40px;
          }

          .ecommerce-capabilities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .ecommerce-capabilities-card-wrapper:nth-child(1),
          .ecommerce-capabilities-card-wrapper:nth-child(2),
          .ecommerce-capabilities-card-wrapper:nth-child(3),
          .ecommerce-capabilities-card-wrapper:nth-child(4),
          .ecommerce-capabilities-card-wrapper:nth-child(5) {
            grid-column: span 1;
          }

          .ecommerce-card {
            min-height: 235px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .ecommerce-capabilities-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .ecommerce-capabilities-label {
            margin-bottom: 12px;
            font-size: 9px;
          }

          .ecommerce-capabilities-heading {
            margin-bottom: 30px;
            font-size: 28px;
            line-height: 1.22;
          }

          .ecommerce-capabilities-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .ecommerce-capabilities-card-wrapper:nth-child(1),
          .ecommerce-capabilities-card-wrapper:nth-child(2),
          .ecommerce-capabilities-card-wrapper:nth-child(3),
          .ecommerce-capabilities-card-wrapper:nth-child(4),
          .ecommerce-capabilities-card-wrapper:nth-child(5) {
            grid-column: span 1;
          }

          .ecommerce-card {
            min-height: 215px;
            padding: 21px;
            border-radius: 14px;
          }

          .ecommerce-card-top {
            margin-bottom: 20px;
          }

          .ecommerce-card-icon {
            width: 38px;
            height: 38px;
          }

          .ecommerce-card-number {
            font-size: 16px;
          }

          .ecommerce-card-title {
            font-size: 16px;
          }

          .ecommerce-card-body {
            font-size: 12.5px;
            line-height: 1.65;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .ecommerce-capabilities-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .ecommerce-capabilities-heading {
            font-size: 24px;
            margin-bottom: 26px;
          }

          .ecommerce-capabilities-grid {
            gap: 13px;
          }

          .ecommerce-card {
            min-height: 205px;
            padding: 19px;
          }

          .ecommerce-card-title {
            font-size: 15px;
          }

          .ecommerce-card-body {
            font-size: 12px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .ecommerce-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .ecommerce-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="ecommerce-capabilities-wrapper">
        {/* Section Label */}
        <p className="ecommerce-capabilities-label">
          E-COMMERCE CAPABILITIES
        </p>

        {/* Heading */}
        <h2 className="ecommerce-capabilities-heading">
          Key Capabilities for Your Online Business
        </h2>

        {/* Cards */}
        <div className="ecommerce-capabilities-grid">
          {cards.map((card, index) => (
            <div
              key={card.num}
              className="ecommerce-capabilities-card-wrapper"
            >
              <Card
                {...card}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}