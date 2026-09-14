import React from "react";
import {
  Zap,
  Handshake,
  Lock,
  ArrowRight,
  Building2,
} from "lucide-react";

const PILLS = [
  { icon: Zap, label: "Response in 24h" },
  { icon: Handshake, label: "Senior Architect Call" },
  { icon: Lock, label: "NDA & Security First" },
];

export default function FinalCtaSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-12
        sm:px-8
        sm:py-14
        md:px-10
        md:py-16
        lg:px-16
        lg:py-20
      "
      style={{
        background:
          "radial-gradient(120% 100% at 10% 0%, #4a0e2e 0%, #0d0508 55%, #0a0509 100%)",
      }}
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          items-center
          gap-9
          sm:gap-10
          md:gap-12
          lg:grid-cols-[1.05fr_1fr]
          lg:gap-10
        "
      >
        {/* ================= LEFT: CONTENT ================= */}

        <div className="w-full">

          {/* Badge */}

          <span
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-3
              py-1.5
              font-['Inter']
              sm:mb-5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-rose-200 sm:text-[10px]">
              Direct Enterprise Advisory
            </span>
          </span>

          {/* ================= HEADING ================= */}

          <h2
            className="
              mb-4
              font-['Plus_Jakarta_Sans']
              text-[28px]
              font-bold
              leading-[1.15]
              tracking-[-0.02em]
              sm:text-[34px]
              md:text-[40px]
              lg:text-[46px]
            "
          >
            <span className="text-white">
              Let's build something great
            </span>

            <br />

            <span className="text-rose-200">
              together.
            </span>
          </h2>

          {/* ================= SUB HEADING ================= */}

          <p
            className="
              mb-6
              max-w-md
              font-['Plus_Jakarta_Sans']
              text-[12.5px]
              leading-[1.65]
              text-white/60
              sm:mb-7
              sm:text-[14px]
              md:text-[15px]
            "
          >
            Have an idea, a challenge, or a vision? Connect directly with our
            platform architects to see how unified digital systems transform
            operations.
          </p>

          {/* ================= PILLS ================= */}

          <div
            className="
              mb-6
              flex
              flex-wrap
              gap-2
              sm:mb-7
              sm:gap-3
            "
          >
            {PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  font-['Inter']
                  text-[10px]
                  font-medium
                  text-white/80
                  sm:gap-2
                  sm:px-3.5
                  sm:py-2
                  sm:text-[12px]
                "
              >
                <Icon
                  size={12}
                  className="flex-shrink-0 text-rose-300 sm:h-[13px] sm:w-[13px]"
                />

                <span>{label}</span>
              </span>
            ))}
          </div>

          {/* ================= CTA ================= */}

          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              px-5
              py-3
              font-['Inter']
              text-[12px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
              sm:px-6
              sm:py-3.5
              sm:text-[14px]
            "
            style={{ backgroundColor: "#730024" }}
          >
            Talk to Us
            <ArrowRight size={14} className="sm:h-[15px] sm:w-[15px]" />
          </button>
        </div>

        {/* ================= RIGHT: IMAGE CARD ================= */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            shadow-2xl
          "
        >
          <img
            src="/desktop3.png"
            alt="Executive office overlooking a city skyline at dusk"
            className="
              block
              h-[260px]
              w-full
              object-cover
              object-center
              sm:h-[300px]
              md:h-[340px]
              lg:h-auto
              lg:aspect-[16/11]
            "
          />

          {/* ================= BOTTOM INFO BAR ================= */}

          <div
            className="
              absolute
              inset-x-2
              bottom-2
              flex
              items-center
              gap-2
              rounded-xl
              bg-black/60
              px-3
              py-2.5
              backdrop-blur-sm
              sm:inset-x-3
              sm:bottom-3
              sm:gap-3
              sm:px-4
              sm:py-3
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
              style={{ backgroundColor: "#730024" }}
            >
              <Building2
                size={14}
                className="text-white sm:h-4 sm:w-4"
              />
            </div>

            {/* Text */}

            <div className="min-w-0 flex-1">
              <p
                className="
                  truncate
                  font-['Inter']
                  text-[10px]
                  font-semibold
                  text-white
                  sm:text-[13px]
                "
              >
                Executive Advisory Suite
              </p>

              <p
                className="
                  truncate
                  font-['Inter']
                  text-[9px]
                  text-white/50
                  sm:text-[11px]
                "
              >
                Dedicated Enterprise Support
              </p>
            </div>

            {/* Available */}

            <span
              className="
                inline-flex
                flex-shrink-0
                items-center
                gap-1
                rounded-full
                bg-emerald-500/20
                px-2
                py-1
                font-['Inter']
                text-[8px]
                font-semibold
                text-emerald-300
                sm:gap-1.5
                sm:px-2.5
                sm:text-[10px]
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              Available Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}