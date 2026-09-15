import React from "react";

const FEATURES = [
  {
    title: "Accelerated Time-to-Value",
    body: "Reduce the latency between data capture and strategic execution.",
  },
  {
    title: "Reduced Operational Risk",
    body: "Minimize human error through automated data synchronization and validation.",
  },
  {
    title: "Scalable Architecture",
    body: "Build a foundation that adapts to growth and integrates new acquisitions seamlessly.",
  },
];

function Check() {
  return (
    <span className="flex-none w-[22px] h-[22px] rounded-full border-[1.5px] border-[#9A4B3E] flex items-center justify-center mt-0.5">
      <svg viewBox="0 0 12 12" fill="none" className="w-[11px] h-[11px]">
        <path
          d="M2 6.2L4.6 9L10 2.5"
          stroke="#9A4B3E"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function OperationalAdvantage() {
  return (
    <div className="min-h-screen w-full bg-[#F7F4EF] flex items-center justify-center px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl w-full items-center">

        {/* Visual panel */}
        <div
          className="relative overflow-hidden rounded-sm aspect-[16/10] md:aspect-[4/5]"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 30% 0%, #4a3527 0%, transparent 55%), linear-gradient(155deg, #3B2A22 0%, #171310 55%, #0d0b09 100%)",
          }}
        >
          <img
            src="/Overlay+Shadow-1.png"
            alt="Operational Advantage"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content panel */}
        <div>
          {/* Main Heading - Plus Jakarta Sans */}
          <h2
            className="font-medium text-[34px] leading-[1.15] tracking-[-0.01em] text-[#1C1A17] mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Operational Advantage
          </h2>

          {/* Description - Inter */}
          <p
            className="text-[15px] leading-relaxed text-[#4A463F] max-w-[38ch] mb-9"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            When systems communicate effectively, the entire enterprise
            elevates its performance baseline.
          </p>

          <div>
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`flex gap-4 py-5 border-t border-[#E4DFD5] ${
                  i === FEATURES.length - 1 ? "border-b" : ""
                }`}
              >
                <Check />

                <div>
                  {/* Feature Heading - Plus Jakarta Sans */}
                  <h3
                    className="font-medium text-[17px] text-[#1C1A17] mb-1.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {f.title}
                  </h3>

                  {/* Feature Description - Inter */}
                  <p
                    className="text-[14px] leading-relaxed text-[#4A463F] max-w-[42ch]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}