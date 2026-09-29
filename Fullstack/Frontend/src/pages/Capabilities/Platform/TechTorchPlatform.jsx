import React from "react";
import {
  LayoutGrid,
  Link2,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";

const FEATURES = [
  {
    number: "01",
    icon: LayoutGrid,
    title: "Simple",
    description:
      "Designed to make everyday business processes easier to manage and intuitive for your teams.",
    tag: "Frictionless UX",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connected",
    description:
      "Bring essential business functions, data pipelines, and departments together in one unified environment.",
    tag: "Unified Systems",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Flexible",
    description:
      "Adapt the platform effortlessly to your custom workflows, rules, and existing tools.",
    tag: "Custom Workflows",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Built to Grow",
    description:
      "Architected with high scalability to support growing teams as your business footprint expands.",
    tag: "Enterprise Scale",
  },
];

export default function WhyTechTorchSection() {
  return (
    <section
      className="
        w-full
        bg-white
        px-5
        py-10
        sm:px-8
        sm:py-12
        md:px-10
        md:py-14
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* ================= HEADER ================= */}

        <div
          className="
            mb-7
            max-w-xl
            sm:mb-8
            md:mb-9
          "
        >
          {/* Label */}

          <div className="mb-2.5 flex items-center gap-3 sm:mb-3">
            <span
              className="
                font-['Inter']
                text-[12px]
                font-semibold
                sm:text-[13px]
              "
              style={{ color: "#730024" }}
            >
              Why TechTorch Platforms
            </span>

            <span
              className="h-px w-8"
              style={{ backgroundColor: "#730024" }}
            />
          </div>

          {/* Heading */}

          <h2
            className="
              mb-2.5
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-slate-900
              sm:text-[29px]
              md:text-[32px]
            "
          >
            Technology That Fits Your Business
          </h2>

          {/* Sub Heading / Description */}

          <p
            className="
              font-['Plus_Jakarta_Sans']
              text-[13px]
              leading-[1.65]
              text-slate-500
              sm:text-[14px]
              md:text-[15px]
            "
          >
            Our platforms are designed with a simple goal — to make your work
            easier, your teams stronger and your business more prepared for
            what's next.
          </p>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3.5
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-4
            lg:gap-4
          "
        >
          {FEATURES.map(
            ({ number, icon: Icon, title, description, tag }) => (
              <div
                key={number}
                className="
                  flex
                  min-h-[240px]
                  flex-col
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:min-h-[245px]
                  sm:p-5
                  lg:min-h-[250px]
                "
              >
                {/* ================= TOP ROW ================= */}

                <div className="mb-4 flex items-center justify-between">

                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      sm:h-10
                      sm:w-10
                    "
                    style={{ backgroundColor: "#fdeef4" }}
                  >
                    <Icon
                      size={17}
                      style={{ color: "#730024" }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Number */}

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      font-['Inter']
                      text-[10px]
                      font-bold
                      sm:text-[11px]
                    "
                    style={{
                      backgroundColor: "#fdeef4",
                      color: "#730024",
                    }}
                  >
                    {number}
                  </span>
                </div>

                {/* ================= TITLE ================= */}

                <h3
                  className="
                    mb-1.5
                    font-['Inter']
                    text-[16px]
                    font-bold
                    leading-tight
                    text-slate-900
                    sm:text-[17px]
                  "
                >
                  {title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p
                  className="
                    mb-5
                    flex-1
                    font-['Inter']
                    text-[12px]
                    leading-[1.65]
                    text-slate-500
                    sm:text-[13px]
                  "
                >
                  {description}
                </p>

                {/* ================= BOTTOM ================= */}

                <div
                  className="
                    flex
                    items-center
                    border-t
                    border-slate-100
                    pt-3
                  "
                >
                  <span
                    className="
                      font-['Inter']
                      text-[11px]
                      font-semibold
                      text-slate-500
                      sm:text-[12px]
                    "
                  >
                    {tag}
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