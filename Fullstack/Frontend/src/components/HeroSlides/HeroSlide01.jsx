import React from "react";

export default function TechHero() {
  return (
    <div className="relative w-full min-h-[550px] overflow-hidden bg-[#0a1128] font-['Plus Jakarta Sans']">

      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slide1.1.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.55) 42%, rgba(10,10,20,0.15) 65%, rgba(10,10,20,0) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[450px]
          flex-col
          justify-center
          max-w-2xl

          px-4

          sm:px-6

          md:px-10

          lg:px-[100px]
        "
      >

        <h1
          className="
            text-white
            font-['Plus_Jakarta_Sans']
            font-semibold
            leading-[1.09]
            text-[34px]
            sm:text-[34px]
            md:text-[36px]
            tracking-tight
            translate-y-8
            whitespace-nowrap
          "
        >
          Technology Solutions Built
          <br />
          Around Your Business
        </h1>

        <p
          className="
            mt-20
            text-white/85
            font-['Inter']
            text-[15px]
            sm:text-[16px]
            leading-relaxed
            max-w-md
          "
        >
          Every business has its own challenges, priorities and goals. We
          bring together technology, expertise and practical thinking to
          create solutions that fit the way your business works.
        </p>

        <div className="mt-20">
          <button
            className="
              border
              border-white/70
              text-white
              text-[14px]
              font-medium
              tracking-wide
              px-4
              py-2
              hover:bg-white
              hover:text-[#0a1128]
              transition-colors
              duration-300
            "
          >
            Talk to Our Experts
          </button>
        </div>

      </div>
    </div>
  );
}