import React, { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
  Network,
  Plus,
  FileText,
  CircleCheck,
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
  const [showSuccess, setShowSuccess] = useState(false);

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

    const form = e.currentTarget;

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

    console.log("Telecommunications enquiry:", {
      ...formData,
      selectedAreas,
    });

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

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
          font-family: "Inter", Arial, sans-serif;
          overflow: hidden;
        }

        /* ================= TOP BAR ================= */

        .tc-topbar {
          width: 100%;
          min-height: 40px;
          padding: 0 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
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
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--tc-beetroot);
        }

        .tc-topbar-text {
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.3px;
          color: #596579;
        }

        .tc-topbar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #687487;
          white-space: nowrap;
        }

        .tc-topbar-item svg {
          color: var(--tc-beetroot);
        }

        /* ================= HERO ================= */

        .tc-hero {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          padding: 70px 40px 0;
        }

        .tc-hero-grid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 70px;
          align-items: center;
        }

        .tc-hero-content {
          min-width: 0;
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
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .tc-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--tc-beetroot);
        }

        /* Heading = Plus Jakarta Sans */

        .tc-hero-content h1 {
          margin: 28px 0 22px;
          max-width: 680px;
          font-family: "Plus Jakarta Sans",sans-serif;
          font-size: 36px;
          line-height: 1.08;
          letter-spacing: -2.4px;
          word-spacing: 3px;
          font-weight: 600;
          color: #111a2c;
        }

        /* Normal content = Inter */

        .tc-hero-content > p {
          max-width: 670px;
          margin: 0;
          color: #607087;
          font-family: "Inter",sans-serif;
          font-size: 15px;
          line-height: 1.5;
        }

        /* ================= BENEFITS ================= */

        .tc-benefits {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 34px;
          max-width: 680px;
        }

        .tc-benefit-card {
          display: flex;
          align-items: center;
          gap: 15px;
          min-height: 80px;
          padding: 16px 18px;
          background: #fff;
          border: 1px solid #e3e8ef;
          border-radius: 12px;
          box-shadow: 0 3px 12px rgba(20, 30, 50, 0.035);
        }

        .tc-benefit-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--tc-beetroot);
          background: #fff0f6;
          border-radius: 9px;
        }

        .tc-benefit-content {
          min-width: 0;
        }

        .tc-benefit-content h3 {
          margin: 0 0 5px;
          font-family: "Plus Jakarta Sans",sans-serif;
          font-size: 14px;
          line-height: 1.3;
          font-weight: 600;
          color: #172033;
        }

        .tc-benefit-content p {
          margin: 0;
          color: #607087;
          font-family: "Inter",sans-serif;
          font-size: 14px;
          line-height: 1.5;
        }

        /* ================= HERO IMAGE ================= */

        .tc-image-card {
          position: relative;
          width: 100%;
          height: 420px;
          justify-self: end;
          overflow: hidden;
          border-radius: 18px;
          background: #ddd;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
          height: 38%;
          background: linear-gradient(
            to top,
            rgba(115, 0, 66, 0.95),
            rgba(115, 0, 66, 0)
          );
        }

        .tc-image-info {
          position: absolute;
          left: 25px;
          right: 25px;
          bottom: 22px;
          min-height: 68px;
          padding: 14px 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 13px;
        }

        .tc-image-info-left {
          min-width: 0;
        }

        .tc-image-label {
          margin-bottom: 5px;
          color: var(--tc-beetroot);
          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .tc-image-title {
          color: #182033;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
        }

        .tc-image-time {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 7px;
          color: #647184;
          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }

        .tc-image-time svg {
          color: var(--tc-beetroot);
        }

        /* ================= FORM SECTION ================= */

        .tc-form-section {
          width: 100%;
          max-width: 1250px;
          margin: 120px auto 80px;
          padding: 0 40px;
        }

        .tc-form-heading {
          text-align: center;
          margin-bottom: 42px;
        }

        .tc-form-heading .tc-section-label {
          color: var(--tc-beetroot);
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        /* Form heading = Plus Jakarta */

        .tc-form-heading h2 {
          margin: 10px 0 8px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 28px;
          line-height: 1.25;
          font-weight: 600;
          color: #172033;
        }

        .tc-form-heading p {
          max-width: 680px;
          margin: 0 auto;
          color: #738095;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .tc-form-card {
          width: 100%;
          padding: 38px 42px 36px;
          border: 1px solid #e3e8ef;
          border-radius: 15px;
          background: #fff;
          box-shadow: 0 5px 22px rgba(25, 35, 55, 0.035);
        }

        /* ================= FORM SECTIONS ================= */

        .tc-form-block {
          margin-bottom: 32px;
        }

        .tc-form-block:last-of-type {
          margin-bottom: 20px;
        }

        .tc-form-section-title {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 15px;
        }

        .tc-number {
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #fff0f6;
          color: var(--tc-beetroot);
          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 800;
        }

        .tc-form-section-title h3 {
          margin: 0 0 3px;
          font-size: 15px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-weight: 600;
          color: #1c2638;
        }

        .tc-form-section-title p {
          margin: 0;
          color: #8792a2;
          font-size: 13px;
          font-family: "Inter", Arial, sans-serif;
          line-height: 1.45;
        }

        /* ================= FOCUS AREAS ================= */

        .tc-focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .tc-focus-option {
          min-height: 54px;
          padding: 11px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          border: 1px solid #dfe5ed;
          border-radius: 8px;
          background: #fff;
          font-family: "Inter", Arial, sans-serif;
          color: #344054;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 500;
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
          width: 19px;
          height: 19px;
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
          gap: 17px;
        }

        .tc-field {
          min-width: 0;
        }

        .tc-field label {
          display: block;
          margin-bottom: 7px;
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
          font-size: 13px;
          transition: 0.2s ease;
        }

        .tc-field input {
          height: 42px;
          padding: 0 12px;
        }

        .tc-field textarea {
          min-height: 100px;
          padding: 12px;
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
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 11px;
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
          font-size: 12px;
          line-height: 1.45;
        }

        .tc-check-row input {
          width: 13px;
          height: 13px;
          margin: 0;
          flex-shrink: 0;
          accent-color: var(--tc-beetroot);
        }

        /* ================= BUTTON ================= */

        .tc-submit-wrap {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 28px;
        }

        .tc-submit {
          width: 100%;
          max-width: 420px;
          min-width: 0;
          min-height: 43px;
          padding: 10px 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          border-radius: 7px;
          background: var(--tc-beetroot);
          color: #fff;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .tc-submit:hover {
          background: #970052;
          transform: translateY(-1px);
        }

        .tc-confidential {
          margin-top: 12px;
          text-align: center;
          color: #677386;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.4;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1200px) {
          .tc-hero {
            padding-left: 30px;
            padding-right: 30px;
          }

          .tc-hero-grid {
            gap: 45px;
          }

          .tc-image-card {
            height: 450px;
          }

          .tc-form-section {
            max-width: 1100px;
            padding-left: 30px;
            padding-right: 30px;
          }
        }

        @media (max-width: 1000px) {
          .tc-hero-grid {
            grid-template-columns: 1fr 0.9fr;
            gap: 35px;
          }

          .tc-hero-content h1 {
            font-size: 42px;
          }

          .tc-image-card {
            height: 410px;
          }
        }

        @media (max-width: 900px) {
          .tc-hero {
            padding-top: 55px;
          }

          .tc-hero-grid {
            grid-template-columns: 1fr;
            gap: 55px;
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
            height: 450px;
            justify-self: stretch;
          }
        }

        @media (max-width: 700px) {
          .tc-topbar {
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
            padding: 42px 18px 0;
          }

          .tc-hero-content h1 {
            font-size: 35px;
            line-height: 1.12;
            letter-spacing: -1.5px;
          }

          .tc-hero-content > p {
            font-size: 14px;
            line-height: 1.65;
          }

          .tc-image-card {
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
            margin-top: 80px;
            padding: 0 18px;
          }

          .tc-form-card {
            padding: 28px 20px;
          }

          .tc-focus-grid {
            grid-template-columns: 1fr 1fr;
          }

          .tc-input-grid {
            grid-template-columns: 1fr;
          }

          .tc-submit {
            width: 100%;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .tc-topbar {
            justify-content: center;
          }

          .tc-topbar-right {
            display: none;
          }

          .tc-topbar-text {
            font-size: 8px;
            text-align: center;
          }

          .tc-hero {
            padding: 35px 15px 0;
          }

          .tc-eyebrow {
            font-size: 9px;
            padding: 8px 11px;
          }

          .tc-hero-content h1 {
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -1px;
          }

          .tc-hero-content > p {
            font-size: 13px;
          }

          .tc-benefit-card {
            align-items: flex-start;
            min-height: auto;
            padding: 15px;
          }

          .tc-benefit-content h3 {
            font-size: 13px;
          }

          .tc-benefit-content p {
            font-size: 12px;
          }

          .tc-image-card {
            height: 320px;
            border-radius: 13px;
          }

          .tc-image-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
          }

          .tc-image-title {
            font-size: 12px;
          }

          .tc-form-section {
            margin-top: 65px;
            padding: 0 15px;
          }

          .tc-form-heading {
            margin-bottom: 28px;
          }

          .tc-form-heading h2 {
            font-size: 21px;
          }

          .tc-form-heading p {
            font-size: 12px;
          }

          .tc-form-card {
            padding: 23px 15px;
            border-radius: 11px;
          }

          .tc-focus-grid {
            grid-template-columns: 1fr;
          }

          .tc-focus-option {
            min-height: 50px;
          }

          .tc-form-section-title h3 {
            font-size: 13px;
          }

          .tc-form-section-title p {
            font-size: 11px;
          }

          .tc-submit {
            width: 100%;
            min-height: 42px;
            padding: 10px 12px;
            line-height: 1.3;
          }
        }

        /* ================================
           UPPER CONTENT — EXACT FOOTER ALIGNMENT
           FORM SECTION IS NOT MODIFIED
        ================================= */

        .tc-topbar,
        .tc-hero {
          width: 100%;
          box-sizing: border-box;
          margin-left: 0;
          margin-right: 0;
        }

        @media (max-width: 639px) {
          .tc-topbar,
          .tc-hero {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (min-width: 640px) and (max-width: 767px) {
          .tc-topbar,
          .tc-hero {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .tc-topbar,
          .tc-hero {
            padding-left: 40px !important;
            padding-right: 40px !important;
          }
        }

        @media (min-width: 1024px) {
          .tc-topbar,
          .tc-hero {
            padding-left: 100px !important;
            padding-right: 100px !important;
          }
        }


        @media (min-width: 1024px) {
          .tc-hero {
            max-width: none !important;
          }
        }



        /* ================================
           SUCCESS DIALOG
        ================================= */

        .tc-success-dialog {
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
          animation: tcSuccessDialogIn 0.25s ease-out;
        }

        .tc-success-dialog-icon {
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

        .tc-success-dialog-content { min-width: 0; }

        .tc-success-dialog-title {
          margin: 0;
          color: #202022;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .tc-success-dialog-text {
          margin: 2px 0 0;
          color: #65595E;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        .tc-success-dialog-ok {
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

        .tc-success-dialog-ok:hover {
          background: #620038;
          transform: scale(1.05);
        }

        @keyframes tcSuccessDialogIn {
          from { opacity: 0; transform: translate(-50%, -12px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }


        @media (max-width: 650px) {
          .tc-success-dialog {
            top: 16px;
            width: calc(100% - 28px);
            padding: 14px 16px;
          }
      `}</style>

      <div className="tc-page">
        {showSuccess && (
          <div
            className="tc-success-dialog"
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
            <div className="tc-success-dialog-icon">
              <CircleCheck size={30} strokeWidth={2.5} />
            </div>

            <div className="tc-success-dialog-content">
              <p className="tc-success-dialog-title">
                Request Submitted
              </p>
              <p className="tc-success-dialog-text">
                Your intake request has been submitted successfully.
              </p>
            </div>

            <button
              type="button"
              className="tc-success-dialog-ok"
              onClick={() => setShowSuccess(false)}
              autoFocus
              aria-label="Close"
            >
              OK
            </button>
          </div>
        )}



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

                  <div className="tc-number">
                    01
                  </div>

                  <div>
                    <h3>
                      Project Scope & Focus Areas
                    </h3>

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

                  <div className="tc-number">
                    02
                  </div>

                  <div>
                    <h3>
                      Contact & Organization Details
                    </h3>

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
                      Corporate Email{" "}
                      <span className="tc-required">*</span>
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
                    <label>
                      Phone Number
                    </label>

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

                  <div className="tc-number">
                    03
                  </div>

                  <div>
                    <h3>
                      Project Details & Requirements
                    </h3>

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

                <button
                  type="submit"
                  className="tc-submit"
                >
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