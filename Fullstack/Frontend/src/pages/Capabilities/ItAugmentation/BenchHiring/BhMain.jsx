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

/* =========================================================
   FONTS
   =========================================================
   Add this to index.css / App.css:

   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

   body {
     font-family: "Inter", sans-serif;
   }

   .font-jakarta {
     font-family: "Plus Jakarta Sans", sans-serif;
   }

   .font-inter {
     font-family: "Inter", sans-serif;
   }
========================================================= */

/* ---------- Data ---------- */

const heroTags = [
  "Skilled Resources",
  "Flexible Staffing",
  "Technology Support",
];

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
    keyActivities: [
      "Objective Scoping",
      "Tech Stack Matrix",
      "Skill Profile Audit",
    ],
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
    keyActivities: [
      "Skill & Seniority Match",
      "Architecture Validation",
      "Culture & Team Fit",
    ],
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
    keyActivities: [
      "Workflow Synchronization",
      "Toolchain & Access Setup",
      "Sprint Alignment",
    ],
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
    keyActivities: [
      "Performance Monitoring",
      "Dynamic Capacity Scaling",
      "Knowledge Retention",
    ],
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

const finalTags = [
  "Skilled Resources",
  "Flexible Staffing",
  "Technology Support",
];

/* =========================================================
   COMPONENT
========================================================= */

export default function BenchHiringPage() {
  return (
    <div className="w-full bg-[#f8f7f5] font-inter overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10">
        <div className="w-full max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_410px] gap-8 lg:gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-center text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#730024]/5 border border-[#730024]/10 px-3 py-1.5 mb-5 sm:mb-6">
                <Zap className="w-3 h-3 text-[#730024]" />

                <span className="text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold font-inter">
                  IT AUGMENTATION • BENCH HIRING
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-jakarta font-semibold text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.15] mb-4 sm:mb-5 text-[#1c1c1c] max-w-2xl">
                Build Your Technology Team with the Right Resources
              </h1>

              {/* Subheading */}
              <p className="font-jakarta text-neutral-500 text-[13.5px] sm:text-[14.5px] leading-relaxed max-w-xl mb-6 sm:mb-7">
                Access skilled technology professionals to support your
                projects, strengthen your existing teams, and respond to
                changing business and technology requirements.
              </p>

              {/* Button */}
              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#730024]
                  text-white
                  font-inter
                  font-semibold
                  text-sm
                  px-6
                  py-3.5
                  w-fit
                  hover:bg-[#5c001d]
                  transition-colors
                  mb-6
                "
              >
                Talk to Our Experts
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-xl">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10.5px]
                      sm:text-[11.5px]
                      font-inter
                      font-medium
                      text-neutral-600
                      bg-white
                      border
                      border-neutral-200
                      px-3
                      py-1.5
                      rounded-full
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                w-full
                max-w-[410px]
                mx-auto
                lg:mx-0
                lg:justify-self-end
                rounded-xl
                bg-white
                border
                border-neutral-200
                shadow-sm
                overflow-hidden
              "
            >
              <div className="relative h-64 sm:h-72 lg:h-[340px]">

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('benchhiring.png')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-white text-[10px] sm:text-[11px] font-inter font-medium">
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
      </section>

      {/* =====================================================
          STRATEGIC RESOURCING
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 py-10 sm:py-12">
        <div className="w-full max-w-6xl">

          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center text-center">

            {/* Label */}
            <div className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold font-inter bg-[#730024]/5 border border-[#730024]/10 px-3 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
              STRATEGIC RESOURCING
            </div>

            {/* Heading */}
            <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl leading-snug mb-6 max-w-2xl">
              Flexible Technology Resources for Growing Business Needs
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-[13.5px] sm:text-[14px] leading-relaxed text-neutral-600 max-w-3xl font-inter">

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
                requirements and aligning the right technical capabilities
                with your existing teams and working environment.
              </p>

              <p>
                From software development and application engineering to
                system integration, testing, modernization, and technical
                support, the right resources can help businesses manage
                changing workloads while keeping their technology initiatives
                moving forward.
              </p>

            </div>
          </div>

          {/* PULL QUOTE */}
          <blockquote className="border-l-[3px] border-[#730024] bg-[#730024]/5 pl-5 sm:pl-6 pr-5 sm:pr-6 py-5 my-8 max-w-3xl mx-auto text-left">
            <p className="font-inter text-[14px] sm:text-[15px] italic text-neutral-700 leading-relaxed mb-2">
              "The right people, the right technical capabilities, and the
              right support for your business requirements."
            </p>

            <span className="font-inter text-[10px] sm:text-[11px] font-semibold tracking-wide text-[#730024]">
              — TECHTORCH RESOURCING FRAMEWORK
            </span>
          </blockquote>

          {/* SECONDARY HEADING */}
          <div className="flex flex-col items-center text-center">

            <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-lg sm:text-xl mb-3">
              Technology Expertise That Supports Your Projects
            </h3>

            <div className="space-y-4 text-[13.5px] sm:text-[14px] leading-relaxed text-neutral-600 max-w-3xl font-inter">

              <p>
                TechTorch's software engineering capabilities cover a broad
                range of technology requirements, including custom software
                development, web and mobile application development,
                enterprise software solutions, API development and system
                integration, quality assurance and testing, software
                modernization, and ongoing maintenance and support.
              </p>

              <p>
                This allows businesses to align technical resources with the
                nature of their projects, existing technology environment,
                and operational requirements.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          STRUCTURED APPROACH
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-6xl">

          <div className="text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold mb-3 font-inter">
            BENCH HIRING SUPPORT
          </div>

          <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl mb-8 max-w-xl">
            Structured Approach to Engineering Continuity
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {approachCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.number}
                  className="rounded-xl bg-white border border-neutral-200 p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between mb-5">

                    <div className="w-9 h-9 rounded-lg bg-[#730024]/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#730024]" />
                    </div>

                    <span className="text-[11px] font-bold text-neutral-300 font-inter">
                      {card.number}
                    </span>

                  </div>

                  <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[15px] mb-2">
                    {card.title}
                  </h3>

                  <p className="font-inter text-neutral-500 text-[12.5px] leading-relaxed mb-5">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-inter text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full"
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
      </section>

      {/* =====================================================
          TECHNOLOGY CAPABILITIES
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-6xl">

          <div className="text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold mb-3 font-inter">
            TECHNOLOGY CAPABILITIES
          </div>

          <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl mb-2 max-w-xl">
            Support Across Your Technology Requirements
          </h2>

          <p className="font-inter text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl">
            Bench hiring can support a range of technology activities
            depending on the requirements of your project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

            {capabilities.map((cap) => {
              const Icon = cap.icon;

              return (
                <div
                  key={cap.number}
                  className="rounded-xl bg-white border border-neutral-200 p-5"
                >
                  <div className="flex items-center justify-between mb-4">

                    <div className="w-9 h-9 rounded-lg bg-[#730024]/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#730024]" />
                    </div>

                    <span className="text-[9.5px] tracking-wide font-semibold text-neutral-300 font-inter">
                      CAPABILITY {cap.number}
                    </span>

                  </div>

                  <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[14px] mb-2 leading-snug">
                    {cap.title}
                  </h3>

                  <p className="font-inter text-neutral-500 text-[12px] leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  <span className="font-inter text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full">
                    {cap.tag}
                  </span>
                </div>
              );
            })}

          </div>

          {/* Capability 07 */}
          <div className="rounded-xl bg-white border border-neutral-200 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

            <div className="flex items-start sm:items-center gap-4">

              <div className="w-9 h-9 rounded-lg bg-[#730024]/5 flex items-center justify-center shrink-0">
                <RefreshCw className="w-4 h-4 text-[#730024]" />
              </div>

              <div>

                <div className="text-[9.5px] tracking-wide text-[#730024] font-bold mb-1 font-inter">
                  CAPABILITY 07
                </div>

                <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[14px] mb-1">
                  Ongoing Maintenance & Support
                </h3>

                <p className="font-inter text-neutral-500 text-[12px] leading-relaxed max-w-xl">
                  Provide continued technical assistance, updates,
                  improvements, and support throughout the software lifecycle.
                </p>

              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">

              <span className="font-inter text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                SLA & Continuous Health
              </span>

              <span className="font-inter text-[10.5px] font-semibold text-[#730024] whitespace-nowrap">
                Specialized Support →
              </span>

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          DELIVERY WORKFLOW
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-6xl">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">

            <div className="text-[9.5px] sm:text-[10px] tracking-wide text-[#730024] font-bold bg-[#730024]/5 border border-[#730024]/10 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 w-fit font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
              DELIVERY WORKFLOW • 4-PHASE DEPLOYMENT
            </div>

            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full w-fit font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
              SLA-GOVERNED EXECUTION
            </span>

          </div>

          <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl mb-2 max-w-xl">
            From Requirement to Resource Alignment
          </h2>

          <p className="font-inter text-neutral-500 text-[13.5px] leading-relaxed mb-8 max-w-xl">
            A systematic four-stage methodology engineered to maintain
            project velocity, smooth onboarding, and uninterrupted
            operational continuity.
          </p>

          {/* Step Tracker */}
          <div className="grid grid-cols-4 items-center mb-10 relative">

            <div className="absolute top-3 left-0 right-0 h-px bg-neutral-200 mx-6 sm:mx-12" />

            {phases.map((p) => (
              <div
                key={p.dot}
                className="flex flex-col items-center relative z-10"
              >
                <div className="w-6 h-6 rounded-full bg-[#730024] text-white text-[11px] font-bold flex items-center justify-center mb-2">
                  {p.dot}
                </div>

                <span className="text-[10px] sm:text-[11.5px] font-medium text-neutral-600 font-inter text-center">
                  {p.label}
                </span>
              </div>
            ))}

          </div>

          {/* Phase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">

            {phases.map((p) => {
              const Icon = p.icon;

              return (
                <div
                  key={p.tag}
                  className="rounded-xl bg-white border border-neutral-200 p-5"
                >

                  <div className="flex items-center justify-between mb-4">

                    <div className="w-8 h-8 rounded-lg bg-[#730024]/5 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-[#730024]" />
                    </div>

                    <span className="text-[9.5px] font-semibold text-neutral-400 font-inter">
                      {p.tag}
                    </span>

                  </div>

                  <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[14.5px] mb-2">
                    {p.title}
                  </h3>

                  <p className="font-inter text-neutral-500 text-[12px] leading-relaxed mb-3">
                    {p.description}
                  </p>

                  <div className="text-[9.5px] tracking-wide text-neutral-400 font-semibold mb-1.5 font-inter">
                    KEY ACTIVITIES
                  </div>

                  <ul className="space-y-1 mb-4">

                    {p.keyActivities.map((a) => (
                      <li
                        key={a}
                        className="text-[11px] text-neutral-500 flex items-center gap-1.5 font-inter"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#730024] shrink-0" />
                        {a}
                      </li>
                    ))}

                  </ul>

                  <div className="border-t border-neutral-100 pt-3 flex items-center justify-between gap-2">

                    <span className="text-[10.5px] font-semibold text-[#730024] font-inter">
                      {p.footLabel}
                    </span>

                    <span className="text-[10px] text-neutral-400 font-medium font-inter">
                      {p.footRight}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Enterprise Guarantee */}
          <div className="rounded-lg bg-white border border-neutral-200 px-5 py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

            <div className="flex items-start sm:items-center gap-3">

              <CheckCheck className="w-4 h-4 text-[#730024] shrink-0 mt-0.5 sm:mt-0" />

              <p className="text-[12px] text-neutral-600 font-inter">

                <span className="font-semibold text-[#1c1c1c]">
                  Enterprise Deployment Guarantee:
                </span>{" "}
                Dedicated account management, structured weekly velocity
                checkpoints, and zero operational disruption throughout every
                engagement.

              </p>

            </div>

            <span className="text-[10.5px] font-bold text-[#730024] whitespace-nowrap font-inter">
              ZERO DISRUPTION
            </span>

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY TECHTORCH
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
        <div
          className="
            w-full
            max-w-6xl
            rounded-xl
            sm:rounded-2xl
            px-5
            sm:px-8
            lg:px-10
            py-8
            sm:py-10
            lg:py-12
          "
          style={{
            background: "#730024",
          }}
        >

          {/* SECTION LABEL */}
          <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-wide font-bold text-white/90 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full mb-4 sm:mb-5 font-inter">
            <span className="w-1 h-1 rounded-full bg-white/80" />
            WHY TECHTORCH
          </span>

          {/* HEADING */}
          <h2 className="font-jakarta text-white font-semibold text-2xl sm:text-3xl lg:text-[2rem] leading-[1.2] mb-3 max-w-2xl">
            Technology Support Built Around Your Requirements
          </h2>

          {/* SUB HEADING */}
          <p className="font-jakarta text-white/75 text-[13px] sm:text-[14px] leading-relaxed max-w-2xl mb-7 sm:mb-8">
            Flexible resourcing engineered to integrate seamlessly with your
            teams, methodologies, and enterprise goals.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">

            {whyCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="
                    rounded-lg
                    sm:rounded-xl
                    bg-[#811A55]
                    border
                    border-white/20
                    p-5
                    sm:p-5
                    min-h-[190px]
                    sm:min-h-[205px]
                    flex
                    flex-col
                    transition-all
                    duration-300
                    hover:bg-[#8B215D]
                    hover:border-white/30
                  "
                >

                  {/* ICON */}
                  <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/10 flex items-center justify-center mb-5">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* CARD HEADING */}
                  <h3 className="font-jakarta text-white font-semibold text-[13.5px] sm:text-[14px] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  {/* CARD TEXT */}
                  <p className="font-inter text-white/70 text-[11.5px] sm:text-[12px] leading-relaxed">
                    {card.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="flex justify-center px-4 sm:px-6 py-12 sm:py-16">

        <div className="w-full max-w-3xl rounded-2xl bg-[#730024]/5 border border-[#730024]/10 px-5 sm:px-8 py-10 sm:py-14 text-center">

          <div className="inline-flex items-center gap-1.5 text-[10px] tracking-wide text-[#730024] font-bold bg-white px-3 py-1.5 rounded-full mb-5 font-inter">
            <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
            STRENGTHEN YOUR TEAM
          </div>

          <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl leading-snug mb-4">
            Strengthen Your Technology Team with the Right Resources
          </h2>

          <p className="font-inter text-neutral-500 text-[13.5px] sm:text-[14px] leading-relaxed max-w-xl mx-auto mb-8">
            Whether you need additional technical capacity for an ongoing
            project or support for a new technology initiative, TechTorch can
            help you explore resource and staffing solutions aligned with
            your requirements.
          </p>

          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[#730024]
              text-white
              font-inter
              font-semibold
              text-sm
              px-6
              py-3.5
              hover:bg-[#5c001d]
              transition-colors
              mb-7
            "
          >
            Talk to Our Experts
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4">

            {finalTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-inter font-medium text-neutral-600"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#730024]" />
                {tag}
              </span>
            ))}

          </div>

          <div className="text-[10.5px] sm:text-[11px] text-neutral-400 font-inter font-medium">
            Enterprise Grade Governance & Rapid SLA Deployment
          </div>

        </div>

      </section>

    </div>
  );
}