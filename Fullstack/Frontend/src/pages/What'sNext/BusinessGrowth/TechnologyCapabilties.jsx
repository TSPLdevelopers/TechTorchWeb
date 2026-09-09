import React from "react";
import {
  Lightbulb,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  Code2,
  Workflow,
  Rocket,
  Users,
} from "lucide-react";

const SERVICES = [
  {
    icon: Lightbulb,
    title: "IT Consultancy",
    description:
      "Get practical guidance for your digital transformation journey and make clearer technology decisions.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Explore AI-as-a-Service capabilities that can help businesses use AI without having to build and maintain the entire infrastructure themselves.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Build flexible infrastructure that can support changing workloads and business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect your digital assets and strengthen your organization's security as your technology environment grows.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Develop technology solutions designed around specific business and operational requirements.",
  },
  {
    icon: Workflow,
    title: "Business Process Outsourcing",
    description:
      "Improve operational efficiency by allowing your teams to focus more on their core business activities.",
  },
  {
    icon: Rocket,
    title: "Software Development & Support",
    description:
      "From development to deployment and ongoing support, keep your software reliable and ready for change.",
  },
  {
    icon: Users,
    title: "Resource & Staffing",
    description:
      "Access skilled technology professionals and flexible workforce solutions based on your requirements.",
  },
];

export default function TechnologyCapabilities() {
  return (
    <section
      className="w-full py-14 sm:py-16 md:py-20"
      style={{ backgroundColor: "#3a0e20" }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <p
            className="text-white/70 text-[11px] font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Institutional Capability
          </p>

          <h2
            className="text-white text-[24px] sm:text-[28px] md:text-[30px] font-bold leading-tight mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            The Technology Behind Your Growth
          </h2>

          <p
            className="text-white/70 text-[14px] sm:text-[15px] leading-relaxed mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Sometimes you need a new system. Sometimes you need to improve
            the system you already have. And sometimes, you need someone who
            can help you understand what technology makes sense for your
            business.
          </p>

          <p
            className="text-white text-[14px] sm:text-[15px] leading-relaxed font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            TechTorch provides services across different stages of the
            technology journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl p-5 sm:p-6"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Icon size={17} className="text-white" strokeWidth={1.75} />
              </div>

              <h3
                className="text-white text-[15px] sm:text-[16px] font-semibold mb-2 leading-snug"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {title}
              </h3>

              <p
                className="text-white/65 text-[13px] sm:text-[13.5px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}