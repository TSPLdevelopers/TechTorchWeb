import React from "react";
import { ArrowRight } from "lucide-react";

const BRAND_COLOR = "#730024";

const stats = [
  {
    title: "24h Response SLA",
    sub: "Rapid Architecture Review",
  },
  {
    title: "Senior Technical Leads",
    sub: "Direct Architect Access",
  },
  {
    title: "Enterprise NDA First",
    sub: "Rigorous Governance & Security",
  },
];

export default function TechTorchFinalCTA() {
  return (
    <section
      className="
        w-full
        bg-[#0a0a0c]
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
      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.08]
          bg-[#111014]
          shadow-2xl
          lg:grid-cols-[1.05fr_0.95fr]
        "
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(115,0,36,0.28), transparent 52%), linear-gradient(160deg, #1a151b 0%, #0d0b0f 100%)",
        }}
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            px-5
            py-8
            sm:px-7
            sm:py-10
            md:px-10
            md:py-12
            lg:px-12
            lg:py-14
            xl:px-14
          "
        >
          <div>
            {/* Label */}
            <div
              className="
                mb-4
                flex
                items-center
                gap-2
                font-['Inter']
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.08em]
                sm:mb-5
                sm:text-[10px]
                md:text-[11px]
              "
              style={{
                color: "#d98aa7",
              }}
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

              Let's Talk About Your Technology Roadmap
            </div>

            {/* Heading */}
            <h2
              className="
                mb-4
                max-w-2xl
                font-['Plus_Jakarta_Sans']
                text-[26px]
                font-bold
                leading-[1.18]
                tracking-[-0.025em]
                text-white
                sm:text-[30px]
                md:text-[35px]
                lg:text-[39px]
                xl:text-[42px]
              "
            >
              Ready to Move Your Business Forward?
            </h2>

            {/* Description */}
            <p
              className="
                mb-6
                max-w-xl
                font-['Inter']
                text-[11.5px]
                leading-[1.7]
                text-white/60
                sm:mb-7
                sm:text-[12.5px]
                md:text-[13px]
                lg:text-[14px]
              "
            >
              From strategic advisory to enterprise execution, TechTorch
              partners with leading organizations to build scalable,
              resilient, and future-proof digital solutions.
            </p>

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
                sm:text-xs
              "
              style={{
                backgroundColor: BRAND_COLOR,
              }}
            >
              Talk to Our Experts

              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </button>
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-1
              gap-5
              border-t
              border-white/[0.08]
              pt-6
              sm:mt-10
              sm:grid-cols-3
              sm:gap-4
              sm:pt-7
              md:mt-12
            "
          >
            {stats.map((stat) => (
              <div key={stat.title}>
                <p
                  className="
                    mb-1
                    font-['Inter']
                    text-[11px]
                    font-semibold
                    text-white
                    sm:text-[12px]
                    md:text-[12.5px]
                  "
                >
                  {stat.title}
                </p>

                <p
                  className="
                    font-['Inter']
                    text-[9.5px]
                    leading-relaxed
                    text-white/40
                    sm:text-[10px]
                    md:text-[11px]
                  "
                >
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            RIGHT IMAGE
        ================================================= */}

        <div
          className="
            relative
            min-h-[240px]
            overflow-hidden
            sm:min-h-[300px]
            md:min-h-[350px]
            lg:min-h-full
          "
        >
          {/* IMAGE */}

          <img
            src="/roadmap.png"
            alt="TechTorch technology consultation"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#0a0a0c]/60
              via-[#0a0a0c]/15
              to-transparent
            "
          />

          {/* Bottom gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-1/3
              bg-gradient-to-t
              from-black/40
              to-transparent
            "
          />

          {/* Small image label */}
          <div
            className="
              absolute
              bottom-5
              left-5
              rounded-md
              border
              border-white/10
              bg-black/30
              px-3
              py-2
              backdrop-blur-sm
              sm:bottom-6
              sm:left-6
            "
          >
            <p
              className="
                font-['Inter']
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white/80
                sm:text-[9px]
              "
            >
              TECHTORCH
            </p>

            <p
              className="
                mt-0.5
                font-['Inter']
                text-[8px]
                text-white/50
                sm:text-[9px]
              "
            >
              Technology. Strategy. Growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}