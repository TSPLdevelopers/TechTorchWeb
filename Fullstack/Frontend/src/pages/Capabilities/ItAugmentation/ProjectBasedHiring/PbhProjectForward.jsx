import React from "react";
import {
  Target,
  Layers,
  Radar,
  Infinity as InfinityIcon,
  Check,
  ArrowRight,
  Code2,
  Sparkle,
  ClipboardCheck,
} from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Project-Aligned Expertise",
    description:
      "Technical capabilities aligned with your specific project and business requirements.",
    tag: "Direct Fit",
  },
  {
    icon: Layers,
    title: "Flexible Engineering Support",
    description:
      "Resources that can complement your existing teams and technical capabilities.",
    tag: "Dynamic Scale",
  },
  {
    icon: Radar,
    title: "Technology-Focused Approach",
    description:
      "Support across software development, applications, integration, testing, and modernization.",
    tag: "Full Stack Depth",
  },
  {
    icon: InfinityIcon,
    title: "End-to-End Technology Support",
    description:
      "Technical capabilities covering development through deployment, maintenance, and continuous improvement.",
    tag: "Complete Lifecycle",
  },
];

const ctaTags = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Sparkle, label: "Flexible Resources" },
  { icon: ClipboardCheck, label: "Project-Based Support" },
];

export default function WhyTechTorchSection() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-4xl px-6 py-10 space-y-6">
        {/* Dark card */}
        <div
          className="relative rounded-2xl overflow-hidden px-8 py-9"
          style={{
            background:
              "radial-gradient(120% 140% at 90% 0%, #4a0a30 0%, #2c0620 60%)",
          }}
        >
          <div
            className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-rose-900/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative text-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-[9px] tracking-wide font-bold text-rose-100 bg-white/10 px-3 py-1 rounded-full mb-4">
              <span className="w-1 h-1 rounded-full bg-rose-300" />
              WHY TECHTORCH
            </span>
            <h1 className="text-white font-semibold text-2xl leading-snug mb-2 max-w-lg mx-auto">
              Technology Expertise Built Around Your Requirements
            </h1>
            <p className="text-rose-100/60 text-[12px] max-w-md mx-auto">
              Technical capabilities aligned with your project requirements
              and technology objectives.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl bg-white/[0.06] border border-white/10 p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-rose-100" />
                  </div>
                  <h3 className="text-white font-semibold text-[12.5px] mb-1.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-rose-100/55 text-[11px] leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10.5px] text-emerald-300 font-medium">
                    <Check className="w-3 h-3" />
                    {card.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Light CTA card */}
        <div className="rounded-2xl bg-neutral-50 border border-neutral-200 px-8 py-14 text-center">
          <div className="w-10 h-10 rounded-xl bg-rose-900 flex items-center justify-center mx-auto mb-6">
            <Layers className="w-4.5 h-4.5 text-white" />
          </div>

          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-3">
            Move Your Next Technology Project Forward
          </h2>
          <p className="text-neutral-500 text-[13px] leading-relaxed max-w-md mx-auto mb-7">
            Discuss your project requirements with TechTorch and explore the
            right engineering capabilities and resource support for your
            business.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-[13px] px-5 py-2.5 hover:bg-rose-950 transition-colors mb-7">
            Talk to Our Experts
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {ctaTags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-rose-800"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}