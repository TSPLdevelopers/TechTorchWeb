import React from "react";

export default function TechHero() {
  return (
    <section
      className="
        relative w-full
        overflow-hidden
        bg-[#0a1128]
        font-['Plus_Jakarta_Sans']
        
        min-h-[360px]
        sm:min-h-[400px]
        md:min-h-[440px]
        lg:min-h-[580px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/slide25.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          flex flex-col justify-center
          
          min-h-[360px]
          sm:min-h-[400px]
          md:min-h-[440px]
          lg:min-h-[480px]

          px-6
          sm:px-10
          md:px-16
          lg:px-20

          max-w-2xl
        "
      >
        {/* ================= HEADING ================= */}
        <h1
          className="
            text-white
            font-semibold
            leading-[1.15]
            tracking-tight

            text-[1.6rem]
            sm:text-[1.9rem]
            md:text-[2.3rem]
            lg:text-[2.7rem]

            translate-y-2
            md:translate-y-1
          "
        >
          Ready to Bring Your
          <br />
          Business Together?
        </h1>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            mt-8
            sm:mt-10
            md:mt-12

            text-white/90

            text-sm
            sm:text-base
            md:text-lg

            leading-relaxed

            max-w-[280px]
            sm:max-w-[350px]
            md:max-w-md
          "
        >
          Let's look at how the right ERP approach can simplify your
          processes, improve visibility and help your teams work better
          together.
        </p>

        {/* ================= BUTTON ================= */}
        <div
          className="
           mt-10 sm:mt-11 md:mt-28
          "
        >
         <button
  className="
    border
    border-white/70
    text-white

    text-xs
    sm:text-sm

    font-medium
    tracking-wide

    px-4
    sm:px-5
    md:px-4

    py-2
    sm:py-2.5

    rounded-lg

    hover:bg-white
    hover:text-[#0a1128]

    transition-colors
    duration-300
  "
>
  Talk to Our ERP Experts
</button>
        </div>
      </div>
    </section>
  );
}
