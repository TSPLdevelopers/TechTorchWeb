import React from "react";

export default function Hero3() {
  return (
    <section className="w-full bg-[#78004B] min-h-[600px]">

      <div className="w-full px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <h2 className="text-4xl lg:text-4xl font-bold font-plus-jakarta">
              HOW  WE  WORK
            </h2>

            <h3 className="mt-8 text-2xl lg:text-3xl font-inter text-[#FF0080] max-w-[650px]">
              We understand your needs, build practical solutions, and help your
              business grow with technology.
            </h3>

            <p className="mt-12 text-lg lg:text-xl font-inter leading-relaxed max-w-[650px]">
              Our approach is simple:
              <br />
              first understand the business, then build
              <br />
              the right solution, and continuously
              <br />
              improve it as your needs evolve.
            </p>

            {/* BUTTONS */}
            <div className="mt-16 flex flex-wrap gap-10">

              <button className="bg-white text-[#78004B] px-5 py-2 text-lg font-bold font-inter hover:bg-gray-100 transition">
                UNDERSTAND
              </button>

              <button className="bg-white text-[#78004B] px-5 py-2 text-lg font-bold font-inter hover:bg-gray-100 transition">
                BUILD
              </button>

              <button className="bg-white text-[#78004B] px-5 py-2 text-lg font-bold font-inter hover:bg-gray-100 transition">
                GROW
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
<div className="flex justify-center lg:justify-end">
  <div className="relative w-[500px] h-[500px] max-w-full border-[5px] border-white overflow-hidden">
    <img
      src="/Sec3.1.png"
      alt="TechTorch Solutions"
      className="w-full h-full object-cover object-center"
    />
  </div>
</div>

        </div>
      </div>

    </section>
  );
}