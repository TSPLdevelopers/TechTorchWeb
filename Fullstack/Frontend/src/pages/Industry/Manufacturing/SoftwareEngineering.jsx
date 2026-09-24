import React from "react";
import { Code2, LayoutGrid, Share2, RefreshCw, CheckCircle2, Headphones } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Code2,
    title: "Custom Software",
    body: "Develop applications around specific business requirements.",
  },
  {
    icon: LayoutGrid,
    title: "Enterprise Applications",
    body: "Build software supporting important business processes.",
  },
  {
    icon: Share2,
    title: "System Integration",
    body: "Connect applications and platforms for better information exchange.",
  },
  {
    icon: RefreshCw,
    title: "Software Modernization",
    body: "Modernize existing applications and technology environments.",
  },
  {
    icon: CheckCircle2,
    title: "Testing & Quality Assurance",
    body: "Test software before deployment to support quality and reliability.",
  },
  {
    icon: Headphones,
    title: "Maintenance & Support",
    body: "Continue supporting and improving software after implementation.",
  },
];

export default function SoftwareEngineeringGridSection() {
  return (
    <div style={{ background: "#f2f2f5", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            SOFTWARE ENGINEERING
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.3] font-bold tracking-tight mb-3">
            Build Technology Around Your Business Requirements
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            Every business has different technology requirements. TechTorch
            provides software engineering services to help organizations
            develop, integrate, modernize and support their software
            environment.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}