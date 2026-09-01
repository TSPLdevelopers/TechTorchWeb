import React from "react";

export default function TechnologyBusinessValue() {
  return (
    <section className="w-full overflow-hidden bg-[#faf9f4]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]

          px-6
          py-5

          sm:px-8
          sm:py-6

          md:px-10
          md:py-7

          lg:px-12
          lg:py-8

          xl:px-14
          xl:py-9
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <h2
          className="
            font-['Inter']
            text-[30px]
            font-semibold
            leading-[1.08]
            tracking-[-1.2px]
            text-[#111111]

            min-[400px]:text-[32px]

            sm:text-[36px]
            sm:tracking-[-1.5px]

            md:text-[40px]

            lg:text-[42px]

            xl:text-[34px]
          "
        >
          Technology That
          <br />
          Delivers{" "}
          <span className="text-[#850052]">
            Business Value
          </span>
        </h2>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            mt-6

            grid
            grid-cols-1
            gap-6

            sm:mt-7
            sm:gap-7

            md:mt-8
            md:grid-cols-2
            md:gap-x-14
            md:gap-y-8

            lg:mt-9
            lg:gap-x-20
            lg:gap-y-10

            xl:gap-x-24
            xl:gap-y-12
          "
        >
          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}
          <div className="min-w-0">
            {/* Paragraph 1 */}
            <p
              className="
                max-w-[620px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.4]
                text-[#5c5c5c]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[16px]
              "
            >
              Good software should do more than introduce new technology. It
              should make the business work better.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                mt-5
                max-w-[620px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.4]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7
                md:text-[17px]

                lg:mt-8
                lg:text-[16px]
              "
            >
              At TechTorch, we focus on building solutions that improve
              everyday operations, connect information and make work easier
              for the people who use them. Whether the goal is to reduce
              repetitive tasks, bring disconnected systems together or give
              teams better access to information, we look at the business
              outcome behind the technology.
            </p>

            {/* Paragraph 3 */}
            <p
              className="
                mt-5
                max-w-[620px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.4]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7
                md:text-[17px]

                lg:mt-8
                lg:text-[16px]
              "
            >
              As businesses grow, their requirements change. Teams expand,
              processes evolve and new systems need to work alongside
              existing ones. That's why we consider scalability,
              maintainability and integration from the beginning. We build
              software that can adapt to changing requirements without adding
              unnecessary complexity.
            </p>
          </div>

          {/* =====================================================
              RIGHT COLUMN
          ====================================================== */}
          <div
  className="
    min-w-0

    md:relative
    md:-top-4
    md:left-4

    lg:-top-5
    lg:left-6

    xl:-top-6
    xl:left-8
  "
>
            {/* Paragraph 1 */}
            <p
              className="
                max-w-[620px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.4]
                text-[#5c5c5c]

                sm:text-[16px]

                md:text-[17px]

                lg:text-[16px]
              "
            >
              The right technology should also be practical. Not every
              business needs a large or complex system, and custom software
              isn't always the answer. But when standard solutions cannot
              support an important process or provide the flexibility a
              business needs, a tailored solution can make a meaningful
              difference.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                mt-5
                max-w-[620px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.4]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7
                md:text-[17px]

                lg:mt-8
                lg:text-[16px]
              "
            >
              Our approach is simple: understand the problem, choose the
              right technology and build a solution that creates lasting
              value.
            </p>

            {/* Paragraph 3 */}
            <p
              className="
                mt-5
                max-w-[620px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.4]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7
                md:text-[17px]

                lg:mt-8
                lg:text-[16px]
              "
            >
              Software should simplify work, connect people and information,
              support better decisions and give businesses room to grow.
            </p>

            {/* =================================================
                HIGHLIGHT
            ================================================== */}
            <p
              className="
                mt-6
                max-w-[620px]
                font-['Plus_Jakarta_Sans']
                text-[17px]
                font-medium
                leading-[1.25]
                tracking-[-0.3px]
                text-[#850052]

                sm:mt-7
                sm:text-[18px]

                md:mt-8
                md:text-[19px]

                lg:mt-9
                lg:text-[20px]

                xl:text-[18px]
              "
            >
              The goal isn't to build more technology. It's to build the
              right technology for the business—and make sure it continues to
              deliver value over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}