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
      /* =====================================================
         INITIAL STATE
         Numbers hidden above
      ===================================================== */

      gsap.set(numberRefs.current, {
        yPercent: -120,
        opacity: 0,
      });

      /* Step content hidden initially */
      gsap.set(stepRefs.current, {
        opacity: 0,
        y: 25,
      });

      /* =====================================================
         SCROLL ANIMATION
      ===================================================== */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,

          // Section viewport mein enter hote hi animation
          start: "top 75%",

          // Section se completely bahar jaane par reverse
          end: "bottom 20%",

          toggleActions: "play none none reverse",

          // Animation ko refresh/re-enter par properly handle karega
          invalidateOnRefresh: true,
        },
      });

      STEPS.forEach((_, index) => {
        /* ================= NUMBER ANIMATION ================= */

        tl.to(
          numberRefs.current[index],
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          index === 0 ? 0 : ">-0.15"
        )

          /* ================= CONTENT ANIMATION ================= */

          .to(
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

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        overflow-hidden
        bg-slate-50
        py-10
        sm:py-12
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-10
          px-4
          sm:gap-12
          sm:px-6
          md:px-8
          lg:grid-cols-[1fr_1.4fr]
          lg:gap-14
          lg:px-10
          xl:px-12
        "
      >
        {/* =====================================================
            LEFT: INTRO + IMAGE
        ===================================================== */}

        <div
          className="
            w-full
            lg:sticky
            lg:top-[4px]
            lg:self-start
            lg:ml-2
            xl:ml-4
          "
        >
          {/* Main Heading - Plus Jakarta Sans */}
          <h2
            className="
              mb-4
              text-[22px]
              font-bold
              leading-[1.25]
              text-slate-900
              sm:text-[24px]
              md:text-[26px]
              lg:text-[28px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            The Deployment Methodology
          </h2>

          {/* Sub Heading - Plus Jakarta Sans */}
          <p
            className="
              mb-5
              max-w-md
              text-[14px]
              leading-[1.7]
              text-slate-600
              sm:mb-6
              sm:text-[15px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Our three-phased approach guarantees that AI implementation is
            treated as a strategic business transformation rather than an
            isolated IT experiment.
          </p>

          {/* Image */}
          <div className="w-full overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src="/DeploymentMethodology.png"
              alt="Team collaborating around a model architecture presentation"
              loading="lazy"
              className="
                block
                h-auto
                w-full
                object-cover
                aspect-[16/10]
                sm:aspect-[16/10]
                md:aspect-[16/10]
                lg:aspect-[16/10]
              "
            />
          </div>
        </div>

        {/* =====================================================
            RIGHT: NUMBERED STEPS
        ===================================================== */}

        <div className="flex w-full min-w-0 flex-col">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`
                grid
                grid-cols-[38px_1fr]
                gap-3
                py-5

                sm:grid-cols-[48px_1fr]
                sm:gap-4
                sm:py-6

                md:grid-cols-[56px_1fr]
                md:gap-4
                md:py-7

                lg:grid-cols-[56px_1fr]
                lg:gap-4
                lg:py-7

                ${
                  i !== STEPS.length - 1
                    ? "border-b border-slate-200"
                    : ""
                }

                ${i === 0 ? "pt-0" : ""}
              `}
            >
              {/* =================================================
                  NUMBER
              ================================================= */}

              <div
                className="
                  h-[30px]
                  overflow-hidden
                  sm:h-[34px]
                  md:h-[38px]
                "
              >
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="
                    block
                    text-[23px]
                    font-bold
                    leading-none
                    text-slate-300
                    sm:text-[27px]
                    md:text-[32px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* =================================================
                  STEP CONTENT
              ================================================= */}

              <div
                ref={(el) => (stepRefs.current[i] = el)}
                className="min-w-0"
              >
                {/* Step Title - Inter */}
                <h3
                  className="
                    mb-2
                    text-[15px]
                    font-semibold
                    leading-[1.4]
                    text-slate-900
                    sm:text-[16px]
                    md:text-[17px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.title}
                </h3>

                {/* Description - Inter */}
                <p
                  className="
                    text-[13px]
                    leading-[1.7]
                    text-slate-600
                    sm:text-[14px]
                    md:text-[14px]
                    lg:text-[15px]
                  "
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
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