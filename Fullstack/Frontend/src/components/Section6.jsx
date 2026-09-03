import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CARDS = [
  {
    title: "Platforms",
    img: "/card1.png",
    href: "/platforms",
  },
  {
    title: "Digital Solutions",
    img: "/card2.png",
    href: "/digital-solutions",
  },
  {
    title: "Our Services",
    img: "/card3.png",
    href: "/services",
  },
  {
    title: "Business Process Outsourcing",
    img: "/card4.png",
    href: "/business-process-outsourcing",
  },
  {
    title: "IT Augmentation Service",
    img: "/card5.png",
    href: "/it-augmentation",
  },
  {
    title: "Artificial Intelligent",
    img: "/card6.png",
    href: "/artificial-intelligence",
  },
];

function Card({ title, img, href, position }) {
  return (
    <div className={`cap-card cap-card-${position}`}>
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
    setActiveIndex((prev) =>
      prev === CARDS.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? CARDS.length - 1 : prev - 1
    );
  };

  // Automatic watch-like tick movement
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === CARDS.length - 1 ? 0 : prev + 1
      );
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const getCardIndex = (offset) => {
    return (
      (activeIndex + offset + CARDS.length) %
      CARDS.length
    );
  };

  const visibleCards = [
    {
      ...CARDS[getCardIndex(-1)],
      position: "left",
    },
    {
      ...CARDS[getCardIndex(0)],
      position: "center",
    },
    {
      ...CARDS[getCardIndex(1)],
      position: "right",
    },
  ];

  return (
    <section className="cap-section">
      <style>{`
        /* ================= SECTION ================= */

        .cap-section {
          background: #6d0e42;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            );

          background-size: 18px 18px;

          padding: 56px 0 64px;

          overflow: hidden;

          font-family:
            "Plus Jakarta Sans",
            "Segoe UI",
            Roboto,
            sans-serif;
        }


        /* ================= HEADER ================= */

        .cap-header {
          max-width: 1200px;

          margin: 0 auto 35px;

          padding: 0 40px;

          display: flex;

          justify-content: space-between;

          align-items: flex-start;

          gap: 30px;

          flex-wrap: wrap;
        }


        /* ================= TITLE ================= */

        .cap-title {
          color: #ffffff;

          font-size: 42px;

          font-weight: 700;

          margin: 0;

          letter-spacing: -0.02em;

          transform: translate(-10px, -10px);
        }


        /* ================= DESCRIPTION ================= */

        .cap-desc {
          color: rgba(255,255,255,0.92);

          font-size: 18px;

          line-height: 1.5;

          max-width: 700px;

          margin: 0;

          transform: translateY(-10px);
        }


        /* ================= SLIDER ================= */

        .cap-slider {
          width: 100%;

          overflow: hidden;

          padding: 35px 0 45px;
        }


        /* ================= CARDS TRACK ================= */

        .cap-slider-track {
          display: flex;

          align-items: center;

          justify-content: center;

          /* GAP INCREASED */
          gap: 55px;

          min-height: 430px;

          padding: 0 30px;
        }


        /* ================= CARD ================= */

        .cap-card {
          width: 326px;

          flex-shrink: 0;

          background: #ffffff;

          border: 4px solid #ffffff;

          border-radius: 16px;

          overflow: hidden;

          position: relative;

          box-shadow:
            0 14px 34px rgba(0,0,0,0.30);

          transition:
            transform 0.45s
              cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.45s ease,
            box-shadow 0.45s ease;

          will-change:
            transform,
            opacity;
        }


        /* ================= LEFT CARD ================= */

        .cap-card-left {
          transform:
            scale(0.90)
            translateY(8px);

          opacity: 0.72;

          z-index: 1;
        }


        /* ================= CENTER CARD ================= */

        .cap-card-center {
          transform:
            scale(1.10)
            translateY(-8px);

          opacity: 1;

          z-index: 5;

          box-shadow:
            0 30px 65px rgba(0,0,0,0.45);

          animation:
            centerTick
            0.45s
            cubic-bezier(0.22, 1, 0.36, 1);
        }


        /* ================= RIGHT CARD ================= */

        .cap-card-right {
          transform:
            scale(0.90)
            translateY(8px);

          opacity: 0.72;

          z-index: 1;
        }


        /* ================= WATCH TICK EFFECT ================= */

        @keyframes centerTick {
          0% {
            transform:
              scale(0.92)
              translateY(10px);
          }

          60% {
            transform:
              scale(1.13)
              translateY(-10px);
          }

          100% {
            transform:
              scale(1.10)
              translateY(-8px);
          }
        }


        /* ================= IMAGE ================= */

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
        }


        /* ================= LABEL ================= */

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


        /* ================= ARROW ================= */

        .cap-card-arrow {
          margin-left: 8px;

          color: #730042;

          font-size: 20px;

          font-weight: 600;

          opacity: 0;

          transform:
            translateX(-8px);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }


        .cap-card-label:hover .cap-card-arrow {
          opacity: 1;

          transform:
            translateX(0);
        }


        /* ================= CONTROLS ================= */

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
            transform 0.3s ease;
        }


        .cap-control-btn:hover {
          background: #ffffff;

          color: #6d0e42;

          transform:
            scale(1.08);
        }


        .cap-control-btn:active {
          transform:
            scale(0.94);
        }


        /* ================= LAPTOP ================= */

        @media (max-width: 1150px) {
          .cap-card {
            width: 290px;
          }

          .cap-slider-track {
            gap: 35px;
          }

          .cap-card-center {
            transform:
              scale(1.06)
              translateY(-6px);
          }
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .cap-header {
            padding: 0 30px;
          }

          .cap-title {
            font-size: 36px;
            transform: none;
          }

          .cap-desc {
            font-size: 16px;
            transform: none;
          }

          .cap-card {
            width: 245px;
          }

          .cap-slider-track {
            gap: 25px;
          }

          .cap-card-left,
          .cap-card-right {
            transform:
              scale(0.86);
          }

          .cap-card-center {
            transform:
              scale(1.03);
          }
        }


        /* ================= MOBILE ================= */

        @media (max-width: 768px) {
          .cap-section {
            padding: 48px 0 55px;
          }

          .cap-header {
            padding: 0 20px;

            margin-bottom: 15px;
          }

          .cap-title {
            font-size: 30px;
          }

          .cap-desc {
            font-size: 16px;

            max-width: 100%;
          }

          .cap-slider {
            padding: 20px 0 30px;
          }

          .cap-slider-track {
            width: max-content;

            gap: 18px;

            transform:
              translateX(-155px);

            min-height: 350px;
          }

          .cap-card {
            width: 240px;
          }

          .cap-card-left,
          .cap-card-right {
            transform:
              scale(0.82);

            opacity:
              0.55;
          }

          .cap-card-center {
            transform:
              scale(1);

            opacity:
              1;
          }

          .cap-card-label {
            font-size:
              14px;

            padding:
              13px 15px 15px;
          }
        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 480px) {
          .cap-section {
            padding:
              42px 0 50px;
          }

          .cap-header {
            gap:
              16px;
          }

          .cap-title {
            font-size:
              27px;
          }

          .cap-desc {
            font-size:
              14px;

            line-height:
              1.6;
          }

          .cap-slider-track {
            transform:
              translateX(-145px);

            gap:
              12px;

            min-height:
              330px;
          }

          .cap-card {
            width:
              220px;

            border-radius:
              14px;
          }

          .cap-control-btn {
            width:
              40px;

            height:
              40px;

            font-size:
              20px;
          }
        }


        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {
          .cap-card,
          .cap-card-center {
            animation: none;

            transition: none;
          }
        }

      `}</style>

      {/* ================= HEADER ================= */}

      <div className="cap-header">
        <h2 className="cap-title">
          Capabilities
        </h2>

        <p className="cap-desc">
          We bring together technology, expertise and practical solutions to
          solve complex business challenges. From digital platforms to AI, we
          help businesses work smarter, adapt and grow.
        </p>
      </div>


      {/* ================= WATCH TICK SLIDER ================= */}

      <div className="cap-slider">
        <div className="cap-slider-track">
          {visibleCards.map((card) => (
            <Card
              key={`${card.position}-${card.title}`}
              {...card}
            />
          ))}
        </div>
      </div>


      {/* ================= CONTROLS ================= */}

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