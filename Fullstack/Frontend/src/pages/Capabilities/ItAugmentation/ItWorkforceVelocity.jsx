import React from "react";
import { Zap, ArrowRight } from "lucide-react";

const BRAND_COLOR = "#730024";

export default function ITAugmentationHero() {
  return (
    <section className="w-full bg-[#f7f5f3]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-8
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-16
          lg:grid-cols-2
          lg:gap-12
          lg:px-10
          lg:py-20
          xl:gap-16
        "
      >
        {/* =====================================================
            LEFT COLUMN
        ===================================================== */}

        <div className="w-full">
          {/* Eyebrow */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-neutral-200
              bg-white
              px-3
              py-1.5
              sm:mb-6
              sm:px-4
              sm:py-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
              "
              style={{
                backgroundColor: BRAND_COLOR,
              }}
            />

            <span
              className="
                font-['Inter']
                text-[8px]
                font-semibold
                tracking-[0.06em]
                sm:text-[9px]
                md:text-[10px]
                lg:text-[11px]
              "
              style={{
                color: BRAND_COLOR,
              }}
            >
              IT Augmentation · Workforce Velocity
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="
              mb-4
              max-w-2xl
              font-['Plus_Jakarta_Sans']
              text-[27px]
              font-bold
              leading-[1.15]
              tracking-[-0.025em]
              text-[#1c1c1c]
              sm:mb-5
              sm:text-[32px]
              md:text-[38px]
              lg:mb-6
              lg:text-[43px]
              xl:text-[48px]
            "
          >
            Extend Your Technology Team with{" "}
            <span style={{ color: BRAND_COLOR }}>
              Flexible IT Expertise
            </span>
          </h1>

          {/* Body Copy */}
          <div
            className="
              mb-6
              max-w-xl
              space-y-3
              sm:mb-7
              sm:space-y-4
              lg:mb-8
            "
          >
            {/* Subheading */}
            <p
              className="
                font-['Plus_Jakarta_Sans']
                text-[12px]
                font-semibold
                leading-[1.6]
                text-neutral-700
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
              "
            >
              Build stronger technology capabilities with flexible IT
              augmentation services designed around your project, resource,
              and business requirements.
            </p>

            {/* Description */}
            <p
              className="
                font-['Inter']
                text-[11px]
                leading-[1.7]
                text-neutral-500
                sm:text-[12px]
                md:text-[13px]
                lg:text-[14px]
              "
            >
              TechTorch Solutions helps businesses access the right
              technology expertise when they need additional support, whether
              for a specific project, ongoing development, or changing
              workforce requirements.
            </p>
          </div>

          {/* CTA */}
          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              px-5
              py-3
              font-['Inter']
              text-[11px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:opacity-90
              sm:px-6
              sm:py-3.5
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

        {/* =====================================================
            RIGHT COLUMN
        ===================================================== */}

        <div className="relative w-full">
          {/* Image Card */}
          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-white
              bg-white
              p-1.5
              shadow-xl
              sm:rounded-2xl
              sm:p-2
            "
          >
            <div
              className="
                h-[260px]
                w-full
                rounded-lg
                bg-cover
                bg-center
                sm:h-[320px]
                sm:rounded-xl
                md:h-[380px]
                lg:h-[420px]
                xl:h-[460px]
              "
              style={{
                backgroundImage:
                  "url('/DeploymentMethodology.png')",
              }}
            />
          </div>

          {/* =================================================
              FLOATING STATS BAR
          ================================================= */}

          <div
            className="
              absolute
              bottom-3
              left-1/2
              w-[92%]
              -translate-x-1/2
              rounded-lg
              bg-white
              px-3
              py-3
              shadow-lg
              sm:bottom-4
              sm:w-[90%]
              sm:rounded-xl
              sm:px-4
              sm:py-4
              md:px-5
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:gap-4
              "
            >
              {/* Deployment Speed */}
              <div className="flex items-center gap-2.5">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    sm:h-9
                    sm:w-9
                  "
                  style={{
                    backgroundColor: "#f9e8ef",
                  }}
                >
                  <Zap
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    style={{
                      color: BRAND_COLOR,
                    }}
                  />
                </div>

                <div>
                  <div
                    className="
                      mb-0.5
                      font-['Inter']
                      text-[7px]
                      font-semibold
                      tracking-[0.08em]
                      text-neutral-400
                      sm:text-[8px]
                      md:text-[9px]
                    "
                  >
                    DEPLOYMENT SPEED
                  </div>

                  <div
                    className="
                      font-['Inter']
                      text-[10px]
                      font-semibold
                      text-[#1c1c1c]
                      sm:text-[11px]
                      md:text-[12px]
                    "
                  >
                    48h Rapid Deployment
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-8 w-px bg-neutral-200 sm:block" />

              {/* Vetting Tier */}
              <div className="text-left sm:text-right">
                <div
                  className="
                    mb-0.5
                    font-['Inter']
                    text-[7px]
                    font-semibold
                    tracking-[0.08em]
                    text-neutral-400
                    sm:text-[8px]
                    md:text-[9px]
                  "
                >
                  VETTING TIER
                </div>

                <div
                  className="
                    font-['Inter']
                    text-[10px]
                    font-semibold
                    sm:text-[11px]
                    md:text-[12px]
                  "
                  style={{
                    color: BRAND_COLOR,
                  }}
                >
                  Top 3% Vetted Talent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}