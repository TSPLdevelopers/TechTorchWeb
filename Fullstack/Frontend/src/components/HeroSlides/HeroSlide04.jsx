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
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10 lg:px-2 xl:px-8">

          <div className="max-w-[600px] text-white">

            {/* HEADING */}
            <h1
              className="
                font-['Plus_Jakarta_Sans']
                font-semibold
                text-[30px]
                sm:text-[36px]
                md:text-[48px]
                lg:text-[40px]
                leading-[1.08]
                tracking-tight
                -translate-y-10
              "
            >
              Let’s Turn Your Next 
              <br />
              Challenge Into an
              <br/> Opportunity
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              relative -top-4
                mt-7
                max-w-[540px]
                font-['Inter']
                text-[15px]
                sm:text-[17px]
                md:text-[18px]
                lg:text-[18px]
                leading-[1.4]
               text-white/85
              "
            >
              Whether you're looking to modernize,
              automate,<br/> build or scale, let's explore what
              the right technology <br/> approach could look like
              for your business.
            </p>

            {/* BUTTON */}
            <button
              className="
              relative -top-6
                mt-24
                border border-white/80
                px-3 py-1.5
                text-[14px]
                font-medium
                text-white
                transition duration-300
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