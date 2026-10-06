import React from "react";
import { Users, Settings, Database, Code2 } from "lucide-react";

const PILLARS = [
  {
    pillar: "PILLAR 01",
    icon: Users,
    title: "People",
    description:
      "Empowered teams, human-centered UI/UX, transparent collaboration tools, and organizational synergy across all departments.",
    footnote: "Intuitive team adoption & enablement",
  },
  {
    pillar: "PILLAR 02",
    icon: Settings,
    title: "Processes",
    description:
      "Streamlined operational workflows, automated handoffs, zero bottlenecks, and governed approvals with real-time auditability.",
    footnote: "Agile & standardized execution",
  },
  {
    pillar: "PILLAR 03",
    icon: Database,
    title: "Data",
    description:
      "Unified master data management, verified single source of truth, real-time context streaming, and predictive intelligence models.",
    footnote: "Synchronized real-time telemetry",
  },
  {
    pillar: "PILLAR 04",
    icon: Code2,
    title: "Technology",
    description:
      "Resilient platforms, API-first architecture, robust cyber security defense, and modular core engines built for continuous growth.",
    footnote: "Cloud-native & API-first foundation",
  },
];

export default function ConnectedBusinessPillarsSection() {
  return (
    <section
      className="
        w-full
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-16
        lg:px-10
        lg:py-20
      "
      style={{
        background:
          "linear-gradient(160deg, #6e1345 0%, #3a0e20 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-8
            w-full
            max-w-3xl
            text-center
            sm:mb-10
            md:mb-12
          "
        >
          {/* Label */}

          <div className="mb-4 flex justify-center sm:mb-5">
            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-3
                py-1.5
                font-['Inter']
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/80
                sm:px-3.5
                sm:py-2
                sm:text-[9px]
                md:text-[10px]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              One Connected Business
            </span>
          </div>

          {/* Main Heading */}

          <h2
            className="
              mb-3
              font-['Plus_Jakarta_Sans']
              text-[22px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-white
              sm:mb-4
              sm:text-[27px]
              md:text-[30px]
              lg:text-[32px]
            "
          >
            Bringing People, Processes, Data and Technology Together
          </h2>

          {/* Sub Heading */}

          <p
            className="
              mx-auto
              max-w-2xl
              font-['Plus_Jakarta_Sans']
              text-[11.5px]
              leading-[1.65]
              text-white/60
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            Businesses don't succeed through fragmented silos. Our solutions
            connect the essential pillars of your enterprise to create an
            integrated ecosystem of continuous visibility and execution.
          </p>
        </div>

        {/* =====================================================
            PILLAR CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {PILLARS.map(
            ({
              pillar,
              icon: Icon,
              title,
              description,
              footnote,
            }) => (
              <div
                key={pillar}
                className="
                  flex
                  h-full
                  flex-col
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-4
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white/[0.08]
                  hover:shadow-lg
                  sm:p-5
                "
              >
                {/* Icon + Pillar */}

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                    gap-2
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/10
                      sm:h-9
                      sm:w-9
                    "
                  >
                    <Icon
                      size={15}
                      className="text-white/80 sm:h-4 sm:w-4"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Pillar Label */}

                  <span
                    className="
                      rounded
                      bg-white/10
                      px-2
                      py-1
                      font-['Inter']
                      text-[8px]
                      font-semibold
                      tracking-[0.06em]
                      text-white/50
                      sm:text-[9px]
                    "
                  >
                    {pillar}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    mb-2
                    font-['Plus_Jakarta_Sans']
                    text-[15px]
                    font-bold
                    leading-tight
                    text-white
                    sm:text-[16px]
                  "
                >
                  {title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mb-4
                    flex-1
                    font-['Inter']
                    text-[11.5px]
                    leading-[1.65]
                    text-white/55
                    sm:text-[12px]
                    md:text-[12.5px]
                  "
                >
                  {description}
                </p>

                {/* Footnote */}

                <div
                  className="
                    flex
                    items-start
                    gap-2
                    border-t
                    border-white/10
                    pt-3
                  "
                >
                  <span
                    className="
                      mt-1
                      h-1.5
                      w-1.5
                      flex-shrink-0
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <span
                    className="
                      font-['Inter']
                      text-[9.5px]
                      leading-relaxed
                      text-white/50
                      sm:text-[10px]
                      md:text-[11px]
                    "
                  >
                    {footnote}
                  </span>
                </div>
              </div>
            )
          )}
        </div>

      </div>
    </section>
  );
}