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
        /* =====================================================
           GOOGLE FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           GLOBAL
        ===================================================== */

        * {
          box-sizing: border-box;
        }


        .healthcare-page {
          min-height: 100vh;

          width: 100%;

          background: #f7f9fb;

          padding: 70px 30px;

          font-family: "Inter", Arial, sans-serif;

          color: #172036;

          overflow: hidden;
        }


        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        .healthcare-wrapper {
          width: 100%;

          max-width: 1080px;

          margin: 0 auto;

          background: #ffffff;

          border: 1px solid #dce4ed;

          border-radius: 22px;

          padding: 44px 46px 38px;

          box-shadow:
            0 15px 35px rgba(27, 44, 70, 0.07);
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .healthcare-header {
          text-align: center;

          margin-bottom: 40px;
        }


        /* =====================================================
           BADGE
           INTER
        ===================================================== */

        .healthcare-badge {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding: 6px 13px;

          border-radius: 20px;

          background: #f5f6f9;

          border: 1px solid #e0e5ec;

          color: #85004c;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 0.3px;
        }


        .healthcare-badge-dot {
          width: 7px;

          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #85004c;
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .healthcare-header h1 {
          margin: 18px auto 12px;

          max-width: 760px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 34px;

          line-height: 1.15;

          letter-spacing: -0.8px;

          font-weight: 700;

          color: #141c31;
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .healthcare-header p {
          max-width: 720px;

          margin: 0 auto;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          color: #596982;

          font-size: 13px;

          line-height: 1.7;

          font-weight: 500;
        }


        /* =====================================================
           FORM SECTIONS
        ===================================================== */

        .healthcare-section {
          margin-top: 32px;
        }


        .healthcare-section-heading {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 7px;

          margin-bottom: 14px;
        }


        .healthcare-section-number {
          color: #8a0050;

          font-family: "Inter", sans-serif;

          font-size: 13px;

          font-weight: 700;
        }


        .healthcare-section-heading h2 {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 13px;

          font-weight: 700;

          color: #171e31;
        }


        .healthcare-section-heading span:last-child {
          color: #a1adbd;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          font-weight: 400;
        }


        /* =====================================================
           REQUIREMENTS
        ===================================================== */

        .healthcare-requirement-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 11px;
        }


        .healthcare-requirement {
          width: 100%;

          min-height: 84px;

          padding: 14px;

          border: 1px solid #dce4ed;

          border-radius: 10px;

          background: #fbfcfd;

          text-align: left;

          cursor: pointer;

          font-family: "Inter", sans-serif;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }


        .healthcare-requirement:hover {
          border-color: #b6c2d1;

          transform: translateY(-1px);
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
          width: 14px;

          height: 14px;

          margin-top: 1px;

          flex-shrink: 0;

          border: 1px solid #8f969e;

          border-radius: 3px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: white;

          background: white;

          font-family: "Inter", sans-serif;

          font-size: 9px;

          font-weight: 700;
        }


        .healthcare-requirement.selected
        .requirement-checkbox {
          background: #8a0050;

          border-color: #8a0050;
        }


        .requirement-title {
          color: #273047;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          line-height: 1.4;

          font-weight: 700;
        }


        .requirement-description {
          margin: 6px 0 0 24px;

          color: #718097;

          font-family: "Inter", sans-serif;

          font-size: 9.5px;

          line-height: 1.5;
        }


        /* =====================================================
           FACILITY
        ===================================================== */

        .facility-row {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 20px;

          align-items: end;
        }


        .field-label {
          display: block;

          margin-bottom: 7px;

          color: #344157;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;

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

          height: 41px;

          padding: 0 38px 0 13px;

          border: 1px solid #dce4ed;

          border-radius: 8px;

          background: #fbfcfd;

          color: #39465c;

          outline: none;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;

          appearance: none;

          cursor: pointer;
        }


        .facility-select:focus {
          border-color: #8a0050;

          box-shadow:
            0 0 0 2px rgba(138, 0, 80, 0.08);
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

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 7px;
        }


        .volume-button {
          height: 50px;

          padding: 5px;

          border: 1px solid #dce4ed;

          border-radius: 9px;

          background: #fbfcfd;

          color: #344157;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          font-weight: 600;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }


        .volume-button:hover {
          border-color: #b9c4d2;
        }


        .volume-button.selected {
          color: white;

          background: #8a0050;

          border-color: #8a0050;
        }


        /* =====================================================
           CONTACT
        ===================================================== */

        .contact-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 15px;
        }


        .healthcare-input-group {
          position: relative;

          min-width: 0;
        }


        .healthcare-input-group.full {
          grid-column: 1 / -1;
        }


        .healthcare-input-group label {
          display: block;

          margin-bottom: 7px;

          color: #344157;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;

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

          height: 41px;

          padding: 0 12px 0 36px;

          border: 1px solid #dce4ed;

          border-radius: 8px;

          background: #fbfcfd;

          color: #344157;

          outline: none;

          font-family: "Inter", sans-serif;

          font-size: 11px;
        }


        .healthcare-input::placeholder {
          color: #9aa8ba;
        }


        .healthcare-input:focus,
        .healthcare-textarea:focus {
          border-color: #8a0050;

          box-shadow:
            0 0 0 2px rgba(138, 0, 80, 0.08);
        }


        /* =====================================================
           CONSULTATION
        ===================================================== */

        .consultation-label {
          margin: 18px 0 8px;

          color: #344157;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;

          font-weight: 600;
        }


        .consultation-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 9px;
        }


        .consultation-button {
          min-height: 39px;

          display: flex;

          align-items: center;

          gap: 7px;

          padding: 7px 12px;

          border: 1px solid #dce4ed;

          border-radius: 8px;

          background: #fbfcfd;

          color: #46536a;

          text-align: left;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          font-weight: 600;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
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


        .radio-circle::after {
          content: "";

          width: 6px;

          height: 6px;

          border-radius: 50%;

          background: transparent;
        }


        .consultation-button.selected
        .radio-circle {
          border-color: #8a0050;
        }


        .consultation-button.selected
        .radio-circle::after {
          background: #8a0050;
        }


        .consultation-clock {
          color: #8d9aac;

          flex-shrink: 0;
        }


        /* =====================================================
           TEXTAREA
        ===================================================== */

        .challenge-label {
          margin: 18px 0 8px;

          color: #344157;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;

          font-weight: 600;
        }


        .optional {
          color: #9aa6b6;

          font-weight: 400;
        }


        .healthcare-textarea {
          width: 100%;

          height: 85px;

          padding: 12px;

          resize: vertical;

          min-height: 70px;

          max-height: 180px;

          border: 1px solid #dce4ed;

          border-radius: 9px;

          background: #fbfcfd;

          outline: none;

          color: #344157;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          line-height: 1.5;
        }


        .healthcare-textarea::placeholder {
          color: #9aa8ba;
        }


        /* =====================================================
           NDA
        ===================================================== */

        .nda-box {
          margin-top: 29px;

          padding: 14px;

          display: flex;

          align-items: flex-start;

          gap: 10px;

          border: 1px solid #dce4ed;

          border-radius: 9px;

          background: #fbfcfd;

          cursor: pointer;

          font-family: "Inter", sans-serif;
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

          border-radius: 3px;

          display: flex;

          align-items: center;

          justify-content: center;

          background: white;

          color: white;

          font-size: 9px;

          font-weight: 700;
        }


        .nda-box.checked .nda-checkbox {
          background: #8a0050;

          border-color: #8a0050;
        }


        .nda-content {
          min-width: 0;
        }


        .nda-content strong {
          display: flex;

          align-items: center;

          margin-bottom: 3px;

          color: #273047;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;

          line-height: 1.4;

          font-weight: 700;
        }


        .nda-content p {
          margin: 0;

          color: #718097;

          font-family: "Inter", sans-serif;

          font-size: 9.5px;

          line-height: 1.5;
        }


        /* =====================================================
           SUBMIT
        ===================================================== */

        .healthcare-submit {
          width: 100%;

          min-height: 49px;

          margin-top: 28px;

          padding: 10px 18px;

          border: none;

          border-radius: 10px;

          background: #8a0050;

          color: white;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          font-family: "Inter", sans-serif;

          font-size: 13px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 5px 12px rgba(138, 0, 80, 0.17);

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }


        .healthcare-submit:hover {
          background: #710041;

          transform: translateY(-1px);
        }


        /* =====================================================
           FOOTER NOTE
        ===================================================== */

        .healthcare-bottom-note {
          display: flex;

          justify-content: center;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 15px;

          color: #68778d;

          font-family: "Inter", sans-serif;

          font-size: 9.5px;

          line-height: 1.5;
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


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .healthcare-page {
            padding: 55px 24px;
          }


          .healthcare-wrapper {
            max-width: 950px;

            padding: 38px 34px 34px;
          }


          .healthcare-header h1 {
            font-size: 31px;
          }


          .healthcare-requirement-grid {
            gap: 9px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .healthcare-page {
            padding: 45px 20px;
          }


          .healthcare-wrapper {
            padding: 34px 28px 32px;

            border-radius: 18px;
          }


          .healthcare-header {
            margin-bottom: 34px;
          }


          .healthcare-header h1 {
            font-size: 29px;

            line-height: 1.18;
          }


          .healthcare-header p {
            max-width: 620px;

            font-size: 12px;
          }


          .healthcare-requirement-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }


          .facility-row {
            grid-template-columns: 1fr;

            gap: 17px;
          }


          .consultation-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .healthcare-page {
            padding: 25px 14px 35px;
          }


          .healthcare-wrapper {
            padding: 28px 17px 25px;

            border-radius: 15px;

            box-shadow:
              0 10px 25px rgba(27, 44, 70, 0.06);
          }


          .healthcare-header {
            margin-bottom: 30px;
          }


          .healthcare-badge {
            padding: 5px 10px;

            font-size: 8.5px;
          }


          .healthcare-badge-dot {
            width: 6px;

            height: 6px;
          }


          /* Main heading */

          .healthcare-header h1 {
            margin-top: 15px;

            font-size: 25px;

            line-height: 1.2;

            letter-spacing: -0.5px;
          }


          /* Subheading */

          .healthcare-header p {
            margin-top: 4px;

            font-size: 11px;

            line-height: 1.7;
          }


          .healthcare-section {
            margin-top: 27px;
          }


          .healthcare-section-heading {
            gap: 6px;

            margin-bottom: 12px;
          }


          .healthcare-section-heading h2 {
            font-size: 11.5px;
          }


          .healthcare-section-heading span:last-child {
            font-size: 9px;
          }


          .healthcare-requirement-grid {
            grid-template-columns: 1fr;

            gap: 9px;
          }


          .healthcare-requirement {
            min-height: auto;

            padding: 13px;
          }


          .requirement-title {
            font-size: 11px;
          }


          .requirement-description {
            font-size: 9px;

            margin-top: 5px;
          }


          .facility-row {
            gap: 15px;
          }


          .volume-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 7px;
          }


          .volume-button {
            height: 45px;

            font-size: 9.5px;
          }


          .contact-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }


          .healthcare-input-group.full {
            grid-column: auto;
          }


          .healthcare-input {
            height: 40px;

            font-size: 10.5px;
          }


          .consultation-grid {
            grid-template-columns: 1fr;

            gap: 8px;
          }


          .consultation-button {
            min-height: 40px;

            font-size: 10px;
          }


          .healthcare-textarea {
            height: 95px;

            font-size: 10.5px;
          }


          .nda-box {
            margin-top: 25px;

            padding: 12px;
          }


          .nda-content strong {
            font-size: 10px;
          }


          .nda-content p {
            font-size: 9px;
          }


          .healthcare-submit {
            min-height: 47px;

            margin-top: 24px;

            font-size: 12px;
          }


          .healthcare-bottom-note {
            flex-direction: column;

            gap: 7px;

            font-size: 9px;

            text-align: center;
          }


          .note-divider {
            display: none;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .healthcare-page {
            padding: 20px 10px 30px;
          }


          .healthcare-wrapper {
            padding: 24px 14px 22px;

            border-radius: 13px;
          }


          .healthcare-header h1 {
            font-size: 22px;

            line-height: 1.22;
          }


          .healthcare-header p {
            font-size: 10px;

            line-height: 1.65;
          }


          .healthcare-section-heading h2 {
            font-size: 11px;
          }


          .healthcare-section-heading span:last-child {
            font-size: 8.5px;
          }


          .healthcare-requirement {
            padding: 12px;
          }


          .requirement-title {
            font-size: 10.5px;
          }


          .requirement-description {
            font-size: 8.5px;
          }


          .field-label,
          .healthcare-input-group label,
          .consultation-label,
          .challenge-label {
            font-size: 10px;
          }


          .facility-select {
            height: 39px;

            font-size: 10px;
          }


          .volume-button {
            font-size: 9px;
          }


          .healthcare-input {
            font-size: 10px;
          }


          .consultation-button {
            font-size: 9.5px;
          }


          .healthcare-textarea {
            font-size: 10px;
          }


          .healthcare-submit {
            min-height: 45px;

            font-size: 11px;
          }


          .healthcare-bottom-note {
            font-size: 8.5px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .healthcare-page {
            padding: 16px 8px 25px;
          }


          .healthcare-wrapper {
            padding: 21px 12px 20px;
          }


          .healthcare-badge {
            font-size: 7.5px;

            padding: 5px 8px;
          }


          .healthcare-header h1 {
            font-size: 20px;
          }


          .healthcare-header p {
            font-size: 9.5px;
          }


          .healthcare-section-heading h2 {
            font-size: 10.5px;
          }


          .healthcare-submit {
            font-size: 10.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .healthcare-requirement,
          .volume-button,
          .consultation-button,
          .healthcare-submit {
            transition: none;
          }


          .healthcare-requirement:hover,
          .healthcare-submit:hover {
            transform: none;
          }

        }

      `}</style>

      <section className="healthcare-page">

        <div className="healthcare-wrapper">

          {/* =================================================
              HEADER
          ================================================= */}

          <header className="healthcare-header">

            {/* Inter */}

            <div className="healthcare-badge">
              <span className="healthcare-badge-dot" />
              HEALTHCARE TECHNOLOGY CONSULTATION
            </div>


            {/* Plus Jakarta Sans */}

            <h1>
              Get in Touch with TechTorch Healthcare
              <br />
              Experts
            </h1>


            {/* Plus Jakarta Sans */}

            <p>
              Connect directly with our healthcare solutions team to
              discuss clinical workflows, diagnostic systems, patient
              portals, or operational integrations.
            </p>

          </header>


          <form onSubmit={handleSubmit}>

            {/* =================================================
                01 - REQUIREMENTS
            ================================================= */}

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


            {/* =================================================
                02 - FACILITY
            ================================================= */}

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

                {/* FACILITY TYPE */}

                <div>

                  <label className="field-label">
                    Facility Type{" "}
                    <span className="required-star">
                      *
                    </span>
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


                {/* PATIENT VOLUME */}

                <div>

                  <label className="field-label">
                    Daily Patient / Transaction Volume{" "}
                    <span className="required-star">
                      *
                    </span>
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


            {/* =================================================
                03 - CONTACT
            ================================================= */}

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
                    <span className="required-star">
                      *
                    </span>
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
                    <span className="required-star">
                      *
                    </span>
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
                    <span className="required-star">
                      *
                    </span>
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
                    <span className="required-star">
                      *
                    </span>
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

                      <span className="radio-circle" />

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


            {/* =================================================
                NDA
            ================================================= */}

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
                      flexShrink: 0,
                    }}
                  />

                  Request standard Healthcare
                  Non-Disclosure Agreement (NDA)

                </strong>


                <p>
                  A mutual NDA executed under enterprise standards
                  will be delivered prior to technical architecture
                  discussion.
                </p>

              </span>

            </label>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="healthcare-submit"
            >

              Submit Consultation Request

              <ArrowRight size={17} />

            </button>


            {/* =================================================
                FOOTER
            ================================================= */}

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