import React, { useEffect, useState } from "react";

import slide1Bg from "../../public/Slide1.png";
import slide2Bg from "../../public/Slide2.png";
import slide3Bg from "../../public/Slide3.png";
import slide4Bg from "../../public/Slide4.png";
import slide5Bg from "../../public/Slide6.png";

const slides = [
  {
    image: slide1Bg,
    headline: "Turning Business Challenges Into Digital Possibilities",
    body: "We bring technology, business processes and people together to create practical digital solutions that help businesses work smarter and grow with confidence.",
    ctaText: "EXPLORE OUR SOLUTIONS",
    ctaHref: "#",
    focus: "center", // background image focal point
  },
  {
    image: slide2Bg,
    headline: "One Connected System for Your Business",
    body: "From custom applications to enterprise platforms, we create software that fits the way your business works today\u2014and gives you room to grow tomorrow.",
    ctaText: "EXPLORE ERP",
    ctaHref: "#",
    focus: "65% 40%",
  },
  {
    image: slide3Bg,
    headline: "Software Built Around Your Business",
    body: "From custom applications to enterprise platforms, we create software that fits the way your business works today\u2014and gives you room to grow tomorrow.",
    ctaText: "Build with TechTorch",
    ctaHref: "#",
    focus: "70% 50%",
  },
  {
    image: slide4Bg,
    headline: "Technology That Keeps You Ready for What\u2019s Next",
    body: "From AI and cloud to cybersecurity, we help businesses adopt modern technology with the reliability, security and flexibility they need to grow.",
    ctaText: "Explore Technology Services",
    ctaHref: "#",
    focus: "100% 45%",
  },
  {
    image: slide5Bg,
    headline: "Everything Your Business Needs, Working Together",
    body: "TorchX Suite brings key business functions into one connected platform, helping teams manage people, customers, finance and operations with greater clarity.",
    ctaText: "Explore TorchX Suite",
    ctaHref: "#",
    focus: "100% 40%",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);


  const active = slides[current];

  return (
    <section className="relative w-full h-[78vh] min-h-[420px] max-h-[620px] overflow-hidden bg-[#0e1c2e]">
      {/* Background image, crossfades between slides */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={slide.headline}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"
            }`}
          style={{ objectPosition: slide.focus }}
        />
      ))}

      {/* Scrim for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,18,32,0.72) 0%, rgba(10,18,32,0.46) 38%, rgba(10,18,32,0.08) 62%, rgba(10,18,32,0) 78%)",
        }}
      />

      {/* Copy, keyed so it re-mounts (and re-animates) on slide change */}
      <div
        key={current}
        className="relative z-[3] h-full flex flex-col justify-center max-w-[640px] px-6 md:px-16 lg:px-20 text-white animate-[fadeIn_0.5s_ease]"
      >
        <h1 className="text-[26px] md:text-[36px] lg:text-[44px] leading-[1.12] font-Plus Jakarta Sans mb-10">
          {active.headline}
        </h1>
        <p className="text-base leading-relaxed font-medium text-white/90 max-w-[520px] mb-14">
          {active.body}
        </p>
        <a
          href={active.ctaHref}
          className="self-start px-7 py-3.5 border-[1.5px] border-white text-white text-[13px] font-bold uppercase transition-colors duration-200 hover:bg-white hover:text-[#7a1440]"
        >
          {active.ctaText}
        </a>
      </div>

      {/* Dots */}
      <div className="absolute z-[4] right-3 md:right-8 bottom-[90px] flex gap-4.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-[11px] h-[11px] rounded-full transition-transform duration-200 ${i === current ? "bg-white scale-110" : "bg-white/55"
              }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute z-[4] right-8 md:right-16 bottom-7 md:bottom-7  flex gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-[32px] h-[32px] rounded-full bg-[#9b1a4f] hover:bg-[#7a1440] text-white flex items-center justify-center transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-5 h-5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-[32px] h-[32px] rounded-full bg-[#9b1a4f] hover:bg-[#7a1440] text-white flex items-center justify-center transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-5 h-5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;