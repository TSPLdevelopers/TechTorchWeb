import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// =================================================
// CARDS
// =================================================

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

// =================================================
// MAIN COMPONENT
// =================================================

export default function CapabilitiesMarquee() {
  const [activeIndex, setActiveIndex] = useState(1);

  const cardRefs = useRef([]);
  const isAnimating = useRef(false);
  const intervalRef = useRef(null);

  // =================================================
  // GET CARD
  // =================================================

  const getCard = (index) => {
    return CARDS[
      (index + CARDS.length) % CARDS.length
    ];
  };

  // =================================================
  // CURRENT CARDS
  // =================================================

  const leftCard = getCard(activeIndex - 1);
  const centerCard = getCard(activeIndex);
  const rightCard = getCard(activeIndex + 1);

  // =================================================
  // UPDATE CARD CONTENT
  // =================================================

  const updateCardContent = (
    element,
    card
  ) => {
    if (!element) return;

    const img = element.querySelector(
      ".cap-card-img"
    );

    const title = element.querySelector(
      ".cap-card-title"
    );

    const link = element.querySelector(
      ".cap-card-label"
    );

    if (img) {
      img.src = card.img;
      img.alt = card.title;
    }

    if (title) {
      title.textContent = card.title;
    }

    if (link) {
      link.href = card.href;
    }
  };

  // =================================================
  // INITIAL POSITION
  // =================================================

  useEffect(() => {
    const cards = cardRefs.current;

    if (
      !cards[0] ||
      !cards[1] ||
      !cards[2]
    ) {
      return;
    }

    const isMobile =
      window.innerWidth <= 767;

    const sideScale = isMobile
      ? 0.82
      : 0.9;

    const centerScale = isMobile
      ? 1
      : 1.1;

    // LEFT
    gsap.set(cards[0], {
      x: 0,
      y: isMobile ? 0 : 8,
      scale: sideScale,
      opacity: isMobile ? 0.55 : 0.72,
      zIndex: 1,
    });

    // CENTER
    gsap.set(cards[1], {
      x: 0,
      y: isMobile ? 0 : -8,
      scale: centerScale,
      opacity: 1,
      zIndex: 5,
    });

    // RIGHT
    gsap.set(cards[2], {
      x: 0,
      y: isMobile ? 0 : 8,
      scale: sideScale,
      opacity: isMobile ? 0.55 : 0.72,
      zIndex: 1,
    });

    updateCardContent(
      cards[0],
      leftCard
    );

    updateCardContent(
      cards[1],
      centerCard
    );

    updateCardContent(
      cards[2],
      rightCard
    );
  }, []);

  // =================================================
  // NEXT
  // =================================================

  const handleNext = () => {
    if (isAnimating.current) {
      return;
    }

    const cards = cardRefs.current;

    if (
      !cards[0] ||
      !cards[1] ||
      !cards[2]
    ) {
      return;
    }

    isAnimating.current = true;

    const isMobile =
      window.innerWidth <= 767;

    const sideScale = isMobile
      ? 0.82
      : 0.9;

    const centerScale = isMobile
      ? 1
      : 1.1;

    const left = cards[0];
    const center = cards[1];
    const right = cards[2];

    const nextIndex =
      activeIndex === CARDS.length - 1
        ? 0
        : activeIndex + 1;

    const nextRightCard =
      getCard(nextIndex + 1);

    // Make sure the next card is ready
    // behind the current right card.
    updateCardContent(
      left,
      getCard(nextIndex - 1)
    );

    // =================================================
    // SMOOTH ANIMATION
    // =================================================

    const tl = gsap.timeline({
      defaults: {
        overwrite: "auto",
      },

      onComplete: () => {
        // -------------------------------------------------
        // ROTATE DOM REFERENCES
        // -------------------------------------------------

        cardRefs.current = [
          center,
          right,
          left,
        ];

        // -------------------------------------------------
        // Update state
        // -------------------------------------------------

        setActiveIndex(nextIndex);

        // -------------------------------------------------
        // Prepare the new LEFT card
        // -------------------------------------------------

        updateCardContent(
          left,
          nextRightCard
        );

        // -------------------------------------------------
        // Put new LEFT card back smoothly
        // -------------------------------------------------

        gsap.set(left, {
          x: 0,
          y: isMobile ? 0 : 8,
          scale: sideScale,
          opacity: isMobile
            ? 0.55
            : 0.72,
          zIndex: 1,
        });

        isAnimating.current = false;
      },
    });

    // =================================================
    // LEFT CARD EXIT
    // =================================================

    tl.to(
      left,
      {
        x: -110,
        scale: sideScale * 0.94,
        opacity: 0,
        duration: 0.75,
        ease: "power2.in",
      },
      0
    );

    // =================================================
    // CENTER -> LEFT
    // =================================================

    tl.to(
      center,
      {
        x: -45,
        y: isMobile ? 0 : 8,
        scale: sideScale,
        opacity: isMobile
          ? 0.55
          : 0.72,
        zIndex: 1,
        duration: 0.9,
        ease: "power3.inOut",
      },
      0
    );

    // =================================================
    // RIGHT -> CENTER
    // =================================================

    tl.to(
      right,
      {
        x: -45,
        y: isMobile ? 0 : -8,
        scale: centerScale,
        opacity: 1,
        zIndex: 5,
        duration: 0.9,
        ease: "power3.inOut",
      },
      0
    );
  };

  // =================================================
  // PREVIOUS
  // =================================================

  const handlePrevious = () => {
    if (isAnimating.current) {
      return;
    }

    const cards = cardRefs.current;

    if (
      !cards[0] ||
      !cards[1] ||
      !cards[2]
    ) {
      return;
    }

    isAnimating.current = true;

    const isMobile =
      window.innerWidth <= 767;

    const sideScale = isMobile
      ? 0.82
      : 0.9;

    const centerScale = isMobile
      ? 1
      : 1.1;

    const left = cards[0];
    const center = cards[1];
    const right = cards[2];

    const previousIndex =
      activeIndex === 0
        ? CARDS.length - 1
        : activeIndex - 1;

    const nextLeftCard =
      getCard(previousIndex - 1);

    // =================================================
    // PREPARE EXITING RIGHT
    // =================================================

    updateCardContent(
      right,
      getCard(previousIndex + 1)
    );

    // =================================================
    // TIMELINE
    // =================================================

    const tl = gsap.timeline({
      defaults: {
        overwrite: "auto",
      },

      onComplete: () => {
        // -------------------------------------------------
        // ROTATE DOM REFERENCES
        // -------------------------------------------------

        cardRefs.current = [
          right,
          left,
          center,
        ];

        setActiveIndex(
          previousIndex
        );

        // -------------------------------------------------
        // Prepare new RIGHT card
        // -------------------------------------------------

        updateCardContent(
          center,
          nextLeftCard
        );

        // -------------------------------------------------
        // Reset new RIGHT card
        // -------------------------------------------------

        gsap.set(center, {
          x: 0,
          y: isMobile ? 0 : 8,
          scale: sideScale,
          opacity: isMobile
            ? 0.55
            : 0.72,
          zIndex: 1,
        });

        isAnimating.current = false;
      },
    });

    // =================================================
    // RIGHT -> OUT
    // =================================================

    tl.to(
      right,
      {
        x: 110,
        scale: sideScale * 0.94,
        opacity: 0,
        duration: 0.75,
        ease: "power2.in",
      },
      0
    );

    // =================================================
    // CENTER -> RIGHT
    // =================================================

    tl.to(
      center,
      {
        x: 45,
        y: isMobile ? 0 : 8,
        scale: sideScale,
        opacity: isMobile
          ? 0.55
          : 0.72,
        zIndex: 1,
        duration: 0.9,
        ease: "power3.inOut",
      },
      0
    );

    // =================================================
    // LEFT -> CENTER
    // =================================================

    tl.to(
      left,
      {
        x: 45,
        y: isMobile ? 0 : -8,
        scale: centerScale,
        opacity: 1,
        zIndex: 5,
        duration: 0.9,
        ease: "power3.inOut",
      },
      0
    );
  };

  // =================================================
  // AUTO SLIDER
  // =================================================

  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!isAnimating.current) {
        handleNext();
      }
    }, 3500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [activeIndex]);

  // =================================================
  // RENDER
  // =================================================

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
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            );

          background-size: 18px 18px;

          padding-top: 56px;
          padding-bottom: 64px;

          overflow: hidden;

          font-family:
            "Plus Jakarta Sans",
            "Segoe UI",
            Roboto,
            sans-serif;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .cap-header {
          width: 100%;
          max-width: none;

          margin: 0 auto 35px;

          padding-left: 16px;
          padding-right: 16px;

          box-sizing: border-box;

          display: flex;

          justify-content: space-between;

          align-items: flex-start;

          gap: 30px;

          flex-wrap: wrap;
        }

        .cap-title {
          color: #ffffff;

          font-size: 42px;

          font-weight: 700;

          margin: 0;

          letter-spacing: -0.02em;

          transform: translate(0, -10px);
        }

        .cap-desc {
          color: rgba(255,255,255,0.92);

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

        .cap-slider-track {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 45px;

          min-height: 430px;

          padding: 0 20px;

          box-sizing: border-box;

          position: relative;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .cap-card {
          width: 300px;

          flex-shrink: 0;

          background: #ffffff;

          border: 4px solid #ffffff;

          border-radius: 16px;

          overflow: hidden;

          position: relative;

          box-shadow:
            0 14px 34px rgba(0,0,0,0.30);

          will-change:
            transform,
            opacity;

          transform: translate3d(
            0,
            0,
            0
          );

          transform-origin:
            center center;

          backface-visibility: hidden;

          -webkit-backface-visibility: hidden;

          isolation: isolate;
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

          user-select: none;

          pointer-events: none;

          transform:
            translate3d(0,0,0);

          backface-visibility:
            hidden;

          -webkit-backface-visibility:
            hidden;
        }

        /* =====================================================
           LABEL
        ===================================================== */

        .cap-card-label {
          padding:
            14px 18px 16px;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          color: #16161a;

          font-size: 16px;

          font-weight: 600;

          white-space: nowrap;

          text-decoration: none;

          transition:
            color 0.25s ease;
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
            translateX(-8px);

          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .cap-card-label:hover
        .cap-card-arrow {
          opacity: 1;

          transform:
            translateX(0);
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

          border:
            2px solid #ffffff;

          background:
            transparent;

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

            transform: none;
          }

          .cap-card {
            width: 270px;
          }

          .cap-slider-track {
            gap: 30px;
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

          .cap-slider-track {
            gap: 40px;

            padding-left: 20px;
            padding-right: 20px;
          }
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1200px) {

          .cap-card {
            width: 300px;
          }

          .cap-slider-track {
            gap: 45px;
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

            margin-bottom: 15px;
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
            padding:
              20px 0 30px;
          }

          .cap-slider-track {
            width: max-content;

            gap: 18px;

            min-height: 350px;

            transform:
              translateX(-155px);
          }

          .cap-card {
            width: 240px;
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
            gap: 12px;

            min-height: 330px;

            transform:
              translateX(-145px);
          }

          .cap-card {
            width: 220px;

            border-radius: 14px;
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

          .cap-card {
            animation: none !important;
          }
        }

      `}</style>

      {/* ================= HEADER ================= */}

      <div className="cap-header">

        <h2 className="cap-title">
          Capabilities
        </h2>

        <p className="cap-desc">
          We bring together technology, expertise and
          practical solutions to solve complex business
          challenges. From digital platforms to AI, we
          help businesses work smarter, adapt and grow.
        </p>

      </div>

      {/* ================= CARDS ================= */}

      <div className="cap-slider">

        <div className="cap-slider-track">

          {/* LEFT */}

          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="cap-card"
          >
            <div className="cap-card-art">
              <img
                src={leftCard.img}
                alt={leftCard.title}
                className="cap-card-img"
                draggable={false}
              />
            </div>

            <Link
              to={leftCard.href}
              className="cap-card-label"
            >
              <span className="cap-card-title">
                {leftCard.title}
              </span>

              <span className="cap-card-arrow">
                →
              </span>
            </Link>
          </div>

          {/* CENTER */}

          <div
            ref={(el) => {
              cardRefs.current[1] = el;
            }}
            className="cap-card"
          >
            <div className="cap-card-art">
              <img
                src={centerCard.img}
                alt={centerCard.title}
                className="cap-card-img"
                draggable={false}
              />
            </div>

            <Link
              to={centerCard.href}
              className="cap-card-label"
            >
              <span className="cap-card-title">
                {centerCard.title}
              </span>

              <span className="cap-card-arrow">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT */}

          <div
            ref={(el) => {
              cardRefs.current[2] = el;
            }}
            className="cap-card"
          >
            <div className="cap-card-art">
              <img
                src={rightCard.img}
                alt={rightCard.title}
                className="cap-card-img"
                draggable={false}
              />
            </div>

            <Link
              to={rightCard.href}
              className="cap-card-label"
            >
              <span className="cap-card-title">
                {rightCard.title}
              </span>

              <span className="cap-card-arrow">
                →
              </span>
            </Link>
          </div>

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