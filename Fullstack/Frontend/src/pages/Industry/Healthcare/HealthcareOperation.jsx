import React from "react";
import { FlaskConical, Share2, FileText, Key } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

// ========================================
// 👇 APNI IMAGE URL YAHAN PASTE KAREIN
// ========================================
const IMAGE_URL = "/healthcare technology.png";

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
    <div
      className="w-full"
      style={{
        color: INK,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* =========================================
          SECTION 1: CORE HEALTHCARE OPERATIONS
      ========================================= */}
      <div style={{ background: "#f6f7fa" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

          <p
            className="text-[10px] sm:text-xs font-semibold tracking-wide mb-3"
            style={{ color: WINE }}
          >
            CORE HEALTHCARE OPERATIONS
          </p>

          <h2
            className="text-2xl sm:text-3xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-8"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Supporting the Functions Behind
            <br className="hidden sm:block" />
            Healthcare Delivery
          </h2>

          {/* Operations Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {operations.map(({ num, tag, title, body }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#c9c4bc" }}
                  >
                    {num}
                  </span>

                  <span
                    className="text-[9px] font-semibold tracking-wide px-2 py-1 rounded-full"
                    style={{
                      background: "#fbeef1",
                      color: WINE,
                    }}
                  >
                    {tag}
                  </span>
                </div>

                <h3
                  className="text-sm font-semibold mb-1.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {title}
                </h3>

                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: MUTED,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 2: CLINICAL WORKFLOWS
      ========================================= */}
      <div style={{ background: "#f4f1ec" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT: IMAGE */}
          <div className="w-full">
            <div
              className="relative w-full h-[260px] sm:h-[330px] md:h-[380px] rounded-2xl overflow-hidden"
              style={{
                border: `3px solid ${WINE}`,
              }}
            >
              <img
                src={IMAGE_URL}
                alt="Clinicians reviewing lab diagnostic screens"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT: COPY */}
          <div className="w-full">

            <p
              className="text-[10px] sm:text-xs font-semibold tracking-wide mb-3"
              style={{ color: WINE }}
            >
              CLINICAL &amp; DIAGNOSTIC TECHNOLOGY
            </p>

            <h2
              className="text-2xl sm:text-3xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-5"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Connect Clinical Workflows With Relevant Information
            </h2>

            <div className="space-y-3 mb-6">
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: MUTED,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Clinical and diagnostic activities generate information that
                needs to move between the appropriate teams and systems.
              </p>

              <p
                className="text-sm leading-relaxed"
                style={{
                  color: MUTED,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                TechTorch's healthcare solution includes laboratory
                management capabilities and integration with radiology,
                pharmacy and pathology systems, along with the sharing of
                reports and test results with patients and physicians.
              </p>
            </div>

            {/* Clinical Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clinicalFeatures.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="bg-white rounded-lg p-4"
                  style={{
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon
                      size={14}
                      style={{ color: WINE }}
                    />

                    <h3
                      className="text-xs font-semibold"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {title}
                    </h3>
                  </div>

                  <p
                    className="text-[11px] leading-relaxed"
                    style={{
                      color: MUTED,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
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