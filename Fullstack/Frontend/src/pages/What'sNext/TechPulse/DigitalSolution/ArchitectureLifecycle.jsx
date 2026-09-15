import React from "react";
import {
  Target,
  GitBranch,
  Cpu,
  TrendingUp,
} from "lucide-react";

const PHASES = [
  {
    phase: "PHASE 01",
    icon: Target,
    title: "Discover & Map",
    description:
      "Exhaustive audit of legacy tech debt, distributed data siloing, structural latency vectors, and cross-team workflow bottlenecks.",
  },
  {
    phase: "PHASE 02",
    icon: GitBranch,
    title: "Design & Decouple",
    description:
      "Event-driven domain modeling, clean API orchestration contracts, security enclave parameters, and unified data governance policies.",
  },
  {
    phase: "PHASE 03",
    icon: Cpu,
    title: "Engineer & Integrate",
    description:
      "Rapid iterative sprints via automated CI/CD gating, shadow-run testing, fault simulation, and bias-less data streaming pipelines.",
  },
  {
    phase: "PHASE 04",
    icon: TrendingUp,
    title: "Optimize & Scale",
    description:
      "Real-time observability tracing, dedicated Vector Squad engineering support, dynamic autoscaling, and SLA compliance guardrails.",
  },
];

export default function DeliveryLifecycle() {
  return (
    <section
      className="
        w-full
        bg-[#f3f1f5]
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
      <div
        className="
          mx-auto
          w-full
          max-w-5xl
          rounded-[22px]
          p-5
          shadow-xl
          sm:rounded-[26px]
          sm:p-8
          md:rounded-[28px]
          md:p-10
          lg:p-11
        "
        style={{
          background:
            "linear-gradient(160deg, #6e1345 0%, #3a0e20 100%)",
        }}
      >
        {/* ================= BADGE ================= */}

        <span
          className="
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white/10
            px-3
            py-1.5
            sm:mb-5
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[10px]">
            Proven Architecture Lifecycle
          </span>
        </span>

        {/* ================= HEADING ================= */}

        <h2
          className="
            mb-3
            max-w-2xl
            text-[22px]
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:mb-4
            sm:text-[25px]
            md:text-[28px]
            lg:text-[30px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          How TechTorch Delivers Digital Solutions at Enterprise Scale
        </h2>

        {/* ================= SUB HEADING ================= */}

        <p
          className="
            mb-8
            max-w-2xl
            text-[13px]
            leading-6
            text-white/65
            sm:mb-10
            sm:text-[14px]
            sm:leading-7
            md:text-[15px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          A battle-tested four-stage engineering methodology turning complex,
          distributed ambiguity into hardened production ecosystems.
        </p>

        {/* ================= TIMELINE ================= */}

        <div className="relative mb-6 hidden lg:block">
          {/* LINE */}

          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-1/2
              h-px
              bg-white/15
            "
          />

          {/* DOTS */}

          <div className="relative grid grid-cols-4">
            {PHASES.map((p) => (
              <div
                key={p.phase}
                className="flex justify-center"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= PHASE CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-4
          "
        >
          {PHASES.map(
            ({ phase, icon: Icon, title, description }) => (
              <div
                key={phase}
                className="
                  group
                  min-w-0
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-4
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-white/[0.09]
                  hover:shadow-lg
                  sm:p-5
                "
              >
                {/* ================= CARD TOP ================= */}

                <div className="mb-4 flex items-center justify-between gap-3">
                  {/* PHASE */}

                  <span
                    className="
                      rounded
                      bg-white/10
                      px-2
                      py-1
                      text-[9px]
                      font-semibold
                      tracking-wide
                      text-white/60
                      sm:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {phase}
                  </span>

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-white/10
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-white/15
                    "
                  >
                    <Icon
                      size={14}
                      className="text-white/80"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* ================= CARD TITLE ================= */}

                <h3
                  className="
                    mb-2
                    text-[14px]
                    font-semibold
                    leading-snug
                    text-white
                    sm:text-[15px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {title}
                </h3>

                {/* ================= CARD DESCRIPTION ================= */}

                <p
                  className="
                    text-[12px]
                    leading-5
                    text-white/60
                    sm:text-[13px]
                    sm:leading-relaxed
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}