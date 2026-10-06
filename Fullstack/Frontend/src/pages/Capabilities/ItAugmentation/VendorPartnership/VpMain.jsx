import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Code2,
  Building2,
  Cloud,
  Sparkles,
  UserCog,
  Wrench,
  Compass,
  Layers,
  Award,
  ShieldCheck,
  MessageCircle,
  Check,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const heroTags = [
  "Technology Expertise",
  "Business Collaboration",
  "Shared Opportunities",
];

const opportunities = [
  {
    icon: Code2,
    title: "Technology & Software Solutions",
    description:
      "Collaborate on software development, enterprise applications, web and mobile solutions, modernization, and technical support.",
    tags: ["Custom Stack", "Full-Lifecycle"],
  },
  {
    icon: Building2,
    title: "Digital Business Solutions",
    description:
      "Explore opportunities around ERP, operations management, supply chain, financial management, CRM, e-commerce, project management, and other digital business solutions.",
    tags: ["ERP & CRM", "Enterprise Operations"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Work together on cloud infrastructure and technology requirements that support modern business operations.",
    tags: ["Cloud Native", "Resilient Architecture"],
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Technologies",
    description:
      "Explore technology opportunities involving artificial intelligence and digitally enabled business solutions.",
    tags: ["Machine Intelligence", "Applied Automation"],
  },
  {
    icon: UserCog,
    title: "Technical Resources",
    description:
      "Complement your existing capabilities with technology professionals and flexible resource support through TechTorch's Resource and Staffing services.",
    tags: ["Vetted Engineers", "Flexible Pods"],
  },
  {
    icon: Wrench,
    title: "Software Development & Support",
    description:
      "Collaborate across the software lifecycle, from requirements and development to testing, deployment, maintenance, and ongoing support.",
    tags: ["DevSecOps & QA", "24/7 SLA Support"],
  },
];

const phases = [
  {
    number: "01",
    phaseTag: "PHASE I",
    title: "Understand",
    subtitle: "DISCOVERY & STRATEGY",
    description:
      "We first understand your business, technology capabilities, customer requirements, and strategic partnership objectives.",
    deliverables: [
      "Stakeholder discovery & tech audit",
      "Ecosystem requirements baseline",
    ],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Charter & Scope",
  },
  {
    number: "02",
    phaseTag: "PHASE II",
    title: "Align",
    subtitle: "CAPABILITY & MODEL ALIGNMENT",
    description:
      "We identify areas where TechTorch's services and solutions can complement your existing capabilities and delivery infrastructure.",
    deliverables: [
      "Shared SLA & commercial mapping",
      "Capability & stack architecture plan",
    ],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Framework SLA",
  },
  {
    number: "03",
    phaseTag: "PHASE III",
    title: "Collaborate",
    subtitle: "ACTIVE CO-DELIVERY & ENGINEERING",
    description:
      "We work together around relevant technology, development, implementation, resource, or ongoing operational requirements.",
    deliverables: [
      "Agile pod integration & co-delivery",
      "Sprint reviews & QA checkpoint gates",
    ],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Live Deployment",
  },
  {
    number: "04",
    phaseTag: "PHASE IV",
    title: "Support",
    subtitle: "ONGOING SUPPORT & SCALE",
    description:
      "We continue to support the agreed area of collaboration based on evolving project needs and sustained business performance.",
    deliverables: [
      "Continuous optimization & monitoring",
      "Quarterly governance & scale reviews",
    ],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Sustained ROI",
    active: true,
  },
];

const techCapabilities = [
  {
    category: "CORE ENGINEERING",
    title: "Software Engineering",
    description:
      "Custom software, web and mobile applications, enterprise solutions, integration, testing, and modernization.",
    tags: ["Custom Web/Mobile", "Modernization"],
  },
  {
    category: "BUSINESS PLATFORMS",
    title: "Digital Solutions",
    description:
      "ERP, operations, supply chain, financial management, CRM, e-commerce, project management, and other business-focused solutions.",
    tags: ["ERP & Operations", "Supply Chain"],
  },
  {
    category: "CLOUD SYSTEMS",
    title: "Cloud & Infrastructure",
    description:
      "Technology infrastructure designed to support evolving business and operational requirements.",
    tags: ["Cloud Architecture", "High Availability"],
  },
  {
    category: "RISK & SECURITY",
    title: "Cybersecurity",
    description:
      "Technology services focused on helping organisations address their digital security requirements.",
    tags: ["Data Protection", "Security Governance"],
  },
  {
    category: "APPLIED AI",
    title: "Artificial Intelligence",
    description:
      "AI-focused capabilities for organizations exploring practical applications of emerging technology.",
    tags: ["Predictive Analytics", "Intelligent Automation"],
  },
  {
    category: "AUGMENTATION",
    title: "Resource & Staffing",
    description:
      "Flexible access to technology professionals to complement existing teams and project requirements.",
    tags: ["Senior Tech Talent", "Agile Pods"],
  },
];

const whyCards = [
  {
    icon: Compass,
    title: "Broad Technology Expertise",
    description:
      "Our services cover multiple areas of technology, allowing partnerships to be developed around different business and technical requirements.",
    tag: "FULL SPECTRUM REACH",
  },
  {
    icon: Layers,
    title: "Flexible Collaboration",
    description:
      "Partnership opportunities can be shaped around the specific needs, capabilities, and objectives of each organization.",
    tag: "ADAPTIVE ENGAGEMENT",
  },
  {
    icon: Award,
    title: "Business-Focused Solutions",
    description:
      "Our technology capabilities are designed around practical business requirements and operational needs.",
    tag: "OUTCOME-ORIENTED",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Technology Support",
    description:
      "Our software engineering services cover requirements analysis, development, deployment, maintenance, and support.",
    tag: "FULL SDLC GOVERNANCE",
  },
];

const finalTags = [
  "NDA Protected Discussion",
  "Flexible Commercial Models",
  "Dedicated Partner Manager",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function VendorPartnershipPage() {
  const navigate = useNavigate();

  const goToPartner = () => {
    navigate("/become-partner");
  };

  return (
    <div className="vendor-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="vendor-hero-section">
        <div className="vendor-container">

          <div className="vendor-hero-grid">

            {/* LEFT CONTENT */}
            <div className="vendor-hero-content">

              <div className="vendor-pill">
                <span />
                STRATEGIC RESOURCING • VENDOR PARTNERSHIP
              </div>

              <h1>
                Building Stronger Opportunities Through{" "}
                <span>Technology Partnership</span>
              </h1>

              <p className="vendor-hero-description">
                Partner with TechTorch to bring together technology
                expertise, digital capabilities, and business requirements
                to create practical solutions for customers and
                organizations.
              </p>

              <button
                type="button"
                onClick={goToPartner}
                className="vendor-primary-btn"
              >
                Become a Partner
                <ArrowRight size={16} />
              </button>

              <div className="vendor-hero-tags">
                {heroTags.map((tag) => (
                  <span key={tag}>
                    <i />
                    {tag}
                  </span>
                ))}
              </div>

            </div>


            {/* RIGHT IMAGE */}
            <div className="vendor-image-card">

              <div className="vendor-image-wrap">
                <img
                  src="/vendor.png"
                  alt="Vendor Partnership"
                />

                <div className="vendor-image-gradient" />
              </div>

              <div className="vendor-image-info">

                <div className="vendor-image-label">
                  ALLIANCE NETWORK
                </div>

                <div className="vendor-image-bottom">

                  <span className="vendor-image-title">
                    Enterprise Ready Partnerships
                  </span>

                  <span className="vendor-verified">
                    <i />
                    Verified Capabilities
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STRATEGIC PERSPECTIVE
      ===================================================== */}

      <section className="vendor-strategic-section">
        <div className="vendor-container">

          <div className="vendor-section-pill">
            <span />
            STRATEGIC PERSPECTIVE
          </div>

          <h2 className="vendor-section-heading vendor-strategic-heading">
            Technology Partnerships That Create Business Value
          </h2>

          <div className="vendor-strategic-copy">

            <p>
              Technology is most effective when different capabilities
              come together with a clear understanding of business needs.
              A strong partnership can combine expertise, resources,
              solutions, and industry knowledge to address customer
              requirements more effectively.
            </p>

            <p>
              TechTorch works across IT consultancy, artificial
              intelligence, cloud infrastructure, cybersecurity, software
              engineering, software development and support, business
              process outsourcing, resource and staffing, and web
              solutions. These capabilities provide a broad foundation
              for collaboration with organizations that are looking to
              strengthen their technology offerings or support their
              customers with additional expertise.
            </p>

          </div>

          <blockquote className="vendor-quote">

            <p>
              "Our partnership approach is focused on understanding the
              needs of each organization and identifying areas where our
              technology capabilities can complement existing products,
              services, or project requirements."
            </p>

            <span>
              — TECHTORCH PARTNERSHIP FRAMEWORK
            </span>

          </blockquote>

          <p className="vendor-strategic-bottom">
            From software development and system integration to digital
            business solutions and technical resources, TechTorch can
            support different technology requirements through a flexible
            and collaborative approach.
          </p>


          {/* IMPACT CARD */}

          <div className="vendor-impact-card">

            <div className="vendor-impact-content">

              <div className="vendor-mini-label">
                COLLABORATIVE IMPACT
              </div>

              <h3>
                Seamless Integration with Your Enterprise Ecosystem
              </h3>

              <p>
                Whether you are an independent software vendor, systems
                integrator, or digital agency, our shared delivery models
                align with your business milestones and governance
                frameworks.
              </p>

            </div>

            <div className="vendor-impact-image">
              <img
                src="/BecomePartner.png"
                alt="Enterprise Collaboration"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COLLABORATION MATRIX
      ===================================================== */}

      <section className="vendor-white-section">
        <div className="vendor-container">

          <div className="vendor-centered-heading">

            <div className="vendor-section-pill">
              COLLABORATION MATRIX
            </div>

            <h2 className="vendor-section-heading">
              Partnership Opportunities
            </h2>

            <p>
              Explore Areas Where We Can Work Together
            </p>

          </div>


          <div className="vendor-opportunity-grid">

            {opportunities.map((op) => {

              const Icon = op.icon;

              return (
                <div
                  key={op.title}
                  className="vendor-opportunity-card"
                >

                  <div className="vendor-opportunity-icon">
                    <Icon />
                  </div>

                  <h3>{op.title}</h3>

                  <p>{op.description}</p>

                  <div className="vendor-card-tags">
                    {op.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          ENGAGEMENT METHODOLOGY
      ===================================================== */}

      <section className="vendor-methodology-section">
        <div className="vendor-container">

          <div className="vendor-mini-label">
            ENGAGEMENT METHODOLOGY
          </div>

          <div className="vendor-methodology-heading-row">

            <h2 className="vendor-section-heading">
              Our Partnership Approach
            </h2>

            <span className="vendor-governance-badge">
              <i />
              End-to-End Governance & SLA Milestones
            </span>

          </div>

          <p className="vendor-methodology-intro">
            A structured, four-phase engagement roadmap designed to align
            capabilities, de-risk joint delivery, and generate mutual
            enterprise value.
          </p>


          <div className="vendor-phase-grid">

            {phases.map((phase) => (
              <div
                key={phase.number}
                className={`vendor-phase-card ${
                  phase.active ? "active" : ""
                }`}
              >

                <div className="vendor-phase-top">

                  <span className="vendor-phase-number">
                    {phase.number}
                  </span>

                  <span className="vendor-phase-tag">
                    {phase.phaseTag}
                  </span>

                </div>

                <h3>{phase.title}</h3>

                <div className="vendor-phase-subtitle">
                  {phase.subtitle}
                </div>

                <p>
                  {phase.description}
                </p>

                <div className="vendor-deliverable-label">
                  KEY DELIVERABLES
                </div>

                <ul>
                  {phase.deliverables.map((item) => (
                    <li key={item}>
                      <i />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="vendor-milestone">

                  <span>
                    {phase.milestoneLabel}
                  </span>

                  <strong>
                    {phase.active && (
                      <Check />
                    )}
                    {phase.milestoneValue}
                  </strong>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          ENTERPRISE PORTFOLIO
      ===================================================== */}

      <section className="vendor-portfolio-section">
        <div className="vendor-container">

          <div className="vendor-mini-label">
            ENTERPRISE PORTFOLIO
          </div>

          <h2 className="vendor-section-heading">
            Technology Capabilities
          </h2>

          <p className="vendor-portfolio-intro">
            Supporting Different Business & Technology Needs
          </p>


          <div className="vendor-capability-grid">

            {techCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="vendor-capability-card"
              >

                <div className="vendor-capability-category">
                  {cap.category}
                  <i />
                </div>

                <h3>{cap.title}</h3>

                <p>{cap.description}</p>

                <div className="vendor-capability-tags">
                  {cap.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY PARTNER
      ===================================================== */}

      <section className="vendor-why-section">

        <div className="vendor-container">

          <div className="vendor-dark-pill">
            <span />
            STRATEGIC PARTNERSHIP VALUE
          </div>

          <h2 className="vendor-dark-heading">
            Why Partner With TechTorch?
          </h2>

          <p className="vendor-dark-intro">
            Technology Capabilities That Support Collaboration
          </p>


          <div className="vendor-why-grid">

            {whyCards.map((card) => {

              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="vendor-why-card"
                >

                  <div className="vendor-why-icon">
                    <Icon />
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.description}</p>

                  <span>
                    {card.tag}
                  </span>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="vendor-final-section">
        <div className="vendor-final-card">

          <div className="vendor-section-pill">
            <span />
            START A CONVERSATION
          </div>

          <h2>
            Let's Build the Right Partnership Together
          </h2>

          <p>
            If your organization is looking to complement its technology
            capabilities, expand its solution offerings, or explore new
            areas of collaboration, let's start a conversation.
          </p>

          <p>
            Share your business requirements and partnership objectives
            with TechTorch, and explore where our capabilities can work
            together.
          </p>

          <button
            type="button"
            onClick={goToPartner}
            className="vendor-primary-btn"
          >
            Talk to Expert
            <ArrowRight size={16} />
          </button>


          {/* RESPONSE */}

          <div className="vendor-response-card">

            <div className="vendor-response-icon">
              <MessageCircle />
            </div>

            <div>
              <span>RESPONSE</span>

              <strong>
                Business-Focused Support
              </strong>
            </div>

          </div>


          {/* FINAL POINTS */}

          <div className="vendor-final-tags">

            {finalTags.map((tag) => (
              <span key={tag}>
                <Check />
                {tag}
              </span>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           FONTS / RESET
        ===================================================== */

        .vendor-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #f8f7f5;
          color: #1c1c1c;
          font-family: "Inter", Arial, sans-serif;
        }

        .vendor-page *,
        .vendor-page *::before,
        .vendor-page *::after {
          box-sizing: border-box;
        }

        .vendor-page h1,
        .vendor-page h2,
        .vendor-page h3,
        .vendor-page p {
          margin-top: 0;
        }

        .vendor-page h1,
        .vendor-page h2,
        .vendor-page h3 {
          font-family:
            "Plus Jakarta Sans",
            "Inter",
            Arial,
            sans-serif;
        }

        .vendor-page button {
          font-family: "Inter", Arial, sans-serif;
        }


        /* =====================================================
           UNIVERSAL CONTAINER
        ===================================================== */

        .vendor-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
        }


        /* =====================================================
           COMMON
        ===================================================== */

        .vendor-section-pill {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 12px;
          border-radius: 50px;
          background: #f5edf2;
          color: #85004c;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: .55px;
        }

        .vendor-section-pill span,
        .vendor-pill span {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #85004c;
        }

        .vendor-mini-label {
          color: #701040;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: .75px;
        }

        .vendor-section-heading {
          color: #1c1c1c;
          font-size: 27px;
          line-height: 1.15;
          letter-spacing: -.9px;
          font-weight: 600;
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .vendor-primary-btn {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 20px;
          border: 0;
          border-radius: 7px;
          background: #730024;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition:
            transform .25s ease,
            background .25s ease,
            box-shadow .25s ease;
        }

        .vendor-primary-btn:hover {
          background: #5c001d;
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(115,0,36,.18);
        }


        /* =====================================================
           HERO
        ===================================================== */

        .vendor-hero-section {
          padding-top: 55px;
          padding-bottom: 70px;
        }

        .vendor-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr);
          align-items: center;
          gap: 65px;
        }

        .vendor-hero-content {
          min-width: 0;
        }

        .vendor-pill {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 12px;
          border-radius: 50px;
          background: #f5edf2;
          color: #85004c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .55px;
        }

        .vendor-hero-content h1 {
          max-width: 760px;
          margin: 19px 0 17px;
          color: #1c1c1c;
          font-size: 43px;
          line-height: 1.12;
          letter-spacing: -1.8px;
          font-weight: 650;
        }

        .vendor-hero-content h1 span {
          color: #730024;
        }

        .vendor-hero-description {
          max-width: 650px;
          margin-bottom: 25px;
          color: #5d6269;
          font-size: 15px;
          line-height: 1.65;
        }

        .vendor-hero-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px;
          margin-top: 21px;
        }

        .vendor-hero-tags span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #656a70;
          font-size: 12px;
          font-weight: 500;
        }

        .vendor-hero-tags i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730024;
        }


        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .vendor-image-card {
          width: 100%;
          overflow: hidden;
          border: 1px solid #e1e3e5;
          border-radius: 15px;
          background: white;
          box-shadow: 0 12px 32px rgba(0,0,0,.07);
        }

        .vendor-image-wrap {
          position: relative;
          width: 100%;
          height: 365px;
          overflow: hidden;
        }

        .vendor-image-wrap img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }

        .vendor-image-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(0,0,0,.7),
              rgba(0,0,0,.08) 55%,
              transparent
            );
          pointer-events: none;
        }

        .vendor-image-info {
          padding: 15px 18px 17px;
        }

        .vendor-image-label {
          margin-bottom: 7px;
          color: #85004c;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .vendor-image-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .vendor-image-title {
          color: #1c1c1c;
          font-size: 13px;
          font-weight: 650;
        }

        .vendor-verified {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #059669;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }

        .vendor-verified i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }


        /* =====================================================
           STRATEGIC
        ===================================================== */

        .vendor-strategic-section {
          padding-top: 35px;
          padding-bottom: 80px;
        }

        .vendor-strategic-heading {
          max-width: 650px;
          margin: 17px 0 25px;
        }

        .vendor-strategic-copy {
          max-width: 850px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 25px;
        }

        .vendor-strategic-copy p,
        .vendor-strategic-bottom {
          color: #5e646b;
          font-size: 14px;
          line-height: 1.7;
        }

        .vendor-quote {
          max-width: 900px;
          margin: 0 0 25px;
          padding: 22px 25px;
          border-left: 3px solid #730024;
          background: rgba(245,237,242,.72);
        }

        .vendor-quote p {
          margin-bottom: 10px;
          color: #42474d;
          font-size: 14px;
          line-height: 1.7;
          font-style: italic;
        }

        .vendor-quote span {
          color: #85004c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .65px;
        }

        .vendor-strategic-bottom {
          max-width: 850px;
          margin-bottom: 42px;
        }


        /* =====================================================
           IMPACT CARD
        ===================================================== */

        .vendor-impact-card {
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          overflow: hidden;
          border: 1px solid #e0e3e6;
          border-radius: 16px;
          background: white;
        }

        .vendor-impact-content {
          padding: 38px 40px;
        }

        .vendor-impact-content .vendor-mini-label {
          margin-bottom: 13px;
        }

        .vendor-impact-content h3 {
          max-width: 650px;
          margin-bottom: 13px;
          color: #1c1c1c;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 650;
        }

        .vendor-impact-content p {
          max-width: 650px;
          margin: 0;
          color: #666b71;
          font-size: 13px;
          line-height: 1.7;
        }

        .vendor-impact-image {
          min-height: 270px;
          overflow: hidden;
        }

        .vendor-impact-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }


        /* =====================================================
           WHITE SECTION
        ===================================================== */

        .vendor-white-section {
          padding-top: 80px;
          padding-bottom: 85px;
          background: white;
        }

        .vendor-centered-heading {
          margin-bottom: 40px;
          text-align: center;
        }

        .vendor-centered-heading .vendor-section-pill {
          margin-bottom: 14px;
        }

        .vendor-centered-heading h2 {
          margin: 0 0 8px;
        }

        .vendor-centered-heading p {
          margin: 0;
          color: #73787e;
          font-size: 13px;
        }


        /* =====================================================
           OPPORTUNITIES
        ===================================================== */

        .vendor-opportunity-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .vendor-opportunity-card {
          min-height: 250px;
          padding: 25px;
          border: 1px solid #e1e4e7;
          border-radius: 12px;
          background: white;
          transition:
            transform .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .vendor-opportunity-card:hover {
          transform: translateY(-4px);
          border-color: #d5aabd;
          box-shadow: 0 14px 28px rgba(0,0,0,.06);
        }

        .vendor-opportunity-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          border-radius: 9px;
          background: #f7edf3;
          color: #730024;
        }

        .vendor-opportunity-icon svg {
          width: 18px;
          height: 18px;
        }

        .vendor-opportunity-card h3 {
          margin-bottom: 10px;
          color: #1c1c1c;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 650;
        }

        .vendor-opportunity-card p {
          min-height: 82px;
          margin-bottom: 18px;
          color: #666c72;
          font-size: 12.5px;
          line-height: 1.65;
        }

        .vendor-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px 15px;
        }

        .vendor-card-tags span {
          color: #730024;
          font-size: 10px;
          font-weight: 700;
        }


        /* =====================================================
           METHODOLOGY
        ===================================================== */

        .vendor-methodology-section {
          padding-top: 85px;
          padding-bottom: 85px;
        }

        .vendor-methodology-heading-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 13px;
        }

        .vendor-methodology-heading-row h2 {
          margin: 0;
        }

        .vendor-governance-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border: 1px solid #e2e4e6;
          border-radius: 50px;
          background: white;
          color: #646a70;
          font-size: 10px;
          font-weight: 650;
          white-space: nowrap;
        }

        .vendor-governance-badge i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }

        .vendor-methodology-intro {
          max-width: 700px;
          margin: 12px 0 32px;
          color: #71767c;
          font-size: 13px;
          line-height: 1.65;
        }


        /* =====================================================
           PHASES
        ===================================================== */

        .vendor-phase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .vendor-phase-card {
          min-height: 370px;
          padding: 22px;
          border: 1px solid #e0e3e6;
          border-radius: 12px;
          background: white;
        }

        .vendor-phase-card.active {
          border: 2px solid #730024;
        }

        .vendor-phase-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 23px;
        }

        .vendor-phase-number {
          color: #e2e4e6;
          font-size: 23px;
          line-height: 1;
          font-weight: 750;
        }

        .vendor-phase-tag {
          color: #9a9fa4;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .55px;
        }

        .vendor-phase-card.active .vendor-phase-tag {
          padding: 5px 8px;
          border-radius: 50px;
          background: #ecfdf5;
          color: #059669;
        }

        .vendor-phase-card h3 {
          margin-bottom: 5px;
          color: #1c1c1c;
          font-size: 16px;
          font-weight: 650;
        }

        .vendor-phase-subtitle {
          margin-bottom: 13px;
          color: #a0a4a8;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: .55px;
        }

        .vendor-phase-card > p {
          min-height: 93px;
          margin-bottom: 19px;
          color: #6d7278;
          font-size: 11.5px;
          line-height: 1.65;
        }

        .vendor-deliverable-label {
          margin-bottom: 9px;
          color: #9da1a5;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: .55px;
        }

        .vendor-phase-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .vendor-phase-card li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          margin-bottom: 6px;
          color: #686e74;
          font-size: 10.5px;
          line-height: 1.45;
        }

        .vendor-phase-card li i {
          width: 4px;
          height: 4px;
          flex-shrink: 0;
          margin-top: 5px;
          border-radius: 50%;
          background: #730024;
        }

        .vendor-milestone {
          margin-top: 20px;
          padding-top: 13px;
          border-top: 1px solid #eceef0;
        }

        .vendor-milestone > span {
          display: block;
          margin-bottom: 4px;
          color: #9b9fa3;
          font-size: 9px;
        }

        .vendor-milestone strong {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #730024;
          font-size: 11px;
        }

        .vendor-milestone svg {
          width: 12px;
          height: 12px;
        }


        /* =====================================================
           PORTFOLIO
        ===================================================== */

        .vendor-portfolio-section {
          padding-top: 85px;
          padding-bottom: 90px;
          background: #f8f7f5;
        }

        .vendor-portfolio-section > .vendor-container > h2 {
          margin: 13px 0 7px;
        }

        .vendor-portfolio-intro {
          margin-bottom: 30px;
          color: #71767c;
          font-size: 13px;
        }

        .vendor-capability-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
        }

        .vendor-capability-card {
          min-height: 225px;
          padding: 24px;
          border: 1px solid #e0e3e6;
          border-radius: 12px;
          background: white;
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .vendor-capability-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(0,0,0,.05);
        }

        .vendor-capability-category {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 17px;
          color: #999ea3;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .6px;
        }

        .vendor-capability-category i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #730024;
        }

        .vendor-capability-card h3 {
          margin-bottom: 10px;
          color: #1c1c1c;
          font-size: 15px;
          font-weight: 650;
        }

        .vendor-capability-card p {
          min-height: 67px;
          margin-bottom: 18px;
          color: #6b7076;
          font-size: 12px;
          line-height: 1.65;
        }

        .vendor-capability-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .vendor-capability-tags span {
          padding: 5px 9px;
          border-radius: 50px;
          background: #f0f1f2;
          color: #666c71;
          font-size: 9.5px;
          font-weight: 600;
        }


        /* =====================================================
           WHY PARTNER
        ===================================================== */

        .vendor-why-section {
          padding-top: 85px;
          padding-bottom: 90px;
          background:
            radial-gradient(
              120% 140% at 90% 0%,
              #7a0f47 0%,
              #3a0a26 60%
            );
        }

        .vendor-dark-pill {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 12px;
          border-radius: 50px;
          background: rgba(255,255,255,.1);
          color: #fce7f3;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .6px;
        }

        .vendor-dark-pill span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #f9a8d4;
        }

        .vendor-dark-heading {
          max-width: 700px;
          margin: 17px 0 8px;
          color: white;
          font-size: 34px;
          line-height: 1.15;
          letter-spacing: -1px;
          font-weight: 600;
        }

        .vendor-dark-intro {
          margin-bottom: 32px;
          color: rgba(253,226,240,.68);
          font-size: 13px;
        }

        .vendor-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .vendor-why-card {
          min-height: 245px;
          padding: 23px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 12px;
          background: rgba(255,255,255,.08);
        }

        .vendor-why-icon {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          border-radius: 8px;
          background: rgba(255,255,255,.1);
        }

        .vendor-why-icon svg {
          width: 17px;
          height: 17px;
          color: #fce7f3;
        }

        .vendor-why-card h3 {
          margin-bottom: 9px;
          color: white;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 650;
        }

        .vendor-why-card p {
          min-height: 85px;
          margin-bottom: 15px;
          color: rgba(253,226,240,.62);
          font-size: 11.5px;
          line-height: 1.65;
        }

        .vendor-why-card > span {
          color: #fbcfe8;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .55px;
        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .vendor-final-section {
          padding: 90px 100px;
          display: flex;
          justify-content: center;
          background: #f8f7f5;
        }

        .vendor-final-card {
          width: 100%;
          max-width: 1050px;
          padding: 65px 60px;
          border: 1px solid #f0dce6;
          border-radius: 18px;
          background: rgba(255,240,246,.62);
          text-align: center;
        }

        .vendor-final-card .vendor-section-pill {
          margin-bottom: 20px;
        }

        .vendor-final-card h2 {
          max-width: 760px;
          margin: 0 auto 17px;
          color: #1c1c1c;
          font-size: 36px;
          line-height: 1.15;
          letter-spacing: -1.2px;
          font-weight: 650;
        }

        .vendor-final-card > p {
          max-width: 720px;
          margin: 0 auto 9px;
          color: #6c7177;
          font-size: 13.5px;
          line-height: 1.7;
        }

        .vendor-final-card .vendor-primary-btn {
          margin-top: 18px;
          margin-bottom: 30px;
        }


        /* =====================================================
           RESPONSE
        ===================================================== */

        .vendor-response-card {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 27px;
          padding: 10px 15px;
          border: 1px solid #e1e3e5;
          border-radius: 11px;
          background: white;
          text-align: left;
        }

        .vendor-response-icon {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ecfdf5;
        }

        .vendor-response-icon svg {
          width: 14px;
          height: 14px;
          color: #059669;
        }

        .vendor-response-card span {
          display: block;
          margin-bottom: 2px;
          color: #a0a4a8;
          font-size: 9px;
          font-weight: 650;
          letter-spacing: .5px;
        }

        .vendor-response-card strong {
          display: block;
          color: #1c1c1c;
          font-size: 12px;
          font-weight: 650;
        }


        /* =====================================================
           FINAL TAGS
        ===================================================== */

        .vendor-final-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 18px 28px;
        }

        .vendor-final-tags span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #666c72;
          font-size: 11px;
          font-weight: 550;
        }

        .vendor-final-tags svg {
          width: 14px;
          height: 14px;
          color: #730024;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {

          .vendor-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .vendor-hero-grid {
            gap: 40px;
          }

          .vendor-hero-content h1 {
            font-size: 38px;
          }

          .vendor-image-wrap {
            height: 320px;
          }

          .vendor-opportunity-grid,
          .vendor-capability-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vendor-phase-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vendor-why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vendor-final-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }


        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {

          .vendor-hero-section {
            padding-top: 40px;
            padding-bottom: 60px;
          }

          .vendor-hero-grid {
            grid-template-columns: 1fr;
          }

          .vendor-hero-content {
            max-width: 800px;
          }

          .vendor-image-card {
            max-width: 750px;
          }

          .vendor-image-wrap {
            height: 350px;
          }

          .vendor-impact-card {
            grid-template-columns: 1fr;
          }

          .vendor-impact-image {
            min-height: 300px;
          }

          .vendor-methodology-heading-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .vendor-governance-badge {
            white-space: normal;
          }

          .vendor-final-card {
            padding: 55px 40px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .vendor-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .vendor-hero-section {
            padding-top: 32px;
            padding-bottom: 50px;
          }

          .vendor-hero-content h1 {
            font-size: 31px;
            line-height: 1.15;
            letter-spacing: -1.2px;
          }

          .vendor-hero-description {
            font-size: 13px;
            line-height: 1.65;
          }

          .vendor-hero-tags {
            gap: 10px 16px;
          }

          .vendor-hero-tags span {
            font-size: 11px;
          }

          .vendor-image-wrap {
            height: 270px;
          }

          .vendor-image-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 7px;
          }

          .vendor-section-heading {
            font-size: 24px;
          }

          .vendor-strategic-section {
            padding-top: 30px;
            padding-bottom: 60px;
          }

          .vendor-strategic-copy p,
          .vendor-strategic-bottom {
            font-size: 13px;
          }

          .vendor-quote {
            padding: 18px 18px;
          }

          .vendor-quote p {
            font-size: 13px;
          }

          .vendor-impact-content {
            padding: 28px 24px;
          }

          .vendor-impact-content h3 {
            font-size: 18px;
          }

          .vendor-impact-image {
            min-height: 230px;
          }

          .vendor-white-section,
          .vendor-methodology-section,
          .vendor-portfolio-section {
            padding-top: 60px;
            padding-bottom: 65px;
          }

          .vendor-centered-heading {
            margin-bottom: 30px;
          }

          .vendor-opportunity-grid,
          .vendor-capability-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .vendor-opportunity-card {
            min-height: auto;
            padding: 21px;
          }

          .vendor-opportunity-card p {
            min-height: auto;
          }

          .vendor-phase-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .vendor-phase-card {
            min-height: auto;
          }

          .vendor-phase-card > p {
            min-height: auto;
          }

          .vendor-capability-card {
            min-height: auto;
          }

          .vendor-capability-card p {
            min-height: auto;
          }

          .vendor-why-section {
            padding-top: 60px;
            padding-bottom: 65px;
          }

          .vendor-dark-heading {
            font-size: 30px;
          }

          .vendor-why-grid {
            grid-template-columns: 1fr;
          }

          .vendor-why-card {
            min-height: auto;
          }

          .vendor-why-card p {
            min-height: auto;
          }

          .vendor-final-section {
            padding: 60px 24px;
          }

          .vendor-final-card {
            padding: 45px 22px;
            border-radius: 15px;
          }

          .vendor-final-card h2 {
            font-size: 29px;
            letter-spacing: -.8px;
          }

          .vendor-final-card > p {
            font-size: 12.5px;
          }

          .vendor-final-tags {
            flex-direction: column;
            gap: 12px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .vendor-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .vendor-hero-section {
            padding-top: 25px;
            padding-bottom: 42px;
          }

          .vendor-pill {
            font-size: 8.5px;
            padding: 6px 10px;
          }

          .vendor-hero-content h1 {
            font-size: 27px;
            letter-spacing: -1px;
          }

          .vendor-hero-description {
            font-size: 12px;
          }

          .vendor-primary-btn {
            width: 100%;
            padding: 12px 17px;
            font-size: 12px;
          }

          .vendor-hero-tags {
            flex-direction: column;
            align-items: flex-start;
          }

          .vendor-image-wrap {
            height: 225px;
          }

          .vendor-image-info {
            padding: 13px 14px;
          }

          .vendor-image-title {
            font-size: 11.5px;
          }

          .vendor-verified {
            font-size: 9px;
          }

          .vendor-section-heading {
            font-size: 22px;
          }

          .vendor-section-pill {
            font-size: 8.5px;
          }

          .vendor-strategic-copy p,
          .vendor-strategic-bottom {
            font-size: 12px;
          }

          .vendor-quote p {
            font-size: 12px;
          }

          .vendor-impact-content {
            padding: 24px 18px;
          }

          .vendor-impact-content h3 {
            font-size: 17px;
          }

          .vendor-impact-content p {
            font-size: 12px;
          }

          .vendor-impact-image {
            min-height: 200px;
          }

          .vendor-opportunity-card {
            padding: 19px;
          }

          .vendor-opportunity-card h3 {
            font-size: 14px;
          }

          .vendor-opportunity-card p {
            font-size: 11.5px;
          }

          .vendor-phase-card {
            padding: 19px;
          }

          .vendor-methodology-intro,
          .vendor-portfolio-intro {
            font-size: 12px;
          }

          .vendor-capability-card {
            padding: 20px;
          }

          .vendor-dark-heading {
            font-size: 27px;
          }

          .vendor-dark-intro {
            font-size: 12px;
          }

          .vendor-final-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .vendor-final-card {
            padding: 38px 17px;
          }

          .vendor-final-card h2 {
            font-size: 25px;
          }

          .vendor-final-card > p {
            font-size: 12px;
          }

          .vendor-response-card {
            width: 100%;
            justify-content: flex-start;
          }

        }

      `}</style>
    </div>
  );
}