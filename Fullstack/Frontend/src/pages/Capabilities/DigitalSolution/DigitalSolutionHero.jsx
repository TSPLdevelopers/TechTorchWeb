import React from "react";
import { ChevronDown } from "lucide-react";

const STATS = [
  { value: "99.8%", label: "Reliability SLA" },
  { value: "120+", label: "Deployments" },
  { value: "10+", label: "Global Sectors" },
];

export default function DigitalSolutionsHero() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 px-5 sm:px-8"
      style={{
        background:
          "radial-gradient(80% 60% at 50% 0%, #4a0e2e 0%, #22091b 45%, #0a0710 80%, #06050a 100%)",
      }}
    >
      {/* Decorative network dots background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 500"
      >
        <g stroke="#ffffff" strokeWidth="0.6">
          <line x1="60" y1="60" x2="180" y2="120" />
          <line x1="180" y1="120" x2="140" y2="230" />
          <line x1="180" y1="120" x2="320" y2="90" />
          <line x1="320" y1="90" x2="420" y2="180" />
          <line x1="420" y1="180" x2="560" y2="130" />
          <line x1="560" y1="130" x2="680" y2="70" />
          <line x1="140" y1="230" x2="260" y2="310" />
          <line x1="260" y1="310" x2="400" y2="280" />
          <line x1="400" y1="280" x2="520" y2="340" />
          <line x1="520" y1="340" x2="650" y2="290" />
          <line x1="420" y1="180" x2="400" y2="280" />
          <line x1="60" y1="60" x2="120" y2="180" />
        </g>
        <g fill="#ffffff">
          <circle cx="60" cy="60" r="3" />
          <circle cx="180" cy="120" r="3" />
          <circle cx="140" cy="230" r="3" />
          <circle cx="320" cy="90" r="3" />
          <circle cx="420" cy="180" r="3" />
          <circle cx="560" cy="130" r="3" />
          <circle cx="680" cy="70" r="3" />
          <circle cx="260" cy="310" r="3" />
          <circle cx="400" cy="280" r="3" />
          <circle cx="520" cy="340" r="3" />
          <circle cx="650" cy="290" r="3" />
          <circle cx="120" cy="180" r="3" />
        </g>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-white/80">
            Digital Solutions
          </span>
        </span>

        {/* Heading */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-tight mb-6">
          <span className="text-white">Technology Designed Around </span>
          <span className="text-rose-200">Your Business</span>
        </h1>

        {/* Subheading */}
        <p className="text-[15px] sm:text-[17px] font-semibold text-white/90 mb-4 max-w-xl mx-auto">
          Every business has its own way of working. Your digital solutions
          should reflect that.
        </p>

        {/* Paragraph */}
        <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-white/50 max-w-xl mx-auto mb-9">
          At TechTorch, we design and deliver digital solutions that help
          businesses simplify operations, connect processes, manage
          information, and make better decisions. From enterprise systems to
          customer-facing platforms, we build technology around real
          business needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <button
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13.5px] font-semibold text-white w-full sm:w-auto justify-center transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#9d174d" }}
          >
            Explore Our Solutions
            <ChevronDown size={15} />
          </button>

          <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[13.5px] font-semibold text-white w-full sm:w-auto justify-center transition-colors hover:bg-white/10">
            Talk to Our Experts
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 max-w-md mx-auto mb-8" />

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-4"
            >
              <p className="text-[20px] sm:text-[22px] font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-[11px] text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}