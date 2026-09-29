import React from "react";
import { Check } from "lucide-react";

const BRAND = "#8B0046";

/* ============================================================
   FLEXIBLE TEAM MODELS
============================================================ */

const teamModels = [
  {
    number: "01",
    title: "Dedicated Development Team",
    description:
      "A dedicated group of professionals focused on your product, application, or long-term development requirements.",
    label: "AUTONOMOUS POD",
  },
  {
    number: "02",
    title: "Extended Development Team",
    description:
      "Additional developers and technical specialists who work alongside your existing internal team.",
    label: "HYBRID ALIGNMENT",
  },
  {
    number: "03",
    title: "Project-Based Team",
    description:
      "A focused team assembled around a defined project, development requirement, or technology objective.",
    label: "TARGETED MILESTONE",
  },
  {
    number: "04",
    title: "Specialized Technical Resources",
    description:
      "Access specific technical expertise when your project requires skills that are not currently available within your internal team.",
    label: "NICHE SUBJECT MATTER EXPERTS",
  },
];

/* ============================================================
   TECHNOLOGY EXPERTISE
============================================================ */

const technology = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces and user-focused web applications.",
  },
  {
    title: "Backend Development",
    description:
      "Application logic, databases, APIs, and server-side development.",
  },
  {
    title: "Mobile Development",
    description:
      "Development support for modern mobile applications.",
  },
  {
    title: "Cloud Development",
    description:
      "Cloud-oriented applications and infrastructure requirements.",
  },
  {
    title: "Integration",
    description:
      "APIs, third-party services, and business-system integration.",
  },
  {
    title: "Quality Assurance",
    description:
      "Testing and quality checks throughout the development process.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing technical improvements, updates, and application support.",
  },
];

/* ============================================================
   WHY WORK WITH OFFSHORE TEAM
============================================================ */

const benefits = [
  {
    title: "Access Additional Expertise",
    description:
      "Bring relevant technical skills into your development projects.",
  },
  {
    title: "Increase Development Capacity",
    description:
      "Add resources when your existing team needs additional support.",
  },
  {
    title: "Flexible Team Structure",
    description:
      "Build a team based on your current project instead of following a fixed model.",
  },
  {
    title: "Support Long-Term Development",
    description:
      "Continue working with the team for maintenance, enhancements, and future development requirements.",
  },
  {
    title: "Work Alongside Your Existing Team",
    description:
      "The offshore team can complement your internal developers and technical professionals.",
  },
];

/* ============================================================
   OUR APPROACH
============================================================ */

const approach = [
  {
    number: "01",
    label: "DISCOVERY",
    title: "Understand",
    description:
      "We first understand your project, business objectives, technology environment, and team requirements.",
  },
  {
    number: "02",
    label: "SCOPING",
    title: "Define",
    description:
      "We identify the technical skills, roles, and responsibilities required for the project.",
  },
  {
    number: "03",
    label: "ASSEMBLY",
    title: "Build",
    description:
      "The development team is structured around the capabilities and experience your project requires.",
  },
  {
    number: "04",
    label: "EXECUTION",
    title: "Collaborate",
    description:
      "The team works with your existing processes, stakeholders, and development environment.",
  },
  {
    number: "05",
    label: "SCALE",
    title: "Evolve",
    description:
      "As your product and business requirements change, the team can adapt to support future development needs.",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function OffshoreTeamSections() {
  return (
    <main className="w-full overflow-hidden font-['Inter']">

      {/* ======================================================
          SECTION 1 — ENGAGEMENT ARCHITECTURE
      ====================================================== */}

      <section
        className="w-full"
        style={{ backgroundColor: "#6d0038" }}
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:py-16
            lg:px-10
            lg:py-[70px]
          "
        >

          {/* Header */}
          <div className="max-w-[760px]">

            <div className="mb-4 inline-flex items-center rounded-[5px] border border-white/20 bg-white/10 px-3 py-1.5">
              <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/90 sm:text-[10px]">
                ENGAGEMENT ARCHITECTURE
              </span>
            </div>

            <h2 className="text-[29px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[34px] md:text-[38px]">
              Flexible Team Models
            </h2>

            <p className="mt-4 max-w-[850px] text-[13px] font-medium leading-[1.6] text-white sm:text-[14px]">
              <span className="font-semibold">
                Choose a Development Model That Works for You:
              </span>{" "}
              Different projects require different levels of technical
              involvement. Our team models can be structured according to your
              project scope and development requirements.
            </p>

          </div>

          {/* Cards */}
          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:mt-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {teamModels.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  flex
                  min-h-[290px]
                  flex-col
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-white/[0.18]
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0.05)_100%)]
                  px-5
                  py-5
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:border-white
                  hover:bg-white
                  hover:shadow-[0_16px_32px_rgba(30,0,20,0.24)]
                "
              >

                {/* Glass Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[45px]
                    -top-[45px]
                    h-[130px]
                    w-[130px]
                    rounded-full
                    bg-white/[0.10]
                    blur-[28px]
                    transition-opacity
                    duration-300
                    group-hover:opacity-0
                  "
                />

                {/* Number */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    h-[32px]
                    w-[32px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    border-white/20
                    bg-white/[0.13]
                    text-[11px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    group-hover:border-[#e5bfd0]
                    group-hover:bg-[#fff5f8]
                    group-hover:text-[#8B0046]
                  "
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-5">

                  <h3
                    className="
                      max-w-[190px]
                      text-[16px]
                      font-semibold
                      leading-[1.25]
                      text-white
                      transition-colors
                      duration-300
                      group-hover:text-[#8B0046]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[12px]
                      leading-[1.6]
                      text-white/75
                      transition-colors
                      duration-300
                      group-hover:text-black
                    "
                  >
                    {item.description}
                  </p>

                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-auto pt-5">

                  {/* Bottom Line */}
                  <div
                    className="
                      mb-3
                      h-px
                      w-full
                      bg-white/15
                      transition-colors
                      duration-300
                      group-hover:bg-[#8B0046]
                    "
                  />

                  <div className="flex items-end justify-between gap-2">

                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.06em]
                        text-white/75
                        transition-colors
                        duration-300
                        group-hover:text-[#8B0046]
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        h-[5px]
                        w-[5px]
                        shrink-0
                        rounded-full
                        bg-[#20d89a]
                        transition-all
                        duration-300
                        group-hover:bg-[#8B0046]
                      "
                    />

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ======================================================
          SECTION 2 — TECHNOLOGY EXPERTISE
      ====================================================== */}

      <section className="w-full bg-[#f8fafc]">

        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:py-16
            lg:px-10
            lg:py-[70px]
          "
        >

          <div className="max-w-[850px]">

            <span
              className="text-[10px] font-bold uppercase tracking-[0.13em]"
              style={{ color: BRAND }}
            >
              TECHNICAL FOUNDATION
            </span>

            <h2 className="mt-3 text-[29px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#172033] sm:text-[34px]">
              Technology Expertise
            </h2>

            <p className="mt-3 text-[13px] font-medium leading-[1.6] text-[#536075] sm:text-[14px]">
              <span className="font-semibold">
                Technical Skills for Modern Development:
              </span>{" "}
              Our development capabilities can support different stages of the
              software lifecycle, including:
            </p>

          </div>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {technology.map((item, index) => (
              <div
                key={index}
                className={`group rounded-[10px] border border-[#e2e7ed] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e2bfd0] hover:shadow-[0_8px_22px_rgba(60,20,40,0.06)] ${
                  index === 6 ? "lg:col-span-3" : ""
                }`}
              >

                <div className="flex items-start gap-3">

                  <span
                    className="mt-[6px] h-[7px] w-[7px] shrink-0 rounded-full"
                    style={{ backgroundColor: BRAND }}
                  />

                  <div>

                    <h3 className="text-[14px] font-semibold leading-[1.3] text-[#1d293d] sm:text-[15px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.5] text-[#69768b] sm:text-[12px]">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ======================================================
          SECTION 3 — STRATEGIC VALUE
      ====================================================== */}

      <section
        className="w-full"
        style={{ backgroundColor: "#6d0038" }}
      >

        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-5
            py-12
            sm:px-8
            sm:py-14
            md:py-16
            lg:px-10
            lg:py-[70px]
          "
        >

          <div className="max-w-[820px]">

            <div className="mb-4 inline-flex rounded-[5px] border border-white/20 bg-white/10 px-3 py-1.5">
              <span className="text-[9px] font-bold uppercase tracking-[0.13em] text-white/90">
                STRATEGIC VALUE
              </span>
            </div>

            <h2 className="max-w-[700px] text-[32px] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-[39px]">
              Why Work With an Offshore
              <span className="block">
                Development Team?
              </span>
            </h2>

            <p className="mt-5 max-w-[820px] text-[13px] font-medium leading-[1.6] text-white sm:text-[14px]">
              <span className="font-bold">
                Extend Your Team Without Limiting Your Growth:
              </span>{" "}
              An offshore development team can give businesses additional
              technical capacity when internal resources are not enough for
              current or upcoming requirements.
            </p>

          </div>

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:mt-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-[12px] border border-white/[0.18] px-5 py-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(30,0,20,0.24)] ${
                  index === 3
                    ? "lg:col-span-1"
                    : index === 4
                    ? "lg:col-span-2"
                    : ""
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.05) 100%)",
                }}
              >

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-[45px]
                    -top-[45px]
                    h-[130px]
                    w-[130px]
                    rounded-full
                    bg-white/[0.10]
                    blur-[28px]
                  "
                />

                <div className="relative z-10 flex items-start gap-3">

                  <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-white">

                    <Check
                      className="h-[12px] w-[12px]"
                      style={{ color: BRAND }}
                    />

                  </div>

                  <div>

                    <h3 className="text-[14px] font-semibold leading-[1.3] text-white sm:text-[15px]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.6] text-white/75 sm:text-[12px]">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ======================================================
          SECTION 4 — OUR APPROACH
      ====================================================== */}

      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-5
            py-16
            sm:py-20
            md:py-24
            lg:py-[80px]    
          "
        >

          {/* Header */}
          <div className="text-center">

            <span
              className="text-[10px] font-bold uppercase tracking-[0.13em]"
              style={{ color: BRAND }}
            >
              EXECUTION METHODOLOGY
            </span>

            <h2
              className="
                mt-3
                text-[29px]
                font-semibold
                leading-[1.1]
                tracking-[-0.04em]
                text-[#172033]
                sm:text-[34px]
                md:text-[36px]
              "
            >
              Our Approach
            </h2>

            <p
              className="
                mt-3
                text-[13px]
                text-[#69768b]
                sm:text-[14px]
                md:text-[15px]
              "
            >
              A Clear Process for Building Your Development Team
            </p>

          </div>


          {/* Process */}
          <div className="relative mt-8 sm:mt-10">

            {/* Connecting Line — Desktop */}
            <div
              className="
                pointer-events-none
                absolute
                left-[9%]
                right-[9%]
                top-[26px]
                hidden
                h-[2px]
                bg-[#d4a6bc]
                lg:block
              "
            />

            {/* Cards */}
            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                lg:grid-cols-5
                lg:gap-4
              "
            >

              {approach.map((item) => (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    z-10
                    flex
                    min-h-[235px]
                    flex-col
                    rounded-[14px]
                    border
                    border-[#e5e9ee]
                    bg-white
                    px-5
                    py-4
                    shadow-[0_2px_8px_rgba(20,30,45,0.025)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#e2bfd0]
                    hover:shadow-[0_12px_28px_rgba(70,20,45,0.08)]
                  "
                >

                  {/* Top Line */}
                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      top-5
                      h-[3px]
                      rounded-full
                      bg-[#d4a6bc]
                      transition-colors
                      duration-300
                      group-hover:bg-[#8B0046]
                    "
                  />

                  {/* Number + Label */}
                  <div
                    className="
                      mt-7
                      flex
                      items-center
                      justify-between
                      gap-2
                    "
                  >

                    <div
                      className="
                        flex
                        h-[36px]
                        w-[36px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        border
                        border-[#e9ccda]
                        bg-[#fff7fa]
                        text-[13px]
                        font-bold
                      "
                      style={{ color: BRAND }}
                    >
                      {item.number}
                    </div>

                    <span
                      className="
                        text-right
                        text-[9px]
                        font-bold
                        tracking-[0.05em]
                        text-[#9aabc0]
                        sm:text-[10px]
                      "
                    >
                      {item.label}
                    </span>

                  </div>


                  {/* Content */}
                  <div className="mt-4">

                    <h3
                      className="
                        text-[17px]
                        font-semibold
                        leading-[1.2]
                        tracking-[-0.02em]
                        text-[#172033]
                        sm:text-[18px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2.5
                        text-[12px]
                        leading-[1.6]
                        text-[#6a7689]
                        sm:text-[13px]
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}