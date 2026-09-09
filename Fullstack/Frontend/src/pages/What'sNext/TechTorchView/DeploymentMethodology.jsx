import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const stepRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(numberRefs.current, {
        yPercent: -120,
      });

      gsap.set(stepRefs.current, {
        opacity: 0,
        y: 25,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      STEPS.forEach((_, index) => {
        tl.to(
          numberRefs.current[index],
          {
            yPercent: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          index === 0 ? 0 : ">-0.15"
        ).to(
          stepRefs.current[index],
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "<0.1"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-slate-50 py-16"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 md:grid-cols-[1fr_1.4fr]">
        
        {/* Left: intro + image */}
        <div className="md:-ml-24">
          <h2 className="mb-4 text-[24px] font-bold leading-snug text-slate-900">
            The Deployment Methodology
          </h2>

          <p className="mb-6 text-[15px] leading-relaxed text-slate-600">
            Our three-phased approach guarantees that AI implementation is
            treated as a strategic business transformation rather than an
            isolated IT experiment.
          </p>

          <div className="overflow-hidden rounded-lg">
            <img
              src="/DeploymentMethodology.png"
              alt="Team collaborating around a model architecture presentation"
              className="h-[200px] w-full object-cover"
            />
          </div>
        </div>

        {/* Right: numbered steps */}
        <div className="flex flex-col">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-[56px_1fr] gap-4 py-6 ${
                i !== STEPS.length - 1
                  ? "border-b border-slate-200"
                  : ""
              } ${i === 0 ? "pt-0" : ""}`}
            >
              {/* Number reveal wrapper */}
              <div className="h-[38px] overflow-hidden">
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="block text-[32px] font-bold leading-none text-slate-300"
                >
                  {step.number}
                </span>
              </div>

              {/* Step content */}
              <div ref={(el) => (stepRefs.current[i] = el)}>
                <h3 className="mb-2 text-[16px] font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-slate-600">
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