import React from "react";
import {
  Briefcase,
  Settings,
  Truck,
  Plane,
  Users,
  Monitor,
  Landmark,
  CreditCard,
  UserCheck,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

const WINE = "#7A1F3D";

const solutions = [
  { icon: Briefcase, label: "Enterprise Resource Planning" },
  { icon: Settings, label: "Operations Management" },
  { icon: Truck, label: "Supply Chain Management" },
  { icon: Plane, label: "Aviation Management" },
  { icon: Users, label: "People Resources" },
  { icon: Monitor, label: "Web Portals" },
  { icon: Landmark, label: "Financial Management" },
  { icon: CreditCard, label: "Payment Management" },
  { icon: UserCheck, label: "Customer Relationship Management" },
  { icon: ShoppingCart, label: "E-Commerce" },
  { icon: CheckCircle2, label: "Project Management" },
];

export default function DigitalSolutionsTagsSection() {
  return (
    <div style={{ background: WINE }} className="w-full font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[11px] font-semibold tracking-widest mb-4" style={{ color: "#f3d9e2" }}>
          DIGITAL SOLUTIONS
        </p>
        <h2 className="text-3xl leading-[1.2] font-bold tracking-tight text-white mb-5">
          Technology Connected With Business Operations
        </h2>
        <p className="text-[15px] leading-relaxed max-w-2xl mb-8" style={{ color: "#e3c3cf" }}>
          TechTorch provides digital solutions across different areas of
          business operations, helping organizations address their
          technology and operational requirements through connected digital
          systems.
        </p>

        <div className="flex flex-wrap gap-3">
          {solutions.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full text-white"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}