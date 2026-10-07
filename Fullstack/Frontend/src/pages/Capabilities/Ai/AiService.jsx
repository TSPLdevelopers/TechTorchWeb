import React from "react";

import {
  Network,
  ShieldCheck,
  Fingerprint,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Infrastructure-Free Deployment",
  },
  {
    icon: ShieldCheck,
    title: "Zero Upfront Complexity",
  },
  {
    icon: Fingerprint,
    title: "Enterprise Model Governance",
  },
  {
    icon: Sparkles,
    title: "Future-Ready Integration",
  },
];

export default function AIServiceHero() {
  return (
    <>
      <section className="ai-service-hero">
        <div className="ai-service-hero-container">

          {/* ================= EYEBROW ================= */}

          <div className="ai-service-eyebrow">
            <span className="ai-service-eyebrow-dot" />

            <span className="ai-service-eyebrow-text">
              Artificial Intelligence as a Service
            </span>
          </div>

          {/* ================= HEADLINE ================= */}

          <h1 className="ai-service-title">
            Artificial Intelligence as a Service for Modern Businesses
          </h1>

          {/* ================= BODY COPY ================= */}

          <div className="ai-service-description">
            <p>
              At TechTorch Solutions, we provide Artificial Intelligence as a
              Service that enables businesses to harness the power of AI
              without the complexity of building and maintaining their own
              infrastructure.
            </p>

            <p>
              Our approach is focused on making advanced technology more
              accessible to businesses while helping them move towards a more
              efficient, technology-driven and future-ready environment.
            </p>
          </div>

          {/* ================= CTA ================= */}

          <button className="ai-service-cta">
            <span>Talk to Our Experts</span>

            <ArrowRight className="ai-service-cta-icon" />
          </button>

          {/* ================= DIVIDER ================= */}

          <div className="ai-service-divider" />

          {/* ================= FEATURE STRIP ================= */}

          <div className="ai-service-features">
            {features.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="ai-service-feature"
              >
                <Icon className="ai-service-feature-icon" />

                <span className="ai-service-feature-title">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* =====================================================
           HERO
        ====================================================== */

        .ai-service-hero {
          width: 100%;
          min-height: 640px;
          display: flex;
          align-items: center;
          overflow: hidden;

          background:
            radial-gradient(
              120% 140% at 15% 10%,
              #5c0f38 0%,
              #3a0a26 45%,
              #24061a 100%
            );
        }

        .ai-service-hero-container {
          width: 100%;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           EYEBROW
        ====================================================== */

        .ai-service-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 24px;
          padding: 7px 15px;

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.05);
        }

        .ai-service-eyebrow-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #fda4af;
        }

        .ai-service-eyebrow-text {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: rgba(255, 241, 242, 0.9);
        }

        /* =====================================================
           MAIN TITLE
        ====================================================== */

        .ai-service-title {
          width: 100%;
          max-width: 850px;

          margin: 0 0 20px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;

          color: #ffffff;
        }

        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .ai-service-description {
          width: 100%;
          max-width: 760px;

          display: flex;
          flex-direction: column;
          gap: 13px;

          margin-bottom: 28px;
        }

        .ai-service-description p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;

          color: rgba(255, 241, 242, 0.7);
        }

        .ai-service-description p:last-child {
          color: rgba(255, 241, 242, 0.55);
        }

        /* =====================================================
           CTA
        ====================================================== */

        .ai-service-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          margin-bottom: 42px;
          padding: 12px 24px;

          border: none;
          border-radius: 6px;

          background: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;

          color: #3a0a26;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ai-service-cta:hover {
          transform: translateY(-2px);
          background: #730042;
          color: #ffffff;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .ai-service-cta-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .ai-service-cta:hover .ai-service-cta-icon {
          transform: translateX(3px);
        }

        /* =====================================================
           DIVIDER
        ====================================================== */

        .ai-service-divider {
          width: 100%;
          height: 1px;

          margin-bottom: 22px;

          background: rgba(255, 255, 255, 0.1);
        }

        /* =====================================================
           FEATURES
        ====================================================== */

        .ai-service-features {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 16px;
        }

        .ai-service-feature {
          min-width: 0;

          display: flex;
          align-items: flex-start;
          gap: 12px;

          padding: 16px;

          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;

          background: rgba(255, 255, 255, 0.03);

          transition:
            background-color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .ai-service-feature:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .ai-service-feature-icon {
          width: 17px;
          height: 17px;

          flex-shrink: 0;
          margin-top: 1px;

          stroke-width: 1.8;

          color: rgba(255, 228, 230, 0.8);
        }

        .ai-service-feature-title {
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.45;

          color: rgba(255, 255, 255, 0.85);
        }

        /* =====================================================
           LARGE TABLET
           Horizontal spacing: 40px
        ====================================================== */

        @media (max-width: 1200px) {
          .ai-service-hero {
            min-height: 600px;
          }

          .ai-service-hero-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .ai-service-title {
            max-width: 760px;
            font-size: 44px;
          }

          .ai-service-description {
            max-width: 700px;
          }

          .ai-service-features {
            gap: 12px;
          }

          .ai-service-feature {
            padding: 14px;
          }

          .ai-service-feature-title {
            font-size: 12px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .ai-service-hero {
            min-height: auto;
          }

          .ai-service-hero-container {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .ai-service-eyebrow {
            margin-bottom: 20px;
          }

          .ai-service-title {
            max-width: 700px;
            font-size: 38px;
          }

          .ai-service-description {
            max-width: 680px;
            margin-bottom: 26px;
          }

          .ai-service-description p {
            font-size: 14px;
          }

          .ai-service-cta {
            margin-bottom: 34px;
          }

          .ai-service-features {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .ai-service-feature {
            padding: 15px;
          }
        }

        /* =====================================================
           MOBILE
           Horizontal spacing: 24px
        ====================================================== */

        @media (max-width: 700px) {
          .ai-service-hero-container {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .ai-service-eyebrow {
            margin-bottom: 18px;
            padding: 6px 12px;
            gap: 7px;
          }

          .ai-service-eyebrow-dot {
            width: 5px;
            height: 5px;
          }

          .ai-service-eyebrow-text {
            font-size: 9px;
          }

          .ai-service-title {
            max-width: 100%;
            margin-bottom: 18px;

            font-size: 30px;
            line-height: 1.18;
          }

          .ai-service-description {
            gap: 11px;
            margin-bottom: 24px;
          }

          .ai-service-description p {
            font-size: 12.5px;
            line-height: 1.7;
          }

          .ai-service-cta {
            margin-bottom: 32px;
            padding: 11px 20px;
            font-size: 11px;
          }

          .ai-service-cta-icon {
            width: 14px;
            height: 14px;
          }

          .ai-service-divider {
            margin-bottom: 18px;
          }

          .ai-service-features {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .ai-service-feature {
            align-items: center;
            padding: 13px;
          }

          .ai-service-feature-icon {
            width: 16px;
            height: 16px;
          }

          .ai-service-feature-title {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           Horizontal spacing: 16px
        ====================================================== */

        @media (max-width: 480px) {
          .ai-service-hero-container {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .ai-service-eyebrow {
            margin-bottom: 16px;
            padding: 5px 10px;
          }

          .ai-service-eyebrow-text {
            font-size: 8.5px;
          }

          .ai-service-title {
            font-size: 26px;
            line-height: 1.2;
          }

          .ai-service-description {
            gap: 10px;
            margin-bottom: 22px;
          }

          .ai-service-description p {
            font-size: 11.5px;
            line-height: 1.7;
          }

          .ai-service-cta {
            width: auto;
            margin-bottom: 28px;
            padding: 10px 17px;
            font-size: 10.5px;
          }

          .ai-service-divider {
            margin-bottom: 16px;
          }

          .ai-service-feature {
            padding: 12px;
            border-radius: 10px;
          }

          .ai-service-feature-title {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}