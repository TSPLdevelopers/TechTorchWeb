import React from "react";

const IMAGE_URL = "/Modern.png";

export default function TechnologySection() {
  return (
    <section className="w-full bg-[#7a0e42] px-6 py-16 md:py-20 flex flex-col items-center text-center">

      {/* Heading - Plus Jakarta Sans */}
      <h2
        className="text-white text-2xl md:text-3xl font-bold leading-snug max-w-4xl"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        <span className="block">
          Businesses don't always need more technology.
        </span>

        <span className="block">
          They need technology that works better together
          
        </span>
      </h2>

      {/* Description - Inter */}
      <p
        className="mt-6 text-white/85 text-base leading-relaxed max-w-xl"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        The proliferation of specialized software has led to a fragmented
        enterprise. The modern challenge is no longer acquisition, but
        orchestration. Integrating disparate systems into a unified
        operational nervous system is the ultimate competitive advantage.
      </p>

      <div
        className="mt-10 w-full max-w-3xl h-80 md:h-96 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGE_URL})` }}
      />
    </section>
  );
}