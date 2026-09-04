import React from "react";
import { BadgeCheck, ShieldCheck, TrendingUp } from "lucide-react";

const bars = [
  { height: 90, color: "#e9c3d6" },
  { height: 140, color: "#d99cba" },
  { height: 180, color: "#c07a9e" },
];

export default function ScaleAtSpeed() {
  return (
    <section
      className="w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 font-inter"
      style={{
        background:
          "linear-gradient(135deg, #6e0f3e 0%, #8f1249 55%, #6e0f3e 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        
        {/* Left column */}
        <div className="w-full lg:-ml-16 xl:-ml-24">
          
          <p className="text-[11px] sm:text-[12px] tracking-[0.14em] font-semibold text-rose-200 mb-3 sm:mb-4 font-inter">
            METHODOLOGY
          </p>

          {/* Heading */}
          <h2
            className="
              text-white
              font-bold
              text-3xl
              sm:text-4xl
              md:text-[42px]
              leading-tight
              mb-5
              sm:mb-6
              font-plus-jakarta
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Scale at Speed
          </h2>

          <p className="text-rose-100/80 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md font-inter">
            The TechTorch Philosophy balances the necessity for rapid
            innovation with the absolute requirement for structural
            invulnerability.
          </p>

          {/* Features */}
          <div className="space-y-6 sm:space-y-7">
            
            {/* Feature 1 */}
            <div className="flex gap-3 sm:gap-4">
              <BadgeCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />

              <div>
                <h3 className="text-white text-base sm:text-[17px] font-semibold mb-1 font-inter">
                  Rapid Iteration
                </h3>

                <p className="text-rose-100/70 text-sm leading-relaxed max-w-md font-inter">
                  Deploying critical infrastructure enhancements in weeks,
                  not quarters.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 sm:gap-4">
              <ShieldCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />

              <div>
                <h3 className="text-white text-base sm:text-[17px] font-semibold mb-1 font-inter">
                  Structural Invulnerability
                </h3>

                <p className="text-rose-100/70 text-sm leading-relaxed max-w-md font-inter">
                  Architecting zero-trust, high-availability systems from
                  day one.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right column - chart */}
        <div
          className="
            w-full
            rounded-xl
            p-5
            sm:p-7
            md:p-8
          "
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          
          {/* Chart */}
          <div
            className="
              flex
              items-end
              justify-center
              gap-3
              sm:gap-5
              md:gap-6
              h-40
              sm:h-44
              mb-5
              sm:mb-6
              border-l
              border-white/20
              pl-4
              sm:pl-6
            "
          >
            {bars.map((bar, i) => (
              <div
                key={i}
                className="
                  rounded-t-sm
                  w-10
                  sm:w-12
                  md:w-14
                  transition-transform
                  duration-300
                  hover:scale-y-105
                  origin-bottom
                "
                style={{
                  height: `${bar.height}px`,
                  backgroundColor: bar.color,
                }}
              />
            ))}
          </div>

          {/* Chart Footer */}
          <div className="border-t border-white/15 pt-4 flex items-center justify-between gap-4">
            <span className="text-rose-100/80 text-xs sm:text-sm font-inter">
              Innovation Velocity
            </span>

            <TrendingUp
              size={18}
              className="text-rose-200 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}