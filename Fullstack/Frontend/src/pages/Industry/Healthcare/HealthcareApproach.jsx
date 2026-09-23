import React from "react";
import { Target, Share2, SlidersHorizontal, BarChart2, RefreshCcw } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Understand your workflows, operational requirements and existing technology environment.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define the solution structure and implementation approach around those requirements.",
  },
  {
    num: "03",
    title: "Develop",
    body: "Configure, develop or integrate the required technology.",
  },
  {
    num: "04",
    title: "Deploy",
    body: "Test and introduce the solution with attention to functionality and usability.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance and technical support as technology requirements evolve.",
  },
];

const reasons = [
  {
    icon: Target,
    title: "Business-Aligned",
    body: "Solutions are shaped around the organization's operational requirements.",
  },
  {
    icon: Share2,
    title: "Connected",
    body: "Bring healthcare and supporting business functions into a more coordinated environment.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible",
    body: "Adapt technology according to organizational and operational needs.",
  },
  {
    icon: BarChart2,
    title: "Data-Aware",
    body: "Use connected information, reporting and analytics for better operational visibility.",
  },
  {
    icon: RefreshCcw,
    title: "Supported",
    body: "Continue supporting the technology environment through maintenance and technical assistance.",
  },
];

export default function ApproachAndWhyTechTorchSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Our Approach ---------- */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            OUR APPROACH
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-8">
            From Healthcare Requirements to Practical
            <br />
            Technology
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            {steps.map(({ num, title, body }) => (
              <div
                key={num}
                className="rounded-xl p-5 border"
                style={{ borderColor: "#ece9e4" }}
              >
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-semibold text-white mb-4"
                  style={{ background: WINE }}
                >
                  {num}
                </span>
                <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg px-5 py-3.5" style={{ background: "#f4f1ec" }}>
            <p className="text-xs" style={{ color: MUTED }}>
              TechTorch's broader ERP and software-development information
              also describes implementation support, training, testing,
              deployment and ongoing maintenance.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Section 2: Why TechTorch ---------- */}
      <div style={{ background: "#f6f7fa" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            WHY TECHTORCH
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-8">
            Technology Built Around Healthcare
            <br />
            Requirements
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
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
  );
}