import React, { useEffect, useRef, useState } from "react";
import {
  Landmark,
  Heart,
  Factory,
  ShoppingCart,
  ArrowLeftRight,
  Zap,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Landmark,
    tag: "REGULATED FINTECH",
    title: "Finance & Banking",
    description:
      "Automated ledger reconciliation, risk modeling pipelines, KYC orchestration, and institutional transactional security compliance.",
    focus: "Bank-Grade Integrity",
    image: "/banking.png",
    alt: "Financial analysts working at a trading floor",
  },
  {
    icon: Heart,
    tag: "CLINICAL CARE",
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant EHR integrations, telehealth routing, bedside staff management, and patient portal lifecycle orchestration.",
    focus: "Zero-Latency Care Data",
    image: "/healthcare.png",
    alt: "Clinicians reviewing a patient chart in a hospital",
  },
  {
    icon: Factory,
    tag: "INDUSTRY 4.0",
    title: "Manufacturing & Industrial",
    description:
      "Shop floor IoT telemetry, automated bill-of-materials scheduling, equipment maintenance prediction, and supplier traceability.",
    focus: "Continuous Throughput",
    image: "/industrial.png",
    alt: "Robotic arm on a manufacturing production line",
  },
  {
    icon: ShoppingCart,
    tag: "OMNICHANNEL",
    title: "E-Commerce & Retail",
    description:
      "High-concurrency checkout engines, dynamic multi-warehouse catalog sync, personalized merchandising, and returns automation.",
    focus: "Sub-Second Conversion",
    image: "/retail.png",
    alt: "Automated fulfillment warehouse with shelving units",
  },
  {
    icon: ArrowLeftRight,
    tag: "GLOBAL FREIGHT",
    title: "Logistics & Transportation",
    description:
      "Dynamic multi-modal route optimization, fleet dispatch telematics, warehouse sorting intelligence, and customs documentation.",
    focus: "Live Transit Transparency",
    image: "/logistic.png",
    alt: "Logistics team monitoring fleet dispatch screens",
  },
  {
    icon: Zap,
    tag: "CRITICAL INFRA",
    title: "Energy, Utilities & Telecom",
    description:
      "Smart grid asset tracking, billing convergence across millions of subscribers, predictive outage alerts, and field service dispatch.",
    focus: "High-Availability Scale",
    image: "/energy.png",
    alt: "Control room operators monitoring energy grid dashboards",
  },
];

export default function IndustriesSection() {
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
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className={`industries-section ${
          isVisible ? "industries-visible" : ""
        }`}
      >
        <div className="industries-container">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="industries-header">
            {/* Label */}

            <div className="industries-label-wrap">
              <span className="industries-label-line" />

              <span className="industries-label">
                Built for Different Industries
              </span>

              <span className="industries-label-line" />
            </div>

            {/* Main Heading */}

            <h2 className="industries-heading">
              Technology That Understands Your Industry
            </h2>

            {/* Sub Heading */}

            <p className="industries-subheading">
              Different industries face fundamentally distinct operational
              mechanics. Rather than rigid one-size-fits-all software, we
              tailor architecture around the specific compliance, regulatory,
              transaction velocity, and human workflows defining each
              enterprise sector.
            </p>
          </div>

          {/* =====================================================
              INDUSTRY CARDS
          ====================================================== */}

          <div className="industries-grid">
            {INDUSTRIES.map(
              (
                {
                  icon: Icon,
                  tag,
                  title,
                  description,
                  focus,
                  image,
                  alt,
                },
                index
              ) => (
                <article
                  className="industry-card"
                  key={title}
                  style={{
                    "--card-delay": `${index * 140}ms`,
                  }}
                >
                  {/* ================= IMAGE ================= */}

                  <div className="industry-image-wrapper">
                    <img
                      src={image}
                      alt={alt}
                      className="industry-image"
                    />
                  </div>

                  {/* ================= CARD CONTENT ================= */}

                  <div className="industry-content">
                    {/* Icon + Tag */}

                    <div className="industry-top">
                      {/* Icon */}

                      <div className="industry-icon">
                        <Icon
                          size={17}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Tag */}

                      <span className="industry-tag">{tag}</span>
                    </div>

                    {/* Title */}

                    <h3 className="industry-title">{title}</h3>

                    {/* Description */}

                    <p className="industry-description">
                      {description}
                    </p>

                    {/* Core Focus */}

                    <div className="industry-focus">
                      <span className="industry-focus-label">
                        Core Focus
                      </span>

                      <span className="industry-focus-value">
                        {focus}
                      </span>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================================
           INDUSTRIES SECTION
        ========================================================= */

        .industries-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 100px;
          box-sizing: border-box;
        }

        .industries-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .industries-header {
          width: 100%;
          max-width: 820px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .industries-label-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .industries-label-line {
          width: 40px;
          height: 1px;
          flex-shrink: 0;
          background: #9d174d;
        }

        .industries-label {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #9d174d;
        }

        .industries-heading {
          margin: 0 0 14px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
          color: #0f172a;
        }

        .industries-subheading {
          max-width: 760px;
          margin: 0 auto;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;
          color: #64748b;
        }

        /* =========================================================
           GRID
        ========================================================= */

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        /* =========================================================
           CARD
        ========================================================= */

        .industry-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;

          border: 1px solid #e8e8ec;
          border-radius: 14px;

          background: #ffffff;

          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.045);

          opacity: 0;
          transform: translateY(35px) scale(0.96);

          transition:
            opacity 0.6s ease,
            transform 0.6s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;

          transition-delay: var(--card-delay);
        }

        .industries-visible .industry-card {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .industry-card:hover {
          transform: translateY(-5px) scale(1);
          border-color: #ead8e1;
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.09);
        }

        /* =========================================================
           IMAGE
        ========================================================= */

        .industry-image-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f5f5f5;
        }

        .industry-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }

        .industry-card:hover .industry-image {
          transform: scale(1.035);
        }

        /* =========================================================
           CONTENT
        ========================================================= */

        .industry-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 22px;
          box-sizing: border-box;
        }

        /* =========================================================
           TOP
        ========================================================= */

        .industry-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .industry-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 38px;
          height: 38px;
          flex-shrink: 0;

          border: 1px solid #e5e7eb;
          border-radius: 9px;

          background: #ffffff;
          color: #334155;
        }

        .industry-tag {
          max-width: calc(100% - 52px);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          padding: 6px 10px;
          border-radius: 999px;

          background: #fdeef4;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.045em;

          color: #9d174d;
        }

        /* =========================================================
           TITLE
        ========================================================= */

        .industry-title {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.015em;

          color: #0f172a;
        }

        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .industry-description {
          flex: 1;
          margin: 0 0 20px;

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.7;

          color: #64748b;
        }

        /* =========================================================
           CORE FOCUS
        ========================================================= */

        .industry-focus {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;

          padding-top: 14px;
          border-top: 1px solid #edf0f2;
        }

        .industry-focus-label {
          flex-shrink: 0;

          font-family: "Inter", sans-serif;
          font-size: 10.5px;
          font-weight: 400;
          line-height: 1.3;

          color: #94a3b8;
        }

        .industry-focus-value {
          text-align: right;

          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          line-height: 1.35;

          color: #334155;
        }

        /* =========================================================
           TABLET - 1200px
        ========================================================= */

        @media (max-width: 1200px) {
          .industries-section {
            padding: 70px 40px;
          }

          .industries-grid {
            gap: 20px;
          }

          .industry-content {
            padding: 20px;
          }
        }

        /* =========================================================
           TABLET - 900px
           2 COLUMNS
        ========================================================= */

        @media (max-width: 900px) {
          .industries-section {
            padding: 60px 40px;
          }

          .industries-header {
            margin-bottom: 40px;
          }

          .industries-heading {
            font-size: 29px;
          }

          .industries-subheading {
            font-size: 13.5px;
          }

          .industries-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .industry-content {
            padding: 20px;
          }

          .industry-title {
            font-size: 15.5px;
          }

          .industry-description {
            font-size: 12px;
          }
        }

        /* =========================================================
           MOBILE - 700px
        ========================================================= */

        @media (max-width: 700px) {
          .industries-section {
            padding: 50px 24px;
          }

          .industries-header {
            margin-bottom: 32px;
          }

          .industries-label-wrap {
            gap: 9px;
            margin-bottom: 13px;
          }

          .industries-label-line {
            width: 28px;
          }

          .industries-label {
            font-size: 9px;
            letter-spacing: 0.1em;
          }

          .industries-heading {
            margin-bottom: 11px;
            font-size: 25px;
            line-height: 1.25;
          }

          .industries-subheading {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .industries-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .industry-image-wrapper {
            aspect-ratio: 16 / 9;
          }

          .industry-content {
            padding: 18px;
          }

          .industry-top {
            margin-bottom: 15px;
          }

          .industry-icon {
            width: 36px;
            height: 36px;
          }

          .industry-tag {
            font-size: 8.5px;
            padding: 6px 9px;
          }

          .industry-title {
            font-size: 15px;
          }

          .industry-description {
            margin-bottom: 18px;
            font-size: 12px;
            line-height: 1.65;
          }

          .industry-focus {
            padding-top: 12px;
          }

          .industry-focus-label {
            font-size: 10px;
          }

          .industry-focus-value {
            font-size: 10.5px;
          }
        }

        /* =========================================================
           SMALL MOBILE - 480px
        ========================================================= */

        @media (max-width: 480px) {
          .industries-section {
            padding: 42px 16px;
          }

          .industries-header {
            margin-bottom: 28px;
          }

          .industries-label-wrap {
            gap: 7px;
          }

          .industries-label-line {
            width: 20px;
          }

          .industries-label {
            font-size: 8px;
            letter-spacing: 0.08em;
          }

          .industries-heading {
            font-size: 22px;
            line-height: 1.25;
          }

          .industries-subheading {
            font-size: 11.5px;
            line-height: 1.65;
          }

          .industries-grid {
            gap: 16px;
          }

          .industry-content {
            padding: 16px;
          }

          .industry-top {
            gap: 8px;
            margin-bottom: 14px;
          }

          .industry-icon {
            width: 34px;
            height: 34px;
            border-radius: 8px;
          }

          .industry-tag {
            max-width: 72%;
            padding: 5px 8px;
            font-size: 7.5px;
          }

          .industry-title {
            margin-bottom: 8px;
            font-size: 14px;
          }

          .industry-description {
            margin-bottom: 16px;
            font-size: 11.5px;
            line-height: 1.65;
          }

          .industry-focus {
            gap: 8px;
            padding-top: 11px;
          }

          .industry-focus-label {
            font-size: 9px;
          }

          .industry-focus-value {
            font-size: 9.5px;
          }
        }

        /* =========================================================
           VERY SMALL DEVICES
        ========================================================= */

        @media (max-width: 360px) {
          .industries-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .industries-heading {
            font-size: 20px;
          }

          .industries-subheading {
            font-size: 11px;
          }

          .industry-content {
            padding: 14px;
          }

          .industry-tag {
            font-size: 7px;
          }

          .industry-description {
            font-size: 11px;
          }
        }

        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .industry-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .industry-image {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}