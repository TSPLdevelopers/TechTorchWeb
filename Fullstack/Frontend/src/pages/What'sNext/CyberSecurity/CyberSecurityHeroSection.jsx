import React from "react";

export default function CyberSecurityHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('/Card4hero.png')",
        }}
      />
      {/* Dark overlay for overall contrast */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Maroon gradient from left for text legibility, echoing the reference image */}
      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/95 via-fuchsia-950/60 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-20 sm:px-10 sm:py-24">
        <span className="inline-flex w-fit items-center rounded-full bg-fuchsia-800 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-white">
          CYBER SECURITY
        </span>

        <h1 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
          Security Built Into Your Business
        </h1>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
          Cyber threats can affect more than your technology. They can
          disrupt operations, expose sensitive information and impact the
          trust your customers place in your business.
        </p>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
          TechTorch helps organizations strengthen their security posture
          with practical cybersecurity solutions designed around their
          systems, data, people and business requirements.
        </p>

        <button
          type="button"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-fuchsia-800 px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-fuchsia-700 sm:text-sm"
        >
          Secure Your Business
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </section>
  );
}