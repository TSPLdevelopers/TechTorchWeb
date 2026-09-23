import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

export default function FinanceTechnologyHeroSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            FINANCE TECHNOLOGY
          </span>

          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-6">
            Connect Financial Operations With the Rest of Your Business
          </h2>

          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Financial information rarely exists in isolation. It often
              connects with customers, employees, payments, operations and
              other business functions.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              A connected technology environment can make it easier for
              teams to work with shared information and maintain greater
              visibility across business activities.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              TechTorch brings together ERP, financial management, payment
              management, CRM and software development capabilities to help
              organizations create technology environments suited to their
              operational requirements.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Our focus is not simply on introducing another system. We
              start by understanding the business requirement and then work
              toward a solution that fits the organization's existing
              processes, technology and future needs.
            </p>
          </div>
        </div>

        {/* Right: image with wine border */}
        <div
          className="rounded-3xl w-full h-96 overflow-hidden flex items-center justify-center text-sm font-medium border-4"
          style={{
            borderColor: WINE,
            background: "linear-gradient(135deg, #e9e4dc 0%, #d3ccc0 100%)",
            color: "#8a8378",
          }}
        >
          Laptop on desk showing a financial dashboard
        </div>
      </div>
    </div>
  );
}