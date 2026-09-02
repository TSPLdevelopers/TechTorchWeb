import React from "react";

export default function HowWeWork() {
  return (
    <section className="relative block w-full bg-[#faf9f4] px-0">

      {/* OUTER CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          overflow-hidden
          bg-[#faf9f4]
        "
      >

        {/* CONTENT + IMAGE */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[57%_43%]
            lg:h-[600px]
            xl:grid-cols-[57%_43%]
            xl:h-[570px]
          "
        >

          {/* ================= LEFT ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              px-5
              py-10
              sm:px-7
              sm:py-12
              md:px-8
              md:py-10
              lg:px-12
              lg:py-6
              xl:px-24
              xl:py-6
            "
          >
            <p className="mb-3 text-[16px] font-medium tracking-wide text-[#333]">
              HOW WE WORK
            </p>

            <h2
              className="
                text-[28px]
                font-['Inter']
                font-semibold
                leading-[1.05]
                tracking-[-1.2px]
                text-[#111]
                sm:text-[31px]
                md:text-[32px]
                lg:text-[34px]
                xl:text-[36px]
              "
            >
              A Clear Approach to
              <br />
              <span className="text-[#8b0750]">
                Better Technology
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-[600px]
                text-[14px]
                leading-[1.55]
                text-[#333]
                sm:text-[15px]
                md:text-[14px]
                lg:text-[15px]
                xl:text-[15px]
              "
            >
              Every business has its own goals, challenges and way of
              working. We believe technology should be built around those
              needs rather than forcing businesses to adapt to a fixed
              solution. That is why we take a clear and collaborative
              approach, starting with understanding your business and
              ending with solutions that can continue to evolve with it.
              We work closely with our clients throughout the process to
              understand what matters most, define the right direction and
              deliver technology that is practical, reliable and built for
              long-term use.
            </p>

            <h3
              className="
                mt-5
                text-[18px]
                font-semibold
                text-[#222]
              "
            >
              From Understanding to Execution
            </h3>

            {/* STEPS */}
            <div className="mt-4 flex flex-col gap-3">

              {/* Understand */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b0750]
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </div>

                <span className="text-[18px] font-medium text-[#222]">
                  Understand
                </span>
              </div>

              {/* Build */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b0750]
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m8 9-3 3 3 3" />
                    <path d="m16 9 3 3-3 3" />
                    <path d="m14 5-4 14" />
                  </svg>
                </div>

                <span className="text-[18px] font-medium text-[#222]">
                  Build
                </span>
              </div>

              {/* Grow */}
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8b0750]
                  "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="m7 15 4-4 3 3 6-7" />
                    <path d="M16 7h4v4" />
                  </svg>
                </div>

                <span className="text-[18px] font-medium text-[#222]">
                  Grow
                </span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div
            className="
              relative
              flex
              h-auto
              w-full
              items-center
              justify-center
              overflow-hidden
              py-8

              sm:py-10

              md:h-full
              md:items-center
              md:justify-end
              md:py-0

              lg:h-full
              lg:items-start
              lg:justify-end
              lg:py-0

              xl:h-full
              xl:items-start
              xl:justify-end
              xl:py-0
            "
          >
            <img
              src="/Slide4.2.png"
              alt="How we work"
              className="
                block
                h-auto
                w-[82%]
                max-w-[500px]
                object-contain

                sm:w-[80%]

                md:h-full
                md:w-auto
                md:max-w-none
                md:object-contain

                lg:h-full
                lg:w-auto
                lg:max-w-none

                xl:absolute
                xl:top-0
                xl:right-0
                xl:h-full
                xl:w-[76%]
                xl:max-w-none
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}