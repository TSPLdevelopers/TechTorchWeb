import React from "react";
import { Link } from "react-router-dom";

export default function BuildConnectGrow() {
  return (
    <section
      className="w-full h-full grid grid-cols-1 lg:grid-cols-2 items-start relative"
      style={{
        backgroundImage: "url('/Section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= LEFT CONTENT ================= */}
      <div className="relative bg-[#F6F2EA]/80 flex items-center overflow-hidden h-[400px] lg:h-[540px]">
        <div className="relative z-10 px-8 sm:px-12 lg:px-16 max-w-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-gray-900 leading-tight">
            Build. Connect. Grow.
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-[#8a1538] mt-1">
            With TechTorch Solutions
          </h3>

          <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mt-10 max-w-md">
            We bring technology, expertise and people together to solve real
            business challenges, create practical digital solutions and help
            businesses work smarter, adapt faster, and move forward with
            confidence.
          </p>

          <div className="flex items-center gap-4 mt-14">
            <Link
              to="/about"
              className="px-6 py-2.5 rounded-md bg-[#8a1538] text-white text-[13px] font-semibold tracking-wide no-underline hover:bg-[#CD166E] transition-colors duration-200"
            >
              KNOW MORE
            </Link>

            <Link
              to="/about"
              className="px-6 py-2.5 rounded-md border border-[#8a1538] text-[#8a1538] text-[13px] font-semibold tracking-wide no-underline hover:bg-[#8a1538] hover:text-white transition-colors duration-200"
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
          src="/Frame 1160.png"
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