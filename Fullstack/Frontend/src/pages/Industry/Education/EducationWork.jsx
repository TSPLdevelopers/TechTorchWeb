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
      <style>{`
        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .solutions-section {
          width: 100%;
          overflow: hidden;

          background: #f3f1ec;
          color: ${INK};

          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           MAIN CONTAINER
           
           DESKTOP:
           100px left/right
        ===================================================== */

        .solutions-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-top: 80px;
          padding-right: 100px;
          padding-bottom: 80px;
          padding-left: 100px;

          box-sizing: border-box;

          display: grid;

          grid-template-columns:
            minmax(300px, 0.85fr)
            minmax(0, 1.45fr);

          gap: 64px;

          align-items: start;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .solutions-copy {
          width: 100%;
          min-width: 0;
        }


        /* =====================================================
           EYEBROW
           INTER
        ===================================================== */

        .solutions-eyebrow {
          display: flex;
          align-items: center;

          gap: 4px;

          margin-bottom: 16px;

          color: ${WINE};

          font-family: "Inter", sans-serif;

          font-size: 12px;
          font-weight: 600;

          letter-spacing: 0.04em;

          line-height: 1.4;
        }


        /* =====================================================
           HEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .solutions-heading {
          max-width: 560px;

          margin: 0 0 20px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 38px;

          font-weight: 700;

          line-height: 1.17;

          letter-spacing: -0.65px;
        }


        /* =====================================================
           SUBHEADING
           PLUS JAKARTA SANS
        ===================================================== */

        .solutions-subheading {
          max-width: 580px;

          margin: 0 0 30px;

          color: ${MUTED};

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;

          font-weight: 500;

          line-height: 1.75;
        }


        /* =====================================================
           LABEL
           INTER
        ===================================================== */

        .solutions-label {
          max-width: 500px;

          margin: 0;

          color: #8a8378;

          font-family: "Inter", sans-serif;

          font-size: 11px;

          font-weight: 600;

          line-height: 1.5;

          letter-spacing: 0.06em;
        }


        /* =====================================================
           CARDS GRID
        ===================================================== */

        .solutions-grid {
          width: 100%;
          min-width: 0;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 20px;
        }


        /* =====================================================
           SOLUTION CARD
        ===================================================== */

        .solution-card {
          min-width: 0;

          padding: 24px;

          display: flex;
          flex-direction: column;

          gap: 16px;

          background: #ffffff;

          border: 1px solid rgba(0, 0, 0, 0.035);

          border-radius: 16px;

          box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.06);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }


        .solution-card:hover {
          transform: translateY(-4px);

          border-color: rgba(122, 31, 61, 0.12);

          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.08);
        }


        /* =====================================================
           ICON
        ===================================================== */

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


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .solution-content {
          min-width: 0;
        }


        /* =====================================================
           CARD TITLE
           INTER
        ===================================================== */

        .solution-title {
          margin: 0 0 7px;

          color: ${INK};

          font-family: "Inter", sans-serif;

          font-size: 15px;

          font-weight: 600;

          line-height: 1.4;
        }


        /* =====================================================
           CARD BODY
           INTER
        ===================================================== */

        .solution-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;

          font-size: 14px;

          font-weight: 400;

          line-height: 1.65;
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1400px) {

          .solutions-container {
            padding-top: 88px;
            padding-bottom: 88px;

            gap: 76px;
          }

          .solutions-heading {
            font-size: 40px;
          }

          .solutions-subheading {
            font-size: 16.5px;
          }

          .solutions-grid {
            gap: 22px;
          }

          .solution-card {
            padding: 26px;
          }

        }


        /* =====================================================
           TABLET / LAPTOP
           40px left/right
        ===================================================== */

        @media (min-width: 768px) and (max-width: 1199px) {

          .solutions-container {
            padding-top: 70px;
            padding-right: 40px;
            padding-bottom: 70px;
            padding-left: 40px;

            grid-template-columns:
              minmax(270px, 0.85fr)
              minmax(0, 1.35fr);

            gap: 42px;
          }

          .solutions-heading {
            font-size: 33px;
          }

          .solutions-subheading {
            font-size: 15px;
          }

          .solutions-grid {
            gap: 16px;
          }

          .solution-card {
            padding: 21px;
          }

        }


        /* =====================================================
           TABLET
           STACK LEFT + GRID
        ===================================================== */

        @media (max-width: 900px) and (min-width: 768px) {

          .solutions-container {
            grid-template-columns: 1fr;

            gap: 42px;
          }

          .solutions-heading,
          .solutions-subheading {
            max-width: 760px;
          }

          .solutions-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .solution-card {
            padding: 22px;
          }

        }


        /* =====================================================
           MOBILE
           24px left/right
        ===================================================== */

        @media (max-width: 767px) {

          .solutions-container {
            padding-top: 56px;
            padding-right: 24px;
            padding-bottom: 56px;
            padding-left: 24px;

            grid-template-columns: 1fr;

            gap: 32px;
          }

          .solutions-eyebrow {
            gap: 3px;

            margin-bottom: 13px;

            font-size: 11px;

            line-height: 1.5;
          }

          .solutions-heading {
            max-width: 680px;

            margin-bottom: 16px;

            font-size: 29px;

            line-height: 1.2;

            letter-spacing: -0.5px;
          }

          .solutions-subheading {
            max-width: 680px;

            margin-bottom: 24px;

            font-size: 14px;

            line-height: 1.7;
          }

          .solutions-label {
            font-size: 10px;

            line-height: 1.55;
          }

          .solutions-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .solution-card {
            padding: 20px;

            gap: 14px;

            border-radius: 14px;
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


        /* =====================================================
           SMALL MOBILE
           16px left/right
        ===================================================== */

        @media (max-width: 480px) {

          .solutions-container {
            padding-top: 48px;
            padding-right: 16px;
            padding-bottom: 48px;
            padding-left: 16px;

            gap: 28px;
          }

          .solutions-heading {
            font-size: 26px;

            line-height: 1.21;

            letter-spacing: -0.4px;
          }

          .solutions-subheading {
            font-size: 13px;

            line-height: 1.7;
          }

          .solutions-label {
            font-size: 9.5px;
          }

          .solutions-grid {
            gap: 11px;
          }

          .solution-card {
            padding: 17px;

            border-radius: 13px;

            gap: 13px;
          }

          .solution-icon {
            width: 40px;
            height: 40px;

            border-radius: 10px;
          }

          .solution-title {
            margin-bottom: 6px;

            font-size: 14px;
          }

          .solution-body {
            font-size: 12.5px;

            line-height: 1.65;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
           16px left/right
        ===================================================== */

        @media (max-width: 360px) {

          .solutions-container {
            padding-top: 42px;
            padding-right: 16px;
            padding-bottom: 42px;
            padding-left: 16px;
          }

          .solutions-heading {
            font-size: 24px;

            line-height: 1.22;
          }

          .solutions-subheading {
            font-size: 12.5px;
          }

          .solution-card {
            padding: 16px;
          }

          .solution-body {
            font-size: 12px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

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

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="solutions-copy">

            <div className="solutions-eyebrow">
              <ChevronRight
                size={14}
                strokeWidth={3}
              />

              <span>
                BUILT AROUND THE WAY EDUCATION WORKS
              </span>
            </div>


            {/* PLUS JAKARTA SANS */}

            <h2 className="solutions-heading">
              Technology that supports real institutional needs.
            </h2>


            {/* PLUS JAKARTA SANS */}

            <p className="solutions-subheading">
              We believe education technology should adapt to the
              organization using it. Instead of treating every institution
              the same, our approach considers its existing processes,
              people, systems and future requirements.
            </p>


            {/* INTER */}

            <p className="solutions-label">
              OUR SOLUTIONS CAN SUPPORT KEY AREAS SUCH AS:
            </p>

          </div>


          {/* =================================================
              RIGHT CARD GRID
          ================================================= */}

          <div className="solutions-grid">

            {solutions.map(({ icon: Icon, title, body }) => (
              <div
                className="solution-card"
                key={title}
              >

                <span className="solution-icon">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                  />
                </span>


                <div className="solution-content">

                  {/* INTER */}

                  <h3 className="solution-title">
                    {title}
                  </h3>


                  {/* INTER */}

                  <p className="solution-body">
                    {body}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}