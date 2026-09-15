import React from "react";

export default function LetsConnect() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#170b17]

        h-[430px]

        sm:h-[460px]

        md:h-[500px]

        lg:h-[540px]

        xl:h-[570px]
      "
    >
      {/* =========================
          IMAGE
      ========================== */}
      <img
        src="/Slide4.3.png"
        alt="Let's Connect"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-fill
        "
      />

      {/* =========================
          CONTENT WRAPPER
      ========================== */}
      <div
        className="
          absolute
          inset-0
          z-10
          flex
          items-center
        "
      >
        <div
          className="
            w-[62%]

            pl-6
            pr-3

            sm:w-[61%]
            sm:pl-9
            sm:pr-4

            md:w-[60%]
            md:pl-12
            md:pr-5

            lg:w-[59%]
            lg:pl-16
            lg:pr-6

            xl:w-[58%]
            xl:pl-20
            xl:pr-8
          "
        >
          {/* =========================
              SMALL HEADING
          ========================== */}
          <p
            className="
              -translate-y-8
              mb-5
              text-[13px]
              font-medium
              uppercase
              tracking-[0.01em]
              text-white

              sm:-translate-y-9
              sm:mb-6
              sm:text-[15px]

              md:-translate-y-10
              md:mb-7
              md:text-[17px]

              lg:-translate-y-11
              lg:mb-8
              lg:text-[18px]

              xl:-translate-y-15
              xl:mb-9
              xl:text-[19px]
            "
          >
            LET’S CONNECT
          </p>

          {/* =========================
              MAIN HEADING
          ========================== */}
          <h1
            className="
              -translate-y-6
              text-[25px]
              font-semibold
              leading-[1.08]
              tracking-[-0.02em]
              text-white

              sm:-translate-y-7
              sm:text-[29px]

              md:-translate-y-8
              md:text-[34px]

              lg:-translate-y-9
              lg:text-[37px]

              xl:-translate-y-10
              xl:text-[38px]
            "
          >
            LET'S BUILD WHAT'S NEXT
          </h1>

          {/* =========================
              QUESTION
          ========================== */}
          <h2
            className="
              -translate-y-5
              mt-4
              whitespace-nowrap
              text-[18px]
              font-medium
              leading-[1.2]
              text-white

              sm:-translate-y-6
              sm:mt-5
              sm:text-[21px]

              md:-translate-y-7
              md:mt-6
              md:text-[24px]

              lg:-translate-y-8
              lg:mt-7
              lg:text-[28px]

              xl:-translate-y-9
              xl:mt-8
              xl:text-[30px]
            "
          >
            Have a Technology Challenge?
          </h2>

          {/* =========================
              DESCRIPTION
          ========================== */}
          <p
            className="
              -translate-y-5
              mt-2
              max-w-[480px]
              text-[13px]
              font-normal
              leading-[1.4]
              text-white

              sm:-translate-y-6
              sm:mt-3
              sm:text-[15px]

              md:-translate-y-7
              md:mt-3
              md:text-[16px]

              lg:-translate-y-8
              lg:mt-4
              lg:text-[17px]

              xl:-translate-y-9
              xl:mt-4
              xl:text-[18px]
            "
          >
            Let's understand your requirements and
            <br className="hidden sm:block" />
            find a practical way forward.
          </p>

          {/* =========================
              BUTTON
          ========================== */}
          <button
            type="button"
            className="
              group
              relative
              mt-6
              inline-flex
              translate-y-5
              items-center
              gap-2
              rounded-[5px]
              border
              border-white
              bg-transparent
              !px-[10px]
              !py-[8px]
              text-[13px]
              font-medium
              leading-none
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#22091f]

              sm:mt-7
              sm:translate-y-6
              sm:text-[15px]

              md:mt-8
              md:translate-y-7
              md:text-[16px]

              lg:mt-9
              lg:translate-y-8
              lg:text-[17px]

              xl:text-[19px]
            "
          >
            <span>Talk to Our Experts</span>

            <span
              className="
                text-[18px]
                leading-none
                transition-transform
                duration-300
                group-hover:translate-x-1

                sm:text-[19px]

                md:text-[20px]

                lg:text-[21px]
              "
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}