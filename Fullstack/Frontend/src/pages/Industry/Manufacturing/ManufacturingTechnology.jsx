import React from "react";

export default function ManufacturingTechnology() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-6
        py-8
        sm:px-6
        sm:py-10
        md:px-10
        md:py-12
        lg:px-[100px]
        lg:py-14
        xl:py-16
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          overflow-hidden
          rounded-2xl
          bg-[#F3F4F6]
          sm:rounded-3xl
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-8
            p-5
            sm:gap-10
            sm:p-7
            md:p-9
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-12
            lg:p-12
            xl:grid-cols-[1.15fr_0.85fr]
            xl:gap-16
            xl:p-14
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="min-w-0">

            {/* Eyebrow */}
            <span
              className="
                block
                text-[9px]
                font-semibold
                tracking-[0.12em]
                text-[#8C1450]
                sm:text-[10px]
                md:text-[11px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              MANUFACTURING TECHNOLOGY
            </span>

            {/* Heading */}
            <h2
              className="
                mt-3
                max-w-[700px]
                text-[25px]
                font-semibold
                leading-[1.2]
                tracking-[-0.02em]
                text-[#1C1C21]
                sm:mt-4
                sm:text-[29px]
                md:text-[34px]
                lg:text-[39px]
                xl:text-[42px]
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Connect Your Business With the Right Technology
            </h2>

            {/* Subheading */}
            <p
              className="
                mt-4
                max-w-[680px]
                text-[12px]
                leading-[1.7]
                text-[#6B6E75]
                sm:mt-5
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Modern manufacturing businesses manage multiple functions,
              including inventory, finance, human resources, customer
              relationships and supply chain operations.
            </p>

            <p
              className="
                mt-3
                max-w-[680px]
                text-[12px]
                leading-[1.7]
                text-[#6B6E75]
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Bringing these functions together through connected technology
              can help organizations improve access to business information
              and create a more organized environment for everyday operations.
            </p>

            {/* Strong Text */}
            <p
              className="
                mt-4
                max-w-[700px]
                text-[12px]
                font-medium
                leading-[1.7]
                text-[#1C1C21]
                sm:mt-5
                sm:text-[13px]
                md:text-[14px]
                lg:text-[15px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              TechTorch Solutions provides ERP and Supply Chain Management
              solutions for manufacturing, supported by software engineering
              and other technology services designed around specific business
              requirements.
            </p>
          </div>

          {/* ================= RIGHT SIDE IMAGE ================= */}
          <div className="relative w-full">

            <div
              className="
                relative
                overflow-hidden
                rounded-xl
                shadow-[0_10px_30px_rgba(20,24,32,0.14)]
                sm:rounded-2xl
              "
            >
              {/* Manufacturing Image */}
              <img
                src="/manufacturingtech.png"
                alt="Manufacturing engineers monitoring plant control systems"
                className="
                  block
                  h-[260px]
                  w-full
                  object-cover
                  object-center
                  sm:h-[300px]
                  md:h-[340px]
                  lg:h-[390px]
                  xl:h-[420px]
                "
              />

              {/* Image Gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/35
                  via-black/5
                  to-transparent
                "
              />

              {/* Floating Caption */}
              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  right-3
                  rounded-lg
                  bg-white
                  p-3
                  shadow-[0_6px_18px_rgba(20,24,32,0.14)]
                  sm:bottom-4
                  sm:left-4
                  sm:right-4
                  sm:rounded-xl
                  sm:p-4
                "
              >
                <h3
                  className="
                    text-[10px]
                    font-semibold
                    leading-[1.3]
                    text-[#1C1C21]
                    sm:text-[11px]
                    md:text-[12px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Plant Control &amp; Floor Orchestration
                </h3>

                <p
                  className="
                    mt-1
                    text-[8px]
                    leading-[1.45]
                    text-[#6B6E75]
                    sm:text-[9px]
                    md:text-[10px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Unified multi-site oversight with synchronous inventory data
                  feed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}