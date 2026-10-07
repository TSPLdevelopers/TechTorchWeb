import React from "react";
import { ShieldCheck, BadgeCheck, Heart } from "lucide-react";

const MISSION_IMG = "/Mission visualization.png";
const VISION_IMG = "/Vision visualization.png";

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: BadgeCheck, label: "Quality" },
  { icon: Heart, label: "Care" },
];

export default function CoreFoundation() {
  return (
    <section className="w-full overflow-hidden bg-[#F4F6FB] px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[100px] lg:py-16 xl:py-20 font-inter">
      <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-10">

        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full max-w-xl lg:max-w-none lg:self-start">
          <h2
            className="mb-3 text-[24px] font-bold leading-tight sm:text-[30px] lg:text-[32px]"
            style={{
              color: "#111827",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            The Core Foundation
          </h2>

          <div
            className="mb-4 h-[3px] w-10 sm:mb-6"
            style={{ backgroundColor: "#9d174d" }}
          />

          <p className="max-w-[420px] text-[15px] leading-relaxed text-black sm:text-[16px] lg:max-w-[360px]">
            Everything we build is rooted in a steadfast commitment to
            foundational integrity and visionary execution.
          </p>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex min-w-0 flex-col gap-5 font-inter sm:gap-6">

          {/* ================= MISSION / VISION ================= */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

            {/* Mission */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              {/* Reduced image height */}
              <div className="aspect-[16/8] w-full sm:aspect-[16/8] lg:aspect-[16/8]">
                <img
                  src={MISSION_IMG}
                  alt="Mission"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Reduced content spacing */}
              <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-4 sm:pt-3">
                <h3
                  className="mb-1.5 text-[17px] font-semibold sm:text-[18px]"
                  style={{ color: "#111827" }}
                >
                  Mission
                </h3>

                <p className="text-sm leading-[1.5] text-gray-500">
                  Unlock transformative growth through trust, precision
                  engineering, and human ingenuity. We deliver solutions
                  that move markets.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
              {/* Reduced image height */}
              <div className="aspect-[16/8] w-full sm:aspect-[16/8] lg:aspect-[16/8]">
                <img
                  src={VISION_IMG}
                  alt="Vision"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Reduced content spacing */}
              <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-4 sm:pt-3">
                <h3
                  className="mb-1.5 text-[17px] font-semibold sm:text-[18px]"
                  style={{ color: "#111827" }}
                >
                  Vision
                </h3>

                <p className="text-sm leading-[1.5] text-gray-500">
                  Building the world's most resilient digital foundations.
                  We envision an enterprise landscape where technology is
                  a frictionless enabler.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CORE VALUES ================= */}
          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-8">

              {/* Core Values Text */}
              <div className="w-full flex-shrink-0 lg:w-64">
                <h3
                  className="mb-2 text-[17px] font-semibold sm:text-[18px]"
                  style={{ color: "#111827" }}
                >
                  Core Values
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  The principles that guide our architecture and
                  partnerships.
                </p>
              </div>

              {/* Values */}
              <div className="grid w-full flex-1 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {values.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex min-h-[90px] flex-col items-center justify-center gap-2 rounded-lg border border-gray-100 px-3 py-4 text-center sm:min-h-[105px] sm:px-4 sm:py-5"
                    style={{ backgroundColor: "#FAFAFB" }}
                  >
                    <Icon size={20} color="#9d174d" />

                    <span className="text-sm font-medium text-gray-700">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}