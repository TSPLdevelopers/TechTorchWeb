import React from "react";
import { ArrowRight, Activity } from "lucide-react";

const STATS = [
  {
    value: "99.98%",
    label: "System Reliability SLA",
    description:
      "Continuous fault-tolerant orchestration across mission-critical enterprise workflows.",
  },
  {
    value: "12 Core",
    label: "Modular Digital Solutions",
    description:
      "Spanning ERP, Logistics, Clinical Care, Talent Dynamics, and FinTech systems.",
  },
  {
    value: "4× Velocity",
    label: "Cross-Functional Cycles",
    description:
      "Accelerating strategic decision-making and automated pipeline execution.",
  },
];

export default function EnterpriseHero() {
  return (
    <section
      className="
        w-full
        bg-gradient-to-b
        from-[#f6f4f9]
        to-white
        px-4
        py-12
        sm:px-6
        sm:py-16
        md:px-8
        md:py-20
        lg:px-10
        xl:px-12
      "
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="mx-auto w-full max-w-5xl">

        {/* ================= EYEBROW ================= */}

        <div
          className="
            mb-5
            inline-flex
            max-w-full
            items-center
            gap-2
            rounded-full
            px-3
            py-1.5
          "
          style={{
            backgroundColor: "#fdeef4",
          }}
        >
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{
              backgroundColor: "#9d174d",
            }}
          />

          <span
            className="
              truncate
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.1em]
              sm:text-[10px]
              md:text-[11px]
            "
            style={{
              color: "#9d174d",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Enterprise Digital Solutions · Suite &amp; Architecture
          </span>
        </div>

        {/* ================= HEADING ================= */}

        <h1
          className="
            mb-4
            max-w-3xl
            text-[26px]
            font-bold
            leading-[1.15]
            tracking-tight
            text-slate-900
            sm:text-[32px]
            sm:leading-[1.12]
            md:text-[36px]
            lg:text-[40px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Architecting High-Velocity Digital Solutions for the Modern
          Enterprise
        </h1>

        {/* ================= SUB HEADING ================= */}

        <p
          className="
            mb-8
            max-w-2xl
            text-[13px]
            leading-6
            text-slate-500
            sm:mb-10
            sm:text-[14px]
            sm:leading-7
            md:text-[15px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          TechTorch delivers purpose-built digital solutions designed to
          eradicate operational friction, modernize fragmented legacy
          estates, and empower enterprise leaders with decisive
          architectural momentum.
        </p>

        {/* ================= STAT CARDS ================= */}

        <div
          className="
            mb-8
            grid
            grid-cols-1
            gap-3
            sm:mb-10
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-3
          "
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="
                min-w-0
                rounded-xl
                border
                border-slate-100
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
                sm:p-5
              "
            >
              {/* STAT VALUE */}

              <p
                className="
                  mb-1
                  text-[20px]
                  font-bold
                  sm:text-[22px]
                "
                style={{
                  color: "#7a1750",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.value}
              </p>

              {/* STAT LABEL */}

              <p
                className="
                  mb-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                  sm:text-[10px]
                  md:text-[11px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.label}
              </p>

              {/* STAT DESCRIPTION */}

              <p
                className="
                  text-[12px]
                  leading-5
                  text-slate-500
                  sm:text-[12.5px]
                  sm:leading-relaxed
                  md:text-[13px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= CTA ================= */}

        <button
          type="button"
          className="
            mb-10
            inline-flex
            min-h-[40px]
            items-center
            justify-center
            gap-2
            rounded-full
            px-5
            py-3
            text-[12px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:opacity-90
            sm:mb-12
            sm:min-h-[42px]
            sm:text-[13px]
            md:text-[14px]
          "
          style={{
            backgroundColor: "#7a1750",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Talk to Experts

          <ArrowRight
            size={15}
            strokeWidth={2}
          />
        </button>

        {/* ================= IMAGE ================= */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-xl
            sm:rounded-2xl
          "
        >
          <img
  src="/digital solution.png"
  alt="Enterprise operations team reviewing a live data command center"
  className="
    block
    w-full
    h-auto
    object-cover
    sm:aspect-[2.5/1]
    sm:object-cover
  "
/>

          {/* ================= TELEMETRY BAR ================= */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              bg-black/55
              px-3
              py-3
              backdrop-blur-sm
              sm:px-5
              sm:py-4
              md:px-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-4
              "
            >
              {/* ================= LEFT TELEMETRY ================= */}

              <div
                className="
                  flex
                  min-w-0
                  items-center
                  gap-2
                "
              >
                {/* STATUS DOT */}

                <span className="relative flex h-2 w-2 shrink-0">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-400
                    "
                  />
                </span>

                {/* TELEMETRY TEXT */}

                <div className="min-w-0">
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-white/60
                      sm:text-[9px]
                      md:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Live Enterprise Telemetry
                  </p>

                  <p
                    className="
                      truncate
                      text-[11px]
                      font-semibold
                      text-white
                      sm:text-[12px]
                      md:text-[14px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Universal Node Fabric: Operational Nominal
                  </p>
                </div>
              </div>

              {/* ================= RIGHT TELEMETRY ================= */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-x-4
                  gap-y-2
                  sm:gap-x-5
                  md:gap-x-6
                "
              >
                {/* THROUGHPUT */}

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-white/60
                      sm:text-[9px]
                      md:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Throughput
                  </p>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      text-white
                      sm:text-[11px]
                      md:text-[13px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    1.84M events/sec
                  </p>
                </div>

                {/* MEAN LATENCY */}

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-wide
                      text-white/60
                      sm:text-[9px]
                      md:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Mean Latency
                  </p>

                  <p
                    className="
                      text-[10px]
                      font-semibold
                      text-white
                      sm:text-[11px]
                      md:text-[13px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    14.2ms global
                  </p>
                </div>

                {/* ACTIVE STATE */}

                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-emerald-500/20
                    px-2
                    py-1
                    text-[9px]
                    font-semibold
                    text-emerald-300
                    sm:px-2.5
                    sm:text-[10px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <Activity
                    size={11}
                    strokeWidth={2}
                  />

                  Active State
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}