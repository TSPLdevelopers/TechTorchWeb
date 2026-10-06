import React, { useState } from "react";
import {
  ArrowRight,
  Cloud,
  Code2,
  Mail,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  LockKeyhole,
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =================================================
           BASE
        ================================================= */

        .energy-page {
          --energy-beetroot: #730042;
          --energy-dark: #202733;
          --energy-text: #596273;
          --energy-muted: #7c8492;
          --energy-border: #dfe4eb;
          --energy-soft: #f5f6f8;
          --energy-page: #f8f7f8;

          width: 100%;
          min-height: 100vh;

          background: var(--energy-page);
          color: var(--energy-dark);

          font-family: "Inter", Arial, sans-serif;

          /*
            HERO SPACING SYSTEM
            Desktop: 100px
          */
          padding: 56px 100px 80px;

          box-sizing: border-box;
        }

        .energy-page *,
        .energy-page *::before,
        .energy-page *::after {
          box-sizing: border-box;
        }

        /* =================================================
           MAIN CONTAINER
        ================================================= */

        .energy-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* =================================================
           ALERT
        ================================================= */

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

          box-shadow:
            0 10px 30px rgba(0, 0, 0, 0.18);

          font-family: "Inter", Arial, sans-serif;
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
          align-items: center;
          justify-content: center;
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

        /* =================================================
           HERO
        ================================================= */

        .energy-hero {
          margin-bottom: 45px;
        }

        .energy-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 13px;

          color: var(--energy-beetroot);

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;

          letter-spacing: 1px;
          line-height: 1.4;

          text-transform: uppercase;
        }

        .energy-eyebrow-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--energy-beetroot);
        }

        .energy-hero h1 {
          max-width: 760px;

          margin: 0;

          color: var(--energy-beetroot);

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 40px;
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 700;
        }

        .energy-hero-description {
          max-width: 760px;

          margin: 18px 0;

          color: #656b75;

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        /* =================================================
           HERO PILLS
        ================================================= */

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

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 600;

          white-space: nowrap;
        }

        .energy-pill svg {
          color: var(--energy-beetroot);
          flex-shrink: 0;
        }

        /* =================================================
           MAIN GRID
        ================================================= */

        .energy-main-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.42fr)
            minmax(340px, 0.88fr);

          gap: 34px;

          align-items: start;
        }

        /* =================================================
           FORM CARD
        ================================================= */

        .energy-form-card {
          width: 100%;

          padding: 34px;

          background: #fff;

          border: 1px solid var(--energy-border);
          border-radius: 10px;

          box-shadow:
            0 3px 15px rgba(20, 30, 50, 0.035);
        }

        .energy-form-heading {
          padding-bottom: 16px;
          margin-bottom: 19px;

          border-bottom: 1px solid #e5e7eb;
        }

        .energy-form-heading h2 {
          margin: 0 0 5px;

          color: #262d38;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 17px;
          line-height: 1.25;
          font-weight: 700;
        }

        .energy-form-heading p {
          max-width: 680px;

          margin: 0;

          color: #6f7681;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.5;
          font-weight: 500;
        }

        /* =================================================
           FORM GRID
        ================================================= */

        .energy-fields-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 14px;
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

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 700;
        }

        .energy-required {
          color: var(--energy-beetroot);
        }

        /* =================================================
           INPUTS
        ================================================= */

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

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .energy-input,
        .energy-select {
          height: 40px;

          padding: 0 11px;
        }

        .energy-textarea {
          min-height: 105px;

          padding: 11px;

          resize: vertical;

          line-height: 1.5;
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

          box-shadow:
            0 0 0 2px rgba(115, 0, 66, 0.05);
        }

        /* =================================================
           SELECT
        ================================================= */

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

        /* =================================================
           SECTIONS
        ================================================= */

        .energy-section {
          margin-top: 21px;
        }

        /* =================================================
           TECHNOLOGY AREAS
        ================================================= */

        .energy-options {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .energy-option {
          min-height: 28px;

          padding: 5px 9px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #dfe4e9;
          border-radius: 6px;

          background: #f1f3f5;
          color: #39404a;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9.5px;
          line-height: 1.15;
          font-weight: 600;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .energy-option:hover {
          border-color: #b9799a;
        }

        .energy-option.active {
          background: var(--energy-beetroot);
          border-color: var(--energy-beetroot);
          color: #fff;
        }

        /* =================================================
           PROJECT STAGE
        ================================================= */

        .energy-stage-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 7px;
        }

        .energy-stage {
          min-height: 44px;

          padding: 7px 9px;

          display: flex;
          align-items: center;

          gap: 8px;

          border: 1px solid #dfe4e9;
          border-radius: 6px;

          background: #f1f3f5;
          color: #414751;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9.5px;
          line-height: 1.2;
          font-weight: 600;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
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

        /* =================================================
           CONTACT
        ================================================= */

        .energy-contact-grid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 15px;

          align-items: end;
        }

        .energy-contact-methods {
          display: flex;
          align-items: center;

          gap: 15px;

          min-height: 40px;
        }

        .energy-contact-option {
          display: flex;
          align-items: center;

          gap: 6px;

          color: #424852;

          font-family: "Inter", Arial, sans-serif;
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

        /* =================================================
           CONSENT
        ================================================= */

        .energy-consent {
          margin-top: 20px;

          display: flex;
          align-items: flex-start;

          gap: 9px;

          color: #4b525d;

          font-family: "Inter", Arial, sans-serif;
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

        /* =================================================
           SUBMIT
        ================================================= */

        .energy-submit {
          width: 100%;
          height: 42px;

          margin-top: 20px;

          border: none;
          border-radius: 6px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          background: var(--energy-beetroot);
          color: #fff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .energy-submit:hover {
          background: #5d0035;
        }

        .energy-submit:active {
          transform: translateY(1px);
        }

        /* =================================================
           PRIVACY
        ================================================= */

        .energy-privacy {
          margin-top: 13px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          color: #7a8089;

          font-family: "Inter", Arial, sans-serif;
          font-size: 8px;
          line-height: 1.4;

          text-align: center;
        }

        .energy-privacy svg {
          color: var(--energy-beetroot);

          flex-shrink: 0;
        }

        /* =================================================
           RIGHT SIDE
        ================================================= */

        .energy-side {
          width: 100%;
        }

        /* =================================================
           IMAGE CARD
        ================================================= */

        .energy-image-card {
          overflow: hidden;

          border: 1px solid var(--energy-border);
          border-radius: 10px;

          background: #fff;

          box-shadow:
            0 3px 15px rgba(20, 30, 50, 0.035);
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

          font-family: "Inter", Arial, sans-serif;
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
          padding: 19px;
        }

        .energy-image-content h2 {
          margin: 0 0 7px;

          color: #252c36;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 700;
        }

        .energy-image-content p {
          margin: 0;

          color: #69717d;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          line-height: 1.5;
        }

        /* =================================================
           EXPECT CARD
        ================================================= */

        .energy-expect-card {
          margin-top: 15px;

          padding: 21px 19px;

          border: 1px solid var(--energy-border);
          border-radius: 10px;

          background: #fff;

          box-shadow:
            0 3px 15px rgba(20, 30, 50, 0.035);
        }

        .energy-expect-title {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 19px;

          color: var(--energy-beetroot);

          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.3;
          font-weight: 700;
        }

        .energy-expect-item {
          display: grid;

          grid-template-columns:
            31px minmax(0, 1fr);

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

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 800;
        }

        .energy-expect-item h3 {
          margin: 1px 0 5px;

          color: #252b34;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
        }

        .energy-expect-item p {
          margin: 0;

          color: #707782;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.45;
        }

        /* =================================================
           HELP CARD
        ================================================= */

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

        .energy-help-content {
          min-width: 0;
        }

        .energy-help-content h3 {
          margin: 0 0 5px;

          color: #282e37;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
        }

        .energy-help-content p {
          margin: 0 0 6px;

          color: #727983;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.45;
        }

        .energy-email {
          display: flex;
          align-items: center;

          gap: 5px;

          color: var(--energy-beetroot);

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 700;
        }

        /* =================================================
           TABLET
           40px LEFT / RIGHT
        ================================================= */

        @media (max-width: 1100px) {
          .energy-page {
            padding-left: 40px;
            padding-right: 40px;
          }

          .energy-main-grid {
            grid-template-columns:
              minmax(0, 1.35fr)
              minmax(300px, 0.85fr);

            gap: 25px;
          }

          .energy-form-card {
            padding: 28px;
          }
        }

        /* =================================================
           SMALL TABLET
        ================================================= */

        @media (max-width: 900px) {
          .energy-main-grid {
            grid-template-columns: 1fr;
          }

          .energy-side {
            display: grid;

            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 15px;
          }

          .energy-image-card {
            grid-column: 1 / -1;
          }

          .energy-expect-card,
          .energy-help-card {
            margin-top: 0;
          }
        }

        /* =================================================
           MOBILE
           24px LEFT / RIGHT
        ================================================= */

        @media (max-width: 700px) {
          .energy-page {
            padding-top: 40px;
            padding-bottom: 55px;

            padding-left: 24px;
            padding-right: 24px;
          }

          .energy-hero {
            margin-bottom: 30px;
          }

          .energy-eyebrow {
            font-size: 9px;
            letter-spacing: 0.8px;
          }

          .energy-hero h1 {
            max-width: 100%;

            font-size: 31px;
            line-height: 1.12;

            letter-spacing: -1.1px;
          }

          .energy-hero-description {
            max-width: 100%;

            margin-top: 16px;

            font-size: 12px;
            line-height: 1.6;
          }

          .energy-pills {
            gap: 6px;
          }

          .energy-pill {
            padding: 6px 8px;

            font-size: 8.5px;
          }

          .energy-main-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .energy-form-card {
            padding: 23px 19px;
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

          .energy-side {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .energy-expect-card,
          .energy-help-card {
            margin-top: 0;
          }

          .energy-image {
            aspect-ratio: 1.6 / 1;
          }

          .energy-image-label {
            left: 3%;
            bottom: 6%;

            min-height: 28px;

            padding: 0 8px;

            gap: 4px;

            font-size: 7px;

            border-radius: 4px;
          }

          .energy-label-dot {
            width: 5px;
            height: 5px;
          }

          .energy-image-content {
            padding: 17px;
          }

          .energy-image-content h2 {
            font-size: 15px;
          }

          .energy-expect-title {
            font-size: 13px;
          }

          .energy-expect-item {
            grid-template-columns:
              27px minmax(0, 1fr);
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

        /* =================================================
           SMALL MOBILE
           16px LEFT / RIGHT
        ================================================= */

        @media (max-width: 480px) {
          .energy-page {
            padding-top: 32px;
            padding-bottom: 45px;

            padding-left: 16px;
            padding-right: 16px;
          }

          .energy-hero h1 {
            font-size: 27px;
            letter-spacing: -0.8px;
          }

          .energy-hero-description {
            font-size: 11.5px;
          }

          .energy-form-card {
            padding: 19px 15px;
          }

          .energy-form-heading h2 {
            font-size: 15px;
          }

          .energy-form-heading p {
            font-size: 10px;
          }

          .energy-input,
          .energy-select {
            height: 38px;
          }

          .energy-option {
            font-size: 9px;
          }

          .energy-stage {
            min-height: 42px;
          }

          .energy-submit {
            height: 40px;
            font-size: 10px;
          }

          .energy-privacy {
            font-size: 7.5px;
          }

          .energy-image-label {
            font-size: 6.5px;
          }

          .energy-help-content h3 {
            font-size: 12px;
          }
        }

        /* =================================================
           VERY SMALL DEVICES
        ================================================= */

        @media (max-width: 340px) {
          .energy-page {
            padding-left: 16px;
            padding-right: 16px;
          }

          .energy-hero h1 {
            font-size: 24px;
          }

          .energy-form-card {
            padding: 17px 13px;
          }

          .energy-pill {
            font-size: 8px;
          }

          .energy-image-label {
            font-size: 6px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .energy-option,
          .energy-stage,
          .energy-input,
          .energy-select,
          .energy-textarea,
          .energy-submit {
            transition: none;
          }

          .energy-alert {
            animation: none;
          }
        }
      `}</style>

      {/* =================================================
          SUCCESS ALERT
      ================================================= */}

      {showAlert && (
        <div className="energy-alert" role="alert">
          <div className="energy-alert-left">
            <ShieldCheck size={16} />

            <span>
              Inquiry submitted successfully!
            </span>
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

        {/* =================================================
            HERO
        ================================================= */}

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

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="energy-main-grid">

          {/* =================================================
              FORM
          ================================================= */}

          <section className="energy-form-card">

            <div className="energy-form-heading">

              <h2>
                Consultation Intake Form
              </h2>

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
                    Full Name{" "}
                    <span className="energy-required">*</span>
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
                  <label>
                    Phone Number
                  </label>

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
                      <option value="">
                        Select your business area
                      </option>

                      {BUSINESS_AREAS.map((area) => (
                        <option
                          key={area}
                          value={area}
                        >
                          {area}
                        </option>
                      ))}
                    </select>

                    <div className="energy-select-arrow">
                      <ArrowRight
                        size={13}
                        style={{
                          transform: "rotate(90deg)",
                        }}
                      />
                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  TECHNOLOGY AREAS
              ================================================= */}

              <div className="energy-section">

                <label className="energy-section-label">
                  Technology Areas of Interest{" "}
                  <span className="energy-required">*</span>
                </label>

                <div className="energy-options">

                  {TECHNOLOGY_AREAS.map((technology) => {
                    const active =
                      selectedTechnology.includes(technology);

                    return (
                      <button
                        type="button"
                        key={technology}
                        className={`energy-option ${
                          active ? "active" : ""
                        }`}
                        onClick={() =>
                          toggleTechnology(technology)
                        }
                      >
                        {technology}
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* =================================================
                  PROJECT STAGE
              ================================================= */}

              <div className="energy-section">

                <label className="energy-section-label">
                  Current Project Stage
                </label>

                <div className="energy-stage-grid">

                  {PROJECT_STAGES.map((stage) => {
                    const active =
                      selectedStage === stage;

                    return (
                      <button
                        type="button"
                        key={stage}
                        className={`energy-stage ${
                          active ? "active" : ""
                        }`}
                        onClick={() =>
                          setSelectedStage(
                            active ? "" : stage
                          )
                        }
                      >
                        <span className="energy-radio" />

                        <span>
                          {stage}
                        </span>
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* =================================================
                  REQUIREMENT
              ================================================= */}

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

              {/* =================================================
                  CONTACT METHOD
              ================================================= */}

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
                          checked={
                            contactMethod === "Email"
                          }
                          onChange={(e) =>
                            setContactMethod(
                              e.target.value
                            )
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
                          checked={
                            contactMethod === "Phone"
                          }
                          onChange={(e) =>
                            setContactMethod(
                              e.target.value
                            )
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
                          <option
                            key={time}
                            value={time}
                          >
                            {time}
                          </option>
                        ))}
                      </select>

                      <div className="energy-select-arrow">

                        <ArrowRight
                          size={13}
                          style={{
                            transform: "rotate(90deg)",
                          }}
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  CONSENT
              ================================================= */}

              <label className="energy-consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />

                <span>
                  I agree to be contacted by TechTorch regarding
                  my enquiry and technology requirements.
                </span>

              </label>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <button
                type="submit"
                className="energy-submit"
              >
                SUBMIT ENQUIRY

                <ArrowRight size={14} />
              </button>

              {/* PRIVACY */}

              <div className="energy-privacy">

                <LockKeyhole size={11} />

                <span>
                  Your information will be used to respond to
                  your enquiry. Please review our Privacy Policy
                  for more information.
                </span>

              </div>

            </form>

          </section>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

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

                <h2>
                  Discuss Your Technology Requirements
                </h2>

                <p>
                  Connect with the TechTorch team to discuss ERP,
                  operations, software development, cloud
                  infrastructure, cybersecurity and digital
                  technology requirements.
                </p>

              </div>

            </div>

            {/* =================================================
                EXPECT CARD
            ================================================= */}

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

                  <h3>
                    Understand Your Requirement
                  </h3>

                  <p>
                    We review your business objectives,
                    existing environment and technology
                    requirements.
                  </p>

                </div>

              </div>

              <div className="energy-expect-item">

                <div className="energy-step-number">
                  02
                </div>

                <div>

                  <h3>
                    Discuss Relevant Solutions
                  </h3>

                  <p>
                    Our team discusses relevant technology
                    capabilities and possible approaches
                    based on your requirements.
                  </p>

                </div>

              </div>

              <div className="energy-expect-item">

                <div className="energy-step-number">
                  03
                </div>

                <div>

                  <h3>
                    Define the Next Steps
                  </h3>

                  <p>
                    Based on the discussion, we identify the
                    appropriate approach and next steps for
                    your project or business requirement.
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                HELP CARD
            ================================================= */}

            <div className="energy-help-card">

              <div className="energy-help-icon">
                <Mail size={13} />
              </div>

              <div className="energy-help-content">

                <h3>
                  Need to Discuss Your Requirement?
                </h3>

                <p>
                  Connect with the TechTorch team to discuss
                  your business or technology requirements.
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