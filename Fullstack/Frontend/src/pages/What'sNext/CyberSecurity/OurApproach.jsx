import React from "react";

const steps = [
  {
    number: "01",
    title: "Protect",
    description:
      "Establish appropriate security controls around systems, applications, users and data.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Identify suspicious activity and potential security issues before they become larger business problems.",
  },
  {
    number: "03",
    title: "Respond",
    description:
      "Create clear processes for dealing with security incidents and limiting their potential impact.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "Use lessons, assessments and changing threat patterns to continuously strengthen your security posture.",
  },
];

export default function ApproachSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-fuchsia-900">
          OUR APPROACH
        </span>

        <h1 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl md:text-4xl">
          Protect. Detect. Respond. Improve.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-[15px]">
          We believe cybersecurity should be an ongoing process rather than
          a one-time implementation.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.number} className="rounded-md bg-slate-50 p-6">
              <span className="text-2xl font-bold text-slate-300">
                {s.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-fuchsia-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {s.description}
              </p>
              <div className="mt-4 h-0.5 w-6 bg-fuchsia-900" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}