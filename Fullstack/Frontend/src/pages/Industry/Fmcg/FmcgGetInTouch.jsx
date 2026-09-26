import React, { useState } from "react";

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
    description: "Digital portals for customers, employees and business users.",
  },
  {
    title: "Project Management",
    description: "Project planning, collaboration and workflow management.",
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

    console.log({
      ...formData,
      helpAreas: selectedHelp,
      technologyRequirements: selectedTechnology,
      projectStage,
    });
  };

  return (
    <>
      {/* ================= CSS - SAME FILE ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

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
          background: var(--page-bg);
          color: var(--dark);
          font-family: "Inter", Arial, sans-serif;

          padding: 30px 28px 70px;
        }

        /* ================= HERO ================= */

        .fmcg-hero {
          width: min(1280px, 100%);
          margin: 0 auto 42px;

          display: grid;
          grid-template-columns:
            minmax(0, 1.6fr)
            minmax(340px, 0.9fr);

          gap: 30px;
          align-items: stretch;
        }

        .fmcg-hero-left {
          padding-top: 2px;
        }

        .fmcg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 6px 13px;
          margin-bottom: 16px;

          border-radius: 30px;
          background: #eee7eb;

          color: var(--beetroot);

          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.7px;
        }

        .fmcg-eyebrow span {
          width: 6px;
          height: 6px;

          background: var(--beetroot);
          border-radius: 50%;
        }

        .fmcg-hero h1 {
          margin: 0;
          max-width: 720px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 34px;
          line-height: 1.08;
          font-weight: 700;

          letter-spacing: -1.5px;
        }

        .fmcg-hero-description {
          max-width: 770px;

          margin: 20px 0 28px;

          color: #626366;
          font-family: "Inter",sans-serif;
          font-size: 15px;
          line-height: 1.60;
        }

        /* ================= CONSULTATION CARDS ================= */

        .consultation-grid {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 12px;
        }

        .consultation-card {
          min-height: 112px;

          padding: 18px 19px;

          background: var(--white);

          border: 1px solid #ededee;
          border-radius: 9px;

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .consultation-title {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .consultation-title span {
          color: var(--beetroot);

          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .consultation-title h3 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;
          line-height: 1.25;
          font-weight: 700;
        }

        .consultation-card p {
          margin: 12px 0 0;

          color: #626366;
          font-family: "Inter",sans-serif;
          font-size: 13px;
          line-height: 1.55;
        }

        /* ================= HERO IMAGE ================= */

        .fmcg-hero-image-wrapper {
          position: relative;

          min-height: 480px;

          overflow: hidden;

          border-radius: 14px;

          background: #ddd;

          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
        }

        .fmcg-hero-image {
          width: 100%;
          height: 100%;
          min-height: 480px;

          display: block;

          object-fit: cover;
        }

        .fmcg-image-overlay {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 27px 25px 24px;

          background: linear-gradient(
            to bottom,
            rgba(115, 0, 66, 0.05),
            rgba(115, 0, 66, 0.88)
          );

          color: white;
        }

        .image-badge {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          margin-bottom: 9px;

          color: white;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.7px;
        }

        .image-badge span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #b8f3a5;
        }

        .fmcg-image-overlay h2 {
          margin: 0 0 8px;

          font-family: "Plus Jakarta Sans",sans-serif;

          font-size: 18px;
          line-height: 1.25;
          font-weight: 600;
        }

        .fmcg-image-overlay p {
          margin: 0;
          font-family: "Inter",sans-serif;
          font-size: 13px;
          line-height: 1.55;

          color: rgba(255, 255, 255, 0.94);
        }

        /* ================= FORM CARD ================= */

        .fmcg-form-card {
          width: min(1280px, 100%);

          margin: 0 auto;

          padding: 43px 42px 38px;

          background: var(--white);

          border-radius: 15px;

          box-shadow:
            0 2px 5px rgba(0, 0, 0, 0.04),
            0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .fmcg-form-intro h2 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 28px;
          line-height: 1.25;
          font-weight: 700;

          letter-spacing: -0.8px;
        }

        .fmcg-form-intro p {
          margin: 8px 0 0;

          color: #626366;
          font-family: "Inter",sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }

        .fmcg-divider {
          width: 100%;
          height: 1px;

          margin: 19px 0 36px;

          background: #e9e9ea;
        }

        /* ================= SECTION ================= */

        .fmcg-form-section {
          margin-bottom: 37px;
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

          font-family: "Plus Jakarta Sans",sans-serif;

          font-size: 16px;
          line-height: 1.35;
          font-weight: 700;
        }

        .section-heading-row h3 span {
          color: var(--beetroot);

          font-size: 17px;
          font-weight: 800;
        }

        .section-heading-row p {
          margin: 5px 0 0;

          color: #626366;

          font-size: 12px;
        }

        .select-label {
          padding-top: 4px;

          color: #626366;

          font-size: 9px;
          line-height: 1.2;
          font-weight: 700;

          letter-spacing: 2px;

          white-space: nowrap;
        }

        /* ================= HELP CARDS ================= */

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

          min-height: 70px;

          padding: 13px 15px;

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

          border-radius: 2px;

          background: white;

          box-sizing: border-box;
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

          font-size: 11px;
          font-weight: 800;
        }

        .help-card h4 {
          margin: 0;

          font-size: 14px;
          line-height: 1.3;
          font-weight: 600;
        }

        .help-card p {
          margin: 2px 0 0;

          color: #626366;

          font-size: 12px;
          line-height: 1.35;
        }

        /* ================= TECHNOLOGY ================= */

        .technology-section {
          margin-top: 7px;
        }

        .technology-pills {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;
        }

        .technology-pill {
          border: 0;
          outline: 0;

          padding: 10px 18px;

          border-radius: 30px;

          background: #f1f1f2;

          color: #36373a;

          font-family: inherit;

          font-size: 12px;
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

        /* ================= PROJECT STAGE ================= */

        .stage-grid {
          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 10px;
        }

        .stage-card {
          position: relative;

          display: flex;
          align-items: center;

          gap: 11px;

          min-height: 56px;

          padding: 11px 13px;

          background: var(--card-bg);

          border: 1px solid transparent;

          border-radius: 8px;
          font-family: "Inter",sans-serif;
          cursor: pointer;

          font-size: 13px;
          line-height: 1.3;
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

        /* ================= CONTACT ================= */

        .contact-grid {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 20px 24px;
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
          font-family: "Inter",sans-serif;
          font-size: 13px;
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

          font-family: inherit;

          font-size: 13px;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .input-group input {
          height: 51px;

          padding: 0 15px;
        }

        .input-group textarea {
          min-height: 105px;

          padding: 15px;

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

        /* ================= CONSENT ================= */

        .consent-row {
          position: relative;

          display: flex;
          align-items: center;

          gap: 11px;

          margin-top: 25px;

          color: #414246;

          font-size: 13px;
          line-height: 1.4;

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

          font-size: 10px;
          font-weight: 800;
        }

        /* ================= BOTTOM ================= */

        .form-bottom {
          display: flex;

          align-items: flex-end;

          justify-content: space-between;

          gap: 25px;

          margin-top: 47px;
        }

        .form-note p {
          margin: 0;

          color: #85868a;

          font-size: 12px;
          line-height: 1.55;
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

          padding: 0 10px;

          border: 0;

          border-radius: 9px;

          background: var(--beetroot);

          color: white;

          font-family: inherit;

          font-size: 12px;

          line-height: 1;

          font-weight: 600;

          letter-spacing: 0.5px;

          cursor: pointer;

          box-shadow: 0 3px 7px rgba(115, 0, 66, 0.15);

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .submit-button:hover {
          transform: translateY(-1px);

          box-shadow: 0 5px 12px rgba(115, 0, 66, 0.2);
        }

        .submit-arrow {
          font-size: 18px;

          line-height: 1;

          margin-left: 2px;
        }

        /* ================= 1100px ================= */

        @media (max-width: 1100px) {

          .fmcg-page {
            padding: 24px 20px 50px;
          }

          .fmcg-hero {
            grid-template-columns:
              minmax(0, 1.35fr)
              minmax(300px, 0.85fr);

            gap: 22px;
          }

          .fmcg-hero h1 {
            font-size: 42px;
          }

          .fmcg-hero-description {
            font-size: 15px;
          }

          .fmcg-form-card {
            padding: 35px 30px;
          }

          .stage-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* ================= 850px ================= */

        @media (max-width: 850px) {

          .fmcg-hero {
            grid-template-columns: 1fr;
          }

          .fmcg-hero-image-wrapper {
            min-height: 400px;
          }

          .fmcg-hero-image {
            min-height: 400px;
          }

          .fmcg-form-card {
            padding: 30px 25px;
          }

          .stage-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

        }

        /* ================= 600px ================= */

        @media (max-width: 600px) {

          .fmcg-page {
            padding: 18px 12px 35px;
          }

          .fmcg-hero {
            margin-bottom: 25px;
          }

          .fmcg-eyebrow {
            padding: 6px 10px;

            font-size: 9px;

            letter-spacing: 0.45px;
          }

          .fmcg-eyebrow span {
            width: 5px;
            height: 5px;
          }

          .fmcg-hero h1 {
            font-size: 32px;

            line-height: 1.1;

            letter-spacing: -0.8px;
          }

          .desktop-break {
            display: none;
          }

          .fmcg-hero-description {
            margin: 15px 0 22px;

            font-size: 13px;

            line-height: 1.55;
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

            border-radius: 11px;
          }

          .fmcg-hero-image {
            min-height: 360px;
          }

          .fmcg-image-overlay {
            padding: 20px 17px 18px;
          }

          .fmcg-image-overlay h2 {
            font-size: 19px;
          }

          .fmcg-image-overlay p {
            font-size: 11px;
          }

          .fmcg-form-card {
            padding: 25px 17px;

            border-radius: 12px;
          }

          .fmcg-form-intro h2 {
            font-size: 24px;

            letter-spacing: -0.5px;
          }

          .fmcg-form-intro p {
            font-size: 12px;
          }

          .fmcg-divider {
            margin: 17px 0 28px;
          }

          .section-heading-row {
            display: block;

            margin-bottom: 18px;
          }

          .section-heading-row h3 {
            font-size: 16px;
          }

          .section-heading-row h3 span {
            font-size: 15px;
          }

          .section-heading-row p {
            font-size: 10px;
          }

          .select-label {
            display: block;

            margin-top: 8px;

            font-size: 8px;
          }

          .help-grid {
            grid-template-columns: 1fr;

            gap: 9px;
          }

          .help-card {
            min-height: 65px;
          }

          .technology-pills {
            gap: 7px;
          }

          .technology-pill {
            padding: 8px 12px;

            font-size: 10px;
          }

          .stage-grid {
            grid-template-columns: 1fr;

            gap: 8px;
          }

          .stage-card {
            min-height: 50px;
          }

          .contact-grid {
            grid-template-columns: 1fr;

            gap: 17px;
          }

          .input-group.full-width {
            grid-column: auto;
          }

          .input-group input {
            height: 48px;
          }

          .input-group textarea {
            min-height: 125px;
          }

          .consent-row {
            align-items: flex-start;

            font-size: 11px;
          }

          .form-bottom {
            flex-direction: column;

            align-items: stretch;

            gap: 25px;

            margin-top: 35px;
          }

          .submit-button {
            width: 100%;

            min-width: 0;

            order: 1;
          }

          .form-note {
            order: 2;
          }

        }

        /* ================= 380px ================= */

        @media (max-width: 380px) {

          .fmcg-hero h1 {
            font-size: 28px;
          }

          .fmcg-form-card {
            padding: 22px 14px;
          }

          .fmcg-form-intro h2 {
            font-size: 21px;
          }

          .fmcg-image-overlay h2 {
            font-size: 17px;
          }

        }

      `}</style>

      <main className="fmcg-page">

        {/* ================= HERO ================= */}

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

          {/* ================= IMAGE ================= */}

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

        {/* ================= FORM ================= */}

        <section className="fmcg-form-card">

          <div className="fmcg-form-intro">

            <h2>
              Tell Us About Your FMCG Requirements
            </h2>

            <p>
              Share a few details about your business or technology requirement.
              Our team can review
              <br className="desktop-break" />
              your enquiry and connect with you to discuss the appropriate next
              steps.
            </p>

          </div>

          <div className="fmcg-divider"></div>

          <form onSubmit={handleSubmit}>

            {/* ================= 01 ================= */}

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

                  const selected =
                    selectedHelp.includes(item.title);

                  return (
                    <label
                      className={`help-card ${
                        selected ? "selected" : ""
                      }`}
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

            {/* ================= 02 ================= */}

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

            {/* ================= 03 ================= */}

            <section className="fmcg-form-section stage-section">

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

            {/* ================= 04 ================= */}

            <section className="fmcg-form-section contact-section">

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
                  ></textarea>

                </div>

              </div>

              {/* ================= CONSENT ================= */}

              <label className="consent-row">

                <input
                  type="checkbox"
                  required
                />

                <span className="consent-checkbox"></span>

                <span>
                  I agree to be contacted by TechTorch regarding my enquiry
                  and technology requirements.
                </span>

              </label>

              {/* ================= BOTTOM ================= */}

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