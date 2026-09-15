import React, { useEffect, useState } from "react";
import {
  Building2,
  Settings,
  Repeat,
  Plane,
  Users,
  MonitorSmartphone,
  Package,
  CreditCard,
  HeartPulse,
  CircleUserRound,
  Tag,
  Flag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* =========================================================
   CAPABILITIES DATA
========================================================= */

const capabilities = [
  {
    number: "01",
    icon: Building2,
    title: "Enterprise Resource Planning",
    description:
      "Unify core business functions through integrated ERP systems that improve visibility, coordination, and operational control.",
    tag: "UNIFIED OPERATIONS",
  },
  {
    number: "02",
    icon: Settings,
    title: "Operations Management",
    description:
      "Streamline operational workflows with connected systems designed to improve efficiency, visibility, and decision-making.",
    tag: "PROCESS CONTROL",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Supply Chain Management",
    description:
      "Improve supply chain visibility with technology that connects procurement, inventory, logistics, and distribution processes.",
    tag: "LOGISTICS & TRACKING",
  },
  {
    number: "04",
    icon: Plane,
    title: "Aviation Management",
    description:
      "Support aviation operations with connected technology designed around complex workflows, people, and operational requirements.",
    tag: "AVIATION ARCHITECTURE",
  },
  {
    number: "05",
    icon: Users,
    title: "People Resources",
    description:
      "Manage workforce information, processes, and collaboration through connected people-focused technology.",
    tag: "TALENT INFRASTRUCTURE",
  },
  {
    number: "06",
    icon: MonitorSmartphone,
    title: "Web Portals",
    description:
      "Create secure digital gateways that connect users, services, information, and business processes.",
    tag: "DIGITAL GATEWAYS",
  },
  {
    number: "07",
    icon: Package,
    title: "Financial Management",
    description:
      "Improve financial visibility and control through connected systems for accounting, reporting, and financial operations.",
    tag: "FISCAL VISIBILITY",
  },
  {
    number: "08",
    icon: CreditCard,
    title: "Payment Management",
    description:
      "Enable secure and reliable payment workflows that connect transactions with broader business operations.",
    tag: "SECURE CHECKOUT",
  },
  {
    number: "09",
    icon: HeartPulse,
    title: "Healthcare & Hospital Management",
    description:
      "Connect healthcare operations through technology supporting patients, staff, records, appointments, and administration.",
    tag: "CLINICAL CARE",
  },
  {
    number: "10",
    icon: CircleUserRound,
    title: "Customer Relationship Management",
    description:
      "Bring customer information and interactions together to support stronger relationships and better business decisions.",
    tag: "CLIENT SYNERGY",
  },
  {
    number: "11",
    icon: Tag,
    title: "E-Commerce",
    description:
      "Build connected commerce experiences covering products, customers, orders, payments, and digital interactions.",
    tag: "COMMERCE ENGINES",
  },
  {
    number: "12",
    icon: Flag,
    title: "Project Management",
    description:
      "Coordinate people, tasks, timelines, and resources through connected project management systems.",
    tag: "AGILE DELIVERY",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function EcosystemCapabilitiesSection() {
  /*
    We keep 12 original cards + duplicate cards.

    This creates an infinite-looking carousel:
    01 → 02 → 03 → ... → 12 → 01 → 02 → ...
  */

  const duplicatedCapabilities = [
    ...capabilities,
    ...capabilities,
  ];

  /*
    Start from 0
    Every movement = 2 cards
  */

  const [currentIndex, setCurrentIndex] = useState(0);

  /*
    Prevent transition temporarily when resetting
    from duplicate cards back to original cards.
  */

  const [enableTransition, setEnableTransition] = useState(true);

  /* =======================================================
     NEXT - MOVE 2 CARDS
  ======================================================= */

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 2);
  };

  /* =======================================================
     PREVIOUS - MOVE 2 CARDS
  ======================================================= */

  const previousSlide = () => {
    /*
      If we are at the beginning, jump to the
      duplicate section first and then move backward.
    */

    if (currentIndex === 0) {
      setEnableTransition(false);

      setCurrentIndex(capabilities.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setCurrentIndex(capabilities.length - 2);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 2);
    }
  };

  /* =======================================================
     AUTO SLIDE
     EVERY 3 SECONDS
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =======================================================
     INFINITE LOOP RESET
  ======================================================= */

  useEffect(() => {
    /*
      Once we reach the duplicated section,
      silently reset to the original section.

      User will not notice the reset because
      the cards are identical.
    */

    if (currentIndex >= capabilities.length) {
      const timer = setTimeout(() => {
        setEnableTransition(false);

        setCurrentIndex(currentIndex - capabilities.length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
          });
        });
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-12
        sm:px-6
        sm:py-14
        md:px-8
        md:py-16
        lg:px-10
        lg:py-20
        xl:px-12
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-5
            sm:mb-10
            md:flex-row
            md:items-end
            md:justify-between
            lg:mb-12
          "
        >

          {/* LEFT CONTENT */}

          <div className="max-w-3xl">

            {/* LABEL */}

            <p
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6B1E3F]
                sm:text-xs
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              OUR ECOSYSTEM
            </p>

            {/* HEADING */}

            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                tracking-[-0.025em]
                text-[#171717]
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Technology that works together
            </h2>

            {/* SUBHEADING */}

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Connected technology creates a stronger foundation for
              organizations to operate, adapt, and grow.
            </p>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Our ecosystem brings together business functions, people,
              processes, and systems into one connected technology environment.
            </p>
          </div>

          {/* =================================================
              PREVIOUS / NEXT BUTTONS
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              md:pb-1
            "
          >

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous cards"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-md
                border
                border-[#6B1E3F]/20
                bg-white
                text-[#6B1E3F]
                transition-all
                duration-300
                hover:border-[#6B1E3F]
                hover:bg-[#6B1E3F]
                hover:text-white
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.8}
              />
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next cards"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-md
                bg-[#6B1E3F]
                text-white
                transition-all
                duration-300
                hover:-translate-x-0.5
                hover:bg-[#6B1E3F]
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <ChevronRight
                size={18}
                strokeWidth={1.8}
              />
            </button>

          </div>
        </div>

        {/* =================================================
            CAROUSEL VIEWPORT
        ================================================= */}

        <div className="w-full overflow-hidden">

          {/* =================================================
              CAROUSEL TRACK
          ================================================= */}

          <div
            className={`
              flex
              gap-4
              sm:gap-5
              lg:gap-6
              ${
                enableTransition
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }
            `}
            style={{
              transform: `translateX(
                calc(
                  -${currentIndex} *
                  (
                    (100% - 72px) / 4 + 24px
                  )
                )
              )`,
            }}
          >

            {duplicatedCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.number}-${index}`}
                  className="
                    group
                    relative
                    min-w-0
                    flex-[0_0_100%]
                    overflow-hidden
                    rounded-md
                    bg-slate-50
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-rose-50
                    hover:shadow-md

                    sm:flex-[0_0_calc((100%-20px)/2)]
                    sm:p-6

                    md:flex-[0_0_calc((100%-40px)/3)]

                    lg:flex-[0_0_calc((100%-72px)/4)]
                  "
                >

                  {/* =================================================
                      TOP RIGHT PINK GLOW
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      h-24
                      w-24
                      rounded-full
                      bg-pink-300/20
                      blur-2xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* =================================================
                      TOP ROW
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                    "
                  >

                    {/* NUMBER */}

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        tracking-[0.15em]
                        text-slate-400
                        sm:text-xs
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.number}
                    </span>

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#6B1E3F]/10
                        text-[#6B1E3F]
                        transition-all
                        duration-500
                        ease-out
                        group-hover:scale-110
                        group-hover:bg-[#6B1E3F]
                        group-hover:text-white
                        group-hover:shadow-md
                        sm:h-11
                        sm:w-11
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </div>

                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div
                    className="
                      relative
                      z-10
                      mt-8
                    "
                  >

                    {/* TITLE */}

                    <h3
                      className="
                        min-h-[52px]
                        text-base
                        font-semibold
                        leading-6
                        text-[#1B1B1B]
                        sm:text-lg
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-3
                        min-h-[84px]
                        text-xs
                        leading-5
                        text-slate-600
                        sm:text-sm
                        sm:leading-6
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {item.description}
                    </p>

                    {/* TAG */}

                    <div className="mt-6">

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-white
                          px-3
                          py-1.5
                          text-[8px]
                          font-semibold
                          tracking-[0.12em]
                          text-[#6B1E3F]
                          transition-colors
                          duration-300
                          group-hover:bg-[#6B1E3F]
                          group-hover:text-white
                          sm:text-[9px]
                        "
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {item.tag}
                      </span>

                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}