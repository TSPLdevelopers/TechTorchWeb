import React from "react";
import {
  CloudOff,
  Gauge,
  ShieldCheck,
  ArrowRight,
  CircleCheck,
} from "lucide-react";

const cards = [
  {
    icon: CloudOff,
    title: "Zero Capital Infrastructure Burden",
    description:
      "Bypass multi-million dollar hardware procurement cycles, specialized GPU cluster maintenance, and specialized data-center cooling overhead.",
    linkLabel: "Architectural Efficiency",
    featured: false,
  },
  {
    icon: Gauge,
    title: "Rapid Enterprise Model Deployment",
    description:
      "Integrate advanced cognitive workflows, LLM orchestration, and enterprise predictive models immediately into your operational stack without delay.",
    linkLabel: "Accelerated Time-to-Value",
    featured: true,
    badge: "CORE BENEFIT",
    linkIcon: CircleCheck,
  },
  {
    icon: ShieldCheck,
    title: "Governed & Scalable Operations",
    description:
      "Benefit from institutional-grade model safety, compliance isolation, continuous data privacy protocols, and automatic capacity auto-scaling.",
    linkLabel: "Enterprise Compliance",
    featured: false,
  },
];

export default function WhyAIAsAService() {
  return (
    <section className="w-full bg-[#f2f1ef]">
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
            EYEBROW
        ====================================================== */}

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
            Architectural Advantage
          </span>
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <h1
          className="
            mb-3
            max-w-3xl
            font-['Plus_Jakarta_Sans']
            text-[25px]
            font-bold
            leading-[1.2]
            tracking-[-0.025em]
            text-[#1c1c1c]
            sm:text-[30px]
            md:text-[35px]
            lg:text-[38px]
          "
        >
          Why Artificial Intelligence as a Service?
        </h1>

        {/* =====================================================
            SUB HEADING
        ====================================================== */}

        <h2
          className="
            mb-3
            font-['Plus_Jakarta_Sans']
            text-[16px]
            font-semibold
            leading-snug
            sm:text-[18px]
            md:text-[20px]
          "
          style={{ color: "#730024" }}
        >
          Access AI Without Building the Entire Infrastructure
        </h2>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <p
          className="
            mb-8
            max-w-3xl
            font-['Inter']
            text-[12px]
            leading-[1.7]
            text-neutral-500
            sm:mb-10
            sm:text-[13px]
            md:mb-12
            md:text-[14px]
          "
        >
          Building and maintaining technology infrastructure can add
          complexity to an organization's technology environment. TechTorch's
          Artificial Intelligence as a Service approach enables businesses to
          harness AI capabilities without taking on the complete
          responsibility of building and maintaining their own
          infrastructure.
        </p>

        {/* =====================================================
            CARDS
        ====================================================== */}

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
                    ICON + BADGE
                ================================================== */}

                <div className="mb-5 flex items-start justify-between gap-3">
                  {/* Icon Container */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#730024]/15
                      bg-[#730024]/5
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
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
                        px-2.5
                        py-1
                        font-['Inter']
                        text-[8px]
                        font-semibold
                        tracking-[0.06em]
                        sm:text-[9px]
                      "
                      style={{
                        backgroundColor: "#730024",
                        color: "#ffffff",
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
                    text-[14px]
                    font-bold
                    leading-[1.4]
                    text-[#1c1c1c]
                    sm:text-[15px]
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
                    md:text-[13px]
                  "
                >
                  {card.description}
                </p>

                {/* =================================================
                    CARD LINK
                ================================================== */}

                <div className="border-t border-neutral-100 pt-3">
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
                      md:text-[12px]
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