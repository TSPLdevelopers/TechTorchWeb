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
    <div className="w-full min-h-screen bg-white flex justify-center font-inter">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7 sm:mb-8">
          <div className="min-w-0">
            <div className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold mb-2">
              EXECUTIVE BRIEFING & GOVERNANCE
            </div>

            <h1 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl lg:text-[2rem] leading-snug mb-2 max-w-3xl">
              Supporting Technology Projects with the Right Expertise
            </h1>

            <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] lg:text-[13.5px] leading-relaxed max-w-2xl">
              Technology projects can require specialised skills at different
              stages of development. The right engineering support can help
              businesses address technical requirements while complementing
              their existing teams.
            </p>
          </div>

          <span className="w-fit inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-inter font-medium text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-full shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
            Project-Aligned Engineering Support
          </span>
        </div>

        <div className="border-t border-neutral-200 mb-7 sm:mb-8" />

        {/* ================= THREE CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14 lg:mb-16">

          {/* ================= CARD 1 ================= */}
          <div className="rounded-xl border border-neutral-200 p-4 sm:p-5 hover:border-[#730024]/20 transition-colors duration-300">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[9.5px] font-inter font-semibold text-[#730024] bg-[#730024]/5 px-2.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
                DELIVERY ALIGNMENT
              </span>

              <TrendingUp className="w-4 h-4 text-neutral-300 shrink-0" />
            </div>

            <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[14px] sm:text-[14.5px] leading-snug mb-2">
              Project-Aligned Delivery
            </h3>

            <p className="font-inter text-neutral-500 text-[11.5px] sm:text-[12px] leading-relaxed mb-4">
              Align technical expertise with your project requirements,
              development objectives, and expected outcomes.
            </p>

            <div className="border-t border-neutral-100 pt-3 space-y-2">
              {deliveryChecks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] text-neutral-600 font-inter"
                >
                  <Check className="w-3 h-3 text-[#730024] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CARD 2 ================= */}
          <div className="rounded-xl border border-neutral-200 p-4 sm:p-5 hover:border-[#730024]/20 transition-colors duration-300">
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[9.5px] font-inter font-semibold text-[#730024] bg-[#730024]/5 px-2.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
                STRUCTURED COLLABORATION
              </span>

              <Users className="w-4 h-4 text-neutral-300 shrink-0" />
            </div>

            <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[14px] sm:text-[14.5px] leading-snug mb-2">
              Structured Project Collaboration
            </h3>

            <p className="font-inter text-neutral-500 text-[11.5px] sm:text-[12px] leading-relaxed mb-4">
              Work alongside your existing teams across software development,
              integration, testing, and other technical activities.
            </p>

            <div className="border-l-2 border-[#730024] pl-2 mb-2">
              <span className="font-inter text-[9px] tracking-wide text-neutral-400 font-semibold">
                CORE POD ROLES
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {podRoles.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-inter font-medium text-neutral-600 bg-neutral-100 px-2 py-1 rounded"
                >
                  <Icon className="w-3 h-3 text-[#730024] shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ================= CARD 3 ================= */}
          <div className="relative rounded-xl bg-[#730024] p-4 sm:p-5 overflow-hidden flex flex-col min-h-[250px]">

            {/* Decorative Circle */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative flex items-center justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[9.5px] font-inter font-semibold text-white bg-white/10 px-2.5 py-1.5 rounded-full">
                <Layers className="w-3 h-3" />
                FLEXIBLE CAPABILITY
              </span>

              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            </div>

            <h3 className="relative font-jakarta text-white font-semibold text-[14px] sm:text-[15px] leading-snug mb-2">
              Flexible Engineering Support
            </h3>

            <p className="relative font-inter text-white/70 text-[11.5px] sm:text-[12px] leading-relaxed mb-5 flex-1">
              Access additional technical capabilities based on your project
              requirements and changing business priorities.
            </p>

            <button className="relative inline-flex items-center justify-center gap-2 rounded-md bg-white text-[#730024] font-inter font-semibold text-[11.5px] sm:text-[12px] px-4 py-2.5 hover:bg-neutral-100 transition-colors duration-300 w-fit">
              Talk to Our Experts
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ================= DEEP DIVE ================= */}
        <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-inter font-bold text-[#730024] bg-[#730024]/5 px-3 py-1.5 rounded-full mb-4 sm:mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#730024]" />
          CAPABILITY DEEP DIVE • PROJECT-BASED ENGINEERING
        </div>

        <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl lg:text-[2rem] leading-snug mb-6 sm:mb-8 max-w-3xl">
          Project-Based Engineering for Evolving Technology Needs
        </h2>

        {/* ================= TWO COLUMN TEXT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 lg:gap-10 mb-7 sm:mb-8">
          <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] lg:text-[13.5px] leading-relaxed">
            Technology requirements can change throughout the project
            lifecycle. Businesses may need additional expertise when
            developing new applications, improving existing systems,
            integrating platforms, testing software, or modernising legacy
            technology.
          </p>

          <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] lg:text-[13.5px] leading-relaxed">
            TechTorch provides software engineering and resource support
            designed to complement existing teams and address specific
            technology requirements. Our approach starts with understanding
            business needs and objectives, then aligning the appropriate
            technical capabilities with the project.
          </p>
        </div>

        {/* ================= JOURNEY BOX ================= */}
        <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4 sm:p-5 lg:p-6 mb-7 sm:mb-8">
          <h3 className="font-jakarta text-[10px] sm:text-[11px] tracking-wide font-semibold text-[#730024] mb-2">
            SUPPORTING YOUR COMPLETE TECHNOLOGY JOURNEY
          </h3>

          <p className="font-inter text-neutral-500 text-[12px] sm:text-[12.5px] leading-relaxed">
            From custom software development and web and mobile applications
            to enterprise solutions, API development, system integration,
            quality assurance, software modernization, and ongoing
            maintenance, TechTorch supports businesses across different
            stages of their technology journey.
          </p>
        </div>

        {/* ================= PULL QUOTE ================= */}
        <div className="relative rounded-xl sm:rounded-2xl bg-[#730024]/5 border-l-4 border-[#730024] pl-5 sm:pl-7 lg:pl-8 pr-5 sm:pr-7 lg:pr-8 py-7 sm:py-8 lg:py-9">

          <span className="absolute top-3 sm:top-4 left-4 sm:left-6 text-4xl sm:text-5xl font-jakarta font-bold text-[#730024]/20 leading-none select-none">
            &rdquo;
          </span>

          <p className="font-jakarta text-[#1c1c1c] font-semibold text-[17px] sm:text-[20px] lg:text-[22px] italic leading-snug mb-4 pl-2 sm:pl-4 max-w-4xl">
            "The right expertise. Flexible support. Technology built around
            your business needs."
          </p>

          <div className="flex items-center gap-2 pl-2 sm:pl-4">
            <span className="w-4 h-px bg-[#730024]" />

            <span className="font-inter text-[10.5px] sm:text-[11.5px] font-semibold text-[#730024]">
              TechTorch Engineering Approach
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}