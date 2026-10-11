
import React from "react";

export default function TechnologyMovesForward() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* HERO BACKGROUND */}
      <div
        className="
          relative
          h-[330px]
          w-full
          sm:h-[360px]
          md:h-[390px]
          lg:h-[450px]
          xl:h-[480px]
        "
      >
        <img
          src="/Slide4.1.png"
          alt="Technology moving business forward"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div
          className="
            absolute inset-0 w-full
            px-4 sm:px-6 md:px-10 lg:px-[100px]
          "
        >
          <div
            className="
              flex h-full max-w-[590px]
              flex-col justify-center
              -translate-y-3
              sm:-translate-y-4
              md:-translate-y-5
            "
          >
            {/* HEADING */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                text-[22px] font-medium
                leading-[1.08] tracking-[-0.7px] text-white
                min-[400px]:text-[24px]
                sm:text-[27px]
                md:text-[30px]
                lg:text-[34px]
                xl:text-[35px]
              "
            >
              Technology That Moves Your
              <br className="hidden sm:block" />
              Business Forward
            </h1>

            {/* DESCRIPTION — SAME TEXT */}
            <p
              className="
                mt-2 max-w-[560px]
                font-['Inter'] text-[11px]
                font-light leading-[1.4] text-white
                sm:mt-3 sm:text-[12px]
                md:text-[13px] lg:text-[14px]
              "
            >
              We help businesses use technology to work smarter, solve
              complex challenges and prepare for what comes next. From
              software and cloud to AI and cybersecurity, our solutions are
              built around your business needs.
            </p>

            {/* BUTTON — SLIGHTLY BIGGER AND LOWER */}
            <div className="mt-5 sm:mt-6 md:mt-7 translate-y-2">
              <button
                type="button"
                className="
                  group inline-flex items-center gap-2
                  rounded-[5px] border border-white
                  bg-transparent
                  !px-[12px] !py-[8px]
                  font-['Inter'] text-[12px]
                  font-medium leading-none text-white
                  transition-all duration-300
                  hover:bg-white hover:text-[#22091f]
                  sm:text-[13px]
                  md:!px-[14px] md:!py-[9px] md:text-[14px]
                "
              >
                <span>Talk to Our Experts</span>

                <span
                  className="
                    text-[19px] leading-none
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
