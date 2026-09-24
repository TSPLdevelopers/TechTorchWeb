import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Custom Software Development",
    body: "Purpose-built applications designed around specific business requirements.",
  },
  {
    num: "02",
    title: "Web & Mobile Applications",
    body: "Responsive digital applications focused on usability, functionality and performance.",
  },
  {
    num: "03",
    title: "Enterprise Software",
    body: "Business systems such as ERP, CRM and HR management solutions.",
  },
  {
    num: "04",
    title: "API & System Integration",
    body: "Connect applications and platforms to support reliable data exchange.",
  },
  {
    num: "05",
    title: "Software Modernization",
    body: "Improve existing applications through modern architectures and technologies.",
  },
  {
    num: "06",
    title: "Quality Assurance & Testing",
    body: "Functional, performance, security and usability testing before deployment.",
  },
  {
    num: "07",
    title: "Maintenance & Support",
    body: "Ongoing updates, improvements and technical assistance after deployment.",
  },
];

export default function SoftwareEngineeringTimelineSection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14">
        {/* Left: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            SOFTWARE ENGINEERING
          </p>
          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-5">
            From Business Requirements to Working Solutions
          </h2>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: MUTED }}>
            Effective software begins with a clear understanding of what
            the business needs. TechTorch provides software engineering
            across the development lifecycle — from requirement analysis
            and solution design to development, testing, deployment and
            ongoing support.
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full border bg-white"
            style={{ color: WINE, borderColor: "#f0d6de" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            OUR CAPABILITIES
          </span>
        </div>

        {/* Right: vertical timeline list */}
        <div className="relative pl-4 border-l-2" style={{ borderColor: WINE }}>
          <div className="flex flex-col gap-4">
            {steps.map(({ num, title, body }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-4 flex items-start gap-3 relative"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <span
                  className="w-7 h-7 flex items-center justify-center rounded-full text-[11px] font-semibold text-white shrink-0 -ml-[26px]"
                  style={{ background: WINE }}
                >
                  {num}
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
    </div>
  );
}