import React from 'react';
import { ShieldCheck, BadgeCheck, Heart } from 'lucide-react';

const MISSION_IMG = "/Mission visualization.png";
const VISION_IMG = "/Vision visualization.png";

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: BadgeCheck, label: "Quality" },
  { icon: Heart, label: "Care" },
];

export default function CoreFoundation() {
  return (
    <div
      className="w-full py-16 px-6 sm:px-10"
      style={{ backgroundColor: "#F4F6FB", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
        {/* Left column */}
        <div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#111827" }}>
            The Core Foundation
          </h2>
          <div className="w-10 h-[3px] mb-6" style={{ backgroundColor: "#9d174d" }} />
          <p className="text-gray-500 leading-relaxed">
            Everything we build is rooted in a steadfast commitment to
            foundational integrity and visionary execution.
          </p>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* Mission / Vision cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={MISSION_IMG}
                alt="Mission"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#111827" }}>
                  Mission
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Unlock transformative growth through trust, precision
                  engineering, and human ingenuity. We deliver solutions
                  that move markets.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img
                src={VISION_IMG}
                alt="Vision"
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#111827" }}>
                  Vision
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Building the world's most resilient digital foundations.
                  We envision an enterprise landscape where technology is
                  a frictionless enabler.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="sm:w-64 flex-shrink-0">
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#111827" }}>
                  Core Values
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The principles that guide our architecture and
                  partnerships.
                </p>
              </div>

              <div className="flex flex-1 gap-4 flex-wrap">
                {values.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex-1 min-w-[110px] border border-gray-100 rounded-lg py-4 flex flex-col items-center gap-2"
                    style={{ backgroundColor: "#FAFAFB" }}
                  >
                    <Icon size={18} color="#9d174d" />
                    <span className="text-xs font-medium text-gray-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}