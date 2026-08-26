import React from "react";

export default function ErpHero() {
  return (
    <section className="relative w-full min-h-[420px] overflow-hidden bg-[#0c140c] font-sans">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Place erp-hero-bg.png next to this component, or update the
          // path to wherever you host it (public folder / CDN / import).
          backgroundImage: "url('./slide21.png')",
        }}
      />

      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,10,6,0.55) 0%, rgba(6,10,6,0.35) 40%, rgba(6,10,6,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-3xl mx-auto">
        <p className="text-white/90 text-xs sm:text-sm font-bold tracking-[0.15em] mb-4">
          ENTERPRISE RESOURCE PLANNING
        </p>
        <h1 className="text-white font-extrabold leading-tight text-[1.7rem] sm:text-[2.1rem] md:text-[2.4rem] mb-5">
          Connect Your Business. Work Better Together.
        </h1>
        <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
          Bring your finance, operations, people, inventory and customer
          processes together in one place. With a connected ERP system, your
          teams can spend less time managing information and more time
          getting work done.
        </p>
        <button className="border border-white/70 text-white text-sm font-medium tracking-wide px-6 py-3 hover:bg-white hover:text-[#0c140c] transition-colors duration-300">
          Talk to Our Experts
        </button>
      </div>
    </section>
  );
}