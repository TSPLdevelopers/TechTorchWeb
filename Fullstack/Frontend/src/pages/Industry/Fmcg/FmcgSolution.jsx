import React from "react";
import {
  Database,
  SlidersHorizontal,
  Truck,
  CreditCard,
  Users,
  ShoppingCart,
  Globe,
  Briefcase,
  RefreshCw,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";
const GREEN = "#1a9455";

const systems = [
  {
    icon: Database,
    iconBg: "#fde7e7",
    iconColor: "#c94b4b",
    title: "ERP",
    status: "Active • 99.9%",
  },
  {
    icon: SlidersHorizontal,
    iconBg: "#e6eef6",
    iconColor: "#3b6ea5",
    title: "Operations",
    status: "Synced • Automated",
  },
  {
    icon: Truck,
    iconBg: "#e6f0f8",
    iconColor: "#2f7ac9",
    title: "Supply Chain",
    status: "Tracking • 24/7",
  },
  {
    icon: CreditCard,
    iconBg: "#e6eef6",
    iconColor: "#3b6ea5",
    title: "Finance",
    status: "Reconciled • Live",
  },
  {
    icon: Users,
    iconBg: "#efe6f8",
    iconColor: "#7a4bc9",
    title: "CRM",
    status: "Engaged • 360°",
  },
  {
    icon: ShoppingCart,
    iconBg: "#fbeee0",
    iconColor: "#c9834b",
    title: "E-Commerce",
    status: "Omnichannel",
  },
  {
    icon: Globe,
    iconBg: "#e6f4f0",
    iconColor: "#2f9b7a",
    title: "Web Portals",
    status: "Connected • SSO",
  },
  {
    icon: Briefcase,
    iconBg: "#fbf1de",
    iconColor: "#c08a2e",
    title: "Project Mgmt",
    status: "Optimized • Agile",
  },
];

export default function FmcgConnectOperationsSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .fmcg-connect-section,
        .fmcg-connect-section * {
          box-sizing: border-box;
        }

        .fmcg-connect-section {
          width: 100%;
          background: #f7f5f2;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* =========================
           MAIN CONTAINER
           HERO SPACING SYSTEM
        ========================= */

        .fmcg-connect-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          padding: 78px 100px;

          display: grid;
          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(0, 1.05fr);

          align-items: center;
          gap: 64px;
        }

        /* =========================
           LEFT CONTENT
        ========================= */

        .fmcg-connect-eyebrow {
          margin: 0 0 13px;

          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .fmcg-connect-heading {
          max-width: 650px;
          margin: 0 0 22px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.18;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .fmcg-connect-copy {
          display: flex;
          flex-direction: column;
          gap: 15px;

          max-width: 650px;
        }

        .fmcg-connect-description {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* =========================
           DASHBOARD
        ========================= */

        .fmcg-dashboard {
          width: 100%;
          min-width: 0;

          padding: 21px;

          background: #ffffff;
          border-radius: 18px;

          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
        }

        /* =========================
           DASHBOARD HEADER
        ========================= */

        .fmcg-dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;

          margin-bottom: 20px;
        }

        .fmcg-dashboard-live {
          display: flex;
          align-items: center;
          gap: 7px;

          min-width: 0;
        }

        .fmcg-live-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: ${GREEN};
        }

        .fmcg-dashboard-live-text {
          margin: 0;

          color: ${INK};

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.55px;

          white-space: nowrap;
        }

        .fmcg-dashboard-brand {
          display: flex;
          align-items: center;
          gap: 8px;

          flex-shrink: 0;
        }

        .fmcg-version {
          padding: 5px 8px;

          border-radius: 6px;
          background: #f2f1f5;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1;
          font-weight: 500;
        }

        .fmcg-brand-name {
          color: ${WINE};

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1;
          font-weight: 700;
        }

        /* =========================
           SYSTEM GRID
        ========================= */

        .fmcg-system-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 9px;

          margin-bottom: 14px;
        }

        .fmcg-system-card {
          position: relative;
          min-width: 0;

          padding: 12px;

          border: 1px solid #ece9e4;
          border-radius: 9px;

          background: #ffffff;

          transition:
            transform 0.22s ease,
            box-shadow 0.22s ease;
        }

        .fmcg-system-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 7px 18px rgba(27, 27, 42, 0.06);
        }

        .fmcg-system-status-dot {
          position: absolute;

          top: 9px;
          right: 9px;

          width: 5px;
          height: 5px;

          border-radius: 50%;
          background: ${GREEN};
        }

        .fmcg-system-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 32px;
          height: 32px;

          margin-bottom: 10px;

          border-radius: 8px;
        }

        .fmcg-system-title {
          margin: 0 0 4px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
        }

        .fmcg-system-status {
          margin: 0;

          color: ${GREEN};

          font-family: "Inter", Arial, sans-serif;
          font-size: 8.5px;
          line-height: 1.4;
          font-weight: 500;
        }

        /* =========================
           FOOTER BAR
        ========================= */

        .fmcg-dashboard-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;

          padding: 14px;

          border-radius: 9px;
          background: #f6f7fa;
        }

        .fmcg-footer-info {
          display: flex;
          align-items: center;
          gap: 9px;

          min-width: 0;
        }

        .fmcg-footer-icon {
          flex-shrink: 0;
          color: ${WINE};
        }

        .fmcg-footer-title {
          margin: 0 0 3px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
        }

        .fmcg-footer-subtitle {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 400;
        }

        .fmcg-connected-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          flex-shrink: 0;

          padding: 5px 9px;

          border-radius: 999px;
          background: #e5f7ec;

          color: ${GREEN};

          font-family: "Inter", Arial, sans-serif;
          font-size: 8.5px;
          line-height: 1;
          font-weight: 600;

          white-space: nowrap;
        }

        .fmcg-connected-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;
          background: ${GREEN};
        }

        /* =========================
           LAPTOP / TABLET
           100px → 40px
        ========================= */

        @media (max-width: 1200px) {
          .fmcg-connect-container {
            padding-left: 40px;
            padding-right: 40px;

            gap: 46px;
          }

          .fmcg-connect-heading {
            font-size: 38px;
          }

          .fmcg-connect-description {
            font-size: 13.5px;
          }

          .fmcg-dashboard {
            padding: 18px;
          }

          .fmcg-system-grid {
            gap: 8px;
          }

          .fmcg-system-card {
            padding: 10px;
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .fmcg-connect-container {
            grid-template-columns: 1fr;

            gap: 40px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .fmcg-connect-heading {
            max-width: 760px;
            font-size: 36px;
          }

          .fmcg-connect-copy {
            max-width: 760px;
          }

          .fmcg-dashboard {
            width: 100%;
            max-width: 820px;
            margin: 0 auto;
          }
        }

        /* =========================
           MOBILE
           24px SIDE SPACING
        ========================= */

        @media (max-width: 600px) {
          .fmcg-connect-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 48px;
            padding-bottom: 48px;

            gap: 30px;
          }

          .fmcg-connect-eyebrow {
            margin-bottom: 10px;
            font-size: 10px;
          }

          .fmcg-connect-heading {
            margin-bottom: 17px;

            font-size: 30px;
            line-height: 1.22;
            letter-spacing: -0.7px;
          }

          .fmcg-connect-copy {
            gap: 12px;
          }

          .fmcg-connect-description {
            font-size: 12.5px;
            line-height: 1.7;
          }

          .fmcg-dashboard {
            padding: 15px;
            border-radius: 15px;
          }

          .fmcg-dashboard-header {
            align-items: flex-start;
            margin-bottom: 16px;
          }

          .fmcg-dashboard-live-text {
            max-width: 190px;

            white-space: normal;

            font-size: 8.5px;
          }

          .fmcg-dashboard-brand {
            gap: 5px;
          }

          .fmcg-version {
            display: none;
          }

          .fmcg-system-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 8px;
          }

          .fmcg-system-card {
            padding: 11px;
          }

          .fmcg-system-icon {
            width: 31px;
            height: 31px;

            margin-bottom: 8px;
          }

          .fmcg-system-title {
            font-size: 11px;
          }

          .fmcg-system-status {
            font-size: 8.5px;
          }

          .fmcg-dashboard-footer {
            align-items: flex-start;
            flex-direction: column;

            gap: 10px;

            padding: 12px;
          }

          .fmcg-connected-badge {
            align-self: flex-start;
          }
        }

        /* =========================
           SMALL MOBILE
           16px SIDE SPACING
        ========================= */

        @media (max-width: 480px) {
          .fmcg-connect-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 40px;
            padding-bottom: 40px;
          }

          .fmcg-connect-heading {
            font-size: 27px;
            letter-spacing: -0.5px;
          }

          .fmcg-connect-description {
            font-size: 11.5px;
          }

          .fmcg-dashboard {
            padding: 12px;
            border-radius: 13px;
          }

          .fmcg-dashboard-header {
            gap: 8px;
          }

          .fmcg-dashboard-live-text {
            max-width: 165px;
            font-size: 7.5px;
          }

          .fmcg-brand-name {
            font-size: 8px;
          }

          .fmcg-system-grid {
            gap: 7px;
          }

          .fmcg-system-card {
            padding: 9px;
          }

          .fmcg-system-icon {
            width: 29px;
            height: 29px;
          }

          .fmcg-system-title {
            font-size: 10px;
          }

          .fmcg-system-status {
            font-size: 7.5px;
          }

          .fmcg-footer-title {
            font-size: 11px;
          }

          .fmcg-footer-subtitle {
            font-size: 8.5px;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 340px) {
          .fmcg-connect-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 34px;
            padding-bottom: 34px;
          }

          .fmcg-connect-heading {
            font-size: 24px;
          }

          .fmcg-connect-description {
            font-size: 11px;
          }

          .fmcg-dashboard {
            padding: 10px;
          }

          .fmcg-dashboard-live-text {
            max-width: 145px;
            font-size: 7px;
          }

          .fmcg-system-card {
            padding: 8px;
          }

          .fmcg-system-icon {
            width: 27px;
            height: 27px;
          }

          .fmcg-system-title {
            font-size: 9.5px;
          }

          .fmcg-system-status {
            font-size: 7px;
          }

          .fmcg-footer-title {
            font-size: 10px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .fmcg-system-card {
            transition: none;
          }

          .fmcg-system-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="fmcg-connect-section">
        <div className="fmcg-connect-container">

          {/* =========================
              LEFT CONTENT
          ========================= */}

          <div className="fmcg-connect-content">
            <p className="fmcg-connect-eyebrow">
              FMCG SOLUTIONS
            </p>

            <h2 className="fmcg-connect-heading">
              Connect Your FMCG Business Operations
            </h2>

            <div className="fmcg-connect-copy">
              <p className="fmcg-connect-description">
                FMCG businesses manage multiple functions that need to work
                together. Technology can help connect business processes,
                information and teams across different operational areas.
              </p>

              <p className="fmcg-connect-description">
                TechTorch provides solutions designed around business
                requirements, including ERP, Operations Management, Supply
                Chain Management, Financial Management, CRM, E-Commerce, Web
                Portals and Project Management.
              </p>
            </div>
          </div>

          {/* =========================
              RIGHT DASHBOARD
          ========================= */}

          <div className="fmcg-dashboard">

            {/* Dashboard Header */}

            <div className="fmcg-dashboard-header">

              <div className="fmcg-dashboard-live">
                <span className="fmcg-live-dot" />

                <span className="fmcg-dashboard-live-text">
                  INTEGRATED FMCG ECOSYSTEM · REAL-TIME SYNC
                </span>
              </div>

              <div className="fmcg-dashboard-brand">
                <span className="fmcg-version">
                  Core v4.2
                </span>

                <span className="fmcg-brand-name">
                  TechTorch
                </span>
              </div>

            </div>

            {/* System Grid */}

            <div className="fmcg-system-grid">
              {systems.map(
                ({
                  icon: Icon,
                  iconBg,
                  iconColor,
                  title,
                  status,
                }) => (
                  <div
                    key={title}
                    className="fmcg-system-card"
                  >
                    <span className="fmcg-system-status-dot" />

                    <span
                      className="fmcg-system-icon"
                      style={{
                        background: iconBg,
                        color: iconColor,
                      }}
                    >
                      <Icon
                        size={14}
                        strokeWidth={1.8}
                      />
                    </span>

                    <p className="fmcg-system-title">
                      {title}
                    </p>

                    <p className="fmcg-system-status">
                      {status}
                    </p>
                  </div>
                )
              )}
            </div>

            {/* Footer */}

            <div className="fmcg-dashboard-footer">

              <div className="fmcg-footer-info">
                <RefreshCw
                  size={15}
                  className="fmcg-footer-icon"
                />

                <div>
                  <p className="fmcg-footer-title">
                    Unified Operational Data Bus
                  </p>

                  <p className="fmcg-footer-subtitle">
                    8 of 8 Domains Synced
                  </p>
                </div>
              </div>

              <span className="fmcg-connected-badge">
                <span className="fmcg-connected-dot" />
                Connected System
              </span>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}