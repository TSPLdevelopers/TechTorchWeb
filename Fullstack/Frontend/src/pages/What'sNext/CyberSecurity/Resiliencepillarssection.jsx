import React from "react";

const considerations = [
  "Who can access the information?",
  "What are they allowed to do with it?",
  "Where is the information stored?",
  "How is it transformed?",
  "What happens if access is compromised?",
];

export default function ResiliencePillarsSection() {
  return (
    <section className="w-full bg-[#0B0A12] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#730042] px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-rose-100">
            CORE RESILIENCE PILLARS
          </span>

          <h1 className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Data Protection &amp; Business Continuity
          </h1>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            Protecting mission-critical assets while ensuring operational
            endurance under any threat condition.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Left card — Data & Access */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-7">
            <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-300">
              DATA &amp; ACCESS
            </span>

            <h2 className="mt-4 text-xl font-semibold leading-snug text-white">
              Protecting the Information That Matters
            </h2>

            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-200">
              Not all information carries the same level of risk.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Customer records, financial information, employee data,
              intellectual property and operational information may
              require different levels of protection and access.
            </p>

            <div className="mt-6 rounded-md bg-black/30 p-5">
              <p className="text-xs font-semibold tracking-wide text-slate-200">
                A WELL-DESIGNED SECURITY APPROACH CONSIDERS:
              </p>

              <ul className="mt-3 flex flex-col gap-2">
                {considerations.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              By looking at security through these questions, organizations
              can create more controlled and accountable access to critical
              information.
            </p>
          </div>

          {/* Right card — Business Continuity */}
          <div className="rounded-lg border border-fuchsia-900/40 bg-gradient-to-b from-fuchsia-950 to-[#2a0a1c] p-7">
            <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-rose-100">
              BUSINESS CONTINUITY
            </span>

            <h2 className="mt-4 text-xl font-semibold leading-snug text-white">
              Security Is Also About Keeping Business Moving
            </h2>

            <p className="mt-4 text-sm font-medium leading-relaxed text-rose-50">
              A security incident can become a business problem very
              quickly.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-rose-100/80">
              Systems may become unavailable. Teams may lose access to
              information. Customers may be affected. Operations may slow
              down while the organization works to understand and contain
              the issue.
            </p>

            <p className="mt-4 text-sm font-medium leading-relaxed text-rose-50">
              That's why cybersecurity should work alongside business
              continuity.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-rose-100/80">
              The goal is not only to reduce the likelihood of an incident,
              but also to prepare the organization to respond and recover
              when unexpected situations occur.
            </p>

            <div className="mt-6 rounded-md bg-black/25 p-5">
              <p className="text-sm font-semibold leading-relaxed text-white">
                Resilience gives your business a path forward when
                technology doesn't go according to plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}