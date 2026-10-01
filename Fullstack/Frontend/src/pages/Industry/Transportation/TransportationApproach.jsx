import React from "react";
import { FileSearch, Wand2, ShieldCheck, Headphones, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: FileSearch,
    label: "REQUIREMENT ANALYSIS",
    title: "UNDERSTAND",
    body: "Understand your business objectives and technology requirements.",
    footer: "Phase 01 • Discovery",
  },
  {
    num: "02",
    icon: Wand2,
    label: "SOLUTION ARCHITECTURE",
    title: "DESIGN & DEVELOP",
    body: "Plan and develop the solution around your requirements.",
    footer: "Phase 02 • Engineering",
  },
  {
    num: "03",
    icon: ShieldCheck,
    label: "QUALITY VERIFICATION",
    title: "TEST & DEPLOY",
    body: "Test the solution and prepare it for implementation.",
    footer: "Phase 03 • Validation",
  },
  {
    num: "04",
    icon: Headphones,
    label: "CONTINUOUS EVOLUTION",
    title: "SUPPORT & MAINTAIN",
    body: "Provide ongoing support and maintenance as requirements evolve.",
    footer: "Phase 04 • Lifecycle",
  },
];

export default function ConnectedApproachStepsSection() {
  return (
    <div style={{ background: "#f5f6f8", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
          style={{ background: "#fbeef1", color: WINE }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
          OUR APPROACH
        </span>

        <h2 className="text-3xl font-bold tracking-tight mb-4">
          From Requirement to Support
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: MUTED }}>
          A disciplined engineering workflow structured to deliver
          transparent governance, end-to-end integration, and continuous
          platform evolution.
        </p>

        <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-0">
          {/* connecting line */}
          <div
            className="hidden md:block absolute top-[52px] left-0 right-0 h-px"
            style={{ background: "#ddd9d3" }}
          />

          {steps.map(({ num, icon: Icon, label, title, body, footer }, i) => (
            <div key={num} className="relative px-2">
              <div
                className="bg-white rounded-xl p-5 h-full flex flex-col"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    {num}
                  </span>
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-lg"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    <Icon size={15} strokeWidth={1.8} />
                  </span>
                </div>
                <p className="text-[9px] font-semibold tracking-wide mb-1" style={{ color: WINE }}>
                  {label}
                </p>
                <h3 className="text-sm font-bold tracking-wide mb-2">{title}</h3>
                <p className="text-xs leading-relaxed mb-6" style={{ color: MUTED }}>
                  {body}
                </p>
                <div
                  className="mt-auto flex items-center justify-between pt-3 border-t"
                  style={{ borderColor: "#ece9e4" }}
                >
                  <span className="text-[10px]" style={{ color: "#a9a6b0" }}>
                    {footer}
                  </span>
                  <ArrowRight size={12} style={{ color: "#c9c4bc" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}