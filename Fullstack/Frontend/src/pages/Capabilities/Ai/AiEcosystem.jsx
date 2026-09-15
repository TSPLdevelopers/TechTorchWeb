import React from "react";
import {
  MessageSquareText,
  Briefcase,
  Cloud,
  Shield,
  MonitorCog,
  ArrowLeftRight,
  Smartphone,
  Users,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

const cards = [
  {
    icon: MessageSquareText,
    title: "IT Consultancy",
    description:
      "Technology consulting designed to guide businesses through their digital transformation journey.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence as a Service that enables businesses to harness AI without the complexity of building and maintaining their own infrastructure.",
    linkLabel: "Featured Offering",
    featured: true,
    badge: "ACTIVE FOCUS",
    linkIcon: CircleCheck,
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Cloud Infrastructure as a Service designed to help businesses scale and optimize their IT operations.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description:
      "Cybersecurity services focused on protecting an organization's digital assets in an environment where cyber threats continue to evolve.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: MonitorCog,
    title: "Software Engineering Services",
    description:
      "Engineering services designed to support businesses in achieving their technical and operational goals.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: ArrowLeftRight,
    title: "Business Process Outsourcing",
    description:
      "BPO services designed to improve operational efficiency and allow businesses to focus on their core competencies.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Software Development & Support",
    description:
      "End-to-end software development and support services designed to help businesses achieve operational excellence and drive innovation.",
    linkLabel: "Explore Practice",
    featured: false,
  },
  {
    icon: Users,
    title: "Resource & Staffing",
    description:
      "Resource and staffing services that provide businesses with skilled professionals and flexible workforce solutions.",
    linkLabel: "Explore Practice",
    featured: false,
  },
];

export default function TechTorchEcosystem() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
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
        ====================================================== */}

        <div
          className="
            mb-8
            flex
            flex-col
            items-start
            justify-between
            gap-5
            sm:mb-10
            md:flex-row
            md:items-end
            md:gap-6
          "
        >
          <div className="w-full">
            {/* Eyebrow */}

            <div className="mb-3 flex items-center gap-2 sm:mb-4">
              <span
                className="h-px w-6 sm:w-8"
                style={{ backgroundColor: "#730024" }}
              />

              <span
                className="
                  font-['Inter']
                  text-[9px]
                  font-semibold
                  tracking-[0.08em]
                  sm:text-[10px]
                  md:text-[11px]
                "
                style={{ color: "#730024" }}
              >
                TechTorch Ecosystem
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mb-2
                font-['Plus_Jakarta_Sans']
                text-[24px]
                font-bold
                leading-[1.2]
                tracking-[-0.02em]
                text-[#1c1c1c]
                sm:text-[29px]
                md:text-[34px]
                lg:text-[38px]
              "
            >
              TechTorch Technology Services
            </h1>

            {/* Subheading */}

            <p
              className="
                max-w-2xl
                font-['Plus_Jakarta_Sans']
                text-[11.5px]
                leading-[1.6]
                text-neutral-500
                sm:text-[13px]
                md:text-[14px]
              "
            >
              Artificial Intelligence is one part of the wider technology
              capabilities offered by TechTorch Solutions.
            </p>
          </div>

          {/* Practice Count */}

          <span
            className="
              whitespace-nowrap
              rounded-full
              bg-neutral-100
              px-3
              py-1.5
              font-['Inter']
              text-[9px]
              font-medium
              text-neutral-500
              sm:text-[10px]
              md:text-[11px]
            "
          >
            8 Integrated Practices
          </span>
        </div>

        {/* =====================================================
            CARD GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {cards.map((card) => {
            const Icon = card.icon;
            const LinkIcon = card.linkIcon || ArrowRight;

            return (
              <div
                key={card.title}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  rounded-xl
                  border
                  border-neutral-200
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:p-6
                "
              >
                {/* =================================================
                    TOP ROW
                ================================================== */}

                <div className="mb-5 flex items-start justify-between gap-3">
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-neutral-200
                      bg-neutral-50
                      transition-all
                      duration-500
                      ease-out
                      group-hover:scale-110
                      group-hover:border-[#730024]
                      group-hover:bg-[#fdf1f6]
                    "
                  >
                    <Icon
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-125
                      "
                      style={{
                        color: "#730024",
                      }}
                    />
                  </div>

                  {/* Badge */}

                  {card.badge && (
                    <span
                      className="
                        rounded-full
                        px-2
                        py-1
                        font-['Inter']
                        text-[8px]
                        font-semibold
                        tracking-[0.06em]
                        sm:text-[9px]
                      "
                      style={{
                        backgroundColor: "#fdf1f6",
                        color: "#730024",
                      }}
                    >
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* =================================================
                    CARD HEADING
                ================================================== */}

                <h3
                  className="
                    mb-2
                    font-['Plus_Jakarta_Sans']
                    text-[13.5px]
                    font-bold
                    leading-[1.4]
                    text-[#1c1c1c]
                    sm:text-[14px]
                    md:text-[15px]
                  "
                >
                  {card.title}
                </h3>

                {/* =================================================
                    CARD DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mb-5
                    flex-1
                    font-['Inter']
                    text-[11.5px]
                    leading-[1.7]
                    text-neutral-500
                    sm:text-[12px]
                    md:text-[12.5px]
                  "
                >
                  {card.description}
                </p>

                {/* =================================================
                    CARD LINK
                ================================================== */}

                <div className="border-t border-neutral-200 pt-3">
                  <a
                    href="#"
                    className="
                      inline-flex
                      items-center
                      gap-1
                      font-['Inter']
                      text-[10px]
                      font-semibold
                      transition-all
                      duration-300
                      hover:gap-2
                      sm:text-[11px]
                      md:text-[11.5px]
                    "
                    style={{
                      color: "#730024",
                    }}
                  >
                    {card.linkLabel}

                    <LinkIcon
                      className="
                        h-3
                        w-3
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        sm:h-3.5
                        sm:w-3.5
                      "
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}