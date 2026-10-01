import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function BuildOnlineBusinessCtaSection() {
  return (
    <div className="w-full font-sans relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(115deg, #14161c 0%, #1a1c24 45%, #14161c 100%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(10,10,12,0.55)" }} />

      <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
        <span
          className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
          style={{ background: WINE, color: "#fff" }}
        >
          <ChevronRight size={11} strokeWidth={3} />
          NEXT PHASE
        </span>

        <h2 className="text-3xl md:text-[2rem] leading-[1.2] font-bold tracking-tight text-white mb-4">
          Build Your Online Business With the
          <br />
          Right Technology
        </h2>

        <p className="text-sm leading-relaxed max-w-xl mx-auto mb-7" style={{ color: "#c9c6cc" }}>
          Bring your products, customers and e-commerce operations together
          with technology designed around your business requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-white text-sm font-medium"
            style={{ background: WINE }}
          >
            Talk to Our Experts
            <ArrowRight size={15} />
          </button>
          <button
            className="px-5 py-2.5 rounded-md text-sm font-medium text-white"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}