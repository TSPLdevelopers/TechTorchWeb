import React from "react";


export default function TechHero() {
  return (
    <div className="relative w-full min-h-[550px] overflow-hidden bg-[#0a1128] font-['Plus Jakarta Sans']">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slide1.1.png')",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.55) 42%, rgba(10,10,20,0.15) 65%, rgba(10,10,20,0) 100%)",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col justify-center min-h-[450px] px-6 sm:px-12 md:px-16 max-w-2xl">

        <h1 className="text-white font-semibold leading-[1.09] text-[2.1rem] sm:text-[2.6rem] md:text-[2.8rem] tracking-tight translate-y-8">
          Technology Solutions Built
          <br />
          Around Your Business
        </h1>

        <p className="mt-20 text-white/85 text-base sm:text-lg leading-relaxed max-w-md">
          Every business has its own challenges, priorities and goals. We
          bring together technology, expertise and practical thinking to
          create solutions that fit the way your business works.
        </p>

        <div className="mt-20">
          <button className="border border-white/70 text-white text-sm font-medium tracking-wide px-3 py-1.5 hover:bg-white hover:text-[#0a1128] transition-colors duration-300">
            Talk to Our Experts
          </button>
        </div>

      </div>
    </div>
  );
}

