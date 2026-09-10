import React from "react";

export default function TechHeroSection() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[420px]
        overflow-hidden
        bg-slate-950
        sm:min-h-[460px]
        md:min-h-[500px]
        lg:min-h-[540px]
        xl:min-h-[580px]
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
          min-h-[420px]
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-4
          py-12
          text-center
          sm:min-h-[460px]
          sm:px-6
          sm:py-16
          md:min-h-[500px]
          md:px-8
          md:py-20
          lg:min-h-[540px]
          lg:px-10
          lg:py-24
          xl:min-h-[580px]
        "
      >
        {/* ================= HEADING ================= */}
        <h1
          className="
            w-full
            max-w-[320px]
            text-[24px]
            font-bold
            leading-[1.25]
            text-white
            sm:max-w-xl
            sm:text-[30px]
            md:max-w-2xl
            md:text-[38px]
            lg:max-w-3xl
            lg:text-[46px]
            xl:text-[50px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Technology Is Changing How Business Gets Done
        </h1>

        {/* ================= SUB HEADING / DESCRIPTION ================= */}
        <p
          className="
            mt-4
            w-full
            max-w-[320px]
            text-[13px]
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
            max-w-[290px]
            items-center
            justify-center
            gap-2
            rounded-full
            bg-fuchsia-800
            px-5
            py-3
            text-[11px]
            font-semibold
            tracking-[0.05em]
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-fuchsia-700
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
          <span aria-hidden="true" className="text-base">
            →
          </span>
        </button>
      </div>
    </section>
  );
}