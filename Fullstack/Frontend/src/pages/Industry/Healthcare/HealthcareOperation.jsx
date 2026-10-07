import React, { useEffect, useRef } from "react";
import {
  Briefcase,
  RefreshCw,
  BarChart2,
  SlidersHorizontal,
  Link2,
  FileText,
  CircleDollarSign,
  TrendingUp,
  Share2,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const TORCHX_IMAGE = "/financeentprise.png";

const areas = [
  {
    num: "01",
    icon: Briefcase,
    title: "Connected Information",
    body: "Bring relevant financial and business information together within connected systems.",
  },
  {
    num: "02",
    icon: RefreshCw,
    title: "Organized Processes",
    body: "Support everyday activities through structured digital workflows and integrated business systems.",
  },
  {
    num: "03",
    icon: BarChart2,
    title: "Clearer Reporting",
    body: "Use reporting and analytics capabilities to help teams understand business information more effectively.",
  },
  {
    num: "04",
    icon: SlidersHorizontal,
    title: "Flexible Technology",
    body: "Adapt technology around changing business requirements through scalable and customizable solutions.",
  },
  {
    num: "05",
    icon: Link2,
    title: "Secure Environment",
    body: "Support business systems and sensitive information with security-focused technology capabilities.",
  },
];

const modules = [
  {
    icon: FileText,
    title: "Automated Invoicing",
    body: "Generate branded invoices, recurring schedules, and automated client payment reminders with integrated ledgers.",
  },
  {
    icon: CircleDollarSign,
    title: "Expense & Payroll Control",
    body: "Capture employee receipts, track approval hierarchies, and sync payroll commitments directly into Accounts.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Financial Reports",
    body: "Instant P&L, balance sheets, cash flow projections, and regulatory compliance snapshots at your fingertips.",
  },
  {
    icon: Share2,
    title: "Unified Operational Data",
    body: "Native multi-module synchronization across clients, staff timesheets, project budgets, and bank feeds.",
  },
];

function Pill({ children }) {
  return (
    <span className="finance-pill">
      <span className="finance-pill-dot" />
      {children}
    </span>
  );
}

// Each grid reveals independently and replays when cards return.
function useRepeatCardReveal() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = Array.from(
      grid.querySelectorAll(".finance-card-observer")
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    function setupAnimation() {
      observer?.disconnect();
      grid.classList.remove("finance-reveal-enabled");

      items.forEach((item) => {
        item.classList.remove("is-visible");
      });

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        return;
      }

      grid.classList.add("finance-reveal-enabled");

      observer = new IntersectionObserver(
        (entries) => {
          const entering = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                Number(a.target.dataset.index) -
                Number(b.target.dataset.index)
            );

          entering.forEach((entry, index) => {
            entry.target.style.setProperty(
              "--finance-delay",
              `${index * 180}ms`
            );

            entry.target.classList.add("is-visible");
          });

          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0 }
      );

      items.forEach((item) => observer.observe(item));
    }

    setupAnimation();

    motionPreference.addEventListener("change", setupAnimation);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", setupAnimation);
      grid.classList.remove("finance-reveal-enabled");
    };
  }, []);

  return gridRef;
}

export default function KeyAreasAndTorchXSections() {
  const areasRef = useRepeatCardReveal();
  const modulesRef = useRepeatCardReveal();

  return (
    <div className="finance-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .finance-page,
        .finance-page *,
        .finance-page *::before,
        .finance-page *::after {
          box-sizing: border-box;
        }

        .finance-page {
          width: 100%;
          background: #ffffff;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .finance-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
        }

        .finance-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          max-width: 100%;
          padding: 6px 11px;
          margin-bottom: 16px;
          border-radius: 999px;
          background: #fbeef1;
          color: ${WINE};
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .finance-pill-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .finance-areas-section {
          width: 100%;
          background: #f4f1ec;
        }

        .finance-areas-container {
          padding-top: 70px;
          padding-bottom: 72px;
        }

        .finance-main-heading {
          margin: 0 0 30px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 31px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.7px;
          color: ${INK};
        }

        .finance-areas-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
        }

        /* Stationary observer wrapper prevents animation flicker. */
        .finance-card-observer {
          display: flex;
          min-width: 0;
        }

        .finance-card-reveal {
          display: flex;
          width: 100%;
          min-width: 0;
        }

        .finance-page .finance-reveal-enabled
        > .finance-card-observer
        > .finance-card-reveal {
          opacity: 0;
        }

        .finance-page .finance-reveal-enabled
        > .finance-card-observer.is-visible
        > .finance-card-reveal {
          animation: finance-card-enter
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--finance-delay, 0ms)
            both;
        }

        @keyframes finance-card-enter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .finance-area-card {
          width: 100%;
          min-width: 0;
          min-height: 175px;
          padding: 20px;
          background: #ffffff;
          border: 1px solid #e7e4df;
          border-radius: 14px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.035);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .finance-area-card:hover {
          transform: translateY(-4px);
          border-color: #ead4db;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
        }

        .finance-area-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 17px;
        }

        .finance-area-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 9px;
          background: #fbeef1;
          color: ${WINE};
        }

        .finance-area-number {
          font-size: 9px;
          line-height: 1;
          font-weight: 700;
          color: ${WINE};
          letter-spacing: 0.05em;
        }

        .finance-area-title {
          margin: 0 0 8px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
          color: ${INK};
          overflow-wrap: break-word;
        }

        .finance-area-body {
          margin: 0;
          font-size: 10px;
          line-height: 1.65;
          color: ${MUTED};
        }

        .finance-torchx-section {
          width: 100%;
          background: #ffffff;
        }

        .finance-torchx-container {
          padding-top: 82px;
          padding-bottom: 85px;
          display: grid;
          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.25fr);
          gap: 80px;
          align-items: center;
        }

        .finance-image-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .finance-image {
          width: 100%;
          max-width: 540px;
          height: auto;
          display: block;
          object-fit: contain;
          border-radius: 18px;
          filter: drop-shadow(0 16px 20px rgba(0, 0, 0, 0.13));
        }

        .finance-torchx-content {
          min-width: 0;
        }

        .finance-torchx-heading {
          max-width: 700px;
          margin: 0 0 16px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 31px;
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.7px;
          color: ${INK};
        }

        .finance-torchx-description {
          max-width: 720px;
          margin: 0 0 23px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.75;
          font-weight: 500;
          color: ${MUTED};
        }

        .finance-module-label {
          margin: 0 0 12px;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 700;
          color: #8a8378;
          letter-spacing: 0.05em;
        }

        .finance-module-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .finance-module-card {
          width: 100%;
          min-width: 0;
          padding: 18px;
          background: #ffffff;
          border: 1px solid #e8e5e1;
          border-radius: 12px;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .finance-module-card:hover {
          transform: translateY(-3px);
          border-color: #ead4db;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }

        .finance-module-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 11px;
          border-radius: 8px;
          background: #fbeef1;
          color: ${WINE};
        }

        .finance-module-title {
          margin: 0 0 7px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 700;
          color: ${INK};
          overflow-wrap: break-word;
        }

        .finance-module-body {
          margin: 0;
          font-size: 9px;
          line-height: 1.65;
          color: ${MUTED};
        }

        @media (max-width: 1200px) {
          .finance-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .finance-areas-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 15px;
          }

          .finance-area-card {
            padding: 18px;
          }

          .finance-torchx-container {
            gap: 55px;
          }

          .finance-torchx-heading {
            font-size: 29px;
          }
        }

        @media (max-width: 900px) {
          .finance-areas-container {
            padding-top: 55px;
            padding-bottom: 58px;
          }

          .finance-main-heading {
            font-size: 28px;
            margin-bottom: 26px;
          }

          .finance-areas-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .finance-area-card {
            min-height: 155px;
            padding: 18px;
          }

          .finance-area-title {
            font-size: 12px;
          }

          .finance-area-body {
            font-size: 9.5px;
          }

          .finance-torchx-container {
            grid-template-columns: 1fr;
            gap: 48px;
            align-items: start;
            padding-top: 65px;
            padding-bottom: 68px;
          }

          .finance-image-wrapper {
            max-width: 650px;
            margin: 0 auto;
          }

          .finance-image {
            max-width: 600px;
          }

          .finance-torchx-content {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
          }

          .finance-torchx-description {
            font-size: 11.5px;
          }

          .finance-module-title {
            font-size: 11px;
          }
        }

        @media (max-width: 600px) {
          .finance-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .finance-areas-container {
            padding-top: 42px;
            padding-bottom: 46px;
          }

          .finance-pill {
            font-size: 8px;
            padding: 5px 9px;
            margin-bottom: 13px;
          }

          .finance-pill-dot {
            width: 5px;
            height: 5px;
          }

          .finance-main-heading {
            font-size: 24px;
            line-height: 1.22;
            letter-spacing: -0.5px;
            margin-bottom: 23px;
          }

          .finance-areas-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .finance-area-card {
            min-height: auto;
            padding: 17px;
          }

          .finance-area-top {
            margin-bottom: 13px;
          }

          .finance-area-icon {
            width: 34px;
            height: 34px;
          }

          .finance-area-body {
            font-size: 10px;
            line-height: 1.62;
          }

          .finance-torchx-container {
            padding-top: 48px;
            padding-bottom: 54px;
            gap: 36px;
          }

          .finance-image {
            max-width: 500px;
            border-radius: 15px;
          }

          .finance-torchx-heading {
            font-size: 24px;
            line-height: 1.2;
            letter-spacing: -0.45px;
          }

          .finance-torchx-description {
            font-size: 11px;
            line-height: 1.7;
            margin-bottom: 20px;
          }

          .finance-module-label {
            font-size: 8px;
            margin-bottom: 10px;
          }

          .finance-module-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .finance-module-card {
            padding: 16px;
          }

          .finance-module-body {
            line-height: 1.62;
          }
        }

        @media (max-width: 480px) {
          .finance-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .finance-areas-container {
            padding-top: 38px;
            padding-bottom: 42px;
          }

          .finance-main-heading {
            font-size: 22px;
          }

          .finance-area-card {
            padding: 15px;
          }

          .finance-area-title {
            font-size: 11.5px;
          }

          .finance-area-body {
            font-size: 9.5px;
          }

          .finance-torchx-container {
            padding-top: 42px;
            padding-bottom: 48px;
            gap: 32px;
          }

          .finance-torchx-heading {
            font-size: 22px;
          }

          .finance-torchx-description {
            font-size: 10.5px;
          }

          .finance-module-card {
            padding: 15px;
          }
        }

        @media (max-width: 340px) {
          .finance-main-heading,
          .finance-torchx-heading {
            font-size: 20px;
          }

          .finance-torchx-description {
            font-size: 10px;
          }

          .finance-area-title {
            font-size: 11px;
          }

          .finance-area-body {
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .finance-page .finance-reveal-enabled
          > .finance-card-observer
          > .finance-card-reveal,
          .finance-page .finance-reveal-enabled
          > .finance-card-observer.is-visible
          > .finance-card-reveal {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .finance-area-card,
          .finance-module-card {
            transition: none;
          }

          .finance-area-card:hover,
          .finance-module-card:hover {
            transform: none;
          }
        }
      `}</style>

      {/* KEY BUSINESS AREAS */}
      <section className="finance-areas-section">
        <div className="finance-container finance-areas-container">
          <Pill>KEY BUSINESS AREAS</Pill>

          <h2 className="finance-main-heading">
            Supporting Better Financial Operations
          </h2>

          <div ref={areasRef} className="finance-areas-grid">
            {areas.map(({ num, icon: Icon, title, body }, index) => (
              <div
                key={num}
                className="finance-card-observer"
                data-index={index}
              >
                <div className="finance-card-reveal">
                  <article className="finance-area-card">
                    <div className="finance-area-top">
                      <span className="finance-area-icon">
                        <Icon size={17} strokeWidth={1.8} />
                      </span>

                      <span className="finance-area-number">{num}</span>
                    </div>

                    <h3 className="finance-area-title">{title}</h3>
                    <p className="finance-area-body">{body}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TORCHX */}
      <section className="finance-torchx-section">
        <div className="finance-container finance-torchx-container">
          <div className="finance-image-wrapper">
            <img
              src={TORCHX_IMAGE}
              alt="TorchX financial management dashboard"
              className="finance-image"
            />
          </div>

          <div className="finance-torchx-content">
            <Pill>TORCHX ENTERPRISE SUITE</Pill>

            <h2 className="finance-torchx-heading">
              Financial Management Within
              <br />
              a Unified Operating Platform
            </h2>

            <p className="finance-torchx-description">
              TorchX is TechTorch&apos;s proprietary all-in-one operating
              platform. Its dedicated Accounts module integrates directly
              with CRM, Human Resource Management, and project invoicing—
              eliminating duplicate data entry and manual reconciliation.
            </p>

            <p className="finance-module-label">
              CORE INTEGRATED MODULES
            </p>

            <div ref={modulesRef} className="finance-module-grid">
              {modules.map(({ icon: Icon, title, body }, index) => (
                <div
                  key={title}
                  className="finance-card-observer"
                  data-index={index}
                >
                  <div className="finance-card-reveal">
                    <article className="finance-module-card">
                      <span className="finance-module-icon">
                        <Icon size={15} strokeWidth={1.8} />
                      </span>

                      <h3 className="finance-module-title">{title}</h3>
                      <p className="finance-module-body">{body}</p>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}