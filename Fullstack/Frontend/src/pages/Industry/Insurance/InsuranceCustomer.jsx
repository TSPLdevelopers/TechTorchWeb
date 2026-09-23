import React from "react";
import {
  Smartphone,
  ShieldCheck,
  FileText,
  Undo2,
  Link2,
  Maximize2,
  Search,
  ClipboardList,
  Code2,
  Check,
  Globe,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const experienceFeatures = [
  {
    icon: Undo2,
    title: "Accessible",
    body: "Make digital information and services easier to access.",
  },
  {
    icon: Link2,
    title: "Connected",
    body: "Bring relevant customer and business information together.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    body: "Develop applications that provide consistent experiences across devices.",
  },
  {
    icon: Maximize2,
    title: "Scalable",
    body: "Create digital platforms that can evolve with business requirements.",
  },
];

const phases = [
  {
    icon: Search,
    phase: "01 · DISCOVERY",
    title: "Understand",
    body: "Analyze business requirements, existing processes and challenges.",
    footer: "Phase 01",
  },
  {
    icon: ClipboardList,
    phase: "02 · BLUEPRINT",
    title: "Plan",
    body: "Define the solution architecture and implementation approach.",
    footer: "Phase 02",
  },
  {
    icon: Code2,
    phase: "03 · BUILD",
    title: "Develop",
    body: "Build, configure and integrate the required solutions and systems.",
    footer: "Phase 03",
  },
  {
    icon: Check,
    phase: "04 · RELEASE",
    title: "Deploy",
    body: "Test and implement the solution with a focus on reliability and stability.",
    footer: "Phase 04",
  },
  {
    icon: Globe,
    phase: "05 · LIFECYCLE",
    title: "Support",
    body: "Provide ongoing maintenance and technical assistance.",
    footer: "Phase 05",
  },
];

function Pill({ children }) {
  return (
    <span className="digital-pill">
      <span className="digital-pill-dot" />
      {children}
    </span>
  );
}

export default function DigitalExperienceAndApproachSections() {
  return (
    <section className="digital-experience-section">
      <style>{`
        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .digital-experience-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }


        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .digital-main-container {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding: 75px 24px 85px;
          box-sizing: border-box;
        }


        /* =====================================================
           SECTION 1
        ===================================================== */

        .digital-experience-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);
          gap: 58px;
          align-items: center;
        }


        /* =====================================================
           IMAGE AREA
        ===================================================== */

        .digital-image-area {
          position: relative;
          width: 100%;
          min-width: 0;
          padding: 0 24px 22px 0;
          box-sizing: border-box;
        }


        .digital-main-image {
          width: 100%;
          height: 390px;
          display: block;
          object-fit: cover;
          object-position: center;
          border-radius: 18px;
          background: #e2e5e7;
        }


        /* =====================================================
           FLOATING ICON CARD
        ===================================================== */

        .digital-icon-stack {
          position: absolute;
          top: 25px;
          left: 25px;

          display: flex;
          flex-direction: column;
          gap: 8px;

          padding: 9px;

          border-radius: 12px;
          background: #ffffff;

          box-shadow:
            0 10px 28px rgba(0, 0, 0, 0.10);

          z-index: 2;
        }


        .digital-icon-box {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background: #fbeef1;
          color: ${WINE};
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .digital-content {
          min-width: 0;
        }


        /* =====================================================
           PILL
        ===================================================== */

        .digital-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 18px;
          padding: 6px 11px;

          border-radius: 999px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.06em;
        }


        .digital-pill-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;
          background: ${WINE};
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .digital-heading {
          max-width: 600px;

          margin: 0 0 18px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 36px;
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: -0.8px;

          color: ${INK};
        }


        .digital-heading-highlight {
          color: ${WINE};
        }


        /* =====================================================
           BODY TEXT
           INTER
        ===================================================== */

        .digital-description {
          max-width: 590px;

          margin: 0 0 13px;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          line-height: 1.72;
          font-weight: 400;

          color: ${MUTED};
        }


        .digital-description:last-of-type {
          margin-bottom: 30px;
        }


        /* =====================================================
           EXPERIENCE FEATURES
        ===================================================== */

        .digital-features-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          column-gap: 28px;
          row-gap: 24px;
        }


        .digital-feature {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-width: 0;
        }


        .digital-feature-icon {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
          color: #ffffff;
        }


        .digital-feature-content {
          min-width: 0;
        }


        .digital-feature-title {
          margin: 0 0 5px;

          font-family: "Inter", sans-serif;

          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;

          color: ${INK};
        }


        .digital-feature-body {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          line-height: 1.65;

          color: ${MUTED};
        }


        /* =====================================================
           APPROACH SECTION
        ===================================================== */

        .approach-section {
          margin-top: 10px;
        }


        .approach-header {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 48px;

          align-items: start;

          margin-bottom: 45px;
        }


        .approach-header-left {
          min-width: 0;
        }


        .approach-header-right {
          min-width: 0;
          padding-top: 7px;
        }


        /* =====================================================
           APPROACH HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .approach-heading {
          max-width: 580px;

          margin: 0;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 36px;
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: -0.8px;

          color: ${INK};
        }


        .approach-heading-highlight {
          color: ${WINE};
        }


        /* =====================================================
           APPROACH DESCRIPTION
           INTER
        ===================================================== */

        .approach-description {
          max-width: 560px;

          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          line-height: 1.72;
          font-weight: 400;

          color: ${MUTED};
        }


        /* =====================================================
           PHASES GRID
        ===================================================== */

        .phases-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 16px;
        }


        /* =====================================================
           PHASE CARD
        ===================================================== */

        .phase-card {
          min-width: 0;

          min-height: 245px;

          display: flex;
          flex-direction: column;

          padding: 19px;

          box-sizing: border-box;

          border: 1px solid #ece9e4;
          border-radius: 12px;

          background: #ffffff;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }


        .phase-card:hover {
          transform: translateY(-3px);

          border-color: #e2d8dc;

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.06);
        }


        /* =====================================================
           PHASE TOP
        ===================================================== */

        .phase-top {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 20px;

          min-width: 0;
        }


        .phase-icon {
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 8px;

          background: #fbeef1;
          color: ${WINE};
        }


        .phase-label {
          min-width: 0;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.04em;

          color: ${WINE};
        }


        /* =====================================================
           PHASE TITLE
           PLUS JAKARTA SANS
        ===================================================== */

        .phase-title {
          margin: 0 0 8px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           PHASE BODY
           INTER
        ===================================================== */

        .phase-body {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          line-height: 1.65;

          color: ${MUTED};
        }


        /* =====================================================
           PHASE FOOTER
        ===================================================== */

        .phase-footer {
          margin-top: auto;

          padding-top: 13px;

          border-top: 1px solid #ece9e4;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          line-height: 1.4;
          font-weight: 500;

          color: #a29b8f;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .digital-main-container {
            padding:
              68px 32px 75px;
          }


          .digital-experience-grid {
            gap: 42px;
          }


          .digital-main-image {
            height: 350px;
          }


          .digital-heading {
            font-size: 33px;
          }


          .approach-heading {
            font-size: 33px;
          }


          .phases-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 17px;
          }


          .phase-card {
            min-height: 225px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .digital-main-container {
            padding:
              60px 24px 70px;
          }


          .digital-experience-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }


          .digital-image-area {
            max-width: 700px;

            margin: 0 auto;

            padding-right: 25px;
          }


          .digital-main-image {
            height: 390px;
          }


          .digital-content {
            max-width: 700px;

            margin: 0 auto;
          }


          .digital-heading {
            font-size: 34px;
          }


          .digital-description {
            max-width: 700px;
          }


          .approach-header {
            grid-template-columns: 1fr;

            gap: 20px;

            margin-bottom: 38px;
          }


          .approach-header-right {
            padding-top: 0;
          }


          .approach-heading {
            font-size: 34px;
          }


          .approach-description {
            max-width: 700px;
          }


          .phases-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 17px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .digital-main-container {
            padding:
              50px 20px 58px;
          }


          .digital-experience-grid {
            gap: 45px;
          }


          .digital-image-area {
            padding:
              0 16px 18px 0;
          }


          .digital-main-image {
            height: 300px;

            border-radius: 15px;
          }


          .digital-icon-stack {
            top: 18px;
            left: 18px;

            gap: 6px;

            padding: 7px;

            border-radius: 10px;
          }


          .digital-icon-box {
            width: 30px;
            height: 30px;

            border-radius: 7px;
          }


          .digital-icon-box svg {
            width: 13px;
            height: 13px;
          }


          .digital-pill {
            margin-bottom: 14px;

            padding:
              5px 10px;

            font-size: 8px;
          }


          .digital-pill-dot {
            width: 5px;
            height: 5px;
          }


          .digital-heading {
            margin-bottom: 16px;

            font-size: 29px;

            line-height: 1.18;

            letter-spacing: -0.5px;
          }


          .digital-description {
            font-size: 13px;

            line-height: 1.7;

            margin-bottom: 11px;
          }


          .digital-description:last-of-type {
            margin-bottom: 25px;
          }


          .digital-features-grid {
            grid-template-columns: 1fr;

            gap: 20px;
          }


          .digital-feature {
            gap: 10px;
          }


          .digital-feature-icon {
            width: 34px;
            height: 34px;
          }


          .digital-feature-icon svg {
            width: 15px;
            height: 15px;
          }


          .digital-feature-title {
            font-size: 13px;
          }


          .digital-feature-body {
            font-size: 11.5px;

            line-height: 1.65;
          }


          /* APPROACH */

          .approach-section {
            margin-top: 0;
          }


          .approach-header {
            gap: 17px;

            margin-bottom: 30px;
          }


          .approach-heading {
            font-size: 29px;

            line-height: 1.18;

            letter-spacing: -0.5px;
          }


          .approach-description {
            font-size: 13px;

            line-height: 1.7;
          }


          .phases-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }


          .phase-card {
            min-height: auto;

            padding: 20px;

            border-radius: 11px;
          }


          .phase-top {
            margin-bottom: 17px;
          }


          .phase-title {
            font-size: 15px;
          }


          .phase-body {
            font-size: 11.5px;

            line-height: 1.65;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .digital-main-container {
            padding:
              42px 16px 50px;
          }


          .digital-image-area {
            padding-right: 10px;
          }


          .digital-main-image {
            height: 260px;
          }


          .digital-icon-stack {
            top: 14px;
            left: 14px;
          }


          .digital-heading {
            font-size: 26px;

            line-height: 1.18;
          }


          .digital-description {
            font-size: 12px;

            line-height: 1.68;
          }


          .digital-feature-body {
            font-size: 11px;
          }


          .approach-heading {
            font-size: 26px;
          }


          .approach-description {
            font-size: 12px;
          }


          .phase-card {
            padding: 18px;
          }


          .phase-title {
            font-size: 14px;
          }


          .phase-body {
            font-size: 11px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .digital-main-image {
            height: 235px;
          }


          .digital-heading {
            font-size: 24px;
          }


          .approach-heading {
            font-size: 24px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .phase-card {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="digital-main-container">


        {/* ===================================================
            SECTION 1
        =================================================== */}

        <div className="digital-experience-grid">


          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="digital-image-area">

            <img
              src="/DevelopmentTeam.png"
              alt="Digital customer experience"
              className="digital-main-image"
            />


            {/* FLOATING ICONS */}

            <div className="digital-icon-stack">

              {[Smartphone, ShieldCheck, FileText].map(
                (Icon, index) => (
                  <span
                    key={index}
                    className="digital-icon-box"
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                    />
                  </span>
                )
              )}

            </div>

          </div>


          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="digital-content">

            <Pill>
              DIGITAL CUSTOMER EXPERIENCE
            </Pill>


            <h2 className="digital-heading">

              Create Consistent{" "}

              <span className="digital-heading-highlight">
                Digital Experiences
              </span>

            </h2>


            <p className="digital-description">

              Customers increasingly interact with businesses
              through digital channels. These interactions need to
              be supported by reliable applications, accessible
              information and well-connected systems.

            </p>


            <p className="digital-description">

              TechTorch helps organizations develop digital
              platforms and applications that support both
              customer-facing experiences and internal business
              operations.

            </p>


            {/* FEATURES */}

            <div className="digital-features-grid">

              {experienceFeatures.map(
                ({
                  icon: Icon,
                  title,
                  body,
                }) => (

                  <div
                    key={title}
                    className="digital-feature"
                  >

                    <span className="digital-feature-icon">

                      <Icon
                        size={16}
                        strokeWidth={1.8}
                      />

                    </span>


                    <div className="digital-feature-content">

                      <h3 className="digital-feature-title">
                        {title}
                      </h3>

                      <p className="digital-feature-body">
                        {body}
                      </p>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>


        {/* ===================================================
            SECTION 2 — OUR APPROACH
        =================================================== */}

        <div className="approach-section">


          {/* APPROACH HEADER */}

          <div className="approach-header">


            {/* LEFT */}

            <div className="approach-header-left">

              <Pill>
                OUR APPROACH
              </Pill>


              <h2 className="approach-heading">

                From Business Requirements

                <br />

                <span className="approach-heading-highlight">
                  to Technology
                </span>

              </h2>

            </div>


            {/* RIGHT */}

            <div className="approach-header-right">

              <p className="approach-description">

                We start with your business requirements and build
                the technology approach around them.

              </p>

            </div>

          </div>


          {/* =================================================
              PHASE CARDS
          ================================================= */}

          <div className="phases-grid">

            {phases.map(
              ({
                icon: Icon,
                phase,
                title,
                body,
                footer,
              }) => (

                <div
                  key={title}
                  className="phase-card"
                >


                  {/* TOP */}

                  <div className="phase-top">

                    <span className="phase-icon">

                      <Icon
                        size={15}
                        strokeWidth={1.8}
                      />

                    </span>


                    <span className="phase-label">
                      {phase}
                    </span>

                  </div>


                  {/* TITLE */}

                  <h3 className="phase-title">
                    {title}
                  </h3>


                  {/* BODY */}

                  <p className="phase-body">
                    {body}
                  </p>


                  {/* FOOTER */}

                  <p className="phase-footer">
                    {footer}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}