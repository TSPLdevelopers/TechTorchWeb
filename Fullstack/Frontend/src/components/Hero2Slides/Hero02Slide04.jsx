import React from "react";

export default function PracticalERPPath() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your business, your current systems and the challenges your teams are facing.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We identify the key priorities and create a clear plan based on your business goals.",
    },
    {
      number: "03",
      title: "Connect",
      description:
        "We bring the right processes, information and teams together.",
    },
    {
      number: "04",
      title: "Implement",
      description:
        "We put the solution in place through a structured and manageable implementation process.",
    },
    {
      number: "05",
      title: "Improve",
      description:
        "Once the system is in place, we continue to look for ways to improve it as your business changes.",
    },
  ];

  return (
    <section
      id="vxbl7s"
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        className="
          relative mx-auto
          w-full
          max-w-[1520px]
          overflow-hidden
          bg-white

          min-h-[520px]

          xs:min-h-[545px]

          sm:min-h-[565px]

          md:min-h-[585px]

          lg:min-h-[615px]
          xl:min-h-[600px]
        "
      >
        {/* =====================================================
            IMAGE
        ====================================================== */}

        <div
          className="
            absolute
            right-0
            bottom-0
            z-0

            w-[115%]

            xs:w-[110%]

            sm:w-[100%]

            md:w-[92%]

            lg:right-0
            lg:top-[160px]
            lg:bottom-auto
            lg:h-[435px]
            lg:w-[74%]

            xl:top-[165px]
            xl:h-[475px]
            xl:w-[75%]
          "
        >
          <img
            id="8f14dd"
            src="/Slide2.2.png"
            alt="TorchX ERP platform"
            className="
              block
              h-auto
              w-full
              object-contain
              object-right

              lg:absolute
              lg:right-0
              lg:top-[-30px]
              lg:h-[calc(100%+10px)]
              lg:w-full
              lg:object-fill
            "
          />

          {/* LEFT FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-10
              w-[30%]

              bg-gradient-to-r
              from-white
              via-white/85
              to-transparent

              xs:w-[29%]
              sm:w-[27%]
              md:w-[25%]

              lg:w-[27%]
            "
          />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            w-full

            px-5
            pt-7

            xs:px-6
            xs:pt-8

            sm:px-8
            sm:pt-9

            md:px-10
            md:pt-9

            lg:px-[50px]
            lg:pt-[30px]
            lg:translate-x-8

            xl:px-[52px]
            xl:pt-[28px]
            xl:translate-x-12
          "
        >
          {/* =====================================================
              TORCHX SUITE
          ====================================================== */}

          <div
            id="9k9mjj"
            className="
              absolute
              right-5
              top-6
              z-40
              w-[95px]

              xs:right-6
              xs:top-7
              xs:w-[105px]

              sm:right-8
              sm:top-8
              sm:w-[125px]

              md:right-10
              md:top-9
              md:w-[150px]

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
                w-full
                object-contain

                lg:mx-auto
                lg:mt-6
                lg:w-[75%]
              "
            />
          </div>

          {/* =====================================================
              HEADING
          ====================================================== */}

          <h1
            id="41gxzm"
            className="
              pr-[115px]

              font-['Inter']
              text-[24px]
              font-medium
              leading-[1.1]
              tracking-[-0.035em]
              text-[#111111]

              xs:pr-[125px]
              xs:text-[28px]
              xs:leading-[1.08]

              sm:pr-[145px]
              sm:text-[31px]

              md:pr-[170px]
              md:text-[35px]

              lg:pr-0
              lg:text-[39px]
              lg:leading-[1.12]
              lg:tracking-[-0.03em]

              xl:text-[33px]
            "
          >
            A Practical Path to{" "}
            <span className="text-[#850052]">ERP</span>
          </h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            id="lql9x7"
            className="
              mt-[13px]
              max-w-[100%]
              pr-[105px]

              font-['Inter']
              text-[12px]
              font-medium
              leading-[1.35]
              text-[#1e1e1e]

              xs:mt-[15px]
              xs:pr-[115px]
              xs:text-[13px]
              xs:leading-[1.32]

              sm:mt-[16px]
              sm:max-w-[600px]
              sm:pr-[125px]
              sm:text-[14px]

              md:mt-[17px]
              md:max-w-[620px]
              md:pr-[145px]
              md:text-[15px]

              lg:mt-[12px]
              lg:max-w-[700px]
              lg:pr-0
              lg:text-[16px]
              lg:leading-[1.32]

              xl:text-[15.5px]
            "
          >
            Every business is different, so there is no single ERP approach
            that works for everyone. We take the time to understand your
            business before deciding what needs to change.
          </p>

          {/* =====================================================
              STEPS
          ====================================================== */}

          <div
            id="g9w64w"
            className="
              mt-[28px]
              w-[72%]
              max-w-[390px]

              xs:mt-[30px]
              xs:w-[70%]

              sm:mt-[32px]
              sm:w-[64%]
              sm:max-w-[420px]

              md:mt-[34px]
              md:w-[61%]
              md:max-w-[430px]

              lg:mt-[45px]
              lg:w-[430px]

              xl:w-[440px]
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  flex
                  items-start
                  gap-[8px]

                  xs:gap-[10px]

                  sm:gap-[12px]

                  ${
                    index !== steps.length - 1
                      ? "mb-[12px] xs:mb-[16px] sm:mb-[18px] lg:mb-[21px]"
                      : ""
                  }
                `}
              >
                {/* NUMBER */}

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
                    text-white

                    xs:h-[40px]
                    xs:w-[40px]
                    xs:text-[15px]

                    sm:h-[43px]
                    sm:w-[43px]
                    sm:text-[16px]

                    md:h-[44px]
                    md:w-[44px]
                    md:text-[17px]

                    lg:h-[44px]
                    lg:w-[44px]
                    lg:text-[18px]
                  "
                >
                  {step.number}
                </div>

                {/* TEXT */}

                <div className="min-w-0 flex-1 pt-[1px]">
                  <h3
                    className="
                      font-['Plus_Jakarta_Sans']
                      text-[15px]
                      font-semibold
                      leading-[1.2]
                      text-[#111111]

                      xs:text-[17px]

                      sm:text-[18px]

                      md:text-[19px]

                      lg:text-[19px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-[3px]
                      max-w-[370px]

                      font-['Inter']
                      text-[11px]
                      font-medium
                      leading-[1.3]
                      text-[#333333]

                      xs:text-[12px]

                      sm:text-[13px]

                      md:text-[14px]

                      lg:text-[14px]
                    "
                  >
                    {step.description}
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