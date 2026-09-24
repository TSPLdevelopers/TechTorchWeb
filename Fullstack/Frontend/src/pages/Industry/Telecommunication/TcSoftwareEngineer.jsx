import React from "react";
import {
  FileCode,
  Code2,
  Smartphone,
  Briefcase,
  Share2,
  RefreshCw,
  CheckCircle2,
  Headphones,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const items = [
  { icon: Code2, label: "Custom Software Development" },
  { icon: Smartphone, label: "Web & Mobile Applications" },
  { icon: Briefcase, label: "Enterprise Software" },
  { icon: Share2, label: "API & System Integration" },
  { icon: RefreshCw, label: "Software Modernization" },
  { icon: CheckCircle2, label: "Testing & Quality Assurance" },
  { icon: Headphones, label: "Maintenance & Support" },
];

export default function SoftwareEngineeringMatrixSection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            SOFTWARE &amp; ENGINEERING
          </p>
          <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-5">
            Build and Modernize Your Technology
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            TechTorch provides software development and engineering
            services covering custom software, web and mobile applications,
            enterprise software, API integration, software modernization,
            testing and ongoing support.
          </p>
        </div>

        {/* Right: matrix panel */}
        <div
          className="bg-white rounded-2xl p-6"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FileCode size={16} style={{ color: WINE }} />
            <h3 className="text-sm font-semibold">Full-Lifecycle Engineering Matrix</h3>
          </div>
          <p className="text-xs leading-relaxed mb-5" style={{ color: MUTED }}>
            Engineered for telecommunications businesses requiring
            high-availability environments, robust data throughput, and
            maintainable software stacks.
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-lg px-3.5 py-3"
                style={{ background: "#f6f7fa" }}
              >
                <Icon size={14} style={{ color: WINE }} className="shrink-0" />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}