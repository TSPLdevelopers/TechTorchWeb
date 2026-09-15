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
    <section
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:px-10
        lg:py-16
        xl:px-12
        xl:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= HEADER ================= */}
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-start
            sm:justify-between
            sm:gap-6
          "
        >
          <div className="min-w-0">
            {/* Section Label */}
            <span
              className="
                text-[9px]
                font-semibold
                tracking-[0.15em]
                text-fuchsia-900
                sm:text-[10px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              CYBERSECURITY CAPABILITIES
            </span>

            {/* Main Heading */}
            <h1
              className="
                mt-2
                w-full
                max-w-[350px]
                text-[22px]
                font-bold
                leading-[1.3]
                text-slate-900
                sm:max-w-xl
                sm:text-[25px]
                md:max-w-2xl
                md:text-[28px]
                lg:max-w-3xl
                lg:text-[30px]
                xl:text-[32px]
              "
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Security Across the Digital Environment
            </h1>
          </div>

          {/* Security Badge */}
          <span
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              rounded-full
              border
              border-slate-200
              px-3
              py-1
              text-[9px]
              font-medium
              tracking-wide
              text-slate-500
              sm:mt-1
              sm:text-[10px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            DEFENSE DEPTH // ENTERPRISE GRADE
          </span>
        </div>

        {/* ================= BANNER IMAGE ================= */}
        <div
          className="
            relative
            mt-7
            w-full
            overflow-hidden
            rounded-lg
            sm:mt-8
            sm:rounded-xl
          "
        >
          <img
            src="/Cryptographic Interface  Security Layers.png"
            alt="Enterprise layer encryption architecture"
            loading="lazy"
            className="
              block
              h-[220px]
              w-full
              object-cover
              object-center
              sm:h-[260px]
              md:h-[280px]
              lg:h-[300px]
              xl:h-[320px]
            "
          />

          {/* Image Bottom Overlay */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              flex
              flex-col
              gap-1
              bg-black/55
              px-3
              py-2
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-4
              sm:py-2.5
            "
          >
            <span
              className="
                text-[9px]
                tracking-wide
                text-slate-200
                sm:text-[10px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Enterprise Layer Encryption Architecture
            </span>

            <span
              className="
                text-[8px]
                tracking-wide
                text-slate-400
                sm:text-[9px]
                md:text-[10px]
              "
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              SECURED_STORAGE_ACTIVE
            </span>
          </div>
        </div>

        {/* ================= CAPABILITY CARDS ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
            lg:gap-5
            xl:gap-6
          "
        >
          {capabilities.map((c) => (
            <div
              key={c.number}
              className="
                w-full
                min-w-0
                rounded-lg
                bg-slate-50
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-sm
                sm:p-6
                lg:p-5
                xl:p-6
              "
            >
              {/* Number */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-rose-100
                  px-2.5
                  py-1
                  text-[10px]
                  font-semibold
                  text-fuchsia-900
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {c.number}
              </span>

              {/* Card Heading */}
              <h3
                className="
                  mt-4
                  text-[15px]
                  font-semibold
                  leading-[1.4]
                  text-slate-900
                  sm:text-[16px]
                  md:text-[17px]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {c.title}
              </h3>

              {/* Card Description */}
              <p
                className="
                  mt-2
                  text-[13px]
                  leading-[1.7]
                  text-slate-500
                  sm:text-[14px]
                  sm:leading-[1.75]
                "
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}