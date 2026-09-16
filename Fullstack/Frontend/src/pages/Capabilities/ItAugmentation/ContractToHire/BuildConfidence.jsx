import React from "react";
import { UserRound, ArrowRight } from "lucide-react";

export default function BuildYourTeamCTA() {
  return (
    <div className="w-full min-h-[420px] bg-gradient-to-b from-rose-50 to-rose-100/60 flex items-center justify-center">
      <div className="max-w-2xl px-6 py-16 text-center">
        {/* Icon badge */}
        <div className="w-11 h-11 rounded-xl bg-rose-900 flex items-center justify-center mx-auto mb-6">
          <UserRound className="w-5 h-5 text-white" />
        </div>

        {/* Headline */}
        <h1 className="text-[#1c1c1c] font-semibold text-3xl sm:text-4xl mb-4">
          Build Your Team with Confidence
        </h1>

        {/* Body copy */}
        <p className="text-neutral-500 text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          Find the right technology talent and create a stronger path from
          project engagement to long-term partnership.
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