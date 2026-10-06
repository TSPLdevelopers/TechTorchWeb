import React, { useEffect, useRef, useState } from "react";
import {
  UserCheck,
  LayoutGrid,
  GraduationCap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: UserCheck,
    phase: "PHASE 01 • DISCOVERY",
    title: "Understand",
    body: "Understand your business requirements and e-commerce objectives.",
    footer: "Scope Alignment",
  },
  {
    num: "02",
    icon: LayoutGrid,
    phase: "PHASE 02 • BUILD",
    title: "Implement",
    body: "Configure and implement the solution around your requirements.",
    footer: "Production Readiness",
  },
  {
    num: "03",
    icon: GraduationCap,
    phase: "PHASE 03 • ENABLEMENT",
    title: "Train",
    body: "Provide training to help teams work with the e-commerce environment.",
    footer: "Team Autonomy",
  },
  {
    num: "04",
    icon: RefreshCw,
    phase: "PHASE 04 • EVOLUTION",
    title: "Maintain & Update",
    body: "Continue with maintenance and updates as your requirements evolve.",
    footer: "Continuous Health",
  },
];

export default function ImplementationToSupportSection() {
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
      className="implementation-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .implementation-section {
          width: 100%;
          overflow: hidden;
          background: #f7f5f2;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }

        /* =========================================
           MAIN WRAPPER
        ========================================= */

        .implementation-wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 80px;
          padding-bottom: 80px;
          box-sizing: border-box;
        }

        /* =========================================
           HEADER
        ========================================= */

        .implementation-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 48px;
        }

        .implementation-header-content {
          max-width: 760px;
        }

        .implementation-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 13px;
          margin-bottom: 16px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1;
        }

        .implementation-label-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .implementation-heading {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .implementation-subtitle {
          max-width: 430px;
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           STEPS GRID
        ========================================= */

        .implementation-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        /* =========================================
           CARD
        ========================================= */

        .implementation-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 280px;
          padding: 24px;
          box-sizing: border-box;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

          opacity: 0;
          transform: translateY(32px);

          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms ease;
        }

        .implementation-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .implementation-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(122, 31, 61, 0.12);
        }

        /* =========================================
           TOP ROW
        ========================================= */

        .implementation-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .implementation-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 700;
        }

        .implementation-icon {
          color: ${WINE};
        }

        /* =========================================
           CARD CONTENT
        ========================================= */

        .implementation-phase {
          margin: 0 0 9px;
          color: #a9a6b0;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.08em;
        }

        .implementation-card-title {
          margin: 0 0 9px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.35;
        }

        .implementation-card-body {
          margin: 0 0 24px;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.7;
        }

        /* =========================================
           CARD FOOTER
        ========================================= */

        .implementation-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: auto;
          padding-top: 13px;
          border-top: 1px solid #ece9e4;
        }

        .implementation-footer-text {
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.4;
        }

        .implementation-arrow {
          flex-shrink: 0;
          color: ${WINE};
          transition: transform 300ms ease;
        }

        .implementation-card:hover .implementation-arrow {
          transform: translateX(4px);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1200px) {
          .implementation-wrapper {
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .implementation-header {
            margin-bottom: 40px;
          }

          .implementation-heading {
            font-size: 34px;
          }

          .implementation-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .implementation-card {
            min-height: 270px;
          }
        }

        /* =========================================
           SMALL TABLET / LARGE MOBILE
        ========================================= */

        @media (max-width: 900px) {
          .implementation-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .implementation-header-content {
            max-width: 100%;
          }

          .implementation-subtitle {
            max-width: 650px;
          }

          .implementation-heading {
            font-size: 32px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .implementation-wrapper {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .implementation-header {
            gap: 16px;
            margin-bottom: 30px;
          }

          .implementation-label {
            padding: 7px 12px;
            margin-bottom: 13px;
            font-size: 9px;
          }

          .implementation-heading {
            font-size: 28px;
            line-height: 1.22;
          }

          .implementation-subtitle {
            font-size: 13px;
            line-height: 1.65;
          }

          .implementation-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .implementation-card {
            min-height: 250px;
            padding: 21px;
            border-radius: 14px;
          }

          .implementation-card-top {
            margin-bottom: 20px;
          }

          .implementation-number {
            width: 38px;
            height: 38px;
            font-size: 11px;
          }

          .implementation-phase {
            font-size: 8.5px;
          }

          .implementation-card-title {
            font-size: 16px;
          }

          .implementation-card-body {
            font-size: 12.5px;
            line-height: 1.65;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .implementation-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .implementation-heading {
            font-size: 24px;
          }

          .implementation-subtitle {
            font-size: 12.5px;
          }

          .implementation-grid {
            gap: 13px;
          }

          .implementation-card {
            min-height: 235px;
            padding: 19px;
          }

          .implementation-card-title {
            font-size: 15px;
          }

          .implementation-card-body {
            font-size: 12px;
          }

          .implementation-footer-text {
            font-size: 10.5px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .implementation-card {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .implementation-card:hover {
            transform: none;
          }

          .implementation-arrow {
            transition: none;
          }
        }
      `}</style>

      <div className="implementation-wrapper">
        {/* Header */}
        <div className="implementation-header">
          <div className="implementation-header-content">
            <span className="implementation-label">
              <span className="implementation-label-dot" />
              OUR APPROACH
            </span>

            <h2 className="implementation-heading">
              From Implementation to Ongoing Support
            </h2>
          </div>

          <p className="implementation-subtitle">
            A structured, disciplined delivery lifecycle built to minimize
            disruption and maximize long-term operational velocity.
          </p>
        </div>

        {/* Steps */}
        <div className="implementation-grid">
          {steps.map(
            ({ num, icon: Icon, phase, title, body, footer }, index) => (
              <div
                key={num}
                className={`implementation-card ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 150}ms`
                    : "0ms",
                }}
              >
                {/* Top Row */}
                <div className="implementation-card-top">
                  <span className="implementation-number">{num}</span>

                  <Icon
                    className="implementation-icon"
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* Phase */}
                <p className="implementation-phase">{phase}</p>

                {/* Title */}
                <h3 className="implementation-card-title">{title}</h3>

                {/* Body */}
                <p className="implementation-card-body">{body}</p>

                {/* Footer */}
                <div className="implementation-card-footer">
                  <span className="implementation-footer-text">
                    {footer}
                  </span>

                  <ArrowRight
                    className="implementation-arrow"
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}