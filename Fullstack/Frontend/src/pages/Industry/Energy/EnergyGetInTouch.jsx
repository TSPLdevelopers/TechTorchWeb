import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Globe2,
  LockKeyhole,
  Mail,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";

const BEETROOT = "#730042";

const TECHNOLOGY_AREAS = [
  "ERP Solutions",
  "Operations Management",
  "Financial Management",
  "CRM Solutions",
  "Project Management",
  "Web Portals",
  "Custom Software Development",
  "Software Engineering",
  "Cloud Infrastructure",
  "Cyber Security",
  "Artificial Intelligence",
  "Software Development & Support",
  "IT Consultancy",
  "Resource & Staffing",
  "Business Process Outsourcing",
  "Other",
];

const PROJECT_STAGES = [
  "Initial Discussion",
  "Requirement Planning",
  "Existing System Improvement",
  "Software Development",
  "System Implementation",
  "Technology Support",
  "Exploring Options",
];

const BUSINESS_AREAS = [
  "Energy & Utilities",
  "Oil & Gas",
  "Renewable Energy",
  "Power Generation",
  "Power Distribution",
  "Utilities Management",
  "Energy Technology",
  "Other",
];

const CONTACT_TIMES = [
  "Morning",
  "Afternoon",
  "Evening",
  "Any Convenient Time",
];

export default function EnergyGetInTouch() {
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedStage, setSelectedStage] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    businessArea: "",
    requirements: "",
    contactTime: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleTechnology = (technology) => {
    setSelectedTechnology((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="energy-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        :root {
          --energy-beetroot: #730042;
          --energy-dark: #202733;
          --energy-text: #596273;
          --energy-muted: #7c8492;
          --energy-border: #dfe4eb;
          --energy-soft: #f5f6f8;
          --energy-page: #f8f7f8;
        }

        .energy-page {
          width: 100%;
          min-height: 100vh;
          background: var(--energy-page);
          color: var(--energy-dark);
          font-family: Arial, Helvetica, sans-serif;
          padding: 48px 32px 70px;
        }

        .energy-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* ================= ALERT ================= */

        .energy-alert {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          min-width: 300px;
          max-width: calc(100% - 30px);
          padding: 13px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-radius: 8px;
          background: var(--energy-beetroot);
          color: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
          font-size: 13px;
          font-weight: 600;
          animation: energyAlertIn 0.25s ease;
        }

        .energy-alert-left {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .energy-alert-left svg {
          flex-shrink: 0;
        }

        .energy-alert-close {
          border: none;
          background: transparent;
          color: #fff;
          padding: 0;
          cursor: pointer;
          display: flex;
        }

        @keyframes energyAlertIn {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }

          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        /* ================= HERO ================= */

        .energy-hero {
          margin-bottom: 45px;
        }

        .energy-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 13px;
          color: var(--energy-beetroot);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .energy-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--energy-beetroot);
        }

        .energy-hero h1 {
          max-width: 680px;
          margin: 0;
          color: var(--energy-beetroot);
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 700;
        }

        .energy-hero-description {
          max-width: 720px;
          margin: 18px 0 18px;
          color: #656b75;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .energy-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .energy-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 11px;
          border-radius: 6px;
          background: #ececef;
          color: #313641;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        .energy-pill svg {
          color: var(--energy-beetroot);
        }

        /* ================= MAIN GRID ================= */

        .energy-main-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.42fr) minmax(330px, 0.88fr);
          gap: 34px;
          align-items: start;
        }

        /* ================= FORM CARD ================= */

        .energy-form-card {
          width: 100%;
          padding: 31px;
          background: #fff;
          border: 1px solid var(--energy-border);
          border-radius: 9px;
          box-shadow: 0 3px 15px rgba(20, 30, 50, 0.035);
        }

        .energy-form-heading {
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 19px;
        }

        .energy-form-heading h2 {
          margin: 0 0 5px;
          color: #262d38;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.25;
          font-weight: 700;
        }

        .energy-form-heading p {
          max-width: 650px;
          margin: 0;
          color: #6f7681;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
        }

        /* ================= FORM GRID ================= */

        .energy-fields-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 14px;
        }

        .energy-field {
          min-width: 0;
        }

        .energy-field.full {
          grid-column: 1 / -1;
        }

        .energy-field label,
        .energy-section-label {
          display: block;
          margin-bottom: 6px;
          color: #323945;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
        }

        .energy-required {
          color: var(--energy-beetroot);
        }

        .energy-input,
        .energy-select,
        .energy-textarea {
          width: 100%;
          border: 1px solid #dfe4ea;
          border-radius: 6px;
          background: #f7f8f9;
          color: #343a45;
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          outline: none;
          transition: 0.2s ease;
        }

        .energy-input,
        .energy-select {
          height: 38px;
          padding: 0 11px;
        }

        .energy-textarea {
          min-height: 96px;
          padding: 11px;
          resize: vertical;
          line-height: 1.45;
        }

        .energy-input::placeholder,
        .energy-textarea::placeholder {
          color: #a18e98;
        }

        .energy-input:focus,
        .energy-select:focus,
        .energy-textarea:focus {
          border-color: #b76a94;
          background: #fff;
          box-shadow: 0 0 0 2px rgba(115, 0, 66, 0.05);
        }

        .energy-select-wrapper {
          position: relative;
        }

        .energy-select {
          appearance: none;
          cursor: pointer;
          padding-right: 32px;
        }

        .energy-select-arrow {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #626a76;
        }

        /* ================= TECHNOLOGY AREAS ================= */

        .energy-section {
          margin-top: 19px;
        }

        .energy-options {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .energy-option {
          min-height: 26px;
          padding: 5px 9px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dfe4e9;
          border-radius: 6px;
          background: #f1f3f5;
          color: #39404a;
          font-size: 9.5px;
          line-height: 1.15;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .energy-option:hover {
          border-color: #b9799a;
        }

        .energy-option.active {
          background: var(--energy-beetroot);
          border-color: var(--energy-beetroot);
          color: #fff;
        }

        /* ================= PROJECT STAGE ================= */

        .energy-stage-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 7px;
        }

        .energy-stage {
          min-height: 43px;
          padding: 7px 9px;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #dfe4e9;
          border-radius: 6px;
          background: #f1f3f5;
          color: #414751;
          font-size: 9.5px;
          line-height: 1.2;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .energy-stage:hover {
          border-color: #b9799a;
        }

        .energy-stage.active {
          border-color: var(--energy-beetroot);
          background: #fff7fa;
        }

        .energy-radio {
          width: 11px;
          height: 11px;
          flex-shrink: 0;
          border: 1px solid #9da4ae;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .energy-stage.active .energy-radio {
          border-color: var(--energy-beetroot);
        }

        .energy-stage.active .energy-radio::after {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--energy-beetroot);
        }

        /* ================= CONTACT ================= */

        .energy-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          align-items: end;
        }

        .energy-contact-methods {
          display: flex;
          align-items: center;
          gap: 15px;
          min-height: 38px;
        }

        .energy-contact-option {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #424852;
          font-size: 10px;
          font-weight: 500;
          cursor: pointer;
        }

        .energy-contact-option input {
          width: 12px;
          height: 12px;
          margin: 0;
          accent-color: var(--energy-beetroot);
        }

        /* ================= CONSENT ================= */

        .energy-consent {
          margin-top: 20px;
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #4b525d;
          font-size: 10px;
          line-height: 1.45;
          cursor: pointer;
        }

        .energy-consent input {
          width: 12px;
          height: 12px;
          margin: 1px 0 0;
          flex-shrink: 0;
          accent-color: var(--energy-beetroot);
        }

        /* ================= SUBMIT ================= */

        .energy-submit {
          width: 100%;
          height: 40px;
          margin-top: 20px;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--energy-beetroot);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .energy-submit:hover {
          background: #5d0035;
        }

        .energy-submit:active {
          transform: translateY(1px);
        }

        .energy-privacy {
          margin-top: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #7a8089;
          font-size: 8px;
          line-height: 1.4;
          text-align: center;
        }

        .energy-privacy svg {
          color: var(--energy-beetroot);
          flex-shrink: 0;
        }

        /* ================= RIGHT SIDE ================= */

        .energy-side {
          width: 100%;
        }

        .energy-image-card {
          overflow: hidden;
          border: 1px solid var(--energy-border);
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 3px 15px rgba(20, 30, 50, 0.035);
        }

        .energy-image-media {
          position: relative;
          width: 100%;
          background: #eaf1f7;
        }

        .energy-image {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 1.78 / 1;
          object-fit: contain;
        }

        .energy-image-label {
          position: absolute;
          left: 4%;
          bottom: 7%;
          min-height: 34px;
          padding: 0 13px;
          display: flex;
          align-items: center;
          gap: 7px;
          border-radius: 5px;
          background: var(--energy-beetroot);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2px;
          white-space: nowrap;
          z-index: 2;
        }

        .energy-label-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #fff;
        }

        .energy-image-content {
          padding: 17px 18px 19px;
        }

        .energy-image-content h2 {
          margin: 0 0 7px;
          color: #252c36;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.25;
          font-weight: 700;
        }

        .energy-image-content p {
          margin: 0;
          color: #69717d;
          font-size: 11px;
          line-height: 1.5;
        }

        /* ================= EXPECT CARD ================= */

        .energy-expect-card {
          margin-top: 15px;
          padding: 20px 19px;
          border: 1px solid var(--energy-border);
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 3px 15px rgba(20, 30, 50, 0.035);
        }

        .energy-expect-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 19px;
          color: var(--energy-beetroot);
          font-size: 14px;
          line-height: 1.3;
          font-weight: 700;
        }

        .energy-expect-item {
          display: grid;
          grid-template-columns: 31px minmax(0, 1fr);
          gap: 9px;
          margin-bottom: 20px;
        }

        .energy-expect-item:last-child {
          margin-bottom: 0;
        }

        .energy-step-number {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffdbe9;
          color: var(--energy-beetroot);
          font-size: 9px;
          font-weight: 800;
        }

        .energy-expect-item h3 {
          margin: 1px 0 5px;
          color: #252b34;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
        }

        .energy-expect-item p {
          margin: 0;
          color: #707782;
          font-size: 10px;
          line-height: 1.45;
        }

        /* ================= CONTACT CARD ================= */

        .energy-help-card {
          margin-top: 15px;
          padding: 17px;
          display: flex;
          align-items: flex-start;
          gap: 11px;
          border-radius: 8px;
          background: #eef0f2;
        }

        .energy-help-icon {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: var(--energy-beetroot);
          color: #fff;
        }

        .energy-help-content h3 {
          margin: 0 0 5px;
          color: #282e37;
          font-size: 13px;
          line-height: 1.25;
          font-weight: 700;
        }

        .energy-help-content p {
          margin: 0 0 6px;
          color: #727983;
          font-size: 10px;
          line-height: 1.45;
        }

        .energy-email {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--energy-beetroot);
          font-size: 9px;
          font-weight: 700;
        }

        /* ================= LARGE LAPTOP / SURFACE ================= */

        @media (max-width: 1200px) {
          .energy-page {
            padding-left: 45px;
            padding-right: 45px;
          }

          .energy-main-grid {
            grid-template-columns: minmax(0, 1.35fr) minmax(310px, 0.85fr);
            gap: 26px;
          }
        }

        /* ================= IPAD PRO 13 / SURFACE PRO 10 / IPAD MINI ================= */

        @media (min-width: 700px) and (max-width: 1199px) {
          .energy-page {
            padding: 40px 38px 60px;
          }

          .energy-main-grid {
            grid-template-columns: minmax(0, 1.42fr) minmax(250px, 0.88fr);
            gap: 24px;
          }

          .energy-side {
            display: block;
          }

          .energy-image-card,
          .energy-expect-card,
          .energy-help-card {
            width: 100%;
          }

          .energy-expect-card {
            margin-top: 15px;
          }

          .energy-help-card {
            margin-top: 15px;
          }

          .energy-form-card {
            padding: 28px;
          }
        }

        /* ================= IPAD MINI ================= */

        @media (min-width: 700px) and (max-width: 820px) {
          .energy-page {
            padding: 32px 24px 50px;
          }

          .energy-main-grid {
            grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.85fr);
            gap: 18px;
          }

          .energy-form-card {
            padding: 22px;
          }

          .energy-fields-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .energy-stage-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .energy-side {
            display: block;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 699px) {
          .energy-page {
            padding: 25px 15px 40px;
          }

          .energy-hero {
            margin-bottom: 28px;
          }

          .energy-eyebrow {
            font-size: 8px;
            letter-spacing: 0.7px;
          }

          .energy-hero h1 {
            font-size: 30px;
            line-height: 1.08;
            letter-spacing: -1px;
          }

          .energy-hero-description {
            font-size: 12px;
            line-height: 1.55;
          }

          .energy-pills {
            gap: 6px;
          }

          .energy-pill {
            font-size: 8.5px;
            padding: 5px 8px;
          }

          .energy-form-card {
            padding: 22px 17px;
          }

          .energy-fields-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .energy-field.full {
            grid-column: auto;
          }

          .energy-stage-grid {
            grid-template-columns: 1fr;
          }

          .energy-contact-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .energy-contact-methods {
            min-height: auto;
          }

          .energy-image {
            aspect-ratio: 1.6 / 1;
          }

          .energy-image-label {
            left: 3%;
            bottom: 6%;
            min-height: 24px;
            padding: 0 8px;
            gap: 4px;
            font-size: 6px;
            border-radius: 3px;
          }

          .energy-label-dot {
            width: 4px;
            height: 4px;
          }

          .energy-image-content h2 {
            font-size: 15px;
          }

          .energy-expect-title {
            font-size: 13px;
          }

          .energy-expect-item {
            grid-template-columns: 27px minmax(0, 1fr);
          }

          .energy-step-number {
            width: 23px;
            height: 23px;
          }

          .energy-help-card {
            padding: 15px;
          }

          .energy-alert {
            top: 14px;
            min-width: 0;
            width: calc(100% - 30px);
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 400px) {
          .energy-page {
            padding-left: 12px;
            padding-right: 12px;
          }

          .energy-hero h1 {
            font-size: 27px;
          }

          .energy-form-card {
            padding: 19px 14px;
          }

          .energy-form-heading h2 {
            font-size: 15px;
          }

          .energy-option {
            font-size: 9px;
          }

          .energy-submit {
            font-size: 10px;
          }

          .energy-privacy {
            font-size: 7.5px;
          }
        }
      `}</style>

      {/* ================= SUCCESS ALERT ================= */}

      {showAlert && (
        <div className="energy-alert" role="alert">
          <div className="energy-alert-left">
            <ShieldCheck size={16} />
            <span>Inquiry submitted successfully!</span>
          </div>

          <button
            type="button"
            className="energy-alert-close"
            onClick={() => setShowAlert(false)}
            aria-label="Close alert"
          >
            <X size={15} />
          </button>
        </div>
      )}

      <main className="energy-container">

        {/* ================= HERO ================= */}

        <section className="energy-hero">

          <div className="energy-eyebrow">
            <span className="energy-eyebrow-dot" />
            ENERGY TECHNOLOGY · CONSULTATION
          </div>

          <h1>
            Discuss Your Energy Technology
            <br />
            Requirements
          </h1>

          <p className="energy-hero-description">
            Connect with the TechTorch team to discuss your energy business
            requirements across ERP, operations management, software, cloud
            infrastructure, cybersecurity and digital solutions.
          </p>

          <div className="energy-pills">

            <div className="energy-pill">
              <Workflow size={11} />
              ERP &amp; Business Solutions
            </div>

            <div className="energy-pill">
              <Cloud size={11} />
              Cloud &amp; Cybersecurity
            </div>

            <div className="energy-pill">
              <Code2 size={11} />
              Software Development
            </div>

            <div className="energy-pill">
              <Sparkles size={11} />
              Digital Solutions
            </div>

          </div>

        </section>

        {/* ================= MAIN ================= */}

        <div className="energy-main-grid">

          {/* ================= FORM ================= */}

          <section className="energy-form-card">

            <div className="energy-form-heading">
              <h2>Consultation Intake Form</h2>

              <p>
                Tell us about your business or technology requirements and
                our team will review your enquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* CONTACT DETAILS */}

              <div className="energy-fields-grid">

                <div className="energy-field">
                  <label>
                    Full Name <span className="energy-required">*</span>
                  </label>

                  <input
                    className="energy-input"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="energy-field">
                  <label>
                    Business Email{" "}
                    <span className="energy-required">*</span>
                  </label>

                  <input
                    className="energy-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="energy-field">
                  <label>
                    Company / Organization{" "}
                    <span className="energy-required">*</span>
                  </label>

                  <input
                    className="energy-input"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company or organization"
                    required
                  />
                </div>

                <div className="energy-field">
                  <label>Phone Number</label>

                  <input
                    className="energy-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number (optional)"
                  />
                </div>

                <div className="energy-field full">
                  <label>
                    Primary Business Area{" "}
                    <span className="energy-required">*</span>
                  </label>

                  <div className="energy-select-wrapper">
                    <select
                      className="energy-select"
                      name="businessArea"
                      value={formData.businessArea}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your business area</option>

                      {BUSINESS_AREAS.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>

                    <div className="energy-select-arrow">
                      <ArrowRight
                        size={13}
                        style={{ transform: "rotate(90deg)" }}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* TECHNOLOGY AREAS */}

              <div className="energy-section">

                <label className="energy-section-label">
                  Technology Areas of Interest{" "}
                  <span className="energy-required">*</span>
                </label>

                <div className="energy-options">

                  {TECHNOLOGY_AREAS.map((technology) => {
                    const active = selectedTechnology.includes(technology);

                    return (
                      <button
                        type="button"
                        key={technology}
                        className={`energy-option ${
                          active ? "active" : ""
                        }`}
                        onClick={() => toggleTechnology(technology)}
                      >
                        {technology}
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* PROJECT STAGE */}

              <div className="energy-section">

                <label className="energy-section-label">
                  Current Project Stage
                </label>

                <div className="energy-stage-grid">

                  {PROJECT_STAGES.map((stage) => {
                    const active = selectedStage === stage;

                    return (
                      <button
                        type="button"
                        key={stage}
                        className={`energy-stage ${
                          active ? "active" : ""
                        }`}
                        onClick={() =>
                          setSelectedStage(active ? "" : stage)
                        }
                      >
                        <span className="energy-radio" />
                        <span>{stage}</span>
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* REQUIREMENT */}

              <div className="energy-section">

                <label className="energy-section-label">
                  Tell Us About Your Requirement{" "}
                  <span className="energy-required">*</span>
                </label>

                <textarea
                  className="energy-textarea"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your business requirement, current technology environment, project objectives or the challenge you would like to discuss."
                  required
                />

              </div>

              {/* CONTACT METHOD */}

              <div className="energy-section">

                <div className="energy-contact-grid">

                  <div>
                    <label className="energy-section-label">
                      Preferred Contact Method
                    </label>

                    <div className="energy-contact-methods">

                      <label className="energy-contact-option">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="Email"
                          checked={contactMethod === "Email"}
                          onChange={(e) =>
                            setContactMethod(e.target.value)
                          }
                        />
                        <Mail size={11} />
                        Email
                      </label>

                      <label className="energy-contact-option">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="Phone"
                          checked={contactMethod === "Phone"}
                          onChange={(e) =>
                            setContactMethod(e.target.value)
                          }
                        />
                        <Phone size={11} />
                        Phone
                      </label>

                    </div>
                  </div>

                  <div>
                    <label className="energy-section-label">
                      Preferred Contact Time (Optional)
                    </label>

                    <div className="energy-select-wrapper">

                      <select
                        className="energy-select"
                        name="contactTime"
                        value={formData.contactTime}
                        onChange={handleInputChange}
                      >
                        <option value="">
                          Select a convenient time
                        </option>

                        {CONTACT_TIMES.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>

                      <div className="energy-select-arrow">
                        <ArrowRight
                          size={13}
                          style={{ transform: "rotate(90deg)" }}
                        />
                      </div>

                    </div>
                  </div>

                </div>

              </div>

              {/* CONSENT */}

              <label className="energy-consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />

                <span>
                  I agree to be contacted by TechTorch regarding my enquiry
                  and technology requirements.
                </span>

              </label>

              {/* SUBMIT */}

              <button type="submit" className="energy-submit">
                SUBMIT ENQUIRY
                <ArrowRight size={14} />
              </button>

              <div className="energy-privacy">
                <LockKeyhole size={11} />

                <span>
                  Your information will be used to respond to your enquiry.
                  Please review our Privacy Policy for more information.
                </span>
              </div>

            </form>

          </section>

          {/* ================= RIGHT SIDE ================= */}

          <aside className="energy-side">

            {/* IMAGE CARD */}

            <div className="energy-image-card">

              <div className="energy-image-media">
                <img
                  className="energy-image"
                  src="/EnergyGetInTouch.png"
                  alt="Energy technology consultation"
                />

                <div className="energy-image-label">
                  <span className="energy-label-dot" />
                  ENERGY TECHNOLOGY CONSULTATION
                </div>
              </div>

              <div className="energy-image-content">

                <h2>Discuss Your Technology Requirements</h2>

                <p>
                  Connect with the TechTorch team to discuss ERP,
                  operations, software development, cloud infrastructure,
                  cybersecurity and digital technology requirements.
                </p>

              </div>

            </div>

            {/* EXPECT CARD */}

            <div className="energy-expect-card">

              <div className="energy-expect-title">
                <Network size={16} />
                What to Expect From Your Consultation
              </div>

              <div className="energy-expect-item">

                <div className="energy-step-number">
                  01
                </div>

                <div>
                  <h3>Understand Your Requirement</h3>

                  <p>
                    We review your business objectives, existing
                    environment and technology requirements.
                  </p>
                </div>

              </div>

              <div className="energy-expect-item">

                <div className="energy-step-number">
                  02
                </div>

                <div>
                  <h3>Discuss Relevant Solutions</h3>

                  <p>
                    Our team discusses relevant technology capabilities
                    and possible approaches based on your requirements.
                  </p>
                </div>

              </div>

              <div className="energy-expect-item">

                <div className="energy-step-number">
                  03
                </div>

                <div>
                  <h3>Define the Next Steps</h3>

                  <p>
                    Based on the discussion, we identify the appropriate
                    approach and next steps for your project or business
                    requirement.
                  </p>
                </div>

              </div>

            </div>

            {/* HELP CARD */}

            <div className="energy-help-card">

              <div className="energy-help-icon">
                <Mail size={13} />
              </div>

              <div className="energy-help-content">

                <h3>
                  Need to Discuss Your Requirement?
                </h3>

                <p>
                  Connect with the TechTorch team to discuss your business
                  or technology requirements.
                </p>

                <div className="energy-email">
                  <Mail size={10} />
                  contact@techtorch.solutions
                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>
    </div>
  );
}