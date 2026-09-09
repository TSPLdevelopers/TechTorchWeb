import React from "react";

const pillars = [
  {
    title: "Integrity",
    description:
      "Uncompromising adherence to ethical standards and technical excellence in every line of code we write.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 5V11C4 16.5 7.4 21.7 12 23C16.6 21.7 20 16.5 20 11V5L12 2Z"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15.5 9.5"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "Relentless pursuit of perfection, delivering solutions that set the benchmark for industry standards.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#8B1E5C"
          strokeWidth="1.8"
        />
        <path
          d="M8.5 12.2L10.7 14.5L15.5 9.5"
          stroke="#8B1E5C"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Care",
    description:
      "Deep commitment to our clients' success, fostering partnerships built on trust and mutual growth.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 8.5C20.5 12.5 15.5 16.5 12.5 19C12.2 19.2 11.8 19.2 11.5 19C8.5 16.5 3.5 12.5 3.5 8.5C3.5 5.5 5.8 3.5 8.3 3.5C9.9 3.5 11.3 4.3 12 5.6C12.7 4.3 14.1 3.5 15.7 3.5C18.2 3.5 20.5 5.5 20.5 8.5Z"
          stroke="#730024"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#EEF1FC] px-5 py-12 font-inter sm:px-8 sm:py-16 lg:px-10 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1100px] text-center">
        
        {/* Subtitle */}
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#8B1E5C] sm:text-[12px] md:text-[13px]">
          Our Philosophy
        </p>

        {/* Heading */}
        <h2
          className="mb-4 text-[30px] font-medium leading-tight tracking-[-0.01em] text-[#1B2233] font-plus-jakarta sm:mb-5 sm:text-[36px] md:text-[42px]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Scale at Speed
        </h2>

        {/* Description */}
        <p className="mx-auto mb-9 max-w-[620px] text-[14px] leading-relaxed text-[#4B5468] sm:mb-12 sm:text-[16px] md:text-[17px]">
          We believe in rapid innovation without compromising on structural
          invulnerability. Our foundation is built on three unwavering
          pillars.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 text-left sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(30,40,80,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(30,40,80,0.10)] sm:rounded-2xl sm:p-7 lg:px-7 lg:py-8"
            >
              {/* Icon */}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FBE4EC] sm:h-12 sm:w-12">
                {pillar.icon}
              </div>

              {/* Card Heading */}
              <h3 className="mb-2 text-[18px] font-semibold text-[#1B2233] sm:mb-3 sm:text-[19px] lg:text-[20px]">
                {pillar.title}
              </h3>

              {/* Card Description */}
              <p className="m-0 text-[14px] leading-relaxed text-[#5A6178] sm:text-[15px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}