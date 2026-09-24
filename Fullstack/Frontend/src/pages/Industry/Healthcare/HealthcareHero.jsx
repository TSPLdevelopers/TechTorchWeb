import React from "react";
import { ArrowRight, ShieldCheck, Activity, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

/* =====================================================
   IMAGE URL
   ===================================================== */

const HERO_IMAGE = "/healthcarehero.png";
// Agar online image hai:
// const HERO_IMAGE = "https://your-image-url.com/image.jpg";

const trustItems = [
  {
    icon: ShieldCheck,
    label: "HIPAA & HL7/FHIR Compliant",
  },
  {
    icon: Activity,
    label: "Real-Time Diagnostic Telemetry",
  },
  {
    icon: Lock,
    label: "Role-Based Clinical Security",
  },
];

export default function HealthcareHeroSection() {
  const navigate = useNavigate();
  return (
    <section className="healthcare-hero-section">
      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Talk to Our Healthcare Experts
              <ArrowRight size={16} />
            </button>
            <button
              className="px-6 py-3.5 rounded-full text-sm font-medium border"
              style={{ borderColor: "#d8d5d0", color: INK }}

            >
              Get in Touch
            </button>
          </div>


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .healthcare-hero-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .healthcare-hero-container {
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;

          padding: 78px 24px;

          box-sizing: border-box;
        }


        /* =====================================================
           MAIN GRID
        ===================================================== */

        .healthcare-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          gap: 58px;

          align-items: center;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .healthcare-hero-content {
          min-width: 0;
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .healthcare-hero-badge {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 20px;

          padding: 7px 12px;

          border-radius: 999px;

          background: #fbeef1;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 9px;

          line-height: 1.3;

          font-weight: 700;

          letter-spacing: 0.05em;
        }


        .healthcare-hero-badge-dot {
          width: 6px;

          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: ${WINE};
        }


        /* =====================================================
           HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .healthcare-hero-heading {
          margin: 0 0 22px;

          max-width: 590px;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 42px;

          line-height: 1.14;

          font-weight: 700;

          letter-spacing: -1px;

          color: ${INK};
        }


        /* =====================================================
           DESCRIPTION
           INTER
        ===================================================== */

        .healthcare-hero-description {
          max-width: 585px;

          margin: 0 0 14px;

          font-family:
            "Inter",
            sans-serif;

          font-size: 14px;

          line-height: 1.75;

          font-weight: 400;

          color: ${MUTED};
        }


        .healthcare-hero-description-last {
          margin-bottom: 28px;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .healthcare-hero-actions {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;

          margin-bottom: 28px;
        }


        .healthcare-primary-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          min-height: 46px;

          padding: 0 21px;

          border: none;

          border-radius: 999px;

          background: ${WINE};

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }


        .healthcare-primary-btn:hover {
          background: #5c1730;

          transform: translateY(-1px);
        }


        .healthcare-secondary-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          min-height: 46px;

          padding: 0 21px;

          border: 1px solid #d8d5d0;

          border-radius: 999px;

          background: #ffffff;

          color: ${INK};

          font-family: "Inter", sans-serif;

          font-size: 12px;

          font-weight: 600;

          cursor: pointer;

          transition:
            border-color 0.2s ease,
            color 0.2s ease;
        }


        .healthcare-secondary-btn:hover {
          border-color: ${WINE};

          color: ${WINE};
        }


        /* =====================================================
           TRUST AREA
        ===================================================== */

        .healthcare-trust-area {
          padding-top: 17px;

          border-top: 1px solid #ece9e4;
        }


        .healthcare-trust-list {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 14px 24px;
        }


        .healthcare-trust-item {
          display: flex;

          align-items: center;

          gap: 7px;

          min-width: 0;
        }


        .healthcare-trust-item svg {
          flex-shrink: 0;

          color: ${WINE};
        }


        .healthcare-trust-item span {
          font-family: "Inter", sans-serif;

          font-size: 10px;

          line-height: 1.4;

          color: ${MUTED};
        }


        /* =====================================================
           RIGHT IMAGE AREA
        ===================================================== */

        .healthcare-image-wrapper {
          position: relative;

          width: 100%;

          min-width: 0;

          padding-bottom: 30px;

          box-sizing: border-box;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .healthcare-hero-image {
          position: relative;

          width: 100%;

          height: 420px;

          display: block;

          object-fit: cover;

          object-position: center;

          border-radius: 20px;

          background: #e9eef1;

          box-shadow:
            0 18px 45px
            rgba(31, 41, 55, 0.12);

          overflow: hidden;
        }


        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .healthcare-image-overlay {
          position: absolute;

          inset: 0;

          border-radius: 20px;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.02) 0%,
              rgba(0, 0, 0, 0) 55%,
              rgba(0, 0, 0, 0.08) 100%
            );
        }


        /* =====================================================
           FLOATING STATUS CARD
        ===================================================== */

        .healthcare-status-card {
          position: absolute;

          left: 22px;

          right: 22px;

          bottom: 0;

          display: flex;

          align-items: center;

          gap: 12px;

          padding: 13px 15px;

          box-sizing: border-box;

          border-radius: 14px;

          background: #ffffff;

          box-shadow:
            0 14px 35px
            rgba(0, 0, 0, 0.13);

          z-index: 3;
        }


        .healthcare-status-icon {
          width: 38px;

          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          flex-shrink: 0;

          border-radius: 10px;

          background: #fbeef1;

          color: ${WINE};
        }


        .healthcare-status-content {
          flex: 1;

          min-width: 0;
        }


        .healthcare-status-label {
          margin: 0 0 3px;

          font-family: "Inter", sans-serif;

          font-size: 9px;

          line-height: 1.3;

          font-weight: 700;

          letter-spacing: 0.05em;

          color: ${WINE};
        }


        /* Heading / sub-heading style */
        .healthcare-status-title {
          margin: 0;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;

          font-size: 12px;

          line-height: 1.4;

          font-weight: 700;

          color: ${INK};

          white-space: nowrap;

          overflow: hidden;

          text-overflow: ellipsis;
        }


        /* =====================================================
           ACTIVE SYNC
        ===================================================== */

        .healthcare-active-sync {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          flex-shrink: 0;

          padding: 5px 9px;

          border-radius: 999px;

          background: #e5f7ec;

          color: #1a9455;

          font-family: "Inter", sans-serif;

          font-size: 9px;

          line-height: 1.3;

          font-weight: 600;
        }


        .healthcare-active-dot {
          width: 6px;

          height: 6px;

          border-radius: 50%;

          background: #1a9455;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .healthcare-hero-container {
            padding: 68px 32px;
          }


          .healthcare-hero-grid {
            gap: 42px;
          }


          .healthcare-hero-heading {
            font-size: 38px;
          }


          .healthcare-hero-image {
            height: 390px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .healthcare-hero-container {
            padding: 60px 24px;
          }


          .healthcare-hero-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }


          .healthcare-hero-content {
            max-width: 720px;

            margin: 0 auto;
          }


          .healthcare-hero-heading {
            max-width: 700px;

            font-size: 37px;
          }


          .healthcare-hero-description {
            max-width: 700px;
          }


          .healthcare-image-wrapper {
            max-width: 700px;

            margin: 0 auto;
          }


          .healthcare-hero-image {
            height: 420px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .healthcare-hero-container {
            padding: 48px 20px 55px;
          }


          .healthcare-hero-grid {
            gap: 42px;
          }


          .healthcare-hero-badge {
            margin-bottom: 16px;

            padding: 6px 10px;

            font-size: 8px;

            letter-spacing: 0.035em;
          }


          .healthcare-hero-heading {
            margin-bottom: 18px;

            font-size: 30px;

            line-height: 1.18;

            letter-spacing: -0.6px;
          }


          .healthcare-hero-description {
            margin-bottom: 12px;

            font-size: 13px;

            line-height: 1.7;
          }


          .healthcare-hero-description-last {
            margin-bottom: 23px;
          }


          .healthcare-hero-actions {
            align-items: stretch;

            gap: 9px;

            margin-bottom: 24px;
          }


          .healthcare-primary-btn,
          .healthcare-secondary-btn {
            min-height: 44px;

            padding-left: 17px;

            padding-right: 17px;

            font-size: 11px;
          }


          .healthcare-trust-area {
            padding-top: 15px;
          }


          .healthcare-trust-list {
            display: grid;

            grid-template-columns: 1fr;

            gap: 10px;
          }


          .healthcare-trust-item span {
            font-size: 10px;
          }


          .healthcare-image-wrapper {
            padding-bottom: 27px;
          }


          .healthcare-hero-image {
            height: 310px;

            border-radius: 16px;
          }


          .healthcare-image-overlay {
            border-radius: 16px;
          }


          .healthcare-status-card {
            left: 12px;

            right: 12px;

            gap: 9px;

            padding: 10px 11px;

            border-radius: 11px;
          }


          .healthcare-status-icon {
            width: 32px;

            height: 32px;

            border-radius: 8px;
          }


          .healthcare-status-icon svg {
            width: 15px;

            height: 15px;
          }


          .healthcare-status-label {
            font-size: 7px;
          }


          .healthcare-status-title {
            font-size: 10px;
          }


          .healthcare-active-sync {
            padding: 4px 7px;

            font-size: 8px;
          }


          .healthcare-active-dot {
            width: 5px;

            height: 5px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .healthcare-hero-container {
            padding:
              42px 16px
              48px;
          }


          .healthcare-hero-heading {
            font-size: 27px;

            line-height: 1.2;
          }


          .healthcare-hero-description {
            font-size: 12px;

            line-height: 1.7;
          }


          .healthcare-primary-btn,
          .healthcare-secondary-btn {
            width: 100%;

            min-height: 43px;
          }


          .healthcare-hero-actions {
            flex-direction: column;

            width: 100%;
          }


          .healthcare-hero-image {
            height: 270px;

            border-radius: 14px;
          }


          .healthcare-image-overlay {
            border-radius: 14px;
          }


          .healthcare-status-card {
            left: 8px;

            right: 8px;

            padding: 9px;

            gap: 8px;
          }


          .healthcare-status-icon {
            width: 29px;

            height: 29px;
          }


          .healthcare-status-title {
            font-size: 9px;
          }


          .healthcare-active-sync {
            display: none;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .healthcare-hero-heading {
            font-size: 25px;
          }


          .healthcare-hero-image {
            height: 245px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .healthcare-primary-btn,
          .healthcare-secondary-btn {
            transition: none;
          }

        }

      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="healthcare-hero-container">

        <div className="healthcare-hero-grid">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="healthcare-hero-content">

            {/* BADGE */}

            <span className="healthcare-hero-badge">

              <span className="healthcare-hero-badge-dot" />

              HEALTHCARE &amp; LIFE SCIENCES • CONNECTED CARE PLATFORMS

            </span>


            {/* MAIN HEADING */}

            <h1 className="healthcare-hero-heading">

              Technology for More Connected Healthcare Operations

            </h1>


            {/* DESCRIPTION */}

            <p className="healthcare-hero-description">

              Healthcare organizations manage patients, people, resources,
              information and daily operations across multiple functions.
              The right technology can help bring these activities together
              in a more organized and connected environment.

            </p>


            <p className="healthcare-hero-description healthcare-hero-description-last">

              TechTorch provides healthcare and hospital management
              solutions designed to support the operational needs of
              hospitals, clinics, diagnostic centers and other healthcare
              providers.

            </p>


            {/* BUTTONS */}

            <div className="healthcare-hero-actions">

              <button className="healthcare-primary-btn">

                Talk to Our Healthcare Experts

                <ArrowRight size={15} />

              </button>


              <button className="healthcare-secondary-btn"
               onClick={() => navigate("/healthcare-get-in-touch")}>

                Get in Touch

              </button>

            </div>


            {/* TRUST ITEMS */}

            <div className="healthcare-trust-area">

              <div className="healthcare-trust-list">

                {trustItems.map(
                  ({ icon: Icon, label }) => (

                    <div
                      key={label}
                      className="healthcare-trust-item"
                    >

                      <Icon
                        size={14}
                        strokeWidth={1.8}
                      />

                      <span>
                        {label}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="healthcare-image-wrapper">

            <img
              src={HERO_IMAGE}
              alt="Healthcare team reviewing diagnostic monitors"
              className="healthcare-hero-image"
            />

            <div className="healthcare-image-overlay" />


            {/* FLOATING STATUS CARD */}

            <div className="healthcare-status-card">

              <span className="healthcare-status-icon">

                <Activity
                  size={17}
                  strokeWidth={1.8}
                />

              </span>


              <div className="healthcare-status-content">

                <p className="healthcare-status-label">
                  TORCHX HEALTHCARE SUITE
                </p>

                <p className="healthcare-status-title">
                  Centralized Hospital Telemetry Node
                </p>

              </div>


              <span className="healthcare-active-sync">

                <span className="healthcare-active-dot" />

                Active Sync

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}