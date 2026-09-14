import React from "react";
import { Zap, ArrowDown, RefreshCw } from "lucide-react";

const PILLARS = [
  {
    label: "CLARITY",
    description: "Single pane of truth across operations",
  },
  {
    label: "CONTROL",
    description: "Governed workflows & zero bottlenecks",
  },
  {
    label: "SCALE",
    description: "Modular architecture built for surges",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Business Need & Discovery",
    tag: "Input",
    tagColor: "#64748b",
    description:
      "Decouple domain constraints, map operational friction points, and isolate core business goals.",
  },
  {
    number: "02",
    title: "Intelligent Architecture",
    tag: "Engine",
    tagColor: "#730024",
    description:
      "Modular cloud pipelines, event-driven data fabrics, governed automation & resilient APIs.",
    highlight: true,
  },
  {
    number: "03",
    title: "Measurable Enterprise Value",
    tag: "Outcome",
    tagColor: "#059669",
    description:
      "Single source of operational truth, automated compliance audits, and scalable revenue capacity.",
  },
];

export default function StrategicTransformationSection() {
  return (
    <section
      className="
        w-full
        bg-[#f3f1f5]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
      "
    >
      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[24px]
          border
          border-slate-100
          bg-white
          p-5
          shadow-xl
          sm:rounded-[28px]
          sm:p-7
          md:p-9
          lg:p-10
          xl:p-12
        "
      >
        {/* ================= DECORATIVE GLOW ================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            opacity-40
            blur-3xl
          "
          style={{ backgroundColor: "#f4c9dd" }}
        />

        {/* ================= CONTENT GRID ================= */}

        <div
          className="
            relative
            grid
            grid-cols-1
            items-start
            gap-8
            sm:gap-10
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="w-full">
            {/* Label */}

            <span className="mb-4 inline-flex items-center gap-2 sm:mb-5">
              <Zap
                size={13}
                className="flex-shrink-0"
                style={{ color: "#730024" }}
              />

              <span
                className="
                  font-['Inter']
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.1em]
                  sm:text-[11px]
                "
                style={{ color: "#730024" }}
              >
                Strategic Digital Transformation
              </span>
            </span>

            {/* Heading - Plus Jakarta Sans */}

            <h2
              className="
                mb-4
                max-w-2xl
                font-['Plus_Jakarta_Sans']
                text-[24px]
                font-bold
                leading-[1.18]
                tracking-[-0.02em]
                text-slate-900
                sm:mb-5
                sm:text-[28px]
                md:text-[32px]
                lg:text-[34px]
                xl:text-[36px]
              "
            >
              Turning Business Needs into Digital Solutions
            </h2>

            {/* Description - Inter */}

            <p
              className="
                mb-7
                max-w-2xl
                font-['Inter']
                text-[12.5px]
                leading-[1.65]
                text-slate-500
                sm:mb-8
                sm:text-[13.5px]
                md:text-[14px]
              "
            >
              <span className="font-semibold text-slate-700">
                Technology is most valuable when it solves a real business
                problem.
              </span>{" "}
              Our digital solutions bring greater operational visibility,
              cross-departmental agility, and precision control to the way
              your enterprise performs. We combine contextual business
              intelligence with scalable cloud engineering to create digital
              assets that drive bottom-line resilience.
            </p>

            {/* ================= PILLARS ================= */}

            <div
              className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-3
                sm:gap-5
                lg:gap-7
              "
            >
              {PILLARS.map(({ label, description }) => (
                <div key={label} className="min-w-0">
                  <p
                    className="
                      mb-1.5
                      font-['Inter']
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wide
                      sm:text-[11px]
                    "
                    style={{ color: "#730024" }}
                  >
                    {label}
                  </p>

                  <p
                    className="
                      font-['Inter']
                      text-[12px]
                      leading-[1.6]
                      text-slate-500
                      sm:text-[13px]
                    "
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT FLOW CARD
          ====================================================== */}

          <div
            className="
              w-full
              rounded-2xl
              border
              border-[#f4c9dd]
              bg-[#fdf6f9]
              p-4
              sm:p-5
              md:p-6
            "
          >
            {/* Flow Header */}

            <div
              className="
                mb-5
                flex
                flex-wrap
                items-center
                justify-between
                gap-2
                sm:mb-6
              "
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#730024" }}
                />

                <span
                  className="
                    font-['Inter']
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    sm:text-[11px]
                  "
                  style={{ color: "#730024" }}
                >
                  Solution Synthesis Flow
                </span>
              </span>

              <span
                className="
                  rounded-full
                  px-2.5
                  py-1
                  font-['Inter']
                  text-[9px]
                  font-semibold
                  sm:text-[10px]
                "
                style={{
                  backgroundColor: "#fbe4ed",
                  color: "#730024",
                }}
              >
                End-to-End Delivery
              </span>
            </div>

            {/* ================= STEPS ================= */}

            <div className="flex flex-col">
              {STEPS.map((step, i) => (
                <React.Fragment key={step.number}>
                  <div
                    className={`
                      rounded-xl
                      bg-white
                      p-3.5
                      sm:p-4
                      ${
                        step.highlight
                          ? "border"
                          : "border border-slate-100"
                      }
                    `}
                    style={
                      step.highlight
                        ? { borderColor: "#730024" }
                        : undefined
                    }
                  >
                    {/* Step Header */}

                    <div
                      className="
                        mb-1.5
                        flex
                        items-start
                        justify-between
                        gap-2
                      "
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        {/* Number */}

                        <span
                          className="
                            flex
                            h-6
                            w-6
                            flex-shrink-0
                            items-center
                            justify-center
                            rounded-md
                            font-['Inter']
                            text-[9px]
                            font-bold
                          "
                          style={{
                            backgroundColor: step.highlight
                              ? "#730024"
                              : "#f1f5f9",
                            color: step.highlight
                              ? "#ffffff"
                              : "#64748b",
                          }}
                        >
                          {step.number}
                        </span>

                        {/* Title */}

                        <p
                          className="
                            min-w-0
                            font-['Inter']
                            text-[12px]
                            font-bold
                            leading-snug
                            sm:text-[13px]
                          "
                          style={{
                            color: step.highlight
                              ? "#730024"
                              : "#0f172a",
                          }}
                        >
                          {step.title}
                        </p>
                      </div>

                      {/* Tag */}

                      <span
                        className="
                          mt-0.5
                          flex-shrink-0
                          font-['Inter']
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-wide
                          sm:text-[9px]
                        "
                        style={{ color: step.tagColor }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    {/* Description */}

                    <p
                      className="
                        pl-[34px]
                        font-['Inter']
                        text-[11px]
                        leading-[1.6]
                        text-slate-500
                        sm:text-[12px]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}

                  {i < STEPS.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowDown
                        size={14}
                        style={{ color: "#730024" }}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* ================= BOTTOM BAR ================= */}

            <div
              className="
                mt-4
                flex
                flex-col
                items-start
                justify-between
                gap-2
                border-t
                pt-4
                sm:mt-5
                sm:flex-row
                sm:items-center
              "
              style={{ borderColor: "#f4c9dd" }}
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  font-['Inter']
                  text-[10px]
                  font-medium
                  text-slate-500
                  sm:text-[11px]
                "
              >
                <RefreshCw size={11} />
                Zero Silo Architecture
              </span>

              <span
                className="
                  font-['Inter']
                  text-[10px]
                  font-bold
                  sm:text-[11px]
                "
                style={{ color: "#730024" }}
              >
                ENTERPRISE VERIFIED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}