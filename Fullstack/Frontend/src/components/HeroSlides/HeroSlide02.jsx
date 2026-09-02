import React from "react";

export default function WithPurpose() {
  return (
    <section className="w-full overflow-hidden bg-[#F8F7F0] text-[#191919]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1340px]
          px-4
          py-9
          sm:px-6
          sm:py-10
          md:px-8
          md:py-11
          lg:px-10
          lg:py-11
          xl:px-12
        "
      >

        {/* ================= TOP LABEL ================= */}
        <p
          className="
            font-['Plus_Jakarta_Sans']
            !text-[14px]
            font-bold
            uppercase
            leading-none
            tracking-[0.01em]
            text-[#252525]
            sm:text-[12px]
          "
        >
          OUR PERSPECTIVE
        </p>


        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            mt-6
            grid
            w-full
            grid-cols-1
            gap-y-10

            sm:gap-y-12

            md:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)]
            md:gap-x-8
            md:gap-y-0

            lg:grid-cols-[minmax(0,1fr)_235px_minmax(0,1fr)]
            lg:gap-x-10

            xl:grid-cols-[minmax(0,1fr)_245px_minmax(0,1fr)]
            xl:gap-x-12
          "
        >

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}
          <div className="min-w-0 max-w-full">

            {/* HEADING */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[25px]
                font-semibold
                leading-[1.08]
                tracking-[-0.035em]

                sm:text-[27px]
                md:text-[28px]
                lg:text-[29px]
              "
            >
              Building Technology
              <br />
              With Purpose
            </h1>


            {/* LEFT TEXT */}
            <div
              className="
                mt-7
                max-w-full
                break-words
                font-['Inter']
                text-[14px]
                font-normal
                leading-[1.38]
                text-[#303030]

                sm:text-[15px]
                md:text-[15px]
                lg:text-[16px]
                lg:leading-[1.36]
              "
            >

              <p>
                Technology is now a fundamental part of how businesses
                operate, serve customers and respond to change. But
                successful transformation is not simply about adopting
                the latest tools or technologies. It is about understanding
                what the business needs and finding the right way to address it.
              </p>

              <p className="mt-6">
                At TechTorch, we take a practical approach to technology.
                We begin by understanding the challenge, the existing
                environment and the outcome the business wants to achieve.
                From there, we bring together the right capabilities,
                expertise and technology to create solutions that work in the
                real world.
              </p>

              <p className="mt-6">
                Sometimes, that means building a new digital experience.
                Sometimes, it means modernizing an existing system,
                automating a repetitive process or introducing AI where it can
                create genuine value. In other situations, businesses need
                additional technology expertise to move an important project
                forward. The right solution depends on the problem, not the
                technology trend.
              </p>

            </div>
          </div>


          {/* =====================================================
              CENTER QUOTE CARD
          ===================================================== */}
          <div
            className="
              flex
              w-full
              min-w-0
              items-start
              justify-center
              mt-10

              md:mt-[92px]
              lg:mt-[96px]
            "
          >

            <div
              className="
                w-full
                max-w-[215px]
                rounded-[7px]
                border
                border-[#C9C9C9]
                bg-[#FBFAF4]
                px-5
                py-7

                sm:px-6
                sm:py-6

                md:px-5
                md:py-5
              "
            >

              {/* QUOTE ICON */}
              <div
                className="
                  relative
                  top-5
                  font-serif
                  text-[40px]
                  font-bold
                  leading-[0.55]
                  text-[#850052]
                "
              >
                “
              </div>


              {/* QUOTE TEXT */}
              <p
                className="
                  mt-5
                  font-['Inter']
                  text-[21px]
                  font-medium
                  leading-[1.65]
                  tracking-[-0.025em]
                  text-[#111111]

                  sm:text-[22px]
                "
              >
                Transformation
                <br />
                should be
                <br />
                purposeful, not
                <br />
                complicated.
              </p>


              {/* PURPLE LINE */}
              <div
                className="
                  relative
                  -top-2
                  mt-5
                  h-[3px]
                  w-[58px]
                  bg-[#850052]
                "
              />

            </div>
          </div>


          {/* =====================================================
              RIGHT COLUMN
          ===================================================== */}
          <div
            className="
              min-w-0
              max-w-full
              break-words
              font-['Inter']
              text-[14px]
              leading-[1.38]
              text-[#303030]

              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
              lg:leading-[1.36]
                  md:mt-2
    lg:mt-2
            "
          >

            <p>
              Our capabilities across digital solutions, AI and automation,
              technology services, IT augmentation, B.P.O services and
              platforms allow us to address different business needs while
              keeping the focus on one thing — creating measurable and
              sustainable value.
            </p>

            <p className="mt-6">
              We also recognise that meaningful change happens over time.
              A successful technology journey may begin with a single process,
              application or business challenge and grow from there. By taking
              a focused approach, businesses can make improvements that are
              easier to adopt, easier to measure and easier to scale.
            </p>

            <p className="mt-6">
              For us, good technology is not defined by how complex it is.
              It is defined by how effectively it solves a problem, supports
              people and helps a business move forward.
            </p>

            <p className="mt-6">
              That is the role we aim to play — helping businesses turn
              technology into practical progress.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}