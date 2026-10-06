import React from "react";

export default function PurpleHero() {
  return (
    <section className="relative w-full h-[535px] overflow-hidden bg-[#18001f]">

      {/* ================= BACKGROUND IMAGE ================= */}

      <img
        src="/slide1.2.png"
        alt="Technology future"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* ================= PURPLE DARK OVERLAY ================= */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(24,0,31,0.82) 0%, rgba(24,0,31,0.60) 38%, rgba(24,0,31,0.20) 68%, rgba(24,0,31,0.05) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 min-h-[600px] w-full flex items-center">

        {/* SAME HORIZONTAL PADDING AS FOOTER */}

        <div
          className="
            w-full
            px-4
            sm:px-6
            md:px-10
            lg:px-[100px]
          "
        >

          <div className="max-w-[600px] text-white">

            {/* ================= HEADING ================= */}

            <h1
              className="
                font-['Plus_Jakarta_Sans']
                font-semibold
                text-[30px]
                sm:text-[34px]
                md:text-[34px]
                lg:text-[36px]
                leading-[1.08]
                tracking-tight
                -translate-y-10
              "
            >
              Let’s Turn Your Next
              <br />
              Challenge Into an
              <br />
              Opportunity
            </h1>

            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                relative
                -top-4
                mt-7
                max-w-[540px]
                font-['Inter']
                text-[15px]
                sm:text-[16px]
                md:text-[16px]
                lg:text-[16px]
                leading-[1.4]
                text-white/85
              "
            >
              Whether you're looking to modernize,
              <br />
              automate, build or scale, let's explore what
              the right technology
              <br />
              approach could look like
              for your business.
            </p>

            {/* ================= BUTTON ================= */}

            <button
              className="
                relative
                -top-6
                mt-24
                border
                border-white/80
                px-4
                py-2
                text-[14px]
                font-medium
                text-white
                transition
                duration-300
                hover:bg-white
                hover:text-[#18001f]
              "
            >
              Talk to Our Experts
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}