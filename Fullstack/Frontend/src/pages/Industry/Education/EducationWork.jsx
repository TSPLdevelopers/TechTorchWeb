import React from "react";
import {
  ChevronRight,
  User,
  ClipboardList,
  Hexagon,
  TrendingUp,
  Monitor,
  MessageSquare,
  Landmark,
  BarChart3,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const solutions = [
  {
    icon: User,
    title: "Student Management",
    body: "Keep records, progression pathways, and student profiles unified across faculties and semesters.",
  },
  {
    icon: ClipboardList,
    title: "Admissions & Enrollment",
    body: "Streamline digital applications, document verification, and registration queues end-to-end.",
  },
  {
    icon: Hexagon,
    title: "Academic Scheduling",
    body: "Coordinate modular timetables, room allocation, faculty workloads, and examination tracks.",
  },
  {
    icon: TrendingUp,
    title: "Smart Attendance",
    body: "Capture real-time participation across lecture halls, laboratory sections, and virtual classrooms.",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    body: "Centralize rich course content, collaborative assignments, and assessment rubrics in one portal.",
  },
  {
    icon: MessageSquare,
    title: "Connected Communication",
    body: "Deliver immediate alerts, institutional announcements, and direct advisor touchpoints.",
  },
  {
    icon: Landmark,
    title: "Finance & Tuition",
    body: "Manage fee structures, automated installment tracking, scholarships, and departmental budgets.",
  },
  {
    icon: BarChart3,
    title: "Executive Analytics",
    body: "Generate compliance reporting, accreditation analytics, and retention intelligence instantly.",
  },
];

export default function SolutionsGridSection() {
  return (
    <div style={{ background: "#f3f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-14">
        {/* Left: copy */}
        <div>
          <div
            className="flex items-center gap-1 text-xs font-semibold tracking-wide mb-4"
            style={{ color: WINE }}
          >
            <ChevronRight size={14} strokeWidth={3} />
            <span>BUILT AROUND THE WAY EDUCATION WORKS</span>
          </div>
          <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight mb-5">
            Technology that supports real institutional needs.
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            We believe education technology should adapt to the organization
            using it. Instead of treating every institution the same, our
            approach considers its existing processes, people, systems and
            future requirements.
          </p>
          <p
            className="text-xs font-semibold tracking-wide"
            style={{ color: "#8a8378" }}
          >
            OUR SOLUTIONS CAN SUPPORT KEY AREAS SUCH AS:
          </p>
        </div>

        {/* Right: card grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
            >
              <span
                className="w-11 h-11 flex items-center justify-center rounded-xl shrink-0"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold mb-1.5">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}