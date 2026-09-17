import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  Zap,
  Award,
  DollarSign,
  Network,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const stats = [
  {
    icon: Zap,
    title: "48-Hour",
    subtitle: "Rapid Onboarding",
    description:
      "Matched profiles vetted and ready for client interview within two business days.",
  },
  {
    icon: Award,
    title: "Top 3%",
    subtitle: "Senior Talent",
    description:
      "Evaluated across rigorous system design and live programming challenges.",
  },
  {
    icon: DollarSign,
    title: "Zero",
    subtitle: "Hiring Overhead",
    description:
      "No upfront recruitment retainers, long-term liabilities, or severance risks.",
  },
];

const stacks = [
  { label: "React / Next.js", highlighted: false },
  { label: "Node.js", highlighted: false },
  { label: "Python / FastAPI", highlighted: false },
  { label: "AWS Cloud", highlighted: true },
  { label: "Kubernetes", highlighted: false },
  { label: "Go", highlighted: false },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function FlexibleTechResourcesHero() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#730024]/5 to-white font-inter">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1fr)_380px]
            gap-8
            sm:gap-10
            lg:gap-12
            items-center
            mb-10
            sm:mb-12
          "
        >

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <div className="w-full">

            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#730024]/5
                border
                border-[#730024]/10
                px-3
                py-1.5
                mb-5
                sm:mb-6
              "
            >
              <ShieldCheck className="w-3 h-3 text-[#730024]" />

              <span className="text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold font-inter">
                IT AUGMENTATION • CAPABILITY 01
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                font-jakarta
                font-semibold
                text-3xl
                sm:text-4xl
                lg:text-[2.75rem]
                leading-[1.1]
                mb-4
                sm:mb-5
                text-[#1c1c1c]
                max-w-2xl
              "
            >
              Flexible Technology Resources for{" "}
              <span className="text-[#730024]">
                Dynamic Project
              </span>{" "}
              Demands
            </h1>

            {/* =================================================
                SUB HEADING / DESCRIPTION
            ================================================= */}

            <p
              className="
                font-jakarta
                text-neutral-500
                text-[13.5px]
                sm:text-[14px]
                lg:text-[15px]
                leading-relaxed
                max-w-xl
                mb-6
                sm:mb-8
              "
            >
              Scale engineering capacity rapidly with pre-vetted senior
              software engineers, architects, and technical specialists who
              seamlessly integrate into your sprint cycles.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <button
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                bg-[#730024]
                text-white
                font-inter
                font-semibold
                text-[12px]
                sm:text-sm
                px-5
                sm:px-6
                py-2.5
                sm:py-3
                hover:bg-[#5c001d]
                transition-colors
              "
            >
              Talk to Our Experts

              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

          {/* =====================================================
              RIGHT COLUMN - TALENT CARD
          ===================================================== */}

          <div
            className="
              w-full
              max-w-[380px]
              mx-auto
              lg:mx-0
              lg:justify-self-end
              rounded-xl
              sm:rounded-2xl
              bg-white
              border
              border-neutral-200
              shadow-sm
              p-4
              sm:p-5
            "
          >

            {/* Header row */}
            <div className="flex items-center justify-between gap-3 mb-4">

              <div className="flex items-center gap-3 min-w-0">

                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#730024]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Network className="w-4 h-4 text-white" />
                </div>

                <div className="min-w-0">

                  <div className="text-[12px] sm:text-[13px] font-semibold text-[#1c1c1c] font-inter">
                    Active Talent Pool
                  </div>

                  <div className="text-[10px] sm:text-[11px] text-neutral-400 font-inter">
                    Live Engineering Bench
                  </div>

                </div>

              </div>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  bg-emerald-50
                  text-emerald-600
                  text-[9px]
                  sm:text-[10px]
                  font-semibold
                  px-2
                  sm:px-2.5
                  py-1
                  rounded-full
                  whitespace-nowrap
                  font-inter
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Instant Deploy
              </span>

            </div>

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="
                relative
                rounded-lg
                overflow-hidden
                mb-4
                h-44
                sm:h-48
                lg:h-52
              "
            >

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('DeploymentMethodology.png')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div
                className="
                  absolute
                  bottom-2
                  left-2
                  right-2
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-1.5
                  text-white
                  text-[9px]
                  sm:text-[10px]
                  font-medium
                  font-inter
                "
              >

                <span className="flex items-center gap-1">

                  <ShieldCheck className="w-3 h-3 shrink-0" />

                  Production Verified Staff

                </span>

                <span>Tier 1 Bench</span>

              </div>

            </div>

            {/* =================================================
                STACKS
            ================================================= */}

            <div
              className="
                text-[8.5px]
                sm:text-[9px]
                tracking-wide
                text-neutral-400
                font-semibold
                mb-2.5
                font-inter
              "
            >
              AVAILABLE CORE STACKS
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">

              {stacks.map((stack) => (

                <span
                  key={stack.label}
                  className={
                    stack.highlighted
                      ? `
                        text-[10px]
                        sm:text-[11px]
                        font-medium
                        px-2.5
                        sm:px-3
                        py-1
                        sm:py-1.5
                        rounded-md
                        bg-[#730024]/5
                        text-[#730024]
                        border
                        border-[#730024]/10
                        font-inter
                      `
                      : `
                        text-[10px]
                        sm:text-[11px]
                        font-medium
                        px-2.5
                        sm:px-3
                        py-1
                        sm:py-1.5
                        rounded-md
                        bg-neutral-100
                        text-neutral-600
                        font-inter
                      `
                  }
                >
                  {stack.label}
                </span>

              ))}

            </div>

          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="border-t border-neutral-200 mb-6 sm:mb-8" />

        {/* =====================================================
            STAT CARDS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            sm:gap-5
          "
        >

          {stats.map(
            ({ icon: Icon, title, subtitle, description }) => (

              <div
                key={subtitle}
                className="
                  rounded-xl
                  bg-neutral-50
                  border
                  border-neutral-200
                  p-4
                  sm:p-5
                  flex
                  gap-3
                  sm:gap-4
                  items-start
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-9
                    h-9
                    rounded-lg
                    bg-[#730024]/5
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Icon className="w-4 h-4 text-[#730024]" />
                </div>

                {/* Content */}
                <div className="min-w-0">

                  <div
                    className="
                      text-[15px]
                      sm:text-[16px]
                      font-semibold
                      text-[#1c1c1c]
                      leading-tight
                      font-inter
                    "
                  >
                    {title}
                  </div>

                  <div
                    className="
                      text-[11px]
                      sm:text-[12px]
                      font-semibold
                      text-neutral-600
                      mb-1.5
                      font-inter
                    "
                  >
                    {subtitle}
                  </div>

                  <p
                    className="
                      text-[11px]
                      sm:text-[11.5px]
                      text-neutral-500
                      leading-relaxed
                      font-inter
                    "
                  >
                    {description}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>
    </div>
  );
}