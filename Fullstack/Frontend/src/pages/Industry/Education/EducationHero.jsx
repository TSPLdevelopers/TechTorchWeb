import React from "react";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Landmark,
  Users,
} from "lucide-react";

const WINE = "#7A1F3D";
const WINE_DARK = "#5C1730";
const INK = "#1B1B2A";

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

function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`flex items-center justify-center text-sm font-medium ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #e9e4e0 0%, #d8d2cd 100%)",
        color: "#8a8378",
      }}
    >
      {label}
    </div>
  );
}

const roleCards = [
  { label: "Students", icon: GraduationCap },
  { label: "Faculty", icon: Briefcase },
  { label: "Administration", icon: Landmark },
  { label: "Parents", icon: Users },
];

export default function EducationSection() {
  return (
    <div style={{ background: "#faf8f6", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">
        {/* ---------- Section 1 ---------- */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: copy */}
          <div>
            <Eyebrow>EDUCATION</Eyebrow>
            <h1 className="text-4xl md:text-[2.75rem] leading-[1.1] font-semibold tracking-tight mb-5">
              Technology That Helps Education Move Forward
            </h1>
            <p className="font-semibold mb-4" style={{ color: WINE }}>
              Helping institutions create simpler, smarter and more connected
              ways of working.
            </p>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#5b5a63" }}>
              Education is built around people — students, educators,
              administrators and families. The technology supporting them
              should make their everyday experience easier, not more
              complicated.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium transition-colors"
                style={{ background: WINE }}
                onMouseOver={(e) => (e.currentTarget.style.background = WINE_DARK)}
                onMouseOut={(e) => (e.currentTarget.style.background = WINE)}
              >
                Explore Education Solutions
                <ArrowRight size={16} />
              </button>
              <button
                className="px-5 py-3 rounded-md text-sm font-medium border"
                style={{ borderColor: "#d8d5d0", color: INK }}
              >
                Talk to Our Experts
              </button>
            </div>
          </div>

          {/* Right: image + floating stat card */}
          <div className="relative">
            <ImagePlaceholder
              label="Meeting room — team reviewing dashboard"
              className="rounded-3xl w-full h-80 md:h-96"
            />
            <div className="absolute -bottom-6 right-4 md:right-8 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 max-w-[240px]">
              <CheckCircle2 size={20} style={{ color: WINE }} className="shrink-0" />
              <div>
                <p className="text-xs font-semibold leading-tight">
                  TechTorch Campus OS
                </p>
                <p className="text-xs leading-tight" style={{ color: "#8a8378" }}>
                  <span className="font-semibold" style={{ color: INK }}>
                    99.4% User Adoption
                  </span>
                  <br />
                  Across 40+ Higher-Ed Campuses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Section 2 ---------- */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: image + floating role list */}
          <div className="relative">
            <ImagePlaceholder
              label="Students collaborating at a table"
              className="rounded-3xl w-full h-80 md:h-96"
            />
            <div className="absolute top-6 left-4 md:left-6 bg-white rounded-xl shadow-lg p-2 space-y-1 w-44">
              {roleCards.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-2 py-2 rounded-lg"
                >
                  <span
                    className="w-6 h-6 flex items-center justify-center rounded-md shrink-0"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    <Icon size={14} />
                  </span>
                  <span className="text-xs font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <Eyebrow>BRINGING EVERY PART OF YOUR INSTITUTION CLOSER TOGETHER</Eyebrow>
            <h2 className="text-3xl md:text-4xl leading-[1.15] font-semibold tracking-tight mb-5">
              One institution. Many activities. One connected approach.
            </h2>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "#5b5a63" }}>
              An educational institution has many moving parts. Students need
              access to information. Teachers manage academic
              responsibilities. Administrators handle records and processes.
              Management needs visibility. Parents want timely communication.
            </p>
            <p className="text-[15px] leading-relaxed mb-8" style={{ color: "#5b5a63" }}>
              When these activities depend on disconnected systems, even
              simple tasks can become difficult to manage.
            </p>
            <div
              className="rounded-lg px-5 py-4 border-l-4 text-sm leading-relaxed"
              style={{ background: "#fdf1f3", borderColor: WINE, color: INK }}
            >
              TechTorch brings a connected approach to education technology,
              helping institutions organize important processes and
              information within a more unified digital environment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}