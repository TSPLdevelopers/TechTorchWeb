import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  IndianRupee,
  Warehouse,
  Wallet,
  Settings2,
  Contact,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MAROON_BG = "#5c0e34";

const cards = [
  {
    title: "Engage",
    desc: "Keep your employees connected and engaged by making communication, collaboration and everyday interactions easier across the organisation.",
    icon: Users,
  },
  {
    title: "Finance & Accounting",
    desc: "Keep your financial information organised and get a clearer view of your business performance.",
    icon: IndianRupee,
  },
  {
    title: "Inventory & Supply Chain",
    desc: "Keep track of stock, purchasing and movement so your teams know what is available and what needs attention.",
    icon: Warehouse,
  },
  {
    title: "Payroll",
    desc: "Manage employee salaries, payments and payroll processes more efficiently, while keeping important payroll information organised and accessible.",
    icon: Wallet,
  },
  {
    title: "Operations",
    desc: "Bring everyday operational activities together and give your teams a clearer view of what is happening.",
    icon: Settings2,
  },
  {
    title: "HRMS",
    desc: "Keep employee information and important HR processes organized in one place.",
    icon: Contact,
  },
];

/* =========================================================
   LAYOUT CONSTANTS — used both for rendering cards and for
   drawing the connector line, so they always stay in sync.
   (Desktop-only — tablet/mobile use a flexible, auto-height
   layout instead so long titles never get clipped.)
========================================================= */
const CARD_WIDTH = 360;
const CARD_GAP = 150;
const CARD_HEIGHT = 260;
const START_PADDING = 80;
const END_PADDING = 120;
const TOP_LOW = 150; // "down" position in the zigzag
const TOP_HIGH = 60; // "up" position in the zigzag
const TRACK_AREA_HEIGHT = TOP_LOW + CARD_HEIGHT + 90; // extra buffer so wrapped text never clips

function getCardLeft(index) {
  return START_PADDING + index * (CARD_WIDTH + CARD_GAP);
}

function getCardTop(index) {
  return index % 2 === 0 ? TOP_LOW : TOP_HIGH;
}

function getCardCenter(index) {
  return {
    x: getCardLeft(index) + CARD_WIDTH / 2,
    y: getCardTop(index) + CARD_HEIGHT / 2,
  };
}

function getTrackWidth() {
  return (
    START_PADDING +
    cards.length * CARD_WIDTH +
    (cards.length - 1) * CARD_GAP +
    END_PADDING
  );
}

/* A smooth chain of upward-bowed arcs connecting every card
   center, in order — this is the "all cards connected" line. */
function buildConnectorPath() {
  const points = cards.map((_, i) => getCardCenter(i));
  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    const midX = (a.x + b.x) / 2;
    const arcY = Math.min(a.y, b.y) - 45;
    d += ` Q ${midX},${arcY} ${b.x},${b.y}`;
  }

  return d;
}

export default function OnePlatformSection() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Watch the breakpoint continuously (not just once at mount) so
  // resizing the window / rotating a tablet switches modes correctly.
  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mq.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) return; // tablet/mobile: native swipeable row, no GSAP pin

      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const getScrollDistance = () =>
        Math.max(track.scrollWidth - viewport.offsetWidth, 0);

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + getScrollDistance() * 1.15,
          scrub: 1, // small lag = smooth, buttery scroll feel
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  const connectorPath = buildConnectorPath();
  const trackWidth = getTrackWidth();

  return (
    <section ref={sectionRef} className="one-platform-section">
      <div className="one-platform-container">
        <div className="one-platform-header">
          <h2 className="one-platform-heading">
            One Platform for Your Everyday Business
          </h2>
          <p className="one-platform-description">
            An ERP system should make it easier for different parts of your
            business to work together. We help connect the functions that
            matter most to your day-to-day operations.
          </p>
        </div>

        <div ref={viewportRef} className="one-platform-viewport">
          <div
            ref={trackRef}
            className="one-platform-track"
            style={{
              width: isMobile ? undefined : `${trackWidth}px`,
              height: `${TRACK_AREA_HEIGHT}px`,
            }}
          >
            {!isMobile && (
              <svg
                viewBox={`0 0 ${trackWidth} ${TRACK_AREA_HEIGHT}`}
                width={trackWidth}
                height={TRACK_AREA_HEIGHT}
                className="platform-connector"
              >
                <path
                  d={connectorPath}
                  stroke="#ffffff"
                  strokeOpacity="0.55"
                  strokeWidth="1.5"
                  strokeDasharray="3 6"
                  fill="none"
                />
                {cards.map((_, i) => {
                  const c = getCardCenter(i);
                  return (
                    <circle
                      key={i}
                      cx={c.x}
                      cy={c.y}
                      r="4"
                      fill="#ffffff"
                    />
                  );
                })}
              </svg>
            )}

            {cards.map((card, i) => (
              <PlatformCard
                key={card.title}
                card={card}
                style={
                  isMobile
                    ? undefined
                    : {
                        left: `${getCardLeft(i)}px`,
                        top: `${getCardTop(i)}px`,
                        width: `${CARD_WIDTH}px`,
                      }
                }
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .one-platform-section {
          width: 100%;
          min-height: 100vh;
          background: ${MAROON_BG};
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .one-platform-container {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 70px 40px;
        }

        .one-platform-header {
          margin-bottom: 30px;
          max-width: 700px;
        }

        .one-platform-heading {
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 14px 0;
        }

        .one-platform-description {
          font-size: 15px;
          font-weight: 500;
          color: #f1d9e4;
          line-height: 1.6;
          margin: 0;
        }

        /* The viewport is what clips the horizontally-translating
           track — only what's inside this box is visible. */
        .one-platform-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .one-platform-track {
          position: relative;
          will-change: transform;
        }

        .platform-connector {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }

        .platform-card {
          position: absolute;
          min-height: ${CARD_HEIGHT}px;
          background: #ffffff;
          border-radius: 10px;
          padding: 30px 26px;
          z-index: 2;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.18);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: ${MAROON_BG};
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .card-title {
          font-size: 16px;
          font-weight: 700;
          color: #141414;
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 13.5px;
          line-height: 1.5;
          color: #2f2f2f;
          margin: 0;
        }

        /* =========================================================
           TABLET + MOBILE (≤1024px) — GSAP pin is skipped in JS;
           fall back to a native, swipeable horizontal scroller with
           snap points and auto height, so nothing ever gets clipped.
        ========================================================= */
        @media (max-width: 1024px) {
          .one-platform-section {
            min-height: auto;
            padding: 0;
          }

          .one-platform-container {
            padding: 55px 30px;
          }

          .one-platform-viewport {
            overflow-x: auto;
            overflow-y: visible;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            margin: 0 -30px;
            padding: 0 30px;
          }

          .one-platform-track {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            width: max-content !important;
            height: auto !important;
          }

          .platform-card {
            position: relative;
            width: 360px;
            min-height: 0;
            height: auto;
            scroll-snap-align: start;
            flex: 0 0 auto;
          }
        }

        /* Tablet portrait / small tablets get a narrower card so it
           doesn't feel oversized, and two can peek on screen at once. */
        @media (max-width: 900px) {
          .one-platform-heading {
            font-size: 27px;
          }

          .platform-card {
            width: 68vw;
          }
        }

        @media (max-width: 700px) {
          .one-platform-container {
            padding: 40px 20px;
          }

          .one-platform-heading {
            font-size: 24px;
          }

          .one-platform-description {
            font-size: 13.5px;
          }

          .one-platform-viewport {
            margin: 0 -20px;
            padding: 0 20px;
          }

          .platform-card {
            width: 80vw;
            padding: 24px 20px;
          }

          .card-icon {
            width: 44px;
            height: 44px;
            margin-bottom: 14px;
          }

          .card-title {
            font-size: 15px;
          }

          .card-desc {
            font-size: 13px;
          }
        }

        @media (max-width: 400px) {
          .platform-card {
            width: 86vw;
            padding: 20px 18px;
          }
        }
      `}</style>
    </section>
  );
}

function PlatformCard({ card, style }) {
  const Icon = card.icon;
  return (
    <div className="platform-card" style={style}>
      <div className="card-icon">
        <Icon size={22} strokeWidth={2} />
      </div>
      <h3 className="card-title">{card.title}</h3>
      <p className="card-desc">{card.desc}</p>
    </div>
  );
}