import React from "react";

export default function SoftwareThatWorks() {
  return (
    <section className="w-full bg-[#faf9f4] overflow-hidden">
 <div
  className="
    mx-auto
    w-full
    max-w-[1400px]

    px-6
    py-4

    sm:px-8
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
            gap-12

            md:grid-cols-[1.15fr_0.85fr]
            md:gap-10

            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-14

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
              flex-col
              justify-start
              pt-0

              md:pt-1
            "
          >
            {/* HEADING */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[38px]
                font-medium
                leading-[1.08]
                tracking-[-1.8px]
                text-[#111111]

                sm:text-[42px]

                md:text-[44px]

                lg:text-[48px]

                xl:text-[50px]
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
                mt-9
                max-w-[700px]
                font-['Inter']
                text-[17px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:text-[18px]

                md:mt-10
                md:text-[18px]

                lg:text-[19px]
              "
            >
              Every organization has different processes, priorities and
              challenges. Yet many businesses still rely on software that
              doesn't fully fit the way their teams work.
              <br />
              We take a different approach.
            </p>

            {/* SECOND PARAGRAPH */}
            <p
              className="
                mt-8
                max-w-[700px]
                font-['Inter']
                text-[17px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:text-[18px]

                md:mt-9
                md:text-[18px]

                lg:text-[19px]
              "
            >
              At TechTorch, we start by understanding your business and the
              problem you want to solve. We look at your existing processes,
              systems and user needs before defining the right solution.
            </p>

            {/* THIRD PARAGRAPH */}
            <p
              className="
                mt-8
                max-w-[700px]
                font-['Inter']
                text-[17px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:text-[18px]

                md:mt-9
                md:text-[18px]

                lg:text-[19px]
              "
            >
              That could mean building a new application, connecting systems
              that currently operate separately, or modernizing an existing
              platform.
            </p>

            {/* FOURTH PARAGRAPH */}
            <p
              className="
                mt-8
                max-w-[700px]
                font-['Inter']
                text-[17px]
                font-normal
                leading-[1.55]
                text-[#292929]

                sm:text-[18px]

                md:mt-9
                md:text-[18px]

                lg:text-[19px]
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
              flex-col
              items-start

              md:items-stretch
            "
          >
            {/* IMAGE */}
            <div
  className="
    w-[92%]
    overflow-hidden
    rounded-[18px]

    sm:w-[70%]
    sm:rounded-[20px]

    md:w-[70%]
    md:rounded-[20px]

    lg:w-[80%]
    lg:rounded-[21px]
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
                mt-8
                max-w-[520px]
                font-['Plus_Jakarta_Sans']
                text-[21px]
                font-bold
                leading-[1.25]
                tracking-[-0.5px]
                text-[#850052]

                sm:text-[22px]

                md:mt-9
                md:text-[21px]

                lg:mt-10
                lg:text-[23px]

                xl:text-[24px]
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