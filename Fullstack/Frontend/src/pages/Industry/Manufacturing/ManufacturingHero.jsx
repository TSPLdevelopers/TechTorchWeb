import React from "react";
import { ArrowRight, Cpu } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function ManufacturingHeroSection() {
  return (
    <div style={{ background: "#f7f7fa", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            MANUFACTURING
          </span>

          <h1 className="text-4xl md:text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
            Technology Solutions for Modern Manufacturing
          </h1>

          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            Manufacturing businesses depend on connected processes, reliable
            information and efficient supply chain operations. TechTorch
            Solutions provides technology solutions designed to help
            businesses connect important functions and manage their
            operations through a more organized digital environment.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </button>
            <button
              className="px-5 py-3 rounded-full text-sm font-medium"
              style={{ background: "#e9e8ec", color: INK }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right: image with caption overlay */}
        <div className="relative rounded-2xl overflow-hidden h-96">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #2a1a30 0%, #4a2440 45%, #6b2a4a 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium" style={{ color: "#c9a9c0" }}>
            Engineers reviewing robotic assembly line
          </div>

          <div className="absolute bottom-3 left-3 right-3 rounded-xl px-4 py-3 flex items-center justify-between gap-3 backdrop-blur-sm" style={{ background: "rgba(20,10,20,0.55)" }}>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#e05a8a" }} />
              <p className="text-[11px] font-semibold tracking-wide text-white leading-snug">
                SMART FACTORY FABRIC · REAL-TIME TELEMETRY &amp; FLOOR
                AUTOMATION
              </p>
            </div>
            <Cpu size={16} className="shrink-0" style={{ color: "#e05a8a" }} />
          </div>
        </div>
      </div>
    </div>
  );
}