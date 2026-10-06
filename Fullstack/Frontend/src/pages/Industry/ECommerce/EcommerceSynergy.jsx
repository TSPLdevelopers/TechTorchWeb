import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Truck,
  Landmark,
  Users,
  RefreshCw,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: ClipboardList,
    title: "ERP",
    body: "Connect e-commerce requirements with broader business processes.",
    footer: "SYNCHRONIZED DATA",
  },
  {
    icon: Truck,
    title: "Inventory & Supply Chain",
    body: "Bring product and inventory information closer to your wider business operations.",
    footer: "UNIFIED INVENTORY",
  },
  {
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial processes related to business activities.",
    footer: "LEDGER ALIGNMENT",
  },
  {
    icon: Users,
    title: "CRM",
    body: "Manage customer information and relationships through connected systems.",
    footer: "CUSTOMER INSIGHTS",
  },
];

export default function EnterpriseSynergySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="enterprise-synergy-section"
    >
      <style>{`
        /* =========================================
           FONTS
        ========================================= */

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');


        /* =========================================
           SECTION
        ========================================= */

        .enterprise-synergy-section {
          width: 100%;
          overflow: hidden;

          background: #f7f5f2;
          color: ${INK};

          font-family: "Inter", sans-serif;
        }


        /* =========================================
           MAIN CONTAINER
           
           Desktop  : 100px
           Tablet   : 40px
           Mobile   : 24px
           Small    : 16px
        ========================================= */

        .enterprise-synergy-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding: 80px 100px;

          box-sizing: border-box;
        }


        /* =========================================
           HEADER
        ========================================= */

        .enterprise-synergy-header {
          width: 100%;
          max-width: 850px;

          margin: 0 auto 48px;

          text-align: center;
        }


        /* =========================================
           LABEL
        ========================================= */

        .enterprise-synergy-label {
          margin: 0 0 12px;

          color: ${WINE};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;

          letter-spacing: 0.08em;
          text-transform: uppercase;
        }


        /* =========================================
           HEADING
        ========================================= */

        .enterprise-synergy-heading {
          margin: 0 0 16px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.25;

          letter-spacing: -0.025em;
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .enterprise-synergy-description {
          max-width: 820px;

          margin: 0 auto;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.8;
        }


        /* =========================================
           CARDS GRID
        ========================================= */

        .enterprise-synergy-grid {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 24px;
        }


        /* =========================================
           CARD
        ========================================= */

        .enterprise-synergy-card {
          position: relative;

          width: 100%;
          min-height: 225px;

          display: flex;
          flex-direction: column;

          padding: 24px;

          box-sizing: border-box;

          background: #ffffff;

          border: 1px solid transparent;
          border-radius: 14px;

          overflow: hidden;

          opacity: 0;
          transform: translateY(40px) scale(0.96);

          box-shadow: none;

          transition:
            opacity 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms ease,
            border-color 350ms ease;
        }


        /* =========================================
           CARD VISIBLE STATE
        ========================================= */

        .enterprise-synergy-card.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);

          box-shadow:
            0 2px 6px rgba(0, 0, 0, 0.04);
        }


        /* =========================================
           CARD HOVER
        ========================================= */

        .enterprise-synergy-card.is-visible:hover {
          transform: translateY(-7px) scale(1.015);

          border-color: rgba(122, 31, 61, 0.14);

          box-shadow:
            0 18px 38px rgba(122, 31, 61, 0.12);
        }


        /* =========================================
           ICON
        ========================================= */

        .enterprise-synergy-icon {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          flex-shrink: 0;

          border-radius: 9px;

          background: #fbeef1;
          color: ${WINE};

          transition:
            background 300ms ease,
            color 300ms ease;
        }


        .enterprise-synergy-card:hover
        .enterprise-synergy-icon {
          background: ${WINE};
          color: #ffffff;
        }


        /* =========================================
           CARD TITLE
        ========================================= */

        .enterprise-synergy-card-title {
          margin: 0 0 8px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
        }


        /* =========================================
           CARD BODY
        ========================================= */

        .enterprise-synergy-card-body {
          margin: 0 0 22px;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;
        }


        /* =========================================
           CARD FOOTER
        ========================================= */

        .enterprise-synergy-card-footer {
          margin-top: auto;

          display: flex;
          align-items: center;
          gap: 7px;
        }


        .enterprise-synergy-card-footer-text {
          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;

          line-height: 1.3;

          letter-spacing: 0.07em;
        }


        .enterprise-synergy-refresh {
          color: ${WINE};

          transition: transform 500ms ease;
        }


        .enterprise-synergy-card:hover
        .enterprise-synergy-refresh {
          transform: rotate(180deg);
        }


        /* =========================================
           BOTTOM HOVER LINE
        ========================================= */

        .enterprise-synergy-card-line {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 3px;

          background: ${WINE};

          transform: scaleX(0);
          transform-origin: left center;

          transition: transform 450ms ease;
        }


        .enterprise-synergy-card:hover
        .enterprise-synergy-card-line {
          transform: scaleX(1);
        }


        /* =========================================
           LARGE TABLET
        ========================================= */

        @media (max-width: 1200px) {

          .enterprise-synergy-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 72px;
            padding-bottom: 72px;
          }

          .enterprise-synergy-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .enterprise-synergy-header {
            margin-bottom: 40px;
          }

          .enterprise-synergy-heading {
            font-size: 30px;
          }
        }


        /* =========================================
           TABLET / MOBILE
        ========================================= */

        @media (max-width: 700px) {

          .enterprise-synergy-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .enterprise-synergy-header {
            margin-bottom: 34px;
          }

          .enterprise-synergy-label {
            font-size: 10px;
          }

          .enterprise-synergy-heading {
            font-size: 27px;
            line-height: 1.28;
          }

          .enterprise-synergy-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .enterprise-synergy-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .enterprise-synergy-card {
            min-height: 205px;
            padding: 22px;
          }

          .enterprise-synergy-card.is-visible:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {

          .enterprise-synergy-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .enterprise-synergy-header {
            margin-bottom: 28px;
          }

          .enterprise-synergy-label {
            margin-bottom: 10px;

            font-size: 9px;
          }

          .enterprise-synergy-heading {
            margin-bottom: 13px;

            font-size: 24px;
            line-height: 1.3;
          }

          .enterprise-synergy-description {
            font-size: 12.5px;
            line-height: 1.7;
          }

          .enterprise-synergy-card {
            min-height: 195px;
            padding: 20px;

            border-radius: 12px;
          }

          .enterprise-synergy-icon {
            width: 40px;
            height: 40px;

            margin-bottom: 16px;
          }

          .enterprise-synergy-card-title {
            font-size: 14px;
          }

          .enterprise-synergy-card-body {
            font-size: 12.5px;
          }
        }


        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {

          .enterprise-synergy-heading {
            font-size: 22px;
          }

          .enterprise-synergy-description {
            font-size: 12px;
          }

          .enterprise-synergy-card {
            padding: 18px;
          }
        }


        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {

          .enterprise-synergy-card.is-visible:hover {
            transform: translateY(0) scale(1);
            border-color: transparent;

            box-shadow:
              0 2px 6px rgba(0, 0, 0, 0.04);
          }

          .enterprise-synergy-card:hover
          .enterprise-synergy-icon {
            background: #fbeef1;
            color: ${WINE};
          }

          .enterprise-synergy-card:hover
          .enterprise-synergy-refresh {
            transform: none;
          }

          .enterprise-synergy-card:hover
          .enterprise-synergy-card-line {
            transform: scaleX(0);
          }
        }


        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          .enterprise-synergy-card,
          .enterprise-synergy-icon,
          .enterprise-synergy-refresh,
          .enterprise-synergy-card-line {
            transition: none !important;
          }
        }
      `}</style>

      <div className="enterprise-synergy-container">

        {/* ================= HEADER ================= */}

        <div className="enterprise-synergy-header">

          <p className="enterprise-synergy-label">
            Enterprise Synergy
          </p>

          <h2 className="enterprise-synergy-heading">
            Connect E-Commerce With Your Business
          </h2>

          <p className="enterprise-synergy-description">
            E-commerce can work alongside other business functions such as
            inventory, finance, CRM and supply chain management. TechTorch's
            wider Digital Solutions portfolio includes ERP, Supply Chain
            Management, Financial Management, Payment Management, CRM, Web
            Portals and Project Management, providing a broader technology
            environment around online business requirements.
          </p>

        </div>


        {/* ================= CARDS ================= */}

        <div className="enterprise-synergy-grid">

          {cards.map(
            ({ icon: Icon, title, body, footer }, index) => (
              <div
                key={title}
                className={`
                  enterprise-synergy-card
                  ${isVisible ? "is-visible" : ""}
                `}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 160}ms`
                    : "0ms",
                }}
              >

                {/* Icon */}

                <span className="enterprise-synergy-icon">
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>


                {/* Title */}

                <h3 className="enterprise-synergy-card-title">
                  {title}
                </h3>


                {/* Body */}

                <p className="enterprise-synergy-card-body">
                  {body}
                </p>


                {/* Footer */}

                <div className="enterprise-synergy-card-footer">

                  <span className="enterprise-synergy-card-footer-text">
                    {footer}
                  </span>

                  <RefreshCw
                    size={11}
                    strokeWidth={2}
                    className="enterprise-synergy-refresh"
                  />

                </div>


                {/* Bottom Line */}

                <span className="enterprise-synergy-card-line" />

              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}