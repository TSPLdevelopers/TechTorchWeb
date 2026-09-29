import React from "react";
import { Headphones, Cloud, ShieldCheck, Bot, FileCode, Briefcase, Share2 } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Headphones,
    title: "IT Consultancy",
    body: "Technology guidance based on business and digital requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Cloud infrastructure services to support evolving IT requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "Cybersecurity services focused on protecting digital assets and technology environments.",
  },
  {
    icon: Bot,
    title: "Artificial Intelligence",
    body: "AI as a Service for business and technology requirements.",
  },
  {
    icon: FileCode,
    title: "Software Development & Support",
    body: "End-to-end software development and ongoing support.",
  },
  {
    icon: Briefcase,
    title: "Resource & Staffing",
    body: "Skilled technology professionals and flexible workforce solutions.",
  },
];

export default function TechnologyServicesGridSection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          TECHNOLOGY SERVICES
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-10">
          Support Across Your Technology Environment
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
          {cards.map(({ icon: Icon, title, body }) => (
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

        {/* Full-width BPO card */}
        <div
          className="bg-white rounded-xl p-6 flex items-center gap-4 border-t-4"
          style={{ borderTopColor: WINE, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
        >
          <span
            className="w-10 h-10 flex items-center justify-center rounded-lg shrink-0"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <Share2 size={18} strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-sm font-semibold mb-1">Business Process Outsourcing</h3>
            <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
              Technology-enabled support for selected business processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}