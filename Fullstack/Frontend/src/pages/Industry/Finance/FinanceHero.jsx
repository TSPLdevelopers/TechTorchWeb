import React from "react";
import { ArrowRight, Landmark, Building2, Calculator, Smartphone } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FinancialHeroSection() {
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
            FINANCIAL TECHNOLOGY SOLUTIONS
          </span>

          <h1 className="text-4xl md:text-[2.6rem] leading-[1.15] font-bold tracking-tight mb-6">
            Modern Technology Solutions for a
            <br />
            More Connected
            <br />
            <span style={{ color: WINE }}>Financial Enterprise</span>
          </h1>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            Financial institutions and forward-looking finance departments
            depend on streamlined accounting workflows, automated audit
            trails, and unified enterprise systems. When core operations
            operate in silos, growth introduces friction.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch empowers finance-focused organizations with integrated
            digital platforms: unifying ERP, Accounts, CRM, secure customer
            portals, and tailored software engineering to ensure compliant,
            real-time financial oversight.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Consult Our Solution Architects
              <ArrowRight size={16} />
            </button>
            <button
              className="px-6 py-3.5 rounded-full text-sm font-medium border"
              style={{ borderColor: "#f0d6de", color: WINE }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right: image with glow + floating icon badges */}
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-40"
            style={{ background: WINE }}
          />
          <div
            className="relative rounded-3xl w-full h-96 overflow-hidden flex items-center justify-center text-sm font-medium"
            style={{
              background:
                "linear-gradient(135deg, #1c2230 0%, #2a2f3d 45%, #3a2230 100%)",
              color: "#8a8fa0",
            }}
          >
            Executive reviewing holographic financial data
          </div>

          {/* Floating icon badges */}
          <span
            className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl"
            style={{ background: "#111827", color: "#7dd3fc" }}
          >
            <Landmark size={18} />
          </span>
          <span
            className="absolute top-[42%] right-4 w-11 h-11 flex items-center justify-center rounded-xl"
            style={{ background: "#111827", color: "#7dd3fc" }}
          >
            <Building2 size={18} />
          </span>
          <span
            className="absolute bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl"
            style={{ background: "#111827", color: "#7dd3fc" }}
          >
            <Calculator size={18} />
          </span>
          <span
            className="absolute top-[38%] left-[26%] w-11 h-11 flex items-center justify-center rounded-xl"
            style={{ background: "#111827", color: "#7dd3fc" }}
          >
            <Smartphone size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}