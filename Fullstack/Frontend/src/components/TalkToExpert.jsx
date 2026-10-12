import React, { useState } from "react";
import axios from "axios";

const CONTACT = {
  phone: "7895017808",
  email: "contact@techtorch.solutions",
  whatsapp: "7895017808",
};

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!PHONE_REGEX.test(form.phone)) {
      newErrors.phone =
        "Enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.";
    }

    if (!form.details.trim()) {
      newErrors.details =
        "Please tell us a little about your requirements.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit the enquiry to the backend instead of WhatsApp.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");

    if (isSubmitting) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API_URL}/expert-queries`, {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone,
        company: form.company.trim(),
        preferredTime: form.preferredTime,
        details: form.details.trim(),
      });

      setStatus(
        response.data?.message ||
          "Your enquiry has been submitted successfully."
      );

      setForm({ ...INITIAL_FORM });
      setErrors({});
    } catch (error) {
      console.error(
        "Expert enquiry submission failed:",
        error.response?.data || error.message
      );

      setStatus(
        error.response?.data?.message ||
          "Unable to submit your enquiry. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="expert-section">
        <div className="expert-layout">
          {/* LEFT CONTENT */}
          <div className="expert-intro">
            <span className="expert-eyebrow">LET'S TALK</span>

            <h1>
              Talk to Our <span>Experts</span>
            </h1>

            <p className="expert-description">
              Have a project in mind or looking for the right technology
              solution? Our team is here to understand your needs and help
              you move forward with confidence.
            </p>

            <div className="expert-contact-list">
              {/* CALL */}
              <a
                href={`tel:+91${CONTACT.phone}`}
                className="expert-contact-item"
              >
                <div className="expert-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.76 2.04Z" />
                  </svg>
                </div>

                <div className="expert-contact-text">
                  <span>Call Us</span>
                  <strong>+91 {CONTACT.phone}</strong>
                  <small>Speak directly with our team</small>
                </div>

                <span className="expert-contact-arrow">↗</span>
              </a>

              {/* EMAIL */}
<a
  href={`mailto:${CONTACT.email}`}
  className="expert-contact-item"
  onClick={(e) => {
    window.location.href = `mailto:${CONTACT.email}`;
  }}
>
  <div className="expert-contact-icon">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  </div>

  <div className="expert-contact-text">
    <span>Email Us</span>
    <strong>{CONTACT.email}</strong>
    <small>Send us your project requirements</small>
  </div>

  <span className="expert-contact-arrow">↗</span>
</a>

              {/* WHATSAPP CONTACT LINK */}
              <a
                href={`https://wa.me/91${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="expert-contact-item"
              >
                <div className="expert-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                    <path d="M8.5 9.5c.5 2 2 3.5 4 4" />
                  </svg>
                </div>

                <div className="expert-contact-text">
                  <span>WhatsApp</span>
                  <strong>Chat With Us</strong>
                  <small>Connect with us instantly</small>
                </div>

                <span className="expert-contact-arrow">↗</span>
              </a>
            </div>

            <div className="expert-note">
              <span className="expert-note-dot"></span>
              <p>
                Tell us what you are building. We will help you explore the
                right solution for your business.
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="expert-form-card">
            <div className="expert-form-heading">
              <h2>Let's Start a Conversation</h2>

              <p>
                Fill in your details and tell us how we can help.
              </p>
            </div>

            <form
              className="expert-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* FULL NAME */}
              <div className="expert-field">
                <label htmlFor="fullName">
                  Full Name <span>*</span>
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  className={errors.fullName ? "expert-input-error" : ""}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                />

                {errors.fullName && (
                  <p className="expert-error" id="fullName-error">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="expert-field">
                <label htmlFor="email">
                  Email Address <span>*</span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={errors.email ? "expert-input-error" : ""}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                />

                {errors.email && (
                  <p className="expert-error" id="email-error">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div className="expert-field">
                <label htmlFor="phone">
                  Phone Number <span>*</span>
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  className={errors.phone ? "expert-input-error" : ""}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "phone-error" : undefined
                  }
                />

                {errors.phone && (
                  <p className="expert-error" id="phone-error">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* COMPANY */}
              <div className="expert-field">
                <label htmlFor="company">
                  Company Name
                  <span className="expert-optional"> (Optional)</span>
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>

              {/* PREFERRED TIME */}
              <div className="expert-field">
                <label htmlFor="preferredTime">
                  Preferred Time to Connect
                </label>

                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Select a convenient time</option>
                  <option value="Morning (9 AM - 12 PM)">
                    Morning (9 AM - 12 PM)
                  </option>
                  <option value="Afternoon (12 PM - 4 PM)">
                    Afternoon (12 PM - 4 PM)
                  </option>
                  <option value="Evening (4 PM - 7 PM)">
                    Evening (4 PM - 7 PM)
                  </option>
                </select>
              </div>

              {/* REQUIREMENTS */}
              <div className="expert-field">
                <label htmlFor="details">
                  How Can We Help You? <span>*</span>
                </label>

                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  placeholder="Tell us about your project or requirements..."
                  value={form.details}
                  onChange={handleChange}
                  className={errors.details ? "expert-input-error" : ""}
                  aria-invalid={Boolean(errors.details)}
                  aria-describedby={
                    errors.details ? "details-error" : undefined
                  }
                />

                {errors.details && (
                  <p className="expert-error" id="details-error">
                    {errors.details}
                  </p>
                )}
              </div>

              {/* SUCCESS OR ERROR MESSAGE */}
              {status && (
                <p
                  className={
                    status.toLowerCase().includes("successfully")
                      ? "expert-success"
                      : "expert-status"
                  }
                  role="status"
                >
                  {status}
                </p>
              )}

              {/* SUBMIT TO BACKEND */}
              <button
                type="submit"
                className="expert-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? "Submitting..."
                    : "Talk to Our Experts"}
                </span>

                <span className="expert-submit-arrow" aria-hidden="true">
                  →
                </span>
              </button>

              <p className="expert-privacy">
                Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .expert-section {
          width: 100%;
          padding: 70px 0;
          background: #efefef;
          font-family: 'Inter', sans-serif;
          box-sizing: border-box;
        }

        .expert-section *,
        .expert-section *::before,
        .expert-section *::after {
          box-sizing: border-box;
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

        .expert-intro {
          width: 100%;
          max-width: 620px;
          padding-top: 20px;
        }

        .expert-eyebrow {
          display: inline-block;
          color: #730042;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .expert-intro h1 {
          margin: 0 0 22px;
          color: #1b1b2a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(34px, 4vw, 54px);
          font-weight: 800;
          line-height: 1.16;
          letter-spacing: -1.8px;
        }

        .expert-intro h1 span {
          color: #730042;
        }

        .expert-description {
          max-width: 560px;
          margin: 0 0 32px;
          color: #5b5a63;
          font-size: 15px;
          line-height: 1.9;
        }

        .expert-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .expert-contact-item {
          display: flex;
          align-items: center;
          gap: 17px;
          width: 100%;
          padding: 19px 20px;
          background: #fff;
          border: 1px solid #e8e3e7;
          border-radius: 15px;
          color: inherit;
          text-decoration: none;
          transition: border-color 0.25s ease, transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .expert-contact-item:hover {
          border-color: #730042;
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(115, 0, 66, 0.08);
        }

        .expert-contact-icon {
          display: flex;
          flex: 0 0 48px;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f8edf3;
          color: #730042;
        }

        .expert-contact-icon svg {
          width: 23px;
          height: 23px;
        }

        .expert-contact-text {
          display: flex;
          flex: 1;
          flex-direction: column;
          min-width: 0;
          gap: 5px;
        }

        .expert-contact-text span {
          color: #77717a;
          font-size: 12px;
          font-weight: 500;
        }

        .expert-contact-text strong {
          overflow-wrap: anywhere;
          color: #1b1b2a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
        }

        .expert-contact-text small {
          color: #77717a;
          font-size: 12px;
          line-height: 1.6;
        }

        .expert-contact-arrow {
          flex-shrink: 0;
          color: #730042;
          font-size: 21px;
          transition: transform 0.25s ease;
        }

        .expert-contact-item:hover .expert-contact-arrow {
          transform: translate(3px, -3px);
        }

        .expert-note {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: 25px;
          padding: 18px 20px;
          border-left: 3px solid #730042;
          background: rgba(255, 255, 255, 0.55);
          border-radius: 0 10px 10px 0;
        }

        .expert-note-dot {
          flex: 0 0 8px;
          width: 8px;
          height: 8px;
          margin-top: 6px;
          border-radius: 50%;
          background: #730042;
        }

        .expert-note p {
          margin: 0;
          color: #5b5a63;
          font-size: 12px;
          line-height: 1.8;
        }

        .expert-form-card {
          width: 100%;
          min-width: 0;
          padding: 34px;
          background: #fff;
          border: 1px solid #eae5e9;
          border-radius: 22px;
          box-shadow: 0 18px 55px rgba(27, 27, 42, 0.06);
        }

        .expert-form-heading {
          margin-bottom: 26px;
        }

        .expert-form-heading h2 {
          margin: 0 0 12px;
          color: #1b1b2a;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: clamp(23px, 2.2vw, 29px);
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: -0.7px;
        }

        .expert-form-heading p {
          margin: 0;
          color: #77717a;
          font-size: 13px;
          line-height: 1.8;
        }

        .expert-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .expert-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
          min-width: 0;
        }

        .expert-field label {
          color: #292735;
          font-size: 12px;
          font-weight: 700;
        }

        .expert-field label > span:not(.expert-optional) {
          color: #730042;
        }

        .expert-field .expert-optional {
          color: #89838c;
          font-size: 11px;
          font-weight: 400;
        }

        .expert-field input,
        .expert-field select,
        .expert-field textarea {
          width: 100%;
          min-width: 0;
          padding: 13px 14px;
          border: 1px solid #e4dfe4;
          border-radius: 9px;
          outline: none;
          background: #fff;
          color: #1b1b2a;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.5;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .expert-field input,
        .expert-field select {
          min-height: 46px;
        }

        .expert-field textarea {
          min-height: 115px;
          resize: vertical;
        }

        .expert-field input::placeholder,
        .expert-field textarea::placeholder {
          color: #a29ba5;
        }

        .expert-field input:focus,
        .expert-field select:focus,
        .expert-field textarea:focus {
          border-color: #730042;
          box-shadow: 0 0 0 3px rgba(115, 0, 66, 0.08);
        }

        .expert-field input.expert-input-error,
        .expert-field textarea.expert-input-error {
          border-color: #c62828;
        }

        .expert-field input.expert-input-error:focus,
        .expert-field textarea.expert-input-error:focus {
          box-shadow: 0 0 0 3px rgba(198, 40, 40, 0.08);
        }

        .expert-error {
          margin: -2px 0 0;
          color: #c62828;
          font-size: 11px;
          line-height: 1.6;
        }

        .expert-success,
        .expert-status {
          margin: 0;
          padding: 12px 14px;
          border: 1px solid;
          border-radius: 9px;
          font-size: 12px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .expert-success {
          border-color: #b7dfc2;
          background: #f0faf3;
          color: #226b38;
        }

        .expert-status {
          border-color: #edc4c4;
          background: #fff5f5;
          color: #a52222;
        }

        .expert-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          width: 100%;
          min-height: 53px;
          padding: 14px 19px;
          border: 1px solid #730042;
          border-radius: 999px;
          background: #730042;
          color: #fff;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.25s ease, box-shadow 0.25s ease;
        }

        .expert-submit:hover:not(:disabled) {
          background: #fff;
          color: #730042;
          box-shadow: 0 8px 22px rgba(115, 0, 66, 0.1);
          transform: translateY(-2px);
        }

        .expert-submit:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .expert-submit-arrow {
          font-size: 20px;
          line-height: 1;
          transition: transform 0.25s ease;
        }

        .expert-submit:hover:not(:disabled) .expert-submit-arrow {
          transform: translateX(4px);
        }

        .expert-privacy {
          margin: -5px 0 0;
          color: #89838c;
          font-size: 10px;
          line-height: 1.7;
          text-align: center;
        }

        @media (max-width: 1200px) {
          .expert-layout {
            gap: 35px;
          }

          .expert-form-card {
            padding: 28px;
          }
        }

        @media (max-width: 1023px) {
          .expert-section {
            padding: 55px 0;
          }

          .expert-layout {
            padding: 0 40px;
            grid-template-columns: minmax(0, 1fr) minmax(0, 400px);
            gap: 28px;
          }

          .expert-intro h1 {
            font-size: 40px;
          }

          .expert-form-card {
            padding: 25px;
          }

          .expert-contact-item {
            gap: 12px;
            padding: 16px;
          }

          .expert-contact-icon {
            flex-basis: 42px;
            width: 42px;
            height: 42px;
          }

          .expert-contact-text strong {
            font-size: 13px;
          }
        }

        @media (max-width: 767px) {
          .expert-section {
            padding: 45px 0;
          }

          .expert-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 35px;
            padding: 0 24px;
          }

          .expert-intro {
            max-width: none;
            padding-top: 0;
          }

          .expert-intro h1 {
            font-size: clamp(32px, 7vw, 42px);
            letter-spacing: -1.2px;
          }

          .expert-description {
            font-size: 14px;
            line-height: 1.8;
          }

          .expert-form-card {
            max-width: none;
            padding: 25px;
            border-radius: 17px;
          }

          .expert-form-heading h2 {
            font-size: 25px;
          }
        }

        @media (max-width: 480px) {
          .expert-section {
            padding: 35px 0;
          }

          .expert-layout {
            padding: 0 16px;
            gap: 28px;
          }

          .expert-eyebrow {
            margin-bottom: 13px;
          }

          .expert-intro h1 {
            margin-bottom: 17px;
            font-size: 32px;
          }

          .expert-description {
            margin-bottom: 23px;
            font-size: 13px;
          }

          .expert-contact-item {
            gap: 12px;
            padding: 14px 12px;
            border-radius: 12px;
          }

          .expert-contact-icon {
            flex-basis: 40px;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .expert-contact-icon svg {
            width: 20px;
            height: 20px;
          }

          .expert-contact-text strong {
            font-size: 12px;
          }

          .expert-contact-text small {
            font-size: 10px;
          }

          .expert-contact-arrow {
            font-size: 18px;
          }

          .expert-note {
            padding: 14px;
          }

          .expert-form-card {
            padding: 20px 16px;
            border-radius: 15px;
          }

          .expert-form-heading h2 {
            font-size: 23px;
          }

          .expert-form {
            gap: 16px;
          }

          .expert-field input,
          .expert-field select,
          .expert-field textarea {
            font-size: 12px;
          }

          .expert-submit {
            padding: 13px 16px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}