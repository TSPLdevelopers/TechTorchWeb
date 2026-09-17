import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  Users,
  Cloud,
  Activity,
  ShieldCheck,
  ArrowRight,
  Headphones,
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

        * {
          box-sizing: border-box;
        }

        .msp-page {
          width: 100%;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
          color: #25252a;
        }

        .msp-wrapper {
          width: min(1180px, calc(100% - 70px));
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
           SECTION 1
           SCALABILITY & GROWTH
        ========================================================= */

        .msp-scalability {
          width: 100%;
          padding: 72px 0 78px;

          background: #faf9f6;
        }

        .msp-scale-card {
          position: relative;

          width: 100%;

          padding: 49px 49px 48px;

          border: 1px solid #c98cab;
          border-radius: 18px;

          background: #faf9f6;

          overflow: hidden;
        }

        .msp-scale-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr);

          gap: 58px;

          align-items: start;
        }

        .msp-scale-content {
          min-width: 0;
        }

        .msp-scale-content h2 {
          max-width: 570px;

          margin: 20px 0 10px;

          color: #25252a;

          font-size: clamp(35px, 3.3vw, 47px);
          line-height: 1.06;
          letter-spacing: -1.7px;
          font-weight: 500;
        }

        .msp-scale-subtitle {
          max-width: 610px;

          margin: 0 0 22px;

          color: #70003f;

          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .msp-scale-text {
          max-width: 610px;

          margin: 0;

          color: #74696e;

          font-size: 13px;
          line-height: 1.62;
        }

        .msp-scale-text + .msp-scale-text {
          margin-top: 16px;
        }


        /* =========================================================
           SCALABILITY RIGHT CARD
        ========================================================= */

        .msp-scale-aspects {
          width: 100%;

          padding: 27px 25px 24px;

          border: 1px solid #ece5e8;
          border-radius: 13px;

          background: #fff;

          box-shadow:
            0 3px 12px rgba(40, 20, 30, 0.035);
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

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .msp-scale-aspects-badge {
          color: #81777c;

          font-size: 8px;
          font-weight: 700;
        }

        .msp-scale-point {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);

          gap: 10px;

          padding: 16px 0;

          border-bottom: 1px solid #f0ecee;
        }

        .msp-scale-point:last-child {
          border-bottom: 0;
          padding-bottom: 3px;
        }

        .msp-scale-check {
          width: 25px;
          height: 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 6px;

          background: #f0e7ec;
          color: #70003f;
        }

        .msp-scale-check svg {
          width: 12px;
          height: 12px;
        }

        .msp-scale-point h3 {
          margin: 0 0 5px;

          color: #303035;

          font-size: 13px;
          line-height: 1.3;
          font-weight: 700;
        }

        .msp-scale-point p {
          margin: 0;

          color: #776d72;

          font-size: 10.5px;
          line-height: 1.52;
        }


        /* =========================================================
           SECTION 2
           HOLISTIC ECOSYSTEM
        ========================================================= */

        .msp-ecosystem {
          width: 100%;
          padding: 66px 0 69px;

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

          color: #fff;
        }

        .msp-ecosystem-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.25fr)
            minmax(280px, 0.75fr);

          gap: 55px;

          align-items: center;
        }

        .msp-ecosystem-content {
          min-width: 0;
        }

        .msp-ecosystem .msp-section-label {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .msp-ecosystem .msp-section-label::before {
          background: #fff;
        }

        .msp-ecosystem h2 {
          margin: 16px 0 14px;

          color: #fff;

          font-size: clamp(35px, 3.4vw, 46px);
          line-height: 1.08;
          letter-spacing: -1.5px;
          font-weight: 500;
        }

        .msp-ecosystem-main-text {
          max-width: 690px;

          margin: 0;

          color: rgba(255,255,255,0.91);

          font-size: 13px;
          line-height: 1.62;
        }

        .msp-ecosystem-main-text + .msp-ecosystem-main-text {
          margin-top: 15px;
        }


        /* =========================================================
           ECOSYSTEM CARDS
        ========================================================= */

        .msp-ecosystem-cards {
          display: flex;
          flex-direction: column;

          gap: 12px;

          min-width: 0;
        }

        .msp-ecosystem-card {
          padding: 15px 17px;

          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;

          background: rgba(255,255,255,0.09);

          transition: 0.25s ease;
        }

        .msp-ecosystem-card:hover {
          transform: translateY(-2px);

          background: rgba(255,255,255,0.13);

          border-color: rgba(255,255,255,0.17);
        }

        .msp-ecosystem-card-top {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 7px;
        }

        .msp-ecosystem-icon {
          width: 19px;
          height: 19px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          color: #fff;
        }

        .msp-ecosystem-icon svg {
          width: 14px;
          height: 14px;
        }

        .msp-ecosystem-card h3 {
          margin: 0;

          color: #fff;

          font-size: 12px;
          line-height: 1.2;
          font-weight: 700;
        }

        .msp-ecosystem-card p {
          margin: 0;

          color: rgba(255,255,255,0.67);

          font-size: 9px;
          line-height: 1.5;
        }


        /* =========================================================
           SECTION 3
           OPERATIONAL EXCELLENCE
        ========================================================= */

        .msp-operational {
          width: 100%;
          padding: 78px 0 85px;

          background: #f5f6f7;
        }

        .msp-operational-header {
          max-width: 760px;

          margin: 0 auto 40px;

          text-align: center;
        }

        .msp-operational-header h2 {
          margin: 16px 0 10px;

          color: #29292d;

          font-size: clamp(34px, 3.2vw, 44px);
          line-height: 1.1;
          letter-spacing: -1.5px;
          font-weight: 500;
        }

        .msp-operational-header p {
          max-width: 700px;

          margin: 0 auto;

          color: #746a70;

          font-size: 12px;
          line-height: 1.65;
        }


        /* =========================================================
           CTA WHITE CARD
        ========================================================= */

        .msp-operational-cta {
          position: relative;

          width: min(930px, 100%);

          min-height: 273px;

          margin: 0 auto;

          padding: 47px 40px 44px;

          border: 1px solid #ebe5e8;
          border-top: 3px solid #70003f;

          border-radius: 15px;

          background: #fff;

          box-shadow:
            0 7px 24px rgba(35, 20, 30, 0.055);

          text-align: center;

          overflow: hidden;
        }

        .msp-operational-cta::after {
          content: "";

          position: absolute;

          width: 230px;
          height: 230px;

          right: -72px;
          top: -95px;

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
          max-width: 520px;

          margin: 16px auto 10px;

          color: #29292d;

          font-size: clamp(26px, 2.5vw, 34px);
          line-height: 1.1;
          letter-spacing: -1px;
          font-weight: 500;
        }

        .msp-operational-cta p {
          max-width: 620px;

          margin: 0 auto;

          color: #766c71;

          font-size: 11px;
          line-height: 1.55;
        }

        .msp-cta-buttons {
            display: flex;
            justify-content: center;
            align-items: center;

            gap: 9px;
            margin-top: 24px;
        }
        .msp-primary-btn,
        .msp-secondary-btn {
         height: 38px;
        min-height: 38px;

        display: inline-flex;
         align-items: center;
        justify-content: center;

        gap: 7px;
        padding: 0 18px;

        margin: 0;
        vertical-align: middle;

        border-radius: 7px;

        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.4px;

        cursor: pointer;

        transition: 0.25s ease;
        }

        .msp-primary-btn {
          border: 1px solid #70003f;

          background: #70003f;
          color: #fff;
        }

        .msp-primary-btn:hover {
          background: #8a0751;
          border-color: #8a0751;

          transform: translateY(-2px);
        }

        .msp-secondary-btn {
          border: 1px solid #e1dadd;

          background: #fff;
          color: #5e555a;
        }

        .msp-secondary-btn:hover {
          border-color: #b989a2;

          color: #70003f;

          transform: translateY(-2px);
        }

        .msp-primary-btn svg,
        .msp-secondary-btn svg {
          width: 13px;
          height: 13px;
        }


        /* =========================================================
           LARGE TABLET
        ========================================================= */

        @media (max-width: 1050px) {

          .msp-wrapper {
            width: calc(100% - 50px);
          }

          .msp-scale-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(310px, 0.8fr);

            gap: 35px;
          }

          .msp-ecosystem-layout {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(260px, 0.7fr);

            gap: 35px;
          }

        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 850px) {

          .msp-wrapper {
            width: calc(100% - 42px);
          }

          /* SCALE */

          .msp-scalability {
            padding: 55px 0 60px;
          }

          .msp-scale-card {
            padding: 38px 32px;
          }

          .msp-scale-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .msp-scale-content h2 {
            max-width: 700px;
          }

          .msp-scale-subtitle {
            max-width: 700px;
          }

          /* ECOSYSTEM */

          .msp-ecosystem {
            padding: 58px 0 62px;
          }

          .msp-ecosystem-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .msp-ecosystem-content {
            max-width: 720px;
          }

          .msp-ecosystem-cards {
            width: 100%;
            max-width: 650px;
          }

          /* OPERATIONAL */

          .msp-operational {
            padding: 65px 0 70px;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 600px) {

          .msp-wrapper {
            width: calc(100% - 28px);
          }

          .msp-section-label {
            padding: 6px 9px;
            font-size: 7.5px;
          }


          /* =====================================================
             SCALABILITY
          ===================================================== */

          .msp-scalability {
            padding: 43px 0 48px;
          }

          .msp-scale-card {
            padding: 29px 20px 30px;

            border-radius: 14px;
          }

          .msp-scale-layout {
            gap: 29px;
          }

          .msp-scale-content h2 {
            margin: 16px 0 10px;

            font-size: 30px;
            line-height: 1.08;
            letter-spacing: -1px;
          }

          .msp-scale-subtitle {
            margin-bottom: 19px;

            font-size: 13px;
            line-height: 1.45;
          }

          .msp-scale-text {
            font-size: 11px;
            line-height: 1.62;
          }

          .msp-scale-text + .msp-scale-text {
            margin-top: 13px;
          }


          /* SCALE ASPECTS */

          .msp-scale-aspects {
            padding: 20px 16px;

            border-radius: 11px;
          }

          .msp-scale-aspects-header {
            align-items: flex-start;

            padding-bottom: 13px;
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
            font-size: 12px;
            line-height: 1.35;
          }

          .msp-scale-point p {
            font-size: 9.5px;
            line-height: 1.52;
          }


          /* =====================================================
             ECOSYSTEM
          ===================================================== */

          .msp-ecosystem {
            padding: 48px 0 52px;
          }

          .msp-ecosystem-layout {
            gap: 27px;
          }

          .msp-ecosystem h2 {
            margin: 14px 0 12px;

            font-size: 30px;
            letter-spacing: -1px;
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
            padding: 13px 14px;
          }

          .msp-ecosystem-card-top {
            margin-bottom: 6px;
          }

          .msp-ecosystem-card h3 {
            font-size: 11px;
          }

          .msp-ecosystem-card p {
            font-size: 8.5px;
            line-height: 1.5;
          }


          /* =====================================================
             OPERATIONAL
          ===================================================== */

          .msp-operational {
            padding: 55px 0 60px;
          }

          .msp-operational-header {
            margin-bottom: 29px;
          }

          .msp-operational-header h2 {
            margin: 14px 0 10px;

            font-size: 30px;
            letter-spacing: -1px;
          }

          .msp-operational-header p {
            font-size: 10.5px;
            line-height: 1.65;
          }


          /* CTA */

          .msp-operational-cta {
            min-height: 260px;

            padding: 37px 19px 34px;

            border-radius: 13px;
          }

          .msp-operational-cta::after {
            width: 180px;
            height: 180px;

            right: -65px;
            top: -70px;
          }

          .msp-operational-cta h3 {
            margin-top: 14px;

            font-size: 26px;
          }

          .msp-operational-cta p {
            font-size: 10px;
            line-height: 1.6;
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

            min-height: 38px;

            font-size: 8px;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 380px) {

          .msp-wrapper {
            width: calc(100% - 22px);
          }

          .msp-scale-card {
            padding: 25px 16px;
          }

          .msp-scale-content h2 {
            font-size: 27px;
          }

          .msp-scale-subtitle {
            font-size: 12px;
          }

          .msp-scale-text {
            font-size: 10.5px;
          }

          .msp-scale-aspects {
            padding: 17px 13px;
          }

          .msp-scale-point h3 {
            font-size: 11px;
          }

          .msp-scale-point p {
            font-size: 9px;
          }

          .msp-ecosystem h2 {
            font-size: 27px;
          }

          .msp-operational-header h2 {
            font-size: 27px;
          }

          .msp-operational-cta {
            padding-left: 15px;
            padding-right: 15px;
          }

          .msp-operational-cta h3 {
            font-size: 24px;
          }

        }

      `}</style>


      {/* =========================================================
          SECTION 1
          SCALABILITY & GROWTH
      ========================================================= */}

      <section className="msp-scalability">

        <div className="msp-wrapper">

          <div className="msp-scale-card">

            <div className="msp-scale-layout">

              {/* LEFT */}

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
          SECTION 2
          HOLISTIC ECOSYSTEM
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
          SECTION 3
          OPERATIONAL EXCELLENCE
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

                <button className="msp-primary-btn"
                onClick={() => navigate("/connect-msp")}
                >
                  Connect With TechTorch
                  <ArrowRight />
                </button>

                <button className="msp-secondary-btn">
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