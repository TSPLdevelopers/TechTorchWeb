import React from "react";
import { Boxes, HeartHandshake, SlidersHorizontal, LineChart, CreditCard, Monitor } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  { icon: Boxes, sys: "SYSTEM 01", title: "ERP" },
  { icon: HeartHandshake, sys: "SYSTEM 02", title: "CRM" },
  { icon: SlidersHorizontal, sys: "SYSTEM 03", title: "Operations Management" },
  { icon: LineChart, sys: "SYSTEM 04", title: "Financial Management" },
  { icon: CreditCard, sys: "SYSTEM 05", title: "Payment Management" },
  { icon: Monitor, sys: "SYSTEM 06", title: "Web Portals" },
];

const desc = "Technology solutions designed around telecommunications business requirements.";

export default function KeySolutionsGridSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            KEY SOLUTIONS
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.3] font-bold tracking-tight mb-3">
            Technology Solutions for Telecommunications
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            {desc}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, sys, title }) => (
            <div
              key={title}
              className="rounded-xl p-5 border"
              style={{ borderColor: "#ece9e4" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <span
                  className="text-[9px] font-semibold tracking-wide px-2 py-1 rounded-full"
                  style={{ background: "#f2f1f5", color: MUTED }}
                >
                  {sys}
                </span>
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}