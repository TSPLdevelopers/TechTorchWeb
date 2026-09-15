import React from "react";

const outcomes = [
  {
    number: "01",
    code: "EXPOSURE_CTRL",
    title: "Reduce Exposure",
    description:
      "Identify weaknesses and address potential security gaps before they become larger problems.",
    tagLeft: "RISK MINIMIZATION",
    tagRight: "PROACTIVE",
  },
  {
    number: "02",
    code: "DATA_SHIELD",
    title: "Protect Sensitive Information",
    description:
      "Apply appropriate controls around important business and customer data.",
    tagLeft: "DATA SAFEGUARD",
    tagRight: "PROTECTED",
  },
  {
    number: "03",
    code: "TELEMETRY",
    title: "Improve Visibility",
    description:
      "Gain a clearer understanding of activity across your digital environment.",
    tagLeft: "SIGNAL DETECT",
    tagRight: "COMPLETE",
  },
  {
    number: "04",
    code: "ALERT_ACC",
    title: "Strengthen Response",
    description:
      "Be better prepared to identify and respond to security incidents.",
    tagLeft: "CONTAINMENT",
    tagRight: "READY",
  },
  {
    number: "05",
    code: "UPTIME_OPS",
    title: "Support Business Continuity",
    description:
      "Reduce the operational impact of security-related disruptions.",
    tagLeft: "RESILIENCE",
    tagRight: "SUSTAINED",
  },
  {
    number: "06",
    code: "TRUST_INDEX",
    title: "Build Customer Confidence",
    description:
      "Demonstrate that security and responsible handling of information are taken seriously.",
    tagLeft: "REPUTATION",
    tagRight: "VALIDATED",
  },
];

export default function SecurityOutcomesSection() {
  return (
    <section className="w-full bg-[#F4F4F7] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.15em] text-fuchsia-900">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-900" />
              SECURITY OUTCOMES
            </span>
            <h1 className="mt-3 max-w-md text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
              What Stronger Security Can Help You Achieve
            </h1>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-slate-500 sm:text-right sm:text-sm">
            Measurable operational resilience and strategic confidence
            delivered across every tier of the enterprise.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o) => (
            <div
              key={o.number}
              className="flex flex-col justify-between rounded-lg bg-white p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-semibold text-fuchsia-900">
                    {o.number}
                  </span>
                  <span className="text-[10px] font-medium tracking-wide text-slate-400">
                    {o.code}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {o.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-[10px] font-medium tracking-wide text-slate-400">
                  {o.tagLeft}
                </span>
                <span className="text-[10px] font-semibold tracking-wide text-fuchsia-900">
                  {o.tagRight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}