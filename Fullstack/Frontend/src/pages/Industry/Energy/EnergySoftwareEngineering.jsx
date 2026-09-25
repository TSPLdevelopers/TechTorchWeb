import React from "react";
import { Code2, Smartphone, LayoutGrid, Share2, RefreshCw, Settings, Wrench } from "lucide-react";

const WINE = "#7A1F3D";

const items = [
  { icon: Code2, label: "Custom Software Development" },
  { icon: Smartphone, label: "Web & Mobile Applications" },
  { icon: LayoutGrid, label: "Enterprise Software" },
  { icon: Share2, label: "API & System Integration" },
  { icon: RefreshCw, label: "Software Modernization" },
  { icon: Settings, label: "Quality Assurance & Testing" },
  { icon: Wrench, label: "Maintenance & Support" },
];

export default function SoftwareEngineeringWineSection() {
  return (
    <div style={{ background: WINE }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-[11px] font-semibold tracking-widest mb-3" style={{ color: "#f3d9e2" }}>
          SOFTWARE &amp; ENGINEERING
        </p>
        <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight text-white mb-4">
          Build and Modernize Your Technology
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: "#e3c3cf" }}>
          Technology requirements can change as an organization grows.
          TechTorch provides software engineering and development services
          covering custom software, web and mobile applications, enterprise
          software, API and system integration, software modernization,
          testing and ongoing support.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl p-5 flex items-center gap-3"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
                style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <span className="text-sm font-medium text-white leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}