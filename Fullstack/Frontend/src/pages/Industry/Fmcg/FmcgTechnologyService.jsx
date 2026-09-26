import React from "react";
import {
  ClipboardList,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  MonitorSmartphone,
  Briefcase,
  Code2,
  UserPlus,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: ClipboardList,
    title: "IT Consultancy",
    description: "Technology guidance based on business requirements.",
    image:
      "https://images.unsplash.com/photo-1758518726324-62bef7c815b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "AI services designed to help businesses use AI capabilities without building and maintaining their own infrastructure.",
    image:
      "https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Cloud infrastructure services for business technology environments.",
    image:
      "https://images.pexels.com/photos/17489153/pexels-photo-17489153/free-photo-of-light-on-computer.jpeg?auto=compress&cs=tinysrgb&w=800",
    dark: true,
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Cybersecurity services focused on protecting digital assets and technology environments.",
    image:
      "https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=800",
    dark: true,
  },
  {
    number: "05",
    icon: MonitorSmartphone,
    title: "Software Engineering",
    description: "Engineering services covering software, systems and product development.",
    image:
      "https://images.pexels.com/photos/12899153/pexels-photo-12899153.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "06",
    icon: Briefcase,
    title: "Business Process Outsourcing",
    description: "BPO services designed to support business operations.",
    image:
      "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "07",
    icon: Code2,
    title: "Software Development & Support",
    description: "Development and ongoing support for business software.",
    image:
      "https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    number: "08",
    icon: UserPlus,
    title: "Resource & Staffing",
    description: "Technology resources and flexible workforce solutions.",
    image:
      "https://images.pexels.com/photos/3184663/pexels-photo-3184663.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 transition-shadow hover:shadow-lg hover:shadow-black/5">
      <div className="relative h-36 w-full overflow-hidden bg-neutral-100 sm:h-40">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <Icon className="h-5 w-5 text-rose-900" strokeWidth={1.75} />
          <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold tabular-nums text-rose-900">
            {service.number}
          </span>
        </div>

        <h3 className="text-[15px] font-semibold leading-snug text-neutral-900">
          {service.number.replace(/^0/, "")}. {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-neutral-500">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function TechServicesSection() {
  return (
    <section className="bg-[#F7F5F0] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-wide text-rose-900">
          Technology Services
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-neutral-900 sm:text-4xl">
          Support across your technology journey
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-500">
          TechTorch provides technology services that can support businesses
          across different stages of their technology requirements.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}