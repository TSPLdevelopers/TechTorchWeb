import React from "react";

const tenets = [
  {
    title: "Understand the Environment",
    description:
      "We begin by understanding your systems, applications, users and business requirements.",
  },
  {
    title: "Focus on Risk",
    description:
      "Security decisions are prioritized around the areas that can have the greatest impact on your organization.",
  },
  {
    title: "Build for Resilience",
    description:
      "We consider not only prevention, but also detection, response and recovery.",
  },
  {
    title: "Keep Security Practical",
    description:
      "Security controls should protect the business without creating unnecessary complexity for the people using them.",
  },
  {
    title: "Evolve With the Business",
    description:
      "As your technology and business requirements change, your security approach needs to change with them.",
  },
];

export default function BusinessFocusedApproachSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#FAF6F1]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="w-full">
          {/* Section Label */}
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.15em]
              text-fuchsia-900
              sm:text-[10px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            WHY TECHTORCH
          </span>

          {/* Main Heading */}
          <h1
            className="
              mt-3
              w-full
              max-w-[350px]
              text-[22px]
              font-bold
              leading-[1.3]
              text-slate-900
              sm:max-w-xl
              sm:text-[25px]
              md:max-w-2xl
              md:text-[28px]
              lg:max-w-3xl
              lg:text-[30px]
              xl:text-[32px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            A Business-Focused Approach to Cybersecurity
          </h1>

          {/* Subheading */}
          <p
            className="
              mt-4
              max-w-[340px]
              text-[13px]
              leading-[1.7]
              text-slate-500
              sm:max-w-xl
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Our approach focuses on understanding the business first and
            building security around its people, systems, risks and goals.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-5
            lg:mt-12
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {tenets.map((t, index) => (
            <div
              key={t.title}
              className="
                group
                w-full
                min-w-0
                rounded-lg
                border
                border-slate-200
                bg-white
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-fuchsia-900/30
                hover:shadow-md
                sm:p-6
                lg:p-6
              "
            >
              {/* Card Number */}
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[22px]
                    font-bold
                    leading-none
                    text-slate-200
                    sm:text-[24px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Top Line */}
                <span className="h-0.5 w-8 bg-fuchsia-900 transition-all duration-300 group-hover:w-12" />
              </div>

              {/* Card Title */}
              <h3
                className="
                  mt-5
                  text-[15px]
                  font-semibold
                  leading-[1.4]
                  text-slate-900
                  sm:text-[16px]
                  md:text-[17px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {t.title}
              </h3>

              {/* Card Description */}
              <p
                className="
                  mt-2
                  text-[13px]
                  leading-[1.7]
                  text-slate-500
                  sm:text-[14px]
                  sm:leading-[1.75]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}