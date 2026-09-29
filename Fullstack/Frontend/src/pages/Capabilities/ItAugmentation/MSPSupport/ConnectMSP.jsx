import React, { useState } from "react";
import {
  User,
  AtSign,
  Building2,
  Phone,
  Network,
  Shield,
  Server,
  MonitorSmartphone,
  Video,
  ListChecks,
  LockKeyhole,
  Clock3,
  BadgeCheck,
  ChevronDown,
} from "lucide-react";

const ConnectWithTechTorch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    serviceScope: "",
    supportTier: "",
    infrastructure: "",
    endpointScale: "",
    briefingMode: "30-Min Video Call",
    painPoints: "",
    nda: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("MSP Engagement Request:", formData);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .msp-connect-page {
          width: 100%;
          min-height: 100vh;
          background: #f6f8ff;
          color: #182238;
          font-family: Arial, Helvetica, sans-serif;
          padding: 70px 24px 80px;
        }

        .msp-connect-wrapper {
          width: 100%;
          max-width: 1030px;
          margin: 0 auto;
        }

        /* =========================
           TOP CONTENT
        ========================= */

        .msp-connect-header {
          text-align: center;
          margin-bottom: 38px;
        }

        .msp-connect-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 8px 17px;
          border: 1px solid #d8aac5;
          border-radius: 999px;
          background: #f7eaf2;
          color: #65003c;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .msp-connect-pill::before {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #760044;
          flex-shrink: 0;
        }

        .msp-connect-header h1 {
          margin: 24px auto 12px;
          max-width: 800px;
          font-size: 44px;
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -1.4px;
          color: #172035;
        }

        .msp-connect-header > p {
          max-width: 720px;
          margin: 0 auto;
          color: #50617d;
          font-size: 17px;
          line-height: 1.55;
        }

        /* =========================
           HEADER BENEFITS
        ========================= */

        .msp-connect-benefits {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 23px;
        }

        .msp-benefit {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 13px;
          border: 1px solid #e0e5ef;
          border-radius: 999px;
          background: #ffffff;
          color: #4e5c73;
          font-size: 12px;
          line-height: 1;
          white-space: nowrap;
          box-shadow: 0 2px 7px rgba(20, 31, 55, 0.03);
        }

        .msp-benefit svg {
          width: 14px;
          height: 14px;
          color: #85004a;
          stroke-width: 2;
        }

        /* =========================
           FORM CARD
        ========================= */

        .msp-form-card {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e0e5ee;
          border-radius: 18px;
          padding: 42px 50px 48px;
          box-shadow:
            0 18px 40px rgba(34, 48, 76, 0.08),
            0 3px 8px rgba(34, 48, 76, 0.04);
        }

        .msp-form {
          width: 100%;
        }

        /* =========================
           FORM GRID
        ========================= */

        .msp-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 22px;
          row-gap: 24px;
        }

        .msp-field {
          width: 100%;
        }

        .msp-field.full {
          grid-column: 1 / -1;
        }

        .msp-label {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 9px;
          color: #29354c;
          font-size: 14px;
          line-height: 1.3;
          font-weight: 700;
        }

        .msp-label svg {
          width: 16px;
          height: 16px;
          color: #810047;
          stroke-width: 2;
          flex-shrink: 0;
        }

        .msp-required {
          color: #810047;
          font-size: 15px;
        }

        .msp-input,
        .msp-select,
        .msp-textarea {
          width: 100%;
          border: 1px solid #dbe2ed;
          border-radius: 8px;
          background: #f8fafc;
          color: #1d293d;
          font-family: inherit;
          font-size: 14px;
          outline: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .msp-input {
          height: 50px;
          padding: 0 15px;
        }

        .msp-input::placeholder,
        .msp-textarea::placeholder {
          color: #9aabc4;
          opacity: 1;
        }

        .msp-input:focus,
        .msp-select:focus,
        .msp-textarea:focus {
          border-color: #9a175e;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(128, 0, 72, 0.08);
        }

        /* =========================
           SELECT
        ========================= */

        .msp-select-wrapper {
          position: relative;
        }

        .msp-select {
          height: 50px;
          appearance: none;
          -webkit-appearance: none;
          padding: 0 42px 0 15px;
          cursor: pointer;
        }

        .msp-select-wrapper > svg {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: #8da0ba;
          pointer-events: none;
        }

        /* =========================
           BRIEFING MODE
        ========================= */

        .msp-briefing {
          margin-top: 26px;
        }

        .msp-briefing-options {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .msp-radio-card {
          position: relative;
          min-height: 62px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border: 1px solid #dbe2ed;
          border-radius: 8px;
          background: #f8fafc;
          cursor: pointer;
          transition: border-color 0.2s ease;
        }

        .msp-radio-card:hover {
          border-color: #c9a1b9;
        }

        .msp-radio-card input {
          width: 16px;
          height: 16px;
          margin: 0;
          accent-color: #0877ff;
          flex-shrink: 0;
        }

        .msp-radio-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .msp-radio-title {
          color: #28354b;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 700;
        }

        .msp-radio-subtitle {
          margin-top: 3px;
          color: #7d8da6;
          font-size: 11px;
          line-height: 1.3;
        }

        /* =========================
           TEXTAREA
        ========================= */

        .msp-textarea-field {
          margin-top: 25px;
        }

        .msp-optional {
          margin-left: auto;
          color: #9aabc3;
          font-size: 12px;
          font-weight: 500;
        }

        .msp-textarea {
          min-height: 112px;
          resize: vertical;
          padding: 14px 15px;
          line-height: 1.55;
        }

        /* =========================
           NDA
        ========================= */

        .msp-nda {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 28px;
          padding: 14px 15px;
          border: 1px solid #dbe2ed;
          border-radius: 8px;
          background: #f8fafc;
        }

        .msp-nda input {
          width: 16px;
          height: 16px;
          margin: 1px 0 0;
          accent-color: #810047;
          flex-shrink: 0;
          cursor: pointer;
        }

        .msp-nda label {
          color: #4b5a72;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 600;
          cursor: pointer;
        }

        /* =========================
           SECURITY STRIP
        ========================= */

        .msp-security-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          margin-top: 17px;
          min-height: 42px;
          border: 1px solid #dbe2ed;
          border-radius: 8px;
          background: #f8fafc;
          overflow: hidden;
        }

        .msp-security-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 9px 12px;
          color: #56647a;
          font-size: 11px;
          line-height: 1.3;
          text-align: center;
        }

        .msp-security-item:not(:last-child) {
          border-right: 1px solid #dbe2ed;
        }

        .msp-security-item svg {
          width: 14px;
          height: 14px;
          color: #810047;
          flex-shrink: 0;
        }

        /* =========================
           SUBMIT BUTTON
        ========================= */

        .msp-submit {
          width: 100%;
          height: 51px;
          margin-top: 24px;
          border: none;
          border-radius: 8px;
          background: #85004a;
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 5px 10px rgba(113, 0, 62, 0.14);
          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .msp-submit:hover {
          background: #690039;
          transform: translateY(-1px);
          box-shadow: 0 8px 16px rgba(113, 0, 62, 0.18);
        }

        .msp-submit svg {
          width: 17px;
          height: 17px;
        }

        .msp-form-footer {
          margin-top: 21px;
          text-align: center;
          color: #60708a;
          font-size: 11px;
          letter-spacing: 0.2px;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .msp-connect-page {
            padding: 55px 20px 65px;
          }

          .msp-connect-header h1 {
            font-size: 38px;
          }

          .msp-connect-header > p {
            font-size: 16px;
          }

          .msp-form-card {
            padding: 36px 32px 40px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {
          .msp-connect-page {
            padding: 42px 14px 50px;
          }

          .msp-connect-header {
            margin-bottom: 30px;
          }

          .msp-connect-pill {
            max-width: 100%;
            padding: 7px 13px;
            font-size: 10px;
            letter-spacing: 0.5px;
            white-space: normal;
            text-align: center;
          }

          .msp-connect-header h1 {
            margin-top: 19px;
            font-size: 32px;
            line-height: 1.12;
            letter-spacing: -0.8px;
          }

          .msp-connect-header > p {
            font-size: 14px;
            line-height: 1.55;
          }

          .msp-connect-benefits {
            gap: 7px;
            margin-top: 18px;
          }

          .msp-benefit {
            font-size: 10px;
            padding: 7px 10px;
          }

          .msp-benefit svg {
            width: 12px;
            height: 12px;
          }

          .msp-form-card {
            border-radius: 14px;
            padding: 27px 18px 30px;
          }

          .msp-form-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .msp-field.full {
            grid-column: auto;
          }

          .msp-label {
            font-size: 13px;
          }

          .msp-input,
          .msp-select {
            height: 48px;
            font-size: 13px;
          }

          .msp-briefing {
            margin-top: 22px;
          }

          .msp-briefing-options {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .msp-radio-card {
            min-height: 58px;
          }

          .msp-textarea-field {
            margin-top: 22px;
          }

          .msp-textarea {
            min-height: 125px;
            font-size: 13px;
          }

          .msp-nda {
            margin-top: 22px;
          }

          .msp-security-strip {
            grid-template-columns: 1fr;
          }

          .msp-security-item {
            justify-content: flex-start;
            text-align: left;
            padding: 10px 13px;
          }

          .msp-security-item:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid #dbe2ed;
          }

          .msp-submit {
            height: 50px;
            font-size: 12px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .msp-connect-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .msp-connect-header h1 {
            font-size: 28px;
          }

          .msp-connect-header > p {
            font-size: 13px;
          }

          .msp-connect-benefits {
            flex-direction: column;
            align-items: stretch;
          }

          .msp-benefit {
            justify-content: center;
            white-space: normal;
            text-align: center;
          }

          .msp-form-card {
            padding: 24px 14px 27px;
          }

          .msp-label {
            font-size: 12px;
          }

          .msp-input,
          .msp-select {
            font-size: 12px;
          }

          .msp-radio-title {
            font-size: 11px;
          }

          .msp-radio-subtitle {
            font-size: 10px;
          }

          .msp-nda label {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="msp-connect-page">
        <div className="msp-connect-wrapper">

          {/* =========================
              HEADER
          ========================= */}

          <div className="msp-connect-header">
            <span className="msp-connect-pill">
              TECHTORCH MSP SUPPORT • OPERATIONAL ONBOARDING
            </span>

            <h1>Connect with TechTorch MSP</h1>

            <p>
              Share your infrastructure footprint and operational priorities
              to receive a tailored SLA framework and IT support architecture
              briefing within 1 business day.
            </p>

            <div className="msp-connect-benefits">
              <span className="msp-benefit">
                <Shield />
                Guaranteed SLA Alignment
              </span>

              <span className="msp-benefit">
                <Network />
                24/7 Operations Command
              </span>

              <span className="msp-benefit">
                <BadgeCheck />
                Direct Systems Architect Review
              </span>
            </div>
          </div>

          {/* =========================
              FORM
          ========================= */}

          <div className="msp-form-card">
            <form className="msp-form" onSubmit={handleSubmit}>

              <div className="msp-form-grid">

                {/* FULL NAME */}
                <div className="msp-field">
                  <label className="msp-label">
                    <User />
                    Full Name
                    <span className="msp-required">*</span>
                  </label>

                  <input
                    className="msp-input"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Alexander Wright"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="msp-field">
                  <label className="msp-label">
                    <AtSign />
                    Business Email Address
                    <span className="msp-required">*</span>
                  </label>

                  <input
                    className="msp-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="a.wright@enterprise.com"
                    required
                  />
                </div>

                {/* COMPANY */}
                <div className="msp-field">
                  <label className="msp-label">
                    <Building2 />
                    Organization / Company Name
                    <span className="msp-required">*</span>
                  </label>

                  <input
                    className="msp-input"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Vanguard Holdings LLC"
                    required
                  />
                </div>

                {/* PHONE */}
                <div className="msp-field">
                  <label className="msp-label">
                    <Phone />
                    Direct Phone / WhatsApp
                    <span className="msp-required">*</span>
                  </label>

                  <input
                    className="msp-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 234-8900"
                    required
                  />
                </div>

                {/* PRIMARY SERVICE SCOPE */}
                <div className="msp-field">
                  <label className="msp-label">
                    <Network />
                    Primary MSP Service Scope
                    <span className="msp-required">*</span>
                  </label>

                  <div className="msp-select-wrapper">
                    <select
                      className="msp-select"
                      name="serviceScope"
                      value={formData.serviceScope}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Primary Focus Area
                      </option>
                      <option value="Infrastructure Support">
                        Infrastructure Support
                      </option>
                      <option value="Software Support">
                        Software Support
                      </option>
                      <option value="Cloud Support">
                        Cloud Support
                      </option>
                      <option value="Security Support">
                        Security Support
                      </option>
                    </select>

                    <ChevronDown />
                  </div>
                </div>

                {/* SUPPORT TIER */}
                <div className="msp-field">
                  <label className="msp-label">
                    <Shield />
                    Support Tier & Coverage Model
                    <span className="msp-required">*</span>
                  </label>

                  <div className="msp-select-wrapper">
                    <select
                      className="msp-select"
                      name="supportTier"
                      value={formData.supportTier}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Support Model
                      </option>
                      <option value="Business Hours">
                        Business Hours
                      </option>
                      <option value="Extended Coverage">
                        Extended Coverage
                      </option>
                      <option value="24/7 Coverage">
                        24/7 Coverage
                      </option>
                    </select>

                    <ChevronDown />
                  </div>
                </div>

                {/* INFRASTRUCTURE */}
                <div className="msp-field">
                  <label className="msp-label">
                    <Server />
                    IT Infrastructure / Environment Model
                    <span className="msp-required">*</span>
                  </label>

                  <div className="msp-select-wrapper">
                    <select
                      className="msp-select"
                      name="infrastructure"
                      value={formData.infrastructure}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Infrastructure Model
                      </option>
                      <option value="On-Premises">
                        On-Premises
                      </option>
                      <option value="Cloud">
                        Cloud
                      </option>
                      <option value="Hybrid">
                        Hybrid
                      </option>
                    </select>

                    <ChevronDown />
                  </div>
                </div>

                {/* ENDPOINT SCALE */}
                <div className="msp-field">
                  <label className="msp-label">
                    <MonitorSmartphone />
                    User & Managed Endpoint Scale
                    <span className="msp-required">*</span>
                  </label>

                  <div className="msp-select-wrapper">
                    <select
                      className="msp-select"
                      name="endpointScale"
                      value={formData.endpointScale}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select Endpoint Volume
                      </option>
                      <option value="1 - 50 Users">
                        1 - 50 Users
                      </option>
                      <option value="51 - 200 Users">
                        51 - 200 Users
                      </option>
                      <option value="201 - 500 Users">
                        201 - 500 Users
                      </option>
                      <option value="500+ Users">
                        500+ Users
                      </option>
                    </select>

                    <ChevronDown />
                  </div>
                </div>

              </div>

              {/* =========================
                  PREFERRED MODE
              ========================= */}

              <div className="msp-field full msp-briefing">
                <label className="msp-label">
                  <Video />
                  Preferred Mode of Initial Briefing
                </label>

                <div className="msp-briefing-options">

                  <label className="msp-radio-card">
                    <input
                      type="radio"
                      name="briefingMode"
                      value="30-Min Video Call"
                      checked={
                        formData.briefingMode === "30-Min Video Call"
                      }
                      onChange={handleChange}
                    />

                    <span className="msp-radio-content">
                      <span className="msp-radio-title">
                        30-Min Video Call
                      </span>

                      <span className="msp-radio-subtitle">
                        Screen share & Q&A
                      </span>
                    </span>
                  </label>

                  <label className="msp-radio-card">
                    <input
                      type="radio"
                      name="briefingMode"
                      value="Direct Phone Consultation"
                      checked={
                        formData.briefingMode ===
                        "Direct Phone Consultation"
                      }
                      onChange={handleChange}
                    />

                    <span className="msp-radio-content">
                      <span className="msp-radio-title">
                        Direct Phone Consultation
                      </span>

                      <span className="msp-radio-subtitle">
                        Immediate discussion
                      </span>
                    </span>
                  </label>

                  <label className="msp-radio-card">
                    <input
                      type="radio"
                      name="briefingMode"
                      value="Detailed SLA Proposal"
                      checked={
                        formData.briefingMode ===
                        "Detailed SLA Proposal"
                      }
                      onChange={handleChange}
                    />

                    <span className="msp-radio-content">
                      <span className="msp-radio-title">
                        Detailed SLA Proposal
                      </span>

                      <span className="msp-radio-subtitle">
                        Written assessment
                      </span>
                    </span>
                  </label>

                </div>
              </div>

              {/* =========================
                  PAIN POINTS
              ========================= */}

              <div className="msp-field full msp-textarea-field">
                <label className="msp-label">
                  <ListChecks />
                  Current IT Support Pain Points & Primary Objectives

                  <span className="msp-optional">
                    Optional
                  </span>
                </label>

                <textarea
                  className="msp-textarea"
                  name="painPoints"
                  value={formData.painPoints}
                  onChange={handleChange}
                  placeholder="Outline your immediate IT challenges (e.g. ticket backlogs, monitoring gaps, cloud maintenance, patching compliance, after-hours coverage, target onboarding timeline)..."
                />
              </div>

              {/* =========================
                  NDA
              ========================= */}

              <div className="msp-nda">
                <input
                  id="msp-nda"
                  type="checkbox"
                  name="nda"
                  checked={formData.nda}
                  onChange={handleChange}
                />

                <label htmlFor="msp-nda">
                  I require a mutual Non-Disclosure Agreement (NDA)
                  executed prior to sharing topology or architecture
                  logs.
                </label>
              </div>

              {/* =========================
                  SECURITY STRIP
              ========================= */}

              <div className="msp-security-strip">

                <div className="msp-security-item">
                  <LockKeyhole />
                  Confidential MSP Assessment
                </div>

                <div className="msp-security-item">
                  <Clock3 />
                  1 Business Day Response
                </div>

                <div className="msp-security-item">
                  <BadgeCheck />
                  ISO 27001 & SOC 2 Aligned
                </div>

              </div>

              {/* =========================
                  SUBMIT
              ========================= */}

              <button
                type="submit"
                className="msp-submit"
              >
                SUBMIT MSP ENGAGEMENT REQUEST
                <span>→</span>
              </button>

              <div className="msp-form-footer">
                Professional Consultation · Direct Business-Focused
                Technology Discussion
              </div>

            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ConnectWithTechTorch;