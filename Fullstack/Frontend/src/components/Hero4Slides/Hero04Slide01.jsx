import React from "react";

export default function TechnologyMovesForward() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}
      <div className="relative w-full">
        <img
          src="/Slide4.1.png"
          alt="Technology moving business forward"
          className="
            block
            h-[360px]
            w-full
            object-cover
            object-center

            sm:h-[380px]

            md:h-[400px]

            lg:h-[460px]

            xl:h-[480px]
          "
        />

        {/* =====================================================
            DARK OVERLAY
        ====================================================== */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
          "
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            absolute
            inset-0
            mx-auto
            w-full
            max-w-[1400px]

            px-5

            sm:px-7

            md:px-10

            lg:px-12

            xl:px-14
          "
        >
          <div
            className="
              flex
              h-full
              max-w-[590px]
              flex-col
              justify-start

              pt-[35px]

              sm:pt-[40px]

              md:pt-[45px]

              lg:pt-[55px]

              xl:pt-[60px]
            "
          >
            {/* =================================================
                HEADING
            ================================================== */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[28px]
                font-medium
                leading-[1.08]
                tracking-[-1.1px]
                text-white

                min-[400px]:text-[30px]

                sm:text-[34px]
                sm:tracking-[-1.3px]

                md:text-[38px]
                md:tracking-[-1.5px]

                lg:text-[44px]
                lg:tracking-[-1.8px]

                xl:text-[36px]
              "
            >
              Technology That Moves Your
              <br className="hidden sm:block" />
              Business Forward
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p
              className="
                mt-6
                max-w-[560px]
                font-['Inter']
                text-[14px]
                font-normal
                leading-[1.5]
                text-white

                sm:mt-7
                sm:text-[15px]

                md:mt-8
                md:text-[16px]

                lg:mt-8
                lg:text-[17px]
              "
            >
              We help businesses use technology to work smarter, solve
              complex challenges and prepare for what comes next. From
              software and cloud to AI and cybersecurity, our solutions are
              built around your business needs.
            </p>

            {/* =================================================
                BUTTON
            ================================================== */}
 <div
  className="
    mt-12

    sm:mt-13

    md:mt-14

    lg:mt-15

    xl:mt-16
  "
>
              <button
                type="button"
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-[4px]
                  bg-white

                  px-4
                  py-2.5

                  font-['Inter']
                  text-[13px]
                  font-semibold
                  leading-none
                  text-[#111111]

                  shadow-sm

                  transition-all
                  duration-200

                  hover:bg-[#f4f4f4]
                  hover:shadow-md

                  sm:px-5
                  sm:py-3
                  sm:text-[14px]

                  md:text-[15px]
                "
              >
                Talk to Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}