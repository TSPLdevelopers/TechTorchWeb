import React from "react";
import {
  Briefcase,
  Settings,
  Truck,
  Plane,
  Users,
  Monitor,
  Landmark,
  CreditCard,
  UserCheck,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

const WINE = "#7A1F3D";

const solutions = [
  { icon: Briefcase, label: "Enterprise Resource Planning" },
  { icon: Settings, label: "Operations Management" },
  { icon: Truck, label: "Supply Chain Management" },
  { icon: Plane, label: "Aviation Management" },
  { icon: Users, label: "People Resources" },
  { icon: Monitor, label: "Web Portals" },
  { icon: Landmark, label: "Financial Management" },
  { icon: CreditCard, label: "Payment Management" },
  { icon: UserCheck, label: "Customer Relationship Management" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: CheckCircle2, label: "Project Management" },
];

export default function DigitalSolutionsTagsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           DIGITAL SOLUTIONS SECTION
        ================================================= */

        .digital-solutions-section,
        .digital-solutions-section * {
          box-sizing: border-box;
        }

        .digital-solutions-section {
          width: 100%;
          background: ${WINE};
          color: #ffffff;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =================================================
           CONTAINER
           Same Hero spacing system
        ================================================= */

        .digital-solutions-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 76px 100px;
        }

        /* =================================================
           EYEBROW
        ================================================= */

        .digital-solutions-eyebrow {
          margin: 0 0 14px;

          color: #f3d9e2;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        /* =================================================
           HEADING
        ================================================= */

        .digital-solutions-heading {
          max-width: 850px;
          margin: 0 0 18px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.9px;
        }

        /* =================================================
           DESCRIPTION
        ================================================= */

        .digital-solutions-description {
          max-width: 820px;
          margin: 0 0 34px;

          color: #e3c3cf;

          font-family: "Inter", Arial, sans-serif;
          font-size: 14.5px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =================================================
           SOLUTION TAGS
        ================================================= */

        .digital-solutions-tags {
          width: 100%;

          display: flex;
          flex-wrap: wrap;
          gap: 11px;
        }

        .digital-solution-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          min-height: 42px;
          padding: 10px 16px;

          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 500;

          white-space: nowrap;

          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .digital-solution-tag svg {
          flex-shrink: 0;
        }

        .digital-solution-tag:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.28);
          transform: translateY(-2px);
        }

        /* =================================================
           LARGE TABLET / SMALL LAPTOP
           1200px → 901px
        ================================================= */

        @media (max-width: 1200px) {
          .digital-solutions-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .digital-solutions-heading {
            font-size: 36px;
          }

          .digital-solutions-description {
            max-width: 760px;
            font-size: 14px;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {
          .digital-solutions-container {
            padding-top: 64px;
            padding-bottom: 64px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .digital-solutions-heading {
            max-width: 720px;
            font-size: 34px;
            line-height: 1.23;
          }

          .digital-solutions-description {
            max-width: 700px;
            margin-bottom: 30px;
          }

          .digital-solutions-tags {
            gap: 9px;
          }

          .digital-solution-tag {
            min-height: 40px;
            padding: 9px 14px;
            font-size: 12.5px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 700px) {
          .digital-solutions-container {
            padding-top: 54px;
            padding-bottom: 54px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .digital-solutions-eyebrow {
            margin-bottom: 10px;

            font-size: 10px;
            letter-spacing: 0.9px;
          }

          .digital-solutions-heading {
            margin-bottom: 16px;

            font-size: 30px;
            line-height: 1.25;
            letter-spacing: -0.6px;
          }

          .digital-solutions-description {
            margin-bottom: 26px;

            font-size: 13px;
            line-height: 1.7;
          }

          .digital-solutions-tags {
            gap: 8px;
          }

          .digital-solution-tag {
            min-height: 38px;
            padding: 8px 12px;

            font-size: 11.5px;
            line-height: 1.35;
          }

          .digital-solution-tag svg {
            width: 13px;
            height: 13px;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .digital-solutions-container {
            padding-top: 46px;
            padding-bottom: 46px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .digital-solutions-heading {
            font-size: 27px;
            line-height: 1.27;
            letter-spacing: -0.5px;
          }

          .digital-solutions-description {
            font-size: 12.5px;
            line-height: 1.7;
          }

          .digital-solution-tag {
            min-height: 37px;
            padding: 8px 11px;

            font-size: 11px;
          }

          .digital-solution-tag svg {
            width: 12px;
            height: 12px;
          }
        }

        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 340px) {
          .digital-solutions-container {
            padding-top: 40px;
            padding-bottom: 40px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .digital-solutions-heading {
            font-size: 24px;
          }

          .digital-solutions-description {
            font-size: 11.5px;
          }

          .digital-solutions-tags {
            gap: 7px;
          }

          .digital-solution-tag {
            min-height: 35px;
            padding: 7px 9px;

            font-size: 10.5px;
          }

          .digital-solution-tag svg {
            width: 11px;
            height: 11px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .digital-solution-tag {
            transition: none;
          }

          .digital-solution-tag:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="digital-solutions-section">
        <div className="digital-solutions-container">

          {/* =================================================
              EYEBROW
          ================================================= */}

          <p className="digital-solutions-eyebrow">
            Digital Solutions
          </p>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h2 className="digital-solutions-heading">
            Technology Connected With Business Operations
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="digital-solutions-description">
            TechTorch provides digital solutions across different areas of
            business operations, helping organizations address their
            technology and operational requirements through connected digital
            systems.
          </p>

          {/* =================================================
              SOLUTION TAGS
          ================================================= */}

          <div className="digital-solutions-tags">
            {solutions.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="digital-solution-tag"
              >
                <Icon
                  size={14}
                  strokeWidth={1.8}
                />

                {label}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}