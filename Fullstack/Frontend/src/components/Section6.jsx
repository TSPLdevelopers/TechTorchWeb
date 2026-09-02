import React, { useState } from "react";
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

const TRACK = [...CARDS, ...CARDS];

function Card({ title, img, href }) {
  return (
    <div className="cap-card">
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
  const [buttonOffset, setButtonOffset] = useState(0);

  const handleNext = () => {
    setButtonOffset((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setButtonOffset((prev) => prev - 1);
  };

  const animationDelay = `${-(buttonOffset * (26 / CARDS.length))}s`;

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

          margin: 0 auto 40px;

          padding: 0 40px;

          display: flex;

          flex-wrap: wrap;

          justify-content: space-between;

          gap: 24px;
        }


        /* ================= TITLE ================= */

        .cap-title {
  color: #fff;
  font-family: "Plus Jakarta Sans";
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;

  transform: translateY(-1px);
}.cap-title {
  color: #fff;
  font-family: "Plus Jakarta Sans";
  font-size: 42px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;

  transform: translate(-10px, -10px);
}


        /* ================= DESCRIPTION ================= */

        .cap-desc {
          color: rgba(255,255,255,0.92);

          font-family: "Plus Jakarta Sans";

          font-size: 18px;

          line-height: 1.5;

          max-width: 700px;

          margin: 0;

          position: relative;

          top: -15px;
        }


        /* ================= MARQUEE ================= */

        .cap-marquee-viewport {
           width: 88%;
           margin-left: 6%;
           margin-right: 6f%;

           max-width: none;

          margin: 0 auto;

          overflow: hidden;

          padding: 12px 0;

          position: relative;

          /*
            Very small left/right blur.
            Only 1.5% of the viewport.
          */

          mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 1.5%,
            black 98.5%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0%,
            black 1.5%,
            black 98.5%,
            transparent 100%
          );
        }


        .cap-marquee-viewport::-webkit-scrollbar {
          display: none;
        }


        /* ================= MARQUEE TRACK ================= */

        .cap-track {
          display: flex;

          gap: 24px;

          width: max-content;

          padding: 0;

          animation:
            cap-scroll
            26s
            linear
            infinite;

          animation-delay: ${animationDelay};
        }


        /* Pause animation when hovering */

        .cap-marquee-viewport:hover .cap-track {
          animation-play-state: paused;
        }


        /* ================= AUTO SCROLL ================= */

        @keyframes cap-scroll {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }


        /* ================= REDUCED MOTION ================= */

        @media (prefers-reduced-motion: reduce) {

          .cap-track {
            animation: none;
          }

        }


        /* ================= CARD ================= */

        .cap-card {
          flex: 0 0 auto;

          width: 326px;

          background: #fff;

          border: 4px solid #fff;

          border-radius: 16px;

          overflow: hidden;

          cursor: pointer;

          position: relative;

          z-index: 1;

          box-shadow:
            0 14px 34px rgba(0,0,0,0.3);

          transform-origin: center center;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }


        /* ================= CARD HOVER ================= */

        .cap-card:hover {
          transform: scale(1.05);

          box-shadow:
            0 24px 50px rgba(0,0,0,0.35);

          z-index: 10;
        }


        /* ================= IMAGE ================= */

        .cap-card-art {
          position: relative;

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
          padding:
            14px
            18px
            16px;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          gap: 0;

          font-size: 16px;

          font-weight: 600;

          color: #16161a;

          white-space: nowrap;

          text-decoration: none;

          transition:
            color 0.3s ease;
        }


        .cap-card-title {
          white-space: nowrap;
        }


        /* ================= TEXT HOVER ================= */

        .cap-card-label:hover {
          color: #730042;
        }


        /* ================= ARROW ================= */

        .cap-card-arrow {
          display: inline-block;

          margin-left: 8px;

          color: #730042;

          font-size: 20px;

          font-weight: 600;

          opacity: 0;

          visibility: hidden;

          transform: translateX(-8px);

          transition:
            opacity 0.25s ease,
            visibility 0.25s ease,
            transform 0.25s ease;
        }


        .cap-card-label:hover .cap-card-arrow {
          opacity: 1;

          visibility: visible;

          transform: translateX(0);
        }


        /* ================= CONTROLS ================= */

        .cap-controls {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 14px;

          margin-top: 28px;
        }


        .cap-control-btn {
          width: 40px;

          height: 40px;

          border-radius: 50%;

          border:
            2px solid #fff;

          background: transparent;

          color: #fff;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 24px;

          font-weight: 500;

          cursor: pointer;

          transition:
            all 0.3s ease;
        }


        .cap-control-btn:hover {
          background: #fff;

          color: #6d0e42;

          transform: scale(1.08);
        }


        .cap-control-btn:active {
          transform: scale(0.95);
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .cap-card {
            width: 420px;
          }

          .cap-marquee-viewport {
            max-width: 100%;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 700px) {

          .cap-title {
            font-size: 30px;
          }


          .cap-header {
            padding:
              0 20px;
          }


          .cap-desc {
            font-size: 16px;

            max-width: 100%;

            top: 0;
          }


          .cap-card {
            width: 280px;
          }


          .cap-card-label {
            font-size: 15px;

            padding: 14px 16px;
          }


          .cap-marquee-viewport {
            max-width: 100%;
          }


          .cap-control-btn {
            width: 42px;

            height: 42px;

            font-size: 20px;
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


      {/* ================= CARDS ================= */}

      <div className="cap-marquee-viewport">

        <div className="cap-track">

          {TRACK.map((card, i) => (
            <Card
              key={i}
              {...card}
            />
          ))}

        </div>

      </div>


      {/* ================= PREVIOUS / NEXT ================= */}

      <div className="cap-controls">

        <button
          type="button"
          className="cap-control-btn"
          onClick={handlePrevious}
          aria-label="Previous cards"
        >
          ←
        </button>


        <button
          type="button"
          className="cap-control-btn"
          onClick={handleNext}
          aria-label="Next cards"
        >
          →
        </button>

      </div>

    </section>
  );
}