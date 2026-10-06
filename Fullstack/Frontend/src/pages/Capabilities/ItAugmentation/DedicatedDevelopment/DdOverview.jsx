import React from "react";
import { BookOpen, Zap } from "lucide-react";

export default function CapabilityOverview() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center font-inter">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

        {/* Main Container */}
        <div className="rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[minmax(240px,1fr)_minmax(0,2.3fr)] gap-6 sm:gap-8 lg:gap-10">

          {/* ================= SIDEBAR ================= */}
          <div className="space-y-5">

            {/* Executive Briefing Card */}
            <div className="rounded-xl border border-neutral-200 p-5 sm:p-6 bg-white">

              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#730024]" />

                <span className="font-inter text-[10px] tracking-wide text-[#730024] font-bold">
                  EXECUTIVE BRIEFING
                </span>
              </div>

              <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[15px] sm:text-[16px] leading-snug mb-2">
                The Value of Flexible Engineering Support
              </h3>

              <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] leading-relaxed">
                Access the right technical expertise and additional
                engineering capacity to support your projects, strengthen
                existing teams, and respond to changing technology
                requirements.
              </p>

            </div>

            {/* Flexible & Scalable Support Card */}
            <div className="rounded-xl bg-[#730024]/5 border border-[#730024]/10 p-5 sm:p-6">

              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-3.5 h-3.5 text-[#730024]" />

                <h3 className="font-jakarta text-[11.5px] sm:text-[12px] font-semibold text-[#730024]">
                  Flexible & Scalable Support
                </h3>
              </div>

              <p className="font-inter text-neutral-600 text-[12.5px] sm:text-[13px] leading-relaxed">
                TechTorch provides flexible technology resources that can
                complement your existing teams and adapt to your project
                requirements and business priorities.
              </p>

            </div>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="min-w-0">

            {/* Eyebrow / Sub Heading */}
            <div className="flex items-center gap-2 mb-3">

              <span className="w-4 sm:w-5 h-px bg-[#730024]" />

              <span className="font-jakarta text-[10px] sm:text-[10.5px] tracking-wide text-[#730024] font-bold">
                CAPABILITY OVERVIEW
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl lg:text-[1.85rem] leading-snug mb-5">
              Build Stronger Technology Capabilities with IT Augmentation
            </h1>

            {/* Body */}
            <div className="font-inter space-y-4 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-relaxed text-neutral-600 mb-6">

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

            {/* Pull Quote */}
            <blockquote className="border-l-[3px] border-[#730024] bg-[#730024]/5 pl-4 sm:pl-5 pr-4 sm:pr-5 py-5 mb-6">

              <p className="font-jakarta text-[16px] sm:text-[17px] font-semibold text-[#1c1c1c] leading-snug">
                "The goal is simple: bring the right technical expertise to
                your team when you need it."
              </p>

            </blockquote>

            {/* Body Continued */}
            <div className="font-inter space-y-4 text-[13.5px] sm:text-[14px] lg:text-[14.5px] leading-relaxed text-neutral-600">

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