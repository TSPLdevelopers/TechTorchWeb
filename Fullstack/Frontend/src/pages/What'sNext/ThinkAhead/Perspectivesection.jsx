import React from "react";
import { Search, Activity, Share2, Clock } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Understand",
    description:
      "Deep dive into operational workflows to map the current state and identify genuine pain points.",
  },
  {
    icon: Activity,
    title: "Build",
    description:
      "Engineer scalable, secure architectures tailored to your specific operational requirements.",
  },
  {
    icon: Share2,
    title: "Connect",
    description:
      "Integrate disparate systems to create unified data models and seamless user experiences.",
  },
  {
    icon: Clock,
    title: "Evolve",
    description:
      "Establish continuous improvement loops to ensure technology adapts alongside the business.",
  },
];

export default function PerspectiveSection() {
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
      <div className="mx-auto w-full max-w-7xl">
        {/* ================= SECTION LABEL ================= */}
        <span
          className="
            text-[10px]
            font-semibold
            tracking-[0.14em]
            text-slate-500
            sm:text-[11px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          OUR PERSPECTIVE
        </span>

        {/* ================= HEADING + DESCRIPTION ================= */}
        <div
          className="
            mt-3
            flex
            flex-col
            gap-5
            border-b
            border-slate-200
            pb-7
            sm:mt-4
            sm:gap-6
            sm:pb-8
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-10
            lg:pb-9
          "
        >
          {/* Main Heading */}
          <h2
            className="
              w-full
              max-w-2xl
              text-[22px]
              font-bold
              leading-[1.3]
              text-slate-900
              sm:text-[25px]
              md:text-[28px]
              lg:text-[30px]
              xl:text-[32px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Technology works best when it is connected to the business.
          </h2>

          {/* Sub Heading */}
          <p
            className="
              w-full
              max-w-xl
              text-[13px]
              leading-[1.7]
              text-slate-500
              sm:text-[14px]
              md:max-w-md
              md:text-[15px]
              lg:max-w-sm
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            At TechTorch, technology capabilities cover areas critical to
            modern enterprise operations.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-9
            sm:grid-cols-2
            sm:gap-5
            md:mt-10
            md:gap-6
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                group
                w-full
                rounded-lg
                bg-slate-50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-sm
                sm:p-6
                md:p-6
                lg:p-5
                xl:p-6
              "
            >
              {/* ================= ICON ================= */}
              <div
                className="
                  mb-4
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-fuchsia-900/30
                  transition-colors
                  duration-300
                  group-hover:border-fuchsia-900/60
                  sm:mb-5
                "
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="text-fuchsia-900"
                />
              </div>

              {/* ================= CARD TITLE ================= */}
              <h3
                className="
                  text-[15px]
                  font-semibold
                  leading-[1.4]
                  text-slate-900
                  sm:text-[16px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {title}
              </h3>

              {/* ================= CARD DESCRIPTION ================= */}
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
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}