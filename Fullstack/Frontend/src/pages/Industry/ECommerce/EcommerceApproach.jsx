import React, { useEffect, useRef, useState } from "react";
import {
  UserCheck,
  LayoutGrid,
  GraduationCap,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: UserCheck,
    phase: "PHASE 01 • DISCOVERY",
    title: "Understand",
    body: "Understand your business requirements and e-commerce objectives.",
    footer: "Scope Alignment",
  },
  {
    num: "02",
    icon: LayoutGrid,
    phase: "PHASE 02 • BUILD",
    title: "Implement",
    body: "Configure and implement the solution around your requirements.",
    footer: "Production Readiness",
  },
  {
    num: "03",
    icon: GraduationCap,
    phase: "PHASE 03 • ENABLEMENT",
    title: "Train",
    body: "Provide training to help teams work with the e-commerce environment.",
    footer: "Team Autonomy",
  },
  {
    num: "04",
    icon: RefreshCw,
    phase: "PHASE 04 • EVOLUTION",
    title: "Maintain & Update",
    body: "Continue with maintenance and updates as your requirements evolve.",
    footer: "Continuous Health",
  },
];

export default function ImplementationToSupportSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden"
      style={{
        background: "#f7f5f2",
        color: INK,
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-[100px] py-12 sm:py-14 md:py-16 lg:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div className="max-w-2xl">
            {/* Label */}
            <span
              className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-3 sm:mb-4"
              style={{
                background: "#fbeef1",
                color: WINE,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: WINE }}
              />
              OUR APPROACH
            </span>

            {/* Heading */}
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-tight font-bold tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              From Implementation to Ongoing Support
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className="text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-md lg:max-w-sm"
            style={{
              color: MUTED,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            A structured, disciplined delivery lifecycle built to minimize
            disruption and maximize long-term operational velocity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map(
            ({ num, icon: Icon, phase, title, body, footer }, index) => (
              <div
                key={num}
                className={`
                  group
                  bg-white
                  rounded-xl
                  sm:rounded-2xl
                  p-5
                  sm:p-6
                  flex
                  flex-col
                  min-h-[260px]
                  sm:min-h-[280px]
                  transition-all
                  duration-700
                  ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_18px_40px_rgba(122,31,61,0.12)]
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                  transitionDelay: isVisible
                    ? `${index * 180}ms`
                    : "0ms",
                }}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-5">
                  {/* Number */}
                  <span
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-xs font-bold transition-colors duration-300"
                    style={{
                      background: "#fbeef1",
                      color: WINE,
                    }}
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    style={{ color: WINE }}
                    className="transition-transform duration-300"
                  />
                </div>

                {/* Phase */}
                <p
                  className="text-[8px] sm:text-[9px] font-semibold tracking-[0.08em] mb-2"
                  style={{
                    color: "#a9a6b0",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {phase}
                </p>

                {/* Title */}
                <h3
                  className="text-sm sm:text-base font-semibold mb-2"
                  style={{
                    color: INK,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {title}
                </h3>

                {/* Body */}
                <p
                  className="text-xs sm:text-[13px] leading-relaxed mb-6"
                  style={{
                    color: MUTED,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {body}
                </p>

                {/* Footer */}
                <div
                  className="mt-auto flex items-center justify-between pt-3 border-t"
                  style={{
                    borderColor: "#ece9e4",
                  }}
                >
                  <span
                    className="text-[11px] sm:text-xs"
                    style={{
                      color: MUTED,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {footer}
                  </span>

                  <ArrowRight
                    size={13}
                    strokeWidth={1.8}
                    style={{ color: WINE }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}