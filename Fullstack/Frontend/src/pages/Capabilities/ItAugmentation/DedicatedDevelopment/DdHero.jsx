import React from "react";
import { Zap, ArrowRight, Users, CheckCircle2, Code2, UsersRound } from "lucide-react";

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
    <div className="w-full min-h-screen bg-[#f7f6f4] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          {/* Left column */}
          <div className="flex flex-col justify-center h-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 mb-6 w-fit">
              <Zap className="w-3 h-3 text-rose-800" />
              <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                IT AUGMENTATION • DEDICATED TEAMS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-semibold text-4xl sm:text-[2.6rem] leading-[1.1] mb-5 text-[#1c1c1c]">
              Strengthen Your Technology Team with the{" "}
              <span className="text-rose-900 underline decoration-rose-200 decoration-4 underline-offset-4">
                Right Expertise
              </span>
            </h1>

            {/* Body copy */}
            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md mb-8">
              Scale your technology capabilities with skilled professionals
              and flexible workforce solutions aligned with your business
              requirements, project goals, and technical needs.
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
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-rose-800" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-[#1c1c1c]">
                    Dedicated Team Pod Architecture
                  </div>
                  <div className="text-[11.5px] text-neutral-400">
                    Continuous sprint alignment & high cohesion
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Full Pod Model
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Cross-Functional Team
                </span>
                <span>Autonomous Delivery Unit</span>
              </div>
            </div>

            {/* Pod composition */}
            <div className="px-5 pt-5 pb-5">
              <div className="text-[10px] tracking-wide text-neutral-400 font-semibold mb-3">
                POD COMPOSITION & SPECIALIZED ROLES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-800 shrink-0" />
                    <span className="text-[12.5px] text-neutral-700 font-medium">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.tag}
                className="rounded-xl bg-white border border-neutral-200 p-6 flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-rose-800" />
                </div>
                <div>
                  <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-1">
                    {item.tag}
                  </div>
                  <h3 className="text-[#1c1c1c] font-semibold text-[16px] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-[13px] leading-relaxed">
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