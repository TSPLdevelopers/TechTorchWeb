import React from "react";
import { Database, RefreshCw, LayoutGrid, Briefcase, SlidersHorizontal } from "lucide-react";

const WINE = "#7A1F3D";

const cards = [
  {
    icon: Database,
    title: "Centralized Data",
    body: "Bring important business information together.",
  },
  {
    icon: RefreshCw,
    title: "Integrated Processes",
    body: "Connect different business functions through technology.",
  },
  {
    icon: LayoutGrid,
    title: "Reporting & Analytics",
    body: "Use business information to support better visibility.",
  },
  {
    icon: Briefcase,
    title: "Process Automation",
    body: "Support routine activities through technology-enabled workflows.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Technology",
    body: "Adapt solutions to changing business requirements.",
  },
];

export default function ErpForManufacturingSection() {
  return (
    <div style={{ background: "#f2f2f5" }} className="w-full font-sans px-6 py-10">
      <div
        className="max-w-5xl mx-auto rounded-3xl p-8 md:p-10"
        style={{ background: WINE }}
      >
        <p className="text-[11px] font-semibold tracking-widest mb-3" style={{ color: "#f3d9e2" }}>
          ERP FOR MANUFACTURING
        </p>
        <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-white mb-4">
          Bring Core Business Functions Together
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-8" style={{ color: "#e3c3cf" }}>
          Manufacturing businesses depend on different functions working
          together. Connecting these areas through technology can create a
          more organized environment for managing business information and
          processes.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Icon size={18} strokeWidth={1.8} className="text-white mb-4" />
              <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#d9b7c4" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}