import React from "react";
import {
  LayoutGrid,
  TrendingUp,
  Gauge,
  RefreshCw,
  Table2,
  SlidersHorizontal,
  Database,
  Sparkles,
  User,
  Users,
  Package,
  CreditCard,
  FlaskConical,
  Tag,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const insightCards = [
  {
    icon: LayoutGrid,
    miniIcon: TrendingUp,
    title: "Operational Dashboards",
    body: "View important information in a structured format.",
    label: "Telemetry Sync",
    status: "99.8%",
    statusColor: "#1a9455",
    statusBg: "#e5f7ec",
  },
  {
    icon: Gauge,
    miniIcon: RefreshCw,
    title: "Performance Indicators",
    body: "Monitor selected operational measures.",
    label: "Bed Turnover Rate",
    status: "Optimal",
    statusColor: "#1a9455",
    statusBg: "#e5f7ec",
  },
  {
    icon: Table2,
    miniIcon: SlidersHorizontal,
    title: "Custom Reporting",
    body: "Create reports around organizational requirements.",
    label: "Audit Export",
    status: "Automated",
    statusColor: WINE,
    statusBg: "#fbeef1",
  },
  {
    icon: Database,
    miniIcon: Sparkles,
    title: "Data Insights",
    body: "Use available information to understand operational trends and resource needs.",
    label: "Predictive Load",
    status: "Active",
    statusColor: "#1a9455",
    statusBg: "#e5f7ec",
  },
];

const operationsCards = [
  { num: "01", icon: User, title: "Patient Management" },
  { num: "02", icon: Users, title: "Staff & Operations" },
  { num: "03", icon: Package, title: "Inventory & Supplies" },
  { num: "04", icon: CreditCard, title: "Billing & Finance" },
  { num: "05", icon: FlaskConical, title: "Clinical & Laboratory" },
  { num: "06", icon: Tag, title: "Patient Engagement" },
];

export default function HealthcareInsightsAndOperationsSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Healthcare Insights ---------- */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            HEALTHCARE INSIGHTS
          </p>
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-4">
            Turn Operational Data Into Clearer Visibility
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: MUTED }}>
            Healthcare organizations generate information across patients,
            staff, resources, finance and clinical activities. TechTorch's
            healthcare solution includes dashboards, KPIs, predictive
            analytics and customizable reporting to help organizations
            review operational information and support decision-making.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {insightCards.map(({ icon: Icon, miniIcon: MiniIcon, title, body, label, status, statusColor, statusBg }) => (
              <div
                key={title}
                className="rounded-xl p-5 border"
                style={{ borderColor: "#ece9e4" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-lg"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <MiniIcon size={16} style={{ color: "#c9c4bc" }} />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color: MUTED }}>
                  {body}
                </p>
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "#ece9e4" }}>
                  <span className="text-[11px]" style={{ color: MUTED }}>
                    {label}
                  </span>
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: statusBg, color: statusColor }}
                  >
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Section 2: Connected Healthcare Operations ---------- */}
      <div style={{ background: "#f4f1ec" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            CONNECTED HEALTHCARE OPERATIONS
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-4">
            One Connected Environment for Essential
            <br />
            Functions
          </h2>
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Healthcare delivery involves more than clinical services.
              Administration, workforce, resources, finance, information and
              technology all contribute to everyday operations.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              TechTorch's healthcare management capabilities are designed to
              bring these areas into a more connected operational
              environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {operationsCards.map(({ num, icon: Icon, title }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5 flex items-center gap-3"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold mb-0.5" style={{ color: WINE }}>
                    {num}
                  </p>
                  <h3 className="text-sm font-semibold">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}