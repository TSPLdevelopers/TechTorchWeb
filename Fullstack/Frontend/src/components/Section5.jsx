import React from "react";

export default function BigVision() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f9f8f3]">

      {/* Background curved lines */}
      <div className="absolute right-[-80px] top-[-180px] h-[1000px] w-[900px] opacity-60 pointer-events-none">
        {[0, 35, 70, 105, 140, 175, 210].map((inset) => (
          <div
            key={inset}
            className="absolute rounded-full border-l border-[#d9e1e8] rotate-[25deg]"
            style={{ inset }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-[55px]">

        {/* Left content */}
        <div className="relative z-20 w-[52%] pt-[10px]">

          <p className="mb-[42px] text-[26px] font-medium leading-none text-black">
            THE BIG VISION
          </p>

          <h1 className="text-[40px] font-bold leading-[1.32] tracking-[-1px] text-black">
            <span className="text-[#83004f]">Leading</span> With Vision.
            <br />
            Shaping <span className="text-[#83004f]">What’s Next.</span>
          </h1>

          <p className="mt-[34px] max-w-[600px] text-[20px] font-normal leading-[1.4] text-[#505050]">
            The future is not simply something we prepare for
            <br />
            — it is something we have the opportunity to
            <br />
            shape. At TechTorch, our leadership is grounded in
            <br />
            a clear belief: technology should create
            <br />
            meaningful progress, strengthen businesses and
            <br />
            open new possibilities for the future.
          </p>

          {/* Bottom section */}
          <div className="mt-[86px] flex items-center">

            {/* Learn More button */}
            <button
              className="
                border border-[#8a0055]
                bg-transparent
                px-[11px]
                py-[9px]
                text-[24px]
                font-semibold
                leading-none
                text-[#83004f]
                transition-all
                duration-300
                hover:bg-[#83004f]
                hover:text-white
              "
            >
              Learn More
            </button>

            {/* Name */}
            <div className="ml-[102px] text-center">
              <h2 className="text-[34px] font-normal leading-none text-black">
                Siddharth Pathak
              </h2>

              <p className="mt-[12px] text-[21px] font-medium leading-[1.2] text-[#83004f]">
                Chief Executive Officer,
                <br />
                TechTorch Solutions
              </p>
            </div>

          </div>
        </div>

        {/* Right image */}
        <div className="absolute bottom-0 right-[65px] z-20 flex items-end">
          <img
            src="/img.png"
            alt="Siddharth Pathak"
            className="block h-auto w-[450px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}