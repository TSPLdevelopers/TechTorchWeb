import React from "react";
import {
  Code2,
  Smartphone,
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowUpCircle,
  RefreshCw,
  UserPlus,
  Route,
  Target,
} from "lucide-react";

const domains = [
  {
    icon: Code2,
    label: "DOMAIN 01",
    title: "Custom Software Development",
    description:
      "Build tailored software solutions designed around your business requirements, processes, and operational objectives.",
  },
  {
    icon: Smartphone,
    label: "DOMAIN 02",
    title: "Web & Mobile Application Development",
    description:
      "Create responsive and feature-rich web and mobile applications that support modern digital experiences across devices.",
  },
  {
    icon: BarChart3,
    label: "DOMAIN 03",
    title: "Enterprise Software Solutions",
    description:
      "Develop and enhance software solutions that support core business processes, workflows, and organisational requirements.",
  },
  {
    icon: Workflow,
    label: "DOMAIN 04",
    title: "API Development & System Integration",
    description:
      "Connect applications, platforms, and services through APIs and integrations that enable reliable data exchange and connected workflows.",
  },
  {
    icon: ShieldCheck,
    label: "DOMAIN 05",
    title: "Quality Assurance & Testing",
    description:
      "Support software quality through structured testing across functionality, performance, security, and usability using appropriate testing approaches.",
  },
  {
    icon: ArrowUpCircle,
    label: "DOMAIN 06",
    title: "Software Modernization",
    description:
      "Modernise existing applications and legacy systems with updated architectures and technologies to support evolving business requirements.",
  },
];

const maintenance = {
  icon: RefreshCw,
  label: "DOMAIN 07",
  title: "Ongoing Maintenance & Support",
  description:
    "Provide continued technical support, maintenance, updates, performance improvements, and enhancements after deployment.",
};

const features = [
  {
    icon: UserPlus,
    tag: "01 / TEAM",
    title: "A Flexible Extension of Your Team",
    description:
      "Strengthen your existing technology capabilities with skilled resources that can contribute to your projects and technical requirements.",
  },
  {
    icon: Route,
    tag: "02 / PROCESS",
    title: "From Requirements to Delivery",
    description:
      "Our approach begins with understanding your business needs and objectives, followed by design, development, testing, deployment, and ongoing support as required.",
  },
  {
    icon: Target,
    tag: "03 / IMPACT",
    title: "Expertise That Supports Your Goals",
    description:
      "Bring together technology expertise and flexible resources to support your projects and respond to changing business requirements.",
  },
];

export default function SpecializedDomainsPage() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-[10px] tracking-wide text-rose-800 font-bold mb-3">
            SPECIALIZED DOMAINS
          </div>
          <h1 className="text-[#1c1c1c] font-semibold text-2xl mb-3">
            Supporting Your Complete Technology Journey
          </h1>
          <p className="text-neutral-500 text-[13px] leading-relaxed max-w-lg mx-auto">
            Our software engineering capabilities cover a broad range of
            technology requirements, allowing businesses to access support
            based on their specific project needs.
          </p>
        </div>

        {/* Domain cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {domains.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.label}
                className="rounded-lg border border-neutral-200 p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-rose-800" />
                </div>
                <div className="text-[9.5px] tracking-wide text-neutral-400 font-semibold mb-2">
                  {d.label}
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[13px] leading-snug mb-2">
                  {d.title}
                </h3>
                <p className="text-neutral-500 text-[11.5px] leading-relaxed">
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Full-width maintenance card */}
        <div className="rounded-lg border border-neutral-200 p-5 mb-10">
          <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center mb-4">
            <RefreshCw className="w-4 h-4 text-rose-800" />
          </div>
          <div className="text-[9.5px] tracking-wide text-neutral-400 font-semibold mb-2">
            {maintenance.label}
          </div>
          <h3 className="text-[#1c1c1c] font-semibold text-[13px] leading-snug mb-2">
            {maintenance.title}
          </h3>
          <p className="text-neutral-500 text-[11.5px] leading-relaxed max-w-2xl">
            {maintenance.description}
          </p>
        </div>

        {/* Bottom feature cards */}
        <div className="rounded-xl border border-neutral-200 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.tag}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-rose-800" />
                  </div>
                  <span className="text-[9.5px] font-semibold text-neutral-400 bg-neutral-100 px-2 py-1 rounded">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-[#1c1c1c] font-semibold text-[13.5px] mb-2">
                  {f.title}
                </h3>
                <p className="text-neutral-500 text-[11.5px] leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}