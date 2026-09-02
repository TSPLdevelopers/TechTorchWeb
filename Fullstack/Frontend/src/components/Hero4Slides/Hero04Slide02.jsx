import React from "react";

export default function TechnologyThatWorks() {
  return (
    <section className="w-full bg-[#faf9f4]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]

          px-4
          py-8

          min-[400px]:px-5

          sm:px-6
          sm:py-9

          md:px-8
          md:py-10

          lg:px-10
          lg:py-11

          xl:px-12
          xl:py-12
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <h2
          className="
            max-w-[650px]
            font-['Plus_Jakarta_Sans']
            text-[28px]
            font-medium
            leading-[1.08]
            tracking-[-1.2px]
            text-[#111111]

            min-[400px]:text-[30px]

            sm:text-[34px]
            sm:tracking-[-1.3px]

            md:text-[38px]
            md:tracking-[-1.5px]

            lg:text-[42px]
            lg:tracking-[-1.7px]

            xl:text-[34px]
          "
        >
          <span className="text-[#8b1658]">Technology</span>{" "}
          That Works
          <br />
          for Your Business
        </h2>

        {/* =====================================================
            TWO COLUMN CONTENT
        ====================================================== */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-x-12
            gap-y-7

            min-[400px]:gap-y-8

            sm:mt-9
            sm:gap-y-8

            md:mt-10
            md:gap-y-9

            lg:grid-cols-2
            lg:gap-x-16
            lg:gap-y-10

            xl:gap-x-20
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================== */}
          <div
            className="
              w-full
              max-w-[610px]
              font-['Inter']
              text-[14px]
              font-normal
              leading-[1.5]
              text-[#333333]

              sm:text-[15px]

              md:text-[16px]

              lg:text-[15px]
              lg:leading-[1.5]
            "
          >
            <p>
              Technology is most effective when it solves a real business
              need.
            </p>

            <p className="mt-6 sm:mt-7 lg:mt-8">
              At TechTorch Solutions, we bring together technology expertise,
              engineering capabilities and business understanding to help
              organizations improve the way they operate, modernize their
              systems and respond to changing business needs.
            </p>

            <p className="mt-6 sm:mt-7 lg:mt-8">
              Our technology services cover the areas businesses rely on to
              build and maintain a modern digital environment—from IT
              consulting and AI to cloud infrastructure, cybersecurity and
              software engineering. We also provide software development and
              support, business process outsourcing, and skilled technology
              resources to help businesses strengthen both their technology
              and their teams.
            </p>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}
          <div
            className="
              w-full
              max-w-[560px]

              lg:translate-x-12
              xl:translate-x-16

              font-['Inter']
              text-[14px]
              font-normal
              leading-[1.5]
              text-[#333333]

              sm:text-[15px]

              md:text-[16px]

              lg:text-[15px]
              lg:leading-[1.5]
            "
          >
            <p>
              Whether you are looking to improve an existing system, develop a
              new solution, move to the cloud or bring additional technical
              expertise into your organization, we focus on understanding your
              requirements first and then building a solution that is
              practical, reliable and ready to grow with your business.
            </p>

            <p className="mt-10 sm:mt-11 lg:mt-12">
              Our approach is simple: understand the challenge, find the right
              technology and build a solution that delivers lasting value.
              With the right combination of people, expertise and technology,
              we help businesses move forward with greater confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}