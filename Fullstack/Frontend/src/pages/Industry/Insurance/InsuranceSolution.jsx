import React from "react";
import { Users, FileText, CreditCard, Briefcase, Code2, Cloud } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const solutions = [
  {
    icon: Users,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a structured digital environment that supports consistent relationship management.",
    bullets: ["Customer Information", "Relationship Management", "Communication", "Service Management"],
  },
  {
    icon: FileText,
    title: "Financial Management",
    body: "Improve control and visibility across financial activities with connected systems for managing information, transactions and reporting.",
    bullets: ["Financial Operations", "Transaction Management", "Financial Records", "Business Reporting"],
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    body: "Support payment-related operations with digital processes that provide better organization, visibility and control over transactions.",
    bullets: ["Payment Processing", "Transaction Management", "Payment Information", "Reporting"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    body: "Connect core business functions through an integrated technology environment that supports centralized information and coordinated operations.",
    bullets: ["Process Integration", "Centralized Data", "Workflow Management", "Business Analytics"],
  },
  {
    icon: Code2,
    title: "Software Development",
    body: "Develop and modernize digital applications according to your organization's specific business and technology requirements.",
    bullets: ["Custom Software", "Web Applications", "Enterprise Applications", "System Integration"],
  },
  {
    icon: Cloud,
    title: "Cloud & Cybersecurity",
    body: "Establish a reliable technology foundation with scalable infrastructure and security-focused solutions for your digital environment.",
    bullets: ["Cloud Infrastructure", "Cybersecurity", "Data Protection", "Technical Support"],
  },
];

export default function InsuranceSolutionsGridSection() {
  return (
    <div style={{ background: "#f5f2ec", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-14 items-start">
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-5"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
              INSURANCE SOLUTIONS
            </span>
            <h2 className="text-3xl leading-[1.15] font-bold tracking-tight">
              Connected Technology for Insurance Businesses
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed md:pt-2" style={{ color: MUTED }}>
            Technology should support the way your organization operates.
            TechTorch helps bring essential business functions, information
            and digital systems together through solutions designed around
            specific operational requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {solutions.map(({ icon: Icon, title, body, bullets }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <span
                className="w-10 h-10 flex items-center justify-center rounded-lg mb-5"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
                {body}
              </p>
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: INK }}>
                    <span
                      className="w-1 h-1 rounded-full mt-2 shrink-0"
                      style={{ background: WINE }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}