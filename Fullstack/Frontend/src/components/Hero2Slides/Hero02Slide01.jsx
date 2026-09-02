import React from "react";

export default function ErpHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0c140c]
        font-['Plus_Jakarta_Sans']

        min-h-[500px]
        sm:min-h-[520px]
        md:min-h-[540px]
        lg:min-h-[560px]
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
          backgroundImage: "url('/slide21.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,10,6,0.55) 0%, rgba(6,10,6,0.38) 45%, rgba(6,10,6,0.65) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto

          flex
          min-h-[500px]
          sm:min-h-[520px]
          md:min-h-[540px]
          lg:min-h-[560px]
          xl:min-h-[580px]

          w-full
          max-w-6xl

          flex-col
          items-center
          justify-center

          px-5
          sm:px-8
          md:px-10
          lg:px-12

          py-14
          sm:py-16
          md:py-20
          lg:py-24

          text-center
        "
      >

        {/* ================= LABEL ================= */}

        <p
          className="
            mb-3
            sm:mb-4
            md:mb-5

            text-[10px]
            sm:text-xs
            md:text-sm

            font-bold
            tracking-[0.12em]
            sm:tracking-[0.15em]
            md:tracking-[0.18em]

            leading-tight

            text-white/90
          "
        >
          ENTERPRISE RESOURCE PLANNING
        </p>


        {/* ================= HEADING ================= */}

        <h1
          className="
            mb-4
            sm:mb-5
            md:mb-6

            w-full

            max-w-[340px]
            sm:max-w-[520px]
            md:max-w-[700px]
            lg:max-w-[850px]

            text-[1.65rem]
            sm:text-[2rem]
            md:text-[2.5rem]
            lg:text-[3rem]
            xl:text-[3.25rem]

            font-semibold

            leading-[1.15]
            sm:leading-[1.15]
            md:leading-[1.12]

            text-white
          "
        >
          Connect Your Business. Work Better Together.
        </h1>


        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mb-6
            sm:mb-7
            md:mb-8
            lg:mb-9

            w-full

            max-w-[330px]
            sm:max-w-[540px]
            md:max-w-[680px]
            lg:max-w-[800px]

            text-[13px]
            sm:text-sm
            md:text-base
            lg:text-[17px]

            leading-[1.6]
            md:leading-[1.65]

            text-white/90
          "
        >
          Bring your finance, operations, people, inventory and customer
          processes together in one place. With a connected ERP system, your
          teams can spend less time managing information and more time getting
          work done.
        </p>


        {/* ================= BUTTON ================= */}

        <button
          type="button"
          className="
            border
            border-white/70

            bg-transparent
            text-white

            text-[11px]
            sm:text-xs
            md:text-sm

            font-medium
            tracking-wide

            px-5
            sm:px-6
            md:px-7

            py-2.5
            sm:py-3
            md:py-3.5

            whitespace-nowrap

            transition-all
            duration-300
            ease-in-out

            hover:bg-white
            hover:text-[#0c140c]
            hover:border-white

            active:scale-95
          "
        >
          Talk to Our Experts
        </button>

      </div>
    </section>
  );
}