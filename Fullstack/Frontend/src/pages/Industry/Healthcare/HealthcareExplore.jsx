import React, { useEffect, useRef } from "react";
import {
  User,
  ClipboardList,
  Package,
  CreditCard,
  FlaskConical,
  Smartphone,
  BarChart2,
  Lock,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";
const ICON_BG = "#fbeef1";

const cards = [
  {
    icon: User,
    title: "Patient Management",
    body: "Manage patient information and everyday patient-related activities through a centralized digital environment.",
    tags: ["Patient Registration", "Records", "Appointments", "Queue Management"],
  },
  {
    icon: ClipboardList,
    title: "Staff & Operations",
    body: "Support healthcare workforce and operational activities through organized digital processes.",
    tags: ["Staff Records", "Payroll", "Shift Scheduling", "Duty Rosters"],
  },
  {
    icon: Package,
    title: "Inventory & Supplies",
    body: "Maintain visibility across medical supplies, equipment and procurement activities.",
    tags: [
      "Inventory Tracking",
      "Procurement",
      "Vendor Management",
      "Supply Monitoring",
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Finance",
    body: "Support billing, payment and financial activities through structured digital workflows.",
    tags: ["Patient Billing", "Payments", "Financial Records", "Reporting"],
  },
  {
    icon: FlaskConical,
    title: "Clinical & Laboratory",
    body: "Connect laboratory and diagnostic workflows with relevant healthcare systems and information.",
    tags: [
      "Laboratory Workflows",
      "Diagnostic Reports",
      "System Integration",
      "Information Sharing",
    ],
  },
  {
    icon: Smartphone,
    title: "Patient Engagement",
    body: "Provide digital channels that support patient access, communication and engagement.",
    tags: ["Patient Portals", "Virtual Consultations", "Reminders", "Follow-Ups"],
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    body: "Bring operational information into dashboards and reports to support better visibility.",
    tags: ["Dashboards", "Analytics", "Reporting", "Operational Insights"],
  },
  {
    icon: Lock,
    title: "Security & Access",
    body: "Support controlled access and responsible management of healthcare information.",
    tags: ["Role-Based Access", "Data Protection", "Audit Trails", "Security Controls"],
  },
];

export default function HealthcareSolutionsGridSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = Array.from(
      grid.querySelectorAll(".healthcare-card-observer")
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    function setupAnimation() {
      observer?.disconnect();
      grid.classList.remove("healthcare-reveal-enabled");

      items.forEach((item) => {
        item.classList.remove("is-visible");
      });

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        return;
      }

      grid.classList.add("healthcare-reveal-enabled");

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
              "--reveal-delay",
              `${index * 180}ms`
            );

            entry.target.classList.add("is-visible");
          });

          // Reset off-screen cards so they reveal again on return.
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
      grid.classList.remove("healthcare-reveal-enabled");
    };
  }, []);

  return (
    <section className="healthcare-solutions-section">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .healthcare-solutions-section,
        .healthcare-solutions-section *,
        .healthcare-solutions-section *::before,
        .healthcare-solutions-section *::after {
          box-sizing: border-box;
        }

        .healthcare-solutions-section {
          --healthcare-icon-bg: ${ICON_BG};

          width: 100%;
          background: #f7f7fa;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .healthcare-solutions-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 78px 100px;
        }

        .healthcare-solutions-header {
          display: grid;
          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(0, 0.85fr);
          gap: 60px;
          align-items: start;
          margin-bottom: 42px;
        }

        .healthcare-solutions-header-left,
        .healthcare-solutions-header-right {
          min-width: 0;
        }

        .healthcare-solutions-header-right {
          padding-top: 30px;
        }

        .healthcare-solutions-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin: 0 0 13px;
          font-size: 10px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.07em;
          color: ${WINE};
          text-transform: uppercase;
        }

        .healthcare-solutions-eyebrow-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .healthcare-solutions-heading {
          margin: 0;
          max-width: 650px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 35px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.7px;
          color: ${INK};
        }

        .healthcare-solutions-subheading {
          margin: 0;
          max-width: 560px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.75;
          font-weight: 500;
          color: ${MUTED};
        }

        .healthcare-solutions-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 36px;
        }

        /* Stationary wrapper keeps viewport detection stable. */
        .healthcare-card-observer {
          display: flex;
          min-width: 0;
        }

        .healthcare-card-reveal {
          display: flex;
          width: 100%;
          min-width: 0;
        }

        .healthcare-reveal-enabled
        > .healthcare-card-observer
        > .healthcare-card-reveal {
          opacity: 0;
        }

        .healthcare-reveal-enabled
        > .healthcare-card-observer.is-visible
        > .healthcare-card-reveal {
          animation: healthcare-card-enter
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay, 0ms)
            both;
        }

        @keyframes healthcare-card-enter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .healthcare-solution-card {
          --card-padding: 22px;
          --icon-size: 40px;
          --spread-origin: calc(
            var(--card-padding) + var(--icon-size) / 2
          );

          position: relative;
          isolation: isolate;
          overflow: hidden;
          width: 100%;
          min-width: 0;
          padding: var(--card-padding);
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        /* Pink background expands from the icon center. */
        .healthcare-solution-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: var(--healthcare-icon-bg);

          clip-path: circle(
            0% at var(--spread-origin) var(--spread-origin)
          );

          transition:
            clip-path 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .healthcare-solution-card > * {
          position: relative;
          z-index: 1;
        }

        @media (hover: hover) {
          .healthcare-solution-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          }

          .healthcare-solution-card:hover::before {
            clip-path: circle(
              150% at var(--spread-origin) var(--spread-origin)
            );
          }
        }

        .healthcare-solution-icon {
          width: var(--icon-size);
          height: var(--icon-size);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          border-radius: 9px;
          background: var(--healthcare-icon-bg);
          color: ${WINE};
        }

        .healthcare-solution-title {
          margin: 0 0 9px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: -0.15px;
          color: ${INK};
          overflow-wrap: break-word;
        }

        .healthcare-solution-body {
          margin: 0 0 16px;
          font-size: 11.5px;
          line-height: 1.7;
          font-weight: 400;
          color: ${MUTED};
        }

        .healthcare-solution-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .healthcare-solution-tag {
          display: inline-flex;
          align-items: center;
          max-width: 100%;
          padding: 5px 8px;
          border-radius: 6px;
          background: #f2f1f5;
          color: ${MUTED};
          font-size: 9px;
          line-height: 1.3;
          font-weight: 500;
          white-space: normal;
          overflow-wrap: anywhere;
        }

        .healthcare-solutions-footer {
          margin: 0;
          text-align: center;
          font-size: 10px;
          line-height: 1.6;
          font-weight: 400;
          color: #a29b8f;
        }

        @media (max-width: 1200px) {
          .healthcare-solutions-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .healthcare-solutions-header {
            gap: 40px;
            margin-bottom: 36px;
          }

          .healthcare-solutions-heading {
            font-size: 32px;
          }

          .healthcare-solutions-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .healthcare-solution-card {
            --card-padding: 20px;
          }
        }

        @media (max-width: 900px) {
          .healthcare-solutions-container {
            padding: 65px 40px;
          }

          .healthcare-solutions-header {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
            margin-bottom: 34px;
          }

          .healthcare-solutions-header-right {
            padding-top: 0;
          }

          .healthcare-solutions-heading {
            max-width: 700px;
            font-size: 30px;
            line-height: 1.22;
          }

          .healthcare-solutions-subheading {
            max-width: 700px;
            font-size: 12.5px;
            line-height: 1.72;
          }

          .healthcare-solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-bottom: 30px;
          }
        }

        @media (max-width: 600px) {
          .healthcare-solutions-container {
            padding: 48px 24px 52px;
          }

          .healthcare-solutions-header {
            gap: 15px;
            margin-bottom: 30px;
          }

          .healthcare-solutions-eyebrow {
            margin-bottom: 10px;
            font-size: 8.5px;
          }

          .healthcare-solutions-eyebrow-dot {
            width: 5px;
            height: 5px;
          }

          .healthcare-solutions-heading {
            font-size: 27px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .healthcare-solutions-subheading {
            font-size: 11.5px;
            line-height: 1.72;
          }

          .healthcare-solutions-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
            margin-bottom: 28px;
          }

          .healthcare-solution-card {
            --card-padding: 19px;
            --icon-size: 38px;
            border-radius: 13px;
          }

          .healthcare-solution-icon {
            margin-bottom: 14px;
          }

          .healthcare-solution-title {
            font-size: 13px;
            margin-bottom: 7px;
          }

          .healthcare-solution-body {
            font-size: 11px;
            line-height: 1.68;
            margin-bottom: 14px;
          }

          .healthcare-solution-tag {
            font-size: 8.5px;
            padding: 5px 7px;
          }

          .healthcare-solutions-footer {
            font-size: 9.5px;
          }
        }

        @media (max-width: 480px) {
          .healthcare-solutions-container {
            padding: 42px 16px 46px;
          }

          .healthcare-solutions-heading {
            font-size: 24px;
          }

          .healthcare-solutions-subheading {
            font-size: 11px;
            line-height: 1.68;
          }

          .healthcare-solution-card {
            --card-padding: 17px;
            --icon-size: 36px;
          }

          .healthcare-solution-icon {
            margin-bottom: 13px;
          }

          .healthcare-solution-title {
            font-size: 12.5px;
          }

          .healthcare-solution-body {
            font-size: 10.5px;
          }

          .healthcare-solution-tag {
            font-size: 8px;
            padding: 4px 6px;
          }

          .healthcare-solutions-footer {
            font-size: 9px;
          }
        }

        @media (max-width: 340px) {
          .healthcare-solutions-container {
            padding: 38px 16px 42px;
          }

          .healthcare-solutions-heading {
            font-size: 22px;
          }

          .healthcare-solutions-subheading {
            font-size: 10.5px;
          }

          .healthcare-solution-body {
            font-size: 10px;
          }

          .healthcare-solutions-footer {
            font-size: 8.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .healthcare-reveal-enabled
          > .healthcare-card-observer
          > .healthcare-card-reveal,
          .healthcare-reveal-enabled
          > .healthcare-card-observer.is-visible
          > .healthcare-card-reveal {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .healthcare-solution-card,
          .healthcare-solution-card::before {
            transition: none;
          }

          .healthcare-solution-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="healthcare-solutions-container">
        <div className="healthcare-solutions-header">
          <div className="healthcare-solutions-header-left">
            <p className="healthcare-solutions-eyebrow">
              <span className="healthcare-solutions-eyebrow-dot" />
              EXPLORE HEALTHCARE SOLUTIONS
            </p>

            <h2 className="healthcare-solutions-heading">
              Digital Solutions Built Around Healthcare Operations
            </h2>
          </div>

          <div className="healthcare-solutions-header-right">
            <p className="healthcare-solutions-subheading">
              Healthcare organizations have different workflows, teams and
              operational requirements. Our solutions are designed to support
              essential healthcare functions while keeping information and
              processes better connected.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="healthcare-solutions-grid">
          {cards.map(({ icon: Icon, title, body, tags }, index) => (
            <div
              key={title}
              className="healthcare-card-observer"
              data-index={index}
            >
              <div className="healthcare-card-reveal">
                <article className="healthcare-solution-card">
                  <span className="healthcare-solution-icon">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>

                  <h3 className="healthcare-solution-title">
                    {title}
                  </h3>

                  <p className="healthcare-solution-body">
                    {body}
                  </p>

                  <div className="healthcare-solution-tags">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="healthcare-solution-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        <p className="healthcare-solutions-footer">
          These solution areas are based on the capabilities TechTorch
          currently documents for Healthcare &amp; Hospital Management.
        </p>
      </div>
    </section>
  );
}