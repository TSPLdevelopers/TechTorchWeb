import React, { useState } from "react";
import {
  ArrowRight,
  User,
  Mail,
  Building2,
  Phone,
  ChevronDown,
  Clock3,
  LockKeyhole,
  ShieldCheck,
  Scale,
  Timer,
} from "lucide-react";

const HEALTHCARE_REQUIREMENTS = [
  {
    title: "Hospital & Clinic Operations",
    description: "EMR/EHR optimization, scheduling & clinical flows",
  },
  {
    title: "Diagnostic & Lab Systems",
    description: "LIS, PACS, imaging pipelines & specimen tracking",
  },
  {
    title: "Patient Portals & Experience",
    description: "Teleconsults, appointments & record access",
  },
  {
    title: "HealthTech Analytics & AI",
    description: "Bed occupancy, IoMT telemetry & triage predictive models",
  },
  {
    title: "Interoperability & Standards",
    description: "HL7 FHIR, ABDM, DICOM & HIPAA-aligned gateways",
  },
  {
    title: "Custom Cloud Infrastructure",
    description: "Scalable microservices, edge devices & secure data lakes",
  },
];

const PATIENT_VOLUMES = [
  "< 500 / day",
  "500 – 2,500",
  "2.5k - 10k",
  "10,000+",
];

const CONSULTATION_WINDOWS = [
  {
    title: "Morning (09:00 - 12:00)",
  },
  {
    title: "Afternoon (13:00 - 17:00)",
  },
  {
    title: "Global / Flexible Zone",
  },
];

export default function HealthcareContact() {
  const [selectedRequirements, setSelectedRequirements] = useState([]);

  const [facilityType, setFacilityType] = useState("");

  const [patientVolume, setPatientVolume] = useState("");

  const [consultationWindow, setConsultationWindow] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    challenge: "",
    nda: false,
  });

  const toggleRequirement = (requirement) => {
    setSelectedRequirements((prev) =>
      prev.includes(requirement)
        ? prev.filter((item) => item !== requirement)
        : [...prev, requirement]
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

    const submissionData = {
      ...formData,
      healthcareRequirements: selectedRequirements,
      facilityType,
      patientVolume,
      consultationWindow,
    };

    console.log("Healthcare Consultation:", submissionData);

    alert("Consultation request submitted successfully.");
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .healthcare-page {
          min-height: 100vh;
          width: 100%;
          background: #f7f9fb;
          padding: 64px 30px;
          font-family: Inter, Arial, sans-serif;
          color: #172036;
        }

        .healthcare-wrapper {
          width: 100%;
          max-width: 1050px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #dce4ed;
          border-radius: 20px;
          padding: 40px 42px 35px;
          box-shadow: 0 15px 35px rgba(27, 44, 70, 0.07);
        }

        /* ================= HEADER ================= */

        .healthcare-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .healthcare-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 13px;
          border-radius: 20px;
          background: #f5f6f9;
          border: 1px solid #e0e5ec;
          color: #85004c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .healthcare-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #85004c;
        }

        .healthcare-header h1 {
          margin: 17px auto 10px;
          max-width: 700px;
          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -1px;
          font-weight: 700;
          color: #141c31;
        }

        .healthcare-header p {
          max-width: 690px;
          margin: 0 auto;
          color: #596982;
          font-size: 15px;
          line-height: 1.55;
        }

        /* ================= SECTIONS ================= */

        .healthcare-section {
          margin-top: 30px;
        }

        .healthcare-section-heading {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 13px;
        }

        .healthcare-section-number {
          color: #8a0050;
          font-size: 14px;
          font-weight: 700;
        }

        .healthcare-section-heading h2 {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          color: #171e31;
        }

        .healthcare-section-heading span {
          color: #a1adbd;
          font-size: 11px;
          font-weight: 400;
        }

        /* ================= REQUIREMENTS ================= */

        .healthcare-requirement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .healthcare-requirement {
          min-height: 80px;
          padding: 13px 13px;
          border: 1px solid #dce4ed;
          border-radius: 10px;
          background: #fbfcfd;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .healthcare-requirement:hover {
          border-color: #b6c2d1;
        }

        .healthcare-requirement.selected {
          border-color: #8a0050;
          background: #fff7fa;
        }

        .requirement-top {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .requirement-checkbox {
          width: 13px;
          height: 13px;
          margin-top: 1px;
          flex-shrink: 0;
          border: 1px solid #8f969e;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: white;
        }

        .healthcare-requirement.selected
        .requirement-checkbox {
          background: #8a0050;
          border-color: #8a0050;
        }

        .requirement-checkbox svg {
          width: 9px;
          height: 9px;
        }

        .requirement-title {
          color: #273047;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
        }

        .requirement-description {
          margin: 6px 0 0 23px;
          color: #718097;
          font-size: 10.5px;
          line-height: 1.45;
        }

        /* ================= FACILITY ================= */

        .facility-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: end;
        }

        .field-label {
          display: block;
          margin-bottom: 7px;
          color: #344157;
          font-size: 11px;
          font-weight: 600;
        }

        .required-star {
          color: #8a0050;
        }

        .select-wrapper {
          position: relative;
        }

        .facility-select {
          width: 100%;
          height: 40px;
          padding: 0 38px 0 13px;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          background: #fbfcfd;
          color: #39465c;
          outline: none;
          font-size: 12px;
          appearance: none;
          cursor: pointer;
        }

        .facility-select:focus {
          border-color: #8a0050;
          box-shadow: 0 0 0 2px rgba(138, 0, 80, 0.08);
        }

        .select-arrow {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #8794a7;
          pointer-events: none;
        }

        .volume-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 7px;
        }

        .volume-button {
          height: 50px;
          padding: 5px;
          border: 1px solid #dce4ed;
          border-radius: 9px;
          background: #fbfcfd;
          color: #344157;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .volume-button:hover {
          border-color: #b9c4d2;
        }

        .volume-button.selected {
          color: white;
          background: #8a0050;
          border-color: #8a0050;
        }

        /* ================= CONTACT ================= */

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .healthcare-input-group {
          position: relative;
        }

        .healthcare-input-group.full {
          grid-column: 1 / -1;
        }

        .healthcare-input-group label {
          display: block;
          margin-bottom: 7px;
          color: #344157;
          font-size: 11px;
          font-weight: 600;
        }

        .healthcare-input-wrapper {
          position: relative;
        }

        .healthcare-input-wrapper svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          color: #93a1b3;
          pointer-events: none;
        }

        .healthcare-input {
          width: 100%;
          height: 40px;
          padding: 0 12px 0 36px;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          background: #fbfcfd;
          color: #344157;
          outline: none;
          font-family: inherit;
          font-size: 12px;
        }

        .healthcare-input::placeholder {
          color: #9aa8ba;
        }

        .healthcare-input:focus,
        .healthcare-textarea:focus {
          border-color: #8a0050;
          box-shadow: 0 0 0 2px rgba(138, 0, 80, 0.08);
        }

        /* ================= CONSULTATION ================= */

        .consultation-label {
          margin: 17px 0 8px;
          color: #344157;
          font-size: 11px;
          font-weight: 600;
        }

        .consultation-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
        }

        .consultation-button {
          min-height: 37px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 12px;
          border: 1px solid #dce4ed;
          border-radius: 8px;
          background: #fbfcfd;
          color: #46536a;
          text-align: left;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .consultation-button:hover {
          border-color: #b9c4d2;
        }

        .consultation-button.selected {
          background: #fff1f7;
          border-color: #8a0050;
          color: #85004c;
        }

        .radio-circle {
          width: 12px;
          height: 12px;
          border: 1px solid #8c969f;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .consultation-button.selected
        .radio-circle {
          border-color: #8a0050;
        }

        .radio-circle::after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: transparent;
        }

        .consultation-button.selected
        .radio-circle::after {
          background: #8a0050;
        }

        .consultation-clock {
          color: #8d9aac;
        }

        /* ================= TEXTAREA ================= */

        .challenge-label {
          margin: 17px 0 8px;
          color: #344157;
          font-size: 11px;
          font-weight: 600;
        }

        .optional {
          color: #9aa6b6;
          font-weight: 400;
        }

        .healthcare-textarea {
          width: 100%;
          height: 82px;
          padding: 12px;
          resize: none;
          border: 1px solid #dce4ed;
          border-radius: 9px;
          background: #fbfcfd;
          outline: none;
          color: #344157;
          font-family: inherit;
          font-size: 12px;
          line-height: 1.5;
        }

        .healthcare-textarea::placeholder {
          color: #9aa8ba;
        }

        /* ================= NDA ================= */

        .nda-box {
          margin-top: 28px;
          padding: 13px 14px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border: 1px solid #dce4ed;
          border-radius: 9px;
          background: #fbfcfd;
          cursor: pointer;
        }

        .nda-box input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .nda-checkbox {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid #8b929b;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: white;
        }

        .nda-box.checked .nda-checkbox {
          background: #8a0050;
          border-color: #8a0050;
        }

        .nda-checkbox svg {
          width: 10px;
          height: 10px;
        }

        .nda-content strong {
          display: block;
          margin-bottom: 3px;
          color: #273047;
          font-size: 11px;
          font-weight: 700;
        }

        .nda-content p {
          margin: 0;
          color: #718097;
          font-size: 10px;
          line-height: 1.45;
        }

        /* ================= SUBMIT ================= */

        .healthcare-submit {
          width: 100%;
          height: 49px;
          margin-top: 28px;
          border: none;
          border-radius: 10px;
          background: #8a0050;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 5px 12px rgba(138, 0, 80, 0.17);
          transition: all 0.2s ease;
        }

        .healthcare-submit:hover {
          background: #710041;
          transform: translateY(-1px);
        }

        .healthcare-bottom-note {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 13px;
          margin-top: 14px;
          color: #68778d;
          font-size: 10px;
        }

        .healthcare-bottom-note span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .healthcare-bottom-note svg {
          width: 11px;
          height: 11px;
        }

        .green-icon {
          color: #129b72;
        }

        .blue-icon {
          color: #4772cf;
        }

        .pink-icon {
          color: #8a0050;
        }

        .note-divider {
          color: #cbd2dc;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .healthcare-wrapper {
            padding: 32px 25px;
          }

          .healthcare-requirement-grid {
            grid-template-columns: 1fr 1fr;
          }

          .facility-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .healthcare-page {
            padding: 25px 14px;
          }

          .healthcare-wrapper {
            padding: 25px 16px;
            border-radius: 15px;
          }

          .healthcare-header h1 {
            font-size: 27px;
          }

          .healthcare-header p {
            font-size: 13px;
          }

          .healthcare-requirement-grid,
          .contact-grid,
          .consultation-grid {
            grid-template-columns: 1fr;
          }

          .healthcare-input-group.full {
            grid-column: auto;
          }

          .volume-grid {
            grid-template-columns: 1fr 1fr;
          }

          .healthcare-bottom-note {
            flex-wrap: wrap;
            gap: 8px;
          }

          .note-divider {
            display: none;
          }
        }

      `}</style>

      <section className="healthcare-page">

        <div className="healthcare-wrapper">

          {/* ================= HEADER ================= */}

          <header className="healthcare-header">

            <div className="healthcare-badge">
              <span className="healthcare-badge-dot"></span>
              HEALTHCARE TECHNOLOGY CONSULTATION
            </div>

            <h1>
              Get in Touch with TechTorch Healthcare
              <br />
              Experts
            </h1>

            <p>
              Connect directly with our healthcare solutions team to
              discuss clinical workflows, diagnostic systems, patient
              portals, or operational integrations.
            </p>

          </header>

          <form onSubmit={handleSubmit}>

            {/* ================= 01 ================= */}

            <div className="healthcare-section">

              <div className="healthcare-section-heading">

                <span className="healthcare-section-number">
                  01
                </span>

                <h2>
                  Primary Healthcare Requirement
                </h2>

                <span>
                  (Select all applicable)
                </span>

              </div>

              <div className="healthcare-requirement-grid">

                {HEALTHCARE_REQUIREMENTS.map((item) => {

                  const selected =
                    selectedRequirements.includes(item.title);

                  return (
                    <button
                      key={item.title}
                      type="button"
                      className={`healthcare-requirement ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() =>
                        toggleRequirement(item.title)
                      }
                    >

                      <div className="requirement-top">

                        <span className="requirement-checkbox">
                          {selected && (
                            <span>✓</span>
                          )}
                        </span>

                        <span className="requirement-title">
                          {item.title}
                        </span>

                      </div>

                      <p className="requirement-description">
                        {item.description}
                      </p>

                    </button>
                  );
                })}

              </div>
            </div>

            {/* ================= 02 ================= */}

            <div className="healthcare-section">

              <div className="healthcare-section-heading">

                <span className="healthcare-section-number">
                  02
                </span>

                <h2>
                  Facility Type &amp; Scale Tier
                </h2>

              </div>

              <div className="facility-row">

                {/* FACILITY */}

                <div>

                  <label className="field-label">
                    Facility Type{" "}
                    <span className="required-star">*</span>
                  </label>

                  <div className="select-wrapper">

                    <select
                      className="facility-select"
                      value={facilityType}
                      onChange={(e) =>
                        setFacilityType(e.target.value)
                      }
                      required
                    >

                      <option value="" disabled>
                        Select facility type...
                      </option>

                      <option value="Hospital">
                        Hospital
                      </option>

                      <option value="Clinic">
                        Clinic
                      </option>

                      <option value="Diagnostic Center">
                        Diagnostic Center
                      </option>

                      <option value="Medical College">
                        Medical College
                      </option>

                      <option value="Healthcare Network">
                        Healthcare Network
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                    <ChevronDown
                      className="select-arrow"
                      size={15}
                    />

                  </div>

                </div>

                {/* VOLUME */}

                <div>

                  <label className="field-label">
                    Daily Patient / Transaction Volume{" "}
                    <span className="required-star">*</span>
                  </label>

                  <div className="volume-grid">

                    {PATIENT_VOLUMES.map((volume) => (

                      <button
                        type="button"
                        key={volume}
                        className={`volume-button ${
                          patientVolume === volume
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setPatientVolume(volume)
                        }
                      >
                        {volume}
                      </button>

                    ))}

                  </div>

                </div>

              </div>
            </div>

            {/* ================= 03 ================= */}

            <div className="healthcare-section">

              <div className="healthcare-section-heading">

                <span className="healthcare-section-number">
                  03
                </span>

                <h2>
                  Contact &amp; Integration Scope
                </h2>

              </div>

              <div className="contact-grid">

                {/* NAME */}

                <div className="healthcare-input-group">

                  <label>
                    Full Name &amp; Designation{" "}
                    <span className="required-star">*</span>
                  </label>

                  <div className="healthcare-input-wrapper">

                    <User />

                    <input
                      className="healthcare-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Rajesh Sharma, CMO"
                      required
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div className="healthcare-input-group">

                  <label>
                    Work / Institutional Email{" "}
                    <span className="required-star">*</span>
                  </label>

                  <div className="healthcare-input-wrapper">

                    <Mail />

                    <input
                      className="healthcare-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="r.sharma@apollohospitals.com"
                      required
                    />

                  </div>

                </div>

                {/* ORGANIZATION */}

                <div className="healthcare-input-group">

                  <label>
                    Organization / Hospital Name{" "}
                    <span className="required-star">*</span>
                  </label>

                  <div className="healthcare-input-wrapper">

                    <Building2 />

                    <input
                      className="healthcare-input"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. Apollo Hospitals Group"
                      required
                    />

                  </div>

                </div>

                {/* PHONE */}

                <div className="healthcare-input-group">

                  <label>
                    Phone / WhatsApp Number{" "}
                    <span className="required-star">*</span>
                  </label>

                  <div className="healthcare-input-wrapper">

                    <Phone />

                    <input
                      className="healthcare-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />

                  </div>

                </div>

              </div>

              {/* CONSULTATION WINDOW */}

              <div className="consultation-label">
                Preferred Consultation Window
              </div>

              <div className="consultation-grid">

                {CONSULTATION_WINDOWS.map((item) => {

                  const selected =
                    consultationWindow === item.title;

                  return (
                    <button
                      type="button"
                      key={item.title}
                      className={`consultation-button ${
                        selected ? "selected" : ""
                      }`}
                      onClick={() =>
                        setConsultationWindow(item.title)
                      }
                    >

                      <span className="radio-circle"></span>

                      <Clock3
                        size={13}
                        className="consultation-clock"
                      />

                      <span>
                        {item.title}
                      </span>

                    </button>
                  );
                })}

              </div>

              {/* CHALLENGE */}

              <div className="challenge-label">
                Brief Challenge or Integration Scope{" "}
                <span className="optional">
                  (Optional)
                </span>
              </div>

              <textarea
                className="healthcare-textarea"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                placeholder="Tell us about your existing systems, interfaces (HL7 FHIR, DICOM, LIS/PACS), integration scope, target milestones, or security protocols..."
              />

            </div>

            {/* ================= NDA ================= */}

            <label
              className={`nda-box ${
                formData.nda ? "checked" : ""
              }`}
            >

              <input
                type="checkbox"
                name="nda"
                checked={formData.nda}
                onChange={handleChange}
              />

              <span className="nda-checkbox">
                {formData.nda && "✓"}
              </span>

              <span className="nda-content">

                <strong>
                  <LockKeyhole
                    size={10}
                    style={{
                      display: "inline",
                      marginRight: "5px",
                    }}
                  />

                  Request standard Healthcare Non-Disclosure
                  Agreement (NDA)
                </strong>

                <p>
                  A mutual NDA executed under enterprise standards
                  will be delivered prior to technical architecture
                  discussion.
                </p>

              </span>

            </label>

            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              className="healthcare-submit"
            >

              Submit Consultation Request

              <ArrowRight size={17} />

            </button>

            {/* ================= FOOTER ================= */}

            <div className="healthcare-bottom-note">

              <span>
                <ShieldCheck className="green-icon" />
                Strict Confidentiality
              </span>

              <span className="note-divider">
                •
              </span>

              <span>
                <Scale className="blue-icon" />
                Bilateral NDA Compliant
              </span>

              <span className="note-divider">
                •
              </span>

              <span>
                <Timer className="pink-icon" />
                Guaranteed 24h Architect Response
              </span>

            </div>

          </form>

        </div>

      </section>
    </>
  );
}