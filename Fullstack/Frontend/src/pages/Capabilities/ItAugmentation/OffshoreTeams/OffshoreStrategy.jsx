import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BRAND = "#8B0046";

const capabilities = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Build software around your business processes, functional requirements, and specific operational needs.",
    label: "Tailored Engineering",
  },
  {
    number: "02",
    title: "Web Application Development",
    description:
      "Develop modern web applications designed around usability, performance, integration, and business requirements.",
    label: "Modern Web Systems",
  },
  {
    number: "03",
    title: "Mobile Application Development",
    description:
      "Extend your development capabilities for mobile applications based on your product and business objectives.",
    label: "Native & Cross-Platform",
  },
  {
    number: "04",
    title: "Software Engineering",
    description:
      "Add engineering expertise across application development, architecture, integration, implementation, and technical problem-solving.",
    label: "Full-Lifecycle Architecture",
  },
  {
    number: "05",
    title: "API & System Integration",
    description:
      "Connect applications, platforms, and business systems through APIs and appropriate integration solutions.",
    label: "Seamless Interoperability",
  },
  {
    number: "06",
    title: "Enterprise Application Development",
    description:
      "Support the development and enhancement of business applications that help organizations manage important operational processes.",
    label: "Mission-Critical Scale",
  },
  {
    number: "07",
    title: "Software Modernization",
    description:
      "Improve existing applications by adopting more suitable technologies, architectures, and development practices.",
    label: "Cloud & Legacy Re-platform",
  },
  {
    number: "08",
    title: "Software Maintenance & Support",
    description:
      "Continue development after launch through application maintenance, technical support, updates, and ongoing improvements.",
    label: "SLA Continuity",
  },
];

export default function OffshoreDevelopmentTeams() {
  const navigate = useNavigate();

  return (
    <main className="offshore-page">
      <style>{`
        /* =========================================================
           BASE
        ========================================================= */

        .offshore-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #172033;
          font-family: "Inter", sans-serif;
        }

        .offshore-page *,
        .offshore-page *::before,
        .offshore-page *::after {
          box-sizing: border-box;
        }

        .offshore-page h1,
        .offshore-page h2,
        .offshore-page h3,
        .offshore-page h4,
        .offshore-page h5,
        .offshore-page h6 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* =========================================================
           UNIVERSAL HORIZONTAL SPACING

           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ========================================================= */

        .offshore-container {
          width: 100%;
          padding-left: 100px;
          padding-right: 100px;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .offshore-hero {
          width: 100%;
          border-bottom: 1px solid #edf0f4;
          background: #ffffff;
        }

        .offshore-hero-inner {
          width: 100%;
          padding-top: 64px;
          padding-bottom: 64px;
        }

        .offshore-hero-grid {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);
          align-items: center;
          gap: 70px;
        }

        .offshore-hero-content {
          width: 100%;
          max-width: 700px;
        }

        /* Badge */

        .offshore-badge {
          margin-bottom: 25px;
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 9px 14px;
          border: 1px solid #ead5df;
          border-radius: 999px;
          background: #fff8fb;
        }

        .offshore-badge-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 7px;
          border-radius: 50%;
          background: ${BRAND};
        }

        .offshore-badge-text {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${BRAND};
        }

        /* Hero Heading */

        .offshore-hero-title {
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 46px;
          line-height: 1.06;
          font-weight: 600;
          letter-spacing: -0.045em;
          color: #111a2e;
        }

        .offshore-hero-title span {
          color: ${BRAND};
        }

        .offshore-hero-subtitle {
          max-width: 680px;
          margin: 20px 0 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -0.025em;
          color: #344158;
        }

        .offshore-hero-description {
          max-width: 680px;
          margin: 17px 0 0;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 400;
          color: #647187;
        }

        /* Hero CTA */

        .offshore-hero-button {
          margin-top: 27px;
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 22px;
          border: 1px solid ${BRAND};
          border-radius: 10px;
          background: ${BRAND};
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(139, 0, 70, 0.18);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .offshore-hero-button:hover {
          transform: translateY(-2px);
          background: #76003b;
          box-shadow: 0 14px 25px rgba(139, 0, 70, 0.25);
        }

        .offshore-hero-button svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .offshore-hero-button:hover svg {
          transform: translateX(3px);
        }

        /* Bottom Pills */

        .offshore-hero-pills {
          margin-top: 25px;
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          padding: 10px 15px;
          border: 1px solid #e2e8ef;
          border-radius: 11px;
          background: #f6f8fa;
        }

        .offshore-pill {
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 500;
          color: #536075;
        }

        .offshore-pill-divider {
          margin: 0 10px;
          color: #c6ccd5;
        }

        /* Hero Image */

        .offshore-hero-visual {
          position: relative;
          width: 100%;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
        }

        .offshore-image-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid #e8ebef;
          border-radius: 18px;
          background: #f4f5f6;
          box-shadow: 0 18px 40px rgba(20, 30, 45, 0.12);
        }

        .offshore-image-card img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .offshore-image-overlay {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 12px 14px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 7px 20px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .offshore-image-overlay-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }

        .offshore-image-info {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .offshore-image-status {
          width: 20px;
          height: 20px;
          flex: 0 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #d9f8eb;
        }

        .offshore-image-status::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1dc98b;
        }

        .offshore-image-copy {
          min-width: 0;
        }

        .offshore-image-label {
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: ${BRAND};
        }

        .offshore-image-title {
          margin: 2px 0 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 600;
          color: #39455a;
        }

        .offshore-image-tier {
          flex-shrink: 0;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 500;
          color: #68758a;
        }

        /* =========================================================
           STRATEGIC PERSPECTIVE
        ========================================================= */

        .offshore-strategy {
          width: 100%;
          background: #ffffff;
        }

        .offshore-strategy-inner {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding-top: 82px;
          padding-bottom: 82px;
        }

        .offshore-section-header {
          text-align: center;
        }

        .offshore-section-label {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: ${BRAND};
        }

        .offshore-section-title {
          margin: 12px auto 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.15;
          font-weight: 600;
          letter-spacing: -0.035em;
          color: #172033;
        }

        .offshore-strategy-content {
          margin-top: 29px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .offshore-strategy-content p {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 400;
          color: #647187;
        }

        /* Quote */

        .offshore-quote {
          position: relative;
          margin-top: 29px;
          padding: 24px 28px;
          overflow: hidden;
          border-radius: 13px;
          background: #f7f9fb;
        }

        .offshore-quote::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: ${BRAND};
        }

        .offshore-quote p {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 600;
          font-style: italic;
          color: #263249;
        }

        .offshore-strategy-final {
          margin-top: 29px;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #647187;
        }

        /* =========================================================
           CAPABILITIES
        ========================================================= */

        .offshore-capabilities {
          width: 100%;
          background: #f8fafc;
        }

        .offshore-capabilities-inner {
          width: 100%;
          padding-top: 82px;
          padding-bottom: 82px;
        }

        .offshore-capabilities-subtitle {
          max-width: 680px;
          margin: 9px auto 0;
          text-align: center;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.55;
          color: #69768b;
        }

        .offshore-capabilities-grid {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        /* Capability Card */

        .offshore-capability-card {
          position: relative;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 22px;
          border: 1px solid #e3e8ee;
          border-radius: 14px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(20, 30, 45, 0.025);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .offshore-capability-card:hover {
          transform: translateY(-5px);
          border-color: #f1c8d9;
          box-shadow: 0 14px 32px rgba(80, 20, 50, 0.09);
        }

        .offshore-capability-circle {
          position: absolute;
          top: -32px;
          right: -32px;
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background: #fcecf3;
          transition:
            width 0.5s ease,
            height 0.5s ease,
            top 0.5s ease,
            right 0.5s ease;
        }

        .offshore-capability-card:hover .offshore-capability-circle {
          top: -100%;
          right: -100%;
          width: 220%;
          height: 220%;
        }

        .offshore-capability-number {
          position: relative;
          z-index: 2;
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ecd4df;
          border-radius: 6px;
          background: #fff8fb;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: ${BRAND};
        }

        .offshore-capability-content {
          position: relative;
          z-index: 2;
          margin-top: 18px;
        }

        .offshore-capability-title {
          margin: 0;
          max-width: 230px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #1d293d;
        }

        .offshore-capability-description {
          margin: 11px 0 0;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.6;
          color: #6a7689;
        }

        .offshore-capability-bottom {
          position: relative;
          z-index: 2;
          margin-top: auto;
          padding-top: 19px;
        }

        .offshore-capability-line {
          width: 100%;
          height: 1px;
          margin-bottom: 12px;
          background: #edf0f3;
        }

        .offshore-capability-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .offshore-capability-label {
          min-width: 0;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.35;
          font-weight: 700;
          color: ${BRAND};
        }

        .offshore-capability-arrow {
          width: 15px;
          height: 15px;
          flex: 0 0 15px;
          color: #aeb7c5;
          transition: transform 0.3s ease;
        }

        .offshore-capability-card:hover .offshore-capability-arrow {
          transform: translateX(4px);
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1199px) {
          .offshore-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .offshore-hero-inner {
            padding-top: 55px;
            padding-bottom: 55px;
          }

          .offshore-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(330px, 0.8fr);
            gap: 45px;
          }

          .offshore-hero-title {
            font-size: 40px;
          }

          .offshore-hero-subtitle {
            font-size: 19px;
          }

          .offshore-hero-description {
            font-size: 14px;
          }

          .offshore-strategy-inner,
          .offshore-capabilities-inner {
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .offshore-section-title {
            font-size: 29px;
          }

          .offshore-capabilities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {
          .offshore-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .offshore-hero-inner {
            padding-top: 48px;
            padding-bottom: 52px;
          }

          .offshore-hero-grid {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .offshore-hero-content {
            max-width: none;
          }

          .offshore-badge {
            margin-bottom: 20px;
            padding: 8px 12px;
          }

          .offshore-badge-text {
            font-size: 9px;
          }

          .offshore-hero-title {
            font-size: 32px;
            line-height: 1.08;
          }

          .offshore-hero-subtitle {
            margin-top: 16px;
            font-size: 18px;
            line-height: 1.4;
          }

          .offshore-hero-description {
            margin-top: 14px;
            font-size: 13px;
            line-height: 1.7;
          }

          .offshore-hero-button {
            width: 100%;
            max-width: 360px;
            margin-top: 23px;
          }

          .offshore-hero-pills {
            width: 100%;
            margin-top: 20px;
            justify-content: center;
            text-align: center;
          }

          .offshore-pill {
            font-size: 10px;
          }

          .offshore-hero-visual {
            max-width: 560px;
          }

          .offshore-image-overlay {
            left: 12px;
            right: 12px;
            bottom: 12px;
            padding: 10px 11px;
          }

          .offshore-image-overlay-row {
            gap: 8px;
          }

          .offshore-image-info {
            gap: 8px;
          }

          .offshore-image-status {
            width: 18px;
            height: 18px;
            flex-basis: 18px;
          }

          .offshore-image-status::after {
            width: 8px;
            height: 8px;
          }

          .offshore-image-label {
            font-size: 8px;
          }

          .offshore-image-title {
            font-size: 10px;
          }

          .offshore-image-tier {
            display: none;
          }

          .offshore-strategy-inner,
          .offshore-capabilities-inner {
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .offshore-section-label {
            font-size: 10px;
          }

          .offshore-section-title {
            margin-top: 10px;
            font-size: 27px;
            line-height: 1.15;
          }

          .offshore-strategy-content {
            margin-top: 23px;
            gap: 15px;
          }

          .offshore-strategy-content p,
          .offshore-strategy-final {
            font-size: 13px;
            line-height: 1.7;
          }

          .offshore-quote {
            margin-top: 24px;
            padding: 20px 21px;
          }

          .offshore-quote p {
            font-size: 13px;
            line-height: 1.6;
          }

          .offshore-strategy-final {
            margin-top: 23px;
          }

          .offshore-capabilities-subtitle {
            margin-top: 8px;
            font-size: 12px;
          }

          .offshore-capabilities-grid {
            margin-top: 30px;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .offshore-capability-card {
            min-height: 225px;
            padding: 20px;
          }

          .offshore-capability-title {
            font-size: 15px;
          }

          .offshore-capability-description {
            font-size: 12px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {
          .offshore-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .offshore-hero-inner {
            padding-top: 42px;
            padding-bottom: 46px;
          }

          .offshore-hero-grid {
            gap: 32px;
          }

          .offshore-badge {
            max-width: 100%;
          }

          .offshore-badge-text {
            font-size: 8px;
            letter-spacing: 0.06em;
          }

          .offshore-hero-title {
            font-size: 28px;
          }

          .offshore-hero-subtitle {
            font-size: 16px;
          }

          .offshore-hero-description {
            font-size: 12px;
          }

          .offshore-hero-button {
            min-height: 48px;
            font-size: 12px;
            padding: 0 17px;
          }

          .offshore-hero-pills {
            padding: 9px 10px;
            line-height: 1.7;
          }

          .offshore-pill {
            font-size: 9px;
          }

          .offshore-pill-divider {
            margin: 0 6px;
          }

          .offshore-image-overlay {
            left: 8px;
            right: 8px;
            bottom: 8px;
            padding: 8px 9px;
          }

          .offshore-image-label {
            font-size: 7px;
          }

          .offshore-image-title {
            font-size: 9px;
          }

          .offshore-strategy-inner,
          .offshore-capabilities-inner {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .offshore-section-title {
            font-size: 24px;
          }

          .offshore-strategy-content p,
          .offshore-strategy-final {
            font-size: 12px;
          }

          .offshore-quote {
            padding: 18px 18px;
          }

          .offshore-quote p {
            font-size: 12px;
          }

          .offshore-capabilities-subtitle {
            font-size: 11px;
          }

          .offshore-capabilities-grid {
            margin-top: 25px;
            gap: 12px;
          }

          .offshore-capability-card {
            min-height: 215px;
            padding: 18px;
          }

          .offshore-capability-title {
            font-size: 14px;
          }

          .offshore-capability-description {
            font-size: 11px;
          }

          .offshore-capability-label {
            font-size: 9px;
          }
        }
      `}</style>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="offshore-hero">
        <div className="offshore-container">
          <div className="offshore-hero-inner">
            <div className="offshore-hero-grid">

              {/* LEFT CONTENT */}
              <div className="offshore-hero-content">

                {/* Badge */}
                <div className="offshore-badge">
                  <span className="offshore-badge-dot" />

                  <span className="offshore-badge-text">
                    IT AUGMENTATION • OFFSHORE ENGINEERING
                  </span>
                </div>

                {/* Heading */}
                <h1 className="offshore-hero-title">
                  Offshore Development <span>Teams</span>
                </h1>

                {/* Sub Heading */}
                <h2 className="offshore-hero-subtitle">
                  Extend Your Development Capabilities With the Right
                  Technical Team
                </h2>

                {/* Description */}
                <p className="offshore-hero-description">
                  Build a dedicated development team that works around your
                  projects, technology requirements, and business goals.
                  TechTorch helps businesses strengthen their engineering
                  capabilities with experienced professionals across software
                  development, engineering, cloud, and technology support.
                </p>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => navigate("/development-team")}
                  className="offshore-hero-button"
                >
                  Build Your Development Team
                  <ArrowRight />
                </button>

                {/* Bottom Pills */}
                <div className="offshore-hero-pills">
                  <span className="offshore-pill">
                    Global Delivery Centers
                  </span>

                  <span className="offshore-pill-divider">•</span>

                  <span className="offshore-pill">
                    SLA-Governed Pods
                  </span>

                  <span className="offshore-pill-divider">•</span>

                  <span className="offshore-pill">
                    Direct Engineering Alignment
                  </span>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="offshore-hero-visual">
                <div className="offshore-image-card">
                  <img
                    src="/OffshoreStrategy.png"
                    alt="Offshore development team"
                  />

                  {/* Image Bottom Overlay */}
                  <div className="offshore-image-overlay">
                    <div className="offshore-image-overlay-row">

                      <div className="offshore-image-info">
                        <span className="offshore-image-status" />

                        <div className="offshore-image-copy">
                          <p className="offshore-image-label">
                            Global Delivery Architecture
                          </p>

                          <p className="offshore-image-title">
                            Scalable Dedicated Engineering Pods
                          </p>
                        </div>
                      </div>

                      <span className="offshore-image-tier">
                        Tier-1 Capability
                      </span>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRATEGIC PERSPECTIVE
      ===================================================== */}
      <section className="offshore-strategy">
        <div className="offshore-container">
          <div className="offshore-strategy-inner">

            <div className="offshore-section-header">
              <p className="offshore-section-label">
                STRATEGIC PERSPECTIVE
              </p>

              <h2 className="offshore-section-title">
                Build a Development Team That Fits Your Business
              </h2>
            </div>

            <div className="offshore-strategy-content">
              <p>
                Finding the right technical skills at the right time can be
                challenging, especially when development requirements continue
                to grow. Instead of expanding an internal team for every new
                project, businesses can use an offshore development model to
                add the expertise and capacity they need.
              </p>

              <p>
                TechTorch helps businesses build development teams around
                their specific requirements. Whether you are developing a new
                application, extending an existing product, modernizing
                legacy software, or looking for additional engineering
                capacity, we can help you establish a team suited to your
                project.
              </p>

              <p>
                Our teams can work alongside your existing employees or
                operate as a dedicated development function, depending on your
                business model and project needs.
              </p>

              <p>
                The focus is not simply on providing technical resources. It
                is about bringing together the right capabilities, establishing
                a clear working model, and creating a team that can contribute
                effectively to your development goals.
              </p>
            </div>

            {/* Quote */}
            <div className="offshore-quote">
              <p>
                “Development Support Built Around Your Requirements: Every
                project has different priorities, technologies, timelines, and
                technical challenges. A development team should therefore be
                structured around the actual requirements of the project.”
              </p>
            </div>

            {/* Final Paragraph */}
            <p className="offshore-strategy-final">
              TechTorch provides flexible team models that can support
              different development needs—from adding individual specialists
              to building a dedicated team for an ongoing product or
              application. Our broader technology capabilities across
              software engineering, software development and support, cloud
              infrastructure, cybersecurity, and IT consulting allow us to
              support projects from different technical perspectives.
            </p>

          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT CAPABILITIES
      ===================================================== */}
      <section className="offshore-capabilities">
        <div className="offshore-container">
          <div className="offshore-capabilities-inner">

            {/* Heading */}
            <div className="offshore-section-header">
              <p className="offshore-section-label">
                SERVICE CAPABILITIES
              </p>

              <h2 className="offshore-section-title">
                Our Development Capabilities
              </h2>

              <p className="offshore-capabilities-subtitle">
                Comprehensive software engineering expertise to support your
                technology initiatives.
              </p>
            </div>

            {/* Cards */}
            <div className="offshore-capabilities-grid">
              {capabilities.map((item) => (
                <div
                  key={item.number}
                  className="offshore-capability-card"
                >
                  <div className="offshore-capability-circle" />

                  {/* Number */}
                  <div className="offshore-capability-number">
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="offshore-capability-content">
                    <h3 className="offshore-capability-title">
                      {item.title}
                    </h3>

                    <p className="offshore-capability-description">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="offshore-capability-bottom">
                    <div className="offshore-capability-line" />

                    <div className="offshore-capability-footer">
                      <span className="offshore-capability-label">
                        {item.label}
                      </span>

                      <ArrowRight className="offshore-capability-arrow" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}