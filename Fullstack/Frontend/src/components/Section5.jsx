import React from "react";

export default function BigVision() {
  return (
    <section className="relative w-full min-h-[550px] overflow-hidden bg-[#f9f8f3]">

      {/* ================= CURVED LINES ================= */}
      <div
        className="absolute z-0 pointer-events-none hidden sm:block opacity-30"
        style={{
          width: "1650px",
          height: "850px",
          right: "-500px",
          top: "-80px",
          backgroundImage: "url('/Section.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-55deg)",
        }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[550px]
          w-full
          max-w-[1440px]
          flex-col
          px-[20px]

          sm:px-[30px]

          md:px-[40px]

          lg:flex-row
          lg:items-center
          lg:px-[100px]
        "
      >

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative
            z-20
            w-full
            pt-[30px]

            sm:pt-[35px]

            md:w-[60%]
            md:pt-[40px]
            md:-translate-x-5

            lg:w-[45%]
            lg:pt-[10px]
            lg:-translate-x-8
          "
        >

          <p
            className="
              mb-[15px]
              text-[16px]
              font-medium
              leading-none
              text-black

              sm:text-[17px]

              md:text-[18px]

              lg:text-[18px]
            "
          >
            THE BIG VISION
          </p>

          <h1
            className="
              translate-y-[10px]
              font-plus-jakarta
              text-[29px]
              font-bold
              leading-[1.32]
              tracking-[-1px]
              text-black

              sm:text-[32px]

              md:text-[35px]

              lg:text-[36px]
            "
          >
            <span className="text-[#83004f]">Leading</span> With Vision.
            <br />
            Shaping <span className="text-[#83004f]">What’s Next.</span>
          </h1>

          <p
            className="
              mt-[25px]
              max-w-[600px]
              text-[16px]
              font-normal
              leading-[1.4]
              text-[#1e1e1e]

              sm:mt-[27px]
              sm:text-[17px]

              md:mt-[30px]
              md:text-[18px]

              lg:mt-[34px]
              lg:text-[18px]
            "
          >
            The future is not simply something we prepare for
            <br className="hidden sm:block" />
            — it is something we have the opportunity to shape.
            <br className="hidden sm:block" />
            At TechTorch, our leadership is grounded in a clear
            <br className="hidden sm:block" />
            belief: technology should create meaningful progress,
            <br className="hidden sm:block" />
            strengthen businesses and open new possibilities
            <br className="hidden sm:block" />
            for the future.
          </p>

          {/* ================= BUTTON ================= */}
          <div
            className="
              mt-[30px]
              flex
              flex-wrap
              items-center

              sm:mt-[32px]

              md:mt-[35px]

              lg:mt-[50px]
            "
          >
            <button
              className="
                rounded-[4px]
                border
                border-[#8a0055]
                bg-transparent
                px-[9px]
                py-[7px]
                font-plus-jakarta
                text-[17px]
                font-semibold
                leading-none
                text-[#83004f]
                transition-all
                duration-300
                hover:bg-[#83004f]
                hover:text-white

                sm:px-[10px]
                sm:py-[8px]
                sm:text-[19px]

                lg:px-[11px]
                lg:py-[9px]
                lg:text-[18px]
              "
            >
              Explore Our Leadership →
            </button>
          </div>
        </div>

        {/* ================= LEADERSHIP IMAGES ================= */}
        <div
          className="
            relative
            z-20
            mt-[45px]
            flex
            w-full
            items-end
            justify-center
            gap-[35px]

            md:absolute
            md:right-[20px]
            md:bottom-0
            md:mt-0
            md:w-[55%]
            md:justify-normal

            lg:right-[10px]
            lg:w-[55%]
            lg:gap-[45px]
          "
        >

          {/* ================= SIDDHARTH ================= */}
          <div
            className="
              flex
              w-[45%]
              -translate-y-[50px]
              translate-x-[20px]
              flex-col
              items-center
              justify-end
              text-center
            "
          >
            <img
              src="/img.png"
              alt="Siddharth Pathak"
              className="
                block
                h-auto
                w-[180px]
                object-contain

                sm:w-[210px]

                md:w-[240px]

                lg:w-[250px]
              "
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 98%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 98%, transparent 100%)",
              }}
            />

            <div className="mt-[18px]">
              <h2
                className="
                  whitespace-nowrap
                  font-plus-jakarta
                  text-[19px]
                  font-medium
                  leading-none
                  text-black

                  sm:text-[20px]

                  md:text-[22px]

                  lg:text-[23px]
                "
              >
                Siddharth Pathak
              </h2>

              <p
                className="
                  mt-[8px]
                  whitespace-nowrap
                  font-inter
                  text-[12px]
                  font-normal
                  leading-[1.2]
                  text-[#83004f]

                  sm:text-[13px]

                  md:text-[14px]

                  lg:text-[16px]
                "
              >
                Chief Executive Officer
              </p>
            </div>
          </div>

          {/* ================= AMIT SIR ================= */}
          <div
            className="
              flex
              w-[45%]
              -translate-y-[30px]
              flex-col
              items-center
              justify-end
              text-center
            "
          >
            <img
              src="/Amit sir.png"
              alt="Amit Gaur"
              className="
                block
                h-auto
                w-[180px]
                object-contain

                sm:w-[210px]

                md:w-[240px]

                lg:w-[255px]
              "
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 98%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 98%, transparent 100%)",
              }}
            />

            <div className="mt-[18px]">
              <h2
                className="
                  whitespace-nowrap
                  font-plus-jakarta
                  text-[19px]
                  font-medium
                  leading-none
                  text-black

                  sm:text-[20px]

                  md:text-[22px]

                  lg:text-[23px]
                "
              >
                Amit Gaur
              </h2>

              <p
                className="
                  mt-[8px]
                  whitespace-nowrap
                  font-inter
                  text-[12px]
                  font-normal
                  leading-[1.2]
                  text-[#83004f]

                  sm:text-[13px]

                  md:text-[14px]

                  lg:text-[16px]
                "
              >
                Chief Operating Officer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}