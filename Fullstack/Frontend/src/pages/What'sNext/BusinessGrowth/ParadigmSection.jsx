import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ParadigmSection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12">
      <div className="mx-auto w-full max-w-4xl text-center">
        {/* Label */}
        <span
          className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          THE PARADIGM
        </span>

        {/* Main Heading */}
        <h1
          className="mx-auto mt-3 max-w-3xl text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl md:text-4xl"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Don't Let Technology Become the Limit to Your Growth
        </h1>

        {/* Subheading / Intro */}
        <p
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px] md:text-base"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Your business shouldn't have to slow down because your systems
          can't keep up. You shouldn't have to replace everything every
          time your requirements change. And your teams shouldn't have to
          spend their time working around technology.
        </p>

        {/* Highlight Text */}
        <p
          className="mx-auto mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-[#6B1E3F] sm:text-[15px] md:text-base"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Technology should create possibilities.
        </p>

        {/* Subheading / Intro */}
        <p
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px] md:text-base"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          It should help your people work better. It should give you a
          clearer view of your business. It should make complex processes
          easier to manage. And when your business is ready for the next
          step, your technology should be ready too.
        </p>

        {/* Growth Statement */}
        <div className="mx-auto mt-8 inline-flex max-w-full items-center justify-center rounded-full bg-[#5C1533] px-5 py-3 sm:px-6">
          <span
            className="text-center text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            That's what it means to build technology for growth.
          </span>
        </div>

        {/* Image */}
        <div className="relative mt-10 overflow-hidden rounded-xl sm:mt-12">
          <img
            src="/Senior cybersecurity advisors consulting around a digital holographic security display.png"
            alt="Executives discussing enterprise architecture"
            className="block h-56 w-full object-cover sm:h-64 md:h-72 lg:h-80"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A0A22]/80 via-transparent to-transparent" />

          {/* Image Bottom Content */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 text-left sm:p-5 md:flex-row md:items-center md:justify-between md:gap-5 lg:p-6">
            <div className="min-w-0">
              <span
                className="text-[9px] font-semibold tracking-[0.1em] text-rose-200 sm:text-[10px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE PARADIGM FOR GROWTH
              </span>

              <p
                className="mt-1 text-sm font-medium leading-relaxed text-white sm:text-[15px] md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Scalable enterprise architecture built for enduring
                success.
              </p>
            </div>

            {/* Verification Badge */}
            <span
              className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-800 sm:text-[11px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <CheckCircle2
                size={13}
                className="shrink-0 text-emerald-600"
              />
              Verified Enterprise Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}