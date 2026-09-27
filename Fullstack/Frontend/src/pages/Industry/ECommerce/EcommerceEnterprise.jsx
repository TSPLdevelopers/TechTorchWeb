import React from "react";
import { Share2 } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function EnterpriseAlignmentSection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-start">
        {/* Left: heading */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            ENTERPRISE ALIGNMENT
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight">
            Build a More Connected Online
            <br />
            Business
          </h2>
        </div>

        {/* Right: copy + callout */}
        <div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
            An e-commerce business depends on more than an online store.
            Product information, inventory, pricing, payments, customer
            data and business insights all play an important role in
            managing online operations. TechTorch provides e-commerce
            solutions that bring these areas together in a practical
            digital environment, with support from implementation and
            training through ongoing maintenance and updates.
          </p>

          <div
            className="bg-white rounded-lg p-5 border-l-4"
            style={{ borderColor: WINE, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Share2 size={16} style={{ color: WINE }} />
              <h3 className="text-sm font-semibold">Operational Coherence</h3>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
              Bridging the gap between the front-of-house shopping
              experience and back-of-house supply chain execution creates
              stable, predictable growth for expanding enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}