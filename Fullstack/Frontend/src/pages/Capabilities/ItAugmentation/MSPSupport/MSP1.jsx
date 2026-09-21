import React from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code2,
  Headphones,
  LifeBuoy,
  Network,
  ShieldCheck,
  Wrench,
  Activity,
  Server,
  Settings,
  Zap,
  LockKeyhole,
} from "lucide-react";

const MSPSupport = () => {
  const services = [
    {
      number: "01",
      category: "INFRASTRUCTURE CORE",
      title: "IT Infrastructure Support",
      icon: <Network />,
      description:
        "Maintain the systems and technology infrastructure your business relies on. Our support helps address infrastructure-related requirements and keeps essential operations resilient.",
      tag1: "Active Uptime",
      tag2: "Tier 1–3",
    },
    {
      number: "02",
      category: "APPLICATION LAYER",
      title: "Software Support & Maintenance",
      icon: <Code2 />,
      description:
        "Business applications require regular attention to remain reliable. We provide technical assistance, proactive troubleshooting, maintenance, and ongoing patch governance.",
      tag1: "App Health",
      tag2: "CI/CD Sync",
    },
    {
      number: "03",
      category: "HYBRID & MULTI-CLOUD",
      title: "Cloud Support",
      icon: <Cloud />,
      description:
        "As organizations adopt cloud technologies, effective management becomes critical. Our team provides dedicated support for cloud environments, tenant setups, and workload scale.",
      tag1: "Cloud Scaled",
      tag2: "AWS / Azure",
    },
    {
      number: "04",
      category: "PROACTIVE TELEMETRY",
      title: "System Monitoring & Maintenance",
      icon: <Activity />,
      description:
        "Regular telemetry and automated health checks identify anomalies before they disrupt productivity, backing continuous operational stability around the clock.",
      tag1: "24/7 Observability",
      tag2: "Automated",
    },
    {
      number: "05",
      category: "RAPID RESOLUTION",
      title: "Technical Troubleshooting",
      icon: <Wrench />,
      description:
        "When an IT issue impacts operations, fast triage matters. Our experienced engineers isolate the root cause and execute decisive remedies with minimal downtime.",
      tag1: "Fast Triage",
      tag2: "Root Cause",
    },
    {
      number: "06",
      category: "THREAT DEFENSE",
      title: "IT Security Support",
      icon: <ShieldCheck />,
      description:
        "Security is an essential consideration across modern applications and networks. Our support integrates security hygiene, identity controls, and access protection.",
      tag1: "Secure Access",
      tag2: "Protection",
    },
    {
      number: "07",
      category: "LIFECYCLE MANAGEMENT",
      title: "Updates & System Maintenance",
      icon: <Settings />,
      description:
        "Keep environments current with structured change management, validated system patches, OS revisions, and routine maintenance without user disruption.",
      tag1: "Managed Updates",
      tag2: "Validated",
    },
    {
      number: "08",
      category: "HELPDESK & ADVISORY",
      title: "Ongoing IT Assistance",
      icon: <Headphones />,
      description:
        "Direct access to certified engineers whenever hurdles occur. Seamless escalation channels and dedicated account engineers ensure uninterrupted operations.",
      tag1: "Expert Access",
      tag2: "Always Available",
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #f7f6f4;
          font-family: Arial, Helvetica, sans-serif;
          color: #242426;
        }

        .msp-page {
          width: 100%;
          overflow: hidden;
          background: #f7f6f4;
        }

        /* =====================================================
           COMMON
        ===================================================== */

        .msp-container {
          width: min(1180px, calc(100% - 70px));
          margin: 0 auto;
        }

        .msp-section-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 10px;
          border-radius: 20px;
          background: #f0e7ec;
          color: #72003e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.8px;
          line-height: 1;
          text-transform: uppercase;
        }

        .msp-section-label::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #72003e;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .msp-hero {
          width: 100%;
          background: #ffffff;
          padding: 72px 0 82px;
        }

        .msp-hero-inner {
          width: min(1180px, calc(100% - 70px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(390px, 0.78fr);
          gap: 55px;
          align-items: center;
        }

        .msp-hero-content {
          min-width: 0;
        }

        .msp-hero h1 {
          margin: 22px 0 5px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          line-height: 0.98;
          letter-spacing: -3px;
          font-weight: 500;
          color: #222326;
        }

        .msp-hero-subtitle {
          margin: 0 0 19px;
          color: #69003c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 23px;
          line-height: 2;
          font-weight: 600;
          letter-spacing: -0.5px;
        }

        .msp-hero-description {
          max-width: 650px;
          margin: 0;
          color: #343438;
          font-size: 14px;
          line-height: 1.58;
        }

        .msp-hero-description.secondary {
          margin-top: 14px;
          color: #71686d;
          font-size: 13px;
          line-height: 1.55;
        }

        .msp-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 25px;
          padding: 12px 23px;
          border: none;
          border-radius: 8px;
          background: #6d003d;
           transform: translateY(15px);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.7px;
          text-transform: uppercase;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .msp-primary-btn:hover {
          background: #8a0752;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(109, 0, 61, 0.2);
        }

        .msp-hero-line {
          width: 100%;
          height: 1px;
          margin-top: 30px;
          background: #e5e2e2;
        }

        .msp-hero-points {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px 13px;
          margin-top: 18px;
        }

        .msp-hero-point {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 10px;
          border-radius: 7px;
          background: #eeeeef;
          color: #424246;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.35px;
        }

        .msp-hero-point::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #72003e;
          flex-shrink: 0;
        }

        .msp-hero-image-area {
          position: relative;
          width: 100%;
        }

        .msp-hero-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1.18 / 1;
          overflow: hidden;
          border-radius: 15px;
          background: #420026;
          box-shadow: 0 18px 35px rgba(42, 19, 30, 0.16);
        }

        .msp-hero-image-wrapper img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .msp-health-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 13px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.95);
          color: #36363a;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 5px 16px rgba(0, 0, 0, 0.12);
        }

        .msp-health-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #14b875;
        }

        .msp-hero-image-card {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 17px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.13);
        }

        .msp-image-card-icon {
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #70003f;
          color: #ffffff;
        }

        .msp-image-card-content {
          min-width: 0;
        }

        .msp-image-card-title {
          margin: 0;
          color: #2c2c30;
          font-size: 12px;
          line-height: 1.3;
          font-weight: 800;
        }

        .msp-image-card-text {
          margin: 3px 0 0;
          color: #827a7f;
          font-size: 9px;
          line-height: 1.3;
        }

        .msp-image-card-shield {
          margin-left: auto;
          width: 31px;
          height: 31px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #eee9ed;
          color: #70003f;
        }

        /* =====================================================
           SECOND SECTION
        ===================================================== */

        .msp-resilience {
          width: 100%;
          padding: 105px 0 90px;
          background: #f8f7f2;
        }

        .msp-resilience-inner {
          width: min(1180px, calc(100% - 70px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(350px, 0.8fr) minmax(0, 1.12fr);
          gap: 65px;
          align-items: center;
        }

        .msp-resilience-image {
          position: relative;
          width: 100%;
        }

        .msp-resilience-image-frame {
          width: 100%;
          aspect-ratio: 1.12 / 0.84;
          padding: 10px;
          border-radius: 18px;
          background: #eeeeeb;
          box-shadow: 0 10px 20px rgba(35, 27, 31, 0.1);
        }

        .msp-resilience-image-frame img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 12px;
        }

        .msp-embedded-badge {
          position: absolute;
          top: 22px;
          left: 22px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.96);
          color: #37373b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.35px;
        }

        .msp-embedded-badge svg {
          color: #72003e;
        }

        .msp-resilience-content {
          min-width: 0;
        }

        .msp-resilience-content h2 {
          margin: 19px 0 20px;
          max-width: 650px;
          color: #252529;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 550;
        }

        .msp-body-text {
          margin: 0;
          color: #776c71;
          font-size: 14px;
          line-height: 1.65;
        }

        .msp-highlight {
          position: relative;
          margin: 21px 0;
          padding: 18px 22px;
          overflow: hidden;
          border-radius: 11px;
          background: #eeeeef;
        }

        .msp-highlight::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          right: -45px;
          top: -70px;
          border-radius: 50%;
          background: #e5e0e3;
        }

        .msp-highlight::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #72003e;
          z-index: 2;
        }

        .msp-highlight p {
          position: relative;
          z-index: 3;
          margin: 0;
          color: #29292d;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
        }

        .msp-body-text + .msp-body-text {
          margin-top: 17px;
        }

        .msp-bottom-highlight {
          margin-top: 20px;
          padding: 17px 19px;
          border-radius: 10px;
          background: #e9eaeb;
        }

        .msp-bottom-highlight p {
          margin: 0;
          color: #303035;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 500;
        }

        /* =====================================================
           SERVICES
        ===================================================== */

        .msp-services {
          width: 100%;
          padding: 78px 0 100px;
          background: #ffffff;
        }

        .msp-services-header {
          margin-bottom: 38px;
        }

        .msp-services-header h2 {
          margin: 12px 0 8px;
          color: #28282c;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 600;
        }

        .msp-services-header p {
          max-width: 720px;
          margin: 0;
          color: #746b70;
          font-size: 14px;
          line-height: 1.55;
        }

        .msp-services-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 17px;
        }

        .msp-service-card {
          position: relative;
          min-width: 0;
          min-height: 320px;
          padding: 24px 23px 18px;
          overflow: hidden;
          border: 1px solid #ebe5e8;
          border-radius: 13px;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(31, 18, 24, 0.02);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .msp-service-card::after {
          content: "";
          position: absolute;
          top: -50px;
          right: -50px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #f5f1f3;
          z-index: 0;
        }

        .msp-service-card:hover {
          transform: translateY(-5px);
          border-color: #d9bdcb;
          box-shadow: 0 12px 28px rgba(75, 15, 45, 0.08);
        }

        .msp-service-top {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .msp-service-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #f1e8ed;
          color: #72003e;
        }

        .msp-service-icon svg {
          width: 18px;
          height: 18px;
        }

        .msp-service-number {
          width: 27px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #efeaed;
          color: #72003e;
          font-size: 10px;
          font-weight: 700;
        }

        .msp-service-category {
          position: relative;
          z-index: 2;
          margin-bottom: 7px;
          color: #72003e;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.45px;
        }

        .msp-service-card h3 {
          position: relative;
          z-index: 2;
          margin: 0;
          min-height: 42px;
          color: #27272b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.13;
          letter-spacing: -0.4px;
          font-weight: 700;
        }

        .msp-service-description {
          position: relative;
          z-index: 2;
          margin: 14px 0 0;
          color: #746b70;
          font-size: 13px;
          line-height: 1.62;
        }

        .msp-service-footer {
          position: absolute;
          left: 23px;
          right: 23px;
          bottom: 18px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 15px;
          border-top: 1px solid #eee9eb;
        }

        .msp-service-tag-primary {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #72003e;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }

        .msp-service-tag-primary::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #72003e;
        }

        .msp-service-tag-secondary {
          padding: 4px 7px;
          border-radius: 4px;
          background: #ededee;
          color: #777177;
          font-size: 9px;
          font-weight: 700;
          white-space: nowrap;
        }

        /* =====================================================
           BOTTOM AREA
        ===================================================== */

        .msp-support-strip {
          width: 100%;
          padding: 65px 0;
          background: #f8f7f2;
        }

        .msp-support-inner {
          width: min(1180px, calc(100% - 70px));
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .msp-support-content h2 {
          margin: 12px 0 8px;
          color: #29292d;
          font-size: 32px;
          line-height: 1.15;
          font-weight: 500;
          letter-spacing: -1px;
        }

        .msp-support-content p {
          max-width: 680px;
          margin: 0;
          color: #746c70;
          font-size: 13px;
          line-height: 1.6;
        }

        .msp-support-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: none;
          border-radius: 7px;
          background: #70003f;
          color: white;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          cursor: pointer;
        }

        .msp-support-button:hover {
          background: #890551;
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .msp-hero-inner,
          .msp-resilience-inner,
          .msp-support-inner {
            width: min(100% - 50px, 1050px);
          }

          .msp-hero-inner {
            gap: 38px;
          }

          .msp-resilience-inner {
            gap: 40px;
          }

          .msp-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .msp-service-card {
            min-height: 310px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 850px) {

          .msp-hero {
            padding: 55px 0 65px;
          }

          .msp-hero-inner {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .msp-hero-content {
            max-width: 720px;
          }

          .msp-hero-image-area {
            max-width: 650px;
            margin: 0 auto;
          }

          .msp-resilience {
            padding: 75px 0;
          }

          .msp-resilience-inner {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .msp-resilience-image {
            max-width: 650px;
            margin: 0 auto;
          }

          .msp-resilience-content {
            max-width: 750px;
          }

          .msp-services {
            padding: 65px 0 75px;
          }

          .msp-support-inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .msp-container,
          .msp-hero-inner,
          .msp-resilience-inner,
          .msp-support-inner {
            width: calc(100% - 30px);
          }

          .msp-hero {
            padding: 42px 0 50px;
          }

          .msp-section-label {
            font-size: 8px;
            padding: 5px 8px;
          }

          .msp-hero h1 {
            margin-top: 17px;
            font-size: 42px;
            line-height: 1;
            letter-spacing: -2px;
          }

          .msp-hero-subtitle {
            font-size: 19px;
            line-height: 1.25;
          }

          .msp-hero-description {
            font-size: 13px;
            line-height: 1.6;
          }

          .msp-hero-description.secondary {
            font-size: 12px;
          }

          .msp-primary-btn {
            width: 100%;
            margin-top: 21px;
          }

          .msp-hero-points {
            gap: 7px;
          }

          .msp-hero-point {
            font-size: 9px;
            padding: 6px 8px;
          }

          .msp-hero-image-wrapper {
            aspect-ratio: 1 / 0.92;
            border-radius: 13px;
          }

          .msp-health-badge {
            top: 11px;
            right: 11px;
            padding: 7px 10px;
            font-size: 9px;
          }

          .msp-hero-image-card {
            left: 12px;
            right: 12px;
            bottom: 12px;
            padding: 11px;
            gap: 9px;
          }

          .msp-image-card-icon {
            width: 34px;
            height: 34px;
          }

          .msp-image-card-title {
            font-size: 10px;
          }

          .msp-image-card-text {
            font-size: 8px;
          }

          .msp-image-card-shield {
            width: 27px;
            height: 27px;
          }

          .msp-resilience {
            padding: 60px 0;
          }

          .msp-resilience-inner {
            width: calc(100% - 30px);
          }

          .msp-resilience-image-frame {
            padding: 7px;
            border-radius: 13px;
          }

          .msp-embedded-badge {
            top: 16px;
            left: 16px;
            padding: 7px 9px;
            font-size: 8px;
          }

          .msp-resilience-content h2 {
            margin: 16px 0;
            font-size: 34px;
            letter-spacing: -1.4px;
          }

          .msp-body-text {
            font-size: 12.5px;
            line-height: 1.62;
          }

          .msp-highlight {
            margin: 18px 0;
            padding: 15px 17px;
          }

          .msp-highlight p {
            font-size: 13px;
          }

          .msp-bottom-highlight {
            padding: 14px 15px;
          }

          .msp-bottom-highlight p {
            font-size: 11px;
          }

          .msp-services {
            padding: 55px 0 65px;
          }

          .msp-services-header {
            margin-bottom: 28px;
          }

          .msp-services-header h2 {
            font-size: 32px;
            letter-spacing: -1.2px;
          }

          .msp-services-header p {
            font-size: 12px;
          }

          .msp-services-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .msp-service-card {
            min-height: 295px;
            padding: 21px 19px 18px;
          }

          .msp-service-card h3 {
            font-size: 17px;
          }

          .msp-service-description {
            font-size: 12px;
            line-height: 1.6;
          }

          .msp-service-footer {
            left: 19px;
            right: 19px;
          }

          .msp-support-strip {
            padding: 50px 0;
          }

          .msp-support-inner {
            width: calc(100% - 30px);
          }

          .msp-support-content h2 {
            font-size: 29px;
          }

          .msp-support-content p {
            font-size: 12px;
          }

          .msp-support-button {
            width: 100%;
            justify-content: center;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .msp-hero h1 {
            font-size: 37px;
          }

          .msp-hero-subtitle {
            font-size: 17px;
          }

          .msp-hero-points {
            flex-direction: column;
            align-items: flex-start;
          }

          .msp-hero-point {
            width: fit-content;
          }

          .msp-resilience-content h2 {
            font-size: 30px;
          }

          .msp-services-header h2 {
            font-size: 29px;
          }

          .msp-service-card {
            min-height: 305px;
          }

          .msp-service-description {
            font-size: 11.5px;
          }
        }

      `}</style>

      <main className="msp-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="msp-hero">

          <div className="msp-hero-inner">

            <div className="msp-hero-content">

              <div className="msp-section-label">
                IT Augmentation • Managed Services
              </div>

              <h1>MSP Support</h1>

              <h2 className="msp-hero-subtitle">
                Reliable IT Support for Business Continuity
              </h2>

              <p className="msp-hero-description">
                Your business depends on technology that works reliably,
                securely, and efficiently. TechTorch MSP Support provides
                structured IT assistance, proactive maintenance, and ongoing
                technical support to help organizations manage their
                technology environment with greater confidence.
              </p>

              <p className="msp-hero-description secondary">
                From infrastructure and software support to cloud and
                day-to-day technical assistance, we help keep your IT
                operations aligned with your business requirements.
              </p>

              <button className="msp-primary-btn">
                Talk to Our IT Experts
                <ArrowRight size={15} />
              </button>

              <div className="msp-hero-line"></div>

              <div className="msp-hero-points">

                <div className="msp-hero-point">
                  Proactive Maintenance
                </div>

                <div className="msp-hero-point">
                  24/7 Operations Coverage
                </div>

                <div className="msp-hero-point">
                  Enterprise SLA Support
                </div>

              </div>

            </div>

            <div className="msp-hero-image-area">

              <div className="msp-hero-image-wrapper">

                <img
                  src="/MSPSupport1.png"
                  alt="MSP Support operations team"
                />

                <div className="msp-health-badge">
                  <span className="msp-health-dot"></span>
                  99.98% Telemetry Health
                </div>

                <div className="msp-hero-image-card">

                  <div className="msp-image-card-icon">
                    <Server size={20} />
                  </div>

                  <div className="msp-image-card-content">

                    <p className="msp-image-card-title">
                      IT Operations & Infrastructure Reliability
                    </p>

                    <p className="msp-image-card-text">
                      Real-time Telemetry & Rapid Incident Triage
                    </p>

                  </div>

                  <div className="msp-image-card-shield">
                    <ShieldCheck size={16} />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OPERATIONAL RESILIENCE
        ===================================================== */}

        <section className="msp-resilience">

          <div className="msp-resilience-inner">

            <div className="msp-resilience-image">

              <div className="msp-resilience-image-frame">

                <img
                  src="/MSPSupport2.png"
                  alt="IT support team collaboration"
                />

              </div>

              <div className="msp-embedded-badge">
                <Code2 size={13} />
                EMBEDDED ENGINEERING
              </div>

            </div>


            <div className="msp-resilience-content">

              <div className="msp-section-label">
                Operational Resilience
              </div>

              <h2>
                Smarter IT Management. Dependable Support.
              </h2>

              <p className="msp-body-text">
                As businesses become increasingly dependent on digital
                systems, managing IT effectively has become an important
                part of everyday operations. Technical issues, system
                maintenance, software requirements, infrastructure changes,
                and evolving business needs can all place additional
                pressure on internal teams.
              </p>

              <div className="msp-highlight">

                <p>
                  TechTorch MSP Support delivers rigorous, proactive
                  infrastructure governance tailored to high-availability
                  enterprise environments.
                </p>

              </div>

              <p className="msp-body-text">
                Our services are designed to give businesses access to
                ongoing technical expertise without making IT management
                unnecessarily complicated. We work around your existing
                technology environment, understand your operational
                requirements, and provide support that is aligned with the
                way your organization works.
              </p>

              <p className="msp-body-text">
                Our focus extends beyond simply resolving technical
                problems. Through ongoing support and maintenance, we help
                businesses maintain their technology environment, address
                issues efficiently, and prepare their IT operations for
                changing requirements.
              </p>

              <div className="msp-bottom-highlight">

                <p>
                  Whether your organization needs assistance with
                  infrastructure, software, cloud environments, system
                  maintenance, or technical troubleshooting, our MSP
                  Support services provide a dependable foundation for
                  everyday IT operations.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="msp-services">

          <div className="msp-container">

            <div className="msp-services-header">

              <div className="msp-section-label">
                Service Capabilities
              </div>

              <h2>
                Our MSP Support Services
              </h2>

              <p>
                Comprehensive, structured support components designed to
                preserve uptime, protect critical assets, and provide clear
                operational answers.
              </p>

            </div>


            <div className="msp-services-grid">

              {services.map((service) => (

                <article
                  className="msp-service-card"
                  key={service.number}
                >

                  <div className="msp-service-top">

                    <div className="msp-service-icon">
                      {service.icon}
                    </div>

                    <div className="msp-service-number">
                      {service.number}
                    </div>

                  </div>

                  <div className="msp-service-category">
                    {service.category}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p className="msp-service-description">
                    {service.description}
                  </p>

                  <div className="msp-service-footer">

                    <div className="msp-service-tag-primary">
                      {service.tag1}
                    </div>

                    <div className="msp-service-tag-secondary">
                      {service.tag2}
                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        

      </main>
    </>
  );
};

export default MSPSupport;