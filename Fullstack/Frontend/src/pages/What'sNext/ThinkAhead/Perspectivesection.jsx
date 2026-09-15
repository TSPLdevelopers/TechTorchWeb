import React from "react";
import { Search, Activity, Share2, Clock } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "Understand",
    description:
      "Deep dive into operational workflows to map the current state and identify genuine pain points.",
  },
  {
    icon: Activity,
    title: "Build",
    description:
      "Engineer scalable, secure architectures tailored to your specific operational requirements.",
  },
  {
    icon: Share2,
    title: "Connect",
    description:
      "Integrate disparate systems to create unified data models and seamless user experiences.",
  },
  {
    icon: Clock,
    title: "Evolve",
    description:
      "Establish continuous improvement loops to ensure technology adapts alongside the business.",
  },
];

export default function PerspectiveSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[11px] font-semibold tracking-[0.15em] text-slate-500">
          OUR PERSPECTIVE
        </span>

        <div className="mt-3 flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 lg:flex-row lg:items-end">
          <h2 className="max-w-xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            Technology works best when it is connected to the business.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-slate-500">
            At TechTorch, technology capabilities cover areas critical to
            modern enterprise operations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-md bg-slate-50 p-6 transition-shadow hover:shadow-sm"
            >
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-fuchsia-900/30">
                <Icon size={16} className="text-fuchsia-900" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}