import React from "react";

export default function TechnologyBusinessValue() {
  return (
    <section className="w-full overflow-hidden bg-[#faf9f4]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]

          px-5
          py-10

          sm:px-7
          sm:py-12

          md:px-10
          md:py-14

          lg:px-12
          lg:py-16

          xl:px-14
          xl:py-16
        "
      >
        {/* ================= HEADING ================= */}
        <h2
          className="
            font-['Inter']
            text-[30px]
            font-semibold
            leading-[1.1]
            tracking-[-1.2px]
            text-[#111111]

            min-[400px]:text-[32px]

            sm:text-[36px]
            sm:tracking-[-1.5px]

            md:relative
            md:left-4
            md:text-[40px]

            lg:left-6
            lg:text-[42px]

            xl:left-8
            xl:text-[38px]
          "
        >
          Technology That
          <br />
          Delivers{" "}
          <span className="text-[#850052]">
            Business Value
          </span>
        </h2>

        {/* ================= CONTENT ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-10

            sm:mt-10
            sm:gap-12

            md:mt-12
            md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]
            md:gap-x-12
            md:gap-y-10

            lg:gap-x-20

            xl:gap-x-24
          "
        >
          {/* ================= LEFT COLUMN ================= */}
          <div
            className="
              min-w-0

              md:relative
              md:left-4

              lg:left-6

              xl:left-8
            "
          >
            <p
              className="
                max-w-[650px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:text-[16px]

                md:text-[16px]

                lg:text-[16px]
              "
            >
              Good software should do more than introduce new technology. It
              should make the business work better.
            </p>

            <p
              className="
                mt-5
                max-w-[650px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7

                lg:mt-8
              "
            >
              At TechTorch, we focus on building solutions that improve
              everyday operations, connect information and make work easier
              for the people who use them. Whether the goal is to reduce
              repetitive tasks, bring disconnected systems together or give
              teams better access to information, we look at the business
              outcome behind the technology.
            </p>

            <p
              className="
                mt-5
                max-w-[650px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:text-[16px]

                md:mt-7

                lg:mt-8
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

          {/* ================= RIGHT COLUMN ================= */}
          <div
            className="
              min-w-0

              md:relative
              md:-top-2
              md:left-2

              lg:-top-4
              lg:left-4

              xl:-top-5
              xl:left-6
            "
          >
            <p
              className="
                max-w-full
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:max-w-[580px]
                sm:text-[16px]

                md:max-w-[480px]

                lg:max-w-[500px]

                xl:max-w-[500px]
              "
            >
              The right technology should also be practical. Not every
              business needs a large or complex system, and custom software
              isn't always the answer. But when standard solutions cannot
              support an important process or provide the flexibility a
              business needs, a tailored solution can make a meaningful
              difference.
            </p>

            <p
              className="
                mt-5
                max-w-full
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:max-w-[580px]
                sm:text-[16px]

                md:mt-7
                md:max-w-[480px]

                lg:mt-8
                lg:max-w-[500px]

                xl:max-w-[500px]
              "
            >
              Our approach is simple: understand the problem, choose the
              right technology and build a solution that creates lasting
              value.
            </p>

            <p
              className="
                mt-5
                max-w-full
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.65]
                text-[#5c5c5c]

                sm:mt-6
                sm:max-w-[580px]
                sm:text-[16px]

                md:mt-7
                md:max-w-[480px]

                lg:mt-8
                lg:max-w-[500px]

                xl:max-w-[500px]
              "
            >
              Software should simplify work, connect people and information,
              support better decisions and give businesses room to grow.
            </p>

            {/* ================= HIGHLIGHT ================= */}
            <p
              className="
                mt-7
                max-w-full
                font-['Plus_Jakarta_Sans']
                text-[17px]
                font-medium
                leading-[1.35]
                tracking-[-0.3px]
                text-[#850052]

                sm:mt-8
                sm:max-w-[580px]
                sm:text-[18px]

                md:mt-9
                md:max-w-[480px]
                md:text-[19px]

                lg:max-w-[500px]
                lg:text-[20px]

                xl:max-w-[500px]
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