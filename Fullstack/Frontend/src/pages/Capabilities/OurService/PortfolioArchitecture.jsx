import React, { useEffect, useRef, useState } from "react";
import {
  Wrench,
  Zap,
  Cloud,
  ShieldCheck,
  Code2,
  Database,
  RefreshCw,
  Users,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
} from "lucide-react";

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
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="w-[300px] shrink-0 bg-white rounded-xl border border-neutral-200 border-l-4 overflow-hidden" style={{ borderLeftColor: "#a3134f" }}>
      <div className="h-36 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
        <Icon className="w-8 h-8 text-neutral-400" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#fbe4ef" }}
          >
            <Icon className="w-4 h-4" style={{ color: "#a3134f" }} />
          </span>
          <span className="text-[10px] tracking-wide text-neutral-400 font-medium">
            {service.tag}
          </span>
        </div>
        <h3 className="text-[15px] font-bold text-neutral-900 mb-2">
          {service.title}
        </h3>
        <p className="text-xs leading-relaxed text-neutral-500 mb-4">
          {service.desc}
        </p>
        <ul className="space-y-1.5 mb-4">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs text-neutral-600">
              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: "#a3134f" }} />
              {p}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-semibold"
          style={{ color: "#a3134f" }}
        >
          {service.cta}
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

export default function TechTorchServices() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const cardWidth = 316; // card width + gap

  useEffect(() => {
    let raf;
    const loop = () => {
      if (!paused && trackRef.current) {
        posRef.current += 0.5;
        const resetPoint = cardWidth * services.length;
        if (posRef.current >= resetPoint) posRef.current -= resetPoint;
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const nudge = (dir) => {
    posRef.current += dir * cardWidth;
    const resetPoint = cardWidth * services.length;
    if (posRef.current < 0) posRef.current += resetPoint;
    if (posRef.current >= resetPoint) posRef.current -= resetPoint;
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s ease";
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 400);
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 flex flex-col items-center px-6 py-16 gap-16">
      {/* Top banner */}
      <div className="max-w-5xl w-full bg-gradient-to-br from-white to-neutral-100 rounded-2xl border border-neutral-200 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <span
            className="inline-block text-[10px] font-semibold tracking-wide px-3 py-1 rounded mb-4"
            style={{ backgroundColor: "#fbe4ef", color: "#a3134f" }}
          >
            Integrated Capabilities
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 leading-snug mb-4">
            One Technology Partner. Multiple Business Needs.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-500 mb-5">
            From strategy and development to security, infrastructure and
            support, TechTorch brings the technology capabilities businesses
            need under one roof. Whether you need to build something new,
            improve an existing system, protect your digital environment or
            scale your technology capabilities, our team is ready to help.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium" style={{ color: "#a3134f" }}>
            <span>• Single SLA Governance</span>
            <span>• Rapid Architecture Advisory</span>
            <span>• Cross-Domain Teams</span>
          </div>
        </div>
        <button
          className="inline-flex items-center gap-2 text-white text-sm font-semibold px-6 py-3.5 rounded-lg shrink-0 self-start md:self-center"
          style={{ backgroundColor: "#a3134f" }}
        >
          Talk to Our Experts
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Services header + controls */}
      <div className="max-w-5xl w-full">
        <div className="flex items-start justify-between gap-6 mb-10 flex-wrap">
          <div className="text-left max-w-xl">
            <span
              className="inline-block text-[10px] font-semibold tracking-wide px-3 py-1 rounded mb-4"
              style={{ backgroundColor: "#fbe4ef", color: "#a3134f" }}
            >
              Portfolio Architecture
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">
              Our Core Technology Services
            </h2>
            <p className="text-sm leading-relaxed text-neutral-500">
              Engineered to address mission-critical business requirements
              with high precision, reliable execution and continuous support
              across the entire technology lifecycle.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => nudge(-1)}
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPaused((p) => !p)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
              style={{ backgroundColor: "#a3134f" }}
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={() => nudge(1)}
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={trackRef} className="flex gap-4" style={{ willChange: "transform" }}>
            {[...services, ...services].map((s, i) => (
              <ServiceCard key={i} service={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}