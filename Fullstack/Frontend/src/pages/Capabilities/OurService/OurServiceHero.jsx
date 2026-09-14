import React from "react";

const stats = [
  { num: "01", label: "Orientation", title: "Business-First Approach" },
  { num: "02", label: "Architecture", title: "Scalable & Secure" },
  { num: "03", label: "Capacity", title: "Full-Stack Lifecycle" },
  { num: "04", label: "Commitment", title: "Long-Term Value" },
];

export default function TechTorchHero() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-6 py-16 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(230,57,128,0.18), transparent 45%), radial-gradient(circle at 85% 15%, rgba(196,28,110,0.15), transparent 40%), linear-gradient(160deg, #3a0d2c 0%, #5c1240 45%, #2a0a20 100%)",
      }}
    >
      <div className="max-w-3xl w-full text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-xs tracking-wide text-white/70 bg-white/[0.07] border border-white/10 px-4 py-1.5 rounded-full mb-7">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#e63980" }}
          />
          Our Services
        </span>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-white mb-6">
          Technology Solutions Built Around Your Business
        </h1>

        <p className="text-base leading-relaxed text-white/70 max-w-xl mx-auto mb-9">
          At TechTorch, we help businesses solve real technology challenges
          with practical, scalable and secure solutions. From IT consulting
          and software development to cloud infrastructure, cybersecurity, AI
          and technology staffing, our services are designed to help your
          business work better and grow with confidence.
        </p>

        <button
          className="inline-flex items-center gap-2.5 text-white font-semibold text-sm px-7 py-3.5 rounded-lg mb-14 transition-transform hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #e63980, #c41c6e)",
            boxShadow: "0 8px 24px rgba(196,28,110,0.35)",
          }}
        >
          Talk to Our Experts
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.num}
              className="flex items-center gap-3 text-left bg-white/[0.06] border border-white/10 rounded-lg px-4 py-4"
            >
              <span
                className="text-xl font-bold shrink-0"
                style={{ color: "#e63980" }}
              >
                {s.num}
              </span>
              <span className="text-[10px] leading-relaxed tracking-wide text-white/70">
                {s.label}
                <strong className="block text-[13px] text-white font-semibold">
                  {s.title}
                </strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}