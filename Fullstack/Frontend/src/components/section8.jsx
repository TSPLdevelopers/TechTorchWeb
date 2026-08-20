import React from "react";

const COLORS = {
  cream: "#F5F1E8",
  maroon: "#7A1350",
  ink: "#1A1A1A",
  grey: "#5B5B5B",
  border: "#ECE7DC",
};

const industries = [
  {
    id: "education",
    title: "Education",
    description: "Connected solutions for better learning experiences.",
    image: "/Education 2 [Vectorized].svg",
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Digital solutions for smarter, more resilient insurance.",
    image: "/Insurance 2 [Vectorized].svg",
  },
  {
    id: "finance",
    title: "Finance",
    description: "Secure technology built for modern financial services.",
    image: "/Finance.svg",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Technology that enables smarter, connected care.",
    image: "/Healthcare 2 [Vectorized].svg",
  },
  {
    id: "insurance-2",
    title: "Insurance",
    description: "Digital solutions for smarter, more resilient insurance.",
    image: "/Insurance 2 [Vectorized].svg",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Smarter technology for connected operations.",
    image: "/Manufacturing 2 [Vectorized].svg",
  },
  {
    id: "fmcg",
    title: "FMCG",
    description: "Connected solutions for smarter movement and operations.",
    image: "/FMCG 2 [Vectorized].svg",
  },
  {
    id: "it",
    title: "Information Technology",
    description: "Digital capabilities built to accelerate innovation.",
    image: "/Information-Technology 2 [Vectorized].svg",
  },
  {
    id: "energy",
    title: "Energy",
    description: "Technology for efficient, evolving energy ecosystems.",
    image: "/Energy 3 [Vectorized].svg",
  },
  {
    id: "telecommunications",
    title: "Telecommunications",
    description: "Scalable solution for connected experiences.",
    image: "/Telecommunications 2 [Vectorized].svg",
  },
  {
    id: "transportation",
    title: "Transportation",
    description:
      "Connected solutions for smarter movement and operations.",
    image: "/Transportation 2 [Vectorized].svg",
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    description:
      "Scalable experiences for a connected marketplace.",
    image: "/TechTorch_E-Commerce_Icon 1.svg",
  },
];

function IndustryImage({ src, alt, hovered }) {
  return (
    <div className="industry-image-wrapper">
      <img
        src={src}
        alt={alt}
        className={`industry-image ${
          hovered ? "industry-image-hovered" : ""
        }`}
      />
    </div>
  );
}

function Card({ item }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className={`industry-card ${
        hovered ? "industry-card-hovered" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE */}
      <div className="industry-icon-box">
        <IndustryImage
          src={item.image}
          alt={item.title}
          hovered={hovered}
        />
      </div>

      {/* TITLE */}
      <h3 className="industry-title">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="industry-description">
        {item.description}
      </p>

      {/* LINK */}
      <a href="#" className="industry-link">
        Explore Industry

        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`industry-arrow ${
            hovered ? "industry-arrow-hovered" : ""
          }`}
        >
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          />

          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  );
}

export default function IndustriesCarousel() {
  const [paused, setPaused] = React.useState(false);

  const loopItems = [...industries, ...industries];

  return (
    <section className="industries-section">
      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .industries-section {
          position: relative;
          width: 100%;
          padding: 64px 80px 72px;
          background: ${COLORS.cream};

          background-image:
            repeating-linear-gradient(
              90deg,
              rgba(122,19,80,0.06) 0px,
              rgba(122,19,80,0.06) 1px,
              transparent 1px,
              transparent 145px
            );

          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;

          color: ${COLORS.ink};
          overflow: hidden;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .industries-header {
          width: 100%;
          max-width: 640px;
          margin-bottom: 48px;
        }

        .industries-heading {
          margin: 0 0 16px;
          font-size: 44px;
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .industries-heading span {
          color: ${COLORS.maroon};
        }

        .industries-subtitle {
          margin: 0;
          font-size: 20px;
          line-height: 1.5;
          color: ${COLORS.grey};
        }


        /* =====================================================
           CAROUSEL
        ===================================================== */

        .industries-viewport {
          width: 100%;
          overflow: hidden;

          mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 3%,
              black 97%,
              transparent
            );

          -webkit-mask-image:
            linear-gradient(
              90deg,
              transparent,
              black 3%,
              black 97%,
              transparent
            );
        }

        @keyframes industriesScroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .industries-track {
          display: flex;
          width: max-content;

          animation:
            industriesScroll 30s linear infinite;
        }

        .industries-track.paused {
          animation-play-state: paused;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .industry-card {
          width: 280px;
          min-width: 280px;
          height: 380px;

          margin-right: 24px;

          padding: 32px 28px 28px;

          background: #ffffff;

          border: 1px solid ${COLORS.border};
          border-radius: 16px;

          display: flex;
          flex-direction: column;

          flex-shrink: 0;

          box-shadow:
            0 1px 2px rgba(0,0,0,0.03);

          transition:
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .industry-card-hovered {
          transform: translateY(-4px);

          box-shadow:
            0 12px 28px rgba(122,19,80,0.14);
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .industry-icon-box {
          width: 96px;
          height: 96px;

          margin-bottom: 24px;

          flex-shrink: 0;
        }

        .industry-image-wrapper {
          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 12px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .industry-image {
          width: 100%;
          height: 100%;

          object-fit: contain;

          transition:
            transform 0.4s cubic-bezier(.34,1.56,.64,1),
            filter 0.3s ease;

          transform:
            scale(1)
            translateY(0);
        }

        .industry-image-hovered {
          transform:
            scale(1.12)
            translateY(-4px);

          filter:
            drop-shadow(
              0 8px 14px
              rgba(122,19,80,0.25)
            );
        }


        /* =====================================================
           TITLE
        ===================================================== */

        .industry-title {
          margin: 0 0 10px;

          font-size: 20px;
          line-height: 1.3;

          font-weight: 700;

          color: ${COLORS.ink};
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .industry-description {
          margin: 0 0 24px;

          font-size: 14.5px;
          line-height: 1.5;

          color: ${COLORS.grey};

          flex-grow: 1;
        }


        /* =====================================================
           LINK
        ===================================================== */

        .industry-link {
          display: inline-flex;
          align-items: center;

          gap: 8px;

          width: fit-content;

          color: ${COLORS.maroon};

          font-size: 14.5px;
          font-weight: 600;

          text-decoration: none;
        }

        .industry-arrow {
          transition:
            transform 0.2s ease;
        }

        .industry-arrow-hovered {
          transform: translateX(4px);
        }


        /* =====================================================
           TABLET
           768px - 1023px
        ===================================================== */

        @media (max-width: 1023px) {

          .industries-section {
            padding:
              56px
              40px
              64px;
          }

          .industries-header {
            margin-bottom: 40px;
          }

          .industries-heading {
            font-size: 38px;
          }

          .industries-subtitle {
            font-size: 18px;
          }

          .industry-card {
            width: 260px;
            min-width: 260px;

            height: 360px;

            margin-right: 20px;

            padding:
              28px
              24px
              24px;
          }

          .industry-icon-box {
            width: 88px;
            height: 88px;

            margin-bottom: 20px;
          }

          .industry-title {
            font-size: 19px;
          }

          .industry-description {
            font-size: 14px;
          }
        }


        /* =====================================================
           MOBILE
           640px - 767px
        ===================================================== */

        @media (max-width: 767px) {

          .industries-section {
            padding:
              48px
              20px
              56px;
          }

          .industries-header {
            max-width: 100%;
            margin-bottom: 32px;
          }

          .industries-heading {
            font-size: 32px;
            line-height: 1.2;
            letter-spacing: -0.4px;

            margin-bottom: 12px;
          }

          .industries-subtitle {
            font-size: 16px;
            line-height: 1.55;
          }

          .industries-viewport {
            margin-left: -5px;
            width: calc(100% + 10px);
          }

          .industry-card {
            width: 250px;
            min-width: 250px;

            height: 350px;

            margin-right: 16px;

            padding:
              26px
              22px
              24px;

            border-radius: 14px;
          }

          .industry-icon-box {
            width: 82px;
            height: 82px;

            margin-bottom: 20px;
          }

          .industry-title {
            font-size: 18px;
            margin-bottom: 9px;
          }

          .industry-description {
            font-size: 14px;
            line-height: 1.5;

            margin-bottom: 20px;
          }

          .industry-link {
            font-size: 14px;
          }
        }


        /* =====================================================
           SMALL MOBILE
           Below 480px
        ===================================================== */

        @media (max-width: 479px) {

          .industries-section {
            padding:
              40px
              16px
              48px;
          }

          .industries-heading {
            font-size: 28px;
          }

          .industries-subtitle {
            font-size: 15px;
          }

          .industries-header {
            margin-bottom: 28px;
          }

          .industry-card {
            width: 235px;
            min-width: 235px;

            height: 335px;

            margin-right: 14px;

            padding:
              24px
              20px
              22px;
          }

          .industry-icon-box {
            width: 76px;
            height: 76px;

            margin-bottom: 18px;
          }

          .industry-title {
            font-size: 17px;
          }

          .industry-description {
            font-size: 13.5px;
          }

          .industry-link {
            font-size: 13.5px;
          }
        }


        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) {

          .industry-card-hovered {
            transform: none;

            box-shadow:
              0 1px 2px rgba(0,0,0,0.03);
          }

          .industry-image-hovered {
            transform:
              scale(1)
              translateY(0);

            filter: none;
          }

          .industry-arrow-hovered {
            transform: none;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .industries-track {
            animation: none;
          }

          .industry-card,
          .industry-image,
          .industry-arrow {
            transition: none;
          }
        }

      `}</style>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="industries-header">
        <h1 className="industries-heading">
          Technology Across{" "}
          <span>Industries</span>
        </h1>

        <p className="industries-subtitle">
          Technology solutions shaped around the unique needs of
          industry we serve.
        </p>
      </div>


      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div
        className="industries-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`industries-track ${
            paused ? "paused" : ""
          }`}
        >
          {loopItems.map((item, i) => (
            <Card
              key={`${item.id}-${i}`}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}