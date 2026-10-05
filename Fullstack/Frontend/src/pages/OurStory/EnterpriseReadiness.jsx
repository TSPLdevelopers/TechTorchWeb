import React from "react";

const BG_IMAGE = "/Enterprise.png";

export default function EnterpriseHero() {
  return (
    <section
      className="w-full bg-black font-inter"
      style={{ minHeight: "420px" }}
    >
      <div
        className="
          relative
          w-full
          min-h-[420px]
          sm:min-h-[460px]
          md:min-h-[500px]
          flex
          items-center
          overflow-hidden
          bg-cover
          bg-center
        "
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10,10,20,0.98) 0%,
              rgba(10,10,20,0.90) 35%,
              rgba(10,10,20,0.55) 65%,
              rgba(10,10,20,0.20) 100%
            ),
            url(${BG_IMAGE})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="
            w-full
            max-w-3xl
            px-6
            sm:px-10
            md:px-14
            lg:px-20
            py-14
            sm:py-16
            md:py-20
          "
        >
          {/* Small Heading */}
          <p className="text-[11px] sm:text-[12px] md:text-[13px] tracking-[0.14em] font-semibold text-white mb-4 sm:mb-5 -mt-1 sm:-mt-3">
            Enterprise Readiness
          </p>

          {/* Main Heading */}
          <h1
            className="
              font-plus-jakarta
              text-white
              font-bold
              leading-[1.08]
              text-[30px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[46px]
              mb-4
              sm:mb-5
              md:mb-6
            "
          >
            Architecting the Future of
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Enterprise Technology
          </h1>

          {/* Description */}
          <p
            className="
              text-white/80
              text-[13px]
              sm:text-sm
              md:text-base
              leading-relaxed
              max-w-xl
              mb-6
              sm:mb-8
              font-inter
            "
          >
            We build digital foundations engineered for scale at speed.
            Bridging deep technical infrastructure with strategic executive
            clarity to deliver unshakeable performance.
          </p>

          {/* Button */}
          <button
            className="
              inline-flex
              items-center
              justify-center
              mt-2
              sm:mt-4
              px-5
              sm:px-6
              py-3
              text-[13px]
              sm:text-sm
              font-semibold
              text-white
              rounded-sm
              transition-all
              duration-300
              hover:brightness-110
              hover:scale-[1.02]
            "
            style={{ backgroundColor: "#b0184f" }}
          >
            Talk To Experts
          </button>
        </div>
      </div>
    </section>
  );
}