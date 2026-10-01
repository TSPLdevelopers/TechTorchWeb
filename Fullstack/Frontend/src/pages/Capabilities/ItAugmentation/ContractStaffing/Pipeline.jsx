import React from "react";
import { Handshake, ArrowRight } from "lucide-react";

export default function StrengthenEngineeringPipelineCTA() {
  return (
    <div
      className="
        w-full
        min-h-[420px]
        bg-[#fcedf2]
        flex
        items-center
        justify-center
        font-inter
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          px-4
          sm:px-6
          lg:px-8
          py-12
          sm:py-14
          lg:py-16
          text-center
        "
      >
        {/* =====================================================
            ICON BADGE
        ===================================================== */}

        <div
          className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-full
            bg-[#730024]
            flex
            items-center
            justify-center
            mx-auto
            mb-5
            sm:mb-6
          "
        >
          <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>

        {/* =====================================================
            HEADLINE
        ===================================================== */}

        <h1
          className="
            font-jakarta
            text-[#1c1c1c]
            font-semibold
            text-2xl
            sm:text-3xl
            lg:text-4xl
            leading-[1.2]
            mb-3
            sm:mb-4
            px-2
          "
        >
          Strengthen Your Engineering Pipeline
        </h1>

        {/* =====================================================
            SUB HEADING
        ===================================================== */}

        <p
          className="
            font-jakarta
            text-neutral-500
            text-[13px]
            sm:text-[14px]
            lg:text-[15px]
            leading-relaxed
            max-w-lg
            mx-auto
            mb-6
            sm:mb-8
            px-2
          "
        >
          Equip your technical organization with on-demand capacity,
          senior-tier domain expertise, and zero hiring risk.
        </p>

        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            sm:items-center
            justify-center
            gap-3
            w-full
            sm:w-auto
          "
        >
          {/* Primary Button */}
          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[#730024]
              text-white
              font-inter
              font-semibold
              text-[12px]
              sm:text-sm
              px-5
              sm:px-6
              py-3
              sm:py-3.5
              w-full
              sm:w-auto
              hover:bg-[#5c001d]
              transition-colors
            "
          >
            Talk to Our Augmentation Experts

            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>

          {/* Secondary Button */}
          <button
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-white
              border
              border-neutral-200
              text-[#1c1c1c]
              font-inter
              font-semibold
              text-[12px]
              sm:text-sm
              px-5
              sm:px-6
              py-3
              sm:py-3.5
              w-full
              sm:w-auto
              hover:bg-neutral-50
              transition-colors
            "
          >
            Review Framework Details
          </button>
        </div>
      </div>
    </div>
  );
}