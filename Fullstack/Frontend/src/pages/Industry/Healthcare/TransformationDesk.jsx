import React from "react";
import { ArrowRight, CheckCircle2, Lock, Users } from "lucide-react";

const WINE = "#7A1F3D";

const trustItems = [
  { icon: CheckCircle2, label: "HIPAA & Data Privacy Aligned" },
  { icon: Lock, label: "Bilateral Mutual NDA" },
  { icon: Users, label: "Dedicated Clinical Engineering Pod" },
];

export default function HealthcareCtaBarSection() {
  return (
    <div style={{ background: WINE }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
              style={{ background: "rgba(255,255,255,0.12)", color: "#f3d9e2" }}
            >
              HEALTHCARE TRANSFORMATION DESK
            </span>
            <h2 className="text-2xl md:text-[1.6rem] leading-[1.25] font-bold tracking-tight text-white mb-2">
              Build a More Connected Healthcare
              <br />
              Environment
            </h2>
            <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#e3c3cf" }}>
              Bring healthcare operations, information and digital services
              together with technology designed around the way your
              organization works.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-sm font-medium whitespace-nowrap"
              style={{ color: WINE }}
            >
              Talk to Our Healthcare Experts
              <ArrowRight size={15} />
            </button>
            <button
              className="px-5 py-3 rounded-full text-sm font-medium border text-white whitespace-nowrap"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <Icon size={13} style={{ color: "#e3c3cf" }} />
                <span className="text-xs" style={{ color: "#e3c3cf" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}