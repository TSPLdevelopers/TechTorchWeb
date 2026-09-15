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

const AUTO_INTERVAL_MS = 2500;
const TRANSITION_MS = 600;

export default function DigitalSolutionsCarousel() {
  const total = SOLUTIONS.length;

  const track = [...SOLUTIONS, ...SOLUTIONS, ...SOLUTIONS];

  const [itemsPerView, setItemsPerView] = useState(4);
  const [index, setIndex] = useState(total);
  const [withTransition, setWithTransition] = useState(true);

  const timerRef = useRef(null);

  /* ================= RESPONSIVE ================= */

  useEffect(() => {
    function updateItemsPerView() {
      const w = window.innerWidth;

      if (w < 640) {
        setItemsPerView(1);
      } else if (w < 1024) {
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

  /* ================= AUTOPLAY ================= */

  function startAutoplay() {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTO_INTERVAL_MS);
  }

  useEffect(() => {
    startAutoplay();

    return () => clearInterval(timerRef.current);
  }, []);

  /* ================= INFINITE LOOP ================= */

  useEffect(() => {
    if (index >= total * 2 || index < total) {
      const t = setTimeout(() => {
        setWithTransition(false);

        setIndex((i) =>
          i >= total * 2 ? i - total : i + total
        );
      }, TRANSITION_MS);

      return () => clearTimeout(t);
    }
  }, [index, total]);

  /* ================= RE-ENABLE TRANSITION ================= */

  useEffect(() => {
    if (!withTransition) {
      const raf = requestAnimationFrame(() => {
        setWithTransition(true);
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [withTransition]);

  /* ================= CONTROLS ================= */

  function goNext() {
    setIndex((i) => i + 1);
    startAutoplay();
  }

  function goPrev() {
    setIndex((i) => i - 1);
    startAutoplay();
  }

  const translatePercent = (index * 100) / itemsPerView;

  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#f6f4ee]
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:py-20
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}

        <div
          className="
            relative
            mb-10
            flex
            items-center
            justify-center
            sm:mb-12
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="h-px w-6 sm:w-10"
              style={{ backgroundColor: "#730024" }}
            />

            <span
              className="
                font-['Inter']
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                sm:text-[12px]
              "
              style={{ color: "#730024" }}
            >
              Our Digital Solutions
            </span>

            <span
              className="h-px w-6 sm:w-10"
              style={{ backgroundColor: "#730024" }}
            />
          </div>

          {/* ================= NAVIGATION BUTTONS ================= */}

          <div
            className="
              absolute
              right-0
              top-1/2
              flex
              -translate-y-1/2
              items-center
              gap-2
            "
          >
            {/* PREVIOUS */}

            <button
              onClick={goPrev}
              aria-label="Previous solutions"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-white
                transition-all
                duration-300
                hover:opacity-85
                sm:h-9
                sm:w-9
              "
              style={{
                backgroundColor: "#730024",
              }}
            >
              <ChevronLeft size={16} />
            </button>

            {/* NEXT */}

            <button
              onClick={goNext}
              aria-label="Next solutions"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-white
                transition-all
                duration-300
                hover:opacity-85
                sm:h-9
                sm:w-9
              "
              style={{
                backgroundColor: "#730024",
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= CAROUSEL ================= */}

        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${translatePercent}%)`,
              transition: withTransition
                ? `transform ${TRANSITION_MS}ms ease`
                : "none",
            }}
          >
            {track.map(
              ({ number, icon: Icon, title, description }, i) => (
                <div
                  key={`${number}-${i}`}
                  className="
                    flex-shrink-0
                    px-2
                    sm:px-2.5
                  "
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                >
                  <div
                    className="
                      relative
                      h-full
                      overflow-hidden
                      rounded-xl
                      bg-white
                      py-5
                      pl-5
                      pr-4
                      shadow-sm
                    "
                  >
                    {/* LEFT ACCENT */}

                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-1.5
                      "
                      style={{
                        backgroundColor: "#730024",
                      }}
                    />

                    {/* TOP ROW */}

                    <div className="mb-4 flex items-start justify-between">
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                        "
                        style={{
                          backgroundColor: "#fdeef4",
                        }}
                      >
                        <Icon
                          size={16}
                          style={{
                            color: "#730024",
                          }}
                          strokeWidth={2}
                        />
                      </div>

                      <span className="mt-1 font-['Inter'] text-[11px] font-semibold text-slate-400">
                        {number}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mb-2
                        font-['Plus_Jakarta_Sans']
                        text-[14.5px]
                        font-bold
                        leading-snug
                        text-slate-900
                      "
                    >
                      {title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        font-['Inter']
                        text-[12.5px]
                        leading-relaxed
                        text-slate-500
                      "
                    >
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
  );
}