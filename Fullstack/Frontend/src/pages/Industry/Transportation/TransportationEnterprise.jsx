import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function TransportationImageCtaSection() {
  return (
    <div className="w-full font-sans relative overflow-hidden" style={{ minHeight: 420 }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #0f1420 0%, #1a2233 40%, #2a1a2a 70%, #3a1a2a 100%)",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ background: "rgba(10,10,15,0.45)" }} />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center flex flex-col items-center">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
          style={{ background: "rgba(255,255,255,0.12)", color: "#f0e0e6" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          ENTERPRISE LOGISTICS ARCHITECTURE
        </span>

        <h1 className="text-3xl md:text-[2.4rem] leading-[1.2] font-bold tracking-tight text-white mb-5">
          Build a More Connected
          <br />
          Transportation Business
        </h1>

        <p className="text-sm leading-relaxed max-w-xl mb-8" style={{ color: "#d9d5da" }}>
          Bring your operations, business applications and technology
          together with solutions designed around your requirements.
        </p>

        <button
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-white text-xs font-semibold tracking-wide"
          style={{ background: WINE }}
        >
          TALK TO OUR EXPERTS
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}