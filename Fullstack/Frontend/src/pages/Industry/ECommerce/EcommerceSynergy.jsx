import React from "react";
import { ClipboardList, Truck, Landmark, Users, RefreshCw } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    icon: ClipboardList,
    title: "ERP",
    body: "Connect e-commerce requirements with broader business processes.",
    footer: "SYNCHRONIZED DATA",
  },
  {
    icon: Truck,
    title: "Inventory & Supply Chain",
    body: "Bring product and inventory information closer to your wider business operations.",
    footer: "UNIFIED INVENTORY",
  },
  {
    icon: Landmark,
    title: "Financial Management",
    body: "Support financial processes related to business activities.",
    footer: "LEDGER ALIGNMENT",
  },
  {
    icon: Users,
    title: "CRM",
    body: "Manage customer information and relationships through connected systems.",
    footer: "CUSTOMER INSIGHTS",
  },
];

export default function EnterpriseSynergySection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            ENTERPRISE SYNERGY
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Connect E-Commerce With Your Business
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            E-commerce can work alongside other business functions such as
            inventory, finance, CRM and supply chain management. TechTorch's
            wider Digital Solutions portfolio includes ERP, Supply Chain
            Management, Financial Management, Payment Management, CRM, Web
            Portals and Project Management, providing a broader technology
            environment around online business requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, body, footer }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5 flex flex-col"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
            >
              <span
                className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                style={{ background: "#fbeef1", color: WINE }}
              >
                <Icon size={16} strokeWidth={1.8} />
              </span>
              <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed mb-6" style={{ color: MUTED }}>
                {body}
              </p>
              <div className="mt-auto flex items-center gap-1.5">
                <span className="text-[10px] font-semibold tracking-wide" style={{ color: WINE }}>
                  {footer}
                </span>
                <RefreshCw size={11} style={{ color: WINE }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}