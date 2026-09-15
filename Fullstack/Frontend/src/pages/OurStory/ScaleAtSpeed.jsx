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

      // Start animation when section's lower part reaches viewport
      const shouldAnimate =
        rect.bottom <= viewportHeight * 0.95 &&
        rect.bottom >= viewportHeight * 0.15;

      // Reset only after section has properly left the viewport
      const isFarAway =
        rect.bottom < -100 ||
        rect.top > viewportHeight + 100;

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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-12 font-inter overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #6e0f3e 0%, #8f1249 55%, #6e0f3e 100%)",
      }}
    >
      <style>{`
        @keyframes growBar1 {
          from {
            height: 0px;
          }
          to {
            height: 90px;
          }
        }

        @keyframes growBar2 {
          from {
            height: 0px;
          }
          to {
            height: 140px;
          }
        }

        @keyframes growBar3 {
          from {
            height: 0px;
          }
          to {
            height: 180px;
          }
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

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* Left column */}
        <div className="w-full lg:-ml-16 xl:-ml-24">
          <p className="text-[11px] sm:text-[12px] tracking-[0.14em] font-semibold text-rose-200 mb-3 sm:mb-4">
            METHODOLOGY
          </p>

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
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Scale at Speed
          </h2>

          <p className="text-rose-100/80 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
            The TechTorch Philosophy balances the necessity for rapid
            innovation with the absolute requirement for structural
            invulnerability.
          </p>

          <div className="space-y-6 sm:space-y-7">
            {/* Feature 1 */}
            <div className="flex gap-3 sm:gap-4">
              <BadgeCheck
                size={20}
                className="text-white flex-shrink-0 mt-0.5"
              />

              <div>
                <h3 className="text-white text-base sm:text-[17px] font-semibold mb-1">
                  Rapid Iteration
                </h3>

                <p className="text-rose-100/70 text-sm leading-relaxed max-w-md">
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
                <h3 className="text-white text-base sm:text-[17px] font-semibold mb-1">
                  Structural Invulnerability
                </h3>

                <p className="text-rose-100/70 text-sm leading-relaxed max-w-md">
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
                  flex
                  items-end
                  w-10
                  sm:w-12
                  md:w-14
                  h-[180px]
                "
              >
                <div
                  className={`bar-fill bar-fill-${i + 1} w-full rounded-t-sm`}
                  style={{
                    backgroundColor: bar.color,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Chart Footer */}
          <div className="border-t border-white/15 pt-4 flex items-center justify-between gap-4">
            <span className="text-rose-100/80 text-xs sm:text-sm">
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