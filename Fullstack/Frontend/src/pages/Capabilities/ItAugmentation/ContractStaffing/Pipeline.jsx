import React from "react";
import { Handshake, ArrowRight } from "lucide-react";

export default function StrengthenEngineeringPipelineCTA() {
  return (
    <div className="w-full min-h-[420px] bg-[#fcedf2] flex items-center justify-center">
      <div className="max-w-2xl px-6 py-16 text-center">
        {/* Icon badge */}
        <div className="w-12 h-12 rounded-full bg-rose-900 flex items-center justify-center mx-auto mb-6">
          <Handshake className="w-5 h-5 text-white" />
        </div>

        {/* Headline */}
        <h1 className="text-[#1c1c1c] font-semibold text-3xl sm:text-4xl mb-4">
          Strengthen Your Engineering Pipeline
        </h1>

        {/* Body copy */}
        <p className="text-neutral-500 text-[15px] leading-relaxed max-w-lg mx-auto mb-8">
          Equip your technical organization with on-demand capacity,
          senior-tier domain expertise, and zero hiring risk.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 hover:bg-rose-950 transition-colors">
            Talk to Our Augmentation Experts
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-200 text-[#1c1c1c] font-semibold text-sm px-6 py-3.5 hover:bg-neutral-50 transition-colors">
            Review Framework Details
          </button>
        </div>
      </div>
    </div>
  );
}