import React from "react";
import { Layers, ArrowRight } from "lucide-react";

export default function StrengthenTeamWithTechTorchCTA() {
  return (
    <div className="w-full min-h-[420px] bg-neutral-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl rounded-2xl bg-rose-50/70 border border-rose-100 px-6 py-14 text-center">
        {/* Icon badge */}
        <div className="w-11 h-11 rounded-xl bg-rose-900 flex items-center justify-center mx-auto mb-6">
          <Layers className="w-5 h-5 text-white" />
        </div>

        {/* Headline */}
        <h1 className="text-[#1c1c1c] font-semibold text-3xl sm:text-4xl leading-snug mb-4">
          Strengthen Your Technology Team with TechTorch
        </h1>

        {/* Body copy */}
        <p className="text-neutral-500 text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          Get the technical expertise and flexible workforce support your
          business needs to move projects forward.
        </p>

        {/* CTA */}
        <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 hover:bg-rose-950 transition-colors">
          Talk to Our Experts
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}