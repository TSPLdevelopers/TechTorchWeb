import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const BRAND = "#8B0046";

/* =========================================================
   DATA
========================================================= */

const supportOptions = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "Enterprise Software",
  "API & System Integration",
  "Software Modernization",
  "Software Maintenance & Support",
  "Not Sure Yet",
];

const supportTypes = [
  {
    title: "Dedicated Development Team",
    description:
      "Professionals focused on your ongoing development requirements.",
  },
  {
    title: "Extended Development Team",
    description:
      "Additional technical professionals working alongside your existing team.",
  },
  {
    title: "Project-Based Development",
    description:
      "A development team structured around a defined project requirement.",
  },
  {
    title: "Specialized Technical Support",
    description:
      "Additional expertise for a specific technology or development need.",
  },
  {
    title: "Guidance & Consultation",
    description:
      "Discuss your requirement with our technology team.",
  },
];

const capabilities = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "API & Integration",
  "Cloud & DevOps",
  "Software Architecture",
  "Quality Assurance & Testing",
  "Software Maintenance & Support",
  "Other",
];

const projectStages = [
  "Idea / Planning",
  "Requirements & Design",
  "Development",
  "Existing Application",
  "Modernization",
  "Maintenance & Support",
  "Not Sure Yet",
];

const supportLevels = [
  "1–2 Professionals",
  "3–5 Professionals",
  "6–10 Professionals",
  "10+ Professionals",
  "Not Sure",
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function DevelopmentConsultation() {
  const [support, setSupport] = useState("");
  const [supportType, setSupportType] = useState("");
  const [selectedCapabilities, setSelectedCapabilities] = useState([]);
  const [projectStage, setProjectStage] = useState("");
  const [supportLevel, setSupportLevel] = useState("");

  const [formData, setFormData] = useState({
    project: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  /* =========================================================
     HANDLERS
  ========================================================= */

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleCapability = (item) => {
    setSelectedCapabilities((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      support,
      supportType,
      capabilities: selectedCapabilities,
      project: formData.project,
      projectStage,
      supportLevel,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
    });
  };

  return (
    <main className="development-consultation">

      {/* =====================================================
          HERO / DEVELOPMENT CONSULTATION
      ====================================================== */}

      <section className="consultation-hero-section">
        <div className="consultation-hero-container">

          {/* ================= LEFT CONTENT ================= */}

          <div className="consultation-hero-content">

            {/* Badge */}
            <div className="consultation-badge">
              <span className="consultation-badge-dot" />

              <span>
                DEVELOPMENT CONSULTATION
              </span>
            </div>

            {/* Heading */}
            <h1 className="consultation-hero-heading">
              Discuss Your Development
              <br className="desktop-break" />
              Requirements
            </h1>

            {/* Description */}
            <p className="consultation-hero-description">
              Tell us about your project, development goals, and the technical
              capabilities you are looking for. Share a few details so our team
              can better understand your requirements and discuss a suitable
              development approach with you.
            </p>

          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div className="consultation-hero-image-wrapper">

            <div className="consultation-hero-image">

              <img
                src="/DevelopmentTeam.png"
                alt="Development Consultation"
              />

              {/* Image Overlay */}
              <div className="consultation-image-overlay">
                <div className="consultation-image-overlay-box">
                  <p>
                    TechTorch Solutions Architecture — Technical
                    <br className="desktop-break" />
                    Consultation & Requirement Discovery
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FORM
      ====================================================== */}

      <section
        id="development-form"
        className="development-form-section"
      >
        <div className="development-form-container">

          <form onSubmit={handleSubmit}>

            {/* =================================================
                MAIN FORM CARD
            ================================================= */}

            <div className="main-form-card">

              {/* =================================================
                  01
              ================================================= */}

              <FormSection
                number="01"
                title="What do you need development support for?"
                subtitle="Select the area closest to your requirement."
              >
                <div className="support-options-grid">
                  {supportOptions.map((item) => (
                    <ChoiceButton
                      key={item}
                      text={item}
                      selected={support === item}
                      onClick={() => setSupport(item)}
                    />
                  ))}
                </div>
              </FormSection>

              {/* =================================================
                  02
              ================================================= */}

              <FormSection
                number="02"
                title="What type of support are you looking for?"
                subtitle="Choose the engagement structure best suited for your plans."
              >
                <div className="support-types-grid">
                  {supportTypes.map((item) => (
                    <SupportTypeCard
                      key={item.title}
                      {...item}
                      selected={supportType === item.title}
                      onClick={() => setSupportType(item.title)}
                    />
                  ))}
                </div>
              </FormSection>

              {/* =================================================
                  03
              ================================================= */}

              <FormSection
                number="03"
                title="Which technical capabilities are relevant?"
                subtitle="Select one or more"
              >
                <div className="capabilities-list">
                  {capabilities.map((item) => {
                    const selected =
                      selectedCapabilities.includes(item);

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleCapability(item)}
                        className={`capability-button ${
                          selected ? "selected" : ""
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </FormSection>

              {/* =================================================
                  04
              ================================================= */}

              <FormSection
                number="04"
                title="Tell Us About Your Project"
                subtitle="Project Details"
              >
                <p className="project-help-text">
                  Describe your project, current application, technology
                  environment, or the type of development assistance you
                  require.
                </p>

                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Briefly describe your project and the development support you are looking for..."
                  className="project-textarea"
                />
              </FormSection>

              {/* =================================================
                  05
              ================================================= */}

              <FormSection
                number="05"
                title="What stage is your project in?"
                subtitle="Select the current state of progress."
              >
                <div className="stage-options">
                  {projectStages.map((item) => {
                    const selected = projectStage === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProjectStage(item)}
                        className={`stage-button ${
                          selected ? "selected" : ""
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </FormSection>

              {/* =================================================
                  06
              ================================================= */}

              <FormSection
                number="06"
                title="What level of support are you considering?"
                subtitle="Estimate team capacity or scale."
              >
                <div className="support-level-options">
                  {supportLevels.map((item) => {
                    const selected = supportLevel === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSupportLevel(item)}
                        className={`support-level-button ${
                          selected ? "selected" : ""
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </FormSection>

            </div>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="contact-card">

              <span className="contact-label">
                YOUR CONTACT DETAILS
              </span>

              <h2 className="contact-heading">
                Let’s Continue the Conversation
              </h2>

              <p className="contact-description">
                Share your contact information so our team can review your
                requirements and get in touch regarding your development
                enquiry.
              </p>

              {/* INPUTS */}

              <div className="contact-input-grid">

                <InputField
                  label="Full Name *"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <InputField
                  label="Business Email *"
                  name="email"
                  type="email"
                  placeholder="Enter your business email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <InputField
                  label="Company Name"
                  name="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                />

                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />

              </div>

              {/* SUBMIT */}

              <div className="submit-area">

                <button
                  type="submit"
                  className="submit-button"
                >
                  <span>
                    Submit Development Enquiry
                  </span>

                  <ArrowRight
                    className="submit-arrow"
                    strokeWidth={2}
                  />
                </button>

                <p className="privacy-note">
                  The information you provide will be used to understand your
                  enquiry and communicate with you regarding your requirements.
                </p>

              </div>

            </div>

          </form>
        </div>
      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`

        /* =====================================================
           BASE
        ====================================================== */

        .development-consultation {
          width: 100%;
          min-height: 100vh;

          background: #f8f9fa;

          color: #15151a;

          font-family: "Inter", sans-serif;

          box-sizing: border-box;
        }

        .development-consultation *,
        .development-consultation *::before,
        .development-consultation *::after {
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .consultation-hero-section {
          width: 100%;

          padding: 50px 100px;
        }

        .consultation-hero-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(0, 0.85fr);

          min-height: 420px;

          overflow: hidden;

          border: 1px solid #e3e7eb;

          border-radius: 18px;

          background: #ffffff;
        }

        /* =====================================================
           HERO CONTENT
        ====================================================== */

        .consultation-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 52px;
        }

        .consultation-badge {
          width: fit-content;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          padding: 7px 14px;

          margin-bottom: 20px;

          border-radius: 999px;

          background: #f5f5f6;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 700;

          line-height: 1.4;

          letter-spacing: 0.05em;

          color: #343434;
        }

        .consultation-badge-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${BRAND};
        }

        .consultation-hero-heading {
          max-width: 700px;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 44px;

          font-weight: 600;

          line-height: 1.1;

          letter-spacing: -0.04em;

          color: #15151a;
        }

        .consultation-hero-description {
          max-width: 650px;

          margin: 22px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 14px;

          font-weight: 400;

          line-height: 1.75;

          color: #6b6268;
        }

        /* =====================================================
           HERO IMAGE
        ====================================================== */

        .consultation-hero-image-wrapper {
          min-height: 420px;

          padding: 8px;
        }

        .consultation-hero-image {
          position: relative;

          width: 100%;
          height: 100%;

          min-height: 404px;

          overflow: hidden;

          border-radius: 12px;
        }

        .consultation-hero-image img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;
        }

        .consultation-image-overlay {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 16px;
        }

        .consultation-image-overlay-box {
          width: 100%;

          padding: 13px 16px;

          border: 1px solid rgba(255, 255, 255, 0.15);

          border-radius: 10px;

          background: rgba(0, 0, 0, 0.65);

          backdrop-filter: blur(4px);
        }

        .consultation-image-overlay-box p {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 500;

          line-height: 1.45;

          color: #ffffff;
        }

        /* =====================================================
           FORM SECTION
        ====================================================== */

        .development-form-section {
          width: 100%;

          padding: 0 100px 60px;
        }

        .development-form-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;
        }

        /* =====================================================
           FORM CARD
        ====================================================== */

        .main-form-card,
        .contact-card {
          width: 100%;

          border: 1px solid #e3e7eb;

          border-radius: 16px;

          background: #ffffff;

          box-shadow:
            0 2px 8px rgba(20, 30, 45, 0.025);
        }

        .main-form-card {
          padding: 48px;
        }

        /* =====================================================
           FORM SECTION
        ====================================================== */

        .form-section {
          padding-bottom: 34px;

          margin-bottom: 34px;

          border-bottom: 1px solid #edf0f3;
        }

        .form-section:last-child {
          padding-bottom: 0;
          margin-bottom: 0;

          border-bottom: none;
        }

        .form-section-header {
          display: flex;
          align-items: flex-start;

          gap: 12px;

          margin-bottom: 18px;
        }

        .form-section-number {
          width: 24px;
          height: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${BRAND};

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 9px;

          font-weight: 700;
        }

        .form-section-title {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;

          font-weight: 700;

          line-height: 1.35;

          color: #20242a;
        }

        .form-section-subtitle {
          margin: 3px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.5;

          color: #776d72;
        }

        /* =====================================================
           SUPPORT OPTIONS
        ====================================================== */

        .support-options-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 12px;
        }

        .choice-button {
          position: relative;

          width: 100%;
          min-height: 58px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding: 11px 13px;

          border: 1px solid #e2e7ec;

          border-radius: 9px;

          background: #ffffff;

          text-align: left;

          cursor: pointer;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 500;

          line-height: 1.4;

          color: #363b42;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .choice-button:hover {
          border-color: #d4b1c1;

          background: #fffafb;
        }

        .choice-button.selected {
          border-color: #d3a3b9;

          background: #fff9fb;
        }

        .choice-button-text {
          max-width: calc(100% - 28px);
        }

        .choice-radio {
          width: 15px;
          height: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border: 1px solid #e2b8ca;

          border-radius: 50%;
        }

        .choice-button.selected .choice-radio {
          border-color: ${BRAND};
        }

        .choice-radio-inner {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: ${BRAND};
        }

        /* =====================================================
           SUPPORT TYPE
        ====================================================== */

        .support-types-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 12px;
        }

        .support-type-card {
          position: relative;

          width: 100%;

          min-height: 125px;

          padding: 17px;

          border: 1px solid #e2e7ec;

          border-radius: 10px;

          background: #ffffff;

          text-align: left;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .support-type-card:hover {
          border-color: #d4b1c1;
        }

        .support-type-card.selected {
          border-color: #d3a3b9;

          background: #fff9fb;
        }

        .support-type-radio {
          position: absolute;

          top: 13px;
          right: 13px;

          width: 15px;
          height: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #e2b8ca;

          border-radius: 50%;
        }

        .support-type-card.selected .support-type-radio {
          border-color: ${BRAND};
        }

        .support-type-radio-inner {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: ${BRAND};
        }

        .support-type-title {
          max-width: 92%;

          padding-right: 20px;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 13px;

          font-weight: 700;

          line-height: 1.4;

          color: #30343a;
        }

        .support-type-description {
          max-width: 330px;

          margin: 10px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 400;

          line-height: 1.55;

          color: #766d72;
        }

        /* =====================================================
           CAPABILITIES
        ====================================================== */

        .capabilities-list,
        .stage-options,
        .support-level-options {
          display: flex;
          flex-wrap: wrap;

          gap: 8px;
        }

        .capability-button,
        .stage-button,
        .support-level-button {
          min-height: 36px;

          padding: 8px 13px;

          border: 1px solid #e2e7ec;

          border-radius: 7px;

          background: #ffffff;

          color: #3c424a;

          cursor: pointer;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 500;

          line-height: 1.3;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .capability-button:hover,
        .stage-button:hover,
        .support-level-button:hover {
          border-color: #cfa6ba;

          background: #fff9fb;
        }

        .capability-button.selected {
          border-color: ${BRAND};

          background: ${BRAND};

          color: #ffffff;
        }

        .stage-button.selected,
        .support-level-button.selected {
          border-color: ${BRAND};

          background: #fff7fa;

          color: ${BRAND};
        }

        /* =====================================================
           PROJECT DETAILS
        ====================================================== */

        .project-help-text {
          margin: 0 0 10px;

          max-width: 850px;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          line-height: 1.6;

          color: #71686d;
        }

        .project-textarea {
          width: 100%;

          min-height: 130px;

          resize: vertical;

          padding: 13px;

          border: 1px solid #e1e6eb;

          border-radius: 9px;

          background: #fafbfc;

          outline: none;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          line-height: 1.6;

          color: #333840;
        }

        .project-textarea::placeholder {
          color: #aeb5be;
        }

        .project-textarea:focus {
          border-color: #c58ba7;

          background: #ffffff;
        }

        /* =====================================================
           CONTACT CARD
        ====================================================== */

        .contact-card {
          margin-top: 22px;

          padding: 42px 48px;
        }

        .contact-label {
          display: block;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          font-weight: 700;

          line-height: 1.4;

          letter-spacing: 0.08em;

          color: ${BRAND};
        }

        .contact-heading {
          margin: 7px 0 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 28px;

          font-weight: 600;

          line-height: 1.2;

          letter-spacing: -0.035em;

          color: #15151a;
        }

        .contact-description {
          max-width: 850px;

          margin: 7px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          line-height: 1.65;

          color: #6d6469;
        }

        /* =====================================================
           INPUT GRID
        ====================================================== */

        .contact-input-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px 22px;

          margin-top: 26px;
        }

        .input-field {
          display: block;

          width: 100%;
        }

        .input-label {
          display: block;

          margin-bottom: 7px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 12px;

          font-weight: 700;

          line-height: 1.4;

          color: #34383e;
        }

        .input-control {
          width: 100%;

          height: 44px;

          padding: 0 13px;

          border: 1px solid #e1e6eb;

          border-radius: 8px;

          background: #fafbfc;

          outline: none;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          font-weight: 400;

          color: #303641;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .input-control::placeholder {
          color: #aeb5be;
        }

        .input-control:focus {
          border-color: #c58ba7;

          background: #ffffff;
        }

        /* =====================================================
           SUBMIT
        ====================================================== */

        .submit-area {
          margin-top: 28px;
        }

        .submit-button {
          min-height: 44px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          padding: 11px 22px;

          border: none;

          border-radius: 7px;

          background: #780042;

          color: #ffffff;

          cursor: pointer;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 11px;

          font-weight: 700;

          line-height: 1.3;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .submit-button:hover {
          background: #8b0046;

          transform: translateY(-2px);
        }

        .submit-arrow {
          width: 16px;
          height: 16px;
        }

        .privacy-note {
          margin: 8px 0 0;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.5;

          color: #766d72;
        }

        /* =====================================================
           1200px
        ====================================================== */

        @media (max-width: 1200px) {

          .consultation-hero-section {
            padding-left: 40px;
            padding-right: 40px;
          }

          .development-form-section {
            padding-left: 40px;
            padding-right: 40px;
          }

          .consultation-hero-content {
            padding: 42px;
          }

          .consultation-hero-heading {
            font-size: 40px;
          }

          .main-form-card {
            padding: 40px;
          }

          .contact-card {
            padding: 38px 40px;
          }

          .support-options-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }
        }

        /* =====================================================
           900px
        ====================================================== */

        @media (max-width: 900px) {

          .consultation-hero-container {
            grid-template-columns: 1fr;

            min-height: auto;
          }

          .consultation-hero-content {
            padding: 40px;
          }

          .consultation-hero-image-wrapper {
            min-height: 350px;
          }

          .consultation-hero-image {
            min-height: 334px;
          }

          .support-options-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .support-types-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .support-type-card:last-child {
            grid-column: 1 / -1;
          }

          .main-form-card {
            padding: 34px;
          }

          .contact-card {
            padding: 34px;
          }
        }

        /* =====================================================
           700px
        ====================================================== */

        @media (max-width: 700px) {

          .consultation-hero-section {
            padding: 36px 24px;
          }

          .development-form-section {
            padding: 0 24px 40px;
          }

          .consultation-hero-content {
            padding: 34px 28px;
          }

          .consultation-badge {
            margin-bottom: 17px;

            padding: 6px 12px;

            font-size: 9px;
          }

          .consultation-hero-heading {
            font-size: 32px;

            line-height: 1.12;
          }

          .consultation-hero-description {
            margin-top: 17px;

            font-size: 12px;

            line-height: 1.7;
          }

          .desktop-break {
            display: none;
          }

          .consultation-hero-image-wrapper {
            min-height: 300px;

            padding: 7px;
          }

          .consultation-hero-image {
            min-height: 286px;
          }

          .consultation-image-overlay {
            padding: 12px;
          }

          .consultation-image-overlay-box {
            padding: 11px 13px;
          }

          .consultation-image-overlay-box p {
            font-size: 10px;
          }

          .main-form-card {
            padding: 28px 24px;

            border-radius: 14px;
          }

          .form-section {
            padding-bottom: 28px;

            margin-bottom: 28px;
          }

          .support-options-grid,
          .support-types-grid {
            grid-template-columns: 1fr;

            gap: 10px;
          }

          .support-type-card:last-child {
            grid-column: auto;
          }

          .choice-button {
            min-height: 52px;
          }

          .support-type-card {
            min-height: 112px;
          }

          .contact-card {
            padding: 30px 24px;

            border-radius: 14px;
          }

          .contact-heading {
            font-size: 24px;
          }

          .contact-description {
            font-size: 11px;
          }

          .contact-input-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .submit-button {
            width: 100%;
          }
        }

        /* =====================================================
           480px
        ====================================================== */

        @media (max-width: 480px) {

          .consultation-hero-section {
            padding: 30px 16px;
          }

          .development-form-section {
            padding: 0 16px 30px;
          }

          .consultation-hero-container {
            border-radius: 14px;
          }

          .consultation-hero-content {
            padding: 28px 20px;
          }

          .consultation-badge {
            gap: 6px;

            padding: 5px 10px;

            font-size: 8px;
          }

          .consultation-badge-dot {
            width: 6px;
            height: 6px;
          }

          .consultation-hero-heading {
            font-size: 25px;

            letter-spacing: -0.035em;
          }

          .consultation-hero-description {
            font-size: 10.5px;

            line-height: 1.65;
          }

          .consultation-hero-image-wrapper {
            min-height: 245px;

            padding: 6px;
          }

          .consultation-hero-image {
            min-height: 233px;

            border-radius: 10px;
          }

          .consultation-image-overlay {
            padding: 9px;
          }

          .consultation-image-overlay-box {
            padding: 9px 10px;
          }

          .consultation-image-overlay-box p {
            font-size: 8.5px;
          }

          .main-form-card {
            padding: 23px 16px;

            border-radius: 12px;
          }

          .form-section {
            padding-bottom: 24px;

            margin-bottom: 24px;
          }

          .form-section-header {
            gap: 9px;

            margin-bottom: 14px;
          }

          .form-section-number {
            width: 21px;
            height: 21px;

            font-size: 8px;
          }

          .form-section-title {
            font-size: 12px;
          }

          .form-section-subtitle {
            font-size: 9px;
          }

          .choice-button {
            min-height: 48px;

            padding: 9px 11px;

            font-size: 9.5px;
          }

          .support-type-card {
            min-height: 105px;

            padding: 14px;
          }

          .support-type-title {
            font-size: 11px;
          }

          .support-type-description {
            margin-top: 8px;

            font-size: 9.5px;
          }

          .capabilities-list,
          .stage-options,
          .support-level-options {
            gap: 6px;
          }

          .capability-button,
          .stage-button,
          .support-level-button {
            min-height: 33px;

            padding: 7px 10px;

            font-size: 9px;
          }

          .project-help-text {
            font-size: 9.5px;
          }

          .project-textarea {
            min-height: 115px;

            padding: 11px;

            font-size: 10px;
          }

          .contact-card {
            margin-top: 16px;

            padding: 26px 16px;

            border-radius: 12px;
          }

          .contact-label {
            font-size: 8px;
          }

          .contact-heading {
            font-size: 21px;
          }

          .contact-description {
            font-size: 9.5px;

            line-height: 1.6;
          }

          .contact-input-grid {
            margin-top: 21px;

            gap: 13px;
          }

          .input-label {
            font-size: 10px;
          }

          .input-control {
            height: 41px;

            padding: 0 11px;

            font-size: 10px;
          }

          .submit-area {
            margin-top: 23px;
          }

          .submit-button {
            min-height: 42px;

            padding: 10px 16px;

            font-size: 9.5px;
          }

          .privacy-note {
            font-size: 8px;
          }
        }

        /* =====================================================
           360px
        ====================================================== */

        @media (max-width: 360px) {

          .consultation-hero-heading {
            font-size: 23px;
          }

          .consultation-hero-description {
            font-size: 10px;
          }

          .form-section-title {
            font-size: 11.5px;
          }

          .contact-heading {
            font-size: 19px;
          }

          .submit-button {
            font-size: 9px;
          }
        }

      `}</style>
    </main>
  );
}


/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
  number,
  title,
  subtitle,
  children,
}) {
  return (
    <div className="form-section">

      <div className="form-section-header">

        <span className="form-section-number">
          {number}
        </span>

        <div>
          <h3 className="form-section-title">
            {title}
          </h3>

          <p className="form-section-subtitle">
            {subtitle}
          </p>
        </div>

      </div>

      {children}

    </div>
  );
}


/* =========================================================
   CHOICE BUTTON
========================================================= */

function ChoiceButton({
  text,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`choice-button ${
        selected ? "selected" : ""
      }`}
    >
      <span className="choice-button-text">
        {text}
      </span>

      <span className="choice-radio">
        {selected && (
          <span className="choice-radio-inner" />
        )}
      </span>
    </button>
  );
}


/* =========================================================
   SUPPORT TYPE CARD
========================================================= */

function SupportTypeCard({
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`support-type-card ${
        selected ? "selected" : ""
      }`}
    >
      <span className="support-type-radio">
        {selected && (
          <span className="support-type-radio-inner" />
        )}
      </span>

      <h4 className="support-type-title">
        {title}
      </h4>

      <p className="support-type-description">
        {description}
      </p>
    </button>
  );
}


/* =========================================================
   INPUT FIELD
========================================================= */

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <label className="input-field">

      <span className="input-label">
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-control"
      />

    </label>
  );
}