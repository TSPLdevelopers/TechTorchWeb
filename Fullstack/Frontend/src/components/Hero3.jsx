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

        <div className="w-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <h2 className="translate-y-[10px] text-[30px] xs:text-[32px] sm:text-[36px] lg:text-[48px] font-bold font-plus-jakarta text-[#FF0080]">
                UNDERSTAND
              </h2>

              <p className="mt-4 sm:mt-10 lg:mt-16 text-[14px] xs:text-[15px] sm:text-[16px] lg:text-[20px] font-inter leading-relaxed max-w-[650px]">
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
                className="mt-8 sm:mt-10 lg:mt-16 flex items-center gap-2 sm:gap-3 border border-white px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 text-white text-[15px] sm:text-[16px] md:text-[18px] font-inter hover:text-[#FF0080] hover:border-[#FF0080] transition"
              >
                <span className="text-[24px] sm:text-[26px] md:text-[30px] leading-none">
                  ←
                </span>
                <span>Back</span>
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div
                className={`relative w-full max-w-[450px] border-[4px] sm:border-[5px] border-white overflow-hidden ${
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

        <div className="w-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <h2 className="translate-y-[10px] text-[30px] xs:text-[32px] sm:text-[36px] lg:text-[48px] font-bold font-plus-jakarta text-[#FF0080]">
                BUILD
              </h2>

              <p className="mt-4 sm:mt-10 lg:mt-16 text-[14px] xs:text-[15px] sm:text-[16px] lg:text-[20px] font-inter leading-relaxed max-w-[650px]">
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
                className="mt-8 sm:mt-10 lg:mt-16 flex items-center gap-2 sm:gap-3 border border-white px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 text-white text-[15px] sm:text-[16px] md:text-[18px] font-inter hover:text-[#FF0080] hover:border-[#FF0080] transition"
              >
                <span className="text-[24px] sm:text-[26px] md:text-[30px] leading-none">
                  ←
                </span>
                <span>Back</span>
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div
                className={`relative w-full max-w-[450px] border-[4px] sm:border-[5px] border-white overflow-hidden ${
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

        <div className="w-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">

              <h2 className="translate-y-[10px] text-[30px] xs:text-[32px] sm:text-[36px] lg:text-[48px] font-bold font-plus-jakarta text-[#FF0080]">
                GROW
              </h2>

              <p className="mt-4 sm:mt-10 lg:mt-16 text-[14px] xs:text-[15px] sm:text-[16px] lg:text-[20px] font-inter leading-relaxed max-w-[650px]">
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
                className="mt-8 sm:mt-10 lg:mt-16 flex items-center gap-2 sm:gap-3 border border-white px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 text-white text-[15px] sm:text-[16px] md:text-[18px] font-inter hover:text-[#FF0080] hover:border-[#FF0080] transition"
              >
                <span className="text-[24px] sm:text-[26px] md:text-[30px] leading-none">
                  ←
                </span>
                <span>Back</span>
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">

              <div
                className={`relative w-full max-w-[450px] border-[4px] sm:border-[5px] border-white overflow-hidden ${
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

      <div className="w-full px-4 xs:px-5 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <h2 className="mt-4 text-[28px] xs:text-[30px] sm:text-[34px] lg:text-[36px] font-bold font-plus-jakarta">
              HOW WE WORK
            </h2>

            <h3 className="mt-5 sm:mt-6 md:mt-8 text-[17px] xs:text-[18px] sm:text-[20px] lg:text-[22px] font-inter text-[#FF0080] max-w-[650px] leading-relaxed">
              We understand your needs, build practical
              <br className="hidden sm:block" /> solutions, and help your
              business grow
              <br className="hidden sm:block" /> with technology.
            </h3>

            <p className="mt-5 sm:mt-6 text-[14px] xs:text-[15px] sm:text-[16px] lg:text-[18px] font-inter leading-relaxed max-w-[650px]">
              Our approach is simple:
              <br />
              first understand the business, then build the
              <br className="hidden sm:block" />
              right solution, and continuously improve
              <br className="hidden sm:block" />
              it as your needs evolve.
            </p>

            {/* BUTTONS */}
            <div className="mt-7 sm:mt-8 md:mt-10 flex flex-nowrap items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-10">

              <button
                onClick={() => setActiveView("understand")}
                className="bg-white text-[#78004B] px-2.5 xs:px-3 sm:px-4 md:px-5 py-2 text-[12px] xs:text-[13px] sm:text-[16px] md:text-[18px] font-bold font-inter whitespace-nowrap hover:bg-[#FF007B] transition"
              >
                UNDERSTAND
              </button>

              <button
                onClick={() => setActiveView("build")}
                className="bg-white text-[#78004B] px-2.5 xs:px-3 sm:px-4 md:px-5 py-2 text-[12px] xs:text-[13px] sm:text-[16px] md:text-[18px] font-bold font-inter whitespace-nowrap hover:bg-[#FF007B] transition"
              >
                BUILD
              </button>

              <button
                onClick={() => setActiveView("grow")}
                className="bg-white text-[#78004B] px-2.5 xs:px-3 sm:px-4 md:px-5 py-2 text-[12px] xs:text-[13px] sm:text-[16px] md:text-[18px] font-bold font-inter whitespace-nowrap hover:bg-[#FF007B] transition"
              >
                GROW
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[470px] aspect-square border-[4px] sm:border-[5px] border-white overflow-hidden">

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