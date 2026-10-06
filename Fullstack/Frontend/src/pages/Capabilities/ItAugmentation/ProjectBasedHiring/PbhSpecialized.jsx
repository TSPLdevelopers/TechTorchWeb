import React from "react";
import {
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowUpCircle,
  RefreshCw,
  UserPlus,
  Route,
  Target,
} from "lucide-react";

// =====================================================
// DOMAIN DATA
// =====================================================

const domains = [
  {
    icon: Code2,
    label: "DOMAIN 01",
    title: "Custom Software Development",
    description:
      "Build tailored software solutions designed around your business requirements, processes, and operational objectives.",
  },
  {
    icon: Smartphone,
    label: "DOMAIN 02",
    title: "Web & Mobile Application Development",
    description:
      "Create responsive and feature-rich web and mobile applications that support modern digital experiences across devices.",
  },
  {
    icon: BarChart3,
    label: "DOMAIN 03",
    title: "Enterprise Software Solutions",
    description:
      "Develop and enhance software solutions that support core business processes, workflows, and organisational requirements.",
  },
  {
    icon: Workflow,
    label: "DOMAIN 04",
    title: "API Development & System Integration",
    description:
      "Connect applications, platforms, and services through APIs and integrations that enable reliable data exchange and connected workflows.",
  },
  {
    icon: ShieldCheck,
    label: "DOMAIN 05",
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through structured testing across functionality, performance, security, and usability using appropriate testing approaches.",
  },
  {
    icon: ArrowUpCircle,
    label: "DOMAIN 06",
    title: "Software Modernization",
    description:
      "Modernise existing applications and legacy systems with updated architectures and technologies to support evolving business requirements.",
  },
];

const maintenance = {
  icon: RefreshCw,
  label: "DOMAIN 07",
  title: "Ongoing Maintenance & Support",
  description:
    "Provide continued technical support, maintenance, updates, performance improvements, and enhancements after deployment.",
};

const features = [
  {
    icon: UserPlus,
    tag: "01 / TEAM",
    title: "A Flexible Extension Of Your Team",
    description:
      "Strengthen your existing technology capabilities with skilled resources that can contribute to your projects and technical requirements.",
  },
  {
    icon: Route,
    tag: "02 / PROCESS",
    title: "From Requirements to Delivery",
    description:
      "Our approach begins with understanding your business needs and objectives, followed by design, development, testing, deployment, and ongoing support as required.",
  },
  {
    icon: Target,
    tag: "03 / IMPACT",
    title: "Expertise That Supports Your Goals",
    description:
      "Bring together technology expertise and flexible resources to support your projects and respond to changing business requirements.",
  },
];

// =====================================================
// COMPONENT
// =====================================================

export default function SpecializedDomainsPage() {
  return (
    <section className="specialized-domains-section">
      <div className="specialized-domains-container">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="specialized-header">

          {/* Small Label */}
          <div className="specialized-label">
            SPECIALIZED DOMAINS
          </div>

          {/* Main Heading */}
          <h1 className="specialized-heading">
            Supporting Your Complete Technology Journey
          </h1>

          {/* Sub Heading */}
          <p className="specialized-subheading">
            Our software engineering capabilities cover a broad range of
            technology requirements, allowing businesses to access support
            based on their specific project needs.
          </p>
        </div>

        {/* =====================================================
            DOMAIN CARDS
        ====================================================== */}

        <div className="domain-grid">
          {domains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.label}
                className="domain-card"
              >
                {/* Icon */}
                <div className="domain-icon">
                  <Icon
                    className="domain-icon-svg"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Label */}
                <div className="domain-label">
                  {domain.label}
                </div>

                {/* Heading */}
                <h3 className="domain-title">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="domain-description">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            MAINTENANCE CARD
        ====================================================== */}

        <div className="maintenance-card">

          {/* Icon */}
          <div className="domain-icon">
            <RefreshCw
              className="domain-icon-svg"
              strokeWidth={1.8}
            />
          </div>

          {/* Label */}
          <div className="domain-label">
            {maintenance.label}
          </div>

          {/* Heading */}
          <h3 className="domain-title">
            {maintenance.title}
          </h3>

          {/* Description */}
          <p className="maintenance-description">
            {maintenance.description}
          </p>
        </div>

        {/* =====================================================
            BOTTOM FEATURE CARDS
            TEAM / PROCESS / IMPACT
        ====================================================== */}

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.tag}
                className="feature-card"
              >
                {/* Top Row */}
                <div className="feature-top-row">

                  {/* Icon */}
                  <div className="feature-icon">
                    <Icon
                      className="feature-icon-svg"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Tag */}
                  <span className="feature-tag">
                    {feature.tag}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="feature-title">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`
        /* =====================================================
           FONTS & BASE
        ====================================================== */

        .specialized-domains-section {
          width: 100%;
          min-height: 100vh;

          background: #ffffff;

          font-family: "Inter", sans-serif;

          box-sizing: border-box;
        }

        .specialized-domains-section *,
        .specialized-domains-section *::before,
        .specialized-domains-section *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN CONTAINER
           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ====================================================== */

        .specialized-domains-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 50px;
          padding-bottom: 50px;
        }

        /* =====================================================
           HEADER
        ====================================================== */

        .specialized-header {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;

          margin-bottom: 42px;
        }

        .specialized-label {
          margin-bottom: 12px;

          color: #730024;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          line-height: 1.4;

          font-weight: 600;

          letter-spacing: 0.12em;
        }

        .specialized-heading {
          width: 100%;
          max-width: 850px;

          margin: 0 0 13px;

          color: #1c1c1c;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 38px;
          line-height: 1.15;

          font-weight: 600;

          letter-spacing: -0.025em;
        }

        .specialized-subheading {
          width: 100%;
          max-width: 700px;

          margin: 0;

          color: #737373;

          font-family: "Inter", sans-serif;

          font-size: 13.5px;
          line-height: 1.7;

          font-weight: 400;
        }

        /* =====================================================
           DOMAIN GRID
        ====================================================== */

        .domain-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;

          margin-bottom: 18px;
        }

        /* =====================================================
           DOMAIN CARD
        ====================================================== */

        .domain-card {
          width: 100%;
          min-width: 0;

          padding: 20px;

          background: #ffffff;

          border: 1px solid #e5e5e5;

          border-radius: 14px;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .domain-card:hover {
          border-color: rgba(115, 0, 36, 0.3);

          box-shadow:
            0 8px 24px rgba(115, 0, 36, 0.06);

          transform: translateY(-3px);
        }

        /* =====================================================
           DOMAIN ICON
        ====================================================== */

        .domain-icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: rgba(115, 0, 36, 0.06);

          margin-bottom: 16px;
        }

        .domain-icon-svg {
          width: 18px;
          height: 18px;

          color: #730024;

          flex-shrink: 0;
        }

        /* =====================================================
           DOMAIN TEXT
        ====================================================== */

        .domain-label {
          margin-bottom: 7px;

          color: #a3a3a3;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1.4;

          font-weight: 600;

          letter-spacing: 0.06em;
        }

        .domain-title {
          margin: 0 0 9px;

          color: #1c1c1c;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;
          line-height: 1.4;

          font-weight: 600;
        }

        .domain-description {
          margin: 0;

          color: #737373;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          line-height: 1.65;

          font-weight: 400;
        }

        /* =====================================================
           MAINTENANCE CARD
        ====================================================== */

        .maintenance-card {
          width: 100%;

          padding: 20px;

          margin-bottom: 42px;

          background: #ffffff;

          border: 1px solid #e5e5e5;

          border-radius: 14px;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .maintenance-card:hover {
          border-color: rgba(115, 0, 36, 0.3);

          box-shadow:
            0 8px 24px rgba(115, 0, 36, 0.06);

          transform: translateY(-2px);
        }

        .maintenance-description {
          width: 100%;
          max-width: 900px;

          margin: 0;

          color: #737373;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          line-height: 1.65;

          font-weight: 400;
        }

        /* =====================================================
           FEATURE GRID
        ====================================================== */

        .feature-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;
        }

        /* =====================================================
           FEATURE CARD
        ====================================================== */

        .feature-card {
          width: 100%;
          min-width: 0;

          min-height: 175px;

          padding: 19px;

          background: #ffffff;

          border: 1px solid rgba(115, 0, 36, 0.2);

          border-radius: 10px;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .feature-card:hover {
          border-color: rgba(115, 0, 36, 0.4);

          box-shadow:
            0 7px 20px rgba(115, 0, 36, 0.06);

          transform: translateY(-3px);
        }

        /* =====================================================
           FEATURE TOP ROW
        ====================================================== */

        .feature-top-row {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 14px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: rgba(115, 0, 36, 0.06);

          border: 1px solid rgba(115, 0, 36, 0.1);

          flex-shrink: 0;
        }

        .feature-icon-svg {
          width: 18px;
          height: 18px;

          color: #730024;
        }

        .feature-tag {
          display: inline-flex;
          align-items: center;

          padding: 5px 8px;

          border-radius: 4px;

          background: #f5f5f5;

          color: #737373;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1;

          font-weight: 600;

          white-space: nowrap;
        }

        /* =====================================================
           FEATURE TEXT
        ====================================================== */

        .feature-title {
          margin: 0 0 8px;

          color: #1c1c1c;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;
          line-height: 1.4;

          font-weight: 600;
        }

        .feature-description {
          margin: 0;

          color: #737373;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          line-height: 1.65;

          font-weight: 400;
        }

        /* =====================================================
           LARGE TABLET
        ====================================================== */

        @media (max-width: 1200px) {
          .specialized-domains-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .specialized-heading {
            font-size: 35px;
          }

          .domain-grid,
          .feature-grid {
            gap: 16px;
          }

          .domain-card,
          .maintenance-card,
          .feature-card {
            padding: 18px;
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {
          .specialized-domains-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .specialized-header {
            margin-bottom: 34px;
          }

          .specialized-heading {
            font-size: 31px;
          }

          .specialized-subheading {
            font-size: 12.5px;
          }

          .domain-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

          .feature-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 14px;
          }

          .feature-card:last-child {
            grid-column: 1 / -1;
          }

          .maintenance-card {
            margin-bottom: 34px;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {
          .specialized-domains-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 36px;
            padding-bottom: 36px;
          }

          .specialized-header {
            margin-bottom: 28px;
          }

          .specialized-label {
            font-size: 9px;

            margin-bottom: 10px;
          }

          .specialized-heading {
            font-size: 26px;

            line-height: 1.2;

            max-width: 600px;

            margin-bottom: 11px;
          }

          .specialized-subheading {
            font-size: 11.5px;

            line-height: 1.65;
          }

          .domain-grid {
            grid-template-columns: 1fr;

            gap: 12px;

            margin-bottom: 12px;
          }

          .domain-card {
            padding: 18px;

            border-radius: 12px;
          }

          .domain-icon {
            width: 38px;
            height: 38px;

            margin-bottom: 14px;
          }

          .domain-title {
            font-size: 13.5px;
          }

          .domain-description {
            font-size: 11.5px;
          }

          .maintenance-card {
            padding: 18px;

            margin-bottom: 28px;

            border-radius: 12px;
          }

          .maintenance-description {
            font-size: 11.5px;
          }

          .feature-grid {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .feature-card {
            min-height: auto;

            padding: 18px;

            border-radius: 9px;
          }

          .feature-card:last-child {
            grid-column: auto;
          }

          .feature-title {
            font-size: 13.5px;
          }

          .feature-description {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {
          .specialized-domains-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 30px;
            padding-bottom: 30px;
          }

          .specialized-header {
            margin-bottom: 25px;
          }

          .specialized-label {
            font-size: 8px;

            letter-spacing: 0.11em;
          }

          .specialized-heading {
            font-size: 22px;

            line-height: 1.25;
          }

          .specialized-subheading {
            font-size: 10.5px;

            line-height: 1.65;
          }

          .domain-card,
          .maintenance-card {
            padding: 16px;

            border-radius: 11px;
          }

          .domain-icon {
            width: 36px;
            height: 36px;

            margin-bottom: 13px;
          }

          .domain-icon-svg {
            width: 17px;
            height: 17px;
          }

          .domain-label {
            font-size: 8px;
          }

          .domain-title {
            font-size: 12.5px;

            margin-bottom: 7px;
          }

          .domain-description,
          .maintenance-description {
            font-size: 10.5px;

            line-height: 1.65;
          }

          .maintenance-card {
            margin-bottom: 25px;
          }

          .feature-card {
            padding: 16px;
          }

          .feature-top-row {
            margin-bottom: 12px;
          }

          .feature-icon {
            width: 36px;
            height: 36px;
          }

          .feature-icon-svg {
            width: 17px;
            height: 17px;
          }

          .feature-tag {
            font-size: 8px;

            padding: 5px 7px;
          }

          .feature-title {
            font-size: 12.5px;

            margin-bottom: 7px;
          }

          .feature-description {
            font-size: 10.5px;

            line-height: 1.65;
          }
        }

        /* =====================================================
           VERY SMALL DEVICES
        ====================================================== */

        @media (max-width: 360px) {
          .specialized-heading {
            font-size: 20px;
          }

          .specialized-subheading {
            font-size: 10px;
          }

          .domain-title,
          .feature-title {
            font-size: 12px;
          }

          .domain-description,
          .maintenance-description,
          .feature-description {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}