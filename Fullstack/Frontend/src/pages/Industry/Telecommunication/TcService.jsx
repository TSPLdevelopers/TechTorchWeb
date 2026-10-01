import React from "react";
import { MapPin, Cloud, Shield, Briefcase, Monitor, Users } from "lucide-react";

const WINE = "#7A1F3D";

const cards = [
  {
    icon: MapPin,
    cap: "CAPABILITY 01",
    title: "IT Consultancy",
    body: "Technology guidance based on business requirements.",
  },
  {
    icon: Cloud,
    cap: "CAPABILITY 02",
    title: "Cloud Infrastructure",
    body: "Cloud infrastructure services for evolving IT requirements.",
  },
  {
    icon: Shield,
    cap: "CAPABILITY 03",
    title: "Cyber Security",
    body: "Technology services addressing cybersecurity requirements.",
  },
  {
    icon: Briefcase,
    cap: "CAPABILITY 04",
    title: "Artificial Intelligence",
    body: "AI services designed to support business requirements.",
  },
  {
    icon: Monitor,
    cap: "CAPABILITY 05",
    title: "Software Development & Support",
    body: "Development, deployment and ongoing software support.",
  },
  {
    icon: Users,
    cap: "CAPABILITY 06",
    title: "Resource & Staffing",
    body: "Skilled technology professionals and flexible workforce solutions.",
  },
];

export default function TechnologyServicesWineGridSection() {
  return (
    <div
      className="w-full font-sans"
      style={{
        background: "linear-gradient(135deg, #3d0d28 0%, #5c1730 60%, #3d0d28 100%)",
        color: "#fff",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-[11px] font-semibold tracking-widest mb-3" style={{ color: "#e3a9c1" }}>
          OUR TECHNOLOGY SERVICES
        </p>
        <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-3">
          Our Technology Services
        </h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "#d9b7c4" }}>
          Technology services designed to support your business and
          technology requirements.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, cap, title, body }) => (
            <div
              key={title}
              className="rounded-xl p-5 flex flex-col"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: "#d9b7c4" }}>
                {body}
              </p>
              <p className="mt-auto text-[10px] tracking-wide" style={{ color: "#a9738a" }}>
                {cap}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}