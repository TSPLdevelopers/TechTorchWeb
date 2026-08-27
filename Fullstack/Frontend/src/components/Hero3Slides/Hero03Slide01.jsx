import React from "react";

export default function SoftwareDevelopmentHero() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-[#0b0b0b]">

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/Slide3.1.png"
        alt="Software Development"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[52%_center]
        "
      />

      {/* ================= DARK GRADIENT OVERLAY ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/95
          via-black/65
          via-[30%]
          to-transparent
          to-[68%]
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          h-full
          flex items-center
          px-6
          sm:px-10
          lg:px-[7%]
          py-10
        "
      >
        <div className="w-full max-w-[520px] text-white">

          {/* ================= EYEBROW ================= */}
          <p
            className="
              mb-6
              text-[15px]
              sm:text-[16px]
              font-semibold
              tracking-[-0.2px]
            "
          >
            SOFTWARE DEVELOPMENT
          </p>

          {/* ================= HEADING ================= */}
          <h1
            className="
              text-[34px]
              sm:text-[40px]
              lg:text-[44px]
              xl:text-[38px]
              leading-[1.08]
              font-medium
              tracking-[-1px]
              mb-6
            "
          >
            Software Built
            <br />
            Around Your Business
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <div
            className="
              text-[15px]
              sm:text-[16px]
              lg:text-[17px]
              leading-[1.4]
              font-medium
              text-white/95
              max-w-[500px]
            "
          >
            <p>
              Your business has its own way of working. Your software should
              support that—not force you to work around it.
              <br />
              <br />
              At TechTorch, we build software around your processes, your
              people and your business goals. From new applications to
              modernizing existing systems, we create practical digital
              solutions that solve real business needs and are built to grow
              with you.
            </p>
          </div>

          {/* ================= BUTTON ================= */}
          <button
            type="button"
            className="
              mt-9
              inline-flex
              items-center
              justify-center
              rounded-[3px]
              bg-[#970052]
              px-4
              py-2
              text-[15px]
              sm:text-[16px]
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-white
              hover:text-[#970052]
            "
          >
            Talk To Experts
          </button>

        </div>
      </div>

    </section>
  );
}