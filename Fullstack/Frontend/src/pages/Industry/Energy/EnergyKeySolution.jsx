import React from "react";
import { Share2, Settings, CreditCard, Users, GitBranch, Monitor, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: Share2,
    title: "ERP",
    body: "Connect business functions such as finance, human resources, customer relations, inventory and supply chain management through an integrated system.",
  },
  {
    icon: Settings,
    title: "Operations Management",
    body: "Support, monitor and improve business operations through digital solutions.",
  },
  {
    icon: CreditCard,
    title: "Financial Management",
    body: "Manage financial operations and business information through digital financial solutions.",
  },
  {
    icon: Users,
    title: "CRM",
    body: "Manage customer information and interactions through a dedicated CRM solution.",
  },
  {
    icon: GitBranch,
    title: "Project Management",
    body: "Support collaboration, workflows and project activities through digital project management solutions.",
  },
  {
    icon: Monitor,
    title: "Web Portals",
    body: "Create digital portals for customers, partners and employees.",
  },
];

export default function KeySolutionsExploreGridSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          KEY SOLUTIONS
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-10">
          Technology for Core Business Functions
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-b-xl p-5 flex flex-col border-t-4"
              style={{
                background: "#f7f7fa",
                borderTopColor: WINE,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-semibold mb-2">{title}</h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: MUTED }}>
                {body}
              </p>
              <span
                className="mt-auto inline-flex items-center gap-1 text-xs font-medium"
                style={{ color: WINE }}
              >
                Explore Solution
                <ArrowRight size={12} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}