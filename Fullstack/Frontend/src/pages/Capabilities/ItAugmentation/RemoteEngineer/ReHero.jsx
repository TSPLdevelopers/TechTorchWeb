import React from "react";
import { Zap, ArrowRight, Users, Check, Code2, UsersRound } from "lucide-react";

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
    <div className="w-full min-h-screen bg-[#f8f8f9] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left column */}
          <div className="flex flex-col justify-center h-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 mb-6 w-fit">
              <Zap className="w-3 h-3 text-rose-800" />
              <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                IT AUGMENTATION • REMOTE ENGINEERS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-semibold text-4xl sm:text-[2.4rem] leading-[1.15] mb-5 text-[#1c1c1c]">
              Extend Your Engineering Team with{" "}
              <span className="text-rose-900 underline decoration-rose-200 decoration-4 underline-offset-4">
                Skilled Remote Engineers
              </span>
            </h1>

            {/* Body copy */}
            <p className="text-neutral-500 text-[14.5px] leading-relaxed max-w-md mb-8">
              Access skilled technology professionals who can work alongside
              your existing team and support your software development,
              engineering, and technology requirements with a flexible
              approach.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 w-fit hover:bg-rose-950 transition-colors">
              Talk to Our Experts
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right column - card */}
          <div className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-rose-800" />
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-wide text-[#1c1c1c]">
                    REMOTE ENGINEERING SUPPORT
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-snug">
                    Flexible technical expertise aligned with your project
                    requirements
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-2 rounded-lg whitespace-nowrap leading-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                ACTIVE
                <br />
                AUGMENTATION
              </span>
            </div>

            {/* Image */}
            <div className="relative h-56">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Skilled Remote Talent
                </span>
                <span>Seamless Integration</span>
              </div>
            </div>

            {/* Capabilities */}
            <div className="px-4 pt-4 pb-5">
              <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
                CORE CAPABILITIES & SPECIALIZATIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capabilities.map((item) => (
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
          </div>
        </div>

        {/* Bottom feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.ghost}
                className="relative overflow-hidden rounded-xl bg-white border border-neutral-200 p-6"
              >
                {/* Ghost number */}
                <span className="absolute bottom-2 right-4 text-[52px] font-bold text-neutral-100 leading-none select-none pointer-events-none">
                  {item.ghost}
                </span>

                <div className="relative flex items-start justify-between mb-5">
                  <span className="text-[10px] tracking-wide text-rose-800 font-bold bg-rose-50 px-2.5 py-1.5 rounded">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-rose-800" />
                  </div>
                </div>

                <h3 className="relative text-[#1c1c1c] font-semibold text-[17px] mb-2">
                  {item.title}
                </h3>
                <p className="relative text-neutral-500 text-[13px] leading-relaxed mb-4">
                  {item.description}
                </p>

                <span className="relative inline-block text-[10.5px] text-neutral-600 font-medium border border-neutral-200 bg-neutral-50 px-3 py-1.5 rounded">
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