import React from "react";

const CAPABILITIES = [
  "ERP Integration",
  "Operations Management",
  "Data Orchestration",
  "Legacy Modernization",
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#1B1B1B"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function IntegratedCapabilities() {
  return (
    <div className="min-h-screen w-full bg-[#F7F6F3] flex items-center justify-center px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-5xl w-full items-center">
        
        {/* Content - Left Side */}
        <div>
          {/* Label - Inter */}
          <span
            className="block text-[11px] tracking-[0.12em] text-[#8C2F3B] font-semibold mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            TECHTORCH PERSPECTIVE
          </span>

          {/* Heading - Plus Jakarta Sans */}
          <h2
            className="font-medium text-[30px] leading-[1.15] text-[#1B1B1B] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Integrated Capabilities
          </h2>

          {/* Description - Inter */}
          <p
            className="text-[14.5px] leading-relaxed text-[#5A5A55] max-w-[42ch] mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            We architect operational coherence across the modern enterprise
            stack, ensuring technical viability aligns with business
            imperatives.
          </p>

          <div>
            {CAPABILITIES.map((label, i) => (
              <a
                key={label}
                href="#"
                className={`group flex items-center justify-between py-4 border-t border-[#E2DED5] ${
                  i === CAPABILITIES.length - 1 ? "border-b" : ""
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="text-[15px] font-medium text-[#1B1B1B]">
                  {label}
                </span>

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative overflow-hidden rounded-sm aspect-[4/3] md:aspect-[5/4] w-full">
          <img
            src="/Executiveboardmeeting.png"
            alt="Integrated Capabilities"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}