import React from "react";

const services = [
  {
    title: "Custom Software",
    description: "Develop software around specific business requirements.",
  },
  {
    title: "Web & Mobile Applications",
    description: "Build applications for different business and user requirements.",
  },
  {
    title: "Enterprise Software",
    description: "Develop business applications including ERP, CRM and HRMS solutions.",
  },
  {
    title: "API & System Integration",
    description: "Connect applications and enable data exchange between systems.",
  },
  {
    title: "Software Modernization",
    description: "Modernize existing software and move toward current technology environments.",
  },
  {
    title: "Testing & Quality Assurance",
    description: "Test applications for functionality, performance, security and usability.",
  },
  {
    title: "Maintenance & Support",
    description: "Provide ongoing updates, maintenance and technical support.",
  },
];

export default function TechServicesSection() {
  return (
    <section className="bg-[#3a0a25] text-[#f5eef1] px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto">
        <span className="inline-block text-[11px] font-bold tracking-wide bg-white/10 rounded-full px-3.5 py-1.5 mb-5">
          Software &amp; Engineering
        </span>

        <h1 className="text-3xl md:text-[42px] font-extrabold leading-tight tracking-tight mb-4">
          Technology Designed Around
          <br />
          Your Requirements
        </h1>

        <p className="max-w-xl text-white/70 text-base leading-relaxed mb-11">
          When your business requires custom applications or improvements to
          existing systems, TechTorch provides software development and
          engineering services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="bg-[#4c1536] border border-white/[0.06] rounded-xl p-5"
            >
              <h3 className="font-bold text-[15px] mb-2.5">
                {i + 1}. {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}