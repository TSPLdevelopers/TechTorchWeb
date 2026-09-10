import React from "react";
import { Search, LayoutDashboard, Code2, RefreshCw } from "lucide-react";

const steps = [
  {
    step: "STEP 01",
    icon: Search,
    title: "Understand",
    description:
      "We begin with your business requirements, goals, users, and challenges.",
  },
  {
    step: "STEP 02",
    icon: LayoutDashboard,
    title: "Design",
    description:
      "Solutions are shaped around the way your teams and processes actually work.",
  },
  {
    step: "STEP 03",
    icon: Code2,
    title: "Build",
    description:
      "Technology is developed with scalability, usability, security, and performance in mind.",
  },
  {
    step: "STEP 04",
    icon: RefreshCw,
    title: "Improve",
    description:
      "Technology continues to evolve through support, maintenance, updates, and improvements.",
  },
];

export default function MethodologySection() {
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

        {/* ================= LABEL ================= */}
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.15em]
            text-[#6B1E3F]
            sm:text-[10px]
            md:text-[11px]
          "
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          METHODOLOGY
        </span>

        {/* ================= MAIN HEADING ================= */}
        <h1
          className="
            mt-3
            w-full
            max-w-[360px]
            text-[22px]
            font-bold
            leading-[1.3]
            text-[#6B1E3F]
            sm:max-w-2xl
            sm:text-[26px]
            md:text-[29px]
            lg:max-w-3xl
            lg:text-[32px]
            xl:text-[34px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Technology Starts With Understanding Your Business
        </h1>

        {/* ================= INTRO PARAGRAPH 01 ================= */}
        <p
          className="
            mt-5
            w-full
            max-w-4xl
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:mt-6
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          There is no universal solution for every business. A healthcare
          organization doesn't work like a manufacturer. An e-commerce
          company doesn't have the same needs as an educational
          institution. And a growing business may need something
          completely different from an established enterprise.
        </p>

        {/* ================= INTRO PARAGRAPH 02 ================= */}
        <p
          className="
            mt-4
            w-full
            max-w-4xl
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          That's why technology should begin with understanding. What are
          you trying to achieve? Where are you facing challenges? What
          needs to work better? And where do you want your business to go
          next?
        </p>

        {/* ================= HIGHLIGHT TEXT ================= */}
        <p
          className="
            mt-4
            w-full
            max-w-4xl
            text-[13px]
            font-semibold
            leading-[1.75]
            text-slate-900
            sm:text-[14px]
            md:text-[15px]
            md:leading-[1.8]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          TechTorch takes a business-focused approach to technology,
          developing solutions around specific requirements rather than
          forcing businesses into a fixed model.
        </p>

        {/* ================= STEPS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-5
            md:mt-12
            md:gap-6
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {steps.map((s) => {
            const Icon = s.icon;

            return (
              <div
                key={s.step}
                className="
                  w-full
                  min-w-0
                  rounded-md
                  border
                  border-slate-200
                  bg-white
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
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    bg-rose-100
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="text-[#6B1E3F]"
                  />
                </span>

                {/* ================= STEP LABEL ================= */}
                <span
                  className="
                    mt-5
                    block
                    text-[9px]
                    font-semibold
                    tracking-[0.08em]
                    text-slate-400
                    sm:text-[10px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {s.step}
                </span>

                {/* ================= CARD TITLE ================= */}
                <h3
                  className="
                    mt-1
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
                  {s.title}
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
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}