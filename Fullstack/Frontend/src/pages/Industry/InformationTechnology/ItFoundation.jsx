import React from "react";
import { ArrowRight, Shield, Lock, Heart } from "lucide-react";

const WINE = "#7A1F3D";

const trustItems = [
  { icon: Shield, label: "Strict IP Ownership" },
  { icon: Lock, label: "Mutual NDA Compliant" },
  { icon: Heart, label: "Transparent Engagement" },
];

export default function CreateTechnologyCtaSection() {
  return (
    <div
      className="w-full font-sans relative overflow-hidden"
      style={{ background: WINE }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
          style={{ background: "rgba(255,255,255,0.12)", color: "#f3d9e2" }}
        >
          BUILD YOUR TECHNOLOGY FOUNDATION
        </span>

        <h2 className="text-3xl md:text-[2.2rem] leading-[1.2] font-bold tracking-tight text-white mb-5">
          Let's Create Technology Around
          <br />
          Your Business
        </h2>

        <p className="text-sm leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "#e3c3cf" }}>
          Whether you are building a new application, modernizing an
          existing system, strengthening your IT environment or looking for
          ongoing technology support, TechTorch brings together the
          capabilities needed to address your business requirements.
        </p>

        <button
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-sm font-medium mb-8"
          style={{ color: WINE }}
        >
          Talk to Our Experts
          <ArrowRight size={16} />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
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
  );
}