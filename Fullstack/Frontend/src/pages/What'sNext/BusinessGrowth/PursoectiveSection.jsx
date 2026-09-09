import React from "react";

export default function GrowthPerspectiveSection() {
  return (
    <section className="w-full bg-[#FAF6F1] px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
            PERSPECTIVE
          </span>
          <span className="h-px flex-1 max-w-[60px] bg-slate-300" />
        </div>

        <h1 className="mt-4 text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl">
          Growth Is Not Just About Getting Bigger
        </h1>

        <p className="mt-6 text-sm font-semibold leading-relaxed text-slate-900 sm:text-base">
          Growth changes the way a business works.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          What starts as a simple process can become a complex operation.
          A small team becomes a larger workforce. Customer relationships
          become harder to manage. Data starts coming from different
          places. And suddenly, the tools that once helped your business
          can begin holding it back.
        </p>

        <div className="mt-6 rounded-md border-l-4 border-[#6B1E3F] bg-white px-6 py-5 shadow-sm">
          <p className="text-sm font-semibold italic leading-relaxed text-slate-900 sm:text-[15px]">
            "This is where technology needs to do more. It needs to connect
            people, simplify processes, make information easier to access,
            and give businesses the flexibility to respond when things
            change."
          </p>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          At TechTorch Solutions, we believe technology should be built
          around the needs of a business—not the other way around. From
          enterprise resource planning and customer relationship
          management to AI, cloud infrastructure, cybersecurity, software
          engineering, and business solutions, TechTorch brings together
          technology capabilities designed to support businesses at
          different stages of growth. Because the best technology isn't
          simply built for today. It's built with tomorrow in mind.
        </p>
      </div>
    </section>
  );
}