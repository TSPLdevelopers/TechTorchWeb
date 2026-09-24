import React from "react";
import { Search, PenLine, CheckCircle2, Headphones } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    body: "Understand your business objectives, existing environment and technology requirements.",
  },
  {
    num: "02",
    icon: PenLine,
    title: "Design & Develop",
    body: "Plan and develop a solution around the identified requirements.",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Test & Deploy",
    body: "Validate the solution and prepare it for implementation.",
  },
  {
    num: "04",
    icon: Headphones,
    title: "Support & Maintain",
    body: "Provide ongoing technical support, maintenance and improvements as your requirements evolve.",
  },
];

export default function OurApproachStepsSection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          OUR APPROACH
        </p>
        <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-8">
          From Requirement to Long-Term
          <br />
          Support
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map(({ num, icon: Icon, title, body }) => (
            <div
              key={num}
              className="bg-white rounded-xl p-5"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xl font-bold" style={{ color: WINE }}>
                  {num}
                </span>
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
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
  );
}