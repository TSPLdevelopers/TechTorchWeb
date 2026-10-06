import React from "react";
import {
  User,
  Shield,
  Briefcase,
  CreditCard,
  Radio,
  Square,
  Puzzle,
  RefreshCw,
  BarChart3,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const IMAGE_URL = "/desktop.png";

const quickList = [
  {
    icon: User,
    label: "Customers",
  },
  {
    icon: Shield,
    label: "Policies",
  },
  {
    icon: Briefcase,
    label: "Claims",
  },
  {
    icon: CreditCard,
    label: "Payments",
  },
];

const features = [
  {
    icon: Square,
    title: "Centralized Information",
    body:
      "Organize important business information within a connected environment.",
  },
  {
    icon: Puzzle,
    title: "Integrated Processes",
    body:
      "Connect business processes and systems to improve coordination.",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    body:
      "Reduce repetitive activities through digital workflows and automation.",
  },
  {
    icon: BarChart3,
    title: "Business Visibility",
    body:
      "Use reporting and analytics to gain clearer visibility into operations.",
  },
];

export default function ConnectedOperationsSection() {
  return (
    <section className="connected-operations-section">
      <style>{`
        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .connected-operations-section {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .connected-operations-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;
        }

        /* =====================================================
           MAIN GRID
        ===================================================== */

        .connected-operations-grid {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 60px;
          align-items: center;
        }

        /* =====================================================
           IMAGE AREA
        ===================================================== */

        .connected-image-area {
          position: relative;
          width: 100%;
          min-width: 0;
          padding: 0 24px 20px 0;
          box-sizing: border-box;
        }

        .connected-image {
          width: 100%;
          height: 390px;
          border-radius: 18px;
          background-image: url("${IMAGE_URL}");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        /* =====================================================
           QUICK LIST CARD
        ===================================================== */

        .quick-list-card {
          position: absolute;
          top: 28px;
          right: 0;
          width: 155px;
          padding: 12px;
          box-sizing: border-box;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .quick-list-item {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          padding: 7px 4px;
        }

        .quick-list-item svg {
          flex-shrink: 0;
          color: ${WINE};
        }

        .quick-list-item span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          color: ${INK};
        }

        /* =====================================================
           REAL TIME CARD
        ===================================================== */

        .real-time-card {
          position: absolute;
          left: 24px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 11px;
          max-width: 230px;
          padding: 12px 15px;
          box-sizing: border-box;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .real-time-icon {
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

        .real-time-label {
          margin: 0 0 2px;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: ${MUTED};
        }

        .real-time-title {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
          color: ${INK};
        }

        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .connected-content {
          min-width: 0;
        }

        /* =====================================================
           BADGE
        ===================================================== */

        .connected-badge {
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

        .connected-badge-dot {
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

        .connected-heading {
          margin: 0 0 18px;
          max-width: 600px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: -0.8px;
          color: ${INK};
        }

        .connected-heading-highlight {
          color: ${WINE};
        }

        /* =====================================================
           SUBHEADING / DESCRIPTION
           PLUS JAKARTA SANS
        ===================================================== */

        .connected-description {
          margin: 0 0 13px;
          max-width: 600px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
          color: ${MUTED};
        }

        .connected-description:last-of-type {
          margin-bottom: 30px;
        }

        /* =====================================================
           FEATURES GRID
        ===================================================== */

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 30px;
          row-gap: 24px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-width: 0;
        }

        .feature-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: ${WINE};
        }

        /* =====================================================
           FEATURE TEXT
           INTER
        ===================================================== */

        .feature-title {
          margin: 0 0 5px;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;
          color: ${INK};
        }

        .feature-body {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.65;
          color: ${MUTED};
        }

        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .connected-operations-container {
            padding: 70px 60px;
          }

          .connected-operations-grid {
            gap: 45px;
          }

          .connected-image {
            height: 360px;
          }

          .connected-heading {
            font-size: 34px;
          }

          .connected-description {
            font-size: 13.5px;
          }

          .quick-list-card {
            right: 0;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .connected-operations-container {
            padding: 64px 40px;
          }

          .connected-operations-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .connected-image-area {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            padding-right: 25px;
          }

          .connected-image {
            height: 380px;
          }

          .connected-content {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
          }

          .connected-heading {
            font-size: 35px;
          }

          .connected-description {
            max-width: 700px;
          }

          .features-grid {
            column-gap: 25px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .connected-operations-container {
            padding: 55px 24px;
          }

          .connected-operations-grid {
            gap: 42px;
          }

          .connected-image-area {
            padding: 0 16px 18px 0;
          }

          .connected-image {
            height: 290px;
            border-radius: 15px;
            background-position: center;
          }

          .quick-list-card {
            top: 17px;
            right: 0;
            width: 138px;
            padding: 9px;
            border-radius: 10px;
          }

          .quick-list-item {
            gap: 7px;
            padding: 6px 3px;
          }

          .quick-list-item svg {
            width: 13px;
            height: 13px;
          }

          .quick-list-item span {
            font-size: 10px;
          }

          .real-time-card {
            left: 14px;
            bottom: 0;
            max-width: 205px;
            padding: 10px 12px;
            gap: 9px;
            border-radius: 10px;
          }

          .real-time-icon {
            width: 29px;
            height: 29px;
          }

          .real-time-label {
            font-size: 9px;
          }

          .real-time-title {
            font-size: 10px;
          }

          .connected-badge {
            margin-bottom: 14px;
            padding: 5px 10px;
            font-size: 8px;
          }

          /* Plus Jakarta Sans */
          .connected-heading {
            margin-bottom: 15px;
            font-size: 29px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          /* Plus Jakarta Sans */
          .connected-description {
            font-size: 12.5px;
            line-height: 1.75;
            margin-bottom: 11px;
          }

          .connected-description:last-of-type {
            margin-bottom: 25px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .feature-item {
            gap: 10px;
          }

          .feature-title {
            font-size: 13px;
          }

          .feature-body {
            font-size: 11px;
            line-height: 1.65;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {
          .connected-operations-container {
            padding: 48px 16px;
          }

          .connected-image-area {
            padding-right: 10px;
          }

          .connected-image {
            height: 255px;
            border-radius: 13px;
          }

          .quick-list-card {
            width: 124px;
            top: 14px;
          }

          .quick-list-item span {
            font-size: 9px;
          }

          .real-time-card {
            left: 8px;
            max-width: 185px;
          }

          .connected-heading {
            font-size: 26px;
            line-height: 1.2;
          }

          .connected-description {
            font-size: 12px;
          }

          .feature-body {
            font-size: 10.5px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {
          .connected-image {
            height: 230px;
          }

          .quick-list-card {
            width: 114px;
          }

          .real-time-card {
            max-width: 170px;
            padding: 8px 10px;
          }

          .connected-heading {
            font-size: 24px;
          }

          .connected-description {
            font-size: 11.5px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="connected-operations-container">
        <div className="connected-operations-grid">

          {/* =================================================
              LEFT — IMAGE
          ================================================= */}

          <div className="connected-image-area">

            <div
              className="connected-image"
              aria-label="Insurance operations dashboard"
            />

            {/* QUICK LIST */}

            <div className="quick-list-card">
              {quickList.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="quick-list-item"
                >
                  <Icon
                    size={14}
                    strokeWidth={1.8}
                  />

                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* REAL TIME CARD */}

            <div className="real-time-card">

              <span className="real-time-icon">
                <Radio
                  size={16}
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p className="real-time-label">
                  Real-time Stream
                </p>

                <p className="real-time-title">
                  Synced Across Operations
                </p>
              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <div className="connected-content">

            {/* BADGE — Inter */}

            <span className="connected-badge">
              <span className="connected-badge-dot" />
              CONNECTED OPERATIONS
            </span>


            {/* HEADING — Plus Jakarta Sans */}

            <h2 className="connected-heading">
              Bring Business Processes Into
              <br />

              <span className="connected-heading-highlight">
                One Connected Environment
              </span>
            </h2>


            {/* SUBHEADING — Plus Jakarta Sans */}

            <p className="connected-description">
              Insurance operations involve multiple teams, systems and
              business processes. When these functions operate through
              disconnected environments, accessing information and
              maintaining operational visibility can become more difficult.
            </p>

            <p className="connected-description">
              TechTorch helps organizations connect their technology
              environment so that information can move more effectively
              across business functions.
            </p>


            {/* FEATURES — Inter */}

            <div className="features-grid">
              {features.map(
                ({
                  icon: Icon,
                  title,
                  body,
                }) => (
                  <div
                    key={title}
                    className="feature-item"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className="feature-icon"
                    />

                    <div>
                      <h3 className="feature-title">
                        {title}
                      </h3>

                      <p className="feature-body">
                        {body}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}