import React from "react";
import { ArrowUp, Cloud, Share2, LayoutGrid } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: ArrowUp,
    title: "System Modernization",
    body: "Improve existing applications and technology environments.",
  },
  {
    icon: Cloud,
    title: "Cloud Adoption",
    body: "Build a flexible infrastructure foundation for changing requirements.",
  },
  {
    icon: Share2,
    title: "System Integration",
    body: "Connect applications and platforms to improve information flow.",
  },
  {
    icon: LayoutGrid,
    title: "Digital Applications",
    body: "Develop web, mobile and enterprise applications around business needs.",
  },
];

export default function InfrastructureEvolutionSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          INFRASTRUCTURE &amp; EVOLUTION
        </p>
        <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-4">
          Build, Connect and Improve Your Digital
          <br />
          Infrastructure
        </h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: MUTED }}>
          Technology requirements continue to evolve as businesses grow.
          Modernization can involve improving existing applications,
          connecting different systems, adopting cloud infrastructure or
          developing new digital solutions. TechTorch brings together
          software engineering, system integration, cloud capabilities and
          technology services to help organizations move forward with their
          technology requirements.
        </p>

        <div
          className="grid sm:grid-cols-2 rounded-2xl overflow-hidden border"
          style={{ borderColor: "#ece9e4" }}
        >
          {features.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="p-6"
              style={{
                background: "#f7f7fa",
                borderRight: i % 2 === 0 ? "1px solid #ece9e4" : "none",
                borderBottom: i < 2 ? "1px solid #ece9e4" : "none",
              }}
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