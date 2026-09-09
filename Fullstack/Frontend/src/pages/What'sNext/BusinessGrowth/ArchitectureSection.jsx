import React from "react";
import {
  TrendingUp,
  Share2,
  Lightbulb,
  BarChart3,
  Maximize2,
  Link2,
  Zap,
  MessageSquare,
} from "lucide-react";

const cards = [
  {
    number: "01",
    icon: TrendingUp,
    title: "Scale With Confidence",
    description:
      "As your requirements change, your technology should be able to change with them.",
    tag: "SCALABILITY",
    tagIcon: Maximize2,
  },
  {
    number: "02",
    icon: Share2,
    title: "Connect Your Business",
    description:
      "Bring important processes, information, teams, and systems closer together.",
    tag: "INTEGRATION",
    tagIcon: Link2,
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Work Smarter",
    description:
      "Reduce repetitive work and give your teams tools that make everyday operations easier.",
    tag: "EFFICIENCY",
    tagIcon: Zap,
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Make Better Decisions",
    description:
      "Bring business information together so leaders can see what is happening and make more informed decisions.",
    tag: "INTELLIGENCE",
    tagIcon: MessageSquare,
  },
];

export default function ContinuityArchitectureSection() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
          CONTINUITY ARCHITECTURE
        </span>

        <h1 className="mt-3 max-w-2xl text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          Your Business Doesn't Stand Still. Neither Should Your
          Technology.
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Every stage of growth brings something new. More customers
          create more relationships to manage. More employees create more
          processes to coordinate. More operations create more data to
          understand. And more opportunities create more decisions to
          make.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          Your technology should make this journey easier. It should help
          your teams spend less time dealing with disconnected systems and
          more time focusing on the work that actually moves the business
          forward.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const Icon = c.icon;
            const TagIcon = c.tagIcon;
            return (
              <div
                key={c.number}
                className="flex flex-col justify-between border-l-4 border-[#6B1E3F] bg-slate-50 p-6"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-slate-300">
                      {c.number}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-[#6B1E3F]">
                      <Icon size={16} />
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {c.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-wide text-[#6B1E3F]">
                    {c.tag}
                  </span>
                  <TagIcon size={14} className="text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-md bg-slate-100 p-5">
          <span className="mt-0.5 h-8 w-8 flex-shrink-0 rounded-md bg-[#6B1E3F]" />
          <p className="text-sm leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">
              The Unified Standard:
            </span>{" "}
            TechTorch's ERP approach, for example, focuses on centralized
            data, scalability, customization, automation, reporting, and
            secure business operations.
          </p>
        </div>
      </div>
    </section>
  );
}