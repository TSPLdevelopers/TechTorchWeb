import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  GitBranch,
  Code2,
  ListChecks,
  Mail,
  MapPin,
  Factory,
} from "lucide-react";

const BEETROOT = "#730042";

const CONSULTATION_CARDS = [
  {
    icon: <BriefcaseBusiness size={17} />,
    title: "Business-Focused Discussion",
    description:
      "Discuss your requirements around your business processes and objectives.",
  },
  {
    icon: <GitBranch size={17} />,
    title: "ERP & Supply Chain Expertise",
    description:
      "Explore technology solutions across ERP, supply chain and business operations.",
  },
  {
    icon: <Code2 size={17} />,
    title: "Software & Technology Support",
    description:
      "Discuss custom software, integration, modernization and technology requirements.",
  },
  {
    icon: <ListChecks size={17} />,
    title: "Clear Next Steps",
    description:
      "Understand the relevant capabilities and possible next steps for your requirement.",
  },
];

const MANUFACTURING_POINTS = [
  {
    number: "01",
    title: "ERP & Business Processes",
    description:
      "Discuss ERP requirements across inventory, finance, human resources, customer relationships and supply chain management.",
  },
  {
    number: "02",
    title: "Supply Chain",
    description:
      "Discuss procurement, inventory, suppliers, logistics and related supply chain requirements.",
  },
  {
    number: "03",
    title: "Software & Integration",
    description:
      "Discuss custom software, enterprise applications, system integration, modernization and ongoing support.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "We review your business needs, existing technology environment and project requirements.",
  },
  {
    number: "02",
    title: "Discuss",
    description:
      "Our team discusses relevant technology capabilities and possible approaches for your requirement.",
  },
  {
    number: "03",
    title: "Next Steps",
    description:
      "We identify the appropriate way forward based on your business and technology needs.",
  },
];

export default function ManufacturingGetInTouch() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    requirement: "",
    contactMethod: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to be contacted regarding your enquiry.");
      return;
    }

    console.log("Manufacturing enquiry:", formData);
  };

  const scrollToForm = () => {
    document
      .getElementById("manufacturing-enquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        :root {
          --mfg-beetroot: #730042;
          --mfg-dark: #181818;
          --mfg-text: #555;
          --mfg-light-text: #777;
        }

        * {
          box-sizing: border-box;
        }

        .mfg-page {
          width: 100%;
          min-height: 100vh;
          background: #fff;
          color: var(--mfg-dark);
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* ================= HERO ================= */

        .mfg-hero {
          padding: 45px 5% 55px;
          background: #fff;
        }

        .mfg-hero-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .mfg-hero-heading {
          text-align: center;
          max-width: 850px;
          margin: 0 auto;
        }

        .mfg-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 7px 14px;
          background: #f5e5ed;
          color: var(--mfg-beetroot);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
        }

        .mfg-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--mfg-beetroot);
        }

        .mfg-hero-heading h1 {
          margin: 22px 0 15px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          word-spacing: 6px;
          line-height: 1.12;
          letter-spacing: -1.8px;
          font-weight: 600;
        }

        .mfg-hero-heading p {
          max-width: 760px;
          margin: 0 auto;
          color: #707070;
          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.6;
        }

        /* ================= CONSULTATION CARDS ================= */

        .mfg-consultation-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 48px;
        }

        .mfg-consultation-card {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 14px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 11px;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.035);
        }

        .mfg-card-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mfg-beetroot);
          background: #f4e8ee;
          border-radius: 9px;
        }

        .mfg-consultation-card h3 {
          margin: 0 0 4px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.25;
          font-weight: 600;
        }

        .mfg-consultation-card p {
          margin: 0;
          color: #777;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.45;
        }

        /* ================= MAIN CONTENT ================= */

        .mfg-main-grid {
          max-width: 1250px;
          margin: 45px auto 0;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 30px;
          align-items: start;
        }

        /* ================= LEFT IMAGE CARD ================= */

        .mfg-left-column {
          min-width: 0;
        }

        .mfg-image-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 15px;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.04);
        }

        .mfg-image-wrapper {
          position: relative;
          width: 100%;
          height: 275px;
          overflow: hidden;
        }

        .mfg-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mfg-image-overlay {
          position: absolute;
          inset: auto 0 0;
          height: 46%;
          background: linear-gradient(
            to top,
            rgba(115, 0, 66, 0.92),
            rgba(115, 0, 66, 0)
          );
        }

        .mfg-image-content {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 18px;
          color: #fff;
        }

        .mfg-image-tag {
          display: inline-flex;
          padding: 6px 11px;
          margin-bottom: 8px;
          background: var(--mfg-beetroot);
          border-radius: 7px;
          font-size: 10px;
          font-weight: 600;
        }

        .mfg-image-content h3 {
          margin: 0;
          font-family: "Inter", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 500;
        }

        .mfg-requirement-content {
          padding: 20px 22px 22px;
        }

        .mfg-requirement-content h2 {
          margin: 0 0 16px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 700;
        }

        .mfg-point {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .mfg-point:last-child {
          margin-bottom: 0;
        }

        .mfg-point-number {
          width: 27px;
          height: 27px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f4e5ed;
          color: var(--mfg-beetroot);
          border-radius: 50%;
          font-size: 12px;
          font-weight: 700;
        }

        .mfg-point-text h4 {
          margin: 1px 0 3px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
        }

        .mfg-point-text p {
          margin: 0;
          color: #777;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.5;
        }

        /* ================= CONTACT DESK ================= */

        .mfg-contact-desk {
          margin-top: 18px;
          padding: 17px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 15px;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.035);
        }

        .mfg-contact-heading {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 11px;
          border-bottom: 1px solid #ededed;
          color: var(--mfg-beetroot);
          font-size: 12px;
          font-weight: 700;
        }

        .mfg-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          padding: 10px;
          background: #f5f5f5;
          border-radius: 8px;
        }

        .mfg-contact-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eee2e9;
          color: var(--mfg-beetroot);
          border-radius: 7px;
        }

        .mfg-contact-item small {
          display: block;
          margin-bottom: 2px;
          color: #777;
          font-size: 12px;
          font-weight: 600;
        }

        .mfg-contact-item strong {
          display: block;
          color: #333;
          font-size: 12px;
          font-family: "Inter";
          font-weight: 600;
        }

        /* ================= FORM ================= */

        .mfg-form-card {
          width: 100%;
          padding: 32px 36px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 15px;
          box-shadow: 0 5px 18px rgba(0, 0, 0, 0.04);
        }

        .mfg-form-heading h2 {
          margin: 0 0 7px;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 600;
        }

        .mfg-form-heading p {
          margin: 0 0 24px;
          color: #777;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.5;
        }

        .mfg-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .mfg-field {
          width: 100%;
          min-width: 0;
        }

        .mfg-field.full-width {
          margin-top: 15px;
        }

        .mfg-field label {
          display: block;
          margin-bottom: 6px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #333;
        }

        .mfg-field label span {
          color: var(--mfg-beetroot);
        }

        .mfg-field input,
        .mfg-field select,
        .mfg-field textarea {
          width: 100%;
          border: 1px solid #e2e7ec;
          background: #fff;
          border-radius: 8px;
          outline: none;
          color: #333;
          font-family: "Inter", Arial, sans-serif;
          transition: 0.2s ease;
        }

        .mfg-field input,
        .mfg-field select {
          height: 39px;
          padding: 0 11px;
          font-size: 12px;
        }

        .mfg-field textarea {
          min-height: 74px;
          padding: 10px 11px;
          resize: vertical;
          font-size: 12px;
          line-height: 1.45;
        }

        .mfg-field input::placeholder,
        .mfg-field textarea::placeholder {
          color: #aab0b8;
        }

        .mfg-field input:focus,
        .mfg-field select:focus,
        .mfg-field textarea:focus {
          border-color: #d6a1bc;
        }

        /* ================= RADIO ================= */

        .mfg-radio-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .mfg-radio-box {
          display: inline-flex !important;
          align-items: center;
          gap: 6px;
          margin: 0 !important;
          cursor: pointer;
          font-size: 13px !important;
          font-weight: 400 !important;
        }

        .mfg-radio-box input {
          width: 12px !important;
          height: 12px !important;
          margin: 0;
          padding: 0;
          accent-color: var(--mfg-beetroot);
        }

        /* ================= CHECKBOX ================= */

        .mfg-consent {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 16px;
          padding: 10px 11px;
          background: #f7f7f7;
          border-radius: 8px;
          color: #777;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          cursor: pointer;
        }

        .mfg-consent input {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          margin: 0;
          accent-color: var(--mfg-beetroot);
        }

        /* ================= SUBMIT ================= */

        .mfg-submit-btn {
          width: 100%;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: var(--mfg-beetroot);
          color: #fff;
          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .mfg-submit-btn:hover {
          background: #5d0035;
        }

        /* ================= PROCESS ================= */

        .mfg-process-section {
          max-width: 1250px;
          margin: 70px auto 0;
          padding-top: 55px;
          border-top: 1px solid #e8e8e8;
        }

        .mfg-process-heading {
          text-align: center;
          margin-bottom: 35px;
        }

        .mfg-process-heading span {
          color: var(--mfg-beetroot);
          font-size: 9px;
          font-weight: 700;
        }

        .mfg-process-heading h2 {
          margin: 8px 0 0;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 24px;
          line-height: 1.25;
          font-weight: 600;
        }

        .mfg-process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .mfg-process-card {
          min-height: 145px;
          padding: 20px;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.025);
        }

        .mfg-process-number {
          margin-bottom: 14px;
          color: var(--mfg-beetroot);
          font-size: 16px;
          font-weight: 700;
        }

        .mfg-process-card h3 {
          margin: 0 0 7px;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          font-weight: 600;
        }

        .mfg-process-card p {
          margin: 0;
          color: #777;
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.55;
        }

        /* ================= BOTTOM CTA ================= */

        .mfg-bottom-cta {
          margin-top: 38px;
          margin-bottom: 60px;
          padding: 34px 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          background: var(--mfg-beetroot);
          border-radius: 13px;
        }

        .mfg-bottom-cta h2 {
          margin: 0 0 7px;
          color: #fff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 21px;
          line-height: 1.25;
          font-weight: 600;
        }

        .mfg-bottom-cta p {
          max-width: 600px;
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.55;
        }

        .mfg-bottom-cta button {
          flex-shrink: 0;
          min-width: 145px;
          height: 37px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: none;
          border-radius: 8px;
          background: #fff;
          color: var(--mfg-beetroot);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1100px) {
          .mfg-consultation-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .mfg-main-grid {
            grid-template-columns: 1fr;
          }

          .mfg-left-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }

          .mfg-contact-desk {
            margin-top: 0;
          }

          .mfg-form-card {
            max-width: 100%;
          }
        }

        @media (max-width: 800px) {
          .mfg-hero {
            padding: 40px 20px 50px;
          }

          .mfg-hero-heading h1 {
            font-size: 34px;
          }

          .mfg-main-grid,
          .mfg-process-section {
            margin-left: 20px;
            margin-right: 20px;
          }

          .mfg-left-column {
            display: block;
          }

          .mfg-contact-desk {
            margin-top: 18px;
          }

          .mfg-process-grid {
            grid-template-columns: 1fr;
          }

          .mfg-bottom-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .mfg-bottom-cta button {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .mfg-hero {
            padding: 35px 15px 45px;
          }

          .mfg-hero-heading h1 {
            font-size: 29px;
            letter-spacing: -1px;
          }

          .mfg-hero-heading p {
            font-size: 13px;
          }

          .mfg-consultation-grid {
            grid-template-columns: 1fr;
            margin-top: 32px;
          }

          .mfg-consultation-card {
            padding: 13px;
          }

          .mfg-main-grid,
          .mfg-process-section {
            margin-left: 15px;
            margin-right: 15px;
          }

          .mfg-image-wrapper {
            height: 245px;
          }

          .mfg-image-content h3 {
            font-size: 15px;
          }

          .mfg-form-card {
            padding: 25px 18px;
          }

          .mfg-form-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .mfg-field.full-width {
            margin-top: 14px;
          }

          .mfg-process-section {
            margin-top: 50px;
            padding-top: 40px;
          }

          .mfg-process-heading h2 {
            font-size: 22px;
          }

          .mfg-bottom-cta {
            padding: 28px 22px;
            margin-bottom: 40px;
          }

          .mfg-bottom-cta h2 {
            font-size: 19px;
          }
        }

        @media (max-width: 400px) {
          .mfg-hero-heading h1 {
            font-size: 26px;
          }

          .mfg-image-wrapper {
            height: 220px;
          }

          .mfg-image-content {
            left: 14px;
            right: 14px;
            bottom: 13px;
          }

          .mfg-image-content h3 {
            font-size: 13px;
          }

          .mfg-image-tag {
            font-size: 9px;
            padding: 5px 8px;
          }

          .mfg-form-card {
            padding: 22px 14px;
          }

          .mfg-bottom-cta {
            padding: 24px 18px;
          }
        }
      `}</style>

      <div className="mfg-page">

        {/* ================= HERO ================= */}

        <section className="mfg-hero">
          <div className="mfg-hero-container">

            <div className="mfg-hero-heading">

              <div className="mfg-eyebrow">
                <span className="mfg-eyebrow-dot" />
                MANUFACTURING TECHNOLOGY · ENQUIRY
              </div>

              <h1>
                Connect With TechTorch
                <br />
                Manufacturing Experts
              </h1>

              <p>
                Discuss your manufacturing technology requirements, ERP needs,
                supply chain processes, software requirements and digital
                initiatives with our team.
              </p>

            </div>

            <div className="mfg-consultation-grid">

              {CONSULTATION_CARDS.map((card, index) => (
                <div
                  className="mfg-consultation-card"
                  key={index}
                >
                  <div className="mfg-card-icon">
                    {card.icon}
                  </div>

                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}

            </div>

            {/* ================= IMAGE + FORM ================= */}

            <div className="mfg-main-grid">

              {/* LEFT */}

              <div className="mfg-left-column">

                <div className="mfg-image-card">

                  <div className="mfg-image-wrapper">

                    <img
                      src="/ManufacturingGetInTouch.png"
                      alt="Manufacturing technology"
                      className="mfg-image"
                    />

                    <div className="mfg-image-overlay" />

                    <div className="mfg-image-content">

                      <div className="mfg-image-tag">
                        Manufacturing Technology
                      </div>

                      <h3>
                        Connected solutions for modern manufacturing operations
                      </h3>

                    </div>

                  </div>

                  <div className="mfg-requirement-content">

                    <h2>
                      Discuss Your Manufacturing Technology Requirements
                    </h2>

                    {MANUFACTURING_POINTS.map((point) => (
                      <div
                        className="mfg-point"
                        key={point.number}
                      >
                        <div className="mfg-point-number">
                          {point.number}
                        </div>

                        <div className="mfg-point-text">
                          <h4>{point.title}</h4>
                          <p>{point.description}</p>
                        </div>
                      </div>
                    ))}

                  </div>

                </div>

                {/* CONTACT DESK */}

                <div className="mfg-contact-desk">

                  <div className="mfg-contact-heading">
                    <Factory size={13} />
                    TECHTORCH CONTACT DESK
                  </div>

                  <div className="mfg-contact-item">

                    <div className="mfg-contact-icon">
                      <Mail size={14} />
                    </div>

                    <div>
                      <small>Email Enquiries</small>
                      <strong>contact@techtorch.solutions</strong>
                    </div>

                  </div>

                  <div className="mfg-contact-item">

                    <div className="mfg-contact-icon">
                      <MapPin size={14} />
                    </div>

                    <div>
                      <small>Office Locations</small>
                      <strong>Noida · Bareilly · Florida, USA</strong>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT FORM */}

              <div
                className="mfg-form-card"
                id="manufacturing-enquiry-form"
              >

                <div className="mfg-form-heading">

                  <h2>Submit Your Requirement</h2>

                  <p>
                    Please share your details and requirement. Our team will
                    review and get in touch with you.
                  </p>

                </div>

                <form onSubmit={handleSubmit}>

                  <div className="mfg-form-grid">

                    <div className="mfg-field">

                      <label>
                        Full Name <span>*</span>
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

                    <div className="mfg-field">

                      <label>
                        Business Email <span>*</span>
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

                    <div className="mfg-field">

                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />

                    </div>

                    <div className="mfg-field">

                      <label>
                        Company / Organization <span>*</span>
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        required
                      />

                    </div>

                  </div>

                  <div className="mfg-field full-width">

                    <label>
                      What Can We Help You With? <span>*</span>
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select an area of interest
                      </option>

                      <option value="erp">
                        ERP & Business Processes
                      </option>

                      <option value="supply-chain">
                        Supply Chain
                      </option>

                      <option value="software">
                        Software & Integration
                      </option>

                      <option value="digital-transformation">
                        Digital Transformation
                      </option>

                      <option value="technology-support">
                        Technology Support
                      </option>
                    </select>

                  </div>

                  <div className="mfg-field full-width">

                    <label>
                      Tell Us About Your Requirement
                    </label>

                    <textarea
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      placeholder="Tell us about your business, current technology environment, project requirements or the challenge you would like to discuss."
                    />

                  </div>

                  <div className="mfg-field full-width">

                    <label>
                      Preferred Contact Method
                    </label>

                    <div className="mfg-radio-row">

                      <label className="mfg-radio-box">

                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.contactMethod === "email"}
                          onChange={handleChange}
                        />

                        <span>Email</span>

                      </label>

                      <label className="mfg-radio-box">

                        <input
                          type="radio"
                          name="contactMethod"
                          value="phone"
                          checked={formData.contactMethod === "phone"}
                          onChange={handleChange}
                        />

                        <span>Phone</span>

                      </label>

                    </div>

                  </div>

                  <label className="mfg-consent">

                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                    />

                    <span>
                      I agree to be contacted regarding my enquiry.
                    </span>

                  </label>

                  <button
                    type="submit"
                    className="mfg-submit-btn"
                  >
                    SUBMIT ENQUIRY
                    <ArrowRight size={14} />
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

        {/* ================= ENGAGEMENT PROCESS ================= */}

        <section className="mfg-process-section">

          <div className="mfg-process-heading">

            <span>ENGAGEMENT PROCESS</span>

            <h2>From Requirement to Next Steps</h2>

          </div>

          <div className="mfg-process-grid">

            {ENGAGEMENT_STEPS.map((step) => (
              <div
                className="mfg-process-card"
                key={step.number}
              >

                <div className="mfg-process-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>
            ))}

          </div>

          {/* ================= BOTTOM CTA ================= */}

          <div className="mfg-bottom-cta">

            <div>

              <h2>
                Let's Discuss Your Manufacturing Technology
                <br />
                Requirements
              </h2>

              <p>
                Whether you need ERP, supply chain management, software
                development, system integration or broader technology
                support, our team is ready to discuss your requirements.
              </p>

            </div>

            <button
              type="button"
              onClick={scrollToForm}
            >
              Talk to Our Experts
              <ArrowRight size={14} />
            </button>

          </div>

        </section>

      </div>
    </>
  );
}