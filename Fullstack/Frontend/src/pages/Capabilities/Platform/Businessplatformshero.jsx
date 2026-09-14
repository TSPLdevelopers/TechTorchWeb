import React from "react";
import { ArrowRight } from "lucide-react";

export default function BusinessPlatformsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Background photo — fades into the white background on the left */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="/team-reviewing-laptop.jpg"
          alt="Colleagues reviewing work together on a laptop"
          className="absolute right-0 top-0 h-full w-full sm:w-[70%] lg:w-[58%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl px-5 sm:px-10 lg:px-14 py-14 sm:py-20 md:py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#9d174d" }} />
          <span
            className="text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase"
            style={{ color: "#9d174d" }}
          >
            Unified Business Platforms
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold leading-tight text-slate-900 mb-4">
          Technology That Works Around Your Business
        </h1>

        {/* Paragraph */}
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 max-w-md mb-7">
          Connected platforms that simplify everyday work, bring your teams
          together, and help your business move forward with confidence.
        </p>

        {/* CTA */}
        <button
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] sm:text-[14px] font-semibold text-white transition-opacity hover:opacity-90 mb-10"
          style={{ backgroundColor: "#7a1750" }}
        >
          Talk Our Experts
          <ArrowRight size={15} />
        </button>

        {/* Divider */}
        <div className="h-px bg-slate-200 max-w-sm mb-6" />

        {/* Stats */}
        <div className="flex items-start gap-10 sm:gap-14">
          <div>
            <p className="text-[20px] sm:text-[22px] font-bold text-slate-900">100%</p>
            <p className="text-[11px] sm:text-[12px] text-slate-500 mt-1">
              Cloud Connected
            </p>
          </div>

          <div>
            <p className="text-[20px] sm:text-[22px] font-bold text-slate-900">24/7</p>
            <p className="text-[11px] sm:text-[12px] text-slate-500 mt-1">
              Enterprise Reliability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}