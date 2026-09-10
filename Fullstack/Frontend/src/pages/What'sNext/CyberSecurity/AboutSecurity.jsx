import React from "react";

export default function ReadyForNextThreatSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#0B0A14]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          items-center
          gap-8
          sm:gap-10
          md:gap-12
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-14
          xl:gap-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full min-w-0">
          {/* Label */}
          <span
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              bg-fuchsia-800
              px-3
              py-1
              text-[9px]
              font-semibold
              tracking-[0.1em]
              text-white
              sm:text-[10px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            LET'S TALK ABOUT YOUR SECURITY
          </span>

          {/* Heading */}
          <h1
            className="
              mt-4
              w-full
              max-w-[360px]
              text-[22px]
              font-bold
              leading-[1.3]
              text-white
              sm:max-w-lg
              sm:text-[26px]
              md:text-[30px]
              lg:max-w-xl
              lg:text-[34px]
              xl:text-[36px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Is Your Business Ready for the Next Threat?
          </h1>

          {/* Subheading / Paragraph 1 */}
          <p
            className="
              mt-5
              w-full
              max-w-xl
              text-[13px]
              leading-[1.75]
              text-slate-300
              sm:mt-6
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Your technology should help your business move forward—not
            become a source of uncertainty.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              mt-4
              w-full
              max-w-xl
              text-[13px]
              leading-[1.75]
              text-slate-400
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Whether you're reviewing your current security posture,
            protecting a new digital environment or looking to strengthen
            your organization's overall resilience, TechTorch can help you
            take a more structured approach to cybersecurity.
          </p>

          {/* Button */}
          <button
            type="button"
            className="
              mt-7
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              bg-fuchsia-800
              px-5
              py-3
              text-[12px]
              font-semibold
              tracking-wide
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-fuchsia-700
              active:translate-y-0
              sm:mt-8
              sm:px-6
              sm:text-sm
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Talk to Our Experts
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="
            w-full
            min-w-0
            lg:ml-auto
            lg:max-w-[430px]
            xl:max-w-[460px]
          "
        >
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src="/Senior cybersecurity advisors consulting around a digital holographic security display.png"
              alt="Executive cyber advisory session"
              loading="lazy"
              className="
                block
                h-[220px]
                w-full
                object-cover
                object-center
                sm:h-[270px]
                md:h-[300px]
                lg:h-[330px]
                xl:h-[350px]
              "
            />

            {/* Image Caption */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                flex
                flex-col
                gap-1
                bg-black/60
                px-3
                py-2
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-4
                sm:py-2.5
              "
            >
              <span
                className="
                  text-[9px]
                  tracking-wide
                  text-slate-200
                  sm:text-[10px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Executive Cyber Advisory Session
              </span>

              <span
                className="
                  text-[8px]
                  tracking-wide
                  text-rose-300
                  sm:text-[9px]
                  md:text-[10px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                SEC_CONSULT_ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}