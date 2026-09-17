import React from "react";
import {
  Sparkle,
  ArrowRight,
  CheckCircle2,
  ScanFace,
} from "lucide-react";

const tracks = [
  "Architecture Fit",
  "Code Quality & Testing",
  "Team Velocity Synergy",
  "Cultural Harmony",
];

const features = [
  {
    number: "01",
    title: "Evaluate Talent Through Real Work",
    tag: "PRACTICAL PROJECT ASSESSMENT",
    description:
      "Assess technology professionals through practical project involvement, technical capability, problem-solving, communication, and collaboration.",
  },
  {
    number: "02",
    title: "A Flexible Path to Long-Term Hiring",
    tag: "SEAMLESS TRANSITION MODEL",
    description:
      "Move from contract engagement toward a permanent role when the professional demonstrates the right technical capability, team alignment, and long-term potential.",
  },
];

export default function ContractToHireHero() {
  return (
    <div className="w-full min-h-screen bg-white font-inter flex justify-center">
      <div
        className="
          w-full
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8
          py-10
          sm:py-12
          lg:py-16
        "
      >
        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1fr)_400px]
            gap-8
            sm:gap-10
            lg:gap-12
            items-center
            mb-8
            sm:mb-10
          "
        >
          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <div className="flex flex-col justify-center w-full">
            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-[#730024]/5
                border
                border-[#730024]/10
                px-3
                py-1.5
                mb-5
                sm:mb-6
                w-fit
              "
            >
              <Sparkle className="w-3 h-3 text-[#730024]" />

              <span
                className="
                  text-[9px]
                  sm:text-[10px]
                  tracking-wide
                  text-[#730024]
                  font-bold
                  font-inter
                "
              >
                CONTRACT-TO-HIRE
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                font-jakarta
                font-semibold
                text-3xl
                sm:text-4xl
                lg:text-[2.5rem]
                leading-[1.12]
                mb-4
                sm:mb-5
                text-[#1c1c1c]
                max-w-2xl
              "
            >
              Find the Right Technology Talent.{" "}
              <span className="text-[#730024]">
                Build with Confidence.
              </span>
            </h1>

            {/* =================================================
                SUB HEADING
            ================================================= */}

            <p
              className="
                font-jakarta
                text-neutral-500
                text-[13.5px]
                sm:text-[14px]
                leading-relaxed
                max-w-xl
                mb-6
                sm:mb-8
              "
            >
              Evaluate technical capability, collaboration, and team alignment
              through real-world engagement before making a long-term hiring
              decision.
            </p>

            {/* =================================================
                CTA BUTTON
            ================================================= */}

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
                py-2.5
                sm:py-3
                w-fit
                hover:bg-[#5c001d]
                transition-colors
              "
            >
              Talk to Our Experts

              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* =====================================================
              RIGHT COLUMN - CARD
          ===================================================== */}

          <div
            className="
              w-full
              max-w-[400px]
              mx-auto
              lg:mx-0
              lg:justify-self-end
              rounded-xl
              border
              border-neutral-200
              shadow-sm
              overflow-hidden
              bg-white
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className="
                    w-8
                    h-8
                    rounded-md
                    bg-[#730024]/5
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <ScanFace className="w-3.5 h-3.5 text-[#730024]" />
                </div>

                <div className="min-w-0">
                  <div
                    className="
                      text-[11.5px]
                      sm:text-[12.5px]
                      font-semibold
                      text-[#1c1c1c]
                      font-inter
                      leading-snug
                    "
                  >
                    Contract-to-Hire Evaluation Matrix
                  </div>

                  <div
                    className="
                      text-[10px]
                      sm:text-[10.5px]
                      text-neutral-400
                      font-inter
                      mt-0.5
                    "
                  >
                    Live Engineering & Team Fit Benchmark
                  </div>
                </div>
              </div>

              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  bg-emerald-50
                  text-emerald-600
                  text-[9px]
                  sm:text-[9.5px]
                  font-semibold
                  px-2
                  py-1
                  rounded-full
                  whitespace-nowrap
                  w-fit
                  font-inter
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active Trial
              </span>
            </div>

            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="
                relative
                h-48
                sm:h-52
                lg:h-[220px]
                mx-3
                rounded-lg
                overflow-hidden
              "
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('cth.png')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div
                className="
                  absolute
                  bottom-2.5
                  left-3
                  right-3
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-1.5
                  text-white
                  text-[9px]
                  sm:text-[10px]
                  font-medium
                  font-inter
                "
              >
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  Sprint-Validated Pairing
                </span>

                <span>90-Day Direct Track</span>
              </div>
            </div>

            {/* =================================================
                TRACKS
            ================================================= */}

            <div className="px-4 pt-4 pb-3">
              <div
                className="
                  text-[8.5px]
                  sm:text-[9px]
                  tracking-wide
                  text-neutral-400
                  font-semibold
                  mb-2.5
                  font-inter
                "
              >
                CONTINUOUS SPRINT EVALUATION TRACKS
              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  xs:grid-cols-2
                  sm:grid-cols-2
                  gap-y-2
                  gap-x-4
                  mb-2
                "
              >
                {tracks.map((track) => (
                  <div
                    key={track}
                    className="
                      flex
                      items-center
                      gap-1.5
                      text-[10.5px]
                      sm:text-[11.5px]
                      text-neutral-600
                      font-inter
                    "
                  >
                    <span className="w-1 h-1 rounded-full bg-[#730024] shrink-0" />

                    <span>{track}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <div
              className="
                border-t
                border-neutral-100
                px-4
                py-3
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-2
              "
            >
              <span
                className="
                  text-[9.5px]
                  sm:text-[10.5px]
                  
                  font-semibold
                  font-inter
                "
              >
                ↗ Trial-to-Perm Conversion Rate: 94.8%
              </span>

              <span
                className="
                  text-[9.5px]
                  sm:text-[10.5px]
                  text-neutral-400
                  font-medium
                  font-inter
                "
              >
                Full IP & Code Ownership Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FEATURE CARDS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            sm:gap-5
          "
        >
          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                rounded-lg
                border
                border-neutral-200
                bg-neutral-50
                p-4
                sm:p-5
              "
            >
              {/* Number */}
              <span
                className="
                  inline-block
                  text-[9px]
                  sm:text-[10px]
                  font-bold
                  text-[#730024]
                  bg-[#730024]/5
                  border
                  border-[#730024]/10
                  px-2
                  py-0.5
                  rounded
                  mb-3
                  sm:mb-4
                  font-inter
                "
              >
                {feature.number}
              </span>

              {/* Feature Heading */}
              <h3
                className="
                  font-jakarta
                  text-[#1c1c1c]
                  font-semibold
                  text-[14px]
                  sm:text-[15px]
                  leading-snug
                  mb-1
                "
              >
                {feature.title}
              </h3>

              {/* Feature Tag */}
              <div
                className="
                  text-[9px]
                  sm:text-[9.5px]
                  tracking-wide
                  text-[#730024]
                  font-bold
                  mb-2.5
                  sm:mb-3
                  font-inter
                "
              >
                {feature.tag}
              </div>

              {/* Description */}
              <p
                className="
                  font-inter
                  text-neutral-500
                  text-[11.5px]
                  sm:text-[12.5px]
                  leading-relaxed
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}