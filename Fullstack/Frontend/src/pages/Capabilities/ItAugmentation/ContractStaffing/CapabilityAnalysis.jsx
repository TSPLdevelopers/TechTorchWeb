import React from "react";
import {
  FileText,
  ShieldCheck,
  Quote,
  ShieldCheck as Shield2,
  Repeat,
} from "lucide-react";

export default function ElasticEngineeringCapacity() {
  return (
    <div className="w-full min-h-screen bg-white font-inter">
      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-10
          sm:py-12
          lg:py-16
        "
      >
        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[300px_minmax(0,1fr)]
            gap-8
            sm:gap-10
            lg:gap-12
            items-start
          "
        >
          {/* =====================================================
              SIDEBAR
          ===================================================== */}

          <div className="space-y-4 w-full">
            {/* Executive Briefing card */}
            <div
              className="
                rounded-xl
                border
                border-neutral-200
                bg-neutral-50
                p-4
                sm:p-5
              "
            >
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-3.5 h-3.5 text-[#730024] shrink-0" />

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
                  EXECUTIVE BRIEFING
                </span>
              </div>

              {/* Heading */}
              <h3
                className="
                  font-jakarta
                  text-[#1c1c1c]
                  font-semibold
                  text-[15px]
                  sm:text-[16px]
                  mb-2
                  leading-snug
                "
              >
                The Agility Mandate
              </h3>

              {/* Description */}
              <p
                className="
                  font-inter
                  text-neutral-500
                  text-[11.5px]
                  sm:text-[12px]
                  leading-relaxed
                  mb-4
                "
              >
                Why forward-looking CTOs and engineering directors structure
                their engineering spend with high-velocity contractor
                elasticity.
              </p>

              {/* Stats */}
              <div className="border-t border-neutral-200 pt-3 space-y-2">
                <div
                  className="
                    flex
                    flex-col
                    xs:flex-row
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-1
                    text-[10.5px]
                    sm:text-[11px]
                    font-inter
                  "
                >
                  <span className="text-neutral-400">
                    Traditional Sourcing Cycle
                  </span>

                  <span className="font-semibold text-neutral-700">
                    60–90 Days
                  </span>
                </div>

                <div
                  className="
                    flex
                    flex-col
                    xs:flex-row
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-1
                    text-[10.5px]
                    sm:text-[11px]
                    font-inter
                  "
                >
                  <span className="text-neutral-400">
                    TechTorch Turnaround
                  </span>

                  <span className="font-semibold text-[#730024]">
                    48 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* =====================================================
                IP COMPLIANCE CARD
            ===================================================== */}

            <div
              className="
                rounded-xl
                border
                border-[#730024]/10
                bg-[#730024]/5
                p-4
                sm:p-5
              "
            >
              <div className="flex items-start gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#730024] mt-0.5 shrink-0" />

                <span
                  className="
                    text-[11.5px]
                    sm:text-[12px]
                    font-semibold
                    text-[#730024]
                    font-inter
                    leading-snug
                  "
                >
                  Full IP & Compliance Shield
                </span>
              </div>

              <p
                className="
                  font-inter
                  text-neutral-600
                  text-[11.5px]
                  sm:text-[12px]
                  leading-relaxed
                "
              >
                Comprehensive intellectual property assignments, NDAs, and
                enterprise security protocols are established prior to
                initial code repository access.
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}

          <div className="w-full min-w-0">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 sm:w-5 h-px bg-[#730024] shrink-0" />

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
                CAPACITY ANALYSIS
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                font-jakarta
                text-[#1c1c1c]
                font-semibold
                text-xl
                sm:text-2xl
                lg:text-[1.75rem]
                leading-[1.25]
                mb-5
                sm:mb-6
              "
            >
              01 The Strategic Imperative of Elastic Engineering Capacity
            </h1>

            {/* =================================================
                BODY
            ================================================= */}

            <div
              className="
                space-y-4
                sm:space-y-5
                text-[12.5px]
                sm:text-[13px]
                lg:text-[13.5px]
                leading-relaxed
                text-neutral-600
                mb-6
                sm:mb-7
                font-inter
              "
            >
              <p>
                Modern software enterprises operate under continuous delivery
                stress. High-stakes platform deadlines, sudden spikes in
                customer workload, and unexpected architectural migrations
                can expose severe internal resource bottlenecks without
                warning. When teams scramble to accommodate urgent features,
                core product roadmaps suffer debilitating delays.
              </p>

              <p>
                Traditionally, organizations attempt to resolve capacity
                shortages through conventional full-time recruitment. Yet
                with average enterprise hiring cycles stretching across 60 to
                90 days, permanent recruiting cannot respond fast enough to
                volatile demand spikes. Long hiring lags leave vital
                initiatives stalled, while overburdened internal engineering
                leads burn out under unsustainable sprint loads.
              </p>
            </div>

            {/* =================================================
                PULL QUOTE
            ================================================= */}

            <blockquote
              className="
                border-l-[3px]
                border-[#730024]
                bg-[#730024]/5
                pl-4
                sm:pl-5
                pr-4
                py-4
                mb-7
                sm:mb-8
              "
            >
              <p
                className="
                  font-inter
                  text-[12.5px]
                  sm:text-[13px]
                  lg:text-[13.5px]
                  italic
                  text-neutral-700
                  leading-relaxed
                  mb-3
                "
              >
                "Contract staffing is no longer a tactical headcount stopgap.
                In modern engineering, it is an architectural buffer that
                protects core product roadmaps while absorbing volatile
                sprint loads."
              </p>

              <div className="flex items-start gap-2">
                <Quote className="w-3 h-3 text-[#730024] mt-0.5 shrink-0" />

                <span
                  className="
                    text-[10px]
                    sm:text-[11px]
                    font-semibold
                    text-[#730024]
                    font-inter
                    leading-relaxed
                  "
                >
                  TechTorch Augmentation Practice Group
                </span>
              </div>
            </blockquote>

            {/* =================================================
                SECTION 2 HEADING
            ================================================= */}

            <h2
              className="
                font-jakarta
                text-[#1c1c1c]
                font-semibold
                text-lg
                sm:text-xl
                leading-snug
                mb-3
                sm:mb-4
              "
            >
              Decoupling Time-to-Market from Recruiting Latency
            </h2>

            <div
              className="
                space-y-4
                sm:space-y-5
                text-[12.5px]
                sm:text-[13px]
                lg:text-[13.5px]
                leading-relaxed
                text-neutral-600
                mb-6
                font-inter
              "
            >
              <p>
                TechTorch eliminates recruiting friction by maintaining an
                active, pre-assessed bench of seasoned tech practitioners.
                Rather than sifting through generic resumes, hiring managers
                receive targeted candidate portfolios curated specifically
                for the technical demands of their stack.
              </p>

              <p>
                Every candidate is evaluated through hands-on system design
                scenarios, real-world refactoring exercises, and
                architectural defense panels. Because we filter for high
                autonomy and battle-tested industry depth, our engineers
                begin writing production-ready code on day one without
                demanding lengthy internal mentorship cycles from your senior
                architects.
              </p>
            </div>

            {/* =================================================
                INFO CARDS
            ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-3
                sm:gap-4
                mb-7
                sm:mb-8
              "
            >
              {/* Card 1 */}
              <div
                className="
                  rounded-lg
                  border
                  border-neutral-200
                  bg-neutral-50
                  p-4
                "
              >
                <div className="flex items-start gap-2 mb-2">
                  <Shield2 className="w-3.5 h-3.5 text-[#730024] mt-0.5 shrink-0" />

                  <span
                    className="
                      text-[11px]
                      sm:text-[11.5px]
                      font-semibold
                      text-[#1c1c1c]
                      font-inter
                      leading-snug
                    "
                  >
                    Production-Vetted Competence
                  </span>
                </div>

                <p
                  className="
                    text-[10.5px]
                    sm:text-[11.5px]
                    text-neutral-500
                    leading-relaxed
                    font-inter
                  "
                >
                  Verified track records in microservice decoupling,
                  high-load database sharding, and high-load distributed
                  architectures.
                </p>
              </div>

              {/* Card 2 */}
              <div
                className="
                  rounded-lg
                  border
                  border-neutral-200
                  bg-neutral-50
                  p-4
                "
              >
                <div className="flex items-start gap-2 mb-2">
                  <Repeat className="w-3.5 h-3.5 text-[#730024] mt-0.5 shrink-0" />

                  <span
                    className="
                      text-[11px]
                      sm:text-[11.5px]
                      font-semibold
                      text-[#1c1c1c]
                      font-inter
                      leading-snug
                    "
                  >
                    Turnkey Integration
                  </span>
                </div>

                <p
                  className="
                    text-[10.5px]
                    sm:text-[11.5px]
                    text-neutral-500
                    leading-relaxed
                    font-inter
                  "
                >
                  Familiarity with modern enterprise CI/CD pipelines, GitOps
                  workflows, and automated test-driven development
                  methodologies.
                </p>
              </div>
            </div>

            {/* =================================================
                SECTION 3
            ================================================= */}

            <h2
              className="
                font-jakarta
                text-[#1c1c1c]
                font-semibold
                text-lg
                sm:text-xl
                leading-snug
                mb-3
                sm:mb-4
              "
            >
              Seamless Integration & Zero Operational Friction
            </h2>

            <div
              className="
                space-y-4
                sm:space-y-5
                text-[12.5px]
                sm:text-[13px]
                lg:text-[13.5px]
                leading-relaxed
                text-neutral-600
                font-inter
              "
            >
              <p>
                Augmentation is only effective when external contributors
                harmonize with your existing engineering rituals. TechTorch
                practitioners adapt smoothly to your team's standups, sprint
                estimation cadences, and review standards, operating as a
                natural extension of your team.
              </p>

              <p>
                We guarantee overlapping business hours to facilitate
                immediate communication, backed by clear sprint
                accountability and bi-weekly performance reviews. Your
                organization gets the exact velocity boost needed without
                legal friction, complicated offboarding, or long-term
                financial liabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}