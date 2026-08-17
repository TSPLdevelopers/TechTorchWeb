import React from "react";
import { Link } from "react-router-dom";

function WavyBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
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
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 items-start">

      {/* ================= LEFT CONTENT ================= */}
      
<div className="relative bg-[#F6F2EA] flex items-center overflow-hidden h-[450px] lg:h-[540px]">

        <WavyBackground />

        <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-8 lg:py-0 max-w-xl -translate-y-10">

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-gray-900 leading-tight">
            Build. Connect. Grow.
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-semibold text-[#8a1538] mt-1">
            With TechTorch Solutions
          </h3>

          <p className="text-gray-600 text-[16px] sm:text-[17px] leading-relaxed mt-3 max-w-md mt-10">
            We bring technology, expertise and people together to solve real
            business challenges, create practical digital solutions and help
            businesses work smarter, adapt faster, and move forward with
            confidence.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-18">

            <Link
              to="/about"
              className="px-6 py-3 rounded-md bg-[#8a1538] text-white text-[13px] font-semibold tracking-wide no-underline hover:bg-[#CD166E] transition-colors duration-200"
            >
              KNOW MORE
            </Link>

            <Link
              to="/about"
              className="px-6 py-3 rounded-md border border-[#8a1538] text-[#8a1538] text-[13px] font-semibold tracking-wide no-underline hover:bg-[#8a1538] hover:text-white transition-colors duration-200"
            >
              OUR STORY
            </Link>

          </div>
        </div>
      </div>

    
      {/* ================= RIGHT IMAGE (fixed height) ================= */}
<div className="h-[380px] lg:h-[540px] overflow-hidden">
  <img
    src="/Frame1.png"
    alt="TechTorch Solutions office building"
    className="w-full h-full object-cover"
  />
</div>

    </section>
  );
}