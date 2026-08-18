import React from "react";
import { Link } from "react-router-dom";

function WavyBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 140 39"
    >
      <defs>
        <pattern
          id="wavy-lines"
          width="140"
          height="39"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 13 Q 35 0, 70 13 T 140 13"
            fill="none"
            stroke="#DCD5C8"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#wavy-lines)"
      />
    </svg>
  );
}

export default function BuildConnectGrow() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2">

      {/* ================= LEFT CONTENT ================= */}
      <div
        className="
          relative
          bg-[#F6F2EA]
          flex
          items-center
          overflow-hidden
          min-h-[520px]
          sm:min-h-[500px]
          md:min-h-[500px]
          lg:min-h-[540px]
        "
      >
        {/* Background Waves */}
        <WavyBackground />

        {/* Content */}
        <div
          className="
            relative
            z-10
            w-full
            px-6
            sm:px-10
            md:px-12
            lg:px-16
            py-12
            sm:py-14
            md:py-16
            lg:py-0
            max-w-2xl
          "
        >
          {/* Heading */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-4xl
              lg:text-[40px]
              font-semibold
              text-gray-900
              leading-tight
            "
          >
            Build. Connect. Grow.
          </h2>

          {/* Sub Heading */}
          <h3
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-[30px]
              font-semibold
              text-[#8a1538]
              mt-2
            "
          >
            With TechTorch Solutions
          </h3>

          {/* Description */}
          <p
            className="
              text-gray-600
              text-sm
              sm:text-base
              md:text-[17px]
              leading-relaxed
              mt-6
              sm:mt-7
              md:mt-8
              max-w-xl
            "
          >
            We bring technology, expertise and people together to solve real
            business challenges, create practical digital solutions and help
            businesses work smarter, adapt faster, and move forward with
            confidence.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
              xs:flex-row
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3
              sm:gap-4
              mt-8
              sm:mt-10
              md:mt-12
            "
          >
            {/* Know More */}
            <Link
              to="/about"
              className="
                px-6
                py-3
                sm:px-7
                sm:py-3
                rounded-md
                bg-[#8a1538]
                text-white
                text-[12px]
                sm:text-[13px]
                font-semibold
                tracking-wide
                no-underline
                text-center
                hover:bg-[#CD166E]
                transition-colors
                duration-200
              "
            >
              KNOW MORE
            </Link>

            {/* Our Story */}
            <Link
              to="/about"
              className="
                px-6
                py-3
                sm:px-7
                sm:py-3
                rounded-md
                border
                border-[#8a1538]
                text-[#8a1538]
                text-[12px]
                sm:text-[13px]
                font-semibold
                tracking-wide
                no-underline
                text-center
                hover:bg-[#8a1538]
                hover:text-white
                transition-colors
                duration-200
              "
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div
        className="
          w-full
          h-[280px]
          sm:h-[350px]
          md:h-[400px]
          lg:h-[540px]
          overflow-hidden
        "
      >
        <img
          src="/Frame1.png"
          alt="TechTorch Solutions office building"
          className="
            w-full
            h-full
            object-cover
            object-center
          "
        />
      </div>
    </section>
  );
}