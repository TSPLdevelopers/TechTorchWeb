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
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const connectorRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const leftCard = leftCardRef.current;
      const rightCard = rightCardRef.current;
      const connector = connectorRef.current;

      // ==========================================
      // INITIAL STATE
      // ==========================================

      gsap.set([leftCard, rightCard], {
        opacity: 0,
      });

      gsap.set(leftCard, {
        x: -80,
      });

      gsap.set(rightCard, {
        x: 80,
      });

      gsap.set(connector, {
        opacity: 0,
      });

      // ==========================================
      // MAIN TIMELINE
      // ==========================================

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          // 3 PAIRS
          end: "+=2400",

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // ==========================================
      // PAIR 1
      // Engage + Finance
      // ==========================================

      tl.to(leftCard, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.to(
        rightCard,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "<"
      );

      tl.to(
        connector,
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.2"
      );

      // HOLD
      tl.to({}, { duration: 1 });

      // ==========================================
      // PAIR 2
      // Inventory + Payroll
      // ==========================================

      tl.to([leftCard, rightCard, connector], {
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "power2.inOut",
      });

      tl.call(() => {
        leftCard.querySelector(".card-title").textContent =
          cards[2].title;

        leftCard.querySelector(".card-desc").textContent =
          cards[2].desc;

        leftCard.querySelector(".card-icon").textContent =
          cards[2].icon;

        rightCard.querySelector(".card-title").textContent =
          cards[3].title;

        rightCard.querySelector(".card-desc").textContent =
          cards[3].desc;

        rightCard.querySelector(".card-icon").textContent =
          cards[3].icon;
      });

      tl.set([leftCard, rightCard], {
        y: 40,
      });

      tl.to([leftCard, rightCard], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.to(
        connector,
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.2"
      );

      // HOLD
      tl.to({}, { duration: 1 });

      // ==========================================
      // PAIR 3
      // Operations + HRMS
      // ==========================================

      tl.to([leftCard, rightCard, connector], {
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "power2.inOut",
      });

      tl.call(() => {
        leftCard.querySelector(".card-title").textContent =
          cards[4].title;

        leftCard.querySelector(".card-desc").textContent =
          cards[4].desc;

        leftCard.querySelector(".card-icon").textContent =
          cards[4].icon;

        rightCard.querySelector(".card-title").textContent =
          cards[5].title;

        rightCard.querySelector(".card-desc").textContent =
          cards[5].desc;

        rightCard.querySelector(".card-icon").textContent =
          cards[5].icon;
      });

      tl.set([leftCard, rightCard], {
        y: 40,
      });

      tl.to([leftCard, rightCard], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.to(
        connector,
        {
          opacity: 1,
          duration: 0.5,
        },
        "<0.2"
      );

      // HOLD
      tl.to({}, { duration: 1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        height: "100vh",
        minHeight: "650px",
        background: MAROON_BG,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ==========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "100%",
          margin: "0 auto",
          padding: "70px 40px",
          boxSizing: "border-box",
        }}
      >
        {/* ==========================================
            HEADER
        ========================================== */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: "1.2",
              margin: 0,
              maxWidth: "360px",
            }}
          >
            One Platform for Your Everyday Business
          </h2>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: "1.5",
              margin: "5px 0 0",
              maxWidth: "500px",
            }}
          >
            An ERP system should make it easier for different parts of your
            business to work together. We help connect the functions that
            matter most to your day-to-day operations.
          </p>
        </div>

        {/* ==========================================
            CARDS AREA
        ========================================== */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "380px",
          }}
        >
          {/* ========================================
              CONNECTOR
          ======================================== */}

          <svg
            ref={connectorRef}
            viewBox="0 0 1000 380"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
              overflow: "visible",
            }}
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
              opacity="0.9"
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

          {/* ========================================
              LEFT CARD
          ======================================== */}

          <div
            ref={leftCardRef}
            style={{
              position: "absolute",
              left: "2%",
              top: "130px",
              width: "310px",
              minHeight: "180px",

              background: "#ffffff",
              borderRadius: "10px",

              padding: "24px 20px",

              boxSizing: "border-box",

              zIndex: 2,

              boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="card-icon"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: MAROON_BG,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 700,

                marginBottom: "18px",
              }}
            >
              {cards[0].icon}
            </div>

            <h3
              className="card-title"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#141414",
                margin: "0 0 12px",
              }}
            >
              {cards[0].title}
            </h3>

            <p
              className="card-desc"
              style={{
                fontSize: "13.5px",
                lineHeight: "1.45",
                color: "#2f2f2f",
                margin: 0,
              }}
            >
              {cards[0].desc}
            </p>
          </div>

          {/* ========================================
              RIGHT CARD
          ======================================== */}

          <div
            ref={rightCardRef}
            style={{
              position: "absolute",
              right: "2%",
              top: "60px",
              width: "310px",
              minHeight: "180px",

              background: "#ffffff",
              borderRadius: "10px",

              padding: "24px 20px",

              boxSizing: "border-box",

              zIndex: 2,

              boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="card-icon"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: MAROON_BG,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 700,

                marginBottom: "18px",
              }}
            >
              {cards[1].icon}
            </div>

            <h3
              className="card-title"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#141414",
                margin: "0 0 12px",
              }}
            >
              {cards[1].title}
            </h3>

            <p
              className="card-desc"
              style={{
                fontSize: "13.5px",
                lineHeight: "1.45",
                color: "#2f2f2f",
                margin: 0,
              }}
            >
              {cards[1].desc}
            </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          RESPONSIVE
      ========================================== */}

      <style>{`
        @media (max-width: 900px) {

          .one-platform-inner {
            grid-template-columns: 1fr !important;
          }

        }

        @media (max-width: 700px) {

          section {
            min-height: 100vh;
          }

        }
      `}</style>
    </section>
  );
}