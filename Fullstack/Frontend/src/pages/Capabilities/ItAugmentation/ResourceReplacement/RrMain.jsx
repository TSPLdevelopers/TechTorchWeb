import React from "react";
import {
  Zap,
  ArrowRight,
  Users,
  ShieldCheck,
  UserCog,
  ArrowLeftRight,
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  RefreshCw,
  Search,
  CheckCircle2,
  Repeat2,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const heroTags = [
  "Skilled Resources",
  "Flexible Support",
  "Project Continuity",
];

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
    tags: [
      "Relevant Expertise",
      "Technical Skills",
      "Project Requirements",
    ],
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Smooth Team Transition",
    description:
      "Support a practical transition when a technology resource needs to be replaced, helping the incoming resource understand the project environment and responsibilities.",
    tags: [
      "Knowledge Transfer",
      "Team Collaboration",
      "Project Context",
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Flexible Workforce Support",
    description:
      "Access skilled technology professionals when your project or business requirements change, complementing your existing workforce with flexible resource support.",
    tags: [
      "Skilled Professionals",
      "Flexible Resources",
      "Team Support",
    ],
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

/* =========================================================
   COMPONENT
========================================================= */

export default function ResourceReplacementPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8f7f5] font-inter overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-8 sm:mb-10 lg:mb-12">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">

              {/* Label */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 sm:px-3 py-1 sm:py-1.5 mb-4 sm:mb-5 lg:mb-6 w-fit">
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-rose-800 shrink-0" />

                <span className="font-inter text-[8px] sm:text-[9px] lg:text-[10px] tracking-wide text-rose-800 font-bold">
                  IT AUGMENTATION • RESOURCE REPLACEMENT
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="
                font-jakarta
                font-semibold
                text-[#1c1c1c]
                text-[30px]
                sm:text-[34px]
                md:text-[38px]
                lg:text-4xl
                xl:text-[40px]
                leading-[1.12]
                sm:leading-[1.14]
                lg:leading-[1.15]
                mb-4
                sm:mb-5
                max-w-xl
              ">
                Support Project Continuity with the Right Technology
                Resources
              </h1>

              {/* Description */}
              <p className="
                font-inter
                text-neutral-500
                text-[12px]
                sm:text-[13px]
                lg:text-[14.5px]
                leading-[1.65]
                max-w-md
                mb-5
                sm:mb-6
                lg:mb-7
              ">
                Replace technology resources when your project requirements
                change, while keeping your teams supported with the skills
                and expertise they need.
              </p>

              {/* Button */}
              <button className="
                font-inter
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                bg-rose-900
                text-white
                font-semibold
                text-[11px]
                sm:text-[12px]
                lg:text-sm
                px-4
                sm:px-5
                lg:px-6
                py-2.5
                sm:py-3
                lg:py-3.5
                w-fit
                hover:bg-rose-950
                transition-colors
                mb-5
                sm:mb-6
              ">
                Talk to Our Experts
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      font-inter
                      inline-flex
                      items-center
                      gap-1.5
                      text-[9px]
                      sm:text-[10px]
                      lg:text-[11.5px]
                      font-medium
                      text-neutral-600
                      bg-white
                      border
                      border-neutral-200
                      px-2.5
                      sm:px-3
                      py-1
                      sm:py-1.5
                      rounded-full
                    "
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-800 shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="
              w-full
              rounded-xl
              bg-white
              border
              border-neutral-200
              shadow-sm
              overflow-hidden
            ">
              <div className="relative h-[210px] sm:h-[240px] md:h-[270px] lg:h-56 xl:h-[270px]">

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('rrmain.png')",
                  }}
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-transparent
                " />

                <span className="
                  font-inter
                  absolute
                  top-3
                  left-3
                  inline-flex
                  items-center
                  gap-1.5
                  bg-black/40
                  backdrop-blur
                  text-white
                  text-[8px]
                  sm:text-[9px]
                  lg:text-[10px]
                  font-semibold
                  px-2
                  sm:px-2.5
                  py-1
                  rounded-full
                ">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Project Continuity Support
                </span>
              </div>

              <div className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
                px-3
                sm:px-4
                py-3
                sm:py-3.5
              ">
                <span className="
                  font-inter
                  flex
                  items-center
                  gap-1.5
                  text-[9px]
                  sm:text-[10px]
                  lg:text-[11px]
                  text-neutral-500
                  font-medium
                ">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-800 shrink-0" />
                  Seamless Transition & Knowledge Transfer
                </span>

                <span className="
                  font-inter
                  text-[9px]
                  sm:text-[10px]
                  lg:text-[11px]
                  text-neutral-400
                  font-medium
                ">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </div>

          {/* PILLARS */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            sm:gap-5
          ">
            {pillars.map((p) => (
              <div
                key={p.badge}
                className="
                  rounded-xl
                  bg-white
                  border
                  border-neutral-200
                  p-4
                  sm:p-5
                  lg:p-6
                "
              >
                <div className="
                  font-inter
                  text-[8px]
                  sm:text-[9px]
                  lg:text-[10px]
                  tracking-wide
                  text-rose-800
                  font-bold
                  mb-2
                  sm:mb-3
                ">
                  {p.badge}
                </div>

                <h3 className="
                  font-jakarta
                  text-[#1c1c1c]
                  font-semibold
                  text-[14px]
                  sm:text-[15px]
                  lg:text-[16px]
                  leading-snug
                  mb-2
                ">
                  {p.title}
                </h3>

                <p className="
                  font-inter
                  text-neutral-500
                  text-[11px]
                  sm:text-[12px]
                  lg:text-[13px]
                  leading-[1.65]
                  mb-3
                  sm:mb-4
                ">
                  {p.description}
                </p>

                <div className="border-t border-neutral-100 pt-3">
                  <span className="
                    font-inter
                    text-[9px]
                    sm:text-[10px]
                    lg:text-[11.5px]
                    font-semibold
                    text-rose-800
                  ">
                    {p.linkLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          STRATEGIC RESOURCING
      ===================================================== */}

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8">

          <div className="
            rounded-xl
            sm:rounded-2xl
            bg-white
            border
            border-neutral-200
            px-5
            sm:px-7
            lg:px-10
            py-7
            sm:py-9
            lg:py-12
          ">

            <div className="
              font-inter
              text-[8px]
              sm:text-[9px]
              lg:text-[10px]
              tracking-wide
              text-rose-800
              font-bold
              mb-2
              sm:mb-3
            ">
              STRATEGIC RESOURCING
            </div>

            <h2 className="
              font-jakarta
              text-[#1c1c1c]
              font-semibold
              text-[21px]
              sm:text-[24px]
              lg:text-2xl
              leading-[1.3]
              mb-4
              sm:mb-5
              lg:mb-6
              max-w-xl
            ">
              Flexible Resource Replacement for Changing Technology Needs
            </h2>

            <div className="
              font-inter
              space-y-3
              sm:space-y-4
              text-[11px]
              sm:text-[12px]
              lg:text-[14px]
              leading-[1.7]
              text-neutral-600
              max-w-3xl
              mb-5
              sm:mb-6
            ">
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

            {/* QUOTE */}
            <blockquote className="
              border-l-[3px]
              border-rose-800
              bg-rose-50/60
              pl-4
              sm:pl-5
              lg:pl-6
              pr-4
              sm:pr-5
              lg:pr-6
              py-4
              sm:py-5
              mb-6
              sm:mb-7
              lg:mb-8
              max-w-3xl
            ">
              <p className="
                font-inter
                text-[12px]
                sm:text-[13px]
                lg:text-[15px]
                italic
                text-neutral-700
                leading-[1.6]
                mb-2
              ">
                "The focus is simple: understand the requirement, align the
                right expertise, and support the project effectively."
              </p>

              <span className="
                font-inter
                text-[8px]
                sm:text-[9px]
                lg:text-[11px]
                font-semibold
                tracking-wide
                text-rose-800
              ">
                — TECHTORCH RESOURCING FRAMEWORK
              </span>
            </blockquote>

            <h3 className="
              font-jakarta
              text-[#1c1c1c]
              font-semibold
              text-[16px]
              sm:text-[17px]
              lg:text-lg
              leading-snug
              mb-2
              sm:mb-3
            ">
              Supporting Your Team When Requirements Change
            </h3>

            <div className="
              font-inter
              space-y-3
              sm:space-y-4
              text-[11px]
              sm:text-[12px]
              lg:text-[14px]
              leading-[1.7]
              text-neutral-600
              max-w-3xl
            ">
              <p>
                Resource replacement can be important when a project requires
                a different skill set, additional technical support, or
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
      </section>


      {/* =====================================================
          STRUCTURED APPROACH
      ===================================================== */}

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 lg:py-10">

          <div className="
            font-inter
            text-[8px]
            sm:text-[9px]
            lg:text-[10px]
            tracking-wide
            text-rose-800
            font-bold
            mb-2
            sm:mb-3
          ">
            RESOURCE REPLACEMENT SUPPORT
          </div>

          <h2 className="
            font-jakarta
            text-[#1c1c1c]
            font-semibold
            text-[21px]
            sm:text-[24px]
            lg:text-2xl
            leading-snug
            mb-5
            sm:mb-7
            lg:mb-8
            max-w-xl
          ">
            Structured Approach to Engineering Continuity
          </h2>

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
          ">
            {approachCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.number}
                  className="
                    rounded-xl
                    bg-white
                    border
                    border-neutral-200
                    p-4
                    sm:p-5
                    lg:p-6
                  "
                >
                  <div className="
                    flex
                    items-center
                    justify-between
                    mb-4
                    sm:mb-5
                  ">
                    <div className="
                      w-9
                      h-9
                      rounded-lg
                      bg-rose-50
                      flex
                      items-center
                      justify-center
                    ">
                      <Icon className="w-4 h-4 text-rose-800" />
                    </div>

                    <span className="
                      font-inter
                      text-[9px]
                      sm:text-[10px]
                      lg:text-[11px]
                      font-bold
                      text-neutral-300
                    ">
                      {card.number}
                    </span>
                  </div>

                  <h3 className="
                    font-jakarta
                    text-[#1c1c1c]
                    font-semibold
                    text-[13px]
                    sm:text-[14px]
                    lg:text-[15px]
                    leading-snug
                    mb-2
                  ">
                    {card.title}
                  </h3>

                  <p className="
                    font-inter
                    text-neutral-500
                    text-[10.5px]
                    sm:text-[11.5px]
                    lg:text-[12.5px]
                    leading-[1.65]
                    mb-4
                    sm:mb-5
                  ">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          font-inter
                          text-[8.5px]
                          sm:text-[9.5px]
                          lg:text-[10.5px]
                          font-medium
                          text-neutral-600
                          bg-neutral-100
                          px-2
                          sm:px-2.5
                          py-1
                          rounded-full
                        "
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

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 lg:py-10">

          <div className="
            font-inter
            text-[8px]
            sm:text-[9px]
            lg:text-[10px]
            tracking-wide
            text-rose-800
            font-bold
            mb-2
            sm:mb-3
          ">
            TECHNOLOGY CAPABILITIES
          </div>

          <h2 className="
            font-jakarta
            text-[#1c1c1c]
            font-semibold
            text-[21px]
            sm:text-[24px]
            lg:text-2xl
            leading-snug
            mb-2
            max-w-xl
          ">
            Support Across Your Technology Requirements
          </h2>

          <p className="
            font-inter
            text-neutral-500
            text-[11px]
            sm:text-[12px]
            lg:text-[13.5px]
            leading-relaxed
            mb-6
            sm:mb-7
            lg:mb-8
            max-w-xl
          ">
            Resource replacement can support a range of technology activities
            depending on the requirements of your project.
          </p>

          {/* Capability Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            mb-4
            sm:mb-5
          ">
            {capabilities.map((cap) => {
              const Icon = cap.icon;

              return (
                <div
                  key={cap.number}
                  className="
                    rounded-xl
                    bg-white
                    border
                    border-neutral-200
                    p-4
                    sm:p-5
                  "
                >
                  <div className="
                    flex
                    items-center
                    justify-between
                    mb-3
                    sm:mb-4
                  ">
                    <div className="
                      w-9
                      h-9
                      rounded-lg
                      bg-rose-50
                      flex
                      items-center
                      justify-center
                    ">
                      <Icon className="w-4 h-4 text-rose-800" />
                    </div>

                    <span className="
                      font-inter
                      text-[8px]
                      sm:text-[9px]
                      lg:text-[10px]
                      font-semibold
                      text-neutral-300
                    ">
                      • {cap.number}
                    </span>
                  </div>

                  <div className="
                    font-inter
                    text-[8px]
                    sm:text-[8.5px]
                    lg:text-[9.5px]
                    tracking-wide
                    text-rose-800
                    font-bold
                    mb-1.5
                    sm:mb-2
                  ">
                    CAPABILITY {cap.number}
                  </div>

                  <h3 className="
                    font-jakarta
                    text-[#1c1c1c]
                    font-semibold
                    text-[12.5px]
                    sm:text-[13px]
                    lg:text-[14px]
                    leading-[1.4]
                    mb-2
                  ">
                    {cap.title}
                  </h3>

                  <p className="
                    font-inter
                    text-neutral-500
                    text-[10px]
                    sm:text-[11px]
                    lg:text-[12px]
                    leading-[1.65]
                    mb-3
                    sm:mb-4
                  ">
                    {cap.description}
                  </p>

                  <span className="
                    font-inter
                    inline-block
                    text-[8.5px]
                    sm:text-[9.5px]
                    lg:text-[10.5px]
                    font-medium
                    text-neutral-600
                    bg-neutral-100
                    px-2
                    sm:px-2.5
                    py-1
                    rounded-full
                  ">
                    {cap.tag}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Capability 07 */}
          <div className="
            rounded-xl
            bg-white
            border
            border-neutral-200
            p-4
            sm:p-5
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
            sm:gap-5
          ">
            <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">

              <div className="
                w-9
                h-9
                rounded-lg
                bg-rose-50
                flex
                items-center
                justify-center
                shrink-0
              ">
                <RefreshCw className="w-4 h-4 text-rose-800" />
              </div>

              <div className="min-w-0">
                <div className="
                  font-inter
                  text-[8px]
                  sm:text-[8.5px]
                  lg:text-[9.5px]
                  tracking-wide
                  text-rose-800
                  font-bold
                  mb-1
                ">
                  CAPABILITY 07 • 07
                </div>

                <h3 className="
                  font-jakarta
                  text-[#1c1c1c]
                  font-semibold
                  text-[12.5px]
                  sm:text-[13px]
                  lg:text-[14px]
                  mb-1
                ">
                  Ongoing Maintenance & Support
                </h3>

                <p className="
                  font-inter
                  text-neutral-500
                  text-[10px]
                  sm:text-[11px]
                  lg:text-[12px]
                  leading-relaxed
                  max-w-xl
                ">
                  Maintain and improve existing software through technical
                  support, updates, maintenance, and ongoing enhancements.
                </p>
              </div>
            </div>

            <div className="
              flex
              flex-wrap
              items-center
              gap-2
              sm:gap-3
              shrink-0
            ">
              <span className="
                font-inter
                text-[8.5px]
                sm:text-[9.5px]
                lg:text-[10.5px]
                font-medium
                text-neutral-600
                bg-neutral-100
                px-2
                sm:px-2.5
                py-1
                rounded-full
                whitespace-nowrap
              ">
                SLA & Continuous Health
              </span>

              <span className="
                font-inter
                text-[8.5px]
                sm:text-[9.5px]
                lg:text-[10.5px]
                font-semibold
                text-rose-800
                whitespace-nowrap
              ">
                Specialized Support →
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          DELIVERY WORKFLOW
      ===================================================== */}

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 lg:py-10">

          <div className="
            font-inter
            text-[8px]
            sm:text-[9px]
            lg:text-[10px]
            tracking-wide
            text-rose-800
            font-bold
            mb-2
            sm:mb-3
          ">
            DELIVERY WORKFLOW
          </div>

          <h2 className="
            font-jakarta
            text-[#1c1c1c]
            font-semibold
            text-[21px]
            sm:text-[24px]
            lg:text-2xl
            leading-snug
            mb-2
            max-w-xl
          ">
            From Requirement to Resource Alignment
          </h2>

          <p className="
            font-inter
            text-neutral-500
            text-[11px]
            sm:text-[12px]
            lg:text-[13.5px]
            leading-relaxed
            mb-6
            sm:mb-7
            lg:mb-8
            max-w-xl
          ">
            A systematic four-stage methodology engineered to maintain
            project velocity, smooth onboarding, and uninterrupted
            operational continuity.
          </p>

          <div className="
            rounded-xl
            bg-white
            border
            border-neutral-200
            p-4
            sm:p-5
            lg:p-6
          ">
            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              sm:gap-6
            ">
              {phases.map((p) => {
                const Icon = p.icon;

                return (
                  <div key={p.number} className="relative">

                    <div className="
                      flex
                      items-center
                      gap-2
                      mb-3
                      sm:mb-4
                    ">
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
                            ? "font-inter text-[9px] sm:text-[10px] font-bold text-white bg-rose-900 px-2 py-0.5 rounded-full"
                            : "font-inter text-[9px] sm:text-[10px] font-bold text-neutral-400"
                        }
                      >
                        {p.number}
                      </span>
                    </div>

                    <div className="
                      font-inter
                      text-[8px]
                      sm:text-[8.5px]
                      lg:text-[9.5px]
                      tracking-wide
                      text-neutral-400
                      font-semibold
                      mb-1
                      sm:mb-1.5
                    ">
                      {p.phase}
                    </div>

                    <h3 className="
                      font-jakarta
                      text-[#1c1c1c]
                      font-semibold
                      text-[13px]
                      sm:text-[13.5px]
                      lg:text-[14.5px]
                      mb-2
                    ">
                      {p.title}
                    </h3>

                    <p className="
                      font-inter
                      text-neutral-500
                      text-[10px]
                      sm:text-[11px]
                      lg:text-[12px]
                      leading-[1.65]
                      mb-2
                      sm:mb-3
                    ">
                      {p.description}
                    </p>

                    <span className="
                      font-inter
                      text-[8.5px]
                      sm:text-[9.5px]
                      lg:text-[10.5px]
                      font-medium
                      text-rose-800
                    ">
                      • {p.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          WHY TECHTORCH
      ===================================================== */}

      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 lg:py-10">

          <div
            className="
              w-full
              rounded-xl
              sm:rounded-2xl
              px-5
              sm:px-7
              lg:px-10
              py-8
              sm:py-10
              lg:py-12
            "
            style={{
              background:
                "radial-gradient(120% 140% at 90% 0%, #7a0f47 0%, #4a0a30 60%)",
            }}
          >

            <span className="
              font-inter
              inline-flex
              items-center
              gap-1.5
              text-[8px]
              sm:text-[9px]
              tracking-wide
              font-bold
              text-rose-100
              bg-white/10
              px-2.5
              sm:px-3
              py-1
              rounded-full
              mb-4
              sm:mb-5
            ">
              <span className="w-1 h-1 rounded-full bg-rose-300" />
              WHY TECHTORCH
            </span>

            <h2 className="
              font-jakarta
              text-white
              font-semibold
              text-[24px]
              sm:text-[28px]
              lg:text-3xl
              leading-[1.25]
              mb-2
              sm:mb-3
              max-w-lg
            ">
              Technology Resources Aligned with Your Business Needs
            </h2>

            <p className="
              font-inter
              text-rose-100/70
              text-[10.5px]
              sm:text-[12px]
              lg:text-[13.5px]
              leading-relaxed
              max-w-xl
              mb-6
              sm:mb-8
            ">
              Technical capabilities aligned with your project requirements
              and operational continuity.
            </p>

            <div className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-3
              sm:gap-4
            ">
              {whyCards.map((card) => (
                <div
                  key={card.title}
                  className="
                    rounded-lg
                    sm:rounded-xl
                    bg-white/[0.08]
                    border
                    border-white/10
                    p-4
                    sm:p-5
                  "
                >
                  <h3 className="
                    font-jakarta
                    text-white
                    font-semibold
                    text-[12px]
                    sm:text-[13px]
                    lg:text-[14px]
                    mb-1.5
                    sm:mb-2
                  ">
                    {card.title}
                  </h3>

                  <p className="
                    font-inter
                    text-rose-100/60
                    text-[10px]
                    sm:text-[11px]
                    lg:text-[12.5px]
                    leading-[1.65]
                  ">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="w-full">
        <div className="
          max-w-3xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-10
          sm:py-12
          lg:py-16
        ">

          <div className="text-center">

            <h2 className="
              font-jakarta
              text-[#1c1c1c]
              font-semibold
              text-[23px]
              sm:text-[27px]
              lg:text-3xl
              leading-[1.25]
              mb-3
              sm:mb-4
            ">
              Keep Your Technology Projects Moving Forward
            </h2>

            <p className="
              font-inter
              text-neutral-500
              text-[11px]
              sm:text-[12px]
              lg:text-[14px]
              leading-[1.7]
              max-w-xl
              mx-auto
              mb-5
              sm:mb-7
              lg:mb-8
            ">
              When your resource requirements change, TechTorch can help you
              explore the right technical capabilities to support your team
              and technology initiatives.
            </p>

            <button className="
              font-inter
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-rose-900
              text-white
              font-semibold
              text-[11px]
              sm:text-[12px]
              lg:text-sm
              px-5
              sm:px-6
              py-2.5
              sm:py-3
              lg:py-3.5
              hover:bg-rose-950
              transition-colors
              mb-5
              sm:mb-7
            ">
              Talk to Our Experts
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              sm:gap-4
              lg:gap-6
            ">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="
                    font-inter
                    text-[8.5px]
                    sm:text-[10px]
                    lg:text-[12px]
                    font-medium
                    text-neutral-500
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}