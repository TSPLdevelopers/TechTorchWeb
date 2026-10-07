import React, { useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  Building2,
  User,
  BriefcaseBusiness,
  Shield,
  BadgeCheck,
  LockKeyhole,
  Headphones,
  Route,
  Check,
  CircleCheck,
} from "lucide-react";

const PRACTICE_AREAS = [
  {
    title: "Financial Management & General Ledgers",
    description: "Accounts, Invoicing, Ledger reconciliation",
  },
  {
    title: "Payment Management & Clearing",
    description: "ISO20022, Swift, automated payment gateways",
  },
  {
    title: "Enterprise Resource Planning (ERP)",
    description: "Multi-ERP integration, SAP, NetSuite, Dynamics 365",
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Client lifecycle, secure client portals",
  },
  {
    title: "Cyber Security & SOX Audit Readiness",
    description:
      "Financial compliance, immutable audit trails, data protection",
  },
  {
    title: "Cloud Infrastructure & Microservices",
    description:
      "High-frequency institutional portals, mainframe offloading",
  },
  {
    title: "Software Development & API Modernization",
    description: "Custom finance applications, API integration",
  },
  {
    title: "TorchX Finance Suite Platform",
    description:
      "Automated invoicing, expense & payroll control, real-time reporting",
  },
];

const TIMELINES = [
  "Immediate (<2 wks)",
  "Within 30 Days",
  "1–3 Months",
  "Exploratory / Feasibility Review",
];

export default function FinancialContact() {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [timeline, setTimeline] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    designation: "",
    phone: "",
    scope: "",
    nda: false,
    videoSession: false,
  });

  const toggleArea = (title) => {
    setSelectedAreas((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
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

    const form = e.currentTarget;

    // Only fields marked with * / required must be filled.
    // Practice areas, timeline, NDA and video session remain optional.
    if (!form.checkValidity()) {
      const invalidField = form.querySelector(":invalid");

      if (invalidField) {
        invalidField.focus();
        form.reportValidity();

        setTimeout(() => {
          invalidField.blur();
        }, 4000);
      }

      return;
    }

    console.log({
      ...formData,
      practiceAreas: selectedAreas,
      timeline,
    });

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* ================================
           SUCCESS DIALOG
        ================================= */

        .financial-success-dialog {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 9999;
          width: min(420px, calc(100% - 32px));
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: #ffffff;
          border: 1px solid #E5D3DC;
          border-radius: 10px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          font-family: "Inter", sans-serif;
          animation: financialSuccessDialogIn 0.25s ease-out;
        }

        .financial-success-dialog-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #22824D;
          border: none;
        }

        .financial-success-dialog-content {
          min-width: 0;
        }

        .financial-success-dialog-title {
          margin: 0;
          color: #202022;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .financial-success-dialog-text {
          margin: 2px 0 0;
          color: #65595E;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        .financial-success-dialog-ok {
          width: 34px;
          height: 34px;
          margin-left: auto;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: #730042;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .financial-success-dialog-ok:hover {
          background: #620038;
          transform: scale(1.05);
        }

        @keyframes financialSuccessDialogIn {
          from {
            opacity: 0;
            transform: translate(-50%, -12px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        * {
          box-sizing: border-box;
        }

        /* =====================================
           MAIN PAGE
        ====================================== */

        .financial-page {
          width: 100%;
          min-height: 100vh;
          background: #f8f9fa;
          padding: 64px 24px;
          color: #24242a;
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        .financial-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.22fr);
          gap: 46px;
          align-items: start;
        }

        /* =====================================
           LEFT SIDE
        ====================================== */

        .financial-left {
          min-width: 0;
        }

        .financial-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 6px 12px;
          border-radius: 20px;

          background: #ffdce9;
          color: #57002e;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.3px;
          line-height: 1.3;
        }

        .financial-badge svg {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
        }

        /* =====================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ====================================== */

        .financial-left h1 {
          margin: 18px 0 14px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -1.2px;

          color: #202027;
        }

        /* =====================================
           MAIN SUBHEADING
           PLUS JAKARTA SANS
        ====================================== */

        .financial-intro {
          max-width: 500px;
          margin: 0 0 28px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;

          color: #66545c;
        }

        /* =====================================
           IMAGE
        ====================================== */

        .financial-image-card {
          position: relative;

          width: 100%;
          height: 270px;

          overflow: hidden;
          border-radius: 15px;

          background: #35001e;

          box-shadow: 0 5px 16px rgba(70, 0, 40, 0.13);
        }

        .financial-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .financial-image-overlay {
          position: absolute;

          left: 14px;
          right: 14px;
          bottom: 13px;

          min-height: 58px;

          padding: 11px 13px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          background: rgba(255, 255, 255, 0.97);
          border-radius: 15px;

          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .architecture-desk {
          min-width: 0;

          display: flex;
          align-items: center;
          gap: 10px;
        }

        .architecture-icon {
          width: 35px;
          height: 35px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffe0ec;
          color: #650037;

          border-radius: 8px;
        }

        .architecture-text {
          min-width: 0;
        }

        /* Card heading - Plus Jakarta Sans */

        .architecture-text h3 {
          margin: 0 0 3px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;

          color: #222228;
        }

        /* Card text - Inter */

        .architecture-text p {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          color: #68646a;
        }

        .online-badge {
          flex-shrink: 0;

          padding: 7px 11px;

          border-radius: 5px;

          background: #a8f49d;
          color: #154d19;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 800;
        }

        /* =====================================
           LEFT INFO CARDS
        ====================================== */

        .financial-info-card {
          display: flex;
          gap: 12px;

          margin-top: 18px;
          padding: 17px 15px;

          background: white;
          border: 1px solid #ededee;
          border-radius: 12px;

          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.025);
        }

        .financial-info-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background: #f8e9f0;
          color: #68003a;
        }

        /* Info card heading - Plus Jakarta Sans */

        .financial-info-card h3 {
          margin: 0 0 4px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 700;
          font-size: 13px;
          line-height: 1.45;

          color: #27272d;
        }

        /* Info card body - Inter */

        .financial-info-card p {
          margin: 0;

          font-family: "Inter", sans-serif;
          color: #696269;
          font-size: 12px;
          line-height: 1.6;
        }

        /* =====================================
           SUPPORT BOX
        ====================================== */

        .financial-support-box {
          margin-top: 27px;
          padding: 19px 17px;

          background: #e8e8e9;
          border-radius: 13px;
        }

        .support-title {
          margin-bottom: 12px;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;

          color: #646166;
        }

        .support-details {
          display: flex;
          align-items: center;

          gap: 22px;
          margin-bottom: 13px;
        }

        .support-item {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #363038;

          font-family: "Inter", sans-serif;
          font-size: 11px;
        }

        .support-item svg {
          color: #70003e;
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .support-email {
          color: #630037;
          font-weight: 600;
        }

        .support-description {
          margin: 0;

          color: #6e6a70;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.6;
        }

        /* =====================================
           RIGHT FORM
        ====================================== */

        .financial-form-card {
          min-width: 0;

          background: white;
          border-radius: 17px;

          padding: 31px 32px 27px;

          box-shadow: 0 11px 30px rgba(20, 20, 30, 0.08);
        }

        .form-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          gap: 20px;

          padding-bottom: 20px;
          border-bottom: 1px solid #ededee;
        }

        /* Form heading - Plus Jakarta Sans */

        .form-top h2 {
          margin: 0 0 5px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 22px;
          line-height: 1.35;
          font-weight: 700;

          color: #222228;
        }

        /* Form subheading - Plus Jakarta Sans */

        .form-top p {
          max-width: 500px;
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          color: #77727a;
          font-size: 12px;
          line-height: 1.6;
          font-weight: 500;
        }

        .step-badge {
          flex-shrink: 0;

          padding: 7px 10px;

          border-radius: 4px;

          background: #f0f0f1;
          color: #424148;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 600;
          white-space: nowrap;
        }

        /* =====================================
           FORM SECTION
        ====================================== */

        .form-section {
          margin-top: 24px;
        }

        .form-section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          margin-bottom: 10px;
        }

        .form-section-title-left {
          display: flex;
          align-items: center;
          gap: 7px;
          min-width: 0;
        }

        .section-dot {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;
          background: #750040;
        }

        /* Form section headings - Plus Jakarta Sans */

        .form-section-title h3 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;

          color: #343138;
        }

        .form-section-title > span {
          color: #777178;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          white-space: nowrap;
        }

        /* =====================================
           PRACTICE AREA GRID
        ====================================== */

        .practice-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px 12px;
        }

        .practice-button {
          min-height: 73px;

          padding: 11px 12px;

          border: 1px solid transparent;
          border-radius: 10px;

          background: #f1f1f2;

          text-align: left;

          font-family: "Inter", sans-serif;

          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }

        .practice-button:hover {
          background: #ecebee;
          transform: translateY(-1px);
        }

        .practice-button.selected {
          border-color: #f0d3df;
          background: #f7f4f5;
        }

        .practice-top {
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }

        .practice-check {
          width: 16px;
          height: 16px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 4px;

          background: #dedfe0;
          color: white;
        }

        .practice-button.selected .practice-check {
          background: #650037;
        }

        /* Practice heading - Plus Jakarta Sans */

        .practice-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;

          color: #2d2d32;
        }

        /* Practice description - Inter */

        .practice-description {
          margin: 7px 0 0 25px;

          color: #777278;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.5;
        }

        /* =====================================
           INPUT GRID
        ====================================== */

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .input-field {
          min-width: 0;
        }

        .input-field.full {
          grid-column: 1 / -1;
        }

        .input-field label {
          display: block;

          margin-bottom: 6px;

          color: #6d5961;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;

          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .input-wrapper {
          position: relative;
        }

        .input-wrapper svg {
          position: absolute;

          left: 12px;
          top: 50%;

          transform: translateY(-50%);

          width: 14px;
          height: 14px;

          color: #77747a;

          pointer-events: none;
        }

        .input-field input,
        .scope-textarea {
          width: 100%;

          border: none;
          outline: none;

          background: #f1f1f2;
          border-radius: 9px;

          color: #35343a;

          font-family: "Inter", sans-serif;
          font-size: 12px;
        }

        .input-field input {
          height: 38px;
          padding: 0 12px 0 36px;
        }

        .input-field input::placeholder,
        .scope-textarea::placeholder {
          color: #858187;
        }

        .input-field input:focus,
        .scope-textarea:focus {
          box-shadow: 0 0 0 2px rgba(101, 0, 55, 0.12);
        }

        /* =====================================
           TIMELINE
        ====================================== */

        .timeline-label {
          margin: 0 0 9px;

          color: #777078;

          font-family: "Inter", sans-serif;
          font-size: 12px;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 7px;
        }

        .timeline-button {
          min-height: 56px;

          border: none;
          border-radius: 8px;

          background: #f1f1f2;
          color: #4e454b;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.4;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .timeline-button:hover {
          background: #ecebed;
          transform: translateY(-1px);
        }

        .timeline-button.selected {
          background: #ffd5e4;
          color: #5b0033;
          font-weight: 700;
        }

        /* =====================================
           SCOPE
        ====================================== */

        .scope-label {
          margin: 18px 0 8px;

          color: #6d5961;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;

          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .scope-textarea {
          height: 105px;

          padding: 13px;

          resize: vertical;

          line-height: 1.55;
        }

        /* =====================================
           REQUEST OPTIONS
        ====================================== */

        .request-options {
          margin-top: 24px;

          padding: 13px;

          border-radius: 10px;

          background: #f1f1f2;
        }

        .request-option {
          display: flex;
          align-items: flex-start;

          gap: 9px;

          margin: 8px 0;

          color: #37343a;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.45;

          cursor: pointer;
        }

        .request-option input {
          width: 13px;
          height: 13px;

          flex-shrink: 0;

          margin: 1px 0 0;

          accent-color: #730042;

          cursor: pointer;
        }

        /* =====================================
           SUBMIT
        ====================================== */

        .financial-submit {
          width: 100%;
          min-height: 58px;

          margin-top: 28px;
          padding: 10px 20px;

          border: none;
          border-radius: 10px;

          background: #730042;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          text-align: center;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;

          cursor: pointer;

          box-shadow: 0 5px 13px rgba(96, 0, 47, 0.2);

          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .financial-submit:hover {
          background: #620038;
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(96, 0, 47, 0.24);
        }

        .financial-submit svg {
          margin-left: 10px;
          flex-shrink: 0;
        }

        .form-note {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 6px;

          margin: 13px 0 0;

          color: #756b72;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.5;

          text-align: center;
        }

        .form-note svg {
          width: 12px;
          height: 12px;

          flex-shrink: 0;

          color: #650037;
        }

        /* =====================================
           LARGE TABLET
        ====================================== */

        @media (max-width: 1100px) {
          .financial-page {
            padding: 55px 24px;
          }

          .financial-container {
            grid-template-columns: 1fr;
            max-width: 850px;
            gap: 35px;
          }

          .financial-left {
            width: 100%;
          }

          .financial-intro {
            max-width: 680px;
          }

          .financial-form-card {
            width: 100%;
          }

          .financial-left h1 {
            font-size: 34px;
          }
        }

        /* =====================================
           TABLET
        ====================================== */

        @media (max-width: 800px) {
          .financial-page {
            padding: 48px 20px;
          }

          .financial-left h1 {
            font-size: 31px;
          }

          .financial-form-card {
            padding: 26px 24px;
          }

          .practice-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .timeline-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* =====================================
           MOBILE
        ====================================== */

        @media (max-width: 600px) {
          .financial-success-dialog {
            top: 16px;
            width: calc(100% - 28px);
            padding: 14px 16px;
          }

          .financial-success-dialog-title {
            font-size: 13px;
          }

          .financial-success-dialog-text {
            font-size: 11px;
          }

          .financial-success-dialog-icon {
            width: 40px;
            height: 40px;
          }

          .financial-success-dialog-icon svg {
            width: 28px;
            height: 28px;
          }

          .financial-page {
            padding: 38px 16px;
          }

          .financial-container {
            gap: 26px;
          }

          .financial-badge {
            font-size: 9px;
            padding: 6px 10px;
          }

          .financial-left h1 {
            margin-top: 15px;
            font-size: 27px;
            line-height: 1.25;
            letter-spacing: -0.8px;
          }

          .financial-intro {
            margin-bottom: 22px;

            font-size: 13px;
            line-height: 1.7;
          }

          .financial-image-card {
            height: 220px;
            border-radius: 13px;
          }

          .financial-image-overlay {
            left: 9px;
            right: 9px;
            bottom: 9px;

            min-height: 53px;

            padding: 9px 10px;

            border-radius: 12px;
          }

          .architecture-icon {
            width: 32px;
            height: 32px;
          }

          .architecture-text h3 {
            font-size: 10px;
          }

          .architecture-text p {
            font-size: 8px;
          }

          .online-badge {
            padding: 6px 8px;
            font-size: 8px;
          }

          .financial-info-card {
            padding: 15px 13px;
          }

          .financial-info-card h3 {
            font-size: 12px;
          }

          .financial-info-card p {
            font-size: 11px;
          }

          .support-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 9px;
          }

          .financial-form-card {
            padding: 21px 17px;
            border-radius: 14px;
          }

          .form-top {
            flex-direction: column;
            gap: 12px;
          }

          .form-top h2 {
            font-size: 19px;
          }

          .form-top p {
            font-size: 11px;
          }

          .step-badge {
            align-self: flex-start;
          }

          .form-section-title {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .form-section-title > span {
            margin-left: 12px;
          }

          .practice-grid {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .input-field.full {
            grid-column: auto;
          }

          .timeline-grid {
            grid-template-columns: 1fr 1fr;
          }

          .financial-submit {
            min-height: 56px;
            padding: 10px 14px;

            font-size: 11px;
          }

          .financial-submit svg {
            margin-left: 4px;
          }

          .form-note {
            font-size: 8px;
          }
        }

        /* =====================================
           SMALL MOBILE
        ====================================== */

        @media (max-width: 400px) {
          .financial-page {
            padding: 30px 12px;
          }

          .financial-left h1 {
            font-size: 24px;
          }

          .financial-intro {
            font-size: 12px;
          }

          .financial-image-card {
            height: 195px;
          }

          .financial-image-overlay {
            gap: 7px;
          }

          .architecture-desk {
            gap: 7px;
          }

          .architecture-text h3 {
            font-size: 9px;
          }

          .architecture-text p {
            font-size: 7px;
          }

          .online-badge {
            font-size: 7px;
            padding: 5px 7px;
          }

          .financial-info-card {
            gap: 9px;
          }

          .financial-info-icon {
            width: 34px;
            height: 34px;
          }

          .financial-info-card h3 {
            font-size: 11px;
          }

          .financial-info-card p {
            font-size: 10px;
          }

          .financial-support-box {
            padding: 16px 13px;
          }

          .financial-form-card {
            padding: 18px 13px;
          }

          .form-top h2 {
            font-size: 17px;
          }

          .form-section-title h3 {
            font-size: 12px;
          }

          .practice-title {
            font-size: 11px;
          }

          .practice-description {
            font-size: 10px;
          }

          .timeline-button {
            min-height: 52px;
            font-size: 10px;
          }

          .financial-submit {
            font-size: 10px;
          }
        }

        /* =====================================
           VERY SMALL MOBILE
        ====================================== */

        @media (max-width: 340px) {
          .financial-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .financial-left h1 {
            font-size: 22px;
          }

          .financial-intro {
            font-size: 11px;
          }

          .financial-form-card {
            padding: 16px 11px;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }

          .financial-submit {
            min-height: 54px;
            font-size: 9px;
          }
        }

        /* =====================================
           REDUCED MOTION
        ====================================== */

        @media (prefers-reduced-motion: reduce) {
          .practice-button,
          .timeline-button,
          .financial-submit {
            transition: none;
          }

          .practice-button:hover,
          .timeline-button:hover,
          .financial-submit:hover {
            transform: none;
          }
        }
      `}</style>

      {showSuccess && (
        <div
          className="financial-success-dialog"
          role="alert"
          aria-live="polite"
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setShowSuccess(false);
            }
          }}
        >
          <div className="financial-success-dialog-icon">
            <CircleCheck size={30} strokeWidth={2.5} />
          </div>

          <div className="financial-success-dialog-content">
            <p className="financial-success-dialog-title">
              Request Submitted
            </p>

            <p className="financial-success-dialog-text">
              Your intake request has been submitted successfully.
            </p>
          </div>

          <button
            type="button"
            className="financial-success-dialog-ok"
            onClick={() => setShowSuccess(false)}
            autoFocus
            aria-label="Close"
          >
            OK
          </button>
        </div>
      )}

      <section className="financial-page">
        <div className="financial-container">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="financial-left">

            <div className="financial-badge">
              <BadgeCheck size={12} />
              DIRECT FINANCIAL ARCHITECTURE CONSULTATION
            </div>

            {/* PLUS JAKARTA SANS */}
            <h1>
              Connect with TechTorch
              <br />
              Financial Technology Architects
            </h1>

            {/* PLUS JAKARTA SANS */}
            <p className="financial-intro">
              Discuss your institution’s core modernization,
              integrated accounting workflows, multi-ERP
              reconciliation, regulatory audit readiness, or bespoke
              fintech development with practicing senior solutions
              engineers.
            </p>

            {/* IMAGE */}

            <div className="financial-image-card">
              <img
                src="/FinanceGetInTouch.png"
                alt="Financial technology architecture team"
                className="financial-image"
              />

              <div className="financial-image-overlay">

                <div className="architecture-desk">

                  <div className="architecture-icon">
                    <Check size={20} />
                  </div>

                  <div className="architecture-text">
                    <h3>
                      Principal Architecture Desk
                    </h3>

                    <p>
                      Direct engagement • Guaranteed &lt;24h turn
                    </p>
                  </div>

                </div>

                <span className="online-badge">
                  ONLINE
                </span>

              </div>
            </div>

            {/* INFO CARD 1 */}

            <div className="financial-info-card">

              <div className="financial-info-icon">
                <Shield size={18} />
              </div>

              <div>
                <h3>
                  Strict Financial Data Privacy &amp; SOC2 Controls
                </h3>

                <p>
                  Every technical exchange is insulated under
                  sovereign data mandates, banking-grade encryption,
                  and zero third-party disclosure policies.
                </p>
              </div>

            </div>

            {/* INFO CARD 2 */}

            <div className="financial-info-card">

              <div className="financial-info-icon">
                <Headphones size={18} />
              </div>

              <div>
                <h3>
                  Direct Engineering Interaction
                </h3>

                <p>
                  Skip commercial gatekeepers. Engage directly with
                  Principal Architects versed in distributed ledger
                  engines, Swift MT/MX parsing, and multi-ERP schemas.
                </p>
              </div>

            </div>

            {/* INFO CARD 3 */}

            <div className="financial-info-card">

              <div className="financial-info-icon">
                <Route size={18} />
              </div>

              <div>
                <h3>
                  Tailored Milestones &amp; Architecture Roadmap
                </h3>

                <p>
                  Receive an objective initial blueprint mapping
                  architectural risk vectors, schema reconciliations,
                  and phased deployment windows.
                </p>
              </div>

            </div>

            {/* SUPPORT */}

            <div className="financial-support-box">

              <div className="support-title">
                ENTERPRISE SUPPORT &amp; LEGAL HQ
              </div>

              <div className="support-details">

                <div className="support-item">
                  <Mail size={14} />

                  <span className="support-email">
                    contact@techtorch.solutions
                  </span>
                </div>

                <div className="support-item">
                  <Headphones size={14} />
                  24/7 Enterprise Tier-1 Desk
                </div>

              </div>

              <p className="support-description">
                TechTorch Solutions Private Limited • Global
                Operations • Sovereign Cloud &amp; High-Frequency
                FinTech Practices
              </p>

            </div>

          </div>

          {/* =====================================================
              RIGHT FORM
          ===================================================== */}

          <div className="financial-form-card">

            <div className="form-top">

              <div>
                {/* PLUS JAKARTA SANS */}
                <h2>
                  Institutional Inquiry Console
                </h2>

                {/* PLUS JAKARTA SANS */}
                <p>
                  Specify your technical challenges to route this
                  directly to the appropriate domain architects.
                </p>
              </div>

              <span className="step-badge">
                Step 1 of 1
              </span>

            </div>

            <form onSubmit={handleSubmit}>

              {/* =================================================
                  PRACTICE AREAS
              ================================================= */}

              <div className="form-section">

                <div className="form-section-title">

                  <div className="form-section-title-left">

                    <span className="section-dot"></span>

                    {/* PLUS JAKARTA SANS */}
                    <h3>
                      1. Financial Practice Areas of Interest
                    </h3>

                  </div>

                  <span>
                    (Select one or more)
                  </span>

                </div>

                <div className="practice-grid">

                  {PRACTICE_AREAS.map((area) => {

                    const selected =
                      selectedAreas.includes(area.title);

                    return (
                      <button
                        key={area.title}
                        type="button"
                        className={`practice-button ${
                          selected ? "selected" : ""
                        }`}
                        onClick={() =>
                          toggleArea(area.title)
                        }
                      >

                        <div className="practice-top">

                          <span className="practice-check">
                            {selected && <Check size={11} />}
                          </span>

                          <span className="practice-title">
                            {area.title}
                          </span>

                        </div>

                        <p className="practice-description">
                          {area.description}
                        </p>

                      </button>
                    );
                  })}

                </div>

              </div>

              {/* =================================================
                  CONTACT INFORMATION
              ================================================= */}

              <div className="form-section">

                <div className="form-section-title">

                  <div className="form-section-title-left">

                    <span className="section-dot"></span>

                    {/* PLUS JAKARTA SANS */}
                    <h3>
                      2. Institution &amp; Executive Contact Information
                    </h3>

                  </div>

                </div>

                <div className="contact-grid">

                  {/* NAME */}

                  <div className="input-field">

                    <label>
                      Full Name *
                    </label>

                    <div className="input-wrapper">

                      <User />

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Malhotra"
                        required
                      />

                    </div>

                  </div>

                  {/* EMAIL */}

                  <div className="input-field">

                    <label>
                      Corporate / Institutional Email *
                    </label>

                    <div className="input-wrapper">

                      <Mail />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. v.malhotra@finbank.com"
                        required
                      />

                    </div>

                  </div>

                  {/* ORGANIZATION */}

                  <div className="input-field">

                    <label>
                      Institution / Organization Name *
                    </label>

                    <div className="input-wrapper">

                      <Building2 />

                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. Apex Global Financial Services"
                        required
                      />

                    </div>

                  </div>

                  {/* DESIGNATION */}

                  <div className="input-field">

                    <label>
                      Executive Designation / Role
                    </label>

                    <div className="input-wrapper">

                      <BriefcaseBusiness />

                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        placeholder="e.g. Chief Technology Officer / Chief..."
                      />

                    </div>

                  </div>

                  {/* PHONE */}

                  <div className="input-field full">

                    <label>
                      Direct Phone or Secure WhatsApp{" "}
                      <span style={{ fontWeight: 400 }}>
                        (E.G. +1 (555) 019-2834 OR +91 98765 43210)
                      </span>
                    </label>

                    <div className="input-wrapper">

                      <Phone />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2834 or +91 98765 43210"
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  TIMELINE
              ================================================= */}

              <div className="form-section">

                <div className="form-section-title">

                  <div className="form-section-title-left">

                    <span className="section-dot"></span>

                    {/* PLUS JAKARTA SANS */}
                    <h3>
                      3. Deployment Timeline &amp; Architecture Scope
                    </h3>

                  </div>

                </div>

                <p className="timeline-label">
                  Target Commencement Horizon:
                </p>

                <div className="timeline-grid">

                  {TIMELINES.map((item) => (

                    <button
                      type="button"
                      key={item}
                      className={`timeline-button ${
                        timeline === item ? "selected" : ""
                      }`}
                      onClick={() => setTimeline(item)}
                    >
                      {item}
                    </button>

                  ))}

                </div>

                <p className="scope-label">
                  Technical Architecture Scope &amp; Current Bottlenecks
                </p>

                <textarea
                  className="scope-textarea"
                  name="scope"
                  value={formData.scope}
                  onChange={handleChange}
                  placeholder="Briefly outline your systems architecture, data integration bottlenecks, current software stack (SAP, Oracle, NetSuite, custom ledger), or key regulatory delivery milestones..."
                />

              </div>

              {/* =================================================
                  REQUEST OPTIONS
              ================================================= */}

              <div className="request-options">

                <label className="request-option">

                  <input
                    type="checkbox"
                    name="nda"
                    checked={formData.nda}
                    onChange={handleChange}
                  />

                  <span>
                    Execute Bilateral Mutual Non-Disclosure Agreement
                    (NDA) prior to our initial technical briefing and
                    architecture review.
                  </span>

                </label>

                <label className="request-option">

                  <input
                    type="checkbox"
                    name="videoSession"
                    checked={formData.videoSession}
                    onChange={handleChange}
                  />

                  <span>
                    Request Direct Video Architecture Session with a
                    designated TechTorch Principal Engineering Lead.
                  </span>

                </label>

              </div>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="financial-submit"
              >

                <span>
                  Submit Financial Consultation Request &amp; Connect with
                  <br />
                  Architects
                </span>

                <ArrowRight size={18} />

              </button>

              <p className="form-note">

                <LockKeyhole size={12} />

                Strict Confidentiality Guaranteed • Routed directly
                to FinTech Solutions Pod Leads

              </p>

            </form>

          </div>

        </div>
      </section>
    </>
  );
}