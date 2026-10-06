import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Code2,
  Boxes,
  Users,
  BriefcaseBusiness,
  Network,
  Cpu,
  Settings2,
  ShieldCheck,
  Check,
  Sparkles,
  Handshake,
} from "lucide-react";

export default function BecomePartner() {
  const navigate = useNavigate();

  const [selectedScopes, setSelectedScopes] = useState([]);
  const [collaboration, setCollaboration] = useState("");

  const scopes = [
    "Software Engineering",
    "Digital Solutions",
    "Artificial Intelligence",
    "Cloud Infrastructure",
    "Cyber Security",
    "Resource & Staffing",
    "IT Consultancy",
    "Software Development & Support",
    "Web Solutions",
    "Other",
  ];

  const opportunities = [
    {
      track: "TRACK 01",
      title: "Technology & Software Partner",
      description:
        "For technology companies looking to complement their existing offerings with software development, digital solutions, integration, or technical capabilities.",
      areas: [
        "Software Development",
        "Digital Solutions",
        "System Integration",
        "Technical Support",
      ],
      icon: <Code2 size={18} />,
    },
    {
      track: "TRACK 02",
      title: "Systems Integrator & Solution Partner",
      description:
        "For organizations looking to work with additional technology capabilities across software, enterprise solutions, cloud, and integration requirements.",
      areas: [
        "Enterprise Solutions",
        "Software Engineering",
        "Cloud Infrastructure",
        "API & System Integration",
      ],
      icon: <Network size={18} />,
    },
    {
      track: "TRACK 03",
      title: "Resource & Staffing Partner",
      description:
        "For organizations looking to collaborate around technology resources and flexible staffing requirements.",
      areas: [
        "Technology Resources",
        "Software Engineering",
        "Project Support",
        "Technical Staffing",
      ],
      icon: <Users size={18} />,
    },
    {
      track: "TRACK 04",
      title: "Consulting & Business Partner",
      description:
        "For consulting and business organizations looking to complement their customer engagements with relevant technology capabilities.",
      areas: [
        "IT Consultancy",
        "Digital Solutions",
        "Software Services",
        "Technology Support",
      ],
      icon: <BriefcaseBusiness size={18} />,
    },
  ];

  const collaborationOptions = [
    {
      id: "co-selling",
      title: "Co-Selling",
      description:
        "Explore opportunities where complementary services or solutions can be presented together.",
    },
    {
      id: "co-delivery",
      title: "Co-Delivery",
      description:
        "Collaborate on suitable technology or project requirements using complementary capabilities.",
    },
    {
      id: "technology",
      title: "Technology Collaboration",
      description:
        "Explore opportunities to combine technical expertise, solutions, or services.",
    },
    {
      id: "referral",
      title: "Referral / Business Introduction",
      description:
        "Introduce relevant business opportunities where there may be a suitable technology requirement.",
    },
  ];

  const toggleScope = (scope) => {
    setSelectedScopes((prev) =>
      prev.includes(scope)
        ? prev.filter((item) => item !== scope)
        : [...prev, scope]
    );
  };

  return (
    <div className="bp-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="bp-hero">

        <div className="bp-hero-content">

          <div className="bp-pill">
            <span></span>
            TECHTORCH ALLIANCE PROGRAM
          </div>

          <h1>
            Become a TechTorch
            <br />
            Technology Partner
          </h1>

          <p>
            Explore collaboration opportunities with TechTorch by combining
            complementary technology capabilities, services, and business
            expertise to support customer and project requirements.
          </p>

          <button
            type="button"
            className="bp-primary-btn"
            onClick={() =>
              document
                .getElementById("partner-application")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Talk to an Expert
            <ArrowRight size={16} />
          </button>

          <div className="bp-hero-tags">

            <div>
              <Sparkles size={14} />
              Technology Collaboration
            </div>

            <div>
              <Handshake size={14} />
              Shared Capabilities
            </div>

            <div>
              <ArrowRight size={14} />
              Business Opportunities
            </div>

          </div>

        </div>

        <div className="bp-hero-image-container">

          <div className="bp-hero-image-wrapper">

            <img
              src="/BecomePartner.png"
              alt="Technology Partnership"
              className="bp-hero-image"
            />

            <div className="bp-image-overlay-card">

              <div className="bp-overlay-icon">
                <Handshake size={21} />
              </div>

              <div className="bp-overlay-content">
                <strong>Technology Partnership</strong>
                <span>
                  Explore Collaboration Opportunities
                </span>
              </div>

              <ArrowRight
                size={21}
                className="bp-overlay-arrow"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OPPORTUNITIES
      ========================= */}

      <section className="bp-opportunities">

        <div className="bp-heading-row">

          <div>

            <div className="bp-section-label">
              02 / PARTNERSHIP OPPORTUNITIES
            </div>

            <h2>
              Explore How We Can Work Together
            </h2>

          </div>

          <p>
            Different organizations bring different strengths. A partnership
            can create value when those capabilities complement each other
            and address a clear business or technology requirement.
          </p>

        </div>


        <div className="bp-track-grid">

          {opportunities.map((item) => (

            <div
              className="bp-track-card"
              key={item.track}
            >

              <div className="bp-track-top">

                <span>{item.track}</span>

                <div className="bp-track-icon">
                  {item.icon}
                </div>

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="bp-possible">
                POSSIBLE COLLABORATION
                <br />
                AREAS
              </div>

              <ul className="bp-track-areas">
                {item.areas.map((area) => (
                  <li key={area}>
                    {area}
                  </li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          PARTNER APPLICATION
      ========================= */}

      <section
        className="bp-application"
        id="partner-application"
      >

        <div className="bp-section-label">
          03 / PARTNERSHIP REQUEST
        </div>

        <h2>Partner Application</h2>

        <p className="bp-application-intro">
          Tell Us About Your Organization
          <br />
          Share some information about your organization, capabilities, and
          the type of collaboration you would like to explore. This will help
          the TechTorch team understand your requirements and identify relevant
          areas for discussion.
        </p>


        <div className="bp-form-columns">

          <div>

            <div className="bp-form-title">
              <span>1</span>
              ORGANIZATION DETAILS
            </div>

            <div className="bp-field">
              <label>LEGAL / COMPANY NAME *</label>

              <input
                type="text"
                placeholder="e.g. Apex Strategic Engineering Corp"
              />
            </div>

            <div className="bp-field">
              <label>CORPORATE WEBSITE</label>

              <input
                type="url"
                placeholder="https://example.com"
              />
            </div>

            <div className="bp-small-row">

              <div className="bp-field">
                <label>PRIMARY LOCATION *</label>

                <input
                  type="text"
                  placeholder="e.g. London, UK"
                />
              </div>

              <div className="bp-field">
                <label>COMPANY SIZE</label>

                <select defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>

                  <option>1-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>501-1000 employees</option>
                  <option>1000+ employees</option>
                </select>

              </div>

            </div>

          </div>


          <div>

            <div className="bp-form-title">
              <span>2</span>
              PRIMARY CONTACT
            </div>

            <div className="bp-field">
              <label>FULL NAME *</label>

              <input
                type="text"
                placeholder="e.g. Eleanor Vance"
              />
            </div>

            <div className="bp-field">
              <label>BUSINESS EMAIL *</label>

              <input
                type="email"
                placeholder="e.vance@company.com"
              />
            </div>

            <div className="bp-small-row">

              <div className="bp-field">
                <label>DESIGNATION / ROLE *</label>

                <input
                  type="text"
                  placeholder="e.g. Head of Strategic Partnerships"
                />
              </div>

              <div className="bp-field">
                <label>PHONE NUMBER</label>

                <input
                  type="tel"
                  placeholder="+44 20 7946 0912"
                />
              </div>

            </div>

          </div>

        </div>


        {/* PARTNERSHIP SCOPE */}

        <div className="bp-form-section">

          <div className="bp-form-title">
            <span>3</span>
            PARTNERSHIP SCOPE
          </div>

          <p className="bp-helper">
            These options are aligned with TechTorch's publicly listed
            service areas.
          </p>

          <div className="bp-scope-grid">

            {scopes.map((scope) => {

              const isSelected =
                selectedScopes.includes(scope);

              return (

                <button
                  type="button"
                  key={scope}
                  className={`bp-scope-option ${
                    isSelected ? "active" : ""
                  }`}
                  onClick={() => toggleScope(scope)}
                >

                  <span className="bp-checkbox">
                    {isSelected && (
                      <Check size={8} />
                    )}
                  </span>

                  {scope}

                </button>

              );

            })}

          </div>

          <div className="bp-field">

            <label>
              IF OTHER, PLEASE SPECIFY
            </label>

            <input
              type="text"
              placeholder="Tell us about the technology capability or business area you are interested in."
            />

          </div>

        </div>


        {/* COLLABORATION */}

        <div className="bp-form-section">

          <div className="bp-form-title">
            <span>4</span>
            COLLABORATION PREFERENCE
          </div>

          <div className="bp-collaboration-grid">

            {collaborationOptions.map((item) => {

              const selected =
                collaboration === item.id;

              return (

                <button
                  type="button"
                  key={item.id}
                  className={`bp-collaboration-card ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    setCollaboration(
                      selected ? "" : item.id
                    )
                  }
                >

                  <div className="bp-collab-top">

                    <strong>
                      {item.title}
                    </strong>

                    <span className="bp-radio">
                      {selected && (
                        <span></span>
                      )}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                </button>

              );

            })}

          </div>

        </div>


        {/* REQUIREMENTS */}

        <div className="bp-form-section">

          <div className="bp-form-title">
            <span>5</span>
            PARTNERSHIP REQUIREMENTS
          </div>

          <div className="bp-field">

            <label>
              TELL US ABOUT YOUR OPPORTUNITY
            </label>

            <textarea
              placeholder="Please share a brief overview of your organization, current capabilities, target market, customer requirements, and the type of technology collaboration you would like to explore."
            />

          </div>

          <div className="bp-field">

            <label>
              STRATEGIC OBJECTIVES
            </label>

            <textarea
              placeholder="Tell us what you would like to achieve through the partnership and which TechTorch capabilities may be relevant to your requirements."
            />

          </div>

        </div>


        {/* FORM BOTTOM */}

        <div className="bp-form-bottom">

          <div className="bp-privacy">

            <span>ⓘ</span>

            <p>
              Your information will be reviewed based on the details
              provided in your partnership request.
              <br />
              Any commercial, technical, or confidential arrangements will
              be discussed separately where applicable.
            </p>

          </div>

          <button
            type="button"
            className="bp-submit-btn"
            onClick={() => {
              alert("Partnership request submitted.");
            }}
          >
            Submit Partnership Request
            <ArrowRight size={13} />
          </button>

        </div>

      </section>


      {/* =========================
          PROCESS
      ========================= */}

      <section className="bp-process">

        <div className="bp-section-label">
          04 / PROCESS OVERVIEW
        </div>

        <h2>
          From Partnership Request to Collaboration
        </h2>

        <p className="bp-process-intro">
          Once you submit your information, the next steps can be kept
          simple and transparent.
        </p>

        <div className="bp-process-grid">

          {[
            {
              number: "01",
              title: "Initial Review",
              text:
                "We review the information you provide about your organization, capabilities, and partnership requirements.",
              label: "PARTNERSHIP REVIEW",
            },
            {
              number: "02",
              title: "Discussion",
              text:
                "If there is a relevant area to explore, the TechTorch team can connect with you to better understand the opportunity and requirements.",
              label: "BUSINESS DISCUSSION",
            },
            {
              number: "03",
              title: "Collaboration Planning",
              text:
                "Where there is a suitable fit, both sides can discuss the appropriate scope, responsibilities, and working model.",
              label: "COLLABORATION PLANNING",
            },
            {
              number: "04",
              title: "Formal Engagement",
              text:
                "Any commercial, technical, or partnership arrangement can be documented separately based on the agreed scope and requirements.",
              label: "FORMAL AGREEMENT",
            },
          ].map((item) => (

            <div
              className="bp-process-card"
              key={item.number}
            >

              <div className="bp-process-number">
                {item.number}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <div className="bp-process-label">
                • {item.label}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          CAPABILITIES
      ========================= */}

      <section className="bp-capabilities">

        <div className="bp-cap-label">
          05 / OUR CAPABILITIES
        </div>

        <h2>
          Technology Capabilities That Can
          <br />
          Complement Your Business
        </h2>

        <div className="bp-cap-grid">

          <CapabilityCard
            icon={<Cpu size={18} />}
            title="Broad Technology Services"
            text="TechTorch works across software engineering, IT consultancy, AI, cloud infrastructure, cybersecurity, software development and support, resource and staffing, and other technology services."
          />

          <CapabilityCard
            icon={<Boxes size={18} />}
            title="Digital Solution Capabilities"
            text="Our technology portfolio includes business-focused solutions covering areas such as ERP, operations, supply chain, financial management, CRM, e-commerce, project management, and more."
          />

          <CapabilityCard
            icon={<Code2 size={18} />}
            title="Software Engineering Expertise"
            text="Our software engineering capabilities include custom software development, web and mobile applications, enterprise solutions, API development and integration, testing, modernization, and ongoing support."
          />

          <CapabilityCard
            icon={<Settings2 size={18} />}
            title="Flexible Collaboration"
            text="Partnership discussions can be shaped around the specific technology requirements, capabilities, and objectives of the organizations involved."
          />

        </div>

      </section>


      {/* =========================
          FINAL CTA
      ========================= */}

      <section className="bp-final-cta">

        <div className="bp-pill">
          <span></span>
          START A PARTNERSHIP CONVERSATION
        </div>

        <h2>
          Let's Explore the Right Partnership
          <br />
          Together
        </h2>

        <p>
          Have a technology capability, service, solution, or business
          opportunity that you would like to explore with TechTorch? Share
          your requirements and let our team discuss the right framework
          to build together.
        </p>

        <button
          type="button"
          className="bp-primary-btn"
          onClick={() =>
            document
              .getElementById("partner-application")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Talk to an Expert
          <ArrowRight size={16} />
        </button>

        <div className="bp-cta-divider"></div>

        <div className="bp-cta-points">

          <span>
            <ShieldCheck size={15} />
            Partnership Discussion
          </span>

          <span>
            <ShieldCheck size={15} />
            Flexible Collaboration
          </span>

          <span>
            <ShieldCheck size={15} />
            Technology-Focused Support
          </span>

        </div>

      </section>


      {/* =========================
          ALL CSS
      ========================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .bp-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #f8f9fa;
          color: #181a1e;
          font-family: "Inter", Arial, sans-serif;
        }

        .bp-page h1,
        .bp-page h2,
        .bp-page h3,
        .bp-page p {
          margin-top: 0;
        }

        .bp-page button,
        .bp-page input,
        .bp-page textarea,
        .bp-page select {
          font-family: inherit;
        }


        /* =========================
           COMMON
        ========================= */

        .bp-section-label {
          color: #701040;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .8px;
        }

        .bp-pill {
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
          letter-spacing: .5px;
        }

        .bp-pill span {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #85004c;
        }


        /* =========================
           BUTTON
        ========================= */

        .bp-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 19px;
          border: none;
          border-radius: 7px;
          background: #90004f;
          color: white;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all .2s ease;
        }

        .bp-primary-btn:hover {
          background: #70003d;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(144,0,79,.18);
        }


        /* =========================
           HERO
        ========================= */

        .bp-hero {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
          min-height: 410px;
          padding: 42px 0 65px;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: center;
          gap: 48px;
        }

        .bp-hero-content h1 {
          margin: 18px 0 16px;
          color: #202327;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 36px;
          line-height: 1.12;
          letter-spacing: -1.6px;
          font-weight: 650;
        }

        .bp-hero-content > p {
          max-width: 570px;
          margin-bottom: 22px;
          color: #454b54;
          font-size: 15px;
          line-height: 1.55;
        }

        .bp-hero-tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 20px;
        }

        .bp-hero-tags div {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 11px;
          border: 1px solid #e2e5e8;
          border-radius: 6px;
          background: white;
          color: #64696e;
          font-size: 13px;
        }

        .bp-hero-tags svg {
          color: #90004f;
        }

        .bp-hero-image-container {
          width: 100%;
        }

        .bp-hero-image-wrapper {
          position: relative;
          width: 100%;
        }

        .bp-hero-image {
          display: block;
          width: 100%;
          aspect-ratio: 1.32 / 1;
          object-fit: cover;
          border-radius: 13px;
          box-shadow: 0 13px 28px rgba(0,0,0,.12);
        }


        /* =========================
           HERO OVERLAY
        ========================= */

        .bp-image-overlay-card {
          position: absolute;
          left: 5%;
          right: 5%;
          bottom: 4%;
          min-height: 70px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px;
          border: 1px solid rgba(255,255,255,.7);
          border-radius: 15px;
          background: rgba(255,255,255,.96);
          box-shadow: 0 8px 25px rgba(0,0,0,.14);
        }

        .bp-overlay-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #fff1f7;
          color: #8d0050;
        }

        .bp-overlay-content {
          min-width: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .bp-overlay-content strong {
          color: #25282d;
          font-size: 14px;
          line-height: 1.25;
          font-weight: 750;
        }

        .bp-overlay-content span {
          color: #777b80;
          font-size: 11px;
          line-height: 1.3;
        }

        .bp-overlay-arrow {
          flex-shrink: 0;
          color: #555b61;
        }


        /* =========================
           OPPORTUNITIES
        ========================= */

        .bp-opportunities {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
          padding: 15px 0 70px;
        }

        .bp-heading-row {
          display: grid;
          grid-template-columns: 1.35fr .65fr;
          gap: 65px;
          align-items: end;
          margin-bottom: 25px;
        }

        .bp-heading-row h2,
        .bp-process h2 {
          margin: 8px 0 0;
          color: #22262c;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 25px;
          line-height: 1.1;
          letter-spacing: -.8px;
          font-weight: 600;
        }

        .bp-heading-row p {
          margin: 0;
          color: #565d66;
          font-size: 14px;
          line-height: 1.55;
        }

        .bp-track-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 14px;
        }


        /* =========================
           TRACK CARDS
        ========================= */

        .bp-track-card {
          min-height: 300px;
          padding: 20px 17px;
          border: 1px solid #e0e4e8;
          border-radius: 10px;
          background: white;
          transition:
            border-color .25s ease,
            box-shadow .25s ease,
            transform .25s ease;
        }

        .bp-track-card:hover {
          transform: translateY(-3px);
          border-color: #8d0050;
          box-shadow: 0 10px 25px rgba(0,0,0,.07);
        }

        .bp-track-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bp-track-top > span {
          color: #8c0050;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .bp-track-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #f7edf3;
          color: #8d0050;
          transition:
            width .25s ease,
            height .25s ease,
            transform .25s ease,
            background .25s ease;
        }

        .bp-track-card:hover .bp-track-icon {
          width: 37px;
          height: 37px;
          transform: scale(1.05);
          background: #f5e7ee;
        }

        .bp-track-icon svg {
          width: 19px;
          height: 19px;
          transition:
            width .25s ease,
            height .25s ease;
        }

        .bp-track-card:hover .bp-track-icon svg {
          width: 22px;
          height: 22px;
        }

        .bp-track-card h3 {
          max-width: 200px;
          margin: 20px 0 10px;
          color: #25282d;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .bp-track-card > p {
          min-height: 83px;
          margin-bottom: 14px;
          color: #60666f;
          font-size: 12px;
          line-height: 1.5;
        }

        .bp-possible {
          padding-top: 11px;
          border-top: 1px solid #eceef0;
          color: #383d45;
          font-size: 10px;
          font-weight: 850;
          line-height: 1.4;
        }

        .bp-track-card ul,
        .bp-track-areas {
          margin: 8px 0 0;
          padding-left: 19px;
          list-style-type: disc;
        }

        .bp-track-card li,
        .bp-track-areas li {
          color: #60666F;
          font-size: 12px;
          line-height: 1.5;
          padding-left: 2px;
        }

        .bp-track-card li::marker,
        .bp-track-areas li::marker {
          color: #8d0050;
          font-size: 14px;
        }


        /* =========================
           APPLICATION
        ========================= */

        .bp-application {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto 70px;
          padding: 35px 38px;
          border: 1px solid #e0e4e7;
          border-radius: 14px;
          background: white;
        }

        .bp-application h2 {
          margin: 7px 0 5px;
          color: #22262c;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -1px;
          font-weight: 600;
        }

        .bp-application-intro {
          margin-bottom: 28px;
          color: #565d66;
          font-size: 12px;
          line-height: 1.55;
        }

        .bp-form-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
        }

        .bp-form-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          color: #34383d;
          font-size: 11px;
          font-weight: 850;
        }

        .bp-form-title > span {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50%;
          background: #8d0050;
          color: white;
          font-size: 9px;
        }

        .bp-field {
          margin-bottom: 13px;
        }

        .bp-field label {
          display: block;
          color: #383d45;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .25px;
        }

        .bp-field input,
        .bp-field select,
        .bp-field textarea {
          width: 100%;
          margin-top: 6px;
          padding: 10px 11px;
          border: 1px solid #cbd0d5;
          border-radius: 6px;
          background: #f5f6f7;
          color: #292d31;
          outline: none;
          font-size: 12.5px;
          line-height: 1.4;
        }

        .bp-field input::placeholder,
        .bp-field textarea::placeholder {
          color: #8f949a;
        }

        .bp-field input:focus,
        .bp-field select:focus,
        .bp-field textarea:focus {
          border-color: #8d0050;
          box-shadow: 0 0 0 2px rgba(141,0,80,.07);
        }

        .bp-small-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .bp-form-section {
          margin-top: 25px;
        }

        .bp-helper {
          margin: -5px 0 10px;
          color: #777d84;
          font-size: 10px;
          line-height: 1.5;
        }


        /* =========================
           SCOPE
        ========================= */

        .bp-scope-grid {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 8px;
          margin-bottom: 12px;
        }

        .bp-scope-option {
          min-height: 37px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 10px;
          border: none;
          border-radius: 5px;
          background: #eef0f2;
          color: #555a5f;
          text-align: left;
          font-size: 10.5px;
          font-weight: 600;
          cursor: pointer;
          transition:
            border-color .2s ease,
            color .2s ease;
        }

        .bp-scope-option:hover {
          background: #eef0f2;
          color: #555a5f;
        }

        .bp-scope-option:focus,
        .bp-scope-option:focus-visible,
        .bp-scope-option:active {
          background: #eef0f2;
          color: #555a5f;
          outline: none;
          box-shadow: none;
        }

        .bp-scope-option.active {
          background: #eef0f2;
          color: #555a5f;
        }

        .bp-checkbox {
          width: 11px;
          height: 11px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #aeb3b8;
          border-radius: 2px;
          background: white;
          color: white;
          transition: .2s ease;
        }

        .bp-scope-option.active .bp-checkbox {
          border-color: #8d0050;
          background: #8d0050;
          color: white;
        }


        /* =========================
           COLLABORATION
        ========================= */

        .bp-collaboration-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .bp-collaboration-card {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid transparent;
          border-radius: 7px;
          background: #eef0f2;
          text-align: left;
          cursor: pointer;
          transition: .2s ease;
        }

        .bp-collaboration-card:hover {
          border-color: #d1b6c5;
        }

        .bp-collaboration-card.selected {
          border-color: #8d0050;
          background: #f8edf3;
        }

        .bp-collab-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bp-collab-top strong {
          color: #3e4247;
          font-size: 12px;
        }

        .bp-collaboration-card p {
          margin: 5px 0 0;
          color: #777b80;
          font-size: 11px;
          line-height: 1.5;
        }

        .bp-radio {
          width: 13px;
          height: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #aeb3b8;
          border-radius: 50%;
          background: white;
        }

        .bp-radio > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #8d0050;
        }


        /* =========================
           TEXTAREA
        ========================= */

        .bp-field textarea {
          min-height: 75px;
          resize: vertical;
          line-height: 1.5;
        }


        /* =========================
           FORM BOTTOM
        ========================= */

        .bp-form-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 16px;
          margin-top: 5px;
          border-top: 1px solid #eceef0;
        }

        .bp-privacy {
          display: flex;
          align-items: flex-start;
          gap: 7px;
        }

        .bp-privacy > span {
          color: #8d0050;
          font-size: 10px;
        }

        .bp-privacy p {
          margin: 0;
          color: #777d84;
          font-size: 11px;
          line-height: 1.5;
        }

        .bp-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 11px 17px;
          border: none;
          border-radius: 6px;
          background: #90004f;
          color: white;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
          cursor: pointer;
          transition: .2s ease;
        }

        .bp-submit-btn:hover {
          background: #70003d;
        }


        /* =========================
           PROCESS
        ========================= */

        .bp-process {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
          padding-bottom: 70px;
        }

        .bp-process-intro {
          margin: 7px 0 23px;
          color: #777c81;
          font-size: 11px;
          line-height: 1.5;
        }

        .bp-process-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 13px;
        }

        .bp-process-card {
          min-height: 185px;
          padding: 17px;
          border: 1px solid #e0e4e8;
          border-radius: 10px;
          background: white;
        }

        .bp-process-number {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 7px;
          background: #f7edf3;
          color: #8d0050;
          font-size: 10px;
          font-weight: 800;
        }

        .bp-process-card h3 {
          margin-bottom: 8px;
          color: #282c31;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 700;
        }

        .bp-process-card p {
          color: #777b80;
          font-size: 12px;
          line-height: 1.55;
        }

        .bp-process-label {
          margin-top: 18px;
          color: #8d0050;
          font-size: 11px;
          font-weight: 800;
        }


        /* =========================
           CAPABILITIES
        ========================= */

        .bp-capabilities {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto 70px;
          padding: 35px;
          border-radius: 14px;
          background: #830047;
          color: white;
        }

        .bp-cap-label {
          color: #f2bfd8;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .6px;
        }

        .bp-capabilities > h2 {
          margin: 8px 0 25px;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -1px;
          font-weight: 600;
        }

        .bp-cap-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .bp-cap-card {
          min-height: 155px;
          padding: 17px;
          border-radius: 9px;
          background: rgba(255,255,255,.11);
        }

        .bp-cap-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 11px;
          border-radius: 5px;
          background: rgba(255,255,255,.14);
        }

        .bp-cap-card h3 {
          margin-bottom: 7px;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 700;
        }

        .bp-cap-card p {
          margin: 0;
          color: #f3dce8;
          font-size: 12px;
          line-height: 1.55;
        }


        /* =========================
           FINAL CTA
        ========================= */

        .bp-final-cta {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto 55px;
          padding: 60px 25px;
          border: 1px solid #e0e4e8;
          border-radius: 14px;
          background: white;
          text-align: center;
        }

        .bp-final-cta .bp-pill {
          margin: 0 auto;
        }

        .bp-final-cta h2 {
          margin: 18px 0 20px;
          color: #202327;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 36px;
          line-height: 1.1;
          letter-spacing: -1.6px;
          font-weight: 650;
        }

        .bp-final-cta > p {
          max-width: 700px;
          margin: 0 auto 25px;
          color: #71767b;
          font-size: 14px;
          line-height: 1.55;
        }

        .bp-cta-divider {
          width: min(800px,90%);
          height: 1px;
          margin: 34px auto 21px;
          background: #eceef0;
        }

        .bp-cta-points {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 38px;
        }

        .bp-cta-points span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #686d72;
          font-size: 13px;
        }

        .bp-cta-points svg {
          color: #8d0050;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 950px) {

          .bp-hero {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }

          .bp-heading-row {
            gap: 35px;
          }

          .bp-track-grid {
            grid-template-columns: 1fr 1fr;
          }

          .bp-scope-grid {
            grid-template-columns: repeat(3,1fr);
          }

          .bp-process-grid {
            grid-template-columns: 1fr 1fr;
          }

          .bp-hero-tags div {
            font-size: 12.5px;
          }

          .bp-track-card li,
          .bp-track-areas li {
            font-size: 12px;
          }

          .bp-process-card h3 {
            font-size: 15px;
          }

          .bp-process-card p {
            font-size: 12px;
          }

          .bp-process-label {
            font-size: 11px;
          }

          .bp-cap-card h3 {
            font-size: 15px;
          }

          .bp-cap-card p {
            font-size: 12px;
          }

          .bp-cta-points span {
            font-size: 13px;
          }

          .bp-privacy p {
            font-size: 11px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {

          .bp-hero,
          .bp-opportunities,
          .bp-application,
          .bp-process,
          .bp-capabilities,
          .bp-final-cta {
            width: calc(100% - 28px);
          }

          .bp-hero {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 30px 0 50px;
          }

          .bp-hero-content h1 {
            font-size: 30px;
            letter-spacing: -1.2px;
          }

          .bp-hero-content > p {
            font-size: 13px;
          }

          .bp-heading-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .bp-heading-row h2,
          .bp-process h2 {
            font-size: 25px;
          }

          .bp-heading-row p {
            font-size: 12px;
          }

          .bp-track-grid {
            grid-template-columns: 1fr;
          }

          .bp-track-card h3 {
            font-size: 13px;
          }

          .bp-track-card > p {
            font-size: 11px;
          }

          .bp-track-card li,
          .bp-track-areas li {
            font-size: 12px;
            line-height: 1.65;
          }

          .bp-application {
            padding: 28px 18px;
          }

          .bp-application h2 {
            font-size: 27px;
          }

          .bp-application-intro {
            font-size: 11px;
          }

          .bp-form-columns {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .bp-small-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .bp-scope-grid {
            grid-template-columns: 1fr 1fr;
          }

          .bp-collaboration-grid {
            grid-template-columns: 1fr;
          }

          .bp-field label {
            font-size: 10px;
          }

          .bp-field input,
          .bp-field select,
          .bp-field textarea {
            font-size: 12px;
          }

          .bp-form-bottom {
            flex-direction: column;
            align-items: stretch;
          }

          .bp-submit-btn {
            width: 100%;
          }

          .bp-process-grid {
            grid-template-columns: 1fr;
          }

          .bp-process-card h3 {
            font-size: 15px;
          }

          .bp-process-card p {
            font-size: 12px;
            line-height: 1.6;
          }

          .bp-process-label {
            font-size: 11px;
          }

          .bp-capabilities {
            padding: 28px 18px;
          }

          .bp-capabilities > h2 {
            font-size: 27px;
          }

          .bp-cap-grid {
            grid-template-columns: 1fr;
          }

          .bp-cap-card {
            min-height: auto;
          }

          .bp-cap-card h3 {
            font-size: 15px;
          }

          .bp-cap-card p {
            font-size: 12px;
            line-height: 1.6;
          }

          .bp-final-cta {
            padding: 48px 18px;
          }

          .bp-final-cta h2 {
            font-size: 30px;
            letter-spacing: -1px;
          }

          .bp-final-cta > p {
            font-size: 12px;
          }

          .bp-cta-points {
            flex-direction: column;
            gap: 13px;
          }

          .bp-cta-points span {
            font-size: 13px;
          }

          .bp-privacy p {
            font-size: 11px;
          }


          /* HERO OVERLAY */

          .bp-image-overlay-card {
            left: 4%;
            right: 4%;
            bottom: 4%;
            min-height: 62px;
            gap: 10px;
            padding: 9px 12px;
            border-radius: 12px;
          }

          .bp-overlay-icon {
            width: 37px;
            height: 37px;
            border-radius: 9px;
          }

          .bp-overlay-icon svg {
            width: 18px;
            height: 18px;
          }

          .bp-overlay-content strong {
            font-size: 12px;
          }

          .bp-overlay-content span {
            font-size: 9.5px;
          }

          .bp-overlay-arrow {
            width: 17px;
            height: 17px;
          }

        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {

          .bp-hero-content h1 {
            font-size: 28px;
          }

          .bp-hero-content > p {
            font-size: 12px;
          }

          .bp-scope-grid {
            grid-template-columns: 1fr;
          }

          .bp-hero-tags {
            flex-direction: column;
            align-items: flex-start;
          }

          .bp-capabilities > h2 {
            font-size: 24px;
          }

          .bp-final-cta h2 {
            font-size: 27px;
          }


          /* HERO OVERLAY - SMALL MOBILE */

          .bp-image-overlay-card {
            min-height: 56px;
            padding: 8px 10px;
            gap: 8px;
          }

          .bp-overlay-icon {
            width: 33px;
            height: 33px;
          }

          .bp-overlay-content strong {
            font-size: 11px;
          }

          .bp-overlay-content span {
            font-size: 9px;
          }

          .bp-overlay-arrow {
            width: 16px;
            height: 16px;
          }

        }

      `}</style>

    </div>
  );
}


/* =========================
   CAPABILITY CARD
========================= */

function CapabilityCard({ icon, title, text }) {

  return (

    <div className="bp-cap-card">

      <div className="bp-cap-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>

  );
}