import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  ArrowRight,
  Headphones,
  ShieldCheck,
  Network,
} from "lucide-react";

const MSPSupportSections = () => {
  const navigate = useNavigate();

  const scalabilityPoints = [
    {
      title: "Flexible Team & User Onboarding",
      text: "Streamlined provisioning and access management to smoothly integrate new team members and workstations without operational delay.",
    },
    {
      title: "Multi-Cloud & Hybrid Infrastructure Adaptation",
      text: "Ongoing management that adjusts as your systems migrate, evolve, or integrate across cloud and on-premises environments.",
    },
    {
      title: "Proactive Maintenance as Workloads Expand",
      text: "Consistent monitoring, health checks, and routine patching scaled up to protect infrastructure reliability as usage increases.",
    },
    {
      title: "Predictable Support Tiers Without Headcount Friction",
      text: "Access dependable IT expertise when needed, allowing your internal organization to focus on core strategic goals.",
    },
  ];

  return (
    <div className="msp-page">
      <style>{`
        /* =========================================================
           GLOBAL
        ========================================================= */

        * {
          box-sizing: border-box;
        }

        .msp-page {
          width: 100%;
          overflow: hidden;

          color: #25252a;

          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        .msp-page h1,
        .msp-page h2,
        .msp-page h3,
        .msp-page h4,
        .msp-page h5,
        .msp-page h6 {
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        /*
          UNIVERSAL SPACING
          Desktop  = 100px
          Tablet   = 40px
          Mobile   = 24px
          Small    = 16px
        */

        .msp-wrapper {
          width: min(1600px, calc(100% - 200px));
          margin: 0 auto;
        }

        /* =========================================================
           COMMON LABEL
        ========================================================= */

        .msp-section-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 6px 11px;

          border-radius: 20px;

          background: #f0e6eb;
          color: #70003f;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.8px;

          text-transform: uppercase;
        }

        .msp-section-label::before {
          content: "";

          width: 5px;
          height: 5px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #70003f;
        }

        /* =========================================================
           SECTION 1 — SCALABILITY
        ========================================================= */

        .msp-scalability {
          width: 100%;

          padding: 88px 0 94px;

          background: #faf9f6;
        }

        .msp-scale-card {
          position: relative;

          width: 100%;

          padding: 52px;

          border: 1px solid #c98cab;
          border-radius: 19px;

          background: #faf9f6;

          overflow: hidden;
        }

        .msp-scale-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(390px, 0.85fr);

          gap: 72px;

          align-items: start;
        }

        .msp-scale-content {
          min-width: 0;
        }

        .msp-scale-content h2 {
          max-width: 720px;

          margin: 21px 0 12px;

          color: #25252a;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(38px, 3.4vw, 52px);
          line-height: 1.06;
          letter-spacing: -2.5px;
          font-weight: 600;
        }

        .msp-scale-subtitle {
          max-width: 700px;

          margin: 0 0 23px;

          color: #70003f;

          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
        }

        .msp-scale-text {
          max-width: 720px;

          margin: 0;

          color: #74696e;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.68;
        }

        .msp-scale-text + .msp-scale-text {
          margin-top: 17px;
        }

        /* =========================================================
           SCALE ASPECTS
        ========================================================= */

        .msp-scale-aspects {
          width: 100%;

          padding: 29px 27px 25px;

          border: 1px solid #ece5e8;
          border-radius: 14px;

          background: #ffffff;

          box-shadow:
            0 4px 15px rgba(40, 20, 30, 0.035);
        }

        .msp-scale-aspects-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding-bottom: 17px;

          border-bottom: 1px solid #eee8eb;
        }

        .msp-scale-aspects-title {
          color: #70003f;

          font-family: "Inter", Arial, sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;

          text-transform: uppercase;
        }

        .msp-scale-aspects-badge {
          color: #81777c;

          font-family: "Inter", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;

          white-space: nowrap;
        }

        .msp-scale-point {
          display: grid;

          grid-template-columns: 27px minmax(0, 1fr);

          gap: 11px;

          padding: 17px 0;

          border-bottom: 1px solid #f0ecee;
        }

        .msp-scale-point:last-child {
          border-bottom: 0;
          padding-bottom: 3px;
        }

        .msp-scale-check {
          width: 26px;
          height: 26px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 7px;

          background: #f0e7ec;
          color: #70003f;
        }

        .msp-scale-check svg {
          width: 13px;
          height: 13px;
        }

        .msp-scale-point h3 {
          margin: 0 0 6px;

          color: #303035;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.35;
          font-weight: 700;
        }

        .msp-scale-point p {
          margin: 0;

          color: #776d72;

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.55;
        }

        /* =========================================================
           SECTION 2 — HOLISTIC ECOSYSTEM
        ========================================================= */

        .msp-ecosystem {
          width: 100%;

          padding: 80px 0 84px;

          color: #ffffff;

          background:
            radial-gradient(
              circle at 75% 20%,
              rgba(156, 0, 82, 0.16),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #70003e 0%,
              #790041 45%,
              #57002f 100%
            );
        }

        .msp-ecosystem-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.25fr)
            minmax(330px, 0.75fr);

          gap: 75px;

          align-items: center;
        }

        .msp-ecosystem-content {
          min-width: 0;
        }

        .msp-ecosystem .msp-section-label {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;

          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .msp-ecosystem .msp-section-label::before {
          background: #ffffff;
        }

        .msp-ecosystem h2 {
          margin: 18px 0 15px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(36px, 3.2vw, 50px);
          line-height: 1.07;
          letter-spacing: -2.2px;
          font-weight: 600;
        }

        .msp-ecosystem-main-text {
          max-width: 780px;

          margin: 0;

          color: rgba(255, 255, 255, 0.91);

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.68;
        }

        .msp-ecosystem-main-text + .msp-ecosystem-main-text {
          margin-top: 16px;
        }

        /* =========================================================
           ECOSYSTEM CARDS
        ========================================================= */

        .msp-ecosystem-cards {
          display: flex;
          flex-direction: column;

          gap: 13px;

          min-width: 0;
        }

        .msp-ecosystem-card {
          padding: 17px 18px;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 11px;

          background: rgba(255, 255, 255, 0.09);

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .msp-ecosystem-card:hover {
          transform: translateY(-3px);

          background: rgba(255, 255, 255, 0.13);

          border-color: rgba(255, 255, 255, 0.17);
        }

        .msp-ecosystem-card-top {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 8px;
        }

        .msp-ecosystem-icon {
          width: 21px;
          height: 21px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #ffffff;
        }

        .msp-ecosystem-icon svg {
          width: 15px;
          height: 15px;
        }

        .msp-ecosystem-card h3 {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.25;
          font-weight: 700;
        }

        .msp-ecosystem-card p {
          margin: 0;

          color: rgba(255, 255, 255, 0.68);

          font-family: "Inter", Arial, sans-serif;
          font-size: 12px;
          line-height: 1.55;
        }

        /* =========================================================
           SECTION 3 — OPERATIONAL EXCELLENCE
        ========================================================= */

        .msp-operational {
          width: 100%;

          padding: 94px 0 105px;

          background: #f5f6f7;
        }

        .msp-operational-header {
          max-width: 850px;

          margin: 0 auto 43px;

          text-align: center;
        }

        .msp-operational-header h2 {
          margin: 18px 0 11px;

          color: #29292d;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: clamp(34px, 3vw, 48px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 600;
        }

        .msp-operational-header p {
          max-width: 800px;

          margin: 0 auto;

          color: #746a70;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.68;
        }

        /* =========================================================
           CTA CARD
        ========================================================= */

        .msp-operational-cta {
          position: relative;

          width: min(1050px, 100%);

          min-height: 290px;

          margin: 0 auto;

          padding: 50px 45px 46px;

          border: 1px solid #ebe5e8;
          border-top: 3px solid #70003f;
          border-radius: 15px;

          background: #ffffff;

          box-shadow:
            0 8px 27px rgba(35, 20, 30, 0.055);

          text-align: center;

          overflow: hidden;
        }

        .msp-operational-cta::after {
          content: "";

          position: absolute;

          width: 250px;
          height: 250px;

          right: -78px;
          top: -105px;

          border-radius: 50%;

          background: #f5f0f3;

          z-index: 0;
        }

        .msp-operational-cta-content {
          position: relative;

          z-index: 1;
        }

        .msp-operational-cta .msp-section-label {
          font-size: 8px;
        }

        .msp-operational-cta h3 {
          max-width: 620px;

          margin: 17px auto 11px;

          color: #29292d;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -1.2px;
          font-weight: 600;
        }

        .msp-operational-cta p {
          max-width: 700px;

          margin: 0 auto;

          color: #766c71;

          font-family: "Inter", Arial, sans-serif;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================================
           CTA BUTTONS
        ========================================================= */

        .msp-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          margin-top: 25px;
        }

        .msp-primary-btn,
        .msp-secondary-btn {
          height: 40px;
          min-height: 40px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 0 19px;

          border-radius: 7px;

          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.35px;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .msp-primary-btn {
          border: 1px solid #70003f;

          background: #70003f;
          color: #ffffff;
        }

        .msp-primary-btn:hover {
          transform: translateY(-2px);

          background: #8a0751;
          border-color: #8a0751;

          box-shadow:
            0 7px 18px rgba(112, 0, 63, 0.16);
        }

        .msp-secondary-btn {
          border: 1px solid #e1dadd;

          background: #ffffff;
          color: #5e555a;
        }

        .msp-secondary-btn:hover {
          transform: translateY(-2px);

          border-color: #b989a2;

          color: #70003f;

          box-shadow:
            0 6px 15px rgba(60, 20, 40, 0.05);
        }

        .msp-primary-btn svg,
        .msp-secondary-btn svg {
          width: 13px;
          height: 13px;
        }

        /* =========================================================
           LARGE TABLET — 100px -> 40px
        ========================================================= */

        @media (max-width: 1200px) {
          .msp-wrapper {
            width: calc(100% - 80px);
          }

          .msp-scale-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(320px, 0.82fr);

            gap: 42px;
          }

          .msp-ecosystem-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(290px, 0.72fr);

            gap: 45px;
          }
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {
          .msp-wrapper {
            width: calc(100% - 80px);
          }

          /* SCALE */

          .msp-scalability {
            padding: 70px 0 76px;
          }

          .msp-scale-card {
            padding: 42px 35px;
          }

          .msp-scale-layout {
            grid-template-columns: 1fr;

            gap: 38px;
          }

          .msp-scale-content h2 {
            max-width: 750px;
          }

          .msp-scale-subtitle,
          .msp-scale-text {
            max-width: 760px;
          }

          /* ECOSYSTEM */

          .msp-ecosystem {
            padding: 68px 0 73px;
          }

          .msp-ecosystem-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .msp-ecosystem-content {
            max-width: 780px;
          }

          .msp-ecosystem-cards {
            width: 100%;
            max-width: 700px;
          }

          /* OPERATIONAL */

          .msp-operational {
            padding: 76px 0 82px;
          }

          .msp-operational-cta {
            max-width: 850px;
          }
        }

        /* =========================================================
           MOBILE — 24px
        ========================================================= */

        @media (max-width: 700px) {
          .msp-wrapper {
            width: calc(100% - 48px);
          }

          .msp-section-label {
            padding: 6px 9px;

            font-size: 7.5px;
          }

          /* =====================================================
             SCALABILITY
          ===================================================== */

          .msp-scalability {
            padding: 58px 0 64px;
          }

          .msp-scale-card {
            padding: 31px 22px 32px;

            border-radius: 14px;
          }

          .msp-scale-layout {
            gap: 30px;
          }

          .msp-scale-content h2 {
            margin: 17px 0 11px;

            font-size: 31px;
            line-height: 1.08;

            letter-spacing: -1.2px;
          }

          .msp-scale-subtitle {
            margin-bottom: 20px;

            font-size: 13px;
            line-height: 1.5;
          }

          .msp-scale-text {
            font-size: 11px;
            line-height: 1.65;
          }

          .msp-scale-text + .msp-scale-text {
            margin-top: 13px;
          }

          /* SCALE ASPECTS */

          .msp-scale-aspects {
            padding: 21px 16px;

            border-radius: 11px;
          }

          .msp-scale-aspects-header {
            align-items: flex-start;

            padding-bottom: 14px;
          }

          .msp-scale-aspects-title {
            font-size: 8px;
          }

          .msp-scale-aspects-badge {
            font-size: 7px;
          }

          .msp-scale-point {
            grid-template-columns: 24px minmax(0, 1fr);

            gap: 9px;

            padding: 14px 0;
          }

          .msp-scale-check {
            width: 23px;
            height: 23px;
          }

          .msp-scale-check svg {
            width: 11px;
            height: 11px;
          }

          .msp-scale-point h3 {
            margin-bottom: 5px;

            font-size: 12px;
            line-height: 1.35;
          }

          .msp-scale-point p {
            font-size: 9.5px;
            line-height: 1.55;
          }

          /* =====================================================
             ECOSYSTEM
          ===================================================== */

          .msp-ecosystem {
            padding: 52px 0 58px;
          }

          .msp-ecosystem-layout {
            gap: 29px;
          }

          .msp-ecosystem h2 {
            margin: 15px 0 12px;

            font-size: 31px;
            letter-spacing: -1.2px;
          }

          .msp-ecosystem-main-text {
            font-size: 11px;
            line-height: 1.65;
          }

          .msp-ecosystem-main-text + .msp-ecosystem-main-text {
            margin-top: 12px;
          }

          .msp-ecosystem-cards {
            gap: 9px;
          }

          .msp-ecosystem-card {
            padding: 14px 15px;
          }

          .msp-ecosystem-card-top {
            margin-bottom: 6px;
          }

          .msp-ecosystem-card h3 {
            font-size: 11px;
          }

          .msp-ecosystem-card p {
            font-size: 8.5px;
            line-height: 1.55;
          }

          /* =====================================================
             OPERATIONAL
          ===================================================== */

          .msp-operational {
            padding: 60px 0 66px;
          }

          .msp-operational-header {
            margin-bottom: 31px;
          }

          .msp-operational-header h2 {
            margin: 15px 0 10px;

            font-size: 31px;
            letter-spacing: -1.2px;
          }

          .msp-operational-header p {
            font-size: 10.5px;
            line-height: 1.65;
          }

          /* CTA */

          .msp-operational-cta {
            min-height: 265px;

            padding: 38px 20px 35px;

            border-radius: 13px;
          }

          .msp-operational-cta::after {
            width: 185px;
            height: 185px;

            right: -65px;
            top: -70px;
          }

          .msp-operational-cta h3 {
            margin-top: 14px;

            font-size: 26px;
            line-height: 1.12;
          }

          .msp-operational-cta p {
            font-size: 10px;
            line-height: 1.62;
          }

          .msp-cta-buttons {
            flex-direction: column;

            width: 100%;

            gap: 8px;

            margin-top: 21px;
          }

          .msp-primary-btn,
          .msp-secondary-btn {
            width: 100%;

            min-height: 40px;

            font-size: 8px;
          }
        }

        /* =========================================================
           SMALL MOBILE — 16px
        ========================================================= */

        @media (max-width: 480px) {
          .msp-wrapper {
            width: calc(100% - 32px);
          }

          .msp-scalability {
            padding: 50px 0 56px;
          }

          .msp-scale-card {
            padding: 27px 17px 28px;
          }

          .msp-scale-content h2 {
            font-size: 28px;
            letter-spacing: -1px;
          }

          .msp-scale-subtitle {
            font-size: 12px;
          }

          .msp-scale-text {
            font-size: 10.5px;
          }

          .msp-scale-aspects {
            padding: 18px 13px;
          }

          .msp-scale-point h3 {
            font-size: 11px;
          }

          .msp-scale-point p {
            font-size: 9px;
          }

          .msp-ecosystem {
            padding: 48px 0 53px;
          }

          .msp-ecosystem h2 {
            font-size: 28px;
          }

          .msp-ecosystem-main-text {
            font-size: 10px;
          }

          .msp-ecosystem-card h3 {
            font-size: 10.5px;
          }

          .msp-ecosystem-card p {
            font-size: 8px;
          }

          .msp-operational {
            padding: 53px 0 59px;
          }

          .msp-operational-header h2 {
            font-size: 28px;
          }

          .msp-operational-header p {
            font-size: 10px;
          }

          .msp-operational-cta {
            padding: 34px 16px 31px;
          }

          .msp-operational-cta h3 {
            font-size: 24px;
          }

          .msp-operational-cta p {
            font-size: 9.5px;
          }
        }
      `}</style>

      {/* =========================================================
          SECTION 1 — SCALABILITY & GROWTH
      ========================================================= */}

      <section className="msp-scalability">
        <div className="msp-wrapper">
          <div className="msp-scale-card">
            <div className="msp-scale-layout">

              {/* LEFT CONTENT */}

              <div className="msp-scale-content">
                <div className="msp-section-label">
                  Scalability & Growth
                </div>

                <h2>
                  Technology Support That Scales
                  <br />
                  With Your Business
                </h2>

                <p className="msp-scale-subtitle">
                  Adapting alongside your organizational needs without
                  causing operational friction or disruption.
                </p>

                <p className="msp-scale-text">
                  As businesses grow, their technology environments
                  naturally become more complex. Adding team members,
                  onboarding new business applications, expanding cloud
                  environments, and managing additional devices all
                  increase the operational burden on day-to-day IT
                  management.
                </p>

                <p className="msp-scale-text">
                  TechTorch MSP Support is designed to adjust smoothly
                  as your operational footprint shifts. Rather than
                  forcing sudden workflow changes or renegotiations
                  whenever you add new staff or workloads, we establish
                  an adaptable support foundation that responds to your
                  changing requirements.
                </p>

                <p className="msp-scale-text">
                  Whether your business is gradually adopting new cloud
                  services, expanding to distributed locations, or
                  standardizing workflows across departments, our team
                  provides reliable support so your technical systems
                  remain stable through every phase of organizational
                  growth.
                </p>
              </div>

              {/* RIGHT */}

              <div className="msp-scale-aspects">
                <div className="msp-scale-aspects-header">
                  <span className="msp-scale-aspects-title">
                    Key Scalability Aspects
                  </span>

                  <span className="msp-scale-aspects-badge">
                    Adaptable Framework
                  </span>
                </div>

                {scalabilityPoints.map((item, index) => (
                  <div
                    className="msp-scale-point"
                    key={index}
                  >
                    <div className="msp-scale-check">
                      <Check />
                    </div>

                    <div>
                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2 — HOLISTIC ECOSYSTEM
      ========================================================= */}

      <section className="msp-ecosystem">
        <div className="msp-wrapper">
          <div className="msp-ecosystem-layout">

            {/* LEFT CONTENT */}

            <div className="msp-ecosystem-content">
              <div className="msp-section-label">
                Holistic Ecosystem
              </div>

              <h2>
                Beyond IT Support
              </h2>

              <p className="msp-ecosystem-main-text">
                MSP Support is one part of a broader technology
                ecosystem. Organizations may also require software
                development, cloud solutions, cybersecurity, software
                maintenance, or other technology services as their
                needs evolve.
              </p>

              <p className="msp-ecosystem-main-text">
                TechTorch brings these areas together within a wider
                technology-services approach, allowing businesses to
                address different technology requirements through a
                coordinated technical partner.
              </p>
            </div>

            {/* RIGHT CARDS */}

            <div className="msp-ecosystem-cards">

              <div className="msp-ecosystem-card">
                <div className="msp-ecosystem-card-top">
                  <div className="msp-ecosystem-icon">
                    <Network />
                  </div>

                  <h3>
                    Single Accountability
                  </h3>
                </div>

                <p>
                  One strategic partner bridging everyday operational
                  ticketing with long-term digital engineering.
                </p>
              </div>

              <div className="msp-ecosystem-card">
                <div className="msp-ecosystem-card-top">
                  <div className="msp-ecosystem-icon">
                    <ShieldCheck />
                  </div>

                  <h3>
                    Cybersecurity Alignment
                  </h3>
                </div>

                <p>
                  Consistent patching, access governance, and
                  zero-trust hygiene woven into daily maintenance.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3 — OPERATIONAL EXCELLENCE
      ========================================================= */}

      <section className="msp-operational">
        <div className="msp-wrapper">

          {/* HEADER */}

          <div className="msp-operational-header">
            <div className="msp-section-label">
              Operational Excellence
            </div>

            <h2>
              Built for Reliable IT Operations
            </h2>

            <p>
              Your teams should be able to focus on high-impact work
              without unnecessary technology-related distractions.
              With the right MSP Support structure, essential IT
              requirements are managed systematically, technical
              issues are resolved efficiently, and your technical
              infrastructure stays aligned with corporate velocity.
            </p>
          </div>

          {/* CTA CARD */}

          <div className="msp-operational-cta">
            <div className="msp-operational-cta-content">

              <div className="msp-section-label">
                Enterprise Transition Readiness
              </div>

              <h3>
                Let TechTorch Support Your IT
                <br />
                Environment
              </h3>

              <p>
                Build a dependable, high-availability IT structure
                with tailored SLA frameworks, continuous telemetry,
                and dedicated expert assistance.
              </p>

              <div className="msp-cta-buttons">

                <button
                  type="button"
                  className="msp-primary-btn"
                  onClick={() => navigate("/connect-msp")}
                >
                  Connect With TechTorch
                  <ArrowRight />
                </button>

                <button
                  type="button"
                  className="msp-secondary-btn"
                  onClick={() => navigate("/connect-msp")}
                >
                  <Headphones />
                  Talk to IT Specialist
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default MSPSupportSections;