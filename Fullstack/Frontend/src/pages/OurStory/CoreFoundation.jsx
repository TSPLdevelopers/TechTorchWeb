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
    <section className="w-full bg-[#F4F6FB] py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-8 lg:px-10 font-inter overflow-x-hidden">
      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[240px_minmax(0,1fr)]
          xl:grid-cols-[280px_minmax(0,1fr)]
          gap-8
          sm:gap-10
          lg:gap-8
          xl:gap-10
        "
      >
        {/* ================= LEFT COLUMN ================= */}
        <div className="w-full max-w-xl lg:max-w-none lg:self-start">
          <h2
            className="
              text-[24px]
              sm:text-[30px]
              lg:text-[32px]
              font-bold
              mb-3
              font-plus-jakarta
              leading-tight
            "
            style={{
              color: "#111827",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            The Core Foundation
          </h2>

          <div
            className="w-10 h-[3px] mb-4 sm:mb-6"
            style={{ backgroundColor: "#9d174d" }}
          />

          <p
            className="
              max-w-[420px]
              lg:max-w-[360px]
              text-[15px]
              sm:text-[16px]
              leading-relaxed
              text-black
              font-inter
            "
          >
            Everything we build is rooted in a steadfast commitment to
            foundational integrity and visionary execution.
          </p>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="min-w-0 flex flex-col gap-5 sm:gap-6 font-inter">
          {/* ================= MISSION / VISION ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* Mission */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]">
                <img
                  src={MISSION_IMG}
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3
                  className="text-[17px] sm:text-[18px] font-semibold mb-2 font-inter"
                  style={{ color: "#111827" }}
                >
                  Mission
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed font-inter">
                  Unlock transformative growth through trust, precision
                  engineering, and human ingenuity. We deliver solutions
                  that move markets.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]">
                <img
                  src={VISION_IMG}
                  alt="Vision"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3
                  className="text-[17px] sm:text-[18px] font-semibold mb-2 font-inter"
                  style={{ color: "#111827" }}
                >
                  Vision
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed font-inter">
                  Building the world's most resilient digital foundations.
                  We envision an enterprise landscape where technology is
                  a frictionless enabler.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CORE VALUES ================= */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 sm:gap-6 lg:gap-8">
              {/* Core Values Text */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <h3
                  className="font-semibold text-[17px] sm:text-[18px] mb-2 font-inter"
                  style={{ color: "#111827" }}
                >
                  Core Values
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed font-inter">
                  The principles that guide our architecture and
                  partnerships.
                </p>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 flex-1 w-full">
                {values.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="
                      min-h-[90px]
                      sm:min-h-[105px]
                      border
                      border-gray-100
                      rounded-lg
                      px-3
                      sm:px-4
                      py-4
                      sm:py-5
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-2
                      text-center
                    "
                    style={{ backgroundColor: "#FAFAFB" }}
                  >
                    <Icon size={20} color="#9d174d" />

                    <span className="text-sm font-medium text-gray-700 font-inter">
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