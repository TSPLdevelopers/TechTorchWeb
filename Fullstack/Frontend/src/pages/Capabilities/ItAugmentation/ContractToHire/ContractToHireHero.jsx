import React from "react";
import { Sparkle, ArrowRight, CheckCircle2, ScanFace } from "lucide-react";

const tracks = [
  "Architecture Fit",
  "Code Quality & Testing",
  "Team Velocity Synergy",
  "Cultural Harmony",
];

const features = [
  {
    number: "01",
    title: "Evaluate Talent Through Real Work",
    tag: "PRACTICAL PROJECT ASSESSMENT",
    description:
      "Assess technology professionals through practical project involvement, technical capability, problem-solving, communication, and collaboration.",
  },
  {
    number: "02",
    title: "A Flexible Path to Long-Term Hiring",
    tag: "SEAMLESS TRANSITION MODEL",
    description:
      "Move from contract engagement toward a permanent role when the professional demonstrates the right technical capability, team alignment, and long-term potential.",
  },
];

export default function ContractToHireHero() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-6xl px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          {/* Left column */}
          <div className="flex flex-col justify-center h-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 mb-6 w-fit">
              <Sparkle className="w-3 h-3 text-rose-800" />
              <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                CONTRACT-TO-HIRE
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-semibold text-3xl sm:text-4xl leading-tight mb-5 text-[#1c1c1c]">
              Find the Right Technology Talent.{" "}
              <span className="text-rose-900">Build with Confidence.</span>
            </h1>

            {/* Body copy */}
            <p className="text-neutral-500 text-[14px] leading-relaxed max-w-md mb-8">
              Evaluate technical capability, collaboration, and team alignment
              through real-world engagement before making a long-term hiring
              decision.
            </p>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3 w-fit hover:bg-rose-950 transition-colors">
              Talk to Our Experts
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right column - card */}
          <div className="rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-rose-50 flex items-center justify-center shrink-0">
                  <ScanFace className="w-3.5 h-3.5 text-rose-800" />
                </div>
                <div>
                  <div className="text-[12.5px] font-semibold text-[#1c1c1c]">
                    Contract-to-Hire Evaluation Matrix
                  </div>
                  <div className="text-[10.5px] text-neutral-400">
                    Live Engineering & Team Fit Benchmark
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[9.5px] font-semibold px-2 py-1 rounded-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active Trial
              </span>
            </div>

            {/* Image */}
            <div className="relative h-44">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[10px] font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Sprint-Validated Pairing
                </span>
                <span>90-Day Direct Track</span>
              </div>
            </div>

            {/* Tracks */}
            <div className="px-4 pt-4 pb-3">
              <div className="text-[9px] tracking-wide text-neutral-400 font-semibold mb-2.5">
                CONTINUOUS SPRINT EVALUATION TRACKS
              </div>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4">
                {tracks.map((track) => (
                  <div
                    key={track}
                    className="flex items-center gap-1.5 text-[11.5px] text-neutral-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-rose-800 shrink-0" />
                    {track}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-100 px-4 py-3 flex items-center justify-between">
              <span className="text-[10.5px] text-emerald-600 font-semibold">
                ↗ Trial-to-Perm Conversion Rate: 94.8%
              </span>
              <span className="text-[10.5px] text-neutral-400 font-medium">
                Full IP & Code Ownership Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* Bottom feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="rounded-lg border border-neutral-200 bg-neutral-50 p-5"
            >
              <span className="inline-block text-[10px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded mb-4">
                {feature.number}
              </span>
              <h3 className="text-[#1c1c1c] font-semibold text-[15px] mb-1">
                {feature.title}
              </h3>
              <div className="text-[9.5px] tracking-wide text-rose-800 font-bold mb-3">
                {feature.tag}
              </div>
              <p className="text-neutral-500 text-[12.5px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}