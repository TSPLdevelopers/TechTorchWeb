import React, { useState } from "react";

export default function AdvisoryFramework() {
  const [timeline, setTimeline] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    organization: "",
    industry: "",
    challenge: "",
    context: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleTimeline = (value) => {
    setTimeline(value);

    setErrors((prev) => ({
      ...prev,
      timeline: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Enter your company email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid company email";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Enter your organization name";
    }

    if (!formData.industry.trim()) {
      newErrors.industry = "Select an industry";
    }

    if (!formData.challenge.trim()) {
      newErrors.challenge = "Enter your critical challenge";
    }

    if (!timeline) {
      newErrors.timeline = "Select a deployment timeline";
    }

    if (!formData.context.trim()) {
      newErrors.context = "Tell us about your objectives";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Inquiry submitted successfully!");

      // Backend/API submit logic yahan add kar sakte ho.
    }
  };

  const scopeCards = [
    {
      icon: "⚯",
      title: "Peer Threat Vector Benchmark",
      description:
        "Real-time risk scoring calibrated against current adversary activity in your specific industry vertical.",
    },
    {
      icon: "♙",
      title: "Vector Squad Blueprint",
      description:
        "A bespoke operational schema detailing exact specialist deployment without burdening internal engineering teams.",
    },
    {
      icon: "▣",
      title: "Executive 30-60-90 Day Playbook",
      description:
        "Synthesized governance summary, board-ready impact analysis, and step-by-step remediation timeline.",
    },
  ];

  return (
    <section className="advisory-section">
      <div className="advisory-container">

        {/* ================= LEFT ================= */}

        <div className="advisory-left">

          <div className="advisory-eyebrow">
            ADVISORY FRAMEWORK
          </div>

          <h1>
            What to Anticipate During Your
            <br />
            Consultation
          </h1>

          <p className="advisory-intro">
            TechTorch eliminates bureaucratic overhead. Your session is
            led exclusively by Senior Advisory Partners and Principal
            Systems Architects.
          </p>


          {/* FEATURES */}

          {scopeCards.map((item, index) => (
            <div className="advisory-feature" key={index}>

              <div className="advisory-feature-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

            </div>
          ))}


          {/* IMAGE */}

          <div className="advisory-image-wrapper">

            <img
              src="/AdvisoryFramework.png"
              alt="TechTorch Security Operations Center"
              className="advisory-image"
            />

            <div className="advisory-image-caption">

              <span>
                TechTorch Continuous SOC Integration
              </span>

              <span className="caption-shield">
                ♢
              </span>

            </div>

          </div>


          {/* QUOTE */}

          <div className="advisory-quote">

            <p>
              “Modern adversaries do not attack perimeter firewalls;
              they manipulate the trust boundaries between internal
              systems, unmonitored APIs, and human identity. Our
              advisory process targets resilience at the operational
              core.”
            </p>

            <div className="advisor-profile">

              <div className="advisor-avatar">
                👩🏻
              </div>

              <div>

                <strong>
                  Dr. Evelyn Vance
                </strong>

                <span>
                  Principal Director & Chief Cyber Architect
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= FORM ================= */}

        <form
          className="advisory-form-card"
          onSubmit={handleSubmit}
          noValidate
        >

          {/* FORM HEADER */}

          <div className="form-header">

            <div>

              <span className="form-eyebrow">
                CONFIDENTIAL DISPATCH
              </span>

              <h2>
                Executive Assessment Intake
              </h2>

            </div>

            <div className="form-lock">
              ♙
            </div>

          </div>


          {/* ================= NAME + EMAIL ================= */}

          <div className="form-row">

            {/* NAME */}

            <div className="form-group">

              <label>
                Executive Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Katherine Montgomery"
                className={errors.name ? "input-error" : ""}
              />

              {errors.name && (
                <span className="form-error">
                  {errors.name}
                </span>
              )}

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Corporate Work Email *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="executive@enterprise.com"
                className={errors.email ? "input-error" : ""}
              />

              {errors.email && (
                <span className="form-error">
                  {errors.email}
                </span>
              )}

            </div>

          </div>


          {/* ================= ORGANIZATION + INDUSTRY ================= */}

          <div className="form-row">

            {/* ORGANIZATION */}

            <div className="form-group">

              <label>
                Organization Name *
              </label>

              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enterprise Corp / Holdings"
                className={
                  errors.organization
                    ? "input-error"
                    : ""
                }
              />

              {errors.organization && (
                <span className="form-error">
                  {errors.organization}
                </span>
              )}

            </div>


            {/* INDUSTRY */}

            <div className="form-group">

              <label>
                Industry Vertical *
              </label>

              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={
                  errors.industry
                    ? "input-error"
                    : ""
                }
              >

                <option value="">
                  Select an industry...
                </option>

                <option value="Financial Services & Banking">
                  Financial Services & Banking
                </option>

                <option value="Healthcare">
                  Healthcare
                </option>

                <option value="Technology">
                  Technology
                </option>

                <option value="Manufacturing">
                  Manufacturing
                </option>

                <option value="Government">
                  Government
                </option>

                <option value="Retail & E-Commerce">
                  Retail & E-Commerce
                </option>

              </select>

              {errors.industry && (
                <span className="form-error">
                  {errors.industry}
                </span>
              )}

            </div>

          </div>


          {/* ================= CHALLENGE ================= */}

          <div className="form-group full-width">

            <label>
              Current Critical Challenge *
            </label>

            <input
              type="text"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="e.g. Multi-Cloud Migration & Perimeter Hardening"
              className={
                errors.challenge
                  ? "input-error"
                  : ""
              }
            />

            {errors.challenge && (
              <span className="form-error">
                {errors.challenge}
              </span>
            )}

          </div>


          {/* ================= TIMELINE ================= */}

          <div className="form-group full-width">

            <label>
              Target Timeline for Deployment *
            </label>

            <div
              className={
                errors.timeline
                  ? "timeline-options timeline-options-error"
                  : "timeline-options"
              }
            >

              {[
                "Immediate (48h)",
                "Next 30 Days",
                "Strategic Q2/Q3",
              ].map((item) => (

                <button
                  type="button"
                  key={item}
                  className={
                    timeline === item
                      ? "timeline-option active"
                      : "timeline-option"
                  }
                  onClick={() => handleTimeline(item)}
                >
                  {item}
                </button>

              ))}

            </div>

            {errors.timeline && (
              <span className="form-error">
                {errors.timeline}
              </span>
            )}

          </div>


          {/* ================= CONTEXT ================= */}

          <div className="form-group full-width">

            <label>
              Brief Context or Infrastructure Notes *
            </label>

            <textarea
              name="context"
              value={formData.context}
              onChange={handleChange}
              placeholder="Share specific regulatory constraints, cloud environments, or architecture priorities..."
              className={
                errors.context
                  ? "input-error"
                  : ""
              }
            />

            {errors.context && (
              <span className="form-error">
                {errors.context}
              </span>
            )}

          </div>


          {/* ================= SECURITY ================= */}

          <div className="security-note">

            <div className="security-note-left">

              <span className="security-symbol">
                ⚙
              </span>

              <span>
                Protected Under TechTorch Master Mutual
                Non-Disclosure Agreement
              </span>

            </div>

            <strong>
              256-Bit
              <br />
              TLS
            </strong>

          </div>


          {/* ================= SUBMIT ================= */}

          <button
            type="submit"
            className="advisory-submit"
          >
            DEPLOY SECURITY ADVISORY BRIEFING
            <span>→</span>
          </button>


          {/* ================= CONTACT ================= */}

          <div className="form-contact">

            <div className="contact-item">

              <span className="contact-icon">
                ♧
              </span>

              <div>

                <small>
                  Priority C-Suite Dispatch:
                </small>

                <strong>
                  +91 72510 90147
                </strong>

              </div>

            </div>


            <div className="contact-item">

              <span className="contact-icon">
                ✉
              </span>

              <div>

                <small>
                  Direct Advisory Desk:
                </small>

                <strong>
                  www.techtorch.solutions
                </strong>

              </div>

            </div>

          </div>

        </form>

      </div>


      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =========================================
           SECTION
        ========================================= */

        .advisory-section {
          width: 100%;
          background: #f3f4f6;

          font-family: "Inter", sans-serif;

          color: #262a32;

          overflow: hidden;
        }


        .advisory-container {
          width: 100%;
          max-width: 1180px;

          margin: 0 auto;

          padding: 44px 28px 55px;

          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(470px, 1.05fr);

          gap: 36px;

          align-items: start;
        }


        /* =========================================
           LEFT
        ========================================= */

        .advisory-left {
          min-width: 0;
        }


        .advisory-eyebrow {
          margin-bottom: 10px;

          color: #74123f;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.9px;
        }


        .advisory-left h1 {
          margin: 0;

          color: #20242b;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 27px;

          line-height: 1.18;

          font-weight: 500;

          letter-spacing: -1px;
        }


        .advisory-intro {
          margin: 12px 0 24px;

          color: #6b6870;

          font-size: 12px;

          line-height: 1.55;
        }


        /* =========================================
           FEATURES
        ========================================= */

        .advisory-feature {
          display: grid;

          grid-template-columns: 25px 1fr;

          gap: 10px;

          margin-bottom: 15px;
        }


        .advisory-feature-icon {
          color: #74123f;

          font-size: 18px;

          line-height: 1.2;

          text-align: center;
        }


        .advisory-feature h3 {
          margin: 0 0 3px;

          color: #292d35;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;

          line-height: 1.25;

          font-weight: 750;
        }


        .advisory-feature p {
          margin: 0;

          color: #706c73;

          font-size: 10.5px;

          line-height: 1.45;
        }


        /* =========================================
           IMAGE
        ========================================= */

        .advisory-image-wrapper {
          position: relative;

          width: 100%;

          height: 144px;

          margin-top: 24px;

          border-radius: 8px;

          overflow: hidden;

          background: #1c2230;
        }


        .advisory-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          object-position: center;
        }


        .advisory-image-caption {
          position: absolute;

          left: 12px;
          right: 12px;
          bottom: 10px;

          height: 29px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          padding: 0 11px;

          border-radius: 5px;

          background: rgba(255, 255, 255, 0.94);

          color: #70133f;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 1.2px;
        }


        .caption-shield {
          font-size: 16px;
        }


        /* =========================================
           QUOTE
        ========================================= */

        .advisory-quote {
          margin-top: 18px;

          padding: 17px 18px;

          border-radius: 9px;

          background: #ffffff;

          box-shadow:
            0 3px 12px rgba(30, 35, 45, 0.04);
        }


        .advisory-quote > p {
          margin: 0;

          color: #646773;

          font-size: 11px;

          line-height: 1.55;

          font-style: italic;
        }


        .advisor-profile {
          display: flex;

          align-items: center;

          gap: 9px;

          margin-top: 12px;
        }


        .advisor-avatar {
          width: 27px;
          height: 27px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #eee;

          font-size: 15px;
        }


        .advisor-profile strong {
          display: block;

          color: #343842;

          font-size: 9px;

          line-height: 1.3;
        }


        .advisor-profile span {
          display: block;

          color: #756c73;

          font-size: 7px;

          letter-spacing: 0.8px;
        }


        /* =========================================
           FORM CARD
        ========================================= */

        .advisory-form-card {
          width: 100%;

          padding: 30px 29px 25px;

          background: #ffffff;

          border-radius: 11px;

          box-shadow:
            0 5px 18px rgba(30, 35, 45, 0.08);
        }


        /* =========================================
           FORM HEADER
        ========================================= */

        .form-header {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          margin-bottom: 25px;
        }


        .form-eyebrow {
          display: block;

          margin-bottom: 4px;

          color: #74123f;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.8px;
        }


        .form-header h2 {
          margin: 0;

          color: #252932;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 17px;

          font-weight: 700;
        }


        .form-lock {
          color: #74123f;

          font-size: 21px;
        }


        /* =========================================
           FORM ROW
        ========================================= */

        .form-row {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 14px;

          margin-bottom: 13px;
        }


        .form-group {
          min-width: 0;

          margin-bottom: 13px;
        }


        .form-group label {
          display: block;

          margin-bottom: 6px;

          color: #3b3e44;

          font-size: 10px;

          font-weight: 700;
        }


        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;

          border: 1px solid #edf0f3;

          border-radius: 5px;

          outline: none;

          background: #f8f9fa;

          color: #363b44;

          font-family: "Inter", sans-serif;

          font-size: 10px;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }


        .form-group input,
        .form-group select {
          height: 34px;

          padding: 0 11px;
        }


        .form-group textarea {
          height: 70px;

          padding: 10px 11px;

          resize: none;
        }


        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #b4bac2;
        }


        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #cfa0b6;

          box-shadow:
            0 0 0 2px rgba(116, 18, 63, 0.06);
        }


        /* =========================================
           VALIDATION
        ========================================= */

        .form-error {
          display: block;

          margin-top: 5px;

          color: #ff3b3b;

          font-size: 9px;

          line-height: 1.3;

          font-weight: 500;
        }


        .input-error {
          border-color: #ff4b4b !important;

          background: #fffafa !important;
        }


        .input-error:focus {
          border-color: #ff4b4b !important;

          box-shadow: none !important;
        }


        .timeline-options-error .timeline-option {
          border-color: #ff4b4b;
        }


        /* =========================================
           TIMELINE
        ========================================= */

        .timeline-options {
          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 7px;
        }


        .timeline-option {
          height: 31px;

          border: 1px solid #eef0f2;

          border-radius: 5px;

          background: #f7f8f9;

          color: #4f535a;

          font-family: "Inter", sans-serif;

          font-size: 9px;

          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            border-color 0.2s ease;
        }


        .timeline-option.active {
          border-color: #f0e3e9;

          background: #fff7fa;

          color: #74123f;
        }


        /* =========================================
           SECURITY
        ========================================= */

        .security-note {
          min-height: 46px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          padding: 0 12px;

          margin-top: 3px;

          border-radius: 6px;

          background: #f6f7f8;
        }


        .security-note-left {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #77747a;

          font-size: 8px;

          line-height: 1.35;

          font-weight: 600;

          letter-spacing: 0.4px;
        }


        .security-symbol {
          color: #74123f;

          font-size: 13px;
        }


        .security-note > strong {
          color: #416044;

          font-family: monospace;

          font-size: 8px;

          line-height: 1.25;

          letter-spacing: 1px;

          text-align: right;
        }


        /* =========================================
           SUBMIT
        ========================================= */

        .advisory-submit {
          width: 100%;

          height: 37px;

          margin-top: 13px;

          border: none;

          border-radius: 5px;

          background: #74123f;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 0.8px;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .advisory-submit span {
          margin-left: 6px;

          font-size: 14px;
        }


        .advisory-submit:hover {
          background: #8b1b50;

          transform: translateY(-1px);

          box-shadow:
            0 6px 14px rgba(116, 18, 63, 0.18);
        }


        /* =========================================
           CONTACT
        ========================================= */

        .form-contact {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-top: 24px;
        }


        .contact-item {
          display: flex;

          align-items: center;

          gap: 7px;
        }


        .contact-icon {
          color: #74123f;

          font-size: 15px;
        }


        .contact-item small {
          display: block;

          color: #777078;

          font-family: monospace;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 1px;
        }


        .contact-item strong {
          display: block;

          color: #74123f;

          font-size: 8px;

          font-weight: 700;
        }


        /* =========================================
           LARGE DESKTOP
        ========================================= */

        @media (min-width: 1400px) {

          .advisory-container {
            max-width: 1240px;

            gap: 42px;

            padding-top: 55px;
          }


          .advisory-left h1 {
            font-size: 30px;
          }


          .advisory-image-wrapper {
            height: 155px;
          }


          .advisory-form-card {
            padding: 32px;
          }
        }


        /* =========================================
           LAPTOP
        ========================================= */

        @media (max-width: 1100px) {

          .advisory-container {
            max-width: 1000px;

            grid-template-columns:
              minmax(0, 0.88fr)
              minmax(440px, 1fr);

            gap: 28px;

            padding-left: 22px;
            padding-right: 22px;
          }


          .advisory-form-card {
            padding: 26px 24px 23px;
          }
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 850px) {

          .advisory-container {
            grid-template-columns: 1fr;

            max-width: 650px;

            gap: 30px;

            padding: 38px 20px 45px;
          }


          .advisory-image-wrapper {
            height: 220px;
          }


          .advisory-form-card {
            padding: 27px 24px;
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .advisory-container {
            padding: 30px 14px 35px;

            gap: 25px;
          }


          .advisory-left h1 {
            font-size: 24px;

            line-height: 1.2;
          }


          .advisory-intro {
            font-size: 11px;

            margin-bottom: 20px;
          }


          .advisory-feature {
            grid-template-columns: 22px 1fr;

            gap: 7px;

            margin-bottom: 13px;
          }


          .advisory-feature h3 {
            font-size: 13px;
          }


          .advisory-feature p {
            font-size: 9.5px;
          }


          .advisory-image-wrapper {
            height: 185px;

            margin-top: 20px;
          }


          .advisory-image-caption {
            left: 8px;
            right: 8px;
            bottom: 8px;

            height: 27px;

            padding: 0 9px;

            font-size: 7px;
          }


          .advisory-quote {
            padding: 14px;

            margin-top: 14px;
          }


          .advisory-quote > p {
            font-size: 10px;
          }


          .advisory-form-card {
            padding: 23px 17px 20px;

            border-radius: 9px;
          }


          .form-header {
            margin-bottom: 20px;
          }


          .form-header h2 {
            font-size: 16px;
          }


          .form-row {
            grid-template-columns: 1fr;

            gap: 0;

            margin-bottom: 0;
          }


          .form-group input,
          .form-group select {
            height: 36px;
          }


          .timeline-options {
            grid-template-columns: 1fr;

            gap: 6px;
          }


          .timeline-option {
            height: 34px;
          }


          .security-note {
            padding: 8px 10px;
          }


          .security-note-left {
            font-size: 7px;
          }


          .form-contact {
            flex-direction: column;

            align-items: flex-start;

            gap: 12px;
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .advisory-container {
            padding-left: 11px;

            padding-right: 11px;
          }


          .advisory-left h1 {
            font-size: 22px;
          }


          .advisory-image-wrapper {
            height: 165px;
          }


          .advisory-form-card {
            padding-left: 14px;

            padding-right: 14px;
          }


          .form-header h2 {
            font-size: 15px;
          }


          .advisory-submit {
            font-size: 8px;
          }
        }

      `}</style>
    </section>
  );
}