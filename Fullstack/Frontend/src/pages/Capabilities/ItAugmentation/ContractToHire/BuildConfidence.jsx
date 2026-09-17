import React from "react";
import { UserRound, ArrowRight } from "lucide-react";

export default function BuildYourTeamCTA() {
  return (
    <div className="w-full min-h-[380px] sm:min-h-[400px] lg:min-h-[420px] bg-[#730024]/5 flex items-center justify-center font-inter">
      
      <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 text-center">

        {/* Icon Badge */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#730024] flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <UserRound className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
        </div>

        {/* Headline */}
        <h1 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-4">
          Build Your Team with Confidence
        </h1>

        {/* Body Copy */}
        <p className="font-inter text-neutral-500 text-[13.5px] sm:text-[14px] lg:text-[15px] leading-relaxed max-w-lg mx-auto mb-7 sm:mb-8">
          Find the right technology talent and create a stronger path from
          project engagement to long-term partnership.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#730024] text-white font-inter font-semibold text-[13px] sm:text-sm px-5 sm:px-6 py-3 sm:py-3.5 hover:bg-[#5c001d] transition-colors duration-300">
          Talk to Our Experts
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

      </div>
    </div>
  );
}