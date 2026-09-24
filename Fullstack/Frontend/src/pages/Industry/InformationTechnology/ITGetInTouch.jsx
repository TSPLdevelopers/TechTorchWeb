import React, { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cpu,
  ArrowLeftRight,
  ListChecks,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const BEETROOT = "#730042";

const CONSULTATION_CARDS = [
  {
    icon: <BriefcaseBusiness size={17} />,
    title: "Business-Focused Consultation",
    description: "Discuss technology around your business requirements.",
  },
  {
    icon: <Cpu size={17} />,
    title: "Technology Expertise",
    description:
      "Explore solutions across software, cloud, AI and digital technology.",
  },
  {
    icon: <ArrowLeftRight size={17} />,
    title: "Flexible Engagement",
    description:
      "Discuss the right approach based on your project and business needs.",
  },
  {
    icon: <ListChecks size={17} />,
    title: "Clear Next Steps",
    description:
      "Understand the potential approach and next steps for your requirement.",
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Understand Your Requirement",
    description:
      "We review your business needs, technology requirements and the objectives you want to achieve.",
  },
  {
    number: "02",
    title: "Discuss the Right Approach",
    description:
      "Our team discusses relevant technology capabilities and possible approaches for your requirement.",
  },
  {
    number: "03",
    title: "Define the Next Steps",
    description:
      "Based on the discussion, we identify the appropriate way forward for your project or business need.",
  },
];

export default function InformationTechnologyGetInTouch() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    requirement: "",
    contactMethod: "email",
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

    console.log("Technology enquiry:", formData);
  };

  const scrollToForm = () => {
    document
      .getElementById("technology-enquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        :root {
          --it-beetroot: #730042;
          --it-dark: #181818;
          --it-text: #555;
          --it-light-text: #777;
        }

        * {
          box-sizing: border-box;
        }

        .it-consultation-page {
          width: 100%;
          background: #fff;
          color: var(--it-dark);
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* ================= HERO ================= */

        .it-hero {
          background: #fff;
          padding: 78px 5% 90px;
        }

        .it-hero-container {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 58px;
          align-items: center;
        }

        .it-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: #ffe2ed;
          color: var(--it-beetroot);
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
        }

        .it-eyebrow span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--it-beetroot);
        }

        .it-hero-content h1 {
          margin: 23px 0 20px;
          font-size: clamp(42px, 4vw, 58px);
          line-height: 1.05;
          letter-spacing: -2px;
          font-weight: 700;
        }

        .it-hero-content h1 span {
          color: var(--it-beetroot);
        }

        .it-hero-description {
          max-width: 650px;
          margin: 0 0 30px;
          color: #696969;
          font-size: 16px;
          line-height: 1.65;
        }

        /* ================= CONSULTATION CARDS ================= */

        .it-consultation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          max-width: 690px;
        }

        .it-consultation-card {
          display: flex;
          gap: 12px;
          padding: 17px 16px;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 10px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .it-card-icon {
          flex-shrink: 0;
          color: var(--it-beetroot);
          padding-top: 2px;
        }

        .it-consultation-card h3 {
          margin: 0 0 5px;
          font-size: 14px;
          font-weight: 700;
        }

        .it-consultation-card p {
          margin: 0;
          color: #777;
          font-size: 12px;
          line-height: 1.45;
        }

        /* ================= BUTTONS ================= */

        .it-hero-buttons {
          display: flex;
          gap: 12px;
          margin-top: 28px;
        }

        .it-primary-btn,
        .it-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 42px;
          padding: 0 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .it-primary-btn {
          background: var(--it-beetroot);
          color: #fff;
          border: 1px solid var(--it-beetroot);
        }

        .it-primary-btn:hover {
          background: #5d0035;
        }

        .it-secondary-btn {
          background: #f1f1f1;
          color: #222;
          border: 1px solid #f1f1f1;
        }

        .it-secondary-btn:hover {
          background: #e7e7e7;
        }

        /* ================= HERO IMAGE ================= */

        .it-hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 540px;
          margin-left: auto;
        }

        .it-hero-image {
          display: block;
          width: 100%;
          height: 470px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.13);
        }

        .it-image-label {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 17px;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);
        }

        .it-label-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--it-beetroot);
        }

        .it-image-bottom-card {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 16px 18px;
          background: rgba(255, 255, 255, 0.97);
          border-radius: 13px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .it-bottom-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--it-beetroot);
          background: #ffe0eb;
          border-radius: 11px;
        }

        .it-bottom-content {
          flex: 1;
        }

        .it-bottom-content h4 {
          margin: 0 0 4px;
          font-size: 14px;
          font-weight: 700;
        }

        .it-bottom-content p {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 0;
          color: #666;
          font-size: 11px;
        }

        .it-bottom-content p span {
          width: 6px;
          height: 6px;
          background: #18b779;
          border-radius: 50%;
        }

        .it-bottom-brand {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--it-beetroot);
          font-size: 13px;
          font-weight: 700;
        }

        /* ================= FORM ================= */

        .it-form-section {
          padding: 75px 5% 85px;
          background: #faf9f6;
        }

        .it-form-card {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          padding: 43px 48px 38px;
          background: #fff;
          border-radius: 17px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.07);
        }

        .it-form-heading > span,
        .it-process-heading > span {
          color: var(--it-beetroot);
          font-size: 10px;
          font-weight: 700;
        }

        .it-form-heading h2 {
          margin: 12px 0 8px;
          font-size: 27px;
          line-height: 1.2;
          letter-spacing: -0.6px;
        }

        .it-form-heading p {
          max-width: 730px;
          margin: 0 0 28px;
          color: #777;
          font-size: 13px;
          line-height: 1.55;
        }

        .it-form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .it-field {
          width: 100%;
        }

        .it-field.full-width {
          margin-top: 17px;
        }

        .it-field label {
          display: block;
          margin-bottom: 7px;
          font-size: 11px;
          font-weight: 700;
        }

        .it-field label span {
          color: var(--it-beetroot);
        }

        .it-field input,
        .it-field select,
        .it-field textarea {
          width: 100%;
          border: 1px solid transparent;
          background: #f4f4f4;
          border-radius: 8px;
          outline: none;
          font-family: inherit;
          color: #333;
          transition: 0.2s ease;
        }

        .it-field input,
        .it-field select {
          height: 40px;
          padding: 0 13px;
          font-size: 12px;
        }

        .it-field textarea {
          min-height: 92px;
          padding: 12px 13px;
          resize: vertical;
          font-size: 12px;
          line-height: 1.5;
        }

        .it-field input::placeholder,
        .it-field textarea::placeholder {
          color: #aaa;
        }

        .it-field input:focus,
        .it-field select:focus,
        .it-field textarea:focus {
          border-color: #d6a1bc;
          background: #fff;
        }

        /* ================= RADIO ================= */

        .it-radio-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .it-radio-box {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background: #f4f4f4;
          border-radius: 8px;
          font-size: 11px;
          cursor: pointer;
        }

        .it-radio-box input {
          accent-color: var(--it-beetroot);
        }

        /* ================= CHECKBOX ================= */

        .it-consent {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 22px;
          color: #777;
          font-size: 11px;
          cursor: pointer;
        }

        .it-consent input {
          width: 13px;
          height: 13px;
          margin: 0;
          accent-color: var(--it-beetroot);
        }

        /* ================= SUBMIT ================= */

        .it-submit-btn {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 24px;
          border: none;
          border-radius: 8px;
          background: var(--it-beetroot);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .it-submit-btn:hover {
          background: #5d0035;
        }

        .it-privacy-text {
          margin: 10px 0 0;
          text-align: center;
          color: #777;
          font-size: 9px;
        }

        .it-privacy-text a {
          color: var(--it-beetroot);
        }

        /* ================= PROCESS ================= */

        .it-process-section {
          padding: 80px 5% 85px;
          background: #fff;
        }

        .it-process-heading {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 48px;
        }

        .it-process-heading h2 {
          margin: 11px 0 8px;
          font-size: 29px;
          line-height: 1.2;
          letter-spacing: -0.7px;
        }

        .it-process-heading p {
          margin: 0;
          color: #777;
          font-size: 13px;
          line-height: 1.5;
        }

        .it-process-grid {
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .it-process-card {
          min-height: 205px;
          padding: 27px;
          background: #fafafa;
          border: 1px solid #eee;
          border-radius: 14px;
        }

        .it-step-number {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          background: #ffdce9;
          color: var(--it-beetroot);
          border-radius: 10px;
          font-size: 12px;
          font-weight: 700;
        }

        .it-process-card h3 {
          margin: 0 0 11px;
          font-size: 15px;
          line-height: 1.3;
        }

        .it-process-card p {
          margin: 0;
          color: #777;
          font-size: 12px;
          line-height: 1.65;
        }

        /* ================= BOTTOM CTA ================= */

        .it-bottom-cta {
          max-width: 1250px;
          margin: 75px auto 0;
          padding: 42px 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          background: var(--it-beetroot);
          border-radius: 17px;
          box-shadow: 0 14px 30px rgba(115, 0, 66, 0.18);
        }

        .it-bottom-cta h2 {
          margin: 0 0 12px;
          color: #fff;
          font-size: 26px;
          line-height: 1.2;
        }

        .it-bottom-cta p {
          max-width: 650px;
          margin: 0;
          color: rgba(255, 255, 255, 0.88);
          font-size: 12px;
          line-height: 1.65;
        }

        .it-bottom-cta button {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 165px;
          height: 40px;
          padding: 0 18px;
          border: none;
          border-radius: 8px;
          background: #fff;
          color: var(--it-beetroot);
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .it-bottom-cta button:hover {
          transform: translateY(-1px);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1000px) {
          .it-hero-container {
            grid-template-columns: 1fr;
          }

          .it-hero-image-wrapper {
            margin: 10px auto 0;
          }

          .it-process-grid {
            grid-template-columns: 1fr;
          }

          .it-bottom-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 700px) {
          .it-hero {
            padding: 50px 20px 65px;
          }

          .it-hero-content h1 {
            font-size: 38px;
            letter-spacing: -1.3px;
          }

          .it-consultation-grid {
            grid-template-columns: 1fr;
          }

          .it-hero-buttons {
            flex-direction: column;
          }

          .it-primary-btn,
          .it-secondary-btn {
            width: 100%;
          }

          .it-hero-image {
            height: 390px;
          }

          .it-image-bottom-card {
            left: 12px;
            right: 12px;
            bottom: 12px;
          }

          .it-bottom-brand {
            display: none;
          }

          .it-form-section {
            padding: 50px 15px;
          }

          .it-form-card {
            padding: 30px 20px;
          }

          .it-form-grid {
            grid-template-columns: 1fr;
          }

          .it-process-section {
            padding: 55px 20px;
          }

          .it-bottom-cta {
            padding: 32px 25px;
          }

          .it-bottom-cta h2 {
            font-size: 23px;
          }
        }
      `}</style>

      <div className="it-consultation-page">

        {/* ================= HERO ================= */}

        <section className="it-hero">
          <div className="it-hero-container">

            <div className="it-hero-content">

              <div className="it-eyebrow">
                <span />
                INFORMATION TECHNOLOGY · CONSULTATION
              </div>

              <h1>
                Connect With TechTorch
                <br />
                <span>Technology Experts</span>
              </h1>

              <p className="it-hero-description">
                Discuss your technology requirements, software initiatives,
                cloud infrastructure, cybersecurity needs, AI opportunities
                or digital transformation goals with our team.
              </p>

              <div className="it-consultation-grid">
                {CONSULTATION_CARDS.map((card, index) => (
                  <div className="it-consultation-card" key={index}>
                    <div className="it-card-icon">
                      {card.icon}
                    </div>

                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="it-hero-buttons">

                <button
                  type="button"
                  className="it-primary-btn"
                  onClick={scrollToForm}
                >
                  Talk to Our Experts
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  className="it-secondary-btn"
                  onClick={() => navigate("/it-services")}
                >
                  Back to IT Services
                  <ArrowRight size={16} />
                </button>

              </div>
            </div>

            {/* IMAGE */}

            <div className="it-hero-image-wrapper">

              <img
                src="/ITGetInTouch.png"
                alt="Technology consultation meeting"
                className="it-hero-image"
              />

              <div className="it-image-label">
                <span className="it-label-dot" />
                TechTorch Consultation Desk
              </div>

              <div className="it-image-bottom-card">

                <div className="it-bottom-icon">
                  <Cpu size={21} />
                </div>

                <div className="it-bottom-content">
                  <h4>Senior Technology Advisory</h4>

                  <p>
                    <span />
                    Direct consultation with domain leads
                  </p>
                </div>

                <div className="it-bottom-brand">
                  <span>✥</span>
                  TechTorch
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* ================= FORM ================= */}

        <section
          className="it-form-section"
          id="technology-enquiry-form"
        >
          <div className="it-form-card">

            <div className="it-form-heading">

              <span>CONSULTATION INTAKE</span>

              <h2>
                Tell Us About Your Technology Requirements
              </h2>

              <p>
                Share a few details about your business, project or
                technology requirement. Our team can review your enquiry
                and connect with you to discuss the appropriate next steps.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="it-form-grid">

                <div className="it-field">
                  <label>
                    01. Full Name <span>*</span>
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


                <div className="it-field">
                  <label>
                    02. Business Email <span>*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                  />
                </div>


                <div className="it-field">
                  <label>03. Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>


                <div className="it-field">
                  <label>
                    04. Company / Organization <span>*</span>
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


              <div className="it-field full-width">
                <label>
                  05. What Can We Help You With? <span>*</span>
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service or technology area
                  </option>

                  <option value="software-development">
                    Software Development
                  </option>

                  <option value="it-consulting">
                    IT Consulting
                  </option>

                  <option value="cloud">
                    Cloud Infrastructure
                  </option>

                  <option value="cybersecurity">
                    Cybersecurity
                  </option>

                  <option value="ai">
                    Artificial Intelligence
                  </option>

                  <option value="digital-transformation">
                    Digital Transformation
                  </option>

                  <option value="technology-support">
                    Technology Support
                  </option>
                </select>
              </div>


              <div className="it-field full-width">

                <label>
                  06. Tell Us About Your Requirement <span>*</span>
                </label>

                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Tell us about your business requirement, project, existing technology environment or the challenge you would like to discuss."
                  required
                />

              </div>


              <div className="it-field full-width">

                <label>
                  07. Preferred Contact Method
                </label>

                <div className="it-radio-row">

                  <label className="it-radio-box">

                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={
                        formData.contactMethod === "email"
                      }
                      onChange={handleChange}
                    />

                    <span>Email</span>

                  </label>


                  <label className="it-radio-box">

                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={
                        formData.contactMethod === "phone"
                      }
                      onChange={handleChange}
                    />

                    <span>Phone</span>

                  </label>

                </div>

              </div>


              <label className="it-consent">

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
                className="it-submit-btn"
              >
                SUBMIT ENQUIRY
                <ArrowRight size={17} />
              </button>


              <p className="it-privacy-text">
                Your information is used to respond to your enquiry.{" "}
                <a href="/privacy-policy">
                  View our Privacy Policy.
                </a>
              </p>

            </form>
          </div>
        </section>


        {/* ================= ENGAGEMENT PROCESS ================= */}

        <section className="it-process-section">

          <div className="it-process-heading">

            <span>ENGAGEMENT PROCESS</span>

            <h2>
              From Requirement to Next Steps
            </h2>

            <p>
              A clear, transparent path to understand your objectives
              and discuss the right solution.
            </p>

          </div>


          <div className="it-process-grid">

            {ENGAGEMENT_STEPS.map((step) => (

              <div
                className="it-process-card"
                key={step.number}
              >

                <div className="it-step-number">
                  {step.number}
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            ))}

          </div>


          {/* BOTTOM CTA */}

          <div className="it-bottom-cta">

            <div>

              <h2>
                Let's Discuss Your Technology
                <br />
                Requirements
              </h2>

              <p>
                Whether you need software development, IT consultancy,
                cloud infrastructure, cybersecurity, AI or technology
                support, our team is ready to discuss your requirements.
              </p>

            </div>


            <button
              type="button"
              onClick={scrollToForm}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </button>

          </div>

        </section>

      </div>
    </>
  );
}