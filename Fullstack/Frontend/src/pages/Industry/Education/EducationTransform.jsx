import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function CtaBannerSection() {
  return (
    <div
      className="w-full font-sans relative overflow-hidden"
      style={{
        background:
          "linear-gradient(115deg, #2a0f1d 0%, #4a1530 30%, #7a1f3d 62%, #2a0f1d 100%)",
      }}
    >
      {/* subtle diagonal texture lines */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div
          className="flex items-center gap-1 text-xs font-semibold tracking-wide mb-5"
          style={{ color: "#e3a9c1" }}
        >
          <ChevronRight size={12} strokeWidth={3} />
          TRANSFORM YOUR INSTITUTION
        </div>

        <h2 className="text-3xl md:text-[2.2rem] leading-[1.15] font-semibold tracking-tight text-white mb-5 max-w-xl">
          Have an Education Technology Challenge?
        </h2>

        <p
          className="text-[15px] leading-relaxed mb-8 max-w-xl"
          style={{ color: "#d9c3cf" }}
        >
          Whether you are modernizing legacy student systems, unifying
          fragmented campus workflows, or building a connected digital
          campus, TechTorch architects are ready to partner with you.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium transition-colors"
            style={{ background: WINE }}
          >
            Talk to Our Education Specialists
            <ArrowRight size={16} />
          </button>
          <button
            className="px-5 py-3 rounded-md text-sm font-medium border text-white"
            style={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            Explore Architecture Capabilities
          </button>
        </div>
      </div>
    </div>
  );
}