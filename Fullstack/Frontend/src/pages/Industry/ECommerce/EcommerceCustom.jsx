import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  LayoutGrid,
  Smartphone,
  Share2,
  Settings,
  Headphones,
} from "lucide-react";

const WINE = "#730042";

const cards = [
  {
    icon: Code2,
    title: "Custom Software",
    body: "Build applications around specific business requirements.",
  },
  {
    icon: LayoutGrid,
    title: "Web Applications",
    body: "Develop responsive web applications for business and customer needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    body: "Create mobile applications for different digital requirements.",
  },
  {
    icon: Share2,
    title: "API & System Integration",
    body: "Connect applications and enable data exchange between systems.",
  },
  {
    icon: Settings,
    title: "Software Testing",
    body: "Test applications for functionality, performance, security and usability.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    body: "Continue supporting applications through updates and technical assistance.",
  },
];

export default function CustomArchitectureGridSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
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
      className="custom-architecture-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           SECTION
        ========================================= */

        .custom-architecture-section {
          width: 100%;
          overflow: hidden;
          background: ${WINE};
          color: #ffffff;
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .custom-architecture-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;
        }

        /* =========================================
           LABEL
        ========================================= */

        .custom-architecture-label {
          margin: 0 0 14px;
          color: #f3d9e2;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.18em;
        }

        /* =========================================
           HEADING
        ========================================= */

        .custom-architecture-heading {
          margin: 0 0 16px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        /* =========================================
           SUBHEADING
        ========================================= */

        .custom-architecture-subheading {
          max-width: 850px;
          margin: 0 0 48px;
          color: #e3c3cf;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* =========================================
           CARDS GRID
        ========================================= */

        .custom-architecture-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        /* =========================================
           CARD
        ========================================= */

        .custom-architecture-card {
          position: relative;
          width: 100%;
          min-width: 0;
          min-height: 220px;
          padding: 24px;
          box-sizing: border-box;
          overflow: hidden;

          display: flex;
          flex-direction: column;

          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.08);

          opacity: 0;
          transform: translateY(35px) scale(0.96);
          filter: blur(3px);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms ease,
            background 350ms ease,
            border-color 350ms ease,
            box-shadow 350ms ease;
        }

        .custom-architecture-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        .custom-architecture-card.visible:hover {
          transform: translateY(-8px) scale(1.02);
          background: #fbeef1;
          border-color: rgba(122, 31, 61, 0.25);

          box-shadow:
            0 18px 35px rgba(45, 0, 20, 0.18),
            0 5px 12px rgba(0, 0, 0, 0.06);
        }

        /* =========================================
           ICON
        ========================================= */

        .custom-architecture-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;

          transition:
            background 300ms ease,
            color 300ms ease;
        }

        .custom-architecture-card:hover
          .custom-architecture-icon {
          background: #ffffff;
          color: ${WINE};
        }

        /* =========================================
           TITLE
        ========================================= */

        .custom-architecture-card-title {
          margin: 20px 0 9px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;

          transition: color 300ms ease;
        }

        .custom-architecture-card:hover
          .custom-architecture-card-title {
          color: ${WINE};
        }

        /* =========================================
           BODY
        ========================================= */

        .custom-architecture-card-body {
          margin: 0;
          color: #d9b7c4;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;

          transition: color 300ms ease;
        }

        .custom-architecture-card:hover
          .custom-architecture-card-body {
          color: #5b5a63;
        }

        /* =========================================
           BOTTOM WINE LINE
        ========================================= */

        .custom-architecture-bottom-line {
          position: absolute;
          left: 0;
          bottom: 0;

          width: 100%;
          height: 3px;

          background: ${WINE};

          transform: scaleX(0);
          transform-origin: left;

          transition:
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .custom-architecture-card.visible:hover
          .custom-architecture-bottom-line {
          transform: scaleX(1);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .custom-architecture-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .custom-architecture-heading {
            font-size: 34px;
          }

          .custom-architecture-subheading {
            margin-bottom: 40px;
          }

          .custom-architecture-grid {
            gap: 18px;
          }

          .custom-architecture-card {
            min-height: 215px;
            padding: 22px;
          }
        }

        /* =========================================
           MOBILE / SMALL TABLET
        ========================================= */

        @media (max-width: 700px) {
          .custom-architecture-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .custom-architecture-label {
            margin-bottom: 12px;
            font-size: 9px;
          }

          .custom-architecture-heading {
            margin-bottom: 14px;
            font-size: 28px;
            line-height: 1.22;
          }

          .custom-architecture-subheading {
            margin-bottom: 30px;
            font-size: 13px;
            line-height: 1.7;
          }

          .custom-architecture-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .custom-architecture-card {
            min-height: 215px;
            padding: 20px;
            border-radius: 14px;
          }

          .custom-architecture-icon {
            width: 38px;
            height: 38px;
          }

          .custom-architecture-card-title {
            margin-top: 17px;
            font-size: 15px;
          }

          .custom-architecture-card-body {
            font-size: 12px;
            line-height: 1.65;
          }

          /* Disable hover movement on touch */
          @media (hover: none) {
            .custom-architecture-card.visible:hover {
              transform: translateY(0) scale(1);
              background: rgba(255, 255, 255, 0.08);
              border-color: rgba(255, 255, 255, 0.12);
              box-shadow: none;
            }

            .custom-architecture-card:hover
              .custom-architecture-icon {
              background: rgba(255, 255, 255, 0.14);
              color: #ffffff;
            }

            .custom-architecture-card:hover
              .custom-architecture-card-title {
              color: #ffffff;
            }

            .custom-architecture-card:hover
              .custom-architecture-card-body {
              color: #d9b7c4;
            }

            .custom-architecture-card.visible:hover
              .custom-architecture-bottom-line {
              transform: scaleX(0);
            }
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .custom-architecture-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .custom-architecture-heading {
            font-size: 24px;
          }

          .custom-architecture-subheading {
            font-size: 12.5px;
            line-height: 1.65;
          }

          .custom-architecture-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .custom-architecture-card {
            min-height: 190px;
            padding: 19px;
          }

          .custom-architecture-card-title {
            font-size: 15px;
          }

          .custom-architecture-card-body {
            font-size: 12px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .custom-architecture-card {
            opacity: 1;
            transform: none;
            filter: none;
            transition: none !important;
          }

          .custom-architecture-icon,
          .custom-architecture-card-title,
          .custom-architecture-card-body,
          .custom-architecture-bottom-line {
            transition: none !important;
          }
        }
      `}</style>

      <div className="custom-architecture-wrapper">
        {/* LABEL */}
        <p className="custom-architecture-label">
          CUSTOM ARCHITECTURE
        </p>

        {/* HEADING */}
        <h2 className="custom-architecture-heading">
          Extend Your E-Commerce Technology
        </h2>

        {/* SUBHEADING */}
        <p className="custom-architecture-subheading">
          When a business requires a custom application or integration,
          TechTorch provides software engineering capabilities across web
          applications, mobile applications, APIs, system integration and
          software development.
        </p>

        {/* CARDS */}
        <div className="custom-architecture-grid">
          {cards.map(({ icon: Icon, title, body }, index) => (
            <article
              key={title}
              className={`custom-architecture-card ${
                isVisible ? "visible" : ""
              }`}
              style={{
                transitionDelay: isVisible
                  ? `${index * 150}ms`
                  : "0ms",
              }}
            >
              {/* ICON */}
              <span className="custom-architecture-icon">
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              {/* TITLE */}
              <h3 className="custom-architecture-card-title">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="custom-architecture-card-body">
                {body}
              </p>

              {/* BOTTOM LINE */}
              <div className="custom-architecture-bottom-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}