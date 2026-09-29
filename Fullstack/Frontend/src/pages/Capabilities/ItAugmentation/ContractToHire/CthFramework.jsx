import React from "react";
import { BookOpen, ShieldCheck, FileText } from "lucide-react";

export default function SmarterHiringApproach() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center font-inter">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,1fr)_minmax(0,2.2fr)] gap-8 sm:gap-10 lg:gap-12">

          {/* ================= SIDEBAR ================= */}
          <div className="space-y-5">

            {/* Executive Briefing Card */}
            <div className="rounded-xl border border-neutral-200 p-5 sm:p-6 bg-white">

              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#730024]" />

                <span className="text-[10px] tracking-wide text-[#730024] font-bold">
                  EXECUTIVE BRIEFING
                </span>
              </div>

              <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[16px] sm:text-[17px] leading-snug mb-2">
                The True Cost of a Mis-Hire
              </h3>

              <p className="font-inter text-neutral-500 text-[12.5px] sm:text-[13px] leading-relaxed mb-6">
                Why forward-thinking CTOs and Heads of Talent structure
                permanent engineering recruitment through contract-to-hire
                validation.
              </p>

              <div className="space-y-5">

                {/* Traditional Bad Hire Cost */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                    <span className="text-[12px] text-neutral-500">
                      Traditional Bad Hire Cost
                    </span>

                    <span className="text-[12px] font-semibold text-[#1c1c1c]">
                      3x Annual Salary
                    </span>
                  </div>

                  <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-[85%] bg-[#730024] rounded-full" />
                  </div>
                </div>

                {/* TechTorch Severance Exposure */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                    <span className="text-[12px] text-neutral-500">
                      TechTorch Severance Exposure
                    </span>

                    <span className="text-[12px] font-semibold text-[#730024]">
                      0% Liability
                    </span>
                  </div>

                  <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-[4%] bg-[#730024] rounded-full" />
                  </div>
                </div>

                {/* Candidate Swap Guarantee */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-[12px] text-neutral-500">
                    Candidate Swap Guarantee
                  </span>

                  <span className="text-[12px] font-semibold text-[#1c1c1c]">
                    &lt; 48 Hours
                  </span>
                </div>

              </div>
            </div>

            {/* Seamless Transition Protocol */}
            <div className="rounded-xl bg-[#730024]/5 border border-[#730024]/10 p-5 sm:p-6">

              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#730024]" />

                <h3 className="font-jakarta text-[12px] sm:text-[13px] font-semibold text-[#730024]">
                  Seamless Transition Protocol
                </h3>
              </div>

              <p className="font-inter text-neutral-600 text-[12.5px] sm:text-[13px] leading-relaxed">
                All intellectual property assignments, proprietary code
                agreements, and SOC 2 / HIPAA compliance protocols transition
                seamlessly without contractual downtime or legal disruption.
              </p>

            </div>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="min-w-0">

            {/* Eyebrow / Sub Heading */}
            <div className="flex items-center gap-2 mb-4">

              <span className="w-4 sm:w-5 h-px bg-[#730024]" />

              <span className="font-jakarta text-[10px] sm:text-[11px] tracking-wide text-[#730024] font-semibold">
                Contract-to-Hire Framework
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl lg:text-[2rem] leading-snug mb-5 sm:mb-6">
              A Smarter Approach to Technology Hiring
            </h1>

            {/* Body */}
            <div className="font-inter space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-neutral-600 mb-7 sm:mb-8">

              <p>
                Finding the right technology talent is about more than
                matching a resume with a job description. The right
                professional needs the technical expertise, problem-solving
                ability, communication, and adaptability to work effectively
                within your organisation.
              </p>

              <p>
                TechTorch's Contract-to-Hire approach provides a flexible way
                to evaluate technology professionals through practical
                project engagement. Instead of relying only on interviews and
                assessments, organisations can experience how a professional
                contributes to real work, collaborates with teams, and adapts
                to their technology environment.
              </p>

            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-[3px] border-[#730024] bg-[#730024]/5 pl-4 sm:pl-6 pr-4 sm:pr-6 py-5 sm:py-6 mb-7 sm:mb-8">

              <p className="font-jakarta text-[17px] sm:text-[19px] font-semibold text-[#1c1c1c] leading-snug mb-3">
                "Evaluate the fit. Experience the capability. Build with
                confidence."
              </p>

              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#730024]" />

                <span className="font-inter text-[10px] sm:text-[11px] font-semibold tracking-wide text-[#730024]">
                  TECHTORCH TALENT ADVISORY PRINCIPLE
                </span>
              </div>

            </blockquote>

            {/* Body Continued */}
            <div className="font-inter space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-neutral-600">

              <p>
                This approach helps businesses gain a clearer understanding
                of technical capability, working style, team compatibility,
                and long-term potential before moving toward a permanent
                engagement.
              </p>

              <p>
                With TechTorch, organisations can create a more informed path
                from initial engagement to long-term technology
                partnership—helping them build capable teams while
                maintaining the flexibility to make the right hiring
                decision.
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}