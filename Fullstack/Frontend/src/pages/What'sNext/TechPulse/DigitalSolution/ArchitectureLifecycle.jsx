import React from "react";
import { Target, GitBranch, Cpu, TrendingUp } from "lucide-react";

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
    <section className="w-full bg-[#f3f1f5] py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      <div
        className="max-w-5xl mx-auto rounded-[28px] p-6 sm:p-10 shadow-xl"
        style={{
          background: "linear-gradient(160deg, #6e1345 0%, #3a0e20 100%)",
        }}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/80">
            Proven Architecture Lifecycle
          </span>
        </span>

        {/* Heading */}
        <h2 className="text-white text-[22px] sm:text-[26px] md:text-[28px] font-bold leading-tight max-w-lg mb-4">
          How TechTorch Delivers Digital Solutions at Enterprise Scale
        </h2>

        {/* Paragraph */}
        <p className="text-white/65 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mb-10 sm:mb-12">
          A battle-tested four-stage engineering methodology turning complex,
          distributed ambiguity into hardened production ecosystems.
        </p>

        {/* Timeline dots — desktop only */}
        <div className="relative hidden lg:block mb-6">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px bg-white/15" />
          <div className="relative grid grid-cols-4">
            {PHASES.map((p) => (
              <div key={p.phase} className="flex justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
              </div>
            ))}
          </div>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHASES.map(({ phase, icon: Icon, title, description }) => (
            <div
              key={phase}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-4 sm:p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold tracking-wide text-white/60 bg-white/10 rounded px-2 py-1">
                  {phase}
                </span>

                <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
                  <Icon size={14} className="text-white/80" strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-white font-semibold text-[15px] mb-2">
                {title}
              </h3>

              <p className="text-white/60 text-[13px] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}