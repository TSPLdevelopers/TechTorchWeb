import React, { useState } from "react";

const assistanceOptions = [
  {
    title: "E-Commerce Solutions",
    description:
      "Online storefronts, product management and digital commerce requirements.",
  },
  {
    title: "Product Management",
    description: "Product listings, inventory, pricing and promotions.",
  },
  {
    title: "Payment Processing",
    description: "Online payments and transaction-related requirements.",
  },
  {
    title: "Customer Relationship Management",
    description: "Customer information, preferences and purchase history.",
  },
  {
    title: "Analytics & Reporting",
    description: "Sales performance, customer trends and website activity.",
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Digital applications for business and customer requirements.",
  },
  {
    title: "Software & System Integration",
    description: "Connecting applications and business systems.",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing software maintenance and technical support.",
  },
];

const achievementOptions = [
  "New E-Commerce Solution",
  "Improve Existing E-Commerce Platform",
  "Product & Inventory Management",
  "Payment Integration",
  "Customer Management",
  "Analytics & Reporting",
  "Software Development",
  "System Integration",
  "Existing System Improvement",
  "Technology Support",
  "Exploring Options",
];

const projectStages = [
  "Initial Discussion",
  "Requirement Planning",
  "Existing System Improvement",
  "Development",
  "Implementation",
  "Maintenance & Support",
  "Exploring Options",
];

function EcommerceGetInTouch() {
  const [assistance, setAssistance] = useState([
    "E-Commerce Solutions",
  ]);

  const [achievement, setAchievement] = useState(
    "New E-Commerce Solution"
  );

  const [projectStage, setProjectStage] = useState(
    "Initial Discussion"
  );

  const [contactMethod, setContactMethod] = useState("Email");

  const [formData, setFormData] = useState({
    requirement: "",
    fullName: "",
    email: "",
    company: "",
    phone: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAssistanceChange = (title) => {
    setAssistance((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      assistance,
      achievement,
      projectStage,
      contactMethod,
    });

    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <>
      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        .ecom-page {
          --primary: #730042;
          --primary-dark: #5c0035;
          --text: #171417;
          --muted: #756970;
          --border: #eadfe4;
          --card-bg: #f7f6f7;

          width: 100%;
          min-height: 100vh;

          background: #f7f7f7;

          color: var(--text);

          font-family: "Inter", Arial, sans-serif;

          box-sizing: border-box;
        }

        .ecom-page *,
        .ecom-page *::before,
        .ecom-page *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .ecom-container {
          width: min(100% - 40px, 1180px);
          margin: 0 auto;
        }


        /* =====================================================
           TOP LABEL
        ===================================================== */

        .ecom-brand-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-top: 38px;

          padding: 7px 14px;

          border-radius: 30px;

          background: #f0edf0;

          color: var(--primary);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1;
        }

        .ecom-brand-dot {
          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--primary);
        }


        /* =====================================================
           HERO
        ===================================================== */

        .ecom-hero-section {
          padding: 75px 0 48px;
        }

        .ecom-hero-card {
          position: relative;

          width: 100%;

          padding: 62px 70px 56px;

          overflow: hidden;

          background: #fff;

          border: 1px solid #f0e9ed;

          border-radius: 16px;

          box-shadow: 0 12px 35px rgba(35, 10, 25, 0.035);
        }

        .ecom-hero-card::after {
          content: "";

          position: absolute;

          width: 430px;
          height: 300px;

          right: -120px;
          bottom: -160px;

          background: radial-gradient(
            circle,
            rgba(115, 0, 66, 0.1) 0%,
            rgba(115, 0, 66, 0.04) 40%,
            transparent 72%
          );

          pointer-events: none;
        }


        /* =====================================================
           CONSULTATION BADGE
        ===================================================== */

        .ecom-consultation-badge {
          position: relative;
          z-index: 1;

          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 30px;

          padding: 9px 15px;

          border-radius: 30px;

          background: #fbd9e7;

          color: var(--primary);

          font-size: 10px;
          font-weight: 900;

          letter-spacing: 2px;
          line-height: 1;
        }

        .ecom-consultation-badge span {
          font-size: 13px;
        }


        /* =====================================================
           HERO HEADING
        ===================================================== */

        .ecom-hero-card h1 {
          position: relative;
          z-index: 1;

          max-width: 800px;

          margin: 0;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

         font-size: 38px;

          line-height: 1.08;

          font-weight: 700;
          word-spacing: 6px;
          letter-spacing: -2.5px;

          color: #101010;
        }


        /* =====================================================
           HERO TEXT
        ===================================================== */

        .ecom-hero-card > p {
          position: relative;
          z-index: 1;

          max-width: 850px;

          margin: 28px 0;

          color: #76666e;
          font-family:
            "Inter",
            sans-serif;
          font-size: 15px;

          line-height: 1.75;
        }


        /* =====================================================
           HERO TAGS
        ===================================================== */

        .ecom-hero-tags {
          position: relative;
          z-index: 1;

          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 9px;
        }

        .ecom-hero-tags > span {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          padding: 9px 13px;

          background: #f8f6f7;

          border: 1px solid #eee7eb;

          border-radius: 7px;

          color: #3f373b;

          font-size: 12px;

          font-weight: 600;
        }

        .tag-icon {
          color: var(--primary);
        }


        /* =====================================================
           FORM SECTION
        ===================================================== */

        .ecom-form-section {
          padding-bottom: 90px;
        }

        .ecom-form-card {
          width: 100%;

          padding: 48px 70px 58px;

          background: #fff;

          border: 1px solid #eee7eb;

          border-radius: 16px;

          box-shadow: 0 10px 35px rgba(35, 10, 25, 0.035);
        }


        /* =====================================================
           FORM INTRO
        ===================================================== */

        .ecom-form-intro h2 {
          margin: 0 0 11px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 22px;

          line-height: 1.3;

          font-weight: 600;

          letter-spacing: -0.7px;
        }

        .ecom-form-intro p {
          max-width: 900px;

          margin: 0;

          color: #786970;
            font-family:
            "Plus Jakarta Sans",
            sans-serif;
          font-size: 15px;

          line-height: 1.7;
        }


        /* =====================================================
           DIVIDER
        ===================================================== */

        .ecom-divider {
          width: 100%;
          height: 1px;

          margin: 28px 0 45px;

          background: #eee8eb;
        }


        /* =====================================================
           SECTION
        ===================================================== */

        .ecom-form-section-block {
          margin-bottom: 42px;
        }

        .ecom-form-section-block:last-child {
          margin-bottom: 0;
        }


        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .ecom-section-heading {
          display: flex;

          align-items: flex-start;

          gap: 12px;

          margin-bottom: 17px;
        }

        .ecom-section-number {
          display: flex;

          align-items: center;

          justify-content: center;

          width: 35px;
          height: 25px;

          flex: 0 0 35px;

          border-radius: 5px;

          background: var(--primary);

          color: #fff;

          font-size: 11px;

          font-weight: 700;

          letter-spacing: 1px;
        }

        .ecom-section-heading h3 {
          margin: 0 0 4px;

          font-family:
            "Plus Jakarta Sans",
            "Inter",
            Arial,
            sans-serif;

          font-size: 19px;

          line-height: 1.3;

          font-weight: 700;

          letter-spacing: -0.35px;
        }

        .ecom-section-heading p {
          margin: 0;

          color: #81747b;
          font-family:
            "Inter",
            sans-serif;
          font-size: 13px;

          line-height: 1.5;
        }


        /* =====================================================
           ASSISTANCE GRID
        ===================================================== */

        .ecom-assistance-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 13px;
        }


        /* =====================================================
           OPTION CARD
        ===================================================== */

        .ecom-option-card {
          position: relative;

          display: flex;

          align-items: flex-start;

          min-height: 88px;

          padding: 17px 18px;

          border: 1px solid var(--border);

          border-radius: 10px;

          background: var(--card-bg);

          cursor: pointer;

          transition: 0.2s ease;
        }

        .ecom-option-card:hover {
          border-color: rgba(115, 0, 66, 0.4);

          box-shadow:
            0 5px 15px rgba(115, 0, 66, 0.05);
        }

        .ecom-option-card input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }


        /* =====================================================
           CHECKBOX
        ===================================================== */

        .ecom-checkbox {
          width: 16px;
          height: 16px;

          flex: 0 0 16px;

          margin-top: 1px;
          margin-right: 13px;

          border: 1.5px solid #b7afb3;

          border-radius: 2px;

          background: #fff;
        }

        .ecom-option-card.selected .ecom-checkbox,
        .ecom-consent input:checked + .ecom-checkbox {
          border-color: var(--primary);

          background: var(--primary);
        }

        .ecom-option-card.selected .ecom-checkbox::after,
        .ecom-consent input:checked + .ecom-checkbox::after {
          content: "✓";

          display: block;

          color: #fff;

          font-size: 10px;

          line-height: 14px;

          text-align: center;
        }


        /* =====================================================
           OPTION TEXT
        ===================================================== */

        .ecom-option-content {
          min-width: 0;
        }

        .ecom-option-content h4 {
          margin: 0 0 6px;

          color: #292326;
          font-family:
            "Plus Jakarta Sans",
            sans-serif;
          font-size: 13px;

          line-height: 1.3;

          font-weight: 600;
        }

        .ecom-option-content p {
          margin: 0;

          color: #82767b;
          font-family:
            "Inter",
            sans-serif;
          font-size: 12px;

          line-height: 1.45;
        }


        /* =====================================================
           ACHIEVEMENT
        ===================================================== */

        .ecom-achievement-list {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;
        }

        .ecom-achievement-pill {
          position: relative;

          display: inline-flex;

          align-items: center;

          padding: 9px 14px;

          border-radius: 20px;

          background: #eeeeef;

          color: #4c4549;

          font-size: 13px;

          line-height: 1;

          font-weight: 600;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .ecom-achievement-pill input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }

        .ecom-achievement-pill.active {
          background: var(--primary);

          color: #fff;
        }


        /* =====================================================
           PROJECT STAGE
        ===================================================== */

        .ecom-stage-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 10px;
        }

        .ecom-stage-card {
          position: relative;

          display: flex;

          align-items: center;

          min-height: 54px;

          padding: 12px 14px;

          border: 1px solid var(--border);

          border-radius: 9px;

          background: var(--card-bg);

          cursor: pointer;

          color: #3d373a;

          font-size: 13px;

          font-weight: 600;

          line-height: 1.3;
        }

        .ecom-stage-card input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }

        .ecom-radio {
          width: 14px;
          height: 14px;

          flex: 0 0 14px;

          margin-right: 10px;

          border: 1.5px solid #a9a2a6;

          border-radius: 50%;

          background: #fff;
        }

        .ecom-stage-card.selected .ecom-radio {
          border-color: var(--primary);

          background: var(--primary);

          box-shadow:
            inset 0 0 0 3px #fff;
        }


        /* =====================================================
           TEXTAREA
        ===================================================== */

        .ecom-textarea-wrapper label {
          display: block;

          margin-bottom: 8px;

          color: #393336;

          font-size: 13px;

          font-weight: 600;
        }

        .ecom-textarea-wrapper textarea {
          display: block;

          width: 100%;

          min-height: 105px;

          resize: vertical;

          padding: 15px 16px;

          border: 1px solid var(--border);

          border-radius: 9px;

          outline: none;

          background: var(--card-bg);

          color: #302a2d;

          font-family: inherit;

          font-size: 13px;

          line-height: 1.6;
        }

        .ecom-textarea-wrapper textarea::placeholder {
          color: #ad9da5;
        }

        .ecom-textarea-wrapper textarea:focus {
          border-color: var(--primary);

          box-shadow:
            0 0 0 3px rgba(115, 0, 66, 0.06);
        }


        /* =====================================================
           CONTACT
        ===================================================== */

        .ecom-contact-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px 20px;
        }

        .ecom-field label {
          display: block;

          margin-bottom: 7px;

          color: #393336;

          font-size: 13px;

          font-weight: 600;
        }

        .ecom-field label span {
          color: var(--primary);
        }

        .ecom-field input {
          display: block;

          width: 100%;

          height: 46px;

          padding: 0 15px;

          border: 1px solid var(--border);

          border-radius: 9px;

          outline: none;

          background: var(--card-bg);

          color: #302a2d;

          font-family: inherit;

          font-size: 13px;
        }

        .ecom-field input::placeholder {
          color: #aa9da3;
        }

        .ecom-field input:focus {
          border-color: var(--primary);

          box-shadow:
            0 0 0 3px rgba(115, 0, 66, 0.06);
        }


        /* =====================================================
           CONTACT METHOD
        ===================================================== */

        .ecom-contact-method {
          margin-top: 20px;
        }

        .ecom-contact-method > p {
          margin: 0 0 9px;

          color: #393336;

          font-size: 13px;

          font-weight: 600;
        }

        .ecom-radio-group {
          display: flex;

          align-items: center;

          gap: 22px;
        }

        .ecom-radio-group label {
          position: relative;

          display: inline-flex;

          align-items: center;

          color: #393336;

          font-size: 13px;

          cursor: pointer;
        }

        .ecom-radio-group input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }

        .ecom-radio-group input:checked + .ecom-radio {
          border-color: var(--primary);

          background: var(--primary);

          box-shadow:
            inset 0 0 0 3px #fff;
        }


        /* =====================================================
           CONSENT
        ===================================================== */

        .ecom-consent {
          position: relative;

          display: flex;

          align-items: flex-start;

          margin-top: 24px;

          cursor: pointer;
        }

        .ecom-consent input {
          position: absolute;

          opacity: 0;

          pointer-events: none;
        }

        .ecom-consent .ecom-checkbox {
          margin-top: 2px;

          margin-right: 13px;
        }

        .ecom-consent-content {
          display: flex;

          flex-direction: column;

          gap: 5px;
        }

        .ecom-consent-content strong {
          color: #3b3538;

          font-size: 13px;

          line-height: 1.5;

          font-weight: 500;
        }

        .ecom-consent-content small {
          color: #877a80;

          font-size: 12px;

          line-height: 1.5;
        }


        /* =====================================================
           SUBMIT
        ===================================================== */

        .ecom-submit-wrapper {
          margin-top: 27px;
        }

        .ecom-submit-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-width: 190px;

          height: 48px;

          padding: 0 20px;

          border: none;

          border-radius: 9px;

          background: var(--primary);

          color: #fff;

          font-family: inherit;

          font-size: 12px;

          font-weight: 600;

          letter-spacing: 0.5px;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .ecom-submit-button:hover {
          background: var(--primary-dark);

          transform: translateY(-1px);

          box-shadow:
            0 8px 18px rgba(115, 0, 66, 0.18);
        }

        .ecom-submit-arrow {
          margin-left: auto;

          padding-left: 24px;

          font-size: 14px;

          font-weight: 400;
        }

        .ecom-submit-wrapper > p {
          margin: 11px 0 0;

          color: #8a7d83;

          font-size: 12px;

          line-height: 1.5;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {

          .ecom-container {
            width: min(100% - 36px, 900px);
          }

          .ecom-hero-section {
            padding-top: 55px;
          }

          .ecom-hero-card {
            padding: 48px 50px;
          }

          .ecom-form-card {
            padding: 42px 50px 50px;
          }

          .ecom-hero-card h1 {
            font-size: clamp(40px, 6vw, 58px);
          }

          .ecom-stage-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }


        /* =====================================================
           TABLET / SURFACE
        ===================================================== */

        @media (max-width: 768px) {

          .ecom-container {
            width: min(100% - 30px, 650px);
          }

          .ecom-brand-label {
            margin-top: 25px;

            font-size: 8px;

            letter-spacing: 1.5px;
          }

          .ecom-hero-section {
            padding: 40px 0 30px;
          }

          .ecom-hero-card {
            padding: 38px 32px;
          }

          .ecom-consultation-badge {
            margin-bottom: 22px;

            font-size: 9px;

            letter-spacing: 1.5px;
          }

          .ecom-hero-card h1 {
            font-size: clamp(34px, 7vw, 48px);

            letter-spacing: -1.8px;
          }

          .desktop-break {
            display: none;
          }

          .ecom-hero-card > p {
            margin-top: 20px;

            font-size: 14px;
          }

          .ecom-form-card {
            padding: 35px 32px 40px;
          }

          .ecom-form-intro h2 {
            font-size: 22px;
          }

          .ecom-assistance-grid {
            grid-template-columns: 1fr;
          }

          .ecom-contact-grid {
            grid-template-columns: 1fr;
          }

          .ecom-stage-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .ecom-container {
            width: calc(100% - 24px);
          }

          .ecom-brand-label {
            margin-top: 18px;

            padding: 6px 10px;

            font-size: 7px;

            letter-spacing: 1.1px;
          }

          .ecom-hero-section {
            padding: 25px 0 20px;
          }

          .ecom-hero-card {
            padding: 30px 22px;

            border-radius: 12px;
          }

          .ecom-consultation-badge {
            margin-bottom: 18px;

            padding: 8px 11px;

            font-size: 8px;

            letter-spacing: 1.1px;
          }

          .ecom-hero-card h1 {
            font-size: 32px;

            letter-spacing: -1.3px;
          }

          .ecom-hero-card > p {
            margin: 17px 0 22px;

            font-size: 13px;
          }

          .ecom-hero-tags {
            flex-direction: column;

            align-items: flex-start;
          }

          .ecom-hero-tags > span {
            max-width: 100%;

            white-space: normal;

            font-size: 10px;
          }

          .ecom-form-section {
            padding-bottom: 50px;
          }

          .ecom-form-card {
            padding: 28px 18px 32px;

            border-radius: 12px;
          }

          .ecom-form-intro h2 {
            font-size: 19px;
          }

          .ecom-form-intro p {
            font-size: 12px;
          }

          .ecom-divider {
            margin: 23px 0 30px;
          }

          .ecom-section-heading {
            gap: 9px;
          }

          .ecom-section-number {
            width: 31px;
            height: 23px;

            flex-basis: 31px;

            font-size: 9px;
          }

          .ecom-section-heading h3 {
            font-size: 16px;
          }

          .ecom-section-heading p {
            font-size: 9px;
          }

          .ecom-option-card {
            min-height: auto;

            padding: 14px;
          }

          .ecom-option-content h4 {
            font-size: 11.5px;
          }

          .ecom-option-content p {
            font-size: 9.5px;
          }

          .ecom-achievement-pill {
            padding: 8px 11px;

            font-size: 9.5px;
          }

          .ecom-stage-grid {
            grid-template-columns: 1fr;
          }

          .ecom-stage-card {
            min-height: 48px;

            font-size: 10.5px;
          }

          .ecom-textarea-wrapper textarea {
            min-height: 125px;

            font-size: 11px;
          }

          .ecom-field input {
            height: 43px;

            font-size: 11px;
          }

          .ecom-contact-method {
            margin-top: 17px;
          }

          .ecom-consent-content strong {
            font-size: 10px;
          }

          .ecom-consent-content small {
            font-size: 9px;
          }

          .ecom-submit-button {
            width: 100%;

            height: 46px;

            font-size: 10px;
          }

          .ecom-submit-wrapper > p {
            font-size: 9px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .ecom-container {
            width: calc(100% - 18px);
          }

          .ecom-hero-card {
            padding: 25px 17px;
          }

          .ecom-form-card {
            padding: 24px 14px 28px;
          }

          .ecom-hero-card h1 {
            font-size: 28px;
          }

          .ecom-form-intro h2 {
            font-size: 17px;
          }

          .ecom-section-heading h3 {
            font-size: 14px;
          }

          .ecom-option-card {
            padding: 12px;
          }

          .ecom-option-content h4 {
            font-size: 10.5px;
          }

          .ecom-option-content p {
            font-size: 8.5px;
          }
        }

      `}</style>

      <main className="ecom-page">

        {/* =====================================================
            BRAND LABEL
        ===================================================== */}

        <div className="ecom-container">

          <div className="ecom-brand-label">
            <span className="ecom-brand-dot"></span>

            TECHTORCH / E-COMMERCE TECHNOLOGY
          </div>

        </div>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ecom-hero-section">

          <div className="ecom-container">

            <div className="ecom-hero-card">

              <div className="ecom-consultation-badge">
                <span>✣</span>
                TECHNOLOGY CONSULTATION
              </div>

              <h1>
                Discuss Your E-Commerce
                
                Requirements
              </h1>

              <p>
                Connect with the TechTorch team to discuss your
                e-commerce business and technology requirements across
                online storefronts, product management, payments,
                customer relationships, analytics and software solutions.
              </p>

              <div className="ecom-hero-tags">

                <span>
                  <span className="tag-icon">▣</span>
                  E-Commerce Solutions
                </span>

                <span>
                  <span className="tag-icon">▣</span>
                  Software &amp; Digital Solutions
                </span>

                <span>
                  <span className="tag-icon">⚒</span>
                  Business Technology
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FORM
        ===================================================== */}

        <section className="ecom-form-section">

          <div className="ecom-container">

            <form
              className="ecom-form-card"
              onSubmit={handleSubmit}
            >

              {/* FORM INTRO */}

              <div className="ecom-form-intro">

                <h2>
                  Tell Us About Your E-Commerce Requirements
                </h2>

                <p>
                  Share a few details about your business or technology
                  requirement. Our team can review your enquiry and
                  connect with you to discuss the appropriate next steps.
                </p>

              </div>

              <div className="ecom-divider"></div>


              {/* =================================================
                  01
              ================================================= */}

              <div className="ecom-form-section-block">

                <div className="ecom-section-heading">

                  <span className="ecom-section-number">
                    01
                  </span>

                  <div>

                    <h3>
                      What Can We Help You With?
                    </h3>

                    <p>
                      Select the area you would like to discuss.
                      (Allow multiple selections)
                    </p>

                  </div>

                </div>


                <div className="ecom-assistance-grid">

                  {assistanceOptions.map((option) => {

                    const selected =
                      assistance.includes(option.title);

                    return (
                      <label
                        key={option.title}
                        className={`ecom-option-card ${
                          selected ? "selected" : ""
                        }`}
                      >

                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() =>
                            handleAssistanceChange(option.title)
                          }
                        />

                        <span className="ecom-checkbox"></span>

                        <div className="ecom-option-content">

                          <h4>
                            {option.title}
                          </h4>

                          <p>
                            {option.description}
                          </p>

                        </div>

                      </label>
                    );
                  })}

                </div>

              </div>


              {/* =================================================
                  02
              ================================================= */}

              <div className="ecom-form-section-block">

                <div className="ecom-section-heading">

                  <span className="ecom-section-number">
                    02
                  </span>

                  <div>

                    <h3>
                      What Are You Looking to Achieve?
                    </h3>

                    <p>
                      Select the option that best describes your
                      requirement.
                    </p>

                  </div>

                </div>


                <div className="ecom-achievement-list">

                  {achievementOptions.map((option) => (

                    <label
                      key={option}
                      className={`ecom-achievement-pill ${
                        achievement === option
                          ? "active"
                          : ""
                      }`}
                    >

                      <input
                        type="radio"
                        name="achievement"
                        value={option}
                        checked={
                          achievement === option
                        }
                        onChange={(e) =>
                          setAchievement(e.target.value)
                        }
                      />

                      {option}

                    </label>

                  ))}

                </div>

              </div>


              {/* =================================================
                  03
              ================================================= */}

              <div className="ecom-form-section-block">

                <div className="ecom-section-heading">

                  <span className="ecom-section-number">
                    03
                  </span>

                  <div>

                    <h3>
                      Current Project Stage
                    </h3>

                    <p>
                      Select your current stage.
                    </p>

                  </div>

                </div>


                <div className="ecom-stage-grid">

                  {projectStages.map((stage) => (

                    <label
                      key={stage}
                      className={`ecom-stage-card ${
                        projectStage === stage
                          ? "selected"
                          : ""
                      }`}
                    >

                      <input
                        type="radio"
                        name="projectStage"
                        value={stage}
                        checked={
                          projectStage === stage
                        }
                        onChange={(e) =>
                          setProjectStage(e.target.value)
                        }
                      />

                      <span className="ecom-radio"></span>

                      <span>
                        {stage}
                      </span>

                    </label>

                  ))}

                </div>

              </div>


              {/* =================================================
                  04
              ================================================= */}

              <div className="ecom-form-section-block">

                <div className="ecom-section-heading">

                  <span className="ecom-section-number">
                    04
                  </span>

                  <div>

                    <h3>
                      Tell Us About Your Requirement
                    </h3>

                  </div>

                </div>


                <div className="ecom-textarea-wrapper">

                  <label htmlFor="requirement">
                    Requirement Details
                  </label>

                  <textarea
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your business requirement, current technology environment, project objectives or the challenge you would like to discuss."
                    required
                  />

                </div>

              </div>


              {/* =================================================
                  05
              ================================================= */}

              <div className="ecom-form-section-block">

                <div className="ecom-section-heading">

                  <span className="ecom-section-number">
                    05
                  </span>

                  <div>

                    <h3>
                      Your Contact Information
                    </h3>

                  </div>

                </div>


                <div className="ecom-contact-grid">

                  <div className="ecom-field">

                    <label htmlFor="fullName">
                      Full Name <span>*</span>
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Arun Mehta"
                      required
                    />

                  </div>


                  <div className="ecom-field">

                    <label htmlFor="email">
                      Business Email <span>*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. arun@company.com"
                      required
                    />

                  </div>


                  <div className="ecom-field">

                    <label htmlFor="company">
                      Company / Organization <span>*</span>
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Nexus Retail Group"
                      required
                    />

                  </div>


                  <div className="ecom-field">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 (555) 019-2834"
                    />

                  </div>

                </div>


                {/* CONTACT METHOD */}

                <div className="ecom-contact-method">

                  <p>
                    Preferred Contact Method
                  </p>

                  <div className="ecom-radio-group">

                    <label>

                      <input
                        type="radio"
                        name="contactMethod"
                        value="Email"
                        checked={
                          contactMethod === "Email"
                        }
                        onChange={(e) =>
                          setContactMethod(e.target.value)
                        }
                      />

                      <span className="ecom-radio"></span>

                      Email

                    </label>


                    <label>

                      <input
                        type="radio"
                        name="contactMethod"
                        value="Phone"
                        checked={
                          contactMethod === "Phone"
                        }
                        onChange={(e) =>
                          setContactMethod(e.target.value)
                        }
                      />

                      <span className="ecom-radio"></span>

                      Phone

                    </label>

                  </div>

                </div>


                {/* CONSENT */}

                <label className="ecom-consent">

                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />

                  <span className="ecom-checkbox"></span>

                  <span className="ecom-consent-content">

                    <strong>
                      I agree to be contacted by TechTorch
                      regarding my enquiry and technology
                      requirements.
                    </strong>

                    <small>
                      Your information will be used to respond
                      to your enquiry and discuss your requirements.
                    </small>

                  </span>

                </label>


                {/* SUBMIT */}

                <div className="ecom-submit-wrapper">

                  <button
                    type="submit"
                    className="ecom-submit-button"
                  >

                    <span>
                      SUBMIT ENQUIRY
                    </span>

                    <span className="ecom-submit-arrow">
                      →
                    </span>

                  </button>

                  <p>
                    Our team will review your enquiry and connect
                    with you regarding the next steps.
                  </p>

                </div>

              </div>

            </form>

          </div>

        </section>

      </main>
    </>
  );
}

export default EcommerceGetInTouch;