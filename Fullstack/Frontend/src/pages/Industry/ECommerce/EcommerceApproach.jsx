import React from "react";
import { UserCheck, LayoutGrid, GraduationCap, RefreshCw, ArrowRight } from "lucide-react";

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
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
              OUR APPROACH
            </span>
            <h2 className="text-2xl font-bold tracking-tight">
              From Implementation to Ongoing Support
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: MUTED }}>
            A structured, disciplined delivery lifecycle built to minimize
            disruption and maximize long-term operational velocity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map(({ num, icon: Icon, phase, title, body, footer }) => (
            <div
              key={num}
              className="bg-white rounded-xl p-5 flex flex-col"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  {num}
                </span>
                <Icon size={16} style={{ color: WINE }} />
              </div>
              <p className="text-[9px] font-semibold tracking-wide mb-2" style={{ color: "#a9a6b0" }}>
                {phase}
              </p>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed mb-6" style={{ color: MUTED }}>
                {body}
              </p>
              <div
                className="mt-auto flex items-center justify-between pt-3 border-t"
                style={{ borderColor: "#ece9e4" }}
              >
                <span className="text-xs" style={{ color: MUTED }}>
                  {footer}
                </span>
                <ArrowRight size={12} style={{ color: WINE }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}