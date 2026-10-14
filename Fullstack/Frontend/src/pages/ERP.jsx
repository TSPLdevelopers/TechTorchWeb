import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Users,
  IndianRupee,
  Warehouse,
  Wallet,
  Settings2,
  Contact,
} from "lucide-react";

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================================
   1) ERP HERO
===================================================================== */

export function ErpHero() {
  const [showOptions, setShowOptions] = useState(false);
  const contactRef = useRef(null);

  // Close options on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const contactOptions = [
    {
      label: "Call Us",
      Icon: Phone,
      href: "tel:+915813500381",
    },
    {
      label: "WhatsApp",
      Icon: MessageCircle,
      href: "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20ERP%20solutions.",
      external: true,
    },
    {
      label: "Email Us",
      Icon: Mail,
      href: "mailto:contact@techtorch.solutions",
    },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0c140c]
        font-['Plus_Jakarta_Sans']
        min-h-[500px]
        sm:min-h-[520px]
        md:min-h-[540px]
        lg:min-h-[560px]
        xl:min-h-[580px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/slide21.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,10,6,0.55) 0%, rgba(6,10,6,0.38) 45%, rgba(6,10,6,0.65) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[500px]
          sm:min-h-[520px]
          md:min-h-[540px]
          lg:min-h-[560px]
          xl:min-h-[580px]
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          py-14
          sm:py-16
          md:py-20
          lg:py-24
          text-center
        "
      >
        {/* ================= LABEL ================= */}

        <p
          className="
            mb-3
            sm:mb-4
            md:mb-5
            text-[10px]
            sm:text-xs
            md:text-sm
            font-bold
            tracking-[0.12em]
            sm:tracking-[0.15em]
            md:tracking-[0.18em]
            leading-tight
            text-white/90
          "
        >
          ENTERPRISE RESOURCE PLANNING
        </p>

        {/* ================= HEADING ================= */}

        <h1
          className="
            mb-4
            sm:mb-5
            md:mb-6
            w-full
            max-w-full
            sm:max-w-[520px]
            md:max-w-[700px]
            lg:max-w-[850px]
            text-[1.65rem]
            sm:text-[2rem]
            md:text-[2.5rem]
            lg:text-[3rem]
            xl:text-[3.25rem]
            font-semibold
            leading-[1.15]
            sm:leading-[1.15]
            md:leading-[1.12]
            text-white
          "
        >
          Connect Your Business. Work Better Together.
        </h1>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mb-6
            sm:mb-7
            md:mb-8
            lg:mb-9
            w-full
            max-w-full
            sm:max-w-[540px]
            md:max-w-[680px]
            lg:max-w-[800px]
            text-[13px]
            sm:text-sm
            md:text-base
            lg:text-[17px]
            leading-[1.6]
            md:leading-[1.65]
            text-white/90
          "
        >
          Bring your finance, operations, people, inventory and customer
          processes together in one place. With a connected ERP system, your
          teams can spend less time managing information and more time getting
          work done.
        </p>

        {/* ================= CENTERED BUTTON + CONTACT ICONS ================= */}

        <div
          ref={contactRef}
          className="
            relative
            flex
            w-full
            items-center
            justify-center
          "
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
        >
          {/* TALK TO OUR EXPERTS BUTTON */}

          <Link
            to="/talk-to-expert"
            className="
              group
              relative
              z-10
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-3
              border
              border-white/70
              bg-transparent
              text-white
              text-[11px]
              sm:text-xs
              md:text-sm
              font-medium
              tracking-wide
              px-5
              sm:px-6
              md:px-7
              py-2.5
              sm:py-3
              md:py-3.5
              whitespace-nowrap
              transition-colors
              duration-300
              ease-in-out
              hover:bg-white
              hover:text-[#0c140c]
              hover:border-white
              active:scale-95
            "
          >
            Talk to Our Experts

            <ArrowUpRight
              size={16}
              className="
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>

          {/* CONTACT ICONS — ABSOLUTE POSITION, BUTTON DOES NOT MOVE */}

          <div
            className={`
              absolute
              left-1/2
              top-1/2
              flex
              -translate-y-1/2
              items-center
              gap-2
              transition-all
              duration-300
              ${
                showOptions
                  ? "visible opacity-100"
                  : "invisible opacity-0 pointer-events-none"
              }
            `}
            style={{
              marginLeft: "120px",
            }}
            aria-hidden={!showOptions}
          >
            {contactOptions.map(
              ({ label, Icon, href, external }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  tabIndex={showOptions ? 0 : -1}
                  onClick={() => setShowOptions(false)}
                  className="
                    flex
                    h-10
                    w-10
                    sm:h-11
                    sm:w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    bg-[#0c140c]/80
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#730042]
                    hover:bg-[#730042]
                  "
                >
                  <Icon size={18} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}

      <style>{`
        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[contactReveal_250ms_ease-out\\] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}


/* =====================================================================
   2) ERP APPROACH
===================================================================== */

export function ERPApproach() {
  return (
    <section
      className="
        w-full
        min-h-[480px]
        overflow-hidden
        bg-[#F8F7F0]
        text-[#191919]

        sm:min-h-[460px]
        md:min-h-[500px]
        lg:min-h-[520px]
      "
      style={{ backgroundColor: "#F8F7F0" }}
    >
      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          w-full
          px-4
          py-6

          sm:px-6
          sm:py-5

          md:px-10
          md:py-6

          lg:px-[100px]
          lg:py-8
        "
      >
        {/* ================= TOP LABEL ================= */}

        <p
          className="
            font-['Plus_Jakarta_Sans']
            font-bold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#151515]

            text-[13px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[16px]
          "
        >
          OUR ERP APPROACH
        </p>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-6

            sm:mt-6
            sm:gap-7

            md:mt-6
            md:grid-cols-2
            md:gap-7

            lg:mt-7
            lg:gap-8

            xl:gap-10
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              order-1
              min-w-0
              md:order-1
            "
          >
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[26px]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]

                xs:text-[24px]
                sm:text-[26px]
                md:text-[30px]
                lg:text-[30px]
                xl:text-[32px]
              "
            >
              A Business That
              <br />
              <span className="text-[#730042]">
                Works as One
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[15px]
              "
            >
              As businesses grow, their operations become more connected —
              finance, inventory, HRMS, Engage, Pay and everyday processes all
              depend on each other. When these functions work across separate
              systems, teams can spend more time managing information than
              using it.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[15px]
              "
            >
              An ERP brings these essential business functions together in one
              connected environment. It gives teams better visibility, helps
              information move more efficiently across the organisation and
              creates a more consistent way of working.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[15px]
              "
            >
              At TechTorch, we take a practical approach to ERP. We first
              understand how your business operates, where processes can be
              improved and what your teams need to work more effectively. From
              there, we help shape a solution around your business priorities.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              relative
              order-2
              flex
              w-full
              min-w-0
              flex-col
              items-center

              md:order-2
              md:items-center
              md:translate-x-2

              lg:translate-x-14
              lg:-translate-y-5

              xl:translate-x-32
              xl:-translate-y-6
            "
          >
            {/* ================= ERP DIAGRAM IMAGE ================= */}

            <div
              className="
                relative
                mx-auto
                flex
                w-full
                items-center
                justify-center
                overflow-hidden

                max-w-[280px]

                xs:max-w-[300px]

                sm:max-w-[350px]

                md:max-w-[450px]

                lg:max-w-[425px]

                xl:max-w-[445px]
              "
            >
              <img
                src="/Hero02Slide02.png"
                alt="ERP Approach"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>

            {/* ================= GOAL CARD ================= */}

            <div
              className="
                mt-4
                w-full
                max-w-[320px]
                rounded-[8px]
                bg-[#FCECF6]
                px-3
                py-2.5

                sm:mt-4
                sm:max-w-[300px]
                sm:px-4
                sm:py-3

                md:-mt-4
                md:max-w-[390px]
                md:px-5
                md:py-4

                lg:-mt-1
                lg:max-w-[400px]
                lg:translate-x-6

                xl:translate-x-0
              "
            >
              <p
                className="
                  font-['Inter']
                  text-[11px]
                  font-semibold
                  leading-[1.4]
                  text-[#151515]

                  sm:text-[13px]
                  md:text-[15px]
                  lg:text-[15px]
                "
              >
                The goal is simple:
                <span className="font-normal">
                  {" "}
                  connect the business, simplify the way people work and
                  create a stronger foundation for growth.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   3) ONE PLATFORM SECTION
===================================================================== */

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

export function OnePlatformSection() {
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
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          margin: 0 0 14px 0;
        }

        .one-platform-description {
         font-family: "Inter", sans-serif;
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
        font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #141414;
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .card-desc {
        font-family: "Inter", sans-serif;
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


/* =====================================================================
   4) PRACTICAL ERP PATH
===================================================================== */

export function PracticalERPPath() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your business, your current systems and the challenges your teams are facing.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We identify the key priorities and create a clear plan based on your business goals.",
    },
    {
      number: "03",
      title: "Connect",
      description:
        "We bring the right processes, information and teams together.",
    },
    {
      number: "04",
      title: "Implement",
      description:
        "We put the solution in place through a structured and manageable implementation process.",
    },
    {
      number: "05",
      title: "Improve",
      description:
        "Once the system is in place, we continue to look for ways to improve it as your business changes.",
    },
  ];

  return (
    <section
      id="vxbl7s"
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        className="
          relative mx-auto
          w-full
          max-w-[1520px]
          overflow-hidden
          bg-white

          min-h-[520px]

          xs:min-h-[545px]

          sm:min-h-[565px]

          md:min-h-[585px]

          lg:min-h-[615px]

          xl:min-h-[600px]

          2xl:min-h-[620px]
        "
      >

        {/* =====================================================
            TORCHX SUITE
            SEPARATE TOP-RIGHT AREA
        ====================================================== */}

        <div
          id="9k9mjj"
          className="
            absolute
            right-5
            top-5
            z-40

            flex
            h-[65px]
            w-[120px]
            items-center
            justify-center

            bg-white

            xs:right-6
            xs:top-6
            xs:h-[72px]
            xs:w-[135px]

            sm:right-8
            sm:top-7
            sm:h-[85px]
            sm:w-[160px]

            md:right-10
            md:top-8
            md:h-[100px]
            md:w-[190px]

            lg:right-[50px]
            lg:top-[25px]
            lg:h-[125px]
            lg:w-[230px]

            xl:right-[52px]
            xl:top-[25px]
            xl:h-[140px]
            xl:w-[250px]

            2xl:right-[55px]
            2xl:top-[25px]
            2xl:h-[150px]
            2xl:w-[270px]
          "
        >
          <img
            src="/TorchX Suite.png"
            alt="TorchX Suite"
            className="
              block
              h-auto
              w-[82%]
              max-w-full
              object-contain
            "
          />
        </div>

        {/* =====================================================
            IMAGE
            IMPORTANT:
            IMAGE STARTS BELOW TORCHX SUITE
        ====================================================== */}

        <div
          className="
            absolute
            right-0
            bottom-0
            z-0

            flex
            items-end
            justify-end

            w-[100%]
            h-[calc(100%-105px)]

            xs:h-[calc(100%-115px)]

            sm:h-[calc(100%-125px)]

            md:h-[calc(100%-135px)]

            lg:top-[145px]
            lg:h-auto
            lg:bottom-0
            lg:w-[76%]

            xl:top-[160px]
            xl:h-auto
            xl:bottom-0
            xl:w-[76%]

            2xl:top-[170px]
            2xl:h-auto
            2xl:bottom-0
            2xl:w-[74%]
          "
        >
          <img
            id="8f14dd"
            src="/Slide2.2.png"
            alt="TorchX ERP platform"
            className="
              block
              h-full
              w-full
              max-h-full
              max-w-full
              object-contain
              object-right-bottom

              lg:h-auto
              lg:max-h-full

              xl:h-auto
              xl:max-h-full

              2xl:h-auto
              2xl:max-h-full
            "
          />

          {/* LEFT FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10

              w-[30%]

              bg-gradient-to-r
              from-white
              via-white/85
              to-transparent

              xs:w-[29%]

              sm:w-[27%]

              md:w-[25%]

              lg:w-[27%]

              xl:w-[25%]
            "
          />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            w-full

            px-5
            pt-7

            xs:px-6
            xs:pt-8

            sm:px-8
            sm:pt-9

            md:px-10
            md:pt-9

            lg:px-[50px]
            lg:pt-[30px]
            lg:translate-x-8

            xl:px-[52px]
            xl:pt-[28px]
            xl:translate-x-12
          "
        >

          {/* =====================================================
              HEADING
          ====================================================== */}

          <h1
            id="41gxzm"
            className="
              pr-[115px]

              font-['Inter']
              text-[24px]
              font-medium
              leading-[1.1]
              tracking-[-0.035em]
              text-[#111111]

              xs:pr-[125px]
              xs:text-[28px]
              xs:leading-[1.08]

              sm:pr-[145px]
              sm:text-[31px]

              md:pr-[170px]
              md:text-[35px]

              lg:pr-0
              lg:text-[32px]
              lg:leading-[1.12]
              lg:tracking-[-0.03em]

              xl:text-[32px]

              2xl:text-[34px]
            "
          >
            A Practical Path to{" "}
            <span className="text-[#850052]">ERP</span>
          </h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            id="lql9x7"
            className="
              mt-[13px]
              max-w-[100%]
              pr-[105px]

              font-['Inter']
              text-[12px]
              font-medium
              leading-[1.35]
              text-[#1e1e1e]

              xs:mt-[15px]
              xs:pr-[115px]
              xs:text-[13px]
              xs:leading-[1.32]

              sm:mt-[16px]
              sm:max-w-[600px]
              sm:pr-[125px]
              sm:text-[14px]

              md:mt-[17px]
              md:max-w-[620px]
              md:pr-[145px]
              md:text-[15px]

              lg:mt-[12px]
              lg:max-w-[700px]
              lg:pr-0
              lg:text-[16px]
              lg:leading-[1.32]

              xl:text-[15px]

              2xl:max-w-[720px]
            "
          >
            Every business is different, so there is no single ERP approach
            that works for everyone. We take the time to understand your
            business before deciding what needs to change.
          </p>

          {/* =====================================================
              STEPS
          ====================================================== */}

          <div
            id="g9w64w"
            className="
              mt-[28px]
              w-[72%]
              max-w-[390px]

              xs:mt-[30px]
              xs:w-[70%]

              sm:mt-[32px]
              sm:w-[64%]
              sm:max-w-[420px]

              md:mt-[34px]
              md:w-[61%]
              md:max-w-[430px]

              lg:mt-[45px]
              lg:w-[430px]

              xl:w-[440px]

              2xl:w-[450px]
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  flex
                  items-start
                  gap-[8px]

                  xs:gap-[10px]

                  sm:gap-[12px]

                  ${
                    index !== steps.length - 1
                      ? "mb-[12px] xs:mb-[16px] sm:mb-[18px] lg:mb-[21px]"
                      : ""
                  }
                `}
              >

                {/* NUMBER */}

                <div
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#850052]

                    font-['Inter']
                    text-[13px]
                    font-medium
                    text-white

                    xs:h-[40px]
                    xs:w-[40px]
                    xs:text-[15px]

                    sm:h-[43px]
                    sm:w-[43px]
                    sm:text-[16px]

                    md:h-[44px]
                    md:w-[44px]
                    md:text-[17px]

                    lg:h-[44px]
                    lg:w-[44px]
                    lg:text-[18px]
                  "
                >
                  {step.number}
                </div>

                {/* TEXT */}

                <div className="min-w-0 flex-1 pt-[1px]">
                  <h3
                    className="
                      font-['Plus_Jakarta_Sans']
                      text-[15px]
                      font-semibold
                      leading-[1.2]
                      text-[#111111]

                      xs:text-[17px]

                      sm:text-[18px]

                      md:text-[19px]

                      lg:text-[18px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-[3px]
                      max-w-[370px]

                      font-['Inter']
                      text-[11px]
                      font-medium
                      leading-[1.3]
                      text-[#333333]

                      xs:text-[12px]

                      sm:text-[13px]

                      md:text-[14px]

                      lg:text-[14px]
                    "
                  >
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   5) TECH HERO (ERP CTA)
===================================================================== */

export function TechHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0a1128]
        font-['Plus_Jakarta_Sans']

        min-h-[430px]
        sm:min-h-[450px]
        md:min-h-[500px]
        lg:min-h-[580px]
        xl:min-h-[620px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-no-repeat
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/slide25.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/10" />


      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          justify-center

          w-full

          min-h-[430px]
          sm:min-h-[450px]
          md:min-h-[500px]
          lg:min-h-[580px]
          xl:min-h-[620px]

          px-6
          sm:px-10
          md:px-16
          lg:px-20
          xl:px-24

          box-border
        "
      >

        {/* ================= HEADING ================= */}

        <h1
          className="
            text-white
            font-semibold
            leading-[1.15]
            tracking-tight

            text-[1.65rem]
            sm:text-[1.9rem]
            md:text-[2.3rem]
            lg:text-[2.7rem]
            xl:text-[3rem]

            max-w-[330px] max-w-full
            sm:max-w-[420px] max-w-full
            md:max-w-[520px] max-w-full
            lg:max-w-[600px] max-w-full

            ml-2
            sm:ml-4
            md:ml-8
            lg:ml-12
            xl:ml-16

            translate-y-0
          "
        >
          Ready to Bring Your
          <br />
          Business Together?
        </h1>


        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-6
            sm:mt-7
            md:mt-8
            lg:mt-10

            text-white/90

            text-[13px]
            sm:text-sm
            md:text-base
            lg:text-lg

            leading-[1.6]

            max-w-[300px] max-w-full
            sm:max-w-[380px] max-w-full
            md:max-w-[480px] max-w-full
            lg:max-w-[560px] max-w-full

            ml-2
            sm:ml-4
            md:ml-8
            lg:ml-12
            xl:ml-16
          "
        >
          Let's look at how the right ERP approach can simplify your
          processes, improve visibility and help your teams work better
          together.
        </p>


        {/* ================= BUTTON ================= */}

        <div
          className="
            mt-8
            sm:mt-9
            md:mt-10
            lg:mt-14

            ml-2
            sm:ml-4
            md:ml-8
            lg:ml-12
            xl:ml-16
          "
        >
          <button
            type="button"
            className="
              border
              border-white/70

              bg-transparent
              text-white

              text-[11px]
              sm:text-xs
              md:text-sm

              font-medium
              tracking-wide

              px-4
              sm:px-5
              md:px-6

              py-2
              sm:py-2.5
              md:py-3

              rounded-lg

              whitespace-nowrap

              hover:bg-white
              hover:text-[#0a1128]

              transition-all
              duration-300

              active:scale-95
            "
          >
            Talk to Our ERP Experts
          </button>
        </div>

      </div>


      {/* ================= RESPONSIVE EXTRA CSS ================= */}

      <style>{`

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {

          .tech-hero-content {
            padding-left: 40px;
            padding-right: 40px;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 640px) {

          section {
            background-color: #0a1128;
          }

        }


        /* ==========================================
           VERY SMALL MOBILE
        ========================================== */

        @media (max-width: 380px) {

          h1 {
            font-size: 1.5rem;
          }

        }

      `}</style>

    </section>
  );
}


/* =====================================================================
   6) ERP INTELLIGENCE
   (NOTE: the local `icons` and `cards` constants below were the only
   names that clashed with section 3. `cards` is renamed to `erpCards`
   here — and in its single usage — so both sections can coexist.)
===================================================================== */

const MAROON = "#730042";

const icons = {
  automate: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),

  understand: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6M9 11l2 2 4-4" />
    </svg>
  ),

  improve: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),

  support: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const erpCards = [
  {
    icon: icons.automate,
    title: "Automate",
    desc: "Reduce repetitive tasks and give your teams more time to focus on important work.",
  },
  {
    icon: icons.understand,
    title: "Understand",
    desc: "Use your business information to see what is working and where there is room to improve.",
  },
  {
    icon: icons.improve,
    title: "Improve",
    desc: "Find ways to make everyday processes faster and more efficient.",
  },
  {
    icon: icons.support,
    title: "Support",
    desc: "Give your teams access to the right information when they need it.",
  },
];

export function ErpIntelligence() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(false);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsVisible(true);
            });
          });
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`erp-intelligence-section ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="erp-intelligence-container">

        {/* ================= HEADER ================= */}

        <div className="erp-header">
          <p className="erp-label">
            ERP &amp; INTELLIGENCE
          </p>

          <h2 className="erp-heading">
            Get More From{" "}
            <span>Your Business Data</span>
          </h2>

          <p className="erp-description">
            Once your business processes and information are connected, you can
            do more with the data you already have.
            <br className="desktop-break" />
            From automation and reporting to analytics and intelligent tools, a
            connected ERP system can help your teams work faster and make more
            informed decisions.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div className="erp-intelligence-cards">
          {erpCards.map(({ icon, title, desc }, index) => (
            <div
              key={title}
              className="erp-card"
            >
              <div
                className="erp-icon"
                style={{
                  "--icon-delay": `${index * 0.25}s`,
                }}
              >
                {icon}
              </div>

              <p className="erp-card-title">
                {title}
              </p>

              <p className="erp-card-description">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RESPONSIVE CSS ================= */}

      <style>{`

        /* =================================================
           BASE / DESKTOP
        ================================================= */

        .erp-intelligence-section {
          width: 100%;
          background: #f6f3ec;
          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(0,0,0,0.05) 0px,
              rgba(0,0,0,0.05) 1px,
              transparent 1px,
              transparent 48px
            );
          font-family: "Plus Jakarta Sans", sans-serif;
          padding: 38px 0 48px;
          overflow: hidden;
          box-sizing: border-box;
        }

        /*
          EXACT SAME HORIZONTAL ALIGNMENT AS FOOTER

          Footer:
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
        */

        .erp-intelligence-container {
          width: 100%;
          margin: 0;
          padding-left: 100px;
          padding-right: 100px;
          box-sizing: border-box;
          transform: none;
        }

        /* =================================================
           HEADER
        ================================================= */

        .erp-header {
          width: 100%;
          max-width: 950px;
          margin-left: 0;
          box-sizing: border-box;
        }

        .erp-label {
          font-size: 18px;
          font-weight: 700;
          color: #141414;
          letter-spacing: 0.02em;
          margin: -8px 0 12px;
          text-align: left;
        }

        .erp-heading {
          font-size: 32px;
          font-weight: 700;
          line-height: 1.15;
          color: #141414;
          margin: 0 0 16px;
          text-align: left;
        }

        .erp-heading span {
          color: ${MAROON};
        }

        .erp-description {
          font-size: 15px;
          color: #2c2c2c;
          line-height: 1.6;
          margin: 0 0 32px;
          max-width: 820px;
          font-family: "Inter", sans-serif;
          text-align: left;
        }

        /* =================================================
           CARDS
        ================================================= */

        .erp-intelligence-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
          width: 100%;
          margin-left: 0;
          box-sizing: border-box;
          transform: none;
        }

        .erp-card {
          width: 100%;
          min-width: 0;
          min-height: 250px;
          background: #ffffff;
          padding: 32px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          box-shadow:
            0 10px 28px rgba(20, 20, 20, 0.05);
        }

        /* =================================================
           ICON
        ================================================= */

        .erp-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          border-radius: 50%;
          background: ${MAROON};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;

          opacity: 0;

          transform:
            translateY(35px)
            scale(0.65);

          transition:
            opacity 0.6s ease,
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

          transition-delay: var(--icon-delay);

          will-change:
            transform,
            opacity;
        }

        /* =================================================
           ICON ANIMATION
        ================================================= */

        .erp-intelligence-section.is-visible .erp-icon {
          opacity: 1;

          transform:
            translateY(0)
            scale(1);
        }

        /* =================================================
           CARD TITLE
        ================================================= */

        .erp-card-title {
          font-size: 20px;
          font-weight: 600;
          color: #141414;
          margin: 0 0 10px;
          line-height: 1.2;
        }

        /* =================================================
           CARD DESCRIPTION
        ================================================= */

        .erp-card-description {
          font-size: 13.5px;
          font-family: "Inter", sans-serif;
          color: #3a3a3a;
          line-height: 1.5;
          margin: 0;
        }

        /* =================================================
           LARGE TABLET
        ================================================= */

        @media (max-width: 1200px) {

          .erp-intelligence-container {
            padding-left: 70px;
            padding-right: 70px;
          }

          .erp-intelligence-cards {
            width: 100%;
            gap: 22px;
          }

          .erp-card {
            padding: 28px;
            min-height: 250px;
          }

          .erp-card-title {
            font-size: 20px;
          }

          .erp-card-description {
            font-size: 14px;
          }

          .erp-icon {
            width: 54px;
            height: 54px;
            min-width: 54px;
          }

          .erp-icon svg {
            width: 20px;
            height: 20px;
          }
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {

          .erp-intelligence-section {
            padding: 36px 0 44px !important;
          }

          /*
            Footer-style tablet spacing
            md = 40px
          */

          .erp-intelligence-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .erp-header {
            width: 100%;
            max-width: 800px;
            margin-left: 0;
          }

          .erp-label {
            font-size: 21px;
          }

          .erp-heading {
            font-size: 29px;
          }

          .erp-description {
            font-size: 15px;
            max-width: 700px;
          }

          .erp-intelligence-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
            gap: 20px;
            margin-left: 0;
          }

          .erp-card {
            min-height: 240px;
            padding: 26px 24px;
            border-radius: 14px;
          }

          .erp-icon {
            width: 54px;
            height: 54px;
            min-width: 54px;
            margin-bottom: 20px;
          }

          .erp-icon svg {
            width: 20px;
            height: 20px;
          }

          .erp-card-title {
            font-size: 20px;
          }

          .erp-card-description {
            font-size: 14px;
          }
        }

        /* =================================================
           SMALL TABLET
        ================================================= */

        @media (max-width: 768px) {

          .erp-intelligence-section {
            padding: 32px 0 40px !important;
          }

          .erp-intelligence-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .erp-header {
            max-width: 100%;
            margin-left: 0;
            margin-right: 0;
          }

          .erp-label {
            font-size: 20px;
            margin: 0 0 10px;
            text-align: left;
          }

          .erp-heading {
            font-size: 28px;
            line-height: 1.2;
            margin: 0 0 14px;
            text-align: left;
          }

          .erp-description {
            font-size: 15px;
            line-height: 1.55;
            margin: 0 0 28px;
            max-width: 100%;
          }

          .erp-intelligence-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
            gap: 18px;
            margin-left: 0;
          }

          .erp-card {
            min-height: 230px;
            padding: 25px 22px;
          }

          .erp-icon {
            width: 54px;
            height: 54px;
            min-width: 54px;
            margin-bottom: 18px;
          }

          .erp-icon svg {
            width: 20px;
            height: 20px;
          }

          .erp-card-title {
            font-size: 19px;
            margin-bottom: 8px;
          }

          .erp-card-description {
            font-size: 14px;
            line-height: 1.5;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {

          .erp-intelligence-section {
            padding: 28px 0 36px !important;
          }

          /*
            EXACT FOOTER MOBILE ALIGNMENT
            Footer uses px-4 = 16px
          */

          .erp-intelligence-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .erp-header {
            width: 100%;
            margin: 0;
          }

          .erp-label {
            font-size: 18px;
            line-height: 1.3;
            margin: 0 0 9px;
          }

          .erp-heading {
            font-size: 25px;
            line-height: 1.2;
            margin: 0 0 13px;
          }

          .erp-description {
            font-size: 14px;
            line-height: 1.55;
            margin: 0 0 24px;
            max-width: 100%;
          }

          .desktop-break {
            display: none;
          }

          /* ONE CARD PER ROW */

          .erp-intelligence-cards {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
            gap: 16px;
            margin-left: 0;
          }

          .erp-card {
            width: 100%;
            min-height: auto;
            padding: 24px 20px;
            border-radius: 14px;
          }

          .erp-icon {
            width: 54px;
            height: 54px;
            min-width: 54px;
            margin-bottom: 17px;
          }

          .erp-icon svg {
            width: 20px;
            height: 20px;
          }

          .erp-card-title {
            font-size: 19px;
            line-height: 1.2;
            margin-bottom: 8px;
          }

          .erp-card-description {
            font-size: 14px;
            line-height: 1.5;
          }
        }

        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 400px) {

          .erp-intelligence-container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .erp-label {
            font-size: 17px;
          }

          .erp-heading {
            font-size: 23px;
          }

          .erp-description {
            font-size: 13.5px;
          }

          .erp-card {
            padding: 22px 18px;
          }

          .erp-icon {
            width: 54px;
            height: 54px;
            min-width: 54px;
          }

          .erp-icon svg {
            width: 19px;
            height: 19px;
          }

          .erp-card-title {
            font-size: 18px;
          }

          .erp-card-description {
            font-size: 13.5px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .erp-icon {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }

      `}</style>
    </section>
  );
}


/* =====================================================================
   MERGED PAGE — renders all six sections one after another
===================================================================== */

export default function MergedErpSections() {
  return (
    <>
      <ErpHero />
      <ERPApproach />
      <OnePlatformSection />
      <PracticalERPPath />
      <TechHero />
      <ErpIntelligence />
    </>
  );
}