import React from "react";

const steps = [
  {
    no: "01",
    title: "Understand",
    text: "We learn about your business, your current systems and the challenges your teams are facing.",
  },
  {
    no: "02",
    title: "Plan",
    text: "We identify the key priorities and create a clear plan based on your business goals.",
  },
  {
    no: "03",
    title: "Connect",
    text: "We bring the right processes, information and teams together.",
  },
  {
    no: "04",
    title: "Implement",
    text: "We put the solution in place through a structured and manageable implementation process.",
  },
  {
    no: "05",
    title: "Improve",
    text: "Once the system is in place, we continue to look for ways to improve it as your business changes.",
  },
];

export default function PracticalERPPath() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* =====================================================
          MAIN SECTION
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1440px]
          min-h-[620px]
          overflow-hidden
          bg-white

          sm:min-h-[650px]
          md:min-h-[680px]
          lg:min-h-[700px]
          xl:min-h-[720px]
        "
      >
        {/* =====================================================
            RIGHT SIDE IMAGE
            Image is positioned independently so it does not
            disturb the left content.
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-[205px]
            z-[1]
            h-[415px]
            w-[66%]
            overflow-hidden

            sm:top-[220px]
            sm:h-[430px]

            md:top-[225px]
            md:h-[455px]

            lg:top-[235px]
            lg:h-[475px]
            lg:w-[67%]

            xl:top-[240px]
            xl:h-[480px]
            xl:w-[68%]
          "
        >
          <img
            src="/Slide2.2.png"
            alt="TorchX ERP platform"
            className="
              absolute
              right-0
              top-0
              h-full
              w-full
              object-cover
              object-right
            "
          />

          {/* LEFT SOFT WHITE FADE */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[30%]
              bg-gradient-to-r
              from-white
              via-white/90
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div
          className="
            relative
            z-[5]
            px-6
            pt-8

            sm:px-9
            sm:pt-9

            md:px-11
            md:pt-10

            lg:px-[50px]
            lg:pt-[36px]

            xl:px-[52px]
            xl:pt-[32px]
            lg:translate-x-4
            xl:translate-x-9
          "
        >
          {/* ===================================================
              HEADING
          ==================================================== */}
          <h1
            className="
              font-['Inter']
              text-[30px]
              font-medium
              leading-[1.08]
              tracking-[-0.045em]
              text-[#111111]

              sm:text-[33px]
              md:text-[36px]
              lg:text-[39px]
              xl:text-[35px]
            "
          >
            A Practical Path to{" "}
            <span className="text-[#850052]">ERP</span>
          </h1>

          {/* ===================================================
              DESCRIPTION
          ==================================================== */}
          <p
            className="
              mt-[20px]
              max-w-[640px]
              font-['Inter']
              text-[14px]
              font-medium
              leading-[1.28]
              text-[#1e1e1e]

              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
              xl:text-[17px]
            "
          >
            Every business is different, so there is no single ERP approach
            that works for everyone. We take the time to understand your
            business before deciding what needs to change.
          </p>

          {/* ===================================================
              TORCHX LOGO
          ==================================================== */}
          <div
            className="
              absolute
              right-6
              top-[30px]
              hidden

              sm:right-9
              sm:block

              md:right-11

              lg:right-[50px]
              lg:top-[35px]

              xl:right-[52px]
            "
          >
            <div className="flex items-end leading-none">
              <span
                className="
                  font-['Arial']
                  text-[42px]
                  font-bold
                  tracking-[-0.075em]
                  text-black

                  md:text-[46px]
                  lg:text-[51px]
                "
              >
                Torch
              </span>

              <span
                className="
                  font-['Arial']
                  text-[48px]
                  font-bold
                  leading-[0.78]
                  tracking-[-0.12em]
                  text-[#850052]

                  md:text-[53px]
                  lg:text-[58px]
                "
              >
                X
              </span>

              <sup
                className="
                  ml-[3px]
                  -mt-[31px]
                  font-['Arial']
                  text-[8px]
                  font-bold
                  text-black

                  lg:text-[9px]
                "
              >
                TM
              </sup>
            </div>

            <div className="mt-[1px] flex items-center justify-center">
              <span className="mr-3 h-px w-[22px] bg-[#222]" />

              <span
                className="
                  font-['Arial']
                  text-[8px]
                  font-semibold
                  tracking-[0.48em]
                  text-black

                  lg:text-[9px]
                "
              >
                SUITE
              </span>

              <span className="ml-3 h-px w-[22px] bg-[#222]" />
            </div>
          </div>

          {/* ===================================================
              STEPS
          ==================================================== */}
          <div
            className="
              mt-[46px]
              w-[390px]
              max-w-full

              sm:mt-[48px]
              sm:w-[420px]

              md:mt-[50px]

              lg:mt-[51px]
              lg:w-[430px]

              xl:w-[440px]
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.no}
                className={`
                  flex
                  items-start
                  gap-[12px]

                  sm:gap-[13px]

                  ${
                    index !== steps.length - 1
                      ? "mb-[22px] sm:mb-[24px] lg:mb-[25px]"
                      : ""
                  }
                `}
              >
                {/* NUMBER CIRCLE */}
                <div
                  className="
                    flex
                    h-[48px]
                    w-[48px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#850052]

                    font-['Inter']
                    text-[19px]
                    font-medium
                    leading-none
                    text-white

                    sm:h-[49px]
                    sm:w-[49px]

                    lg:h-[45px]
                    lg:w-[45px]
                  "
                >
                  {step.no}
                </div>

                {/* TEXT */}
                <div className="min-w-0 pt-[3px]">
                  <h2
                    className="
                      font-['Plus_Jakarta_Sans']
                      text-[18px]
                      font-bold
                      leading-[1.08]
                      tracking-[-0.02em]
                      text-[#151515]

                      sm:text-[19px]
                      lg:text-[19px]
                    "
                  >
                    {step.title}
                  </h2>

                  <p
                    className="
                      mt-[5px]
                      max-w-[390px]
                      font-['Inter']
                      text-[13px]
                      font-normal
                      leading-[1.28]
                      text-[#242424]

                      sm:text-[14px]
                      lg:text-[14x]
                    "
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}