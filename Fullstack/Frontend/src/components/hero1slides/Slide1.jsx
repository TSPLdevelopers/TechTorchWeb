import React from "react";
import { Search, ArrowLeft } from "lucide-react";

export default function TechHero() {
  return (
    <div className="relative w-full min-h-[600px] overflow-hidden bg-[#0a1128] font-sans">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          // Place hero-bg.png next to this component, or update the path
          // to wherever you host it (e.g. "/images/hero-bg.png" for a
          // public folder, or an imported asset in a bundler setup).
          backgroundImage: "url('./slide1.1png')",
        }}
      />

      {/* Dark overlay so the white text stays readable over the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,10,20,0.85) 0%, rgba(10,10,20,0.55) 42%, rgba(10,10,20,0.15) 65%, rgba(10,10,20,0) 100%)",
        }}
      />

      {/* Top nav icons */}
      <div className="absolute top-6 left-6 flex flex-col gap-6 text-white/50 z-20">
        <Search size={20} strokeWidth={1.75} />
        <ArrowLeft size={20} strokeWidth={1.75} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full min-h-[600px] px-6 sm:px-12 md:px-16 max-w-2xl">
        <h1 className="text-white font-extrabold leading-[1.08] text-[2.1rem] sm:text-[2.6rem] md:text-[3rem] tracking-tight">
          Technology Solutions Built
          <br />
          Around Your Business
        </h1>

        <p className="mt-6 text-white/85 text-base sm:text-lg leading-relaxed max-w-md">
          Every business has its own challenges, priorities and goals. We
          bring together technology, expertise and practical thinking to
          create solutions that fit the way your business works.
        </p>

        <div className="mt-9">
          <button className="border border-white/70 text-white text-sm font-medium tracking-wide px-6 py-3.5 hover:bg-white hover:text-[#0a1128] transition-colors duration-300">
            Talk to Our Experts
          </button>
        </div>
      </div>
    </div>
  );
}