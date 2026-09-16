import React from "react";
import { BookOpen, Zap } from "lucide-react";

export default function CapabilityOverview() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-neutral-200 p-6 grid grid-cols-1 md:grid-cols-[1fr_2.3fr] gap-6">
          {/* Sidebar */}
          <div className="space-y-5">
            {/* Executive Briefing card */}
            <div className="rounded-xl border border-neutral-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                  EXECUTIVE BRIEFING
                </span>
              </div>
              <h3 className="text-[#1c1c1c] font-semibold text-[15px] leading-snug mb-2">
                The Value of Flexible Engineering Support
              </h3>
              <p className="text-neutral-500 text-[12.5px] leading-relaxed">
                Access the right technical expertise and additional
                engineering capacity to support your projects, strengthen
                existing teams, and respond to changing technology
                requirements.
              </p>
            </div>

            {/* Flexible & Scalable Support card */}
            <div className="rounded-xl bg-rose-50/60 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[11.5px] font-semibold text-rose-900">
                  Flexible & Scalable Support
                </span>
              </div>
              <p className="text-neutral-600 text-[12.5px] leading-relaxed">
                TechTorch provides flexible technology resources that can
                complement your existing teams and adapt to your project
                requirements and business priorities.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-px bg-rose-800" />
              <span className="text-[10.5px] tracking-wide text-rose-800 font-bold">
                CAPABILITY OVERVIEW
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[#1c1c1c] font-semibold text-2xl sm:text-[1.75rem] leading-snug mb-5">
              Build Stronger Technology Capabilities with IT Augmentation
            </h1>

            {/* Body */}
            <div className="space-y-4 text-[14.5px] leading-relaxed text-neutral-600 mb-6">
              <p>
                Technology projects often require specialised skills,
                additional engineering capacity, or dedicated technical
                support. Building the right team at the right time can help
                businesses keep projects moving while responding to changing
                technology and business requirements.
              </p>
              <p>
                TechTorch IT Augmentation helps organisations access skilled
                technology professionals and flexible workforce solutions
                based on their specific needs. Our approach is designed to
                complement existing teams, strengthen technical capabilities,
                and provide the expertise required to support ongoing
                projects.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-[3px] border-rose-800 bg-rose-50/60 pl-5 pr-5 py-5 mb-6">
              <p className="text-[17px] font-semibold text-[#1c1c1c] leading-snug">
                "The goal is simple: bring the right technical expertise to
                your team when you need it."
              </p>
            </blockquote>

            {/* Body continued */}
            <div className="space-y-4 text-[14.5px] leading-relaxed text-neutral-600">
              <p>
                From software engineering and application development to
                technical support and modern technology requirements, our
                professionals can work alongside your teams to contribute to
                project delivery and business objectives.
              </p>
              <p>
                TechTorch combines expertise in modern technologies and
                development methodologies with an agile approach to project
                delivery. Our software engineering capabilities cover custom
                software development, web and mobile applications, enterprise
                solutions, API development, system integration, quality
                assurance, modernization, and ongoing maintenance and
                support.
              </p>
              <p>
                With a flexible approach to resource and staffing,
                organisations can strengthen their teams while maintaining
                focus on their core business priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}