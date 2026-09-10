import React from "react";
import {
  TrendingUp,
  PenSquare,
  Link2,
  Users,
  LifeBuoy,
} from "lucide-react";

const cards = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Scalable",
    description: "Technology that can grow as your requirements grow.",
  },
  {
    number: "02",
    icon: PenSquare,
    title: "Customizable",
    description: "Solutions that can adapt to your business processes.",
  },
  {
    number: "03",
    icon: Link2,
    title: "Connected",
    description:
      "Technology that helps bring different business functions together.",
  },
  {
    number: "04",
    icon: Users,
    title: "Human-Centered",
    description:
      "Tools designed to be usable by the people who rely on them every day.",
  },
  {
    number: "05",
    icon: LifeBuoy,
    title: "Supported",
    description:
      "A technology relationship that continues beyond implementation.",
  },
];

export default function InstitutionalCommitmentSection() {
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
        md:py-16
        lg:px-10
        lg:py-20
        xl:px-12
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ================= LABEL ================= */}

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
          INSTITUTIONAL COMMITMENT
        </span>

        {/* ================= MAIN HEADING ================= */}

        <h1
          className="
            mt-3
            max-w-xl
            text-[23px]
            font-semibold
            leading-[1.3]
            text-[#6B1E3F]
            sm:text-[26px]
            md:text-[30px]
            lg:text-3xl
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Technology Should Be a Long-Term Advantage
        </h1>

        {/* ================= SUBHEADING ================= */}

        <p
          className="
            mt-4
            max-w-3xl
            text-[13px]
            leading-[1.75]
            text-slate-600
            sm:text-[14px]
            sm:leading-relaxed
            md:text-[15px]
          "
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Choosing technology isn't just about solving today's problem.
          It's about creating a foundation that can continue to support the
          business tomorrow. TechTorch focuses on creating solutions that
          are scalable, customizable, practical, and built around real
          business requirements. Its software development services also
          emphasize secure, scalable, cost-effective solutions and ongoing
          support.
        </p>

        {/* ================= CARDS ================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {cards.map((c) => {
            const Icon = c.icon;

            return (
              <div
                key={c.number}
                className="
                  w-full
                  rounded-md
                  border
                  border-slate-200
                  bg-white
                  p-5
                  sm:p-6
                "
              >
                {/* NUMBER + ICON */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-2xl
                      font-bold
                      text-slate-300
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
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-rose-100
                      text-[#6B1E3F]
                    "
                  >
                    <Icon size={15} strokeWidth={2} />
                  </span>
                </div>

                {/* CARD TITLE */}

                <h3
                  className="
                    mt-4
                    text-[14px]
                    font-semibold
                    leading-snug
                    text-slate-900
                    sm:text-[15px]
                    md:text-base
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
                    text-[12.5px]
                    leading-[1.7]
                    text-slate-500
                    sm:text-[13px]
                    md:text-sm
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {c.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}