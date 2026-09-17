import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  Check,
  Code2,
  UsersRound,
} from "lucide-react";

const capabilities = [
  "Software Engineering",
  "Web & Mobile Development",
  "API & System Integration",
  "Quality Assurance & Testing",
];

const features = [
  {
    icon: Code2,
    tag: "TECHNICAL EXPERTISE",
    title: "01 — Seamless Team Collaboration",
    description:
      "Remote technology professionals can work alongside your existing teams, supporting development activities, project requirements, and day-to-day engineering needs.",
    pill: "Software Development • Technical Collaboration",
    ghost: "01",
  },
  {
    icon: UsersRound,
    tag: "SCALABLE DELIVERY",
    title: "02 — Flexible Engineering Support",
    description:
      "Strengthen your technology capabilities with skilled resources that can support changing project requirements and business priorities.",
    pill: "Flexible Resources • Project-Aligned Support",
    ghost: "02",
  },
];

export default function RemoteEngineersHero() {
  return (
    <div className="w-full min-h-screen bg-[#f8f8f9] flex justify-center font-inter">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8 sm:gap-10 lg:gap-12 items-start mb-8 sm:mb-10 lg:mb-12">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-center h-full">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#730024]/5 px-3 py-1.5 mb-5 sm:mb-6 w-fit">
              <Zap className="w-3 h-3 text-[#730024]" />

              <span className="font-inter text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold">
                IT AUGMENTATION • REMOTE ENGINEERS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-jakarta font-semibold text-2xl sm:text-3xl lg:text-[2.4rem] leading-[1.15] mb-5 text-[#1c1c1c] max-w-2xl">
              Extend Your Engineering Team with{" "}
              <span className="text-[#730024]">
                Skilled Remote Engineers
              </span>
            </h1>

            {/* Body Copy */}
            <p className="font-inter text-neutral-500 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-relaxed max-w-md mb-7 sm:mb-8">
              Access skilled technology professionals who can work alongside
              your existing team and support your software development,
              engineering, and technology requirements with a flexible
              approach.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#730024] text-white font-inter font-semibold text-[13px] sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 w-fit hover:bg-[#5c001d] transition-colors duration-300">
              Talk to Our Experts
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* ================= RIGHT CARD ================= */}
          <div className="w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-5 py-4">

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#730024]/5 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#730024]" />
                </div>

                <div className="min-w-0">
                  <div className="font-jakarta text-[11.5px] sm:text-[12px] font-bold tracking-wide text-[#1c1c1c]">
                    REMOTE ENGINEERING SUPPORT
                  </div>

                  <div className="font-inter text-[10px] sm:text-[11px] text-neutral-400 leading-snug">
                    Flexible technical expertise aligned with your project
                    requirements
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg whitespace-nowrap leading-tight w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                ACTIVE
                <br />
                AUGMENTATION
              </span>
            </div>

            {/* Image */}
            <div className="relative h-60 sm:h-64 lg:h-[250px] mx-3 rounded-lg overflow-hidden">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('dd.png')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-white text-[10px] sm:text-[11px] font-medium">

                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  Skilled Remote Talent
                </span>

                <span>
                  Seamless Integration
                </span>
              </div>
            </div>

            {/* Capabilities */}
            <div className="px-4 sm:px-5 pt-4 pb-5">

              <div className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold mb-3">
                CORE CAPABILITIES & SPECIALIZATIONS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#730024] shrink-0" />

                    <span className="font-inter text-[11.5px] sm:text-[12px] text-neutral-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM FEATURE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.ghost}
                className="relative overflow-hidden rounded-xl bg-white border border-neutral-200 p-5 sm:p-6"
              >

                {/* Ghost Number */}
                <span className="absolute bottom-2 right-4 text-[48px] sm:text-[52px] font-bold text-neutral-100 leading-none select-none pointer-events-none">
                  {item.ghost}
                </span>

                {/* Top Row */}
                <div className="relative flex items-center justify-between gap-4 mb-5">

                  <span className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold bg-[#730024]/5 px-2.5 py-1.5 rounded">
                    {item.tag}
                  </span>

                  <div className="w-8 h-8 rounded-lg bg-[#730024]/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#730024]" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="relative font-jakarta text-[#1c1c1c] font-semibold text-[15px] sm:text-[17px] leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative font-inter text-neutral-500 text-[12.5px] sm:text-[13px] leading-relaxed mb-4 max-w-xl">
                  {item.description}
                </p>

                {/* Pill */}
                <span className="relative inline-block font-inter text-[10px] sm:text-[10.5px] text-neutral-600 font-medium border border-neutral-200 bg-neutral-50 px-3 py-1.5 rounded">
                  {item.pill}
                </span>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}