import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/Slide1.png",
    headline: "Turning Business Challenges Into Digital Possibilities",
    body:
      "We bring technology, business processes and people together to create practical digital solutions that help businesses work smarter and grow with confidence.",
    ctaText: "EXPLORE OUR SOLUTIONS",
    ctaHref: "/slide1",
    focus: "center",
  },
  {
    image: "/Slide2.png",
    headline: "One Connected System for Your Business",
    body:
      "From custom applications to enterprise platforms, we create software that fits the way your business works today—and gives you room to grow tomorrow.",
    ctaText: "EXPLORE ERP",
    ctaHref: "/Slide2",
    focus: "65% 40%",
  },
  {
    image: "/Slide3.png",
    headline: "Software Built Around Your Business",
    body:
      "From custom applications to enterprise platforms, we create software that fits the way your business works today—and gives you room to grow tomorrow.",
    ctaText: "BUILD WITH TECHTORCH",
    ctaHref: "/Slide3",
    focus: "70% 50%",
  },
  {
    image: "/Slide4.png",
    headline: "Technology That Keeps You Ready for What’s Next",
    body:
      "From AI and cloud to cybersecurity, we help businesses adopt modern technology with the reliability, security and flexibility they need to grow.",
    ctaText: "EXPLORE TECHNOLOGY SERVICES",
    ctaHref: "/Slide4",
    focus: "100% 45%",
  },
  {
    image: "/Slide6.png",
    headline: "Everything Your Business Needs, Working Together",
    body:
      "TorchX Suite brings key business functions into one connected platform, helping teams manage people, customers, finance and operations with greater clarity.",
    ctaText: "EXPLORE TORCHX SUITE",
    ctaHref: "/Slide5",
    focus: "100% 40%",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const active = slides[current];

  return (
    <section
      className="techtorch-hero"
      aria-label="TechTorch solutions"
      aria-roledescription="carousel"
    >
      {/* Background images */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          aria-hidden="true"
          className={`techtorch-hero__image ${
            index === current ? "is-active" : ""
          }`}
          style={{ objectPosition: slide.focus }}
          decoding="async"
        />
      ))}

      <div className="techtorch-hero__overlay" aria-hidden="true" />

      <div className="techtorch-hero__layout">
        {/* Content */}
        <div className="techtorch-hero__content-area">
          <div key={current} className="techtorch-hero__content">
            <h1>{active.headline}</h1>

            <p>{active.body}</p>

            {active.ctaHref.startsWith("/") ? (
              <Link
                to={active.ctaHref}
                className="techtorch-hero__cta"
              >
                {active.ctaText}
              </Link>
            ) : (
              <a
                href={active.ctaHref}
                className="techtorch-hero__cta"
              >
                {active.ctaText}
              </a>
            )}
          </div>
        </div>

        {/* Controls have their own row to prevent content overlap */}
        <div className="techtorch-hero__controls">
          <div
            className="techtorch-hero__dots"
            role="group"
            aria-label="Choose a slide"
          >
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current ? "true" : undefined}
                className={`techtorch-hero__dot ${
                  index === current ? "is-active" : ""
                }`}
              >
                <span />
              </button>
            ))}
          </div>

          <div className="techtorch-hero__arrows">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="techtorch-hero__arrow"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="techtorch-hero__arrow"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .techtorch-hero,
        .techtorch-hero * {
          box-sizing: border-box;
        }

        .techtorch-hero {
          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: hidden;
          background: #0e1c2e;
          color: #ffffff;
        }

        .techtorch-hero .techtorch-hero__image {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 700ms ease-in-out;
          pointer-events: none;
        }

        .techtorch-hero .techtorch-hero__image.is-active {
          opacity: 1;
        }

        .techtorch-hero .techtorch-hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(10, 18, 32, 0.72) 0%,
            rgba(10, 18, 32, 0.46) 38%,
            rgba(10, 18, 32, 0.08) 62%,
            rgba(10, 18, 32, 0) 78%
          );
        }

        .techtorch-hero .techtorch-hero__layout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-rows: 1fr auto;
          width: 100%;
          max-width: 1600px;
          min-height: clamp(520px, 78vh, 620px);
          min-height: clamp(520px, 78svh, 620px);
          margin: 0 auto;
          padding: 0 100px;
        }

        .techtorch-hero .techtorch-hero__content-area {
          display: flex;
          align-items: center;
          min-width: 0;
          padding: 64px 0 32px;
        }

        .techtorch-hero .techtorch-hero__content {
          width: 100%;
          max-width: 500px;
          min-width: 0;
          animation: techtorchHeroFadeIn 500ms ease both;
        }

        .techtorch-hero h1 {
          margin: 0 0 32px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          font-weight: 600;
          line-height: 1.12;
          overflow-wrap: break-word;
          color: #ffffff;
        }

        .techtorch-hero .techtorch-hero__content p {
          max-width: 520px;
          margin: 0 0 40px;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.9);
        }

        .techtorch-hero .techtorch-hero__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          max-width: 100%;
          min-height: 48px;
          padding: 14px 24px;
          border: 1.5px solid #ffffff;
          background: transparent;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.4;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          overflow-wrap: anywhere;
          transition:
            background-color 200ms ease,
            color 200ms ease;
        }

        .techtorch-hero .techtorch-hero__controls {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          min-width: 0;
          padding-bottom: 24px;
        }

        .techtorch-hero .techtorch-hero__dots {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .techtorch-hero .techtorch-hero__dot {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 44px;
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .techtorch-hero .techtorch-hero__dot span {
          display: block;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.55);
          transition:
            transform 200ms ease,
            background-color 200ms ease;
        }

        .techtorch-hero .techtorch-hero__dot.is-active span {
          background: #ffffff;
          transform: scale(1.1);
        }

        .techtorch-hero .techtorch-hero__arrows {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 12px;
        }

        .techtorch-hero .techtorch-hero__arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #970052;
          color: #ffffff;
          cursor: pointer;
          transition: background-color 200ms ease;
        }

        .techtorch-hero .techtorch-hero__arrow svg {
          width: 20px;
          height: 20px;
        }

        .techtorch-hero .techtorch-hero__cta:focus-visible,
        .techtorch-hero button:focus-visible {
          outline: 2px solid #ffffff;
          outline-offset: 4px;
        }

        @media (hover: hover) {
          .techtorch-hero .techtorch-hero__cta:hover {
            background: #ffffff;
            color: #730042;
          }

          .techtorch-hero .techtorch-hero__arrow:hover {
            background: #730042;
          }
        }

        @keyframes techtorchHeroFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .techtorch-hero .techtorch-hero__layout {
            padding: 0 40px;
          }

          .techtorch-hero .techtorch-hero__content {
            max-width: 480px;
          }

          .techtorch-hero h1 {
            font-size: 36px;
            margin-bottom: 26px;
          }

          .techtorch-hero .techtorch-hero__content p {
            margin-bottom: 32px;
          }

          .techtorch-hero .techtorch-hero__overlay {
            background: linear-gradient(
              90deg,
              rgba(10, 18, 32, 0.84) 0%,
              rgba(10, 18, 32, 0.64) 48%,
              rgba(10, 18, 32, 0.2) 100%
            );
          }
        }

        /* Small tablet and mobile */
        @media (max-width: 767px) {
          .techtorch-hero .techtorch-hero__layout {
            min-height: 560px;
            padding: 0 24px;
          }

          .techtorch-hero .techtorch-hero__content-area {
            padding: 56px 0 32px;
          }

          .techtorch-hero .techtorch-hero__content {
            max-width: 520px;
          }

          .techtorch-hero h1 {
            font-size: clamp(28px, 4.6vw, 34px);
            line-height: 1.18;
            margin-bottom: 24px;
          }

          .techtorch-hero .techtorch-hero__content p {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .techtorch-hero .techtorch-hero__controls {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            padding-bottom: 24px;
          }

          .techtorch-hero .techtorch-hero__overlay {
            background: linear-gradient(
              90deg,
              rgba(10, 18, 32, 0.88) 0%,
              rgba(10, 18, 32, 0.7) 60%,
              rgba(10, 18, 32, 0.44) 100%
            );
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .techtorch-hero .techtorch-hero__layout {
            min-height: 540px;
            padding: 0 16px;
          }

          .techtorch-hero .techtorch-hero__content-area {
            padding: 44px 0 30px;
          }

          .techtorch-hero h1 {
            font-size: 28px;
            line-height: 1.2;
            margin-bottom: 22px;
          }

          .techtorch-hero .techtorch-hero__content p {
            font-size: 13px;
            line-height: 1.7;
            margin-bottom: 28px;
          }

          .techtorch-hero .techtorch-hero__cta {
            padding: 13px 18px;
            font-size: 11px;
          }

          .techtorch-hero .techtorch-hero__controls {
            padding-bottom: 20px;
          }

          .techtorch-hero .techtorch-hero__dot {
            width: 28px;
          }

          .techtorch-hero .techtorch-hero__dot span {
            width: 9px;
            height: 9px;
          }

          .techtorch-hero .techtorch-hero__arrows {
            gap: 8px;
          }
        }

        /* Small mobile */
        @media (max-width: 359px) {
          .techtorch-hero h1 {
            font-size: 25px;
          }

          .techtorch-hero .techtorch-hero__dot {
            width: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .techtorch-hero .techtorch-hero__content {
            animation: none;
          }

          .techtorch-hero .techtorch-hero__image,
          .techtorch-hero .techtorch-hero__cta,
          .techtorch-hero .techtorch-hero__arrow,
          .techtorch-hero .techtorch-hero__dot span {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;