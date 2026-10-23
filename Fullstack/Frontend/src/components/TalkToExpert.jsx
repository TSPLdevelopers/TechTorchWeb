import { API_BASE } from "../apiBase";
import React, { useState } from "react";
import axios from "axios";

const CONTACT = {
  phone: "+91 72510 90147",
  email: "contact@techtorch.solutions",
  whatsapp: "+91 72510 90147",
};

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  preferredTime: "",
  details: "",
};

export default function TalkToExpert() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setForm((prev) => ({ ...prev, [name]: updatedValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!PHONE_REGEX.test(form.phone)) {
      nextErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!form.details.trim()) {
      nextErrors.details = "Please tell us how we can help.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      await axios.post(`${API_URL}/api/expert-queries`, {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone,
        company: form.company.trim(),
        preferredTime: form.preferredTime,
        details: form.details.trim(),
      });

      setStatus({
        type: "success",
        message: "Thank you! Your request has been submitted successfully.",
      });

      setForm(INITIAL_FORM);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "We couldn't submit your request. Please try again or contact us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="expert-section">
      <div className="expert-layout">
        {/* LEFT CONTENT */}
        <div className="expert-left">
          <span className="expert-eyebrow">LET'S TALK</span>

          <h1 className="expert-main-heading">
            Talk to Our <span>Experts</span>
          </h1>

          <p className="expert-description">
            Have a business challenge or an idea you want to bring to life?
            Our team is here to understand your needs and help you find the
            right technology solutions.
          </p>

          <div className="expert-contact-list">
            <a
              href={`tel:${CONTACT.phone}`}
              className="expert-contact-item"
            >
              <span className="expert-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.76 2.04Z" />
                </svg>
              </span>

              <span className="expert-contact-copy">
                <span className="expert-contact-label">Call Us</span>
                <strong>{CONTACT.phone}</strong>
              </span>
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                CONTACT.email
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="expert-contact-item"
            >
              <span className="expert-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </span>

              <span className="expert-contact-copy">
                <span className="expert-contact-label">Email Us</span>
                <strong>{CONTACT.email}</strong>
              </span>
            </a>

            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="expert-contact-item"
            >
              <span className="expert-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
                  <path d="M8.5 8.5c.4 2.2 2.1 3.9 4.3 4.3" />
                </svg>
              </span>

              <span className="expert-contact-copy">
                <span className="expert-contact-label">WhatsApp</span>
                <strong>Chat with our team</strong>
              </span>
            </a>
          </div>

          <div className="expert-note">
            <span className="expert-note-dot" />
            <p>Let's work together to turn your ideas into impact.</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="expert-form-card">
          <div className="expert-form-heading">
            <span className="expert-eyebrow">GET IN TOUCH</span>
            <h2>Let's Start a Conversation</h2>
            <p>
              Share a few details about your requirements. Our team will get
              back to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="expert-form-grid">
              <div className="expert-field">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.fullName)}
                />
                {errors.fullName && (
                  <small className="expert-error">{errors.fullName}</small>
                )}
              </div>

              <div className="expert-field">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <small className="expert-error">{errors.email}</small>
                )}
              </div>

              <div className="expert-field">
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <small className="expert-error">{errors.phone}</small>
                )}
              </div>

              <div className="expert-field">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company (optional)"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="expert-field expert-field-full">
                <label htmlFor="preferredTime">Preferred Time to Connect</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Select a convenient time</option>
                  <option value="Morning">Morning (9 AM – 12 PM)</option>
                  <option value="Afternoon">Afternoon (12 PM – 4 PM)</option>
                  <option value="Evening">Evening (4 PM – 7 PM)</option>
                </select>
              </div>

              <div className="expert-field expert-field-full">
                <label htmlFor="details">
                  How Can We Help You? <span>*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  placeholder="Tell us about your project, goals, or requirements..."
                  value={form.details}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.details)}
                />
                {errors.details && (
                  <small className="expert-error">{errors.details}</small>
                )}
              </div>
            </div>

            {status.message && (
              <div
                className={`expert-status expert-status-${status.type}`}
                role="status"
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="expert-submit-btn"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Your Request"}
              {!submitting && <span aria-hidden="true">→</span>}
            </button>

            <p className="expert-privacy-note">
              Your information will only be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .expert-section,
        .expert-section * {
          box-sizing: border-box;
        }

        .expert-section {
          width: 100%;
          padding: 70px 0;
          background: #efefef;
          color: #1b1b2a;
          font-family: 'Inter', sans-serif;
        }

        .expert-section h1,
        .expert-section h2,
        .expert-section h3,
        .expert-section h4,
        .expert-section h5,
        .expert-section h6,
        .expert-section h1 span,
        .expert-section h2 span {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .expert-section p,
        .expert-section a,
        .expert-section label,
        .expert-section input,
        .expert-section select,
        .expert-section textarea,
        .expert-section button,
        .expert-section small,
        .expert-section strong,
        .expert-section .expert-eyebrow,
        .expert-section .expert-contact-label {
          font-family: 'Inter', sans-serif;
        }

        .expert-layout {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 100px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(380px, 460px);
          gap: 65px;
          align-items: start;
        }

        .expert-left {
          padding-top: 22px;
          min-width: 0;
        }

        .expert-eyebrow {
          display: inline-block;
          color: #730042;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 17px;
        }

        .expert-main-heading {
          margin: 0 0 22px;
          max-width: 650px;
          font-size: clamp(36px, 4vw, 58px);
          line-height: 1.12;
          letter-spacing: -1.8px;
          font-weight: 700;
        }

        .expert-main-heading span {
          color: #730042;
        }

        .expert-description {
          max-width: 570px;
          margin: 0;
          color: #5b5a63;
          font-size: 16px;
          line-height: 1.9;
        }

        .expert-contact-list {
          display: grid;
          gap: 16px;
          margin-top: 38px;
          max-width: 500px;
        }

        .expert-contact-item {
          display: flex;
          align-items: center;
          gap: 17px;
          min-width: 0;
          padding: 16px;
          border: 1px solid #e0dce0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.65);
          color: #1b1b2a;
          text-decoration: none;
          transition: border-color 0.25s ease, transform 0.25s ease,
            background 0.25s ease;
        }

        .expert-contact-item:hover {
          border-color: #730042;
          background: #fff;
          transform: translateY(-2px);
        }

        .expert-contact-icon {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #f4e8ef;
          color: #730042;
        }

        .expert-contact-icon svg {
          width: 22px;
          height: 22px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .expert-contact-copy {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .expert-contact-label {
          color: #77717b;
          font-size: 12px;
          font-weight: 500;
        }

        .expert-contact-copy strong {
          overflow-wrap: anywhere;
          font-size: 15px;
          font-weight: 600;
        }

        .expert-note {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-top: 30px;
          color: #5b5a63;
          font-size: 13px;
          line-height: 1.7;
        }

        .expert-note p {
          margin: 0;
        }

        .expert-note-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 8px;
          border-radius: 50%;
          background: #730042;
        }

        .expert-form-card {
          min-width: 0;
          padding: 32px;
          border: 1px solid #e7e3e7;
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 15px 45px rgba(27, 27, 42, 0.06);
        }

        .expert-form-heading {
          margin-bottom: 26px;
        }

        .expert-form-heading .expert-eyebrow {
          margin-bottom: 11px;
        }

        .expert-form-heading h2 {
          margin: 0 0 11px;
          font-size: clamp(23px, 2vw, 30px);
          line-height: 1.3;
          letter-spacing: -0.7px;
          font-weight: 700;
        }

        .expert-form-heading p {
          margin: 0;
          color: #77717b;
          font-size: 13px;
          line-height: 1.8;
        }

        .expert-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 19px 15px;
        }

        .expert-field {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .expert-field-full {
          grid-column: 1 / -1;
        }

        .expert-field label {
          margin-bottom: 8px;
          color: #292633;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.5;
        }

        .expert-field label span {
          color: #730042;
        }

        .expert-field input,
        .expert-field select,
        .expert-field textarea {
          width: 100%;
          min-width: 0;
          border: 1px solid #dedbe1;
          border-radius: 8px;
          outline: none;
          background: #fff;
          color: #1b1b2a;
          font-size: 13px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .expert-field input,
        .expert-field select {
          height: 46px;
          padding: 0 12px;
        }

        .expert-field textarea {
          min-height: 110px;
          padding: 12px;
          resize: vertical;
          line-height: 1.7;
        }

        .expert-field input::placeholder,
        .expert-field textarea::placeholder {
          color: #aaa5ae;
        }

        .expert-field input:focus,
        .expert-field select:focus,
        .expert-field textarea:focus {
          border-color: #730042;
          box-shadow: 0 0 0 3px rgba(115, 0, 66, 0.08);
        }

        .expert-field input[aria-invalid="true"],
        .expert-field textarea[aria-invalid="true"] {
          border-color: #c62828;
        }

        .expert-error {
          margin-top: 6px;
          color: #c62828;
          font-size: 11px;
          line-height: 1.5;
        }

        .expert-status {
          margin-top: 18px;
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 12px;
          line-height: 1.7;
        }

        .expert-status-success {
          color: #17653a;
          border: 1px solid #b9e2c8;
          background: #effaf2;
        }

        .expert-status-error {
          color: #a52222;
          border: 1px solid #f0c7c7;
          background: #fff3f3;
        }

        .expert-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          min-height: 50px;
          margin-top: 22px;
          padding: 13px 18px;
          border: 1px solid #730042;
          border-radius: 8px;
          background: #730042;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease,
            border-color 0.25s ease;
        }

        .expert-submit-btn:hover:not(:disabled) {
          background: #fff;
          color: #730042;
        }

        .expert-submit-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .expert-submit-btn span {
          font-size: 20px;
          line-height: 1;
        }

        .expert-privacy-note {
          margin: 13px 0 0;
          color: #8b8690;
          font-size: 11px;
          line-height: 1.7;
          text-align: center;
        }

        /* Tablet */
        @media (max-width: 1100px) {
          .expert-layout {
            padding: 0 40px;
            grid-template-columns: minmax(0, 1fr) minmax(340px, 430px);
            gap: 35px;
          }

          .expert-form-card {
            padding: 26px;
          }

          .expert-main-heading {
            font-size: clamp(34px, 4.5vw, 48px);
          }
        }

        /* Tablet and smaller laptops */
        @media (max-width: 850px) {
          .expert-section {
            padding: 55px 0;
          }

          .expert-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 35px;
          }

          .expert-left {
            padding-top: 0;
          }

          .expert-description {
            max-width: 680px;
          }

          .expert-contact-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            max-width: none;
          }

          .expert-form-card {
            width: 100%;
            max-width: 650px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .expert-section {
            padding: 42px 0;
          }

          .expert-layout {
            padding: 0 24px;
            gap: 28px;
          }

          .expert-main-heading {
            font-size: clamp(33px, 8vw, 43px);
            letter-spacing: -1.2px;
          }

          .expert-description {
            font-size: 14px;
            line-height: 1.85;
          }

          .expert-contact-list {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
            margin-top: 26px;
          }

          .expert-contact-item {
            padding: 13px;
          }

          .expert-form-card {
            padding: 23px 19px;
            border-radius: 14px;
          }

          .expert-form-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 17px;
          }

          .expert-field-full {
            grid-column: auto;
          }

          .expert-form-heading h2 {
            font-size: 25px;
          }
        }

        /* Small mobile */
        @media (max-width: 380px) {
          .expert-layout {
            padding: 0 16px;
          }

          .expert-section {
            padding: 35px 0;
          }

          .expert-main-heading {
            font-size: 31px;
          }

          .expert-form-card {
            padding: 20px 15px;
          }

          .expert-contact-icon {
            width: 42px;
            height: 42px;
            flex-basis: 42px;
          }

          .expert-contact-copy strong {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}
