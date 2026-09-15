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
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          gap-8
          px-4
          sm:gap-10
          sm:px-6
          lg:grid-cols-[340px_minmax(0,1fr)]
          lg:gap-12
          lg:px-8
          xl:gap-16
        "
      >
        {/* ================= LEFT: INTRO ================= */}

        <div className="w-full lg:sticky lg:top-20 lg:self-start">
          {/* LABEL - INTER */}
          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              sm:text-[11px]
            "
            style={{
              color: "#9d174d",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Core Engineering
          </p>

          {/* HEADING - PLUS JAKARTA SANS */}
          <h2
            className="
              mb-4
              text-[22px]
              font-bold
              leading-snug
              sm:text-[24px]
              lg:text-[26px]
            "
            style={{
              color: "#3a0e20",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            When Your Business Needs Technology Built Around It
          </h2>

          {/* SUBHEADING - PLUS JAKARTA SANS */}
          <p
            className="
              mb-4
              text-[13px]
              leading-relaxed
              text-slate-500
              sm:text-[14px]
              md:text-[15px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Not every business problem can be solved with an off-the-shelf
            product. Sometimes you need something more specific: A custom
            application. A new business platform. An integration between
            existing systems. Or a modern replacement for an outdated
            solution.
          </p>

          {/* SECOND SUBHEADING - PLUS JAKARTA SANS */}
          <p
            className="
              text-[13px]
              leading-relaxed
              text-slate-500
              sm:text-[14px]
              md:text-[15px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            TechTorch provides end-to-end software development and support,
            covering requirement analysis, design and development, testing,
            deployment, maintenance, and continuous improvement.
          </p>
        </div>

        {/* ================= RIGHT: SERVICE LIST ================= */}

        <div className="flex w-full min-w-0 flex-col gap-3 sm:gap-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="
                flex
                w-full
                min-w-0
                items-start
                gap-3
                rounded-xl
                bg-[#fafafa]
                p-4
                transition-all
                duration-300
                ease-out
                hover:bg-[#fdf2f8]
                sm:gap-4
                sm:p-5
              "
            >
              {/* ICON */}
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  sm:h-10
                  sm:w-10
                "
                style={{
                  backgroundColor: "#fbe4ec",
                }}
              >
                <Icon
                  size={17}
                  className="sm:h-[18px] sm:w-[18px]"
                  style={{
                    color: "#9d174d",
                  }}
                  strokeWidth={2}
                />
              </div>

              {/* CONTENT */}
              <div className="min-w-0 flex-1">
                {/* CARD TITLE - INTER */}
                <h3
                  className="
                    mb-1
                    text-[14px]
                    font-semibold
                    leading-snug
                    sm:text-[15px]
                    md:text-[16px]
                  "
                  style={{
                    color: "#111827",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {title}
                </h3>

                {/* CARD DESCRIPTION - INTER */}
                <p
                  className="
                    text-[12.5px]
                    leading-relaxed
                    text-slate-500
                    sm:text-[13px]
                    md:text-[13.5px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
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