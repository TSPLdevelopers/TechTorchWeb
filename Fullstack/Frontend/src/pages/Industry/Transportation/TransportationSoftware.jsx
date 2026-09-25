import React from "react";

const capabilities = [
  { num: "01", title: "Custom Software" },
  { num: "02", title: "Web & Mobile Applications" },
  { num: "03", title: "Enterprise Software" },
  { num: "04", title: "API & System Integration" },
  { num: "05", title: "Software Modernization" },
  { num: "06", title: "Testing & Quality Assurance" },
  { num: "07", title: "Maintenance & Support" },
];

export default function SoftwareCapabilitiesGridSection() {
  return (
    <div
      className="w-full font-sans"
      style={{ background: "#3d0d28", color: "#fff" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <span
          className="inline-flex items-center text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
          style={{ background: "rgba(255,255,255,0.1)", color: "#e3c3cf" }}
        >
          SOFTWARE &amp; ENGINEERING
        </span>

        <h2 className="text-3xl md:text-[2.2rem] leading-[1.2] font-bold tracking-tight mb-4">
          Build Technology Around Your Requirements
        </h2>

        <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: "#d9b7c4" }}>
          When existing systems need improvement or new applications are
          required, TechTorch provides software engineering across the
          development lifecycle.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map(({ num, title }) => (
            <div
              key={num}
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="text-[10px] font-semibold tracking-wide mb-4" style={{ color: "#c48fa4" }}>
                CAPABILITY {num}
              </p>
              <h3 className="text-sm font-semibold leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}