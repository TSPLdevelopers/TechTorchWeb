import React from "react";

export default function TechHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* Background image — swap the URL below for your own asset/CDN path if you have one */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Modernexecutive.png')",
        }}
      />
      {/* dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center sm:py-24">
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Technology Is Changing How Business Gets Done
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Technology is becoming an essential part of how businesses operate,
          make decisions and respond to changing needs. Artificial
          Intelligence, Cloud Infrastructure, Cybersecurity and modern
          Software Engineering are creating new opportunities for
          organizations to improve the way they work.
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-fuchsia-800 px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-fuchsia-700 sm:text-sm"
        >
          EXPLORE OUR TECHNOLOGY CAPABILITIES
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </section>
  );
}