import React from "react";
import { useNavigate } from "react-router-dom";

export default function CyberSecurityHeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        w-full
        min-h-[500px]
        overflow-hidden
        bg-slate-900
        sm:min-h-[560px]
        md:min-h-[600px]
        lg:min-h-[640px]
        xl:min-h-[680px]
      "
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/Card4hero.png')",
        }}
      />

      {/* ================= LIGHT BLACK OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/45" />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[500px]
          w-full
          max-w-7xl
          flex-col
          justify-center
          px-4
          py-12
          sm:min-h-[560px]
          sm:px-6
          sm:py-16
          md:min-h-[600px]
          md:px-8
          md:py-20
          lg:min-h-[640px]
          lg:px-10
          lg:py-24
          xl:min-h-[680px]
          xl:px-12
        "
      >
        {/* ================= CYBER SECURITY LABEL ================= */}
        <span
          className="
            inline-flex
            w-fit
            items-center
            rounded-full
            bg-[#7A1338]
            px-3
            py-1
            text-[10px]
            font-semibold
            tracking-[0.15em]
            text-white
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          CYBER SECURITY
        </span>

        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            mt-5
            w-full
            max-w-[330px]
            text-[25px]
            font-bold
            leading-[1.25]
            text-white
            sm:max-w-xl
            sm:text-[30px]
            md:max-w-2xl
            md:text-[38px]
            lg:max-w-3xl
            lg:text-[44px]
            xl:text-[48px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Security Built Into Your Business
        </h1>

        {/* ================= FIRST DESCRIPTION ================= */}
        <p
          className="
            mt-6
            w-full
            max-w-[330px]
            text-[13px]
            leading-[1.7]
            text-white/90
            sm:max-w-xl
            sm:text-[14px]
            md:max-w-2xl
            md:text-[15px]
            lg:max-w-2xl
            lg:text-[16px]
            lg:leading-[1.75]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Cyber threats can affect more than your technology. They can
          disrupt operations, expose sensitive information and impact the
          trust your customers place in your business.
        </p>

        {/* ================= SECOND DESCRIPTION ================= */}
        <p
          className="
            mt-4
            w-full
            max-w-[330px]
            text-[13px]
            leading-[1.7]
            text-white/90
            sm:max-w-xl
            sm:text-[14px]
            md:max-w-2xl
            md:text-[15px]
            lg:max-w-2xl
            lg:text-[16px]
            lg:leading-[1.75]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          TechTorch helps organizations strengthen their security posture
          with practical cybersecurity solutions designed around their
          systems, data, people and business requirements.
        </p>

        {/* ================= BUTTON ================= */}
        <button
          type="button"
          onClick={() => navigate("/secure-business")}
          className="
            mt-8
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            bg-[#7A1338]
            px-6
            py-3
            text-xs
            font-semibold
            tracking-wide
            text-white
            transition-colors
            hover:bg-[#8F1945]
            sm:text-sm
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Secure Your Business

          <span aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </section>
  );
}