import React from "react";
import { ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Understand your business objectives, existing environment and technology requirements.",
  },
  {
    num: "02",
    title: "Design & Develop",
    body: "Plan and develop the solution around the identified requirements.",
  },
  {
    num: "03",
    title: "Test & Deploy",
    body: "Test the solution and prepare it for implementation.",
  },
  {
    num: "04",
    title: "Support & Maintain",
    body: "Provide ongoing maintenance and support as requirements evolve.",
  },
];

export default function ApproachAndImageCtaSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Our Approach ---------- */}
      <div style={{ background: "#f2f2f5" }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            OUR APPROACH
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            From Requirement to Support
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map(({ num, title, body }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <p
                  className="text-3xl font-bold mb-4"
                  style={{ color: "#e3d3d9" }}
                >
                  {num}
                </p>
                <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed mb-5" style={{ color: MUTED }}>
                  {body}
                </p>
                <div className="w-6 h-0.5" style={{ background: WINE }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Section 2: Full-bleed image CTA ---------- */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1c2230 0%, #2a2f3d 50%, #4a1230 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(30,10,25,0.55)" }}
        />

        <div className="relative max-w-2xl mx-auto px-6 py-20 text-center">
          <p
            className="text-[11px] font-semibold tracking-widest mb-5"
            style={{ color: "#e3c3cf" }}
          >
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-[2.2rem] leading-[1.2] font-bold tracking-tight text-white mb-6">
            Let's Build Technology Around
            <br />
            Your Business
          </h2>

          <div className="space-y-3 mb-8">
            <p className="text-sm leading-relaxed" style={{ color: "#e3c3cf" }}>
              Discuss your Energy business and technology requirements with
              the TechTorch team.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#e3c3cf" }}>
              Whether you need ERP, operations management, software
              development, cloud infrastructure, cybersecurity or other
              technology services, our team can discuss your requirements
              and the appropriate approach.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-sm font-medium"
              style={{ color: WINE }}
            >
              Get in Touch
              <ArrowRight size={15} />
            </button>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border text-white"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Talk to Our Experts
              <ArrowRight size={15} />
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}