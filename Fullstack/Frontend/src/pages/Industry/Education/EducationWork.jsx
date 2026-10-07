import React from "react";
import {
  ChevronRight,
  User,
  ClipboardList,
  Hexagon,
  TrendingUp,
  Monitor,
  MessageSquare,
  Landmark,
  BarChart3,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";
const ICON_BG = "#fbeef1";

const solutions = [
  {
    icon: User,
    title: "Student Management",
    body: "Keep records, progression pathways, and student profiles unified across faculties and semesters.",
  },
  {
    icon: ClipboardList,
    title: "Admissions & Enrollment",
    body: "Streamline digital applications, document verification, and registration queues end-to-end.",
  },
  {
    icon: Hexagon,
    title: "Academic Scheduling",
    body: "Coordinate modular timetables, room allocation, faculty workloads, and examination tracks.",
  },
  {
    icon: TrendingUp,
    title: "Smart Attendance",
    body: "Capture real-time participation across lecture halls, laboratory sections, and virtual classrooms.",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    body: "Centralize rich course content, collaborative assignments, and assessment rubrics in one portal.",
  },
  {
    icon: MessageSquare,
    title: "Connected Communication",
    body: "Deliver immediate alerts, institutional announcements, and direct advisor touchpoints.",
  },
  {
    icon: Landmark,
    title: "Finance & Tuition",
    body: "Manage fee structures, automated installment tracking, scholarships, and departmental budgets.",
  },
  {
    icon: BarChart3,
    title: "Executive Analytics",
    body: "Generate compliance reporting, accreditation analytics, and retention intelligence instantly.",
  },
];

export default function SolutionsGridSection() {
  return (
    <section className="solutions-section">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .solutions-section {
          --solutions-sticky-top: 100px;
          --solutions-icon-bg: ${ICON_BG};

          width: 100%;
          background: #f3f1ec;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: visible;
        }

        .solutions-section,
        .solutions-section *,
        .solutions-section *::before,
        .solutions-section *::after {
          box-sizing: border-box;
        }

        .solutions-section .solutions-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 80px 100px;

          display: grid;
          grid-template-columns:
            minmax(300px, 0.85fr)
            minmax(0, 1.45fr);

          gap: 64px;
          align-items: start;
          overflow: visible;
        }

        /* Sticky is bounded by this section's grid container. */
        .solutions-section .solutions-copy {
          position: sticky;
          top: var(--solutions-sticky-top);
          align-self: start;
          width: 100%;
          min-width: 0;
          height: fit-content;
        }

        .solutions-section .solutions-eyebrow {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;
          color: ${WINE};
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        .solutions-section .solutions-eyebrow svg {
          flex-shrink: 0;
        }

        .solutions-section .solutions-heading {
          max-width: 560px;
          margin: 0 0 20px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.17;
          letter-spacing: -0.65px;
          overflow-wrap: break-word;
        }

        .solutions-section .solutions-subheading {
          max-width: 580px;
          margin: 0 0 30px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.75;
        }

        .solutions-section .solutions-label {
          max-width: 500px;
          margin: 0;
          color: #8a8378;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.06em;
        }

        /* Normal page scrolling, without an inner scrollbar. */
        .solutions-section .solutions-grid {
          width: 100%;
          min-width: 0;
          height: auto;
          max-height: none;
          overflow: visible;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .solutions-section .solution-card {
          --card-padding: 24px;
          --icon-size: 44px;
          --color-origin: calc(
            var(--card-padding) + var(--icon-size) / 2
          );

          position: relative;
          isolation: isolate;
          overflow: hidden;

          min-width: 0;
          padding: var(--card-padding);

          display: flex;
          flex-direction: column;
          gap: 16px;

          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.035);
          border-radius: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        /* Background expands outward from the icon center. */
        .solutions-section .solution-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: var(--solutions-icon-bg);

          clip-path: circle(
            0% at var(--color-origin) var(--color-origin)
          );

          transition:
            clip-path 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .solutions-section .solution-card > * {
          position: relative;
          z-index: 1;
        }

        .solutions-section .solution-icon {
          width: var(--icon-size);
          height: var(--icon-size);
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 12px;
          background: var(--solutions-icon-bg);
          color: ${WINE};
        }

        .solutions-section .solution-content {
          min-width: 0;
        }

        .solutions-section .solution-title {
          margin: 0 0 7px;
          color: ${INK};
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          overflow-wrap: break-word;
        }

        .solutions-section .solution-body {
          margin: 0;
          color: ${MUTED};
          font-size: 14px;
          font-weight: 400;
          line-height: 1.65;
        }

        @media (hover: hover) {
          .solutions-section .solution-card:hover {
            transform: translateY(-4px);
            border-color: rgba(122, 31, 61, 0.12);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
          }

          .solutions-section .solution-card:hover::before {
            clip-path: circle(
              150% at var(--color-origin) var(--color-origin)
            );
          }
        }

        @media (min-width: 1400px) {
          .solutions-section .solutions-container {
            padding-top: 88px;
            padding-bottom: 88px;
            gap: 76px;
          }

          .solutions-section .solutions-heading {
            font-size: 40px;
          }

          .solutions-section .solutions-subheading {
            font-size: 16.5px;
          }

          .solutions-section .solutions-grid {
            gap: 22px;
          }

          .solutions-section .solution-card {
            --card-padding: 26px;
          }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
          .solutions-section .solutions-container {
            padding: 70px 40px;
            grid-template-columns:
              minmax(270px, 0.85fr)
              minmax(0, 1.35fr);
            gap: 42px;
          }

          .solutions-section .solutions-heading {
            font-size: 33px;
          }

          .solutions-section .solutions-subheading {
            font-size: 15px;
          }

          .solutions-section .solutions-grid {
            gap: 16px;
          }

          .solutions-section .solution-card {
            --card-padding: 21px;
          }
        }

        /* Tablet: stack the introduction above the cards. */
        @media (max-width: 900px) {
          .solutions-section .solutions-container {
            grid-template-columns: minmax(0, 1fr);
          }

          .solutions-section .solutions-copy {
            position: static;
            top: auto;
          }
        }

        @media (min-width: 768px) and (max-width: 900px) {
          .solutions-section .solutions-container {
            gap: 42px;
          }

          .solutions-section .solutions-heading,
          .solutions-section .solutions-subheading {
            max-width: 760px;
          }

          .solutions-section .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .solutions-section .solution-card {
            --card-padding: 22px;
          }
        }

        @media (max-width: 767px) {
          .solutions-section .solutions-container {
            padding: 56px 24px;
            gap: 32px;
          }

          .solutions-section .solutions-eyebrow {
            gap: 3px;
            margin-bottom: 13px;
            font-size: 11px;
            line-height: 1.5;
          }

          .solutions-section .solutions-heading {
            max-width: 680px;
            margin-bottom: 16px;
            font-size: 29px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .solutions-section .solutions-subheading {
            max-width: 680px;
            margin-bottom: 24px;
            font-size: 14px;
            line-height: 1.7;
          }

          .solutions-section .solutions-label {
            font-size: 10px;
            line-height: 1.55;
          }

          .solutions-section .solutions-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .solutions-section .solution-card {
            --card-padding: 20px;
            --icon-size: 42px;
            gap: 14px;
            border-radius: 14px;
          }

          .solutions-section .solution-icon {
            border-radius: 11px;
          }

          .solutions-section .solution-body {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .solutions-section .solutions-container {
            padding: 48px 16px;
            gap: 28px;
          }

          .solutions-section .solutions-heading {
            font-size: 26px;
            line-height: 1.21;
            letter-spacing: -0.4px;
          }

          .solutions-section .solutions-subheading {
            font-size: 13px;
          }

          .solutions-section .solutions-label {
            font-size: 9.5px;
          }

          .solutions-section .solutions-grid {
            gap: 11px;
          }

          .solutions-section .solution-card {
            --card-padding: 17px;
            --icon-size: 40px;
            border-radius: 13px;
            gap: 13px;
          }

          .solutions-section .solution-icon {
            border-radius: 10px;
          }

          .solutions-section .solution-title {
            margin-bottom: 6px;
            font-size: 14px;
          }

          .solutions-section .solution-body {
            font-size: 12.5px;
          }
        }

        @media (max-width: 360px) {
          .solutions-section .solutions-container {
            padding: 42px 16px;
          }

          .solutions-section .solutions-heading {
            font-size: 24px;
            line-height: 1.22;
          }

          .solutions-section .solutions-subheading {
            font-size: 12.5px;
          }

          .solutions-section .solution-card {
            --card-padding: 16px;
          }

          .solutions-section .solution-body {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solutions-section .solution-card,
          .solutions-section .solution-card::before {
            transition: none;
          }

          .solutions-section .solution-card:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="solutions-container">
        {/* Left content: sticky until the section ends */}
        <div className="solutions-copy">
          <div className="solutions-eyebrow">
            <ChevronRight size={14} strokeWidth={3} />
            <span>BUILT AROUND THE WAY EDUCATION WORKS</span>
          </div>

          <h2 className="solutions-heading">
            Technology that supports real institutional needs.
          </h2>

          <p className="solutions-subheading">
            We believe education technology should adapt to the
            organization using it. Instead of treating every institution
            the same, our approach considers its existing processes,
            people, systems and future requirements.
          </p>

          <p className="solutions-label">
            OUR SOLUTIONS CAN SUPPORT KEY AREAS SUCH AS:
          </p>
        </div>

        {/* Right cards: scroll with the page */}
        <div className="solutions-grid">
          {solutions.map(({ icon: Icon, title, body }) => (
            <article className="solution-card" key={title}>
              <span className="solution-icon">
                <Icon size={20} strokeWidth={1.8} />
              </span>

              <div className="solution-content">
                <h3 className="solution-title">{title}</h3>
                <p className="solution-body">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}