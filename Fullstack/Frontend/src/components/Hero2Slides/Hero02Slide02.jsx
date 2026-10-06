import React from "react";

export default function ERPApproach() {
  return (
    <section
      className="
        w-full
        min-h-[480px]
        overflow-hidden
        bg-[#F8F7F0]
        text-[#191919]

        sm:min-h-[460px]
        md:min-h-[500px]
        lg:min-h-[520px]
      "
      style={{ backgroundColor: "#F8F7F0" }}
    >
      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          w-full
          px-4
          py-6

          sm:px-6
          sm:py-5

          md:px-10
          md:py-6

          lg:px-[100px]
          lg:py-8
        "
      >
        {/* ================= TOP LABEL ================= */}

        <p
          className="
            font-['Plus_Jakarta_Sans']
            font-bold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#151515]

            text-[13px]
            sm:text-[15px]
            md:text-[16px]
            lg:text-[16px]
          "
        >
          OUR ERP APPROACH
        </p>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-6

            sm:mt-6
            sm:gap-7

            md:mt-6
            md:grid-cols-2
            md:gap-7

            lg:mt-7
            lg:gap-8

            xl:gap-10
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              order-1
              min-w-0
              md:order-1
            "
          >
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[26px]
                font-semibold
                leading-[1.1]
                tracking-[-0.03em]

                xs:text-[24px]
                sm:text-[26px]
                md:text-[30px]
                lg:text-[30px]
                xl:text-[32px]
              "
            >
              A Business That
              <br />
              <span className="text-[#730042]">
                Works as One
              </span>
            </h1>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[15px]
              "
            >
              As businesses grow, their operations become more connected —
              finance, inventory, HRMS, Engage, Pay and everyday processes all
              depend on each other. When these functions work across separate
              systems, teams can spend more time managing information than
              using it.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[15px]
              "
            >
              An ERP brings these essential business functions together in one
              connected environment. It gives teams better visibility, helps
              information move more efficiently across the organisation and
              creates a more consistent way of working.
            </p>

            <p
              className="
                mt-4
                max-w-[550px]
                font-['Inter']
                text-[13px]
                font-normal
                leading-[1.55]
                text-[#303030]

                sm:mt-5
                sm:text-[13px]

                md:mt-5
                md:text-[15px]

                lg:text-[15px]
              "
            >
              At TechTorch, we take a practical approach to ERP. We first
              understand how your business operates, where processes can be
              improved and what your teams need to work more effectively. From
              there, we help shape a solution around your business priorities.
            </p>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              relative
              order-2
              flex
              w-full
              min-w-0
              flex-col
              items-center

              md:order-2
              md:items-center
              md:translate-x-2

              lg:translate-x-14
              lg:-translate-y-5

              xl:translate-x-32
              xl:-translate-y-6
            "
          >
            {/* ================= ERP DIAGRAM IMAGE ================= */}

            <div
              className="
                relative
                mx-auto
                flex
                w-full
                items-center
                justify-center
                overflow-hidden

                max-w-[280px]

                xs:max-w-[300px]

                sm:max-w-[350px]

                md:max-w-[450px]

                lg:max-w-[425px]

                xl:max-w-[445px]
              "
            >
              <img
                src="/Hero02Slide02.png"
                alt="ERP Approach"
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                "
              />
            </div>

            {/* ================= GOAL CARD ================= */}

            <div
              className="
                mt-4
                w-full
                max-w-[320px]
                rounded-[8px]
                bg-[#FCECF6]
                px-3
                py-2.5

                sm:mt-4
                sm:max-w-[300px]
                sm:px-4
                sm:py-3

                md:-mt-4
                md:max-w-[390px]
                md:px-5
                md:py-4

                lg:-mt-1
                lg:max-w-[400px]
                lg:translate-x-6

                xl:translate-x-0
              "
            >
              <p
                className="
                  font-['Inter']
                  text-[11px]
                  font-semibold
                  leading-[1.4]
                  text-[#151515]

                  sm:text-[13px]
                  md:text-[15px]
                  lg:text-[15px]
                "
              >
                The goal is simple:
                <span className="font-normal">
                  {" "}
                  connect the business, simplify the way people work and
                  create a stronger foundation for growth.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}