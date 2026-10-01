import React, { useState } from "react";
import {
  User,
  Mail,
  Building2,
  Phone,
  LockKeyhole,
  Clock3,
  MessageSquare,
  Handshake,
  Network,
  Settings,
} from "lucide-react";

const DiscussITRequirements = () => {
  const [selectedAreas, setSelectedAreas] = useState(["infrastructure"]);

  const discussionAreas = [
    {
      id: "infrastructure",
      tag: "INFRASTRUCTURE",
      tagClass: "pink",
      title: "IT Infrastructure & Support",
      description:
        "Discuss your infrastructure requirements, technical challenges, and ongoing IT support needs.",
    },
    {
      id: "cloud",
      tag: "CLOUD",
      tagClass: "pink",
      title: "Cloud Infrastructure",
      description:
        "Explore cloud infrastructure requirements designed to support scalability, accessibility, and efficient IT operations.",
    },
    {
      id: "security",
      tag: "SECURITY",
      tagClass: "green",
      title: "Cyber Security",
      description:
        "Discuss your cybersecurity requirements and approaches for protecting your systems, applications, and digital assets.",
    },
    {
      id: "engineering",
      tag: "ENGINEERING",
      tagClass: "blue",
      title: "Software Engineering",
      description:
        "Explore software engineering requirements, application development, system integration, and technical solutions.",
    },
    {
      id: "development",
      tag: "DEVELOPMENT",
      tagClass: "pink",
      title: "Software Development & Support",
      description:
        "Discuss application development, software maintenance, technical support, and ongoing improvement requirements.",
    },
    {
      id: "consulting",
      tag: "CONSULTING",
      tagClass: "blue",
      title: "IT Consultancy",
      description:
        "Get guidance on technology challenges, digital transformation requirements, and solutions aligned with your business objectives.",
    },
    {
      id: "operations",
      tag: "OPERATIONS",
      tagClass: "green",
      title: "Business Process Support",
      description:
        "Explore technology-enabled approaches that can help improve business processes and operational efficiency.",
    },
    {
      id: "resources",
      tag: "RESOURCES",
      tagClass: "pink",
      title: "Resource & Staffing",
      description:
        "Discuss your requirements for skilled technology professionals and flexible resource solutions.",
    },
  ];

  const toggleArea = (id) => {
    setSelectedAreas((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="discuss-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .discuss-page {
          width: 100%;
          min-height: 100vh;
          background: #f7f8fa;
          color: #20232a;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .discuss-container {
          width: min(1170px, calc(100% - 70px));
          margin: 0 auto;
        }

        /* =========================================================
           TOP HEADER
        ========================================================= */

        .discuss-header {
          text-align: center;
          padding: 55px 20px 35px;
        }

        .discuss-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 6px 13px;
          border-radius: 20px;
          border: 1px solid #d7bccb;
          background: #f0e8ed;
          color: #70003f;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.9px;
          text-transform: uppercase;
        }

        .discuss-label::before {
          content: "";
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #70003f;
        }

        .discuss-header h1 {
          max-width: 760px;
          margin: 18px auto 11px;
          color: #202124;
          font-size: clamp(38px, 4.1vw, 54px);
          line-height: 1.08;
          letter-spacing: -1.9px;
          font-weight: 600;
        }

        .discuss-header p {
          max-width: 735px;
          margin: 0 auto;
          color: #3f506b;
          font-size: 17px;
          line-height: 1.55;
          font-weight: 400;
        }

        /* =========================================================
           MAIN GRID
        ========================================================= */

        .discussion-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(370px, 0.95fr);
          gap: 28px;
          align-items: start;
          padding-bottom: 20px;
        }

        /* =========================================================
           DISCUSSION AREAS CARD
        ========================================================= */

        .areas-card {
          padding: 29px 28px 25px;
          background: #ffffff;
          border: 1px solid #dce2e9;
          border-radius: 15px;
          box-shadow: 0 2px 5px rgba(30, 40, 55, 0.035);
        }

        .step-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 11px;
          border-radius: 5px;
          background: #f0e7ed;
          color: #70003f;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.65px;
          text-transform: uppercase;
        }

        .areas-card h2 {
          margin: 9px 0 4px;
          color: #24262b;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 500;
        }

        .areas-subtitle {
          margin: 0;
          color: #676767;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 11px;
          margin-top: 18px;
        }

        .area-option {
          position: relative;
          min-height: 128px;
          padding: 13px 13px 12px;
          border: 1px solid #d8e0e9;
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease,
            transform 0.2s ease;
        }

        .area-option:hover {
          border-color: #b9829e;
          box-shadow: 0 3px 10px rgba(112, 0, 63, 0.06);
          transform: translateY(-1px);
        }

        .area-option.selected {
          border-color: #b7c5d6;
        }

        .area-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
        }

        .area-tag {
          display: inline-flex;
          align-items: center;
          min-height: 24px;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 9px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.55px;
        }

        .area-tag.pink {
          color: #8a1456;
          background: #f5eaf0;
          border: 1px solid #e2c7d6;
        }

        .area-tag.green {
          color: #007657;
          background: #e8f8f3;
          border: 1px solid #b8eadb;
        }

        .area-tag.blue {
          color: #46566e;
          background: #edf2f7;
          border: 1px solid #d9e2ed;
        }

        .custom-checkbox {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          margin-top: 1px;
          border: 1px solid #a5a8ac;
          border-radius: 2px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-checkbox.checked {
          background: #70003f;
          border-color: #70003f;
        }

        .custom-checkbox.checked::after {
          content: "✓";
          color: #fff;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
        }

        .area-option h3 {
          margin: 9px 0 5px;
          padding-right: 5px;
          color: #1e2738;
          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
        }

        .area-option p {
          margin: 0;
          color: #53637b;
          font-size: 11.5px;
          line-height: 1.5;
        }

        .areas-footer {
          margin-top: 15px;
          padding-top: 11px;
          border-top: 1px solid #e2e6eb;
          color: #777;
          font-size: 10px;
          line-height: 1.35;
          letter-spacing: 0.4px;
        }

        /* =========================================================
           CONSULTATION FORM
        ========================================================= */

        .consultation-card {
          padding: 26px 27px 25px;
          background: #fff;
          border: 1px solid #dce2e9;
          border-radius: 15px;
          box-shadow: 0 3px 7px rgba(30, 40, 55, 0.06);
        }

        .consultation-card h2 {
          margin: 9px 0 5px;
          color: #24262b;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 500;
        }

        .consultation-intro {
          margin: 0 0 16px;
          color: #666;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 11px;
        }

        .form-label {
          display: block;
          margin-bottom: 5px;
          color: #303238;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.15px;
        }

        .input-wrap {
          position: relative;
        }

        .input-wrap svg {
          position: absolute;
          left: 10px;
          top: 50%;
          width: 14px;
          height: 14px;
          transform: translateY(-50%);
          color: #777;
          pointer-events: none;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          border: 1px solid #dbe2e9;
          border-radius: 7px;
          background: #f8fafc;
          color: #303238;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .form-input,
        .form-select {
          height: 38px;
          padding: 0 11px;
          font-size: 12px;
        }

        .input-with-icon {
          padding-left: 34px;
        }

        .form-textarea {
          min-height: 78px;
          padding: 10px;
          resize: vertical;
          font-size: 12px;
          line-height: 1.4;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #a1a4a8;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #b8879f;
          box-shadow: 0 0 0 2px rgba(112, 0, 63, 0.06);
        }

        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .form-select {
          appearance: none;
          background-image:
            linear-gradient(45deg, transparent 50%, #888 50%),
            linear-gradient(135deg, #888 50%, transparent 50%);
          background-position:
            calc(100% - 14px) 16px,
            calc(100% - 10px) 16px;
          background-size: 4px 4px, 4px 4px;
          background-repeat: no-repeat;
          padding-right: 27px;
        }

        .form-bottom-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin: 4px 0 13px;
          color: #666;
          font-size: 9.5px;
          letter-spacing: 0.4px;
        }

        .form-bottom-info span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .form-bottom-info svg {
          width: 12px;
          height: 12px;
        }

        .form-bottom-info .secure {
          color: #58725d;
        }

        .form-bottom-info .response {
          color: #6e3455;
        }

        .consultation-submit {
          width: 100%;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 0;
          border-radius: 6px;
          background: #820044;
          color: #fff;
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .consultation-submit:hover {
          background: #6f003c;
          transform: translateY(-1px);
          box-shadow: 0 5px 12px rgba(112, 0, 63, 0.16);
        }

        .consultation-submit svg {
          width: 15px;
          height: 15px;
        }

        .consultation-note {
          margin: 14px auto 0;
          max-width: 280px;
          text-align: center;
          color: #777;
          font-size: 9.5px;
          line-height: 1.35;
          letter-spacing: 0.7px;
          font-weight: 600;
        }

        /* =========================================================
           WHAT YOU CAN EXPECT
        ========================================================= */

        .expect-card {
          width: calc(
            (100% - 28px) * 1.35 /
            (1.35 + 0.95)
          );
          margin-top: 0;
          padding: 25px 27px 23px;
          background: #fff;
          border: 1px solid #dce2e9;
          border-radius: 15px;
          box-shadow: 0 2px 5px rgba(30, 40, 55, 0.035);
        }

        .expect-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 19px;
        }

        .expect-heading {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .expect-icon {
          width: 23px;
          height: 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          border-radius: 6px;
          background: #f2e8ee;
          border: 1px solid #dec7d4;
          color: #70003f;
        }

        .expect-icon svg {
          width: 13px;
          height: 13px;
        }

        .expect-title-label {
          margin: 0 0 4px;
          color: #70003f;
          font-size: 9px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .expect-description {
          margin: 0;
          color: #65758e;
          font-size: 11px;
          line-height: 1.5;
        }

        .no-obligation {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-width: 141px;
          padding: 5px 10px;
          border: 1px solid #dce3ea;
          border-radius: 20px;
          color: #596a7f;
          font-size: 9px;
          line-height: 1.15;
        }

        .no-obligation::before {
          content: "";
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #13a56f;
        }

        .expect-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 11px;
        }

        .expect-item {
          min-height: 230px;
          padding: 12px 13px;
          border: 1px solid #dce3ea;
          border-radius: 10px;
          background: #fbfcfd;
        }

        .expect-item-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 9px;
        }

        .expect-item-icon {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          border: 1px solid #dec7d4;
          background: #f2e8ee;
          color: #70003f;
        }

        .expect-item-icon svg {
          width: 14px;
          height: 14px;
        }

        .expect-number {
          color: #91a0b4;
          font-size: 9px;
          font-weight: 700;
        }

        .expect-item h3 {
          margin: 0 0 8px;
          color: #1f2939;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 700;
        }

        .expect-item p {
          margin: 0;
          color: #53647b;
          font-size: 11px;
          line-height: 1.55;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1000px) {
          .discuss-container {
            width: calc(100% - 46px);
          }

          .discussion-layout {
            grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr);
            gap: 20px;
          }

          .areas-card,
          .consultation-card {
            padding-left: 21px;
            padding-right: 21px;
          }

          .expect-card {
            width: calc(
              (100% - 20px) * 1.15 /
              (1.15 + 0.85)
            );
          }
        }

        /* =========================================================
           TABLET / SMALL LAPTOP
        ========================================================= */

        @media (max-width: 820px) {
          .discuss-container {
            width: calc(100% - 38px);
          }

          .discuss-header {
            padding-top: 45px;
          }

          .discuss-header h1 {
            font-size: 40px;
          }

          .discuss-header p {
            font-size: 15px;
          }

          .discussion-layout {
            grid-template-columns: 1fr;
          }

          .expect-card {
            width: 100%;
          }

          .areas-grid {
            gap: 11px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 600px) {
          .discuss-container {
            width: calc(100% - 26px);
          }

          .discuss-header {
            padding: 34px 8px 26px;
          }

          .discuss-label {
            padding: 6px 10px;
            font-size: 8px;
            letter-spacing: 0.65px;
          }

          .discuss-header h1 {
            margin-top: 15px;
            font-size: 31px;
            line-height: 1.1;
            letter-spacing: -1px;
          }

          .discuss-header p {
            font-size: 13px;
            line-height: 1.55;
          }

          .areas-card,
          .consultation-card,
          .expect-card {
            border-radius: 12px;
          }

          .areas-card {
            padding: 21px 16px 18px;
          }

          .consultation-card {
            padding: 21px 16px;
          }

          .step-label {
            font-size: 8px;
          }

          .areas-card h2,
          .consultation-card h2 {
            font-size: 18px;
          }

          .areas-subtitle,
          .consultation-intro {
            font-size: 11px;
          }

          .areas-grid {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .area-option {
            min-height: auto;
            padding: 12px;
          }

          .area-option h3 {
            font-size: 13px;
          }

          .area-option p {
            font-size: 11px;
          }

          .two-column {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .form-bottom-info {
            font-size: 8.5px;
          }

          .expect-card {
            padding: 21px 16px;
          }

          .expect-header {
            flex-direction: column;
            gap: 13px;
          }

          .no-obligation {
            align-self: flex-start;
          }

          .expect-grid {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .expect-item {
            min-height: auto;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 380px) {
          .discuss-container {
            width: calc(100% - 20px);
          }

          .discuss-header h1 {
            font-size: 27px;
          }

          .discuss-header p {
            font-size: 12px;
          }

          .areas-card,
          .consultation-card,
          .expect-card {
            padding-left: 13px;
            padding-right: 13px;
          }

          .form-input,
          .form-select {
            font-size: 11px;
          }

          .form-textarea {
            font-size: 11px;
          }
        }
      `}</style>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <section className="discuss-header">
        <div className="discuss-label">
          TECHTORCH MSP SUPPORT • IT CONSULTATION
        </div>

        <h1>
          Discuss Your IT Requirements &<br />
          Business Priorities
        </h1>

        <p>
          Connect with the TechTorch team to discuss your technology
          environment, operational requirements, and current IT challenges.
          We’ll understand your needs and help identify the right technology
          approach for your business.
        </p>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="discuss-container">
        <div className="discussion-layout">

          {/* =====================================================
              LEFT - DISCUSSION AREAS
          ===================================================== */}

          <div className="areas-card">
            <div className="step-label">
              STEP 01 · DISCUSSION AREAS
            </div>

            <h2>What Would You Like to Discuss?</h2>

            <p className="areas-subtitle">
              Select the areas that best match your current technology
              requirements.
            </p>

            <div className="areas-grid">
              {discussionAreas.map((area) => {
                const selected = selectedAreas.includes(area.id);

                return (
                  <div
                    key={area.id}
                    className={`area-option ${
                      selected ? "selected" : ""
                    }`}
                    onClick={() => toggleArea(area.id)}
                  >
                    <div className="area-top">
                      <span className={`area-tag ${area.tagClass}`}>
                        {area.tag}
                      </span>

                      <span
                        className={`custom-checkbox ${
                          selected ? "checked" : ""
                        }`}
                      />
                    </div>

                    <h3>{area.title}</h3>

                    <p>{area.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="areas-footer">
              Explore the technology areas where TechTorch can support your
              business.
            </div>
          </div>

          {/* =====================================================
              RIGHT - CONSULTATION FORM
          ===================================================== */}

          <div className="consultation-card">
            <div className="step-label">
              STEP 02 · CONSULTATION DETAILS
            </div>

            <h2>Request an IT Consultation</h2>

            <p className="consultation-intro">
              Tell us about your technology requirements, current challenges,
              or upcoming initiatives. Our team will review your enquiry and
              connect with you to discuss the next steps.
            </p>

            <div className="form-group">
              <label className="form-label">Full Name</label>

              <div className="input-wrap">
                <User />

                <input
                  className="form-input input-with-icon"
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Business Email Address
              </label>

              <div className="input-wrap">
                <Mail />

                <input
                  className="form-input input-with-icon"
                  type="email"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="two-column">
              <div className="form-group">
                <label className="form-label">Company Name</label>

                <div className="input-wrap">
                  <Building2 />

                  <input
                    className="form-input input-with-icon"
                    type="text"
                    placeholder="e.g. Acme Corp"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Team / Business Size
                </label>

                <select className="form-select">
                  <option>50 – 200 employees</option>
                  <option>1 – 50 employees</option>
                  <option>200 – 500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
            </div>

            <div className="two-column">
              <div className="form-group">
                <label className="form-label">Phone Number</label>

                <div className="input-wrap">
                  <Phone />

                  <input
                    className="form-input input-with-icon"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Preferred Timeline
                </label>

                <select className="form-select">
                  <option>Within 1 – 2 Weeks</option>
                  <option>Within 1 Month</option>
                  <option>Within 3 Months</option>
                  <option>Exploring Options</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                What Would You Like to Discuss?
              </label>

              <textarea
                className="form-textarea"
                placeholder="Tell us about your current IT environment, technology challenges, upcoming projects, or support requirements..."
              />
            </div>

            <div className="form-bottom-info">
              <span className="secure">
                <LockKeyhole />
                Confidential Discussion
              </span>

              <span className="response">
                <Clock3 />
                Timely Response
              </span>
            </div>

            <button className="consultation-submit">
              REQUEST A CONSULTATION
              <span>→</span>
            </button>

            <p className="consultation-note">
              Professional Consultation · Business-Focused
              <br />
              Technology Discussion
            </p>
          </div>
        </div>

        {/* =========================================================
            WHAT YOU CAN EXPECT
        ========================================================= */}

        <div className="expect-card">
          <div className="expect-header">
            <div className="expect-heading">
              <div className="expect-icon">
                <Settings />
              </div>

              <div>
                <p className="expect-title-label">
                  WHAT YOU CAN EXPECT
                </p>

                <p className="expect-description">
                  How TechTorch approaches every initial advisory
                  conversation
                </p>
              </div>
            </div>

            <div className="no-obligation">
              No-obligation
              <br />
              Consultation
            </div>
          </div>

          <div className="expect-grid">
            <div className="expect-item">
              <div className="expect-item-top">
                <div className="expect-item-icon">
                  <MessageSquare />
                </div>

                <span className="expect-number">01</span>
              </div>

              <h3>Technology-Focused Discussion</h3>

              <p>
                Share your requirements with the TechTorch team and discuss
                the technology challenges affecting your business.
              </p>
            </div>

            <div className="expect-item">
              <div className="expect-item-top">
                <div className="expect-item-icon">
                  <Handshake />
                </div>

                <span className="expect-number">02</span>
              </div>

              <h3>Business-Aligned Solutions</h3>

              <p>
                We focus on understanding your requirements before
                identifying an appropriate technology approach.
              </p>
            </div>

            <div className="expect-item">
              <div className="expect-item-top">
                <div className="expect-item-icon">
                  <Network />
                </div>

                <span className="expect-number">03</span>
              </div>

              <h3>End-to-End Technology Expertise</h3>

              <p>
                Explore support across IT consulting, cloud infrastructure,
                cybersecurity, software engineering, software development,
                and related technology services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscussITRequirements;