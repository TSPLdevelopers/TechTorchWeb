import React from "react";
import { FlaskConical, Share2, FileText, Key } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const operations = [
  {
    num: "01",
    tag: "Centralized Intake",
    title: "Patient Operations",
    body: "Organize registration, patient information, appointments and related activities within a connected environment.",
  },
  {
    num: "02",
    tag: "Staff Roster",
    title: "Workforce Management",
    body: "Support staff information, payroll, scheduling and day-to-day workforce requirements.",
  },
  {
    num: "03",
    tag: "Inventory Visibility",
    title: "Resource Management",
    body: "Manage information related to medical supplies, equipment, procurement and vendors.",
  },
  {
    num: "04",
    tag: "Fiscal Accuracy",
    title: "Financial Operations",
    body: "Support patient billing, payments and financial reporting requirements.",
  },
  {
    num: "05",
    tag: "Diagnostic Integrity",
    title: "Clinical Workflows",
    body: "Connect laboratory and diagnostic activities with relevant information and systems.",
  },
];

const clinicalFeatures = [
  {
    icon: FlaskConical,
    title: "Laboratory Management",
    body: "Support diagnostic workflows and related information.",
  },
  {
    icon: Share2,
    title: "System Integration",
    body: "Connect relevant clinical systems and departments.",
  },
  {
    icon: FileText,
    title: "Report Management",
    body: "Organize and share diagnostic reports and results.",
  },
  {
    icon: Key,
    title: "Information Access",
    body: "Provide relevant information to authorized users.",
  },
];

export default function CoreOperationsAndClinicalSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Core Healthcare Operations ---------- */}
      <div style={{ background: "#f6f7fa" }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            CORE HEALTHCARE OPERATIONS
          </p>
          <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-8">
            Supporting the Functions Behind
            <br />
            Healthcare Delivery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {operations.map(({ num, tag, title, body }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold" style={{ color: "#c9c4bc" }}>
                    {num}
                  </span>
                  <span
                    className="text-[9px] font-semibold tracking-wide px-2 py-1 rounded-full"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    {tag}
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

      {/* ---------- Section 2: Clinical Workflows ---------- */}
      <div style={{ background: "#f4f1ec" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: image */}
          <div
            className="rounded-2xl w-full h-80 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #1c2230 0%, #2a2f3d 55%, #163a3e 100%)",
              color: "#8a8fa0",
            }}
          >
            Clinicians reviewing lab diagnostic screens
          </div>

          {/* Right: copy */}
          <div>
            <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
              CLINICAL &amp; DIAGNOSTIC TECHNOLOGY
            </p>
            <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-5">
              Connect Clinical Workflows With Relevant Information
            </h2>

            <div className="space-y-3 mb-6">
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                Clinical and diagnostic activities generate information that
                needs to move between the appropriate teams and systems.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                TechTorch's healthcare solution includes laboratory
                management capabilities and integration with radiology,
                pharmacy and pathology systems, along with the sharing of
                reports and test results with patients and physicians.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {clinicalFeatures.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-lg p-4"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={14} style={{ color: WINE }} />
                    <h3 className="text-xs font-semibold">{title}</h3>
                  </div>
                  <p className="text-[11px] leading-relaxed" style={{ color: MUTED }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}