import React from "react";

export default function Philosophy() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-5 sm:px-6 md:grid-cols-2 lg:gap-14">

        {/* Left: Text */}
        <div className="md:-ml-10">
          <h2 className="mb-5 text-[26px] font-bold leading-snug text-slate-900 sm:text-[28px]">
            The TechTorch AI Philosophy: Human-Centric Innovation
          </h2>

          <p className="mb-5 text-[15px] leading-relaxed text-slate-600">
            At TechTorch, we believe artificial intelligence is not merely a
            technological upgrade, but a fundamental shift in operational
            capacity. Our approach to AI integration is rooted in a rigorous,
            systematic philosophy that prioritizes human oversight and
            strategic alignment above all else. We do not deploy AI for
            novelty; we deploy it to solve complex, critical enterprise
            challenges with unprecedented speed and accuracy.
          </p>

          <p className="text-[15px] leading-relaxed text-slate-600">
            "AI-Delivered Right" is our commitment to secure, transparent,
            and highly effective model deployment. By establishing a robust
            data foundation and implementing stringent governance frameworks,
            we ensure that every AI initiative—from generative models to
            predictive analytics—operates within defined ethical boundaries
            while maximizing return on investment.
          </p>
        </div>

        {/* Right: Image */}
        <div className="overflow-hidden rounded-xl shadow-sm md:ml-10">
          <img
            src="/philosophy.png"
            alt="Business leader reviewing data visualizations in a modern office"
            className="h-[380px] w-full object-cover sm:h-[420px] md:h-[440px] lg:h-[470px]"
          />
        </div>

      </div>
    </section>
  );
}