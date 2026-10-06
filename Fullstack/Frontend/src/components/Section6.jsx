import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CARDS = [
  {
    title: "Platforms",
    img: "/card1.png",
    href: "/platform",
  },
  {
    title: "Digital Solutions",
    img: "/card2.png",
    href: "/digitalsolution",
  },
  {
    title: "Our Services",
    img: "/card3.png",
    href: "/OurService",
  },
  {
    title: "Business Process Outsourcing",
    img: "/card4.png",
    href: "/business-process-outsourcing",
  },
  {
    title: "IT Augmentation Service",
    img: "/card5.png",
    href: "/ItAugmentation",
  },
  {
    title: "Artificial Intelligent",
    img: "/card6.png",
    href: "/ArtificialIntelligent",
  },
];

function Card({ title, img, href, position }) {
  return (
    <div
      className={`cap-card cap-card-${position}`}
      aria-hidden={Math.abs(position) > 1}
    >
      <div className="cap-card-art">
        <img
          src={img}
          alt={title}
          className="cap-card-img"
          draggable={false}
        />
      </div>

      <Link to={href} className="cap-card-label">
        <span className="cap-card-title">{title}</span>
        <span className="cap-card-arrow">→</span>
      </Link>
    </div>
  );
}

export default function CapabilitiesMarquee() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + CARDS.length) % CARDS.length
    );
  };

  /* =========================================================
     AUTO SLIDE
     ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     GET SMALLEST CIRCULAR DISTANCE
     ========================================================= */

  const getRelativePosition = (index) => {
    const total = CARDS.length;

    let diff = index - activeIndex;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  };

  return (
    <section className="cap-section">
      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .cap-section {
          width: 100%;
          box-sizing: border-box;

          background: #730042;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );

          background-size: 18px 18px;

          padding-top: 56px;
          padding-bottom: 64px;

          overflow: hidden;

          font-family:
            "Plus Jakarta Sans",
            sans-serif;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .cap-header {
          width: 100%;
          max-width: none;

          margin: 0 auto 25px;

          padding-left: 16px;
          padding-right: 16px;

          box-sizing: border-box;

          display: flex;

          justify-content: space-between;
          align-items: flex-start;

          gap: 30px;

          flex-wrap: wrap;
        }


        /* =====================================================
           TITLE
        ===================================================== */

        .cap-title {
          color: #ffffff;

          font-size: 38px;

          font-weight: 600;

          margin: 0;

          letter-spacing: -0.02em;

          transform: translateY(-10px);
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .cap-desc {
          color: rgba(255, 255, 255, 0.92);

          font-size: 18px;

          line-height: 1.5;

          max-width: 620px;

          margin: 0;

          transform: translateY(-10px);
        }


        /* =====================================================
           SLIDER
        ===================================================== */

        .cap-slider {
          width: 100%;

          overflow: hidden;

          padding: 35px 0 45px;

          box-sizing: border-box;
        }


        /* =====================================================
           TRACK

           IMPORTANT:
           Cards are now positioned continuously instead of
           remounting left / center / right.
        ===================================================== */

        .cap-slider-track {
          width: 100%;

          height: 430px;

          position: relative;

          display: block;

          overflow: visible;

          box-sizing: border-box;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .cap-card {
          width: 300px;

          position: absolute;

          left: 50%;
          top: 50%;

          background: #ffffff;

          border: 4px solid #ffffff;

          border-radius: 16px;

          overflow: hidden;

          box-sizing: border-box;

          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.30);

          /*
             THIS IS THE MAIN SMOOTHING FIX
          */

          transition:
            transform 0.85s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.7s ease,
            box-shadow 0.7s ease,
            filter 0.7s ease;

          will-change: transform, opacity;

          pointer-events: auto;

          z-index: 1;
        }


        /* =====================================================
           CENTER
        ===================================================== */

        .cap-card-0 {
          transform:
            translate3d(-50%, -50%, 0)
            scale(1.10);

          opacity: 1;

          z-index: 5;

          box-shadow:
            0 30px 65px rgba(0, 0, 0, 0.45);

          filter: none;
        }


        /* =====================================================
           LEFT / RIGHT
        ===================================================== */

        .cap-card--1 {
          transform:
            translate3d(
              calc(-50% - 345px),
              calc(-50% + 8px),
              0
            )
            scale(0.90);

          opacity: 0.72;

          z-index: 2;

          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.30);
        }


        .cap-card-1 {
          transform:
            translate3d(
              calc(-50% + 345px),
              calc(-50% + 8px),
              0
            )
            scale(0.90);

          opacity: 0.72;

          z-index: 2;

          box-shadow:
            0 14px 34px rgba(0, 0, 0, 0.30);
        }


        /* =====================================================
           HIDDEN CARDS

           They remain mounted so the browser can smoothly
           move them into the visible positions.
        ===================================================== */

        .cap-card--2,
        .cap-card-2,
        .cap-card--3,
        .cap-card-3,
        .cap-card--4,
        .cap-card-4 {
          transform:
            translate3d(-50%, -50%, 0)
            scale(0.80);

          opacity: 0;

          pointer-events: none;

          z-index: 0;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .cap-card-art {
          width: 100%;

          aspect-ratio: 1 / 1;

          overflow: hidden;
        }


        .cap-card-img {
          width: 100%;
          height: 100%;

          object-fit: cover;

          display: block;

          /*
             Prevent image rendering jitter
          */

          user-select: none;
          -webkit-user-drag: none;
        }


        /* =====================================================
           LABEL
        ===================================================== */

        .cap-card-label {
          padding: 14px 18px 16px;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          color: #16161a;

          font-size: 16px;

          font-weight: 600;

          white-space: nowrap;

          text-decoration: none;

          transition:
            color 0.3s ease;
        }


        .cap-card-title {
          white-space: nowrap;
        }


        .cap-card-label:hover {
          color: #730042;
        }


        /* =====================================================
           ARROW
        ===================================================== */

        .cap-card-arrow {
          margin-left: 8px;

          color: #730042;

          font-size: 20px;

          font-weight: 600;

          opacity: 0;

          transform:
            translate3d(-8px, 0, 0);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }


        .cap-card-label:hover .cap-card-arrow {
          opacity: 1;

          transform:
            translate3d(0, 0, 0);
        }


        /* =====================================================
           CONTROLS
        ===================================================== */

        .cap-controls {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 14px;

          margin-top: 5px;
        }


        .cap-control-btn {
          width: 42px;
          height: 42px;

          border-radius: 50%;

          border: 2px solid #ffffff;

          background: transparent;

          color: #ffffff;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 23px;

          cursor: pointer;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.25s ease;
        }


        .cap-control-btn:hover {
          background: #ffffff;

          color: #6d0e42;

          transform: scale(1.08);
        }


        .cap-control-btn:active {
          transform: scale(0.94);
        }


        /* =====================================================
           SMALL
        ===================================================== */

        @media (min-width: 640px) {
          .cap-header {
            padding-left: 24px;
            padding-right: 24px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) {
          .cap-header {
            padding-left: 40px;
            padding-right: 40px;
          }

          .cap-title {
            font-size: 36px;
            transform: none;
          }

          .cap-desc {
            font-size: 16px;

            font-family: "Inter", sans-serif;

            transform: none;
          }

          .cap-card {
            width: 270px;
          }

          .cap-card--1 {
            transform:
              translate3d(
                calc(-50% - 300px),
                calc(-50% + 8px),
                0
              )
              scale(0.86);
          }

          .cap-card-1 {
            transform:
              translate3d(
                calc(-50% + 300px),
                calc(-50% + 8px),
                0
              )
              scale(0.86);
          }

          .cap-card-0 {
            transform:
              translate3d(-50%, -50%, 0)
              scale(1.03);
          }
        }


        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 1024px) {
          .cap-header {
            padding-left: 100px;
            padding-right: 100px;
          }

          .cap-card {
            width: 285px;
          }

          .cap-card--1 {
            transform:
              translate3d(
                calc(-50% - 325px),
                calc(-50% + 8px),
                0
              )
              scale(0.90);
          }

          .cap-card-1 {
            transform:
              translate3d(
                calc(-50% + 325px),
                calc(-50% + 8px),
                0
              )
              scale(0.90);
          }

          .cap-card-0 {
            transform:
              translate3d(-50%, -50%, 0)
              scale(1.07);
          }
        }


        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1200px) {
          .cap-card {
            width: 300px;
          }

          .cap-card--1 {
            transform:
              translate3d(
                calc(-50% - 345px),
                calc(-50% + 8px),
                0
              )
              scale(0.90);
          }

          .cap-card-1 {
            transform:
              translate3d(
                calc(-50% + 345px),
                calc(-50% + 8px),
                0
              )
              scale(0.90);
          }

          .cap-card-0 {
            transform:
              translate3d(-50%, -50%, 0)
              scale(1.10);
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {
          .cap-section {
            padding-top: 48px;
            padding-bottom: 55px;
          }

          .cap-header {
            padding-left: 16px;
            padding-right: 16px;

            margin-bottom: 10px;
          }

          .cap-title {
            font-size: 30px;

            transform: none;
          }

          .cap-desc {
            font-size: 16px;

            max-width: 100%;

            transform: none;
          }

          .cap-slider {
            padding: 20px 0 30px;
          }

          .cap-slider-track {
            height: 350px;
          }

          .cap-card {
            width: 240px;
          }

          .cap-card--1 {
            transform:
              translate3d(
                calc(-50% - 258px),
                calc(-50% + 8px),
                0
              )
              scale(0.82);
          }

          .cap-card-1 {
            transform:
              translate3d(
                calc(-50% + 258px),
                calc(-50% + 8px),
                0
              )
              scale(0.82);
          }

          .cap-card-0 {
            transform:
              translate3d(-50%, -50%, 0)
              scale(1);
          }

          .cap-card-label {
            font-size: 14px;

            padding:
              13px 15px 15px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .cap-section {
            padding:
              42px 0 50px;
          }

          .cap-header {
            padding-left: 16px;
            padding-right: 16px;

            gap: 16px;
          }

          .cap-title {
            font-size: 27px;
          }

          .cap-desc {
            font-size: 14px;

            line-height: 1.6;
          }

          .cap-slider-track {
            height: 330px;
          }

          .cap-card {
            width: 220px;

            border-radius: 14px;
          }

          .cap-card--1 {
            transform:
              translate3d(
                calc(-50% - 232px),
                calc(-50% + 8px),
                0
              )
              scale(0.82);
          }

          .cap-card-1 {
            transform:
              translate3d(
                calc(-50% + 232px),
                calc(-50% + 8px),
                0
              )
              scale(0.82);
          }

          .cap-card-0 {
            transform:
              translate3d(-50%, -50%, 0)
              scale(1);
          }

          .cap-control-btn {
            width: 40px;
            height: 40px;

            font-size: 20px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .cap-card,
          .cap-control-btn,
          .cap-card-arrow {
            transition: none !important;
          }
        }
      `}</style>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="cap-header">
        <h2 className="cap-title">
          Capabilities
        </h2>

        <p className="cap-desc">
          We bring together technology, expertise and practical solutions
          to solve complex business challenges. From digital platforms to
          AI, we help businesses work smarter, adapt and grow.
        </p>
      </div>


      {/* =====================================================
          SMOOTH SLIDER
      ===================================================== */}

      <div className="cap-slider">
        <div className="cap-slider-track">
          {CARDS.map((card, index) => {
            const position = getRelativePosition(index);

            return (
              <Card
                key={card.title}
                {...card}
                position={position}
              />
            );
          })}
        </div>
      </div>


      {/* =====================================================
          CONTROLS
      ===================================================== */}

      <div className="cap-controls">
        <button
          type="button"
          className="cap-control-btn"
          onClick={handlePrevious}
          aria-label="Previous card"
        >
          ←
        </button>

        <button
          type="button"
          className="cap-control-btn"
          onClick={handleNext}
          aria-label="Next card"
        >
          →
        </button>
      </div>
    </section>
  );
}