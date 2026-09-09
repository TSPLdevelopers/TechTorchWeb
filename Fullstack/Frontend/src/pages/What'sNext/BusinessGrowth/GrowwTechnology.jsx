import React from "react";
import { TrendingUp } from "lucide-react";

export default function GrowWithBusinessSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBDCEA] px-3 py-1 text-[10px] font-semibold tracking-[0.1em] text-[#7A1443]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7A1443]" />
          TECHNOLOGY
          <span className="h-1.5 w-1.5 rounded-full bg-[#7A1443]" />
          GROWTH
          <span className="h-1.5 w-1.5 rounded-full bg-[#7A1443]" />
          POSSIBILITY
        </span>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left column */}
          <div>
            <h1 className="text-3xl font-semibold leading-tight text-[#6B1E3F] sm:text-4xl">
              Technology Should Grow With Your Business
            </h1>

            <p className="mt-5 text-sm font-semibold leading-relaxed text-slate-900 sm:text-base">
              Your business is growing. Your technology should grow with
              it.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              As your business evolves, so do your people, processes,
              customers, and challenges. The right technology helps you
              stay connected, work more efficiently, and make better
              decisions—without slowing down your next step.
            </p>

            <div className="mt-6 rounded-md bg-slate-50 px-4 py-3">
              <p className="text-sm leading-relaxed text-slate-600">
                TechTorch Solutions builds digital solutions that help
                businesses move forward with confidence.
              </p>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5C1533] px-6 py-3 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-[#4A1029] sm:text-sm"
            >
              TALK TO OUR EXPERTS
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          {/* Right column — image card */}
          <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <img
              src="https://source.unsplash.com/900x600/?executive,meeting,presentation,office"
              alt="Executive briefing presentation"
              className="h-56 w-full object-cover sm:h-64"
            />
            <div className="flex items-center justify-between bg-white px-5 py-4">
              <div>
                <span className="text-[10px] font-semibold tracking-[0.1em] text-slate-400">
                  STRATEGIC ARCHITECTURE
                </span>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  Executive Briefing Q4
                </p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#22C55E] px-3 py-1.5 text-[11px] font-semibold text-white">
                <TrendingUp size={13} />
                Active Metric
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}