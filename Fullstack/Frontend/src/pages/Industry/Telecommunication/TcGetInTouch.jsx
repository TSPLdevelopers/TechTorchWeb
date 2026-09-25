import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Network,
  Plus,
  FileText,
} from "lucide-react";

const BEETROOT = "#730042";

const FOCUS_AREAS = [
  "Network Automation & Operations",
  "ERP & Core Systems",
  "CRM & Subscriber Portals",
  "Financial & Revenue Management",
  "Custom Telemetry & Software",
  "Other Requirements",
];

const BENEFITS = [
  {
    icon: <ShieldCheck size={17} />,
    title: "Specialized Telecom Systems Practice",
    description:
      "Deep engineering capability across 5G core network telemetry, edge computing, and mediation layers.",
  },
  {
    icon: <LockKeyhole size={17} />,
    title: "Bilateral Mutual NDA & Direct Scoping",
    description:
      "Non-disclosure framework executed prior to architectural and network topology review.",
  },
  {
    icon: <Network size={17} />,
    title: "Architecture-Led Discovery",
    description:
      "Direct engagement with senior solutions architects, bypassing sales queues.",
  },
];

export default function TelecommunicationsGetInTouch() {
  const [selectedAreas, setSelectedAreas] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    requirements: "",
    nda: false,
    consultation: false,
  });

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Telecommunications enquiry:", {
      ...formData,
      selectedAreas,
    });
  };

  return (
    <>
      <style>{`
        :root {
          --tc-beetroot: #730042;
          --tc-dark: #111827;
          --tc-text: #526174;
          --tc-light-text: #7b8798;
          --tc-border: #e3e8ef;
          --tc-soft: #fff8fb;
        }

        * {
          box-sizing: border-box;
        }

        .tc-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          color: var(--tc-dark);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        /* ================= TOP BAR ================= */

        .tc-topbar {
          width: 100%;
          height: 40px;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeee;
          background: #fff;
        }

        .tc-topbar-left,
        .tc-topbar-right {
          display: flex;
          align-items: center;
        }

        .tc-topbar-left {
          gap: 8px;
        }

        .tc-topbar-right {
          gap: 25px;
        }

        .tc-topbar-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--tc-beetroot);
        }

        .tc-topbar-text {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: #596579;
        }

        .tc-topbar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          color: #687487;
        }

        .tc-topbar-item svg {
          color: var(--tc-beetroot);
        }

        /* ================= HERO ================= */

        .tc-hero {
          max-width: 1250px;
          margin: 0 auto;
          padding: 48px 25px 0;
        }

        .tc-hero-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 48px;
          align-items: center;
        }

        .tc-eyebrow {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 14px;
          border-radius: 999px;
          background: #fff0f6;
          border: 1px solid #f6c7db;
          color: var(--tc-beetroot);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .tc-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--tc-beetroot);
        }

        .tc-hero-content h1 {
          margin: 25px 0 20px;
          max-width: 560px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          line-height: 0.98;
          letter-spacing: -2px;
          word-spacing: 4px;
          font-weight: 600;
          color: #111a2c;
        }

        .tc-hero-content > p {
          max-width: 560px;
          margin: 0;
          color: #607087;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        /* ================= BENEFITS ================= */

        .tc-benefits {
          display: flex;
          flex-direction: column;
          gap: 13px;
          margin-top: 31px;
          max-width: 610px;
        }

        .tc-benefit-card {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 83px;
          padding: 14px 17px;
          background: #fff;
          border: 1px solid #e3e8ef;
          border-radius: 11px;
          box-shadow: 0 3px 10px rgba(20, 30, 50, 0.035);
        }

        .tc-benefit-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--tc-beetroot);
          background: #fff0f6;
          border-radius: 8px;
        }

        .tc-benefit-content h3 {
          margin: 0 0 4px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.25;
          font-weight: 600;
          color: #172033;
        }

        .tc-benefit-content p {
          margin: 0;
          color: #607087;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.45;
        }

        /* ================= HERO IMAGE ================= */

        .tc-image-card {
          position: relative;
          width: 92%;
          height: 380px;
          justify-self: end;
          overflow: hidden;
          border-radius: 14px;
          background: #ddd;
          box-shadow: 0 7px 22px rgba(0, 0, 0, 0.08);
        }

        .tc-image-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tc-image-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 35%;
          background: linear-gradient(
            to top,
            rgba(115, 0, 66, 0.95),
            rgba(115, 0, 66, 0)
          );
        }

        .tc-image-info {
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 18px;
          min-height: 60px;
          padding: 13px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 12px;
        }

        .tc-image-info-left {
          min-width: 0;
        }

        .tc-image-label {
          margin-bottom: 5px;
          color: var(--tc-beetroot);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .tc-image-title {
          color: #182033;
          font-size: 12px;
          font-weight: 700;
        }

        .tc-image-time {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 7px;
          color: #647184;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .tc-image-time svg {
          color: var(--tc-beetroot);
        }

        /* ================= FORM SECTION ================= */

        .tc-form-section {
          max-width: 1000px;
          margin: 105px auto 70px;
          padding: 0 25px;
        }

        .tc-form-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .tc-form-heading .tc-section-label {
          color: var(--tc-beetroot);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        .tc-form-heading h2 {
          margin: 9px 0 7px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 24px;
          line-height: 1.25;
          font-weight: 700;
          color: #172033;
        }

        .tc-form-heading p {
          max-width: 620px;
          margin: 0 auto;
          color: #738095;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.55;
        }

        .tc-form-card {
          width: 100%;
          padding: 31px 35px 30px;
          border: 1px solid #e3e8ef;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 4px 18px rgba(25, 35, 55, 0.035);
        }

        /* ================= FORM SECTIONS ================= */

        .tc-form-block {
          margin-bottom: 28px;
        }

        .tc-form-block:last-of-type {
          margin-bottom: 18px;
        }

        .tc-form-section-title {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 13px;
        }

        .tc-number {
          width: 25px;
          height: 25px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #fff0f6;
          color: var(--tc-beetroot);
          font-size: 10px;
          font-weight: 800;
        }

        .tc-form-section-title h3 {
          margin: 0 0 2px;
          font-size: 14px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-weight: 600;
          color: #1c2638;
        }

        .tc-form-section-title p {
          margin: 0;
          color: #8792a2;
          font-size: 12px;
          font-family: "Inter", Arial, sans-serif;
          line-height: 1.4;
        }

        /* ================= FOCUS AREAS ================= */

        .tc-focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
        }

        .tc-focus-option {
          min-height: 51px;
          padding: 10px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          border: 1px solid #dfe5ed;
          border-radius: 8px;
          background: #fff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          color: #344054;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tc-focus-option:hover {
          border-color: #c98aaa;
        }

        .tc-focus-option.active {
          background: var(--tc-beetroot);
          border-color: var(--tc-beetroot);
          color: #fff;
        }

        .tc-focus-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d9e0e8;
          border-radius: 4px;
          color: #a3afbd;
        }

        .tc-focus-option.active .tc-focus-icon {
          border-color: rgba(255, 255, 255, 0.45);
          color: #fff;
        }

        /* ================= INPUTS ================= */

        .tc-input-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .tc-field {
          min-width: 0;
        }

        .tc-field label {
          display: block;
          margin-bottom: 6px;
          color: #4d596b;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.35px;
        }

        .tc-required {
          color: var(--tc-beetroot);
        }

        .tc-field input,
        .tc-field textarea {
          width: 100%;
          border: 1px solid #dfe5ed;
          border-radius: 7px;
          outline: none;
          background: #fff;
          color: #263246;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          transition: 0.2s ease;
        }

        .tc-field input {
          height: 38px;
          padding: 0 11px;
        }

        .tc-field textarea {
          min-height: 85px;
          padding: 11px;
          resize: vertical;
          line-height: 1.5;
        }

        .tc-field input::placeholder,
        .tc-field textarea::placeholder {
          color: #aab5c4;
        }

        .tc-field input:focus,
        .tc-field textarea:focus {
          border-color: #c889a9;
          box-shadow: 0 0 0 2px rgba(115, 0, 66, 0.04);
        }

        /* ================= CHECKBOXES ================= */

        .tc-check-box {
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #fafbfd;
          border: 1px solid #e3e8ef;
          border-radius: 8px;
        }

        .tc-check-row {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #677386;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.45;
        }

        .tc-check-row input {
          width: 12px;
          height: 12px;
          margin: 0;
          flex-shrink: 0;
          accent-color: var(--tc-beetroot);
        }

        /* ================= BUTTON ================= */

        .tc-submit-wrap {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 25px;
        }

        .tc-submit {
          width: 100%;
          max-width: 360px;
          min-width: 0;
          height: 40px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 7px;
          background: var(--tc-beetroot);
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tc-submit:hover {
          background: #5d0035;
        }

        .tc-confidential {
          margin-top: 11px;
          text-align: center;
          color: #677386;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {
          .tc-hero {
            padding-left: 22px;
            padding-right: 22px;
          }

          .tc-hero-grid {
            grid-template-columns: 1fr 0.88fr;
            gap: 32px;
          }

          .tc-image-card {
            width: 100%;
          }
        }

        @media (max-width: 900px) {
          .tc-hero-grid {
            grid-template-columns: 1fr;
          }

          .tc-hero-content {
            text-align: center;
          }

          .tc-eyebrow {
            margin: 0 auto;
          }

          .tc-hero-content h1,
          .tc-hero-content > p {
            margin-left: auto;
            margin-right: auto;
          }

          .tc-benefits {
            margin-left: auto;
            margin-right: auto;
            text-align: left;
          }

          .tc-image-card {
            width: 100%;
            height: 430px;
            justify-self: stretch;
          }
        }

        @media (max-width: 700px) {
          .tc-topbar {
            height: auto;
            min-height: 40px;
            padding: 9px 15px;
            gap: 10px;
          }

          .tc-topbar-right {
            gap: 10px;
          }

          .tc-topbar-item:last-child {
            display: none;
          }

          .tc-hero {
            padding: 35px 15px 0;
          }

          .tc-hero-content h1 {
            font-size: 35px;
            letter-spacing: -1.5px;
          }

          .tc-hero-content > p {
            font-size: 14px;
          }

          .tc-image-card {
            width: 100%;
            height: 380px;
          }

          .tc-image-info {
            left: 13px;
            right: 13px;
            bottom: 13px;
          }

          .tc-image-time {
            font-size: 9px;
          }

          .tc-form-section {
            margin-top: 70px;
            padding: 0 15px;
          }

          .tc-form-card {
            padding: 25px 18px;
          }

          .tc-focus-grid {
            grid-template-columns: 1fr 1fr;
          }

          .tc-input-grid {
            grid-template-columns: 1fr;
          }

          .tc-submit {
            width: min(100%, 360px);
            min-width: 0;
            padding: 0 14px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .tc-topbar-text {
            font-size: 8px;
          }

          .tc-topbar-item {
            font-size: 8px;
          }

          .tc-hero-content h1 {
            font-size: 30px;
          }

          .tc-image-card {
            height: 320px;
          }

          .tc-image-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }

          .tc-focus-grid {
            grid-template-columns: 1fr;
          }

          .tc-form-heading h2 {
            font-size: 21px;
          }

          .tc-submit {
            width: 100%;
            min-width: 0;
            height: auto;
            min-height: 40px;
            padding: 10px 14px;
            line-height: 1.25;
          }
        }
      `}</style>

      <div className="tc-page">

        {/* ================= TOP BAR ================= */}

        <div className="tc-topbar">
          <div className="tc-topbar-left">
            <span className="tc-topbar-dot" />
            <span className="tc-topbar-text">
              TELECOMMUNICATIONS PRACTICE · DIRECT ARCHITECTURAL CONSULTATION
            </span>
          </div>

          <div className="tc-topbar-right">
            <div className="tc-topbar-item">
              <ShieldCheck size={12} />
              Mutual NDA Protection
            </div>

            <div className="tc-topbar-item">
              <span style={{ color: BEETROOT }}>◷</span>
              Direct Architect Response (&lt; 24h)
            </div>
          </div>
        </div>

        {/* ================= HERO ================= */}

        <section className="tc-hero">
          <div className="tc-hero-grid">

            {/* LEFT CONTENT */}

            <div className="tc-hero-content">

              <div className="tc-eyebrow">
                <span className="tc-eyebrow-dot" />
                TELECOMMUNICATIONS · CONSULTATION
              </div>

              <h1>
                Discuss Your Telecommunications
                <br />
                Technology Requirements
              </h1>

              <p>
                Discuss your telecommunications business and technology
                requirements with TechTorch. Our senior telecom systems
                architects partner with carriers and network operators to
                evaluate ERP, CRM, network operations, cloud infrastructure,
                and custom software solutions.
              </p>

              <div className="tc-benefits">
                {BENEFITS.map((item, index) => (
                  <div className="tc-benefit-card" key={index}>

                    <div className="tc-benefit-icon">
                      {item.icon}
                    </div>

                    <div className="tc-benefit-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT IMAGE */}

            <div className="tc-image-card">

              <img
                src="/TcGetInTouch.png"
                alt="Telecommunications technology consultation"
              />

              <div className="tc-image-overlay" />

              <div className="tc-image-info">

                <div className="tc-image-info-left">
                  <div className="tc-image-label">
                    TELECOMMUNICATIONS SYSTEMS PRACTICE
                  </div>

                  <div className="tc-image-title">
                    Direct Architect Access Desk
                  </div>
                </div>

                <div className="tc-image-time">
                  <span style={{ fontSize: "16px" }}>◷</span>
                  Available 08:00–20:00 EST
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= FORM ================= */}

        <section className="tc-form-section">

          <div className="tc-form-heading">

            <div className="tc-section-label">
              SPECIFICATION INTAKE
            </div>

            <h2>
              Telecommunications Architectural Briefing Console
            </h2>

            <p>
              Complete the fields below to dispatch your operational scope
              directly to our telecommunications systems division.
            </p>

          </div>

          <div className="tc-form-card">

            <form onSubmit={handleSubmit}>

              {/* PROJECT SCOPE */}

              <div className="tc-form-block">

                <div className="tc-form-section-title">

                  <div className="tc-number">01</div>

                  <div>
                    <h3>Project Scope & Focus Areas</h3>
                    <p>
                      Select all relevant architecture and modernization
                      areas for your consultation.
                    </p>
                  </div>

                </div>

                <div className="tc-focus-grid">

                  {FOCUS_AREAS.map((area, index) => {
                    const active = selectedAreas.includes(area);

                    return (
                      <div
                        key={area}
                        className={`tc-focus-option ${
                          active ? "active" : ""
                        }`}
                        onClick={() => toggleArea(area)}
                      >
                        <span>{area}</span>

                        <span className="tc-focus-icon">
                          {active ? (
                            "✓"
                          ) : index === 5 ? (
                            <FileText size={10} />
                          ) : (
                            <Plus size={10} />
                          )}
                        </span>
                      </div>
                    );
                  })}

                </div>

              </div>

              {/* CONTACT DETAILS */}

              <div className="tc-form-block">

                <div className="tc-form-section-title">

                  <div className="tc-number">02</div>

                  <div>
                    <h3>Contact & Organization Details</h3>
                    <p>
                      Direct architect matching and coordination.
                    </p>
                  </div>

                </div>

                <div className="tc-input-grid">

                  <div className="tc-field">
                    <label>
                      Full Name <span className="tc-required">*</span>
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alistair Vance"
                      required
                    />
                  </div>

                  <div className="tc-field">
                    <label>
                      Corporate Email <span className="tc-required">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@telecom-operator.com"
                      required
                    />
                  </div>

                  <div className="tc-field">
                    <label>
                      Company / Organization Name{" "}
                      <span className="tc-required">*</span>
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Telecom Group"
                      required
                    />
                  </div>

                  <div className="tc-field">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 019-2834"
                    />
                  </div>

                </div>

              </div>

              {/* REQUIREMENTS */}

              <div className="tc-form-block">

                <div className="tc-form-section-title">

                  <div className="tc-number">03</div>

                  <div>
                    <h3>Project Details & Requirements</h3>
                    <p>
                      Briefly outline your systems scope, challenges, or goals.
                    </p>
                  </div>

                </div>

                <div className="tc-field">

                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="Describe your key project objectives, existing platforms, integration benchmarks, or timeline requirements..."
                  />

                </div>

              </div>

              {/* AGREEMENTS */}

              <div className="tc-check-box">

                <label className="tc-check-row">

                  <input
                    type="checkbox"
                    name="nda"
                    checked={formData.nda}
                    onChange={handleChange}
                  />

                  <span>
                    Execute a Mutual Non-Disclosure Agreement (M-NDA)
                    prior to technical briefing.
                  </span>

                </label>

                <label className="tc-check-row">

                  <input
                    type="checkbox"
                    name="consultation"
                    checked={formData.consultation}
                    onChange={handleChange}
                  />

                  <span>
                    Request immediate consultation scheduling with a
                    Principal Solutions Architect (&lt; 24h).
                  </span>

                </label>

              </div>

              {/* SUBMIT */}

              <div className="tc-submit-wrap">

                <button type="submit" className="tc-submit">
                  SUBMIT REQUIREMENTS & REQUEST CONSULTATION
                  <ArrowRight size={14} />
                </button>

              </div>

              <div className="tc-confidential">
                Strict Confidentiality Guaranteed • Information utilized
                solely for institutional technical scoping.
              </div>

            </form>

          </div>

        </section>

      </div>
    </>
  );
}