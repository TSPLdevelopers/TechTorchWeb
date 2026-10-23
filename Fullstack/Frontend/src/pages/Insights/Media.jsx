import React, { useState } from "react";

export default function Media() {
  const [activeFilter, setActiveFilter] = useState("All Media");

  const filters = [
    "All Media",
    "Company Highlights",
    "Product Showcase",
    "News & Updates",
  ];

  // Images are stored in the public folder.
  const mediaItems = [
    {
      id: 1,
      category: "Company Highlights",
      date: "15 OCT 2024",
      title:
        "TechTorch Participates in Industry Technology Forum 2024",
      description:
        "Our team shared insights on digital transformation and connected with industry leaders and peers.",
      image: "/Media2.png",
      featured: true,
    },
    {
      id: 2,
      category: "Product Showcase",
      date: "08 Oct 2024",
      title: "TorchX Suite – Smarter Business Management",
      description:
        "Explore how TorchX helps organisations streamline operations and drive growth.",
      image: "/Media3.png",
    },
    {
      id: 3,
      category: "Company Highlights",
      date: "25 Sep 2024",
      title: "Edufic Era at Education Leaders Summit",
      description:
        "Showcasing our education management platform and its impact.",
      image: "/Media4.png",
    },
    {
      id: 4,
      category: "News & Updates",
      date: "12 Sep 2024",
      title: "TechTorch Launches New Features in TorchX Suite",
      description:
        "Latest enhancements to improve productivity and user experience.",
      image: "/Media5.png",
    },
    {
      id: 5,
      category: "Company Highlights",
      date: "05 Sep 2024",
      title: "Building Stronger Together",
      description:
        "Glimpses from our team events and community initiatives.",
      image: "/Media6.png",
    },
  ];

  const capabilities = [
    {
      title: "ERP",
      description:
        "Integrated systems for better business control and visibility.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      ),
    },
    {
      title: "Supply Chain Management",
      description:
        "Improve efficiency and build a resilient supply chain.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2" y="6" width="13" height="12" rx="2" />
          <path d="M15 10h4l3 3v5h-7" />
          <circle cx="7" cy="19" r="2" />
          <circle cx="18" cy="19" r="2" />
        </svg>
      ),
    },
    {
      title: "Software Development",
      description:
        "Custom applications, integrations and ongoing support.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 5-7 7 7 7M16 5l7 7-7 7M14 3l-4 18" />
        </svg>
      ),
    },
    {
      title: "Other Solutions",
      description:
        "Technology services for evolving business needs.",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.5 2.6-1.7-.7a8 8 0 0 1-1.8 1l-.3 1.9h-3l-.3-1.9a8 8 0 0 1-1.8-1l-1.7.7-1.5-2.6 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.5-2.6 1.7.7a8 8 0 0 1 1.8-1l.3-1.9h3l.3 1.9a8 8 0 0 1 1.8 1l1.7-.7 1.5 2.6-1.4 1.1a8 8 0 0 1 0 2Z" transform="translate(0 -2) scale(.95)" />
        </svg>
      ),
    },
  ];

  const filteredItems =
    activeFilter === "All Media"
      ? mediaItems
      : mediaItems.filter(
          (item) => item.category === activeFilter
        );

  const featuredItem =
    activeFilter === "All Media"
      ? filteredItems.find((item) => item.featured)
      : null;

  const otherItems = featuredItem
    ? filteredItems.filter(
        (item) => item.id !== featuredItem.id
      )
    : filteredItems;

  return (
    <div className="media-page">
      <style>{`

        /* =========================
           GLOBAL STYLES
        ========================= */

        .media-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #111c32;
          font-family: Inter, sans-serif;
        }

        .media-page *,
        .media-page *::before,
        .media-page *::after {
          box-sizing: border-box;
        }

        .media-page img {
          display: block;
          width: 100%;
        }

        .media-page a {
          text-decoration: none;
        }

        .media-page button {
          font-family: inherit;
        }

        .media-eyebrow {
          display: block;
          margin-bottom: 12px;
          color: #730042;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: .35px;
          line-height: 1.5;
        }

        /* =========================
           HERO SECTION
        ========================= */

        .media-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 35px;
          width: 100%;
          min-height: 380px;
          padding: 30px 2.5%;
          background: #faf9f4;
        }

        .media-hero-content {
          max-width: 600px;
          padding-left: 0;
        }

        .media-hero-content .media-eyebrow {
          margin-bottom: 15px;
        }

        .media-hero-content h1 {
          margin: 0 0 16px;
          color: #111c32;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(32px, 3.2vw, 48px);
          font-weight: 800;
          letter-spacing: -1.6px;
          line-height: 1.15;
        }

        .media-hero-content p {
          max-width: 560px;
          margin: 0;
          color: #68778a;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .media-hero-visual {
          width: 100%;
          height: 335px;
          overflow: hidden;
          clip-path: polygon(
            12% 0,
            100% 0,
            100% 100%,
            0 100%
          );
        }

        .media-hero-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* =========================
           MEDIA HIGHLIGHTS
        ========================= */

        .media-highlights {
          width: 100%;
          padding: 55px 2.5% 60px;
          background: #ffffff;
        }

        .media-highlights-header {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          align-items: center;
          gap: 30px;
          margin-bottom: 34px;
        }

        .media-section-heading {
          max-width: 680px;
        }

        .media-section-heading .media-eyebrow {
          margin-bottom: 8px;
        }

        .media-section-heading h2 {
          margin: 0 0 12px;
          color: #111c32;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(25px, 2.3vw, 34px);
          font-weight: 800;
          letter-spacing: -.9px;
          line-height: 1.25;
        }

        .media-section-heading p {
          max-width: 670px;
          margin: 0;
          color: #68778a;
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================
           FILTERS
        ========================= */

        .media-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: 100%;
        }

        .media-filter {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 35px;
          padding: 9px 18px;
          border: none;
          border-radius: 30px;
          background: #f0f3f7;
          color: #64748b;
          font-size: 10px;
          font-weight: 650;
          white-space: nowrap;
          cursor: pointer;
          transition:
            background .2s ease,
            color .2s ease;
        }

        .media-filter:hover,
        .media-filter.active {
          background: #730042;
          color: #ffffff;
        }

        /* =========================
           MEDIA CARDS GRID
        ========================= */

        .media-cards {
          display: grid;
          grid-template-columns: minmax(0, 2fr) repeat(
            2,
            minmax(0, .94fr)
          );
          grid-template-rows: repeat(2, minmax(0, 1fr));
          gap: 18px;
          width: 100%;
          align-items: stretch;
        }

        .media-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          border: 1px solid #e7ebf1;
          border-radius: 11px;
          background: #ffffff;
          box-shadow: 0 1px 2px rgba(15, 23, 42, .035);
          transition:
            transform .25s ease,
            box-shadow .25s ease;
        }

        .media-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 22px rgba(15, 23, 42, .075);
        }

        .media-card.featured {
          grid-column: 1;
          grid-row: 1 / span 2;
        }

        .media-card-image {
          position: relative;
          flex-shrink: 0;
          width: 100%;
          height: 145px;
          overflow: hidden;
          background: #f1f3f5;
        }

        .media-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform .4s ease;
        }

        .media-card:hover .media-card-image img {
          transform: scale(1.035);
        }

        .media-card-category {
          position: absolute;
          top: 10px;
          left: 11px;
          display: inline-flex;
          align-items: center;
          max-width: calc(100% - 22px);
          padding: 5px 11px;
          overflow: hidden;
          border-radius: 25px;
          background: #ffffff;
          color: #354155;
          font-size: 9px;
          font-weight: 650;
          line-height: 1.3;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .media-card-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-start;
          padding: 17px 15px;
        }

        .media-card-date {
          display: block;
          margin-bottom: 9px;
          color: #94a3b8;
          font-size: 10px;
          font-weight: 550;
          line-height: 1.5;
        }

        .media-card-content h3 {
          margin: 0 0 9px;
          color: #111c32;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          font-weight: 750;
          line-height: 1.45;
          letter-spacing: -.25px;
        }

        .media-card-content p {
          margin: 0 0 18px;
          color: #758297;
          font-size: 10.5px;
          font-weight: 400;
          line-height: 1.7;
        }

        .media-card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          color: #730042;
          font-size: 10px;
          font-weight: 750;
          line-height: 1.5;
        }

        .media-card-link span {
          display: inline-block;
          font-size: 15px;
          transition: transform .2s ease;
        }

        .media-card-link:hover span {
          transform: translateX(4px);
        }

        /* FEATURED CARD */

        .media-card.featured .media-card-image {
          height: 210px;
        }

        .media-card.featured .media-card-content {
          padding: 20px;
        }

        .media-card.featured .media-card-content h3 {
          font-size: clamp(18px, 1.6vw, 23px);
          line-height: 1.4;
          letter-spacing: -.5px;
        }

        .media-card.featured .media-card-content p {
          font-size: 11.5px;
          line-height: 1.75;
        }

        /* =========================
           DIGITAL CAPABILITIES
        ========================= */

        .media-capabilities {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 2fr);
          align-items: center;
          gap: 38px;
          width: 100%;
          min-height: 300px;
          padding: 48px 2.5%;
          background: #faf9f4;
        }

        .media-capabilities-intro {
          max-width: 440px;
        }

        .media-capabilities-intro .media-eyebrow {
          margin-bottom: 10px;
        }

        .media-capabilities-intro h2 {
          margin: 0 0 14px;
          color: #111c32;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(24px, 2.1vw, 32px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -.8px;
        }

        .media-capabilities-intro p {
          margin: 0 0 22px;
          color: #748196;
          font-size: 12px;
          line-height: 1.8;
        }

        .media-services-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 39px;
          padding: 11px 17px;
          border-radius: 5px;
          background: #730042;
          color: #ffffff;
          font-size: 9px;
          font-weight: 750;
          transition: background .2s ease;
        }

        .media-services-button:hover {
          background: #570032;
        }

        .media-services-button span {
          font-size: 16px;
        }

        .media-capabilities-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          align-items: stretch;
          width: 100%;
        }

        .media-capability {
          min-width: 0;
          min-height: 145px;
          padding: 10px 17px;
          border-left: 1px solid #efede7;
        }

        .media-capability-icon {
          display: block;
          width: 25px;
          height: 25px;
          margin-bottom: 16px;
          color: #730042;
        }

        .media-capability-icon svg {
          width: 100%;
          height: 100%;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .media-capability h3 {
          margin: 0 0 9px;
          color: #111c32;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 11px;
          font-weight: 750;
          line-height: 1.55;
        }

        .media-capability p {
          margin: 0;
          color: #8490a1;
          font-size: 10px;
          line-height: 1.75;
        }

        /* =========================
           BOTTOM CTA
        ========================= */

        .media-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          width: 100%;
          min-height: 190px;
          padding: 35px 2.5%;
          background: #510027;
          color: #ffffff;
        }

        .media-cta-content {
          max-width: 800px;
        }

        .media-cta-eyebrow {
          display: block;
          margin-bottom: 11px;
          color: #d8a4bf;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: .5px;
          line-height: 1.5;
        }

        .media-cta h2 {
          margin: 0 0 10px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(25px, 2.5vw, 35px);
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -.7px;
        }

        .media-cta p {
          max-width: 700px;
          margin: 0;
          color: #e0cbd5;
          font-size: 12px;
          line-height: 1.75;
        }

        .media-cta-button {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 42px;
          padding: 12px 21px;
          border-radius: 30px;
          background: #ffffff;
          color: #111c32;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
          transition:
            background .2s ease,
            transform .2s ease;
        }

        .media-cta-button:hover {
          transform: translateY(-2px);
          background: #f3e9ef;
        }

        .media-cta-button span {
          font-size: 16px;
        }

        /* =========================
           TABLET RESPONSIVENESS
        ========================= */

        @media (max-width: 1024px) {
          .media-hero {
            gap: 25px;
            padding-right: 4%;
            padding-left: 4%;
          }

          .media-hero-visual {
            height: 300px;
          }

          .media-highlights {
            padding-right: 4%;
            padding-left: 4%;
          }

          .media-highlights-header {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .media-filters {
            max-width: 100%;
          }

          .media-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: auto;
          }

          .media-card.featured {
            grid-column: auto;
            grid-row: auto;
          }

          .media-card.featured .media-card-image {
            height: 210px;
          }

          .media-card.featured .media-card-content {
            min-height: 0;
          }

          .media-capabilities {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-right: 4%;
            padding-left: 4%;
          }

          .media-capabilities-intro {
            max-width: 650px;
          }

          .media-cta {
            padding-right: 4%;
            padding-left: 4%;
          }
        }

        /* =========================
           MOBILE RESPONSIVENESS
        ========================= */

        @media (max-width: 640px) {
          .media-hero {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 35px 20px;
          }

          .media-hero-content h1 {
            font-size: 32px;
          }

          .media-hero-content p {
            font-size: 13px;
          }

          .media-hero-visual {
            height: 240px;
            clip-path: polygon(
              8% 0,
              100% 0,
              100% 100%,
              0 100%
            );
          }

          .media-highlights {
            padding: 40px 20px;
          }

          .media-highlights-header {
            gap: 22px;
            margin-bottom: 25px;
          }

          .media-section-heading h2 {
            font-size: 27px;
          }

          .media-section-heading p {
            font-size: 12px;
          }

          .media-filters {
            gap: 7px;
          }

          .media-filter {
            min-height: 32px;
            padding: 8px 12px;
            font-size: 9px;
          }

          .media-cards {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .media-card-image,
          .media-card.featured .media-card-image {
            height: 210px;
          }

          .media-card-content,
          .media-card.featured .media-card-content {
            min-height: 0;
            padding: 20px;
          }

          .media-card-content h3,
          .media-card.featured .media-card-content h3 {
            font-size: 18px;
          }

          .media-card-content p,
          .media-card.featured .media-card-content p {
            font-size: 12px;
          }

          .media-capabilities {
            padding: 40px 20px;
            gap: 30px;
          }

          .media-capabilities-intro h2 {
            font-size: 27px;
          }

          .media-capabilities-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px 0;
          }

          .media-capability {
            padding: 12px;
          }

          .media-capability h3 {
            font-size: 12px;
          }

          .media-capability p {
            font-size: 10px;
          }

          .media-cta {
            align-items: flex-start;
            flex-direction: column;
            gap: 23px;
            padding: 35px 20px;
          }

          .media-cta h2 {
            font-size: 26px;
          }

          .media-cta p {
            font-size: 12px;
          }
        }

      `}</style>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="media-hero">
        <div className="media-hero-content">
          <span className="media-eyebrow">
            MEDIA CENTER
          </span>

          <h1>Discover TechTorch</h1>

          <p>
            Explore the technology, platforms and company highlights
            behind TechTorch Solutions. Discover our digital solutions,
            product capabilities and updates that reflect our work in
            business technology.
          </p>
        </div>

        <div className="media-hero-visual">
          <img
            src="/Media1.png"
            alt="TechTorch technology team"
          />
        </div>
      </section>

      {/* =========================
          MEDIA HIGHLIGHTS
      ========================= */}

      <section className="media-highlights">
        <div className="media-highlights-header">
          <div className="media-section-heading">
            <span className="media-eyebrow">
              EXPLORE OUR MEDIA
            </span>

            <h2>Media Highlights</h2>

            <p>
              Discover selected highlights from TechTorch Solutions,
              including company activities, product showcases and
              official updates.
            </p>
          </div>

          <div className="media-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`media-filter ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="media-cards">
          {featuredItem && (
            <article className="media-card featured">
              <div className="media-card-image">
                <img
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  loading="lazy"
                />

                <span className="media-card-category">
                  {featuredItem.category}
                </span>
              </div>

              <div className="media-card-content">
                <span className="media-card-date">
                  {featuredItem.date}
                </span>

                <h3>{featuredItem.title}</h3>

                <p>{featuredItem.description}</p>

                <a
                  href="/blogs"
                  className="media-card-link"
                >
                  View Details <span>→</span>
                </a>
              </div>
            </article>
          )}

          {otherItems.map((item) => (
            <article className="media-card" key={item.id}>
              <div className="media-card-image">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="media-card-category">
                  {item.category}
                </span>
              </div>

              <div className="media-card-content">
                <span className="media-card-date">
                  {item.date}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <a
                  href="/blogs"
                  className="media-card-link"
                >
                  View Details <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          DIGITAL CAPABILITIES
      ========================= */}

      <section className="media-capabilities">
        <div className="media-capabilities-intro">
          <span className="media-eyebrow">
            OUR DIGITAL CAPABILITIES
          </span>

          <h2>Solutions for a Stronger Tomorrow</h2>

          <p>
            From enterprise applications to custom software
            development, TechTorch Solutions delivers technology
            services aligned with business requirements.
          </p>

          <a
            href="/digitalsolution"
            className="media-services-button"
          >
            EXPLORE OUR SERVICES <span>→</span>
          </a>
        </div>

        <div className="media-capabilities-grid">
          {capabilities.map((item) => (
            <div className="media-capability" key={item.title}>
              <span className="media-capability-icon">
                {item.icon}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="media-cta">
        <div className="media-cta-content">
          <span className="media-cta-eyebrow">
            STAY CONNECTED WITH TECHTORCH
          </span>

          <h2>Let's Build Something Great Together</h2>

          <p>
            Learn more about our solutions, platforms and technology
            capabilities. Connect with our team to discuss your
            business requirements.
          </p>
        </div>

        <a
          href="/start-conversation"
          className="media-cta-button"
        >
          TALK TO OUR EXPERTS <span>→</span>
        </a>
      </section>
    </div>
  );
}