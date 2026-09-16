import React from "react";
import { FileText, ShieldCheck, Quote, ShieldCheck as Shield2, Repeat } from "lucide-react";

export default function ElasticEngineeringCapacity() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
          {/* Sidebar */}
          <div className="space-y-4">
            {/* Executive Briefing card */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[9px] tracking-wide text-rose-800 font-bold">
                  EXECUTIVE BRIEFING
                </span>
              </div>
              <h3 className="text-[#1c1c1c] font-semibold text-[15px] mb-2">
                The Agility Mandate
              </h3>
              <p className="text-neutral-500 text-[12px] leading-relaxed mb-4">
                Why forward-looking CTOs and engineering directors structure
                their engineering spend with high-velocity contractor
                elasticity.
              </p>

              <div className="border-t border-neutral-200 pt-3 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">
                    Traditional Sourcing Cycle
                  </span>
                  <span className="font-semibold text-neutral-700">
                    60–90 Days
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">TechTorch Turnaround</span>
                  <span className="font-semibold text-rose-800">48 Hours</span>
                </div>
              </div>
            </div>

            {/* IP compliance card */}
            <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[12px] font-semibold text-rose-900">
                  Full IP & Compliance Shield
                </span>
              </div>
              <p className="text-neutral-600 text-[12px] leading-relaxed">
                Comprehensive intellectual property assignments, NDAs, and
                enterprise security protocols are established prior to
                initial code repository access.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-rose-800" />
              <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                CAPACITY ANALYSIS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[#1c1c1c] font-semibold text-2xl sm:text-[1.75rem] leading-snug mb-6">
              01 The Strategic Imperative of Elastic Engineering Capacity
            </h1>

            {/* Body */}
            <div className="space-y-5 text-[13.5px] leading-relaxed text-neutral-600 mb-6">
              <p>
                Modern software enterprises operate under continuous delivery
                stress. High-stakes platform deadlines, sudden spikes in
                customer workload, and unexpected architectural migrations
                can expose severe internal resource bottlenecks without
                warning. When teams scramble to accommodate urgent features,
                core product roadmaps suffer debilitating delays.
              </p>
              <p>
                Traditionally, organizations attempt to resolve capacity
                shortages through conventional full-time recruitment. Yet
                with average enterprise hiring cycles stretching across 60 to
                90 days, permanent recruiting cannot respond fast enough to
                volatile demand spikes. Long hiring lags leave vital
                initiatives stalled, while overburdened internal engineering
                leads burn out under unsustainable sprint loads.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-[3px] border-rose-800 bg-rose-50/50 pl-5 pr-4 py-4 mb-8">
              <p className="text-[13.5px] italic text-neutral-700 leading-relaxed mb-3">
                "Contract staffing is no longer a tactical headcount stopgap.
                In modern engineering, it is an architectural buffer that
                protects core product roadmaps while absorbing volatile
                sprint loads."
              </p>
              <div className="flex items-center gap-2">
                <Quote className="w-3 h-3 text-rose-800" />
                <span className="text-[11px] font-semibold text-rose-800">
                  TechTorch Augmentation Practice Group
                </span>
              </div>
            </blockquote>

            {/* Section 2 */}
            <h2 className="text-[#1c1c1c] font-semibold text-lg mb-4">
              Decoupling Time-to-Market from Recruiting Latency
            </h2>
            <div className="space-y-5 text-[13.5px] leading-relaxed text-neutral-600 mb-6">
              <p>
                TechTorch eliminates recruiting friction by maintaining an
                active, pre-assessed bench of seasoned tech practitioners.
                Rather than sifting through generic resumes, hiring managers
                receive targeted candidate portfolios curated specifically
                for the technical demands of their stack.
              </p>
              <p>
                Every candidate is evaluated through hands-on system design
                scenarios, real-world refactoring exercises, and
                architectural defense panels. Because we filter for high
                autonomy and battle-tested industry depth, our engineers
                begin writing production-ready code on day one without
                demanding lengthy internal mentorship cycles from your senior
                architects.
              </p>
            </div>

            {/* Two small info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield2 className="w-3.5 h-3.5 text-rose-800" />
                  <span className="text-[11.5px] font-semibold text-[#1c1c1c]">
                    Production-Vetted Competence
                  </span>
                </div>
                <p className="text-[11.5px] text-neutral-500 leading-relaxed">
                  Verified track records in microservice decoupling, high-load
                  database sharding, and high-load distributed architectures.
                </p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Repeat className="w-3.5 h-3.5 text-rose-800" />
                  <span className="text-[11.5px] font-semibold text-[#1c1c1c]">
                    Turnkey Integration
                  </span>
                </div>
                <p className="text-[11.5px] text-neutral-500 leading-relaxed">
                  Familiarity with modern enterprise CI/CD pipelines, GitOps
                  workflows, and automated test-driven development
                  methodologies.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <h2 className="text-[#1c1c1c] font-semibold text-lg mb-4">
              Seamless Integration & Zero Operational Friction
            </h2>
            <div className="space-y-5 text-[13.5px] leading-relaxed text-neutral-600">
              <p>
                Augmentation is only effective when external contributors
                harmonize with your existing engineering rituals. TechTorch
                practitioners adapt smoothly to your team's standups, sprint
                estimation cadences, and review standards, operating as a
                natural extension of your team.
              </p>
              <p>
                We guarantee overlapping business hours to facilitate
                immediate communication, backed by clear sprint
                accountability and bi-weekly performance reviews. Your
                organization gets the exact velocity boost needed without
                legal friction, complicated offboarding, or long-term
                financial liabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}