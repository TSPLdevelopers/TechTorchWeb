import React from "react";
import { Check } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const items = [
  {
    title: "Business-Aligned",
    body: "Technology shaped around your business requirements.",
  },
  {
    title: "Connected",
    body: "Solutions designed to work across applications, systems and business functions.",
  },
  {
    title: "Flexible",
    body: "Technology that can adapt to changing requirements.",
  },
  {
    title: "Scalable",
    body: "Solutions designed with future business needs in mind.",
  },
  {
    title: "Supported",
    body: "Continued assistance across development, deployment and ongoing technology needs.",
  },
];

export default function WhyTechTorchChecklistSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: heading */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            WHY TECHTORCH
          </p>
          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight">
            Technology With a
            <br />
            Clear Business Focus
          </h2>
        </div>

        {/* Right: checklist */}
        <div className="flex flex-col gap-3">
          {items.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ background: "#f6f7fa" }}
            >
              <span
                className="w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5"
                style={{ background: WINE, color: "#fff" }}
              >
                <Check size={13} strokeWidth={3} />
              </span>
              <div>
                <h3 className="text-sm font-semibold mb-1">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}