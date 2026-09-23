import React from "react";
import { User, Link2, Square, BarChart2, RefreshCcw, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const reasons = [
  {
    icon: User,
    title: "Business-Focused",
    body: "Solutions begin with your operational requirements.",
    tag: "TAILORED ARCHITECTURE",
  },
  {
    icon: Link2,
    title: "Connected",
    body: "Bring systems and information together.",
    tag: "INTEGRATED SYSTEMS",
  },
  {
    icon: Square,
    title: "Scalable",
    body: "Adapt to changing business needs.",
    tag: "DYNAMIC SCALING",
  },
  {
    icon: BarChart2,
    title: "Data-Aware",
    body: "Support better visibility with reporting and analytics.",
    tag: "ACTIONABLE TELEMETRY",
  },
  {
    icon: RefreshCcw,
    title: "Supported",
    body: "Provide ongoing maintenance and technical assistance.",
    tag: "FULL-LIFECYCLE SUPPORT",
  },
];

export default function WhyTechTorchAndReadySections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Why TechTorch ---------- */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            WHY TECHTORCH
          </span>
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-8">
            Technology Built Around the Way <span style={{ color: WINE }}>You Work</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {reasons.map(({ icon: Icon, title, body, tag }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border"
                style={{ borderColor: "#ece9e4" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: MUTED }}>
                  {body}
                </p>
                <span
                  className="inline-block text-[9px] font-semibold tracking-wide px-2 py-1 rounded-md"
                  style={{ background: "#f2f1f5", color: MUTED }}
                >
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Section 2: Next Steps CTA ---------- */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(115deg, #1a0d15 0%, #2a1220 40%, #3d1226 70%, #1a0d15 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_70%_40%,rgba(122,31,61,0.6),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(255,255,255,0.1)", color: "#e3c3cf" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              NEXT STEPS
            </span>
            <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight text-white mb-4">
              Ready to Modernize Your Financial Technology Infrastructure?
            </h2>
            <p className="text-sm leading-relaxed max-w-md" style={{ color: "#d9c3cf" }}>
              Discover how TechTorch's unified ERP, TorchX Accounts
              platform, and bespoke engineering capabilities accelerate
              growth, safeguard compliance, and streamline financial
              operations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-sm font-medium"
              style={{ color: WINE }}
            >
              Talk to Our Experts
              <ArrowRight size={15} />
            </button>
            <button
              className="px-5 py-3 rounded-full text-sm font-medium border text-white"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}