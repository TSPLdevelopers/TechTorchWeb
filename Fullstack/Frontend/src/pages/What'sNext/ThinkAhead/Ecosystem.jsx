import React from "react";

export default function EcosystemHeroSection() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[400px]
        overflow-hidden
        bg-slate-950
        sm:min-h-[440px]
        md:min-h-[480px]
        lg:min-h-[520px]
        xl:min-h-[560px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/Ecosystem.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[400px]
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-4
          py-12
          text-center
          sm:min-h-[440px]
          sm:px-6
          sm:py-16
          md:min-h-[480px]
          md:px-8
          md:py-20
          lg:min-h-[520px]
          lg:px-10
          lg:py-24
          xl:min-h-[560px]
        "
      >
        {/* ================= LABEL ================= */}
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.16em]
            text-slate-200
            sm:text-[10px]
            sm:tracking-[0.18em]
            md:text-[11px]
            md:tracking-[0.2em]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          STRATEGIC ECOSYSTEM INTEGRATION
        </span>

        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            mt-3
            w-full
            max-w-[330px]
            text-[24px]
            font-bold
            leading-[1.25]
            text-white
            sm:mt-4
            sm:max-w-xl
            sm:text-[30px]
            md:max-w-2xl
            md:text-[38px]
            lg:max-w-3xl
            lg:text-[44px]
            xl:text-[48px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Technology Needs to Work Together
        </h1>

        {/* ================= SUB HEADING ================= */}
        <p
          className="
            mt-4
            w-full
            max-w-[320px]
            text-[13px]
            font-medium
            leading-[1.7]
            text-slate-200
            sm:mt-5
            sm:max-w-xl
            sm:text-[14px]
            md:mt-6
            md:max-w-2xl
            md:text-[15px]
            lg:max-w-3xl
            lg:text-[16px]
            lg:leading-[1.75]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          The true power of modern enterprise technology is realized when
          systems are integrated. We build resilient foundations that adapt
          to new tools, ensuring your technology investments function as a
          cohesive, future-ready ecosystem.
        </p>

        {/* ================= BUTTON ================= */}
        <button
          type="button"
          className="
            mt-6
            inline-flex
            w-full
            max-w-[260px]
            items-center
            justify-center
            gap-2
            bg-fuchsia-900
            px-5
            py-3
            text-[11px]
            font-semibold
            tracking-[0.05em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-fuchsia-800
            active:translate-y-0
            sm:mt-7
            sm:w-auto
            sm:max-w-none
            sm:px-6
            sm:text-xs
            md:mt-8
            md:py-3.5
            md:text-sm
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span>TALK TO OUR EXPERTS</span>

          <span
            aria-hidden="true"
            className="text-base leading-none"
          >
            →
          </span>
        </button>
      </div>
    </section>
  );
}