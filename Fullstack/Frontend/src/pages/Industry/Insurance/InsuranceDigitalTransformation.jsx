import React from "react";
import { Lock, RefreshCw, Cloud, ShieldCheck, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

const features = [
  {
    icon: Lock,
    title: "System Integration",
    body: "Connect applications and business systems to improve information flow across the organization.",
  },
  {
    icon: RefreshCw,
    title: "Software Modernization",
    body: "Modernize existing applications and technology environments to support changing business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Build flexible infrastructure that supports scalability and evolving technology needs.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body: "Strengthen the protection of applications, systems and business information through security-focused solutions.",
  },
];

export default function ModernizeTechnologySection() {
  return (
    <div style={{ background: WINE }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(255,255,255,0.12)", color: "#f3d9e2" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            DIGITAL TRANSFORMATION
          </span>

          <h2 className="text-3xl leading-[1.15] font-bold tracking-tight text-white mb-5">
            Modernize Technology Around Your Business
          </h2>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: "#e3c3cf" }}>
            Digital transformation should address real business
            requirements—not simply introduce new technology.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#e3c3cf" }}>
            TechTorch supports organizations in developing new applications,
            integrating existing systems and modernizing technology
            environments while maintaining focus on business continuity and
            long-term requirements.
          </p>

          <button
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-xs font-semibold tracking-wide"
            style={{ color: WINE }}
          >
            EXPLORE OUR SOLUTIONS
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Right: 2x2 cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-6"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
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