import React from "react";
import { BookOpen, Zap } from "lucide-react";

const capabilities = [
  {
    title: "Custom Software Development",
    description:
      "Build software solutions designed around your specific business requirements, with a focus on scalability, flexibility, and long-term usability.",
  },
  {
    title: "Web & Mobile Application Development",
    description:
      "Develop responsive and feature-rich applications designed to provide reliable experiences across platforms and devices.",
  },
  {
    title: "Enterprise Software Solutions",
    description:
      "Support core business operations with solutions that integrate with existing systems and help streamline workflows.",
  },
  {
    title: "API Development & System Integration",
    description:
      "Enable secure and reliable data exchange between applications and connect technology platforms with third-party services.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through functional, performance, security, and usability testing, including automated and manual approaches.",
  },
  {
    title: "Software Modernization",
    description:
      "Upgrade legacy systems and move toward modern architectures and cloud-based environments where appropriate.",
  },
];

const whyCards = [
  {
    title: "Technology Expertise Aligned to Your Business",
    description:
      "TechTorch combines expertise in modern technologies and development methodologies with an agile approach to project delivery. Our focus is on understanding your requirements and delivering technology solutions that align with your goals.",
  },
  {
    title: "Flexible Workforce Solutions",
    description:
      "Our Resource and Staffing services are designed to provide businesses with skilled professionals and flexible workforce solutions, helping organisations strengthen their technology capabilities according to their needs.",
  },
  {
    title: "Dedicated Technical Support",
    description:
      "From development and testing to deployment, maintenance, and ongoing support, TechTorch provides technical capabilities that can support your technology journey from project requirements through continued improvement.",
  },
];

export default function ScaleCapabilitiesPage() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center font-inter">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 sm:gap-8 lg:gap-10">

          {/* ================= SIDEBAR ================= */}
          <div className="space-y-5">
            {/* Executive Briefing */}
            <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#730024] shrink-0" />

                <span className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold">
                  EXECUTIVE BRIEFING
                </span>
              </div>

              <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[14px] sm:text-[15px] leading-snug mb-2">
                The Value of Flexible Engineering Support
              </h3>

              <p className="font-inter text-neutral-500 text-[11.5px] sm:text-[12px] leading-relaxed">
                Access the right technical expertise and additional
                engineering capacity to support your projects, strengthen
                existing teams, and respond to changing technology
                requirements.
              </p>
            </div>

            {/* Flexible Support */}
            <div className="rounded-xl bg-[#730024]/5 border border-[#730024]/10 p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-3.5 h-3.5 text-[#730024] shrink-0" />

                <span className="font-jakarta text-[10px] sm:text-[11px] tracking-wide font-semibold text-[#730024]">
                  FLEXIBLE & SCALABLE SUPPORT
                </span>
              </div>

              <p className="font-inter text-neutral-600 text-[11.5px] sm:text-[12px] leading-relaxed">
                TechTorch provides flexible technology resources that can
                complement your existing teams and adapt to your project
                requirements and business priorities.
              </p>
            </div>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="min-w-0 rounded-xl sm:rounded-2xl border border-neutral-200 p-4 sm:p-6 lg:p-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 sm:w-5 h-px bg-[#730024] shrink-0" />

              <span className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold">
                CAPABILITY OVERVIEW
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-jakarta text-[#1c1c1c] font-semibold text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.15rem] leading-[1.2] mb-5 sm:mb-6 max-w-4xl">
              Scale Your Technology Capabilities with Skilled Remote Engineers
            </h1>

            {/* Body */}
            <div className="font-inter space-y-4 text-[13px] sm:text-[13.5px] lg:text-[14px] leading-relaxed text-neutral-600 mb-8 sm:mb-10">
              <p>
                Building and maintaining digital products requires the right
                technical expertise and engineering capacity. As technology
                requirements evolve, organisations may need additional skills
                and resources to support software development,
                implementation, testing, and ongoing improvement.
              </p>

              <p>
                TechTorch IT Augmentation provides access to skilled
                professionals and flexible workforce solutions designed to
                complement your existing technology teams. Our approach
                focuses on understanding your business requirements and
                providing technical capabilities aligned with your project
                goals.
              </p>

              <p>
                From software engineering and application development to
                system integration, quality assurance, modernization,
                maintenance, and support, our technology expertise can help
                organisations address a wide range of software and
                engineering requirements.
              </p>

              <p>
                Our professionals can work as an extension of your existing
                team, helping support development initiatives while your
                organisation remains focused on its core business priorities.
              </p>
            </div>

            {/* ================= TECHNICAL OFFERINGS ================= */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 sm:w-5 h-px bg-[#730024] shrink-0" />

              <span className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold">
                TECHNICAL OFFERINGS
              </span>
            </div>

            <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-lg sm:text-xl leading-snug mb-4 sm:mb-5">
              Our Technology Capabilities
            </h2>

            {/* Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-neutral-200 bg-neutral-50/60 p-4 sm:p-5 hover:border-[#730024]/20 transition-colors duration-300"
                >
                  <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[12.5px] sm:text-[13px] leading-snug mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>

                  <p className="font-inter text-neutral-500 text-[11.5px] sm:text-[12px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* Maintenance & Technical Support */}
              <div className="sm:col-span-2 rounded-lg border border-neutral-200 bg-neutral-50/60 p-4 sm:p-5 hover:border-[#730024]/20 transition-colors duration-300">
                <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[12.5px] sm:text-[13px] leading-snug mb-1.5 sm:mb-2">
                  Maintenance & Technical Support
                </h3>

                <p className="font-inter text-neutral-500 text-[11.5px] sm:text-[12px] leading-relaxed">
                  Provide ongoing support to address technical challenges,
                  maintain software performance, and support continuous
                  improvement.
                </p>
              </div>
            </div>

            {/* ================= VALUE PROPOSITION ================= */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 sm:w-5 h-px bg-[#730024] shrink-0" />

              <span className="font-inter text-[9px] sm:text-[10px] tracking-wide text-[#730024] font-bold">
                VALUE PROPOSITION
              </span>
            </div>

            <h2 className="font-jakarta text-[#1c1c1c] font-semibold text-lg sm:text-xl leading-snug mb-4 sm:mb-5">
              Why TechTorch
            </h2>

            {/* Why TechTorch Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {whyCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-neutral-200 p-4 sm:p-5 hover:border-[#730024]/20 transition-colors duration-300"
                >
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#730024] mb-3" />

                  <h3 className="font-jakarta text-[#1c1c1c] font-semibold text-[12.5px] sm:text-[13px] leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="font-inter text-neutral-500 text-[11.5px] sm:text-[12px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}