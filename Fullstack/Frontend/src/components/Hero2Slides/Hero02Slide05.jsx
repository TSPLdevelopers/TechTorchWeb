import React from "react";

export default function TechHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0a1128]
        font-['Plus_Jakarta_Sans']

        min-h-[430px]
        sm:min-h-[450px]
        md:min-h-[500px]
        lg:min-h-[580px]
        xl:min-h-[620px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}

      <div
        className="
          absolute
          inset-0
          bg-no-repeat
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: "url('/slide25.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/10" />


      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          justify-center

          w-full

          min-h-[430px]
          sm:min-h-[450px]
          md:min-h-[500px]
          lg:min-h-[580px]
          xl:min-h-[620px]

          px-6
          sm:px-10
          md:px-16
          lg:px-20
          xl:px-24

          box-border
        "
      >

        {/* ================= HEADING ================= */}

        <h1
          className="
            text-white
            font-semibold
            leading-[1.15]
            tracking-tight

            text-[1.65rem]
            sm:text-[1.9rem]
            md:text-[2.3rem]
            lg:text-[2.7rem]
            xl:text-[3rem]

            max-w-[330px]
            sm:max-w-[420px]
            md:max-w-[520px]
            lg:max-w-[600px]

            ml-2
            sm:ml-4
            md:ml-8
            lg:ml-12
            xl:ml-16

            translate-y-0
          "
        >
          Ready to Bring Your
          <br />
          Business Together?
        </h1>


        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-6
            sm:mt-7
            md:mt-8
            lg:mt-10

            text-white/90

            text-[13px]
            sm:text-sm
            md:text-base
            lg:text-lg

            leading-[1.6]

            max-w-[300px]
            sm:max-w-[380px]
            md:max-w-[480px]
            lg:max-w-[560px]

            ml-2
            sm:ml-4
            md:ml-8
            lg:ml-12
            xl:ml-16
          "
        >
          Let's look at how the right ERP approach can simplify your
          processes, improve visibility and help your teams work better
          together.
        </p>


        {/* ================= BUTTON ================= */}

        <div
          className="
            mt-8
            sm:mt-9
            md:mt-10
            lg:mt-14

            ml-2
            sm:ml-4
            md:ml-8
            lg:ml-12
            xl:ml-16
          "
        >
          <button
            type="button"
            className="
              border
              border-white/70

              bg-transparent
              text-white

              text-[11px]
              sm:text-xs
              md:text-sm

              font-medium
              tracking-wide

              px-4
              sm:px-5
              md:px-6

              py-2
              sm:py-2.5
              md:py-3

              rounded-lg

              whitespace-nowrap

              hover:bg-white
              hover:text-[#0a1128]

              transition-all
              duration-300

              active:scale-95
            "
          >
            Talk to Our ERP Experts
          </button>
        </div>

      </div>


      {/* ================= RESPONSIVE EXTRA CSS ================= */}

      <style>{`

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {

          .tech-hero-content {
            padding-left: 40px;
            padding-right: 40px;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 640px) {

          section {
            background-color: #0a1128;
          }

        }


        /* ==========================================
           VERY SMALL MOBILE
        ========================================== */

        @media (max-width: 380px) {

          h1 {
            font-size: 1.5rem;
          }

        }

      `}</style>

    </section>
  );
}