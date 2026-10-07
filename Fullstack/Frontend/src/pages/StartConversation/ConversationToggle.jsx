import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  BriefcaseBusiness,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircleQuestion,
  Clock3,
} from "lucide-react";

export default function StartConversation() {
  const navigate = useNavigate();

  const [connectMethod, setConnectMethod] = useState("email");

  return (
    <div className="conversation-page">

      {/* ================= CSS IN SAME FILE ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .conversation-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #ffffff;
          color: #151b2b;
          font-family: "Inter", sans-serif;
        }

        .conversation-container {
          width: min(1200px, calc(100% - 50px));
          margin: 0 auto;
        }

        /* HEADINGS - PLUS JAKARTA SANS */

        .conversation-heading,
        .conversation-eyebrow,
        .form-section-title h3,
        .steps-title,
        .step-title,
        .quick-title,
        .channels-title,
        .office-title {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* BODY / BUTTONS - INTER */

        .conversation-page,
        .conversation-text,
        button,
        input,
        select,
        textarea,
        .form-label,
        .connect-option,
        .nda-label,
        .privacy-note,
        .conversation-submit,
        .quick-button,
        .channel-name,
        .channel-value,
        .channel-subvalue,
        .office-address,
        .business-hours {
          font-family: "Inter", sans-serif;
        }

        .conversation-heading {
          margin: 0;
          color: #151b2b;
          font-weight: 700;
          letter-spacing: -0.65px;
        }

        .conversation-text {
          margin: 0;
          color: #687184;
          line-height: 1.6;
        }

        .conversation-eyebrow {
          margin: 0 0 9px;
          color: #730042;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* INTRO */

        .conversation-intro {
          padding: 52px 0 42px;
          background: #ffffff;
        }

        .conversation-main-title {
         font-size: 38px;
          line-height: 1.08;
        }

        .conversation-main-description {
          max-width: 900px;
          margin-top: 16px;
          color: #5e6a7e;
          font-size: 17px;
          line-height: 1.65;
        }

        /* MAIN */

        .conversation-content {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.8fr);
          align-items: start;
          gap: 44px;
          padding: 8px 0 72px;
        }

        /* FORM CARD */

        .conversation-form-card {
          padding: 30px;
          border: 1px solid #e3e7ed;
          border-radius: 17px;
          background: #ffffff;
          box-shadow: 0 4px 14px rgba(20, 30, 45, 0.035);
        }

        .form-card-title {
          margin-top: 3px;
          font-size: 25px;
          line-height: 1.2;
        }

        .form-card-description {
          max-width: 720px;
          margin-top: 5px;
          font-size: 12px;
          line-height: 1.55;
        }

        .form-separator {
          width: 100%;
          height: 1px;
          margin: 18px 0 23px;
          background: #edf0f3;
        }

        /* SECTION TITLES */

        .form-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .form-section-icon {
          width: 29px;
          height: 29px;
          border-radius: 7px;
          background: #f9edf4;
          color: #730042;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-section-icon svg {
          width: 15px;
          height: 15px;
        }

        .form-section-title h3 {
          margin: 0;
          color: #1c2434;
          font-size: 14px;
          font-weight: 700;
        }

        /* FORM */

        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px 16px;
        }

        .form-field {
          min-width: 0;
        }

        .form-label {
          display: block;
          margin-bottom: 7px;
          color: #374153;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
        }

        .required {
          color: #730042;
        }

        .conversation-input,
        .conversation-select,
        .conversation-textarea {
          width: 100%;
          border: 1px solid #d6dfe9;
          border-radius: 7px;
          outline: none;
          background: #ffffff;
          color: #313b4d;
          font-size: 12px;
          transition: 0.2s ease;
        }

        .conversation-input,
        .conversation-select {
          height: 39px;
          padding: 0 12px;
        }

        .conversation-textarea {
          min-height: 94px;
          padding: 11px 12px;
          resize: vertical;
        }

        .conversation-input::placeholder,
        .conversation-textarea::placeholder {
          color: #a5b2c3;
        }

        .conversation-input:focus,
        .conversation-select:focus,
        .conversation-textarea:focus {
          border-color: #730042;
          box-shadow: 0 0 0 3px rgba(115, 0, 66, 0.07);
        }

        /* REQUIREMENT */

        .requirement-section,
        .project-section {
          margin-top: 25px;
        }

        .requirement-counter {
          display: flex;
          justify-content: flex-end;
          margin-top: 4px;
          color: #9aa8b9;
          font-size: 10px;
        }

        /* PROJECT */

        .project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px 16px;
        }

        /* CONNECT */

        .connect-section {
          margin-top: 17px;
        }

        .connect-title {
          margin: 0 0 9px;
          color: #374153;
          font-size: 11px;
          font-weight: 600;
        }

        .connect-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .connect-option {
          min-height: 37px;
          padding: 0 10px;
          border: 1px solid #e0e5eb;
          border-radius: 7px;
          background: #ffffff;
          color: #4b5566;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          cursor: pointer;
        }

        .connect-option.active {
          border-color: rgba(115, 0, 66, 0.28);
        }

        .custom-radio {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          border: 1.5px solid #adb7c4;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .connect-option.active .custom-radio {
          border-color: #730042;
        }

        .connect-option.active .custom-radio::after {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #730042;
        }

        /* NDA */

        .nda-row {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 19px;
        }

        .nda-checkbox {
          width: 15px;
          height: 15px;
          margin-top: 1px;
          accent-color: #730042;
          cursor: pointer;
        }

        .nda-label {
          color: #718095;
          font-size: 10px;
          line-height: 1.5;
        }

        /* BUTTON */

        .submit-area {
          margin-top: 24px;
        }

        .conversation-submit {
          min-height: 47px;
          padding: 0 27px;
          border: none;
          border-radius: 7px;
          background: #730042;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 5px 12px rgba(115, 0, 66, 0.16);
          transition: 0.2s ease;
        }

        .conversation-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(115, 0, 66, 0.22);
        }

        .privacy-note {
          max-width: 700px;
          margin-top: 10px;
          color: #8592a5;
          font-size: 10px;
          line-height: 1.5;
        }

        /* SIDEBAR */

        .conversation-sidebar {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .steps-card,
        .channels-card {
          padding: 27px;
          border: 1px solid #e2e6ec;
          border-radius: 16px;
          background: #ffffff;
        }

        .steps-eyebrow,
        .channels-title {
          margin: 0 0 7px;
          color: #a2afbf;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.45px;
          text-transform: uppercase;
        }

        .steps-title {
          font-size: 18px;
          line-height: 1.2;
        }

        .steps-divider {
          height: 1px;
          margin: 18px 0 19px;
          background: #edf0f3;
        }

        .step-item {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 11px;
          margin-bottom: 20px;
        }

        .step-item:last-child {
          margin-bottom: 0;
        }

        .step-number {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #730042;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 0 0 4px #f9edf4;
        }

        .step-title {
          margin: 0;
          color: #293243;
          font-size: 13px;
          font-weight: 700;
        }

        .step-description {
          margin-top: 4px;
          color: #738095;
          font-size: 10px;
          line-height: 1.55;
        }

        /* QUICK CARD */

        .quick-answer-card {
          min-height: 205px;
          padding: 25px;
          border-radius: 16px;
          background: #730042;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .quick-badge {
          display: inline-flex;
          padding: 5px 10px;
          border: 1px solid rgba(255,255,255,0.24);
          border-radius: 20px;
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          font-size: 9px;
          font-weight: 600;
        }

        .quick-title {
          margin-top: 17px;
          color: #ffffff;
          font-size: 18px;
          font-weight: 700;
        }

        .quick-description {
          max-width: 330px;
          margin-top: 8px;
          color: rgba(255,255,255,0.84);
          font-size: 11px;
          line-height: 1.55;
        }

        .quick-button {
          min-height: 35px;
          margin-top: 14px;
          padding: 0 15px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 20px;
          background: rgba(255,255,255,0.15);
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
        }

        .quick-icon {
          position: absolute;
          right: 22px;
          bottom: 21px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #f7eaf1;
          color: #730042;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* CHANNELS */

        .channels-title {
          margin-bottom: 18px;
        }

        .channel-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 16px;
        }

        .channel-icon {
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          border-radius: 7px;
          background: #f9edf4;
          color: #730042;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .channel-icon svg {
          width: 14px;
        }

        .channel-name {
          margin: 0;
          color: #374153;
          font-size: 10px;
          font-weight: 700;
        }

        .channel-value {
          margin-top: 2px;
          color: #730042;
          font-size: 10px;
          font-weight: 600;
        }

        .channel-subvalue {
          margin-top: 2px;
          color: #758195;
          font-size: 10px;
          line-height: 1.45;
        }

        /* CONTACT */

        .contact-section {
          padding: 42px 0 80px;
          border-top: 1px solid #e7eaf0;
        }

        .contact-heading {
          font-size: 27px;
          line-height: 1.2;
        }

        .contact-description {
          margin-top: 5px;
          font-size: 12px;
        }

        .contact-card {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 35px;
          margin-top: 31px;
          padding: 32px;
          border: 1px solid #e2e6ec;
          border-radius: 17px;
          background: #ffffff;
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .office-item {
          position: relative;
          padding-left: 12px;
        }

        .office-item::before {
          content: "";
          position: absolute;
          top: 5px;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #730042;
        }

        .office-title {
          margin: 0;
          color: #293243;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
        }

        .office-address {
          margin-top: 5px;
          color: #6f7d91;
          font-size: 10px;
          line-height: 1.6;
        }

        .business-hours {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 29px;
          padding-top: 17px;
          border-top: 1px solid #edf0f3;
          color: #4d596b;
          font-size: 10px;
          font-weight: 600;
        }

        .business-hours svg {
          color: #730042;
        }

        /* MAP */

        .map-wrapper {
          min-height: 260px;
          padding: 10px;
          border-radius: 13px;
          background: #f5f8fb;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .map-image {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 240px;
          object-fit: contain;
          border-radius: 7px;
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1100px) {

          .conversation-container {
            width: min(960px, calc(100% - 40px));
          }

          .conversation-content {
            grid-template-columns: minmax(0, 1.2fr) minmax(290px, 0.8fr);
            gap: 28px;
          }

          .conversation-form-card {
            padding: 27px;
          }

        }

        @media (max-width: 900px) {

          .conversation-content {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .conversation-sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .steps-card {
            grid-column: 1 / -1;
          }

          .contact-card {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 700px) {

          .conversation-container {
            width: calc(100% - 30px);
          }

          .conversation-intro {
            padding: 40px 0 32px;
          }

          .conversation-main-title {
            font-size: 35px;
          }

          .conversation-main-description {
            font-size: 14px;
          }

          .conversation-form-card {
            padding: 21px 17px;
          }

          .details-grid,
          .project-grid {
            grid-template-columns: 1fr;
          }

          .connect-options {
            grid-template-columns: 1fr;
          }

          .conversation-submit {
            width: 100%;
          }

          .conversation-sidebar {
            display: flex;
            flex-direction: column;
          }

          .contact-card {
            padding: 21px 17px;
          }

          .offices-grid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 420px) {

          .conversation-container {
            width: calc(100% - 24px);
          }

          .conversation-main-title {
            font-size: 30px;
          }

          .conversation-main-description {
            font-size: 13px;
          }

          .conversation-form-card {
            padding: 18px 14px;
          }

          .form-card-title {
            font-size: 20px;
          }

          .conversation-input,
          .conversation-select {
            height: 42px;
            font-size: 11px;
          }

          .conversation-textarea {
            min-height: 100px;
          }

          .steps-card,
          .quick-answer-card,
          .channels-card {
            padding: 20px;
          }

          .contact-heading {
            font-size: 23px;
          }

          .map-wrapper {
            min-height: 180px;
          }

          .map-image {
            min-height: 170px;
          }

        }

      `}</style>

      {/* ================= JSX STARTS HERE ================= */}

      <section className="conversation-intro">
        <div className="conversation-container">
          <p className="conversation-eyebrow">
            LET'S START A CONVERSATION
          </p>

          <h1 className="conversation-heading conversation-main-title">
            Let’s Discuss What Your Business Needs
          </h1>

          <p className="conversation-main-description">
            Technology requirement clear ho ya abhi sirf idea stage par ho,
            our team can help you explore the right direction. Tell us about
            your business challenge, project, or technology requirement and
            we’ll connect with you to discuss the possibilities.
          </p>
        </div>
      </section>

      <section>
        <div className="conversation-container conversation-content">

          <div className="conversation-form-card">

            <p className="conversation-eyebrow">
              GET IN TOUCH
            </p>

            <h2 className="conversation-heading form-card-title">
              Let’s Understand Your Needs
            </h2>

            <p className="conversation-text form-card-description">
              Tell us a little about your business, project, or technology
              requirement. The more we understand, the better we can discuss
              the right approach for your needs.
            </p>

            <div className="form-separator" />

            <div className="form-section-title">
              <span className="form-section-icon">
                <User />
              </span>
              <h3>Your Details</h3>
            </div>

            <div className="details-grid">

              <div className="form-field">
                <label className="form-label">
                  Full Name <span className="required">*</span>
                </label>

                <input
                  type="text"
                  className="conversation-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  Work Email <span className="required">*</span>
                </label>

                <input
                  type="email"
                  className="conversation-input"
                  placeholder="Enter your business email"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  Company Name
                </label>

                <input
                  type="text"
                  className="conversation-input"
                  placeholder="Enter your company name"
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="conversation-input"
                  placeholder="Enter your phone number"
                />
              </div>

            </div>

            <div className="requirement-section">

              <div className="form-section-title">
                <span className="form-section-icon">
                  <BriefcaseBusiness />
                </span>

                <h3>Your Requirement</h3>
              </div>

              <label className="form-label">
                What can we help you with?{" "}
                <span className="required">*</span>
              </label>

              <select
                className="conversation-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option>Software Development</option>
                <option>Digital Transformation</option>
                <option>ERP Solutions</option>
                <option>AI & Cloud Solutions</option>
                <option>Cybersecurity</option>
                <option>IT Consulting</option>
              </select>

              <div className="form-field" style={{ marginTop: "15px" }}>
                <label className="form-label">
                  Tell us about your requirement{" "}
                  <span className="required">*</span>
                </label>

                <textarea
                  className="conversation-textarea"
                  maxLength={500}
                  placeholder="Briefly describe your project, business challenge or technology requirement..."
                  required
                />

                <div className="requirement-counter">
                  0/500
                </div>
              </div>

            </div>

            <div className="project-section">

              <div className="form-section-title">
                <span className="form-section-icon">
                  <CalendarDays />
                </span>

                <h3>Project Information</h3>
              </div>

              <div className="project-grid">

                <div className="form-field">
                  <label className="form-label">
                    Current Stage
                  </label>

                  <select
                    className="conversation-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select current stage
                    </option>
                    <option>Idea Stage</option>
                    <option>Planning</option>
                    <option>Development</option>
                    <option>Implementation</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    Expected Timeline
                  </label>

                  <select
                    className="conversation-select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option>Immediate</option>
                    <option>Within 1 Month</option>
                    <option>1–3 Months</option>
                    <option>3–6 Months</option>
                  </select>
                </div>

              </div>

              <div className="connect-section">

                <p className="connect-title">
                  Preferred Way to Connect
                </p>

                <div className="connect-options">

                  {[
                    ["email", "Email"],
                    ["phone", "Phone Call"],
                    ["video", "Online Video Meeting"],
                  ].map(([value, label]) => (
                    <label
                      key={value}
                      className={`connect-option ${
                        connectMethod === value ? "active" : ""
                      }`}
                      onClick={() => setConnectMethod(value)}
                    >
                      <span className="custom-radio" />
                      {label}
                    </label>
                  ))}

                </div>

              </div>

              <div className="nda-row">
                <input
                  type="checkbox"
                  className="nda-checkbox"
                />

                <label className="nda-label">
                  Please share a draft Bilateral Mutual NDA prior to technical
                  architecture discussion.
                </label>
              </div>

              <div className="submit-area">

                <button
                  type="button"
                  className="conversation-submit"
                >
                  Send Enquiry & Start Conversation
                  <ArrowRight size={16} />
                </button>

                <p className="privacy-note">
                  By submitting this form, you agree to be contacted by
                  TechTorch Solutions regarding your enquiry. Your data is
                  protected by strict bilateral confidentiality.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="conversation-sidebar">

            <div className="steps-card">

              <p className="steps-eyebrow">
                STEP-BY-STEP DISCOVERY
              </p>

              <h2 className="conversation-heading steps-title">
                What Happens Next?
              </h2>

              <div className="steps-divider" />

              {[
                [
                  "01",
                  "Share Your Requirement",
                  "Tell us about your business needs, project, existing system, or technology challenge.",
                ],
                [
                  "02",
                  "We Understand Your Needs",
                  "Our team reviews your requirement and understands the business and technical context.",
                ],
                [
                  "03",
                  "Explore the Right Approach",
                  "We discuss relevant solutions, technologies, and possible ways to move your initiative forward.",
                ],
                [
                  "04",
                  "Take the Next Step",
                  "Once the requirement is clear, we can discuss the scope, engagement approach, and next steps.",
                ],
              ].map(([number, title, description]) => (
                <div className="step-item" key={number}>

                  <div className="step-number">
                    {number}
                  </div>

                  <div>
                    <h3 className="step-title">
                      {title}
                    </h3>

                    <p className="step-description">
                      {description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            <div className="quick-answer-card">

              <span className="quick-badge">
                FAQ & Quick Assistance
              </span>

              <h2 className="quick-title">
                Need a Quick Answer?
              </h2>

              <p className="quick-description">
                Have a question about our services, solutions, or products?
                Browse immediate answers.
              </p>

              <button
                type="button"
                className="quick-button"
                onClick={() => navigate("/explore-questions")}
              >
                Ask a Question
                <ArrowRight size={13} />
              </button>

              <div className="quick-icon">
                <MessageCircleQuestion />
              </div>

            </div>

            <div className="channels-card">

              <h3 className="channels-title">
                DIRECT ADVISORY CHANNELS
              </h3>

              <div className="channel-item">
                <div className="channel-icon">
                  <Mail />
                </div>

                <div>
                  <p className="channel-name">
                    Direct Email
                  </p>

                  <p className="channel-value">
                    contact@techtorch.solutions
                  </p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">
                  <Phone />
                </div>

                <div>
                  <p className="channel-name">
                    Direct Phone Inquiries
                  </p>

                  <p className="channel-subvalue">
                    +91 581 3500381 | +91 7251090147
                  </p>
                </div>
              </div>

              <div className="channel-item">
                <div className="channel-icon">
                  <MapPin />
                </div>

                <div>
                  <p className="channel-name">
                    Global Presence
                  </p>

                  <p className="channel-subvalue">
                    Noida, Uttar Pradesh • Bareilly HQ • Florida, USA
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT & DELIVERY */}

      <section className="contact-section">

        <div className="conversation-container">

          <p className="conversation-eyebrow">
            CONTACT & DELIVERY HUBS
          </p>

          <h2 className="conversation-heading contact-heading">
            Connect With TechTorch
          </h2>

          <p className="conversation-text contact-description">
            For technology solutions, services, products, and dedicated
            enterprise pods.
          </p>

          <div className="contact-card">

            <div>

              <div className="offices-grid">

                <div className="office-item">
                  <h3 className="office-title">
                    Noida Office
                  </h3>

                  <p className="office-address">
                    Suite G/11, B-8 Sector-2,
                    <br />
                    Near Sector-15 Metro Station,
                    <br />
                    Noida, Uttar Pradesh – 201301,
                    <br />
                    India
                  </p>
                </div>

                <div className="office-item">
                  <h3 className="office-title">
                    Corporate HQ
                  </h3>

                  <p className="office-address">
                    M-1 Vrindavan Colony,
                    <br />
                    IVRI Road, Near Izatnagar
                    <br />
                    Police Station, Bareilly,
                    <br />
                    Uttar Pradesh – 243122, India
                  </p>
                </div>

                <div className="office-item">
                  <h3 className="office-title">
                    Overseas Office
                  </h3>

                  <p className="office-address">
                    Global Delivery Desk
                    <br />
                    Florida, USA
                  </p>
                </div>

              </div>

              <div className="business-hours">
                <Clock3 size={15} />
                Business Hours: Monday – Friday | 10:00 AM – 7:00 PM (IST)
              </div>

            </div>

            <div className="map-wrapper">

              <img
                src="/GlobalPresence.png"
                alt="TechTorch Global Presence"
                className="map-image"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}