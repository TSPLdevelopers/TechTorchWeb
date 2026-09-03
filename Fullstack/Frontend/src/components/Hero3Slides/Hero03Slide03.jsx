import React, { useEffect, useState } from "react";
import {
  Component,
  Building2,
  Monitor,
  Smartphone,
  Box,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MAROON = "#7a1338";

const cards = [
  {
    id: "custom",
    icon: Component,
    title: "Custom Business Applications",
    description:
      "Purpose-built applications designed around your processes, workflows and operational requirements.",
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise Applications",
    description:
      "Scalable solutions that bring together people, processes and information across your organization.",
  },
  {
    id: "web",
    icon: Monitor,
    title: "Web Applications",
    description:
      "Reliable and intuitive web applications for employees, customers and business users.",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Mobile experiences that give teams and customers convenient access to the services and information they need.",
  },
  {
    id: "modernization",
    icon: Box,
    title: "Application Modernization",
    description:
      "Modernize existing applications, improve performance and maintainability, and create a stronger foundation for the future.",
  },
  {
    id: "integration",
    icon: Share2,
    title: "API & System Integration",
    description:
      "Connect applications, platforms and data sources to create smoother workflows and a more connected technology environment.",
  },
];

export default function WhatWeBuildSection() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 600) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 1000) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxIndex = Math.max(0, cards.length - cardsPerView);

  useEffect(() => {
    setIndex((currentIndex) =>
      Math.min(currentIndex, maxIndex)
    );
  }, [maxIndex]);

  const goPrev = () => {
    setIndex((currentIndex) =>
      Math.max(0, currentIndex - 1)
    );
  };

  const goNext = () => {
    setIndex((currentIndex) =>
      Math.min(maxIndex, currentIndex + 1)
    );
  };

  return (
    <section className="what-we-build-section">
      <div className="build-content-wrapper">
        {/* ================= HEADING ================= */}

        <div className="build-heading">
          <div className="build-heading-left">
            <p className="build-label">
              WHAT WE BUILD
            </p>

            <h2>
              Software Designed for Real Business Needs
            </h2>
          </div>

          <p className="build-heading-description">
            We develop software across a range of business requirements,
            from focused applications to connected enterprise systems.
          </p>
        </div>

        {/* ================= CARD SLIDER ================= */}

        <div className="cards-viewport">
          <div
            className="cards-track"
            style={{
              transform: `translateX(-${
                index * (100 / cardsPerView)
              }%)`,
            }}
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className="card-slide"
                  style={{
                    flex: `0 0 ${100 / cardsPerView}%`,
                  }}
                >
                  <div className="build-card">
                    {/* ICON */}

                    <div className="build-icon">
                      <Icon
                        size={21}
                        color="#ffffff"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* TITLE */}

                    <h3>{card.title}</h3>

                    {/* DESCRIPTION */}

                    <p>{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= BUTTONS ================= */}

        <div className="slider-buttons">
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="slider-button"
            aria-label="Previous cards"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            onClick={goNext}
            disabled={index === maxIndex}
            className="slider-button"
            aria-label="Next cards"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      <style>{`
        /* ================= SECTION ================= */

        .what-we-build-section {
          position: relative;
          width: 100%;
          padding: 60px 80px;
          box-sizing: border-box;

          background: ${MAROON};

          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.045) 0px,
              rgba(255, 255, 255, 0.045) 1px,
              transparent 1px,
              transparent 90px
            );

          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
        }

        /* ================= CONTENT ================= */

        .build-content-wrapper {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          box-sizing: border-box;

          transform: translateX(15px);
        }

        /* ================= HEADING ================= */

        .build-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;

          width: 100%;

          gap: 40px;
          margin-bottom: 40px;
        }

        .build-heading-left {
          flex: 1;
          min-width: 0;
        }

        .build-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;

          color: #f0c9d8;

          margin: 0 0 10px;
        }

        .build-heading h2 {
          max-width: 430px;

          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;

          color: #ffffff;
          margin: 0;
        }

        .build-heading-description {
          width: 100%;
          max-width: 400px;

          font-size: 15px;
          line-height: 1.7;

          color: #e9d3dd;
          margin: 0;
        }

        /* ================= SLIDER ================= */

        .cards-viewport {
          width: 100%;
          overflow: hidden;
        }

        .cards-track {
          display: flex;
          width: 100%;

          transition: transform 0.5s ease;
          will-change: transform;
        }

        /* ================= CARD SLIDE ================= */

        .card-slide {
          flex-shrink: 0;
          box-sizing: border-box;

          /* Cards ke beech gap */
          padding-right: 75px;

          /* Halka right shift */
          transform: translateX(12px);
        }

        /* ================= CARD ================= */

        .build-card {
          width: 100%;
          min-height: 285px;

          padding: 25px 22px;
          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          background: #ffffff;
          border-radius: 14px;
        }

        /* ================= ICON ================= */

        .build-icon {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: ${MAROON};

          margin-bottom: 16px;
          flex-shrink: 0;
        }

        /* ================= TITLE ================= */

        .build-card h3 {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;

          color: #1a1a1a;

          margin: 0 0 11px;
        }

        /* ================= DESCRIPTION ================= */

        .build-card p {
          font-size: 13px;
          line-height: 1.6;

          color: #555555;
          margin: 0;
        }

        /* ================= BUTTONS ================= */

        .slider-buttons {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 14px;
          margin-top: 34px;
        }

        .slider-button {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);

          background: transparent;
          color: #ffffff;

          cursor: pointer;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .slider-button:hover:not(:disabled) {
          background: #ffffff;
          color: ${MAROON};

          transform: translateY(-2px);
        }

        .slider-button:disabled {
          opacity: 0.4;
          cursor: default;
        }

        /* ================= LARGE LAPTOP ================= */

        @media (max-width: 1200px) {
          .what-we-build-section {
            padding: 55px 55px;
          }

          .build-content-wrapper {
            transform: translateX(12px);
          }

          .card-slide {
            padding-right: 65px;
            transform: translateX(10px);
          }

          .build-card {
            min-height: 280px;
            padding: 24px 21px;
          }
        }

        /* ================= TABLET ================= */

        @media (max-width: 1000px) {
          .what-we-build-section {
            padding: 50px 40px;
          }

          .build-content-wrapper {
            transform: translateX(8px);
          }

          .build-heading {
            gap: 30px;
            margin-bottom: 35px;
          }

          .card-slide {
            padding-right: 50px;
            transform: translateX(8px);
          }

          .build-card {
            min-height: 275px;
            padding: 24px 21px;
          }
        }

        /* ================= TABLET / SMALL ================= */

        @media (max-width: 768px) {
          .what-we-build-section {
            padding: 48px 25px;
          }

          .build-content-wrapper {
            transform: translateX(0);
          }

          .build-heading {
            flex-direction: column;

            align-items: flex-start;

            gap: 18px;
            margin-bottom: 32px;
          }

          .build-heading h2 {
            max-width: 100%;
            font-size: 26px;
          }

          .build-heading-description {
            max-width: 550px;
            font-size: 15px;
          }

          .card-slide {
            padding-right: 35px;
            transform: translateX(5px);
          }

          .build-card {
            min-height: 270px;
            padding: 23px 20px;
          }

          .slider-buttons {
            margin-top: 30px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .what-we-build-section {
            padding: 42px 20px;
          }

          .build-content-wrapper {
            transform: none;
          }

          .build-heading {
            gap: 16px;
            margin-bottom: 28px;
          }

          .build-label {
            font-size: 12px;
          }

          .build-heading h2 {
            font-size: 24px;
            line-height: 1.35;
          }

          .build-heading-description {
            max-width: 100%;

            font-size: 14px;
            line-height: 1.65;
          }

          /* Mobile: single card full width */

          .card-slide {
            padding-right: 0;
            transform: none;
          }

          .build-card {
            min-height: 265px;

            padding: 22px 20px;

            border-radius: 12px;
          }

          .build-icon {
            width: 44px;
            height: 44px;

            margin-bottom: 15px;
          }

          .build-card h3 {
            font-size: 16px;
            margin-bottom: 10px;
          }

          .build-card p {
            font-size: 13px;
            line-height: 1.55;
          }

          .slider-buttons {
            margin-top: 26px;
            gap: 12px;
          }

          .slider-button {
            width: 38px;
            height: 38px;
          }
        }

        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .what-we-build-section {
            padding: 38px 18px;
          }

          .build-heading h2 {
            font-size: 23px;
          }

          .build-heading-description {
            font-size: 13.5px;
          }

          .build-card {
            min-height: 255px;
            padding: 21px 18px;
          }
        }

        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 380px) {
          .what-we-build-section {
            padding: 35px 15px;
          }

          .build-heading h2 {
            font-size: 21px;
          }

          .build-card {
            min-height: 250px;
            padding: 20px 17px;
          }

          .build-card h3 {
            font-size: 15px;
          }

          .build-card p {
            font-size: 12.5px;
          }

          .slider-button {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}