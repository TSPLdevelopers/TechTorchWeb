import React from "react";

export default function SoftwareThatWorks() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: "#f7f4ef",
        fontFamily: "Plus Jakarta Sans, sans-serif",
      }}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]

          px-5
          py-4

          sm:px-7
          sm:py-5

          md:px-10
          md:py-6

          lg:px-12
          lg:py-6

          xl:px-14
          xl:py-6
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8

            sm:gap-10

            md:grid-cols-[1.15fr_0.85fr]
            md:gap-8

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-10

            xl:grid-cols-[1.15fr_0.85fr]
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div
            className="
              flex
              min-w-0
              flex-col
              justify-start
              pt-0

              md:pt-1
            "
          >
            {/* HEADING */}
            <h1
              className="
                max-w-full
                font-['Plus_Jakarta_Sans']
                text-[30px]
                font-semibold
                leading-[1.08]
                tracking-[-1.2px]
                text-[#111111]

                min-[380px]:text-[32px]

                sm:text-[36px]
                sm:tracking-[-1.4px]

                md:text-[44px]
                md:tracking-[-1.8px]

                lg:text-[48px]

                xl:text-[38px]
              "
            >
              Software That Works
              <br />
              For{" "}
              <span className="text-[#850052]">
                Your Business
              </span>
            </h1>

            {/* FIRST PARAGRAPH */}
            <p
              className="
                mt-6
                max-w-[700px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:mt-7
                sm:text-[16px]

                md:mt-10
                md:text-[18px]

                lg:text-[16px]
              "
            >
              Every organization has different processes, priorities and
              challenges. Yet many businesses still rely on software that
              doesn't fully fit the way their teams work. We take a different
              approach.
            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="
                mt-6
                max-w-[700px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:mt-7
                sm:text-[16px]

                md:mt-9
                md:text-[18px]

                lg:text-[16px]
              "
            >
              At TechTorch, we start by understanding your business and the
              problem you want to solve. We look at your existing processes,
              systems and user needs before defining the right solution.
            </p>

            {/* THIRD PARAGRAPH */}
            <p
              className="
                mt-6
                max-w-[700px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:mt-7
                sm:text-[16px]

                md:mt-9
                md:text-[18px]

                lg:text-[16px]
              "
            >
              That could mean building a new application, connecting systems
              that currently operate separately, or modernizing an existing
              platform.
            </p>

            {/* FOURTH PARAGRAPH */}
            <p
              className="
                mt-6
                max-w-[700px]
                font-['Inter']
                text-[15px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:mt-7
                sm:text-[16px]

                md:mt-9
                md:text-[18px]

                lg:text-[16px]
              "
            >
              The technology is important, but the business outcome comes
              first.
            </p>
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}
          <div
            className="
              flex
              min-w-0
              flex-col

              items-center
              max-md:w-full
              max-md:translate-x-0

              md:items-start
              md:translate-x-[30px]

              lg:translate-x-[80px]

              xl:translate-x-[165px]
            "
          >
            {/* IMAGE */}
            <div
              className="
                w-[94%]
                max-w-[560px]
                overflow-hidden
                rounded-[16px]

                sm:w-[88%]
                sm:max-w-[580px]
                sm:rounded-[18px]

                md:w-[92%]
                md:max-w-[500px]
                md:rounded-[20px]

                lg:w-[78%]
                lg:max-w-none
                lg:rounded-[21px]

                xl:w-[72%]
              "
            >
              <img
                src="/Slide3.2.png"
                alt="Business team working together"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>

            {/* HIGHLIGHT TEXT */}
            <p
              className="
                mt-6
                w-full
                max-w-[500px]
                font-['Plus_Jakarta_Sans']
                text-[17px]
                font-bold
                leading-[1.25]
                tracking-[-0.4px]
                text-[#850052]

                sm:mt-7
                sm:max-w-[520px]
                sm:text-[19px]

                md:mt-8
                md:max-w-[500px]
                md:text-[21px]

                lg:mt-10
                lg:max-w-[520px]
                lg:text-[23px]

                xl:text-[20px]
              "
            >
              We build software to make your business
              <br className="hidden sm:block" />
              work better—not simply to add another
              <br className="hidden sm:block" />
              system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}