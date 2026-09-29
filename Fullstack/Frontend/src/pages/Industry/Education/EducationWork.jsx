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
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

        .solutions-section {
          width: 100%;
          background: #f3f1ec;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .solutions-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 100px;
          display: grid;
          grid-template-columns: minmax(280px, 1fr) minmax(0, 1.4fr);
          gap: 56px;
          align-items: start;
        }

        /* Left Content */
        .solutions-copy {
          width: 100%;
        }

        .solutions-eyebrow {
          display: flex;
          align-items: center;
          gap: 4px;
          color: ${WINE};
          font-family: "Inter", sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.4;
          margin-bottom: 16px;
        }

        .solutions-heading {
          margin: 0 0 20px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          max-width: 520px;
        }

        .solutions-subheading {
          margin: 0 0 30px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.75;
          max-width: 520px;
        }

        .solutions-label {
          margin: 0;
          color: #8a8378;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.06em;
        }

        /* Cards */
        .solutions-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .solution-card {
          min-width: 0;
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .solution-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #fbeef1;
          color: ${WINE};
        }

        .solution-content {
          min-width: 0;
        }

        .solution-title {
          margin: 0 0 7px;
          color: ${INK};
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .solution-body {
          margin: 0;
          color: ${MUTED};
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* Large Tablet / Laptop */
        @media (max-width: 1100px) {
          .solutions-container {
            padding: 70px 60px;
            grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.3fr);
            gap: 40px;
          }

          .solutions-heading {
            font-size: 32px;
          }

          .solution-card {
            padding: 21px;
          }

          .solutions-grid {
            gap: 16px;
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .solutions-container {
            padding: 64px 40px;
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .solutions-heading,
          .solutions-subheading {
            max-width: 700px;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .solutions-container {
            padding: 56px 24px;
            gap: 32px;
          }

          .solutions-eyebrow {
            font-size: 11px;
            margin-bottom: 13px;
          }

          .solutions-heading {
            font-size: 28px;
            line-height: 1.2;
            margin-bottom: 16px;
          }

          .solutions-subheading {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .solutions-label {
            font-size: 10px;
          }

          .solutions-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .solution-card {
            padding: 20px;
            border-radius: 14px;
            gap: 14px;
          }

          .solution-icon {
            width: 42px;
            height: 42px;
            border-radius: 11px;
          }

          .solution-title {
            font-size: 15px;
          }

          .solution-body {
            font-size: 13px;
            line-height: 1.65;
          }
        }

        /* Small Mobile */
        @media (max-width: 400px) {
          .solutions-container {
            padding: 48px 16px;
          }

          .solutions-heading {
            font-size: 25px;
          }

          .solutions-subheading {
            font-size: 13px;
          }

          .solution-card {
            padding: 18px;
          }

          .solution-body {
            font-size: 13px;
          }
        }

        /* Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .solution-card {
            transition: none;
          }

          .solution-card:hover {
            transform: none;
          }
        }
      `}</style>

      <section className="solutions-section">
        <div className="solutions-container">

          {/* LEFT CONTENT */}
          <div className="solutions-copy">
            <div className="solutions-eyebrow">
              <ChevronRight size={14} strokeWidth={3} />
              <span>BUILT AROUND THE WAY EDUCATION WORKS</span>
            </div>

            {/* Plus Jakarta Sans */}
            <h2 className="solutions-heading">
              Technology that supports real institutional needs.
            </h2>

            {/* Plus Jakarta Sans */}
            <p className="solutions-subheading">
              We believe education technology should adapt to the organization
              using it. Instead of treating every institution the same, our
              approach considers its existing processes, people, systems and
              future requirements.
            </p>

            {/* Inter */}
            <p className="solutions-label">
              OUR SOLUTIONS CAN SUPPORT KEY AREAS SUCH AS:
            </p>
          </div>

          {/* RIGHT CARD GRID */}
          <div className="solutions-grid">
            {solutions.map(({ icon: Icon, title, body }) => (
              <div className="solution-card" key={title}>
                <span className="solution-icon">
                  <Icon size={20} strokeWidth={1.8} />
                </span>

                <div className="solution-content">
                  {/* Inter */}
                  <h3 className="solution-title">{title}</h3>

                  {/* Inter */}
                  <p className="solution-body">{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}