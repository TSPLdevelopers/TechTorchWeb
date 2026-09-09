import React from "react";
import {
  Code2,
  Smartphone,
  Building2,
  RefreshCw,
  Link2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Build software around your specific business needs.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Create responsive digital experiences designed for modern users and devices.",
  },
  {
    icon: Building2,
    title: "Enterprise Software",
    description:
      "Develop solutions for core business functions such as ERP, CRM, and HRMS.",
  },
  {
    icon: RefreshCw,
    title: "Software Modernization",
    description:
      "Move outdated systems toward modern architectures and cloud-based environments.",
  },
  {
    icon: Link2,
    title: "API & System Integration",
    description:
      "Connect different applications and enable secure exchange of information.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Assurance",
    description:
      "Test functionality, performance, security, and usability before deployment.",
  },
  {
    icon: Sparkles,
    title: "Ongoing Support",
    description:
      "Keep systems healthy through updates, monitoring, maintenance, and technical support.",
  },
];

export default function CoreEngineering() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-8 lg:gap-12 xl:gap-16">
        {/* Left: intro */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <p
            className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "#9d174d", fontFamily: "'Inter', sans-serif" }}
          >
            Core Engineering
          </p>

          <h2
            className="text-[22px] sm:text-[24px] lg:text-[26px] font-bold leading-snug mb-4"
            style={{ color: "#3a0e20", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            When Your Business Needs Technology Built Around It
          </h2>

          <p
            className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Not every business problem can be solved with an off-the-shelf
            product. Sometimes you need something more specific: A custom
            application. A new business platform. An integration between
            existing systems. Or a modern replacement for an outdated
            solution.
          </p>

          <p
            className="text-[14px] sm:text-[15px] leading-relaxed text-slate-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            TechTorch provides end-to-end software development and support,
            covering requirement analysis, design and development, testing,
            deployment, maintenance, and continuous improvement.
          </p>
        </div>

        {/* Right: service list */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl bg-[#fafafa] p-4 sm:p-5"
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#fbe4ec" }}
              >
                <Icon size={17} style={{ color: "#9d174d" }} strokeWidth={2} />
              </div>

              <div className="min-w-0">
                <h3
                  className="text-[15px] sm:text-[16px] font-semibold mb-1"
                  style={{ color: "#111827", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {title}
                </h3>

                <p
                  className="text-[13px] sm:text-[13.5px] leading-relaxed text-slate-500"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}