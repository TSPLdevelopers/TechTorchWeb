import React from "react";
import { Code2, LayoutGrid, Smartphone, Share2, Settings, Headphones } from "lucide-react";

const WINE = "#7A1F3D";

const cards = [
  {
    icon: Code2,
    title: "Custom Software",
    body: "Build applications around specific business requirements.",
  },
  {
    icon: LayoutGrid,
    title: "Web Applications",
    body: "Develop responsive web applications for business and customer needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    body: "Create mobile applications for different digital requirements.",
  },
  {
    icon: Share2,
    title: "API & System Integration",
    body: "Connect applications and enable data exchange between systems.",
  },
  {
    icon: Settings,
    title: "Software Testing",
    body: "Test applications for functionality, performance, security and usability.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    body: "Continue supporting applications through updates and technical assistance.",
  },
];

export default function CustomArchitectureGridSection() {
  return (
    <div style={{ background: WINE }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-[11px] font-semibold tracking-widest mb-3" style={{ color: "#f3d9e2" }}>
          CUSTOM ARCHITECTURE
        </p>
        <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-white mb-4">
          Extend Your E-Commerce Technology
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: "#e3c3cf" }}>
          When a business requires a custom application or integration,
          TechTorch provides software engineering capabilities across web
          applications, mobile applications, APIs, system integration and
          software development.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
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