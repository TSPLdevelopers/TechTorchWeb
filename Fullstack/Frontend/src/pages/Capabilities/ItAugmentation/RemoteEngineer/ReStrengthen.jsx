import React from "react";
import { Layers, ArrowRight } from "lucide-react";

export default function StrengthenTeamCTA() {
  return (
    <div className="w-full min-h-[480px] bg-neutral-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl rounded-2xl bg-rose-50/60 border border-rose-100 px-6 py-16 text-center">
        {/* Icon badge */}
        <div className="w-11 h-11 rounded-xl bg-rose-900 flex items-center justify-center mx-auto mb-6">
          <Layers className="w-5 h-5 text-white" />
        </div>

        {/* Headline */}
        <h1 className="text-[#1c1c1c] font-semibold text-3xl sm:text-[2.1rem] leading-snug mb-4 max-w-2xl mx-auto">
          Strengthen Your Technology Team with TechTorch
        </h1>

        {/* Body copy */}
        <p className="text-neutral-500 text-[15px] leading-relaxed max-w-xl mx-auto mb-9">
          Bring the right technical expertise to your projects with flexible
          IT augmentation and skilled technology professionals aligned with
          your business requirements.
        </p>

        {/* CTA */}
        <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-7 py-3.5 hover:bg-rose-950 transition-colors">
          Talk to Our Experts
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}