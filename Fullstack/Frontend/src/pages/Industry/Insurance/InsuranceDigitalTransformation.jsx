import React from "react";
import {
  Lock,
  RefreshCw,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#e3c3cf";

const features = [
  {
    icon: Lock,
    title: "System Integration",
    body:
      "Connect applications and business systems to improve information flow across the organization.",
  },
  {
    icon: RefreshCw,
    title: "Software Modernization",
    body:
      "Modernize existing applications and technology environments to support changing business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body:
      "Build flexible infrastructure that supports scalability and evolving technology needs.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body:
      "Strengthen the protection of applications, systems and business information through security-focused solutions.",
  },
];

export default function ModernizeTechnologySection() {
  return (
    <section className="modernize-technology-section">
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

        .modernize-technology-section {
          width: 100%;
          background: ${WINE};
          color: #ffffff;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .modernize-technology-container {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding: 64px 24px;
          box-sizing: border-box;
        }


        /* =====================================================
           MAIN GRID
        ===================================================== */

        .modernize-technology-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 52px;
          align-items: center;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .modernize-content {
          min-width: 0;
          max-width: 570px;
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .modernize-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 17px;
          padding: 6px 11px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.12);
          color: #f3d9e2;

          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.06em;
        }


        .modernize-badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;
          background: #ffffff;
        }


        /* =====================================================
           HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .modernize-heading {
          margin: 0 0 18px;

          max-width: 570px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 36px;
          line-height: 1.16;
          font-weight: 700;

          letter-spacing: -0.8px;

          color: #ffffff;
        }


        /* =====================================================
           DESCRIPTION
           INTER
        ===================================================== */

        .modernize-description {
          margin: 0 0 13px;

          max-width: 570px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 14px;
          line-height: 1.72;
          font-weight: 400;

          color: ${MUTED};
        }


        .modernize-description:last-of-type {
          margin-bottom: 26px;
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .modernize-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          min-height: 42px;

          padding: 0 20px;

          border: 1px solid #ffffff;
          border-radius: 999px;

          background: #ffffff;
          color: ${WINE};

          font-family:
            "Inter",
            sans-serif;

          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.05em;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .modernize-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0 8px 20px
            rgba(0, 0, 0, 0.15);
        }


        /* =====================================================
           FEATURES GRID
        ===================================================== */

        .modernize-features-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 17px;

          min-width: 0;
        }


        /* =====================================================
           FEATURE CARD
        ===================================================== */

        .modernize-feature-card {
          min-width: 0;

          padding: 21px;

          border-radius: 13px;

          background:
            rgba(255, 255, 255, 0.08);

          border:
            1px solid
            rgba(255, 255, 255, 0.12);

          box-sizing: border-box;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }


        .modernize-feature-card:hover {
          transform: translateY(-3px);

          background:
            rgba(255, 255, 255, 0.11);
        }


        /* =====================================================
           FEATURE ICON
        ===================================================== */

        .modernize-feature-icon {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 15px;

          border-radius: 9px;

          background:
            rgba(255, 255, 255, 0.14);

          color: #ffffff;
        }


        /* =====================================================
           FEATURE TITLE
           INTER
        ===================================================== */

        .modernize-feature-title {
          margin: 0 0 7px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;

          color: #ffffff;
        }


        /* =====================================================
           FEATURE BODY
           INTER
        ===================================================== */

        .modernize-feature-body {
          margin: 0;

          font-family:
            "Inter",
            sans-serif;

          font-size: 11px;
          line-height: 1.65;
          font-weight: 400;

          color: #d9b7c4;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .modernize-technology-container {
            padding:
              58px 32px;
          }

          .modernize-technology-grid {
            gap: 40px;
          }

          .modernize-heading {
            font-size: 33px;
          }

          .modernize-description {
            font-size: 13.5px;
          }

          .modernize-feature-card {
            padding: 19px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .modernize-technology-container {
            padding:
              55px 24px;
          }

          .modernize-technology-grid {
            grid-template-columns: 1fr;

            gap: 40px;
          }

          .modernize-content {
            max-width: 700px;
          }

          .modernize-heading {
            max-width: 680px;

            font-size: 34px;
          }

          .modernize-description {
            max-width: 700px;
          }

          .modernize-features-grid {
            max-width: 700px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .modernize-technology-container {
            padding:
              48px 20px;
          }

          .modernize-technology-grid {
            gap: 34px;
          }

          .modernize-badge {
            margin-bottom: 14px;

            padding:
              5px 10px;

            font-size: 8px;
          }

          .modernize-badge-dot {
            width: 5px;
            height: 5px;
          }

          .modernize-heading {
            margin-bottom: 15px;

            font-size: 29px;

            line-height: 1.18;

            letter-spacing: -0.5px;
          }

          .modernize-description {
            font-size: 13px;

            line-height: 1.7;

            margin-bottom: 11px;
          }

          .modernize-description:last-of-type {
            margin-bottom: 23px;
          }

          .modernize-button {
            min-height: 40px;

            padding:
              0 17px;

            font-size: 9px;
          }

          .modernize-features-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }

          .modernize-feature-card {
            padding: 19px;

            border-radius: 12px;
          }

          .modernize-feature-icon {
            width: 36px;
            height: 36px;

            margin-bottom: 13px;
          }

          .modernize-feature-title {
            font-size: 13px;

            margin-bottom: 6px;
          }

          .modernize-feature-body {
            font-size: 11.5px;

            line-height: 1.65;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .modernize-technology-container {
            padding:
              42px 16px;
          }

          .modernize-heading {
            font-size: 26px;

            line-height: 1.18;
          }

          .modernize-description {
            font-size: 12px;

            line-height: 1.68;
          }

          .modernize-button {
            min-height: 39px;

            padding:
              0 15px;

            font-size: 8.5px;
          }

          .modernize-feature-card {
            padding: 18px;
          }

          .modernize-feature-title {
            font-size: 12.5px;
          }

          .modernize-feature-body {
            font-size: 11px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .modernize-technology-container {
            padding:
              36px 14px;
          }

          .modernize-heading {
            font-size: 24px;
          }

          .modernize-description {
            font-size: 11.5px;
          }

          .modernize-feature-body {
            font-size: 10.5px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .modernize-button,
          .modernize-feature-card {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="modernize-technology-container">

        <div className="modernize-technology-grid">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="modernize-content">

            {/* BADGE */}

            <span className="modernize-badge">

              <span className="modernize-badge-dot" />

              DIGITAL TRANSFORMATION

            </span>


            {/* HEADING */}

            <h2 className="modernize-heading">

              Modernize Technology Around Your Business

            </h2>


            {/* DESCRIPTION */}

            <p className="modernize-description">

              Digital transformation should address real business
              requirements—not simply introduce new technology.

            </p>


            <p className="modernize-description">

              TechTorch supports organizations in developing new applications,
              integrating existing systems and modernizing technology
              environments while maintaining focus on business continuity and
              long-term requirements.

            </p>


            {/* BUTTON */}

            <button
              type="button"
              className="modernize-button"
            >

              EXPLORE OUR SOLUTIONS

              <ArrowRight
                size={14}
                strokeWidth={1.8}
              />

            </button>

          </div>


          {/* =================================================
              RIGHT FEATURES
          ================================================= */}

          <div className="modernize-features-grid">

            {features.map(
              ({
                icon: Icon,
                title,
                body,
              }) => (

                <div
                  key={title}
                  className="modernize-feature-card"
                >

                  {/* ICON */}

                  <span className="modernize-feature-icon">

                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />

                  </span>


                  {/* TITLE */}

                  <h3 className="modernize-feature-title">

                    {title}

                  </h3>


                  {/* BODY */}

                  <p className="modernize-feature-body">

                    {body}

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