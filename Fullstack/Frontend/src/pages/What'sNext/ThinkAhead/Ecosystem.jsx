import React from "react";

export default function EcosystemHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background image — swap the URL below for your own asset/CDN path if you have one */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Ecosystem.png')",
        }}
      />
      {/* dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:py-24">
        <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-200 sm:text-xs">
          STRATEGIC ECOSYSTEM INTEGRATION
        </span>

        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Technology Needs to Work Together
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
          The true power of modern enterprise technology is realized when
          systems are integrated. We build resilient foundations that adapt
          to new tools, ensuring your technology investments function as a
          cohesive, future-ready ecosystem.
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2 bg-fuchsia-900 px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-fuchsia-800 sm:text-sm"
        >
          TALK TO OUR EXPERTS
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </section>
  );
}