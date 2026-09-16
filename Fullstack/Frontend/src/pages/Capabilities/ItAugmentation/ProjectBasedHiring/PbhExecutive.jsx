import React from "react";
import {
  TrendingUp,
  Users,
  Check,
  ClipboardList,
  Code2,
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";

const deliveryChecks = [
  "Objective & Milestone Alignment",
  "Target Technical Capabilities",
  "Outcome-Focused Execution",
];

const podRoles = [
  { icon: ClipboardList, label: "Project Planning" },
  { icon: Code2, label: "Development Support" },
  { icon: ShieldCheck, label: "Quality & Testing" },
];

export default function ProjectBasedEngineeringDeepDive() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-5xl px-6 py-14">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-2">
              EXECUTIVE BRIEFING & GOVERNANCE
            </div>
            <h1 className="text-[#1c1c1c] font-semibold text-2xl mb-2">
              Supporting Technology Projects with the Right Expertise
            </h1>
            <p className="text-neutral-500 text-[13px] leading-relaxed max-w-xl">
              Technology projects can require specialised skills at different
              stages of development. The right engineering support can help
              businesses address technical requirements while complementing
              their existing teams.
            </p>
          </div>
          <span className="whitespace-nowrap inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
            Project-Aligned Engineering Support
          </span>
        </div>

        <div className="border-t border-neutral-200 mb-8" />

        {/* Three cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {/* Card 1 */}
          <div className="rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                DELIVERY ALIGNMENT
              </span>
              <TrendingUp className="w-4 h-4 text-neutral-300" />
            </div>
            <h3 className="text-[#1c1c1c] font-semibold text-[14.5px] mb-2">
              Project-Aligned Delivery
            </h3>
            <p className="text-neutral-500 text-[12px] leading-relaxed mb-4">
              Align technical expertise with your project requirements,
              development objectives, and expected outcomes.
            </p>
            <div className="border-t border-neutral-100 pt-3 space-y-1.5">
              {deliveryChecks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-[11.5px] text-neutral-600"
                >
                  <Check className="w-3 h-3 text-rose-800 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold text-rose-800 bg-rose-50 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
                STRUCTURED COLLABORATION
              </span>
              <Users className="w-4 h-4 text-neutral-300" />
            </div>
            <h3 className="text-[#1c1c1c] font-semibold text-[14.5px] mb-2">
              Structured Project Collaboration
            </h3>
            <p className="text-neutral-500 text-[12px] leading-relaxed mb-4">
              Work alongside your existing teams across software development,
              integration, testing, and other technical activities.
            </p>
            <div className="border-l-2 border-rose-800 pl-2 mb-2">
              <span className="text-[9.5px] tracking-wide text-neutral-400 font-semibold">
                CORE POD ROLES
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {podRoles.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded"
                >
                  <Icon className="w-3 h-3 text-rose-800" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 - featured dark */}
          <div className="relative rounded-xl bg-rose-950 p-5 overflow-hidden flex flex-col">
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-rose-800/40 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold text-white bg-white/10 px-2.5 py-1 rounded-full">
                <Layers className="w-3 h-3" />
                FLEXIBLE CAPABILITY
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <h3 className="relative text-white font-semibold text-[15px] mb-2">
              Flexible Engineering Support
            </h3>
            <p className="relative text-rose-100/70 text-[12px] leading-relaxed mb-5 flex-1">
              Access additional technical capabilities based on your project
              requirements and changing business priorities.
            </p>
            <button className="relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-rose-900 font-semibold text-[12px] px-4 py-2.5 hover:bg-rose-50 transition-colors">
              Talk to Our Experts
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Deep dive section */}
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-rose-800 bg-rose-50 px-3 py-1.5 rounded-full mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-800" />
          CAPABILITY DEEP DIVE • PROJECT-BASED ENGINEERING
        </div>

        <h2 className="text-[#1c1c1c] font-semibold text-3xl leading-snug mb-8 max-w-2xl">
          Project-Based Engineering for Evolving Technology Needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <p className="text-neutral-500 text-[13.5px] leading-relaxed">
            Technology requirements can change throughout the project
            lifecycle. Businesses may need additional expertise when
            developing new applications, improving existing systems,
            integrating platforms, testing software, or modernising legacy
            technology.
          </p>
          <p className="text-neutral-500 text-[13.5px] leading-relaxed">
            TechTorch provides software engineering and resource support
            designed to complement existing teams and address specific
            technology requirements. Our approach starts with understanding
            business needs and objectives, then aligning the appropriate
            technical capabilities with the project.
          </p>
        </div>

        {/* Journey box */}
        <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-5 mb-8">
          <h3 className="text-[11px] tracking-wide font-bold text-rose-800 mb-2">
            SUPPORTING YOUR COMPLETE TECHNOLOGY JOURNEY
          </h3>
          <p className="text-neutral-500 text-[12.5px] leading-relaxed">
            From custom software development and web and mobile applications
            to enterprise solutions, API development, system integration,
            quality assurance, software modernization, and ongoing
            maintenance, TechTorch supports businesses across different
            stages of their technology journey.
          </p>
        </div>

        {/* Pull quote */}
        <div className="relative rounded-2xl bg-rose-100/60 border-l-4 border-rose-900 pl-8 pr-8 py-9">
          <span className="absolute top-4 left-6 text-5xl font-bold text-rose-300 leading-none select-none">
            &rdquo;
          </span>
          <p className="text-[#1c1c1c] font-semibold text-[22px] italic leading-snug mb-4 pl-4">
            "The right expertise. Flexible support. Technology built around
            your business needs."
          </p>
          <div className="flex items-center gap-2 pl-4">
            <span className="w-4 h-px bg-rose-900" />
            <span className="text-[11.5px] font-semibold text-rose-900">
              TechTorch Engineering Approach
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}