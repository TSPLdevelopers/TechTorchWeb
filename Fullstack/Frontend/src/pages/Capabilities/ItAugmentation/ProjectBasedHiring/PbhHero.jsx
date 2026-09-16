import React from "react";
import { ClipboardCheck, ArrowRight, ArrowLeftRight, LayoutGrid } from "lucide-react";

const heroTags = ["Targeted Engineering", "Flexible Pod Integration", "End-to-End Delivery"];

const specializations = [
  "Software Engineering",
  "Web & Mobile Development",
  "System Integration",
  "Quality Assurance",
];

const pillars = [
  {
    icon: ClipboardCheck,
    badge: "PILLAR 01",
    title: "01 — Project-Aligned Engineering",
    description:
      "Bring the right technical capabilities into your projects based on your development requirements, business objectives, and technology needs.",
    tags: ["Targeted Expertise", "Skilled Resources", "Project Support"],
  },
  {
    icon: ArrowLeftRight,
    badge: "PILLAR 02",
    title: "02 — Flexible Extension of Your Team",
    description:
      "Strengthen your existing technology team with skilled professionals who can contribute to your projects and adapt to changing technical requirements.",
    tags: ["Flexible Resources", "Team Support", "Scalable Capabilities"],
  },
];

export default function ProjectBasedEngineeringHero() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-6xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
          {/* Left column */}
          <div className="flex flex-col justify-center h-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
              <span className="text-[10px] tracking-wide text-neutral-600 font-bold">
                IT AUGMENTATION • PROJECT-BASED ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-semibold text-4xl sm:text-[2.5rem] leading-[1.15] mb-5 text-[#1c1c1c]">
              Deliver Your Technology Projects with the{" "}
              <span className="text-rose-900">Right Engineering Expertise</span>
            </h1>

            {/* Body copy */}
            <p className="text-neutral-500 text-[14.5px] leading-relaxed max-w-md mb-8">
              Bring skilled technical capabilities into your projects with
              flexible engineering support aligned with your business
              requirements, project objectives, and technology needs.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 w-fit hover:bg-rose-950 transition-colors mb-6">
              Talk to Our Experts
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - card */}
          <div className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-4 h-4 text-rose-800" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-[#1c1c1c]">
                    Project-Aligned Engineering Support
                  </div>
                  <div className="text-[11.5px] text-neutral-400">
                    Sprint-Validated Delivery Pods
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Project-Aligned Support
              </span>
            </div>

            {/* Image */}
            <div className="relative h-52">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-medium">
                <span className="flex items-center gap-1.5">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  SPRINT EXECUTION POD
                </span>
                <span>Multi-Disciplinary</span>
              </div>
            </div>

            {/* Specializations */}
            <div className="px-5 pt-5 pb-4">
              <div className="text-[10px] tracking-wide text-neutral-400 font-semibold mb-3">
                CORE SPRINT SPECIALIZATIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specializations.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-800 shrink-0" />
                    <span className="text-[12px] text-neutral-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-100 px-5 py-3.5 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                DELIVERY MODEL
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                ✓ Project-Aligned Engineering
              </span>
            </div>
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.badge}
                className="rounded-xl bg-white border border-neutral-200 border-t-4 border-t-rose-800 p-6"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-rose-800" />
                  </div>
                  <span className="text-[10px] font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-[#1c1c1c] font-semibold text-[17px] mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-[13px] leading-relaxed mb-5">
                  {item.description}
                </p>

                <div className="border-t border-neutral-100 pt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}