import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Cloud,
  Share2,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Scalable Architecture",
    body: "Elastic cloud infrastructure designed to support growing enrollment and new departments without re-engineering.",
  },
  {
    icon: Share2,
    title: "Multi-Campus Readiness",
    body: "Centralized governance with localized autonomy across branch campuses, satellite centers, and affiliated colleges.",
  },
  {
    icon: LayoutGrid,
    title: "Modular Program Expansion",
    body: "Effortlessly introduce new academic degrees, online micro-certifications, vocational tracks, and specialized curricula.",
  },
  {
    icon: ShieldCheck,
    title: "Future-Proof Technology",
    body: "Seamless integration with emerging AI learning models, advanced student analytics, and secure digital credentials.",
  },
];

export default function EvolveWithInstitutionSection() {
  const cardsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardsRef.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="evolve-section">
      <div className="evolve-container">
        {/* Header */}
        <div className="evolve-header">
          <span className="evolve-badge">
            <ChevronRight size={13} strokeWidth={3} />
            READY FOR THE NEXT STAGE OF GROWTH
          </span>

          <h2 className="evolve-heading">
            Technology that can evolve with your institution.
          </h2>

          <p className="evolve-description">
            Your institution today may not look the same a few years from
            now. More students, new programs, additional departments, new
            locations and changing expectations can all create new technology
            requirements. That is why we design with change in mind —
            strengthening your current foundation while creating room for
            future capabilities.
          </p>
        </div>

        {/* Staggered card entrance */}
        <div ref={cardsRef} className="evolve-grid">
          {features.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className={`evolve-card-reveal ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ "--reveal-delay": `${index * 180}ms` }}
            >
              <article className="evolve-card">
                <span className="evolve-icon">
                  <Icon size={19} strokeWidth={1.8} />
                </span>

                <h3 className="evolve-card-title">{title}</h3>

                <p className="evolve-card-body">{body}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .evolve-section {
          --evolve-wine: #730042;
          --evolve-pink: #fce7f1;

          width: 100%;
          overflow: hidden;
          background: var(--evolve-wine);
        }

        .evolve-section,
        .evolve-section * {
          box-sizing: border-box;
        }

        .evolve-section .evolve-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 56px 16px;
        }

        .evolve-section .evolve-header {
          width: 100%;
          max-width: 850px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .evolve-section .evolve-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          max-width: 100%;
          margin-bottom: 20px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #f8d8e9;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.04em;
        }

        .evolve-section .evolve-badge svg {
          flex-shrink: 0;
        }

        .evolve-section .evolve-heading {
          margin: 0 0 16px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.025em;
        }

        .evolve-section .evolve-description {
          margin: 0;
          color: #ebcada;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        .evolve-section .evolve-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
        }

        /* Separate wrapper keeps hover independent of entrance delay. */
        .evolve-section .evolve-card-reveal {
          display: flex;
          min-width: 0;
          opacity: 0;
          transform: translateY(36px) scale(0.96);
          transition:
            opacity 650ms ease,
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--reveal-delay, 0ms);
        }

        .evolve-section .evolve-card-reveal.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .evolve-section .evolve-card {
          width: 100%;
          min-width: 0;
          padding: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          transition:
            background-color 300ms ease,
            border-color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .evolve-section .evolve-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          margin-bottom: 16px;
          border-radius: 8px;
          background: #ffffff;
          color: var(--evolve-wine);
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease;
        }

        .evolve-section .evolve-card-title {
          margin: 0 0 8px;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          transition: color 300ms ease;
        }

        .evolve-section .evolve-card-body {
          margin: 0;
          color: #e5bfd5;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.65;
          overflow-wrap: break-word;
          transition: color 300ms ease;
        }

        /* Light pink hover */
        @media (hover: hover) {
          .evolve-section .evolve-card:hover {
            background: var(--evolve-pink);
            border-color: #f5bfd9;
            transform: translateY(-6px);
            box-shadow: 0 16px 32px rgba(40, 0, 23, 0.2);
          }

          .evolve-section .evolve-card:hover .evolve-icon {
            background: var(--evolve-wine);
            color: #ffffff;
            transform: scale(1.06);
          }

          .evolve-section .evolve-card:hover .evolve-card-title {
            color: var(--evolve-wine);
          }

          .evolve-section .evolve-card:hover .evolve-card-body {
            color: #68344f;
          }
        }

        @media (min-width: 481px) {
          .evolve-section .evolve-container {
            padding-right: 24px;
            padding-left: 24px;
          }
        }

        @media (min-width: 640px) {
          .evolve-section .evolve-container {
            padding-top: 64px;
            padding-bottom: 64px;
          }

          .evolve-section .evolve-header {
            margin-bottom: 48px;
          }

          .evolve-section .evolve-badge {
            margin-bottom: 24px;
            padding-right: 14px;
            padding-left: 14px;
            font-size: 10px;
          }

          .evolve-section .evolve-heading {
            margin-bottom: 20px;
            font-size: 30px;
          }

          .evolve-section .evolve-description {
            font-size: 14px;
          }

          .evolve-section .evolve-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .evolve-section .evolve-card {
            border-radius: 14px;
          }

          .evolve-section .evolve-icon {
            width: 44px;
            height: 44px;
            margin-bottom: 20px;
          }

          .evolve-section .evolve-card-title {
            font-size: 15px;
          }

          .evolve-section .evolve-card-body {
            font-size: 14px;
          }
        }

        @media (min-width: 768px) {
          .evolve-section .evolve-container {
            padding: 80px 40px;
          }

          .evolve-section .evolve-header {
            margin-bottom: 56px;
          }

          .evolve-section .evolve-badge {
            font-size: 12px;
          }

          .evolve-section .evolve-heading {
            font-size: 2.2rem;
          }

          .evolve-section .evolve-description {
            padding: 0 8px;
            font-size: 15px;
          }

          .evolve-section .evolve-card {
            padding: 24px;
          }
        }

        @media (min-width: 1024px) {
          .evolve-section .evolve-container {
            padding: 96px 100px;
          }

          .evolve-section .evolve-heading {
            font-size: 2.4rem;
          }

          .evolve-section .evolve-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .evolve-section .evolve-grid {
            gap: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .evolve-section .evolve-card-reveal,
          .evolve-section .evolve-card,
          .evolve-section .evolve-icon,
          .evolve-section .evolve-card-title,
          .evolve-section .evolve-card-body {
            transition: none;
          }

          .evolve-section .evolve-card-reveal {
            opacity: 1;
            transform: none;
          }

          .evolve-section .evolve-card:hover,
          .evolve-section .evolve-card:hover .evolve-icon {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}