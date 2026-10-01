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
   DATA
========================================================= */

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
    tags: [
      "Technical Skills",
      "Relevant Expertise",
      "Project Requirements",
    ],
  },
  {
    icon: ArrowLeftRight,
    number: "02",
    title: "Flexible Team Support",
    description:
      "Add technical capacity when your workload or project requirements change, while complementing the capabilities of your existing team.",
    tags: [
      "Flexible Staffing",
      "Team Support",
      "Technical Capacity",
    ],
  },
  {
    icon: Users,
    number: "03",
    title: "Project-Focused Collaboration",
    description:
      "Enable resources to work within your existing project structure, processes, technologies, and team environment.",
    tags: [
      "Project Collaboration",
      "Team Integration",
      "Technical Support",
    ],
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
    <div className="w-full bg-[#f8f9fa] font-inter text-[#1c1c1c] overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-10">
        <div className="w-full max-w-6xl">

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_410px] gap-8 lg:gap-12 items-center">

            {/* LEFT */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#730042]/5 border border-[#730042]/10 px-3 py-1.5 mb-5 sm:mb-6">
                <Zap className="w-3 h-3 text-[#730042]" />

                <span className="font-inter text-[8px] sm:text-[9px] tracking-wide text-[#730042] font-bold">
                  IT AUGMENTATION • BENCH HIRING
                </span>
              </div>

              {/* Heading */}
              <h1 className="
                font-jakarta
                font-semibold
                text-[30px]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[42px]
                leading-[1.12]
                mb-4
                sm:mb-5
                text-[#161620]
                max-w-xl
              ">
                Build Your Technology Team with the Right Resources
              </h1>

              {/* Subheading */}
              <p className="
                font-jakarta
                font-medium
                text-neutral-500
                text-[12px]
                sm:text-[13px]
                md:text-[13.5px]
                lg:text-[14px]
                leading-[1.55]
                max-w-xl
                mb-5
                sm:mb-6
              ">
                Access skilled technology professionals to support your
                projects, strengthen your existing teams, and respond to
                changing business and technology requirements.
              </p>

              {/* Button */}
              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#730042]
                  text-white
                  font-inter
                  font-semibold
                  text-[10px]
                  sm:text-[11px]
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  w-fit
                  hover:bg-[#5c0035]
                  transition-colors
                  mb-5
                "
              >
                Talk to Our Experts
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-xl">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex
                      items-center
                      gap-1
                      font-inter
                      text-[7.5px]
                      sm:text-[8px]
                      font-medium
                      text-neutral-600
                      bg-white
                      border
                      border-neutral-200
                      px-2
                      sm:px-2.5
                      py-1
                      rounded-[3px]
                    "
                  >
                    <span className="w-1 h-1 rounded-full bg-[#730042]" />
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
                rounded-xl
                bg-white
                border
                border-neutral-200
                shadow-sm
                overflow-hidden
              "
            >
              <div className="relative h-[210px] sm:h-[250px] lg:h-[270px]">

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/benchhiring.png')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-white font-inter text-[7px] sm:text-[8px] font-medium">

                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Enterprise Ready Bench
                  </span>

                  <span>
                    Verified Technical Talent
                  </span>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          STRATEGIC RESOURCING
      ===================================================== */}

      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="w-full max-w-6xl">

          <div className="flex flex-col items-center text-center">

            {/* Label */}
            <div className="
              inline-flex
              items-center
              gap-1.5
              font-inter
              text-[8px]
              sm:text-[9px]
              tracking-wide
              text-[#730042]
              font-bold
              bg-[#730042]/5
              border
              border-[#730042]/10
              px-2.5
              py-1.5
              rounded-full
              mb-4
            ">
              <span className="w-1 h-1 rounded-full bg-[#730042]" />
              STRATEGIC RESOURCING
            </div>

            {/* Heading */}
            <h2 className="
              font-jakarta
              text-[#161620]
              font-semibold
              text-[24px]
              sm:text-[27px]
              md:text-[29px]
              lg:text-[31px]
              leading-[1.2]
              mb-5
              max-w-2xl
            ">
              Flexible Technology Resources for Growing Business Needs
            </h2>

            {/* Paragraphs */}
            <div className="
              w-full
              max-w-3xl
              space-y-4
              font-inter
              text-[9.5px]
              sm:text-[10.5px]
              lg:text-[11.5px]
              leading-[1.65]
              text-neutral-600
            ">

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
          <blockquote className="
            w-full
            max-w-3xl
            mx-auto
            border-l-2
            border-[#730042]
            bg-[#730042]/5
            pl-4
            sm:pl-5
            pr-4
            sm:pr-5
            py-4
            my-7
            text-left
          ">
            <p className="
              font-inter
              text-[9.5px]
              sm:text-[10.5px]
              lg:text-[11.5px]
              italic
              text-neutral-700
              leading-[1.55]
              mb-1.5
            ">
              "The right people, the right technical capabilities, and the
              right support for your business requirements."
            </p>

            <span className="
              font-inter
              text-[7px]
              sm:text-[8px]
              font-semibold
              tracking-wide
              text-[#730042]
            ">
              — TECHTORCH RESOURCING FRAMEWORK
            </span>
          </blockquote>


          {/* SECONDARY HEADING */}
          <div className="flex flex-col items-center text-center">

            <h3 className="
              font-jakarta
              text-[#161620]
              font-semibold
              text-[17px]
              sm:text-[19px]
              md:text-[20px]
              lg:text-[21px]
              mb-3
            ">
              Technology Expertise That Supports Your Projects
            </h3>

            <div className="
              w-full
              max-w-3xl
              space-y-4
              font-inter
              text-[9.5px]
              sm:text-[10.5px]
              lg:text-[11.5px]
              leading-[1.65]
              text-neutral-600
            ">

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

      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="w-full max-w-6xl">

          <div className="
            font-inter
            text-[8px]
            sm:text-[9px]
            tracking-wide
            text-[#730042]
            font-bold
            mb-2.5
          ">
            BENCH HIRING SUPPORT
          </div>

          <h2 className="
            font-jakarta
            text-[#161620]
            font-semibold
            text-[23px]
            sm:text-[26px]
            md:text-[28px]
            lg:text-[30px]
            leading-[1.2]
            mb-6
            max-w-xl
          ">
            Structured Approach to Engineering Continuity
          </h2>


          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3
            sm:gap-4
          ">

            {approachCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.number}
                  className="
                    w-full
                    min-w-0
                    rounded-lg
                    bg-white
                    border
                    border-neutral-200
                    p-4
                    sm:p-5
                    transition-all
                    duration-300
                    hover:border-[#730042]/20
                    hover:shadow-[0_5px_18px_rgba(115,0,66,0.05)]
                  "
                >

                  <div className="flex items-center justify-between mb-4">

                    <div className="
                      w-7
                      h-7
                      sm:w-8
                      sm:h-8
                      rounded-md
                      bg-[#730042]/5
                      flex
                      items-center
                      justify-center
                      shrink-0
                    ">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#730042]" />
                    </div>

                    <span className="
                      font-inter
                      text-[8px]
                      sm:text-[9px]
                      font-bold
                      text-neutral-300
                    ">
                      {card.number}
                    </span>

                  </div>

                  <h3 className="
                    font-jakarta
                    text-[#161620]
                    font-semibold
                    text-[12px]
                    sm:text-[13px]
                    lg:text-[14px]
                    mb-2
                    leading-[1.35]
                  ">
                    {card.title}
                  </h3>

                  <p className="
                    font-inter
                    text-neutral-500
                    text-[9.5px]
                    sm:text-[10px]
                    lg:text-[10.5px]
                    leading-[1.6]
                    mb-4
                  ">
                    {card.description}
                  </p>

                  <div className="flex flex-wrap gap-1">

                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          font-inter
                          text-[7.5px]
                          sm:text-[8px]
                          font-medium
                          text-neutral-600
                          bg-neutral-100
                          px-1.5
                          py-1
                          rounded-[3px]
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

      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="w-full max-w-6xl">

          <div className="
            font-inter
            text-[8px]
            sm:text-[9px]
            tracking-wide
            text-[#730042]
            font-bold
            mb-2.5
          ">
            TECHNOLOGY CAPABILITIES
          </div>

          <h2 className="
            font-jakarta
            text-[#161620]
            font-semibold
            text-[23px]
            sm:text-[26px]
            md:text-[28px]
            lg:text-[30px]
            leading-[1.2]
            mb-2
            max-w-xl
          ">
            Support Across Your Technology Requirements
          </h2>

          <p className="
            font-inter
            text-neutral-500
            text-[9.5px]
            sm:text-[10.5px]
            lg:text-[11.5px]
            leading-relaxed
            mb-6
            max-w-xl
          ">
            Bench hiring can support a range of technology activities
            depending on the requirements of your project.
          </p>


          {/* Capability Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3
            sm:gap-4
            mb-4
          ">

            {capabilities.map((cap) => {
              const Icon = cap.icon;

              return (
                <div
                  key={cap.number}
                  className="
                    w-full
                    min-w-0
                    rounded-lg
                    bg-white
                    border
                    border-neutral-200
                    p-4
                    sm:p-5
                  "
                >

                  <div className="flex items-center justify-between mb-3">

                    <div className="
                      w-7
                      h-7
                      sm:w-8
                      sm:h-8
                      rounded-md
                      bg-[#730042]/5
                      flex
                      items-center
                      justify-center
                    ">
                      <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#730042]" />
                    </div>

                    <span className="
                      font-inter
                      text-[7px]
                      sm:text-[7.5px]
                      tracking-wide
                      font-semibold
                      text-neutral-300
                    ">
                      CAPABILITY {cap.number}
                    </span>

                  </div>


                  <h3 className="
                    font-jakarta
                    text-[#161620]
                    font-semibold
                    text-[11px]
                    sm:text-[12px]
                    lg:text-[13px]
                    mb-2
                    leading-[1.35]
                  ">
                    {cap.title}
                  </h3>

                  <p className="
                    font-inter
                    text-neutral-500
                    text-[9px]
                    sm:text-[9.5px]
                    lg:text-[10px]
                    leading-[1.6]
                    mb-3
                  ">
                    {cap.description}
                  </p>

                  <span className="
                    inline-flex
                    font-inter
                    text-[7.5px]
                    sm:text-[8px]
                    font-medium
                    text-neutral-600
                    bg-neutral-100
                    px-1.5
                    py-1
                    rounded-[3px]
                  ">
                    {cap.tag}
                  </span>

                </div>
              );
            })}

          </div>


          {/* Capability 07 */}
          <div className="
            w-full
            rounded-lg
            bg-white
            border
            border-neutral-200
            p-4
            sm:p-5
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
          ">

            <div className="flex items-start sm:items-center gap-3">

              <div className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                rounded-md
                bg-[#730042]/5
                flex
                items-center
                justify-center
                shrink-0
              ">
                <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#730042]" />
              </div>

              <div>

                <div className="
                  font-inter
                  text-[7px]
                  sm:text-[7.5px]
                  tracking-wide
                  text-[#730042]
                  font-bold
                  mb-1
                ">
                  CAPABILITY 07
                </div>

                <h3 className="
                  font-jakarta
                  text-[#161620]
                  font-semibold
                  text-[11px]
                  sm:text-[12px]
                  lg:text-[13px]
                  mb-1
                ">
                  Ongoing Maintenance & Support
                </h3>

                <p className="
                  font-inter
                  text-neutral-500
                  text-[9px]
                  sm:text-[9.5px]
                  lg:text-[10px]
                  leading-relaxed
                  max-w-xl
                ">
                  Provide continued technical assistance, updates,
                  improvements, and support throughout the software lifecycle.
                </p>

              </div>
            </div>


            <div className="
              flex
              items-center
              gap-2
              shrink-0
              flex-wrap
            ">

              <span className="
                font-inter
                text-[7.5px]
                sm:text-[8px]
                font-medium
                text-neutral-600
                bg-neutral-100
                px-1.5
                py-1
                rounded-[3px]
                whitespace-nowrap
              ">
                SLA & Continuous Health
              </span>

              <span className="
                font-inter
                text-[7.5px]
                sm:text-[8px]
                font-semibold
                text-[#730042]
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

      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="w-full max-w-6xl">

          <div className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
            mb-3
          ">

            <div className="
              inline-flex
              items-center
              gap-1.5
              font-inter
              text-[7px]
              sm:text-[8px]
              tracking-wide
              text-[#730042]
              font-bold
              bg-[#730042]/5
              border
              border-[#730042]/10
              px-2.5
              py-1.5
              rounded-full
              w-fit
            ">
              <span className="w-1 h-1 rounded-full bg-[#730042]" />
              DELIVERY WORKFLOW • 4-PHASE DEPLOYMENT
            </div>

            <span className="
              inline-flex
              items-center
              gap-1.5
              font-inter
              text-[7px]
              sm:text-[8px]
              font-semibold
              text-neutral-500
              bg-neutral-100
              px-2.5
              py-1.5
              rounded-full
              w-fit
            ">
              <span className="w-1 h-1 rounded-full bg-[#730042]" />
              SLA-GOVERNED EXECUTION
            </span>

          </div>


          <h2 className="
            font-jakarta
            text-[#161620]
            font-semibold
            text-[23px]
            sm:text-[26px]
            md:text-[28px]
            lg:text-[30px]
            leading-[1.2]
            mb-2
            max-w-xl
          ">
            From Requirement to Resource Alignment
          </h2>

          <p className="
            font-inter
            text-neutral-500
            text-[9.5px]
            sm:text-[10.5px]
            lg:text-[11.5px]
            leading-relaxed
            mb-6
            max-w-xl
          ">
            A systematic four-stage methodology engineered to maintain
            project velocity, smooth onboarding, and uninterrupted
            operational continuity.
          </p>


          {/* Step Tracker */}
          <div className="relative grid grid-cols-4 items-start mb-7">

            <div className="
              absolute
              top-3
              left-[8%]
              right-[8%]
              h-px
              bg-[#730042]/20
            " />

            {phases.map((p) => (
              <div
                key={p.dot}
                className="
                  flex
                  flex-col
                  items-center
                  relative
                  z-10
                "
              >

                <div className="
                  w-6
                  h-6
                  rounded-full
                  bg-[#730042]
                  text-white
                  font-inter
                  text-[8px]
                  font-bold
                  flex
                  items-center
                  justify-center
                  mb-1.5
                ">
                  {p.dot}
                </div>

                <span className="
                  font-inter
                  text-[7.5px]
                  sm:text-[8.5px]
                  font-medium
                  text-neutral-600
                  text-center
                ">
                  {p.label}
                </span>

              </div>
            ))}

          </div>


          {/* Phase Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
            mb-4
          ">

            {phases.map((p) => {
              const Icon = p.icon;

              return (
                <div
                  key={p.tag}
                  className="
                    w-full
                    min-w-0
                    rounded-lg
                    bg-white
                    border
                    border-neutral-200
                    p-4
                    sm:p-4
                  "
                >

                  <div className="flex items-center justify-between mb-3">

                    <div className="
                      w-7
                      h-7
                      rounded-md
                      bg-[#730042]/5
                      flex
                      items-center
                      justify-center
                    ">
                      <Icon className="w-3 h-3 text-[#730042]" />
                    </div>

                    <span className="
                      font-inter
                      text-[7px]
                      sm:text-[7.5px]
                      font-semibold
                      text-neutral-400
                    ">
                      {p.tag}
                    </span>

                  </div>


                  <h3 className="
                    font-jakarta
                    text-[#161620]
                    font-semibold
                    text-[11px]
                    sm:text-[12px]
                    mb-2
                    leading-[1.35]
                  ">
                    {p.title}
                  </h3>

                  <p className="
                    font-inter
                    text-neutral-500
                    text-[9px]
                    sm:text-[9.5px]
                    lg:text-[10px]
                    leading-[1.6]
                    mb-3
                  ">
                    {p.description}
                  </p>


                  <div className="
                    font-inter
                    text-[7px]
                    tracking-wide
                    text-neutral-400
                    font-semibold
                    mb-1.5
                  ">
                    KEY ACTIVITIES
                  </div>


                  <ul className="space-y-1 mb-3">

                    {p.keyActivities.map((activity) => (
                      <li
                        key={activity}
                        className="
                          font-inter
                          text-[8px]
                          sm:text-[8.5px]
                          text-neutral-500
                          flex
                          items-start
                          gap-1.5
                        "
                      >
                        <span className="
                          w-1
                          h-1
                          rounded-full
                          bg-[#730042]
                          shrink-0
                          mt-1
                        " />

                        {activity}
                      </li>
                    ))}

                  </ul>


                  <div className="
                    border-t
                    border-neutral-100
                    pt-2.5
                    flex
                    items-center
                    justify-between
                    gap-2
                  ">

                    <span className="
                      font-inter
                      text-[7.5px]
                      sm:text-[8px]
                      font-semibold
                      text-[#730042]
                    ">
                      {p.footLabel}
                    </span>

                    <span className="
                      font-inter
                      text-[7.5px]
                      sm:text-[8px]
                      text-neutral-400
                      font-medium
                    ">
                      {p.footRight}
                    </span>

                  </div>

                </div>
              );
            })}

          </div>


          {/* Enterprise Guarantee */}
          <div className="
            rounded-lg
            bg-white
            border
            border-neutral-200
            px-4
            sm:px-5
            py-3
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          ">

            <div className="flex items-start sm:items-center gap-2.5">

              <CheckCheck className="
                w-3.5
                h-3.5
                text-[#730042]
                shrink-0
                mt-0.5
                sm:mt-0
              " />

              <p className="
                font-inter
                text-[8px]
                sm:text-[8.5px]
                text-neutral-600
                leading-[1.5]
              ">

                <span className="font-semibold text-[#161620]">
                  Enterprise Deployment Guarantee:
                </span>{" "}
                Dedicated account management, structured weekly velocity
                checkpoints, and zero operational disruption throughout every
                engagement.

              </p>

            </div>

            <span className="
              font-inter
              text-[7px]
              sm:text-[7.5px]
              font-bold
              text-[#730042]
              whitespace-nowrap
            ">
              ZERO DISRUPTION
            </span>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY TECHTORCH
      ===================================================== */}

      <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

        <div
          className="
            w-full
            max-w-6xl
            rounded-xl
            sm:rounded-2xl
            px-5
            sm:px-7
            lg:px-10
            py-7
            sm:py-9
            lg:py-10
          "
          style={{
            backgroundColor: "#730042",
          }}
        >

          {/* Label */}
          <span className="
            inline-flex
            items-center
            gap-1.5
            font-inter
            text-[7px]
            sm:text-[8px]
            tracking-wide
            font-bold
            text-white/90
            bg-white/10
            border
            border-white/10
            px-2.5
            py-1.5
            rounded-full
            mb-4
          ">
            <span className="w-1 h-1 rounded-full bg-white/80" />
            WHY TECHTORCH
          </span>


          {/* Heading */}
          <h2 className="
            font-jakarta
            text-white
            font-semibold
            text-[23px]
            sm:text-[27px]
            md:text-[29px]
            lg:text-[31px]
            leading-[1.15]
            mb-2.5
            max-w-xl
          ">
            Technology Support Built Around Your Requirements
          </h2>


          {/* Subheading */}
          <p className="
            font-jakarta
            font-medium
            text-white/75
            text-[9px]
            sm:text-[10px]
            md:text-[10.5px]
            lg:text-[11px]
            leading-relaxed
            max-w-2xl
            mb-6
          ">
            Flexible resourcing engineered to integrate seamlessly with your
            teams, methodologies, and enterprise goals.
          </p>


          {/* Cards */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-3
          ">

            {whyCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="
                    rounded-lg
                    bg-[#811A55]
                    border
                    border-white/20
                    p-4
                    min-h-[150px]
                    sm:min-h-[160px]
                    lg:min-h-[175px]
                    flex
                    flex-col
                    transition-all
                    duration-300
                    hover:bg-[#8B215D]
                  "
                >

                  {/* Icon */}
                  <div className="
                    w-7
                    h-7
                    rounded-md
                    bg-white/15
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    mb-4
                  ">
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>


                  {/* Heading */}
                  <h3 className="
                    font-jakarta
                    text-white
                    font-semibold
                    text-[10px]
                    sm:text-[11px]
                    lg:text-[11.5px]
                    mb-1.5
                    leading-[1.35]
                  ">
                    {card.title}
                  </h3>


                  {/* Text */}
                  <p className="
                    font-inter
                    text-white/70
                    text-[8px]
                    sm:text-[8.5px]
                    lg:text-[9px]
                    leading-[1.55]
                  ">
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

      <section className="
        w-full
        flex
        justify-center
        px-4
        sm:px-6
        lg:px-8
        py-10
        sm:py-14
        lg:py-16
      ">

        <div className="
          w-full
          max-w-3xl
          rounded-xl
          sm:rounded-2xl
          bg-[#730042]/[0.035]
          border
          border-[#730042]/10
          px-5
          sm:px-8
          lg:px-10
          py-9
          sm:py-12
          lg:py-14
          text-center
        ">

          {/* Label */}
          <div className="
            inline-flex
            items-center
            gap-1.5
            font-inter
            text-[7px]
            sm:text-[8px]
            tracking-wide
            text-[#730042]
            font-bold
            bg-white
            border
            border-[#730042]/10
            px-2.5
            py-1.5
            rounded-full
            mb-4
          ">
            <span className="w-1 h-1 rounded-full bg-[#730042]" />
            STRENGTHEN YOUR TEAM
          </div>


          {/* Heading */}
          <h2 className="
            font-jakarta
            text-[#161620]
            font-semibold
            text-[23px]
            sm:text-[27px]
            md:text-[29px]
            lg:text-[31px]
            leading-[1.2]
            mb-3
          ">
            Strengthen Your Technology Team with the Right Resources
          </h2>


          {/* Paragraph */}
          <p className="
            font-inter
            text-neutral-500
            text-[10px]
            sm:text-[10.5px]
            lg:text-[11.5px]
            leading-[1.65]
            max-w-xl
            mx-auto
            mb-6
          ">
            Whether you need additional technical capacity for an ongoing
            project or support for a new technology initiative, TechTorch can
            help you explore resource and staffing solutions aligned with
            your requirements.
          </p>


          {/* Button */}
          <button
            type="button"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[#730042]
              text-white
              font-inter
              font-semibold
              text-[8px]
              sm:text-[9px]
              px-5
              sm:px-6
              py-2.5
              sm:py-3
              hover:bg-[#5c0035]
              transition-colors
              mb-6
            "
          >
            Talk to Our Experts
            <ArrowRight className="w-3 h-3" />
          </button>


          {/* Tags */}
          <div className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:gap-5
            mb-4
          ">

            {finalTags.map((tag) => (
              <span
                key={tag}
                className="
                  inline-flex
                  items-center
                  gap-1
                  font-inter
                  text-[7.5px]
                  sm:text-[8.5px]
                  font-medium
                  text-neutral-600
                "
              >
                <CheckCircle2 className="w-2.5 h-2.5 text-[#730042]" />
                {tag}
              </span>
            ))}

          </div>


          {/* Bottom text */}
          <div className="
            font-inter
            text-[7px]
            sm:text-[7.5px]
            text-neutral-400
            font-medium
          ">
            Enterprise Grade Governance & Rapid SLA Deployment
          </div>

        </div>

      </section>

    </div>
  );
}