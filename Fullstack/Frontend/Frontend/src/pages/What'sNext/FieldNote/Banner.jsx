import React from "react";

// Replace this with your own image URL
const IMAGE_URL = "Container2.png";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(40,10,24,0.88) 0%, rgba(58,14,31,0.55) 35%, rgba(58,14,31,0.15) 60%, rgba(20,8,14,0.05) 100%), url(${IMAGE_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-xl px-5 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20">
        {/* Description / Label - Inter */}
        <div
          className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 sm:mb-5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Field Note · Business Operations
        </div>

        {/* Heading - Plus Jakarta Sans */}
        <h1
          className="text-[26px] sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white mb-4 sm:mb-5"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Better Connected Operations Create Better Business
        </h1>

        {/* Paragraph - Inter */}
        <p
          className="text-[15px] sm:text-base leading-relaxed text-white/85 max-w-md"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Siloed departments and disconnected systems create friction. By
          architecting seamless data flow between people, processes, and
          technology, organizations unlock true operational agility.
        </p>
      </div>
    </section>
  );
}