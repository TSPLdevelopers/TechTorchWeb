import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  CheckCircle2,
  Code2,
  UsersRound,
} from "lucide-react";

const roles = [
  "System Architect / Lead",
  "Full-Stack Engineers",
  "DevOps & Cloud Automation",
  "QA & Reliability Specialist",
];

const highlights = [
  {
    icon: Code2,
    tag: "HIGHLIGHT 01",
    title: "01 — Skilled Technology Resources",
    description:
      "Access professionals with relevant technical expertise to support software engineering, development, integration, testing, and other technology requirements.",
  },
  {
    icon: UsersRound,
    tag: "HIGHLIGHT 02",
    title: "02 — Flexible Team Support",
    description:
      "Strengthen your existing technology team with flexible workforce solutions designed around your project requirements, business objectives, and changing needs.",
  },
];

export default function DedicatedTeamPodHero() {
  return (
    <div className="w-full min-h-screen bg-[#f7f6f4] flex justify-center font-inter">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_400px] gap-8 sm:gap-10 lg:gap-12 items-start mb-8 sm:mb-10">

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-center h-full">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#730024]/5 px-3 py-1.5 mb-5 sm:mb-6 w-fit">
              <Zap className="w-3 h-3 text-[#730024]" />

              <span className="font-inter text-[10px] tracking-wide text-[#730024] font-bold">
                IT AUGMENTATION • DEDICATED TEAMS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-jakarta font-semibold text-2xl sm:text-3xl lg:text-[2.6rem] leading-[1.15] mb-5 text-[#1c1c1c] max-w-2xl">
              Strengthen Your Technology Team with the{" "}
              <span className="text-[#730024]">
                Right Expertise
              </span>
            </h1>

            {/* Body Copy */}
            <p className="font-inter text-neutral-500 text-[13.5px] sm:text-[14px] lg:text-[15px] leading-relaxed max-w-md mb-7 sm:mb-8">
              Scale your technology capabilities with skilled professionals
              and flexible workforce solutions aligned with your business
              requirements, project goals, and technical needs.
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
                  <div className="font-jakarta text-[12.5px] sm:text-[13.5px] font-semibold text-[#1c1c1c]">
                    Dedicated Team Pod Architecture
                  </div>

                  <div className="font-inter text-[10.5px] sm:text-[11.5px] text-neutral-400">
                    Continuous sprint alignment & high cohesion
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[9.5px] sm:text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Full Pod Model
              </span>
            </div>

            {/* Image */}
            <div className="relative h-56 sm:h-60 lg:h-[250px] mx-3 rounded-lg overflow-hidden">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('dd.png')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-white text-[10px] sm:text-[11px] font-medium">

                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  Cross-Functional Team
                </span>

                <span>
                  Autonomous Delivery Unit
                </span>
              </div>
            </div>

            {/* Pod Composition */}
            <div className="px-4 sm:px-5 pt-5 pb-5">

              <div className="font-inter text-[9px] sm:text-[10px] tracking-wide text-neutral-400 font-semibold mb-3">
                POD COMPOSITION & SPECIALIZED ROLES
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#730024] shrink-0" />

                    <span className="font-inter text-[11.5px] sm:text-[12.5px] text-neutral-700 font-medium">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM HIGHLIGHT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.tag}
                className="rounded-xl bg-white border border-neutral-200 p-5 sm:p-6 flex flex-col sm:flex-row gap-4"
              >

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-[#730024]/5 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#730024]" />
                </div>

                <div className="min-w-0">

                  {/* Tag */}
                  <div className="font-inter text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold mb-1">
                    {item.tag}
                  </div>

                  {/* Heading */}
                  <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[15px] sm:text-[16px] leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] leading-relaxed">
                    {item.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}