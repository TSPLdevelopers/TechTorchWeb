import React from "react";
import { Link2, RefreshCw, Briefcase, LifeBuoy, MoreHorizontal } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const capabilities = [
  {
    icon: Link2,
    title: "Integrate",
    body: "Connect applications and systems for better information flow.",
  },
  {
    icon: RefreshCw,
    title: "Modernize",
    body: "Upgrade and improve existing technology environments.",
  },
  {
    icon: Briefcase,
    title: "Build",
    body: "Develop custom solutions for specific business needs.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    body: "Ensure systems stay reliable with ongoing maintenance and assistance.",
  },
];

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Analyze requirements and existing technology.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define solution and implementation approach.",
  },
  {
    num: "03",
    title: "Develop",
    body: "Build and integrate the required technology.",
  },
  {
    num: "04",
    title: "Deploy",
    body: "Test and implement with focus on usability.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance and technical support.",
  },
];

export default function FintechEngineeringAndApproachSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Fintech Engineering ---------- */}
      <div style={{ background: WINE }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
          {/* Left: copy */}
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(255,255,255,0.12)", color: "#f3d9e2" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              FINTECH ENGINEERING &amp; TRANSFORMATION
            </span>

            <h2 className="text-3xl leading-[1.2] font-bold tracking-tight text-white mb-6">
              Modernize the Technology Behind Your Financial Operations
            </h2>

            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed" style={{ color: "#e3c3cf" }}>
                Legacy financial applications and disjointed spreadsheets
                increase compliance liabilities and slow execution.
                TechTorch delivers purpose-built software engineering to
                refactor, integrate, and modernize critical transaction
                platforms.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: "#e3c3cf" }}>
                Our senior engineering teams develop bespoke client portals,
                secure API integrations, high-performance microservices,
                automated payment gateways, and compliant cloud
                infrastructures tailored to stringent financial standards.
              </p>
              <p className="text-[15px] leading-relaxed font-medium" style={{ color: "#f3e2e8" }}>
                We engineer modular systems designed for scale—ensuring your
                tech stack evolves as your transaction volume and reporting
                mandates expand.
              </p>
            </div>
          </div>

          {/* Right: 2x2 cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#d9b7c4" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Section 2: Our Approach ---------- */}
      <div style={{ background: "#f4f1ec" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 mb-10 items-start">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
                OUR APPROACH
              </span>
              <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight">
                From Business Requirements
                <br />
                to Practical <span style={{ color: WINE }}>Technology</span>
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed md:pt-2" style={{ color: MUTED }}>
              Every technology initiative begins with an understanding of
              the business requirement. Our approach focuses on creating
              practical solutions that align technology with operational
              objectives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map(({ num, title, body }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold text-white"
                    style={{ background: WINE }}
                  >
                    {num}
                  </span>
                  <MoreHorizontal size={14} style={{ color: "#c9c4bc" }} />
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
    </div>
  );
}