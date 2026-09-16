import React from "react";
import { BookOpen, ShieldCheck, FileText } from "lucide-react";

export default function SmarterHiringApproach() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2.2fr] gap-10">
          {/* Sidebar */}
          <div className="space-y-5">
            {/* Executive Briefing card */}
            <div className="rounded-xl border border-neutral-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[10px] tracking-wide text-rose-800 font-bold">
                  EXECUTIVE BRIEFING
                </span>
              </div>

              <h3 className="text-[#1c1c1c] font-semibold text-[16px] mb-2">
                The True Cost of a Mis-Hire
              </h3>
              <p className="text-neutral-500 text-[12.5px] leading-relaxed mb-6">
                Why forward-thinking CTOs and Heads of Talent structure
                permanent engineering recruitment through contract-to-hire
                validation.
              </p>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[12px] text-neutral-500">
                      Traditional Bad Hire Cost
                    </span>
                    <span className="text-[12px] font-semibold text-[#1c1c1c]">
                      3x Annual Salary
                    </span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-[85%] bg-rose-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[12px] text-neutral-500">
                      TechTorch Severance Exposure
                    </span>
                    <span className="text-[12px] font-semibold text-rose-800">
                      0% Liability
                    </span>
                  </div>
                  <div className="h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-[4%] bg-rose-800 rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-neutral-500">
                    Candidate Swap Guarantee
                  </span>
                  <span className="text-[12px] font-semibold text-[#1c1c1c]">
                    &lt; 48 Hours
                  </span>
                </div>
              </div>
            </div>

            {/* Seamless Transition Protocol card */}
            <div className="rounded-xl bg-rose-50/60 p-6">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[12px] font-semibold text-rose-900">
                  Seamless Transition Protocol
                </span>
              </div>
              <p className="text-neutral-600 text-[12.5px] leading-relaxed">
                All intellectual property assignments, proprietary code
                agreements, and SOC 2 / HIPAA compliance protocols transition
                seamlessly without contractual downtime or legal disruption.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-4 h-px bg-rose-800" />
              <span className="text-[11px] tracking-wide text-rose-800 font-semibold">
                Contract-to-Hire Framework
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[#1c1c1c] font-semibold text-3xl sm:text-[2rem] leading-snug mb-6">
              A Smarter Approach to Technology Hiring
            </h1>

            {/* Body */}
            <div className="space-y-5 text-[15px] leading-relaxed text-neutral-600 mb-8">
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

            {/* Pull quote */}
            <blockquote className="border-l-[3px] border-rose-800 bg-rose-50/60 pl-6 pr-6 py-6 mb-8">
              <p className="text-[19px] font-semibold text-[#1c1c1c] leading-snug mb-3">
                "Evaluate the fit. Experience the capability. Build with
                confidence."
              </p>
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-rose-800" />
                <span className="text-[11px] font-semibold tracking-wide text-rose-800">
                  TECHTORCH TALENT ADVISORY PRINCIPLE
                </span>
              </div>
            </blockquote>

            {/* Body continued */}
            <div className="space-y-5 text-[15px] leading-relaxed text-neutral-600">
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