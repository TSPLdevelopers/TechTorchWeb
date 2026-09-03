import React from 'react';
import { BadgeCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const bars = [
  { height: 90, color: "#e9c3d6" },
  { height: 140, color: "#d99cba" },
  { height: 180, color: "#c07a9e" },
];

export default function ScaleAtSpeed() {
  return (
    <div
      className="w-full py-20 px-6 sm:px-10"
      style={{
        background: "linear-gradient(135deg, #6e0f3e 0%, #8f1249 55%, #6e0f3e 100%)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left column */}
        <div>
          <p className="text-[12px] tracking-[0.14em] font-semibold text-rose-200 mb-4">
            METHODOLOGY
          </p>

          <h2 className="text-white font-bold text-4xl leading-tight mb-6">
            Scale at Speed
          </h2>

          <p className="text-rose-100/80 leading-relaxed mb-10 max-w-md">
            The TechTorch Philosophy balances the necessity for rapid
            innovation with the absolute requirement for structural
            invulnerability.
          </p>

          <div className="space-y-7">
            <div className="flex gap-3">
              <BadgeCheck size={20} className="text-white flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Rapid Iteration
                </h3>
                <p className="text-rose-100/70 text-sm leading-relaxed">
                  Deploying critical infrastructure enhancements in weeks,
                  not quarters.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck size={20} className="text-white flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Structural Invulnerability
                </h3>
                <p className="text-rose-100/70 text-sm leading-relaxed">
                  Architecting zero-trust, high-availability systems from
                  day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - chart card */}
        <div
          className="rounded-xl p-8"
          style={{
            background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="flex items-end justify-center gap-6 h-44 mb-6 border-l border-white/20 pl-6">
            {bars.map((bar, i) => (
              <div
                key={i}
                className="w-14 rounded-t-sm"
                style={{ height: `${bar.height}px`, backgroundColor: bar.color }}
              />
            ))}
          </div>
          <div className="border-t border-white/15 pt-4 flex items-center justify-between">
            <span className="text-rose-100/80 text-sm">Innovation Velocity</span>
            <TrendingUp size={18} className="text-rose-200" />
          </div>
        </div>
      </div>
    </div>
  );
}