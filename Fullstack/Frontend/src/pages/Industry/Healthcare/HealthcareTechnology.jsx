import React from "react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

// 👇 Yahan apni image URL paste karein
const IMAGE_URL = "/healthcarehero.png";

export default function ConnectHealthcareSection() {
  return (
    <div
      style={{ background: "#f4f1ec", color: INK }}
      className="w-full font-sans"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Left: copy */}
        <div className="w-full">
          <p
            className="text-xs sm:text-[11px] font-semibold tracking-wide mb-3"
            style={{ color: WINE }}
          >
            HEALTHCARE TECHNOLOGY
          </p>

          <h2
            className="text-2xl sm:text-3xl leading-[1.2] font-bold tracking-tight mb-5 sm:mb-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Connect Healthcare Information, People and Processes
          </h2>

          <div className="space-y-4 mb-6">
            <p
              className="text-sm sm:text-[15px] leading-relaxed"
              style={{
                color: MUTED,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Healthcare operations depend on coordination between patients,
              clinical teams, administrative staff and supporting functions.
            </p>

            <p
              className="text-sm sm:text-[15px] leading-relaxed"
              style={{
                color: MUTED,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              A connected technology environment can help organizations
              manage information more consistently and coordinate
              activities across different areas of the organization.
            </p>

            <p
              className="text-sm sm:text-[15px] leading-relaxed"
              style={{
                color: MUTED,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              TechTorch brings healthcare management capabilities together
              with broader technology services such as ERP, software
              development, integration and ongoing support to address
              different operational requirements.
            </p>
          </div>

          <div
            className="bg-white rounded-lg px-4 sm:px-5 py-4"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}
          >
            <p
              className="text-sm italic leading-relaxed"
              style={{
                color: INK,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              &ldquo;Connected healthcare systems reduce administrative
              friction, enhance diagnostic turnaround, and establish
              seamless clinical continuity across departments.&rdquo;
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full">
          <div
            className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-2xl overflow-hidden"
            style={{
              border: `3px solid ${WINE}`,
            }}
          >
            <img
              src={IMAGE_URL}
              alt="Healthcare technology"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}