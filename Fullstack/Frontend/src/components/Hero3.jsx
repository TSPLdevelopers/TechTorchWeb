import React, { useState } from "react";

export default function Hero3() {
  const [activeView, setActiveView] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleBack = () => {
    setIsExiting(true);

    setTimeout(() => {
      setActiveView(null);
      setIsExiting(false);
    }, 600);
  };

  // UNDERSTAND VIEW
  if (activeView === "understand") {
    return (
      <section className="w-full bg-[#730042] min-h-[600px]">

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <h2 className="translate-y-[10px] text-[32px] sm:text-[36px] lg:text-[48px] font-bold font-plus-jakarta text-[#ffff]">
                UNDERSTAND
              </h2>

              <p className="mt-4 sm:mt-12 lg:mt-16 text-[15px] sm:text-[16px] lg:text-[20px] font-inter leading-relaxed max-w-[650px]">
                We take the time to understand your business, requirements,
                challenges, processes, users, and long-term goals. By gaining a
                clear understanding of how your business operates and where
                improvements are needed, we identify the right opportunities and
                define a focused direction. This ensures that every solution we
                build is aligned with your business objectives, user needs, and
                growth.
              </p>

              {/* BACK BUTTON */}
              <button
                onClick={handleBack}
                className="mt-10 sm:mt-12 lg:mt-16 flex items-center gap-2 sm:gap-3 border border-white px-4 sm:px-5 py-2 sm:py-2.5 text-white text-[16px] sm:text-[18px] font-inter hover:text-[#FF0080] hover:border-[#FF0080] transition"
              >
                <span className="text-[26px] sm:text-[30px] leading-none">
                  ←
                </span>
                <span>Back</span>
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div
                className={`relative w-full max-w-[450px] border-[5px] border-white overflow-hidden ${
                  isExiting
                    ? "animate-imageSlideBack"
                    : "animate-imageSlide"
                }`}
              >

                <img
                  src="/Sec3.2.png"
                  alt="Understand"
                  className="w-full h-auto object-cover"
                />

              </div>

            </div>

          </div>
        </div>

      </section>
    );
  }

  // BUILD VIEW
  if (activeView === "build") {
    return (
      <section className="w-full bg-[#730042] min-h-[600px]">

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <h2 className="translate-y-[10px] text-[32px] sm:text-[36px] lg:text-[48px] font-bold font-plus-jakarta text-[#ffff]">
                BUILD
              </h2>

              <p className="mt-4 sm:mt-12 lg:mt-16 text-[15px] sm:text-[16px] lg:text-[20px] font-inter leading-relaxed max-w-[650px]">
                Once we understand your business needs, we turn ideas and
                requirements into practical digital solutions. We design and
                develop technology around your specific goals, processes, and
                users—from software applications and digital platforms to AI,
                cloud, and enterprise solutions. Our focus is on building
                solutions that are reliable, scalable, secure, and easy to use,
                while creating a strong foundation for long-term business growth.
              </p>

              {/* BACK BUTTON */}
              <button
                onClick={handleBack}
                className="mt-10 sm:mt-12 lg:mt-16 flex items-center gap-2 sm:gap-3 border border-white px-4 sm:px-5 py-2 sm:py-2.5 text-white text-[16px] sm:text-[18px] font-inter hover:text-[#FF0080] hover:border-[#FF0080] transition"
              >
                <span className="text-[26px] sm:text-[30px] leading-none">
                  ←
                </span>
                <span>Back</span>
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div
                className={`relative w-full max-w-[450px] border-[5px] border-white overflow-hidden ${
                  isExiting
                    ? "animate-imageSlideBack"
                    : "animate-imageSlide"
                }`}
              >

                <img
                  src="/Sec3.3.png"
                  alt="Build"
                  className="w-full h-auto object-cover"
                />

              </div>

            </div>

          </div>
        </div>

      </section>
    );
  }

  // GROW VIEW
  if (activeView === "grow") {
    return (
      <section className="w-full bg-[#730042] min-h-[600px]">

        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <h2 className="translate-y-[10px] text-[32px] sm:text-[36px] lg:text-[48px] font-bold font-plus-jakarta text-[#FFFF]">
                GROW
              </h2>

              <p className="mt- sm:mt-12 lg:mt-16 text-[15px] sm:text-[16px] lg:text-[20px] font-inter leading-relaxed max-w-[650px]">
                Our relationship continues beyond deployment. We provide ongoing
                support, maintenance, optimization, and continuous improvements
                to ensure your solutions remain effective as your business
                evolves. By adapting to changing requirements, emerging
                technologies, and new opportunities, we help you improve
                performance, stay competitive, and build a strong foundation for
                sustainable long-term growth.
              </p>

              {/* BACK BUTTON */}
              <button
                onClick={handleBack}
                className="mt-10 sm:mt-12 lg:mt-16 flex items-center gap-2 sm:gap-3 border border-white px-4 sm:px-5 py-2 sm:py-2.5 text-white text-[16px] sm:text-[18px] font-inter hover:text-[#FF0080] hover:border-[#FF0080] transition"
              >
                <span className="text-[26px] sm:text-[30px] leading-none">
                  ←
                </span>
                <span>Back</span>
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div
                className={`relative w-full max-w-[450px] border-[5px] border-white overflow-hidden ${
                  isExiting
                    ? "animate-imageSlideBack"
                    : "animate-imageSlide"
                }`}
              >

                <img
                  src="/Sec3.4.png"
                  alt="Grow"
                  className="w-full h-auto object-cover"
                />

              </div>

            </div>

          </div>
        </div>

      </section>
    );
  }

  // HOW WE WORK VIEW
  return (
    <section className="w-full bg-[#730042] min-h-[600px]">

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <h2 className="mt-4 text-[30px] sm:text-[34px] lg:text-[36px] font-bold font-plus-jakarta">
              HOW WE WORK
            </h2>

            <h3 className="mt-6 sm:mt-8 text-[18px] sm:text-[20px] lg:text-[22px] font-inter text-[#FFFF  max-w-[650px] leading-relaxed">
              We understand your needs, build practical
              <br className="hidden sm:block" /> solutions, and help your
              business grow
              <br className="hidden sm:block" /> with technology.
            </h3>

            <p className="mt-6 text-[15px] sm:text-[16px] lg:text-[18px] font-inter leading-relaxed max-w-[650px]">
              Our approach is simple:
              <br />
              first understand the business, then build the
              <br className="hidden sm:block" />
              right solution, and continuously improve
              <br className="hidden sm:block" />
              it as your needs evolve.
            </p>

            {/* BUTTONS */}
<div className="mt-16 flex flex-wrap gap-5">

  <button
    onClick={() => setActiveView("understand")}
    className="bg-white text-[#730042] px-4 py-2 text-[16px] font-bold font-inter border border-white rounded-sm transition-all duration-300 hover:bg-[#730042] hover:text-white hover:border-white hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(115,0,66,0.4)]"
  >
    UNDERSTAND
  </button>

  <button
    onClick={() => setActiveView("build")}
    className="bg-white text-[#730042] px-4 py-2 text-[16px] font-bold font-inter border border-white rounded-sm transition-all duration-300 hover:bg-[#730042] hover:text-white hover:border-white hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(115,0,66,0.4)]"
  >
    BUILD
  </button>

  <button
    onClick={() => setActiveView("grow")}
    className="bg-white text-[#730042] px-4 py-2 text-[16px] font-bold font-inter border border-white rounded-sm transition-all duration-300 hover:bg-[#730042] hover:text-white hover:border-white hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(115,0,66,0.4)]"
  >
    GROW
  </button>

</div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[470px] aspect-square border-[5px] border-white overflow-hidden">

              <img
                src="/Sec3.1.png"
                alt="TechTorch Solutions"
                className="w-full h-full object-cover object-center"
              />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}