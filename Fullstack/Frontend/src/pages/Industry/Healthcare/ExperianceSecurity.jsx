import React from "react";
import { User, Video, Bell, Smartphone, Shield, Lock, ClipboardCheck, LineChart } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const patientFeatures = [
  {
    icon: User,
    title: "Patient Portals",
    body: "Provide digital access to relevant patient information and services.",
  },
  {
    icon: Video,
    title: "Virtual Consultations",
    body: "Support remote interactions between patients and healthcare professionals.",
  },
  {
    icon: Bell,
    title: "Notifications",
    body: "Help communicate appointments, reminders and follow-up information.",
  },
  {
    icon: Smartphone,
    title: "Digital Access",
    body: "Make relevant healthcare information available through digital channels.",
  },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Role-Based Access",
    body: "Control system access according to user responsibilities.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    body: "Support the secure handling of healthcare information.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit Trails",
    body: "Maintain records of relevant system activity.",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    body: "Use dashboards and reports to understand operational information.",
  },
];

export default function PatientExperienceAndSecuritySections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Digital Patient Experience ---------- */}
      <div style={{ background: "#f6f7fa" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            DIGITAL PATIENT EXPERIENCE
          </p>
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-4">
            Make Healthcare Access More Connected
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: MUTED }}>
            Digital services can help healthcare providers extend
            communication and access beyond the physical facility.
            TechTorch's documented healthcare capabilities include patient
            portals, virtual consultations, automated reminders and
            follow-up communication.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {patientFeatures.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
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

      {/* ---------- Section 2: Data & Security ---------- */}
      <div style={{ background: WINE }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: "#f3d9e2" }}>
            DATA &amp; SECURITY
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight text-white mb-4">
            Manage Healthcare Information With
            <br />
            Greater Control
          </h2>
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-sm leading-relaxed" style={{ color: "#e3c3cf" }}>
              Healthcare organizations work with information that requires
              appropriate access and protection. Technology should provide
              structured controls while making relevant information
              accessible to authorized users.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#e3c3cf" }}>
              TechTorch's published healthcare solution includes role-based
              access, data encryption and audit trails, together with
              reporting and analytics capabilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {securityFeatures.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl p-5"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
                <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#d9b7c4" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}