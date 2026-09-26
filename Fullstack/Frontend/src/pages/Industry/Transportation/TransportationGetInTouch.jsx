import React, { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleUserRound,
  Code2,
  Cloud,
  CreditCard,
  Globe2,
  Info,
  LockKeyhole,
  Mail,
  Network,
  Package,
  Phone,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Workflow,
  X,
} from "lucide-react";

const BEETROOT = "#730042";

const TECHNOLOGY_AREAS = [
  {
    title: "ERP Solutions",
    description: "Business processes, finance, people and supply chain.",
    icon: Workflow,
  },
  {
    title: "Operations Management",
    description: "Operational processes and workflow support.",
    icon: Settings2,
  },
  {
    title: "Supply Chain Management",
    description: "Procurement, inventory, suppliers and logistics.",
    icon: Truck,
  },
  {
    title: "Financial Management",
    description: "Financial operations, records and reporting.",
    icon: CreditCard,
  },
  {
    title: "CRM Solutions",
    description: "Customer information and relationship management.",
    icon: CircleUserRound,
  },
  {
    title: "Project Management",
    description: "Planning, collaboration and workflow management.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Web Portals",
    description: "Digital portals for customers, employees and business users.",
    icon: Globe2,
  },
  {
    title: "Software Solutions",
    description: "Custom software, applications and system integration.",
    icon: Code2,
  },
];

const ACHIEVEMENT_OPTIONS = [
  {
    title: "New Technology Solution",
    description: "Develop a new digital or business solution.",
  },
  {
    title: "Existing System Improvement",
    description: "Improve or modernize an existing system.",
  },
  {
    title: "Software Development",
    description: "Develop a custom application or software solution.",
  },
  {
    title: "System Integration",
    description: "Connect existing applications or business systems.",
  },
  {
    title: "Cloud Requirement",
    description: "Explore cloud infrastructure for your environment.",
  },
  {
    title: "Digital Transformation",
    description: "Improve business processes through technology.",
  },
  {
    title: "Technology Support",
    description: "Ongoing software or technology support.",
  },
  {
    title: "Exploring Options",
    description: "Discuss your requirements with our team.",
  },
];

const PROJECT_STAGES = [
  "Initial Discussion",
  "Requirement Planning",
  "Existing System Improvement",
  "Software Development",
  "System Implementation",
  "Technology Support",
  "Exploring Options",
];

export default function TransportationGetInTouch() {
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [selectedAchievement, setSelectedAchievement] = useState("");
  const [selectedStage, setSelectedStage] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const [formData, setFormData] = useState({
    requirements: "",
    fullName: "",
    email: "",
    company: "",
    phone: "",
    consent: false,
  });

  const [showAlert, setShowAlert] = useState(false);

  const toggleTechnology = (title) => {
    setSelectedTechnology((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="transportation-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        :root {
          --transport-beetroot: #730042;
          --transport-dark: #25282d;
          --transport-text: #62666d;
          --transport-muted: #858990;
          --transport-border: #e1e3e6;
          --transport-light: #f2f3f4;
          --transport-page: #f8f9fa;
        }

        .transportation-page {
          width: 100%;
          min-height: 100vh;
          background: var(--transport-page);
          color: var(--transport-dark);
          font-family: Arial, Helvetica, sans-serif;
          padding: 32px 26px 70px;
        }

        .transportation-container {
          width: 100%;
          max-width: 1380px;
          margin: 0 auto;
        }

        /* =====================================================
           SUCCESS ALERT
        ===================================================== */

        .transport-alert {
          position: fixed;
          top: 22px;
          left: 50%;
          transform: translateX(-50%);

          z-index: 99999;

          width: max-content;
          max-width: calc(100% - 30px);

          min-height: 44px;

          padding: 0 17px;

          display: flex;
          align-items: center;
          gap: 10px;

          border-radius: 7px;

          background: var(--transport-beetroot);
          color: #ffffff;

          font-size: 12px;
          font-weight: 600;

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.18);

          animation: transportAlertIn 0.25s ease;
        }

        .transport-alert-close {
          margin-left: 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: none;
          background: transparent;

          color: #ffffff;

          cursor: pointer;
        }

        @keyframes transportAlertIn {
          from {
            opacity: 0;
            transform: translate(-50%, -12px);
          }

          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        /* =====================================================
           HERO
        ===================================================== */

        .transport-hero {
          display: grid;

          grid-template-columns:
            minmax(0, 1.1fr)
            minmax(420px, 0.9fr);

          gap: 48px;

          align-items: start;

          margin-bottom: 54px;
        }

        .transport-hero-content {
          min-width: 0;
          padding-top: 4px;
        }

        .transport-eyebrow {
          display: inline-flex;
          align-items: center;

          padding: 6px 10px;

          margin-bottom: 14px;

          border-radius: 4px;

          background: #f6dce8;
          color: var(--transport-beetroot);

          font-size: 9px;
          font-weight: 800;

          letter-spacing: 0.15px;
          text-transform: uppercase;
        }

        .transport-hero h1 {
          max-width: 760px;

          margin: 0;

          color: var(--transport-beetroot);

          font-family:
            "Plus Jakarta Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: clamp(34px, 4vw, 52px);

          line-height: 1.04;

          letter-spacing: -2px;

          font-weight: 700;
        }

        .transport-hero-description {
          max-width: 730px;

          margin: 25px 0 28px;

          color: #656971;

          font-family:
            "Inter",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 14px;

          line-height: 1.65;
        }

        /* =====================================================
           HERO PROCESS CARDS
        ===================================================== */

        .transport-process-row {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 10px;

          max-width: 760px;
        }

        .transport-process-card {
          min-height: 112px;

          padding: 14px 13px;

          background: #ffffff;

          border: 1px solid #edf0f2;

          border-radius: 7px;

          box-shadow:
            0 2px 7px rgba(20, 30, 40, 0.025);
        }

        .transport-process-card h3 {
          margin: 0 0 8px;

          color: var(--transport-beetroot);

          font-size: 10px;
          line-height: 1.2;

          font-weight: 800;

          text-transform: uppercase;
        }

        .transport-process-card p {
          margin: 0;

          color: #666b73;

          font-size: 10px;
          line-height: 1.42;
        }

        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .transport-hero-image-card {
          width: 100%;

          overflow: hidden;

          border-radius: 10px;

          background: #101b2e;

          box-shadow:
            0 7px 20px rgba(25, 35, 50, 0.12);
        }

        .transport-image-wrapper {
          position: relative;

          width: 100%;

          overflow: hidden;
        }

        .transport-image {
          display: block;

          width: 100%;

          aspect-ratio: 1.44 / 1;

          object-fit: cover;
        }

        .transport-image-top-label {
          position: absolute;

          top: 15px;
          left: 17px;

          min-height: 29px;

          padding: 0 12px;

          display: flex;
          align-items: center;

          gap: 7px;

          border-radius: 18px;

          background: rgba(255, 255, 255, 0.94);

          color: #34363b;

          font-size: 10px;

          font-weight: 700;

          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .transport-label-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--transport-beetroot);
        }

        .transport-image-bottom-card {
          position: absolute;

          right: 17px;
          bottom: 16px;

          left: 17px;

          padding: 14px 17px;

          border-radius: 8px;

          background: rgba(255, 255, 255, 0.96);

          box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .transport-image-bottom-title {
          display: flex;
          align-items: center;

          gap: 7px;

          margin-bottom: 6px;

          color: var(--transport-beetroot);

          font-size: 10px;

          line-height: 1.2;

          font-weight: 800;

          text-transform: uppercase;
        }

        .transport-image-bottom-card p {
          margin: 0;

          color: #34373d;

          font-size: 11px;

          line-height: 1.4;

          font-weight: 600;
        }

        /* =====================================================
           MAIN FORM CARD
        ===================================================== */

        .transport-form-card {
          width: 100%;

          padding: 31px 36px 34px;

          background: #ffffff;

          border: 1px solid #e3e5e8;

          border-radius: 10px;

          box-shadow:
            0 3px 15px rgba(25, 30, 40, 0.045);
        }

        .transport-form-eyebrow {
          margin-bottom: 8px;

          color: var(--transport-beetroot);

          font-size: 9px;

          font-weight: 800;

          text-transform: uppercase;
        }

        .transport-form-title {
          margin: 0;

          color: #25282d;

          font-family:
            "Plus Jakarta Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 25px;

          line-height: 1.2;

          font-weight: 700;
        }

        .transport-form-description {
          max-width: 850px;

          margin: 8px 0 30px;

          color: #6c7076;

          font-size: 12px;

          line-height: 1.55;
        }

        /* =====================================================
           SECTION TITLES
        ===================================================== */

        .transport-section {
          margin-top: 27px;
        }

        .transport-section:first-of-type {
          margin-top: 0;
        }

        .transport-section-heading {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 13px;
        }

        .transport-section-number {
          width: 21px;
          height: 21px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: var(--transport-beetroot);

          color: #ffffff;

          font-size: 9px;

          font-weight: 800;
        }

        .transport-section-heading h2 {
          margin: 0;

          color: #292c31;

          font-size: 16px;

          line-height: 1.25;

          font-weight: 700;
        }

        .transport-section-helper {
          margin-left: auto;

          color: #858890;

          font-size: 9px;

          text-align: right;
        }

        /* =====================================================
           TECHNOLOGY CARDS
        ===================================================== */

        .transport-technology-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 12px;
        }

        .transport-tech-card {
          position: relative;

          min-height: 106px;

          padding: 13px;

          border: 1px solid transparent;

          border-radius: 7px;

          background: #f2f3f4;

          text-align: left;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
        }

        .transport-tech-card:hover {
          border-color: #d5a9bd;
        }

        .transport-tech-card.active {
          border-color: var(--transport-beetroot);

          background: #fff7fa;
        }

        .transport-tech-icon {
          display: block;

          margin-bottom: 9px;

          color: var(--transport-beetroot);
        }

        .transport-tech-card h3 {
          margin: 0 0 5px;

          color: #2f3237;

          font-size: 11px;

          line-height: 1.2;

          font-weight: 700;
        }

        .transport-tech-card p {
          margin: 0;

          color: #777b82;

          font-size: 9px;

          line-height: 1.4;
        }

        .transport-card-indicator {
          position: absolute;

          top: 14px;
          right: 14px;

          width: 15px;
          height: 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #dfe2e5;

          color: transparent;
        }

        .transport-tech-card.active
          .transport-card-indicator {
          background: var(--transport-beetroot);

          color: #ffffff;
        }

        /* =====================================================
           ACHIEVEMENT OPTIONS
        ===================================================== */

        .transport-achievement-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 10px;
        }

        .transport-achievement-card {
          min-height: 63px;

          padding: 10px 11px;

          display: grid;

          grid-template-columns: 11px minmax(0, 1fr);

          gap: 8px;

          align-items: start;

          border: 1px solid transparent;

          border-radius: 6px;

          background: #f2f3f4;

          cursor: pointer;

          text-align: left;
        }

        .transport-achievement-card.active {
          border-color: var(--transport-beetroot);

          background: #fff7fa;
        }

        .transport-achievement-dot {
          width: 10px;
          height: 10px;

          margin-top: 2px;

          border-radius: 50%;

          background: #dfe2e5;
        }

        .transport-achievement-card.active
          .transport-achievement-dot {
          background: var(--transport-beetroot);

          box-shadow:
            inset 0 0 0 3px #ffffff;
        }

        .transport-achievement-card h3 {
          margin: 0 0 2px;

          color: #33363b;

          font-size: 10px;

          line-height: 1.2;

          font-weight: 700;
        }

        .transport-achievement-card p {
          margin: 0;

          color: #777b82;

          font-size: 8px;

          line-height: 1.25;
        }

        /* =====================================================
           PROJECT STAGE
        ===================================================== */

        .transport-stage-grid {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;
        }

        .transport-stage-option {
          min-height: 31px;

          padding: 0 13px;

          display: inline-flex;
          align-items: center;

          gap: 7px;

          border: 1px solid transparent;

          border-radius: 6px;

          background: #f2f3f4;

          color: #44474c;

          font-size: 9px;

          font-weight: 600;

          cursor: pointer;
        }

        .transport-stage-option.active {
          border-color: var(--transport-beetroot);

          background: #fff7fa;
        }

        .transport-stage-dot {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #dfe2e5;
        }

        .transport-stage-option.active
          .transport-stage-dot {
          background: var(--transport-beetroot);

          box-shadow:
            inset 0 0 0 3px #ffffff;
        }

        /* =====================================================
           REQUIREMENT TEXTAREA
        ===================================================== */

        .transport-textarea {
          width: 100%;

          min-height: 88px;

          padding: 15px;

          border: 1px solid #e3e5e8;

          border-radius: 7px;

          background: #f3f4f5;

          color: #33363c;

          font-family: inherit;

          font-size: 11px;

          line-height: 1.5;

          resize: vertical;

          outline: none;
        }

        .transport-textarea:focus {
          border-color: #c68ba7;

          background: #ffffff;

          box-shadow:
            0 0 0 2px rgba(115, 0, 66, 0.05);
        }

        .transport-textarea::placeholder {
          color: #a2a4a8;
        }

        /* =====================================================
           CONTACT INFORMATION
        ===================================================== */

        .transport-contact-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 15px;
        }

        .transport-field {
          min-width: 0;
        }

        .transport-field label {
          display: block;

          margin-bottom: 7px;

          color: #33363b;

          font-size: 9px;

          font-weight: 800;

          text-transform: uppercase;
        }

        .transport-required {
          color: var(--transport-beetroot);
        }

        .transport-input {
          width: 100%;

          height: 40px;

          padding: 0 12px;

          border: 1px solid #e2e4e7;

          border-radius: 6px;

          background: #f3f4f5;

          color: #34373c;

          font-family: inherit;

          font-size: 11px;

          outline: none;
        }

        .transport-input:focus {
          border-color: #c68ba7;

          background: #ffffff;

          box-shadow:
            0 0 0 2px rgba(115, 0, 66, 0.05);
        }

        .transport-input::placeholder {
          color: #a2a6ad;
        }

        /* =====================================================
           CONTACT METHOD
        ===================================================== */

        .transport-contact-method {
          margin-top: 16px;

          display: flex;
          align-items: center;

          gap: 13px;

          color: #41454a;

          font-size: 10px;

          font-weight: 600;
        }

        .transport-contact-method-title {
          margin-right: 4px;

          color: #34373c;

          font-size: 10px;

          font-weight: 700;
        }

        .transport-radio {
          display: flex;
          align-items: center;

          gap: 6px;

          cursor: pointer;
        }

        .transport-radio input {
          width: 13px;
          height: 13px;

          margin: 0;

          accent-color: var(--transport-beetroot);
        }

        /* =====================================================
           CONSENT
        ===================================================== */

        .transport-consent {
          margin-top: 17px;

          display: flex;
          align-items: flex-start;

          gap: 9px;

          color: #41454a;

          font-size: 10px;

          line-height: 1.4;

          cursor: pointer;
        }

        .transport-consent input {
          width: 13px;
          height: 13px;

          margin: 1px 0 0;

          flex-shrink: 0;

          accent-color: var(--transport-beetroot);
        }

        /* =====================================================
           SUBMIT AREA
        ===================================================== */

        .transport-submit-row {
          margin-top: 24px;

          display: grid;

          grid-template-columns:
            auto minmax(0, 1fr);

          gap: 25px;

          align-items: center;
        }

        .transport-submit {
          min-width: 165px;

          height: 40px;

          padding: 0 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          border: none;

          border-radius: 7px;

          background: var(--transport-beetroot);

          color: #ffffff;

          font-size: 10px;

          font-weight: 700;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .transport-submit:hover {
          background: #5c0035;
        }

        .transport-submit:active {
          transform: translateY(1px);
        }

        .transport-submit-info {
          display: flex;
          align-items: flex-start;

          gap: 8px;

          color: #747980;

          font-size: 9px;

          line-height: 1.4;
        }

        .transport-submit-info svg {
          flex-shrink: 0;

          margin-top: 1px;

          color: var(--transport-beetroot);
        }

        /* =====================================================
           CONSULTATION PROCESS
        ===================================================== */

        .transport-consultation {
          margin-top: 48px;
        }

        .transport-consultation-eyebrow {
          margin-bottom: 9px;

          color: var(--transport-beetroot);

          font-size: 9px;

          font-weight: 800;

          text-transform: uppercase;
        }

        .transport-consultation h2 {
          margin: 0;

          color: #272a2f;

          font-family:
            "Plus Jakarta Sans",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 26px;

          line-height: 1.2;

          font-weight: 700;
        }

        .transport-consultation-description {
          margin: 8px 0 23px;

          color: #74787f;

          font-size: 12px;

          line-height: 1.5;
        }

        .transport-consultation-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;
        }

        .transport-consultation-card {
          min-height: 194px;

          padding: 19px;

          border: 1px solid #e7e8ea;

          border-radius: 8px;

          background: #ffffff;

          box-shadow:
            0 2px 10px rgba(25, 30, 40, 0.025);
        }

        .transport-consultation-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 10px;

          margin-bottom: 19px;
        }

        .transport-stage-label {
          color: var(--transport-beetroot);

          font-size: 9px;

          font-weight: 800;
        }

        .transport-tag {
          padding: 5px 8px;

          border-radius: 4px;

          background: #eceeef;

          color: #777a80;

          font-size: 8px;

          font-weight: 800;

          text-transform: uppercase;
        }

        .transport-consultation-card h3 {
          margin: 0 0 8px;

          color: #2c3035;

          font-size: 17px;

          line-height: 1.25;

          font-weight: 700;
        }

        .transport-consultation-card p {
          margin: 0;

          color: #70747a;

          font-size: 11px;

          line-height: 1.45;
        }

        .transport-consultation-footer {
          margin-top: 22px;

          display: flex;
          align-items: center;

          gap: 6px;

          color: var(--transport-beetroot);

          font-size: 8px;

          font-weight: 800;

          text-transform: uppercase;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .transportation-page {
            padding-left: 24px;
            padding-right: 24px;
          }

          .transport-hero {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(330px, 0.82fr);

            gap: 28px;
          }

          .transport-hero h1 {
            font-size: 42px;
          }

          .transport-process-row {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            max-width: 650px;
          }

          .transport-technology-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .transport-achievement-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        /* =====================================================
           IPAD / SURFACE / TABLET
        ===================================================== */

        @media (min-width: 701px) and (max-width: 900px) {

          .transportation-page {
            padding: 28px 24px 55px;
          }

          .transport-hero {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(285px, 0.85fr);

            gap: 22px;

            margin-bottom: 38px;
          }

          .transport-hero h1 {
            font-size: 34px;

            letter-spacing: -1.2px;
          }

          .transport-hero-description {
            margin-top: 17px;

            font-size: 12px;
          }

          .transport-process-row {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 8px;
          }

          .transport-process-card {
            min-height: 94px;

            padding: 11px;
          }

          .transport-process-card h3 {
            font-size: 8px;
          }

          .transport-process-card p {
            font-size: 8px;
          }

          .transport-image-top-label {
            top: 10px;
            left: 10px;

            min-height: 24px;

            padding: 0 9px;

            font-size: 8px;
          }

          .transport-image-bottom-card {
            right: 10px;
            bottom: 10px;
            left: 10px;

            padding: 10px 11px;
          }

          .transport-image-bottom-title {
            font-size: 8px;
          }

          .transport-image-bottom-card p {
            font-size: 8px;
          }

          .transport-form-card {
            padding: 25px 24px 28px;
          }

          .transport-form-title {
            font-size: 22px;
          }

          .transport-section-heading h2 {
            font-size: 14px;
          }

          .transport-technology-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 9px;
          }

          .transport-achievement-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .transport-submit-row {
            grid-template-columns: 1fr;

            gap: 12px;
          }

          .transport-submit {
            width: 100%;
          }

          .transport-submit-info {
            justify-content: center;

            text-align: center;
          }

          .transport-consultation {
            margin-top: 38px;
          }

          .transport-consultation-grid {
            gap: 12px;
          }

          .transport-consultation-card {
            min-height: 175px;

            padding: 15px;
          }

          .transport-consultation-card h3 {
            font-size: 14px;
          }

          .transport-consultation-card p {
            font-size: 9px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .transportation-page {
            padding: 22px 14px 45px;
          }

          .transport-hero {
            display: flex;

            flex-direction: column;

            gap: 24px;

            margin-bottom: 32px;
          }

          .transport-hero-content {
            width: 100%;
          }

          .transport-eyebrow {
            font-size: 8px;

            padding: 5px 8px;
          }

          .transport-hero h1 {
            font-size: 31px;

            line-height: 1.08;

            letter-spacing: -1px;
          }

          .transport-hero-description {
            margin: 16px 0 20px;

            font-size: 12px;

            line-height: 1.55;
          }

          .transport-process-row {
            grid-template-columns: 1fr 1fr;

            gap: 8px;

            max-width: none;
          }

          .transport-process-card {
            min-height: 98px;

            padding: 11px;
          }

          .transport-process-card h3 {
            font-size: 8px;
          }

          .transport-process-card p {
            font-size: 8px;
          }

          .transport-hero-image-card {
            width: 100%;
          }

          .transport-image {
            aspect-ratio: 1.38 / 1;
          }

          .transport-image-top-label {
            top: 9px;
            left: 9px;

            min-height: 23px;

            padding: 0 8px;

            font-size: 7px;
          }

          .transport-label-dot {
            width: 5px;
            height: 5px;
          }

          .transport-image-bottom-card {
            right: 9px;
            bottom: 9px;
            left: 9px;

            padding: 9px 10px;
          }

          .transport-image-bottom-title {
            margin-bottom: 4px;

            font-size: 7px;
          }

          .transport-image-bottom-card p {
            font-size: 7px;

            line-height: 1.35;
          }

          .transport-form-card {
            padding: 22px 16px 25px;

            border-radius: 8px;
          }

          .transport-form-title {
            font-size: 21px;

            line-height: 1.25;
          }

          .transport-form-description {
            margin-bottom: 23px;

            font-size: 10px;
          }

          .transport-section {
            margin-top: 24px;
          }

          .transport-section-heading {
            align-items: flex-start;
          }

          .transport-section-heading h2 {
            font-size: 14px;
          }

          .transport-section-helper {
            display: none;
          }

          .transport-technology-grid {
            grid-template-columns: 1fr 1fr;

            gap: 8px;
          }

          .transport-tech-card {
            min-height: 105px;

            padding: 10px;
          }

          .transport-tech-icon {
            margin-bottom: 7px;
          }

          .transport-tech-card h3 {
            font-size: 9px;
          }

          .transport-tech-card p {
            font-size: 7.5px;
          }

          .transport-card-indicator {
            top: 10px;
            right: 10px;

            width: 13px;
            height: 13px;
          }

          .transport-achievement-grid {
            grid-template-columns: 1fr 1fr;

            gap: 8px;
          }

          .transport-achievement-card {
            min-height: 72px;

            padding: 9px;
          }

          .transport-achievement-card h3 {
            font-size: 8px;
          }

          .transport-achievement-card p {
            font-size: 7px;
          }

          .transport-stage-grid {
            display: grid;

            grid-template-columns: 1fr 1fr;

            gap: 7px;
          }

          .transport-stage-option {
            min-height: 32px;

            padding: 0 9px;

            font-size: 8px;
          }

          .transport-contact-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }

          .transport-contact-method {
            flex-wrap: wrap;

            gap: 11px;
          }

          .transport-contact-method-title {
            width: 100%;
          }

          .transport-submit-row {
            grid-template-columns: 1fr;

            gap: 13px;
          }

          .transport-submit {
            width: 100%;
          }

          .transport-submit-info {
            text-align: center;

            justify-content: center;

            font-size: 8px;
          }

          .transport-consultation {
            margin-top: 34px;
          }

          .transport-consultation h2 {
            font-size: 23px;
          }

          .transport-consultation-description {
            font-size: 10px;
          }

          .transport-consultation-grid {
            grid-template-columns: 1fr;

            gap: 11px;
          }

          .transport-consultation-card {
            min-height: auto;

            padding: 17px;
          }

          .transport-consultation-card h3 {
            font-size: 16px;
          }

          .transport-consultation-card p {
            font-size: 10px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 420px) {

          .transportation-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .transport-hero h1 {
            font-size: 27px;
          }

          .transport-process-row {
            grid-template-columns: 1fr;
          }

          .transport-process-card {
            min-height: auto;
          }

          .transport-technology-grid,
          .transport-achievement-grid {
            grid-template-columns: 1fr;
          }

          .transport-tech-card {
            min-height: 92px;
          }

          .transport-stage-grid {
            grid-template-columns: 1fr;
          }

          .transport-form-card {
            padding: 19px 13px 22px;
          }

          .transport-form-title {
            font-size: 19px;
          }

          .transport-section-heading h2 {
            font-size: 13px;
          }

          .transport-image-bottom-card {
            right: 7px;
            bottom: 7px;
            left: 7px;

            padding: 7px 8px;
          }

          .transport-image-bottom-title {
            font-size: 6px;
          }

          .transport-image-bottom-card p {
            font-size: 6px;
          }

          .transport-image-top-label {
            top: 7px;
            left: 7px;

            font-size: 6px;
          }

          .transport-alert {
            width: calc(100% - 24px);

            font-size: 10px;
          }
        }
      `}</style>

      {/* =====================================================
          SUCCESS ALERT
      ===================================================== */}

      {showAlert && (
        <div className="transport-alert">
          <ShieldCheck size={16} />

          <span>
            Inquiry submitted successfully!
          </span>

          <button
            type="button"
            className="transport-alert-close"
            onClick={() => setShowAlert(false)}
          >
            <X size={14} />
          </button>
        </div>
      )}

      <main className="transportation-container">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="transport-hero">

          <div className="transport-hero-content">

            <div className="transport-eyebrow">
              GET IN TOUCH · TRANSPORTATION PRACTICE
            </div>

            <h1>
              Discuss Your Transportation
              <br />
              Technology Requirements
            </h1>

            <p className="transport-hero-description">
              Connect with the TechTorch team to discuss your transportation
              business requirements across ERP, operations management,
              supply chain, software, cloud infrastructure and digital
              solutions.
            </p>

            <div className="transport-process-row">

              <div className="transport-process-card">
                <h3>
                  01 — BUSINESS-
                  <br />
                  FOCUSED
                </h3>

                <p>
                  Technology discussions based on your business
                  requirements.
                </p>
              </div>

              <div className="transport-process-card">
                <h3>
                  02 — CONNECTED
                  <br />
                  SOLUTIONS
                </h3>

                <p>
                  Explore solutions across business applications and
                  technology services.
                </p>
              </div>

              <div className="transport-process-card">
                <h3>
                  03 — FLEXIBLE
                  <br />
                  REQUIREMENTS
                </h3>

                <p>
                  Discuss new systems, existing technology or
                  improvement needs.
                </p>
              </div>

              <div className="transport-process-card">
                <h3>
                  04 — CLEAR NEXT
                  <br />
                  STEPS
                </h3>

                <p>
                  Understand the relevant capabilities and possible way
                  forward.
                </p>
              </div>

            </div>

          </div>

          {/* =====================================================
              HERO IMAGE
          ===================================================== */}

          <div className="transport-hero-image-card">

            <div className="transport-image-wrapper">

              <img
                className="transport-image"
                src="/TransportationGetInTouch.png"
                alt="Transportation technology consultation"
              />

              <div className="transport-image-top-label">

                <span className="transport-label-dot" />

                TRANSPORTATION TECHNOLOGY

              </div>

              <div className="transport-image-bottom-card">

                <div className="transport-image-bottom-title">

                  <BriefcaseBusiness size={13} />

                  BUSINESS-FOCUSED TECHNOLOGY CONSULTATION

                </div>

                <p>
                  Discuss your business processes, technology requirements
                  and digital initiatives with the TechTorch team.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FORM
        ===================================================== */}

        <section className="transport-form-card">

          <div className="transport-form-eyebrow">
            TECHNOLOGY CONSULTATION
          </div>

          <h2 className="transport-form-title">
            Tell Us About Your Transportation Requirements
          </h2>

          <p className="transport-form-description">
            Share a few details about your business or technology
            requirement. Our team can review your enquiry and connect with
            you to discuss the appropriate next steps.
          </p>

          <form onSubmit={handleSubmit}>

            {/* =================================================
                SECTION 1
            ================================================= */}

            <div className="transport-section">

              <div className="transport-section-heading">

                <span className="transport-section-number">
                  1
                </span>

                <h2>
                  1. What Can We Help You With?
                </h2>

                <span className="transport-section-helper">
                  Select the technology or business area you would like to
                  discuss. (Multi-select allowed)
                </span>

              </div>

              <div className="transport-technology-grid">

                {TECHNOLOGY_AREAS.map((item) => {

                  const Icon = item.icon;

                  const active =
                    selectedTechnology.includes(item.title);

                  return (
                    <button
                      type="button"
                      key={item.title}
                      className={`transport-tech-card ${
                        active ? "active" : ""
                      }`}
                      onClick={() =>
                        toggleTechnology(item.title)
                      }
                    >

                      <span className="transport-tech-icon">
                        <Icon size={17} />
                      </span>

                      <span className="transport-card-indicator">
                        {active && (
                          <Check size={9} />
                        )}
                      </span>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                SECTION 2
            ================================================= */}

            <div className="transport-section">

              <div className="transport-section-heading">

                <span className="transport-section-number">
                  2
                </span>

                <h2>
                  2. What Are You Looking to Achieve?
                </h2>

              </div>

              <div className="transport-achievement-grid">

                {ACHIEVEMENT_OPTIONS.map((item) => {

                  const active =
                    selectedAchievement === item.title;

                  return (
                    <button
                      type="button"
                      key={item.title}
                      className={`transport-achievement-card ${
                        active ? "active" : ""
                      }`}
                      onClick={() =>
                        setSelectedAchievement(
                          active ? "" : item.title
                        )
                      }
                    >

                      <span className="transport-achievement-dot" />

                      <span>

                        <h3>
                          {item.title}
                        </h3>

                        <p>
                          {item.description}
                        </p>

                      </span>

                    </button>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                SECTION 3
            ================================================= */}

            <div className="transport-section">

              <div className="transport-section-heading">

                <span className="transport-section-number">
                  3
                </span>

                <h2>
                  3. Current Project Stage
                </h2>

              </div>

              <div className="transport-stage-grid">

                {PROJECT_STAGES.map((stage) => {

                  const active =
                    selectedStage === stage;

                  return (
                    <button
                      type="button"
                      key={stage}
                      className={`transport-stage-option ${
                        active ? "active" : ""
                      }`}
                      onClick={() =>
                        setSelectedStage(
                          active ? "" : stage
                        )
                      }
                    >

                      <span className="transport-stage-dot" />

                      {stage}

                    </button>
                  );
                })}

              </div>

            </div>

            {/* =================================================
                SECTION 4
            ================================================= */}

            <div className="transport-section">

              <div className="transport-section-heading">

                <span className="transport-section-number">
                  4
                </span>

                <h2>
                  4. Tell Us About Your Requirement
                </h2>

              </div>

              <textarea
                className="transport-textarea"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Briefly describe your business requirement, current technology environment, project objectives or the challenge you would like to discuss."
              />

            </div>

            {/* =================================================
                SECTION 5
            ================================================= */}

            <div className="transport-section">

              <div className="transport-section-heading">

                <span className="transport-section-number">
                  5
                </span>

                <h2>
                  5. Your Contact Information
                </h2>

              </div>

              <div className="transport-contact-grid">

                <div className="transport-field">

                  <label>
                    Full Name{" "}
                    <span className="transport-required">
                      *
                    </span>
                  </label>

                  <input
                    className="transport-input"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />

                </div>

                <div className="transport-field">

                  <label>
                    Business Email{" "}
                    <span className="transport-required">
                      *
                    </span>
                  </label>

                  <input
                    className="transport-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    required
                  />

                </div>

                <div className="transport-field">

                  <label>
                    Company / Organization{" "}
                    <span className="transport-required">
                      *
                    </span>
                  </label>

                  <input
                    className="transport-input"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company or organization"
                    required
                  />

                </div>

                <div className="transport-field">

                  <label>
                    Phone Number
                  </label>

                  <input
                    className="transport-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />

                </div>

              </div>

              {/* CONTACT METHOD */}

              <div className="transport-contact-method">

                <span className="transport-contact-method-title">
                  Preferred Contact Method:
                </span>

                <label className="transport-radio">

                  <input
                    type="radio"
                    name="contactMethod"
                    value="Email"
                    checked={
                      contactMethod === "Email"
                    }
                    onChange={(e) =>
                      setContactMethod(
                        e.target.value
                      )
                    }
                  />

                  <Mail size={12} />

                  Email

                </label>

                <label className="transport-radio">

                  <input
                    type="radio"
                    name="contactMethod"
                    value="Phone"
                    checked={
                      contactMethod === "Phone"
                    }
                    onChange={(e) =>
                      setContactMethod(
                        e.target.value
                      )
                    }
                  />

                  <Phone size={12} />

                  Phone

                </label>

              </div>

              {/* CONSENT */}

              <label className="transport-consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                />

                <span>
                  I agree to be contacted by TechTorch regarding my enquiry
                  and technology requirements.
                </span>

              </label>

              {/* SUBMIT */}

              <div className="transport-submit-row">

                <button
                  type="submit"
                  className="transport-submit"
                >
                  SUBMIT ENQUIRY

                  <ArrowRight size={14} />
                </button>

                <div className="transport-submit-info">

                  <Info size={13} />

                  <span>
                    Your information will be used to respond to your enquiry
                    and discuss your requirements. Our team will review your
                    enquiry and connect with you regarding the next steps.
                  </span>

                </div>

              </div>

            </div>

          </form>

        </section>

        {/* =====================================================
            CONSULTATION PROCESS
        ===================================================== */}

        <section className="transport-consultation">

          <div className="transport-consultation-eyebrow">
            ENGAGEMENT OVERVIEW
          </div>

          <h2>
            Consultation Process
          </h2>

          <p className="transport-consultation-description">
            A simple process to understand your requirements and discuss
            the appropriate technology approach.
          </p>

          <div className="transport-consultation-grid">

            {/* CARD 1 */}

            <div className="transport-consultation-card">

              <div className="transport-consultation-top">

                <span className="transport-stage-label">
                  STAGE 01
                </span>

                <span className="transport-tag">
                  BUSINESS REQUIREMENTS
                </span>

              </div>

              <h3>
                01 — Understand Your Requirement
              </h3>

              <p>
                We review your business objectives, existing technology
                environment and requirements.
              </p>

              <div className="transport-consultation-footer">

                <Network size={11} />

                REQUIREMENT REVIEW

              </div>

            </div>

            {/* CARD 2 */}

            <div className="transport-consultation-card">

              <div className="transport-consultation-top">

                <span className="transport-stage-label">
                  STAGE 02
                </span>

                <span className="transport-tag">
                  SOLUTION DISCUSSION
                </span>

              </div>

              <h3>
                02 — Discuss Relevant Solutions
              </h3>

              <p>
                Our team discusses relevant TechTorch solutions and
                technology capabilities based on your requirements.
              </p>

              <div className="transport-consultation-footer">

                <Sparkles size={11} />

                SOLUTION EXPLORATION

              </div>

            </div>

            {/* CARD 3 */}

            <div className="transport-consultation-card">

              <div className="transport-consultation-top">

                <span className="transport-stage-label">
                  STAGE 03
                </span>

                <span className="transport-tag">
                  NEXT STEPS
                </span>

              </div>

              <h3>
                03 — Define Next Steps
              </h3>

              <p>
                Based on the discussion, we identify the appropriate
                approach and next steps for your requirement.
              </p>

              <div className="transport-consultation-footer">

                <ArrowRight size={11} />

                PLANNED PROGRESSION

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}