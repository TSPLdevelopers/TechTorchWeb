import React from "react";
import {
  Briefcase,
  RefreshCw,
  BarChart2,
  SlidersHorizontal,
  Link2,
  FileText,
  CircleDollarSign,
  TrendingUp,
  Share2,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const areas = [
  {
    num: "01",
    icon: Briefcase,
    title: "Connected Information",
    body: "Bring relevant financial and business information together within connected systems.",
  },
  {
    num: "02",
    icon: RefreshCw,
    title: "Organized Processes",
    body: "Support everyday activities through structured digital workflows and integrated business systems.",
  },
  {
    num: "03",
    icon: BarChart2,
    title: "Clearer Reporting",
    body: "Use reporting and analytics capabilities to help teams understand business information more effectively.",
  },
  {
    num: "04",
    icon: SlidersHorizontal,
    title: "Flexible Technology",
    body: "Adapt technology around changing business requirements through scalable and customizable solutions.",
  },
  {
    num: "05",
    icon: Link2,
    title: "Secure Environment",
    body: "Support business systems and sensitive information with security-focused technology capabilities.",
  },
];

const modules = [
  {
    icon: FileText,
    title: "Automated Invoicing",
    body: "Generate branded invoices, recurring schedules, and automated client payment reminders with integrated ledgers.",
  },
  {
    icon: CircleDollarSign,
    title: "Expense & Payroll Control",
    body: "Capture employee receipts, track approval hierarchies, and sync payroll commitments directly into Accounts.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Financial Reports",
    body: "Instant P&L, balance sheets, cash flow projections, and regulatory compliance snapshots at your fingertips.",
  },
  {
    icon: Share2,
    title: "Unified Operational Data",
    body: "Native multi-module synchronization across clients, staff timesheets, project budgets, and bank feeds.",
  },
];

function Pill({ children }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
      style={{ background: "#fbeef1", color: WINE }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
      {children}
    </span>
  );
}

export default function KeyAreasAndTorchXSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Key Business Areas ---------- */}
      <div style={{ background: "#f4f1ec" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Pill>KEY BUSINESS AREAS</Pill>
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-8">
            Supporting Better Financial Operations
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {areas.map(({ num, icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-9 h-9 flex items-center justify-center rounded-lg"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </span>
                  <span className="text-[10px] font-semibold" style={{ color: WINE }}>
                    {num}
                  </span>
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Section 2: TorchX Enterprise Suite ---------- */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-start">
          {/* Left: image */}
          <div
            className="rounded-2xl w-full h-96 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #3a2230 100%)",
              color: "#8a8fa0",
            }}
          >
            Tablet and phone showing financial dashboards
          </div>

          {/* Right: copy */}
          <div>
            <Pill>TORCHX ENTERPRISE SUITE</Pill>
            <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-5">
              Financial Management Within
              <br />
              a Unified Operating Platform
            </h2>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
              TorchX is TechTorch's proprietary all-in-one operating
              platform. Its dedicated Accounts module integrates directly
              with CRM, Human Resource Management, and project invoicing—
              eliminating duplicate data entry and manual reconciliation.
            </p>

            <p
              className="text-xs font-semibold tracking-wide mb-4"
              style={{ color: "#8a8378" }}
            >
              CORE INTEGRATED MODULES
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map(({ icon: Icon, title, body }) => (
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
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}