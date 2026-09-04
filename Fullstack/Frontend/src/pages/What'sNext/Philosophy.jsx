export default function Philosophy() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: copy */}
        <div>
          <h2 className="text-[26px] sm:text-[28px] font-bold text-slate-900 leading-snug mb-5">
            The TechTorch AI Philosophy: Human-Centric Innovation
          </h2>

          <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
            At TechTorch, we believe artificial intelligence is not merely a
            technological upgrade, but a fundamental shift in operational
            capacity. Our approach to AI integration is rooted in a
            rigorous, systematic philosophy that prioritizes human oversight
            and strategic alignment above all else. We do not deploy AI for
            novelty; we deploy it to solve complex, critical enterprise
            challenges with unprecedented speed and accuracy.
          </p>

          <p className="text-slate-600 text-[15px] leading-relaxed">
            "AI-Delivered Right" is our commitment to secure, transparent,
            and highly effective model deployment. By establishing a robust
            data foundation and implementing stringent governance
            frameworks, we ensure that every AI initiative—from generative
            models to predictive analytics—operates within defined ethical
            boundaries while maximizing return on investment.
          </p>
        </div>

        {/* Right: image */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {/* Swap the src below for your own photo */}
          <img
            src="/philosophy.png"
            alt="Business leader reviewing data visualizations in a modern office"
            className="w-full h-[340px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}