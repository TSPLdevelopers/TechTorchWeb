import React from "react";

const BRAND_COLOR = "#730024";

const steps = [
  {
    num: "01",
    title: "Understand & Scope",
    desc: "Deep discovery of enterprise workflows, architecture audit, and ROI benchmarking.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Scalable systems blueprinting, security governance, and modular technology roadmaps.",
  },
  {
    num: "03",
    title: "Engineering & Deployment",
    desc: "Agile sprint cycles, CI/CD automated deployment, and enterprise-grade testing.",
  },
  {
    num: "04",
    title: "Continuous Evolution & Support",
    desc: "24/7 SLA monitoring, proactive optimization, and ongoing architectural support.",
  },
];

export default function TechTorchDeliveryBlueprint() {
  return (
    <section className="w-full bg-white">
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
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 md:mb-12">
          {/* Label */}
          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4">
            <span
              className="h-px w-6 sm:w-8"
              style={{ backgroundColor: BRAND_COLOR }}
            />

            <span
              className="
                font-['Inter']
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.12em]
                sm:text-[10px]
                md:text-[11px]
              "
              style={{ color: BRAND_COLOR }}
            >
              Our Delivery Blueprint
            </span>

            <span
              className="h-px w-6 sm:w-8"
              style={{ backgroundColor: BRAND_COLOR }}
            />
          </div>

          {/* Heading */}
          <h2
            className="
              mb-3
              font-['Plus_Jakarta_Sans']
              text-[24px]
              font-bold
              leading-[1.2]
              tracking-[-0.025em]
              text-neutral-900
              sm:text-[28px]
              md:text-[32px]
              lg:text-[35px]
            "
          >
            How We Work Together
          </h2>

          {/* Subheading */}
          <p
            className="
              mx-auto
              max-w-xl
              font-['Plus_Jakarta_Sans']
              text-[11px]
              font-medium
              leading-[1.65]
              text-neutral-500
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            A disciplined, human-driven framework ensuring every technical
            deployment solves genuine business needs.
          </p>
        </div>

        {/* =================================================
            STEPS
        ================================================= */}

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
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="
                group
                relative
                flex
                min-h-[225px]
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-neutral-200
                bg-white
                p-5
                shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(115,0,36,0.10)]
                sm:min-h-[240px]
                sm:p-6
              "
            >
              {/* Top Accent */}
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

              {/* Number */}
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    font-['Inter']
                    text-[11px]
                    font-bold
                    text-white
                    sm:h-10
                    sm:w-10
                    sm:text-xs
                  "
                  style={{
                    backgroundColor: BRAND_COLOR,
                  }}
                >
                  {step.num}
                </span>

                {/* Step indicator */}
                <span
                  className="
                    font-['Inter']
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-neutral-300
                    sm:text-[10px]
                  "
                >
                  Step {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mb-3
                  font-['Plus_Jakarta_Sans']
                  text-[15px]
                  font-bold
                  leading-[1.4]
                  text-neutral-900
                  sm:text-[16px]
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  flex-1
                  font-['Inter']
                  text-[11px]
                  leading-[1.7]
                  text-neutral-500
                  sm:text-[12px]
                  md:text-[12.5px]
                "
              >
                {step.desc}
              </p>

              {/* Bottom Line */}
              <div className="mt-5 flex items-center gap-2">
                <span
                  className="h-px w-8 transition-all duration-300 group-hover:w-12"
                  style={{
                    backgroundColor: BRAND_COLOR,
                  }}
                />

                <span
                  className="
                    font-['Inter']
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                    text-neutral-400
                  "
                >
                  TechTorch Framework
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}