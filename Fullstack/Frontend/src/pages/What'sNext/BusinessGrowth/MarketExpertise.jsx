import React, { useEffect, useRef, useState } from "react";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Cpu,
  HardHat,
  Wifi,
  Zap,
  Truck,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ================= INDUSTRIES ================= */

const industries = [
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Technology for financial processes, information, and business operations.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital platforms that support institutions, students, teachers, and administrators.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Technology designed to support healthcare operations and patient-focused services.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Solutions for online stores, customer experiences, payments, and digital growth.",
  },
  {
    icon: Cpu,
    title: "Information Technology",
    description:
      "Software and infrastructure solutions for technology-driven organizations.",
  },
  {
    icon: HardHat,
    title: "Manufacturing",
    description:
      "Digital tools to support operational efficiency and business processes.",
  },
  {
    icon: Wifi,
    title: "Telecommunications",
    description:
      "Technology solutions designed for connected and evolving business environments.",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Digital solutions supporting operational and organizational requirements.",
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Technology designed around complex operational and management needs.",
  },
  {
    icon: Package,
    title: "FMCG",
    description:
      "Solutions that help manage fast-moving business operations and customer-facing processes.",
  },
];

/* ================= DUPLICATE FOR INFINITE LOOP ================= */

const carouselItems = [...industries, ...industries];

export default function MarketExpertiseSection() {
  const viewportRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const GAP = 16;
  const VISIBLE_CARDS = 4;

  /* ================= CARD WIDTH ================= */

  useEffect(() => {
    const updateCardWidth = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;

      const width =
        (viewportWidth - GAP * (VISIBLE_CARDS - 1)) / VISIBLE_CARDS;

      setCardWidth(width);
    };

    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  /* ================= AUTO SLIDE ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ================= INFINITE LOOP RESET ================= */

  useEffect(() => {
    if (currentIndex < industries.length) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);

      setCurrentIndex((prev) => prev - industries.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }, 650);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  /* ================= NEXT BUTTON ================= */

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  /* ================= PREVIOUS BUTTON ================= */

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(industries.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(industries.length - 1);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const translateX = currentIndex * (cardWidth + GAP);

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:px-8
        lg:px-10
        xl:px-12
      "
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}

        <div
          className="
            mb-8
            flex
            items-end
            justify-between
            gap-6
            sm:mb-10
          "
        >
          {/* LEFT CONTENT */}

          <div className="max-w-3xl">
            <p
              className="
                mb-3
                text-xs
                font-semibold
                tracking-[0.18em]
                text-[#6B1E3F]
                sm:text-sm
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              MARKET EXPERTISE
            </p>

            <h1
              className="
                text-3xl
                font-semibold
                leading-tight
                tracking-tight
                text-[#1B1B1B]
                sm:text-4xl
                md:text-5xl
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Technology That Understands Different Industries
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-gray-600
                sm:text-base
                sm:leading-8
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Every industry operates differently. We build technology
              solutions that understand specific business processes,
              operational requirements, and customer needs.
            </p>
          </div>

          {/* ================= NAVIGATION BUTTONS ================= */}

          <div className="flex shrink-0 gap-2 pb-1">
            {/* PREVIOUS */}

            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous industry"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-[#6B1E3F]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#6B1E3F]
                hover:text-white
                hover:shadow-md
                sm:h-11
                sm:w-11
              "
            >
              <ChevronLeft
                size={19}
                strokeWidth={2}
              />
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next industry"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                text-[#6B1E3F]
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#6B1E3F]
                hover:text-white
                hover:shadow-md
                sm:h-11
                sm:w-11
              "
            >
              <ChevronRight
                size={19}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* ================= CAROUSEL VIEWPORT ================= */}

        <div
          ref={viewportRef}
          className="w-full overflow-hidden"
        >
          {/* ================= CAROUSEL TRACK ================= */}

          <div
            className={`flex ${
              isTransitioning
                ? "transition-transform duration-[650ms] ease-in-out"
                : ""
            }`}
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${translateX}px)`,
              willChange: "transform",
            }}
          >
            {carouselItems.map((industry, index) => {
              const Icon = industry.icon;

              return (
                <div
                  key={`${industry.title}-${index}`}
                  className="
                    group
                    flex
                    min-w-0
                    shrink-0
                    flex-col
                    rounded-md
                    bg-slate-50
                    p-5
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:bg-white
                    hover:shadow-lg
                    sm:p-6
                  "
                  style={{
                    width: `${cardWidth}px`,
                  }}
                >
                  {/* ================= ICON ================= */}

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-rose-100
                      text-[#6B1E3F]
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-110
                      group-hover:bg-[#6B1E3F]
                      group-hover:text-white
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-110
                      "
                    />
                  </span>

                  {/* ================= TITLE ================= */}

                  <h3
                    className="
                      mt-5
                      text-base
                      font-semibold
                      leading-snug
                      text-[#1B1B1B]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {industry.title}
                  </h3>

                  {/* ================= DESCRIPTION ================= */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-gray-500
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}