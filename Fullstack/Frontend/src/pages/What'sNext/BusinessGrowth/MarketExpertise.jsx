import React from "react";
import {
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Cpu,
  HardHat,
  Wifi,
  Zap,
  Truck,
  Package,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Technology for financial processes, information, and business operations.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital platforms that support institutions, students, teachers, and administrators.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Technology designed to support healthcare operations and patient-focused services.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Solutions for online stores, customer experiences, payments, and digital growth.",
  },
  {
    icon: Cpu,
    title: "Information Technology",
    description:
      "Software and infrastructure solutions for technology-driven organizations.",
  },
  {
    icon: HardHat,
    title: "Manufacturing",
    description:
      "Digital tools to support operational efficiency and business processes.",
  },
  {
    icon: Wifi,
    title: "Telecommunications",
    description:
      "Technology solutions designed for connected and evolving business environments.",
  },
  {
    icon: Zap,
    title: "Energy",
    description:
      "Digital solutions supporting operational and organizational requirements.",
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "Technology designed around complex operational and management needs.",
  },
  {
    icon: Package,
    title: "FMCG",
    description:
      "Solutions that help manage fast-moving business operations and customer-facing processes.",
  },
];

export default function MarketExpertiseSection() {
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
          MARKET EXPERTISE
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
          Technology That Understands Different Industries
        </h1>

        {/* ================= SUBHEADING ================= */}

        <p
          className="
            mt-4
            max-w-2xl
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
          Technology works best when it understands the environment it's
          being used in. TechTorch works across a variety of industries,
          including:
        </p>

        {/* ================= INDUSTRY CARDS ================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-4
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
          "
        >
          {industries.map((ind) => {
            const Icon = ind.icon;

            return (
              <div
                key={ind.title}
                className="
                  group
                  w-full
                  rounded-md
                  bg-slate-50
                  p-5
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:bg-[#fdf2f8]
                  hover:shadow-md
                  sm:p-6
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
                    rounded-md
                    bg-rose-100
                    text-[#6B1E3F]
                    transition-all
                    duration-500
                    ease-out
                    group-hover:scale-110
                    group-hover:rotate-6
                    group-hover:bg-[#6B1E3F]
                    group-hover:text-white
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={2}
                    className="
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:-rotate-6
                      group-hover:scale-110
                    "
                  />
                </span>

                {/* ================= CARD TITLE ================= */}

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
                  {ind.title}
                </h3>

                {/* ================= CARD DESCRIPTION ================= */}

                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-[1.7]
                    text-slate-500
                    sm:text-[13px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}