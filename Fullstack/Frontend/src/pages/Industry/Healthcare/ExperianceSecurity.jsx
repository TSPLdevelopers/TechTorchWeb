import React, { useEffect, useRef } from "react";
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
const BRAND = "#730042";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

/* ================= PATIENT FEATURES ================= */

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

/* ================= SECURITY FEATURES ================= */

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

/* ================= COMPONENT ================= */

export default function PatientExperienceAndSecuritySections() {
  const pageRef = useRef(null);

  /* ================= VIEWPORT ANIMATION ================= */

  useEffect(() => {
    const container = pageRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(
      ".patient-feature-card, .security-feature-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target;

            const index = Number(card.dataset.index || 0);

            setTimeout(() => {
              card.classList.add("card-visible");
            }, index * 150);

            observer.unobserve(card);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className="patient-security-page">
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

        .patient-security-page,
        .patient-security-page * {
          box-sizing: border-box;
        }

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
          max-width: 1600px;
          margin: 0 auto;
          padding: 78px 100px;
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
          background: #730042;
        }


        /* =====================================================
           SECTION LABEL
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

        .security-heading-break {
          display: block;
        }


        /* =====================================================
           DESCRIPTIONS
        ===================================================== */

        .section-description {
          margin: 0;
          max-width: 720px;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 400;
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }


        /* =====================================================
           COMMON CARD ANIMATION
        ===================================================== */

        .patient-feature-card,
        .security-feature-card {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.65s ease,
            transform 0.65s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .patient-feature-card.card-visible,
        .security-feature-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }


        /* =====================================================
           LIGHT FEATURE CARD
        ===================================================== */

        .patient-feature-card {
          min-width: 0;
          background: #ffffff;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        .patient-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.10);
        }


        /* =====================================================
           DARK FEATURE CARD
        ===================================================== */

        .security-feature-card {
          min-width: 0;
          padding: 22px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          cursor: pointer;
        }

        /*
          SECOND SECTION HOVER
          Card color changes on hover
        */

        .security-feature-card:hover {
          transform: translateY(-6px);
          background: #ffffff;
          border-color: #ffffff;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.20);
        }


        /* =====================================================
           SECURITY CARD HOVER TEXT
        ===================================================== */

        .security-feature-card:hover .security-icon {
          background: #fbeef1;
          color: ${BRAND};
        }

        .security-feature-card:hover .security-feature-title {
          color: ${BRAND};
        }

        .security-feature-card:hover .security-feature-body {
          color: ${MUTED};
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
          transition:
            background 0.3s ease,
            color 0.3s ease;
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
        ===================================================== */

        .feature-title {
          margin: 0 0 8px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .patient-feature-title {
          color: ${INK};
        }

        .security-feature-title {
          color: #ffffff;
        }


        /* =====================================================
           CARD BODY
        ===================================================== */

        .feature-body {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .patient-feature-body {
          color: ${MUTED};
        }

        .security-feature-body {
          color: #d9b7c4;
        }


        /* =====================================================
           LARGE TABLET / LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {
          .patient-security-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .feature-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .patient-security-container {
            padding-top: 65px;
            padding-bottom: 65px;
            padding-left: 40px;
            padding-right: 40px;
          }

          .section-heading {
            font-size: 32px;
          }

          .feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
        }


        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 700px) {
          .patient-security-container {
            padding-top: 58px;
            padding-bottom: 58px;
            padding-left: 40px;
            padding-right: 40px;
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
            padding: 48px 24px 52px;
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

        @media (max-width: 480px) {
          .patient-security-container {
            padding: 42px 16px 46px;
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
            padding: 38px 16px 42px;
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
            opacity: 1;
            transform: none;
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

            {/* LABEL */}

            <p className="section-label patient-label">
              DIGITAL PATIENT EXPERIENCE
            </p>

            {/* HEADING */}

            <h2 className="section-heading patient-heading">
              Make Healthcare Access More Connected
            </h2>

            {/* DESCRIPTION */}

            <p className="section-description patient-description">
              Digital services can help healthcare providers extend
              communication and access beyond the physical facility.
              TechTorch's documented healthcare capabilities include patient
              portals, virtual consultations, automated reminders and
              follow-up communication.
            </p>

            {/* FEATURE CARDS */}

            <div className="feature-grid">
              {patientFeatures.map(
                ({ icon: Icon, title, body }, index) => (
                  <div
                    key={title}
                    data-index={index}
                    className="patient-feature-card"
                  >
                    <span className="feature-icon patient-icon">
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                      />
                    </span>

                    <h3 className="feature-title patient-feature-title">
                      {title}
                    </h3>

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

          {/* LABEL */}

          <p className="section-label security-label">
            DATA &amp; SECURITY
          </p>

          {/* HEADING */}

          <h2 className="section-heading security-heading">
            Manage Healthcare Information With
            <br className="security-heading-break" />
            Greater Control
          </h2>

          {/* DESCRIPTIONS */}

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

          {/* SECURITY CARDS */}

          <div className="feature-grid">
            {securityFeatures.map(
              ({ icon: Icon, title, body }, index) => (
                <div
                  key={title}
                  data-index={index}
                  className="security-feature-card"
                >
                  <span className="feature-icon security-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>

                  <h3 className="feature-title security-feature-title">
                    {title}
                  </h3>

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