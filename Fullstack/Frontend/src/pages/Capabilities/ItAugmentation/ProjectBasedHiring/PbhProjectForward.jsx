import React from "react";
import {
  Target,
  Layers,
  Radar,
  Infinity as InfinityIcon,
  Check,
  ArrowRight,
  Code2,
  Sparkle,
  ClipboardCheck,
} from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Project-Aligned Expertise",
    description:
      "Technical capabilities aligned with your specific project and business requirements.",
    tag: "Direct Fit",
  },
  {
    icon: Layers,
    title: "Flexible Engineering Support",
    description:
      "Resources that can complement your existing teams and technical capabilities.",
    tag: "Dynamic Scale",
  },
  {
    icon: Radar,
    title: "Technology-Focused Approach",
    description:
      "Support across software development, applications, integration, testing, and modernization.",
    tag: "Full Stack Depth",
  },
  {
    icon: InfinityIcon,
    title: "End-to-End Technology Support",
    description:
      "Technical capabilities covering development through deployment, maintenance, and continuous improvement.",
    tag: "Complete Lifecycle",
  },
];

const ctaTags = [
  { icon: Code2, label: "Software Engineering" },
  { icon: Sparkle, label: "Flexible Resources" },
  { icon: ClipboardCheck, label: "Project-Based Support" },
];

export default function WhyTechTorchSection() {
  return (
    <section className="w-full min-h-screen bg-white flex justify-center font-inter">
      <div
        className="
          w-full
          max-w-6xl
          px-4
          sm:px-6
          lg:px-8
          py-8
          sm:py-10
          lg:py-14
          space-y-5
          sm:space-y-6
        "
      >
        {/* =====================================================
            DARK WHY TECHTORCH CARD
        ====================================================== */}
        <div
          className="
            relative
            rounded-xl
            sm:rounded-2xl
            overflow-hidden
            px-4
            sm:px-6
            lg:px-10
            py-8
            sm:py-10
            lg:py-11
          "
          style={{
            background:
              "radial-gradient(120% 140% at 90% 0%, #4a0a30 0%, #2c0620 60%)",
          }}
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              -top-16
              -right-10
              w-48
              h-48
              sm:w-56
              sm:h-56
              rounded-full
              bg-[#730024]/40
              blur-3xl
            "
            aria-hidden="true"
          />

          {/* Header */}
          <div
            className="
              relative
              text-center
              mb-7
              sm:mb-8
              lg:mb-9
            "
          >
            {/* Label */}
            <span
              className="
                inline-flex
                items-center
                gap-1.5
                font-inter
                text-[8px]
                sm:text-[9px]
                tracking-[0.08em]
                font-semibold
                text-white
                bg-white/10
                border
                border-white/10
                px-3
                py-1
                rounded-full
                mb-4
              "
            >
              <span className="w-1 h-1 rounded-full bg-white" />
              WHY TECHTORCH
            </span>

            {/* Heading */}
            <h1
              className="
                font-jakarta
                text-white
                font-semibold
                text-2xl
                sm:text-3xl
                lg:text-[32px]
                leading-[1.2]
                tracking-[-0.02em]
                mb-3
                max-w-2xl
                mx-auto
              "
            >
              Technology Expertise Built Around Your Requirements
            </h1>

            {/* Sub Heading */}
            <p
              className="
                font-jakarta
                text-white/60
                font-medium
                text-[11px]
                sm:text-[12px]
                lg:text-[13px]
                leading-relaxed
                max-w-xl
                mx-auto
              "
            >
              Technical capabilities aligned with your project requirements
              and technology objectives.
            </p>
          </div>

          {/* =====================================================
              FEATURE CARDS
          ====================================================== */}
          <div
            className="
              relative
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-3
              sm:gap-4
            "
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="
                    w-full
                    min-w-0
                    rounded-xl
                    bg-white/[0.06]
                    border
                    border-white/10
                    p-4
                    sm:p-4
                    lg:p-4
                    transition-all
                    duration-300
                    hover:bg-white/[0.09]
                    hover:border-white/20
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-8
                      h-8
                      sm:w-9
                      sm:h-9
                      rounded-lg
                      bg-white/10
                      flex
                      items-center
                      justify-center
                      mb-4
                    "
                  >
                    <Icon
                      className="w-4 h-4 sm:w-[17px] sm:h-[17px] text-white"
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Heading */}
                  <h3
                    className="
                      font-jakarta
                      text-white
                      font-semibold
                      text-[12px]
                      sm:text-[12.5px]
                      lg:text-[13px]
                      leading-[1.4]
                      mb-2
                    "
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      font-inter
                      text-white/55
                      font-normal
                      text-[10px]
                      sm:text-[10.5px]
                      lg:text-[11px]
                      leading-[1.6]
                      mb-4
                    "
                  >
                    {card.description}
                  </p>

                  {/* Bottom Tag */}
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-inter
                      text-[9.5px]
                      sm:text-[10px]
                      text-white
                      font-medium
                    "
                  >
                    <Check
                      className="w-3 h-3 text-white shrink-0"
                      strokeWidth={2}
                    />
                    {card.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            LIGHT CTA CARD
        ====================================================== */}
        <div
          className="
            w-full
            rounded-xl
            sm:rounded-2xl
            bg-neutral-50
            border
            border-neutral-200
            px-4
            sm:px-8
            lg:px-10
            py-10
            sm:py-12
            lg:py-14
            text-center
          "
        >
          {/* Icon */}
          <div
            className="
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-lg
              bg-[#730024]
              flex
              items-center
              justify-center
              mx-auto
              mb-5
              sm:mb-6
            "
          >
            <Layers
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              strokeWidth={1.8}
            />
          </div>

          {/* Heading */}
          <h2
            className="
              font-jakarta
              text-[#1c1c1c]
              font-semibold
              text-xl
              sm:text-2xl
              lg:text-[28px]
              leading-tight
              tracking-[-0.015em]
              mb-3
            "
          >
            Move Your Next Technology Project Forward
          </h2>

          {/* Sub Heading */}
          <p
            className="
              font-jakarta
              text-neutral-500
              font-medium
              text-[11px]
              sm:text-[12px]
              lg:text-[13px]
              leading-[1.7]
              max-w-xl
              mx-auto
              mb-6
              sm:mb-7
              px-2
            "
          >
            Discuss your project requirements with TechTorch and explore the
            right engineering capabilities and resource support for your
            business.
          </p>

          {/* Button */}
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
              sm:text-[13px]
              px-5
              sm:px-6
              py-2.5
              sm:py-3
              hover:bg-[#5c001d]
              transition-colors
              duration-300
              mb-6
              sm:mb-7
            "
          >
            Talk to Our Experts

            <ArrowRight
              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              strokeWidth={2}
            />
          </button>

          {/* CTA Tags */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              sm:gap-x-6
              gap-y-3
            "
          >
            {ctaTags.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  font-inter
                  text-[9.5px]
                  sm:text-[10.5px]
                  font-medium
                  text-[#730024]
                "
              >
                <Icon
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5"
                  strokeWidth={1.8}
                />

                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}