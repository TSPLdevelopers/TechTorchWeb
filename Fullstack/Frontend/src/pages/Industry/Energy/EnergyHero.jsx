import React from "react";
import { ArrowRight, Settings } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EnergyHeroSection() {
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
            ENERGY TECHNOLOGY PRACTICE
          </span>

          <h1 className="text-4xl md:text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
            Technology Solutions for a More Connected Energy Business
          </h1>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            Energy businesses manage multiple functions across operations,
            people, finance, customer relationships and business processes.
            As these areas grow, organizations need technology that can
            bring information together and support the way their business
            operates.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch Solutions provides technology services and digital
            solutions designed around business requirements, helping
            organizations develop, manage and improve the technology behind
            their operations.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Get in Touch
              <ArrowRight size={16} />
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border"
              style={{ borderColor: "#d8d5d0", color: INK }}
            >
              Talk to Our Experts
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right: image with floating caption card */}
        <div className="relative">
          <div
            className="rounded-2xl w-full h-80 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #3a2230 100%)",
              color: "#8a8fa0",
            }}
          >
            Energy operations control room at night
          </div>

          <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span
              className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <Settings size={16} />
            </span>
            <div>
              <p className="text-[10px] font-semibold tracking-wide" style={{ color: WINE }}>
                • TECHNOLOGY CONSULTATION
              </p>
              <p className="text-sm font-semibold">
                Technology Solutions for Energy Businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}