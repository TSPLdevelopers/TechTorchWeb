import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ParadigmSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
          THE PARADIGM
        </span>

        <h1 className="mx-auto mt-3 max-w-xl text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl">
          Don't Let Technology Become the Limit to Your Growth
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Your business shouldn't have to slow down because your systems
          can't keep up. You shouldn't have to replace everything every
          time your requirements change. And your teams shouldn't have to
          spend their time working around technology.
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm font-semibold leading-relaxed text-[#6B1E3F] sm:text-[15px]">
          Technology should create possibilities.
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          It should help your people work better. It should give you a
          clearer view of your business. It should make complex processes
          easier to manage. And when your business is ready for the next
          step, your technology should be ready too.
        </p>

        <div className="mx-auto mt-8 inline-flex w-fit items-center rounded-full bg-[#5C1533] px-6 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-white">
            That's what it means to build technology for growth.
          </span>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-xl">
          <img
            src="https://source.unsplash.com/1200x700/?executives,office,meeting,city,night"
            alt="Executives discussing enterprise architecture"
            className="h-56 w-full object-cover sm:h-64"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A0A22]/80 via-transparent to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 text-left sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-[9px] font-semibold tracking-[0.1em] text-rose-200">
                THE PARADIGM FOR GROWTH
              </span>
              <p className="mt-1 text-sm font-medium text-white sm:text-[15px]">
                Scalable enterprise architecture built for enduring
                success.
              </p>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-800">
              <CheckCircle2 size={13} className="text-emerald-600" />
              Verified Enterprise Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}