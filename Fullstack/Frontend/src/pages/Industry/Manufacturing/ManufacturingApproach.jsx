import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Understand your business processes, technology environment and requirements.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define an approach aligned with your business objectives and technology needs.",
  },
  {
    num: "03",
    title: "Develop & Integrate",
    body: "Develop, configure or integrate the required technology solutions.",
  },
  {
    num: "04",
    title: "Implement",
    body: "Support the implementation of the solution within your business environment.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance, training and technology support as requirements evolve.",
  },
];

export default function ApproachStepsCenteredSection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            OUR APPROACH
          </span>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.3] font-bold tracking-tight mb-3">
            From Requirement to Long-Term Support
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            Our approach starts with understanding your business
            requirements and continues through development, implementation
            and ongoing support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map(({ num, title, body }) => (
            <div
              key={num}
              className="bg-white rounded-xl p-5"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <span
                className="inline-block text-[10px] font-semibold px-2 py-1 rounded-md mb-4"
                style={{ background: "#fbeef1", color: WINE }}
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
      </div>
    </div>
  );
}