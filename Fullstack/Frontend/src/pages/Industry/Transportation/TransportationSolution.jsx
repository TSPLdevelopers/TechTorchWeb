import React, { useEffect, useRef, useState } from "react";
import {
  LayoutGrid,
  Settings,
  Truck,
  Landmark,
  User,
  GitBranch,
  Monitor,
  Code2,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: LayoutGrid,
    title: "ERP",
    body: "Connect finance, people, customer relationships, inventory and supply chain within a unified business environment.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Operations Management",
    body: "Organize and support day-to-day operational processes through connected digital solutions.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Supply Chain Management",
    body: "Manage supply chain activities across procurement, inventory, suppliers and logistics.",
  },
  {
    num: "04",
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial operations with organized information, reporting and business processes.",
  },
  {
    num: "05",
    icon: User,
    title: "CRM",
    body: "Manage customer information and interactions through a connected customer management environment.",
  },
  {
    num: "06",
    icon: GitBranch,
    title: "Project Management",
    body: "Support project planning, collaboration and workflow management across teams.",
  },
  {
    num: "07",
    icon: Monitor,
    title: "Web Portals",
    body: "Create digital portals for customers, employees and business users.",
  },
  {
    num: "08",
    icon: Code2,
    title: "Software Solutions",
    body: "Develop and integrate software around specific business requirements.",
  },
];

export default function TransportationSolutionsGridSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let animationTimers = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationTimers.forEach((timer) => clearTimeout(timer));
          animationTimers = [];

          setVisibleCards([]);

          cards.forEach((_, index) => {
            const timer = setTimeout(() => {
              setVisibleCards((prev) => {
                if (prev.includes(index)) return prev;
                return [...prev, index];
              });
            }, index * 150);

            animationTimers.push(timer);
          });
        } else {
          animationTimers.forEach((timer) => clearTimeout(timer));
          animationTimers = [];

          setVisibleCards([]);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      animationTimers.forEach((timer) => clearTimeout(timer));
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="transportation-solutions-section"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        /* =========================================
           MAIN SECTION
        ========================================= */

        .transportation-solutions-section {
          width: 100%;
          overflow: hidden;

          background: #ffffff;
          color: ${INK};

          font-family: "Inter", sans-serif;
        }

        .transportation-solutions-section *,
        .transportation-solutions-section *::before,
        .transportation-solutions-section *::after {
          box-sizing: border-box;
        }

        /* =========================================
           MAIN CONTAINER

           Desktop: 100px
           Tablet: 40px
           Mobile: 24px
           Small Mobile: 16px
        ========================================= */

        .transportation-solutions-container {
          width: 100%;
          max-width: 1440px;

          margin: 0 auto;

          padding: 88px 100px;
        }

        /* =========================================
           SECTION LABEL
           INTER
        ========================================= */

        .transportation-solutions-label {
          margin: 0 0 14px;

          color: ${WINE};

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.13em;
        }

        /* =========================================
           HEADING
           PLUS JAKARTA SANS
        ========================================= */

        .transportation-solutions-heading {
          max-width: 720px;

          margin: 0 0 45px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(31px, 3.5vw, 43px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.045em;
        }

        /* =========================================
           CARDS GRID
        ========================================= */

        .transportation-solutions-grid {
          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 18px;
        }

        /* =========================================
           CARD
        ========================================= */

        .transportation-solution-card {
          position: relative;

          min-height: 235px;

          padding: 21px;

          border: 1px solid #ece9e4;
          border-radius: 15px;

          background: #ffffff;

          overflow: hidden;

          opacity: 0;

          transform:
            translateY(42px)
            scale(0.95);

          transition:
            opacity 0.65s ease,
            transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.3s ease,
            box-shadow 0.35s ease,
            background 0.3s ease;
        }

        /* =========================================
           CARD VISIBLE
        ========================================= */

        .transportation-solution-card.is-visible {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =========================================
           CARD HOVER
        ========================================= */

        .transportation-solution-card:hover {
          border-color: #e4d4da;

          background: #fffdfd;

          box-shadow:
            0 14px 35px rgba(40, 15, 30, 0.08);

          transform:
            translateY(-6px)
            scale(1.01);
        }

        /* =========================================
           CARD TOP
        ========================================= */

        .transportation-solution-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-bottom: 27px;
        }

        /* =========================================
           ICON BOX
        ========================================= */

        .transportation-solution-icon {
          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background: #fbeef1;
          color: ${WINE};

          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .transportation-solution-card:hover
        .transportation-solution-icon {
          transform: scale(1.16);

          background: #f8e4e9;

          box-shadow:
            0 7px 16px rgba(122, 31, 61, 0.12);
        }

        .transportation-solution-icon svg {
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .transportation-solution-card:hover
        .transportation-solution-icon svg {
          transform: scale(1.08);
        }

        /* =========================================
           NUMBER
           INTER
        ========================================= */

        .transportation-solution-number {
          margin: 0;

          color: #e3d3d9;

          font-family: "Inter", sans-serif;
          font-size: 24px;
          font-weight: 700;
          line-height: 1;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .transportation-solution-card:hover
        .transportation-solution-number {
          color: #d7b7c2;

          transform: translateX(-2px);
        }

        /* =========================================
           CARD TITLE
           PLUS JAKARTA SANS
        ========================================= */

        .transportation-solution-title {
          margin: 0 0 9px;

          color: ${INK};

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.45;
        }

        /* =========================================
           CARD BODY
           INTER
        ========================================= */

        .transportation-solution-body {
          margin: 0;

          color: ${MUTED};

          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          line-height: 1.75;
        }

        /* =========================================
           CARD DECORATIVE LINE
        ========================================= */

        .transportation-solution-card::after {
          content: "";

          position: absolute;

          left: 21px;
          right: 21px;
          bottom: 0;

          height: 2px;

          background: ${WINE};

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 0.4s ease;
        }

        .transportation-solution-card:hover::after {
          transform: scaleX(1);
        }

        /* =========================================
           LARGE TABLET
           100px → 40px
        ========================================= */

        @media (max-width: 1200px) {
          .transportation-solutions-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 82px;
            padding-bottom: 82px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1050px) {
          .transportation-solutions-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 76px;
            padding-bottom: 76px;
          }

          .transportation-solutions-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .transportation-solution-card {
            min-height: 225px;
          }
        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 800px) {
          .transportation-solutions-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 68px;
            padding-bottom: 68px;
          }

          .transportation-solutions-heading {
            margin-bottom: 38px;

            font-size: 34px;
          }

          .transportation-solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 15px;
          }

          .transportation-solution-card {
            min-height: 215px;

            padding: 20px;
          }
        }

        /* =========================================
           MOBILE
           40px → 24px
        ========================================= */

        @media (max-width: 600px) {
          .transportation-solutions-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 58px;
            padding-bottom: 58px;
          }

          .transportation-solutions-label {
            margin-bottom: 11px;

            font-size: 9px;
            letter-spacing: 0.11em;
          }

          .transportation-solutions-heading {
            margin-bottom: 32px;

            font-size: 28px;
            line-height: 1.25;
            letter-spacing: -0.035em;
          }

          .transportation-solutions-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }

          .transportation-solution-card {
            min-height: 190px;

            padding: 19px;

            border-radius: 13px;
          }

          .transportation-solution-card-top {
            margin-bottom: 23px;
          }

          .transportation-solution-icon {
            width: 40px;
            height: 40px;

            border-radius: 9px;
          }

          .transportation-solution-number {
            font-size: 22px;
          }

          .transportation-solution-title {
            margin-bottom: 8px;

            font-size: 12.5px;
          }

          .transportation-solution-body {
            font-size: 11px;
            line-height: 1.7;
          }
        }

        /* =========================================
           SMALL MOBILE
           24px → 16px
        ========================================= */

        @media (max-width: 400px) {
          .transportation-solutions-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 50px;
            padding-bottom: 50px;
          }

          .transportation-solutions-heading {
            font-size: 25px;
          }

          .transportation-solution-card {
            min-height: 180px;

            padding: 17px;
          }

          .transportation-solution-icon {
            width: 37px;
            height: 37px;
          }

          .transportation-solution-icon svg {
            width: 16px;
            height: 16px;
          }

          .transportation-solution-number {
            font-size: 20px;
          }

          .transportation-solution-title {
            font-size: 11.5px;
          }

          .transportation-solution-body {
            font-size: 10.5px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .transportation-solution-card {
            opacity: 1;
            transform: none;

            transition: none;
          }

          .transportation-solution-icon,
          .transportation-solution-icon svg {
            transition: none;
          }

          .transportation-solution-card::after {
            transition: none;
          }
        }
      `}</style>

      <div className="transportation-solutions-container">

        {/* =====================================
            SECTION LABEL
        ===================================== */}

        <p className="transportation-solutions-label">
          TRANSPORTATION SOLUTIONS
        </p>

        {/* =====================================
            HEADING
        ===================================== */}

        <h2 className="transportation-solutions-heading">
          Solutions Built Around Your
          <br />
          Business
        </h2>

        {/* =====================================
            CARDS
        ===================================== */}

        <div className="transportation-solutions-grid">
          {cards.map(({ num, icon: Icon, title, body }, index) => (
            <div
              key={num}
              className={`transportation-solution-card ${
                visibleCards.includes(index) ? "is-visible" : ""
              }`}
            >
              <div className="transportation-solution-card-top">
                <span className="transportation-solution-icon">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>

                <span className="transportation-solution-number">
                  {num}
                </span>
              </div>

              <h3 className="transportation-solution-title">
                {title}
              </h3>

              <p className="transportation-solution-body">
                {body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}