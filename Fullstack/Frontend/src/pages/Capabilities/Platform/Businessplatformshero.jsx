import React from "react";
import { ArrowRight } from "lucide-react";

export default function BusinessPlatformsHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        min-h-[540px]
        sm:min-h-[570px]
        md:min-h-[600px]
        lg:min-h-[620px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-[position:80%_center]
          bg-no-repeat
          sm:bg-[position:78%_center]
          lg:bg-[position:80%_center]
        "
        style={{
          backgroundImage: "url('/platformhero.png')",
        }}
      />

      {/* ================= WHITE LEFT FADE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white
          via-white/90
          to-transparent
        "
      />

      {/* ================= MOBILE OVERLAY ================= */}

      <div className="absolute inset-0 bg-white/40 sm:hidden" />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[540px]
          w-full
          max-w-6xl
          items-center
          px-4
          py-12
          sm:min-h-[570px]
          sm:px-6
          sm:py-14
          md:min-h-[600px]
          md:py-16
          lg:min-h-[620px]
          lg:px-6
          lg:py-16
        "
      >
        <div className="w-full max-w-xl">

          {/* ================= BADGE ================= */}

          <div className="mb-4 inline-flex items-center gap-2 sm:mb-5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#9d174d" }}
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
              style={{ color: "#730024" }}
            >
              Unified Business Platforms
            </span>
          </div>

          {/* ================= HEADING ================= */}

          <h1
            className="
              mb-3
              max-w-lg
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-slate-900
              sm:mb-4
              sm:text-[30px]
              md:text-[35px]
              lg:text-[36px]
            "
          >
            Technology That Works Around Your Business
          </h1>

          {/* ================= SUB HEADING ================= */}

          <p
            className="
              mb-6
              max-w-md
              font-['Plus_Jakarta_Sans']
              text-[12.5px]
              leading-[1.65]
              text-slate-500
              sm:mb-7
              sm:text-[14px]
              md:text-[15px]
            "
          >
            Connected platforms that simplify everyday work, bring your teams
            together, and help your business move forward with confidence.
          </p>

          {/* ================= CTA ================= */}

          <button
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              px-4
              py-2.5
              font-['Inter']
              text-[12px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:opacity-90
              sm:mb-8
              sm:px-5
              sm:py-3
              sm:text-[13px]
              md:text-[14px]
            "
            style={{ backgroundColor: "#7a1750" }}
          >
            Talk Our Experts
            <ArrowRight size={14} />
          </button>

          {/* ================= DIVIDER ================= */}

          <div className="mb-5 h-px w-full max-w-sm bg-slate-200 sm:mb-6" />

          {/* ================= STATS ================= */}

          <div
            className="
              flex
              items-start
              gap-8
              sm:gap-12
              md:gap-14
            "
          >
            <div>
              <p
                className="
                  font-['Inter']
                  text-[18px]
                  font-bold
                  text-slate-900
                  sm:text-[20px]
                  md:text-[22px]
                "
              >
                100%
              </p>

              <p
                className="
                  mt-0.5
                  font-['Inter']
                  text-[10px]
                  text-slate-500
                  sm:mt-1
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                Cloud Connected
              </p>
            </div>

            <div>
              <p
                className="
                  font-['Inter']
                  text-[18px]
                  font-bold
                  text-slate-900
                  sm:text-[20px]
                  md:text-[22px]
                "
              >
                24/7
              </p>

              <p
                className="
                  mt-0.5
                  font-['Inter']
                  text-[10px]
                  text-slate-500
                  sm:mt-1
                  sm:text-[11px]
                  md:text-[12px]
                "
              >
                Enterprise Reliability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}