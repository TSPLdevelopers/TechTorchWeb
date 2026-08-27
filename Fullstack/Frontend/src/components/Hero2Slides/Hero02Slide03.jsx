import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MAROON_BG = "#5c0e34";

const cards = [
  {
    title: "Engage",
    desc: "Keep your employees connected and engaged by making communication, collaboration and everyday interactions easier across the organisation.",
    icon: "👥",
  },
  {
    title: "Finance & Accounting",
    desc: "Keep your financial information organised and get a clearer view of your business performance.",
    icon: "₹",
  },
  {
    title: "Inventory & Supply Chain",
    desc: "Keep track of stock, purchasing and movement so your teams know what is available and what needs attention.",
    icon: "⌂",
  },
  {
    title: "Payroll",
    desc: "Manage employee salaries, payments and payroll processes more efficiently, while keeping important payroll information organised and accessible.",
    icon: "▣",
  },
  {
    title: "Operations",
    desc: "Bring everyday operational activities together and give your teams a clearer view of what is happening.",
    icon: "⚙",
  },
  {
    title: "HRMS",
    desc: "Keep employee information and important HR processes organized in one place.",
    icon: "♟",
  },
];

export default function OnePlatformSection() {
  const sectionRef = useRef(null);

  const pair1Left = useRef(null);
  const pair1Right = useRef(null);

  const pair2Left = useRef(null);
  const pair2Right = useRef(null);

  const pair3Left = useRef(null);
  const pair3Right = useRef(null);

  const connectorRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia(
        "(max-width: 700px)"
      ).matches;

      const pair1 = [
        pair1Left.current,
        pair1Right.current,
      ];

      const pair2 = [
        pair2Left.current,
        pair2Right.current,
      ];

      const pair3 = [
        pair3Left.current,
        pair3Right.current,
      ];

      /* ==========================================
         INITIAL STATE
      ========================================== */

      gsap.set(pair1, {
        opacity: 0,
        x: isMobile ? 0 : 0,
        y: isMobile ? 40 : 0,
      });

      gsap.set(pair2, {
        opacity: 0,
        x: isMobile ? 0 : 0,
        y: isMobile ? 40 : 0,
      });

      gsap.set(pair3, {
        opacity: 0,
        x: isMobile ? 0 : 0,
        y: isMobile ? 40 : 0,
      });

      gsap.set(connectorRef.current, {
        opacity: 0,
      });

      /* ==========================================
         TIMELINE
      ========================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          end: isMobile
            ? "+=2300"
            : "+=2600",

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      /* =================================================
         PAIR 1
         ENGAGE + FINANCE
      ================================================= */

      if (!isMobile) {
        gsap.set(pair1Left[0], {
          x: -80,
        });

        gsap.set(pair1Right[0], {
          x: 80,
        });
      }

      tl.to(pair1, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      if (!isMobile) {
        tl.to(
          connectorRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          "<0.3"
        );
      }

      // HOLD
      tl.to({}, {
        duration: 1.5,
      });

      /* =================================================
         PAIR 1 OUT
      ================================================= */

      tl.to(pair1, {
        opacity: 0,
        y: -40,
        duration: 0.7,
        ease: "power2.inOut",
      });

      if (!isMobile) {
        tl.to(
          connectorRef.current,
          {
            opacity: 0,
            duration: 0.4,
          },
          "<"
        );
      }

      /* =================================================
         PAIR 2
         INVENTORY + PAYROLL
      ================================================= */

      if (!isMobile) {
        gsap.set(pair2Left[0], {
          x: -80,
        });

        gsap.set(pair2Right[0], {
          x: 80,
        });
      }

      tl.to(pair2, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      if (!isMobile) {
        tl.to(
          connectorRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          "<0.3"
        );
      }

      // HOLD
      tl.to({}, {
        duration: 1.5,
      });

      /* =================================================
         PAIR 2 OUT
      ================================================= */

      tl.to(pair2, {
        opacity: 0,
        y: -40,
        duration: 0.7,
        ease: "power2.inOut",
      });

      if (!isMobile) {
        tl.to(
          connectorRef.current,
          {
            opacity: 0,
            duration: 0.4,
          },
          "<"
        );
      }

      /* =================================================
         PAIR 3
         OPERATIONS + HRMS
      ================================================= */

      if (!isMobile) {
        gsap.set(pair3Left[0], {
          x: -80,
        });

        gsap.set(pair3Right[0], {
          x: 80,
        });
      }

      tl.to(pair3, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
      });

      if (!isMobile) {
        tl.to(
          connectorRef.current,
          {
            opacity: 1,
            duration: 0.5,
          },
          "<0.3"
        );
      }

      // HOLD
      tl.to({}, {
        duration: 1.5,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="one-platform-section"
    >
      <div className="one-platform-container">

        {/* ================= HEADER ================= */}

        <div className="one-platform-header">

          <h2 className="one-platform-heading">
            One Platform for Your Everyday Business
          </h2>

          <p className="one-platform-description">
            An ERP system should make it easier for different
            parts of your business to work together. We help
            connect the functions that matter most to your
            day-to-day operations.
          </p>

        </div>

        {/* ================= CARDS AREA ================= */}

        <div className="one-platform-cards-area">

          {/* ================= CONNECTOR ================= */}

          <svg
            ref={connectorRef}
            viewBox="0 0 1000 380"
            preserveAspectRatio="none"
            className="platform-connector"
          >
            <path
              d="
                M 310,260
                C 390,150
                  560,120
                  690,150
              "
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              fill="none"
            />

            <circle
              cx="310"
              cy="260"
              r="4"
              fill="#ffffff"
            />

            <circle
              cx="690"
              cy="150"
              r="4"
              fill="#ffffff"
            />
          </svg>


          {/* =================================================
              PAIR 1
          ================================================= */}

          <PlatformCard
            ref={pair1Left}
            card={cards[0]}
            className="platform-card-left"
          />

          <PlatformCard
            ref={pair1Right}
            card={cards[1]}
            className="platform-card-right"
          />


          {/* =================================================
              PAIR 2
          ================================================= */}

          <PlatformCard
            ref={pair2Left}
            card={cards[2]}
            className="platform-card-left"
          />

          <PlatformCard
            ref={pair2Right}
            card={cards[3]}
            className="platform-card-right"
          />


          {/* =================================================
              PAIR 3
          ================================================= */}

          <PlatformCard
            ref={pair3Left}
            card={cards[4]}
            className="platform-card-left"
          />

          <PlatformCard
            ref={pair3Right}
            card={cards[5]}
            className="platform-card-right"
          />

        </div>
      </div>


      {/* =================================================
          RESPONSIVE CSS
      ================================================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        /* ==========================================
           SECTION
        ========================================== */

        .one-platform-section {
          width: 100%;
          height: 100vh;
          min-height: 650px;

          background: ${MAROON_BG};

          font-family: 'Plus Jakarta Sans', sans-serif;

          overflow: hidden;
        }


        /* ==========================================
           CONTAINER
        ========================================== */

        .one-platform-container {
          width: 100%;
          max-width: 1200px;

          height: 100%;

          margin: 0 auto;

          padding: 70px 40px;

          box-sizing: border-box;
        }


        /* ==========================================
           HEADER
        ========================================== */

        .one-platform-header {
          display: grid;

          grid-template-columns: 1fr 1fr;

          gap: 60px;

          margin-bottom: 40px;
        }


        .one-platform-heading {
          font-size: 32px;

          font-weight: 800;

          color: #ffffff;

          line-height: 1.2;

          margin: 0;

          max-width: 360px;
        }


        .one-platform-description {
          font-size: 15px;

          font-weight: 600;

          color: #ffffff;

          line-height: 1.5;

          margin: 5px 20px 0;

          max-width: 500px;
        }


        /* ==========================================
           CARDS AREA
        ========================================== */

        .one-platform-cards-area {
          position: relative;

          width: 100%;

          height: 380px;
        }


        /* ==========================================
           CONNECTOR
        ========================================== */

        .platform-connector {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 1;

          overflow: visible;
        }


        /* ==========================================
           CARD
        ========================================== */

        .platform-card {
          position: absolute;

          width: 380px;

          min-height: 250px;

          background: #ffffff;

          border-radius: 10px;

          padding: 31px 27px;

          box-sizing: border-box;

          z-index: 2;

          box-shadow:
            0 15px 40px rgba(0,0,0,0.12);
        }


        /* ==========================================
           LEFT CARD
        ========================================== */

        .platform-card-left {
          left: 2%;
          top: 130px;
        }


        /* ==========================================
           RIGHT CARD
        ========================================== */

        .platform-card-right {
          right: 2%;
          top: 60px;
        }


        /* ==========================================
           ICON
        ========================================== */

        .card-icon {
          width: 48px;
          height: 48px;

          border-radius: 50%;

          background: ${MAROON_BG};

          display: flex;

          align-items: center;
          justify-content: center;

          color: #ffffff;

          font-size: 22px;

          font-weight: 700;

          margin-bottom: 18px;
        }


        /* ==========================================
           TITLE
        ========================================== */

        .card-title {
          font-size: 16px;

          font-weight: 700;

          color: #141414;

          margin: 0 0 12px;

          line-height: 1.3;
        }


        /* ==========================================
           DESCRIPTION
        ========================================== */

        .card-desc {
          font-size: 13.5px;

          line-height: 1.45;

          color: #2f2f2f;

          margin: 0;
        }


        /* =================================================
           LARGE TABLET
        ================================================= */

        @media (max-width: 1100px) {

          .one-platform-container {
            padding: 60px 30px;
          }

          .one-platform-header {
            gap: 40px;
          }

          .one-platform-heading {
            font-size: 30px;
          }

          .one-platform-description {
            font-size: 14px;
          }

          .platform-card {
            width: 330px;

            min-height: 245px;

            padding: 28px 24px;
          }

          .platform-card-left {
            left: 0;
          }

          .platform-card-right {
            right: 0;
          }
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {

          .one-platform-container {
            padding: 55px 25px;
          }

          .one-platform-header {
            gap: 30px;

            margin-bottom: 25px;
          }

          .one-platform-heading {
            font-size: 27px;

            max-width: 320px;
          }

          .one-platform-description {
            font-size: 13.5px;

            margin: 3px 0 0;
          }

          .one-platform-cards-area {
            height: 360px;
          }

          .platform-card {
            width: 46%;

            min-height: 235px;

            padding: 26px 22px;
          }

          .platform-card-left {
            left: 0;
            top: 125px;
          }

          .platform-card-right {
            right: 0;
            top: 55px;
          }
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 700px) {

          .one-platform-section {
            height: 100vh;

            min-height: 680px;

            overflow: hidden;
          }

          .one-platform-container {
            height: 100%;

            padding: 40px 20px;
          }


          /* HEADER */

          .one-platform-header {
            display: flex;

            flex-direction: column;

            gap: 14px;

            margin-bottom: 25px;
          }

          .one-platform-heading {
            font-size: 25px;

            line-height: 1.2;

            max-width: 100%;
          }

          .one-platform-description {
            font-size: 13.5px;

            line-height: 1.55;

            margin: 0;

            max-width: 100%;
          }


          /* CARDS AREA */

          .one-platform-cards-area {
            height: calc(100% - 190px);

            min-height: 400px;
          }


          /* HIDE CONNECTOR */

          .platform-connector {
            display: none;
          }


          /* CARD */

          .platform-card {
            width: calc(100% - 10px);

            min-height: 190px;

            padding: 23px 20px;

            border-radius: 10px;

            left: 5px !important;

            right: auto !important;
          }


          .platform-card-left {
            top: 10px;
          }


          .platform-card-right {
            top: 220px;
          }


          .card-icon {
            width: 44px;
            height: 44px;

            font-size: 20px;

            margin-bottom: 14px;
          }


          .card-title {
            font-size: 15px;

            margin-bottom: 9px;
          }


          .card-desc {
            font-size: 13px;

            line-height: 1.45;
          }

        }


        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 480px) {

          .one-platform-section {
            min-height: 650px;
          }

          .one-platform-container {
            padding: 32px 16px;
          }

          .one-platform-header {
            gap: 12px;

            margin-bottom: 20px;
          }

          .one-platform-heading {
            font-size: 22px;
          }

          .one-platform-description {
            font-size: 12.5px;
          }

          .one-platform-cards-area {
            height: calc(100% - 175px);
          }

          .platform-card {
            width: 100%;

            left: 0 !important;

            padding: 20px 18px;

            min-height: 180px;
          }

          .platform-card-left {
            top: 5px;
          }

          .platform-card-right {
            top: 205px;
          }

          .card-icon {
            width: 42px;
            height: 42px;

            font-size: 19px;

            margin-bottom: 12px;
          }

          .card-title {
            font-size: 15px;

            margin-bottom: 8px;
          }

          .card-desc {
            font-size: 12.5px;

            line-height: 1.45;
          }

        }


        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 360px) {

          .one-platform-container {
            padding: 28px 14px;
          }

          .one-platform-heading {
            font-size: 20px;
          }

          .one-platform-description {
            font-size: 12px;
          }

          .platform-card {
            padding: 18px 16px;

            min-height: 175px;
          }

          .platform-card-right {
            top: 195px;
          }

          .card-title {
            font-size: 14px;
          }

          .card-desc {
            font-size: 12px;
          }

        }

      `}</style>
    </section>
  );
}


/* =================================================
   PLATFORM CARD COMPONENT
================================================= */

const PlatformCard = React.forwardRef(
  ({ card, className }, ref) => {
    return (
      <div
        ref={ref}
        className={`platform-card ${className}`}
      >

        <div className="card-icon">
          {card.icon}
        </div>

        <h3 className="card-title">
          {card.title}
        </h3>

        <p className="card-desc">
          {card.desc}
        </p>

      </div>
    );
  }
);

PlatformCard.displayName = "PlatformCard";