import React from "react";

export default function TechHeroSection() {
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
          backgroundImage: "url('/Modernexecutive.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/60" />

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
        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            w-full
            max-w-[330px]
            text-[24px]
            font-bold
            leading-[1.25]
            text-white
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
          Technology Is Changing How Business Gets Done
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
            text-slate-300
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
          Technology is becoming an essential part of how businesses operate,
          make decisions and respond to changing needs. Artificial
          Intelligence, Cloud Infrastructure, Cybersecurity and modern
          Software Engineering are creating new opportunities for
          organizations to improve the way they work.
        </p>

        {/* ================= BUTTON ================= */}
        <button
          type="button"
          className="
            mt-6
            inline-flex
            w-full
            max-w-[300px]
            items-center
            justify-center
            gap-2
            rounded-md
            bg-[#730042]
            px-5
            py-3
            text-[11px]
            font-semibold
            tracking-[0.05em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#730042]
            active:translate-y-0
            sm:mt-7
            sm:w-auto
            sm:max-w-none
            sm:px-6
            sm:py-3
            sm:text-xs
            md:mt-8
            md:text-sm
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span>EXPLORE OUR TECHNOLOGY CAPABILITIES</span>

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