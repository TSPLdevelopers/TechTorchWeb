import React from "react";
import { ShieldCheck, ArrowRight, Zap, Award, DollarSign, Network } from "lucide-react";

const stats = [
  {
    icon: Zap,
    title: "48-Hour",
    subtitle: "Rapid Onboarding",
    description:
      "Matched profiles vetted and ready for client interview within two business days.",
  },
  {
    icon: Award,
    title: "Top 3%",
    subtitle: "Senior Talent",
    description:
      "Evaluated across rigorous system design and live programming challenges.",
  },
  {
    icon: DollarSign,
    title: "Zero",
    subtitle: "Hiring Overhead",
    description:
      "No upfront recruitment retainers, long-term liabilities, or severance risks.",
  },
];

const stacks = [
  { label: "React / Next.js", highlighted: false },
  { label: "Node.js", highlighted: false },
  { label: "Python / FastAPI", highlighted: false },
  { label: "AWS Cloud", highlighted: true },
  { label: "Kubernetes", highlighted: false },
  { label: "Go", highlighted: false },
];

export default function FlexibleTechResourcesHero() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-rose-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-100 px-3 py-1.5 mb-6">
              <ShieldCheck className="w-3 h-3 text-rose-800" />
              <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                IT AUGMENTATION • CAPABILITY 01
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-semibold text-4xl sm:text-[2.75rem] leading-[1.1] mb-5 text-[#1c1c1c]">
              Flexible Technology Resources for{" "}
              <span className="text-rose-900">Dynamic Project</span> Demands
            </h1>

            {/* Body copy */}
            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md mb-8">
              Scale engineering capacity rapidly with pre-vetted senior
              software engineers, architects, and technical specialists who
              seamlessly integrate into your sprint cycles.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3 hover:bg-rose-950 transition-colors">
              Talk to Our Experts
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right column - card */}
          <div className="rounded-2xl bg-white border border-neutral-200 shadow-sm p-5">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-900 flex items-center justify-center shrink-0">
                  <Network className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#1c1c1c]">
                    Active Talent Pool
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Live Engineering Bench
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Instant Deploy
              </span>
            </div>

            {/* Image */}
            <div className="relative rounded-lg overflow-hidden mb-4 h-40">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[10px] font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Production Verified Staff
                </span>
                <span>Tier 1 Bench</span>
              </div>
            </div>

            {/* Stacks */}
            <div className="text-[9px] tracking-wide text-neutral-400 font-semibold mb-2.5">
              AVAILABLE CORE STACKS
            </div>
            <div className="flex flex-wrap gap-2">
              {stacks.map((stack) => (
                <span
                  key={stack.label}
                  className={
                    stack.highlighted
                      ? "text-[11px] font-medium px-3 py-1.5 rounded-md bg-rose-50 text-rose-800 border border-rose-100"
                      : "text-[11px] font-medium px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-600"
                  }
                >
                  {stack.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 mb-8" />

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map(({ icon: Icon, title, subtitle, description }) => (
            <div
              key={subtitle}
              className="rounded-xl bg-neutral-50 border border-neutral-200 p-5 flex gap-4"
            >
              <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-rose-800" />
              </div>
              <div>
                <div className="text-[16px] font-semibold text-[#1c1c1c] leading-tight">
                  {title}
                </div>
                <div className="text-[12px] font-semibold text-neutral-600 mb-1.5">
                  {subtitle}
                </div>
                <p className="text-[11.5px] text-neutral-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}