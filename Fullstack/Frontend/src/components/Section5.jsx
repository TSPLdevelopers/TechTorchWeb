import React from "react";

export default function BigVision() {
  return (
    <section className="relative w-full min-h-[550px] overflow-hidden bg-[#f9f8f3]">

      {/* ================= CURVED LINES BEHIND PERSON ================= */}
      <div
        className="absolute z-0 pointer-events-none opacity-30"
        style={{ width: "1200px", height: "850px", right: "-300px", top: "-80px", backgroundImage: "url('/Section.png')", backgroundSize: "100% 150%", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat", transform: "rotate(-55deg)" }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto flex flex-col min-h-[550px] w-full max-w-[1440px] px-[20px] sm:px-[30px] md:px-[40px] lg:flex-row lg:items-center lg:px-[100px]">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 w-full pt-[30px] sm:pt-[35px] md:w-[60%] md:pt-[40px] lg:w-[52%] lg:pt-[10px]">

          <p className="mb-[15px] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] font-medium leading-none text-black">
            THE BIG VISION
          </p>

          <h1 className="translate-y-[10px] text-[29px] sm:text-[32px] md:text-[35px] lg:text-[36px] font-bold font-plus-jakarta leading-[1.32] tracking-[-1px] text-black">
            <span className="text-[#83004f]">Leading</span> With Vision.
            <br />
            Shaping <span className="text-[#83004f]">What’s Next.</span>
          </h1>

          <p className="mt-[25px] sm:mt-[27px] md:mt-[30px] lg:mt-[34px] max-w-[600px] text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-[1.4] text-[#505050]">
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

          {/* ================= BOTTOM SECTION ================= */}
          <div className="mt-[30px] sm:mt-[32px] md:mt-[35px] lg:mt-[20px] flex flex-wrap items-center">

            {/* Learn More button */}
            <button className="border border-[#8a0055] rounded-[4px] bg-transparent px-[9px] py-[7px] sm:px-[10px] sm:py-[8px] lg:px-[11px] lg:py-[9px] text-[17px] sm:text-[19px] lg:text-[20px] font-semibold font-plus-jakarta leading-none text-[#83004f] transition-all duration-300 hover:bg-[#83004f] hover:text-white">
              Learn More
            </button>

            {/* Name */}
            <div className="ml-[25px] sm:ml-[40px] md:ml-[55px] lg:ml-[102px] mt-[16px] text-center">

              <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium font-plus-jakarta leading-none text-black">
                Siddharth Pathak
              </h2>

              <p className="mt-[10px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-normal font-inter leading-[1.2] text-[#83004f]">
                Chief Executive Officer,
                <br />
                TechTorch Solutions
              </p>

            </div>

          </div>
        </div>

        {/* ================= RIGHT PERSON IMAGE ================= */}
        <div className="relative z-20 mt-[30px] flex w-full justify-center md:absolute md:right-[20px] md:bottom-0 md:mt-0 md:w-auto md:justify-normal lg:right-[100px]">

          <img
            src="/img.png"
            alt="Siddharth Pathak"
            className="relative z-20 block h-auto w-[180px] sm:w-[210px] md:w-[250px] lg:w-[350px] object-contain"
          />

        </div>

      </div>
    </section>
  );
}