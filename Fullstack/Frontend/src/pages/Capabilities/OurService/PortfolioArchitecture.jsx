import React from "react";
import {
  Wrench,
  Zap,
  Cloud,
  ShieldCheck,
  Code2,
  Database,
  RefreshCw,
  Users,
  ArrowRight,
} from "lucide-react";

const BRAND_COLOR = "#730024";

const services = [
  {
    icon: Wrench,
    tag: "01 // ADVISORY",
    title: "IT Consultancy",
    desc: "Strategic technology guidance to help businesses make better decisions, modernize their systems and plan for sustainable digital growth.",
    points: [
      "Enterprise IT Roadmap Modernization",
      "Technology Readiness & Budget Optimization",
      "Digital Transformation Feasibility",
    ],
    cta: "Consult with Architects",
    image: "/digital solution.png",
  },
  {
    icon: Zap,
    tag: "02 // INTELLIGENCE",
    title: "AI Solutions",
    desc: "Practical AI capabilities that help businesses automate processes, improve productivity and discover new opportunities through intelligent technology.",
    points: [
      "Intelligent Process & Document Automation",
      "Contextual Decision Support & Analytics",
      "Pragmatic Enterprise AI Integration",
    ],
    cta: "Explore AI Capabilities",
    image: "/Ai integration.png",
  },
  {
    icon: Cloud,
    tag: "03 // PLATFORM",
    title: "Cloud Infrastructure",
    desc: "Scalable and reliable cloud environments designed to support modern applications, changing workloads and business growth.",
    points: [
      "Hybrid & Multi-Cloud Architecture",
      "Zero-Downtime Migration & Optimization",
      "24/7 Resilience & Performance Engineering",
    ],
    cta: "Scale Your Cloud",
    image: "/Analysis.png",
  },
  {
    icon: ShieldCheck,
    tag: "04 // RESILIENCE",
    title: "Cyber Security",
    desc: "Security-focused solutions that help protect your systems, data and digital operations against evolving technology risks.",
    points: [
      "Posture Assessment & Threat Mitigation",
      "Data Protection & Regulatory Compliance",
      "Continuous Monitoring & Incident Protocols",
    ],
    cta: "Review Security Posture",
    image: "/Security.png",
  },
  {
    icon: Code2,
    tag: "05 // ENGINEERING",
    title: "Software Engineering",
    desc: "End-to-end engineering expertise for designing, developing, integrating and improving reliable business software.",
    points: [
      "Full-Cycle Architecture & System Design",
      "API & Microservices Integration",
      "High-Throughput Performance Engineering",
    ],
    cta: "Explore Engineering Lifecycle",
    image: "/Enterprise AI command center.png",
  },
  {
    icon: Database,
    tag: "06 // DEVELOPMENT",
    title: "Software Development & Support",
    desc: "Custom software built around your business requirements, supported by ongoing maintenance, optimization and technical support.",
    points: [
      "Custom Enterprise Application Development",
      "Legacy Refactoring & Modernization",
      "SLA-backed 24/7 Technical Support",
    ],
    cta: "Build & Maintain Software",
    image: "/Modernexecutive.png",
  },
  {
    icon: RefreshCw,
    tag: "07 // OPERATIONS",
    title: "BPO Services",
    desc: "Technology-enabled business process support designed to improve efficiency, consistency and operational performance.",
    points: [
      "Automated Workflow Orchestration",
      "Back-Office Process Optimization",
      "Standardized Quality & Governance SLAs",
    ],
    cta: "Optimize Workflows",
    image: "/Ecosystem.png",
  },
  {
    icon: Users,
    tag: "08 // TALENT",
    title: "Resource & Staffing",
    desc: "Skilled technology professionals and flexible resources to help businesses strengthen teams and deliver projects effectively.",
    points: [
      "Specialized Senior Engineering Talent",
      "Agile Team Augmentation",
      "Rapid Deployment & Fast Machine Onboarding",
    ],
    cta: "Access Specialized Talent",
    image: "/Card4hero.png",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="service-card">
      {/* =================================================
          IMAGE
      ================================================= */}

      <div className="service-card-image-wrap">
        <img
          src={service.image}
          alt={service.title}
          className="service-card-image"
        />

        <div className="service-card-image-overlay" />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="service-card-content">
        {/* Icon + Tag */}

        <div className="service-card-top">
          <span className="service-card-icon">
            <Icon size={17} strokeWidth={2} />
          </span>

          <span className="service-card-tag">
            {service.tag}
          </span>
        </div>

        {/* Title */}

        <h3 className="service-card-title">
          {service.title}
        </h3>

        {/* Description */}

        <p className="service-card-description">
          {service.desc}
        </p>

        {/* Points */}

        <ul className="service-card-points">
          {service.points.map((point) => (
            <li key={point}>
              <span className="service-card-point-dot" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}

        <div className="service-card-cta-wrap">
          <a href="#" className="service-card-cta">
            <span>{service.cta}</span>

            <ArrowRight size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechTorchServices() {
  return (
    <>
      <section className="techtorch-services-section">
        <div className="techtorch-services-container">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="techtorch-services-header">
            {/* Label */}

            <div className="techtorch-services-label">
              <span className="techtorch-services-label-line" />

              <span>Technology Services</span>

              <span className="techtorch-services-label-line" />
            </div>

            {/* Heading */}

            <h2 className="techtorch-services-heading">
              Our Core Technology Services
            </h2>

            {/* Description */}

            <p className="techtorch-services-description">
              Engineered to address mission-critical business requirements
              with high precision, reliable execution and continuous support
              across the entire technology lifecycle.
            </p>
          </div>

          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <div className="techtorch-services-grid">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
              />
            ))}
          </div>

          {/* =================================================
              INTEGRATED CAPABILITIES
          ================================================= */}

          <div className="integrated-capabilities">
            <div className="integrated-capabilities-inner">
              {/* Content */}

              <div className="integrated-capabilities-content">
                <span className="integrated-capabilities-badge">
                  Integrated Capabilities
                </span>

                <h2 className="integrated-capabilities-heading">
                  One Technology Partner. Multiple Business Needs.
                </h2>

                <p className="integrated-capabilities-description">
                  From strategy and development to security, infrastructure
                  and support, TechTorch brings the technology capabilities
                  businesses need under one roof. Whether you need to build
                  something new, improve an existing system, protect your
                  digital environment or scale your technology capabilities,
                  our team is ready to help.
                </p>

                <div className="integrated-capabilities-points">
                  <span>• Single SLA Governance</span>
                  <span>• Rapid Architecture Advisory</span>
                  <span>• Cross-Domain Teams</span>
                </div>
              </div>

              {/* Button */}

              <button className="integrated-capabilities-button">
                <span>Talk to Our Experts</span>

                <ArrowRight size={14} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .techtorch-services-section {
          width: 100%;
          overflow: hidden;

          padding-left: 100px;
          padding-right: 100px;
          padding-top: 78px;
          padding-bottom: 78px;

          background: #f8f8f7;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .techtorch-services-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .techtorch-services-header {
          width: 100%;
          max-width: 760px;

          margin: 0 auto 40px;

          text-align: center;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .techtorch-services-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          margin-bottom: 13px;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.12em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        .techtorch-services-label-line {
          width: 30px;
          height: 1px;

          background: ${BRAND_COLOR};
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .techtorch-services-heading {
          margin: 0 0 12px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 34px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;

          color: #171717;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .techtorch-services-description {
          max-width: 700px;

          margin: 0 auto;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           SERVICES GRID
        ===================================================== */

        .techtorch-services-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 18px;

          width: 100%;
        }

        /* =====================================================
           SERVICE CARD
        ===================================================== */

        .service-card {
          position: relative;

          display: flex;
          flex-direction: column;

          min-width: 0;
          height: 100%;

          overflow: hidden;

          border: 1px solid #e5e5e5;
          border-left: 3px solid ${BRAND_COLOR};
          border-radius: 12px;

          background: #ffffff;

          box-shadow:
            0 5px 20px rgba(0, 0, 0, 0.035);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 14px 32px rgba(115, 0, 36, 0.1);
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .service-card-image-wrap {
          position: relative;

          width: 100%;
          height: 160px;

          overflow: hidden;

          background: #e5e5e5;
        }

        .service-card-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.55s ease;
        }

        .service-card:hover .service-card-image {
          transform: scale(1.035);
        }

        .service-card-image-overlay {
          position: absolute;
          inset: 0;

          pointer-events: none;

          background: rgba(0, 0, 0, 0.025);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .service-card-content {
          display: flex;
          flex: 1;
          flex-direction: column;

          padding: 20px;
        }

        /* =====================================================
           TOP ROW
        ===================================================== */

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;

          margin-bottom: 14px;
        }

        /* =====================================================
           ICON
        ===================================================== */

        .service-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 34px;
          height: 34px;
          flex-shrink: 0;

          border-radius: 9px;

          background: #fbe4ef;
          color: ${BRAND_COLOR};

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .service-card:hover .service-card-icon {
          transform: translateY(-2px);

          background: #f6dbe7;
        }

        /* =====================================================
           TAG
        ===================================================== */

        .service-card-tag {
          min-width: 0;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.07em;

          color: #a3a3a3;

          text-align: right;
        }

        /* =====================================================
           TITLE
        ===================================================== */

        .service-card-title {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;

          color: #171717;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .service-card-description {
          margin: 0 0 14px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.65;

          color: #737373;
        }

        /* =====================================================
           POINTS
        ===================================================== */

        .service-card-points {
          display: flex;
          flex-direction: column;
          gap: 7px;

          margin: 0 0 18px;
          padding: 0;

          list-style: none;
        }

        .service-card-points li {
          display: flex;
          align-items: flex-start;

          gap: 7px;

          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 400;
          line-height: 1.5;

          color: #525252;
        }

        .service-card-point-dot {
          width: 4px;
          height: 4px;
          flex-shrink: 0;

          margin-top: 5px;

          border-radius: 50%;

          background: ${BRAND_COLOR};
        }

        /* =====================================================
           CTA
        ===================================================== */

        .service-card-cta-wrap {
          margin-top: auto;

          padding-top: 13px;

          border-top: 1px solid #f0f0f0;
        }

        .service-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          font-family: "Inter", sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          line-height: 1.3;

          color: ${BRAND_COLOR};

          text-decoration: none;

          transition:
            gap 0.3s ease,
            opacity 0.3s ease;
        }

        .service-card-cta:hover {
          gap: 8px;
          opacity: 0.8;
        }

        /* =====================================================
           INTEGRATED CAPABILITIES
        ===================================================== */

        .integrated-capabilities {
          width: 100%;

          margin-top: 26px;

          overflow: hidden;

          border: 1px solid #e5e5e5;
          border-radius: 14px;

          background:
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f7f4f5 100%
            );

          box-shadow:
            0 5px 20px rgba(0, 0, 0, 0.025);
        }

        .integrated-capabilities-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 40px;

          padding: 30px 32px;
        }

        /* =====================================================
           INTEGRATED CONTENT
        ===================================================== */

        .integrated-capabilities-content {
          max-width: 900px;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .integrated-capabilities-badge {
          display: inline-block;

          margin-bottom: 9px;

          padding: 5px 9px;

          border-radius: 5px;

          background: #fbe4ef;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.07em;
          text-transform: uppercase;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .integrated-capabilities-heading {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 23px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.015em;

          color: #171717;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .integrated-capabilities-description {
          max-width: 850px;

          margin: 0 0 12px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.65;

          color: #737373;
        }

        /* =====================================================
           POINTS
        ===================================================== */

        .integrated-capabilities-points {
          display: flex;
          flex-wrap: wrap;

          gap: 7px 18px;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.4;

          color: ${BRAND_COLOR};
        }

        /* =====================================================
           BUTTON
        ===================================================== */

        .integrated-capabilities-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;

          flex-shrink: 0;

          padding: 12px 19px;

          border: 0;
          border-radius: 7px;

          background: #730042;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          line-height: 1;

          color: #ffffff;

          cursor: pointer;

          box-shadow:
            0 7px 18px rgba(115, 0, 36, 0.16);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            opacity 0.3s ease;
        }

        .integrated-capabilities-button:hover {
          transform: translateY(-2px);

          opacity: 0.92;

          box-shadow:
            0 10px 23px rgba(115, 0, 36, 0.22);
        }

        /* =====================================================
           TABLET — 1200px
           40px horizontal spacing
        ===================================================== */

        @media (max-width: 1200px) {
          .techtorch-services-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 68px;
            padding-bottom: 68px;
          }

          .techtorch-services-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .service-card-image-wrap {
            height: 170px;
          }

          .integrated-capabilities-inner {
            padding: 27px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .techtorch-services-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .techtorch-services-header {
            margin-bottom: 34px;
          }

          .techtorch-services-heading {
            font-size: 30px;
          }

          .techtorch-services-description {
            font-size: 12.5px;
          }

          .service-card-image-wrap {
            height: 160px;
          }

          .service-card-content {
            padding: 18px;
          }

          .service-card-title {
            font-size: 14px;
          }

          .service-card-description {
            font-size: 10.5px;
          }

          .service-card-points li {
            font-size: 9px;
          }

          .integrated-capabilities-inner {
            align-items: flex-start;

            gap: 25px;

            padding: 24px;
          }

          .integrated-capabilities-heading {
            font-size: 21px;
          }

          .integrated-capabilities-description {
            font-size: 10.5px;
          }
        }

        /* =====================================================
           MOBILE — 700px
           24px horizontal spacing
        ===================================================== */

        @media (max-width: 700px) {
          .techtorch-services-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .techtorch-services-header {
            margin-bottom: 28px;
          }

          .techtorch-services-label {
            gap: 8px;

            margin-bottom: 10px;

            font-size: 9px;
          }

          .techtorch-services-label-line {
            width: 26px;
          }

          .techtorch-services-heading {
            margin-bottom: 9px;

            font-size: 27px;
          }

          .techtorch-services-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .techtorch-services-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .service-card-image-wrap {
            height: 190px;
          }

          .service-card-content {
            padding: 20px;
          }

          .service-card-top {
            margin-bottom: 13px;
          }

          .service-card-title {
            font-size: 16px;
          }

          .service-card-description {
            font-size: 11.5px;
          }

          .service-card-points li {
            font-size: 10px;
          }

          .integrated-capabilities {
            margin-top: 18px;
          }

          .integrated-capabilities-inner {
            flex-direction: column;

            align-items: flex-start;

            gap: 20px;

            padding: 22px;
          }

          .integrated-capabilities-heading {
            font-size: 19px;
          }

          .integrated-capabilities-description {
            font-size: 10.5px;
          }

          .integrated-capabilities-button {
            width: fit-content;

            padding: 11px 17px;

            font-size: 9px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
           16px horizontal spacing
        ===================================================== */

        @media (max-width: 480px) {
          .techtorch-services-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 45px;
            padding-bottom: 45px;
          }

          .techtorch-services-header {
            margin-bottom: 24px;
          }

          .techtorch-services-label {
            gap: 7px;

            font-size: 8px;
          }

          .techtorch-services-label-line {
            width: 23px;
          }

          .techtorch-services-heading {
            font-size: 24px;
          }

          .techtorch-services-description {
            font-size: 11px;
          }

          .techtorch-services-grid {
            gap: 12px;
          }

          .service-card-image-wrap {
            height: 175px;
          }

          .service-card-content {
            padding: 17px;
          }

          .service-card-icon {
            width: 32px;
            height: 32px;
          }

          .service-card-icon svg {
            width: 15px;
            height: 15px;
          }

          .service-card-tag {
            font-size: 7px;
          }

          .service-card-title {
            margin-bottom: 8px;

            font-size: 15px;
          }

          .service-card-description {
            margin-bottom: 12px;

            font-size: 10.5px;
          }

          .service-card-points {
            gap: 6px;

            margin-bottom: 16px;
          }

          .service-card-points li {
            font-size: 9px;
          }

          .service-card-cta-wrap {
            padding-top: 11px;
          }

          .service-card-cta {
            font-size: 9px;
          }

          .integrated-capabilities {
            margin-top: 16px;
          }

          .integrated-capabilities-inner {
            padding: 18px;
          }

          .integrated-capabilities-badge {
            margin-bottom: 8px;

            font-size: 7px;
          }

          .integrated-capabilities-heading {
            font-size: 17px;
          }

          .integrated-capabilities-description {
            font-size: 9.5px;
          }

          .integrated-capabilities-points {
            gap: 5px 12px;

            font-size: 8px;
          }

          .integrated-capabilities-button {
            padding: 10px 15px;

            font-size: 8.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE — 360px
        ===================================================== */

        @media (max-width: 360px) {
          .techtorch-services-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .techtorch-services-heading {
            font-size: 22px;
          }

          .techtorch-services-description {
            font-size: 10.5px;
          }

          .service-card-image-wrap {
            height: 160px;
          }

          .service-card-content {
            padding: 15px;
          }

          .service-card-title {
            font-size: 14px;
          }

          .service-card-description {
            font-size: 10px;
          }

          .service-card-points li {
            font-size: 8.5px;
          }

          .integrated-capabilities-inner {
            padding: 16px;
          }

          .integrated-capabilities-heading {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}