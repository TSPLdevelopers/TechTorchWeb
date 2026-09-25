import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const cards = [
  {
    num: "01",
    tag: "PROCUREMENT",
    body: "Manage purchasing and supplier activities.",
  },
  {
    num: "02",
    tag: "INVENTORY",
    body: "Maintain visibility across inventory information.",
  },
  {
    num: "03",
    tag: "LOGISTICS",
    body: "Support transportation, shipment and freight processes.",
  },
  {
    num: "04",
    tag: "SUPPLIER MANAGEMENT",
    body: "Improve coordination and communication with suppliers.",
  },
];

export default function SupplyChainProcurementSection() {
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
          Control room reviewing logistics dashboards
        </div>

        {/* Right: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            SUPPLY CHAIN &amp; LOGISTICS
          </p>
          <h2 className="text-3xl leading-[1.2] font-bold tracking-tight mb-5">
            Connect Procurement to Delivery
          </h2>
          <p className="text-[15px] leading-relaxed mb-8" style={{ color: MUTED }}>
            TechTorch's Supply Chain Management solution supports
            visibility across inventory, orders, suppliers and logistics,
            with capabilities including logistics management, shipment
            tracking, route planning and freight management.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {cards.map(({ num, tag, body }) => (
              <div
                key={num}
                className="bg-white rounded-xl p-5"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <p className="text-lg font-bold mb-1.5" style={{ color: WINE }}>
                  {num}
                </p>
                <p className="text-[11px] font-semibold tracking-wide mb-2" style={{ color: INK }}>
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