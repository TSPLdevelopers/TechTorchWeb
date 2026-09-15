import React from "react";
import {
  TrendingUp,
  Share2,
  Lightbulb,
  BarChart3,
  Maximize2,
  Link2,
  Zap,
  MessageSquare,
} from "lucide-react";

const cards = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Scale With Confidence",
    description:
      "As your requirements change, your technology should be able to change with them.",
    tag: "SCALABILITY",
    tagIcon: Maximize2,
  },
  {
    number: "02",
    icon: Share2,
    title: "Connect Your Business",
    description:
      "Bring important processes, information, teams, and systems closer together.",
    tag: "INTEGRATION",
    tagIcon: Link2,
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Work Smarter",
    description:
      "Reduce repetitive work and give your teams tools that make everyday operations easier.",
    tag: "EFFICIENCY",
    tagIcon: Zap,
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Make Better Decisions",
    description:
      "Bring business information together so leaders can see what is happening and make more informed decisions.",
    tag: "INTELLIGENCE",
    tagIcon: MessageSquare,
  },
];

export default function ContinuityArchitectureSection() {
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

        {/* ================= TOP LABEL ================= */}
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
          CONTINUITY ARCHITECTURE
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
            text-slate-900
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
          Your Business Doesn't Stand Still. Neither Should Your Technology.
        </h1>

        {/* ================= DESCRIPTION 01 ================= */}
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
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Every stage of growth brings something new. More customers create
          more relationships to manage. More employees create more processes
          to coordinate. More operations create more data to understand. And
          more opportunities create more decisions to make.
        </p>

        {/* ================= DESCRIPTION 02 ================= */}
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
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Your technology should make this journey easier. It should help
          your teams spend less time dealing with disconnected systems and
          more time focusing on the work that actually moves the business
          forward.
        </p>

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
          {cards.map((c) => {
            const Icon = c.icon;
            const TagIcon = c.tagIcon;

            return (
              <div
                key={c.number}
                className="
                  flex
                  min-w-0
                  flex-col
                  justify-between
                  border-l-4
                  border-[#6B1E3F]
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
                {/* CARD CONTENT */}
                <div>
                  {/* NUMBER + ICON */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="
                        text-[28px]
                        font-bold
                        leading-none
                        text-slate-300
                        sm:text-[30px]
                        md:text-[32px]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {c.number}
                    </span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-rose-100
                        text-[#6B1E3F]
                        sm:h-10
                        sm:w-10
                      "
                    >
                      <Icon size={16} />
                    </span>
                  </div>

                  {/* CARD TITLE */}
                  <h3
                    className="
                      mt-4
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
                    {c.title}
                  </h3>

                  {/* CARD DESCRIPTION */}
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
                    {c.description}
                  </p>
                </div>

                {/* CARD FOOTER */}
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span
                    className="
                      text-[9px]
                      font-semibold
                      tracking-[0.08em]
                      text-[#6B1E3F]
                      sm:text-[10px]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {c.tag}
                  </span>

                  <TagIcon
                    size={14}
                    className="flex-shrink-0 text-slate-400"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* =======================================================
            UNIFIED STANDARD
            SAME AS YOUR ORIGINAL VERSION
        ======================================================= */}
        <div
          className="
            mt-6
            flex
            items-start
            gap-4
            rounded-md
            bg-slate-100
            p-5
          "
        >
          <span
            className="
              mt-0.5
              h-8
              w-8
              flex-shrink-0
              rounded-md
              bg-[#6B1E3F]
            "
          />

          <p
            className="
              text-sm
              leading-relaxed
              text-slate-700
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span
              className="font-semibold text-slate-900"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              The Unified Standard:
            </span>{" "}
            TechTorch's ERP approach, for example, focuses on centralized
            data, scalability, customization, automation, reporting, and
            secure business operations.
          </p>
        </div>

      </div>
    </section>
  );
}