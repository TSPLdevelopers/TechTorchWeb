import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Cpu,
  ArrowLeftRight,
  ListChecks,
} from "lucide-react";

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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        :root {
          --it-beetroot: #730042;
          --it-dark: #181818;
          --it-text: #555;
          --it-light-text: #777;
        }

        .it-consultation-page {
          width: 100%;
          background: #fff;
          color: var(--it-dark);
          overflow: hidden;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        /* =========================================
           HERO
        ========================================= */

        .it-hero {
          width: 100%;
          background: #fff;
          padding: 70px 40px 75px;
        }

        .it-hero-container {
          width: min(1250px, 100%);
          margin: 0 auto;

          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 58px;
          align-items: center;
        }

        .it-hero-content {
          min-width: 0;
        }

        .it-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 7px 14px;

          background: #ffe2ed;
          color: var(--it-beetroot);

          border-radius: 999px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.6px;
        }

        .it-eyebrow span {
          width: 5px;
          height: 5px;
          flex-shrink: 0;

          border-radius: 50%;
          background: var(--it-beetroot);
        }

        /* =========================================
           HERO HEADING
        ========================================= */

        .it-hero-content h1 {
          max-width: 700px;

          margin: 24px 0 20px;

          color: var(--it-dark);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 42px;
          line-height: 1.15;
          letter-spacing: -1.3px;
          font-weight: 800;
        }

        .it-hero-content h1 span {
          color: var(--it-beetroot);
        }

        /* =========================================
           HERO SUBHEADING
        ========================================= */

        .it-hero-description {
          max-width: 650px;

          margin: 0 0 30px;

          color: #696969;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        /* =========================================
           CONSULTATION CARDS
        ========================================= */

        .it-consultation-grid {
          width: 100%;
          max-width: 690px;

          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .it-consultation-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;

          min-width: 0;
          padding: 15px;

          background: #fff;
          border: 1px solid #eee;
          border-radius: 11px;

          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .it-consultation-card:hover {
          transform: translateY(-3px);
          border-color: #e5bfd1;
          box-shadow: 0 9px 22px rgba(115, 0, 66, 0.07);
        }

        .it-card-icon {
          flex-shrink: 0;
          padding-top: 2px;
          color: var(--it-beetroot);
        }

        .it-consultation-card h3 {
          margin: 0 0 5px;

          color: #222;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .it-consultation-card p {
          margin: 0;

          color: #777;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11.5px;
          line-height: 1.5;
        }

        /* =========================================
           HERO BUTTONS
        ========================================= */

        .it-hero-buttons {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-top: 28px;
        }

        .it-primary-btn,
        .it-secondary-btn {
          min-height: 44px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          padding: 0 20px;

          border-radius: 8px;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .it-primary-btn {
          background: var(--it-beetroot);
          color: #fff;
          border: 1px solid var(--it-beetroot);
        }

        .it-primary-btn:hover {
          background: #5d0035;
          transform: translateY(-1px);
          box-shadow: 0 7px 16px rgba(115, 0, 66, 0.18);
        }

        .it-secondary-btn {
          background: #f1f1f1;
          color: #222;
          border: 1px solid #f1f1f1;
        }

        .it-secondary-btn:hover {
          background: #e7e7e7;
          transform: translateY(-1px);
        }

        /* =========================================
           HERO IMAGE
        ========================================= */

        .it-hero-image-wrapper {
          position: relative;

          width: 100%;
          max-width: 500px;

          margin-left: auto;
        }

        .it-hero-image {
          display: block;

          width: 100%;
          height: 410px;

          object-fit: cover;

          border-radius: 17px;

          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.13);
        }

        .it-image-label {
          position: absolute;
          top: 20px;
          right: 20px;

          display: flex;
          align-items: center;
          gap: 9px;

          max-width: calc(100% - 40px);

          padding: 10px 15px;

          background: rgba(255, 255, 255, 0.96);

          border-radius: 12px;

          color: #222;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11px;
          font-weight: 600;

          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.09);
        }

        .it-label-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;

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

          padding: 10px 18px;

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
          min-width: 0;
        }

        .it-bottom-content h4 {
          margin: 0 0 4px;

          color: #222;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .it-bottom-content p {
          display: flex;
          align-items: center;
          gap: 7px;

          margin: 0;

          color: #666;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.4;
        }

        .it-bottom-content p span {
          width: 6px;
          height: 6px;
          flex-shrink: 0;

          background: #18b779;
          border-radius: 50%;
        }

        .it-bottom-brand {
          display: flex;
          align-items: center;
          gap: 5px;

          flex-shrink: 0;

          color: var(--it-beetroot);

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
        }

        /* =========================================
           FORM SECTION
        ========================================= */

        .it-form-section {
          padding: 80px 40px 90px;
          background: #faf9f6;
        }

        .it-form-card {
          width: 100%;
          max-width: 850px;

          margin: 0 auto;
          padding: 46px 48px 40px;

          background: #fff;
          border-radius: 17px;

          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.07);
        }

        .it-form-heading > span,
        .it-process-heading > span {
          color: var(--it-beetroot);

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.8px;
        }

        .it-form-heading h2 {
          margin: 12px 0 9px;

          color: #181818;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 26px;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.6px;
        }

        .it-form-heading p {
          max-width: 730px;

          margin: 0 0 30px;

          color: #777;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.7;
          font-weight: 500;
        }

        /* =========================================
           FORM GRID
        ========================================= */

        .it-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .it-field {
          width: 100%;
          min-width: 0;
        }

        .it-field.full-width {
          margin-top: 17px;
        }

        .it-field label {
          display: block;

          margin-bottom: 7px;

          color: #222;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
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

          color: #333;

          font-family: "Inter", Arial, sans-serif;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .it-field input,
        .it-field select {
          height: 42px;
          padding: 0 13px;

          font-size: 12px;
        }

        .it-field textarea {
          min-height: 100px;

          padding: 12px 13px;

          resize: vertical;

          font-size: 12px;
          line-height: 1.55;
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

        /* =========================================
           RADIO
        ========================================= */

        .it-radio-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .it-field .it-radio-box {
          height: 42px;
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;

          margin: 0;
          padding: 0;

          background: #f4f4f4;
          border-radius: 8px;

          color: #333;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;

          cursor: pointer;
        }

        .it-field .it-radio-box input {
          width: 12px;
          height: 12px;

          margin: 0;

          accent-color: var(--it-beetroot);
        }

        /* =========================================
           CONSENT
        ========================================= */

        .it-consent {
          display: flex;
          align-items: flex-start;
          gap: 9px;

          margin-top: 22px;

          color: #777;

          font-family: "Inter", Arial, sans-serif;
          font-size: 11.5px;
          line-height: 1.5;

          cursor: pointer;
        }

        .it-consent input {
          width: 13px;
          height: 13px;

          flex-shrink: 0;

          margin: 1px 0 0;

          accent-color: var(--it-beetroot);
        }

        /* =========================================
           SUBMIT
        ========================================= */

        .it-submit-btn {
          width: 100%;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          margin-top: 24px;

          border: none;
          border-radius: 10px;

          background: var(--it-beetroot);
          color: #fff;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .it-submit-btn:hover {
          background: #5d0035;
          transform: translateY(-1px);
        }

        .it-privacy-text {
          margin: 10px 0 0;

          text-align: center;

          color: #777;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          line-height: 1.5;
        }

        .it-privacy-text a {
          color: var(--it-beetroot);
          text-decoration: none;
        }

        /* =========================================
           PROCESS SECTION
        ========================================= */

        .it-process-section {
          padding: 85px 40px 90px;
          background: #fff;
        }

        .it-process-heading {
          max-width: 700px;

          margin: 0 auto 48px;

          text-align: center;
        }

        .it-process-heading h2 {
          margin: 11px 0 9px;

          color: #181818;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.7px;
        }

        .it-process-heading p {
          margin: 0;

          color: #777;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 500;
        }

        .it-process-grid {
          width: min(1250px, 100%);

          margin: 0 auto;

          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        .it-process-card {
          min-height: 200px;

          padding: 27px;

          background: #fafafa;
          border: 1px solid #eee;

          border-radius: 14px;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .it-process-card:hover {
          transform: translateY(-4px);

          border-color: #e5bfd1;

          box-shadow: 0 10px 25px rgba(115, 0, 66, 0.06);
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

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
        }

        .it-process-card h3 {
          margin: 0 0 11px;

          color: #181818;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
        }

        .it-process-card p {
          margin: 0;

          color: #777;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =========================================
           BOTTOM CTA
        ========================================= */

        .it-bottom-cta {
          width: min(1250px, 100%);

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

        .it-bottom-cta-content {
          min-width: 0;
        }

        .it-bottom-cta h2 {
          margin: 0 0 12px;

          color: #fff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 25px;
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.4px;
        }

        .it-bottom-cta p {
          max-width: 650px;

          margin: 0;

          color: rgba(255, 255, 255, 0.88);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12.5px;
          line-height: 1.7;
          font-weight: 500;
        }

        .it-bottom-cta button {
          flex-shrink: 0;

          min-width: 165px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 0 18px;

          border: none;
          border-radius: 8px;

          background: #fff;
          color: var(--it-beetroot);

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .it-bottom-cta button:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 18px rgba(0, 0, 0, 0.12);
        }

        /* =========================================
           LARGE TABLET
        ========================================= */

        @media (max-width: 1100px) {
          .it-hero {
            padding: 60px 32px 65px;
          }

          .it-hero-container {
            gap: 42px;
          }

          .it-hero-content h1 {
            font-size: 38px;
          }

          .it-hero-image {
            height: 380px;
          }

          .it-form-section,
          .it-process-section {
            padding-left: 32px;
            padding-right: 32px;
          }

          .it-bottom-cta {
            padding: 38px 40px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .it-hero-container {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .it-hero-content {
            max-width: 760px;
            margin: 0 auto;
          }

          .it-hero-image-wrapper {
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
          }

          .it-hero-image {
            height: 410px;
          }

          .it-process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .it-bottom-cta {
            align-items: flex-start;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 650px) {
          .it-hero {
            padding: 48px 18px 55px;
          }

          .it-eyebrow {
            max-width: 100%;
            font-size: 9px;
            letter-spacing: 0.4px;
          }

          .it-hero-content h1 {
            margin-top: 20px;
            margin-bottom: 18px;

            font-size: 30px;
            line-height: 1.2;
            letter-spacing: -0.8px;
          }

          .it-hero-description {
            margin-bottom: 25px;

            font-size: 12.5px;
            line-height: 1.7;
          }

          .it-consultation-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .it-consultation-card {
            padding: 13px;
          }

          .it-consultation-card h3 {
            font-size: 13px;
          }

          .it-consultation-card p {
            font-size: 11px;
          }

          .it-hero-buttons {
            flex-direction: column;
            align-items: stretch;

            margin-top: 22px;
          }

          .it-primary-btn,
          .it-secondary-btn {
            width: 100%;
          }

          .it-hero-image {
            height: 350px;
          }

          .it-image-label {
            top: 12px;
            right: 12px;

            max-width: calc(100% - 24px);

            padding: 9px 12px;

            font-size: 9.5px;
          }

          .it-image-bottom-card {
            left: 12px;
            right: 12px;
            bottom: 12px;

            gap: 10px;

            padding: 11px 13px;
          }

          .it-bottom-icon {
            width: 39px;
            height: 39px;
          }

          .it-bottom-content h4 {
            font-size: 11.5px;
          }

          .it-bottom-content p {
            font-size: 9px;
          }

          .it-bottom-brand {
            display: none;
          }

          /* FORM */

          .it-form-section {
            padding: 55px 15px;
          }

          .it-form-card {
            padding: 31px 20px;
            border-radius: 14px;
          }

          .it-form-heading h2 {
            font-size: 23px;
          }

          .it-form-heading p {
            font-size: 12px;
          }

          .it-form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .it-field.full-width {
            margin-top: 15px;
          }

          /* PROCESS */

          .it-process-section {
            padding: 58px 18px;
          }

          .it-process-heading {
            margin-bottom: 34px;
          }

          .it-process-heading h2 {
            font-size: 25px;
          }

          .it-process-heading p {
            font-size: 12px;
          }

          .it-process-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .it-process-card {
            min-height: auto;
            padding: 22px;
          }

          /* CTA */

          .it-bottom-cta {
            flex-direction: column;
            align-items: stretch;

            margin-top: 50px;

            padding: 30px 22px;

            gap: 25px;

            border-radius: 14px;
          }

          .it-bottom-cta h2 {
            font-size: 22px;
          }

          .it-bottom-cta p {
            font-size: 11.5px;
          }

          .it-bottom-cta button {
            width: 100%;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 430px) {
          .it-hero {
            padding: 40px 14px 48px;
          }

          .it-hero-content h1 {
            font-size: 27px;
            line-height: 1.22;
          }

          .it-hero-description {
            font-size: 11.5px;
          }

          .it-consultation-card {
            gap: 9px;
            padding: 12px;
          }

          .it-consultation-card h3 {
            font-size: 12px;
          }

          .it-consultation-card p {
            font-size: 10.5px;
          }

          .it-hero-image {
            height: 300px;
            border-radius: 13px;
          }

          .it-image-label {
            padding: 8px 10px;
            font-size: 9px;
          }

          .it-image-bottom-card {
            padding: 9px 10px;
          }

          .it-bottom-icon {
            width: 35px;
            height: 35px;
          }

          .it-form-section {
            padding: 42px 10px;
          }

          .it-form-card {
            padding: 25px 15px;
          }

          .it-form-heading h2 {
            font-size: 21px;
          }

          .it-form-heading p {
            font-size: 11.5px;
          }

          .it-field input,
          .it-field select {
            height: 40px;
          }

          .it-field textarea {
            min-height: 90px;
          }

          .it-radio-row {
            gap: 8px;
          }

          .it-field .it-radio-box {
            font-size: 11px;
          }

          .it-process-section {
            padding: 46px 14px;
          }

          .it-process-heading h2 {
            font-size: 23px;
          }

          .it-process-card {
            padding: 20px;
          }

          .it-process-card h3 {
            font-size: 14px;
          }

          .it-process-card p {
            font-size: 11px;
          }

          .it-bottom-cta {
            padding: 27px 18px;
          }

          .it-bottom-cta h2 {
            font-size: 20px;
          }

          .it-bottom-cta p {
            font-size: 11px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 350px) {
          .it-hero {
            padding-left: 11px;
            padding-right: 11px;
          }

          .it-hero-content h1 {
            font-size: 25px;
          }

          .it-form-section {
            padding-left: 7px;
            padding-right: 7px;
          }

          .it-form-card {
            padding-left: 12px;
            padding-right: 12px;
          }

          .it-radio-row {
            grid-template-columns: 1fr;
          }

          .it-process-section {
            padding-left: 11px;
            padding-right: 11px;
          }

          .it-bottom-cta {
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .it-consultation-card,
          .it-primary-btn,
          .it-secondary-btn,
          .it-submit-btn,
          .it-process-card,
          .it-bottom-cta button {
            transition: none;
          }

          .it-consultation-card:hover,
          .it-primary-btn:hover,
          .it-secondary-btn:hover,
          .it-submit-btn:hover,
          .it-process-card:hover,
          .it-bottom-cta button:hover {
            transform: none;
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
                  <div
                    className="it-consultation-card"
                    key={index}
                  >
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

            {/* ================= HERO IMAGE ================= */}

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

                  <h4>
                    Senior Technology Advisory
                  </h4>

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

              <span>
                CONSULTATION INTAKE
              </span>

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
                  <label>
                    03. Phone Number
                  </label>

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

            <span>
              ENGAGEMENT PROCESS
            </span>

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

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>
            ))}

          </div>

          {/* ================= BOTTOM CTA ================= */}

          <div className="it-bottom-cta">

            <div className="it-bottom-cta-content">

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