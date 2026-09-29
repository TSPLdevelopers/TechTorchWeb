import React, { useState } from "react";
import {
  TrendingDown,
  Network,
  Cloud,
  PieChart,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Lock,
  ArrowRight,
} from "lucide-react";

const STATS = [
  {
    tag: "FINANCIAL SERVICES",
    icon: TrendingDown,
    value: "68%",
    title: "Reconciliation Reduction",
    description:
      "Automated multi-currency ledger matching eliminated manual fiscal discrepancies for a Tier-1 institutional client.",
    footnote: "Audited Institutional Metric",
  },
  {
    tag: "GLOBAL LOGISTICS",
    icon: Network,
    value: "42%",
    title: "Fulfilment Velocity",
    description:
      "End-to-end routing intelligence accelerated regional distribution networks across multi-tier regional warehouses.",
    footnote: "Telemetry Verified",
  },
  {
    tag: "DISTRIBUTED INFRASTRUCTURE",
    icon: Cloud,
    value: "99.99%",
    title: "Active Uptime SLA",
    description:
      "Sustained cloud infrastructure throughput with zero disruption during record high-concurrency peak load surges.",
    footnote: "Continuous SLA Quarterly",
  },
  {
    tag: "ENTERPRISE PORTFOLIO",
    icon: PieChart,
    value: "3.2×",
    title: "Capital ROI Multiple",
    description:
      "Achieved within 12 months through decommissioning disparate vendor contracts and unifying core data pipes.",
    footnote: "Validated 12M Horizon",
  },
];

const CHECKLIST = [
  {
    icon: ShieldCheck,
    text: "Senior Solutions Architect assigned to each enterprise inquiry",
  },
  {
    icon: Clock,
    text: "Formal architecture brief response within 24 business hours",
  },
  {
    icon: Lock,
    text: "Enterprise NDA adhered prior to technical deep-dive",
  },
];

export default function ImpactAndConsultation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    focus: "",
    scope: "",
  });

  function handleChange(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your CRM / lead endpoint.
    console.log("Consultation request:", form);
  }

  return (
    <section className="w-full bg-[#f3f1f5] py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#9d174d" }} />
          <span
            className="text-[10px] font-semibold tracking-[0.12em] uppercase"
            style={{ color: "#9d174d" }}
          >
            Validated System Performance
          </span>
        </span>

        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold leading-tight text-slate-900 mb-2">
          Measurable Impact Across Global Operations
        </h2>

        <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 max-w-xl mb-8 sm:mb-10">
          Real-world benchmarks achieved across Tier-1 enterprise deployments
          and multi-region digital estates.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-12">
          {STATS.map(({ tag, icon: Icon, value, title, description, footnote }) => (
            <div
              key={tag}
              className="rounded-xl border border-slate-200/70 bg-white p-4 sm:p-5 shadow-sm flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <span
                  className="text-[9px] font-bold tracking-wide uppercase rounded px-2 py-1 leading-snug"
                  style={{ backgroundColor: "#fdeef4", color: "#9d174d" }}
                >
                  {tag}
                </span>
                <Icon size={15} className="text-slate-400 flex-shrink-0 mt-0.5" />
              </div>

              <p className="text-[26px] sm:text-[28px] font-bold mb-1" style={{ color: "#7a1750" }}>
                {value}
              </p>

              <p className="text-[13px] sm:text-[14px] font-semibold text-slate-900 mb-2">
                {title}
              </p>

              <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-slate-500 mb-4 flex-1">
                {description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-[10px] text-slate-400 italic">{footnote}</span>
                <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA + Form panel */}
        <div className="rounded-2xl bg-white shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Left: pitch */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "#7a1750" }}
                >
                  T
                </div>
                <span className="font-bold text-slate-900 text-[15px]">TechTorch</span>
              </div>

              <p
                className="text-[11px] font-bold tracking-[0.1em] uppercase mb-3"
                style={{ color: "#9d174d" }}
              >
                Enterprise Architecture Advisory
              </p>

              <h3 className="text-[22px] sm:text-[24px] font-bold leading-snug text-slate-900 mb-4">
                Ready to Transform Your Digital Infrastructure?
              </h3>

              <p className="text-[14px] leading-relaxed text-slate-500 mb-6">
                Engage directly with our Principal Solutions Architects. We
                examine your operational reality, outline target
                architectures, and build an iterative deployment roadmap.
              </p>

              <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
                {CHECKLIST.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#fdeef4" }}
                    >
                      <Icon size={12} style={{ color: "#9d174d" }} />
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[10px] font-semibold tracking-wide uppercase text-slate-500 mb-1.5">
                  Executive Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/20 focus:border-[#9d174d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-wide uppercase text-slate-500 mb-1.5">
                  Corporate Work Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="name@enterprise.com"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/20 focus:border-[#9d174d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-wide uppercase text-slate-500 mb-1.5">
                  Enterprise Organization
                </label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={handleChange("organization")}
                  placeholder="Global Logistics Corp"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/20 focus:border-[#9d174d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-wide uppercase text-slate-500 mb-1.5">
                  Primary Solution Focus
                </label>
                <input
                  type="text"
                  value={form.focus}
                  onChange={handleChange("focus")}
                  placeholder="ERP Modernization & Core Integration (SOL-12)"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#9d174d]/20 focus:border-[#9d174d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold tracking-wide uppercase text-slate-500 mb-1.5">
                  Architecture Scope / High-Level Goals
                </label>
                <textarea
                  value={form.scope}
                  onChange={handleChange("scope")}
                  placeholder="Describe your current legacy estate constraints or modernization timeline..."
                  rows={3}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-[13px] text-slate-700 placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#9d174d]/20 focus:border-[#9d174d]"
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#7a1750" }}
              >
                Request Architecture Consultation
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}