import React from "react";
import {
  ChevronRight,
  Headphones,
  Search,
  Compass,
  Rocket,
  TrendingUp,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const steps = [
  {
    num: "01",
    stage: "DISCOVERY",
    icon: Headphones,
    title: "Listen",
    body: "Engage campus leaders, educators, and administrators to uncover nuanced daily pain points and operational aspirations.",
    bullets: ["Stakeholder Discovery", "Pain-Point Mapping"],
  },
  {
    num: "02",
    stage: "DEEP-DIVE",
    icon: Search,
    title: "Understand",
    body: "Audit existing databases, legacy spreadsheets, and siloed software to map true departmental dependencies and compliance needs.",
    bullets: ["Workflow Analysis", "Data Interoperability"],
  },
  {
    num: "03",
    stage: "ARCHITECTURE",
    icon: Compass,
    title: "Design",
    body: "Architect unified data models and intuitive user journeys configured specifically around your academic calendar and governance.",
    bullets: ["Tailored Architecture", "User Journeys"],
  },
  {
    num: "04",
    stage: "DEPLOYMENT",
    icon: Rocket,
    title: "Implement",
    body: "Execute controlled phased migrations with parallel testing and high-touch staff enablement for immediate trust and comfort.",
    bullets: ["Phased Migration", "Staff Training"],
  },
  {
    num: "05",
    stage: "MOMENTUM",
    icon: TrendingUp,
    title: "Evolve",
    body: "Continuous performance reviews, automated updates, and capability expansions as campus demographics and pedagogy expand.",
    bullets: ["AI Optimization", "Long-Term Scaling"],
  },
];

const institutions = [
  {
    label: "Schools",
    body: "Support academics, attendance, communication and everyday classroom operations.",
    image: "Students working at a library table",
  },
  {
    label: "Colleges",
    body: "Manage academic and administrative requirements, registration, and courses with ease.",
    image: "Group studying together with laptops",
  },
  {
    label: "Universities",
    body: "Connect multiple departments, research functions and complex academic structures.",
    image: "Lab or lecture setting with monitors",
  },
  {
    label: "Multi-Campus Institutions",
    body: "Bring centralized visibility and synchronized coordination across all regional locations.",
    image: "Students in a shared campus hallway",
  },
];

function Eyebrow({ children }) {
  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold tracking-wide mb-4"
      style={{ color: WINE }}
    >
      <ChevronRight size={12} strokeWidth={3} />
      <span>{children}</span>
    </div>
  );
}

export default function MethodologyAndInstitutionsSections() {
  return (
    <div className="w-full font-sans" style={{ color: INK }}>
      {/* ---------- Section 1: Methodology ---------- */}
      <div style={{ background: "#f4f1ec" }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Eyebrow>OUR METHODOLOGY &amp; DELIVERY FRAMEWORK</Eyebrow>
          <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight mb-4 max-w-xl">
            We start with your institution, not a software checklist.
          </h2>
          <p className="text-[15px] leading-relaxed mb-10 max-w-xl" style={{ color: MUTED }}>
            A predictable, collaborative methodology engineered to modernize
            institutional processes with zero disruption to daily academic
            life.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map(({ num, stage, icon: Icon, title, body, bullets }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5 flex flex-col"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="w-7 h-7 flex items-center justify-center rounded-full text-[11px] font-semibold text-white"
                    style={{ background: WINE }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-[10px] font-semibold tracking-wide px-2 py-1 rounded-full"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    {stage}
                  </span>
                </div>

                <span
                  className="w-8 h-8 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>

                <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: MUTED }}>
                  {body}
                </p>

                <ul className="mt-auto space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs" style={{ color: MUTED }}>
                      <span
                        className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                        style={{ background: WINE }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Section 2: Institution types ---------- */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Eyebrow>SOLUTIONS FOR DIFFERENT EDUCATIONAL ENVIRONMENTS</Eyebrow>
          <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight mb-10 max-w-xl">
            Different institutions. Different priorities.
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {institutions.map(({ label, body, image }) => (
              <div key={label}>
                <div
                  className="rounded-xl w-full h-32 mb-4 flex items-center justify-center text-xs font-medium text-center px-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #e9e4e0 0%, #d8d2cd 100%)",
                    color: "#8a8378",
                  }}
                >
                  {image}
                </div>
                <h3 className="text-[15px] font-semibold mb-1.5">{label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
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