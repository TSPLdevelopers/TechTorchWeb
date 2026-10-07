import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronDown,
  Clock3,
  ShieldCheck,
  CircleHelp,
  Zap,
} from "lucide-react";

export default function AskQuestion() {
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState(null);
  const [urgency, setUrgency] = useState("general");

  const faqData = [
    {
      category: "SERVICES & CAPABILITIES",
      question: "What services does TechTorch Solutions provide?",
      answer:
        "TechTorch Solutions provides technology and digital solutions for enterprise requirements.",
    },
    {
      category: "SERVICES & CAPABILITIES",
      question: "Can you develop custom software for my business?",
      answer:
        "Yes, custom software solutions can be developed according to specific business requirements.",
    },
    {
      category: "SERVICES & CAPABILITIES",
      question: "Do you provide AI and Cloud solutions?",
      answer:
        "AI and Cloud capabilities can be incorporated into enterprise technology solutions.",
    },
    {
      category: "ENTERPRISE ERP & SYSTEMS",
      question: "Do you provide ERP solutions?",
      answer:
        "ERP solutions can be designed around connected enterprise processes and systems.",
    },
    {
      category: "ENTERPRISE ERP & SYSTEMS",
      question: "Can your solutions be customized for our business?",
      answer:
        "Solutions can be adapted according to your business processes and technical requirements.",
    },
    {
      category: "ENTERPRISE ERP & SYSTEMS",
      question:
        "Can you integrate new software with existing legacy systems?",
      answer:
        "Integration can be planned around existing enterprise systems and technical architecture.",
    },
    {
      category: "SECURITY & GOVERNANCE",
      question: "Do you provide cybersecurity services?",
      answer:
        "Cybersecurity requirements can be addressed as part of enterprise technology engagements.",
    },
    {
      category: "SECURITY & GOVERNANCE",
      question:
        "How is proprietary code & data protected during engagements?",
      answer:
        "Security and confidentiality requirements can be addressed throughout the engagement.",
    },
    {
      category: "SUPPORT & ENGAGEMENT",
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Ongoing support can be discussed according to project and business requirements.",
    },
    {
      category: "SUPPORT & ENGAGEMENT",
      question: "What engagement models do you support?",
      answer:
        "Engagement models can be structured around project scope and business requirements.",
    },
  ];

  const categories = [
    "SERVICES & CAPABILITIES",
    "ENTERPRISE ERP & SYSTEMS",
    "SECURITY & GOVERNANCE",
    "SUPPORT & ENGAGEMENT",
  ];

  const getFaqs = (category) =>
    faqData.filter((item) => item.category === category);

  return (
    <div className="ask-question-page">
      <style>{`

        /* =========================================================
           GLOBAL
        ========================================================= */

        * {
          box-sizing: border-box;
        }

        .ask-question-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #151b2b;
          font-family: "Inter", sans-serif;
        }

        .aq-container {
          width: min(1100px, calc(100% - 48px));
          margin: 0 auto;
        }

        .aq-heading {
          margin: 0;
          color: #151b2b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 700;
          letter-spacing: -0.6px;
        }

        .aq-text {
          margin: 0;
          color: #687184;
          font-family: "Inter", sans-serif;
          font-weight: 400;
          line-height: 1.6;
        }

        .aq-eyebrow {
          margin: 0 0 8px;
          color: #730042;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        button {
          font-family: "Inter", sans-serif;
        }

        /* =========================================================
           QUESTION HERO
        ========================================================= */

        .question-hero {
          width: 100%;
          padding: 78px 0 82px;
          background:
            radial-gradient(
              circle at 75% 35%,
              rgba(115, 0, 66, 0.05),
              transparent 30%
            ),
            #ffffff;
        }

        .question-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 70px;
        }

        .question-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 22px;
          padding: 7px 14px;
          border: 1px solid rgba(115, 0, 66, 0.18);
          border-radius: 30px;
          background: rgba(115, 0, 66, 0.025);
          color: #730042;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .question-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #730042;
        }

        .question-title {
          max-width: 650px;
         font-size: 38px;
          line-height: 1.04;
        }

        .question-title span {
          display: block;
          color: #730042;
        }

        .question-description {
          max-width: 650px;
          margin-top: 25px;
          font-size: 15px;
          line-height: 1.65;
        }

        .question-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 28px;
        }

        .question-meta-item {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #687184;
          font-family: "Inter", sans-serif;
          font-size: 14px;
        }

        .question-meta-item svg {
          color: #730042;
        }

        .question-meta-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #d2d5da;
        }

        /* =========================================================
           CONSULTATION CARD
        ========================================================= */

        .consultation-card {
          min-height: 300px;
          padding: 32px;
          border-radius: 25px;
          background: #ffffff;
          box-shadow:
            0 20px 45px rgba(25, 30, 45, 0.12),
            0 3px 10px rgba(25, 30, 45, 0.04);

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .consultation-icon {
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
          border-radius: 50%;
          background: rgba(115, 0, 66, 0.045);
          color: #730042;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .consultation-icon svg {
          width: 52px;
          height: 52px;
        }

        .consultation-title {
          margin: 0;
          color: #151b2b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
        }

        .consultation-description {
          max-width: 350px;
          margin: 9px 0 0;
          color: #7a8290;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.55;
        }

        .consultation-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 0;
          border: none;
          background: transparent;
          color: #730042;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        /* =========================================================
           FORM SECTION
        ========================================================= */

        .form-section {
          padding: 85px 0 100px;
          background: #ffffff;
        }

        .form-header {
          max-width: 800px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .form-title {
         font-size: 34px;
          line-height: 1.15;
        }

        .form-subtitle {
          margin-top: 13px;
          font-size: 15px;
        }

        .question-form {
          width: min(860px, 100%);
          margin: 0 auto;
          padding: 40px;
          border: 1px solid #e2e5e9;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 5px 18px rgba(20, 25, 40, 0.04);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px 20px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-label {
          display: block;
          margin-bottom: 8px;
          color: #303847;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
        }

        .required {
          color: #730042;
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          border: 1px solid #d9dde4;
          border-radius: 8px;
          outline: none;
          background: #ffffff;
          color: #252b38;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          transition: 0.2s ease;
        }

        .form-input,
        .form-select {
          height: 48px;
          padding: 0 14px;
        }

        .form-textarea {
          min-height: 105px;
          padding: 13px 14px;
          resize: vertical;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9aa1ad;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          border-color: #730042;
          box-shadow: 0 0 0 3px rgba(115, 0, 66, 0.08);
        }

        .textarea-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .character-count {
          color: #9aa1ad;
          font-family: "Inter", sans-serif;
          font-size: 11px;
        }

        /* =========================================================
           URGENCY
        ========================================================= */

        .urgency-section {
          margin-top: 28px;
        }

        .urgency-title {
          margin: 0 0 10px;
          color: #303847;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
        }

        .urgency-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .urgency-option {
          min-height: 43px;
          padding: 0 13px;
          border: 1px solid #e2e5ea;
          border-radius: 8px;
          background: #ffffff;
          color: #444b58;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;

          display: flex;
          align-items: center;
          gap: 9px;

          cursor: pointer;
        }

        .urgency-option.selected {
          border-color: rgba(115, 0, 66, 0.3);
        }

        .radio-circle {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          border: 2px solid #adb4bf;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .urgency-option.selected .radio-circle {
          border-color: #730042;
        }

        .urgency-option.selected .radio-circle::after {
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #730042;
        }

        /* =========================================================
           FORM BOTTOM
        ========================================================= */

        .form-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 26px;
          padding-top: 8px;
          border-top: 1px solid #edf0f3;
        }

        .submit-button {
          min-height: 46px;
          padding: 0 25px;
          border: none;
          border-radius: 25px;
          background: #730042;
          color: #ffffff;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;

          cursor: pointer;
          box-shadow: 0 5px 12px rgba(115, 0, 66, 0.16);
          transition: 0.2s ease;
        }

        .submit-button:hover {
         background: #970052;
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(115, 0, 66, 0.22);
        }

        .response-note {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8a919d;
          font-family: "Inter", sans-serif;
          font-size: 12px;
        }

        .response-note svg {
          color: #f4b400;
        }

        /* =========================================================
           FAQ
        ========================================================= */

        .faq-section {
          padding: 85px 0 95px;
          background: #faf9f6;
        }

        .faq-header {
          margin-bottom: 38px;
        }

        .faq-title {
         font-size: 36px;
          line-height: 1.12;
        }

        .faq-description {
          margin-top: 10px;
          font-size: 14px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 38px 25px;
        }

        .faq-column-title {
          margin: 0 0 14px 8px;
          color: #a5adba;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          overflow: hidden;
          border: 1px solid #e4e6e9;
          border-radius: 12px;
          background: #ffffff;
        }

        .faq-question {
          width: 100%;
          min-height: 61px;
          padding: 0 17px;
          border: none;
          background: transparent;
          color: #343b49;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-align: left;

          cursor: pointer;
        }

        .faq-question svg {
          flex-shrink: 0;
          color: #8f97a4;
          transition: transform 0.25s ease;
        }

        .faq-question.open svg {
          transform: rotate(180deg);
          color: #730042;
        }

        .faq-answer {
          padding: 0 17px 17px;
          color: #727b89;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================================
           ASK ANOTHER QUESTION
        ========================================================= */

        .another-question {
          margin-top: 48px;
          padding: 30px 32px;
          border: 1px solid #e4e6e9;
          border-radius: 16px;
          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .another-badge {
          display: inline-flex;
          padding: 6px 12px;
          border: 1px solid rgba(115, 0, 66, 0.15);
          border-radius: 20px;
          background: rgba(115, 0, 66, 0.025);
          color: #730042;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .another-title {
          margin-top: 12px;
        font-size: 26px;
          line-height: 1.2;
        }

        .another-description {
          max-width: 620px;
          margin-top: 8px;
          font-size: 13px;
        }

        .direct-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 12px;
        }

        .direct-label {
          color: #9aa1ac;
          font-family: "Inter", sans-serif;
          font-size: 13px;
        }

        .direct-link {
          padding: 0;
          border: none;
          background: transparent;
          color: #730042;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
        }

        .direct-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #d2d5da;
        }

        .question-button {
          min-width: 205px;
          min-height: 43px;
          padding: 0 22px;
          border: none;
          border-radius: 25px;
          background: #730042;
          color: #ffffff;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;
          white-space: nowrap;
        }

        /* =========================================================
           IMMEDIATE REACH
        ========================================================= */

        .reach-section {
          padding: 70px 0 85px;
          background: #ffffff;
        }

        .reach-card {
          padding: 36px 38px 38px;
          border: 1px solid #e3e5e8;
          border-radius: 23px;
          background: #ffffff;
        }

        .reach-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
        }

        .reach-title {
        font-size: 32px;
          line-height: 1.15;
        }

        .reach-description {
          margin-top: 5px;
          font-size: 14px;
        }

        .helpdesk-status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 37px;
          padding: 0 17px;
          border: 1px solid #9eeed0;
          border-radius: 22px;
          background: #f2fff9;
          color: #217b62;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #17b981;
        }

        .reach-divider {
          height: 1px;
          margin: 38px 0 32px;
          background: #e8e9ec;
        }

        .reach-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .reach-item {
          display: flex;
          align-items: flex-start;
          gap: 17px;
        }

        .reach-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border-radius: 17px;
          background: #f9edf4;
          color: #730042;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .reach-icon svg {
          width: 20px;
          height: 20px;
        }

        .reach-label {
          margin: 1px 0 5px;
          color: #a3aab6;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .reach-value {
          margin: 0;
          color: #252c39;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 700;
        }

        .reach-subtext {
          margin: 3px 0 0;
          color: #8b929e;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.45;
        }

        /* =========================================================
           FINAL CTA
        ========================================================= */

        .final-cta {
          position: relative;
          overflow: hidden;
          min-height: 340px;
          padding: 75px 0;
          background: #730042;
          color: #ffffff;
        }

        .final-cta::before {
          content: "";
          position: absolute;
          width: 650px;
          height: 250px;
          left: 42%;
          top: 45%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.07);
          filter: blur(20px);
        }

        .final-cta-inner {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 50px;
        }

        .final-cta .aq-eyebrow {
          color: rgba(255, 255, 255, 0.85);
        }

        .final-title {
          color: #ffffff;
         font-size: 34px;
          line-height: 1.1;
        }

        .final-description {
          max-width: 690px;
          margin-top: 15px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 15px;
          line-height: 1.65;
        }

        .final-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .white-button {
          min-height: 50px;
          padding: 0 30px;
          border: none;
          border-radius: 32px;
          background: #ffffff;
          color: #730042;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 700;

          cursor: pointer;
          white-space: nowrap;
          transition: 0.2s ease;
        }

        .white-button:hover {
          transform: translateY(-2px);
        }

        .outline-button {
          min-height: 50px;
          padding: 0 30px;
          border: 2px solid rgba(255, 255, 255, 0.55);
          border-radius: 32px;
          background: transparent;
          color: #ffffff;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 700;

          cursor: pointer;
          white-space: nowrap;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1024px) {
          .aq-container {
            width: min(920px, calc(100% - 40px));
          }

          .question-hero-grid {
            gap: 40px;
          }

          .question-title {
            font-size: 45px;
          }

          .reach-items {
            gap: 22px;
          }

          .final-cta-inner {
            grid-template-columns: 1fr;
          }

          .final-actions {
            justify-content: flex-start;
          }
        }

        /* =========================================================
           MOBILE / TABLET
        ========================================================= */

        @media (max-width: 768px) {
          .aq-container {
            width: min(100% - 32px, 680px);
          }

          .question-hero {
            padding: 58px 0 65px;
          }

          .question-hero-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .question-title {
            font-size: clamp(36px, 8vw, 48px);
          }

          .question-description {
            font-size: 15px;
          }

          .consultation-card {
            width: min(100%, 440px);
            margin: 0 auto;
          }

          .form-section {
            padding: 65px 0 75px;
          }

          .question-form {
            padding: 27px 22px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full {
            grid-column: auto;
          }

          .urgency-grid {
            grid-template-columns: 1fr;
          }

          .form-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

          .response-note {
            order: -1;
          }

          .submit-button {
            width: 100%;
          }

          .faq-section {
            padding: 65px 0 70px;
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .another-question {
            align-items: flex-start;
            flex-direction: column;
            padding: 25px;
          }

          .question-button {
            width: 100%;
          }

          .reach-section {
            padding: 55px 0 65px;
          }

          .reach-top {
            flex-direction: column;
          }

          .helpdesk-status {
            white-space: normal;
          }

          .reach-items {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .final-cta {
            min-height: auto;
            padding: 60px 0;
          }

          .final-actions {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .white-button,
          .outline-button {
            width: 100%;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {
          .aq-container {
            width: calc(100% - 28px);
          }

          .question-hero {
            padding: 45px 0 52px;
          }

          .question-title {
            font-size: 34px;
          }

          .question-description {
            font-size: 14px;
          }

          .question-meta {
            gap: 12px;
          }

          .question-meta-dot {
            display: none;
          }

          .consultation-card {
            padding: 25px 18px;
          }

          .form-title {
            font-size: 28px;
          }

          .question-form {
            padding: 23px 16px;
            border-radius: 14px;
          }

          .form-input,
          .form-select {
            height: 46px;
          }

          .textarea-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 2px;
          }

          .faq-title {
            font-size: 30px;
          }

          .faq-question {
            min-height: 57px;
            padding: 0 14px;
            font-size: 12px;
          }

          .another-question {
            padding: 21px;
          }

          .another-title {
            font-size: 21px;
          }

          .reach-card {
            padding: 25px 20px;
            border-radius: 18px;
          }

          .reach-title {
            font-size: 29px;
          }

          .reach-item {
            gap: 13px;
          }

          .reach-icon {
            width: 53px;
            height: 53px;
            border-radius: 14px;
          }

          .reach-value {
            font-size: 14px;
          }

          .final-title {
            font-size: 31px;
          }

          .final-description {
            font-size: 14px;
          }

          .white-button,
          .outline-button {
            min-height: 54px;
            font-size: 12px;
          }
        }

        @media (max-width: 360px) {
          .question-title {
            font-size: 30px;
          }

          .question-description {
            font-size: 13px;
          }

          .consultation-icon {
            width: 82px;
            height: 82px;
          }

          .reach-item {
            gap: 10px;
          }

          .reach-value {
            font-size: 13px;
          }
        }

      `}</style>

      {/* =========================================================
          HAVE A QUESTION
      ========================================================= */}

      <section className="question-hero">
        <div className="aq-container question-hero-grid">

          <div>
            <div className="question-badge">
              <span className="question-badge-dot"></span>
              ASK A QUESTION · TECHTORCH SUPPORT & ADVISORY
            </div>

            <h1 className="aq-heading question-title">
              Have a Question?
              <span>We’re Here to Help.</span>
            </h1>

            <p className="aq-text question-description">
              Whether you need guidance on enterprise architectures, our
              digital solutions, engagement models, or technical capabilities,
              our specialists are ready to answer your questions with clarity.
            </p>

            <div className="question-meta">
              <div className="question-meta-item">
                <Clock3 size={16} />
                1 Business Day Turnaround
              </div>

              <span className="question-meta-dot"></span>

              <div className="question-meta-item">
                <ShieldCheck size={17} />
                Confidential & Certified Architects
              </div>
            </div>
          </div>

          <div className="consultation-card">

            <div className="consultation-icon">
              <CircleHelp />
            </div>

            <h2 className="consultation-title">
              Direct Technical Consultation
            </h2>

            <p className="consultation-description">
              Not sure where to begin? Submit your challenge and a TechTorch
              specialist will evaluate and reply promptly.
            </p>

            <button
              type="button"
              className="consultation-link"
              onClick={() =>
                document
                  .querySelector(".form-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              SKIP STRAIGHT TO QUESTION FORM
              <ChevronDown size={16} />
            </button>

          </div>
        </div>
      </section>

      {/* =========================================================
          FORM
      ========================================================= */}

      <section className="form-section">
        <div className="aq-container">

          <div className="form-header">
            <p className="aq-eyebrow">
              QUICK ADVISORY INTAKE
            </p>

            <h2 className="aq-heading form-title">
              Submit Your Question Directly to Our Advisory Team
            </h2>

            <p className="aq-text form-subtitle">
              Provide as much detail as possible to help our senior consultants
              understand your technical scenario.
            </p>
          </div>

          <form
            className="question-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="form-grid">

              <div className="form-group">
                <label className="form-label">
                  Full Name <span className="required">*</span>
                </label>

                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Business Email <span className="required">*</span>
                </label>

                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your business email"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Company / Organization Name
                </label>

                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter company name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Topic / Area of Inquiry{" "}
                  <span className="required">*</span>
                </label>

                <select
                  className="form-select"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an area of inquiry
                  </option>

                  <option>Software Development</option>
                  <option>ERP Solutions</option>
                  <option>AI & Cloud</option>
                  <option>Cybersecurity</option>
                  <option>Digital Transformation</option>
                </select>
              </div>

              <div className="form-group full">

                <div className="textarea-header">
                  <label className="form-label">
                    What is your question or business challenge?{" "}
                    <span className="required">*</span>
                  </label>

                  <span className="character-count">
                    Max 500 characters
                  </span>
                </div>

                <textarea
                  className="form-textarea"
                  maxLength={500}
                  placeholder="Briefly describe your project, technical constraint, architecture question, or business challenge..."
                  required
                />

              </div>

            </div>

            {/* URGENCY */}

            <div className="urgency-section">

              <p className="urgency-title">
                Urgency / Timeline Requirement
              </p>

              <div className="urgency-grid">

                <label
                  className={`urgency-option ${
                    urgency === "general" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="urgency"
                    hidden
                    checked={urgency === "general"}
                    onChange={() => setUrgency("general")}
                  />

                  <span className="radio-circle"></span>

                  Exploring / General
                </label>

                <label
                  className={`urgency-option ${
                    urgency === "active" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="urgency"
                    hidden
                    checked={urgency === "active"}
                    onChange={() => setUrgency("active")}
                  />

                  <span className="radio-circle"></span>

                  Active Project Need
                </label>

                <label
                  className={`urgency-option ${
                    urgency === "immediate" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="urgency"
                    hidden
                    checked={urgency === "immediate"}
                    onChange={() => setUrgency("immediate")}
                  />

                  <span className="radio-circle"></span>

                  Immediate Decision
                </label>

              </div>
            </div>

            {/* FORM BOTTOM */}

            <div className="form-bottom">

              <button
                type="submit"
                className="submit-button"
              >
                Send Question
                <ArrowRight size={17} />
              </button>

              <p className="response-note">
                <Zap size={14} />
                Our solutions architects typically respond within 1 business
                day.
              </p>

            </div>

          </form>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="faq-section">
        <div className="aq-container">

          <div className="faq-header">

            <p className="aq-eyebrow">
              FAQS & KNOWLEDGE BASE
            </p>

            <h2 className="aq-heading faq-title">
              Frequently Asked Questions
            </h2>

            <p className="aq-text faq-description">
              Quick answers to common questions about TechTorch Solutions,
              deployment models, and services.
            </p>

          </div>

          <div className="faq-grid">

            {categories.map((category) => (
              <div key={category}>

                <h3 className="faq-column-title">
                  {category}
                </h3>

                <div className="faq-list">

                  {getFaqs(category).map((faq) => {
                    const index = faqData.indexOf(faq);
                    const isOpen = openFaq === index;

                    return (
                      <div
                        className="faq-item"
                        key={faq.question}
                      >

                        <button
                          type="button"
                          className={`faq-question ${
                            isOpen ? "open" : ""
                          }`}
                          onClick={() =>
                            setOpenFaq(
                              isOpen ? null : index
                            )
                          }
                        >
                          <span>{faq.question}</span>

                          <ChevronDown size={17} />
                        </button>

                        {isOpen && (
                          <div className="faq-answer">
                            {faq.answer}
                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>
              </div>
            ))}

          </div>

          {/* ASK ANOTHER QUESTION */}

          <div className="another-question">

            <div>

              <span className="another-badge">
                NEED SPECIFIC GUIDANCE?
              </span>

              <h2 className="aq-heading another-title">
                Didn’t Find Your Answer? Ask Another Question
              </h2>

              <p className="aq-text another-description">
                Can’t find what you are looking for in our knowledge base?
                Send your question directly to our enterprise solutions
                architects and receive a tailored, detailed response within 1
                business day.
              </p>

              <div className="direct-links">

                <span className="direct-label">
                  Or connect directly:
                </span>

                <button
                  type="button"
                  className="direct-link"
                >
                  ✉ Email Advisory Desk
                </button>

                <span className="direct-dot"></span>

                <button
                  type="button"
                  className="direct-link"
                >
                  ☎ +91 581 3500381
                </button>

              </div>

            </div>

            <button
              type="button"
              className="question-button"
              onClick={() => navigate("/ask-question")}
            >
              ASK YOUR QUESTION
              <ArrowRight size={15} />
            </button>

          </div>

        </div>
      </section>

      {/* =========================================================
          IMMEDIATE REACH
      ========================================================= */}

      <section className="reach-section">
        <div className="aq-container">

          <div className="reach-card">

            <div className="reach-top">

              <div>

                <p className="aq-eyebrow">
                  IMMEDIATE REACH
                </p>

                <h2 className="aq-heading reach-title">
                  Prefer to Speak Directly?
                </h2>

                <p className="aq-text reach-description">
                  Reach out via our direct enterprise channels across regions.
                </p>

              </div>

              <div className="helpdesk-status">
                <span className="status-dot"></span>

                Helpdesks Active Mon–Fri (9:30 AM – 6:30 PM IST)
              </div>

            </div>

            <div className="reach-divider"></div>

            <div className="reach-items">

              {/* EMAIL */}

              <div className="reach-item">

                <div className="reach-icon">
                  <Mail />
                </div>

                <div>

                  <p className="reach-label">
                    ADVISORY DESK
                  </p>

                  <p className="reach-value">
                    contact@techtorch.solutions
                  </p>

                  <p className="reach-subtext">
                    Formal RFPs & Technical Inquiries
                  </p>

                </div>

              </div>

              {/* PHONE */}

              <div className="reach-item">

                <div className="reach-icon">
                  <Phone />
                </div>

                <div>

                  <p className="reach-label">
                    DIRECT LINE
                  </p>

                  <p className="reach-value">
                    +91 581 3500381
                    <br />
                    +91 7251090147
                  </p>

                </div>

              </div>

              {/* LOCATION */}

              <div className="reach-item">

                <div className="reach-icon">
                  <MapPin />
                </div>

                <div>

                  <p className="reach-label">
                    GLOBAL HUBS
                  </p>

                  <p className="reach-value">
                    Noida · Bareilly · Florida, USA
                  </p>

                  <p className="reach-subtext">
                    On-site & Distributed delivery teams
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="final-cta">

        <div className="aq-container final-cta-inner">

          <div>

            <p className="aq-eyebrow">
              ENTERPRISE SCOPING & CONSULTATION
            </p>

            <h2 className="aq-heading final-title">
              Ready to Discuss Your Project in Depth?
            </h2>

            <p className="aq-text final-description">
              If your question requires architectural scoping, RFP review, or
              custom enterprise solution design, let’s connect for an executive
              consultation.
            </p>

          </div>

          <div className="final-actions">

            {/* TALK TO OUR EXPERTS */}

            <button
              type="button"
              className="white-button"
              onClick={() => navigate("/start-conversation")}
            >
              TALK TO OUR EXPERTS
              <ArrowRight size={18} />
            </button>

            {/* ASK ANOTHER QUESTION */}

            <button
              type="button"
              className="outline-button"
              onClick={() =>
                document
                  .querySelector(".form-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              ASK ANOTHER QUESTION
              <ChevronDown size={17} />
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}