import React from "react";
import { Monitor, Package, CreditCard, Users, LineChart } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

function Card({ num, icon: Icon, title, body }) {
  return (
    <div className="rounded-xl p-5 border" style={{ borderColor: "#ece9e4" }}>
      <div className="flex items-center justify-between mb-4">
        <span
          className="w-9 h-9 flex items-center justify-center rounded-lg"
          style={{ background: "#fbeef1", color: WINE }}
        >
          <Icon size={16} strokeWidth={1.8} />
        </span>
        <span className="text-lg font-bold" style={{ color: "#e3d3d9" }}>
          {num}
        </span>
      </div>
      <h3 className="text-sm font-semibold mb-1.5">{title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
        {body}
      </p>
    </div>
  );
}

export default function EcommerceCapabilitiesSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          E-COMMERCE CAPABILITIES
        </p>
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Key Capabilities for Your Online Business
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          <Card
            num="01"
            icon={Monitor}
            title="Storefront Design"
            body="Create responsive online storefronts that provide customers with an easy way to browse and interact with your business."
          />
          <Card
            num="02"
            icon={Package}
            title="Product Management"
            body="Manage product listings, inventory information, pricing and promotions through an organized platform."
          />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Card
            num="03"
            icon={CreditCard}
            title="Payment Processing"
            body="Support online transactions through payment gateway capabilities designed for the purchasing process."
          />
          <Card
            num="04"
            icon={Users}
            title="Customer Relationship Tools"
            body="Manage customer information, preferences and purchase history to support customer engagement and service."
          />
          <Card
            num="05"
            icon={LineChart}
            title="Analytics & Reporting"
            body="Review sales performance, customer trends and website activity through reporting and analytics."
          />
        </div>
      </div>
    </div>
  );
}