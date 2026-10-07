import React, { useEffect, useRef } from "react";
import {
  Lock,
  RefreshCw,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const WINE = "#730042";

const features = [
  {
    icon: Lock,
    title: "System Integration",
    body: "Connect applications and business systems to improve information flow across the organization.",
  },
  {
    icon: RefreshCw,
    title: "Software Modernization",
    body: "Modernize existing applications and technology environments to support changing business needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    body: "Build flexible infrastructure that supports scalability and evolving technology needs.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    body: "Strengthen the protection of applications, systems and business information through security-focused solutions.",
  },
];

export default function ModernizeTechnologySection() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const grid = featuresRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll(".modernize-card-reveal")
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    const setupAnimation = () => {
      observer?.disconnect();

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        grid.classList.remove("reveal-enabled");
        return;
      }

      cards.forEach((card) => card.classList.remove("is-visible"));
      grid.classList.add("reveal-enabled");

      observer = new IntersectionObserver(
        (entries) => {
          const enteringCards = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                Number(a.target.dataset.index) -
                Number(b.target.dataset.index)
            );

          enteringCards.forEach((entry, index) => {
            entry.target.style.setProperty(
              "--reveal-delay",
              `${index * 200}ms`
            );

            entry.target.classList.add("is-visible");
          });

          // Reset off-screen cards to replay when they return.
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              entry.target.classList.remove("is-visible");
              entry.target.style.setProperty("--reveal-delay", "0ms");
            }
          });
        },
        { threshold: 0 }
      );

      cards.forEach((card) => observer.observe(card));
    };

    setupAnimation();
    motionPreference.addEventListener("change", setupAnimation);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", setupAnimation);
      grid.classList.remove("reveal-enabled");
    };
  }, []);

  return (
    <section className="modernize-technology-section">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .modernize-technology-section {
          --modernize-wine: ${WINE};
          --modernize-pink: #fce7f1;

          width: 100%;
          background: var(--modernize-wine);
          color: #ffffff;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .modernize-technology-section,
        .modernize-technology-section *,
        .modernize-technology-section *::before,
        .modernize-technology-section *::after {
          box-sizing: border-box;
        }

        .modernize-technology-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 100px;
        }

        .modernize-technology-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(0, 1.05fr);
          gap: 70px;
          align-items: center;
        }

        .modernize-content {
          min-width: 0;
          max-width: 570px;
        }

        .modernize-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 17px;
          padding: 6px 11px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.12);
          color: #f3d9e2;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .modernize-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ffffff;
        }

        .modernize-heading {
          margin: 0 0 18px;
          max-width: 570px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: -0.8px;
          color: #ffffff;
        }

        .modernize-description {
          margin: 0 0 13px;
          max-width: 570px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.72;
          font-weight: 500;
          color: #e9c9db;
        }

        .modernize-description:last-of-type {
          margin-bottom: 26px;
        }

        .modernize-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 20px;
          border: 1px solid #ffffff;
          border-radius: 6px;
          background: #ffffff;
          color: var(--modernize-wine);
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition:
            transform 250ms ease,
            box-shadow 250ms ease;
        }

        .modernize-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .modernize-button:active {
          transform: translateY(0);
        }

        .modernize-button:focus-visible {
          outline: 3px solid #f5bad9;
          outline-offset: 4px;
        }

        .modernize-features-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          min-width: 0;
        }

        /* Entrance wrapper keeps hover separate from the animation. */
        .modernize-card-reveal {
          display: flex;
          min-width: 0;
        }

        .modernize-features-grid.reveal-enabled
        .modernize-card-reveal {
          opacity: 0;
          transform: translateY(36px) scale(0.96);
        }

        .modernize-features-grid.reveal-enabled
        .modernize-card-reveal.is-visible {
          animation: modernize-card-open
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay, 0ms)
            both;
        }

        @keyframes modernize-card-open {
          from {
            opacity: 0;
            transform: translateY(36px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .modernize-feature-card {
          width: 100%;
          min-width: 0;
          padding: 23px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition:
            transform 300ms ease,
            background-color 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .modernize-feature-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .modernize-feature-title {
          margin: 0 0 7px;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 700;
          color: #ffffff;
          transition: color 300ms ease;
        }

        .modernize-feature-body {
          margin: 0;
          font-size: 11px;
          line-height: 1.65;
          font-weight: 400;
          color: #e6bfd5;
          transition: color 300ms ease;
        }

        /* Light pink cards and highlighted icons on hover. */
        @media (hover: hover) {
          .modernize-feature-card:hover {
            transform: translateY(-6px);
            background: var(--modernize-pink);
            border-color: #f3bbd6;
            box-shadow: 0 16px 30px rgba(40, 0, 24, 0.22);
          }

          .modernize-feature-card:hover .modernize-feature-icon {
            background: var(--modernize-wine);
            color: #ffffff;
            transform: scale(1.1);
            box-shadow:
              0 0 0 4px rgba(115, 0, 66, 0.08),
              0 7px 16px rgba(115, 0, 66, 0.2);
          }

          .modernize-feature-card:hover .modernize-feature-title {
            color: var(--modernize-wine);
          }

          .modernize-feature-card:hover .modernize-feature-body {
            color: #68344f;
          }
        }

        @media (max-width: 1200px) {
          .modernize-technology-container {
            padding: 72px 40px;
          }

          .modernize-technology-grid {
            gap: 52px;
          }

          .modernize-heading {
            font-size: 35px;
          }

          .modernize-description {
            font-size: 13.5px;
          }

          .modernize-feature-card {
            padding: 21px;
          }
        }

        @media (max-width: 900px) {
          .modernize-technology-container {
            padding: 64px 40px;
          }

          .modernize-technology-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .modernize-content {
            max-width: 760px;
          }

          .modernize-heading {
            max-width: 720px;
            font-size: 34px;
          }

          .modernize-description {
            max-width: 720px;
          }

          .modernize-features-grid {
            width: 100%;
            max-width: 760px;
          }
        }

        @media (max-width: 767px) {
          .modernize-technology-container {
            padding: 56px 40px;
          }

          .modernize-technology-grid {
            gap: 38px;
          }

          .modernize-heading {
            font-size: 31px;
          }

          .modernize-description {
            font-size: 13px;
          }

          .modernize-feature-card {
            padding: 20px;
          }
        }

        @media (max-width: 600px) {
          .modernize-technology-container {
            padding: 50px 24px;
          }

          .modernize-technology-grid {
            gap: 34px;
          }

          .modernize-badge {
            margin-bottom: 14px;
            padding: 5px 10px;
            font-size: 8px;
          }

          .modernize-badge-dot {
            width: 5px;
            height: 5px;
          }

          .modernize-heading {
            margin-bottom: 15px;
            font-size: 29px;
            line-height: 1.18;
            letter-spacing: -0.5px;
          }

          .modernize-description {
            font-size: 12.5px;
            line-height: 1.7;
            margin-bottom: 11px;
          }

          .modernize-description:last-of-type {
            margin-bottom: 23px;
          }

          .modernize-button {
            min-height: 40px;
            padding: 0 17px;
            font-size: 9px;
          }

          .modernize-features-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 13px;
          }

          .modernize-feature-card {
            padding: 19px;
            border-radius: 12px;
          }

          .modernize-feature-icon {
            width: 36px;
            height: 36px;
            margin-bottom: 13px;
          }

          .modernize-feature-title {
            font-size: 13px;
            margin-bottom: 6px;
          }

          .modernize-feature-body {
            font-size: 11.5px;
          }
        }

        @media (max-width: 480px) {
          .modernize-technology-container {
            padding: 44px 16px;
          }

          .modernize-heading {
            font-size: 26px;
          }

          .modernize-description {
            font-size: 11.8px;
            line-height: 1.68;
          }

          .modernize-button {
            min-height: 39px;
            padding: 0 15px;
            font-size: 8.5px;
          }

          .modernize-feature-card {
            padding: 18px;
          }

          .modernize-feature-title {
            font-size: 12.5px;
          }

          .modernize-feature-body {
            font-size: 11px;
          }
        }

        @media (max-width: 340px) {
          .modernize-technology-container {
            padding: 38px 16px;
          }

          .modernize-heading {
            font-size: 24px;
          }

          .modernize-description {
            font-size: 11.3px;
          }

          .modernize-button {
            width: 100%;
          }

          .modernize-feature-body {
            font-size: 10.5px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .modernize-features-grid.reveal-enabled
          .modernize-card-reveal,
          .modernize-features-grid.reveal-enabled
          .modernize-card-reveal.is-visible {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .modernize-button,
          .modernize-feature-card,
          .modernize-feature-icon,
          .modernize-feature-title,
          .modernize-feature-body {
            transition: none;
          }

          .modernize-button:hover,
          .modernize-feature-card:hover,
          .modernize-feature-card:hover .modernize-feature-icon {
            transform: none;
          }
        }
      `}</style>

      <div className="modernize-technology-container">
        <div className="modernize-technology-grid">
          {/* Left content */}
          <div className="modernize-content">
            <span className="modernize-badge">
              <span className="modernize-badge-dot" />
              DIGITAL TRANSFORMATION
            </span>

            <h2 className="modernize-heading">
              Modernize Technology Around Your Business
            </h2>

            <p className="modernize-description">
              Digital transformation should address real business
              requirements—not simply introduce new technology.
            </p>

            <p className="modernize-description">
              TechTorch supports organizations in developing new applications,
              integrating existing systems and modernizing technology
              environments while maintaining focus on business continuity and
              long-term requirements.
            </p>

            <button type="button" className="modernize-button">
              EXPLORE OUR SOLUTIONS
              <ArrowRight size={14} strokeWidth={1.8} />
            </button>
          </div>

          {/* Right cards */}
          <div
            ref={featuresRef}
            className="modernize-features-grid"
          >
            {features.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                data-index={index}
                className="modernize-card-reveal"
              >
                <article className="modernize-feature-card">
                  <span className="modernize-feature-icon">
                    <Icon size={16} strokeWidth={1.8} />
                  </span>

                  <h3 className="modernize-feature-title">
                    {title}
                  </h3>

                  <p className="modernize-feature-body">
                    {body}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}