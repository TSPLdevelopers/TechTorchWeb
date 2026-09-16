import React from "react";
import {
  Zap,
  ArrowRight,
  UserCog,
  ArrowLeftRight,
  Users,
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  ShieldCheck,
  RefreshCw,
  Search,
  CheckCircle2,
  Compass,
  Rocket,
  Award,
  Layers,
  Target,
  CheckCheck,
} from "lucide-react";

/* ---------- Data ---------- */

const heroTags = ["Skilled Resources", "Flexible Staffing", "Technology Support"];

const approachCards = [
  {
    icon: UserCog,
    number: "01",
    title: "Skill-Aligned Resources",
    description:
      "Identify technical professionals based on the skills, experience, technology environment, and responsibilities required for your project.",
    tags: ["Technical Skills", "Relevant Expertise", "Project Requirements"],
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Flexible Team Support",
    description:
      "Add technical capacity when your workload or project requirements change, while complementing the capabilities of your existing team.",
    tags: ["Flexible Staffing", "Team Support", "Technical Capacity"],
  },
  {
    icon: Users,
    number: "03",
    title: "Project-Focused Collaboration",
    description:
      "Enable resources to work within your existing project structure, processes, technologies, and team environment.",
    tags: ["Project Collaboration", "Team Integration", "Technical Support"],
  },
];

const capabilities = [
  {
    icon: Code2,
    number: "01",
    title: "Custom Software Development",
    description:
      "Develop software solutions around specific business processes, requirements, and operational needs.",
    tag: "Enterprise Aligned",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Web & Mobile Application Development",
    description:
      "Create practical and responsive applications designed for modern web and mobile environments.",
    tag: "Full-Stack & Native",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Enterprise Software Solutions",
    description:
      "Support core business functions through technology solutions that integrate with existing business processes.",
    tag: "ERP & Core Systems",
  },
  {
    icon: Workflow,
    number: "04",
    title: "API Development & System Integration",
    description:
      "Connect applications and platforms through reliable APIs and structured system integration.",
    tag: "Secure REST & Microservices",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through functional, performance, security, and usability testing.",
    tag: "Functional & Automated QA",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Software Modernization",
    description:
      "Modernize existing applications and technology environments to meet changing business and technical requirements.",
    tag: "Legacy to Cloud & Modern Stack",
  },
];

const phases = [
  {
    icon: Search,
    dot: "1",
    label: "Discovery",
    tag: "01 / PHASE 1",
    title: "Understand & Scoping",
    description:
      "We begin by understanding your project objectives, technology environment, required skills, and resource needs.",
    keyActivities: ["Objective Scoping", "Tech Stack Matrix", "Skill Profile Audit"],
    footLabel: "Detailed Blueprint",
    footRight: "Step 01",
  },
  {
    icon: CheckCircle2,
    dot: "2",
    label: "Alignment",
    tag: "02 / PHASE 2",
    title: "Identify & Select",
    description:
      "Technical resources are mapped to the capabilities needed for your project with rigorous vetting.",
    keyActivities: ["Skill & Seniority Match", "Architecture Validation", "Culture & Team Fit"],
    footLabel: "Verified Talent Profiles",
    footRight: "Step 02",
  },
  {
    icon: Compass,
    dot: "3",
    label: "Integration",
    tag: "03 / PHASE 3",
    title: "Align & Onboard",
    description:
      "Relevant technology resources are aligned with your project, workflows, and existing team structure.",
    keyActivities: ["Workflow Synchronization", "Toolchain & Access Setup", "Sprint Alignment"],
    footLabel: "Team Embedding",
    footRight: "Step 03",
  },
  {
    icon: Rocket,
    dot: "4",
    label: "Momentum",
    tag: "04 / PHASE 4",
    title: "Support & Scale",
    description:
      "Resources continue to contribute with ongoing technical governance as project priorities and requirements evolve.",
    keyActivities: ["Performance Monitoring", "Dynamic Capacity Scaling", "Knowledge Retention"],
    footLabel: "Delivery Velocity",
    footRight: "Step 04",
  },
];

const whyCards = [
  {
    icon: Target,
    title: "Relevant Technical Expertise",
    description:
      "Access technology capabilities aligned with your project requirements.",
  },
  {
    icon: Layers,
    title: "Flexible Resource Support",
    description:
      "Support your existing team with additional technical capacity when needed.",
  },
  {
    icon: Compass,
    title: "Project-Focused Approach",
    description:
      "Keep resource requirements connected to your actual project goals and technology environment.",
  },
  {
    icon: Award,
    title: "Broad Technology Capabilities",
    description:
      "Benefit from expertise spanning software development, integration, testing, modernization, and support.",
  },
];

const finalTags = ["Skilled Resources", "Flexible Staffing", "Technology Support"];

/* ---------- Component ---------- */

export default function BenchHiringPage() {
  return (
    <div className="w-full bg-[#f8f7f5]">
      {/* ============ HERO ============ */}
      <div className="flex justify-center px-6 pt-16 pb-10">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="flex flex-col justify-center h-full">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 mb-6 w-fit">
              <Zap className="w-3 h-3 text-rose-800" />
              <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                IT AUGMENTATION • BENCH HIRING
              </span>
            </div>

            <h1 className="font-semibold text-4xl sm:text-[2.5rem] leading-[1.15] mb-5 text-[#1c1c1c]">
              Build Your Technology Team with the Right Resources
            </h1>

            <p className="text-neutral-500 text-[14.5px] leading-relaxed max-w-md mb-7">
              Access skilled technology professionals to support your
              projects, strengthen your existing teams, and respond to
              changing business and technology requirements.
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
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Enterprise Ready Bench
                </span>
                <span>Verified Technical Talent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ STRATEGIC RESOURCING ============ */}
      <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wide text-rose-800 font-bold bg-rose-50 px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
            STRATEGIC RESOURCING
          </div>
          <h2 className="text-[#1c1c1c] font-semibold text-2xl leading-snug mb-6 max-w-xl border-l-2 border-rose-800 pl-4">
            Flexible Technology Resources for Growing Business Needs
          </h2>

          <div className="space-y-4 text-[14px] leading-relaxed text-neutral-600 max-w-3xl mb-6">
            <p>
              Technology projects do not always require the same level of
              expertise or team capacity. As business priorities change,
              organizations may need additional technical resources to
              support ongoing projects, new initiatives, or specific
              technology requirements.
            </p>
            <p>
              TechTorch provides Resource and Staffing solutions that help
              businesses access skilled professionals and flexible workforce
              support. Our approach focuses on understanding your project
              requirements and aligning the right technical capabilities with
              your existing teams and working environment.
            </p>
            <p>
              From software development and application engineering to
              system integration, testing, modernization, and technical
              support, the right resources can help businesses manage
              changing workloads while keeping their technology initiatives
              moving forward.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="border-l-[3px] border-rose-800 bg-rose-50/60 pl-6 pr-6 py-5 mb-8 max-w-3xl">
            <p className="text-[15px] italic text-neutral-700 leading-relaxed mb-2">
              "The right people, the right technical capabilities, and the
              right support for your business requirements."
            </p>
            <span className="text-[11px] font-semibold tracking-wide text-rose-800">
              — TECHTORCH RESOURCING FRAMEWORK
            </span>
          </blockquote>

          <h3 className="text-[#1c1c1c] font-semibold text-lg mb-3">
            Technology Expertise That Supports Your Projects
          </h3>
          <div className="space-y-4 text-[14px] leading-relaxed text-neutral-600 max-w-3xl">
            <p>
              TechTorch's software engineering capabilities cover a broad
              range of technology requirements, including custom software
              development, web and mobile application development, enterprise
              software solutions, API development and system integration,
              quality assurance and testing, software modernization, and
              ongoing maintenance and support.
            </p>
            <p>
              This allows businesses to align technical resources with the
              nature of their projects, existing technology environment, and
              operational requirements.
            </p>
          </div>
        </div>
      </div>

      {/* ============ STRUCTURED APPROACH ============ */}
      <div className="flex justify-center px-6 py-10">
        <div className="w-full max-w-6xl">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            BENCH HIRING SUPPORT
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
            Bench hiring can support a range of technology activities
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
                    <span className="text-[9.5px] tracking-wide font-semibold text-neutral-300">
                      CAPABILITY {cap.number}
                    </span>
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
                  CAPABILITY 07
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[14px] mb-1">
                  Ongoing Maintenance & Support
                </h3>
                <p className="text-neutral-500 text-[12px] leading-relaxed max-w-xl">
                  Provide continued technical assistance, updates,
                  improvements, and support throughout the software
                  lifecycle.
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
          <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
            <div className="text-[10px] tracking-wide text-rose-800 font-bold bg-rose-50 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
              DELIVERY WORKFLOW • 4-PHASE DEPLOYMENT
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
              SLA-GOVERNED EXECUTION
            </span>
          </div>

          <h2 className="text-[#1c1c1c] font-semibold text-2xl mb-2 max-w-xl">
            From Requirement to Resource Alignment
          </h2>
          <p className="text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl">
            A systematic four-stage methodology engineered to maintain
            project velocity, smooth onboarding, and uninterrupted
            operational continuity.
          </p>

          {/* Step tracker */}
          <div className="grid grid-cols-4 items-center mb-10 relative">
            <div className="absolute top-3 left-0 right-0 h-px bg-neutral-200 mx-12" />
            {phases.map((p) => (
              <div key={p.dot} className="flex flex-col items-center relative z-10">
                <div className="w-6 h-6 rounded-full bg-rose-900 text-white text-[11px] font-bold flex items-center justify-center mb-2">
                  {p.dot}
                </div>
                <span className="text-[11.5px] font-medium text-neutral-600">
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4">
            {phases.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.tag}
                  className="rounded-xl bg-white border border-neutral-200 p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-rose-800" />
                    </div>
                    <span className="text-[9.5px] font-semibold text-neutral-400">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-[#1c1c1c] font-semibold text-[14.5px] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-neutral-500 text-[12px] leading-relaxed mb-3">
                    {p.description}
                  </p>
                  <div className="text-[9.5px] tracking-wide text-neutral-400 font-semibold mb-1.5">
                    KEY ACTIVITIES
                  </div>
                  <ul className="space-y-1 mb-4">
                    {p.keyActivities.map((a) => (
                      <li
                        key={a}
                        className="text-[11px] text-neutral-500 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-rose-800 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-neutral-100 pt-3 flex items-center justify-between">
                    <span className="text-[10.5px] font-semibold text-rose-800">
                      {p.footLabel}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-medium">
                      {p.footRight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enterprise guarantee bar */}
          <div className="rounded-lg bg-white border border-neutral-200 px-5 py-3.5 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <CheckCheck className="w-4 h-4 text-rose-800 shrink-0" />
              <p className="text-[12px] text-neutral-600">
                <span className="font-semibold text-[#1c1c1c]">
                  Enterprise Deployment Guarantee:
                </span>{" "}
                Dedicated account management, structured weekly velocity
                checkpoints, and zero operational disruption throughout every
                engagement.
              </p>
            </div>
            <span className="text-[10.5px] font-bold text-rose-800 whitespace-nowrap">
              ZERO DISRUPTION
            </span>
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
            Technology Support Built Around Your Requirements
          </h2>
          <p className="text-rose-100/70 text-[13.5px] max-w-xl mb-8">
            Flexible resourcing engineered to integrate seamlessly with your
            teams, methodologies, and enterprise goals.
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
                  <p className="text-rose-100/60 text-[12px] leading-relaxed">
                    {card.description}
                  </p>
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
            STRENGTHEN YOUR TEAM
          </div>

          <h2 className="text-[#1c1c1c] font-semibold text-3xl leading-snug mb-4">
            Strengthen Your Technology Team with the Right Resources
          </h2>
          <p className="text-neutral-500 text-[14px] leading-relaxed max-w-xl mx-auto mb-8">
            Whether you need additional technical capacity for an ongoing
            project or support for a new technology initiative, TechTorch can
            help you explore resource and staffing solutions aligned with
            your requirements.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full bg-rose-900 text-white font-semibold text-sm px-6 py-3.5 hover:bg-rose-950 transition-colors mb-7">
            Talk to Our Experts
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            {finalTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-neutral-600"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-800" />
                {tag}
              </span>
            ))}
          </div>

          <div className="text-[11px] text-neutral-400 font-medium">
            Enterprise Grade Governance & Rapid SLA Deployment
          </div>
        </div>
      </div>
    </div>
  );
}