import React from "react";
import { ArrowRight, ShieldCheck, Activity, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const trustItems = [
  { icon: ShieldCheck, label: "HIPAA & HL7/FHIR Compliant" },
  { icon: Activity, label: "Real-Time Diagnostic Telemetry" },
  { icon: Lock, label: "Role-Based Clinical Security" },
];

export default function HealthcareHeroSection() {
  const navigate = useNavigate();
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <div>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-6"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            HEALTHCARE &amp; LIFE SCIENCES • CONNECTED CARE PLATFORMS
          </span>

          <h1 className="text-4xl md:text-[2.5rem] leading-[1.15] font-bold tracking-tight mb-6">
            Technology for More Connected Healthcare Operations
          </h1>

          <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
            Healthcare organizations manage patients, people, resources,
            information and daily operations across multiple functions. The
            right technology can help bring these activities together in a
            more organized and connected environment.
          </p>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch provides healthcare and hospital management solutions
            designed to support the operational needs of hospitals, clinics,
            diagnostic centers and other healthcare providers.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-medium"
              style={{ background: WINE }}
            >
              Talk to Our Healthcare Experts
              <ArrowRight size={16} />
            </button>
            <button
              className="px-6 py-3.5 rounded-full text-sm font-medium border"
              style={{ borderColor: "#d8d5d0", color: INK }}
              onClick={() => navigate("/healthcare-get-in-touch")}
            >
              Get in Touch
            </button>
          </div>

          <div className="border-t pt-4" style={{ borderColor: "#ece9e4" }}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Icon size={13} style={{ color: WINE }} />
                  <span className="text-xs" style={{ color: MUTED }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: image with floating status card */}
        <div className="relative">
          <div
            className="rounded-2xl w-full h-96 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #163a3e 100%)",
              color: "#8a8fa0",
            }}
          >
            Clinical team reviewing diagnostic monitors
          </div>

          <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <span
              className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <Activity size={16} />
            </span>
            <div className="flex-1">
              <p className="text-[10px] font-semibold tracking-wide" style={{ color: WINE }}>
                TORCHX HEALTHCARE SUITE
              </p>
              <p className="text-sm font-semibold">Centralized Hospital Telemetry Node</p>
            </div>
            <span
              className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0"
              style={{ background: "#e5f7ec", color: "#1a9455" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#1a9455" }} />
              Active Sync
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}