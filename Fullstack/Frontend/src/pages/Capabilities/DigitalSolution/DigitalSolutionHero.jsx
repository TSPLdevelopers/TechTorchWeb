import React from "react";
import { ArrowRight } from "lucide-react";

const STATS = [
  { value: "99.8%", label: "Reliability SLA" },
  { value: "120+", label: "Deployments" },
  { value: "10+", label: "Global Sectors" },
];

export default function DigitalSolutionsHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-9
        sm:px-6
        sm:py-11
        md:px-8
        md:py-13
        lg:px-10
        lg:py-14
      "
      style={{
        background:
          "radial-gradient(100% 90% at 50% 15%, #5c0037 0%, #430029 42%, #26091f 68%, #0b0b12 100%)",
      }}
    >
      {/* =====================================================
          NETWORK BACKGROUND
      ====================================================== */}

      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          opacity-[0.16]
        "
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 500"
      >
        <g stroke="#ffffff" strokeWidth="0.6">
          <line x1="60" y1="60" x2="180" y2="120" />
          <line x1="180" y1="120" x2="140" y2="230" />
          <line x1="180" y1="120" x2="320" y2="90" />
          <line x1="320" y1="90" x2="420" y2="180" />
          <line x1="420" y1="180" x2="560" y2="130" />
          <line x1="560" y1="130" x2="680" y2="70" />

          <line x1="140" y1="230" x2="260" y2="310" />
          <line x1="260" y1="310" x2="400" y2="280" />
          <line x1="400" y1="280" x2="520" y2="340" />
          <line x1="520" y1="340" x2="650" y2="290" />

          <line x1="420" y1="180" x2="400" y2="280" />
          <line x1="60" y1="60" x2="120" y2="180" />
        </g>

        <g fill="#ffffff">
          <circle cx="60" cy="60" r="2.5" />
          <circle cx="180" cy="120" r="2.5" />
          <circle cx="140" cy="230" r="2.5" />
          <circle cx="320" cy="90" r="2.5" />
          <circle cx="420" cy="180" r="2.5" />
          <circle cx="560" cy="130" r="2.5" />
          <circle cx="680" cy="70" r="2.5" />
          <circle cx="260" cy="310" r="2.5" />
          <circle cx="400" cy="280" r="2.5" />
          <circle cx="520" cy="340" r="2.5" />
          <circle cx="650" cy="290" r="2.5" />
          <circle cx="120" cy="180" r="2.5" />
        </g>
      </svg>

      {/* =====================================================
          BOTTOM DARK OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[35%]
          bg-gradient-to-t
          from-black/35
          via-black/10
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-3xl
          text-center
        "
      >
        {/* =====================================================
            BADGE
        ====================================================== */}

        <div className="mb-4 flex justify-center sm:mb-5">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              bg-white/10
              px-3
              py-1
              font-['Inter']
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-white/85
              sm:px-3.5
              sm:py-1.5
              sm:text-[9px]
              md:text-[10px]
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Digital Solutions
          </span>
        </div>

        {/* =====================================================
            HEADING - PLUS JAKARTA SANS
        ====================================================== */}

        <h1
          className="
            mx-auto
            mb-3
            max-w-2xl
            font-['Plus_Jakarta_Sans']
            text-[25px]
            font-bold
            leading-[1.08]
            tracking-[-0.025em]
            text-white
            sm:text-[32px]
            md:text-[38px]
            lg:text-[42px]
          "
        >
          Technology Designed Around Your
          <br className="hidden sm:block" />
          <span className="text-rose-200">Business</span>
        </h1>

        {/* =====================================================
            SUB HEADING - PLUS JAKARTA SANS
        ====================================================== */}

        <p
          className="
            mx-auto
            mb-2
            max-w-2xl
            font-['Plus_Jakarta_Sans']
            text-[11px]
            font-semibold
            leading-[1.45]
            text-white
            sm:text-[12.5px]
            md:text-[14px]
          "
        >
          Every business has its own way of working. Your digital solutions
          should reflect that.
        </p>

        {/* =====================================================
            DESCRIPTION - INTER
        ====================================================== */}

        <p
          className="
            mx-auto
            mb-6
            max-w-2xl
            font-['Inter']
            text-[10px]
            leading-[1.55]
            text-white/65
            sm:mb-7
            sm:text-[11.5px]
            md:text-[13px]
          "
        >
          At TechTorch, we design and deliver digital solutions that help
          businesses simplify operations, connect processes, manage
          information, and make better decisions. From enterprise systems to
          customer-facing platforms, we build technology around real business
          needs.
        </p>

        {/* =====================================================
            CTA - INTER
        ====================================================== */}

        <div className="mb-5 flex justify-center sm:mb-6">
          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              px-5
              py-2.5
              font-['Inter']
              text-[10px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
              sm:px-6
              sm:py-3
              sm:text-[11px]
              md:text-[12px]
            "
            style={{
              backgroundColor: "#730024",
            }}
          >
            Talk to Our Experts

            <ArrowRight
              size={13}
              className="sm:h-[14px] sm:w-[14px]"
            />
          </button>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          className="
            mx-auto
            mb-5
            h-px
            w-full
            max-w-md
            bg-white/10
            sm:mb-6
          "
        />

        {/* =====================================================
            STATS
        ====================================================== */}

        <div
          className="
            mx-auto
            grid
            w-full
            max-w-lg
            grid-cols-1
            gap-2
            sm:grid-cols-3
            sm:gap-2.5
          "
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="
                rounded-lg
                border
                border-white/10
                bg-white/[0.06]
                px-3
                py-3
                backdrop-blur-sm
                sm:px-4
                sm:py-3.5
              "
            >
              {/* Stat value - INTER */}

              <p
                className="
                  mb-0.5
                  font-['Inter']
                  text-[17px]
                  font-bold
                  leading-none
                  text-white
                  sm:text-[19px]
                  md:text-[20px]
                "
              >
                {stat.value}
              </p>

              {/* Stat label - INTER */}

              <p
                className="
                  font-['Inter']
                  text-[8px]
                  text-white/55
                  sm:text-[9px]
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}