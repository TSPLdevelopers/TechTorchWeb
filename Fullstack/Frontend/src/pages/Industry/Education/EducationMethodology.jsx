import React from "react";
import {
  ChevronRight,
  Headphones,
  Search,
  Compass,
  Rocket,
  TrendingUp,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

/* =====================================================
   IMAGE PATHS
===================================================== */

const INSTITUTION_IMAGES = {
  schools: "/Education2.png",
  colleges: "/college.png",
  universities: "/rrmain.png",
  multiCampus: "/campus.png",
};

/* =====================================================
   METHODOLOGY STEPS
===================================================== */

const steps = [
  {
    num: "01",
    stage: "DISCOVERY",
    icon: Headphones,
    title: "Listen",
    body:
      "Engage campus leaders, educators, and administrators to uncover nuanced daily pain points and operational aspirations.",
    bullets: ["Stakeholder Discovery", "Pain-Point Mapping"],
  },
  {
    num: "02",
    stage: "DEEP-DIVE",
    icon: Search,
    title: "Understand",
    body:
      "Audit existing databases, legacy spreadsheets, and siloed software to map true departmental dependencies and compliance needs.",
    bullets: ["Workflow Analysis", "Data Interoperability"],
  },
  {
    num: "03",
    stage: "ARCHITECTURE",
    icon: Compass,
    title: "Design",
    body:
      "Architect unified data models and intuitive user journeys configured specifically around your academic calendar and governance.",
    bullets: ["Tailored Architecture", "User Journeys"],
  },
  {
    num: "04",
    stage: "DEPLOYMENT",
    icon: Rocket,
    title: "Implement",
    body:
      "Execute controlled phased migrations with parallel testing and high-touch staff enablement for immediate trust and comfort.",
    bullets: ["Phased Migration", "Staff Training"],
  },
  {
    num: "05",
    stage: "MOMENTUM",
    icon: TrendingUp,
    title: "Evolve",
    body:
      "Continuous performance reviews, automated updates, and capability expansions as campus demographics and pedagogy expand.",
    bullets: ["AI Optimization", "Long-Term Scaling"],
  },
];

/* =====================================================
   INSTITUTIONS
===================================================== */

const institutions = [
  {
    label: "Schools",
    body:
      "Support academics, attendance, communication and everyday classroom operations.",
    image: INSTITUTION_IMAGES.schools,
    alt: "Students working at a school library",
  },
  {
    label: "Colleges",
    body:
      "Manage academic and administrative requirements, registration, and courses with ease.",
    image: INSTITUTION_IMAGES.colleges,
    alt: "College students studying together",
  },
  {
    label: "Universities",
    body:
      "Connect multiple departments, research functions and complex academic structures.",
    image: INSTITUTION_IMAGES.universities,
    alt: "University laboratory and lecture environment",
  },
  {
    label: "Multi-Campus Institutions",
    body:
      "Bring centralized visibility and synchronized coordination across all regional locations.",
    image: INSTITUTION_IMAGES.multiCampus,
    alt: "Students walking through a university campus",
  },
];

/* =====================================================
   EYEBROW
===================================================== */

function Eyebrow({ children }) {
  return (
    <div className="methodology-eyebrow">
      <ChevronRight size={12} strokeWidth={3} />
      <span>{children}</span>
    </div>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function MethodologyAndInstitutionsSections() {
  return (
    <div className="methodology-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =====================================================
           MAIN
        ===================================================== */

        .methodology-page {
          width: 100%;
          overflow: hidden;
          font-family: "Inter", sans-serif;
          color: ${INK};
        }

        /* =====================================================
           COMMON CONTAINER

           DESKTOP  : 100px
           TABLET   : 40px
           MOBILE   : 24px
           SMALL    : 16px
        ===================================================== */

        .methodology-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          box-sizing: border-box;
        }

        /* =====================================================
           EYEBROW
           INTER
        ===================================================== */

        .methodology-eyebrow {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: 0.06em;

          color: ${WINE};
        }

        /* =====================================================
           HEADINGS
           PLUS JAKARTA SANS
        ===================================================== */

        .methodology-heading,
        .institutions-heading {
          margin: 0;
          max-width: 760px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.7px;

          color: ${INK};
        }

        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .methodology-subheading {
          margin: 16px 0 0;
          max-width: 760px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;

          color: ${MUTED};
        }

        /* =====================================================
           METHODOLOGY SECTION
        ===================================================== */

        .methodology-section {
          width: 100%;
          background: #f4f1ec;
          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           STEPS GRID
        ===================================================== */

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          margin-top: 40px;
        }

        /* =====================================================
           STEP CARD
        ===================================================== */

        .step-card {
          min-width: 0;
          display: flex;
          flex-direction: column;

          padding: 20px;
          border-radius: 12px;

          background: #ffffff;

          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }

        /* =====================================================
           STEP TOP
        ===================================================== */

        .step-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .step-number {
          width: 28px;
          height: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
        }

        .step-stage {
          padding: 5px 8px;
          border-radius: 999px;

          background: #fbeef1;
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        /* =====================================================
           STEP ICON
        ===================================================== */

        .step-icon {
          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 16px;

          border-radius: 8px;

          background: #fbeef1;
          color: ${WINE};
        }

        /* =====================================================
           STEP TITLE
        ===================================================== */

        .step-title {
          margin: 0 0 8px;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;

          color: ${INK};
        }

        /* =====================================================
           STEP BODY
        ===================================================== */

        .step-body {
          margin: 0 0 16px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;

          color: ${MUTED};
        }

        /* =====================================================
           BULLETS
        ===================================================== */

        .step-bullets {
          display: flex;
          flex-direction: column;
          gap: 7px;

          margin-top: auto;
          padding: 0;

          list-style: none;
        }

        .step-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.5;

          color: ${MUTED};
        }

        .step-bullet-dot {
          width: 4px;
          height: 4px;

          flex-shrink: 0;
          margin-top: 6px;

          border-radius: 50%;
          background: ${WINE};
        }

        /* =====================================================
           INSTITUTIONS SECTION
        ===================================================== */

        .institutions-section {
          width: 100%;
          background: #ffffff;

          padding-top: 80px;
          padding-bottom: 80px;
        }

        /* =====================================================
           INSTITUTIONS GRID
        ===================================================== */

        .institutions-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 20px;
          margin-top: 40px;
        }

        /* =====================================================
           INSTITUTION CARD
        ===================================================== */

        .institution-card {
          min-width: 0;
          overflow: hidden;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .institution-image-wrapper {
          width: 100%;
          height: 180px;

          margin-bottom: 16px;
          overflow: hidden;

          border-radius: 12px;

          background: #e9e4e0;
        }

        .institution-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          transition: transform 0.4s ease;
        }

        .institution-card:hover .institution-image {
          transform: scale(1.04);
        }

        /* =====================================================
           INSTITUTION TITLE
        ===================================================== */

        .institution-title {
          margin: 0 0 8px;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;

          color: ${INK};
        }

        /* =====================================================
           INSTITUTION BODY
        ===================================================== */

        .institution-body {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;

          color: ${MUTED};
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1440px) {
          .methodology-container {
            padding-left: 100px;
            padding-right: 100px;
          }

          .steps-grid {
            gap: 20px;
          }

          .step-card {
            padding: 22px;
          }

          .methodology-heading,
          .institutions-heading {
            font-size: 42px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) and (max-width: 1100px) {
          .methodology-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .methodology-section,
          .institutions-section {
            padding-top: 64px;
            padding-bottom: 64px;
          }

          .methodology-heading,
          .institutions-heading {
            font-size: 36px;
          }

          .methodology-subheading {
            font-size: 15px;
          }

          .steps-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }

          .institutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .institution-image-wrapper {
            height: 190px;
          }
        }

        /* =====================================================
           MOBILE / TABLET
        ===================================================== */

        @media (max-width: 767px) {
          .methodology-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .methodology-section,
          .institutions-section {
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .methodology-heading,
          .institutions-heading {
            font-size: 32px;
            line-height: 1.18;
            letter-spacing: -0.5px;
          }

          .methodology-subheading {
            margin-top: 14px;
            font-size: 14px;
            line-height: 1.7;
          }

          .steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: 32px;
          }

          .step-card {
            padding: 18px;
          }

          .step-top {
            margin-bottom: 16px;
          }

          .step-title {
            font-size: 14px;
          }

          .step-body {
            font-size: 12px;
            line-height: 1.65;
          }

          .institutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
            margin-top: 32px;
          }

          .institution-image-wrapper {
            height: 170px;
          }

          .institution-title {
            font-size: 14px;
          }

          .institution-body {
            font-size: 12px;
            line-height: 1.65;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .methodology-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .methodology-section,
          .institutions-section {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .methodology-eyebrow {
            margin-bottom: 12px;
            font-size: 10px;
            letter-spacing: 0.045em;
          }

          .methodology-heading,
          .institutions-heading {
            font-size: 27px;
            line-height: 1.2;
          }

          .methodology-subheading {
            margin-top: 12px;
            font-size: 13px;
            line-height: 1.7;
          }

          /* One card per row on small mobile */
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 28px;
          }

          .step-card {
            padding: 17px;
          }

          .step-body {
            font-size: 12px;
            line-height: 1.65;
          }

          /* One institution per row */
          .institutions-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-top: 28px;
          }

          .institution-image-wrapper {
            height: 210px;
            border-radius: 14px;
            margin-bottom: 14px;
          }

          .institution-title {
            font-size: 14px;
          }

          .institution-body {
            font-size: 12.5px;
            line-height: 1.7;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {
          .methodology-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .methodology-heading,
          .institutions-heading {
            font-size: 25px;
          }

          .institution-image-wrapper {
            height: 190px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .step-card,
          .institution-image {
            transition: none;
          }
        }
      `}</style>

      {/* =====================================================
          SECTION 1: METHODOLOGY
      ===================================================== */}

      <section className="methodology-section">
        <div className="methodology-container">

          <Eyebrow>
            OUR METHODOLOGY &amp; DELIVERY FRAMEWORK
          </Eyebrow>

          <h2 className="methodology-heading">
            We start with your institution, not a software checklist.
          </h2>

          <p className="methodology-subheading">
            A predictable, collaborative methodology engineered to modernize
            institutional processes with zero disruption to daily academic
            life.
          </p>

          <div className="steps-grid">
            {steps.map(
              ({
                num,
                stage,
                icon: Icon,
                title,
                body,
                bullets,
              }) => (
                <div
                  key={num}
                  className="step-card"
                >
                  <div className="step-top">
                    <span className="step-number">
                      {num}
                    </span>

                    <span className="step-stage">
                      {stage}
                    </span>
                  </div>

                  <span className="step-icon">
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h3 className="step-title">
                    {title}
                  </h3>

                  <p className="step-body">
                    {body}
                  </p>

                  <ul className="step-bullets">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="step-bullet"
                      >
                        <span className="step-bullet-dot" />

                        <span>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 2: INSTITUTIONS
      ===================================================== */}

      <section className="institutions-section">
        <div className="methodology-container">

          <Eyebrow>
            SOLUTIONS FOR DIFFERENT EDUCATIONAL ENVIRONMENTS
          </Eyebrow>

          <h2 className="institutions-heading">
            Different institutions. Different priorities.
          </h2>

          <div className="institutions-grid">
            {institutions.map(
              ({
                label,
                body,
                image,
                alt,
              }) => (
                <div
                  key={label}
                  className="institution-card"
                >
                  <div className="institution-image-wrapper">
                    <img
                      src={image}
                      alt={alt}
                      className="institution-image"
                    />
                  </div>

                  <h3 className="institution-title">
                    {label}
                  </h3>

                  <p className="institution-body">
                    {body}
                  </p>
                </div>
              )
            )}
          </div>

        </div>
      </section>
    </div>
  );
}