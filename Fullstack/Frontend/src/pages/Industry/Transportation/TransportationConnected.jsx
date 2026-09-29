import React from "react";
import { ArrowLeftRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function ConnectedTransportationSection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            CONNECTED TRANSPORTATION OPERATIONS
          </p>

          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-6">
            Bring Your Business Together
          </h2>

          <div className="space-y-4 mb-6">
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Transportation operations often involve multiple business
              functions working together. TechTorch helps connect these
              areas through ERP, Operations Management, Supply Chain
              Management, Financial Management, CRM, Project Management and
              Web Portals.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              The focus is to understand your requirements and provide
              technology that fits your existing business environment.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span
              className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#e9e8ec", color: INK }}
            >
              <ArrowLeftRight size={16} />
            </span>
            <div>
              <p className="text-sm font-semibold">Integrated Functional Flow</p>
              <p className="text-xs" style={{ color: MUTED }}>
                Cross-department coordination without structural silos
              </p>
            </div>
          </div>
        </div>

        {/* Right: image with label */}
        <div className="bg-white rounded-2xl p-3" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div className="relative rounded-xl overflow-hidden h-80">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #d9c9a8 0%, #b8a888 45%, #8a7a5e 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium" style={{ color: "#5a4f3a" }}>
              Colleagues reviewing a tablet at a shipping port
            </div>
            <span
              className="absolute top-4 left-4 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-md text-white"
              style={{ background: WINE }}
            >
              ENTERPRISE SYNC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}