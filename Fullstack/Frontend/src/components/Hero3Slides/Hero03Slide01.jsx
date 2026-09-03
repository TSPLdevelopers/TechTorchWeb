import React from "react";

export default function SoftwareDevelopmentHero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[500px]
        overflow-hidden
        bg-[#0b0b0b]

        sm:min-h-[520px]

        md:min-h-[500px]

        lg:h-[500px]
        lg:min-h-0
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/Slide3.1.png"
        alt="Software Development"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover

          object-[62%_center]

          sm:object-[58%_center]

          md:object-[55%_center]

          lg:object-[52%_center]
        "
      />

      {/* ================= DARK GRADIENT OVERLAY ================= */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-r

          from-black/95
          via-black/75
          to-black/30

          sm:from-black/95
          sm:via-black/70
          sm:to-transparent

          lg:from-black/95
          lg:via-black/65
          lg:via-[30%]
          lg:to-transparent
          lg:to-[68%]
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10

          flex
          min-h-[500px]
          w-full
          items-center

          px-5
          py-12

          sm:min-h-[520px]
          sm:px-8
          sm:py-14

          md:min-h-[500px]
          md:px-10

          lg:h-full
          lg:min-h-0
          lg:px-[7%]
          lg:py-10
        "
      >
        <div
          className="
            w-full
            max-w-[520px]
            text-white
          "
        >
          {/* ================= EYEBROW ================= */}
          <p
            className="
              mb-4
              text-[12px]
              font-semibold
              tracking-[0.5px]

              min-[400px]:text-[13px]

              sm:mb-5
              sm:text-[14px]

              md:text-[15px]

              lg:mb-6
              lg:text-[15px]
            "
          >
            SOFTWARE DEVELOPMENT
          </p>

          {/* ================= HEADING ================= */}
          <h1
            className="
              mb-5
              font-medium
              leading-[1.08]
              tracking-[-0.8px]

              text-[30px]

              min-[400px]:text-[34px]

              sm:text-[38px]
              sm:tracking-[-1px]

              md:text-[42px]

              lg:mb-6
              lg:text-[44px]

              xl:text-[38px]
            "
          >
            Software Built
            <br />
            Around Your Business
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <div
            className="
              max-w-[500px]

              text-[14px]
              font-normal
              leading-[1.55]
              text-white/95

              sm:text-[15px]

              md:text-[16px]

              lg:text-[17px]
              lg:leading-[1.4]
            "
          >
            <p>
              Your business has its own way of working. Your software should
              support that—not force you to work around it.
            </p>

            <p className="mt-4 sm:mt-5">
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
              mt-7
              inline-flex
              items-center
              justify-center

              rounded-[3px]

              bg-[#970052]

              px-4
              py-2

              text-[14px]
              font-semibold
              text-white

              transition-all
              duration-200

              hover:bg-white
              hover:text-[#970052]

              sm:mt-8
              sm:px-5
              sm:py-[9px]
              sm:text-[15px]

              lg:mt-9
              lg:px-4
              lg:py-2
              lg:text-[15px]
            "
          >
            Talk To Experts
          </button>
        </div>
      </div>
    </section>
  );
}