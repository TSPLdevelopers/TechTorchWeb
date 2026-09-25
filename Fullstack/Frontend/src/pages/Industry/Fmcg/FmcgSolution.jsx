import React from "react";
import {
  Database,
  SlidersHorizontal,
  Truck,
  CreditCard,
  Users,
  ShoppingCart,
  Globe,
  Briefcase,
  RefreshCw,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";
const GREEN = "#1a9455";

const systems = [
  { icon: Database, iconBg: "#fde7e7", iconColor: "#c94b4b", title: "ERP", status: "Active • 99.9%" },
  { icon: SlidersHorizontal, iconBg: "#e6eef6", iconColor: "#3b6ea5", title: "Operations", status: "Synced • Automated" },
  { icon: Truck, iconBg: "#e6f0f8", iconColor: "#2f7ac9", title: "Supply Chain", status: "Tracking • 24/7" },
  { icon: CreditCard, iconBg: "#e6eef6", iconColor: "#3b6ea5", title: "Finance", status: "Reconciled • Live" },
  { icon: Users, iconBg: "#efe6f8", iconColor: "#7a4bc9", title: "CRM", status: "Engaged • 360°" },
  { icon: ShoppingCart, iconBg: "#fbeee0", iconColor: "#c9834b", title: "E-Commerce", status: "Omnichannel" },
  { icon: Globe, iconBg: "#e6f4f0", iconColor: "#2f9b7a", title: "Web Portals", status: "Connected • SSO" },
  { icon: Briefcase, iconBg: "#fbf1de", iconColor: "#c08a2e", title: "Project Mgmt", status: "Optimized • Agile" },
];

export default function FmcgConnectOperationsSection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            FMCG SOLUTIONS
          </p>
          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-6">
            Connect Your FMCG Business Operations
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              FMCG businesses manage multiple functions that need to work
              together. Technology can help connect business processes,
              information and teams across different operational areas.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              TechTorch provides solutions designed around business
              requirements, including ERP, Operations Management, Supply
              Chain Management, Financial Management, CRM, E-Commerce, Web
              Portals and Project Management.
            </p>
          </div>
        </div>

        {/* Right: dashboard panel */}
        <div
          className="bg-white rounded-2xl p-5"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
              <span className="text-[11px] font-semibold tracking-wide" style={{ color: INK }}>
                INTEGRATED FMCG ECOSYSTEM · REAL-TIME SYNC
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] font-medium px-2 py-1 rounded-md"
                style={{ background: "#f2f1f5", color: MUTED }}
              >
                Core v4.2
              </span>
              <span className="text-[10px] font-semibold" style={{ color: WINE }}>
                TechTorch
              </span>
            </div>
          </div>

          {/* System grid */}
          <div className="grid grid-cols-4 gap-2.5 mb-4">
            {systems.map(({ icon: Icon, iconBg, iconColor, title, status }) => (
              <div
                key={title}
                className="rounded-lg p-3 border relative"
                style={{ borderColor: "#ece9e4" }}
              >
                <span
                  className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                  style={{ background: GREEN }}
                />
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-lg mb-2.5"
                  style={{ background: iconBg, color: iconColor }}
                >
                  <Icon size={14} strokeWidth={1.8} />
                </span>
                <p className="text-xs font-semibold mb-0.5">{title}</p>
                <p className="text-[10px]" style={{ color: GREEN }}>
                  {status}
                </p>
              </div>
            ))}
          </div>

          {/* Footer bar */}
          <div
            className="rounded-lg p-4 flex items-center justify-between"
            style={{ background: "#f6f7fa" }}
          >
            <div className="flex items-center gap-2.5">
              <RefreshCw size={15} style={{ color: WINE }} />
              <div>
                <p className="text-sm font-semibold">Unified Operational Data Bus</p>
                <p className="text-[11px]" style={{ color: MUTED }}>
                  8 of 8 Domains Synced
                </p>
              </div>
            </div>
            <span
              className="inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: "#e5f7ec", color: GREEN }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN }} />
              Connected System
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}