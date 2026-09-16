import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BRAND_COLOR = "#730024";

const cards = [
  {
    number: "01",
    tag: "On-Demand",
    title: "Contract Staffing",
    description:
      "Flexible technology resources for short-term or ongoing project requirements.",
    linkLabel: "Agile team injection",
    path: "/Agile-team-injection",
  },
  {
    number: "02",
    tag: "De-Risked",
    title: "Contract-to-Hire",
    description:
      "A flexible hiring model that allows businesses to work with professionals before making a long-term commitment.",
    linkLabel: "Evaluate technical fit",
    path: "/contract-to-hire",
  },
  {
    number: "03",
    tag: "Autonomous",
    title: "Dedicated Development Teams",
    description:
      "Dedicated technology professionals focused on specific development and project requirements.",
    linkLabel: "Full lifecycle pods",
    path: "/Dedicated-Development-Teams",
  },
  {
    number: "04",
    tag: "Distributed",
    title: "Remote Engineers",
    description:
      "Remote engineering resources that can work alongside your existing technology team.",
    linkLabel: "Timezone aligned",
    path: "/staffing/remote-engineers",
  },
  {
    number: "05",
    tag: "Milestone",
    title: "Project-Based Hiring",
    description:
      "Technology professionals selected to support specific projects and delivery requirements.",
    linkLabel: "Targeted objectives",
    path: "/staffing/project-based-hiring",
  },
  {
    number: "06",
    tag: "Immediate",
    title: "Resource Replacement",
    description:
      "Flexible support when an existing technology resource needs to be replaced.",
    linkLabel: "Zero productivity loss",
    path: "/staffing/resource-replacement",
  },
  {
    number: "07",
    tag: "Pre-Vetted",
    title: "Bench Hiring",
    description:
      "Access to available IT professionals for immediate or upcoming technology requirements.",
    linkLabel: "Deploy within 48 hours",
    path: "/staffing/bench-hiring",
  },
  {
    number: "08",
    tag: "Enterprise",
    title: "Vendor Partnership",
    description:
      "Technology resource support through a flexible vendor partnership model.",
    linkLabel: "Strategic SLA framework",
    path: "/staffing/vendor-partnership",
  },
  {
    number: "09",
    tag: "Managed",
    title: "MSP Support",
    description:
      "Managed support for technology workforce and resource requirements.",
    linkLabel: "Workforce governance",
    path: "/staffing/msp-support",
  },
];

export default function ITAugmentationServices() {
  return (
    <section className="w-full bg-[#f7f5f2]">
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-8 max-w-3xl sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <span
            className="
              mb-3
              inline-flex
              rounded-md
              px-2.5
              py-1
              font-['Inter']
              text-[8px]
              font-bold
              uppercase
              tracking-[0.1em]
              sm:mb-4
              sm:text-[9px]
              md:text-[10px]
            "
            style={{
              backgroundColor: "#f9e8ef",
              color: BRAND_COLOR,
            }}
          >
            Flexible Engagement Capabilities
          </span>

          {/* Heading */}
          <h1
            className="
              mb-3
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#1c1c1c]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
            "
          >
            Our IT Augmentation Services
          </h1>

          {/* Subheading */}
          <p
            className="
              max-w-2xl
              font-['Plus_Jakarta_Sans']
              text-[11px]
              font-medium
              leading-[1.7]
              text-neutral-500
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            With a flexible approach to technology resourcing, businesses can
            respond to changing workloads, strengthen project teams, and bring
            additional technical capabilities into their existing working
            environment.
          </p>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {cards.map((card) => (
            <Link
              key={card.number}
              to={card.path}
              className="
                group
                relative
                flex
                min-h-[220px]
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-neutral-200
                bg-white
                p-5
                shadow-[0_3px_15px_rgba(0,0,0,0.03)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_28px_rgba(115,0,36,0.09)]
                sm:min-h-[235px]
                sm:p-6
              "
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              {/* Top accent */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
                style={{
                  backgroundColor: BRAND_COLOR,
                }}
              />

              {/* Card Top */}
              <div className="mb-5 flex items-center justify-between gap-3">
                {/* Number */}
                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    font-['Inter']
                    text-[10px]
                    font-bold
                    text-white
                    sm:h-9
                    sm:w-9
                    sm:text-[11px]
                  "
                  style={{
                    backgroundColor: BRAND_COLOR,
                  }}
                >
                  {card.number}
                </span>

                {/* Tag */}
                <span
                  className="
                    rounded-full
                    border
                    px-2.5
                    py-1
                    font-['Inter']
                    text-[8px]
                    font-semibold
                    tracking-[0.04em]
                    sm:text-[9px]
                  "
                  style={{
                    borderColor: "#ead5df",
                    backgroundColor: "#fcf5f8",
                    color: BRAND_COLOR,
                  }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mb-2.5
                  font-['Plus_Jakarta_Sans']
                  text-[14px]
                  font-bold
                  leading-[1.4]
                  text-[#1c1c1c]
                  sm:text-[15px]
                "
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mb-5
                  flex-1
                  font-['Inter']
                  text-[11px]
                  leading-[1.7]
                  text-neutral-500
                  sm:text-[12px]
                  md:text-[12.5px]
                "
              >
                {card.description}
              </p>

              {/* Bottom Link */}
              <div className="border-t border-neutral-100 pt-3">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1
                    font-['Inter']
                    text-[10px]
                    font-semibold
                    transition-all
                    duration-300
                    group-hover:gap-2
                    sm:text-[11px]
                  "
                  style={{
                    color: BRAND_COLOR,
                  }}
                >
                  {card.linkLabel}

                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* =====================================================
            OFFSHORE DEVELOPMENT TEAMS
        ===================================================== */}

        <div
          className="
            mt-4
            overflow-hidden
            rounded-xl
            border
            border-neutral-200
            bg-white
            shadow-[0_3px_15px_rgba(0,0,0,0.03)]
            sm:mt-5
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              px-5
              py-5
              sm:px-6
              sm:py-6
              md:flex-row
              md:items-center
              md:justify-between
              md:gap-6
            "
          >
            {/* Left */}
            <div className="flex items-start gap-3 sm:items-center sm:gap-4">
              {/* Number */}
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  font-['Inter']
                  text-[10px]
                  font-bold
                  text-white
                  sm:h-9
                  sm:w-9
                  sm:text-[11px]
                "
                style={{
                  backgroundColor: BRAND_COLOR,
                }}
              >
                10
              </span>

              <div>
                {/* Tag */}
                <span
                  className="
                    mb-1
                    block
                    font-['Inter']
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    sm:text-[9px]
                  "
                  style={{
                    color: BRAND_COLOR,
                  }}
                >
                  Global Scale
                </span>

                {/* Title */}
                <h3
                  className="
                    font-['Plus_Jakarta_Sans']
                    text-[13px]
                    font-bold
                    leading-snug
                    text-[#1c1c1c]
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  Offshore Development Teams
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-1.5
                    max-w-2xl
                    font-['Inter']
                    text-[10.5px]
                    leading-[1.6]
                    text-neutral-500
                    sm:text-[11px]
                    md:text-[12px]
                  "
                >
                  Extended development capabilities through offshore
                  technology teams.
                </p>
              </div>
            </div>

            {/* Link */}
            <a
              href="#"
              className="
                ml-11
                inline-flex
                items-center
                gap-1
                whitespace-nowrap
                font-['Inter']
                text-[10px]
                font-semibold
                transition-all
                duration-300
                hover:gap-2
                sm:text-[11px]
                md:ml-0
              "
              style={{
                color: BRAND_COLOR,
              }}
            >
              Global Delivery Centers

              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}