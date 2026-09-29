import React from "react";

const stats = [
  { num: "01", label: "Orientation", title: "Business-First Approach" },
  { num: "02", label: "Architecture", title: "Scalable & Secure" },
  { num: "03", label: "Capacity", title: "Full-Stack Lifecycle" },
  { num: "04", label: "Commitment", title: "Long-Term Value" },
];

export default function TechTorchHero() {
  return (
    <section
      className="
        relative flex w-full items-center justify-center
        overflow-hidden
        px-4 py-10
        sm:px-6 sm:py-12
        md:px-8 md:py-14
        lg:px-10 lg:py-16
      "
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(230,57,128,0.18), transparent 45%), radial-gradient(circle at 85% 15%, rgba(196,28,110,0.15), transparent 40%), linear-gradient(160deg, #3a0d2c 0%, #5c1240 45%, #2a0a20 100%)",
      }}
    >
      {/* Main Content */}
      <div
        className="
          relative z-10 w-full max-w-4xl
          text-center
        "
      >
        {/* Badge */}
        <div className="mb-5 flex justify-center sm:mb-6">
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-white/10
              bg-white/[0.07]
              px-3 py-1.5
              font-['Inter']
              text-[9px] font-semibold
              tracking-[0.08em]
              text-white/70
              sm:px-4 sm:py-1.5
              sm:text-[10px]
              md:text-[11px]
            "
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "#e63980" }}
            />

            Our Services
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            mx-auto mb-4
            max-w-3xl
            font-['Plus_Jakarta_Sans']
            text-[26px]
            font-bold
            leading-[1.15]
            tracking-[-0.025em]
            text-white
            sm:mb-5
            sm:text-[32px]
            md:text-[38px]
            lg:text-[42px]
          "
        >
          Technology Solutions Built Around Your Business
        </h1>

        {/* Sub Heading / Description */}
        <p
          className="
            mx-auto mb-6
            max-w-2xl
            font-['Inter']
            text-[11.5px]
            leading-[1.65]
            text-white/70
            sm:mb-7
            sm:text-[13px]
            md:text-[14px]
            lg:text-[15px]
          "
        >
          At TechTorch, we help businesses solve real technology challenges
          with practical, scalable and secure solutions. From IT consulting
          and software development to cloud infrastructure, cybersecurity, AI
          and technology staffing, our services are designed to help your
          business work better and grow with confidence.
        </p>

        {/* CTA Button */}
        <button
          className="
            mb-8
            inline-flex items-center justify-center
            gap-2
            rounded-lg
            px-5 py-2.5
            font-['Inter']
            text-[11px]
            font-semibold
            text-white
            transition-all duration-300
            hover:-translate-y-0.5
            sm:mb-9
            sm:px-6 sm:py-3
            sm:text-[12px]
            md:px-7 md:py-3.5
            md:text-[13px]
          "
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
            className="h-3 w-3 sm:h-3.5 sm:w-3.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Divider */}
        <div
          className="
            mb-5
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
            sm:mb-6
          "
        />

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-1
            gap-2.5
            sm:grid-cols-2
            sm:gap-3
            lg:grid-cols-4
          "
        >
          {stats.map((s) => (
            <div
              key={s.num}
              className="
                flex items-center
                gap-3
                rounded-lg
                border border-white/10
                bg-white/[0.06]
                px-3.5 py-3
                text-left
                backdrop-blur-sm
                transition-all duration-300
                hover:bg-white/[0.09]
                sm:px-4 sm:py-3.5
              "
            >
              {/* Number */}
              <span
                className="
                  shrink-0
                  font-['Inter']
                  text-lg
                  font-bold
                  sm:text-xl
                "
                style={{ color: "#e63980" }}
              >
                {s.num}
              </span>

              {/* Text */}
              <span
                className="
                  font-['Inter']
                  text-[9px]
                  leading-relaxed
                  tracking-wide
                  text-white/65
                  sm:text-[10px]
                "
              >
                {s.label}

                <strong
                  className="
                    mt-0.5
                    block
                    font-['Inter']
                    text-[11px]
                    font-semibold
                    leading-snug
                    text-white
                    sm:text-[12px]
                    md:text-[13px]
                  "
                >
                  {s.title}
                </strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}