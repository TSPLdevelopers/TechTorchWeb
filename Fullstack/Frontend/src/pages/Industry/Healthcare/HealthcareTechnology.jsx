import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function ConnectHealthcareSection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            HEALTHCARE TECHNOLOGY
          </p>

          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-6">
            Connect Healthcare Information, People and Processes
          </h2>

          <div className="space-y-4 mb-6">
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Healthcare operations depend on coordination between patients,
              clinical teams, administrative staff and supporting functions.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              A connected technology environment can help organizations
              manage information more consistently and coordinate
              activities across different areas of the organization.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              TechTorch brings healthcare management capabilities together
              with broader technology services such as ERP, software
              development, integration and ongoing support to address
              different operational requirements.
            </p>
          </div>

          <div
            className="bg-white rounded-lg px-5 py-4"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
          >
            <p className="text-sm italic leading-relaxed" style={{ color: INK }}>
              &ldquo;Connected healthcare systems reduce administrative
              friction, enhance diagnostic turnaround, and establish
              seamless clinical continuity across departments.&rdquo;
            </p>
          </div>
        </div>

        {/* Right: image */}
        <div
          className="rounded-2xl w-full h-96 flex items-center justify-center text-sm font-medium"
          style={{
            background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #163a3e 100%)",
            color: "#8a8fa0",
          }}
        >
          Clinical team reviewing diagnostic monitors
        </div>
      </div>
    </div>
  );
}