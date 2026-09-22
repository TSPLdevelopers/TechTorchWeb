import React from "react";
import {
  User,
  Shield,
  Briefcase,
  CreditCard,
  Radio,
  Square,
  Puzzle,
  RefreshCw,
  BarChart3,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const quickList = [
  { icon: User, label: "Customers" },
  { icon: Shield, label: "Policies" },
  { icon: Briefcase, label: "Claims" },
  { icon: CreditCard, label: "Payments" },
];

const features = [
  {
    icon: Square,
    title: "Centralized Information",
    body: "Organize important business information within a connected environment.",
  },
  {
    icon: Puzzle,
    title: "Integrated Processes",
    body: "Connect business processes and systems to improve coordination.",
  },
  {
    icon: RefreshCw,
    title: "Workflow Automation",
    body: "Reduce repetitive activities through digital workflows and automation.",
  },
  {
    icon: BarChart3,
    title: "Business Visibility",
    body: "Use reporting and analytics to gain clearer visibility into operations.",
  },
];

export default function ConnectedOperationsSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: image + floating cards */}
        <div className="relative">
          <div
            className="rounded-2xl w-full h-96 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #dfe3e6 0%, #c7ccd1 100%)",
              color: "#8a8fa0",
            }}
          >
            Office desk with dual monitor dashboards
          </div>

          {/* Top-right floating quick list */}
          <div className="absolute top-8 right-[-12px] md:right-[-24px] bg-white rounded-xl shadow-lg p-3 w-40 space-y-2.5">
            {quickList.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={14} style={{ color: WINE }} />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Bottom floating stream card */}
          <div className="absolute -bottom-5 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 max-w-[230px]">
            <span
              className="w-8 h-8 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <Radio size={16} />
            </span>
            <div>
              <p className="text-[11px]" style={{ color: MUTED }}>
                Real-time Stream
              </p>
              <p className="text-xs font-semibold">Synced Across Operations</p>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            CONNECTED OPERATIONS
          </span>

          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-5">
            Bring Business Processes Into
            <br />
            <span style={{ color: WINE }}>One Connected Environment</span>
          </h2>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            Insurance operations involve multiple teams, systems and
            business processes. When these functions operate through
            disconnected environments, accessing information and
            maintaining operational visibility can become more difficult.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch helps organizations connect their technology
            environment so that information can move more effectively
            across business functions.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-3">
                <Icon size={18} style={{ color: WINE }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold mb-1">{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}