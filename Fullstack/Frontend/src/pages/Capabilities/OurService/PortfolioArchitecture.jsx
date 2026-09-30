import React from "react";
import {
  Wrench,
  Zap,
  Cloud,
  ShieldCheck,
  Code2,
  Database,
  RefreshCw,
  Users,
  ArrowRight,
} from "lucide-react";

const BRAND_COLOR = "#730024";

const services = [
  {
    icon: Wrench,
    tag: "01 // ADVISORY",
    title: "IT Consultancy",
    desc: "Strategic technology guidance to help businesses make better decisions, modernize their systems and plan for sustainable digital growth.",
    points: [
      "Enterprise IT Roadmap Modernization",
      "Technology Readiness & Budget Optimization",
      "Digital Transformation Feasibility",
    ],
    cta: "Consult with Architects",
    image: "/digital solution.png",
  },
  {
    icon: Zap,
    tag: "02 // INTELLIGENCE",
    title: "AI Solutions",
    desc: "Practical AI capabilities that help businesses automate processes, improve productivity and discover new opportunities through intelligent technology.",
    points: [
      "Intelligent Process & Document Automation",
      "Contextual Decision Support & Analytics",
      "Pragmatic Enterprise AI Integration",
    ],
    cta: "Explore AI Capabilities",
    image: "/Ai integration.png",
  },
  {
    icon: Cloud,
    tag: "03 // PLATFORM",
    title: "Cloud Infrastructure",
    desc: "Scalable and reliable cloud environments designed to support modern applications, changing workloads and business growth.",
    points: [
      "Hybrid & Multi-Cloud Architecture",
      "Zero-Downtime Migration & Optimization",
      "24/7 Resilience & Performance Engineering",
    ],
    cta: "Scale Your Cloud",
    image: "/Analysis.png",
  },
  {
    icon: ShieldCheck,
    tag: "04 // RESILIENCE",
    title: "Cyber Security",
    desc: "Security-focused solutions that help protect your systems, data and digital operations against evolving technology risks.",
    points: [
      "Posture Assessment & Threat Mitigation",
      "Data Protection & Regulatory Compliance",
      "Continuous Monitoring & Incident Protocols",
    ],
    cta: "Review Security Posture",
    image: "/Security.png",
  },
  {
    icon: Code2,
    tag: "05 // ENGINEERING",
    title: "Software Engineering",
    desc: "End-to-end engineering expertise for designing, developing, integrating and improving reliable business software.",
    points: [
      "Full-Cycle Architecture & System Design",
      "API & Microservices Integration",
      "High-Throughput Performance Engineering",
    ],
    cta: "Explore Engineering Lifecycle",
    image: "/Enterprise AI command center.png",
  },
  {
    icon: Database,
    tag: "06 // DEVELOPMENT",
    title: "Software Development & Support",
    desc: "Custom software built around your business requirements, supported by ongoing maintenance, optimization and technical support.",
    points: [
      "Custom Enterprise Application Development",
      "Legacy Refactoring & Modernization",
      "SLA-backed 24/7 Technical Support",
    ],
    cta: "Build & Maintain Software",
    image: "/Modernexecutive.png",
  },
  {
    icon: RefreshCw,
    tag: "07 // OPERATIONS",
    title: "BPO Services",
    desc: "Technology-enabled business process support designed to improve efficiency, consistency and operational performance.",
    points: [
      "Automated Workflow Orchestration",
      "Back-Office Process Optimization",
      "Standardized Quality & Governance SLAs",
    ],
    cta: "Optimize Workflows",
    image: "/Ecosystem.png",
  },
  {
    icon: Users,
    tag: "08 // TALENT",
    title: "Resource & Staffing",
    desc: "Skilled technology professionals and flexible resources to help businesses strengthen teams and deliver projects effectively.",
    points: [
      "Specialized Senior Engineering Talent",
      "Agile Team Augmentation",
      "Rapid Deployment & Fast Machine Onboarding",
    ],
    cta: "Access Specialized Talent",
    image: "/Card4hero.png",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-lg
        border
        border-neutral-200
        border-l-[3px]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
      style={{
        borderLeftColor: BRAND_COLOR,
      }}
    >
      {/* Image */}
      <div
        className="
          relative
          h-[150px]
          w-full
          overflow-hidden
          bg-neutral-200
          sm:h-[165px]
          md:h-[175px]
        "
      >
        <img
          src={service.image}
          alt={service.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Light overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/[0.03]" />
      </div>

      {/* Content */}
      <div
        className="
          flex
          flex-1
          flex-col
          p-4
          sm:p-5
        "
      >
        {/* Icon + Tag */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className="
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-md
              sm:h-8
              sm:w-8
            "
            style={{
              backgroundColor: "#fbe4ef",
            }}
          >
            <Icon
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              style={{
                color: BRAND_COLOR,
              }}
            />
          </span>

          <span
            className="
              font-['Inter']
              text-[8px]
              font-semibold
              tracking-wide
              text-neutral-400
              sm:text-[9px]
            "
          >
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mb-2
            font-['Plus_Jakarta_Sans']
            text-[13px]
            font-bold
            leading-snug
            text-neutral-900
            sm:text-[14px]
            md:text-[15px]
          "
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          className="
            mb-3
            font-['Inter']
            text-[10px]
            leading-[1.6]
            text-neutral-500
            sm:text-[11px]
            md:text-[11.5px]
          "
        >
          {service.desc}
        </p>

        {/* Points */}
        <ul className="mb-4 space-y-1.5">
          {service.points.map((point) => (
            <li
              key={point}
              className="
                flex
                items-start
                gap-1.5
                font-['Inter']
                text-[9px]
                leading-[1.5]
                text-neutral-600
                sm:text-[10px]
              "
            >
              <span
                className="
                  mt-[5px]
                  h-[4px]
                  w-[4px]
                  shrink-0
                  rounded-full
                "
                style={{
                  backgroundColor: BRAND_COLOR,
                }}
              />

              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-auto border-t border-neutral-100 pt-3">
          <a
            href="#"
            className="
              inline-flex
              items-center
              gap-1
              font-['Inter']
              text-[9px]
              font-semibold
              sm:text-[10px]
            "
            style={{
              color: BRAND_COLOR,
            }}
          >
            {service.cta}

            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TechTorchServices() {
  return (
    <section
      className="
        w-full
        bg-[#f8f8f7]
        px-4
        py-10
        sm:px-6
        sm:py-12
        md:px-8
        md:py-16
        lg:px-10
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div
          className="
            mx-auto
            mb-7
            max-w-2xl
            text-center
            sm:mb-9
            md:mb-10
          "
        >
          {/* Small Label */}
          <div className="mb-2 flex items-center justify-center gap-2 sm:mb-3">
            <span
              className="h-px w-5 sm:w-7"
              style={{
                backgroundColor: BRAND_COLOR,
              }}
            />

            <span
              className="
                font-['Inter']
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.12em]
                sm:text-[9px]
                md:text-[10px]
              "
              style={{
                color: BRAND_COLOR,
              }}
            >
              Technology Services
            </span>

            <span
              className="h-px w-5 sm:w-7"
              style={{
                backgroundColor: BRAND_COLOR,
              }}
            />
          </div>

          {/* Heading */}
          <h2
            className="
              mb-2
              font-['Plus_Jakarta_Sans']
              text-[21px]
              font-bold
              leading-tight
              tracking-[-0.02em]
              text-neutral-900
              sm:text-[25px]
              md:text-[29px]
              lg:text-[32px]
            "
          >
            Our Core Technology Services
          </h2>

          {/* Subheading */}
          <p
            className="
              mx-auto
              max-w-xl
              font-['Inter']
              text-[9.5px]
              leading-[1.6]
              text-neutral-500
              sm:text-[11px]
              md:text-[12px]
              lg:text-[13px]
            "
          >
            Engineered to address mission-critical business requirements
            with high precision, reliable execution and continuous support
            across the entire technology lifecycle.
          </p>
        </div>

        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:gap-6
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>

        {/* =================================================
            INTEGRATED CAPABILITIES
            BELOW ALL SERVICE CARDS
        ================================================= */}

        <div
          className="
            mt-6
            overflow-hidden
            rounded-xl
            border
            border-neutral-200
            bg-gradient-to-br
            from-white
            to-[#f5f2f3]
            p-5
            sm:mt-8
            sm:p-6
            md:p-7
            lg:p-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
              md:gap-8
            "
          >
            {/* Content */}
            <div className="max-w-3xl">
              {/* Label */}
              <span
                className="
                  mb-2
                  inline-block
                  rounded
                  px-2.5
                  py-1
                  font-['Inter']
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-wide
                  sm:mb-3
                  sm:text-[9px]
                "
                style={{
                  backgroundColor: "#fbe4ef",
                  color: BRAND_COLOR,
                }}
              >
                Integrated Capabilities
              </span>

              {/* Heading */}
              <h2
                className="
                  mb-2
                  font-['Plus_Jakarta_Sans']
                  text-[16px]
                  font-bold
                  leading-snug
                  text-neutral-900
                  sm:text-[19px]
                  md:text-[21px]
                  lg:text-[23px]
                "
              >
                One Technology Partner. Multiple Business Needs.
              </h2>

              {/* Description */}
              <p
                className="
                  mb-3
                  font-['Inter']
                  text-[9.5px]
                  leading-[1.65]
                  text-neutral-500
                  sm:text-[10.5px]
                  md:text-[11.5px]
                  lg:text-[12px]
                "
              >
                From strategy and development to security, infrastructure and
                support, TechTorch brings the technology capabilities businesses
                need under one roof. Whether you need to build something new,
                improve an existing system, protect your digital environment or
                scale your technology capabilities, our team is ready to help.
              </p>

              {/* Points */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-1.5
                  font-['Inter']
                  text-[8.5px]
                  font-medium
                  sm:text-[9px]
                  md:text-[10px]
                "
                style={{
                  color: BRAND_COLOR,
                }}
              >
                <span>• Single SLA Governance</span>
                <span>• Rapid Architecture Advisory</span>
                <span>• Cross-Domain Teams</span>
              </div>
            </div>

            {/* Button */}
            <button
              className="
                inline-flex
                w-fit
                shrink-0
                items-center
                gap-1.5
                rounded-md
                px-4
                py-2.5
                font-['Inter']
                text-[9px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:opacity-90
                sm:px-5
                sm:py-3
                sm:text-[10px]
              "
              style={{
                backgroundColor: BRAND_COLOR,
              }}
            >
              Talk to Our Experts

              <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}