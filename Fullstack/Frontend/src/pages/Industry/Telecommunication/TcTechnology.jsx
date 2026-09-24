import React from "react";
import { ChevronLeft, ShieldAlert } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const bullets = [
  "ERP Architecture",
  "Operations Mgmt",
  "Supply Chain",
  "People Resources",
  "Web Portals",
  "Finance Systems",
  "Payment Solutions",
  "CRM Platforms",
];

export default function TelecomTechnologySection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-[1.1fr_0.9fr] gap-12">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            TELECOMMUNICATIONS TECHNOLOGY
          </p>
          <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-6">
            Connecting Technology With Business
            <br />
            Operations
          </h2>

          <div className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Modern telecommunications businesses work across multiple
              functions, applications and digital processes. Managing these
              areas effectively requires technology that fits the
              organization's requirements and works with its existing
              business environment.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              TechTorch Solutions brings together a range of technology
              services and business solutions to support these
              requirements. Its capabilities include IT Consultancy,
              Software Engineering, Cloud Infrastructure, Cyber Security,
              Artificial Intelligence, Software Development &amp; Support,
              Business Process Outsourcing and Resource &amp; Staffing.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              The approach is centered around understanding the business
              requirement first and then developing or implementing
              technology that fits the organization. This can include
              building new software, improving existing systems, connecting
              applications, supporting cloud infrastructure or strengthening
              the technology environment.
            </p>
          </div>
        </div>

        {/* Right: panel */}
        <div>
          <div
            className="bg-white rounded-2xl p-6"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
          >
            <span
              className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full mb-5"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <ChevronLeft size={10} strokeWidth={3} />
              Integrated Core Framework
            </span>

            <h3 className="text-base font-semibold mb-3">Unified Enterprise Portfolio</h3>
            <p className="text-xs leading-relaxed mb-5" style={{ color: MUTED }}>
              TechTorch also provides digital solutions across Enterprise
              Resource Planning, Operations Management, Supply Chain
              Management, People Resources, Web Portals, Financial
              Management, Payment Management, Customer Relationship
              Management, E-Commerce and Project Management.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {bullets.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: WINE }} />
                  <span className="text-xs" style={{ color: INK }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Cohesion note */}
          <div
            className="bg-white rounded-xl p-4 mt-4 flex items-start gap-3"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
          >
            <span
              className="w-7 h-7 flex items-center justify-center rounded-full shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <ShieldAlert size={13} />
            </span>
            <div>
              <p className="text-xs font-semibold mb-1">Architectural Cohesion</p>
              <p className="text-[11px] leading-relaxed" style={{ color: MUTED }}>
                Every software component is integrated with strict adherence
                to organizational security, regulatory mandates, and
                operational continuous uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}