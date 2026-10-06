import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const BRAND = "#8B0046";

const requirements = [
  "New Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "Existing Product Development",
  "Software Modernization",
  "Maintenance & Support",
  "Additional Development Resources",
  "Technical Expertise / Consultation",
  "Not Sure Yet",
];

const teamTypes = [
  {
    title: "Dedicated Team",
    description:
      "Focused professionals aligned with your development requirements.",
  },
  {
    title: "Extended Team",
    description:
      "Additional professionals working alongside your existing team.",
  },
  {
    title: "Project-Based Team",
    description:
      "Defined scope, milestones & deliverables.",
  },
  {
    title: "Specialized Resources",
    description:
      "Niche domain architects and specialists.",
  },
  {
    title: "I Need Guidance",
    description:
      "Collaborate with our advisory team.",
  },
];

const expertise = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "Mobile Development",
  "Cloud Development",
  "API & System Integration",
  "Quality Assurance",
  "DevOps / Infrastructure",
  "Software Maintenance & Support",
  "Other",
];

const teamSizes = [
  "1–2",
  "3–5",
  "6–10",
  "10+",
  "Not Sure",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "Within 1–3 months",
  "Exploring for future",
  "Not decided yet",
];

export default function DevelopmentConsultation() {
  const [requirement, setRequirement] = useState("");
  const [teamType, setTeamType] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [teamSize, setTeamSize] = useState("");
  const [timeline, setTimeline] = useState("");

  const [formData, setFormData] = useState({
    project: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleExpertise = (item) => {
    setSelectedExpertise((prev) =>
      prev.includes(item)
        ? prev.filter((value) => value !== item)
        : [...prev, item]
    );
  };

  const scrollToForm = () => {
    document
      .getElementById("development-consultation-form")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      requirement,
      teamType,
      expertise: selectedExpertise,
      project: formData.project,
      teamSize,
      timeline,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
    });
  };

  return (
    <>
      <style>{`
        /* =========================================================
           FONTS
        ========================================================= */

        .development-consultation-page {
          --brand: #8B0046;
          --brand-dark: #78003d;
          --heading: #15151A;
          --body: #6b6268;
          --border: #e3e7eb;
          --soft-bg: #f4f6f8;
          --soft-pink: #fff8fb;

          width: 100%;
          overflow: hidden;
          background: #ffffff;

          font-family: "Inter", sans-serif;
        }

        .development-consultation-page h1,
        .development-consultation-page h2,
        .development-consultation-page h3,
        .development-consultation-page h4 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* =========================================================
           UNIVERSAL HORIZONTAL SPACING
           
           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ========================================================= */

        .dc-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          box-sizing: border-box;
        }

        /* =========================================================
           HERO
        ========================================================= */

        .dc-hero-section {
          width: 100%;
          background: #f8fafc;
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .dc-hero-card {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 1.05fr 0.75fr;

          overflow: hidden;

          border: 1px solid #e3e7eb;
          border-radius: 16px;
          background: #ffffff;

          box-shadow: 0 2px 8px rgba(20, 30, 45, 0.04);
        }

        .dc-hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 55px 60px;
        }

        .dc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-bottom: 24px;

          padding: 7px 12px;

          border: 1px solid #ead5df;
          border-radius: 999px;

          background: #fff8fb;
        }

        .dc-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;
          background: var(--brand);
        }

        .dc-badge-text {
          color: var(--brand);

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .dc-hero-title {
          max-width: 620px;
          margin: 0;

          color: var(--heading);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(34px, 3.2vw, 48px);
          font-weight: 600;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }

        .dc-hero-description {
          max-width: 650px;

          margin: 20px 0 0;

          color: var(--body);

          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
        }

        .dc-hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;

          margin-top: 28px;
        }

        .dc-primary-button,
        .dc-secondary-button {
          min-height: 50px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 0 24px;

          border-radius: 9px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .dc-primary-button {
          border: 1px solid var(--brand);
          background: var(--brand);
          color: #ffffff;

          box-shadow: 0 8px 18px rgba(139, 0, 70, 0.18);
        }

        .dc-primary-button:hover {
          transform: translateY(-1px);
          background: var(--brand-dark);
          border-color: var(--brand-dark);

          box-shadow: 0 12px 24px rgba(139, 0, 70, 0.22);
        }

        .dc-secondary-button {
          border: 1px solid #e1e6eb;
          background: #ffffff;
          color: #30343b;

          box-shadow: 0 2px 6px rgba(20, 30, 45, 0.03);
        }

        .dc-secondary-button:hover {
          transform: translateY(-1px);
          border-color: #d3a8bc;
          background: #fff8fb;
        }

        .dc-benefits {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 28px;

          margin-top: 28px;
          padding-top: 20px;

          border-top: 1px solid #e7eaee;
        }

        .dc-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dc-benefit svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: var(--brand);
        }

        .dc-benefit span {
          color: #71686d;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
        }

        .dc-hero-image {
          position: relative;
          width: 100%;
          min-height: 430px;
          overflow: hidden;
        }

        .dc-hero-image img {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;
        }

        /* =========================================================
           FORM SECTION
        ========================================================= */

        .dc-form-section {
          width: 100%;
          padding-top: 70px;
          padding-bottom: 80px;
          background: #ffffff;
        }

        .dc-form-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .dc-form-header {
          margin-bottom: 38px;
        }

        .dc-form-title {
          margin: 0;

          color: #17191f;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(26px, 2.3vw, 34px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.035em;
        }

        .dc-form-description {
          max-width: 720px;

          margin: 10px 0 0;

          color: #6a6267;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================================
           FORM BLOCK
        ========================================================= */

        .dc-form-block {
          margin-bottom: 30px;
        }

        .dc-form-block-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          margin-bottom: 12px;
        }

        .dc-form-block-title {
          margin: 0;

          color: #252930;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
        }

        .dc-form-number {
          margin-right: 8px;
          color: var(--brand);
        }

        .dc-form-right-text {
          flex-shrink: 0;

          color: #8a8086;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* =========================================================
           REQUIREMENTS
        ========================================================= */

        .dc-requirements-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
        }

        .dc-selection-button {
          min-height: 46px;

          display: flex;
          align-items: center;
          gap: 9px;

          padding: 9px 12px;

          border: 1px solid #e4e8ed;
          border-radius: 8px;

          background: #f4f6f8;

          color: #363c45;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          text-align: left;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .dc-selection-button:hover {
          border-color: #d3a8bc;
          transform: translateY(-1px);
        }

        .dc-selection-button.selected {
          border-color: #9d6281;
          background: #fbf7f9;
          color: #30272d;
        }

        .dc-radio {
          width: 12px;
          height: 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border: 1px solid #aeb5bd;
          border-radius: 50%;
        }

        .dc-selection-button.selected .dc-radio {
          border-color: var(--brand);
        }

        .dc-radio-inner {
          width: 5px;
          height: 5px;

          border-radius: 50%;
          background: var(--brand);
        }

        /* =========================================================
           TEAM TYPE
        ========================================================= */

        .dc-team-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 8px;
        }

        .dc-team-card {
          position: relative;

          min-height: 100px;

          padding: 14px;

          border: 1px solid #e4e8ed;
          border-radius: 9px;

          background: #f4f6f8;

          text-align: left;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .dc-team-card:hover {
          border-color: #d3a8bc;
          transform: translateY(-1px);
        }

        .dc-team-card.selected {
          border-color: #9d6281;
          background: #fbf7f9;
        }

        .dc-team-radio {
          position: absolute;
          top: 12px;
          right: 12px;

          width: 12px;
          height: 12px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #aeb5bd;
          border-radius: 50%;
        }

        .dc-team-card.selected .dc-team-radio {
          border-color: var(--brand);
        }

        .dc-team-radio-inner {
          width: 5px;
          height: 5px;

          border-radius: 50%;
          background: var(--brand);
        }

        .dc-team-content {
          padding-right: 18px;
        }

        .dc-team-title {
          margin: 0;

          color: #333840;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
        }

        .dc-team-description {
          margin: 8px 0 0;

          color: #71686d;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.45;
        }

        /* =========================================================
           EXPERTISE
        ========================================================= */

        .dc-expertise-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .dc-expertise-button {
          padding: 9px 12px;

          border: 1px solid #e4e8ed;
          border-radius: 7px;

          background: #f4f6f8;
          color: #39404a;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            color 0.2s ease;
        }

        .dc-expertise-button:hover {
          border-color: #d3a8bc;
        }

        .dc-expertise-button.selected {
          border-color: var(--brand);
          background: var(--brand);
          color: #ffffff;
        }

        /* =========================================================
           TEXTAREA
        ========================================================= */

        .dc-textarea {
          width: 100%;

          min-height: 110px;

          display: block;

          resize: vertical;

          padding: 13px;

          border: 1px solid #e3e7eb;
          border-radius: 8px;

          background: #f5f6f8;
          color: #303641;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.5;

          outline: none;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .dc-textarea::placeholder {
          color: #aeb6c1;
        }

        .dc-textarea:focus {
          border-color: #c58ba7;
          background: #ffffff;
        }

        /* =========================================================
           TEAM SIZE
        ========================================================= */

        .dc-team-size-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 8px;
        }

        .dc-team-size-button {
          min-height: 64px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 10px;

          border: 1px solid #e4e8ed;
          border-radius: 9px;

          background: #f4f6f8;
          color: #343b45;

          font-family: "Inter", sans-serif;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .dc-team-size-button:hover {
          border-color: #d3a8bc;
          transform: translateY(-1px);
        }

        .dc-team-size-button.selected {
          border-color: #9d6281;
          background: #fbf7f9;
          color: #702346;
        }

        .dc-team-size-number {
          font-size: 12px;
          font-weight: 700;
        }

        .dc-team-size-label {
          margin-top: 4px;

          color: #766b71;

          font-size: 8px;
          font-weight: 500;
          letter-spacing: 0.04em;
        }

        /* =========================================================
           TIMELINE
        ========================================================= */

        .dc-timeline-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 8px;
        }

        .dc-timeline-button {
          min-height: 44px;

          padding: 9px 12px;

          border: 1px solid #e4e8ed;
          border-radius: 8px;

          background: #f4f6f8;
          color: #343b45;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .dc-timeline-button:hover {
          border-color: #d3a8bc;
          transform: translateY(-1px);
        }

        .dc-timeline-button.selected {
          border-color: #9d6281;
          background: #fbf7f9;
          color: #702346;
        }

        /* =========================================================
           CONTACT
        ========================================================= */

        .dc-contact {
          margin-top: 34px;
          padding-top: 28px;

          border-top: 1px solid #e5e8ec;
        }

        .dc-contact-title {
          margin: 0;

          color: #17191f;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .dc-contact-description {
          max-width: 700px;

          margin: 7px 0 0;

          color: #6a6267;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.6;
        }

        .dc-input-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px 20px;

          margin-top: 22px;
        }

        .dc-input-label {
          display: block;

          margin-bottom: 6px;

          color: #34383e;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
        }

        .dc-input {
          width: 100%;
          height: 43px;

          padding: 0 12px;

          border: 1px solid #e3e7eb;
          border-radius: 8px;

          background: #f5f6f8;
          color: #303641;

          font-family: "Inter", sans-serif;
          font-size: 11px;

          outline: none;

          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .dc-input::placeholder {
          color: #aeb6c1;
        }

        .dc-input:focus {
          border-color: #c58ba7;
          background: #ffffff;
        }

        .dc-submit-area {
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-top: 30px;
        }

        .dc-submit-button {
          width: 100%;
          max-width: 320px;
          min-height: 46px;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 11px 20px;

          border: 1px solid var(--brand);
          border-radius: 8px;

          background: var(--brand);
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;

          cursor: pointer;

          box-shadow: 0 8px 18px rgba(139, 0, 70, 0.18);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .dc-submit-button:hover {
          transform: translateY(-1px);

          background: var(--brand-dark);
          border-color: var(--brand-dark);

          box-shadow: 0 12px 24px rgba(139, 0, 70, 0.25);
        }

        .dc-submit-note {
          max-width: 320px;

          margin: 8px 0 0;

          color: #8a8086;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.5;
          text-align: center;
        }

        /* =========================================================
           TABLET
           <= 1200px
        ========================================================= */

        @media (max-width: 1200px) {
          .dc-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .dc-hero-section,
          .dc-form-section {
            padding-left: 40px;
            padding-right: 40px;
          }

          .dc-hero-content {
            padding: 45px 42px;
          }

          .dc-hero-title {
            font-size: 40px;
          }

          .dc-team-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .dc-team-size-grid,
          .dc-timeline-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* =========================================================
           TABLET / SMALL LAPTOP
           <= 900px
        ========================================================= */

        @media (max-width: 900px) {
          .dc-hero-section {
            padding-top: 32px;
            padding-bottom: 32px;
          }

          .dc-hero-card {
            grid-template-columns: 1fr;
          }

          .dc-hero-content {
            padding: 42px 40px;
          }

          .dc-hero-image {
            min-height: 360px;
          }

          .dc-form-section {
            padding-top: 55px;
            padding-bottom: 65px;
          }

          .dc-requirements-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dc-team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dc-team-size-grid,
          .dc-timeline-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        /* =========================================================
           MOBILE
           <= 700px
        ========================================================= */

        @media (max-width: 700px) {
          .dc-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .dc-hero-section,
          .dc-form-section {
            padding-left: 24px;
            padding-right: 24px;
          }

          .dc-hero-section {
            padding-top: 24px;
            padding-bottom: 24px;
          }

          .dc-hero-card {
            border-radius: 14px;
          }

          .dc-hero-content {
            padding: 34px 28px;
          }

          .dc-badge {
            margin-bottom: 20px;
          }

          .dc-hero-title {
            font-size: 34px;
            line-height: 1.08;
          }

          .dc-hero-description {
            margin-top: 17px;
            font-size: 13px;
          }

          .dc-hero-buttons {
            flex-direction: column;
            margin-top: 24px;
          }

          .dc-primary-button,
          .dc-secondary-button {
            width: 100%;
          }

          .dc-benefits {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            margin-top: 24px;
          }

          .dc-hero-image {
            min-height: 300px;
          }

          .dc-form-section {
            padding-top: 48px;
            padding-bottom: 55px;
          }

          .dc-form-header {
            margin-bottom: 32px;
          }

          .dc-form-description {
            font-size: 12px;
          }

          .dc-form-block-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .dc-requirements-grid,
          .dc-team-grid,
          .dc-team-size-grid,
          .dc-timeline-grid {
            grid-template-columns: 1fr;
          }

          .dc-team-card {
            min-height: 88px;
          }

          .dc-team-size-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dc-timeline-grid {
            grid-template-columns: 1fr;
          }

          .dc-input-grid {
            grid-template-columns: 1fr;
          }

          .dc-contact {
            margin-top: 28px;
            padding-top: 24px;
          }

          .dc-contact-title {
            font-size: 19px;
          }
        }

        /* =========================================================
           SMALL MOBILE
           <= 480px
        ========================================================= */

        @media (max-width: 480px) {
          .dc-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .dc-hero-section,
          .dc-form-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .dc-hero-section {
            padding-top: 16px;
            padding-bottom: 16px;
          }

          .dc-hero-content {
            padding: 28px 20px;
          }

          .dc-badge {
            padding: 6px 10px;
          }

          .dc-badge-text {
            font-size: 8px;
          }

          .dc-hero-title {
            font-size: 30px;
          }

          .dc-hero-description {
            font-size: 12px;
            line-height: 1.65;
          }

          .dc-primary-button,
          .dc-secondary-button {
            min-height: 48px;
            padding-left: 18px;
            padding-right: 18px;

            font-size: 11px;
          }

          .dc-hero-image {
            min-height: 250px;
          }

          .dc-form-section {
            padding-top: 40px;
            padding-bottom: 48px;
          }

          .dc-form-title {
            font-size: 25px;
          }

          .dc-form-description {
            font-size: 11px;
          }

          .dc-form-block-title {
            font-size: 12px;
          }

          .dc-selection-button {
            font-size: 10px;
          }

          .dc-expertise-button {
            width: 100%;
            text-align: left;
          }

          .dc-team-size-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dc-input {
            height: 42px;
          }

          .dc-submit-button {
            max-width: 100%;
          }
        }

        /* =========================================================
           VERY SMALL MOBILE
           <= 360px
        ========================================================= */

        @media (max-width: 360px) {
          .dc-container,
          .dc-hero-section,
          .dc-form-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .dc-hero-content {
            padding: 25px 17px;
          }

          .dc-hero-title {
            font-size: 27px;
          }

          .dc-hero-image {
            min-height: 220px;
          }

          .dc-team-size-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <main className="development-consultation-page">

        {/* =====================================================
            DEVELOPMENT TEAM HERO
        ===================================================== */}
        <section className="dc-hero-section">
          <div className="dc-container">
            <div className="dc-hero-card">

              {/* LEFT CONTENT */}
              <div className="dc-hero-content">

                <div className="dc-badge">
                  <span className="dc-badge-dot" />

                  <span className="dc-badge-text">
                    Development Team Solutions
                  </span>
                </div>

                <h1 className="dc-hero-title">
                  Build Your Development
                  <br />
                  Team
                </h1>

                <p className="dc-hero-description">
                  The Right Technical Expertise for the Work Ahead. Whether you
                  need additional developers, a dedicated engineering team, or
                  specialized technical expertise, TechTorch helps you structure
                  development capabilities around your project, technology
                  requirements, and business objectives.
                </p>

                <div className="dc-hero-buttons">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="dc-primary-button"
                  >
                    Build Your Team
                    <ArrowRight size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="dc-secondary-button"
                  >
                    Discuss Your Requirements
                  </button>
                </div>

                <div className="dc-benefits">
                  <div className="dc-benefit">
                    <Check />
                    <span>Confidential Project Discussions</span>
                  </div>

                  <div className="dc-benefit">
                    <Check />
                    <span>Flexible Development Models</span>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="dc-hero-image">
                <img
                  src="/DevelopmentTeam.png"
                  alt="Development Team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DEVELOPMENT CONSULTATION FORM
        ===================================================== */}
        <section
          id="development-consultation-form"
          className="dc-form-section"
        >
          <div className="dc-container">
            <div className="dc-form-container">

              {/* HEADER */}
              <div className="dc-form-header">
                <div className="dc-badge">
                  <span className="dc-badge-dot" />

                  <span className="dc-badge-text">
                    Development Consultation & Scoping
                  </span>
                </div>

                <h2 className="dc-form-title">
                  Let's Build the Right Team for Your Project
                </h2>

                <p className="dc-form-description">
                  Share a few details about your project and development
                  requirements. We'll use them to understand the skills, team
                  structure, and level of support that may be relevant to your
                  needs.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* =================================================
                    01 — REQUIREMENT
                ================================================= */}
                <FormSection
                  number="01"
                  title="What do you need help with?"
                  rightText="Select your requirement"
                >
                  <div className="dc-requirements-grid">
                    {requirements.map((item) => (
                      <SelectionButton
                        key={item}
                        selected={requirement === item}
                        onClick={() => setRequirement(item)}
                        text={item}
                      />
                    ))}
                  </div>
                </FormSection>

                {/* =================================================
                    02 — TEAM TYPE
                ================================================= */}
                <FormSection
                  number="02"
                  title="What type of team are you looking for?"
                  rightText="Choose the model that best describes your requirement"
                >
                  <div className="dc-team-grid">
                    {teamTypes.map((item) => (
                      <TeamCard
                        key={item.title}
                        {...item}
                        selected={teamType === item.title}
                        onClick={() => setTeamType(item.title)}
                      />
                    ))}
                  </div>
                </FormSection>

                {/* =================================================
                    03 — EXPERTISE
                ================================================= */}
                <FormSection
                  number="03"
                  title="What technical expertise do you need?"
                  rightText="Select one or more"
                >
                  <div className="dc-expertise-list">
                    {expertise.map((item) => {
                      const selected =
                        selectedExpertise.includes(item);

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleExpertise(item)}
                          className={`dc-expertise-button ${
                            selected ? "selected" : ""
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </FormSection>

                {/* =================================================
                    04 — PROJECT DETAILS
                ================================================= */}
                <FormSection
                  number="04"
                  title="Tell us about your project"
                  rightText="Project Details"
                >
                  <textarea
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Briefly describe your project, current technology environment, or the type of development support you are looking for..."
                    className="dc-textarea"
                  />
                </FormSection>

                {/* =================================================
                    05 — TEAM SIZE
                ================================================= */}
                <FormSection
                  number="05"
                  title="How large is the team you are considering?"
                  rightText="Estimated engineers"
                >
                  <div className="dc-team-size-grid">
                    {teamSizes.map((item) => {
                      const selected = teamSize === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTeamSize(item)}
                          className={`dc-team-size-button ${
                            selected ? "selected" : ""
                          }`}
                        >
                          <span className="dc-team-size-number">
                            {item}
                          </span>

                          <span className="dc-team-size-label">
                            {item === "Not Sure"
                              ? "Flexible sizing"
                              : "Professionals"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </FormSection>

                {/* =================================================
                    06 — TIMELINE
                ================================================= */}
                <FormSection
                  number="06"
                  title="When do you need the team?"
                  rightText="Target timeline"
                >
                  <div className="dc-timeline-grid">
                    {timelines.map((item) => {
                      const selected = timeline === item;

                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setTimeline(item)}
                          className={`dc-timeline-button ${
                            selected ? "selected" : ""
                          }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </FormSection>

                {/* =================================================
                    CONTACT SECTION
                ================================================= */}
                <div className="dc-contact">

                  <h2 className="dc-contact-title">
                    Let's Discuss Your Requirements
                  </h2>

                  <p className="dc-contact-description">
                    Provide your contact info so our technical leads can review
                    your scoping specifications and respond with recommended
                    team configurations.
                  </p>

                  <div className="dc-input-grid">

                    <InputField
                      label="Name *"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />

                    <InputField
                      label="Business Email *"
                      name="email"
                      type="email"
                      placeholder="Enter your business email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />

                    <InputField
                      label="Company Name"
                      name="company"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                    />

                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />

                  </div>

                  {/* SUBMIT */}
                  <div className="dc-submit-area">

                    <button
                      type="submit"
                      className="dc-submit-button"
                    >
                      Submit Development Requirements
                      <ArrowRight size={16} />
                    </button>

                    <p className="dc-submit-note">
                      Your information will be used to understand your
                      requirements and help our team respond appropriately.
                    </p>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


/* =============================================================
   FORM SECTION
============================================================= */

function FormSection({
  number,
  title,
  rightText,
  children,
}) {
  return (
    <div className="dc-form-block">

      <div className="dc-form-block-header">

        <h3 className="dc-form-block-title">
          <span className="dc-form-number">
            {number} —
          </span>

          {title}
        </h3>

        <span className="dc-form-right-text">
          {rightText}
        </span>
      </div>

      {children}
    </div>
  );
}


/* =============================================================
   REQUIREMENT BUTTON
============================================================= */

function SelectionButton({
  selected,
  onClick,
  text,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`dc-selection-button ${
        selected ? "selected" : ""
      }`}
    >
      <span className="dc-radio">
        {selected && <span className="dc-radio-inner" />}
      </span>

      <span>{text}</span>
    </button>
  );
}


/* =============================================================
   TEAM CARD
============================================================= */

function TeamCard({
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`dc-team-card ${
        selected ? "selected" : ""
      }`}
    >
      <span className="dc-team-radio">
        {selected && (
          <span className="dc-team-radio-inner" />
        )}
      </span>

      <div className="dc-team-content">

        <h4 className="dc-team-title">
          {title}
        </h4>

        <p className="dc-team-description">
          {description}
        </p>

      </div>
    </button>
  );
}


/* =============================================================
   INPUT
============================================================= */

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <label>
      <span className="dc-input-label">
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="dc-input"
      />
    </label>
  );
}