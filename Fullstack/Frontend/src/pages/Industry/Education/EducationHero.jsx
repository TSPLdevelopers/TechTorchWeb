import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Landmark,
  Users,
} from "lucide-react";

const WINE = "#7A1F3D";
const WINE_DARK = "#5C1730";
const INK = "#1B1B2A";

const IMAGE_1_URL = "/Educationhelp.png";
const IMAGE_2_URL = "/Education2.png";

/* =====================================================
   EYEBROW
===================================================== */

function Eyebrow({ children }) {
  return (
    <div className="education-eyebrow">
      <ChevronRight size={14} strokeWidth={3} />
      <span>{children}</span>
    </div>
  );
}

/* =====================================================
   IMAGE
===================================================== */

function EducationImage({ src, alt }) {
  return (
    <div className="education-image-wrapper">
      <img src={src} alt={alt} className="education-image" />
    </div>
  );
}

/* =====================================================
   ROLE CARDS
===================================================== */

const roleCards = [
  {
    label: "Students",
    icon: GraduationCap,
  },
  {
    label: "Faculty",
    icon: Briefcase,
  },
  {
    label: "Administration",
    icon: Landmark,
  },
  {
    label: "Parents",
    icon: Users,
  },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function EducationSection() {
  const navigate = useNavigate();

  return (
    <section
      className="education-section"
      style={{
        background: "#faf8f6",
        color: INK,
      }}
    >
      <style>{`

        /* =====================================================
           GOOGLE FONTS
        ===================================================== */

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .education-section {
          width: 100%;
          overflow: hidden;
          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .education-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;
        }


        /* =====================================================
           GRID
        ===================================================== */

        .education-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 64px;
          align-items: center;
        }

        .education-grid + .education-grid {
          margin-top: 120px;
        }


        /* =====================================================
           EYEBROW
           INTER
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

          color: ${WINE};
        }


        /* =====================================================
           MAIN HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .education-main-heading {
          margin: 0 0 20px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 44px;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -0.8px;

          color: ${INK};
        }


        /* =====================================================
           SECOND HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .education-secondary-heading {
          margin: 0 0 20px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.7px;

          color: ${INK};
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .education-subheading {
          margin: 0 0 16px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.55;
          font-weight: 600;

          color: ${WINE};
        }


        /* =====================================================
           BODY TEXT
           INTER
        ===================================================== */

        .education-body {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 400;

          color: #5b5a63;
        }

        .education-body + .education-body {
          margin-top: 20px;
        }


        /* =====================================================
           BUTTONS
           INTER
        ===================================================== */

        .education-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
        }

        .education-primary-button,
        .education-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          min-height: 44px;
          padding: 12px 20px;

          border-radius: 6px;

          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;

          cursor: pointer;
          transition: all 0.25s ease;
        }

        .education-primary-button {
          border: none;
          background: ${WINE};
          color: #ffffff;
        }

        .education-primary-button:hover {
          background: ${WINE_DARK};
          transform: translateY(-2px);
        }

        .education-secondary-button {
          border: 1px solid #d8d5d0;
          background: transparent;
          color: ${INK};
        }

        .education-secondary-button:hover {
          border-color: ${WINE};
          background: #fffafb;
        }


        /* =====================================================
           IMAGE AREA
        ===================================================== */

        .education-image-area {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .education-image-wrapper {
          position: relative;
          width: 100%;
          height: 390px;

          overflow: hidden;
          border-radius: 24px;

          background: #e9e4e0;
        }

        .education-image {
          display: block;
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          transition: transform 0.5s ease;
        }

        .education-image-wrapper:hover .education-image {
          transform: scale(1.025);
        }


        /* =====================================================
           FLOATING STAT CARD
           INTER
        ===================================================== */

        .education-stat-card {
          position: absolute;
          right: 32px;
          bottom: -24px;

          display: flex;
          align-items: center;
          gap: 12px;

          width: 240px;
          max-width: calc(100% - 32px);

          padding: 14px 16px;
          box-sizing: border-box;

          background: #ffffff;
          border-radius: 12px;

          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .education-stat-icon {
          flex-shrink: 0;
          color: ${WINE};
        }

        .education-stat-title {
          margin: 0 0 4px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;

          color: ${INK};
        }

        .education-stat-text {
          margin: 0;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.45;

          color: #8a8378;
        }

        .education-stat-text strong {
          color: ${INK};
          font-weight: 700;
        }


        /* =====================================================
           ROLE CARD
           INTER
        ===================================================== */

        .education-role-card {
          position: absolute;
          top: 24px;
          left: 24px;

          width: 176px;
          padding: 8px;
          box-sizing: border-box;

          background: #ffffff;
          border-radius: 12px;

          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        }

        .education-role-item {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 8px;
          border-radius: 8px;

          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 500;

          color: ${INK};
        }

        .education-role-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 6px;

          background: #fbeef1;
          color: ${WINE};
        }


        /* =====================================================
           INFO BOX
           INTER
        ===================================================== */

        .education-info-box {
          margin-top: 28px;
          padding: 16px 20px;

          border-left: 4px solid ${WINE};
          border-radius: 8px;

          background: #fdf1f3;
          color: ${INK};

          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 400;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1200px) {

          .education-container {
            padding: 72px 60px;
          }

          .education-grid {
            gap: 48px;
          }

          .education-main-heading {
            font-size: 40px;
          }

          .education-secondary-heading {
            font-size: 34px;
          }

          .education-image-wrapper {
            height: 360px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1024px) {

          .education-container {
            padding: 64px 40px;
          }

          .education-grid {
            gap: 40px;
          }

          .education-grid + .education-grid {
            margin-top: 90px;
          }

          .education-main-heading {
            font-size: 36px;
          }

          .education-secondary-heading {
            font-size: 31px;
          }

          .education-subheading {
            font-size: 16px;
          }

          .education-body {
            font-size: 14px;
          }

          .education-image-wrapper {
            height: 330px;
          }

          .education-stat-card {
            right: 20px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .education-container {
            padding: 56px 24px;
          }

          .education-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .education-grid + .education-grid {
            margin-top: 80px;
          }


          /* Second section image first */
          .education-grid-reverse .education-image-area {
            order: 1;
          }

          .education-grid-reverse .education-content {
            order: 2;
          }


          .education-eyebrow {
            margin-bottom: 14px;
            font-size: 11px;
          }


          /* Plus Jakarta Sans */
          .education-main-heading {
            font-size: 32px;
            line-height: 1.15;
            letter-spacing: -0.5px;
            margin-bottom: 16px;
          }

          .education-secondary-heading {
            font-size: 29px;
            line-height: 1.2;
            letter-spacing: -0.5px;
            margin-bottom: 16px;
          }

          .education-subheading {
            font-size: 15px;
            line-height: 1.55;
            margin-bottom: 14px;
          }


          /* Inter */
          .education-body {
            font-size: 14px;
            line-height: 1.7;
          }


          .education-buttons {
            margin-top: 26px;
            gap: 10px;
          }

          .education-primary-button,
          .education-secondary-button {
            padding: 11px 16px;
            font-size: 13px;
          }


          .education-image-wrapper {
            height: 320px;
            border-radius: 20px;
          }


          .education-stat-card {
            right: 16px;
            bottom: -20px;

            width: 225px;
            padding: 12px 14px;
          }


          .education-role-card {
            top: 16px;
            left: 16px;
            width: 165px;
          }

          .education-role-item {
            padding: 7px;
            font-size: 11px;
          }


          .education-info-box {
            margin-top: 24px;
            padding: 14px 16px;
            font-size: 13px;
            line-height: 1.65;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .education-container {
            padding: 48px 16px;
          }

          .education-grid {
            gap: 36px;
          }

          .education-grid + .education-grid {
            margin-top: 68px;
          }


          /* Plus Jakarta Sans */
          .education-main-heading {
            font-size: 28px;
            line-height: 1.17;
          }

          .education-secondary-heading {
            font-size: 26px;
            line-height: 1.2;
          }

          .education-subheading {
            font-size: 14px;
          }


          /* Inter */
          .education-body {
            font-size: 13.5px;
            line-height: 1.7;
          }


          .education-buttons {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }

          .education-primary-button,
          .education-secondary-button {
            width: 100%;
          }


          .education-image-wrapper {
            height: 270px;
            border-radius: 18px;
          }


          .education-stat-card {
            right: 10px;
            bottom: -18px;

            width: 205px;
            max-width: calc(100% - 20px);

            padding: 10px 12px;
            gap: 9px;
          }

          .education-stat-icon {
            width: 18px;
            height: 18px;
          }

          .education-stat-title {
            font-size: 10.5px;
          }

          .education-stat-text {
            font-size: 9.5px;
          }


          .education-role-card {
            top: 12px;
            left: 12px;
            width: 150px;
            padding: 6px;
          }

          .education-role-item {
            gap: 7px;
            padding: 6px;
            font-size: 10.5px;
          }

          .education-role-icon {
            width: 22px;
            height: 22px;
          }

          .education-role-icon svg {
            width: 13px;
            height: 13px;
          }


          .education-info-box {
            padding: 13px 14px;
            font-size: 12.5px;
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .education-container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .education-main-heading {
            font-size: 26px;
          }

          .education-secondary-heading {
            font-size: 24px;
          }

          .education-image-wrapper {
            height: 245px;
          }

          .education-role-card {
            transform: scale(0.92);
            transform-origin: top left;
          }

          .education-stat-card {
            transform: scale(0.92);
            transform-origin: bottom right;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .education-image {
            transition: none;
          }

          .education-primary-button,
          .education-secondary-button {
            transition: none;
          }
        }

      `}</style>


      <div className="education-container">

        {/* =====================================================
            SECTION 1
        ===================================================== */}

        <div className="education-grid">

          {/* LEFT CONTENT */}

          <div className="education-content">

            <Eyebrow>
              EDUCATION
            </Eyebrow>

            {/* PLUS JAKARTA SANS */}
            <h1 className="education-main-heading">
              Technology That Helps Education Move Forward
            </h1>

            {/* PLUS JAKARTA SANS */}
            <p className="education-subheading">
              Helping institutions create simpler, smarter and more connected
              ways of working.
            </p>

            {/* INTER */}
            <p className="education-body">
              Education is built around people — students, educators,
              administrators and families. The technology supporting them
              should make their everyday experience easier, not more
              complicated.
            </p>

            <div className="education-buttons">

              <button
                type="button"
                className="education-primary-button"
                onClick={() => navigate("/education-solutions")}
              >
                Explore Education Solutions
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                className="education-secondary-button"
              >
                Talk to Our Experts
              </button>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="education-image-area">

            <EducationImage
              src={IMAGE_1_URL}
              alt="Education technology team reviewing dashboard"
            />

            {/* FLOATING STAT */}

            <div className="education-stat-card">

              <CheckCircle2
                size={20}
                className="education-stat-icon"
              />

              <div>

                <p className="education-stat-title">
                  TechTorch Campus OS
                </p>

                <p className="education-stat-text">

                  <strong>
                    99.4% User Adoption
                  </strong>

                  <br />

                  Across 40+ Higher-Ed Campuses

                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SECTION 2
        ===================================================== */}

        <div className="education-grid education-grid-reverse">

          {/* LEFT IMAGE */}

          <div className="education-image-area">

            <EducationImage
              src={IMAGE_2_URL}
              alt="Students collaborating at a table"
            />

            {/* FLOATING ROLE LIST */}

            <div className="education-role-card">

              {roleCards.map(({ label, icon: Icon }) => (

                <div
                  key={label}
                  className="education-role-item"
                >

                  <span className="education-role-icon">
                    <Icon size={14} />
                  </span>

                  <span>
                    {label}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* RIGHT CONTENT */}

          <div className="education-content">

            <Eyebrow>
              BRINGING EVERY PART OF YOUR INSTITUTION CLOSER TOGETHER
            </Eyebrow>

            {/* PLUS JAKARTA SANS */}
            <h2 className="education-secondary-heading">
              One institution. Many activities. One connected approach.
            </h2>

            {/* INTER */}
            <p className="education-body">
              An educational institution has many moving parts. Students need
              access to information. Teachers manage academic
              responsibilities. Administrators handle records and processes.
              Management needs visibility. Parents want timely communication.
            </p>

            {/* INTER */}
            <p className="education-body">
              When these activities depend on disconnected systems, even
              simple tasks can become difficult to manage.
            </p>

            {/* INTER */}
            <div className="education-info-box">
              TechTorch brings a connected approach to education technology,
              helping institutions organize important processes and
              information within a more unified digital environment.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}