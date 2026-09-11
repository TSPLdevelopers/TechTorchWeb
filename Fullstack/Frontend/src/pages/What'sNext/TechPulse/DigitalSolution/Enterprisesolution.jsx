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
    <section className="w-full bg-gradient-to-b from-[#f6f4f9] to-white py-14 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5"
          style={{ backgroundColor: "#fdeef4" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#9d174d" }} />
          <span
            className="text-[10px] sm:text-[11px] font-semibold tracking-[0.1em] uppercase"
            style={{ color: "#9d174d" }}
          >
            Enterprise Digital Solutions · Suite &amp; Architecture
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold leading-tight text-slate-900 max-w-2xl mb-4">
          Architecting High-Velocity Digital Solutions for the Modern
          Enterprise
        </h1>

        {/* Paragraph */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 max-w-xl mb-8 sm:mb-10">
          TechTorch delivers purpose-built digital solutions designed to
          eradicate operational friction, modernize fragmented legacy
          estates, and empower enterprise leaders with decisive
          architectural momentum.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-100 bg-white p-4 sm:p-5 shadow-sm"
            >
              <p
                className="text-[20px] sm:text-[22px] font-bold mb-1"
                style={{ color: "#7a1750" }}
              >
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-slate-500 mb-2">
                {stat.label}
              </p>
              <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-semibold text-white transition-opacity hover:opacity-90 mb-10 sm:mb-12"
          style={{ backgroundColor: "#7a1750" }}
        >
          Talk to Experts
          <ArrowRight size={15} />
        </button>

        {/* Image with telemetry overlay */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="/enterprise-command-center.jpg"
            alt="Enterprise operations team reviewing a live data command center"
            className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover"
          />

          {/* Bottom telemetry bar */}
          <div className="absolute inset-x-0 bottom-0 bg-black/55 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-white/60">
                    Live Enterprise Telemetry
                  </p>
                  <p className="text-[13px] sm:text-[14px] font-semibold text-white truncate">
                    Universal Node Fabric: Operational Nominal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-white/60">
                    Throughput
                  </p>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-white">
                    1.84M events/sec
                  </p>
                </div>

                <div>
                  <p className="text-[9px] sm:text-[10px] font-semibold tracking-wide uppercase text-white/60">
                    Mean Latency
                  </p>
                  <p className="text-[12px] sm:text-[13px] font-semibold text-white">
                    14.2ms global
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                  <Activity size={11} />
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