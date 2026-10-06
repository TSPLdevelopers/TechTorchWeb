import React from "react";

export default function ConnectedBusinessSection() {
  return (
    <section
      className="
        w-full
        px-5
        py-12
        sm:px-10
        sm:py-14
        md:py-16
        lg:px-16
      "
      style={{ backgroundColor: "#7a0e4a" }}
    >
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[0.9fr_1.15fr]
          lg:gap-14
        "
      >
        {/* ================= LEFT: IMAGE ================= */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-md
            lg:mx-0
          "
        >
          {/* Decorative offset panel behind image */}

          <div
            className="
              absolute
              -bottom-3
              -left-3
              h-full
              w-full
              rounded-2xl
              bg-white/10
            "
          />

          {/* Image */}

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/15
              shadow-xl
            "
          >
            <img
              src="/platformhero2.png"
              alt="TechTorch headquarters building at dusk"
              className="
                block
                h-auto
                w-full
                aspect-[5/4]
                object-cover
                object-center
              "
            />
          </div>
        </div>

        {/* ================= RIGHT: CONTENT ================= */}

        <div>
          {/* Small Label */}

          <div className="mb-3 flex items-center gap-3">
            <span className="text-[13px] font-medium text-white/70">
              Our Approach
            </span>

            <span className="h-px w-10 bg-white/30" />
          </div>

          {/* Heading */}

          <h2
            className="
              mb-5
              text-[25px]
              font-bold
              leading-tight
              text-white
              sm:text-[30px]
              md:text-[34px]
            "
          >
            One Platform. Connected Business.
          </h2>

          {/* Paragraphs */}

          <div className="flex max-w-xl flex-col gap-3.5">
            <p
              className="
                text-[14px]
                leading-relaxed
                text-white/80
                sm:text-[15px]
              "
            >
              Running a business means managing people, customers, finances,
              operations and information—often across different systems.
            </p>

            <p
              className="
                text-[14px]
                leading-relaxed
                text-white/80
                sm:text-[15px]
              "
            >
              TechTorch brings these essential functions closer together
              through connected digital platforms designed around the way
              businesses actually work.
            </p>

            <p
              className="
                text-[14px]
                leading-relaxed
                text-white/80
                sm:text-[15px]
              "
            >
              Our platforms help organizations reduce complexity, improve
              collaboration and gain better visibility across their
              operations. Whether you are managing a growing business or a
              specialized institution, our solutions are built to make
              everyday work simpler and more connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}