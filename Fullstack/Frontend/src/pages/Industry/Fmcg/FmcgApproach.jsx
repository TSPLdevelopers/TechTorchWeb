import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    step: "Step 01",
    title: "Understand",
    description:
      "Understand your business objectives, processes and technology requirements.",
  },
  {
    step: "Step 02",
    title: "Design & Develop",
    description:
      "Plan and develop a solution around the identified requirements.",
  },
  {
    step: "Step 03",
    title: "Test & Deploy",
    description: "Test the solution and prepare it for implementation.",
  },
  {
    step: "Step 04",
    title: "Support & Maintain",
    description:
      "Provide ongoing support and maintenance after deployment.",
  },
];

export default function ApproachSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      {/* Steps */}
      <div className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-wide text-rose-900">
            Our Approach
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold text-neutral-900 sm:text-4xl">
            From requirement to implementation
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5"
              >
                <p className="text-xs font-semibold tracking-wide text-neutral-400">
                  {s.step}
                </p>
                <h3 className="mt-2 text-[15px] font-semibold text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/75" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
          <h2 className="max-w-md text-3xl font-bold leading-snug text-white sm:text-4xl">
            Build a more connected FMCG business
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
            Bring your business processes, supply chain activities and
            digital systems together with technology designed around your
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-rose-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-800">
              Talk to our experts
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-white/90"
            onClick={() => navigate("/fmcg-get-in-touch")}>
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}