import React from "react";
import {
  Building2,
  Settings,
  Repeat,
  Plane,
  Users,
  MonitorSmartphone,
  Package,
  CreditCard,
  HeartPulse,
  CircleUserRound,
  Tag,
  Flag,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Building2,
    title: "Enterprise Resource Planning",
    description:
      "Bring core business functions together with ERP solutions covering finance, inventory, human resources, customer relationships, and supply chain management.",
    tag: "UNIFIED OPERATIONS",
  },
  {
    number: "02",
    icon: Settings,
    title: "Operations Management",
    description:
      "Streamline, monitor, and optimize everyday operational workflows to reduce friction and improve organizational execution.",
    tag: "PROCESS CONTROL",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Supply Chain Management",
    description:
      "Improve end-to-end visibility and cross-partner coordination while empowering teams to manage costs and delivery precision.",
    tag: "LOGISTICS & TRACKING",
  },
  {
    number: "04",
    icon: Plane,
    title: "Aviation Management",
    description:
      "Support aviation operations with specialized technology focused on mission-critical efficiency, rigorous safety, and regulatory compliance.",
    tag: "AVIATION ARCHITECTURE",
  },
  {
    number: "05",
    icon: Users,
    title: "People Resources",
    description:
      "Make human capital management intuitive, structured, and synchronized across onboarding, performance, and talent development.",
    tag: "TALENT INFRASTRUCTURE",
  },
  {
    number: "06",
    icon: MonitorSmartphone,
    title: "Web Portals",
    description:
      "Engineer high-utility, responsive portals delivering frictionless digital experiences for clients, vendors, and internal teams.",
    tag: "DIGITAL GATEWAYS",
  },
  {
    number: "07",
    icon: Package,
    title: "Financial Management",
    description:
      "Consolidate financial pipelines, automated bookkeeping, and balance sheets to enhance reporting clarity and strategic compliance.",
    tag: "FISCAL VISIBILITY",
  },
  {
    number: "08",
    icon: CreditCard,
    title: "Payment Management",
    description:
      "Streamline checkout experiences, multi-currency processing, and recurring billing through secure transaction gateways.",
    tag: "SECURE CHECKOUT",
  },
  {
    number: "09",
    icon: HeartPulse,
    title: "Healthcare & Hospital Management",
    description:
      "Support clinical operations, patient records, and hospital workflows with HIPAA-conscious and user-focused digital systems.",
    tag: "CLINICAL CARE",
  },
  {
    number: "10",
    icon: CircleUserRound,
    title: "Customer Relationship Management",
    description:
      "Empower sales, support, and account managers with unified client profiles, pipeline analytics, and omnichannel communications.",
    tag: "CLIENT SYNERGY",
  },
  {
    number: "11",
    icon: Tag,
    title: "E-Commerce",
    description:
      "Architect scalable digital storefronts, catalog distribution systems, checkout funnels, and real-time inventory synchronization.",
    tag: "COMMERCE ENGINES",
  },
  {
    number: "12",
    icon: Flag,
    title: "Project Management",
    description:
      "Equip cross-functional teams with milestone roadmaps, sprint oversight, resource balancing, and transparent delivery metrics.",
    tag: "AGILE DELIVERY",
  },
];

export default function EcosystemCapabilitiesSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
          ECOSYSTEM CAPABILITIES
        </span>

        <h1 className="mt-3 text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl">
          One Business. Many Moving Parts.
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          A modern business depends on many functions working together.
          Finance. Operations. Customers. People. Supply chains. Payments.
          Projects. When these functions operate separately, information
          can become fragmented and everyday work becomes harder to
          manage.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          TechTorch provides digital solutions across these areas to help
          businesses create more connected and efficient operations.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.number}
                className="rounded-md bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-[#6B1E3F]">
                    <Icon size={17} />
                  </span>
                  <span className="rounded-sm bg-white px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                    {c.number}
                  </span>
                </div>

                <h3 className="mt-4 text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {c.description}
                </p>

                <span className="mt-4 block text-[10px] font-semibold tracking-wide text-[#6B1E3F]">
                  {c.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}