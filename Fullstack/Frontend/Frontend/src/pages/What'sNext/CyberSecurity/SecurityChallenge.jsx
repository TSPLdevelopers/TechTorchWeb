import React from "react";

const vectors = [
  "Business applications and software",
  "Networks and connected systems",
  "Cloud environments",
  "Employee and user access",
  "Sensitive business information",
  "External integrations",
  "Security monitoring and response",
  "Business continuity",
];

export default function DigitalEnvironmentSection() {
  return (
    <section className="w-full bg-[#6B0F41] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left column */}
        <div>
          <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white">
            THE SECURITY CHALLENGE
          </span>

          <h1 className="mt-4 text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Your Digital Environment Is Bigger Than Your Network
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-rose-100/90 sm:text-[15px]">
            Modern businesses rarely operate from a single system. Employees
            work across devices. Applications communicate through APIs.
            Business data moves between departments and platforms. Cloud
            services support critical workloads, while customers and
            partners interact with digital systems from outside the
            organization.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-rose-100/90 sm:text-[15px]">
            This creates a wider environment that needs to be understood
            and protected.
          </p>

          <div className="relative mt-8 overflow-hidden rounded-lg">
            <img
              src="/Secure Software Architecture  Engineering.png"
              alt="Developer working on code across multiple monitors"
              className="h-56 w-full object-cover sm:h-64"
            />
            <div className="bg-black/70 px-4 py-3">
              <p className="text-xs leading-relaxed text-slate-200">
                Rigorous code architecture, authenticated endpoints, and
                deep software-level controls form the baseline of
                organizational defense.
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="rounded-lg bg-white/10 p-6 sm:p-7">
          <h2 className="text-base font-semibold text-white sm:text-lg">
            Key Environmental Vectors
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {vectors.map((v) => (
              <div
                key={v}
                className="flex items-start gap-2 rounded-md bg-white/10 px-3 py-3 text-xs leading-snug text-white sm:text-[13px]"
              >
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-300" />
                {v}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-md bg-white/10 px-4 py-3">
            <p className="text-xs leading-relaxed text-rose-100/90 sm:text-[13px]">
              The right approach depends on the organization, its technology
              landscape and the risks it needs to manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}