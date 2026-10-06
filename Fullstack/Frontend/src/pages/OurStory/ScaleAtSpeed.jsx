import React, { useEffect, useRef, useState } from "react";
import { BadgeCheck, ShieldCheck, TrendingUp } from "lucide-react";

const bars = [
  { height: 90, color: "#e9c3d6" },
  { height: 140, color: "#d99cba" },
  { height: 180, color: "#c07a9e" },
];

export default function ScaleAtSpeed() {
  const sectionRef = useRef(null);

  const [startAnimation, setStartAnimation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const shouldAnimate =
        rect.bottom <= viewportHeight * 0.95 &&
        rect.bottom >= viewportHeight * 0.15;

      const isFarAway = rect.bottom < -100 || rect.top > viewportHeight + 100;

      if (shouldAnimate && !hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        setAnimationKey((prev) => prev + 1);
        setStartAnimation(true);
      }

      if (isFarAway && hasTriggeredRef.current) {
        hasTriggeredRef.current = false;
        setStartAnimation(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden px-4 py-10 font-inter sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[100px] lg:py-16 xl:py-20"
      style={{
        background:
          "linear-gradient(135deg, #6e0f3e 0%, #8f1249 55%, #6e0f3e 100%)",
      }}
    >
      <style>{`
        @keyframes growBar1 {
          from { height: 0px; }
          to { height: 90px; }
        }

        @keyframes growBar2 {
          from { height: 0px; }
          to { height: 140px; }
        }

        @keyframes growBar3 {
          from { height: 0px; }
          to { height: 180px; }
        }

        .bar-fill {
          height: 0px;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-bars .bar-fill-1 {
          animation: growBar1 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0s;
        }

        .animate-bars .bar-fill-2 {
          animation: growBar2 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.35s;
        }

        .animate-bars .bar-fill-3 {
          animation: growBar3 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.7s;
        }
      `}</style>

      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Left column */}
        <div className="w-full">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.14em] text-rose-200 sm:mb-4 sm:text-[12px]">
            METHODOLOGY
          </p>

          <h2
            className="mb-5 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-[42px]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Scale at Speed
          </h2>

          <p className="mb-8 max-w-md text-sm leading-relaxed text-rose-100/80 sm:mb-10 sm:text-base">
            The TechTorch Philosophy balances the necessity for rapid
            innovation with the absolute requirement for structural
            invulnerability.
          </p>

          <div className="space-y-6 sm:space-y-7">
            {/* Feature 1 */}
            <div className="flex gap-3 sm:gap-4">
              <BadgeCheck size={20} className="mt-0.5 flex-shrink-0 text-white" />

              <div>
                <h3 className="mb-1 text-base font-semibold text-white sm:text-[17px]">
                  Rapid Iteration
                </h3>

                <p className="max-w-md text-sm leading-relaxed text-rose-100/70">
                  Deploying critical infrastructure enhancements in weeks,
                  not quarters.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 sm:gap-4">
              <ShieldCheck size={20} className="mt-0.5 flex-shrink-0 text-white" />

              <div>
                <h3 className="mb-1 text-base font-semibold text-white sm:text-[17px]">
                  Structural Invulnerability
                </h3>

                <p className="max-w-md text-sm leading-relaxed text-rose-100/70">
                  Architecting zero-trust, high-availability systems from
                  day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div
          key={animationKey}
          className={`w-full rounded-xl p-5 sm:p-7 md:p-8 ${
            startAnimation ? "animate-bars" : ""
          }`}
          style={{
            background:
              "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* Chart */}
          <div className="mb-5 flex h-40 items-end justify-center gap-3 border-l border-white/20 pl-4 sm:mb-6 sm:h-44 sm:gap-5 sm:pl-6 md:gap-6">
            {bars.map((bar, i) => (
              <div key={i} className="flex h-[180px] w-10 items-end sm:w-12 md:w-14">
                <div
                  className={`bar-fill bar-fill-${i + 1} w-full rounded-t-sm`}
                  style={{ backgroundColor: bar.color }}
                />
              </div>
            ))}
          </div>

          {/* Chart Footer */}
          <div className="flex items-center justify-between gap-4 border-t border-white/15 pt-4">
            <span className="text-xs text-rose-100/80 sm:text-sm">
              Innovation Velocity
            </span>

            <TrendingUp size={18} className="flex-shrink-0 text-rose-200" />
          </div>
        </div>
      </div>
    </section>
  );
}