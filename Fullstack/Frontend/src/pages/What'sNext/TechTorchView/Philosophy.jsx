import React from "react";

export default function Philosophy() {
  return (
    <section
      className="
        w-full
        overflow-x-hidden
        bg-white
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
          items-center
          gap-8
          px-4
          sm:gap-10
          sm:px-6
          md:px-8
          lg:grid-cols-2
          lg:gap-14
          lg:px-10
          xl:gap-16
          xl:px-12
        "
      >
        {/* =====================================================
            LEFT: TEXT
        ===================================================== */}
        <div
          className="
            w-full
            min-w-0
            lg:-ml-8
            xl:-ml-12
          "
        >
          {/* ================= MAIN HEADING ================= */}
          <h2
            className="
              mb-4
              text-[21px]
              font-bold
              leading-[1.3]
              text-slate-900
              sm:mb-5
              sm:text-[24px]
              md:text-[27px]
              lg:text-[28px]
              xl:text-[30px]
            "
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            The TechTorch AI Philosophy: Human-Centric Innovation
          </h2>

          {/* ================= FIRST PARAGRAPH ================= */}
          <p
            className="
              mb-4
              text-[14px]
              leading-[1.7]
              text-slate-600
              sm:mb-5
              sm:text-[15px]
              md:text-[15px]
              lg:text-[15px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            At TechTorch, we believe artificial intelligence is not merely a
            technological upgrade, but a fundamental shift in operational
            capacity. Our approach to AI integration is rooted in a rigorous,
            systematic philosophy that prioritizes human oversight and
            strategic alignment above all else. We do not deploy AI for
            novelty; we deploy it to solve complex, critical enterprise
            challenges with unprecedented speed and accuracy.
          </p>

          {/* ================= SECOND PARAGRAPH ================= */}
          <p
            className="
              text-[14px]
              leading-[1.7]
              text-slate-600
              sm:text-[15px]
              md:text-[15px]
              lg:text-[15px]
            "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            "AI-Delivered Right" is our commitment to secure, transparent,
            and highly effective model deployment. By establishing a robust
            data foundation and implementing stringent governance frameworks,
            we ensure that every AI initiative—from generative models to
            predictive analytics—operates within defined ethical boundaries
            while maximizing return on investment.
          </p>
        </div>

        {/* =====================================================
            RIGHT: IMAGE
        ===================================================== */}
        <div
          className="
            w-full
            min-w-0
            overflow-hidden
            rounded-lg
            shadow-sm
            sm:rounded-xl
          "
        >
          <img
            src="/philosophy.png"
            alt="Business leader reviewing data visualizations in a modern office"
            loading="lazy"
            className="
              block
              h-auto
              w-full
              max-w-full
              object-cover
              aspect-[16/10]
              sm:aspect-[16/11]
              md:aspect-[16/10]
              lg:aspect-[4/5]
              xl:aspect-[16/13]
            "
          />
        </div>
      </div>
    </section>
  );
}