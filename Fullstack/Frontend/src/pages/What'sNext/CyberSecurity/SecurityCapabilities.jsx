import React from "react";

const capabilities = [
  {
    number: "01",
    title: "Risk & Security Assessment",
    description:
      "Understand where your current environment may be exposed. We help assess systems, applications and processes to identify security gaps and areas that require greater attention.",
  },
  {
    number: "02",
    title: "Threat Monitoring",
    description:
      "Security requires visibility. Monitoring helps organizations identify unusual activity and potential threats so appropriate action can be taken before an issue becomes a larger operational problem.",
  },
  {
    number: "03",
    title: "Application Security",
    description:
      "Security should begin with the applications your business relies on. We consider application-level risks and security requirements to help create stronger and more dependable digital products.",
  },
  {
    number: "04",
    title: "Data Protection",
    description:
      "Business information is one of an organization's most important assets. We help establish appropriate controls for protecting sensitive information and managing access to it.",
  },
  {
    number: "05",
    title: "Identity & Access Security",
    description:
      "Not every user should have access to everything. A structured approach to identity and access helps ensure people can access the systems and information they need while limiting unnecessary exposure.",
  },
  {
    number: "06",
    title: "Incident Response",
    description:
      "When a security incident occurs, the response needs to be clear and controlled. We help organizations establish processes for identifying, containing and recovering from security incidents.",
  },
  {
    number: "07",
    title: "Security Testing",
    description:
      "Testing provides an opportunity to identify weaknesses before they are exploited. We incorporate security considerations into testing and validation so vulnerabilities can be identified and addressed earlier.",
  },
  {
    number: "08",
    title: "Security Support",
    description:
      "Security needs to evolve as systems, users and threats change. Our support helps organizations maintain security practices, address issues and make improvements over time.",
  },
];

export default function CybersecurityCapabilitiesSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] text-fuchsia-900">
              CYBERSECURITY CAPABILITIES
            </span>
            <h1 className="mt-2 max-w-lg text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
              Security Across the Digital Environment
            </h1>
          </div>
          <span className="mt-1 inline-flex w-fit items-center rounded-full border border-slate-200 px-3 py-1 text-[10px] font-medium tracking-wide text-slate-500">
            DEFENSE DEPTH // ENTERPRISE GRADE
          </span>
        </div>

        {/* Banner image */}
        <div className="relative mt-8 overflow-hidden rounded-lg">
          <img
            src="/Cryptographic Interface  Security Layers.png"
            alt="Enterprise layer encryption architecture"
            className="h-48 w-full object-cover sm:h-56"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/60 px-4 py-2">
            <span className="text-[10px] tracking-wide text-slate-200">
              Enterprise Layer Encryption Architecture
            </span>
            <span className="text-[10px] tracking-wide text-slate-400">
              H::CIPHER_ROUTER_ACTIVE
            </span>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.number} className="rounded-md bg-slate-50 p-6">
              <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-1 text-[10px] font-semibold text-fuchsia-900">
                {c.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}