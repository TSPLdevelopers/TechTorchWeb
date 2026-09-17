import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Building2,
  Cloud,
  Sparkles,
  UserCog,
  Wrench,
  Search,
  Handshake,
  CheckCheck,
  ShieldCheck,
  Layers,
  Compass,
  Award,
  MessageCircle,
  Check,
} from "lucide-react";

/* ---------- Data ---------- */

const heroTags = ["Technology Expertise", "Business Collaboration", "Shared Opportunities"];

const opportunities = [
  {
    icon: Code2,
    title: "Technology & Software Solutions",
    description:
      "Collaborate on software development, enterprise applications, web and mobile solutions, modernization, and technical support.",
    tags: ["Custom Stack", "Full-Lifecycle"],
  },
  {
    icon: Building2,
    title: "Digital Business Solutions",
    description:
      "Explore opportunities around ERP, operations management, supply chain, financial management, CRM, e-commerce, project management, and other digital business solutions.",
    tags: ["ERP & CRM", "Enterprise Operations"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Work together on cloud infrastructure and technology requirements that support modern business operations.",
    tags: ["Cloud Native", "Resilient Architecture"],
  },
  {
    icon: Sparkles,
    title: "AI & Emerging Technologies",
    description:
      "Explore technology opportunities involving artificial intelligence and digitally enabled business solutions.",
    tags: ["Machine Intelligence", "Applied Automation"],
  },
  {
    icon: UserCog,
    title: "Technical Resources",
    description:
      "Complement your existing capabilities with technology professionals and flexible resource support through TechTorch's Resource and Staffing services.",
    tags: ["Vetted Engineers", "Flexible Pods"],
  },
  {
    icon: Wrench,
    title: "Software Development & Support",
    description:
      "Collaborate across the software lifecycle, from requirements and development to testing, deployment, maintenance, and ongoing support.",
    tags: ["DevSecOps & QA", "24/7 SLA Support"],
  },
];

const phases = [
  {
    number: "01",
    phaseTag: "PHASE I",
    title: "Understand",
    subtitle: "DISCOVERY & STRATEGY",
    description:
      "We first understand your business, technology capabilities, customer requirements, and strategic partnership objectives.",
    deliverables: ["Stakeholder discovery & tech audit", "Ecosystem requirements baseline"],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Charter & Scope",
  },
  {
    number: "02",
    phaseTag: "PHASE II",
    title: "Align",
    subtitle: "CAPABILITY & MODEL ALIGNMENT",
    description:
      "We identify areas where TechTorch's services and solutions can complement your existing capabilities and delivery infrastructure.",
    deliverables: ["Shared SLA & commercial mapping", "Capability & stack architecture plan"],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Framework SLA",
  },
  {
    number: "03",
    phaseTag: "PHASE III",
    title: "Collaborate",
    subtitle: "ACTIVE CO-DELIVERY & ENGINEERING",
    description:
      "We work together around relevant technology, development, implementation, resource, or ongoing operational requirements.",
    deliverables: ["Agile pod integration & co-delivery", "Sprint reviews & QA checkpoint gates"],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Live Deployment",
  },
  {
    number: "04",
    phaseTag: "PHASE IV",
    title: "Support",
    subtitle: "ONGOING SUPPORT & SCALE",
    description:
      "We continue to support the agreed area of collaboration based on evolving project needs and sustained business performance.",
    deliverables: ["Continuous optimization & monitoring", "Quarterly governance & scale reviews"],
    milestoneLabel: "Milestone Output:",
    milestoneValue: "Sustained ROI",
    active: true,
  },
];

const techCapabilities = [
  {
    category: "CORE ENGINEERING",
    title: "Software Engineering",
    description:
      "Custom software, web and mobile applications, enterprise solutions, integration, testing, and modernization.",
    tags: ["Custom Web/Mobile", "Modernization"],
  },
  {
    category: "BUSINESS PLATFORMS",
    title: "Digital Solutions",
    description:
      "ERP, operations, supply chain, financial management, CRM, e-commerce, project management, and other business-focused solutions.",
    tags: ["ERP & Operations", "Supply Chain"],
  },
  {
    category: "CLOUD SYSTEMS",
    title: "Cloud & Infrastructure",
    description:
      "Technology infrastructure designed to support evolving business and operational requirements.",
    tags: ["Cloud Architecture", "High Availability"],
  },
  {
    category: "RISK & SECURITY",
    title: "Cybersecurity",
    description:
      "Technology services focused on helping organisations address their digital security requirements.",
    tags: ["Data Protection", "Security Governance"],
  },
  {
    category: "APPLIED AI",
    title: "Artificial Intelligence",
    description:
      "AI-focused capabilities for organizations exploring practical applications of emerging technology.",
    tags: ["Predictive Analytics", "Intelligent Automation"],
  },
  {
    category: "AUGMENTATION",
    title: "Resource & Staffing",
    description:
      "Flexible access to technology professionals to complement existing teams and project requirements.",
    tags: ["Senior Tech Talent", "Agile Pods"],
  },
];

const whyCards = [
  {
    icon: Compass,
    title: "Broad Technology Expertise",
    description:
      "Our services cover multiple areas of technology, allowing partnerships to be developed around different business and technical requirements.",
    tag: "FULL SPECTRUM REACH",
  },
  {
    icon: Layers,
    title: "Flexible Collaboration",
    description:
      "Partnership opportunities can be shaped around the specific needs, capabilities, and objectives of each organization.",
    tag: "ADAPTIVE ENGAGEMENT",
  },
  {
    icon: Award,
    title: "Business-Focused Solutions",
    description:
      "Our technology capabilities are designed around practical business requirements and operational needs.",
    tag: "OUTCOME-ORIENTED",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Technology Support",
    description:
      "Our software engineering services cover requirements analysis, development, deployment, maintenance, and support.",
    tag: "FULL SDLC GOVERNANCE",
  },
];

const finalTags = ["NDA Protected Discussion", "Flexible Commercial Models", "Dedicated Partner Manager"];

/* ---------- Component ---------- */

export default function VendorPartnershipPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#f8f7f5]">
      {/* ============ HERO ============ */}
      <div className="flex justify-center px-6 pt-16 pb-10">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
            {/* Left */}
            <div className="flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                  STRATEGIC RESOURCING • VENDOR PARTNERSHIP
                </span>
              </div>

              <h1 className="font-semibold text-4xl sm:text-[2.5rem] leading-[1.15] mb-5 text-[#1c1c1c]">
                Building Stronger Opportunities Through{" "}
                <span className="text-rose-900">Technology Partnership</span>
              </h1>

              <p className="text-neutral-500 text-[14.5px] leading-relaxed max-w-md mb-7">
                Partner with TechTorch to bring together technology
                expertise, digital capabilities, and business requirements to
                create practical solutions for customers and organizations.
              </p>

             <button
  onClick={() => navigate("/become-partner")}
  className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 w-fit hover:bg-rose-950 transition-colors mb-6"
>
  Become a Partner
  <ArrowRight className="w-4 h-4" />
</button>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-[12px] font-medium text-neutral-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - image card */}
            <div className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
              <div className="relative h-40">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="px-4 py-3.5">
                <div className="text-[9px] tracking-wide text-rose-800 font-bold mb-1">
                  ALLIANCE NETWORK
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12.5px] font-semibold text-[#1c1c1c]">
                    Enterprise Ready Partnerships
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified Capabilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ STRATEGIC PERSPECTIVE ============ */}
      <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wide text-rose-800 font-bold bg-rose-50 px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
            STRATEGIC PERSPECTIVE
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl leading-snug mb-6 max-w-xl">
            Technology Partnerships That Create Business Value
          </h2>

          <div className="space-y-4 text-[14px] leading-relaxed text-neutral-600 max-w-3xl mb-6">
            <p>
              Technology is most effective when different capabilities come
              together with a clear understanding of business needs. A
              strong partnership can combine expertise, resources,
              solutions, and industry knowledge to address customer
              requirements more effectively.
            </p>
            <p>
              TechTorch works across IT consultancy, artificial intelligence,
              cloud infrastructure, cybersecurity, software engineering,
              software development and support, business process
              outsourcing, resource and staffing, and web solutions. These
              capabilities provide a broad foundation for collaboration with
              organizations that are looking to strengthen their technology
              offerings or support their customers with additional
              expertise.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-[3px] border-rose-800 bg-rose-50/60 pl-6 pr-6 py-5 mb-6 max-w-3xl">
            <p className="text-[14.5px] italic text-neutral-700 leading-relaxed mb-2">
              "Our partnership approach is focused on understanding the needs
              of each organization and identifying areas where our
              technology capabilities can complement existing products,
              services, or project requirements."
            </p>
            <span className="text-[11px] font-semibold tracking-wide text-rose-800">
              — TECHTORCH PARTNERSHIP FRAMEWORK
            </span>
          </blockquote>

          <p className="text-neutral-600 text-[14px] leading-relaxed max-w-3xl mb-10">
            From software development and system integration to digital
            business solutions and technical resources, TechTorch can
            support different technology requirements through a flexible and
            collaborative approach.
          </p>

          {/* Collaborative impact card */}
          <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden grid grid-cols-1 sm:grid-cols-[1.3fr_1fr]">
            <div className="p-8">
              <div className="text-[9.5px] tracking-wide text-rose-800 font-bold mb-3">
                COLLABORATIVE IMPACT
              </div>
              <h3 className="text-[#1c1c1c] font-semibold text-[18px] mb-3">
                Seamless Integration with Your Enterprise Ecosystem
              </h3>
              <p className="text-neutral-500 text-[13px] leading-relaxed">
                Whether you are an independent software vendor, systems
                integrator, or digital agency, our shared delivery models
                align with your business milestones and governance
                frameworks.
              </p>
            </div>
            <div
              className="h-48 sm:h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80')",
              }}
            />
          </div>
        </div>
      </div>

      {/* ============ COLLABORATION MATRIX ============ */}
      <div className="w-full bg-white flex justify-center px-6 py-14">
        <div className="w-full max-w-6xl text-center">
          <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wide text-rose-800 font-bold bg-rose-50 px-3 py-1.5 rounded-full mb-4">
            COLLABORATION MATRIX
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-2">
            Partnership Opportunities
          </h2>
          <p className="text-neutral-500 text-[13.5px] mb-10">
            Explore Areas Where We Can Work Together
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {opportunities.map((op) => {
              const Icon = op.icon;
              return (
                <div
                  key={op.title}
                  className="rounded-xl border border-neutral-200 p-6"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-rose-800" />
                  </div>
                  <h3 className="text-[#1c1c1c] font-semibold text-[14.5px] mb-2">
                    {op.title}
                  </h3>
                  <p className="text-neutral-500 text-[12.5px] leading-relaxed mb-5">
                    {op.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {op.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] font-semibold text-rose-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ ENGAGEMENT METHODOLOGY ============ */}
      <div className="flex justify-center px-6 py-14">
        <div className="w-full max-w-6xl">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            ENGAGEMENT METHODOLOGY
          </div>
          <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
            <h2 className="text-[#1c1c1c] font-semibold text-2xl">
              Our Partnership Approach
            </h2>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-neutral-500 bg-white border border-neutral-200 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              End-to-End Governance & SLA Milestones
            </span>
          </div>
          <p className="text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl">
            A structured, four-phase engagement roadmap designed to align
            capabilities, de-risk joint delivery, and generate mutual
            enterprise value.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {phases.map((p) => (
              <div
                key={p.number}
                className={
                  p.active
                    ? "rounded-xl bg-white border-2 border-rose-800 p-5"
                    : "rounded-xl bg-white border border-neutral-200 p-5"
                }
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[22px] font-bold text-neutral-200">
                    {p.number}
                  </span>
                  <span
                    className={
                      p.active
                        ? "text-[9.5px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"
                        : "text-[9.5px] font-semibold text-neutral-400"
                    }
                  >
                    {p.phaseTag}
                  </span>
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[15px] mb-0.5">
                  {p.title}
                </h3>
                <div className="text-[9px] tracking-wide text-neutral-400 font-semibold mb-3">
                  {p.subtitle}
                </div>
                <p className="text-neutral-500 text-[12px] leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="text-[9px] tracking-wide text-neutral-400 font-semibold mb-1.5">
                  KEY DELIVERABLES
                </div>
                <ul className="space-y-1 mb-4">
                  {p.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-[11px] text-neutral-500 flex items-start gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-rose-800 shrink-0 mt-1.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-neutral-100 pt-3">
                  <div className="text-[10px] text-neutral-400 mb-0.5">
                    {p.milestoneLabel}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-rose-800">
                    {p.active && <Check className="w-3 h-3" />}
                    {p.milestoneValue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ ENTERPRISE PORTFOLIO ============ */}
      <div className="flex justify-center px-6 py-14">
        <div className="w-full max-w-6xl">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            ENTERPRISE PORTFOLIO
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-2">
            Technology Capabilities
          </h2>
          <p className="text-neutral-500 text-[13.5px] leading-relaxed mb-8">
            Supporting Different Business & Technology Needs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {techCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl bg-white border border-neutral-200 p-6"
              >
                <div className="flex items-center gap-1.5 text-[9.5px] tracking-wide text-neutral-400 font-semibold mb-4">
                  {cap.category}
                  <span className="w-1 h-1 rounded-full bg-rose-800" />
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[15px] mb-2">
                  {cap.title}
                </h3>
                <p className="text-neutral-500 text-[12.5px] leading-relaxed mb-5">
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ WHY PARTNER (dark) ============ */}
      <div
        className="w-full px-6 py-16 flex justify-center"
        style={{
          background:
            "radial-gradient(120% 140% at 90% 0%, #7a0f47 0%, #3a0a26 60%)",
        }}
      >
        <div className="w-full max-w-6xl">
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-wide font-bold text-rose-100 bg-white/10 px-3 py-1 rounded-full mb-5">
            <span className="w-1 h-1 rounded-full bg-rose-300" />
            STRATEGIC PARTNERSHIP VALUE
          </span>
          <h2 className="text-white font-semibold text-3xl leading-snug mb-3 max-w-lg">
            Why Partner With TechTorch?
          </h2>
          <p className="text-rose-100/70 text-[13.5px] max-w-xl mb-8">
            Technology Capabilities That Support Collaboration
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-xl bg-white/[0.08] border border-white/10 p-5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-rose-100" />
                  </div>
                  <h3 className="text-white font-semibold text-[13.5px] mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-rose-100/60 text-[12px] leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <span className="text-[9.5px] tracking-wide font-bold text-rose-200">
                    {card.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============ FINAL CTA ============ */}
      <div className="flex justify-center px-6 py-16">
        <div className="w-full max-w-3xl rounded-2xl bg-rose-50/60 border border-rose-100 px-8 py-14 text-center">
          <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wide text-rose-800 font-bold bg-white px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
            START A CONVERSATION
          </div>

          <h2 className="text-[#1c1c1c] font-semibold text-3xl leading-snug mb-4">
            Let's Build the Right Partnership Together
          </h2>
          <p className="text-neutral-500 text-[14px] leading-relaxed max-w-xl mx-auto mb-2">
            If your organization is looking to complement its technology
            capabilities, expand its solution offerings, or explore new
            areas of collaboration, let's start a conversation.
          </p>
          <p className="text-neutral-500 text-[14px] leading-relaxed max-w-xl mx-auto mb-8">
            Share your business requirements and partnership objectives with
            TechTorch, and explore where our capabilities can work together.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 hover:bg-rose-950 transition-colors mb-8">
            Talk to Expert
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Response card */}
          <div className="inline-flex items-center gap-3 bg-white border border-neutral-200 rounded-xl px-5 py-3 mb-6">
            <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-left">
              <div className="text-[9.5px] tracking-wide text-neutral-400 font-semibold">
                RESPONSE
              </div>
              <div className="text-[12.5px] font-semibold text-[#1c1c1c]">
                Business-Focused Support
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {finalTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-neutral-500"
              >
                <Check className="w-3.5 h-3.5 text-rose-800" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}