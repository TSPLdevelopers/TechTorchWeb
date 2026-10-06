import React from "react";
import {
  Zap,
  ArrowRight,
  UserCog,
  ArrowLeftRight,
  Users,
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  ShieldCheck,
  RefreshCw,
  Search,
  CheckCircle2,
  Compass,
  Rocket,
  Award,
  Layers,
  Target,
  CheckCheck,
} from "lucide-react";

/* =========================================================
   BRAND
========================================================= */

const BRAND_COLOR = "#730024";

/* =========================================================
   DATA
========================================================= */

const heroTags = [
  "Skilled Resources",
  "Flexible Staffing",
  "Technology Support",
];

const approachCards = [
  {
    icon: UserCog,
    number: "01",
    title: "Skill-Aligned Resources",
    description:
      "Identify technical professionals based on the skills, experience, technology environment, and responsibilities required for your project.",
    tags: [
      "Technical Skills",
      "Relevant Expertise",
      "Project Requirements",
    ],
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Flexible Team Support",
    description:
      "Add technical capacity when your workload or project requirements change, while complementing the capabilities of your existing team.",
    tags: [
      "Flexible Staffing",
      "Team Support",
      "Technical Capacity",
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Project-Focused Collaboration",
    description:
      "Enable resources to work within your existing project structure, processes, technologies, and team environment.",
    tags: [
      "Project Collaboration",
      "Team Integration",
      "Technical Support",
    ],
  },
];

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Software Development",
    description:
      "Develop software solutions around specific business processes, requirements, and operational needs.",
    tag: "Enterprise Aligned",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Web & Mobile Application Development",
    description:
      "Create practical and responsive applications designed for modern web and mobile environments.",
    tag: "Full-Stack & Native",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Enterprise Software Solutions",
    description:
      "Support core business functions through technology solutions that integrate with existing business processes.",
    tag: "ERP & Core Systems",
  },
  {
    icon: Workflow,
    number: "04",
    title: "API Development & System Integration",
    description:
      "Connect applications and platforms through reliable APIs and structured system integration.",
    tag: "Secure REST & Microservices",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through functional, performance, security, and usability testing.",
    tag: "Functional & Automated QA",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Software Modernization",
    description:
      "Modernize existing applications and technology environments to meet changing business and technical requirements.",
    tag: "Legacy to Cloud & Modern Stack",
  },
];

const phases = [
  {
    icon: Search,
    dot: "1",
    label: "Discovery",
    tag: "01 / PHASE 1",
    title: "Understand & Scoping",
    description:
      "We begin by understanding your project objectives, technology environment, required skills, and resource needs.",
    keyActivities: [
      "Objective Scoping",
      "Tech Stack Matrix",
      "Skill Profile Audit",
    ],
    footLabel: "Detailed Blueprint",
    footRight: "Step 01",
  },
  {
    icon: CheckCircle2,
    dot: "2",
    label: "Alignment",
    tag: "02 / PHASE 2",
    title: "Identify & Select",
    description:
      "Technical resources are mapped to the capabilities needed for your project with rigorous vetting.",
    keyActivities: [
      "Skill & Seniority Match",
      "Architecture Validation",
      "Culture & Team Fit",
    ],
    footLabel: "Verified Talent Profiles",
    footRight: "Step 02",
  },
  {
    icon: Compass,
    dot: "3",
    label: "Integration",
    tag: "03 / PHASE 3",
    title: "Align & Onboard",
    description:
      "Relevant technology resources are aligned with your project, workflows, and existing team structure.",
    keyActivities: [
      "Workflow Synchronization",
      "Toolchain & Access Setup",
      "Sprint Alignment",
    ],
    footLabel: "Team Embedding",
    footRight: "Step 03",
  },
  {
    icon: Rocket,
    dot: "4",
    label: "Momentum",
    tag: "04 / PHASE 4",
    title: "Support & Scale",
    description:
      "Resources continue to contribute with ongoing technical governance as project priorities and requirements evolve.",
    keyActivities: [
      "Performance Monitoring",
      "Dynamic Capacity Scaling",
      "Knowledge Retention",
    ],
    footLabel: "Delivery Velocity",
    footRight: "Step 04",
  },
];

const whyCards = [
  {
    icon: Target,
    title: "Relevant Technical Expertise",
    description:
      "Access technology capabilities aligned with your project requirements.",
  },
  {
    icon: Layers,
    title: "Flexible Resource Support",
    description:
      "Support your existing team with additional technical capacity when needed.",
  },
  {
    icon: Compass,
    title: "Project-Focused Approach",
    description:
      "Keep resource requirements connected to your actual project goals and technology environment.",
  },
  {
    icon: Award,
    title: "Broad Technology Capabilities",
    description:
      "Benefit from expertise spanning software development, integration, testing, modernization, and support.",
  },
];

const finalTags = [
  "Skilled Resources",
  "Flexible Staffing",
  "Technology Support",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function BenchHiringPage() {
  return (
    <>
      <div className="bench-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="bench-hero">
          <div className="bench-container bench-hero-container">
            <div className="bench-hero-grid">

              {/* LEFT */}
              <div className="bench-hero-content">

                <div className="bench-hero-badge">
                  <Zap className="bench-hero-badge-icon" />

                  <span>
                    IT AUGMENTATION • BENCH HIRING
                  </span>
                </div>

                <h1 className="bench-hero-heading">
                  Build Your Technology Team with the Right Resources
                </h1>

                <p className="bench-hero-subheading">
                  Access skilled technology professionals to support your
                  projects, strengthen your existing teams, and respond to
                  changing business and technology requirements.
                </p>

                <button type="button" className="bench-primary-button">
                  Talk to Our Experts
                  <ArrowRight />
                </button>

                <div className="bench-hero-tags">
                  {heroTags.map((tag) => (
                    <span key={tag} className="bench-tag">
                      <span className="bench-tag-dot" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="bench-hero-image-card">
                <div className="bench-hero-image">
                  <div className="bench-hero-image-overlay" />

                  <div className="bench-hero-image-footer">
                    <span>
                      <span className="bench-status-dot" />
                      Enterprise Ready Bench
                    </span>

                    <span>Verified Technical Talent</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            STRATEGIC RESOURCING
        ===================================================== */}

        <section className="bench-content-section">
          <div className="bench-container">

            <div className="bench-centered-content">

              <div className="bench-section-label">
                <span />
                STRATEGIC RESOURCING
              </div>

              <h2 className="bench-section-heading">
                Flexible Technology Resources for Growing Business Needs
              </h2>

              <div className="bench-prose">
                <p>
                  Technology projects do not always require the same level of
                  expertise or team capacity. As business priorities change,
                  organizations may need additional technical resources to
                  support ongoing projects, new initiatives, or specific
                  technology requirements.
                </p>

                <p>
                  TechTorch provides Resource and Staffing solutions that help
                  businesses access skilled professionals and flexible
                  workforce support. Our approach focuses on understanding
                  your project requirements and aligning the right technical
                  capabilities with your existing teams and working
                  environment.
                </p>

                <p>
                  From software development and application engineering to
                  system integration, testing, modernization, and technical
                  support, the right resources can help businesses manage
                  changing workloads while keeping their technology
                  initiatives moving forward.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <blockquote className="bench-pull-quote">
              <p>
                "The right people, the right technical capabilities, and the
                right support for your business requirements."
              </p>

              <span>
                — TECHTORCH RESOURCING FRAMEWORK
              </span>
            </blockquote>

            <div className="bench-centered-content bench-secondary-content">

              <h3 className="bench-secondary-heading">
                Technology Expertise That Supports Your Projects
              </h3>

              <div className="bench-prose">
                <p>
                  TechTorch's software engineering capabilities cover a broad
                  range of technology requirements, including custom software
                  development, web and mobile application development,
                  enterprise software solutions, API development and system
                  integration, quality assurance and testing, software
                  modernization, and ongoing maintenance and support.
                </p>

                <p>
                  This allows businesses to align technical resources with
                  the nature of their projects, existing technology
                  environment, and operational requirements.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =====================================================
            STRUCTURED APPROACH
        ===================================================== */}

        <section className="bench-section">
          <div className="bench-container">

            <div className="bench-section-eyebrow">
              BENCH HIRING SUPPORT
            </div>

            <h2 className="bench-section-title">
              Structured Approach to Engineering Continuity
            </h2>

            <div className="bench-approach-grid">
              {approachCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div key={card.number} className="bench-card">

                    <div className="bench-card-top">
                      <div className="bench-icon-box">
                        <Icon />
                      </div>

                      <span className="bench-card-number">
                        {card.number}
                      </span>
                    </div>

                    <h3>{card.title}</h3>

                    <p>{card.description}</p>

                    <div className="bench-card-tags">
                      {card.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY CAPABILITIES
        ===================================================== */}

        <section className="bench-section">
          <div className="bench-container">

            <div className="bench-section-eyebrow">
              TECHNOLOGY CAPABILITIES
            </div>

            <h2 className="bench-section-title">
              Support Across Your Technology Requirements
            </h2>

            <p className="bench-section-description">
              Bench hiring can support a range of technology activities
              depending on the requirements of your project.
            </p>

            <div className="bench-capability-grid">
              {capabilities.map((cap) => {
                const Icon = cap.icon;

                return (
                  <div key={cap.number} className="bench-card">

                    <div className="bench-card-top">
                      <div className="bench-icon-box">
                        <Icon />
                      </div>

                      <span className="bench-capability-number">
                        CAPABILITY {cap.number}
                      </span>
                    </div>

                    <h3>{cap.title}</h3>

                    <p>{cap.description}</p>

                    <span className="bench-capability-tag">
                      {cap.tag}
                    </span>

                  </div>
                );
              })}
            </div>

            {/* Capability 07 */}
            <div className="bench-maintenance-card">

              <div className="bench-maintenance-left">

                <div className="bench-icon-box">
                  <RefreshCw />
                </div>

                <div>
                  <div className="bench-maintenance-label">
                    CAPABILITY 07
                  </div>

                  <h3>Ongoing Maintenance & Support</h3>

                  <p>
                    Provide continued technical assistance, updates,
                    improvements, and support throughout the software
                    lifecycle.
                  </p>
                </div>

              </div>

              <div className="bench-maintenance-right">
                <span>SLA & Continuous Health</span>

                <strong>
                  Specialized Support →
                </strong>
              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            DELIVERY WORKFLOW
        ===================================================== */}

        <section className="bench-section">
          <div className="bench-container">

            <div className="bench-workflow-header">

              <div className="bench-section-label">
                <span />
                DELIVERY WORKFLOW • 4-PHASE DEPLOYMENT
              </div>

              <div className="bench-sla-label">
                <span />
                SLA-GOVERNED EXECUTION
              </div>

            </div>

            <h2 className="bench-section-title">
              From Requirement to Resource Alignment
            </h2>

            <p className="bench-section-description">
              A systematic four-stage methodology engineered to maintain
              project velocity, smooth onboarding, and uninterrupted
              operational continuity.
            </p>

            {/* Tracker */}
            <div className="bench-phase-tracker">

              <div className="bench-phase-line" />

              {phases.map((phase) => (
                <div key={phase.dot} className="bench-phase-point">

                  <div className="bench-phase-number">
                    {phase.dot}
                  </div>

                  <span>{phase.label}</span>

                </div>
              ))}

            </div>

            {/* Phase Cards */}
            <div className="bench-phase-grid">

              {phases.map((phase) => {
                const Icon = phase.icon;

                return (
                  <div key={phase.tag} className="bench-phase-card">

                    <div className="bench-phase-card-top">

                      <div className="bench-icon-box">
                        <Icon />
                      </div>

                      <span>{phase.tag}</span>

                    </div>

                    <h3>{phase.title}</h3>

                    <p>{phase.description}</p>

                    <div className="bench-activities-label">
                      KEY ACTIVITIES
                    </div>

                    <ul>
                      {phase.keyActivities.map((activity) => (
                        <li key={activity}>
                          <span />
                          {activity}
                        </li>
                      ))}
                    </ul>

                    <div className="bench-phase-footer">
                      <strong>{phase.footLabel}</strong>
                      <span>{phase.footRight}</span>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Guarantee */}
            <div className="bench-guarantee">

              <div className="bench-guarantee-content">
                <CheckCheck />

                <p>
                  <strong>
                    Enterprise Deployment Guarantee:
                  </strong>{" "}
                  Dedicated account management, structured weekly velocity
                  checkpoints, and zero operational disruption throughout
                  every engagement.
                </p>
              </div>

              <span>ZERO DISRUPTION</span>

            </div>

          </div>
        </section>

        {/* =====================================================
            WHY TECHTORCH
        ===================================================== */}

        <section className="bench-why-section">
          <div className="bench-container">

            <div className="bench-why-box">

              <span className="bench-why-label">
                <span />
                WHY TECHTORCH
              </span>

              <h2>
                Technology Support Built Around Your Requirements
              </h2>

              <p>
                Flexible resourcing engineered to integrate seamlessly with
                your teams, methodologies, and enterprise goals.
              </p>

              <div className="bench-why-grid">

                {whyCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.title} className="bench-why-card">

                      <div className="bench-why-icon">
                        <Icon />
                      </div>

                      <h3>{card.title}</h3>

                      <p>{card.description}</p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="bench-final-section">
          <div className="bench-container">

            <div className="bench-final-card">

              <div className="bench-final-label">
                <span />
                STRENGTHEN YOUR TEAM
              </div>

              <h2>
                Strengthen Your Technology Team with the Right Resources
              </h2>

              <p>
                Whether you need additional technical capacity for an
                ongoing project or support for a new technology initiative,
                TechTorch can help you explore resource and staffing
                solutions aligned with your requirements.
              </p>

              <button type="button" className="bench-primary-button">
                Talk to Our Experts
                <ArrowRight />
              </button>

              <div className="bench-final-tags">
                {finalTags.map((tag) => (
                  <span key={tag}>
                    <CheckCircle2 />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bench-final-bottom">
                Enterprise Grade Governance & Rapid SLA Deployment
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* =====================================================
           BASE
        ===================================================== */

        .bench-page {
          width: 100%;
          overflow: hidden;
          background: #f8f9fa;
          color: #1c1c1c;
          font-family: Inter, sans-serif;
        }

        .bench-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
        }

        .bench-page h1,
        .bench-page h2,
        .bench-page h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        button {
          font-family: Inter, sans-serif;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .bench-hero {
          width: 100%;
          padding-top: 64px;
          padding-bottom: 56px;
          background: #f8f9fa;
        }

        .bench-hero-container {
          display: flex;
          align-items: center;
        }

        .bench-hero-grid {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 430px);
          align-items: center;
          gap: 70px;
        }

        .bench-hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .bench-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 22px;
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(115, 0, 36, 0.05);
          border: 1px solid rgba(115, 0, 36, 0.1);
          color: ${BRAND_COLOR};
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .bench-hero-badge-icon {
          width: 13px;
          height: 13px;
        }

        .bench-hero-heading {
          max-width: 720px;
          margin: 0 0 18px;
          color: #161620;
          font-size: clamp(34px, 3.4vw, 50px);
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .bench-hero-subheading {
          max-width: 650px;
          margin: 0 0 25px;
          color: #737373;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 500;
        }

        .bench-primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: fit-content;
          border: 0;
          border-radius: 7px;
          padding: 12px 20px;
          background: ${BRAND_COLOR};
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .bench-primary-button:hover {
          transform: translateY(-2px);
          background: #5c0035;
          box-shadow: 0 10px 24px rgba(115, 0, 36, 0.18);
        }

        .bench-primary-button svg {
          width: 15px;
          height: 15px;
        }

        .bench-hero-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
        }

        .bench-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 9px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          background: #ffffff;
          color: #5f5f5f;
          font-size: 9px;
          font-weight: 500;
        }

        .bench-tag-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
        }

        .bench-hero-image-card {
          width: 100%;
          max-width: 430px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
        }

        .bench-hero-image {
          position: relative;
          width: 100%;
          height: 340px;
          background-image: url("/benchhiring.png");
          background-size: cover;
          background-position: center;
        }

        .bench-hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 45%,
            rgba(0, 0, 0, 0.68) 100%
          );
        }

        .bench-hero-image-footer {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #ffffff;
          font-size: 9px;
          font-weight: 500;
        }

        .bench-hero-image-footer span:first-child {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .bench-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .bench-content-section {
          width: 100%;
          padding-top: 65px;
          padding-bottom: 70px;
          background: #ffffff;
        }

        .bench-centered-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .bench-section-label,
        .bench-section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: ${BRAND_COLOR};
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .bench-section-label {
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(115, 0, 36, 0.05);
          border: 1px solid rgba(115, 0, 36, 0.1);
        }

        .bench-section-label span,
        .bench-final-label span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
        }

        .bench-section-heading {
          max-width: 760px;
          margin: 17px 0 25px;
          color: #161620;
          font-size: clamp(28px, 3vw, 39px);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .bench-prose {
          width: 100%;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          color: #626262;
          font-size: 13px;
          line-height: 1.8;
        }

        .bench-prose p {
          margin: 0;
        }

        .bench-pull-quote {
          width: 100%;
          max-width: 780px;
          margin: 38px auto;
          padding: 19px 22px;
          border-left: 3px solid ${BRAND_COLOR};
          background: rgba(115, 0, 36, 0.05);
          text-align: left;
        }

        .bench-pull-quote p {
          margin: 0 0 9px;
          color: #454545;
          font-size: 12px;
          line-height: 1.7;
          font-style: italic;
        }

        .bench-pull-quote span {
          color: ${BRAND_COLOR};
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .bench-secondary-content {
          margin-top: 5px;
        }

        .bench-secondary-heading {
          margin: 0 0 15px;
          color: #161620;
          font-size: 22px;
          line-height: 1.3;
          font-weight: 700;
        }

        /* =====================================================
           GENERAL SECTION
        ===================================================== */

        .bench-section {
          width: 100%;
          padding-top: 65px;
          padding-bottom: 65px;
          background: #f8f9fa;
        }

        .bench-section-title {
          max-width: 700px;
          margin: 13px 0 11px;
          color: #161620;
          font-size: clamp(26px, 2.8vw, 37px);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .bench-section-description {
          max-width: 650px;
          margin: 0 0 28px;
          color: #747474;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================================
           CARDS
        ===================================================== */

        .bench-approach-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .bench-capability-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-bottom: 18px;
        }

        .bench-card {
          position: relative;
          min-width: 0;
          padding: 23px;
          border: 1px solid #e5e5e5;
          border-radius: 11px;
          background: #ffffff;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .bench-card:hover {
          transform: translateY(-4px);
          border-color: rgba(115, 0, 36, 0.2);
          box-shadow: 0 14px 32px rgba(115, 0, 36, 0.07);
        }

        .bench-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 19px;
        }

        .bench-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          border-radius: 8px;
          background: rgba(115, 0, 36, 0.06);
          color: ${BRAND_COLOR};
        }

        .bench-icon-box svg {
          width: 16px;
          height: 16px;
        }

        .bench-card-number,
        .bench-capability-number {
          color: #d2d2d2;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .bench-card h3 {
          margin: 0 0 9px;
          color: #161620;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 700;
        }

        .bench-card p {
          margin: 0 0 17px;
          color: #707070;
          font-size: 11px;
          line-height: 1.65;
        }

        .bench-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .bench-card-tags span,
        .bench-capability-tag {
          display: inline-flex;
          width: fit-content;
          padding: 5px 7px;
          border-radius: 4px;
          background: #f1f1f1;
          color: #606060;
          font-size: 8px;
          font-weight: 500;
        }

        .bench-capability-tag {
          margin-top: 2px;
        }

        /* =====================================================
           MAINTENANCE
        ===================================================== */

        .bench-maintenance-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 20px 23px;
          border: 1px solid #e5e5e5;
          border-radius: 11px;
          background: #ffffff;
        }

        .bench-maintenance-left {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .bench-maintenance-label {
          margin-bottom: 5px;
          color: ${BRAND_COLOR};
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .bench-maintenance-left h3 {
          margin: 0 0 5px;
          color: #161620;
          font-size: 14px;
          font-weight: 700;
        }

        .bench-maintenance-left p {
          max-width: 700px;
          margin: 0;
          color: #707070;
          font-size: 10px;
          line-height: 1.6;
        }

        .bench-maintenance-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .bench-maintenance-right span {
          padding: 5px 7px;
          border-radius: 4px;
          background: #f1f1f1;
          color: #606060;
          font-size: 8px;
          white-space: nowrap;
        }

        .bench-maintenance-right strong {
          color: ${BRAND_COLOR};
          font-size: 9px;
          white-space: nowrap;
        }

        /* =====================================================
           WORKFLOW
        ===================================================== */

        .bench-workflow-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 5px;
        }

        .bench-sla-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 11px;
          border-radius: 999px;
          background: #eeeeee;
          color: #646464;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .bench-sla-label span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
        }

        .bench-phase-tracker {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 38px 0 32px;
        }

        .bench-phase-line {
          position: absolute;
          top: 13px;
          left: 8%;
          right: 8%;
          height: 1px;
          background: rgba(115, 0, 36, 0.2);
        }

        .bench-phase-point {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .bench-phase-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
          color: #ffffff;
          font-size: 9px;
          font-weight: 700;
        }

        .bench-phase-point span {
          color: #626262;
          font-size: 9px;
          font-weight: 500;
        }

        .bench-phase-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 17px;
        }

        .bench-phase-card {
          min-width: 0;
          padding: 19px;
          border: 1px solid #e5e5e5;
          border-radius: 11px;
          background: #ffffff;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .bench-phase-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 13px 30px rgba(115, 0, 36, 0.06);
        }

        .bench-phase-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 16px;
        }

        .bench-phase-card-top > span {
          color: #999999;
          font-size: 7px;
          font-weight: 700;
        }

        .bench-phase-card h3 {
          margin: 0 0 9px;
          color: #161620;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 700;
        }

        .bench-phase-card > p {
          margin: 0 0 15px;
          color: #707070;
          font-size: 10px;
          line-height: 1.65;
        }

        .bench-activities-label {
          margin-bottom: 8px;
          color: #999999;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .bench-phase-card ul {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: 0 0 15px;
          padding: 0;
          list-style: none;
        }

        .bench-phase-card li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          color: #686868;
          font-size: 8px;
          line-height: 1.45;
        }

        .bench-phase-card li span {
          width: 4px;
          height: 4px;
          flex-shrink: 0;
          margin-top: 4px;
          border-radius: 50%;
          background: ${BRAND_COLOR};
        }

        .bench-phase-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding-top: 11px;
          border-top: 1px solid #eeeeee;
        }

        .bench-phase-footer strong {
          color: ${BRAND_COLOR};
          font-size: 8px;
        }

        .bench-phase-footer span {
          color: #999999;
          font-size: 8px;
        }

        .bench-guarantee {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 14px 18px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          background: #ffffff;
        }

        .bench-guarantee-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bench-guarantee-content svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          color: ${BRAND_COLOR};
        }

        .bench-guarantee p {
          margin: 0;
          color: #626262;
          font-size: 8.5px;
          line-height: 1.55;
        }

        .bench-guarantee p strong {
          color: #161620;
        }

        .bench-guarantee > span {
          color: ${BRAND_COLOR};
          font-size: 7.5px;
          font-weight: 700;
          white-space: nowrap;
        }

        /* =====================================================
           WHY TECHTORCH
        ===================================================== */

        .bench-why-section {
          width: 100%;
          padding-top: 45px;
          padding-bottom: 45px;
          background: #f8f9fa;
        }

        .bench-why-box {
          padding: 42px;
          border-radius: 17px;
          background: ${BRAND_COLOR};
        }

        .bench-why-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 15px;
          padding: 7px 11px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.9);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .bench-why-label span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
        }

        .bench-why-box > h2 {
          max-width: 700px;
          margin: 0 0 10px;
          color: #ffffff;
          font-size: clamp(28px, 3vw, 39px);
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .bench-why-box > p {
          max-width: 700px;
          margin: 0 0 28px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          line-height: 1.65;
        }

        .bench-why-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .bench-why-card {
          min-height: 175px;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background: #811a55;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .bench-why-card:hover {
          transform: translateY(-4px);
          background: #8b215d;
        }

        .bench-why-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          margin-bottom: 17px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .bench-why-icon svg {
          width: 15px;
          height: 15px;
        }

        .bench-why-card h3 {
          margin: 0 0 7px;
          color: #ffffff;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
        }

        .bench-why-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 9px;
          line-height: 1.55;
        }

        /* =====================================================
           FINAL CTA
        ===================================================== */

        .bench-final-section {
          width: 100%;
          padding-top: 65px;
          padding-bottom: 75px;
          background: #f8f9fa;
        }

        .bench-final-card {
          max-width: 950px;
          margin: 0 auto;
          padding: 55px 60px;
          border: 1px solid rgba(115, 0, 36, 0.1);
          border-radius: 17px;
          background: rgba(115, 0, 36, 0.035);
          text-align: center;
        }

        .bench-final-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 16px;
          padding: 7px 11px;
          border: 1px solid rgba(115, 0, 36, 0.1);
          border-radius: 999px;
          background: #ffffff;
          color: ${BRAND_COLOR};
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .bench-final-card h2 {
          max-width: 800px;
          margin: 0 auto 13px;
          color: #161620;
          font-size: clamp(28px, 3vw, 39px);
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .bench-final-card > p {
          max-width: 700px;
          margin: 0 auto 25px;
          color: #707070;
          font-size: 12px;
          line-height: 1.7;
        }

        .bench-final-card .bench-primary-button {
          margin-bottom: 25px;
        }

        .bench-final-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 17px;
        }

        .bench-final-tags span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #606060;
          font-size: 9px;
          font-weight: 500;
        }

        .bench-final-tags svg {
          width: 12px;
          height: 12px;
          color: ${BRAND_COLOR};
        }

        .bench-final-bottom {
          color: #aaaaaa;
          font-size: 8px;
          font-weight: 500;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .bench-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .bench-hero {
            padding-top: 55px;
          }

          .bench-hero-grid {
            gap: 45px;
            grid-template-columns: minmax(0, 1fr) 390px;
          }

          .bench-hero-image {
            height: 315px;
          }

          .bench-why-box {
            padding: 35px;
          }
        }

        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {
          .bench-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .bench-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .bench-hero-content {
            align-items: center;
            text-align: center;
          }

          .bench-hero-heading {
            max-width: 750px;
          }

          .bench-hero-subheading {
            max-width: 650px;
          }

          .bench-hero-tags {
            justify-content: center;
          }

          .bench-hero-image-card {
            max-width: 600px;
          }

          .bench-hero-image {
            height: 350px;
          }

          .bench-approach-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bench-capability-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bench-phase-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bench-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .bench-maintenance-card {
            align-items: flex-start;
            flex-direction: column;
          }

          .bench-maintenance-right {
            padding-left: 48px;
          }

          .bench-final-card {
            padding: 48px 40px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .bench-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .bench-hero {
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .bench-hero-grid {
            gap: 32px;
          }

          .bench-hero-heading {
            font-size: 32px;
          }

          .bench-hero-subheading {
            font-size: 12px;
          }

          .bench-hero-image {
            height: 290px;
          }

          .bench-content-section,
          .bench-section {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .bench-section-heading,
          .bench-section-title {
            font-size: 28px;
          }

          .bench-prose {
            font-size: 12px;
          }

          .bench-approach-grid,
          .bench-capability-grid,
          .bench-phase-grid,
          .bench-why-grid {
            grid-template-columns: 1fr;
          }

          .bench-phase-tracker {
            grid-template-columns: 1fr;
            gap: 14px;
            margin: 28px 0;
          }

          .bench-phase-line {
            top: 13px;
            bottom: 13px;
            left: 13px;
            right: auto;
            width: 1px;
            height: auto;
          }

          .bench-phase-point {
            flex-direction: row;
            justify-content: flex-start;
            gap: 12px;
          }

          .bench-phase-point span {
            text-align: left;
          }

          .bench-why-box {
            padding: 28px 24px;
          }

          .bench-final-card {
            padding: 40px 24px;
          }

          .bench-maintenance-right {
            padding-left: 0;
            flex-wrap: wrap;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .bench-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .bench-hero {
            padding-top: 35px;
            padding-bottom: 35px;
          }

          .bench-hero-badge {
            font-size: 8px;
            padding: 7px 10px;
          }

          .bench-hero-heading {
            font-size: 27px;
          }

          .bench-hero-subheading {
            font-size: 11px;
          }

          .bench-primary-button {
            width: 100%;
            max-width: 250px;
            padding: 11px 18px;
            font-size: 11px;
          }

          .bench-hero-tags {
            gap: 5px;
          }

          .bench-tag {
            font-size: 8px;
            padding: 5px 7px;
          }

          .bench-hero-image {
            height: 240px;
          }

          .bench-hero-image-footer {
            left: 12px;
            right: 12px;
            bottom: 12px;
            font-size: 7px;
          }

          .bench-content-section,
          .bench-section {
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .bench-section-heading,
          .bench-section-title {
            font-size: 24px;
          }

          .bench-prose {
            font-size: 11px;
          }

          .bench-pull-quote {
            padding: 16px 15px;
            margin: 28px auto;
          }

          .bench-pull-quote p {
            font-size: 10.5px;
          }

          .bench-card {
            padding: 18px;
          }

          .bench-maintenance-card {
            padding: 18px;
          }

          .bench-maintenance-left {
            align-items: flex-start;
          }

          .bench-maintenance-right {
            gap: 8px;
          }

          .bench-workflow-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .bench-sla-label {
            font-size: 7px;
          }

          .bench-phase-card {
            padding: 17px;
          }

          .bench-guarantee {
            align-items: flex-start;
            flex-direction: column;
          }

          .bench-guarantee-content {
            align-items: flex-start;
          }

          .bench-guarantee > span {
            padding-left: 26px;
          }

          .bench-why-box {
            padding: 25px 18px;
            border-radius: 13px;
          }

          .bench-why-box > h2 {
            font-size: 25px;
          }

          .bench-final-section {
            padding-top: 40px;
            padding-bottom: 50px;
          }

          .bench-final-card {
            padding: 32px 18px;
            border-radius: 13px;
          }

          .bench-final-card h2 {
            font-size: 25px;
          }

          .bench-final-card > p {
            font-size: 10.5px;
          }

          .bench-final-tags {
            flex-direction: column;
            gap: 10px;
          }
        }

        /* =====================================================
           EXTRA SMALL
        ===================================================== */

        @media (max-width: 360px) {
          .bench-hero-heading {
            font-size: 24px;
          }

          .bench-section-heading,
          .bench-section-title {
            font-size: 22px;
          }

          .bench-card h3 {
            font-size: 13px;
          }

          .bench-card p {
            font-size: 10px;
          }

          .bench-why-box > h2,
          .bench-final-card h2 {
            font-size: 22px;
          }
        }

      `}</style>
    </>
  );
}