import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ParadigmSection() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-4 lg:pl-[100px] lg:pr-[100px] lg:py-5">
      <div className="w-full text-center">
        {/* Label */}
        <span
          className="text-[9px] font-semibold tracking-[0.15em] text-[#730042] sm:text-[10px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          THE PARADIGM
        </span>

        {/* Main Heading */}
        <h1
          className="mx-auto mt-1 max-w-3xl text-[20px] font-semibold leading-[1.2] text-[#730042] sm:text-[23px] md:text-[26px] lg:text-[30px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Don't Let Technology Become the Limit to Your Growth
        </h1>

        {/* First Subheading */}
        <p
          className="mx-auto mt-2 max-w-2xl text-[12px] leading-[1.5] text-slate-600 sm:text-[13px] md:text-[14px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Your business shouldn't have to slow down because your systems
          can't keep up. You shouldn't have to replace everything every
          time your requirements change. And your teams shouldn't have to
          spend their time working around technology.
        </p>

        {/* Highlight */}
        <p
          className="mx-auto mt-1.5 max-w-2xl text-[12px] font-semibold leading-[1.4] text-[#730042] sm:text-[13px] md:text-[14px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Technology should create possibilities.
        </p>

        {/* Second Subheading */}
        <p
          className="mx-auto mt-1.5 max-w-2xl text-[12px] leading-[1.5] text-slate-600 sm:text-[13px] md:text-[14px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          It should help your people work better. It should give you a
          clearer view of your business. It should make complex processes
          easier to manage. And when your business is ready for the next
          step, your technology should be ready too.
        </p>

        {/* Growth Statement */}
        <div className="mx-auto mt-2 inline-flex max-w-full items-center justify-center rounded-full bg-[#730042] px-4 py-1 sm:px-5 sm:py-1.5">
          <span
            className="text-center text-[8px] font-semibold uppercase tracking-[0.08em] text-white sm:text-[9px] md:text-[10px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            That's what it means to build technology for growth.
          </span>
        </div>

        {/* Image (no crop) */}
        <div className="relative mx-auto mt-2 w-full max-w-[420px] overflow-hidden rounded-lg sm:mt-3 sm:max-w-[460px] sm:rounded-xl md:max-w-[480px] lg:max-w-[520px]">
          <img
            src="/Senior cybersecurity advisors consulting around a digital holographic security display.png"
            alt="Executives discussing enterprise architecture"
            className="block h-auto w-full"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A0A22]/80 via-[#3A0A22]/20 to-transparent" />

          {/* Image Bottom Content */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-2 text-left md:flex-row md:items-end md:justify-between md:gap-4">
            <div className="min-w-0">
              <span
                className="text-[6px] font-semibold tracking-[0.1em] text-rose-200 sm:text-[7px] md:text-[8px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE PARADIGM FOR GROWTH
              </span>
              <p
                className="mt-0.5 max-w-xl text-[8px] font-medium leading-[1.2] text-white sm:text-[9px] md:text-[10px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Scalable enterprise architecture built for enduring success.
              </p>
            </div>

            <span
              className="inline-flex w-fit shrink-0 items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[6px] font-semibold text-slate-800 sm:text-[7px] md:text-[8px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <CheckCircle2 size={10} className="shrink-0 text-emerald-600 sm:h-3 sm:w-3" />
              <span className="whitespace-nowrap">Verified Enterprise Architecture</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}