import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FmcgHeroSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            FMCG
          </span>

          <h1 className="text-4xl md:text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
            Technology Solutions for Modern FMCG Businesses
          </h1>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            FMCG businesses need connected processes, organized information
            and technology that can support day-to-day operations.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch provides business technology solutions across ERP,
            operations, supply chain, finance, customer management and
            digital applications, helping businesses build a more connected
            technology environment.
          </p>

          <button
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-xs font-semibold tracking-wide"
            style={{ background: WINE }}
          >
            TALK TO OUR EXPERTS
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Right: image with label overlay */}
        <div className="relative rounded-2xl overflow-hidden h-80">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #14181f 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium" style={{ color: "#8a8fa0" }}>
            Warehouse operations dashboard review
          </div>

          <span
            className="absolute top-4 left-4 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-md bg-white"
            style={{ color: INK }}
          >
            FMCG TECHNOLOGY
          </span>
        </div>
      </div>
    </div>
  );
}