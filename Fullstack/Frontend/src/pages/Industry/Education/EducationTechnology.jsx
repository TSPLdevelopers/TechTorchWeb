import React from "react";
import {
  ChevronRight,
  Target,
  PenTool,
  GraduationCap,
  Heart,
  FileCheck2,
  Check,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const personas = [
  {
    icon: Target,
    title: "Leadership",
    body: "Strategic clarity for institutional planning and cross-campus governance.",
    variant: "filled",
  },
  {
    icon: PenTool,
    title: "Faculty",
    body: "Less administrative overhead and frictionless gradebook management.",
    iconBg: "#e8f3ef",
    iconColor: "#2f8768",
  },
  {
    icon: GraduationCap,
    title: "Students",
    body: "Unified access to assignments, degree progress, and advisor guidance.",
    iconBg: "#eaf3e3",
    iconColor: "#5f8f3e",
  },
  {
    icon: Heart,
    title: "Parents",
    body: "Transparent visibility into academic milestones and fee schedules.",
    iconBg: "#fbf1de",
    iconColor: "#c08a2e",
  },
  {
    icon: FileCheck2,
    title: "Registrars",
    body: "Automated compliance, rapid transcript delivery, and auditable records.",
    iconBg: "#e6eef6",
    iconColor: "#3b6ea5",
  },
];

const meansList = [
  "Fewer repetitive tasks",
  "Easier access to information",
  "Better coordination between teams",
  "More organized records",
  "Faster access to reports",
  "Clearer communication",
  "Greater visibility across operations",
];

function Eyebrow({ children }) {
  return (
    <div
      className="flex items-center gap-1 text-xs font-semibold tracking-wide mb-4"
      style={{ color: WINE }}
    >
      <ChevronRight size={14} strokeWidth={3} />
      <span>{children}</span>
    </div>
  );
}

export default function PeopleAndWorkSections() {
  return (
    <div style={{ color: INK }} className="w-full font-sans">
      {/* ---------- Section 1: Personas ---------- */}
      <div className="bg-white max-w-6xl mx-auto px-6 py-20">
        <Eyebrow>TECHNOLOGY FOR THE PEOPLE BEHIND EDUCATION</Eyebrow>
        <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight mb-4 max-w-xl">
          Better experiences start with understanding every user.
        </h2>
        <p className="text-[15px] leading-relaxed mb-10 max-w-xl" style={{ color: MUTED }}>
          An education platform is only useful when it works well for the
          people using it.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {personas.map(({ icon: Icon, title, body, variant, iconBg, iconColor }) => (
            <div
              key={title}
              className="rounded-xl p-5 border"
              style={{ borderColor: "#ece9e4" }}
            >
              {variant === "filled" ? (
                <span
                  className="w-11 h-11 flex items-center justify-center rounded-full mb-4"
                  style={{ background: WINE, color: "#fff" }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
              ) : (
                <span
                  className="w-11 h-11 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: iconBg, color: iconColor }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
              )}
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Section 2: Less manual work ---------- */}
      <div style={{ background: "#f3f1ec" }}>
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[0.9fr_1.3fr_0.8fr] gap-8 items-start">
          {/* Image */}
          <div
            className="rounded-2xl w-full h-64 md:h-72 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #e9e4e0 0%, #d8d2cd 100%)",
              color: "#8a8378",
            }}
          >
            Two colleagues reviewing records
          </div>

          {/* Copy */}
          <div>
            <Eyebrow>LESS MANUAL WORK, MORE MEANINGFUL WORK</Eyebrow>
            <h2 className="text-2xl leading-[1.2] font-semibold tracking-tight mb-4">
              Give your teams more time for what matters.
            </h2>
            <p className="text-[15px] leading-relaxed mb-4" style={{ color: MUTED }}>
              Manual processes often become part of an institution simply
              because they have always been there. But as an organization
              grows, repeated data entry, paper-based records, scattered
              files and separate systems can consume valuable time.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              TechTorch helps identify where technology can remove
              unnecessary steps and create simpler workflows.
            </p>
          </div>

          {/* This can mean card */}
          <div className="bg-white rounded-xl p-5">
            <p className="text-xs font-semibold tracking-wide mb-4" style={{ color: "#8a8378" }}>
              THIS CAN MEAN:
            </p>
            <ul className="space-y-3">
              {meansList.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check size={15} className="shrink-0 mt-0.5" style={{ color: WINE }} />
                  <span style={{ color: INK }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}