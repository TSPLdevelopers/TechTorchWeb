import React from "react";
import {
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowUpCircle,
  RefreshCw,
  UserPlus,
  Route,
  Target,
} from "lucide-react";

const domains = [
  {
    icon: Code2,
    label: "DOMAIN 01",
    title: "Custom Software Development",
    description:
      "Build tailored software solutions designed around your business requirements, processes, and operational objectives.",
  },
  {
    icon: Smartphone,
    label: "DOMAIN 02",
    title: "Web & Mobile Application Development",
    description:
      "Create responsive and feature-rich web and mobile applications that support modern digital experiences across devices.",
  },
  {
    icon: BarChart3,
    label: "DOMAIN 03",
    title: "Enterprise Software Solutions",
    description:
      "Develop and enhance software solutions that support core business processes, workflows, and organisational requirements.",
  },
  {
    icon: Workflow,
    label: "DOMAIN 04",
    title: "API Development & System Integration",
    description:
      "Connect applications, platforms, and services through APIs and integrations that enable reliable data exchange and connected workflows.",
  },
  {
    icon: ShieldCheck,
    label: "DOMAIN 05",
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through structured testing across functionality, performance, security, and usability using appropriate testing approaches.",
  },
  {
    icon: ArrowUpCircle,
    label: "DOMAIN 06",
    title: "Software Modernization",
    description:
      "Modernise existing applications and legacy systems with updated architectures and technologies to support evolving business requirements.",
  },
];

const maintenance = {
  icon: RefreshCw,
  label: "DOMAIN 07",
  title: "Ongoing Maintenance & Support",
  description:
    "Provide continued technical support, maintenance, updates, performance improvements, and enhancements after deployment.",
};

const features = [
  {
    icon: UserPlus,
    tag: "01 / TEAM",
    title: "A Flexible Extension Of Your Team",
    description:
      "Strengthen your existing technology capabilities with skilled resources that can contribute to your projects and technical requirements.",
  },
  {
    icon: Route,
    tag: "02 / PROCESS",
    title: "From Requirements to Delivery",
    description:
      "Our approach begins with understanding your business needs and objectives, followed by design, development, testing, deployment, and ongoing support as required.",
  },
  {
    icon: Target,
    tag: "03 / IMPACT",
    title: "Expertise That Supports Your Goals",
    description:
      "Bring together technology expertise and flexible resources to support your projects and respond to changing business requirements.",
  },
];

export default function SpecializedDomainsPage() {
  return (
    <section className="w-full min-h-screen bg-white font-inter">
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-10
          sm:py-12
          lg:py-16
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div
          className="
            w-full
            text-center
            mb-8
            sm:mb-10
            lg:mb-12
          "
        >
          {/* Small Label */}
          <div
            className="
              font-inter
              text-[8px]
              sm:text-[9px]
              lg:text-[10px]
              tracking-[0.12em]
              text-[#730024]
              font-semibold
              mb-3
            "
          >
            SPECIALIZED DOMAINS
          </div>

          {/* Main Heading */}
          <h1
            className="
              font-jakarta
              text-[#1c1c1c]
              font-semibold
              text-2xl
              sm:text-3xl
              md:text-[34px]
              lg:text-[38px]
              leading-[1.15]
              tracking-[-0.025em]
              mb-3
              px-2
            "
          >
            Supporting Your Complete Technology Journey
          </h1>

          {/* Sub Heading */}
          <p
            className="
              font-jakarta
              text-neutral-500
              font-medium
              text-[11.5px]
              sm:text-[12.5px]
              lg:text-[13.5px]
              leading-[1.7]
              max-w-2xl
              mx-auto
              px-2
            "
          >
            Our software engineering capabilities cover a broad range of
            technology requirements, allowing businesses to access support
            based on their specific project needs.
          </p>
        </div>

        {/* =====================================================
            DOMAIN CARDS
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-5
            mb-5
          "
        >
          {domains.map((d) => {
            const Icon = d.icon;

            return (
              <div
                key={d.label}
                className="
                  w-full
                  min-w-0
                  bg-white
                  border
                  border-neutral-200
                  rounded-xl
                  p-4
                  sm:p-5
                  lg:p-5
                  transition-all
                  duration-300
                  hover:border-[#730024]/30
                  hover:shadow-[0_6px_20px_rgba(115,0,36,0.06)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    rounded-lg
                    bg-[#730024]/[0.06]
                    flex
                    items-center
                    justify-center
                    mb-4
                  "
                >
                  <Icon
                    className="
                      w-4
                      h-4
                      sm:w-[18px]
                      sm:h-[18px]
                      text-[#730024]
                    "
                    strokeWidth={1.8}
                  />
                </div>

                {/* Label */}
                <div
                  className="
                    font-inter
                    text-[8.5px]
                    sm:text-[9px]
                    tracking-[0.06em]
                    text-neutral-400
                    font-semibold
                    mb-2
                  "
                >
                  {d.label}
                </div>

                {/* Heading */}
                <h3
                  className="
                    font-jakarta
                    text-[#1c1c1c]
                    font-semibold
                    text-[13px]
                    sm:text-[13.5px]
                    lg:text-[14px]
                    leading-[1.4]
                    mb-2
                  "
                >
                  {d.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-inter
                    text-neutral-500
                    font-normal
                    text-[11px]
                    sm:text-[11.5px]
                    lg:text-[12px]
                    leading-[1.65]
                  "
                >
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            MAINTENANCE CARD
        ====================================================== */}
        <div
          className="
            w-full
            bg-white
            border
            border-neutral-200
            rounded-xl
            p-4
            sm:p-5
            lg:p-5
            mb-8
            sm:mb-10
            transition-all
            duration-300
            hover:border-[#730024]/30
            hover:shadow-[0_6px_20px_rgba(115,0,36,0.06)]
          "
        >
          {/* Icon */}
          <div
            className="
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-lg
              bg-[#730024]/[0.06]
              flex
              items-center
              justify-center
              mb-4
            "
          >
            <RefreshCw
              className="
                w-4
                h-4
                sm:w-[18px]
                sm:h-[18px]
                text-[#730024]
              "
              strokeWidth={1.8}
            />
          </div>

          {/* Label */}
          <div
            className="
              font-inter
              text-[8.5px]
              sm:text-[9px]
              tracking-[0.06em]
              text-neutral-400
              font-semibold
              mb-2
            "
          >
            {maintenance.label}
          </div>

          {/* Heading */}
          <h3
            className="
              font-jakarta
              text-[#1c1c1c]
              font-semibold
              text-[13px]
              sm:text-[13.5px]
              lg:text-[14px]
              leading-[1.4]
              mb-2
            "
          >
            {maintenance.title}
          </h3>

          {/* Description */}
          <p
            className="
              font-inter
              text-neutral-500
              font-normal
              text-[11px]
              sm:text-[11.5px]
              lg:text-[12px]
              leading-[1.65]
              max-w-4xl
            "
          >
            {maintenance.description}
          </p>
        </div>

        {/* =====================================================
            BOTTOM FEATURE CARDS
            TEAM / PROCESS / IMPACT
        ====================================================== */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
            lg:gap-5
          "
        >
          {features.map((f) => {
            const Icon = f.icon;

            return (
              <div
                key={f.tag}
                className="
                  w-full
                  min-w-0
                  min-h-[165px]
                  sm:min-h-[170px]
                  lg:min-h-[165px]
                  bg-white
                  border
                  border-[#730024]/20
                  rounded-[8px]
                  px-4
                  py-4
                  sm:px-5
                  sm:py-4
                  lg:px-5
                  lg:py-4
                  transition-all
                  duration-300
                  hover:border-[#730024]/40
                  hover:shadow-[0_5px_16px_rgba(115,0,36,0.06)]
                "
              >
                {/* ================= TOP ROW ================= */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-3
                    mb-3
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      rounded-lg
                      bg-[#730024]/[0.06]
                      border
                      border-[#730024]/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Icon
                      className="
                        w-4
                        h-4
                        sm:w-[18px]
                        sm:h-[18px]
                        text-[#730024]
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Tag */}
                  <span
                    className="
                      font-inter
                      text-[8px]
                      sm:text-[8.5px]
                      lg:text-[9px]
                      font-semibold
                      text-neutral-500
                      bg-neutral-100
                      px-2
                      py-1
                      rounded-[4px]
                      leading-none
                      whitespace-nowrap
                    "
                  >
                    {f.tag}
                  </span>
                </div>

                {/* ================= HEADING ================= */}
                <h3
                  className="
                    font-jakarta
                    text-[#1c1c1c]
                    font-semibold
                    text-[13px]
                    sm:text-[13.5px]
                    lg:text-[14px]
                    leading-[1.4]
                    mb-2
                  "
                >
                  {f.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}
                <p
                  className="
                    font-inter
                    text-neutral-500
                    font-normal
                    text-[11px]
                    sm:text-[11.5px]
                    lg:text-[12px]
                    leading-[1.65]
                  "
                >
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}