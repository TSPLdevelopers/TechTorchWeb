import React from "react";

export default function TechHero() {
  return (
    <div className="relative w-full min-h-[430px] overflow-hidden bg-[#0a1128] font-['Plus Jakarta Sans']">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/slide25.png')",
        }}
      />

      

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex flex-col justify-center min-h-[560px] px-6 sm:px-12 md:px-16 max-w-2xl">

        <h1 className="text-white font-semibold leading-[1.2] text-[2.1rem] sm:text-[2.6rem] md:text-[2.8rem] tracking-tight translate-y-8">
          Ready to Bring Your 
          <br />
          Business Together?
        </h1>

        <p className="mt-24 text-white/85 text-base sm:text-lg leading-relaxed max-w-md">
          Let's look at how the right ERP approach 
          can simplify your processes, improve 
          visibility  and help your teams work 
          better together.
        </p>

        <div className="mt-24">
          <button className="border border-white/70 text-white text-sm font-medium tracking-wide px-3 py-1.5 hover:bg-white hover:text-[#0a1128] transition-colors duration-300">
            Talk to Our ERP Experts
          </button>
        </div>

      </div>
    </div>
  );
}