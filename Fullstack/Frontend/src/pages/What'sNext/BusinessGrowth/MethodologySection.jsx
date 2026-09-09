import React from "react";
import { Search, LayoutDashboard, Code2, RefreshCw } from "lucide-react";

const steps = [
  {
    step: "STEP 01",
    icon: Search,
    title: "Understand",
    description:
      "We begin with your business requirements, goals, users, and challenges.",
  },
  {
    step: "STEP 02",
    icon: LayoutDashboard,
    title: "Design",
    description:
      "Solutions are shaped around the way your teams and processes actually work.",
  },
  {
    step: "STEP 03",
    icon: Code2,
    title: "Build",
    description:
      "Technology is developed with scalability, usability, security, and performance in mind.",
  },
  {
    step: "STEP 04",
    icon: RefreshCw,
    title: "Improve",
    description:
      "Technology continues to evolve through support, maintenance, updates, and improvements.",
  },
];

export default function MethodologySection() {
  return (
    <section className="w-full bg-[#FAF6F1] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <span className="text-[10px] font-semibold tracking-[0.15em] text-[#6B1E3F]">
          METHODOLOGY
        </span>

        <h1 className="mt-3 max-w-xl text-2xl font-semibold leading-snug text-[#6B1E3F] sm:text-3xl">
          Technology Starts With Understanding Your Business
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          There is no universal solution for every business. A healthcare
          organization doesn't work like a manufacturer. An e-commerce
          company doesn't have the same needs as an educational
          institution. And a growing business may need something
          completely different from an established enterprise.
        </p>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          That's why technology should begin with understanding. What are
          you trying to achieve? Where are you facing challenges? What
          needs to work better? And where do you want your business to go
          next?
        </p>

        <p className="mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-slate-900 sm:text-[15px]">
          TechTorch takes a business-focused approach to technology,
          developing solutions around specific requirements rather than
          forcing businesses into a fixed model.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="rounded-md border border-slate-200 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-rose-100">
                  <Icon size={18} className="text-[#6B1E3F]" />
                </span>

                <span className="mt-5 block text-[10px] font-semibold tracking-wide text-slate-400">
                  {s.step}
                </span>
                <h3 className="mt-1 text-base font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}