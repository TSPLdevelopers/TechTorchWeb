import React from "react";
import { Eye, TrendingUp, Share2, Truck, Shield } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    icon: Eye,
    title: "End-to-End Visibility",
    body: "Access information across inventory, orders and supplier activities.",
  },
  {
    num: "02",
    icon: TrendingUp,
    title: "Demand Forecasting",
    body: "Support demand planning through forecasting and analytics.",
  },
  {
    num: "03",
    icon: Share2,
    title: "Supplier Collaboration",
    body: "Improve communication and coordination with suppliers.",
  },
  {
    num: "04",
    icon: Truck,
    title: "Logistics Management",
    body: "Support transportation, shipment tracking and logistics activities.",
  },
  {
    num: "05",
    icon: Shield,
    title: "Risk Management",
    body: "Identify supply chain risks and support planning around potential disruptions.",
  },
];

export default function SupplyChainManagementSection() {
  return (
    <div style={{ background: "#f2f2f5", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-8" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide px-3 py-1.5 rounded-full mb-4"
            style={{ background: "#fbeef1", color: WINE }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: WINE }} />
            SUPPLY CHAIN MANAGEMENT
          </span>

          <h2 className="text-3xl font-bold tracking-tight mb-4">
            From Procurement to Delivery
          </h2>

          <p className="text-sm leading-relaxed max-w-2xl mb-8" style={{ color: MUTED }}>
            A connected supply chain depends on visibility across
            procurement, inventory, suppliers, orders and logistics.
            TechTorch Supply Chain Management solutions are designed to
            support supply chain activities from procurement through
            delivery, helping businesses manage important information
            across their supply chain environment.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {cards.map(({ num, icon: Icon, title, body }) => (
              <div
                key={num}
                className="rounded-xl p-4 border"
                style={{ borderColor: "#ece9e4" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[10px] font-semibold px-2 py-1 rounded-md"
                    style={{ background: "#fbeef1", color: WINE }}
                  >
                    {num}
                  </span>
                  <Icon size={15} style={{ color: "#c9c4bc" }} />
                </div>
                <h3 className="text-sm font-semibold mb-1.5 leading-snug">{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}