import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    tag: "01 Procurement",
    body: "Support purchasing activities and supplier coordination.",
  },
  {
    tag: "02 Inventory",
    body: "Maintain visibility across inventory information and requirements.",
  },
  {
    tag: "03 Supplier Management",
    body: "Support communication and collaboration with suppliers.",
  },
  {
    tag: "04 Logistics",
    body: "Manage logistics-related activities including shipment, route and freight processes.",
  },
];

export default function SupplyChainConnectSection() {
  return (
    <div style={{ background: "#f7f5f2", color: INK }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-14 items-center">
        {/* Left: image */}
        <div
          className="rounded-2xl w-full h-96 flex items-center justify-center text-sm font-medium"
          style={{
            background: "linear-gradient(135deg, #dfe3e6 0%, #c7ccd1 100%)",
            color: "#8a8fa0",
          }}
        >
          Warehouse team reviewing inventory tablet
        </div>

        {/* Right: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            SUPPLY CHAIN MANAGEMENT
          </p>
          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-5">
            Connect Procurement, Inventory and Logistics
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              Supply chain activities are an important part of FMCG
              operations. TechTorch's Supply Chain Management offering is
              designed to support processes from procurement to delivery.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
              The published capabilities include inventory visibility, order
              status, supplier performance, demand forecasting, supplier
              collaboration and logistics management, including route
              planning, shipment tracking and freight management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map(({ tag, body }) => (
              <div
                key={tag}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: WINE }}>
                  {tag}
                </p>
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