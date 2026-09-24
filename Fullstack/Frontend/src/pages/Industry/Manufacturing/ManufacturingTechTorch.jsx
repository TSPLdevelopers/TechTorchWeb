import React from "react";
import { Target, Link2, SlidersHorizontal, ShieldCheck, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const reasons = [
  {
    icon: Target,
    title: "Business-Aligned",
    body: "Solutions shaped around your business requirements.",
  },
  {
    icon: Link2,
    title: "Connected",
    body: "Bring business processes and information together.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible",
    body: "Technology that can adapt to changing requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Supported",
    body: "Support across implementation, training and ongoing maintenance.",
  },
];

export default function WhyTechTorchAndBuildCtaSections() {
  return (
    <div style={{ background: "#f5f6f8", color: INK }} className="w-full font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* ---------- Section 1: Why TechTorch ---------- */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            WHY TECHTORCH
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.3] font-bold tracking-tight">
            Technology With a Clear Business
            <br />
            Focus
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- Section 2: Build CTA ---------- */}
        <div
          className="rounded-3xl px-8 py-14 text-center"
          style={{ background: WINE }}
        >
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.3] font-bold tracking-tight text-white mb-4">
            Build a More Connected
            <br />
            Manufacturing Business
          </h2>
          <p className="text-sm leading-relaxed max-w-md mx-auto mb-8" style={{ color: "#e3c3cf" }}>
            Bring your business processes, supply chain and technology
            environment together with solutions designed around your
            requirements.
          </p>
          <button
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-sm font-medium"
            style={{ color: WINE }}
          >
            Talk to Our Experts
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}