import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";

const WINE = "#7A1F3D";

export default function BuildOnlineBusinessCtaSection() {
  return (
    <section className="w-full relative overflow-hidden font-['Inter']">
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src="/build-online-business.jpg"
          alt="Building online business with technology"
          className="
            w-full
            h-full
            object-cover
            scale-[1.02]
          "
        />
      </div>

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(20,22,28,0.88) 0%, rgba(26,28,36,0.78) 45%, rgba(20,22,28,0.88) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          w-full
          max-w-[1320px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[100px]
          py-14
          sm:py-16
          md:py-20
          lg:py-24
          text-center
        "
      >
        {/* Inner content width */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              gap-1.5
              text-[9px]
              sm:text-[10px]
              font-semibold
              tracking-[0.08em]
              px-3
              py-1.5
              rounded-full
              mb-5
              font-['Inter']
              transition-all
              duration-300
              hover:scale-105
            "
            style={{
              background: WINE,
              color: "#fff",
            }}
          >
            <ChevronRight size={11} strokeWidth={3} />
            NEXT PHASE
          </span>

          {/* ================= HEADING ================= */}
          <h2
            className="
              font-['Plus_Jakarta_Sans']
              text-2xl
              sm:text-3xl
              md:text-[2rem]
              lg:text-[2.2rem]
              leading-[1.2]
              font-bold
              tracking-tight
              text-white
              mb-4
            "
          >
            Build Your Online Business With the
            <br className="hidden sm:block" />
            Right Technology
          </h2>

          {/* ================= DESCRIPTION ================= */}
          <p
            className="
              font-['Inter']
              text-xs
              sm:text-sm
              md:text-[15px]
              leading-6
              sm:leading-relaxed
              max-w-2xl
              mx-auto
              mb-7
              px-2
              sm:px-0
            "
            style={{
              color: "#c9c6cc",
            }}
          >
            Bring your products, customers and e-commerce operations together
            with technology designed around your business requirements.
          </p>

          {/* ================= BUTTONS ================= */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              justify-center
              gap-3
              sm:gap-4
              w-full
            "
          >
            {/* Primary Button */}
            <button
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                sm:px-7
                py-3
                rounded-md
                text-white
                text-sm
                font-medium
                font-['Inter']
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_25px_rgba(122,31,61,0.35)]
                w-full
                sm:w-auto
              "
              style={{
                background: WINE,
              }}
            >
              Talk to Our Experts

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* Secondary Button */}
            <button
              className="
                inline-flex
                items-center
                justify-center
                px-6
                sm:px-7
                py-3
                rounded-md
                text-sm
                font-medium
                text-white
                font-['Inter']
                border
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/20
                hover:border-white/30
                w-full
                sm:w-auto
              "
              style={{
                background: "rgba(255,255,255,0.12)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}