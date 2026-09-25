import React from "react";
import { Share2, LineChart, Briefcase, ArrowUpDown } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: Share2,
    title: "Centralized Data",
    body: "Bring important business information together across business functions.",
  },
  {
    icon: LineChart,
    title: "Reporting & Analytics",
    body: "Use integrated reporting and analytics to understand business information.",
  },
  {
    icon: Briefcase,
    title: "Process Automation",
    body: "Reduce repetitive manual activities through technology-supported processes.",
  },
  {
    icon: ArrowUpDown,
    title: "Scalable Solutions",
    body: "Adapt technology according to changing business requirements.",
  },
];

export default function BusinessVisibilitySection() {
  return (
    <div style={{ background: "#f5f6f8", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          BUSINESS VISIBILITY
        </p>
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Bring Business Information Together
        </h2>
        <p className="text-sm leading-relaxed max-w-xl mb-10" style={{ color: MUTED }}>
          Connected information can help teams work with a clearer view of
          business activities and support informed decision-making.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, body }) => (
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
  );
}