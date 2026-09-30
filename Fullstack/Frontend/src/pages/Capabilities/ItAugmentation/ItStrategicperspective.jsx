import React from "react";
import { Quote } from "lucide-react";

const BRAND_COLOR = "#730024";

export default function StrengthenYourTeam() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-5xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          md:px-8
          md:py-16
          lg:px-10
          lg:py-20
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 md:mb-12">
          {/* Eyebrow */}
          <div
            className="
              mb-3
              font-['Plus_Jakarta_Sans']
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.12em]
              sm:mb-4
              sm:text-[10px]
              md:text-[11px]
            "
            style={{ color: BRAND_COLOR }}
          >
            Strategic Perspective
          </div>

          {/* Heading */}
          <h1
            className="
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#1c1c1c]
              sm:text-[30px]
              md:text-[34px]
              lg:text-[38px]
            "
          >
            Strengthen Your Team. Support Your Technology Requirements.
          </h1>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-4xl
            space-y-5
            sm:space-y-6
            md:space-y-7
          "
        >
          {/* Paragraph 1 */}
          <p
            className="
              font-['Inter']
              text-[11.5px]
              leading-[1.8]
              text-neutral-600
              sm:text-[12.5px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Technology projects often require additional expertise at
            different stages. A business may need extra developers for a
            project, remote engineers to extend an existing team, specialized
            resources for a specific requirement, or a dedicated development
            team for ongoing technology initiatives.
          </p>

          {/* =================================================
              PULL QUOTE
          ================================================= */}

          <blockquote
            className="
              relative
              overflow-hidden
              rounded-r-xl
              border-l-[3px]
              bg-[#fbf1f5]
              py-5
              pl-5
              pr-12
              sm:py-6
              sm:pl-6
              sm:pr-14
              md:py-7
              md:pl-7
            "
            style={{
              borderLeftColor: BRAND_COLOR,
            }}
          >
            {/* Quote text */}
            <p
              className="
                font-['Inter']
                text-[11.5px]
                italic
                leading-[1.75]
                text-neutral-700
                sm:text-[12.5px]
                md:text-[13px]
                lg:text-[14px]
              "
            >
              "TechTorch Solutions provides flexible IT augmentation services
              that help businesses extend their existing technology
              capabilities without making every requirement a permanent
              addition to their internal team."
            </p>

            {/* Quote Icon */}
            <Quote
              className="
                absolute
                right-4
                top-4
                h-5
                w-5
                opacity-20
                sm:right-5
                sm:top-5
                sm:h-6
                sm:w-6
              "
              style={{ color: BRAND_COLOR }}
            />
          </blockquote>

          {/* Paragraph 2 */}
          <p
            className="
              font-['Inter']
              text-[11.5px]
              leading-[1.8]
              text-neutral-600
              sm:text-[12.5px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Our approach is built around understanding the requirement first
            and then providing an engagement model that fits the project and
            business environment. This allows organizations to add the
            resources and technical capabilities they need while their
            existing teams continue to focus on their core responsibilities.
          </p>

          {/* Paragraph 3 */}
          <p
            className="
              font-['Inter']
              text-[11.5px]
              leading-[1.8]
              text-neutral-600
              sm:text-[12.5px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            From individual technology resources to dedicated teams and
            offshore development capabilities, our IT augmentation services
            support different business and project requirements. Whether the
            need is temporary, project-based, or ongoing, the right
            engagement model can help businesses maintain flexibility while
            supporting technology delivery.
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-2 sm:mt-10">
          <span
            className="h-px w-8 sm:w-10"
            style={{ backgroundColor: BRAND_COLOR }}
          />

          <span
            className="
              font-['Inter']
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-neutral-400
              sm:text-[9px]
            "
          >
            Flexible Technology Expertise
          </span>

          <span
            className="h-px w-8 sm:w-10"
            style={{ backgroundColor: BRAND_COLOR }}
          />
        </div>
      </div>
    </section>
  );
}