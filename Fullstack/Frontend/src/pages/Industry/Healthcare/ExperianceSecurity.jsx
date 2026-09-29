import React from "react";
import {
  User,
  Video,
  Bell,
  Smartphone,
  Shield,
  Lock,
  ClipboardCheck,
  LineChart,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const patientFeatures = [
  {
    icon: User,
    title: "Patient Portals",
    body: "Provide digital access to relevant patient information and services.",
  },
  {
    icon: Video,
    title: "Virtual Consultations",
    body: "Support remote interactions between patients and healthcare professionals.",
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Help communicate appointments, reminders and follow-up information.",
  },
  {
    icon: Smartphone,
    title: "Digital Access",
    body: "Make relevant healthcare information available through digital channels.",
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Role-Based Access",
    body: "Control system access according to user responsibilities.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    body: "Support the secure handling of healthcare information.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Trails",
    body: "Maintain records of relevant system activity.",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    body: "Use dashboards and reports to understand operational information.",
  },
];

export default function PatientExperienceAndSecuritySections() {
  return (
    <div className="patient-security-page">
      <style>{`
        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        .patient-security-page {
          width: 100%;
          overflow: hidden;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .patient-security-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;

          padding: 72px 40px;

          box-sizing: border-box;
        }


        /* =====================================================
           SECTION 1
        ===================================================== */

        .patient-experience-section {
          width: 100%;
          background: #f6f7fa;
        }


        .patient-experience-content {
          width: 100%;
        }


        /* =====================================================
           SECTION 2
        ===================================================== */

        .security-section {
          width: 100%;
          background: ${WINE};
        }


        /* =====================================================
           SECTION LABEL
           INTER
        ===================================================== */

        .section-label {
          display: block;

          margin: 0 0 12px;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          line-height: 1.4;

          font-weight: 700;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }


        .patient-label {
          color: ${WINE};
        }


        .security-label {
          color: #f3d9e2;
        }


        /* =====================================================
           MAIN HEADINGS
           PLUS JAKARTA SANS
        ===================================================== */

        .section-heading {
          margin: 0 0 16px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 34px;

          line-height: 1.2;

          font-weight: 700;

          letter-spacing: -0.7px;
        }


        .patient-heading {
          color: ${INK};
        }


        .security-heading {
          color: #ffffff;

          max-width: 650px;
        }


        /* =====================================================
           SUBHEADINGS / DESCRIPTIONS
           PLUS JAKARTA SANS
        ===================================================== */

        .section-description {
          margin: 0;

          max-width: 720px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 13px;

          line-height: 1.75;

          font-weight: 500;
        }


        .patient-description {
          color: ${MUTED};

          margin-bottom: 42px;
        }


        .security-description-wrapper {
          max-width: 720px;

          margin-bottom: 42px;

          display: flex;

          flex-direction: column;

          gap: 10px;
        }


        .security-description {
          color: #e3c3cf;
        }


        /* =====================================================
           FEATURE GRID
        ===================================================== */

        .feature-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }


        /* =====================================================
           LIGHT FEATURE CARD
        ===================================================== */

        .patient-feature-card {
          min-width: 0;

          background: #ffffff;

          border-radius: 14px;

          padding: 22px;

          box-sizing: border-box;

          box-shadow:
            0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .patient-feature-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.08);
        }


        /* =====================================================
           DARK FEATURE CARD
        ===================================================== */

        .security-feature-card {
          min-width: 0;

          padding: 22px;

          box-sizing: border-box;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.08);

          border:
            1px solid rgba(255, 255, 255, 0.12);

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }


        .security-feature-card:hover {
          transform: translateY(-4px);

          background: rgba(255, 255, 255, 0.11);
        }


        /* =====================================================
           ICON
        ===================================================== */

        .feature-icon {
          width: 40px;
          height: 40px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          margin-bottom: 17px;

          flex-shrink: 0;
        }


        .patient-icon {
          background: #fbeef1;

          color: ${WINE};
        }


        .security-icon {
          background: rgba(255, 255, 255, 0.14);

          color: #ffffff;
        }


        /* =====================================================
           CARD TITLES
           PLUS JAKARTA SANS
        ===================================================== */

        .feature-title {
          margin: 0 0 8px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;

          line-height: 1.4;

          font-weight: 700;
        }


        .patient-feature-title {
          color: ${INK};
        }


        .security-feature-title {
          color: #ffffff;
        }


        /* =====================================================
           CARD BODY
           INTER
        ===================================================== */

        .feature-body {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 12px;

          line-height: 1.7;

          font-weight: 400;
        }


        .patient-feature-body {
          color: ${MUTED};
        }


        .security-feature-body {
          color: #d9b7c4;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .patient-security-container {
            padding: 65px 32px;
          }


          .section-heading {
            font-size: 32px;
          }


          .feature-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 800px) {

          .patient-security-container {
            padding: 58px 26px;
          }


          .section-heading {
            font-size: 30px;

            line-height: 1.22;
          }


          .section-description {
            font-size: 12.5px;

            line-height: 1.72;
          }


          .patient-description {
            margin-bottom: 34px;
          }


          .security-description-wrapper {
            margin-bottom: 34px;
          }


          .feature-grid {
            gap: 16px;
          }


          .patient-feature-card,
          .security-feature-card {
            padding: 20px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .patient-security-container {
            padding:
              48px 20px 52px;
          }


          .section-label {
            font-size: 9px;

            margin-bottom: 10px;
          }


          .section-heading {
            font-size: 27px;

            line-height: 1.2;

            letter-spacing: -0.5px;

            margin-bottom: 14px;
          }


          .section-description {
            font-size: 11.5px;

            line-height: 1.72;
          }


          .patient-description {
            margin-bottom: 30px;
          }


          .security-description-wrapper {
            gap: 8px;

            margin-bottom: 30px;
          }


          .feature-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }


          .patient-feature-card,
          .security-feature-card {
            padding: 19px;
          }


          .feature-icon {
            width: 38px;
            height: 38px;

            margin-bottom: 14px;
          }


          .feature-title {
            font-size: 13px;

            margin-bottom: 7px;
          }


          .feature-body {
            font-size: 11px;

            line-height: 1.68;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .patient-security-container {
            padding:
              42px 16px 46px;
          }


          .section-heading {
            font-size: 24px;

            line-height: 1.2;
          }


          .section-description {
            font-size: 11px;

            line-height: 1.68;
          }


          .patient-description {
            margin-bottom: 27px;
          }


          .security-description-wrapper {
            margin-bottom: 27px;
          }


          .patient-feature-card,
          .security-feature-card {
            padding: 17px;
          }


          .feature-icon {
            width: 36px;
            height: 36px;

            margin-bottom: 13px;
          }


          .feature-title {
            font-size: 12.5px;
          }


          .feature-body {
            font-size: 10.5px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .patient-security-container {
            padding:
              38px 14px 42px;
          }


          .section-heading {
            font-size: 22px;
          }


          .section-description {
            font-size: 10.5px;
          }


          .feature-body {
            font-size: 10px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .patient-feature-card,
          .security-feature-card {
            transition: none;
          }

          .patient-feature-card:hover,
          .security-feature-card:hover {
            transform: none;
          }

        }

      `}</style>


      {/* =====================================================
          SECTION 1
          DIGITAL PATIENT EXPERIENCE
      ===================================================== */}

      <section className="patient-experience-section">

        <div className="patient-security-container">

          <div className="patient-experience-content">

            {/* Label - Inter */}

            <p className="section-label patient-label">
              DIGITAL PATIENT EXPERIENCE
            </p>


            {/* Heading - Plus Jakarta Sans */}

            <h2 className="section-heading patient-heading">
              Make Healthcare Access More Connected
            </h2>


            {/* Subheading - Plus Jakarta Sans */}

            <p className="section-description patient-description">
              Digital services can help healthcare providers extend
              communication and access beyond the physical facility.
              TechTorch's documented healthcare capabilities include patient
              portals, virtual consultations, automated reminders and
              follow-up communication.
            </p>


            {/* Feature Cards */}

            <div className="feature-grid">

              {patientFeatures.map(
                ({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="patient-feature-card"
                  >

                    <span className="feature-icon patient-icon">
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </span>


                    {/* Card Heading - Plus Jakarta Sans */}

                    <h3 className="feature-title patient-feature-title">
                      {title}
                    </h3>


                    {/* Card Text - Inter */}

                    <p className="feature-body patient-feature-body">
                      {body}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2
          DATA & SECURITY
      ===================================================== */}

      <section className="security-section">

        <div className="patient-security-container">

          {/* Label - Inter */}

          <p className="section-label security-label">
            DATA &amp; SECURITY
          </p>


          {/* Heading - Plus Jakarta Sans */}

          <h2 className="section-heading security-heading">
            Manage Healthcare Information With
            <br className="security-heading-break" />
            Greater Control
          </h2>


          {/* Subheadings - Plus Jakarta Sans */}

          <div className="security-description-wrapper">

            <p className="section-description security-description">
              Healthcare organizations work with information that requires
              appropriate access and protection. Technology should provide
              structured controls while making relevant information
              accessible to authorized users.
            </p>


            <p className="section-description security-description">
              TechTorch's published healthcare solution includes role-based
              access, data encryption and audit trails, together with
              reporting and analytics capabilities.
            </p>

          </div>


          {/* Security Feature Cards */}

          <div className="feature-grid">

            {securityFeatures.map(
              ({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="security-feature-card"
                >

                  <span className="feature-icon security-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>


                  {/* Card Heading - Plus Jakarta Sans */}

                  <h3 className="feature-title security-feature-title">
                    {title}
                  </h3>


                  {/* Card Text - Inter */}

                  <p className="feature-body security-feature-body">
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