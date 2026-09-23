import React from "react";
import {
  ChevronRight,
  Target,
  PenTool,
  GraduationCap,
  Heart,
  FileCheck2,
  Check,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

/* =====================================================
   IMAGE PATH
   Put your image inside the public folder
   Example:
   public/education-team.png

   Then use:
   /education-team.png
===================================================== */

const EDUCATION_WORK_IMAGE = "/college.png";

const personas = [
  {
    icon: Target,
    title: "Leadership",
    body: "Strategic clarity for institutional planning and cross-campus governance.",
    variant: "filled",
  },
  {
    icon: PenTool,
    title: "Faculty",
    body: "Less administrative overhead and frictionless gradebook management.",
    iconBg: "#e8f3ef",
    iconColor: "#2f8768",
  },
  {
    icon: GraduationCap,
    title: "Students",
    body: "Unified access to assignments, degree progress, and advisor guidance.",
    iconBg: "#eaf3e3",
    iconColor: "#5f8f3e",
  },
  {
    icon: Heart,
    title: "Parents",
    body: "Transparent visibility into academic milestones and fee schedules.",
    iconBg: "#fbf1de",
    iconColor: "#c08a2e",
  },
  {
    icon: FileCheck2,
    title: "Registrars",
    body: "Automated compliance, rapid transcript delivery, and auditable records.",
    iconBg: "#e6eef6",
    iconColor: "#3b6ea5",
  },
];

const meansList = [
  "Fewer repetitive tasks",
  "Easier access to information",
  "Better coordination between teams",
  "More organized records",
  "Faster access to reports",
  "Clearer communication",
  "Greater visibility across operations",
];

function Eyebrow({ children }) {
  return (
    <div
      className="education-eyebrow"
      style={{ color: WINE }}
    >
      <ChevronRight
        size={14}
        strokeWidth={3}
      />

      <span>{children}</span>
    </div>
  );
}

export default function PeopleAndWorkSections() {
  return (
    <div
      className="people-work-section"
      style={{ color: INK }}
    >
      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN
        ===================================================== */

        .people-work-section {
          width: 100%;
          overflow: hidden;
          font-family: "Inter", sans-serif;
          background: #ffffff;
        }


        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .people-work-container {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          box-sizing: border-box;
        }


        /* =====================================================
           SECTION 1
        ===================================================== */

        .personas-section {
          background: #ffffff;
          padding-top: 80px;
          padding-bottom: 80px;
        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .education-eyebrow {
          display: flex;
          align-items: center;
          gap: 4px;

          margin-bottom: 16px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.06em;
        }


        /* =====================================================
           HEADINGS
           PLUS JAKARTA SANS
        ===================================================== */

        .people-work-heading {
          margin: 0;

          max-width: 620px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 38px;
          line-height: 1.15;

          font-weight: 700;

          letter-spacing: -0.7px;

          color: ${INK};
        }


        .people-work-subheading {
          margin: 16px 0 0;

          max-width: 620px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 17px;
          line-height: 1.6;

          font-weight: 500;

          color: ${MUTED};
        }


        /* =====================================================
           PERSONA GRID
        ===================================================== */

        .persona-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 16px;

          margin-top: 40px;
        }


        /* =====================================================
           PERSONA CARD
        ===================================================== */

        .persona-card {
          min-width: 0;

          padding: 20px;

          border:
            1px solid #ece9e4;

          border-radius: 12px;

          background: #ffffff;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }


        .persona-card:hover {
          transform:
            translateY(-4px);

          border-color:
            #e2d4d9;

          box-shadow:
            0 12px 28px
            rgba(0, 0, 0, 0.07);
        }


        /* =====================================================
           ICON
        ===================================================== */

        .persona-icon {
          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 16px;

          flex-shrink: 0;
        }


        .persona-icon-filled {
          border-radius: 50%;
          background: ${WINE};
          color: #ffffff;
        }


        .persona-icon-normal {
          border-radius: 8px;
        }


        /* =====================================================
           CARD HEADING
           INTER
        ===================================================== */

        .persona-title {
          margin: 0 0 8px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 14px;
          line-height: 1.4;

          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           CARD BODY
        ===================================================== */

        .persona-body {
          margin: 0;

          font-family:
            "Inter",
            sans-serif;

          font-size: 12px;
          line-height: 1.7;

          font-weight: 400;

          color: ${MUTED};
        }


        /* =====================================================
           SECTION 2
        ===================================================== */

        .manual-work-section {
          width: 100%;

          background: #f3f1ec;

          padding-top: 64px;
          padding-bottom: 64px;
        }


        .manual-work-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.3fr)
            minmax(0, 0.8fr);

          gap: 32px;

          align-items: start;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .education-work-image {
          width: 100%;

          height: 288px;

          display: block;

          object-fit: cover;

          object-position: center;

          border-radius: 16px;

          background: #e9e4e0;

          transition:
            transform 0.4s ease;
        }


        .education-work-image-wrapper {
          width: 100%;

          overflow: hidden;

          border-radius: 16px;

          background: #e9e4e0;
        }


        .education-work-image-wrapper:hover
        .education-work-image {
          transform:
            scale(1.025);
        }


        /* =====================================================
           SECTION 2 HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .manual-work-heading {
          margin: 0 0 16px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 30px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.5px;

          color: ${INK};
        }


        /* =====================================================
           SECTION 2 BODY
           INTER
        ===================================================== */

        .manual-work-body {
          margin: 0;

          font-family:
            "Inter",
            sans-serif;

          font-size: 15px;

          line-height: 1.75;

          font-weight: 400;

          color: ${MUTED};
        }


        .manual-work-body + .manual-work-body {
          margin-top: 20px;
        }


        /* =====================================================
           MEANS CARD
        ===================================================== */

        .means-card {
          padding: 20px;

          border-radius: 12px;

          background: #ffffff;

          box-sizing: border-box;
        }


        .means-title {
          margin: 0 0 16px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 12px;

          line-height: 1.4;

          font-weight: 700;

          letter-spacing: 0.06em;

          color: #8a8378;
        }


        /* =====================================================
           LIST
        ===================================================== */

        .means-list {
          display: flex;

          flex-direction: column;

          gap: 12px;

          margin: 0;

          padding: 0;

          list-style: none;
        }


        .means-item {
          display: flex;

          align-items: flex-start;

          gap: 8px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 13px;

          line-height: 1.5;

          font-weight: 400;

          color: ${INK};
        }


        .means-check {
          flex-shrink: 0;

          margin-top: 2px;

          color: ${WINE};
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .people-work-container {
            padding-left: 32px;
            padding-right: 32px;
          }


          .persona-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));
          }


          .manual-work-grid {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1.3fr);
          }


          .means-card {
            grid-column:
              1 / -1;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 767px) {

          .people-work-container {
            padding-left: 20px;
            padding-right: 20px;
          }


          .personas-section {
            padding-top: 56px;
            padding-bottom: 56px;
          }


          .manual-work-section {
            padding-top: 52px;
            padding-bottom: 52px;
          }


          .people-work-heading {
            font-size: 32px;

            line-height: 1.18;

            letter-spacing: -0.5px;
          }


          .people-work-subheading {
            font-size: 15px;

            line-height: 1.65;
          }


          .persona-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 12px;

            margin-top: 32px;
          }


          .persona-card {
            padding: 18px;
          }


          .manual-work-grid {
            grid-template-columns: 1fr;

            gap: 28px;
          }


          .education-work-image {
            height: 320px;
          }


          .manual-work-heading {
            font-size: 28px;

            line-height: 1.2;
          }


          .manual-work-body {
            font-size: 14px;

            line-height: 1.7;
          }


          .means-card {
            grid-column: auto;

            padding: 18px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .people-work-container {
            padding-left: 16px;
            padding-right: 16px;
          }


          .personas-section {
            padding-top: 48px;
            padding-bottom: 48px;
          }


          .manual-work-section {
            padding-top: 44px;
            padding-bottom: 44px;
          }


          .education-eyebrow {
            font-size: 10px;

            line-height: 1.5;

            margin-bottom: 12px;
          }


          .people-work-heading {
            font-size: 27px;

            line-height: 1.2;
          }


          .people-work-subheading {
            margin-top: 12px;

            font-size: 14px;
          }


          .persona-grid {
            grid-template-columns: 1fr;

            gap: 10px;

            margin-top: 28px;
          }


          .persona-card {
            display: grid;

            grid-template-columns: auto 1fr;

            column-gap: 12px;

            padding: 15px;
          }


          .persona-icon {
            grid-row:
              1 / span 2;

            margin-bottom: 0;

            width: 40px;
            height: 40px;
          }


          .persona-title {
            margin-bottom: 4px;

            font-size: 13px;
          }


          .persona-body {
            font-size: 11.5px;

            line-height: 1.6;
          }


          .education-work-image {
            height: 260px;

            border-radius: 14px;
          }


          .education-work-image-wrapper {
            border-radius: 14px;
          }


          .manual-work-heading {
            font-size: 25px;

            line-height: 1.22;
          }


          .manual-work-body {
            font-size: 13.5px;

            line-height: 1.7;
          }


          .means-card {
            padding: 16px;
          }


          .means-item {
            font-size: 12px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .people-work-container {
            padding-left: 14px;
            padding-right: 14px;
          }


          .people-work-heading {
            font-size: 25px;
          }


          .manual-work-heading {
            font-size: 23px;
          }


          .education-work-image {
            height: 235px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .persona-card,
          .education-work-image {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          SECTION 1
      ===================================================== */}

      <section className="personas-section">

        <div className="people-work-container">

          <Eyebrow>
            TECHNOLOGY FOR THE PEOPLE BEHIND EDUCATION
          </Eyebrow>

          <h2 className="people-work-heading">
            Better experiences start with understanding every user.
          </h2>

          <p className="people-work-subheading">
            An education platform is only useful when it works well for the
            people using it.
          </p>


          {/* PERSONA CARDS */}

          <div className="persona-grid">

            {personas.map(
              ({
                icon: Icon,
                title,
                body,
                variant,
                iconBg,
                iconColor,
              }) => (

                <div
                  key={title}
                  className="persona-card"
                >

                  {variant === "filled" ? (

                    <span
                      className="
                        persona-icon
                        persona-icon-filled
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                  ) : (

                    <span
                      className="
                        persona-icon
                        persona-icon-normal
                      "
                      style={{
                        background: iconBg,
                        color: iconColor,
                      }}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.8}
                      />
                    </span>

                  )}


                  <h3 className="persona-title">
                    {title}
                  </h3>

                  <p className="persona-body">
                    {body}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2
      ===================================================== */}

      <section className="manual-work-section">

        <div
          className="
            people-work-container
            manual-work-grid
          "
        >

          {/* IMAGE */}

          <div className="education-work-image-wrapper">

            <img
              src={EDUCATION_WORK_IMAGE}
              alt="Two colleagues reviewing records"
              className="education-work-image"
            />

          </div>


          {/* COPY */}

          <div>

            <Eyebrow>
              LESS MANUAL WORK, MORE MEANINGFUL WORK
            </Eyebrow>

            <h2 className="manual-work-heading">
              Give your teams more time for what matters.
            </h2>

            <p className="manual-work-body">
              Manual processes often become part of an institution simply
              because they have always been there. But as an organization
              grows, repeated data entry, paper-based records, scattered
              files and separate systems can consume valuable time.
            </p>

            <p className="manual-work-body">
              TechTorch helps identify where technology can remove
              unnecessary steps and create simpler workflows.
            </p>

          </div>


          {/* THIS CAN MEAN */}

          <div className="means-card">

            <p className="means-title">
              THIS CAN MEAN:
            </p>

            <ul className="means-list">

              {meansList.map((item) => (

                <li
                  key={item}
                  className="means-item"
                >

                  <Check
                    size={15}
                    className="means-check"
                  />

                  <span>
                    {item}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}