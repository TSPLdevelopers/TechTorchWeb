import React from "react";
import { LayoutGrid, Eye, ArrowLeftRight, ShieldCheck } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const pillars = [
  {
    icon: Eye,
    title: "Operational Visibility",
    body: "Real-time visibility across energy operations, telemetry data, and critical assets.",
  },
  {
    icon: ArrowLeftRight,
    title: "Process Synchronization",
    body: "Unified workflows linking ERP, finance, supply chain, and field workforce management.",
  },
  {
    icon: ShieldCheck,
    title: "Resilient Architecture",
    body: "Robust cloud infrastructure, cyber defense, and tailored enterprise software support.",
  },
];

export default function EnergyTechnologySection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[1.1fr_0.9fr] gap-12">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            ENERGY TECHNOLOGY
          </p>
          <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-6">
            Connecting Technology With Business
            <br />
            Operations
          </h2>

          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Modern energy businesses work across multiple departments,
              applications and business processes. A connected technology
              environment can help organizations manage these areas more
              effectively and maintain better visibility across their
              business.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              TechTorch Solutions brings together digital solutions
              including ERP, Operations Management, Supply Chain
              Management, People Resources, Web Portals, Financial
              Management, Payment Management, CRM, E-Commerce and Project
              Management. Its technology services include IT Consultancy,
              Artificial Intelligence, Cloud Infrastructure, Cyber Security,
              Software Engineering, Software Development &amp; Support, BPO
              and Resource &amp; Staffing.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              The focus is on understanding the organization's requirements
              and providing technology that fits its existing environment.
              This can include developing software, connecting systems,
              improving business processes or supporting the technology
              infrastructure required for day-to-day operations.
            </p>
          </div>
        </div>

        {/* Right: panel */}
        <div
          className="bg-white rounded-2xl p-6"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <LayoutGrid size={16} />
            </span>
            <div>
              <h3 className="text-sm font-semibold">Core Focus Pillars</h3>
              <p className="text-[11px]" style={{ color: MUTED }}>
                Technology Integration Principles
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon size={16} style={{ color: WINE }} className="shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">{title}</h4>
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