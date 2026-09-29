import React from "react";

const steps = [
  {
    tag: "01 / Clarity",
    number: "1",
    title: "Technology Without Unnecessary Complexity",
    description:
      "Our Artificial Intelligence as a Service model is designed around a straightforward idea: businesses should be able to harness the power of AI without having to build and maintain the complete infrastructure themselves. By providing AI as a service, TechTorch makes the technology more accessible while keeping the focus on business requirements.",
  },
  {
    tag: "02 / Unification",
    number: "2",
    title: "One Partner for Multiple Technology Needs",
    description:
      "Artificial Intelligence may be one part of your technology requirement, while other areas may require consulting, infrastructure, cybersecurity, engineering, software development or skilled resources. TechTorch brings these capabilities together within one technology services portfolio.",
  },
  {
    tag: "03 / Evolution",
    number: "3",
    title: "A Future-Ready Technology Direction",
    description:
      "Artificial Intelligence is part of the changing technology landscape. TechTorch helps businesses take advantage of modern technology through services designed to support their evolving technology requirements.",
  },
];

export default function TechTorchApproach() {
  return (
    <section className="w-full bg-white">
      {/* =====================================================
          TOP ACCENT BAR
      ====================================================== */}

      <div
        className="h-1 w-full"
        style={{ backgroundColor: "#730024" }}
      />

      <div className="flex justify-center">
        <div
          className="
            w-full
            max-w-6xl
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
          {/* =================================================
              EYEBROW
          ================================================== */}

          <div className="mb-3 flex items-center gap-2 sm:mb-4">
            <span
              className="h-px w-6 sm:w-8"
              style={{ backgroundColor: "#730024" }}
            />

            <span
              className="
                font-['Inter']
                text-[9px]
                font-semibold
                tracking-[0.08em]
                sm:text-[10px]
                md:text-[11px]
              "
              style={{ color: "#730024" }}
            >
              Operational Principles
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              mb-8
              font-['Plus_Jakarta_Sans']
              text-[25px]
              font-bold
              leading-[1.2]
              tracking-[-0.025em]
              text-[#1c1c1c]
              sm:mb-10
              sm:text-[30px]
              md:mb-12
              md:text-[35px]
              lg:text-[38px]
            "
          >
            The TechTorch Approach
          </h1>

          {/* =================================================
              CARD GRID
          ================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              sm:gap-5
              lg:grid-cols-3
              lg:gap-6
            "
          >
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  flex
                  h-full
                  flex-col
                  rounded-xl
                  border
                  border-neutral-200
                  bg-neutral-50
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                  sm:p-6
                "
              >
                {/* =================================================
                    CARD TOP
                ================================================== */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-between
                    gap-3
                    sm:mb-6
                  "
                >
                  {/* Step Tag */}

                  <span
                    className="
                      font-['Inter']
                      text-[9px]
                      font-bold
                      tracking-[0.08em]
                      sm:text-[10px]
                    "
                    style={{ color: "#730024" }}
                  >
                    {step.tag.toUpperCase()}
                  </span>

                  {/* Number */}

                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      font-['Inter']
                      text-[10px]
                      font-bold
                      sm:h-7
                      sm:w-7
                      sm:text-[11px]
                    "
                    style={{
                      backgroundColor: "#f9e8ef",
                      color: "#730024",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* =================================================
                    CARD HEADING
                ================================================== */}

                <h3
                  className="
                    mb-3
                    font-['Plus_Jakarta_Sans']
                    text-[15px]
                    font-bold
                    leading-[1.4]
                    text-[#1c1c1c]
                    sm:text-[16px]
                    md:text-[17px]
                  "
                >
                  {step.title}
                </h3>

                {/* =================================================
                    CARD DESCRIPTION
                ================================================== */}

                <p
                  className="
                    mb-6
                    flex-1
                    font-['Inter']
                    text-[11.5px]
                    leading-[1.7]
                    text-neutral-500
                    sm:text-[12px]
                    md:text-[13px]
                  "
                >
                  {step.description}
                </p>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================== */}

                <div
                  className="h-px w-full"
                  style={{
                    background:
                      "linear-gradient(to right, #730024, transparent)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}