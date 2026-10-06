import React from "react";
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeftRight,
  LayoutGrid,
} from "lucide-react";

const heroTags = [
  "Targeted Engineering",
  "Flexible Pod Integration",
  "End-to-End Delivery",
];

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
    <div className="w-full min-h-screen bg-white flex justify-center font-inter">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8 sm:gap-10 lg:gap-12 items-start mb-10 sm:mb-12 lg:mb-14">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-center h-full">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#730024]/5 px-3 py-1.5 mb-5 sm:mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />

              <span className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold">
                IT AUGMENTATION • PROJECT-BASED ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-jakarta font-semibold text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[2.7rem] leading-[1.15] mb-5 text-[#1c1c1c] max-w-3xl">
              Deliver Your Technology Projects with the{" "}
              <span className="text-[#730024]">
                Right Engineering Expertise
              </span>
            </h1>

            {/* Body Copy */}
            <p className="font-inter text-neutral-500 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-relaxed max-w-xl mb-7 sm:mb-8">
              Bring skilled technical capabilities into your projects with
              flexible engineering support aligned with your business
              requirements, project objectives, and technology needs.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#730024] text-white font-inter font-semibold text-[13px] sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 w-fit hover:bg-[#5c001d] transition-colors duration-300 mb-6">
              Talk to Our Experts
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-inter font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#730024] shrink-0" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">

            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#730024]/5 flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-4 h-4 text-[#730024]" />
                </div>

                <div className="min-w-0">
                  <div className="font-jakarta text-[12px] sm:text-[13px] font-semibold text-[#1c1c1c] leading-snug">
                    Project-Aligned Engineering Support
                  </div>

                  <div className="font-inter text-[10.5px] sm:text-[11.5px] text-neutral-400 leading-snug mt-0.5">
                    Sprint-Validated Delivery Pods
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[9px] sm:text-[10px] font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Project-Aligned Support
              </span>
            </div>

            {/* Image */}
            <div className="relative h-60 sm:h-64 lg:h-[270px] mx-3 rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('dd.png')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-white text-[10px] sm:text-[11px] font-inter font-medium">
                <span className="flex items-center gap-1.5">
                  <LayoutGrid className="w-3.5 h-3.5 shrink-0" />
                  SPRINT EXECUTION POD
                </span>

                <span>Multi-Disciplinary</span>
              </div>
            </div>

            {/* Specializations */}
            <div className="px-4 sm:px-5 pt-5 pb-4">
              <div className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold mb-3">
                CORE SPRINT SPECIALIZATIONS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specializations.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#730024] shrink-0" />

                    <span className="font-inter text-[11px] sm:text-[12px] text-neutral-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-100 px-4 sm:px-5 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-neutral-500 font-inter font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
                DELIVERY MODEL
              </span>

              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-600 font-inter font-semibold">
                ✓ Project-Aligned Engineering
              </span>
            </div>
          </div>
        </div>

        {/* ================= PILLAR CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.badge}
                className="rounded-xl bg-white border border-neutral-200 border-t-4 border-t-[#730024] p-5 sm:p-6 lg:p-7"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#730024]/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#730024]" />
                  </div>

                  <span className="font-inter text-[9px] sm:text-[10px] font-semibold text-[#730024] bg-[#730024]/5 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[15px] sm:text-[16px] lg:text-[17px] leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] leading-relaxed mb-5 max-w-2xl">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="border-t border-neutral-100 pt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-inter font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1.5 rounded-full"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
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