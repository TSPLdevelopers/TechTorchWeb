import React from "react";
import { TrendingUp } from "lucide-react";

export default function GrowWithBusinessSection() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-white
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
      {/* ================= MAIN CONTAINER ================= */}

      <div className="mx-auto w-full max-w-7xl">

        {/* ================= TOP TAGS ================= */}

        <span
          className="
            inline-flex
            flex-wrap
            items-center
            gap-1.5
            rounded-full
            bg-[#FBDCEA]
            px-3
            py-1
            text-[9px]
            font-semibold
            tracking-[0.1em]
            text-[#7A1443]
            sm:text-[10px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#7A1443]" />

          TECHNOLOGY

          <span className="h-1.5 w-1.5 rounded-full bg-[#7A1443]" />

          GROWTH

          <span className="h-1.5 w-1.5 rounded-full bg-[#7A1443]" />

          POSSIBILITY
        </span>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            mt-7
            grid
            w-full
            grid-cols-1
            gap-8
            sm:mt-9
            sm:gap-10
            md:gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-14
            xl:gap-16
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              w-full
              min-w-0
              lg:pl-8
              xl:pl-12
            "
          >
            {/* MAIN HEADING */}

            <h1
              className="
                w-full
                max-w-[500px]
                text-[23px]
                font-bold
                leading-[1.3]
                text-[#6B1E3F]
                sm:text-[27px]
                md:text-[30px]
                lg:text-[34px]
                xl:text-[38px]
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Technology Should Grow With Your Business
            </h1>

            {/* SUBHEADING */}

            <p
              className="
                mt-5
                w-full
                max-w-xl
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
              Your business is growing. Your technology should grow with it.
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4
                w-full
                max-w-xl
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
              As your business evolves, so do your people, processes,
              customers, and challenges. The right technology helps you stay
              connected, work more efficiently, and make better
              decisions—without slowing down your next step.
            </p>

            {/* INFO BOX */}

            <div
              className="
                mt-6
                w-full
                max-w-xl
                rounded-md
                bg-slate-50
                px-4
                py-3
                sm:mt-7
                sm:px-5
                sm:py-4
                md:px-6
              "
            >
              <p
                className="
                  text-[13px]
                  leading-[1.7]
                  text-slate-600
                  sm:text-[14px]
                  md:text-[15px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                TechTorch Solutions builds digital solutions that help
                businesses move forward with confidence.
              </p>
            </div>

            {/* BUTTON */}

            <button
              type="button"
              className="
                mt-6
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#5C1533]
                px-5
                py-3
                text-[11px]
                font-semibold
                tracking-wide
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#4A1029]
                active:translate-y-0
                sm:mt-7
                sm:px-6
                sm:text-xs
                md:text-sm
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              TALK TO OUR EXPERTS

              <span aria-hidden="true">
                &rarr;
              </span>
            </button>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              w-full
              min-w-0
              lg:ml-auto
              lg:max-w-[700px]
              xl:max-w-[760px]
            "
          >
            {/* IMAGE WRAPPER */}

            <div
              className="
                relative
                w-full
                overflow-hidden
                rounded-xl
                bg-slate-100
                shadow-sm
                sm:rounded-2xl
              "
            >
              {/* MAIN IMAGE */}

              <img
                src="/DeploymentMethodology.png"
                alt="Executive briefing presentation"
                loading="lazy"
                className="
                  block
                  h-[300px]
                  w-full
                  object-cover
                  object-center
                  sm:h-[340px]
                  md:h-[380px]
                  lg:h-[400px]
                  xl:h-[430px]
                "
              />

              {/* DARK BOTTOM OVERLAY */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  bg-gradient-to-t
                  from-[#5C1533]/90
                  via-[#5C1533]/35
                  to-transparent
                  sm:h-28
                "
              />

              {/* ================= FLOATING WHITE CARD ================= */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  rounded-xl
                  bg-white
                  px-4
                  py-4
                  shadow-lg
                  sm:bottom-5
                  sm:left-6
                  sm:right-6
                  sm:px-5
                  sm:py-4
                  md:left-7
                  md:right-7
                  md:px-6
                  md:py-5
                  lg:bottom-6
                  lg:left-8
                  lg:right-8
                  xl:left-10
                  xl:right-10
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-4
                  "
                >
                  {/* CARD TEXT */}

                  <div className="min-w-0">
                    <span
                      className="
                        block
                        text-[9px]
                        font-semibold
                        tracking-[0.1em]
                        text-[#7A1443]
                        sm:text-[10px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      STRATEGIC ARCHITECTURE
                    </span>

                    <p
                      className="
                        mt-1
                        text-[17px]
                        font-bold
                        leading-[1.3]
                        text-slate-900
                        sm:text-[19px]
                        md:text-[21px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Executive Briefing Q4
                    </p>
                  </div>

                  {/* ACTIVE METRIC */}

                  <span
                    className="
                      inline-flex
                      w-fit
                      shrink-0
                      items-center
                      gap-1.5
                      rounded-full
                      bg-[#B8F5B0]
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      text-[#225C28]
                      sm:px-3.5
                      sm:py-2
                      sm:text-[11px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <TrendingUp
                      size={13}
                      strokeWidth={2}
                    />

                    Active Metric
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}