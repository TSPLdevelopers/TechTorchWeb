import React from "react";
import {
  User,
  ClipboardList,
  Package,
  CreditCard,
  FlaskConical,
  Smartphone,
  BarChart2,
  Lock,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: User,
    title: "Patient Management",
    body: "Manage patient information and everyday patient-related activities through a centralized digital environment.",
    tags: ["Patient Registration", "Records", "Appointments", "Queue Management"],
  },
  {
    icon: ClipboardList,
    title: "Staff & Operations",
    body: "Support healthcare workforce and operational activities through organized digital processes.",
    tags: ["Staff Records", "Payroll", "Shift Scheduling", "Duty Rosters"],
  },
  {
    icon: Package,
    title: "Inventory & Supplies",
    body: "Maintain visibility across medical supplies, equipment and procurement activities.",
    tags: ["Inventory Tracking", "Procurement", "Vendor Management", "Supply Monitoring"],
  },
  {
    icon: CreditCard,
    title: "Billing & Finance",
    body: "Support billing, payment and financial activities through structured digital workflows.",
    tags: ["Patient Billing", "Payments", "Financial Records", "Reporting"],
  },
  {
    icon: FlaskConical,
    title: "Clinical & Laboratory",
    body: "Connect laboratory and diagnostic workflows with relevant healthcare systems and information.",
    tags: ["Laboratory Workflows", "Diagnostic Reports", "System Integration", "Information Sharing"],
  },
  {
    icon: Smartphone,
    title: "Patient Engagement",
    body: "Provide digital channels that support patient access, communication and engagement.",
    tags: ["Patient Portals", "Virtual Consultations", "Reminders", "Follow-Ups"],
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    body: "Bring operational information into dashboards and reports to support better visibility.",
    tags: ["Dashboards", "Analytics", "Reporting", "Operational Insights"],
  },
  {
    icon: Lock,
    title: "Security & Access",
    body: "Support controlled access and responsible management of healthcare information.",
    tags: ["Role-Based Access", "Data Protection", "Audit Trails", "Security Controls"],
  },
];

export default function HealthcareSolutionsGridSection() {
  return (
    <div style={{ background: "#f7f7fa", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
              EXPLORE HEALTHCARE SOLUTIONS
            </p>
            <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight">
              Digital Solutions Built Around Healthcare Operations
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed md:pt-6" style={{ color: MUTED }}>
            Healthcare organizations have different workflows, teams and
            operational requirements. Our solutions are designed to support
            essential healthcare functions while keeping information and
            processes better connected.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
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

        {/* Footer note */}
        <p className="text-center text-xs" style={{ color: "#a29b8f" }}>
          These solution areas are based on the capabilities TechTorch currently documents for Healthcare &amp; Hospital Management.
        </p>
      </div>
    </div>
  );
}