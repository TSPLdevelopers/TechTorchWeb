import React from "react";
import { FileText, CreditCard, Briefcase, Users, Globe, Code2, Cloud, ShieldCheck } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: FileText,
    title: "Financial Management",
    body: "Bring financial activities and information into a more organized digital environment to support everyday business operations.",
    tags: ["Financial Operations", "Records", "Reporting", "Data Management"],
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    body: "Support payment-related activities with technology that helps organize transactions and financial information.",
    tags: ["Payments", "Transactions", "Tracking", "Reporting"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    body: "Connect finance with other important business functions through an integrated ERP environment.",
    tags: ["Business Processes", "Finance", "Centralized Data", "Workflows"],
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a connected CRM environment designed around business needs.",
    tags: ["Customer Data", "Interactions", "Sales", "Service"],
  },
  {
    icon: Globe,
    title: "Web Portals",
    body: "Create digital portals that provide customers, partners or employees with easier access to relevant services and information.",
    tags: ["Web Applications", "Digital Access", "User Experience", "Integration"],
  },
  {
    icon: Code2,
    title: "Software Development",
    body: "Develop software around specific business requirements, whether you need a new application, system integration or modernization.",
    tags: ["Custom Software", "Web Applications", "Integration", "Modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Build a flexible technology foundation that supports changing operational and business requirements.",
    tags: ["Cloud Infrastructure", "Scalability", "Accessibility", "Support"],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    body: "Strengthen the security of business applications, systems and information through technology-focused security services.",
    tags: ["Data Protection", "System Security", "Access Management", "Support"],
  },
];

export default function CoreArchitectureGridSection() {
  return (
    <div style={{ background: "#f7f7fa", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 items-start">
          <div>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
              style={{ background: "#fbeef1", color: WINE }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
              TECHTORCH CORE ARCHITECTURE
            </span>
            <h2 className="text-2xl md:text-[1.8rem] leading-[1.25] font-bold tracking-tight">
              Digital Solutions Designed
              <br />
              <span style={{ color: WINE }}>Around Operational Precision</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed md:pt-2" style={{ color: MUTED }}>
            Every financial organization demands tailored compliance, speed,
            and reliability. TechTorch builds, modernizes, and deploys
            cohesive digital infrastructure engineered around your exact
            workflows.
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