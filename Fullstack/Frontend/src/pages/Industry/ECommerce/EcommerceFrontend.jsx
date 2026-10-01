import React from "react";
import { ShoppingBag, Package, IdCard, Smartphone } from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const features = [
  {
    icon: ShoppingBag,
    title: "Easy Store Experience",
    body: "Provide a clear and responsive environment for browsing products.",
  },
  {
    icon: Package,
    title: "Organized Product Information",
    body: "Keep product listings, pricing and promotions organized.",
  },
  {
    icon: IdCard,
    title: "Connected Customer Information",
    body: "Bring customer preferences and purchase history into your business environment.",
  },
  {
    icon: Smartphone,
    title: "Responsive Access",
    body: "Support online access across different devices.",
  },
];

export default function ShoppingExperienceSection() {
  return (
    <div style={{ background: "#f5f6f8", color: INK }} className="w-full font-sans">
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: image with floating caption */}
        <div className="relative">
          <div
            className="rounded-2xl w-full h-72 flex items-center justify-center text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #dfe3e6 0%, #c7ccd1 100%)",
              color: "#8a8fa0",
            }}
          >
            Warehouse staff verifying dispatch inventory
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg px-4 py-3" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] font-semibold tracking-wide mb-1" style={{ color: WINE, background: "#fbeef1", display: "inline-block", padding: "2px 8px", borderRadius: 4 }}>
              FULFILLMENT INTEGRATION
            </p>
            <p className="text-sm font-semibold">Real-time inventory verification at dispatch</p>
          </div>
        </div>

        {/* Right: copy */}
        <div>
          <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
            FRONT-END PRECISION
          </p>
          <h2 className="text-2xl leading-[1.25] font-bold tracking-tight mb-4">
            Create a Better Online Shopping Experience
          </h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
            A well-structured digital storefront helps customers find
            products, understand information and interact with your
            business across different devices.
          </p>

          <div className="flex flex-col gap-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-lg p-4 flex items-start gap-3"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
              >
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-lg shrink-0"
                  style={{ background: "#fbeef1", color: WINE }}
                >
                  <Icon size={15} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold mb-0.5">{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}