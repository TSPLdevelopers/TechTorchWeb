import React from "react";
import {
  Workflow,
  Truck,
  Plane,
  Users,
  LayoutTemplate,
  Landmark,
  CreditCard,
  HeartPulse,
  Handshake,
  ShoppingCart,
  ClipboardCheck,
  RefreshCw,
} from "lucide-react";

const SOLUTIONS = [
  {
    id: "SOL-01",
    icon: Workflow,
    title: "Operations Management",
    description:
      "Real-time business process orchestration, end-to-end throughput optimization, and systemic bottleneck diagnosis.",
    tags: ["BPMN 2.0 Engine", "Telemetry"],
  },
  {
    id: "SOL-02",
    icon: Truck,
    title: "Supply Chain Management",
    description:
      "Multi-tier inventory visibility, algorithmic freight routing, dynamic lead-time predictions, and automated reorders.",
    tags: ["Dynamic Routing", "IoT Tracing"],
  },
  {
    id: "SOL-03",
    icon: Plane,
    title: "Aviation Management",
    description:
      "Mission-critical fleet telematics, compliance auditing, automated MRO lifecycle tracking, and pilot scheduling rails.",
    tags: ["FAA/EASA Audit", "MRO Lifecycle"],
  },
  {
    id: "SOL-04",
    icon: Users,
    title: "People & Resources (TorchX)",
    description:
      "Automated multi-entity payroll, biometric attendance tools, smart shift scheduling, and talent retention telemetry.",
    tags: ["Global Payroll", "Talent Health"],
  },
  {
    id: "SOL-05",
    icon: LayoutTemplate,
    title: "Web Portals & Experience",
    description:
      "Ultra-fast customer & partner access points constructed with edge-rendered, secure headless micro-frontend systems.",
    tags: ["Micro-Frontend", "SSO & RBAC"],
  },
  {
    id: "SOL-06",
    icon: Landmark,
    title: "Financial Management",
    description:
      "Real-time reconciliation, algorithmic multi-ledger balancing, cross-border fiscal validation, and forecast projection.",
    tags: ["Continuous Audit", "Multi-Currency"],
  },
  {
    id: "SOL-07",
    icon: CreditCard,
    title: "Payment Management",
    description:
      "PCI-DSS compliant tokenized transaction rails, smart routing to minimize interchange loss, and heuristic fraud shielding.",
    tags: ["Tokenization", "Sub-second Clearing"],
  },
  {
    id: "SOL-08",
    icon: HeartPulse,
    title: "Healthcare & Hospital",
    description:
      "EHR bi-directional syncing, FHIR API interoperability, inpatient triage workflows, and HIPAA-secured data governance.",
    tags: ["HL7/FHIR Protocol", "HIPAA Compliant"],
  },
  {
    id: "SOL-09",
    icon: Handshake,
    title: "CRM & Customer Relations",
    description:
      "Holistic client telemetry, omnichannel attribution, predictive lifecycle churn flagging, and dynamic quoting workflows.",
    tags: ["Omnichannel Sync", "Churn Intelligence"],
  },
  {
    id: "SOL-10",
    icon: ShoppingCart,
    title: "E-Commerce Engines",
    description:
      "High-concurrency digital store engines, dynamic multi-tier catalog management, automated checkout pipelines, and ERP sync.",
    tags: ["Peak Concurrency", "Dynamic Pricing"],
  },
  {
    id: "SOL-11",
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Capacity heatmapping, cross-portfolio sprint velocity governance, automated milestone triggers, and budget burndowns.",
    tags: ["Portfolio Roadmap", "Resource Ledger"],
  },
  {
    id: "SOL-12",
    icon: RefreshCw,
    title: "ERP Modernization",
    description:
      "Safely bridging aging AS400, SAP, and bespoke database estates to cloud-native microservices with zero system downtime.",
    tags: ["Zero-Downtime", "CDC Pipelines"],
  },
];

export default function SolutionsMatrix() {
  return (
    <section
      className="
        w-full
        bg-[#f7f6f9]
        py-12
        sm:py-14
        md:py-16
        lg:py-20
      "
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= HEADER ================= */}
        <div
          className="
            mb-8
            max-w-3xl
            sm:mb-10
            md:mb-12
          "
        >
          {/* Eyebrow */}
          <p
            className="
              mb-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              sm:text-[11px]
            "
            style={{
              color: "#9d174d",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Systemic Agility · Complete Digital Matrix
          </p>

          {/* Heading - Plus Jakarta Sans */}
          <h2
            className="
              mb-3
              text-[22px]
              font-bold
              leading-[1.2]
              text-slate-900
              sm:text-[26px]
              md:text-[30px]
              lg:text-[32px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Intelligent Solutions Built for Operational Coherence
          </h2>

          {/* Subheading - Plus Jakarta Sans */}
          <p
            className="
              max-w-2xl
              text-[13px]
              leading-[1.7]
              text-slate-500
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.75]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Modern enterprises cannot afford disconnected point tools.
            TechTorch's 12 specialized solutions integrate seamlessly to
            create a unified, self-healing nervous system across your
            infrastructure.
          </p>
        </div>

        {/* ================= SOLUTIONS GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {SOLUTIONS.map(
            ({ id, icon: Icon, title, description, tags }) => (
              <div
                key={id}
                className="
                  group
                  flex
                  min-w-0
                  flex-col
                  rounded-xl
                  border
                  border-slate-200/70
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:p-5
                "
              >
                {/* ================= CARD TOP ================= */}
                <div
                  className="
                    mb-4
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  {/* ID */}
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      px-2
                      py-0.5
                      text-[9px]
                      font-bold
                      tracking-wide
                      sm:text-[10px]
                    "
                    style={{
                      backgroundColor: "#fdeef4",
                      color: "#9d174d",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {id}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: "#fdeef4",
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: "#9d174d" }}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* ================= CARD TITLE ================= */}
                <h3
                  className="
                    mb-2
                    text-[14px]
                    font-semibold
                    leading-snug
                    text-slate-900
                    sm:text-[15px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {title}
                </h3>

                {/* ================= CARD DESCRIPTION ================= */}
                <p
                  className="
                    mb-4
                    text-[12px]
                    leading-[1.7]
                    text-slate-500
                    sm:text-[13px]
                    sm:leading-relaxed
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {description}
                </p>

                {/* ================= TAGS ================= */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-md
                        border
                        border-slate-100
                        bg-slate-50
                        px-2
                        py-1
                        text-[10px]
                        font-medium
                        text-slate-500
                        sm:text-[11px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}