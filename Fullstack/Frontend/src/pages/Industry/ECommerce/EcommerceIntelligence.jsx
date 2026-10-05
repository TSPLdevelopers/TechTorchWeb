import React, { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Users,
  Activity,
  FileText,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const metrics = [
  {
    icon: TrendingUp,
    title: "Sales Performance",
    body: "Review sales-related information.",
  },
  {
    icon: Users,
    title: "Customer Trends",
    body: "Understand customer activity and purchasing patterns.",
  },
  {
    icon: Activity,
    title: "Website Activity",
    body: "Monitor relevant website information.",
  },
  {
    icon: FileText,
    title: "Business Reporting",
    body: "Use organized reports to support business decisions.",
  },
];

const stats = [
  { label: "THROUGHPUT", value: "Real-Time" },
  { label: "GRANULARITY", value: "Normalized" },
  { label: "AUDITING", value: "Automated" },
];

export default function IntelligenceVisibilitySection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      className="w-full bg-white overflow-hidden"
      style={{ color: INK }}
    >
      <div
        className="
          w-full
          max-w-[1320px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
          py-12
          sm:py-14
          md:py-16
          lg:py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          sm:gap-12
          md:gap-14
          lg:gap-16
          items-start
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full">
          {/* Section Label */}
          <p
            className="
              text-[10px]
              sm:text-[11px]
              md:text-xs
              font-semibold
              tracking-[0.08em]
              mb-3
              font-['Plus_Jakarta_Sans']
            "
            style={{ color: WINE }}
          >
            INTELLIGENCE &amp; VISIBILITY
          </p>

          {/* Heading */}
          <h2
            className="
              font-['Plus_Jakarta_Sans']
              text-2xl
              sm:text-[1.65rem]
              md:text-[1.8rem]
              lg:text-[2rem]
              leading-[1.2]
              font-bold
              tracking-tight
              mb-4
              max-w-xl
            "
          >
            Understand Your E-Commerce Business
          </h2>

          {/* Description */}
          <p
            className="
              text-sm
              sm:text-[14px]
              md:text-sm
              leading-7
              mb-7
              font-['Inter']
              max-w-xl
            "
            style={{ color: MUTED }}
          >
            Online business generates useful information across sales,
            customers and website activity. Analytics and reporting can
            help teams understand this information and support business
            decisions.
          </p>

          {/* METRIC CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {metrics.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                className={`
                  group
                  w-full
                  min-h-[150px]
                  rounded-xl
                  p-5
                  sm:p-6
                  border
                  border-transparent
                  transition-all
                  duration-500
                  ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                  hover:-translate-y-2
                  hover:shadow-[0_15px_30px_rgba(122,31,61,0.10)]
                  hover:border-[#7A1F3D]/15
                `}
                style={{
                  background: "#f6f7fa",
                  transitionDelay: isVisible
                    ? `${index * 180}ms`
                    : "0ms",
                }}
              >
                {/* Icon */}
                <div
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    mb-3
                    transition-colors
                    duration-300
                  "
                  style={{
                    background: "#fbeef1",
                    color: WINE,
                  }}
                >
                  <Icon size={17} strokeWidth={1.8} />
                </div>

                {/* Card Heading */}
                <h3
                  className="
                    text-sm
                    sm:text-[14px]
                    font-semibold
                    mb-1.5
                    leading-snug
                    font-['Plus_Jakarta_Sans']
                  "
                >
                  {title}
                </h3>

                {/* Card Text */}
                <p
                  className="
                    text-xs
                    sm:text-[13px]
                    leading-relaxed
                    font-['Inter']
                  "
                  style={{ color: MUTED }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT DATA PANEL */}
        <div
          className={`
            w-full
            bg-white
            rounded-2xl
            p-4
            sm:p-5
            md:p-6
            border
            transition-all
            duration-700
            ease-out
            ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
          style={{
            borderColor: "#ece9e4",
            boxShadow: "0 10px 35px rgba(0,0,0,0.04)",
            transitionDelay: "550ms",
          }}
        >
          {/* Panel Header */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <h3
              className="
                text-sm
                sm:text-[15px]
                font-semibold
                font-['Plus_Jakarta_Sans']
              "
            >
              Data Signal Distribution
            </h3>

            <span
              className="
                inline-flex
                items-center
                gap-1
                text-[9px]
                sm:text-[10px]
                font-semibold
                px-2
                sm:px-2.5
                py-1
                rounded-full
                border
                shrink-0
                font-['Inter']
              "
              style={{
                borderColor: "#ece9e4",
                color: MUTED,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#1a9455" }}
              />

              Continuous
            </span>
          </div>

          {/* Panel Subtitle */}
          <p
            className="
              text-[11px]
              sm:text-xs
              mb-5
              sm:mb-6
              font-['Inter']
            "
            style={{ color: MUTED }}
          >
            Structured operational telemetry
          </p>

          {/* CHART */}
          <div
            className="
              rounded-xl
              mb-5
              sm:mb-6
              overflow-hidden
            "
            style={{
              background: "#f6f7fa",
            }}
          >
            <svg
              viewBox="0 0 300 100"
              className="w-full h-28 sm:h-32"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="chartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={WINE}
                    stopOpacity="0.18"
                  />

                  <stop
                    offset="100%"
                    stopColor={WINE}
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>

              <path
                d="
                  M 10 72
                  L 60 55
                  L 100 61
                  L 140 45
                  L 180 51
                  L 220 35
                  L 260 28
                  L 290 18
                  L 290 100
                  L 10 100
                  Z
                "
                fill="url(#chartGradient)"
              />

              <polyline
                points="
                  10,72
                  60,55
                  100,61
                  140,45
                  180,51
                  220,35
                  260,28
                  290,18
                "
                fill="none"
                stroke={WINE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isVisible ? "chart-line" : ""}
              />

              {[
                [10, 72],
                [60, 55],
                [100, 61],
                [140, 45],
                [180, 51],
                [220, 35],
                [260, 28],
                [290, 18],
              ].map(([x, y], index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill={WINE}
                  className={
                    isVisible ? "chart-point-visible" : "chart-point"
                  }
                  style={{
                    animationDelay: `${700 + index * 100}ms`,
                  }}
                />
              ))}
            </svg>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            {stats.map(({ label, value }, index) => (
              <div
                key={label}
                className={`
                  bg-white
                  rounded-lg
                  p-3
                  sm:p-3.5
                  border
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-md
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }
                `}
                style={{
                  borderColor: "#ece9e4",
                  transitionDelay: isVisible
                    ? `${800 + index * 150}ms`
                    : "0ms",
                }}
              >
                <p
                  className="
                    text-[8px]
                    sm:text-[9px]
                    font-semibold
                    tracking-wide
                    mb-1
                    font-['Inter']
                  "
                  style={{ color: "#a9a6b0" }}
                >
                  {label}
                </p>

                <p
                  className="
                    text-sm
                    sm:text-[14px]
                    font-semibold
                    font-['Plus_Jakarta_Sans']
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION STYLES */}
      <style>{`
        .chart-line {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: drawChart 1.8s ease-out forwards;
        }

        .chart-point {
          opacity: 0;
        }

        .chart-point-visible {
          opacity: 0;
          animation: showPoint 0.35s ease-out forwards;
        }

        @keyframes drawChart {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes showPoint {
          from {
            opacity: 0;
            transform: scale(0.5);
            transform-origin: center;
          }

          to {
            opacity: 1;
            transform: scale(1);
            transform-origin: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chart-line {
            animation: none;
            stroke-dashoffset: 0;
          }

          .chart-point-visible {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}