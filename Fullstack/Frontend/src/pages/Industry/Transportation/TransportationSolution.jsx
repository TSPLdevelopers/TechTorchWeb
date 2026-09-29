import React from "react";
import { LayoutGrid, Settings, Truck, Landmark, User, GitBranch, Monitor, Code2 } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: LayoutGrid,
    title: "ERP",
    body: "Connect finance, people, customer relationships, inventory and supply chain within a unified business environment.",
  },
  {
    num: "02",
    icon: Settings,
    title: "Operations Management",
    body: "Organize and support day-to-day operational processes through connected digital solutions.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Supply Chain Management",
    body: "Manage supply chain activities across procurement, inventory, suppliers and logistics.",
  },
  {
    num: "04",
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial operations with organized information, reporting and business processes.",
  },
  {
    num: "05",
    icon: User,
    title: "CRM",
    body: "Manage customer information and interactions through a connected customer management environment.",
  },
  {
    num: "06",
    icon: GitBranch,
    title: "Project Management",
    body: "Support project planning, collaboration and workflow management across teams.",
  },
  {
    num: "07",
    icon: Monitor,
    title: "Web Portals",
    body: "Create digital portals for customers, employees and business users.",
  },
  {
    num: "08",
    icon: Code2,
    title: "Software Solutions",
    body: "Develop and integrate software around specific business requirements.",
  },
];

export default function TransportationSolutionsGridSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          TRANSPORTATION SOLUTIONS
        </p>
        <h2 className="text-3xl leading-[1.25] font-bold tracking-tight mb-10">
          Solutions Built Around Your
          <br />
          Business
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map(({ num, icon: Icon, title, body }) => (
            <div
              key={num}
              className="rounded-xl p-5 border"
              style={{ borderColor: "#ece9e4" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="w-10 h-10 flex items-center justify-center rounded-lg"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-2xl font-bold" style={{ color: "#e3d3d9" }}>
                  {num}
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
  );
}