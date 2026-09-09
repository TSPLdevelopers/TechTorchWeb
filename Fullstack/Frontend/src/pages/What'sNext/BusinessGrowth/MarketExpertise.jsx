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
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
          MARKET EXPERTISE
        </span>

        <h1 className="mt-3 max-w-xl text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl">
          Technology That Understands Different Industries
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Technology works best when it understands the environment it's
          being used in. TechTorch works across a variety of industries,
          including:
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="rounded-md bg-slate-50 p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-rose-100 text-[#6B1E3F]">
                  <Icon size={17} />
                </span>

                <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
                  {ind.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
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