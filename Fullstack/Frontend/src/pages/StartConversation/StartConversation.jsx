import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactAccountSection from "../../account/ContactAccountSection";
import { enquiryApi } from "../../admin/api/endpoints";

export default function GetInTouch() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    requirement: "",
    stage: "",
    timeline: "",
    contactMethod: "Email",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // select value -> label the backend stores
  const SERVICE_LABELS = {
    "web-development": "Web Development",
    "software-development": "Software Development",
    cloud: "Cloud Solutions",
    ai: "AI & Machine Learning",
    consulting: "Technology Consulting",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSubmitError("");
    setSending(true);

    try {
      await enquiryApi.general({
        fullName: formData.fullName.trim(),
        businessEmail: formData.email.trim(),
        phoneNumber: formData.phone.trim(),
        companyOrganization: formData.company.trim(),
        areaOfInterest: SERVICE_LABELS[formData.service] || formData.service,
        requirement: formData.requirement.trim(),
        projectStage: formData.stage,
        timeline: formData.timeline,
        preferredContactMethod: formData.contactMethod,
        contactConsent: true, // the form note above the button states that submitting means agreeing
      });

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        requirement: "",
        stage: "",
        timeline: "",
        contactMethod: "Email",
      });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setSubmitError(err.message || "Could not send your enquiry. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-inner">

          <div className="contact-hero-content">

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h1>
              Let’s Turn Your
              <br className="desktop-break" />
              Technology Needs Into
              <br className="desktop-break" />
              Solutions
            </h1>

            <p>
              Have a business challenge, a new project, or a technology
              requirement? Tell us what you’re looking to achieve. Our team
              will understand your needs and connect with you to discuss the
              right approach.
            </p>

            <button
              type="button"
              className="primary-button"
               onClick={() => navigate("/conversation-toggle")}
            >
              Start a Conversation
              <span>→</span>
            </button>

          </div>

          <div className="contact-hero-image-wrapper">
            <img
              src="/StartConversation.png"
              alt="Business conversation"
              className="contact-hero-image"
            />
          </div>

        </div>
      </section>


      <ContactAccountSection />

      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}

      <section
        className="contact-form-section"
        id="contact-form"
      >

        <div className="contact-grid">

          {/* ================= LEFT FORM ================= */}

          <form
            className="contact-form-card"
            onSubmit={handleSubmit}
          >

            <div className="form-header">

              <span className="eyebrow">
                GET IN TOUCH
              </span>

              <h2>
                Let's Understand Your Needs
              </h2>

              <p>
                Tell us a little about your business, project, or technology
                requirement. The more we understand, the better we can discuss
                the right approach for your needs.
              </p>

            </div>


            <div className="form-divider" />


            {/* YOUR DETAILS */}

            <div className="form-section">

              <h3>
                <span className="section-icon">♟</span>
                Your Details
              </h3>

              <div className="form-row">

                <div className="field">
                  <label>
                    Full Name<span>*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="field">
                  <label>
                    Work Email<span>*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your business email"
                    required
                  />
                </div>

              </div>


              <div className="form-row">

                <div className="field">
                  <label>
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="field">
                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>

              </div>

            </div>


            {/* YOUR REQUIREMENT */}

            <div className="form-section">

              <h3>
                <span className="section-icon">✦</span>
                Your Requirement
              </h3>

              <div className="field full-width">

                <label>
                  What can we help you with?<span>*</span>
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="software-development">
                    Software Development
                  </option>

                  <option value="cloud">
                    Cloud Solutions
                  </option>

                  <option value="ai">
                    AI & Machine Learning
                  </option>

                  <option value="consulting">
                    Technology Consulting
                  </option>

                </select>

              </div>


              <div className="field full-width">

                <label>
                  Tell us about your requirement<span>*</span>
                </label>

                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="Briefly describe your project, business challenge or technology requirement..."
                  required
                />

                <div className="character-count">
                  {formData.requirement.length}/500
                </div>

              </div>

            </div>


            {/* PROJECT INFORMATION */}

            <div className="form-section">

              <h3>
                <span className="section-icon">▣</span>
                Project Information
              </h3>

              <div className="form-row">

                <div className="field">
                  <label>
                    Current Stage
                  </label>

                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select current stage
                    </option>

                    <option value="idea">
                      Idea / Planning
                    </option>

                    <option value="development">
                      Development
                    </option>

                    <option value="existing">
                      Existing System
                    </option>

                  </select>
                </div>


                <div className="field">
                  <label>
                    Expected Timeline
                  </label>

                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select timeline
                    </option>

                    <option value="immediate">
                      Immediate
                    </option>

                    <option value="1-3-months">
                      1–3 Months
                    </option>

                    <option value="3-6-months">
                      3–6 Months
                    </option>

                    <option value="6-plus-months">
                      6+ Months
                    </option>

                  </select>
                </div>

              </div>


              {/* PREFERRED CONTACT */}

              <div className="preferred-contact">

                <label className="preferred-title">
                  Preferred Way to Connect
                </label>

                <div className="radio-group">

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Email"
                      checked={formData.contactMethod === "Email"}
                      onChange={handleChange}
                    />
                    <span>Email</span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Phone Call"
                      checked={formData.contactMethod === "Phone Call"}
                      onChange={handleChange}
                    />
                    <span>Phone Call</span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Online Meeting"
                      checked={formData.contactMethod === "Online Meeting"}
                      onChange={handleChange}
                    />
                    <span>Online Meeting</span>
                  </label>

                </div>

              </div>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="submit-button"
              disabled={sending}
            >
              {sending ? "Sending…" : "Send Enquiry"}
              <span>→</span>
            </button>

            {submitError && (
              <div className="success-message" role="alert" style={{ background: "#fdecea", color: "#b42318" }}>
                {submitError}
              </div>
            )}

            <p className="form-note">
              By submitting this form, you agree to be contacted by
              TechTorch Solutions regarding your enquiry.
            </p>

            {submitted && (
              <div className="success-message">
                Your enquiry has been submitted successfully.
              </div>
            )}

          </form>


          {/* =================================================
              RIGHT INFORMATION CARD
          ================================================= */}

          <aside className="conversation-card">

            <h2>
              Let's Start a Conversation
            </h2>

            <p className="conversation-description">
              Whether you're exploring a new technology initiative,
              modernizing an existing system, or looking for specialized
              expertise, our team is ready to understand your requirements.
            </p>

            <div className="card-divider" />

            <h3 className="next-title">
              WHAT HAPPENS NEXT?
            </h3>


            {/* STEP 1 */}

            <div className="process-step">

              <div className="step-number">
                01
              </div>

              <div>
                <h4>
                  Share Your Requirement
                </h4>

                <p>
                  Tell us about your business needs, project or technology
                  challenge.
                </p>
              </div>

            </div>


            {/* STEP 2 */}

            <div className="process-step">

              <div className="step-number">
                02
              </div>

              <div>
                <h4>
                  We Understand Your Needs
                </h4>

                <p>
                  Our team reviews your requirement and identifies the
                  relevant area of expertise.
                </p>
              </div>

            </div>


            {/* STEP 3 */}

            <div className="process-step">

              <div className="step-number">
                03
              </div>

              <div>
                <h4>
                  Let's Connect
                </h4>

                <p>
                  We'll get in touch to discuss your requirement and possible
                  next steps.
                </p>
              </div>

            </div>


            <div className="card-divider" />


            {/* QUICK RESPONSE */}

            <h3 className="quick-title">
              NEED A QUICKER RESPONSE?
            </h3>

            <div className="question-card">

              <div className="question-icon">
                ?
              </div>

              <div className="question-content">

                <h4>
                  Have a Question?
                </h4>

                <p>
                  Not sure where to start? Ask us anything about our services,
                  solutions or your specific requirement.
                </p>

                <button
                  type="button"
                  className="outline-button"
                >
                  Ask a Question
                  <span>→</span>
                </button>

              </div>

            </div>


            <div className="card-divider" />


            {/* DIRECT CONTACT */}

            <h3 className="direct-title">
              DIRECT CONTACT
            </h3>

            <div className="direct-contact">

              <div className="direct-item">
                <strong>✉</strong>

                <div>
                  <b>Email</b>
                  <span>
                    contact@techtorch.solutions
                  </span>
                </div>
              </div>


              <div className="direct-item">
                <strong>⌕</strong>

                <div>
                  <b>Phone</b>
                  <span>
                    +91 581 3500381 | +91 7251090147
                  </span>
                </div>
              </div>


              <div className="direct-item">
                <strong>●</strong>

                <div>
                  <b>Our Offices</b>
                  <span>
                    Noida&nbsp; | &nbsp;Bareilly&nbsp; | &nbsp;Florida, USA
                  </span>
                </div>
              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* =====================================================
          QUESTION CTA
      ===================================================== */}

      <section className="question-cta">

        <div className="question-cta-inner">

          <div className="question-cta-content">

            <span className="eyebrow light">
              ASK A QUESTION
            </span>

            <h2>
              Have a Question?
              <br />
              We’re Here to Help
            </h2>

            <p>
              Find answers to common questions about our services, solutions,
              technology capabilities, and engagement process.
            </p>

            <button
              type="button"
              className="white-button"
              onClick={() => navigate("/explore-questions")}
            >
              Explore Questions
              <span>→</span>
            </button>

          </div>


          <div className="question-illustration">
            <img
              src="/Question.png"
              alt="Question illustration"
            />
          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT / OFFICES
      ===================================================== */}

      <section className="office-section">

        <div className="office-inner">

          <div className="office-left">

            <span className="eyebrow">
              CONTACT
            </span>

            <h2>
              Connect With TechTorch
            </h2>

            <p className="office-intro">
              For technology solutions, services, products and business
              requirements.
            </p>


            {/* EMAIL + PHONE */}

            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-icon">
                  ✉
                </div>

                <div>
                  <span>
                    EMAIL
                  </span>

                  <strong>
                    contact@techtorch.solutions
                  </strong>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <span>
                    PHONE
                  </span>

                  <strong>
                    +91 581 3500381
                  </strong>

                  <small>
                    +91 7251090147
                  </small>
                </div>

              </div>

            </div>


            <div className="office-divider" />


            {/* OFFICES */}

            <div className="offices-heading">
              <span>●</span>
              Our Offices
            </div>

            <div className="offices-grid">

              <div className="office-column">

                <h3>
                  Noida Office
                </h3>

                <p>
                  Suite G/11, B-8 Sector-2,
                  <br />
                  Near Sector-15 Metro Station,
                  <br />
                  Noida, Uttar Pradesh – 201301, India
                </p>

              </div>


              <div className="office-column">

                <h3>
                  Corporate Office
                </h3>

                <p>
                  M-1 Vrindavan Colony,
                  <br />
                  IVRI Road, Near Izzatnagar
                  <br />
                  Police Station, Bareilly,
                  <br />
                  Uttar Pradesh – 243122, India
                </p>

              </div>


              <div className="office-column">

                <h3>
                  Overseas Office
                </h3>

                <p>
                  Florida, USA
                </p>

              </div>

            </div>


            <div className="office-divider" />


            <div className="business-hours">
              <span>●</span>

              <strong>
                Business Hours:
              </strong>

              Monday – Friday | 10:00 AM – 7:00 PM (IST)
            </div>

          </div>


          {/* MAP */}

          <div className="map-wrapper">

            <span>
              GLOBAL PRESENCE
            </span>

            <img
              src="/GlobalPresence.png"
              alt="Global presence map"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="final-cta">

        <div className="final-cta-inner">

          <div>

            <span className="eyebrow light">
              HAVE A TECHNOLOGY CHALLENGE?
            </span>

            <h2>
              Let's Build the Right Solution for Your
              <br className="desktop-break" />
              Business.
            </h2>

            <p>
              Discuss your requirement with TechTorch Solutions and explore
              the next step.
            </p>

          </div>


          <div className="final-buttons">

            <button
              type="button"
              className="final-white-button"
            >
              Talk to Our Experts
              <span>→</span>
            </button>

            <button
              type="button"
              className="final-outline-button"
            >
              Ask a Question
              <span>→</span>
            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESPONSIVE + PAGE CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .contact-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #121826;
        }

        /* =====================================================
           FONTS
        ===================================================== */

        .contact-page h1,
        .contact-page h2,
        .contact-page h3,
        .contact-page h4,
        .contact-page .eyebrow,
        .contact-page button {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        .contact-page p,
        .contact-page label,
        .contact-page input,
        .contact-page textarea,
        .contact-page select,
        .contact-page span,
        .contact-page small {
          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           COMMON
        ===================================================== */

        .eyebrow {
          display: inline-block;
          color: #8a0048;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 12px;
        }

        .eyebrow.light {
          color: #f5d9e7;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          width: 100%;
          background: #ffffff;
          padding: 70px 100px 78px;
        }

        .contact-hero-inner {
          width: 100%;
          max-width: none;
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 1fr);
          align-items: center;
          gap: 70px;
        }

        .contact-hero-content {
          min-width: 0;
        }

        .contact-hero-content h1 {
          margin: 0 0 18px;
          color: #121826;
          word-spacing: 6px;
          font-size: 40px;
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .contact-hero-content p {
          max-width: 610px;
          margin: 0 0 28px;

          color: #6c7482;
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .contact-hero-image-wrapper {
          width: 100%;
          min-width: 0;
        }

        .contact-hero-image {
          display: block;
          width: 100%;
          max-width: 560px;
          height: 420px;

          margin-left: auto;

          object-fit: cover;
          object-position: center;

          border-radius: 22px;

          box-shadow:
            0 18px 40px rgba(20, 20, 20, 0.14);
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .primary-button,
        .submit-button,
        .white-button,
        .outline-button,
        .final-white-button,
        .final-outline-button {
          border: none;
          cursor: pointer;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          white-space: nowrap;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            border-color 0.25s ease;
        }

        .primary-button {
          min-height: 50px;
          padding: 0 25px;

          border-radius: 28px;

          background: #8a0048;
          color: #ffffff;

          font-size: 14px;
          font-weight: 600;
        }

        .primary-button span,
        .submit-button span,
        .white-button span,
        .outline-button span,
        .final-white-button span,
        .final-outline-button span {
          font-size: 18px;
          line-height: 1;
        }

        .primary-button:hover,
        .submit-button:hover {
          transform: translateY(-2px);
          background: #70003b;
        }


        /* =====================================================
           FORM SECTION
        ===================================================== */

        .contact-form-section {
          width: 100%;
          background: #faf9fb;
          padding: 90px 100px;
        }

        .contact-grid {
          width: 100%;
          max-width: none;
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(350px, 0.85fr);
          gap: 48px;

          align-items: start;
        }


        /* =====================================================
           FORM CARD
        ===================================================== */

        .contact-form-card {
          width: 100%;
          background: #ffffff;

          padding: 40px 42px;

          border: 1px solid #eeeeee;
          border-radius: 22px;

          box-shadow:
            0 5px 18px rgba(25, 25, 25, 0.035);
        }

        .form-header h2 {
          margin: 0 0 10px;

          color: #121826;
          font-size: 31px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .form-header p {
          max-width: 760px;
          margin: 0;

          color: #818896;
          font-size: 14px;
          line-height: 1.65;
        }

        .form-divider,
        .card-divider,
        .office-divider {
          width: 100%;
          height: 1px;
          background: #eeeeee;
        }

        .form-divider {
          margin: 28px 0 34px;
        }

        .form-section {
          margin-bottom: 30px;
        }

        .form-section h3 {
          display: flex;
          align-items: center;
          gap: 10px;

          margin: 0 0 20px;

          color: #1c2432;
          font-size: 17px;
          line-height: 1.3;
          font-weight: 700;
        }

        .section-icon {
          width: 26px;
          height: 26px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #fcecf4;
          color: #8a0048;

          font-size: 12px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 18px;
        }

        .field {
          width: 100%;
          min-width: 0;
        }

        .field.full-width {
          margin-bottom: 18px;
        }

        .field label {
          display: block;

          margin-bottom: 8px;

          color: #38404d;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;
        }

        .field label span {
          color: #8a0048;
          margin-left: 2px;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;

          border: 1px solid #e1e4e8;
          outline: none;

          background: #ffffff;
          color: #3f4652;

          border-radius: 12px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .field input,
        .field select {
          height: 46px;
          padding: 0 16px;
        }

        .field textarea {
          min-height: 110px;
          padding: 14px 16px;
          resize: vertical;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #b6bcc5;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: #8a0048;

          box-shadow:
            0 0 0 3px rgba(138, 0, 72, 0.08);
        }

        .character-count {
          margin-top: 6px;
          text-align: right;

          color: #a7adb6;
          font-family: "Inter", sans-serif;
          font-size: 11px;
        }


        /* =====================================================
           RADIO
        ===================================================== */

        .preferred-contact {
          margin-top: 26px;
        }

        .preferred-title {
          display: block;

          margin-bottom: 14px;

          color: #3d4552;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
        }

        .radio-group {
          display: flex;
          flex-wrap: wrap;
          gap: 26px;
        }

        .radio-option {
          display: flex;
          align-items: center;
          gap: 8px;

          cursor: pointer;

          color: #5d6572;

          font-family: "Inter", sans-serif;
          font-size: 14px;
        }

        .radio-option input {
          appearance: none;

          width: 17px;
          height: 17px;

          margin: 0;

          border: 2px solid #dfe2e6;
          border-radius: 50%;

          background: #ffffff;

          cursor: pointer;

          position: relative;
        }

        .radio-option input:checked {
          border-color: #8a0048;
        }

        .radio-option input:checked::after {
          content: "";

          position: absolute;
          top: 3px;
          left: 3px;

          width: 7px;
          height: 7px;

          border-radius: 50%;
          background: #8a0048;
        }


        /* =====================================================
           SUBMIT
        ===================================================== */

        .submit-button {
          min-height: 50px;

          padding: 0 26px;

          border-radius: 28px;

          background: #8a0048;
          color: #ffffff;

          font-size: 14px;
          font-weight: 600;
        }

        .form-note {
          margin: 14px 0 0;

          color: #b1b6bf;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.5;
        }

        .success-message {
          margin-top: 14px;
          padding: 11px 14px;

          border-radius: 8px;

          background: #f3e5ed;
          color: #8a0048;

          font-family: "Inter", sans-serif;
          font-size: 12px;
        }


        /* =====================================================
           CONVERSATION CARD
        ===================================================== */

        .conversation-card {
          width: 100%;

          padding: 34px 34px;

          border: 1px solid #f1dce6;
          border-radius: 22px;

          background: #fff8fb;
        }

        .conversation-card h2 {
          margin: 0 0 12px;

          color: #161e2d;
          font-size: 27px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .conversation-description {
          margin: 0;

          color: #727987;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.65;
        }

        .card-divider {
          margin: 25px 0;
          background: #ecdde4;
        }

        .next-title,
        .quick-title,
        .direct-title {
          margin: 0 0 18px;

          color: #737b88;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 700;

          letter-spacing: 0.04em;
        }

        .process-step {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr);
          gap: 12px;

          margin-bottom: 21px;
        }

        .step-number {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #8a0048;
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
        }

        .process-step h4 {
          margin: 1px 0 4px;

          color: #202735;

          font-size: 14px;
          line-height: 1.3;
          font-weight: 700;
        }

        .process-step p {
          margin: 0;

          color: #89909b;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }


        /* =====================================================
           QUESTION CARD
        ===================================================== */

        .question-card {
          display: flex;
          gap: 13px;

          padding: 20px;

          background: #ffffff;

          border: 1px solid #efdce6;
          border-radius: 16px;

          box-shadow:
            0 4px 10px rgba(40, 20, 30, 0.03);
        }

        .question-icon {
          flex: 0 0 32px;

          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #faeaf2;
          color: #8a0048;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
        }

        .question-content {
          min-width: 0;
        }

        .question-content h4 {
          margin: 0 0 6px;

          color: #202735;
          font-size: 14px;
          font-weight: 700;
        }

        .question-content p {
          margin: 0 0 14px;

          color: #8a919c;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }

        .outline-button {
          min-height: 38px;

          padding: 0 17px;

          border: 1px solid #8a0048;
          border-radius: 20px;

          background: #ffffff;
          color: #8a0048;

          font-size: 12px;
          font-weight: 700;
        }

        .outline-button:hover {
          background: #8a0048;
          color: #ffffff;
        }


        /* =====================================================
           DIRECT CONTACT
        ===================================================== */

        .direct-contact {
          display: flex;
          flex-direction: column;
          gap: 17px;
        }

        .direct-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .direct-item > strong {
          color: #8a0048;
          font-size: 14px;
          width: 16px;
        }

        .direct-item div {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .direct-item b {
          color: #333b49;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
        }

        .direct-item span {
          color: #818894;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.45;
        }


        /* =====================================================
           QUESTION CTA
        ===================================================== */

        .question-cta {
          width: 100%;

          background: #8a0048;

          padding: 72px 100px;
        }

        .question-cta-inner {
          width: 100%;
          max-width: none;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 40px;
        }

        .question-cta-content {
          max-width: 650px;
        }

        .question-cta h2 {
          margin: 0 0 14px;

          color: #ffffff;

          font-size: 39px;
          line-height: 1.08;
          font-weight: 700;

          letter-spacing: -0.03em;
        }

        .question-cta p {
          max-width: 650px;

          margin: 0 0 25px;

          color: #f5d8e6;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.6;
        }

        .white-button {
          min-height: 48px;

          padding: 0 25px;

          border-radius: 25px;

          background: #ffffff;
          color: #8a0048;

          font-size: 13px;
          font-weight: 700;
        }

        .white-button:hover {
          transform: translateY(-2px);
        }

        .question-illustration {
          flex: 0 0 auto;

          width: 180px;
          height: 180px;
        }

        .question-illustration img {
          width: 100%;
          height: 100%;

          object-fit: contain;
        }


        /* =====================================================
           OFFICE SECTION
        ===================================================== */

        .office-section {
          width: 100%;
          background: #ffffff;

          padding: 78px 100px;
        }

        .office-inner {
          width: 100%;
          max-width: none;

          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(350px, 0.85fr);

          gap: 55px;

          align-items: center;
        }

        .office-left h2 {
          margin: 0 0 8px;

          color: #121826;

          font-size: 37px;
          line-height: 1.15;
          font-weight: 700;

          letter-spacing: -0.03em;
        }

        .office-intro {
          margin: 0;

          color: #7f8793;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.5;
        }

        .contact-details {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 30px;

          margin-top: 40px;
        }

        .contact-detail {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .contact-icon {
          width: 48px;
          height: 48px;

          flex: 0 0 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #8a0048;
          color: #ffffff;

          font-size: 17px;
        }

        .contact-detail > div:last-child {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .contact-detail span {
          color: #7f8793;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;

          letter-spacing: 0.05em;
        }

        .contact-detail strong,
        .contact-detail small {
          color: #252c38;

          font-family: "Inter", sans-serif;
          font-size: 14px;
        }

        .contact-detail small {
          font-size: 12px;
          color: #737b87;
        }

        .office-divider {
          margin: 28px 0;
        }

        .offices-heading {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 25px;

          color: #222a37;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
        }

        .offices-heading span {
          color: #8a0048;
        }

        .offices-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .office-column h3 {
          margin: 0 0 7px;

          color: #222a37;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
        }

        .office-column p {
          margin: 0;

          color: #747d89;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.55;
        }

        .business-hours {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 5px;

          color: #626b78;

          font-family: "Inter", sans-serif;
          font-size: 12px;
        }

        .business-hours > span {
          color: #8a0048;
          margin-right: 4px;
        }

        .business-hours strong {
          color: #343c48;
        }


        /* =====================================================
           MAP
        ===================================================== */

        .map-wrapper {
          width: 100%;

          position: relative;

          padding: 17px;

          border-radius: 24px;

          background: #f4f8fa;
          border: 1px solid #e7ecef;

          overflow: hidden;
        }

        .map-wrapper > span {
          position: absolute;

          top: 19px;
          left: 22px;

          z-index: 2;

          color: #68717d;

          font-family: "Inter", sans-serif;
          font-size: 8px;
          font-weight: 700;

          letter-spacing: 0.05em;
        }

        .map-wrapper img {
          display: block;

          width: 100%;
          height: 290px;

          object-fit: contain;
          object-position: center;
        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .final-cta {
          width: 100%;

          padding: 55px 100px;

          background:
            linear-gradient(
              90deg,
              #8a0048 0%,
              #78003f 100%
            );

          position: relative;
          overflow: hidden;
        }

        .final-cta::before {
          content: "";

          position: absolute;

          width: 100%;
          height: 100%;

          left: 0;
          top: 0;

          opacity: 0.18;

          background:
            radial-gradient(
              ellipse at 20% 80%,
              transparent 0 45%,
              #ffffff 46% 46.2%,
              transparent 46.3%
            );

          pointer-events: none;
        }

        .final-cta-inner {
          position: relative;
          z-index: 1;

          width: 100%;
          max-width: none;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 35px;
        }

        .final-cta h2 {
          margin: 0 0 5px;

          color: #ffffff;

          font-size: 28px;
          line-height: 1.15;
          font-weight: 700;

          letter-spacing: -0.025em;
        }

        .final-cta p {
          margin: 0;

          color: #f2d4e2;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }

        .final-buttons {
          display: flex;
          align-items: center;
          gap: 12px;

          flex-shrink: 0;
        }

        .final-white-button {
          min-height: 46px;

          padding: 0 21px;

          border-radius: 25px;

          background: #ffffff;
          color: #8a0048;

          font-size: 12px;
          font-weight: 700;
        }

        .final-outline-button {
          min-height: 46px;

          padding: 0 21px;

          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 25px;

          background: transparent;
          color: #ffffff;

          font-size: 12px;
          font-weight: 600;
        }

        .final-outline-button:hover {
          background: #ffffff;
          color: #8a0048;
        }


        /* =====================================================
           FOOTER-ALIGNED HORIZONTAL PADDING
        ===================================================== */

        @media (min-width: 1024px) {
          .contact-hero,
          .contact-form-section,
          .question-cta,
          .office-section,
          .final-cta {
            padding-left: 100px;
            padding-right: 100px;
          }
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .contact-hero-inner {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(360px, 0.9fr);

            gap: 45px;
          }

          .contact-hero-content h1 {
            font-size: 42px;
          }

          .contact-grid,
          .office-inner {
            grid-template-columns:
              minmax(0, 1.25fr)
              minmax(320px, 0.8fr);

            gap: 30px;
          }

          .contact-form-card {
            padding: 34px;
          }

          .conversation-card {
            padding: 30px;
          }

          .question-cta h2 {
            font-size: 34px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .contact-hero {
            padding: 55px 40px 65px;
          }

          .contact-hero-inner {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .contact-hero-content {
            max-width: 700px;
          }

          .contact-hero-content h1 {
            font-size: 40px;
          }

          .contact-hero-image-wrapper {
            max-width: 650px;
          }

          .contact-hero-image {
            max-width: 100%;
            height: 390px;
            margin: 0;
          }


          .contact-form-section {
            padding: 65px 40px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .conversation-card {
            max-width: 100%;
          }


          .question-cta {
            padding: 60px 40px;
          }

          .question-cta-inner {
            align-items: center;
          }


          .office-section {
            padding: 65px 40px;
          }

          .office-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .map-wrapper {
            max-width: 650px;
          }

          .map-wrapper img {
            height: 300px;
          }


          .final-cta {
            padding: 50px 40px;
          }

        }


        /* =====================================================
           SMALL TABLET / IPAD
        ===================================================== */

        @media (max-width: 768px) {

          .contact-hero {
            padding: 50px 24px 60px;
          }

          .contact-hero-content h1 {
            font-size: 36px;
            line-height: 1.08;
          }

          .contact-hero-content p {
            font-size: 15px;
          }

          .contact-hero-image {
            height: 340px;
            border-radius: 18px;
          }


          .contact-form-section {
            padding: 55px 24px;
          }

          .contact-form-card {
            padding: 30px 26px;
            border-radius: 18px;
          }

          .form-header h2 {
            font-size: 28px;
          }

          .form-row {
            gap: 14px;
          }


          .question-cta {
            padding: 55px 24px;
          }

          .question-cta-inner {
            gap: 25px;
          }

          .question-cta h2 {
            font-size: 31px;
          }

          .question-illustration {
            width: 145px;
            height: 145px;
          }


          .office-section {
            padding: 55px 24px;
          }

          .office-left h2 {
            font-size: 32px;
          }

          .offices-grid {
            gap: 18px;
          }


          .final-cta {
            padding: 45px 24px;
          }

          .final-cta h2 {
            font-size: 25px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .desktop-break {
            display: none;
          }

          .eyebrow {
            font-size: 11px;
            margin-bottom: 9px;
          }


          /* HERO */

          .contact-hero {
            padding: 42px 16px 48px;
          }

          .contact-hero-inner {
            gap: 30px;
          }

          .contact-hero-content h1 {
            font-size: 32px;
            line-height: 1.1;
            letter-spacing: -0.025em;
          }

          .contact-hero-content p {
            margin-bottom: 22px;
            font-size: 14px;
            line-height: 1.6;
          }

          .primary-button {
            min-height: 46px;
            padding: 0 21px;
            font-size: 12px;
          }

          .contact-hero-image {
            height: 260px;
            border-radius: 15px;
          }


          /* FORM */

          .contact-form-section {
            padding: 40px 16px;
          }

          .contact-form-card {
            padding: 25px 18px;
            border-radius: 16px;
          }

          .form-header h2 {
            font-size: 25px;
            line-height: 1.2;
          }

          .form-header p {
            font-size: 13px;
          }

          .form-divider {
            margin: 22px 0 27px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 15px;
          }

          .form-section {
            margin-bottom: 25px;
          }

          .form-section h3 {
            font-size: 15px;
            margin-bottom: 16px;
          }

          .field input,
          .field select {
            height: 44px;
            font-size: 13px;
          }

          .field textarea {
            min-height: 120px;
            font-size: 13px;
          }

          .radio-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 13px;
          }

          .submit-button {
            width: 100%;
            min-height: 47px;
            font-size: 13px;
          }

          .form-note {
            font-size: 10px;
          }


          /* RIGHT CARD */

          .conversation-card {
            padding: 25px 20px;
            border-radius: 17px;
          }

          .conversation-card h2 {
            font-size: 24px;
          }

          .conversation-description {
            font-size: 13px;
          }

          .process-step {
            grid-template-columns: 35px minmax(0, 1fr);
          }

          .step-number {
            width: 32px;
            height: 32px;
          }

          .process-step h4 {
            font-size: 13px;
          }

          .process-step p {
            font-size: 11px;
          }

          .question-card {
            padding: 16px;
          }


          /* QUESTION CTA */

          .question-cta {
            padding: 48px 16px;
          }

          .question-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .question-cta-content {
            max-width: 100%;
          }

          .question-cta h2 {
            font-size: 28px;
          }

          .question-cta p {
            font-size: 13px;
          }

          .question-illustration {
            align-self: center;

            width: 125px;
            height: 125px;
          }


          /* OFFICES */

          .office-section {
            padding: 45px 24px;
          }

          .office-left h2 {
            font-size: 29px;
          }

          .office-intro {
            font-size: 13px;
          }

          .contact-details {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-top: 30px;
          }

          .offices-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .office-column h3 {
            font-size: 13px;
          }

          .office-column p {
            font-size: 11px;
          }

          .business-hours {
            font-size: 10px;
          }

          .map-wrapper {
            padding: 10px;
            border-radius: 17px;
          }

          .map-wrapper img {
            height: 210px;
          }


          /* FINAL CTA */

          .final-cta {
            padding: 42px 16px;
          }

          .final-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .final-cta h2 {
            font-size: 24px;
          }

          .final-cta p {
            font-size: 11px;
          }

          .final-buttons {
            width: 100%;
            flex-wrap: wrap;
          }

          .final-white-button,
          .final-outline-button {
            flex: 1;
            min-width: 145px;
            font-size: 11px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .contact-hero {
            padding-left: 16px;
            padding-right: 16px;
          }

          .contact-hero-content h1 {
            font-size: 28px;
          }

          .contact-hero-content p {
            font-size: 13px;
          }

          .contact-hero-image {
            height: 220px;
          }


          .contact-form-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .contact-form-card {
            padding: 22px 15px;
          }

          .form-header h2 {
            font-size: 22px;
          }


          .conversation-card {
            padding: 22px 16px;
          }

          .conversation-card h2 {
            font-size: 21px;
          }


          .question-cta {
            padding-left: 16px;
            padding-right: 16px;
          }

          .question-cta h2 {
            font-size: 25px;
          }


          .office-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .office-left h2 {
            font-size: 26px;
          }


          .final-cta {
            padding-left: 16px;
            padding-right: 16px;
          }

          .final-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .final-white-button,
          .final-outline-button {
            width: 100%;
            flex: none;
          }

        }

      `}</style>
    </main>
  );
}