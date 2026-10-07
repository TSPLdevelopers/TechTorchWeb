import React, { useEffect, useRef } from "react";
import {
  Target,
  Share2,
  SlidersHorizontal,
  BarChart2,
  RefreshCcw,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Understand your workflows, operational requirements and existing technology environment.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define the solution structure and implementation approach around those requirements.",
  },
  {
    num: "03",
    title: "Develop",
    body: "Configure, develop or integrate the required technology.",
  },
  {
    num: "04",
    title: "Deploy",
    body: "Test and introduce the solution with attention to functionality and usability.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance and technical support as technology requirements evolve.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Business-Aligned",
    body: "Solutions are shaped around the organization's operational requirements.",
  },
  {
    icon: Share2,
    title: "Connected",
    body: "Bring healthcare and supporting business functions into a more coordinated environment.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible",
    body: "Adapt technology according to organizational and operational needs.",
  },
  {
    icon: BarChart2,
    title: "Data-Aware",
    body: "Use connected information, reporting and analytics for better operational visibility.",
  },
  {
    icon: RefreshCcw,
    title: "Supported",
    body: "Continue supporting the technology environment through maintenance and technical assistance.",
  },
];

export default function ApproachAndWhyTechTorchSections() {
  const pageRef = useRef(null);

  /* =====================================================
     VIEWPORT CARD ANIMATION
  ===================================================== */

  useEffect(() => {
    const container = pageRef.current;

    if (!container) return;

    const cards = container.querySelectorAll(
      ".step-card, .reason-card"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const card = entry.target;
          const index = Number(card.dataset.index || 0);

          setTimeout(() => {
            card.classList.add("card-visible");
          }, index * 140);

          observer.unobserve(card);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="approach-why-page"
    >
      <style>{`

        /* =====================================================
           FONTS
        ===================================================== */

        @import url(
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap'
        );


        /* =====================================================
           MAIN WRAPPER
        ===================================================== */

        .approach-why-page,
        .approach-why-page * {
          box-sizing: border-box;
        }

        .approach-why-page {
          width: 100%;
          overflow: hidden;
          color: ${INK};
          font-family: "Inter", sans-serif;
        }


        /* =====================================================
           COMMON CONTAINER
        ===================================================== */

        .approach-why-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          padding: 78px 100px;
        }


        /* =====================================================
           SECTION 1
        ===================================================== */

        .approach-section {
          width: 100%;
          background: #ffffff;
        }


        /* =====================================================
           SECTION 2
        ===================================================== */

        .why-section {
          width: 100%;
          background: #f6f7fa;
        }


        /* =====================================================
           SECTION LABEL
        ===================================================== */

        .section-label {
          margin: 0 0 12px;

          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;

          letter-spacing: 0.08em;
          text-transform: uppercase;

          color: ${WINE};
        }


        /* =====================================================
           MAIN HEADINGS
        ===================================================== */

        .main-heading {
          margin: 0 0 34px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 34px;
          line-height: 1.22;
          font-weight: 700;

          letter-spacing: -0.7px;

          color: ${INK};
        }

        .desktop-break {
          display: block;
        }


        /* =====================================================
           APPROACH STEPS GRID
        ===================================================== */

        .steps-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 18px;

          margin-bottom: 24px;
        }


        /* =====================================================
           STEP CARD
        ===================================================== */

        .step-card {
          min-width: 0;

          padding: 22px;

          border: 1px solid #ece9e4;
          border-radius: 14px;

          background: #ffffff;

          /* Initial animation state */
          opacity: 0;
          transform: translateY(45px);

          transition:
            opacity 0.65s ease,
            transform 0.65s ease,
            box-shadow 0.25s ease;
        }


        /* =====================================================
           CARD VISIBLE STATE
        ===================================================== */

        .step-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }


        /* =====================================================
           STEP CARD HOVER
        ===================================================== */

        .step-card.card-visible:hover {
          transform: translateY(-5px);

          box-shadow:
            0 10px 25px rgba(0, 0, 0, 0.06);
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .step-number {
          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 17px;

          border-radius: 50%;

          background: ${WINE};
          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          line-height: 1;
          font-weight: 600;
        }


        /* =====================================================
           CARD HEADINGS
        ===================================================== */

        .card-title {
          margin: 0 0 8px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;

          color: ${INK};
        }


        /* =====================================================
           CARD BODY
        ===================================================== */

        .card-body {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;

          color: ${MUTED};
        }


        /* =====================================================
           APPROACH INFO BOX
        ===================================================== */

        .approach-info {
          width: 100%;

          padding: 15px 20px;

          border-radius: 9px;

          background: #f4f1ec;
        }

        .approach-info-text {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11px;
          line-height: 1.65;
          font-weight: 400;

          color: ${MUTED};
        }


        /* =====================================================
           WHY TECHTORCH GRID
        ===================================================== */

        .reasons-grid {
          display: grid;

          grid-template-columns:
            repeat(5, minmax(0, 1fr));

          gap: 18px;
        }


        /* =====================================================
           REASON CARD
        ===================================================== */

        .reason-card {
          min-width: 0;

          padding: 22px;

          border-radius: 14px;

          background: #ffffff;

          box-shadow:
            0 1px 4px rgba(0, 0, 0, 0.05);

          /* Initial animation */
          opacity: 0;
          transform: translateY(45px);

          transition:
            opacity 0.65s ease,
            transform 0.65s ease,
            box-shadow 0.25s ease;
        }


        /* =====================================================
           REASON CARD VISIBLE
        ===================================================== */

        .reason-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }


        /* =====================================================
           REASON CARD HOVER
        ===================================================== */

        .reason-card.card-visible:hover {
          transform: translateY(-5px);

          box-shadow:
            0 12px 28px rgba(0, 0, 0, 0.08);
        }


        /* =====================================================
           REASON ICON
        ===================================================== */

        .reason-icon {
          width: 40px;
          height: 40px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 17px;

          border-radius: 9px;

          background: #fbeef1;

          color: ${WINE};
        }


        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1200px) {

          .approach-why-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .steps-grid,
          .reasons-grid {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 16px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .approach-why-container {
            padding-top: 65px;
            padding-bottom: 65px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .main-heading {
            font-size: 32px;
          }

          .steps-grid,
          .reasons-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 16px;
          }

          .step-card,
          .reason-card {
            padding: 20px;
          }

          .card-title {
            font-size: 13px;
          }

          .card-body {
            font-size: 11px;
            line-height: 1.68;
          }
        }


        /* =====================================================
           SMALL TABLET
        ===================================================== */

        @media (max-width: 700px) {

          .approach-why-container {
            padding-top: 58px;
            padding-bottom: 58px;

            padding-left: 40px;
            padding-right: 40px;
          }

          .main-heading {
            font-size: 30px;
            line-height: 1.22;
            margin-bottom: 28px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .approach-why-container {
            padding:
              48px 24px 52px;
          }

          .section-label {
            margin-bottom: 10px;
            font-size: 9px;
          }

          .main-heading {
            font-size: 27px;
            line-height: 1.2;
            letter-spacing: -0.5px;
            margin-bottom: 26px;
          }

          .desktop-break {
            display: none;
          }

          .steps-grid,
          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .step-card,
          .reason-card {
            padding: 19px;
          }

          .step-number {
            width: 32px;
            height: 32px;

            margin-bottom: 14px;

            font-size: 10px;
          }

          .reason-icon {
            width: 38px;
            height: 38px;

            margin-bottom: 14px;
          }

          .card-title {
            font-size: 13px;
            margin-bottom: 7px;
          }

          .card-body {
            font-size: 11px;
            line-height: 1.68;
          }

          .approach-info {
            padding: 14px 17px;
          }

          .approach-info-text {
            font-size: 10.5px;
            line-height: 1.65;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .approach-why-container {
            padding:
              42px 16px 46px;
          }

          .main-heading {
            font-size: 24px;
            line-height: 1.2;
          }

          .step-card,
          .reason-card {
            padding: 17px;
          }

          .card-title {
            font-size: 12.5px;
          }

          .card-body {
            font-size: 10.5px;
            line-height: 1.65;
          }

          .approach-info-text {
            font-size: 10px;
          }
        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 340px) {

          .approach-why-container {
            padding:
              38px 16px 42px;
          }

          .main-heading {
            font-size: 22px;
          }

          .card-body {
            font-size: 10px;
          }

          .approach-info-text {
            font-size: 9.5px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .step-card,
          .reason-card {
            transition: none;
            opacity: 1;
            transform: none;
          }

          .step-card:hover,
          .reason-card:hover {
            transform: none;
          }
        }

      `}</style>


      {/* =====================================================
          SECTION 1: OUR APPROACH
      ===================================================== */}

      <section className="approach-section">

        <div className="approach-why-container">

          {/* LABEL */}

          <p className="section-label">
            OUR APPROACH
          </p>


          {/* HEADING */}

          <h2 className="main-heading">
            From Healthcare Requirements to Practical
            <br className="desktop-break" />
            Technology
          </h2>


          {/* STEPS */}

          <div className="steps-grid">

            {steps.map(({ num, title, body }, index) => (
              <div
                key={num}
                data-index={index}
                className="step-card"
              >

                {/* NUMBER */}

                <span className="step-number">
                  {num}
                </span>


                {/* TITLE */}

                <h3 className="card-title">
                  {title}
                </h3>


                {/* BODY */}

                <p className="card-body">
                  {body}
                </p>

              </div>
            ))}

          </div>


          {/* SUPPORTING INFORMATION */}

          <div className="approach-info">

            <p className="approach-info-text">
              TechTorch's broader ERP and software-development information
              also describes implementation support, training, testing,
              deployment and ongoing maintenance.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2: WHY TECHTORCH
      ===================================================== */}

      <section className="why-section">

        <div className="approach-why-container">

          {/* LABEL */}

          <p className="section-label">
            WHY TECHTORCH
          </p>


          {/* HEADING */}

          <h2 className="main-heading">
            Technology Built Around Healthcare
            <br className="desktop-break" />
            Requirements
          </h2>


          {/* REASONS */}

          <div className="reasons-grid">

            {reasons.map(
              ({ icon: Icon, title, body }, index) => (
                <div
                  key={title}
                  data-index={index}
                  className="reason-card"
                >

                  {/* ICON */}

                  <span className="reason-icon">
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                    />
                  </span>


                  {/* TITLE */}

                  <h3 className="card-title">
                    {title}
                  </h3>


                  {/* BODY */}

                  <p className="card-body">
                    {body}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </section>

    </div>
  );
}