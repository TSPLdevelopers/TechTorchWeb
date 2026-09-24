import React from "react";
import {
  CheckSquare,
  Code2,
  Share2,
  Shield,
  Compass,
  Monitor,
  Users,
  Gauge,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const services = [
  {
    num: "01",
    icon: CheckSquare,
    title: "IT Consultancy",
    body: "Technology guidance aligned with your business requirements, IT environment and digital transformation objectives.",
    tags: "Technology Strategy · IT Planning · Digital Transformation",
  },
  {
    num: "02",
    icon: Code2,
    title: "Software Engineering",
    body: "End-to-end engineering services for custom software, enterprise applications, web and mobile solutions, and system integration.",
    tags: "Custom Software · Web & Mobile · Enterprise Systems",
  },
  {
    num: "03",
    icon: Share2,
    title: "Cloud Infrastructure",
    body: "Infrastructure solutions designed to support applications, IT operations and changing business requirements.",
    tags: "Cloud Infrastructure · Scalability · IT Operations",
  },
  {
    num: "04",
    icon: Shield,
    title: "Cyber Security",
    body: "Security-focused technology services designed to help protect systems, applications and business information.",
    tags: "Data Protection · Access Management · Security",
  },
  {
    num: "05",
    icon: Compass,
    title: "Artificial Intelligence",
    body: "AI services that help businesses explore and adopt intelligent technologies without the complexity of building and maintaining their own infrastructure.",
    tags: "AI Services · Automation · Intelligent Solutions",
  },
  {
    num: "06",
    icon: Monitor,
    title: "Software Development & Support",
    body: "Software development services covering requirements, development, testing, deployment and ongoing maintenance.",
    tags: "Development · Testing · Deployment · Support",
  },
  {
    num: "07",
    icon: Users,
    title: "Resource & Staffing",
    body: "Technology professionals and flexible workforce solutions aligned with project and business requirements.",
    tags: "IT Professionals · Technical Resources · Project Support",
  },
  {
    num: "08",
    icon: Gauge,
    title: "Business Process Outsourcing",
    body: "Technology-enabled services designed to support business processes and operational requirements.",
    tags: "Process Support · Operations · Business Services",
  },
];

export default function ItServicesGridSection() {
  return (
    <div className="w-full font-sans bg-white" style={{ color: INK }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: WINE }}>
          OUR IT SERVICES
        </p>
        <h2 className="text-2xl md:text-[1.75rem] leading-[1.25] font-bold tracking-tight mb-3">
          Technology Services for Different
          <br />
          Business Needs
        </h2>
        <p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: MUTED }}>
          From consulting and software development to cloud, security and
          technology resources, our services support different stages of
          your technology journey.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {services.map(({ num, icon: Icon, title, body, tags }) => (
            <div
              key={num}
              className="rounded-xl p-5 border flex flex-col"
              style={{ borderColor: "#ece9e4" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold" style={{ color: WINE }}>
                  {num}
                </span>
                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ background: "#f2f1f5", color: "#8a8fa0" }}
                >
                  <Icon size={14} strokeWidth={1.8} />
                </span>
              </div>
              <h3 className="text-sm font-semibold mb-2 leading-snug">{title}</h3>
              <p className="text-xs leading-relaxed mb-5" style={{ color: MUTED }}>
                {body}
              </p>
              <div
                className="mt-auto rounded-lg px-3 py-2.5 border"
                style={{ borderColor: "#f0d6de" }}
              >
                <p className="text-[10px] leading-relaxed font-medium" style={{ color: WINE }}>
                  {tags}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}