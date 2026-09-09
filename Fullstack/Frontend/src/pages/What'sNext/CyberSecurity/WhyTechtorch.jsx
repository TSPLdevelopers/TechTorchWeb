import React from "react";

const tenets = [
  {
    label: "TENET / 01",
    title: "Understand the Environment",
    description:
      "We begin by understanding your systems, applications, users and business requirements.",
  },
  {
    label: "TENET / 02",
    title: "Focus on Risk",
    description:
      "Security decisions are prioritized around the areas that can have the greatest impact on your organization.",
  },
  {
    label: "TENET / 03",
    title: "Build for Resilience",
    description:
      "We consider not only prevention, but also detection, response and recovery.",
  },
  {
    label: "TENET / 04",
    title: "Keep Security Practical",
    description:
      "Security controls should protect the business without creating unnecessary complexity for the people using them.",
  },
  {
    label: "TENET / 05",
    title: "Evolve With the Business",
    description:
      "As your technology and business requirements change, your security approach needs to change with them.",
  },
];

export default function BusinessFocusedApproachSection() {
  return (
    <section className="w-full bg-[#FAF6F1] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-fuchsia-900">
          WHY TECHTORCH
        </span>

        <h1 className="mt-3 max-w-xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          A Business-Focused Approach to Cybersecurity
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {tenets.map((t) => (
            <div key={t.label} className="border-t-2 border-fuchsia-900 pt-4">
              <span className="text-[10px] font-semibold tracking-[0.1em] text-fuchsia-900">
                {t.label}
              </span>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}