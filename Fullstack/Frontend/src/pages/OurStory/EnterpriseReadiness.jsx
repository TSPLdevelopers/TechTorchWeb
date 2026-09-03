import React from 'react';

const BG_IMAGE = "/Enterprise.png";

export default function EnterpriseHero() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif" }} className="w-full min-h-[420px] flex items-stretch bg-black">
      <div
        className="relative w-full flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,10,20,0.97) 0%, rgba(10,10,20,0.88) 32%, rgba(10,10,20,0.45) 60%, rgba(10,10,20,0.15) 100%), url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl px-8 sm:px-14 py-16 sm:py-20">
          <p className="text-[13px] tracking-[0.14em] font-semibold text-rose-400 mb-5">
            Enterprise Readiness
          </p>

          <h1 className="text-white font-bold leading-[1.08] text-4xl sm:text-5xl mb-6">
            Architecting the Future of<br />Enterprise Technology
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-9">
            We build digital foundations engineered for scale at speed.
            Bridging deep technical infrastructure with strategic executive
            clarity to deliver unshakeable performance.
          </p>

          <button
            className="inline-block px-6 py-3 text-sm font-semibold text-white transition-colors hover:brightness-110"
            style={{ backgroundColor: "#b0184f" }}
          >
            Talk To Experts
          </button>
        </div>
      </div>
    </div>
  );
}