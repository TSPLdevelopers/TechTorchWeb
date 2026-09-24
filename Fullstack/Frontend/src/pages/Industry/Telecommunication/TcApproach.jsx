import React from "react";
import { Search, Ruler, Rocket, Users, ArrowRight, ShieldCheck } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    body: "Understand your business and technology requirements.",
    footer: "DISCOVERY & SCOPING",
  },
  {
    num: "02",
    icon: Ruler,
    title: "Develop",
    body: "Design and develop the required solution.",
    footer: "AGILE ENGINEERING",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Test & Deploy",
    body: "Test and prepare the solution for implementation.",
    footer: "RELEASE VALIDATION",
  },
  {
    num: "04",
    icon: Users,
    title: "Support",
    body: "Provide ongoing maintenance and support.",
    footer: "CONTINUITY SLA",
  },
];

export default function ApproachAndBuildCtaSections() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* ---------- Section 1: Our Approach ---------- */}
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          OUR APPROACH
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          From Requirement to Support
        </h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: MUTED }}>
          A disciplined, progressive engineering lifecycle tailored for
          operational continuity.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {steps.map(({ num, icon: Icon, title, body, footer }) => (
            <div
              key={num}
              className="rounded-xl p-5 flex flex-col"
              style={{ background: "#f6f7fa" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xl font-bold" style={{ color: WINE }}>
                  {num}
                </span>
                <Icon size={15} style={{ color: "#a9a6b0" }} />
              </div>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed mb-6" style={{ color: MUTED }}>
                {body}
              </p>
              <p className="mt-auto text-[9px] font-semibold tracking-wide" style={{ color: "#a9a6b0" }}>
                {footer}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- Section 2: Build CTA ---------- */}
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-12"
          style={{
            background: "linear-gradient(135deg, #3d0d28 0%, #5c1730 60%, #4a1230 100%)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 0%, transparent 55%)",
            }}
          />
          <div className="relative max-w-md">
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(255,255,255,0.12)", color: "#f3d9e2" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              GET IN TOUCH
            </span>

            <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight text-white mb-5">
              Let's Build Technology
              <br />
              Around Your Business
            </h2>

            <p className="text-sm leading-relaxed mb-8" style={{ color: "#e3c3cf" }}>
              Discuss your telecommunications technology requirements with
              the TechTorch team.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-sm font-medium"
                style={{ color: WINE }}
              >
                Get in Touch
                <ArrowRight size={15} />
              </button>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={13} style={{ color: "#e3c3cf" }} />
                <span className="text-xs" style={{ color: "#e3c3cf" }}>
                  Confidential Consultation &amp; Scoping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}