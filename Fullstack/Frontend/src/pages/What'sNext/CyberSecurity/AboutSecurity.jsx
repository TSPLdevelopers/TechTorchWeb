import React from "react";

export default function ReadyForNextThreatSection() {
  return (
    <section className="w-full bg-[#0B0A14] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <span className="inline-flex w-fit items-center rounded-full bg-fuchsia-800 px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-white">
            LET'S TALK ABOUT YOUR SECURITY
          </span>

          <h1 className="mt-4 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Is Your Business Ready for the Next Threat?
          </h1>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-[15px]">
            Your technology should help your business move forward—not
            become a source of uncertainty.
          </p>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-[15px]">
            Whether you're reviewing your current security posture,
            protecting a new digital environment or looking to strengthen
            your organization's overall resilience, TechTorch can help you
            take a more structured approach to cybersecurity.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-fuchsia-800 px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-fuchsia-700 sm:text-sm"
          >
            Talk to Our Experts
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Right column — image with caption bar */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/Senior cybersecurity advisors consulting around a digital holographic security display.png"
            alt="Executive cyber advisory session"
            className="h-56 w-full object-cover sm:h-72"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/60 px-4 py-2">
            <span className="text-[10px] tracking-wide text-slate-200">
              Executive Cyber Advisory Session
            </span>
            <span className="text-[10px] tracking-wide text-rose-300">
              SEC_CONSULT_ACTIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}