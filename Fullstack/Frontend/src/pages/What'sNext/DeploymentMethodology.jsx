const STEPS = [
  {
    number: "01",
    title: "Data Foundation & Readiness Assessment",
    description:
      "Before a single model is trained, we audit your existing data architecture. We identify siloes, clean historical datasets, and establish the robust data pipelines necessary for accurate, hallucination-free AI outputs.",
  },
  {
    number: "02",
    title: "Strategic Model Selection & Fine-Tuning",
    description:
      "We match the right architecture to your specific use case, prioritizing smaller, highly-specialized models over monolithic generic solutions to ensure efficiency and cost-effectiveness. Models are then fine-tuned on your proprietary data.",
  },
  {
    number: "03",
    title: "Controlled Deployment & Continuous Monitoring",
    description:
      "Rollout begins in controlled, shadow-mode environments. Once performance benchmarks are met, models are deployed to production with persistent monitoring for concept drift and performance degradation, ensuring long-term reliability.",
  },
];

export default function DeploymentMethodology() {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12">
        {/* Left: intro + image */}
        <div>
          <h2 className="text-[24px] font-bold text-slate-900 leading-snug mb-4">
            The Deployment Methodology
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
            Our three-phased approach guarantees that AI implementation is
            treated as a strategic business transformation rather than an
            isolated IT experiment.
          </p>

          <div className="rounded-lg overflow-hidden">
            {/* Swap the src below for your own photo */}
            <img
              src="/DeploymentMethodology.png"
              alt="Team collaborating around a model architecture presentation"
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>

        {/* Right: numbered steps */}
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-[56px_1fr] gap-4 py-6 ${
                i !== STEPS.length - 1 ? "border-b border-slate-200" : ""
              } ${i === 0 ? "pt-0" : ""}`}
            >
              <span className="text-[32px] font-bold text-slate-300 leading-none">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold text-[16px] text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}