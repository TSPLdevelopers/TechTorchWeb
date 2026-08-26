import React from "react";

export default function ErpHero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[430px]
        sm:min-h-[450px]
        md:min-h-[470px]
        overflow-hidden
        bg-[#0c140c]
        font-['Plus_Jakarta_Sans']
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slide21.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,10,6,0.55) 0%, rgba(6,10,6,0.35) 40%, rgba(6,10,6,0.6) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          mx-auto

          w-full
          max-w-3xl

          min-h-[430px]
          sm:min-h-[450px]
          md:min-h-[470px]

          px-5
          sm:px-8
          md:px-10

          py-12
          sm:py-14
          md:py-16

          justify-center
        "
      >
        {/* ================= LABEL ================= */}
        <p
          className="
            text-white/90
            text-[10px]
            sm:text-xs
            md:text-sm

            font-bold
            tracking-[0.12em]
            sm:tracking-[0.15em]

            mb-3
            sm:mb-4
          "
        >
          ENTERPRISE RESOURCE PLANNING
        </p>

        {/* ================= HEADING ================= */}
        <h1
          className="
            text-white
            font-semibold

            leading-[1.15]

            text-[1.6rem]
            sm:text-[2rem]
            md:text-[2.4rem]
            lg:text-[2.6rem]

            max-w-[340px]
            sm:max-w-[550px]
            md:max-w-2xl

            mb-4
            sm:mb-5
          "
        >
          Connect Your Business. Work Better Together.
        </h1>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            text-white/90

            text-[13px]
            sm:text-sm
            md:text-base

            leading-[1.6]

            max-w-[330px]
            sm:max-w-xl
            md:max-w-2xl

            mb-6
            sm:mb-7
            md:mb-8
          "
        >
          Bring your finance, operations, people, inventory and customer
          processes together in one place. With a connected ERP system, your
          teams can spend less time managing information and more time getting
          work done.
        </p>

        {/* ================= BUTTON ================= */}
        <button
          className="
            border
            border-white/70
            text-white

            text-xs
            sm:text-sm

            font-medium
            tracking-wide

            px-5
            sm:px-6

            py-2
            sm:py-2.5

            hover:bg-white
            hover:text-[#0c140c]

            transition-colors
            duration-300
          "
        >
          Talk to Our Experts
        </button>
      </div>
    </section>
  );
}