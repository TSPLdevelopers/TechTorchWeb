import React from "react";
import { Link } from "react-router-dom";
   

/**
 * Capabilities section — cards move slowly and continuously forward
 * (infinite marquee). Shows 3 cards in view at a time, next card
 * scrolls in slowly. Pure CSS animation, pauses on hover, and
 * respects prefers-reduced-motion.
 */

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

// Duplicate the set so the strip totals 6 cards and loops seamlessly.
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
        <span>{title}</span>

        <span className="cap-card-arrow">
          →
        </span>
      </Link>
    </div>
  );
}

export default function CapabilitiesMarquee() {
  return (
    <section className="cap-section">
      <style>{`
  .cap-section {
    background: #6d0e42;
    background-image:
      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 28px 28px;
    padding: 56px 0 64px;
    overflow: hidden;
    font-family: Plus Jakarta San, "Segoe UI", Roboto, sans-serif;
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

  .cap-title {
    color: #000000;
    font-family: Plus Jakarta Sans;
    font-size: 42px;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.02em;
  }

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
    width: 100%;
    max-width: 1176px;
    margin: 0 auto;
    overflow: hidden;

    
  }

  .cap-track {
    display: flex;
    gap: 24px;
    width: max-content;
    padding: 0 24px;
    animation: cap-scroll 26s linear infinite;
  }

  .cap-marquee-viewport:hover .cap-track {
    animation-play-state: paused;
  }

  @keyframes cap-scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cap-track {
      animation: none;
    }
  }

  /* ================= CARD ================= */

  .cap-card {
  flex: 0 0 auto;
  width: 376px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 0 14px 34px rgba(0,0,0,0.3);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.cap-card:hover {
  transform: scale(1.04);
  box-shadow: 0 24px 50px rgba(0,0,0,0.35);
  z-index: 5;
}
  
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
  padding: 20px 22px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;

  font-size: 2px;
  font-weight: 600;
  color: #16161a;

  white-space: nowrap;

  transition: color 0.3s ease;
}

  .cap-card:hover .cap-card-label {
    color: #730042;
  }

  /* ================= ARROW ================= */

  .cap-card-arrow {
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background: rgba(115, 0, 66, 0.08);
  border: 1px solid rgba(115, 0, 66, 0.25);

  color: #730042;
  font-size: 21px;

  opacity: 0;
  visibility: hidden;

  transform: translate(-8px, -4px);

  transition: all 0.3s ease;
}

.cap-card:hover .cap-card-arrow {
  opacity: 1;
  visibility: visible;

  transform: translate(0, -4px);
}

.cap-card-arrow:hover {
  background: #730042;
  border-color: #730042;
  color: #fff;

  transform: translate(0, -4px) scale(1.08);

  box-shadow: 0 6px 16px rgba(115, 0, 66, 0.25);
}
  /* ================= RESPONSIVE ================= */

  @media (max-width: 900px) {
    .cap-card {
      width: 420px;
    }

    .cap-marquee-viewport {
      max-width: 948px;
    }
  }

  @media (max-width: 700px) {

    .cap-title {
      font-size: 30px;
    }

    .cap-card {
      width: 240px;
    }

    .cap-card-label {
      font-size: 18px;
      padding: 16px;
    }

    .cap-marquee-viewport {
      max-width: 92vw;
    }
  }
`}</style>

      <div className="cap-header">
        <h2 className="cap-title">Capabilities</h2>
        <p className="cap-desc">
          We bring together technology, expertise and practical solutions to
          solve complex business challenges. From digital platforms to AI, we
          help businesses work smarter, adapt and grow.
        </p>
      </div>

      <div className="cap-marquee-viewport">
        <div className="cap-track">
          {TRACK.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}