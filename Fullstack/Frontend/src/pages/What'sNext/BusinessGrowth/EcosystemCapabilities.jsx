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
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= LABEL ================= */}
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.15em]
            text-[#6B1E3F]
            sm:text-[10px]
            md:text-[11px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          ECOSYSTEM CAPABILITIES
        </span>

        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            mt-3
            w-full
            max-w-[360px]
            text-[22px]
            font-bold
            leading-[1.3]
            text-[#6B1E3F]
            sm:max-w-2xl
            sm:text-[26px]
            md:text-[29px]
            lg:max-w-3xl
            lg:text-[32px]
            xl:text-[34px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          One Business. Many Moving Parts.
        </h1>

        {/* ================= DESCRIPTION 01 ================= */}
        <p
          className="
            mt-5
            w-full
            max-w-4xl
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:mt-6
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          A modern business depends on many functions working together.
          Finance. Operations. Customers. People. Supply chains. Payments.
          Projects. When these functions operate separately, information
          can become fragmented and everyday work becomes harder to
          manage.
        </p>

        {/* ================= DESCRIPTION 02 ================= */}
        <p
          className="
            mt-4
            w-full
            max-w-4xl
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          TechTorch provides digital solutions across these areas to help
          businesses create more connected and efficient operations.
        </p>

        {/* ================= CAPABILITY CARDS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-5
            md:mt-12
            md:gap-6
            lg:grid-cols-3
            lg:gap-5
            xl:gap-6
          "
        >
          {capabilities.map((c) => {
            const Icon = c.icon;

            return (
              <div
                key={c.number}
                className="
                  group
                  relative
                  w-full
                  min-w-0
                  overflow-hidden
                  rounded-md
                  bg-slate-50
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-rose-50
                  hover:shadow-md
                  sm:p-6
                  md:p-6
                  lg:p-5
                  xl:p-6
                "
              >
                {/* ================= TOP RIGHT PINK GLOW ================= */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-8
                    -top-8
                    h-24
                    w-24
                    rounded-full
                    bg-pink-200/40
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:bg-pink-300/50
                  "
                />

                {/* ================= CARD CONTENT ================= */}
                <div className="relative z-10">

                  {/* ICON + NUMBER */}
                  <div className="flex items-center justify-between gap-3">

                    {/* ICON */}
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-white
                        text-[#6B1E3F]
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                        group-hover:bg-white
                        group-hover:shadow-sm
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-500
                          group-hover:-rotate-6
                        "
                      />
                    </span>

                    {/* NUMBER */}
                    <span
                      className="
                        rounded-sm
                        bg-white
                        px-2
                        py-0.5
                        text-[9px]
                        font-semibold
                        text-slate-400
                        sm:text-[10px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {c.number}
                    </span>
                  </div>

                  {/* ================= CARD TITLE ================= */}
                  <h3
                    className="
                      mt-4
                      text-[15px]
                      font-semibold
                      leading-[1.4]
                      text-slate-900
                      sm:text-[16px]
                      md:text-[17px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* ================= CARD DESCRIPTION ================= */}
                  <p
                    className="
                      mt-2
                      text-[13px]
                      leading-[1.7]
                      text-slate-500
                      sm:text-[13px]
                      md:text-[14px]
                      md:leading-[1.75]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {c.description}
                  </p>

                  {/* ================= TAG ================= */}
                  <span
                    className="
                      mt-4
                      block
                      text-[9px]
                      font-semibold
                      tracking-[0.08em]
                      text-[#6B1E3F]
                      sm:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}