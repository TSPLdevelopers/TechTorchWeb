import React, { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Users,
  Activity,
  FileText,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const metrics = [
  {
    icon: TrendingUp,
    title: "Sales Performance",
    body: "Review sales-related information.",
  },
  {
    icon: Users,
    title: "Customer Trends",
    body: "Understand customer activity and purchasing patterns.",
  },
  {
    icon: Activity,
    title: "Website Activity",
    body: "Monitor relevant website information.",
  },
  {
    icon: FileText,
    title: "Business Reporting",
    body: "Use organized reports to support business decisions.",
  },
];

const stats = [
  {
    label: "THROUGHPUT",
    value: "Real-Time",
  },
  {
    label: "GRANULARITY",
    value: "Normalized",
  },
  {
    label: "AUDITING",
    value: "Automated",
  },
];

export default function IntelligenceVisibilitySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      className="intelligence-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .intelligence-section {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .intelligence-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: start;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .intelligence-content {
          width: 100%;
          min-width: 0;
        }

        .intelligence-label {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        .intelligence-heading {
          max-width: 650px;
          margin: 0 0 17px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .intelligence-description {
          max-width: 650px;
          margin: 0 0 28px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }

        /* =========================================
           METRIC GRID
        ========================================= */

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        /* =========================================
           METRIC CARD
        ========================================= */

        .metric-card {
          width: 100%;
          min-height: 150px;
          box-sizing: border-box;

          padding: 20px;

          background: #f6f7fa;
          border: 1px solid transparent;
          border-radius: 12px;

          opacity: 0;
          transform: translateY(30px);

          transition:
            opacity 600ms ease,
            transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .metric-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .metric-card.visible:hover {
          transform: translateY(-7px);
          border-color: rgba(122, 31, 61, 0.15);
          box-shadow: 0 15px 30px rgba(122, 31, 61, 0.10);
        }

        /* =========================================
           METRIC ICON
        ========================================= */

        .metric-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 13px;

          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};

          transition:
            background 300ms ease,
            color 300ms ease;
        }

        .metric-card:hover .metric-icon {
          background: ${WINE};
          color: #ffffff;
        }

        /* =========================================
           METRIC TEXT
        ========================================= */

        .metric-title {
          margin: 0 0 6px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .metric-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* =========================================
           RIGHT DATA PANEL
        ========================================= */

        .data-panel {
          width: 100%;
          min-width: 0;
          box-sizing: border-box;

          padding: 24px;

          background: #ffffff;
          border: 1px solid #ece9e4;
          border-radius: 18px;

          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);

          opacity: 0;
          transform: translateX(40px);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .data-panel.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* =========================================
           PANEL HEADER
        ========================================= */

        .panel-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 4px;
        }

        .panel-title {
          margin: 0;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
        }

        .panel-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          flex-shrink: 0;

          padding: 5px 9px;

          border: 1px solid #ece9e4;
          border-radius: 999px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.2;
        }

        .panel-status-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #1a9455;
        }

        .panel-subtitle {
          margin: 0 0 22px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        /* =========================================
           CHART
        ========================================= */

        .chart-container {
          width: 100%;
          margin-bottom: 22px;

          overflow: hidden;
          border-radius: 12px;

          background: #f6f7fa;
        }

        .chart-container svg {
          display: block;
          width: 100%;
          height: 128px;
        }

        /* =========================================
           STATS
        ========================================= */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .stat-card {
          min-width: 0;
          padding: 14px;

          background: #ffffff;
          border: 1px solid #ece9e4;
          border-radius: 9px;

          opacity: 0;
          transform: translateY(20px);

          transition:
            opacity 500ms ease,
            transform 500ms ease,
            box-shadow 300ms ease;
        }

        .stat-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-card.visible:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
        }

        .stat-label {
          margin: 0 0 5px;

          color: #a9a6b0;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 0.06em;
        }

        .stat-value {
          margin: 0;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        /* =========================================
           CHART ANIMATION
        ========================================= */

        .chart-line {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;

          animation: drawChart 1.8s ease-out forwards;
        }

        .chart-point {
          opacity: 0;
        }

        .chart-point-visible {
          opacity: 0;

          animation:
            showPoint 0.35s ease-out forwards;
        }

        @keyframes drawChart {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes showPoint {
          from {
            opacity: 0;
            transform: scale(0.5);
            transform-origin: center;
          }

          to {
            opacity: 1;
            transform: scale(1);
            transform-origin: center;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .intelligence-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
            gap: 48px;
          }

          .intelligence-heading {
            font-size: 33px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 900px) {
          .intelligence-wrapper {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .intelligence-heading {
            max-width: 800px;
          }

          .intelligence-description {
            max-width: 800px;
          }

          .data-panel {
            transform: translateY(30px);
          }

          .data-panel.visible {
            transform: translateY(0);
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .intelligence-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
            gap: 30px;
          }

          .intelligence-label {
            margin-bottom: 12px;
            font-size: 9px;
          }

          .intelligence-heading {
            margin-bottom: 14px;
            font-size: 28px;
            line-height: 1.22;
          }

          .intelligence-description {
            margin-bottom: 24px;
            font-size: 13px;
            line-height: 1.7;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .metric-card {
            min-height: auto;
            padding: 17px;
          }

          .metric-icon {
            width: 37px;
            height: 37px;
            margin-bottom: 11px;
          }

          .metric-title {
            font-size: 13px;
          }

          .metric-body {
            font-size: 12px;
          }

          .data-panel {
            padding: 18px;
            border-radius: 15px;
          }

          .panel-title {
            font-size: 14px;
          }

          .panel-subtitle {
            margin-bottom: 18px;
            font-size: 11px;
          }

          .chart-container {
            margin-bottom: 18px;
          }

          .chart-container svg {
            height: 112px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .stat-card {
            padding: 12px;
          }

          .stat-label {
            font-size: 8px;
          }

          .stat-value {
            font-size: 13px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .intelligence-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
            gap: 26px;
          }

          .intelligence-heading {
            font-size: 24px;
            line-height: 1.24;
          }

          .intelligence-description {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .metric-card {
            padding: 15px;
          }

          .metric-title {
            font-size: 12.5px;
          }

          .metric-body {
            font-size: 11.5px;
          }

          .data-panel {
            padding: 15px;
          }

          .panel-header {
            gap: 8px;
          }

          .panel-title {
            font-size: 12.5px;
          }

          .panel-status {
            font-size: 8px;
            padding: 4px 7px;
          }

          .panel-subtitle {
            font-size: 10px;
          }

          .chart-container svg {
            height: 100px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {
          .intelligence-heading {
            font-size: 22px;
          }

          .panel-status {
            display: none;
          }
        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {
          .metric-card.visible:hover {
            transform: translateY(0);
            box-shadow: none;
          }

          .stat-card.visible:hover {
            transform: translateY(0);
            box-shadow: none;
          }

          .metric-card:hover .metric-icon {
            background: #fbeef1;
            color: ${WINE};
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .metric-card,
          .data-panel,
          .stat-card {
            transition: none !important;
            animation: none !important;
          }

          .metric-card,
          .data-panel,
          .stat-card {
            opacity: 1;
            transform: none;
          }

          .chart-line {
            animation: none;
            stroke-dashoffset: 0;
          }

          .chart-point-visible {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      <div className="intelligence-wrapper">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="intelligence-content">
          <p className="intelligence-label">
            INTELLIGENCE & VISIBILITY
          </p>

          <h2 className="intelligence-heading">
            Understand Your E-Commerce Business
          </h2>

          <p className="intelligence-description">
            Online business generates useful information across sales,
            customers and website activity. Analytics and reporting can
            help teams understand this information and support business
            decisions.
          </p>

          {/* Metric Cards */}
          <div className="metrics-grid">
            {metrics.map(
              ({ icon: Icon, title, body }, index) => (
                <div
                  key={title}
                  className={`metric-card ${
                    isVisible ? "visible" : ""
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 180}ms`
                      : "0ms",
                  }}
                >
                  <div className="metric-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="metric-title">
                    {title}
                  </h3>

                  <p className="metric-body">
                    {body}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* =========================================
            RIGHT DATA PANEL
        ========================================= */}

        <div
          className={`data-panel ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* Panel Header */}
          <div className="panel-header">
            <h3 className="panel-title">
              Data Signal Distribution
            </h3>

            <span className="panel-status">
              <span className="panel-status-dot" />
              Continuous
            </span>
          </div>

          <p className="panel-subtitle">
            Structured operational telemetry
          </p>

          {/* Chart */}
          <div className="chart-container">
            <svg
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
              aria-label="Data signal distribution chart"
            >
              <defs>
                <linearGradient
                  id="chartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={WINE}
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="100%"
                    stopColor={WINE}
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              {/* Area */}
              <path
                d="
                  M 10 72
                  L 60 55
                  L 100 61
                  L 140 45
                  L 180 51
                  L 220 35
                  L 260 28
                  L 290 18
                  L 290 100
                  L 10 100
                  Z
                "
                fill="url(#chartGradient)"
              />

              {/* Line */}
              <polyline
                points="
                  10,72
                  60,55
                  100,61
                  140,45
                  180,51
                  220,35
                  260,28
                  290,18
                "
                fill="none"
                stroke={WINE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={
                  isVisible ? "chart-line" : ""
                }
              />

              {/* Points */}
              {[
                [10, 72],
                [60, 55],
                [100, 61],
                [140, 45],
                [180, 51],
                [220, 35],
                [260, 28],
                [290, 18],
              ].map(([x, y], index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill={WINE}
                  className={
                    isVisible
                      ? "chart-point-visible"
                      : "chart-point"
                  }
                  style={{
                    animationDelay: `${700 + index * 100}ms`,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            {stats.map(({ label, value }, index) => (
              <div
                key={label}
                className={`stat-card ${
                  isVisible ? "visible" : ""
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${800 + index * 150}ms`
                    : "0ms",
                }}
              >
                <p className="stat-label">
                  {label}
                </p>

                <p className="stat-value">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}