import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  ShieldCheck,
  UserCog,
  ArrowLeftRight,
  Layers,
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  RefreshCw,
  Search,
  CheckCircle2,
  Repeat2,
  Sparkles,
  Target,
} from "lucide-react";

/* ---------- Data ---------- */

const heroTags = ["Skilled Resources", "Flexible Support", "Project Continuity"];

const pillars = [
  {
    badge: "PILLAR 01",
    title: "Continuous Project Momentum",
    description:
      "Minimise delivery disruption and maintain critical engineering timelines through planned resource alignment.",
    linkLabel: "Supporting Engineering Continuity",
  },
  {
    badge: "PILLAR 02",
    title: "Rapid Knowledge Handover",
    description:
      "A practical transition approach designed to help incoming resources understand your technology environment, project context, and team workflows.",
    linkLabel: "Contextual codebase & process onboarding",
  },
];

const approachCards = [
  {
    icon: UserCog,
    number: "01",
    title: "Skill-Aligned Replacement",
    description:
      "Identify technical capabilities based on your project requirements, technology environment, and existing team structure.",
    tags: ["Relevant Expertise", "Technical Skills", "Project Requirements"],
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Smooth Team Transition",
    description:
      "Support a practical transition when a technology resource needs to be replaced, helping the incoming resource understand the project environment and responsibilities.",
    tags: ["Knowledge Transfer", "Team Collaboration", "Project Context"],
  },
  {
    icon: Users,
    number: "03",
    title: "Flexible Workforce Support",
    description:
      "Access skilled technology professionals when your project or business requirements change, complementing your existing workforce with flexible resource support.",
    tags: ["Skilled Professionals", "Flexible Resources", "Team Support"],
  },
];

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Software Development",
    description:
      "Support development projects with technical resources aligned with your software requirements and business objectives.",
    tag: "Enterprise Aligned",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Web & Mobile Application Development",
    description:
      "Strengthen web and mobile development teams with professionals suited to your application requirements.",
    tag: "Full-Stack & Native",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Enterprise Software Solutions",
    description:
      "Support enterprise applications and business systems with relevant technical capabilities.",
    tag: "ERP & Core Systems",
  },
  {
    icon: Workflow,
    number: "04",
    title: "API Development & System Integration",
    description:
      "Provide technical support for APIs, integrations, and connected application environments.",
    tag: "Secure REST & Microservices",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality Assurance & Testing",
    description:
      "Strengthen testing activities with resources supporting software quality, functionality, performance, and usability.",
    tag: "Functional & Automated QA",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Software Modernization",
    description:
      "Support modernization initiatives involving existing applications, legacy systems, and updated technology approaches.",
    tag: "Legacy to Cloud & Modern Stack",
  },
];

const phases = [
  {
    icon: Search,
    phase: "PHASE 1: DISCOVERY",
    number: "01",
    title: "Understand",
    description:
      "We understand your project requirements, technology environment, and the capabilities needed for the role.",
    tag: "Needs & Tech Profile",
  },
  {
    icon: CheckCircle2,
    phase: "PHASE 2: ALIGNMENT",
    number: "02",
    title: "Identify",
    description:
      "The required technical expertise and resource profile are identified against your project needs.",
    tag: "Capability Matching",
  },
  {
    icon: Repeat2,
    phase: "PHASE 3: INTEGRATION",
    number: "03",
    title: "Transition",
    description:
      "The selected resource can work with your existing team and project environment to support a practical transition.",
    tag: "Team Integration",
  },
  {
    icon: Zap,
    phase: "PHASE 4: MOMENTUM",
    number: "04",
    title: "Support",
    description:
      "The resource contributes to ongoing project activities based on your technical requirements and business priorities.",
    tag: "Continuous Velocity",
    active: true,
  },
];

const whyCards = [
  {
    title: "Relevant Technical Expertise",
    description:
      "Access professionals based on your project's technology and skill requirements.",
  },
  {
    title: "Flexible Resource Support",
    description:
      "Strengthen your team when workforce or technical requirements change.",
  },
  {
    title: "Project-Focused Collaboration",
    description:
      "Resources can work alongside your existing teams and development processes.",
  },
  {
    title: "Broader Technology Capabilities",
    description:
      "Access support across software development, applications, integration, testing, modernization, and maintenance.",
  },
];

/* ---------- Component ---------- */

export default function ResourceReplacementPage() {
  return (
    <div className="w-full bg-[#f8f7f5]">
      {/* ============ HERO ============ */}
      <div className="flex justify-center px-6 pt-16 pb-10">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            {/* Left */}
            <div className="flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 mb-6 w-fit">
                <Zap className="w-3 h-3 text-rose-800" />
                <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                  IT AUGMENTATION • RESOURCE REPLACEMENT
                </span>
              </div>

              <h1 className="font-semibold text-4xl sm:text-[2.5rem] leading-[1.15] mb-5 text-[#1c1c1c]">
                Support Project Continuity with the Right Technology
                Resources
              </h1>

              <p className="text-neutral-500 text-[14.5px] leading-relaxed max-w-md mb-7">
                Replace technology resources when your project requirements
                change, while keeping your teams supported with the skills
                and expertise they need.
              </p>

              <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 w-fit hover:bg-rose-950 transition-colors mb-6">
                Talk to Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex flex-wrap gap-2.5">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-[11.5px] font-medium text-neutral-600 bg-white border border-neutral-200 px-3 py-1.5 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - image card */}
            <div className="rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
              <div className="relative h-56">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-black/40 backdrop-blur text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Project Continuity Support
                </span>
              </div>
              <div className="flex items-center justify-between px-4 py-3.5">
                <span className="flex items-center gap-1.5 text-[11px] text-neutral-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-800" />
                  Seamless Transition & Knowledge Transfer
                </span>
                <span className="text-[11px] text-neutral-400 font-medium">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </div>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <div
                key={p.badge}
                className="rounded-xl bg-white border border-neutral-200 p-6"
              >
                <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
                  {p.badge}
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[16px] mb-2">
                  {p.title}
                </h3>
                <p className="text-neutral-500 text-[13px] leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="border-t border-neutral-100 pt-3">
                  <span className="text-[11.5px] font-semibold text-rose-800">
                    {p.linkLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ STRATEGIC RESOURCING (white card) ============ */}
      <div className="flex justify-center px-6 py-6">
        <div className="w-full max-w-6xl rounded-2xl bg-white border border-neutral-200 px-10 py-12">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            STRATEGIC RESOURCING
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl leading-snug mb-6 max-w-xl">
            Flexible Resource Replacement for Changing Technology Needs
          </h2>

          <div className="space-y-4 text-[14px] leading-relaxed text-neutral-600 max-w-3xl mb-6">
            <p>
              Technology projects depend on the right people, skills, and
              technical expertise. When a resource becomes unavailable or
              project requirements change, businesses may need additional
              support to maintain progress and meet their technology
              objectives.
            </p>
            <p>
              TechTorch provides flexible Resource and Staffing solutions
              that help businesses access skilled professionals based on
              their technical requirements. Our approach allows
              organisations to strengthen their existing teams and address
              changing workforce needs with appropriate technology
              resources.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-[3px] border-rose-800 bg-rose-50/60 pl-6 pr-6 py-5 mb-8 max-w-3xl">
            <p className="text-[15px] italic text-neutral-700 leading-relaxed mb-2">
              "The focus is simple: understand the requirement, align the
              right expertise, and support the project effectively."
            </p>
            <span className="text-[11px] font-semibold tracking-wide text-rose-800">
              — TECHTORCH RESOURCING FRAMEWORK
            </span>
          </blockquote>

          <h3 className="text-[#1c1c1c] font-semibold text-lg mb-3">
            Supporting Your Team When Requirements Change
          </h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-neutral-600 max-w-3xl">
            <p>
              Resource replacement can be important when a project requires a
              different skill set, additional technical support, or
              continuity within an existing development environment.
            </p>
            <p>
              TechTorch works around your business and technology
              requirements to help identify the appropriate resource
              capabilities for your project. This can support software
              development, application projects, system integration,
              testing, maintenance, and other technology activities.
            </p>
          </div>
        </div>
      </div>

      {/* ============ STRUCTURED APPROACH ============ */}
      <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            RESOURCE REPLACEMENT SUPPORT
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-8 max-w-xl">
            Structured Approach to Engineering Continuity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {approachCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.number}
                  className="rounded-xl bg-white border border-neutral-200 p-6"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-rose-800" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-300">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="text-[#1c1c1c] font-semibold text-[15px] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-neutral-500 text-[12.5px] leading-relaxed mb-5">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full"
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

      {/* ============ TECHNOLOGY CAPABILITIES ============ */}
      <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            TECHNOLOGY CAPABILITIES
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-2 max-w-xl">
            Support Across Your Technology Requirements
          </h2>
          <p className="text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl">
            Resource replacement can support a range of technology activities
            depending on the requirements of your project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.number}
                  className="rounded-xl bg-white border border-neutral-200 p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-rose-800" />
                    </div>
                    <span className="text-[10px] font-semibold text-neutral-300">
                      • {cap.number}
                    </span>
                  </div>
                  <div className="text-[9.5px] tracking-wide text-rose-800 font-bold mb-2">
                    CAPABILITY {cap.number}
                  </div>
                  <h3 className="text-[#1c1c1c] font-semibold text-[14px] mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-neutral-500 text-[12px] leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <span className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
                    {cap.tag}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Full width capability 07 */}
          <div className="rounded-xl bg-white border border-neutral-200 p-5 flex items-center justify-between gap-6 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                <RefreshCw className="w-4 h-4 text-rose-800" />
              </div>
              <div>
                <div className="text-[9.5px] tracking-wide text-rose-800 font-bold mb-1">
                  CAPABILITY 07 • 07
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[14px] mb-1">
                  Ongoing Maintenance & Support
                </h3>
                <p className="text-neutral-500 text-[12px] leading-relaxed max-w-xl">
                  Maintain and improve existing software through technical
                  support, updates, maintenance, and ongoing enhancements.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                SLA & Continuous Health
              </span>
              <span className="text-[10.5px] font-semibold text-rose-800 whitespace-nowrap">
                Specialized Support →
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============ DELIVERY WORKFLOW ============ */}
      <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            DELIVERY WORKFLOW
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-2 max-w-xl">
            From Requirement to Resource Alignment
          </h2>
          <p className="text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl">
            A systematic four-stage methodology engineered to maintain
            project velocity, smooth onboarding, and uninterrupted
            operational continuity.
          </p>

          <div className="rounded-xl bg-white border border-neutral-200 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
              {phases.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.number} className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div
                        className={
                          p.active
                            ? "w-9 h-9 rounded-lg bg-rose-900 flex items-center justify-center shrink-0"
                            : "w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center shrink-0"
                        }
                      >
                        <Icon
                          className={
                            p.active
                              ? "w-4 h-4 text-white"
                              : "w-4 h-4 text-rose-800"
                          }
                        />
                      </div>
                      <span
                        className={
                          p.active
                            ? "text-[10px] font-bold text-white bg-rose-900 px-2 py-0.5 rounded-full"
                            : "text-[10px] font-bold text-neutral-400"
                        }
                      >
                        {p.number}
                      </span>
                    </div>
                    <div className="text-[9.5px] tracking-wide text-neutral-400 font-semibold mb-1.5">
                      {p.phase}
                    </div>
                    <h3 className="text-[#1c1c1c] font-semibold text-[14.5px] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-neutral-500 text-[12px] leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <span className="text-[10.5px] font-medium text-rose-800">
                      • {p.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ============ WHY TECHTORCH (dark) ============ */}
      <div className="flex justify-center px-6 py-10">
        <div
          className="w-full max-w-6xl rounded-2xl px-10 py-12"
          style={{
            background:
              "radial-gradient(120% 140% at 90% 0%, #7a0f47 0%, #4a0a30 60%)",
          }}
        >
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-wide font-bold text-rose-100 bg-white/10 px-3 py-1 rounded-full mb-5">
            <span className="w-1 h-1 rounded-full bg-rose-300" />
            WHY TECHTORCH
          </span>
          <h2 className="text-white font-semibold text-3xl leading-snug mb-3 max-w-lg">
            Technology Resources Aligned with Your Business Needs
          </h2>
          <p className="text-rose-100/70 text-[13.5px] max-w-xl mb-8">
            Technical capabilities aligned with your project requirements and
            operational continuity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white/[0.08] border border-white/10 p-5"
              >
                <h3 className="text-white font-semibold text-[14px] mb-2">
                  {card.title}
                </h3>
                <p className="text-rose-100/60 text-[12.5px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ FINAL CTA ============ */}
      <div className="flex justify-center px-6 py-16">
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-[#1c1c1c] font-semibold text-3xl leading-snug mb-4">
            Keep Your Technology Projects Moving Forward
          </h2>
          <p className="text-neutral-500 text-[14px] leading-relaxed max-w-xl mx-auto mb-8">
            When your resource requirements change, TechTorch can help you
            explore the right technical capabilities to support your team
            and technology initiatives.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 hover:bg-rose-950 transition-colors mb-7">
            Talk to Our Experts
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-medium text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}