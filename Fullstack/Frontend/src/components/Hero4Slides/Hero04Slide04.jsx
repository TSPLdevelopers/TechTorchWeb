import React from "react";

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#faf9f4] px-4 sm:px-6 lg:px-8">

      {/* OUTER CONTAINER */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
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
            lg:grid-cols-2
            lg:h-[600px]
            xl:h-[570px]
          "
        >

          {/* ================= LEFT ================= */}
          <div
            className="
              flex
              flex-col
              justify-center
              px-6
              py-6
              sm:px-8
              md:px-10
              lg:px-12
              xl:px-14
            "
          >
            <p className="mb-3 text-[16px] font-medium tracking-wide text-[#333]">
              HOW WE WORK
            </p>

            <h2
              className="
                text-[30px]
                font-['Inter']
                font-semibold
                leading-[1.05]
                tracking-[-1.2px]
                text-[#111]
                sm:text-[34px]
                md:text-[37px]
                lg:text-[36px]
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
                text-[15px]
                leading-[1.55]
                text-[#333]
                lg:text-[15px]
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
              h-[400px]
              w-full
              overflow-hidden
              lg:h-full
            "
          >
            <img
              src="/Slide4.2.png"
              alt="How we work"
              className="
                absolute
                top-0
                right-0
                h-full
                w-auto
                max-w-none
                
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}