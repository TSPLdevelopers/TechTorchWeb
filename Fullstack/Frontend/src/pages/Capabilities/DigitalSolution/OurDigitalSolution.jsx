import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Settings,
  ArrowLeftRight,
  Plane,
  Users,
  Monitor,
  FileBarChart2,
  CreditCard,
  HeartPulse,
  Contact,
  ShoppingCart,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// =================================================
// SOLUTIONS
// =================================================

const SOLUTIONS = [
  {
    number: "01",
    icon: Building2,
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Connect essential functions such as finance, inventory, human resources, and customer relationships within a synchronized system.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Operations Management",
    description:
      "Efficient operations depend on clear workflows. Help businesses organize tasks, monitor activity, improve visibility, and eliminate bottlenecks.",
  },
  {
    number: "03",
    icon: ArrowLeftRight,
    title: "Supply Chain Management",
    description:
      "From procurement and inventory to logistics and distribution, achieve total clarity and intelligent orchestration across channels.",
  },
  {
    number: "04",
    icon: Plane,
    title: "Aviation Management",
    description:
      "Aviation demands exact precision, coordination, and strict compliance. Solutions built to enhance operational efficiency, safety, and flight crew dispatch.",
  },
  {
    number: "05",
    icon: Users,
    title: "People Resources",
    description:
      "People are at the center of every organization. Modernize talent lifecycle, performance, payroll, and daily HR communication seamlessly.",
  },
  {
    number: "06",
    icon: Monitor,
    title: "Web Portals",
    description:
      "Build secure, fast, and user-friendly digital portals for customers, external vendors, partners, and employees around designated workflows.",
  },
  {
    number: "07",
    icon: FileBarChart2,
    title: "Financial Management",
    description:
      "Ensure financial figures are accurate, auditable, and easily digestible. Streamline financial processes, reporting, and statutory compliance.",
  },
  {
    number: "08",
    icon: CreditCard,
    title: "Payment Management",
    description:
      "Deliver seamless payment gateways, automated multi-currency settlement engines, and bank-grade reconciliation capabilities.",
  },
  {
    number: "09",
    icon: HeartPulse,
    title: "Healthcare & Hospital Management",
    description:
      "Empower clinics and multi-specialty hospitals with structured patient records, staff scheduling, bed management, and unified clinical data.",
  },
  {
    number: "10",
    icon: Contact,
    title: "Customer Relationship Management",
    description:
      "Consolidate interactions, automate lead nurturing, orchestrate customer support tickets, and maintain single-pane-of-glass customer records.",
  },
  {
    number: "11",
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description:
      "Modern digital sales go beyond simple store layouts. Connect inventory, payments, multi-channel listings, and post-purchase loyalty workflows.",
  },
  {
    number: "12",
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Successful deliverables need accountability and timeline visibility. Organize tasks, manage dependencies, and track delivery deadlines accurately.",
  },
];

// =================================================
// CAROUSEL SETTINGS
// =================================================

const AUTO_INTERVAL_MS = 2500;
const TRANSITION_MS = 600;

export default function DigitalSolutionsCarousel() {
  const total = SOLUTIONS.length;

  // Duplicate arrays for seamless infinite carousel
  const track = [...SOLUTIONS, ...SOLUTIONS, ...SOLUTIONS];

  const [itemsPerView, setItemsPerView] = useState(4);
  const [index, setIndex] = useState(total);
  const [withTransition, setWithTransition] = useState(true);

  const timerRef = useRef(null);

  // =================================================
  // RESPONSIVE ITEMS PER VIEW
  // =================================================

  useEffect(() => {
    function updateItemsPerView() {
      const width = window.innerWidth;

      if (width <= 640) {
        setItemsPerView(1);
      } else if (width <= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    }

    updateItemsPerView();

    window.addEventListener("resize", updateItemsPerView);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
    };
  }, []);

  // =================================================
  // AUTOPLAY
  // =================================================

  function startAutoplay() {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex((current) => current + 1);
    }, AUTO_INTERVAL_MS);
  }

  useEffect(() => {
    startAutoplay();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  // =================================================
  // INFINITE LOOP
  // =================================================

  useEffect(() => {
    if (index >= total * 2 || index < total) {
      const timeout = setTimeout(() => {
        setWithTransition(false);

        setIndex((current) =>
          current >= total * 2
            ? current - total
            : current + total
        );
      }, TRANSITION_MS);

      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  // =================================================
  // RE-ENABLE TRANSITION
  // =================================================

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  // =================================================
  // CONTROLS
  // =================================================

  function goNext() {
    setIndex((current) => current + 1);
    startAutoplay();
  }

  function goPrev() {
    setIndex((current) => current - 1);
    startAutoplay();
  }

  const translatePercent = (index * 100) / itemsPerView;

  // =================================================
  // JSX
  // =================================================

  return (
    <>
      <section className="digital-solutions-section">
        <div className="digital-solutions-container">

          {/* =========================================
              HEADER
          ========================================= */}

          <div className="digital-solutions-header">

            <div className="digital-solutions-label">
              <span className="label-line" />

              <span className="label-text">
                Our Digital Solutions
              </span>

              <span className="label-line" />
            </div>

            {/* =========================================
                NAVIGATION
            ========================================= */}

            <div className="carousel-navigation">

              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous solutions"
                className="carousel-button"
              >
                <ChevronLeft size={17} strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next solutions"
                className="carousel-button"
              >
                <ChevronRight size={17} strokeWidth={2} />
              </button>

            </div>
          </div>

          {/* =========================================
              CAROUSEL
          ========================================= */}

          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${translatePercent}%)`,
                transition: withTransition
                  ? `transform ${TRANSITION_MS}ms ease`
                  : "none",
              }}
            >
              {track.map(
                (
                  {
                    number,
                    icon: Icon,
                    title,
                    description,
                  },
                  i
                ) => (
                  <div
                    key={`${number}-${i}`}
                    className="carousel-item"
                    style={{
                      width: `${100 / itemsPerView}%`,
                    }}
                  >
                    <div className="solution-card">

                      {/* LEFT ACCENT */}

                      <span className="card-accent" />

                      {/* TOP ROW */}

                      <div className="card-top">
                        <div className="icon-box">
                          <Icon
                            size={17}
                            strokeWidth={2}
                          />
                        </div>

                        <span className="solution-number">
                          {number}
                        </span>
                      </div>

                      {/* TITLE */}

                      <h3 className="solution-title">
                        {title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p className="solution-description">
                        {description}
                      </p>

                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          STYLES
      ================================================= */}

      <style>{`
        /* =================================================
           MAIN SECTION
        ================================================= */

        .digital-solutions-section {
          width: 100%;
          overflow: hidden;
          background: #f6f4ee;

          padding-top: 64px;
          padding-bottom: 64px;

          padding-left: 100px;
          padding-right: 100px;

          box-sizing: border-box;
        }

        .digital-solutions-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        /* =================================================
           HEADER
        ================================================= */

        .digital-solutions-header {
          position: relative;

          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 42px;
        }

        .digital-solutions-label {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;
        }

        .label-line {
          width: 40px;
          height: 1px;
          flex-shrink: 0;

          background: #730024;
        }

        .label-text {
          font-family: "Inter", sans-serif;

          font-size: 12px;
          font-weight: 700;

          line-height: 1.2;

          letter-spacing: 0.15em;
          text-transform: uppercase;

          color: #730024;

          white-space: nowrap;
        }

        /* =================================================
           NAVIGATION
        ================================================= */

        .carousel-navigation {
          position: absolute;

          right: 0;
          top: 50%;

          transform: translateY(-50%);

          display: flex;
          align-items: center;

          gap: 8px;
        }

        .carousel-button {
          width: 38px;
          height: 38px;

          border: none;
          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0;

          background: #730024;
          color: #ffffff;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease,
            box-shadow 0.3s ease;
        }

        .carousel-button:hover {
          opacity: 0.9;

          transform: scale(1.06);

          box-shadow:
            0 8px 18px rgba(115, 0, 36, 0.18);
        }

        .carousel-button:active {
          transform: scale(0.96);
        }

        /* =================================================
           CAROUSEL
        ================================================= */

        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          width: 100%;

          will-change: transform;
        }

        .carousel-item {
          flex-shrink: 0;

          padding-left: 8px;
          padding-right: 8px;

          box-sizing: border-box;
        }

        /* =================================================
           CARD
        ================================================= */

        .solution-card {
          position: relative;

          width: 100%;
          height: 100%;
          min-height: 225px;

          overflow: hidden;

          box-sizing: border-box;

          border-radius: 14px;

          background: #ffffff;

          padding-top: 24px;
          padding-bottom: 24px;
          padding-left: 24px;
          padding-right: 20px;

          box-shadow:
            0 4px 16px rgba(20, 20, 20, 0.045);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 12px 28px rgba(20, 20, 20, 0.08);
        }

        /* =================================================
           CARD ACCENT
        ================================================= */

        .card-accent {
          position: absolute;

          left: 0;
          top: 0;

          width: 5px;
          height: 100%;

          background: #730024;
        }

        /* =================================================
           CARD TOP
        ================================================= */

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          margin-bottom: 18px;
        }

        .icon-box {
          width: 40px;
          height: 40px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: #fdeef4;

          color: #730024;
        }

        .solution-number {
          margin-top: 3px;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          font-weight: 600;

          line-height: 1;

          color: #94a3b8;
        }

        /* =================================================
           TITLE
        ================================================= */

        .solution-title {
          margin: 0 0 10px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          font-weight: 700;

          line-height: 1.45;

          color: #0f172a;
        }

        /* =================================================
           DESCRIPTION
        ================================================= */

        .solution-description {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 12.5px;
          font-weight: 400;

          line-height: 1.7;

          color: #64748b;
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1200px) {
          .digital-solutions-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 60px;
            padding-bottom: 60px;
          }

          .digital-solutions-container {
            max-width: 100%;
          }

          .solution-card {
            min-height: 225px;
          }
        }

        /* =================================================
           TABLET / SMALL LAPTOP
        ================================================= */

        @media (max-width: 900px) {
          .digital-solutions-section {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 54px;
            padding-bottom: 54px;
          }

          .digital-solutions-header {
            margin-bottom: 34px;
          }

          .carousel-item {
            padding-left: 7px;
            padding-right: 7px;
          }

          .solution-card {
            min-height: 230px;

            padding-top: 22px;
            padding-bottom: 22px;
            padding-left: 22px;
            padding-right: 18px;
          }

          .solution-title {
            font-size: 15px;
          }

          .solution-description {
            font-size: 12.5px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 640px) {
          .digital-solutions-section {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 48px;
            padding-bottom: 48px;
          }

          .digital-solutions-header {
            justify-content: flex-start;

            margin-bottom: 28px;

            padding-right: 92px;
          }

          .digital-solutions-label {
            gap: 9px;
          }

          .label-line {
            width: 22px;
          }

          .label-text {
            font-size: 10px;
            letter-spacing: 0.11em;

            white-space: normal;
          }

          .carousel-navigation {
            right: 0;

            gap: 6px;
          }

          .carousel-button {
            width: 34px;
            height: 34px;
          }

          .carousel-item {
            padding-left: 5px;
            padding-right: 5px;
          }

          .solution-card {
            min-height: 215px;

            border-radius: 13px;

            padding-top: 21px;
            padding-bottom: 21px;
            padding-left: 21px;
            padding-right: 18px;
          }

          .card-top {
            margin-bottom: 16px;
          }

          .icon-box {
            width: 38px;
            height: 38px;
          }

          .solution-title {
            font-size: 15px;
            line-height: 1.4;
          }

          .solution-description {
            font-size: 12.5px;
            line-height: 1.65;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {
          .digital-solutions-section {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 42px;
            padding-bottom: 42px;
          }

          .digital-solutions-header {
            margin-bottom: 25px;

            padding-right: 82px;
          }

          .digital-solutions-label {
            gap: 7px;
          }

          .label-line {
            width: 16px;
          }

          .label-text {
            font-size: 9px;
            letter-spacing: 0.09em;
          }

          .carousel-navigation {
            gap: 5px;
          }

          .carousel-button {
            width: 32px;
            height: 32px;
          }

          .carousel-item {
            padding-left: 4px;
            padding-right: 4px;
          }

          .solution-card {
            min-height: 205px;

            padding-top: 19px;
            padding-bottom: 19px;
            padding-left: 20px;
            padding-right: 16px;

            border-radius: 12px;
          }

          .card-accent {
            width: 4px;
          }

          .icon-box {
            width: 36px;
            height: 36px;

            border-radius: 8px;
          }

          .solution-number {
            font-size: 10px;
          }

          .solution-title {
            margin-bottom: 8px;

            font-size: 14px;
          }

          .solution-description {
            font-size: 12px;
            line-height: 1.6;
          }
        }

        /* =================================================
           VERY SMALL DEVICES
        ================================================= */

        @media (max-width: 360px) {
          .digital-solutions-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .digital-solutions-header {
            padding-right: 76px;
          }

          .label-text {
            font-size: 8.5px;
          }

          .carousel-button {
            width: 30px;
            height: 30px;
          }

          .solution-card {
            min-height: 200px;

            padding-left: 18px;
            padding-right: 15px;
          }

          .solution-title {
            font-size: 13.5px;
          }

          .solution-description {
            font-size: 11.5px;
          }
        }
      `}</style>
    </>
  );
}