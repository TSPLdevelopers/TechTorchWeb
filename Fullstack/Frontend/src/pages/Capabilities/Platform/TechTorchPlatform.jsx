import React from "react";
import {
  LayoutGrid,
  Link2,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";

const FEATURES = [
  {
    number: "01",
    icon: LayoutGrid,
    title: "Simple",
    description:
      "Designed to make everyday business processes easier to manage and intuitive for your teams.",
    tag: "Frictionless UX",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connected",
    description:
      "Bring essential business functions, data pipelines, and departments together in one unified environment.",
    tag: "Unified Systems",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Flexible",
    description:
      "Adapt the platform effortlessly to your custom workflows, rules, and existing tools.",
    tag: "Custom Workflows",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Built to Grow",
    description:
      "Architected with high scalability to support growing teams as your business footprint expands.",
    tag: "Enterprise Scale",
  },
];

export default function WhyTechTorchSection() {
  return (
    <>
      <section className="why-techtorch-section">
        <div className="why-techtorch-container">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="why-techtorch-header">
            {/* Label */}

            <div className="why-techtorch-label">
              <span>Why TechTorch Platforms</span>

              <span className="why-techtorch-label-line" />
            </div>

            {/* Heading */}

            <h2 className="why-techtorch-heading">
              Technology That Fits Your Business
            </h2>

            {/* Description */}

            <p className="why-techtorch-description">
              Our platforms are designed with a simple goal — to make your
              work easier, your teams stronger and your business more
              prepared for what's next.
            </p>
          </div>

          {/* =====================================================
              FEATURE CARDS
          ===================================================== */}

          <div className="why-techtorch-grid">
            {FEATURES.map(
              ({ number, icon: Icon, title, description, tag }) => (
                <div className="why-techtorch-card" key={number}>
                  {/* ================= TOP ROW ================= */}

                  <div className="why-techtorch-card-top">
                    {/* Icon */}

                    <div className="why-techtorch-icon">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    {/* Number */}

                    <span className="why-techtorch-number">
                      {number}
                    </span>
                  </div>

                  {/* ================= TITLE ================= */}

                  <h3 className="why-techtorch-card-title">
                    {title}
                  </h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p className="why-techtorch-card-description">
                    {description}
                  </p>

                  {/* ================= BOTTOM ================= */}

                  <div className="why-techtorch-card-footer">
                    <span>{tag}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           WHY TECHTORCH SECTION
        ===================================================== */

        .why-techtorch-section {
          width: 100%;
          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 75px;
          padding-bottom: 75px;

          background: #ffffff;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .why-techtorch-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .why-techtorch-header {
          width: 100%;
          max-width: 720px;

          margin-bottom: 38px;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .why-techtorch-label {
          display: flex;
          align-items: center;
          gap: 11px;

          margin-bottom: 13px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;

          color: #730024;
        }

        .why-techtorch-label-line {
          width: 34px;
          height: 1px;

          background: #730024;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .why-techtorch-heading {
          margin: 0 0 12px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #0f172a;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .why-techtorch-description {
          max-width: 680px;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.7;

          color: #64748b;
        }

        /* =====================================================
           FEATURE GRID
        ===================================================== */

        .why-techtorch-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 18px;

          width: 100%;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .why-techtorch-card {
          display: flex;
          flex-direction: column;

          min-height: 250px;

          padding: 22px;

          border: 1px solid #eef0f2;
          border-radius: 18px;

          background: #ffffff;

          box-shadow:
            0 5px 18px rgba(15, 23, 42, 0.035);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .why-techtorch-card:hover {
          transform: translateY(-5px);

          border-color: rgba(115, 0, 36, 0.12);

          box-shadow:
            0 18px 38px rgba(15, 23, 42, 0.08);
        }

        /* =====================================================
           TOP ROW
        ===================================================== */

        .why-techtorch-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 22px;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .why-techtorch-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 42px;
          height: 42px;
          flex-shrink: 0;

          border-radius: 11px;

          background: #fdeef4;
          color: #730024;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .why-techtorch-card:hover .why-techtorch-icon {
          transform: translateY(-2px);
          background: #f9e3ec;
        }

        /* =====================================================
           NUMBER
        ===================================================== */

        .why-techtorch-number {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 29px;
          height: 29px;
          flex-shrink: 0;

          border-radius: 50%;

          background: #fdeef4;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1;

          color: #730024;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .why-techtorch-card-title {
          margin: 0 0 9px 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.3;

          color: #0f172a;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .why-techtorch-card-description {
          flex: 1;

          margin: 0 0 20px 0;

          font-family: "Inter", sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.7;

          color: #64748b;
        }

        /* =====================================================
           FOOTER
        ===================================================== */

        .why-techtorch-card-footer {
          display: flex;
          align-items: center;

          width: 100%;

          padding-top: 13px;

          border-top: 1px solid #eef0f2;
        }

        .why-techtorch-card-footer span {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;

          color: #64748b;
        }

        /* =====================================================
           TABLET — 1200px
           Universal spacing: 40px
        ===================================================== */

        @media (max-width: 1200px) {
          .why-techtorch-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 65px;
            padding-bottom: 65px;
          }

          .why-techtorch-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .why-techtorch-heading {
            font-size: 32px;
          }

          .why-techtorch-card {
            min-height: 240px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .why-techtorch-section {
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .why-techtorch-header {
            margin-bottom: 32px;
          }

          .why-techtorch-heading {
            font-size: 30px;
          }

          .why-techtorch-description {
            font-size: 13.5px;
          }

          .why-techtorch-card {
            min-height: 235px;
            padding: 20px;
          }

          .why-techtorch-card-top {
            margin-bottom: 19px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           Universal spacing: 24px
        ===================================================== */

        @media (max-width: 700px) {
          .why-techtorch-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .why-techtorch-header {
            margin-bottom: 27px;
          }

          .why-techtorch-label {
            gap: 9px;

            margin-bottom: 11px;

            font-size: 11px;
          }

          .why-techtorch-label-line {
            width: 30px;
          }

          .why-techtorch-heading {
            margin-bottom: 10px;

            font-size: 28px;
          }

          .why-techtorch-description {
            font-size: 13px;
            line-height: 1.65;
          }

          .why-techtorch-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .why-techtorch-card {
            min-height: auto;

            padding: 20px;

            border-radius: 16px;
          }

          .why-techtorch-card-top {
            margin-bottom: 18px;
          }

          .why-techtorch-icon {
            width: 40px;
            height: 40px;
          }

          .why-techtorch-number {
            width: 28px;
            height: 28px;
          }

          .why-techtorch-card-title {
            font-size: 16px;
          }

          .why-techtorch-card-description {
            margin-bottom: 18px;

            font-size: 12px;
            line-height: 1.65;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           Universal spacing: 16px
        ===================================================== */

        @media (max-width: 480px) {
          .why-techtorch-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .why-techtorch-header {
            margin-bottom: 23px;
          }

          .why-techtorch-label {
            gap: 8px;

            margin-bottom: 10px;

            font-size: 9.5px;
          }

          .why-techtorch-label-line {
            width: 27px;
          }

          .why-techtorch-heading {
            margin-bottom: 9px;

            font-size: 25px;
          }

          .why-techtorch-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .why-techtorch-grid {
            gap: 12px;
          }

          .why-techtorch-card {
            padding: 17px;

            border-radius: 14px;
          }

          .why-techtorch-card-top {
            margin-bottom: 16px;
          }

          .why-techtorch-icon {
            width: 36px;
            height: 36px;

            border-radius: 10px;
          }

          .why-techtorch-icon svg {
            width: 16px;
            height: 16px;
          }

          .why-techtorch-number {
            width: 26px;
            height: 26px;

            font-size: 9px;
          }

          .why-techtorch-card-title {
            margin-bottom: 7px;

            font-size: 15px;
          }

          .why-techtorch-card-description {
            margin-bottom: 16px;

            font-size: 11.5px;
            line-height: 1.65;
          }

          .why-techtorch-card-footer {
            padding-top: 11px;
          }

          .why-techtorch-card-footer span {
            font-size: 10px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .why-techtorch-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .why-techtorch-heading {
            font-size: 23px;
          }

          .why-techtorch-description {
            font-size: 11.5px;
          }

          .why-techtorch-card {
            padding: 15px;
          }

          .why-techtorch-card-title {
            font-size: 14px;
          }

          .why-techtorch-card-description {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}