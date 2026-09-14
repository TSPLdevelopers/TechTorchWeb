import React from "react";

const cards = [
  {
    tags: ["UX FOCUS", "CYBERSECURITY"],
    title: "Security Shouldn't Be an Afterthought",
    description:
      "Security is most effective when it is considered from the beginning. Build protection into your applications, systems and everyday business processes.",
    link: "Explore Cybersecurity",
  },
  {
    tags: ["SECURITY", "THREAT PROTECTION"],
    title: "Stay Ahead of Emerging Threats",
    description:
      "The threat landscape keeps changing. A proactive approach can help organizations identify weakness, improve visibility and respond to risks with greater confidence.",
    link: "Explore Threat Protection",
  },
  {
    tags: ["DATA", "INFORMATION SECURITY"],
    title: "Protect What Your Business Depends On",
    description:
      "Your business data carries real value. The right security controls help protect sensitive information while keeping access practical for the people who need it.",
    link: "Protect Your Data",
  },
  {
    tags: ["RESILIENCE", "BUSINESS CONTINUITY"],
    title: "Keep Your Business Moving",
    description:
      "Security is also about resilience. Prepare your organization to respond to incidents, reduce disruption and recover with greater confidence.",
    link: "Build Cyber Resilience",
  },
];

export default function WhatsNextSection() {
  return (
    <section className="w-full bg-[#FAF6F1] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-slate-500">
          EXPLORE CAPABILITIES
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          WHAT'S NEXT
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col justify-between rounded-md border border-slate-200 bg-white p-5"
            >
              <div>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[9px] font-semibold tracking-wide text-fuchsia-900">
                  {c.tags.map((tag, i) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < c.tags.length - 1 && (
                        <span className="text-slate-300">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <h3 className="mt-3 text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {c.description}
                </p>
              </div>

              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-fuchsia-900 hover:text-fuchsia-700"
              >
                {c.link}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}