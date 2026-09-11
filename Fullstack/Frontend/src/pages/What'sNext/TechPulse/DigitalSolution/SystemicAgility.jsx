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
    <section className="w-full bg-[#f7f6f9] py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p
            className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3"
            style={{ color: "#9d174d" }}
          >
            Systemic Agility · Complete Digital Matrix
          </p>

          <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-bold leading-tight text-slate-900 mb-3">
            Intelligent Solutions Built for Operational Coherence
          </h2>

          <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
            Modern enterprises cannot afford disconnected point tools.
            TechTorch's 12 specialized solutions integrate seamlessly to
            create a unified, self-healing nervous system across your
            infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOLUTIONS.map(({ id, icon: Icon, title, description, tags }) => (
            <div
              key={id}
              className="rounded-xl border border-slate-200/70 bg-white p-4 sm:p-5 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide"
                  style={{ backgroundColor: "#fdeef4", color: "#9d174d" }}
                >
                  {id}
                </span>

                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#fdeef4" }}
                >
                  <Icon size={16} style={{ color: "#9d174d" }} strokeWidth={2} />
                </div>
              </div>

              <h3 className="text-[15px] font-semibold text-slate-900 mb-2 leading-snug">
                {title}
              </h3>

              <p className="text-[13px] leading-relaxed text-slate-500 mb-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}