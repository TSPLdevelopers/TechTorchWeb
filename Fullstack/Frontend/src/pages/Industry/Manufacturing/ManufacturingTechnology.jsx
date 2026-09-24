import React from "react";
import {
  Boxes,
  Truck,
  SlidersHorizontal,
  CreditCard,
  Users,
  UserCheck,
  Code2,
  Cloud,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Boxes,
    title: "Enterprise Resource Planning",
    body: "Connect inventory, finance, human resources, customer relationships and supply chain management through an integrated ERP environment.",
    tags: ["Inventory", "Finance", "Supply Chain"],
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    body: "Support supply chain activities across procurement, inventory, suppliers, orders and logistics.",
    tags: ["Procurement", "Suppliers", "Logistics"],
  },
  {
    icon: SlidersHorizontal,
    title: "Operations Management",
    body: "Support everyday operational processes through technology designed around business requirements.",
    tags: ["Operations", "Workflows"],
  },
  {
    icon: CreditCard,
    title: "Financial Management",
    body: "Manage financial activities and connect financial information with the wider business environment.",
    tags: ["Finance", "Records", "Reporting"],
  },
  {
    icon: Users,
    title: "People Resources",
    body: "Support workforce and human resource activities through digital solutions.",
    tags: ["People", "Workforce", "HR"],
  },
  {
    icon: UserCheck,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a connected CRM environment.",
    tags: ["Client Data", "Interactions"],
  },
  {
    icon: Code2,
    title: "Software Engineering",
    body: "Develop, integrate and modernize software around specific business requirements.",
    tags: ["Custom Software", "Modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud & IT Services",
    body: "Support your technology environment through cloud infrastructure, cybersecurity, artificial intelligence and other IT services.",
    tags: ["Cloud", "Security", "IT Services"],
  },
];

export default function ManufacturingSolutionsGridSection() {
  return (
    <div style={{ background: "#f4f1ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            MANUFACTURING SOLUTIONS
          </p>
          <h2 className="text-2xl md:text-[1.75rem] font-bold tracking-tight mb-3">
            Technology Built Around Your Business
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            Explore capabilities designed to connect operations and drive
            manufacturing agility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, body, tags }) => (
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
              <h3 className="text-sm font-semibold mb-2 leading-snug">{title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: MUTED }}>
                {body}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 rounded-md"
                    style={{ background: "#f2f1f5", color: MUTED }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}