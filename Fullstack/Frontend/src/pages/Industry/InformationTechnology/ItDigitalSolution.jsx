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

        * {
          box-sizing: border-box;
        }

        .digital-solutions-section {
          width: 100%;
          background: ${WINE};
          color: #ffffff;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .digital-solutions-container {
          width: min(1200px, 100%);
          margin: 0 auto;
          padding: 72px 40px;
        }

        /* ================= EYEBROW ================= */

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

        /* ================= HEADING ================= */

        .digital-solutions-heading {
          max-width: 760px;
          margin: 0 0 18px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.22;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        /* ================= SUBHEADING ================= */

        .digital-solutions-description {
          max-width: 720px;
          margin: 0 0 34px;

          color: #e3c3cf;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14.5px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* ================= SOLUTION TAGS ================= */

        .digital-solutions-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
        }

        .digital-solution-tag {
          display: inline-flex;
          align-items: center;
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

        /* ================= TABLET ================= */

        @media (max-width: 1050px) {
          .digital-solutions-container {
            padding: 62px 32px;
          }

          .digital-solutions-heading {
            font-size: 34px;
          }

          .digital-solutions-description {
            font-size: 14px;
          }

          .digital-solution-tag {
            font-size: 12.5px;
            padding: 9px 14px;
          }
        }

        /* ================= SMALL TABLET ================= */

        @media (max-width: 800px) {
          .digital-solutions-container {
            padding: 56px 26px;
          }

          .digital-solutions-heading {
            max-width: 650px;
            font-size: 32px;
            line-height: 1.25;
          }

          .digital-solutions-description {
            max-width: 650px;
            margin-bottom: 28px;
          }

          .digital-solutions-tags {
            gap: 9px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .digital-solutions-container {
            padding: 46px 18px;
          }

          .digital-solutions-eyebrow {
            margin-bottom: 10px;
            font-size: 10px;
            letter-spacing: 0.9px;
          }

          .digital-solutions-heading {
            margin-bottom: 16px;

            font-size: 28px;
            line-height: 1.27;
            letter-spacing: -0.5px;
          }

          .digital-solutions-description {
            margin-bottom: 25px;

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

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {
          .digital-solutions-container {
            padding: 40px 14px;
          }

          .digital-solutions-heading {
            font-size: 25px;
            line-height: 1.28;
          }

          .digital-solutions-description {
            font-size: 12px;
          }

          .digital-solution-tag {
            min-height: 36px;
            padding: 7px 10px;

            font-size: 11px;
          }

          .digital-solution-tag svg {
            width: 12px;
            height: 12px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 340px) {
          .digital-solutions-container {
            padding: 34px 11px;
          }

          .digital-solutions-heading {
            font-size: 23px;
          }

          .digital-solutions-description {
            font-size: 11.5px;
          }

          .digital-solution-tag {
            padding: 7px 9px;
            font-size: 10.5px;
          }
        }

        /* ================= REDUCED MOTION ================= */

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

          {/* Eyebrow */}
          <p className="digital-solutions-eyebrow">
            Digital Solutions
          </p>

          {/* Main Heading */}
          <h2 className="digital-solutions-heading">
            Technology Connected With Business Operations
          </h2>

          {/* Subheading */}
          <p className="digital-solutions-description">
            TechTorch provides digital solutions across different areas of
            business operations, helping organizations address their
            technology and operational requirements through connected digital
            systems.
          </p>

          {/* Solution Tags */}
          <div className="digital-solutions-tags">
            {solutions.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="digital-solution-tag"
              >
                <Icon size={14} strokeWidth={1.8} />
                {label}
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}