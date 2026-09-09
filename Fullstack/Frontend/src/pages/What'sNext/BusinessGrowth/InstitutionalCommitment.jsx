import React from "react";
import { TrendingUp, PenSquare, Link2, Users, LifeBuoy } from "lucide-react";

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
    <section className="w-full bg-[#FAF6F1] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
          INSTITUTIONAL COMMITMENT
        </span>

        <h1 className="mt-3 max-w-xl text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl">
          Technology Should Be a Long-Term Advantage
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Choosing technology isn't just about solving today's problem.
          It's about creating a foundation that can continue to support the
          business tomorrow. TechTorch focuses on creating solutions that
          are scalable, customizable, practical, and built around real
          business requirements. Its software development services also
          emphasize secure, scalable, cost-effective solutions and ongoing
          support.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.number}
                className="rounded-md border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-slate-300">
                    {c.number}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-[#6B1E3F]">
                    <Icon size={15} />
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
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