import React from "react";
import { LayoutGrid, Share2, Layers, Landmark, UserPlus, CreditCard, Monitor, CheckSquare } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: LayoutGrid,
    title: "ERP",
    body: "Bring core business processes together through an integrated ERP environment covering areas such as inventory, finance, human resources, customer relationships and supply chain management.",
  },
  {
    num: "02",
    icon: Share2,
    title: "Operations Management",
    body: "Support and organize operational processes through technology designed around your business workflows.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Supply Chain Management",
    body: "Connect supply chain activities from procurement through delivery, with visibility across inventory, orders, suppliers and logistics.",
  },
  {
    num: "04",
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial operations with organized information, financial processes and reporting capabilities.",
  },
  {
    num: "05",
    icon: UserPlus,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a connected CRM environment.",
  },
  {
    num: "06",
    icon: CreditCard,
    title: "E-Commerce",
    body: "Support online business activities through digital commerce solutions for managing online stores and customer experiences.",
  },
  {
    num: "07",
    icon: Monitor,
    title: "Web Portals",
    body: "Create digital portals that provide access to information and services for customers, employees and business users.",
  },
  {
    num: "08",
    icon: CheckSquare,
    title: "Project Management",
    body: "Support project planning, collaboration and workflow management through structured digital solutions.",
  },
];

export default function OurSolutionsGridSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          OUR SOLUTIONS
        </p>
        <h2 className="text-3xl font-bold tracking-tight mb-10">
          Solutions Built Around Your Business
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
                  className="text-[10px] font-semibold px-2 py-1 rounded-md"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  {num}
                </span>
                <span
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="text-sm font-semibold mb-2 leading-snug">{title}</h3>
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