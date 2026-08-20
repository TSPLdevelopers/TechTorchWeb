import React from "react";

export default function BigVision() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f9f8f3]">

      {/* ================= CURVED BACKGROUND ================= */}
      <div
        className="
          pointer-events-none
          absolute
          z-0
          h-[500px]
          w-[650px]
          -right-[280px]
          -top-[60px]
          opacity-40

          sm:h-[600px]
          sm:w-[750px]
          sm:-right-[300px]

          md:h-[700px]
          md:w-[900px]
          md:-right-[320px]

          lg:h-[850px]
          lg:w-[1200px]
          lg:-right-[300px]
          lg:-top-[80px]
        "
        style={{
          backgroundImage: "url('/Section.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-55deg)",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col

          px-5
          py-10

          sm:px-8
          sm:py-12

          md:px-10
          md:py-14

          lg:min-h-[550px]
          lg:flex-row
          lg:items-center
          lg:px-[90px]
          lg:py-0
        "
      >

        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative
            z-20
            w-full

            lg:w-[53%]
          "
        >

          {/* Small Heading */}
          <p
            className="
              mb-4
              text-[14px]
              font-medium
              leading-none
              text-black

              sm:text-[16px]

              md:text-[17px]

              lg:text-[19px]
            "
          >
            THE BIG VISION
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-[28px]
              font-bold
              leading-[1.25]
              tracking-[-0.8px]
              text-black

              sm:text-[32px]
              sm:tracking-[-1px]

              md:text-[36px]

              lg:text-[40px]
            "
          >
            <span className="text-[#83004f]">Leading</span> With Vision.
            <br />
            Shaping <span className="text-[#83004f]">What’s Next.</span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[620px]
              text-[15px]
              font-normal
              leading-[1.55]
              text-[#505050]

              sm:mt-7
              sm:text-[16px]

              md:mt-8
              md:text-[17px]

              lg:mt-8
              lg:text-[19px]
              lg:leading-[1.5]
            "
          >
            The future is not simply something we prepare for — it is
            something we have the opportunity to shape. At TechTorch, our
            leadership is grounded in a clear belief: technology should create
            meaningful progress, strengthen businesses and open new
            possibilities for the future.
          </p>

          {/* ================= BOTTOM CONTENT ================= */}
          <div
            className="
              mt-7
              flex
              flex-col
              items-start
              gap-6

              sm:mt-8
              sm:flex-row
              sm:items-center
              sm:gap-8

              md:mt-9
              md:gap-12

              lg:mt-8
              lg:gap-[80px]
            "
          >

            {/* Learn More Button */}
            <button
              className="
                rounded-[4px]
                border
                border-[#8a0055]
                bg-transparent

                px-4
                py-2

                text-[15px]
                font-semibold
                leading-none
                text-[#83004f]

                transition-all
                duration-300

                hover:bg-[#83004f]
                hover:text-white

                sm:px-5
                sm:py-2.5
                sm:text-[17px]

                md:text-[18px]

                lg:px-4
                lg:py-2.5
                lg:text-[19px]
              "
            >
              Learn More
            </button>

            {/* CEO Name */}
            <div className="text-left sm:text-center">

              <h2
                className="
                  text-[19px]
                  font-medium
                  leading-none
                  text-black

                  sm:text-[21px]

                  md:text-[23px]

                  lg:text-[27px]
                "
              >
                Siddharth Pathak
              </h2>

              <p
                className="
                  mt-2
                  text-[12px]
                  font-normal
                  leading-[1.3]
                  text-[#83004f]

                  sm:text-[13px]

                  md:text-[14px]

                  lg:text-[16px]
                "
              >
                Chief Executive Officer,
                <br />
                TechTorch Solutions
              </p>

            </div>
          </div>
        </div>

        {/* ================= PERSON IMAGE ================= */}
        <div
          className="
            relative
            z-20
            mt-10
            flex
            w-full
            justify-center

            sm:mt-12

            md:mt-14

            lg:absolute
            lg:right-[50px]
            lg:bottom-0
            lg:mt-0
            lg:w-auto
            lg:justify-normal
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

              sm:w-[220px]

              md:w-[270px]

              lg:w-[350px]

              xl:w-[380px]
            "
          />
        </div>

      </div>
    </section>
  );
}