import React from "react";
import { TrendingUp, Users, Activity, FileText } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const metrics = [
  {
    icon: TrendingUp,
    title: "Sales Performance",
    body: "Review sales-related information.",
  },
  {
    icon: Users,
    title: "Customer Trends",
    body: "Understand customer activity and purchasing patterns.",
  },
  {
    icon: Activity,
    title: "Website Activity",
    body: "Monitor relevant website information.",
  },
  {
    icon: FileText,
    title: "Business Reporting",
    body: "Use organized reports to support business decisions.",
  },
];

const stats = [
  { label: "THROUGHPUT", value: "Real-Time" },
  { label: "GRANULARITY", value: "Normalized" },
  { label: "AUDITING", value: "Automated" },
];

export default function IntelligenceVisibilitySection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: copy + metrics */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            INTELLIGENCE &amp; VISIBILITY
          </p>
          <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-4">
            Understand Your E-Commerce Business
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
            Online business generates useful information across sales,
            customers and website activity. Analytics and reporting can
            help teams understand this information and support business
            decisions.
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {metrics.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-lg p-4" style={{ background: "#f6f7fa" }}>
                <Icon size={16} style={{ color: WINE }} className="mb-3" />
                <h3 className="text-sm font-semibold mb-1">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: data signal panel */}
        <div
          className="bg-white rounded-2xl p-6 border"
          style={{ borderColor: "#ece9e4" }}
        >
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-sm font-semibold">Data Signal Distribution</h3>
            <span
              className="text-[10px] font-semibold px-2 py-1 rounded-full border"
              style={{ borderColor: "#ece9e4", color: MUTED }}
            >
              Continuous
            </span>
          </div>
          <p className="text-xs mb-6" style={{ color: MUTED }}>
            Structured operational telemetry
          </p>

          {/* Chart */}
          <div className="rounded-lg mb-6" style={{ background: "#f6f7fa" }}>
            <svg viewBox="0 0 300 90" className="w-full h-24">
              <polyline
                points="10,60 60,45 100,50 140,35 180,42 220,25 260,20 290,15"
                fill="none"
                stroke={WINE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[60, 140, 220, 290].map((x, i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={[45, 35, 25, 15][i]}
                  r="3.5"
                  fill={WINE}
                />
              ))}
            </svg>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map(({ label, value }) => (
              <div key={label} className="bg-white rounded-lg p-3 border" style={{ borderColor: "#ece9e4" }}>
                <p className="text-[9px] font-semibold tracking-wide mb-1" style={{ color: "#a9a6b0" }}>
                  {label}
                </p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}