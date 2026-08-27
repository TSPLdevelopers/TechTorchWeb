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
          min-h-[435px]
          overflow-hidden
          bg-white

          xs:min-h-[555px]
          sm:min-h-[575px]
          md:min-h-[595px]
          lg:min-h-[615px]
          xl:min-h-[600px]
        "
      >
        {/* =====================================================
            RIGHT SIDE IMAGE
            (sm/md/lg/xl values below are UNCHANGED from the
            provided file — only base and xs were added)
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-[130px]
            z-[1]
            h-[300px]
            w-[68%]
            overflow-hidden

            xs:top-[175px]
            xs:h-[380px]
            xs:w-[72%]

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
              top-[-30px]
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
            (sm/md/lg/xl values below are UNCHANGED from the
            provided file — only base and xs were added)
        ====================================================== */}
        <div
          className="
            relative
            z-[5]
            px-4
            pt-5

            xs:px-6
            xs:pt-7

            sm:px-9
            sm:pt-8

            md:px-11
            md:pt-9

            lg:px-[50px]
            lg:pt-[30px]

            xl:px-[52px]
            xl:pt-[28px]

            translate-x-1
            xs:translate-x-2
            sm:translate-x-4
            md:translate-x-6
            lg:translate-x-8
            xl:translate-x-12
          "
        >
          {/* ===================================================
              HEADING
          ==================================================== */}
          <h1
            className="
              font-['Inter']
              text-[22px]
              font-medium
              leading-[1.12]
              tracking-[-0.03em]
              text-[#111111]

              xs:text-[30px]
              xs:leading-[1.08]
              xs:tracking-[-0.045em]

              sm:text-[33px]
              md:text-[36px]
              lg:text-[39px]
              xl:text-[33px]
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
              mt-[12px]
              max-w-[640px]
              font-['Inter']
              text-[12px]
              font-medium
              leading-[1.32]
              text-[#1e1e1e]

              xs:mt-[17px]
              xs:text-[14px]
              xs:leading-[1.28]

              sm:text-[15px]
              md:text-[15px]
              lg:text-[16px]
              xl:text-[15.5px]
            "
          >
            Every business is different, so there is no single ERP approach
            that works for everyone. We take the time to understand your
            business before deciding what needs to change.
          </p>

          {/* ===================================================
              TORCHX SUITE IMAGE
              (unchanged — already hidden below sm)
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
              (sm/md/lg/xl values below are UNCHANGED from the
              provided file — only base and xs were added)
          ==================================================== */}
          <div
            className="
              mt-[20px]
              w-full
              max-w-full

              xs:mt-[40px]
              xs:w-[390px]

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
                  gap-[8px]

                  xs:gap-[12px]
                  sm:gap-[13px]

                  ${
                    index !== steps.length - 1
                      ? "mb-[10px] xs:mb-[18px] sm:mb-[20px] lg:mb-[21px]"
                      : ""
                  }
                `}
              >
                {/* NUMBER CIRCLE */}
                <div
                  className="
                    flex
                    h-[34px]
                    w-[34px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#850052]

                    font-['Inter']
                    text-[13px]
                    font-medium
                    leading-none
                    text-white

                    xs:h-[45px]
                    xs:w-[45px]
                    xs:text-[18px]

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
                      text-[14px]
                      font-bold
                      leading-[1.1]
                      tracking-[-0.02em]
                      text-[#151515]

                      xs:text-[18px]
                      xs:leading-[1.08]

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
                      text-[11px]
                      font-normal
                      leading-[1.3]
                      text-[#242424]

                      xs:text-[13px]
                      xs:leading-[1.28]

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