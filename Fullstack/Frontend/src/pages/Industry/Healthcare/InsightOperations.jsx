import React from "react";
import {
  LayoutGrid,
  TrendingUp,
  Gauge,
  RefreshCw,
  Table2,
  SlidersHorizontal,
  Database,
  Sparkles,
  User,
  Users,
  Package,
  CreditCard,
  FlaskConical,
  Tag,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const insightCards = [
  {
    icon: LayoutGrid,
    miniIcon: TrendingUp,
    title: "Operational Dashboards",
    body: "View important information in a structured format.",
    label: "Telemetry Sync",
    status: "99.8%",
    statusColor: "#1a9455",
    statusBg: "#e5f7ec",
  },
  {
    icon: Gauge,
    miniIcon: RefreshCw,
    title: "Performance Indicators",
    body: "Monitor selected operational measures.",
    label: "Bed Turnover Rate",
    status: "Optimal",
    statusColor: "#1a9455",
    statusBg: "#e5f7ec",
  },
  {
    icon: Table2,
    miniIcon: SlidersHorizontal,
    title: "Custom Reporting",
    body: "Create reports around organizational requirements.",
    label: "Audit Export",
    status: "Automated",
    statusColor: WINE,
    statusBg: "#fbeef1",
  },
  {
    icon: Database,
    miniIcon: Sparkles,
    title: "Data Insights",
    body: "Use available information to understand operational trends and resource needs.",
    label: "Predictive Load",
    status: "Active",
    statusColor: "#1a9455",
    statusBg: "#e5f7ec",
  },
];

const operationsCards = [
  { num: "01", icon: User, title: "Patient Management" },
  { num: "02", icon: Users, title: "Staff & Operations" },
  { num: "03", icon: Package, title: "Inventory & Supplies" },
  { num: "04", icon: CreditCard, title: "Billing & Finance" },
  { num: "05", icon: FlaskConical, title: "Clinical & Laboratory" },
  { num: "06", icon: Tag, title: "Patient Engagement" },
];

export default function HealthcareInsightsAndOperationsSections() {
  return (
    <div className="healthcare-insights-page">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           GLOBAL
        ===================================================== */

        .healthcare-insights-page {
          width: 100%;
          overflow: hidden;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        .healthcare-insights-page *,
        .healthcare-insights-page *::before,
        .healthcare-insights-page *::after {
          box-sizing: border-box;
        }

        .healthcare-section-container {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* =====================================================
           SECTION 1
        ===================================================== */

        .healthcare-insights-section {
          width: 100%;
          background: #ffffff;
          padding: 72px 0;
        }

        .healthcare-section-eyebrow {
          margin: 0 0 12px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        /* Main Heading - Plus Jakarta Sans */

        .healthcare-main-heading {
          max-width: 720px;
          margin: 0 0 16px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        /* Subheading - Plus Jakarta Sans */

        .healthcare-main-subheading {
          max-width: 700px;
          margin: 0 0 42px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =====================================================
           INSIGHT CARDS
        ===================================================== */

        .healthcare-insights-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .healthcare-insight-card {
          min-width: 0;
          padding: 20px;
          border: 1px solid #ece9e4;
          border-radius: 12px;
          background: #ffffff;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .healthcare-insight-card:hover {
          transform: translateY(-3px);
          border-color: #e3ddd7;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.06);
        }

        .healthcare-insight-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 17px;
        }

        .healthcare-insight-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .healthcare-insight-mini-icon {
          flex-shrink: 0;
          color: #c9c4bc;
        }

        /* Card Heading - Plus Jakarta Sans */

        .healthcare-insight-title {
          margin: 0 0 7px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;
        }

        .healthcare-insight-body {
          min-height: 58px;
          margin: 0 0 18px;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.65;
        }

        .healthcare-insight-status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding-top: 12px;
          border-top: 1px solid #ece9e4;
        }

        .healthcare-insight-label {
          min-width: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
        }

        .healthcare-insight-badge {
          flex-shrink: 0;
          padding: 3px 8px;
          border-radius: 999px;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
        }

        /* =====================================================
           SECTION 2
        ===================================================== */

        .healthcare-operations-section {
          width: 100%;
          background: #f4f1ec;
          padding: 72px 0;
        }

        .healthcare-operations-subheading {
          max-width: 700px;
          margin: 0 0 42px;
        }

        .healthcare-operations-description {
          margin: 0 0 9px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 500;
        }

        .healthcare-operations-description:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           OPERATIONS GRID
        ===================================================== */

        .healthcare-operations-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .healthcare-operation-card {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
          padding: 18px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .healthcare-operation-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 9px 25px rgba(0, 0, 0, 0.07);
        }

        .healthcare-operation-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .healthcare-operation-content {
          min-width: 0;
        }

        .healthcare-operation-number {
          margin: 0 0 2px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 700;
        }

        /* Card Heading - Plus Jakarta Sans */

        .healthcare-operation-title {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 700;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .healthcare-section-container {
            max-width: 100%;
            padding-left: 32px;
            padding-right: 32px;
          }

          .healthcare-insights-section,
          .healthcare-operations-section {
            padding: 64px 0;
          }

          .healthcare-insights-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .healthcare-insight-body {
            min-height: auto;
          }

          .healthcare-main-heading {
            font-size: 28px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 800px) {
          .healthcare-section-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .healthcare-insights-section,
          .healthcare-operations-section {
            padding: 56px 0;
          }

          .healthcare-main-heading {
            font-size: 27px;
          }

          .healthcare-main-subheading,
          .healthcare-operations-subheading {
            margin-bottom: 32px;
          }

          .healthcare-operations-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .healthcare-section-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .healthcare-insights-section,
          .healthcare-operations-section {
            padding: 48px 0;
          }

          .healthcare-section-eyebrow {
            margin-bottom: 10px;
            font-size: 9px;
          }

          .healthcare-main-heading {
            margin-bottom: 15px;
            font-size: 25px;
            line-height: 1.3;
            letter-spacing: -0.5px;
          }

          .healthcare-main-subheading,
          .healthcare-operations-description {
            font-size: 12px;
            line-height: 1.7;
          }

          .healthcare-main-subheading,
          .healthcare-operations-subheading {
            margin-bottom: 28px;
          }

          .healthcare-insights-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .healthcare-insight-card {
            padding: 17px;
          }

          .healthcare-insight-body {
            min-height: auto;
            margin-bottom: 16px;
          }

          .healthcare-operations-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .healthcare-operation-card {
            padding: 16px;
          }

          .healthcare-operation-icon {
            width: 38px;
            height: 38px;
          }

          .healthcare-operation-title {
            font-size: 12px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {
          .healthcare-section-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .healthcare-insights-section,
          .healthcare-operations-section {
            padding: 42px 0;
          }

          .healthcare-main-heading {
            font-size: 23px;
            line-height: 1.32;
          }

          .healthcare-main-subheading,
          .healthcare-operations-description {
            font-size: 11.5px;
          }

          .healthcare-insight-card {
            padding: 15px;
          }

          .healthcare-insight-title {
            font-size: 12px;
          }

          .healthcare-insight-body {
            font-size: 10.5px;
          }

          .healthcare-operation-card {
            padding: 14px;
          }

          .healthcare-operation-title {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {
          .healthcare-section-container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .healthcare-main-heading {
            font-size: 21px;
          }

          .healthcare-main-subheading,
          .healthcare-operations-description {
            font-size: 11px;
          }

          .healthcare-insight-label {
            font-size: 9px;
          }

          .healthcare-insight-badge {
            font-size: 8px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .healthcare-insight-card,
          .healthcare-operation-card {
            transition: none;
          }
        }
      `}</style>

      {/* =====================================================
          SECTION 1: HEALTHCARE INSIGHTS
      ===================================================== */}

      <section className="healthcare-insights-section">
        <div className="healthcare-section-container">

          <p className="healthcare-section-eyebrow">
            HEALTHCARE INSIGHTS
          </p>

          <h2 className="healthcare-main-heading">
            Turn Operational Data Into Clearer Visibility
          </h2>

          <p className="healthcare-main-subheading">
            Healthcare organizations generate information across patients,
            staff, resources, finance and clinical activities. TechTorch's
            healthcare solution includes dashboards, KPIs, predictive
            analytics and customizable reporting to help organizations
            review operational information and support decision-making.
          </p>

          <div className="healthcare-insights-grid">
            {insightCards.map(
              ({
                icon: Icon,
                miniIcon: MiniIcon,
                title,
                body,
                label,
                status,
                statusColor,
                statusBg,
              }) => (
                <div
                  key={title}
                  className="healthcare-insight-card"
                >
                  <div className="healthcare-insight-top">
                    <span className="healthcare-insight-icon">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>

                    <MiniIcon
                      size={16}
                      className="healthcare-insight-mini-icon"
                    />
                  </div>

                  <h3 className="healthcare-insight-title">
                    {title}
                  </h3>

                  <p className="healthcare-insight-body">
                    {body}
                  </p>

                  <div className="healthcare-insight-status">
                    <span className="healthcare-insight-label">
                      {label}
                    </span>

                    <span
                      className="healthcare-insight-badge"
                      style={{
                        background: statusBg,
                        color: statusColor,
                      }}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2: CONNECTED HEALTHCARE OPERATIONS
      ===================================================== */}

      <section className="healthcare-operations-section">
        <div className="healthcare-section-container">

          <p className="healthcare-section-eyebrow">
            CONNECTED HEALTHCARE OPERATIONS
          </p>

          <h2 className="healthcare-main-heading">
            One Connected Environment for Essential
            <br className="desktop-line-break" />
            Functions
          </h2>

          <div className="healthcare-operations-subheading">
            <p className="healthcare-operations-description">
              Healthcare delivery involves more than clinical services.
              Administration, workforce, resources, finance, information
              and technology all contribute to everyday operations.
            </p>

            <p className="healthcare-operations-description">
              TechTorch's healthcare management capabilities are designed
              to bring these areas into a more connected operational
              environment.
            </p>
          </div>

          <div className="healthcare-operations-grid">
            {operationsCards.map(
              ({ num, icon: Icon, title }) => (
                <div
                  key={num}
                  className="healthcare-operation-card"
                >
                  <span className="healthcare-operation-icon">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>

                  <div className="healthcare-operation-content">
                    <p className="healthcare-operation-number">
                      {num}
                    </p>

                    <h3 className="healthcare-operation-title">
                      {title}
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}