import React from "react";

export default function GrowthPerspectiveSection() {
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
      <div
        className="
          mx-auto
          w-full
          max-w-3xl
          sm:max-w-4xl
          lg:max-w-5xl
          xl:max-w-6xl
        "
      >
        {/* ================= SECTION LABEL ================= */}

        <div className="flex items-center gap-3">
          <span
            className="
              text-[9px]
              font-semibold
              tracking-[0.15em]
              text-[#6B1E3F]
              sm:text-[10px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            PERSPECTIVE
          </span>

          <span className="h-px w-10 bg-slate-300 sm:w-[60px]" />
        </div>

        {/* ================= MAIN HEADING ================= */}

        <h1
          className="
            mt-4
            w-full
            text-[22px]
            font-bold
            leading-[1.3]
            text-[#6B1E3F]
            sm:text-[26px]
            md:text-[30px]
            lg:text-[34px]
            xl:text-[36px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Growth Is Not Just About Getting Bigger
        </h1>

        {/* ================= SUBHEADING ================= */}

        <p
          className="
            mt-5
            w-full
            text-[14px]
            font-semibold
            leading-[1.7]
            text-slate-900
            sm:mt-6
            sm:text-[15px]
            md:text-[16px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Growth changes the way a business works.
        </p>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            mt-4
            w-full
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          What starts as a simple process can become a complex operation.
          A small team becomes a larger workforce. Customer relationships
          become harder to manage. Data starts coming from different
          places. And suddenly, the tools that once helped your business
          can begin holding it back.
        </p>

        {/* ================= QUOTE BOX ================= */}

        <div
          className="
            mt-6
            w-full
            rounded-md
            border-l-4
            border-[#6B1E3F]
            bg-white
            px-4
            py-4
            shadow-sm
            sm:mt-7
            sm:px-5
            sm:py-5
            md:px-6
            md:py-6
          "
        >
          <p
            className="
              text-[13px]
              font-semibold
              italic
              leading-[1.75]
              text-slate-900
              sm:text-[14px]
              md:text-[15px]
              md:leading-[1.8]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            "This is where technology needs to do more. It needs to connect
            people, simplify processes, make information easier to access,
            and give businesses the flexibility to respond when things
            change."
          </p>
        </div>

        {/* ================= FINAL CONTENT ================= */}

        <p
          className="
            mt-6
            w-full
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:mt-7
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          At TechTorch Solutions, we believe technology should be built
          around the needs of a business—not the other way around. From
          enterprise resource planning and customer relationship
          management to AI, cloud infrastructure, cybersecurity, software
          engineering, and business solutions, TechTorch brings together
          technology capabilities designed to support businesses at
          different stages of growth. Because the best technology isn't
          simply built for today. It's built with tomorrow in mind.
        </p>
      </div>
    </section>
  );
}