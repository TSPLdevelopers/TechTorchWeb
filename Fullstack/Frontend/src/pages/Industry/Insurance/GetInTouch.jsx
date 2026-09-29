import React, { useState } from "react";
import {
  ArrowRight,
  FileText,
  LockKeyhole,
  Zap,
} from "lucide-react";

const CAPABILITIES = [
  ["Policy Administration & Lifecycle", "PAS"],
  ["Claims Processing & Smart FNOL", "Claims"],
  ["Broker & Client Digital Portals", "Portals"],
  ["Actuarial & Financial (IFRS 17)", "Finance"],
  ["Core Legacy Modernization & APIs", "Migration"],
  ["Cloud Infrastructure & Cyber", "Cloud"],
  ["Dedicated Engineering Pods", "Staffing"],
  ["Custom Enterprise Software", "Custom"],
];

const TIMELINES = [
  "< 30 Days (Urgent)",
  "1–3 Months (Q2)",
  "3–6 Months Roadmap",
  "Exploratory",
];

export default function InsuranceContact() {
  const [selectedCapabilities, setSelectedCapabilities] = useState([
    "Policy Administration & Lifecycle",
    "Claims Processing & Smart FNOL",
  ]);

  const [selectedTimeline, setSelectedTimeline] =
    useState("< 30 Days (Urgent)");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    objectives: "",
    nda: true,
    briefing: true,
  });

  const toggleCapability = (name) => {
    setSelectedCapabilities((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
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

    console.log({
      ...formData,
      capabilities: selectedCapabilities,
      timeline: selectedTimeline,
    });

    alert("Your intake has been submitted successfully.");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        /* ================================
           MAIN PAGE
        ================================= */

        .insurance-page {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          padding: 40px 32px;
          font-family: "Inter", Arial, sans-serif;
          color: #17213a;
          overflow: hidden;
        }

        .insurance-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.25fr);
          gap: 38px;
          align-items: start;
        }

        /* ================================
           LEFT SIDE
        ================================= */

        .insurance-left {
          padding-top: 2px;
          min-width: 0;
        }

        .insurance-badge {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 7px 13px;
          background: #f1f5f9;
          border: 1px solid #dce3eb;
          border-radius: 22px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #3b4a63;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #12b981;
        }

        .badge-separator {
          color: #9ba8bb;
        }

        .sla-text {
          color: #86004a;
        }

        /* MAIN HEADING
           Plus Jakarta Sans
        */

        .insurance-left h1 {
          margin: 34px 0 15px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #121a31;
        }

        /* SUBHEADING
           Plus Jakarta Sans
        */

        .insurance-description {
          max-width: 500px;
          margin: 0 0 31px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          color: #52647f;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* ================================
           INFO CARDS
        ================================= */

        .insurance-info-card {
          display: flex;
          gap: 14px;
          padding: 17px 16px;
          margin-bottom: 14px;
          background: #ffffff;
          border: 1px solid #e0e6ee;
          border-radius: 13px;
          box-shadow: 0 2px 5px rgba(22, 35, 55, 0.04);
        }

        .info-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #fff0f7;
          color: #90004f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .insurance-info-card h3 {
          margin: 1px 0 5px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #18233b;
        }

        .insurance-info-card p {
          margin: 0;
          font-family: "Inter", Arial, sans-serif;
          color: #52627b;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* ================================
           CONTACT CARD
        ================================= */

        .insurance-contact-info {
          margin-top: 31px;
          padding: 20px;
          border-radius: 15px;
          border: 1px solid #dce4ed;
          background: #f1f5f9;
        }

        .contact-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e2e8f0;
        }

        .contact-top span,
        .governance-title {
          display: block;
          font-family: "Inter", Arial, sans-serif;
          color: #8292aa;
          font-size: 11px;
          margin-bottom: 3px;
        }

        .contact-top strong {
          display: block;
          font-family: "Inter", Arial, sans-serif;
          color: #85004a;
          font-size: 12px;
          font-weight: 700;
          word-break: break-word;
        }

        .contact-top > div:last-child strong {
          color: #28364e;
        }

        .governance {
          padding-top: 17px;
        }

        .governance-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .governance-tags div {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 6px 9px;
          border: 1px solid #cad5e2;
          background: #ffffff;
          border-radius: 4px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #34435b;
        }

        .governance-tags i {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #12b981;
        }

        /* ================================
           FORM CARD
        ================================= */

        .insurance-form-card {
          width: 100%;
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 17px;
          padding: 32px;
          box-shadow: 0 8px 25px rgba(31, 45, 65, 0.05);
          min-width: 0;
        }

        .form-heading {
          padding-bottom: 20px;
          border-bottom: 1px solid #e6ebf1;
          margin-bottom: 26px;
        }

        /* FORM HEADING
           Plus Jakarta Sans
        */

        .form-heading h2 {
          margin: 0 0 7px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 700;
          color: #172139;
        }

        /* FORM SUBHEADING
           Plus Jakarta Sans
        */

        .form-heading p {
          margin: 0;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.6;
          font-weight: 500;
          color: #63748e;
        }

        /* ================================
           FORM SECTIONS
        ================================= */

        .form-section {
          margin-bottom: 25px;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 13px;
          font-family: "Inter", Arial, sans-serif;
          color: #94a4bb;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 800;
        }

        .section-number {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #182139;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
        }

        /* ================================
           INPUTS
        ================================= */

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .input-group {
          min-width: 0;
        }

        .input-group label {
          display: block;
          margin-bottom: 5px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #263650;
        }

        .input-group input {
          width: 100%;
          height: 39px;
          padding: 0 12px;
          border: 1px solid #cbd6e4;
          border-radius: 7px;
          outline: none;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          color: #263650;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input-group input::placeholder {
          color: #9aabc1;
        }

        .input-group input:focus,
        .insurance-textarea:focus {
          border-color: #8b0050;
          box-shadow: 0 0 0 2px rgba(139, 0, 80, 0.08);
        }

        /* ================================
           CAPABILITIES
        ================================= */

        .capability-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 13px;
        }

        .capability-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .capability-header-left .section-title {
          white-space: normal;
        }

        .capability-header > small {
          flex-shrink: 0;
          color: #9ba9bd;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 500;
        }

        .capability-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
        }

        .capability-button {
          min-height: 39px;
          padding: 7px 10px;
          border: 1px solid #d8e0e9;
          border-radius: 8px;
          background: white;
          color: #263650;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          text-align: left;
          cursor: pointer;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .capability-button:hover {
          border-color: #8b0050;
          transform: translateY(-1px);
        }

        .capability-button small {
          flex-shrink: 0;
          color: #61708a;
          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
        }

        .capability-button.selected {
          background: #8b0050;
          border-color: #8b0050;
          color: white;
        }

        .capability-button.selected small {
          color: #f7c9df;
        }

        /* ================================
           TIMELINE
        ================================= */

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .timeline-button {
          min-height: 36px;
          padding: 7px 8px;
          border: 1px solid #d8e0e9;
          border-radius: 8px;
          background: white;
          color: #263650;
          cursor: pointer;
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.3;
          transition: all 0.2s ease;
        }

        .timeline-button:hover {
          border-color: #8b0050;
          transform: translateY(-1px);
        }

        .timeline-button.selected {
          background: #8b0050;
          color: white;
          border-color: #8b0050;
        }

        /* ================================
           TEXTAREA
        ================================= */

        .optional-title {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .optional-text {
          margin-left: auto;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: #94a4bb;
        }

        .insurance-textarea {
          width: 100%;
          height: 84px;
          resize: vertical;
          min-height: 84px;
          max-height: 180px;
          padding: 11px 12px;
          border: 1px solid #cbd6e4;
          border-radius: 7px;
          outline: none;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.5;
          color: #263650;
          background: #ffffff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .insurance-textarea::placeholder {
          color: #94a5bd;
        }

        /* ================================
           CHECKBOXES
        ================================= */

        .checkbox-section {
          border-top: 1px solid #e5eaf0;
          padding-top: 8px;
          margin-bottom: 25px;
        }

        .checkbox-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin: 8px 0;
          color: #3c4c65;
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.5;
          cursor: pointer;
        }

        .checkbox-row input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .custom-checkbox {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
          margin-top: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #8b0050;
          border-radius: 4px;
          background: #8b0050;
          color: white;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
        }

        /* ================================
           SUBMIT
        ================================= */

        .insurance-submit-button {
          width: 100%;
          min-height: 49px;
          padding: 10px 16px;
          border: none;
          border-radius: 11px;
          background: #8b0050;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 4px 9px rgba(139, 0, 80, 0.18);
          transition: all 0.2s ease;
        }

        .insurance-submit-button:hover {
          background: #730042;
          transform: translateY(-1px);
        }

        .insurance-submit-button:active {
          transform: translateY(0);
        }

        .form-footer {
          margin: 16px 0 0;
          text-align: center;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.5;
          color: #60718b;
        }

        /* ================================
           LARGE TABLET
        ================================= */

        @media (max-width: 1100px) {
          .insurance-page {
            padding: 36px 24px;
          }

          .insurance-container {
            grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
            gap: 26px;
          }

          .insurance-left h1 {
            font-size: 34px;
          }

          .insurance-form-card {
            padding: 26px;
          }

          .timeline-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 900px) {
          .insurance-page {
            padding: 32px 22px;
          }

          .insurance-container {
            grid-template-columns: 1fr;
            gap: 28px;
            max-width: 760px;
          }

          .insurance-left {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
          }

          .insurance-description {
            max-width: 650px;
          }

          .insurance-form-card {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
          }

          .insurance-left h1 {
            font-size: 38px;
          }

          .capability-grid {
            grid-template-columns: 1fr 1fr;
          }

          .timeline-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 650px) {
          .insurance-page {
            padding: 26px 16px;
          }

          .insurance-container {
            gap: 22px;
          }

          .insurance-badge {
            max-width: 100%;
            padding: 7px 10px;
            font-size: 9px;
            line-height: 1.4;
          }

          .insurance-left h1 {
            margin-top: 25px;
            font-size: 31px;
            line-height: 1.12;
            letter-spacing: -1px;
          }

          .insurance-description {
            margin-bottom: 24px;
            font-size: 14px;
            line-height: 1.65;
          }

          .insurance-info-card {
            gap: 11px;
            padding: 14px;
            margin-bottom: 11px;
          }

          .info-icon {
            width: 36px;
            height: 36px;
          }

          .insurance-info-card h3 {
            font-size: 13px;
          }

          .insurance-info-card p {
            font-size: 12px;
          }

          .insurance-contact-info {
            margin-top: 24px;
            padding: 16px;
          }

          .contact-top {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .governance {
            padding-top: 14px;
          }

          .governance-tags {
            gap: 6px;
          }

          .governance-tags div {
            font-size: 9px;
            padding: 5px 7px;
          }

          .insurance-form-card {
            padding: 20px 16px;
            border-radius: 14px;
          }

          .form-heading {
            padding-bottom: 17px;
            margin-bottom: 22px;
          }

          .form-heading h2 {
            font-size: 19px;
            line-height: 1.35;
          }

          .form-heading p {
            font-size: 12px;
            line-height: 1.55;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .capability-grid {
            grid-template-columns: 1fr;
          }

          .capability-header {
            align-items: flex-start;
          }

          .capability-header > small {
            display: none;
          }

          .capability-button {
            min-height: 42px;
          }

          .timeline-grid {
            grid-template-columns: 1fr 1fr;
            gap: 7px;
          }

          .timeline-button {
            min-height: 40px;
            font-size: 10px;
          }

          .form-section {
            margin-bottom: 22px;
          }

          .section-title {
            font-size: 11px;
          }

          .insurance-textarea {
            min-height: 100px;
          }

          .optional-title {
            align-items: center;
          }

          .checkbox-section {
            margin-bottom: 21px;
          }

          .checkbox-row {
            font-size: 10px;
          }

          .insurance-submit-button {
            min-height: 48px;
            padding: 10px 13px;
            font-size: 12px;
          }
        }

        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 420px) {
          .insurance-page {
            padding: 22px 12px;
          }

          .insurance-left h1 {
            font-size: 27px;
            line-height: 1.15;
          }

          .insurance-description {
            font-size: 13px;
          }

          .insurance-form-card {
            padding: 17px 13px;
          }

          .form-heading h2 {
            font-size: 17px;
          }

          .form-heading p {
            font-size: 11px;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .timeline-button {
            min-height: 38px;
          }

          .capability-button {
            font-size: 11px;
          }

          .capability-button small {
            font-size: 8px;
          }

          .insurance-submit-button {
            font-size: 11px;
          }

          .insurance-submit-button svg {
            width: 16px;
            height: 16px;
          }

          .form-footer {
            font-size: 9px;
          }
        }

        /* ================================
           VERY SMALL DEVICES
        ================================= */

        @media (max-width: 340px) {
          .insurance-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .insurance-badge {
            font-size: 8px;
          }

          .insurance-left h1 {
            font-size: 24px;
          }

          .insurance-form-card {
            padding: 15px 11px;
          }

          .section-title {
            font-size: 10px;
          }

          .insurance-submit-button {
            font-size: 10px;
          }
        }

        /* ================================
           REDUCED MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {
          .capability-button,
          .timeline-button,
          .insurance-submit-button {
            transition: none;
          }

          .capability-button:hover,
          .timeline-button:hover,
          .insurance-submit-button:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="insurance-page">
        <div className="insurance-container">

          {/* ================= LEFT ================= */}

          <div className="insurance-left">

            <div className="insurance-badge">
              <span className="badge-dot"></span>

              TECHTORCH INSURANCE PRACTICE • DIRECT INTAKE

              <span className="badge-separator">•</span>

              <span className="sla-text">&lt;24h SLA</span>
            </div>

            {/* PLUS JAKARTA SANS */}
            <h1>
              Connect with Principal
              <br />
              Insurance Solutions
              <br />
              Architects
            </h1>

            {/* PLUS JAKARTA SANS SUBHEADING */}
            <p className="insurance-description">
              Insurance businesses depend on connected operational
              foundations. Share your requirements across policy
              administration, claims automation, broker portals, or
              enterprise systems integration to discuss tailored
              architectural execution.
            </p>

            {/* CARD 1 */}

            <div className="insurance-info-card">
              <div className="info-icon">
                <FileText size={19} />
              </div>

              <div>
                <h3>Direct Architectural Review</h3>

                <p>
                  30-min discovery session with an insurance tech lead
                  to analyze workflows, legacy constraints, and target
                  outcomes.
                </p>
              </div>
            </div>

            {/* CARD 2 */}

            <div className="insurance-info-card">
              <div className="info-icon">
                <LockKeyhole size={19} />
              </div>

              <div>
                <h3>Bilateral NDA Protected</h3>

                <p>
                  Full mutual confidentiality and 100% intellectual
                  property ownership explicitly preserved and respected
                  from day one.
                </p>
              </div>
            </div>

            {/* CARD 3 */}

            <div className="insurance-info-card">
              <div className="info-icon">
                <Zap size={19} />
              </div>

              <div>
                <h3>Production-Grade Roadmap</h3>

                <p>
                  Actionable technical scoping: stack recommendations,
                  risk containment, and realistic delivery phases with
                  clear SLAs.
                </p>
              </div>
            </div>

            {/* CONTACT BOX */}

            <div className="insurance-contact-info">

              <div className="contact-top">

                <div>
                  <span>Direct Advisory Inbox</span>

                  <strong>
                    experts@techtorch.solutions
                  </strong>
                </div>

                <div>
                  <span>Engineering Pods</span>

                  <strong>
                    Bareilly HQ & Global Hybrid
                  </strong>
                </div>

              </div>

              <div className="governance">

                <span className="governance-title">
                  ENTERPRISE GOVERNANCE &amp; STANDARDS
                </span>

                <div className="governance-tags">

                  <div>
                    <i></i>
                    SOC 2 Type II
                  </div>

                  <div>
                    <i></i>
                    ISO/IEC 27001
                  </div>

                  <div>
                    <i></i>
                    IFRS 17 Aligned
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}

          <div className="insurance-form-card">

            <div className="form-heading">

              {/* PLUS JAKARTA SANS */}
              <h2>
                Insurance Technology Scoping Console
              </h2>

              {/* PLUS JAKARTA SANS SUBHEADING */}
              <p>
                Complete this technical intake to establish scope and
                route directly to a principal architect.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              {/* ================= SECTION 1 ================= */}

              <div className="form-section">

                <div className="section-title">
                  <span className="section-number">
                    1
                  </span>

                  ORGANIZATION &amp; PRIMARY CONTACT
                </div>

                <div className="form-grid">

                  <div className="input-group">
                    <label>Full Name *</label>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alistair Vance"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>
                      Corporate Work Email *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. a.vance@carriergroup.com"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>
                      Organization / Carrier Name *
                    </label>

                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Sovereign Mutual Assurance"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label>
                      Direct Phone / WhatsApp
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 019-2834"
                    />
                  </div>

                </div>
              </div>

              {/* ================= SECTION 2 ================= */}

              <div className="form-section">

                <div className="capability-header">

                  <div className="capability-header-left">

                    <span className="section-number">
                      2
                    </span>

                    <span
                      className="section-title"
                      style={{ margin: 0 }}
                    >
                      SELECT INSURANCE CAPABILITIES
                      (MULTI-SELECT)
                    </span>

                  </div>

                  <small>
                    CHOOSE ALL RELEVANT
                  </small>

                </div>

                <div className="capability-grid">

                  {CAPABILITIES.map(([name, short]) => {

                    const selected =
                      selectedCapabilities.includes(name);

                    return (
                      <button
                        type="button"
                        key={name}
                        className={`capability-button ${
                          selected ? "selected" : ""
                        }`}
                        onClick={() =>
                          toggleCapability(name)
                        }
                      >
                        <span>{name}</span>

                        <small>{short}</small>
                      </button>
                    );
                  })}

                </div>
              </div>

              {/* ================= SECTION 3 ================= */}

              <div className="form-section">

                <div className="section-title">

                  <span className="section-number">
                    3
                  </span>

                  TARGET TIMELINE &amp; SCALE
                </div>

                <div className="timeline-grid">

                  {TIMELINES.map((timeline) => (

                    <button
                      type="button"
                      key={timeline}
                      className={`timeline-button ${
                        selectedTimeline === timeline
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedTimeline(timeline)
                      }
                    >
                      {timeline}
                    </button>

                  ))}

                </div>
              </div>

              {/* ================= SECTION 4 ================= */}

              <div className="form-section">

                <div className="section-title optional-title">

                  <span className="section-number">
                    4
                  </span>

                  TECHNICAL OBJECTIVES &amp; ENVIRONMENT

                  <span className="optional-text">
                    OPTIONAL
                  </span>

                </div>

                <textarea
                  className="insurance-textarea"
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleChange}
                  placeholder="Outline your core requirements, existing legacy systems (e.g. Guidewire, AS400, bespoke web portals), API expectations, or architectural roadblocks..."
                />

              </div>

              {/* ================= CHECKBOXES ================= */}

              <div className="checkbox-section">

                <label className="checkbox-row">

                  <input
                    type="checkbox"
                    name="nda"
                    checked={formData.nda}
                    onChange={handleChange}
                  />

                  <span className="custom-checkbox">
                    {formData.nda ? "✓" : ""}
                  </span>

                  <span>
                    Execute Mutual Bilateral NDA prior to
                    deep-dive architecture discussion
                  </span>

                </label>

                <label className="checkbox-row">

                  <input
                    type="checkbox"
                    name="briefing"
                    checked={formData.briefing}
                    onChange={handleChange}
                  />

                  <span className="custom-checkbox">
                    {formData.briefing ? "✓" : ""}
                  </span>

                  <span>
                    Request preliminary architecture
                    consultation briefing document
                  </span>

                </label>

              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="insurance-submit-button"
              >
                Submit Intake &amp; Connect with Architects

                <ArrowRight size={18} />
              </button>

              <p className="form-footer">
                Zero spam guarantee • 100% Client Code &amp; IP
                Ownership • Enterprise SLA
              </p>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}