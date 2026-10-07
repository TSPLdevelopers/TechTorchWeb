import React, { useState } from "react";
import { CircleCheck } from "lucide-react";

const helpOptions = [
  {
    title: "ERP Solutions",
    description: "Business processes, finance, people and supply chain.",
  },
  {
    title: "Operations Management",
    description: "Operational processes and workflow support.",
  },
  {
    title: "Supply Chain Management",
    description: "Procurement, inventory, suppliers and logistics.",
  },
  {
    title: "Financial Management",
    description: "Financial operations, records and reporting.",
  },
  {
    title: "CRM Solutions",
    description: "Customer information and relationship management.",
  },
  {
    title: "E-Commerce",
    description: "Digital commerce and online business requirements.",
  },
  {
    title: "Web Portals",
    description:
      "Digital portals for customers, employees and business users.",
  },
  {
    title: "Project Management",
    description:
      "Project planning, collaboration and workflow management.",
  },
];

const technologyOptions = [
  "ERP & Business Solutions",
  "Supply Chain Management",
  "Software Development",
  "System Integration",
  "Cloud Infrastructure",
  "Cyber Security",
  "Digital Applications",
  "Technology Support",
];

const projectStages = [
  "Initial Discussion",
  "Requirement Planning",
  "Existing System Improvement",
  "Software Development",
  "System Implementation",
  "Technology Support",
  "Exploring Options",
];

const consultationCards = [
  {
    number: "01",
    title: "Business-Focused",
    description:
      "Technology discussions based on your business requirements and operational needs.",
  },
  {
    number: "02",
    title: "Connected Solutions",
    description:
      "Explore relevant business solutions and technology services across your requirements.",
  },
  {
    number: "03",
    title: "Flexible Requirements",
    description:
      "Discuss new technology requirements, existing systems or opportunities for improvement.",
  },
  {
    number: "04",
    title: "Clear Next Steps",
    description:
      "Understand the relevant capabilities and possible next steps for your requirement.",
  },
];

const FMCGGetInTouch = () => {
  const [selectedHelp, setSelectedHelp] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [projectStage, setProjectStage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    requirement: "",
  });

  const handleHelpChange = (title) => {
    setSelectedHelp((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleTechnologyChange = (technology) => {
    setSelectedTechnology((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    console.log({
      ...formData,
      helpAreas: selectedHelp,
      technologyRequirements: selectedTechnology,
      projectStage,
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

        * {
          box-sizing: border-box;
        }

        /* =========================
           SUCCESS DIALOG
        ========================= */

        .fmcg-success-dialog {
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
          animation: fmcgSuccessDialogIn 0.25s ease-out;
        }

        .fmcg-success-dialog-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #22824D;
        }

        .fmcg-success-dialog-content {
          min-width: 0;
        }

        .fmcg-success-dialog-title {
          margin: 0;
          color: #202022;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .fmcg-success-dialog-text {
          margin: 2px 0 0;
          color: #65595E;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        .fmcg-success-dialog-ok {
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

        .fmcg-success-dialog-ok:hover {
          background: #620038;
          transform: scale(1.05);
        }

        @keyframes fmcgSuccessDialogIn {
          from {
            opacity: 0;
            transform: translate(-50%, -12px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        /* =========================
           GLOBAL
        ========================= */

        .fmcg-page {
          --beetroot: #730042;
          --dark: #202124;
          --text: #5f6063;
          --light-text: #77787b;
          --card-bg: #f4f4f5;
          --page-bg: #f8f9fa;
          --white: #ffffff;

          width: 100%;
          min-height: 100vh;
          padding: 70px 40px;
          background: var(--page-bg);
          color: var(--dark);

          font-family: "Inter", Arial, sans-serif;

          overflow: hidden;
        }

        /* =========================
           HERO
        ========================= */

        .fmcg-hero {
          width: min(1280px, 100%);
          margin: 0 auto 45px;

          display: grid;
          grid-template-columns:
            minmax(0, 1.55fr)
            minmax(330px, 0.9fr);

          gap: 35px;
          align-items: stretch;
        }

        .fmcg-hero-left {
          min-width: 0;
          padding-top: 3px;
        }

        .fmcg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 7px 13px;
          margin-bottom: 17px;

          border-radius: 30px;
          background: #eee7eb;

          color: var(--beetroot);

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .fmcg-eyebrow span {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;

          background: var(--beetroot);
          border-radius: 50%;
        }

        /* Main heading = Plus Jakarta Sans */

        .fmcg-hero h1 {
          max-width: 760px;
          margin: 0;

          color: var(--dark);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.12;
          font-weight: 600;
          letter-spacing: -1.7px;
        }

        /* Subheading = Plus Jakarta Sans */

        .fmcg-hero-description {
          max-width: 760px;
          margin: 20px 0 30px;

          color: #626366;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =========================
           CONSULTATION CARDS
        ========================= */

        .consultation-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 13px;
        }

        .consultation-card {
          min-height: 115px;
          padding: 19px;

          background: var(--white);
          border: 1px solid #ededee;
          border-radius: 11px;

          box-shadow: 0 2px 7px rgba(0, 0, 0, 0.025);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .consultation-card:hover {
          transform: translateY(-3px);
          border-color: rgba(115, 0, 66, 0.15);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }

        .consultation-title {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .consultation-title span {
          color: var(--beetroot);

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .consultation-title h3 {
          margin: 0;

          color: var(--dark);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.3;
          font-weight: 700;
        }

        .consultation-card p {
          margin: 11px 0 0;

          color: #626366;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.6;
        }

        /* =========================
           HERO IMAGE
        ========================= */

        .fmcg-hero-image-wrapper {
          position: relative;

          min-height: 500px;

          overflow: hidden;

          border-radius: 17px;

          background: #ddd;

          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .fmcg-hero-image {
          width: 100%;
          height: 100%;
          min-height: 500px;

          display: block;

          object-fit: cover;
          object-position: center;
        }

        .fmcg-image-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          padding: 32px 26px 25px;

          background: linear-gradient(
            to bottom,
            rgba(115, 0, 66, 0.02),
            rgba(115, 0, 66, 0.92)
          );

          color: white;
        }

        .image-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 9px;

          color: white;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .image-badge span {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;

          border-radius: 50%;
          background: #b8f3a5;
        }

        .fmcg-image-overlay h2 {
          margin: 0 0 8px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 700;
        }

        .fmcg-image-overlay p {
          max-width: 450px;
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.65;

          color: rgba(255, 255, 255, 0.94);
        }

        /* =========================
           FORM CARD
        ========================= */

        .fmcg-form-card {
          width: min(1280px, 100%);
          margin: 0 auto;

          padding: 45px 45px 40px;

          background: var(--white);
          border-radius: 16px;

          box-shadow:
            0 2px 5px rgba(0, 0, 0, 0.04),
            0 5px 18px rgba(0, 0, 0, 0.04);
        }

        /* Heading = Plus Jakarta Sans */

        .fmcg-form-intro h2 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 29px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        /* Subheading = Plus Jakarta Sans */

        .fmcg-form-intro p {
          max-width: 850px;
          margin: 9px 0 0;

          color: #626366;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          font-weight: 500;
        }

        .fmcg-divider {
          width: 100%;
          height: 1px;

          margin: 21px 0 38px;

          background: #e9e9ea;
        }

        /* =========================
           FORM SECTIONS
        ========================= */

        .fmcg-form-section {
          margin-bottom: 40px;
        }

        .section-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          gap: 20px;
          margin-bottom: 22px;
        }

        .section-heading-row h3 {
          display: flex;
          align-items: center;
          gap: 10px;

          margin: 0;

          color: var(--dark);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 700;
        }

        .section-heading-row h3 span {
          color: var(--beetroot);

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 800;
        }

        .section-heading-row p {
          margin: 5px 0 0;

          color: #626366;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.5;
        }

        .select-label {
          padding-top: 4px;

          color: #626366;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          line-height: 1.2;
          font-weight: 700;

          letter-spacing: 0.16em;

          white-space: nowrap;
        }

        /* =========================
           HELP CARDS
        ========================= */

        .help-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 14px;
        }

        .help-card {
          position: relative;

          display: flex;
          align-items: center;

          gap: 11px;

          min-height: 72px;

          padding: 14px 16px;

          background: var(--card-bg);

          border: 1px solid transparent;
          border-radius: 10px;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .help-card:hover {
          border-color: rgba(115, 0, 66, 0.22);
        }

        .help-card input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .custom-checkbox {
          flex: 0 0 17px;

          width: 17px;
          height: 17px;

          border: 1.5px solid #999;
          border-radius: 3px;

          background: white;
        }

        .help-card input:checked + .custom-checkbox {
          border-color: var(--beetroot);
          background: var(--beetroot);
        }

        .help-card input:checked + .custom-checkbox::after {
          content: "✓";

          display: flex;
          align-items: center;
          justify-content: center;

          height: 100%;

          color: white;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 800;
        }

        .help-card h4 {
          margin: 0;

          color: var(--dark);

          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 600;
        }

        .help-card p {
          margin: 3px 0 0;

          color: #626366;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.45;
        }

        /* =========================
           TECHNOLOGY
        ========================= */

        .technology-section {
          margin-top: 5px;
        }

        .technology-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .technology-pill {
          padding: 10px 17px;

          border: 0;
          outline: 0;

          border-radius: 30px;

          background: #f1f1f2;
          color: #36373a;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .technology-pill:hover {
          transform: translateY(-1px);
        }

        .technology-pill.active {
          background: var(--beetroot);
          color: white;
        }

        /* =========================
           PROJECT STAGE
        ========================= */

        .stage-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .stage-card {
          position: relative;

          display: flex;
          align-items: center;

          gap: 10px;

          min-height: 58px;

          padding: 11px 13px;

          background: var(--card-bg);

          border: 1px solid transparent;
          border-radius: 8px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.35;

          cursor: pointer;
        }

        .stage-card:hover {
          border-color: rgba(115, 0, 66, 0.2);
        }

        .stage-card input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .custom-radio {
          flex: 0 0 15px;

          width: 15px;
          height: 15px;

          border: 1.5px solid #999;
          border-radius: 50%;

          background: white;
        }

        .stage-card input:checked + .custom-radio {
          border-color: var(--beetroot);

          box-shadow: inset 0 0 0 3px white;

          background: var(--beetroot);
        }

        /* =========================
           CONTACT
        ========================= */

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 21px 25px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
        }

        .input-group.full-width {
          grid-column: 1 / -1;
        }

        .input-group label {
          margin-bottom: 9px;

          color: var(--dark);

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.2;
          font-weight: 600;
        }

        .input-group label span {
          color: var(--beetroot);
        }

        .input-group input,
        .input-group textarea {
          width: 100%;

          border: 1px solid transparent;
          outline: none;

          border-radius: 7px;

          background: var(--card-bg);
          color: #333;

          font-family: "Inter", sans-serif;
          font-size: 12px;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .input-group input {
          height: 50px;
          padding: 0 15px;
        }

        .input-group textarea {
          min-height: 110px;
          padding: 14px 15px;

          resize: vertical;
        }

        .input-group input::placeholder,
        .input-group textarea::placeholder {
          color: #8a8b8e;
          opacity: 1;
        }

        .input-group input:focus,
        .input-group textarea:focus {
          border-color: rgba(115, 0, 66, 0.3);
          background: #f8f8f9;
        }

        /* =========================
           CONSENT
        ========================= */

        .consent-row {
          position: relative;

          display: flex;
          align-items: center;

          gap: 11px;

          margin-top: 25px;

          color: #414246;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.5;

          cursor: pointer;
        }

        .consent-row input {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .consent-checkbox {
          flex: 0 0 16px;

          width: 16px;
          height: 16px;

          border-radius: 2px;
          border: 1px solid #888;

          background: white;
        }

        .consent-row input:checked + .consent-checkbox {
          background: var(--beetroot);
          border-color: var(--beetroot);
        }

        .consent-row input:checked + .consent-checkbox::after {
          content: "✓";

          display: flex;
          align-items: center;
          justify-content: center;

          height: 100%;

          color: white;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 800;
        }

        /* =========================
           FORM BOTTOM
        ========================= */

        .form-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 25px;

          margin-top: 45px;
        }

        .form-note {
          max-width: 600px;
        }

        .form-note p {
          margin: 0;

          color: #85868a;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.6;
        }

        .form-note p + p {
          margin-top: 2px;
        }

        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          min-width: 190px;
          height: 50px;

          padding: 0 15px;

          border: 0;
          border-radius: 9px;

          background: var(--beetroot);
          color: white;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.05em;

          cursor: pointer;

          box-shadow: 0 3px 7px rgba(115, 0, 66, 0.15);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(115, 0, 66, 0.2);
        }

        .submit-arrow {
          font-size: 18px;
          line-height: 1;
        }

        /* =========================
           1200px
        ========================= */

        @media (max-width: 1200px) {
          .fmcg-page {
            padding: 55px 30px;
          }

          .fmcg-hero {
            grid-template-columns:
              minmax(0, 1.3fr)
              minmax(300px, 0.85fr);

            gap: 25px;
          }

          .fmcg-hero h1 {
            font-size: 41px;
          }

          .fmcg-form-card {
            padding: 40px 35px;
          }
        }

        /* =========================
           1000px
        ========================= */

        @media (max-width: 1000px) {
          .fmcg-hero {
            grid-template-columns: 1fr;
          }

          .fmcg-hero-image-wrapper {
            min-height: 420px;
          }

          .fmcg-hero-image {
            min-height: 420px;
          }

          .stage-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* =========================
           800px
        ========================= */

        @media (max-width: 800px) {
          .fmcg-page {
            padding: 45px 24px;
          }

          .fmcg-hero h1 {
            font-size: 37px;
          }

          .fmcg-form-card {
            padding: 32px 27px;
          }

          .stage-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .form-bottom {
            align-items: stretch;
          }
        }

        /* =========================
           600px MOBILE
        ========================= */

        @media (max-width: 600px) {
          .fmcg-success-dialog {
            top: 16px;
            width: calc(100% - 28px);
            padding: 14px 16px;
          }

          .fmcg-success-dialog-title {
            font-size: 13px;
          }

          .fmcg-success-dialog-text {
            font-size: 11px;
          }

          .fmcg-success-dialog-icon {
            width: 40px;
            height: 40px;
          }

          .fmcg-success-dialog-icon svg {
            width: 28px;
            height: 28px;
          }

          .fmcg-page {
            padding: 35px 16px 45px;
          }

          .fmcg-hero {
            margin-bottom: 25px;
            gap: 22px;
          }

          .fmcg-eyebrow {
            padding: 6px 10px;
            margin-bottom: 13px;

            font-size: 9px;
          }

          .fmcg-hero h1 {
            font-size: 29px;
            line-height: 1.15;
            letter-spacing: -0.8px;
          }

          .fmcg-hero-description {
            margin: 14px 0 22px;

            font-size: 12px;
            line-height: 1.7;
          }

          .consultation-grid {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .consultation-card {
            min-height: auto;
            padding: 15px;
          }

          .consultation-title h3 {
            font-size: 14px;
          }

          .consultation-card p {
            margin-top: 8px;
            font-size: 11px;
          }

          .fmcg-hero-image-wrapper {
            min-height: 360px;
            border-radius: 13px;
          }

          .fmcg-hero-image {
            min-height: 360px;
          }

          .fmcg-image-overlay {
            padding: 22px 17px 18px;
          }

          .fmcg-image-overlay h2 {
            font-size: 17px;
          }

          .fmcg-image-overlay p {
            font-size: 10px;
          }

          .fmcg-form-card {
            padding: 25px 17px;
            border-radius: 13px;
          }

          .fmcg-form-intro h2 {
            font-size: 23px;
            letter-spacing: -0.5px;
          }

          .fmcg-form-intro p {
            font-size: 11px;
            line-height: 1.65;
          }

          .fmcg-divider {
            margin: 17px 0 28px;
          }

          .fmcg-form-section {
            margin-bottom: 31px;
          }

          .section-heading-row {
            display: block;
            margin-bottom: 17px;
          }

          .section-heading-row h3 {
            font-size: 15px;
          }

          .section-heading-row p {
            margin-top: 6px;
            font-size: 10px;
          }

          .select-label {
            display: block;
            margin-top: 8px;
            font-size: 8px;
          }

          .help-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .help-card {
            min-height: 64px;
            padding: 13px;
          }

          .help-card h4 {
            font-size: 12px;
          }

          .help-card p {
            font-size: 10px;
          }

          .technology-pills {
            gap: 7px;
          }

          .technology-pill {
            padding: 8px 11px;
            font-size: 9px;
          }

          .stage-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .stage-card {
            min-height: 50px;
            padding: 10px 12px;
            font-size: 11px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .input-group.full-width {
            grid-column: auto;
          }

          .input-group label {
            font-size: 11px;
          }

          .input-group input {
            height: 47px;
          }

          .input-group textarea {
            min-height: 120px;
          }

          .consent-row {
            align-items: flex-start;
            font-size: 10px;
          }

          .form-bottom {
            flex-direction: column;
            align-items: stretch;
            gap: 23px;
            margin-top: 32px;
          }

          .submit-button {
            width: 100%;
            min-width: 0;
            height: 48px;
          }

          .form-note {
            max-width: 100%;
          }

          .form-note p {
            font-size: 9px;
          }
        }

        /* =========================
           400px
        ========================= */

        @media (max-width: 400px) {
          .fmcg-page {
            padding: 30px 12px 40px;
          }

          .fmcg-hero h1 {
            font-size: 26px;
          }

          .fmcg-hero-description {
            font-size: 11px;
          }

          .fmcg-hero-image-wrapper {
            min-height: 310px;
          }

          .fmcg-hero-image {
            min-height: 310px;
          }

          .fmcg-image-overlay h2 {
            font-size: 15px;
          }

          .fmcg-image-overlay p {
            font-size: 9px;
          }

          .fmcg-form-card {
            padding: 22px 14px;
          }

          .fmcg-form-intro h2 {
            font-size: 20px;
          }

          .section-heading-row h3 {
            font-size: 14px;
          }

          .technology-pill {
            font-size: 8.5px;
            padding: 7px 9px;
          }
        }

        /* =========================
           340px
        ========================= */

        @media (max-width: 340px) {
          .fmcg-page {
            padding: 25px 10px 35px;
          }

          .fmcg-hero h1 {
            font-size: 23px;
          }

          .fmcg-hero-image-wrapper {
            min-height: 275px;
          }

          .fmcg-hero-image {
            min-height: 275px;
          }

          .fmcg-form-card {
            padding: 19px 12px;
          }

          .fmcg-form-intro h2 {
            font-size: 18px;
          }

          .section-heading-row h3 {
            font-size: 13px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .consultation-card,
          .technology-pill,
          .submit-button {
            transition: none;
          }

          .consultation-card:hover,
          .technology-pill:hover,
          .submit-button:hover {
            transform: none;
          }
        }
      `}</style>

      {showSuccess && (
        <div className="fmcg-success-dialog" role="alert">
          <div className="fmcg-success-dialog-icon">
            <CircleCheck size={32} strokeWidth={2.2} />
          </div>

          <div className="fmcg-success-dialog-content">
            <p className="fmcg-success-dialog-title">
              Request Submitted
            </p>
            <p className="fmcg-success-dialog-text">
              Thank you! Our team will review your enquiry and get in touch with you.
            </p>
          </div>

          <button
            type="button"
            className="fmcg-success-dialog-ok"
            onClick={() => setShowSuccess(false)}
            aria-label="Close success message"
          >
            OK
          </button>
        </div>
      )}

      <main className="fmcg-page">

        {/* =========================
            HERO
        ========================= */}

        <section className="fmcg-hero">

          <div className="fmcg-hero-left">

            <div className="fmcg-eyebrow">
              <span></span>
              FMCG TECHNOLOGY · CONSULTATION
            </div>

            <h1>
              Discuss Your FMCG Technology
              <br className="desktop-break" />
              Requirements
            </h1>

            <p className="fmcg-hero-description">
              Connect with the TechTorch team to discuss your FMCG business and
              technology requirements across ERP, operations management, supply
              chain, financial management, CRM, software and digital solutions.
            </p>

            <div className="consultation-grid">
              {consultationCards.map((card) => (
                <div
                  className="consultation-card"
                  key={card.number}
                >
                  <div className="consultation-title">
                    <span>{card.number}</span>

                    <h3>{card.title}</h3>
                  </div>

                  <p>{card.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* =========================
              HERO IMAGE
          ========================= */}

          <div className="fmcg-hero-image-wrapper">

            <img
              src="/FMCGGetInTouch.png"
              alt="FMCG Technology Consultation"
              className="fmcg-hero-image"
            />

            <div className="fmcg-image-overlay">

              <div className="image-badge">
                <span></span>
                FMCG TECHNOLOGY
              </div>

              <h2>
                Business-Focused Technology Consultation
              </h2>

              <p>
                Discuss your business processes, technology requirements and
                digital initiatives with the TechTorch team.
              </p>

            </div>

          </div>

        </section>

        {/* =========================
            FORM CARD
        ========================= */}

        <section className="fmcg-form-card">

          <div className="fmcg-form-intro">

            <h2>
              Tell Us About Your FMCG Requirements
            </h2>

            <p>
              Share a few details about your business or technology
              requirement. Our team can review your enquiry and connect with
              you to discuss the appropriate next steps.
            </p>

          </div>

          <div className="fmcg-divider"></div>

          <form onSubmit={handleSubmit}>

            {/* =========================
                01 HELP
            ========================= */}

            <section className="fmcg-form-section">

              <div className="section-heading-row">

                <div>
                  <h3>
                    <span>01</span>
                    What Can We Help You With?
                  </h3>

                  <p>
                    Select the technology or business area you would like to
                    discuss.
                  </p>
                </div>

                <span className="select-label">
                  SELECT ALL THAT APPLY
                </span>

              </div>

              <div className="help-grid">

                {helpOptions.map((item) => {
                  const selected = selectedHelp.includes(item.title);

                  return (
                    <label
                      className="help-card"
                      key={item.title}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() =>
                          handleHelpChange(item.title)
                        }
                      />

                      <span className="custom-checkbox"></span>

                      <div>
                        <h4>{item.title}</h4>

                        <p>{item.description}</p>
                      </div>
                    </label>
                  );
                })}

              </div>

            </section>

            {/* =========================
                02 TECHNOLOGY
            ========================= */}

            <section className="fmcg-form-section technology-section">

              <div className="section-heading-row">

                <div>
                  <h3>
                    <span>02</span>
                    Technology Requirements
                  </h3>
                </div>

                <span className="select-label">
                  SELECT RELEVANT AREAS
                </span>

              </div>

              <div className="technology-pills">

                {technologyOptions.map((item) => {
                  const selected =
                    selectedTechnology.includes(item);

                  return (
                    <button
                      type="button"
                      key={item}
                      className={`technology-pill ${
                        selected ? "active" : ""
                      }`}
                      onClick={() =>
                        handleTechnologyChange(item)
                      }
                    >
                      {item}
                    </button>
                  );
                })}

              </div>

            </section>

            {/* =========================
                03 PROJECT STAGE
            ========================= */}

            <section className="fmcg-form-section">

              <div className="section-heading-row">

                <div>
                  <h3>
                    <span>03</span>
                    Current Project Stage
                  </h3>
                </div>

              </div>

              <div className="stage-grid">

                {projectStages.map((stage) => (
                  <label
                    className="stage-card"
                    key={stage}
                  >
                    <input
                      type="radio"
                      name="projectStage"
                      value={stage}
                      checked={projectStage === stage}
                      onChange={(e) =>
                        setProjectStage(e.target.value)
                      }
                    />

                    <span className="custom-radio"></span>

                    <span>{stage}</span>
                  </label>
                ))}

              </div>

            </section>

            {/* =========================
                04 CONTACT DETAILS
            ========================= */}

            <section className="fmcg-form-section">

              <div className="section-heading-row">

                <div>
                  <h3>
                    <span>04</span>
                    Contact &amp; Project Details
                  </h3>
                </div>

              </div>

              <div className="contact-grid">

                <div className="input-group">

                  <label>
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>
                    Business Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>
                    Company / Organization <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company or organization"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />

                </div>

                <div className="input-group full-width">

                  <label>
                    Tell Us About Your Requirement
                  </label>

                  <textarea
                    name="requirement"
                    placeholder="Briefly describe your business requirement, current technology environment, project objectives or the challenge you would like to discuss."
                    value={formData.requirement}
                    onChange={handleInputChange}
                  />

                </div>

              </div>

              {/* CONSENT */}

              <label className="consent-row">

                <input
                  type="checkbox"
                />

                <span className="consent-checkbox"></span>

                <span>
                  I agree to be contacted by TechTorch regarding my enquiry
                  and technology requirements.
                </span>

              </label>

              {/* FORM BOTTOM */}

              <div className="form-bottom">

                <div className="form-note">

                  <p>
                    Your information will be used to respond to your enquiry
                    and discuss your requirements.
                  </p>

                  <p>
                    Our team will review your enquiry and connect with you
                    regarding the next steps.
                  </p>

                </div>

                <button
                  type="submit"
                  className="submit-button"
                >
                  <span>SUBMIT ENQUIRY</span>

                  <span className="submit-arrow">
                    →
                  </span>
                </button>

              </div>

            </section>

          </form>

        </section>

      </main>
    </>
  );
};

export default FMCGGetInTouch;