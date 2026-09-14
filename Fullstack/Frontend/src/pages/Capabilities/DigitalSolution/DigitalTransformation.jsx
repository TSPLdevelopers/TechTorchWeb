import React from "react";
import { Zap, ArrowDown, RefreshCw } from "lucide-react";

const PILLARS = [
  {
    label: "CLARITY",
    description: "Single pane of truth across operations",
  },
  {
    label: "CONTROL",
    description: "Governed workflows & zero bottlenecks",
  },
  {
    label: "SCALE",
    description: "Modular architecture built for surges",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Business Need & Discovery",
    tag: "Input",
    tagColor: "#64748b",
    description:
      "Decouple domain constraints, map operational friction points, and isolate core business goals.",
  },
  {
    number: "02",
    title: "Intelligent Architecture",
    tag: "Engine",
    tagColor: "#9d174d",
    description:
      "Modular cloud pipelines, event-driven data fabrics, governed automation & resilient APIs.",
    highlight: true,
  },
  {
    number: "03",
    title: "Measurable Enterprise Value",
    tag: "Outcome",
    tagColor: "#059669",
    description:
      "Single source of operational truth, automated compliance audits, and scalable revenue capacity.",
  },
];

export default function StrategicTransformationSection() {
  return (
    <section className="w-full bg-[#f3f1f5] py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="relative max-w-5xl mx-auto rounded-[28px] bg-white border border-slate-100 shadow-xl overflow-hidden p-6 sm:p-10">
        {/* Decorative glow */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-40 blur-3xl pointer-events-none"
          style={{ backgroundColor: "#f4c9dd" }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 mb-5">
              <Zap size={13} style={{ color: "#9d174d" }} />
              <span
                className="text-[11px] font-bold tracking-[0.1em] uppercase"
                style={{ color: "#9d174d" }}
              >
                Strategic Digital Transformation
              </span>
            </span>

            <h2 className="text-[24px] sm:text-[28px] font-bold leading-tight text-slate-900 mb-5">
              Turning Business Needs into Digital Solutions
            </h2>

            <p className="text-[14px] leading-relaxed text-slate-500 mb-8">
              <span className="font-semibold text-slate-700">
                Technology is most valuable when it solves a real business
                problem.
              </span>{" "}
              Our digital solutions bring greater operational visibility,
              cross-departmental agility, and precision control to the way
              your enterprise performs. We combine contextual business
              intelligence with scalable cloud engineering to create digital
              assets that drive bottom-line resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {PILLARS.map(({ label, description }) => (
                <div key={label}>
                  <p
                    className="text-[11px] font-bold tracking-wide uppercase mb-1.5"
                    style={{ color: "#9d174d" }}
                  >
                    {label}
                  </p>
                  <p className="text-[13px] leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: flow card */}
          <div className="rounded-2xl border border-[#f4c9dd] bg-[#fdf6f9] p-5 sm:p-6">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#9d174d" }} />
                <span
                  className="text-[11px] font-bold tracking-wide uppercase"
                  style={{ color: "#9d174d" }}
                >
                  Solution Synthesis Flow
                </span>
              </span>

              <span
                className="text-[10px] font-semibold rounded-full px-2.5 py-1"
                style={{ backgroundColor: "#fbe4ed", color: "#9d174d" }}
              >
                End-to-End Delivery
              </span>
            </div>

            <div className="flex flex-col">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.number}>
                  <div
                    className={`rounded-xl bg-white p-4 ${
                      step.highlight ? "border" : "border border-slate-100"
                    }`}
                    style={step.highlight ? { borderColor: "#9d174d" } : undefined}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="text-[10px] font-bold rounded-md w-6 h-6 flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: step.highlight ? "#9d174d" : "#f1f5f9",
                            color: step.highlight ? "#ffffff" : "#64748b",
                          }}
                        >
                          {step.number}
                        </span>
                        <p
                          className="text-[13px] font-bold leading-snug"
                          style={{ color: step.highlight ? "#9d174d" : "#0f172a" }}
                        >
                          {step.title}
                        </p>
                      </div>

                      <span
                        className="text-[9px] font-semibold uppercase tracking-wide flex-shrink-0 mt-0.5"
                        style={{ color: step.tagColor }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    <p className="text-[12px] leading-relaxed text-slate-500 pl-8.5 sm:pl-[34px]">
                      {step.description}
                    </p>
                  </div>

                  {i < STEPS.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown size={14} style={{ color: "#9d174d" }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 pt-4 border-t" style={{ borderColor: "#f4c9dd" }}>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <RefreshCw size={11} />
                Zero Silo Architecture
              </span>
              <span className="text-[11px] font-bold" style={{ color: "#9d174d" }}>
                ENTERPRISE VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}