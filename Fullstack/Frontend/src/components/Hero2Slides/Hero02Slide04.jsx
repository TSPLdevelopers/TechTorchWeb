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
          max-w-[1520px]
          min-h-[555px]
          overflow-hidden
          bg-white

          sm:min-h-[575px]
          md:min-h-[595px]
          lg:min-h-[615px]
          xl:min-h-[630px]
        "
      >
        {/* =====================================================
            RIGHT SIDE IMAGE
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-[175px]
            z-[1]
            h-[380px]
            w-[72%]
            overflow-hidden

            sm:top-[180px]
            sm:h-[395px]
            sm:w-[72%]

            md:top-[185px]
            md:h-[415px]
            md:w-[73%]

            lg:top-[190px]
            lg:h-[435px]
            lg:w-[74%]

            xl:top-[195px]
            xl:h-[450px]
            xl:w-[75%]
          "
        >
          <img
            src="/Slide2.2.png"
            alt="TorchX ERP platform"
            className="
              absolute
              right-0
              top-[-10px]
              h-[calc(100%+10px)]
              w-full
              object-fill
            "
          />

          {/* LEFT SOFT WHITE FADE */}
          <div
            className="
              absolute
              inset-y-0
              left-0
              w-[27%]
              bg-gradient-to-r
              from-white
              via-white/85
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
            pt-7

            sm:px-9
            sm:pt-8

            md:px-11
            md:pt-9

            lg:px-[50px]
            lg:pt-[30px]

            xl:px-[52px]
            xl:pt-[28px]

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
              mt-[17px]
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
              TORCHX SUITE IMAGE
          ==================================================== */}
          <div
            className="
              absolute
              right-6
              top-[25px]
              hidden
              w-[180px]
              sm:right-9
              sm:block

              md:right-11
              md:w-[200px]

              lg:right-[50px]
              lg:top-[30px]
              lg:w-[230px]

              xl:right-[52px]
              xl:w-[250px]
            "
          >
           <img
  src="/TorchX Suite.png"
  alt="TorchX Suite"
  className="
    block
    h-auto
    w-[85%]
    max-w-full
    object-contain
    mt-6
    mx-auto
  "
/>
          </div>

          {/* ===================================================
              STEPS
          ==================================================== */}
          <div
            className="
              mt-[40px]
              w-[390px]
              max-w-full

              sm:mt-[42px]
              sm:w-[420px]

              md:mt-[44px]

              lg:mt-[45px]
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
                      ? "mb-[18px] sm:mb-[20px] lg:mb-[21px]"
                      : ""
                  }
                `}
              >
                {/* NUMBER CIRCLE */}
                <div
                  className="
                    flex
                    h-[45px]
                    w-[45px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#850052]

                    font-['Inter']
                    text-[18px]
                    font-medium
                    leading-none
                    text-white

                    sm:h-[46px]
                    sm:w-[46px]

                    lg:h-[44px]
                    lg:w-[44px]
                  "
                >
                  {step.no}
                </div>

                {/* TEXT */}
                <div className="min-w-0 pt-[2px]">
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
                      mt-[4px]
                      max-w-[390px]
                      font-['Inter']
                      text-[13px]
                      font-normal
                      leading-[1.28]
                      text-[#242424]

                      sm:text-[14px]
                      lg:text-[14px]
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