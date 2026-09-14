import React from "react";
import {
  Users,
  SlidersHorizontal,
  Link2,
  TrendingUp,
  Clock,
} from "lucide-react";

const STEPS = [
  {
    step: "STEP 01",
    icon: Users,
    title: "Business Understanding",
    description:
      "We start by understanding your business, requirements, and challenges before defining the right solution.",
    phase: "Phase: Discovery",
  },
  {
    step: "STEP 02",
    icon: SlidersHorizontal,
    title: "Flexible Solutions",
    description:
      "Our solutions can be adapted to different business processes, industries, and unique operational environments.",
    phase: "Phase: Custom Fit",
  },
  {
    step: "STEP 03",
    icon: Link2,
    title: "Connected Systems",
    description:
      "We focus on bringing information and processes together so your cross-functional teams work with full synergy.",
    phase: "Phase: Integration",
  },
  {
    step: "STEP 04",
    icon: TrendingUp,
    title: "Scalable Technology",
    description:
      "As your business surges, your architecture scales effortlessly to handle massive transaction volumes.",
    phase: "Phase: Expansion",
  },
  {
    step: "STEP 05",
    icon: Clock,
    title: "Long-Term Support",
    description:
      "Our partnership extends past launch day. We provide proactive enhancements to keep your tech competitive.",
    phase: "Phase: Partnership",
  },
];

export default function WhyTechTorchStepsSection() {
  return (
    <section
      className="
        w-full
        bg-[#f6f4ee]
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
      <div className="mx-auto w-full max-w-6xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-8
            w-full
            max-w-2xl
            text-center
            sm:mb-10
            md:mb-12
          "
        >
          {/* Label */}

          <div
            className="
              mb-3
              flex
              items-center
              justify-center
              gap-2.5
              sm:mb-4
              sm:gap-3
            "
          >
            <span
              className="h-px w-6 sm:w-8 md:w-10"
              style={{ backgroundColor: "#9d174d" }}
            />

            <span
              className="
                font-['Inter']
                text-[9px]
                font-bold
                uppercase
                tracking-[0.14em]
                sm:text-[10px]
                md:text-[11px]
              "
              style={{ color: "#9d174d" }}
            >
              Why TechTorch
            </span>

            <span
              className="h-px w-6 sm:w-8 md:w-10"
              style={{ backgroundColor: "#9d174d" }}
            />
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
              text-slate-900
              sm:mb-4
              sm:text-[26px]
              md:text-[28px]
              lg:text-[30px]
            "
          >
            Technology With a Business Perspective
          </h2>

          {/* Sub Heading */}

          <p
            className="
              mx-auto
              max-w-xl
              font-['Plus_Jakarta_Sans']
              text-[11.5px]
              leading-[1.65]
              text-slate-500
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            We believe technology should be practical, reliable, and built
            around the people who use it.
          </p>
        </div>

        {/* =====================================================
            STEP CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-5
            lg:gap-4
          "
        >
          {STEPS.map(
            ({ step, icon: Icon, title, description, phase }) => (
              <div
                key={step}
                className="
                  flex
                  h-full
                  flex-col
                  rounded-xl
                  border
                  border-slate-100
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:p-5
                "
              >
                {/* Icon + Step */}

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
                      sm:h-9
                      sm:w-9
                    "
                    style={{ backgroundColor: "#fdeef4" }}
                  >
                    <Icon
                      size={15}
                      className="sm:h-4 sm:w-4"
                      style={{ color: "#9d174d" }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Step Badge */}

                  <span
                    className="
                      rounded-full
                      px-2
                      py-1
                      font-['Inter']
                      text-[8px]
                      font-bold
                      tracking-[0.04em]
                      sm:px-2.5
                      sm:text-[9px]
                    "
                    style={{
                      backgroundColor: "#fdeef4",
                      color: "#9d174d",
                    }}
                  >
                    {step}
                  </span>
                </div>

                {/* Card Heading */}

                <h3
                  className="
                    mb-2
                    font-['Plus_Jakarta_Sans']
                    text-[14px]
                    font-bold
                    leading-[1.3]
                    text-slate-900
                    sm:text-[14.5px]
                  "
                >
                  {title}
                </h3>

                {/* Card Description */}

                <p
                  className="
                    mb-4
                    flex-1
                    font-['Inter']
                    text-[11.5px]
                    leading-[1.65]
                    text-slate-500
                    sm:text-[12px]
                    md:text-[12.5px]
                  "
                >
                  {description}
                </p>

                {/* Phase */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-t
                    border-slate-100
                    pt-3
                  "
                >
                  <span
                    className="
                      font-['Inter']
                      text-[9.5px]
                      text-slate-400
                      sm:text-[10px]
                      md:text-[11px]
                    "
                  >
                    {phase}
                  </span>

                  <span
                    className="h-1 w-1 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: "#9d174d" }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}