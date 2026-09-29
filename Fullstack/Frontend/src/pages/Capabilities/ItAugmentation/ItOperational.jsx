import React from "react";
import { ArrowRight } from "lucide-react";

const BRAND_COLOR = "#730024";

const steps = [
  {
    number: "01",
    phase: "Phase I · Assessment",
    title: "Requirement Mapping",
    description:
      "Deep architectural evaluation of technical stack specifications, project timeline constraints, engineering maturity, and cultural synergies.",
    metaLabel: "Deliverable",
    metaValue: "Stack Blueprinting",
    featured: false,
  },
  {
    number: "02",
    phase: "Phase II · Curation",
    title: "Precision Talent Curation",
    description:
      "Identification, live coding validation, and rigorous vetting of senior technical talent tailored precisely for immediate velocity and seamless impact.",
    metaLabel: "Benchmark",
    metaValue: "48 Hour Matching",
    featured: true,
    badge: "FAST-TRACK",
  },
  {
    number: "03",
    phase: "Phase III · Deployment",
    title: "Seamless Integration & Delivery",
    description:
      "Frictionless assimilation into daily standups, Jira/Git sprint pipelines, and corporate security frameworks with guaranteed ramp-up speed.",
    metaLabel: "Guarantee",
    metaValue: "SLA-Backed Velocity",
    featured: false,
  },
];

export default function IntegratedResourcing() {
  return (
    <section className="w-full bg-[#f7f5f2]">
      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <div className="mb-4 flex justify-center sm:mb-5">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-1.5
                font-['Inter']
                text-[8px]
                font-bold
                uppercase
                tracking-[0.1em]
                sm:px-3.5
                sm:py-2
                sm:text-[9px]
                md:text-[10px]
              "
              style={{
                backgroundColor: "#f9e8ef",
                color: BRAND_COLOR,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: BRAND_COLOR }}
              />

              Operational Excellence & Resourcing Architecture
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="
              mb-4
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
            Integrated Resourcing Across Every Critical Dimension
          </h1>

          {/* Subheading */}
          <p
            className="
              mx-auto
              max-w-3xl
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
            Our services include{" "}
            <span className="font-semibold text-neutral-700">
              contract staffing, contract-to-hire, dedicated development
              teams, remote engineers, project-based hiring, resource
              replacement, bench hiring, vendor partnership, MSP support,
            </span>{" "}
            and offshore development teams.
          </p>
        </div>

        {/* =====================================================
            CARD GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            text-left
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className={`
                relative
                flex
                min-h-[260px]
                flex-col
                rounded-xl
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                sm:min-h-[275px]
                sm:p-6
                ${
                  step.featured
                    ? "border-2 shadow-[0_8px_25px_rgba(115,0,36,0.10)]"
                    : "border border-neutral-200"
                }
              `}
              style={
                step.featured
                  ? {
                      borderColor: BRAND_COLOR,
                    }
                  : undefined
              }
            >
              {/* Featured Badge */}
              {step.badge && (
                <span
                  className="
                    absolute
                    -top-3
                    right-4
                    rounded-full
                    px-2.5
                    py-1
                    font-['Inter']
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-white
                    sm:right-5
                    sm:text-[9px]
                  "
                  style={{
                    backgroundColor: BRAND_COLOR,
                  }}
                >
                  {step.badge}
                </span>
              )}

              {/* Card Header */}
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
                    backgroundColor: step.featured
                      ? BRAND_COLOR
                      : "#f9e8ef",
                    color: step.featured ? "#ffffff" : BRAND_COLOR,
                  }}
                >
                  {step.number}
                </span>

                {/* Phase */}
                <span
                  className="
                    text-right
                    font-['Inter']
                    text-[8px]
                    font-medium
                    text-neutral-400
                    sm:text-[9px]
                    md:text-[10px]
                  "
                >
                  {step.phase}
                </span>
              </div>

              {/* Title */}
              <h3
                className="
                  mb-3
                  font-['Plus_Jakarta_Sans']
                  text-[14px]
                  font-bold
                  leading-[1.4]
                  text-[#1c1c1c]
                  sm:text-[15px]
                  md:text-[16px]
                "
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mb-6
                  flex-1
                  font-['Inter']
                  text-[11px]
                  leading-[1.75]
                  text-neutral-500
                  sm:text-[12px]
                  md:text-[12.5px]
                "
              >
                {step.description}
              </p>

              {/* Meta */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                  border-t
                  border-neutral-100
                  pt-3
                "
              >
                <span
                  className="
                    font-['Inter']
                    text-[9px]
                    font-medium
                    text-neutral-400
                    sm:text-[10px]
                  "
                >
                  {step.metaLabel}
                </span>

                <span
                  className="
                    text-right
                    font-['Inter']
                    text-[10px]
                    font-semibold
                    sm:text-[11px]
                  "
                  style={{
                    color: BRAND_COLOR,
                  }}
                >
                  {step.metaValue}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <div
        className="
          relative
          flex
          min-h-[360px]
          w-full
          items-center
          justify-center
          bg-cover
          bg-center
          sm:min-h-[400px]
          md:min-h-[440px]
        "
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(20,10,15,0.55) 0%, rgba(20,10,15,0.78) 100%), url('/Professionalmodern.png')",
        }}
      >
        {/* CTA Content */}
        <div
          className="
            mx-auto
            w-full
            max-w-3xl
            px-5
            py-16
            text-center
            sm:px-6
            sm:py-20
            md:px-8
            md:py-24
          "
        >
          {/* Small Label */}
          <div className="mb-4 flex justify-center">
            <span
              className="
                rounded-full
                border
                border-white/20
                bg-white/10
                px-3
                py-1.5
                font-['Inter']
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white/80
                backdrop-blur-sm
                sm:text-[9px]
              "
            >
              Flexible Technology Support
            </span>
          </div>

          {/* CTA Heading */}
          <h2
            className="
              mb-4
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-white
              sm:mb-5
              sm:text-[30px]
              md:text-[36px]
              lg:text-[40px]
            "
          >
            Flexible Technology Support When You Need It
          </h2>

          {/* CTA Description */}
          <p
            className="
              mx-auto
              mb-7
              max-w-2xl
              font-['Inter']
              text-[11px]
              leading-[1.75]
              text-white/75
              sm:mb-8
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Technology requirements can change quickly. Our IT augmentation
            services give businesses the flexibility to strengthen their
            teams, access additional expertise, and support their technology
            initiatives according to their changing needs.
          </p>

          {/* CTA Button */}
          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              px-5
              py-2.5
              font-['Inter']
              text-[11px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
              sm:px-6
              sm:py-3
              sm:text-[12px]
              md:text-[13px]
            "
            style={{
              backgroundColor: BRAND_COLOR,
            }}
          >
            Talk to Our Experts

            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}