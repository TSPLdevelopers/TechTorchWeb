import React, { useEffect, useRef } from "react";
import {
  Zap,
  AlignLeft,
  ArrowUp,
  ShieldCheck,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const WINE = "#7A1F3D";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";

const reasons = [
  {
    icon: Zap,
    tag: "01 · ALIGNMENT",
    title: "Business-Focused",
    body: "Solutions are shaped around your processes and goals.",
  },
  {
    icon: AlignLeft,
    tag: "02 · COHESION",
    title: "Integrated",
    body: "Connect applications, systems and information across the organization.",
  },
  {
    icon: ArrowUp,
    tag: "03 · ELASTICITY",
    title: "Scalable",
    body: "Adapt to changing business requirements and future growth.",
  },
  {
    icon: ShieldCheck,
    tag: "04 · PROTECTION",
    title: "Secure",
    body: "Maintain security across applications, infrastructure and information.",
  },
  {
    icon: RefreshCw,
    tag: "05 · CONTINUITY",
    title: "Supported",
    body: "Continue improving with ongoing technical support and maintenance.",
  },
];

export default function WhyTechTorchAndCtaSections() {
  const reasonsRef = useRef(null);

  useEffect(() => {
    const grid = reasonsRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll(".reason-reveal")
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    const setupAnimation = () => {
      observer?.disconnect();
      grid.classList.remove("reveal-enabled");

      cards.forEach((card) => {
        card.classList.remove("is-visible");
      });

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        return;
      }

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
              `${index * 180}ms`
            );

            entry.target.classList.add("is-visible");
          });

          // Reset cards when they leave the viewport.
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              entry.target.classList.remove("is-visible");
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
    <div className="why-techtorch-section">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .why-techtorch-section {
          width: 100%;
          color: ${INK};
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .why-techtorch-section *,
        .why-techtorch-section *::before,
        .why-techtorch-section *::after {
          box-sizing: border-box;
        }

        .why-section {
          width: 100%;
          background: #f7f7f8;
        }

        .why-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 100px;
          box-sizing: border-box;
        }

        .why-badge,
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 11px;
          border-radius: 999px;
          font-family: "Inter", sans-serif;
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .why-badge {
          margin-bottom: 15px;
          background: #fbeef1;
          color: ${WINE};
        }

        .why-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .why-heading {
          max-width: 700px;
          margin: 0 0 30px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 34px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.7px;
          color: ${INK};
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          width: 100%;
        }

        /* Separate reveal wrapper preserves the existing card hover. */
        .why-techtorch-section .reason-reveal {
          display: flex;
          min-width: 0;
        }

        .why-techtorch-section .reasons-grid.reveal-enabled
        > .reason-reveal {
          opacity: 0;
        }

        .why-techtorch-section .reasons-grid.reveal-enabled
        > .reason-reveal.is-visible {
          animation: why-card-reveal
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay, 0ms)
            both;
        }

        @keyframes why-card-reveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reason-card {
          width: 100%;
          min-width: 0;
          padding: 20px;
          border-radius: 13px;
          background: #ffffff;
          box-sizing: border-box;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .reason-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .reason-top {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 16px;
        }

        .reason-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 8px;
          background: #fbeef1;
          color: ${WINE};
        }

        .reason-tag {
          min-width: 0;
          font-family: "Inter", sans-serif;
          font-size: 8px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #8a8fa0;
        }

        .reason-title {
          margin: 0 0 7px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
          color: ${INK};
        }

        .reason-body {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.65;
          font-weight: 400;
          color: ${MUTED};
        }

        .cta-section {
          width: 100%;
          background: #ffffff;
          padding: 80px 100px;
          box-sizing: border-box;
        }

        .cta-container {
          position: relative;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 58px 64px;
          border-radius: 26px;
          overflow: hidden;
          box-sizing: border-box;
          background: linear-gradient(
            135deg,
            #1a0d15 0%,
            #3d1226 45%,
            #5c1730 100%
          );
        }

        .cta-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.2;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            115deg,
            rgba(255, 255, 255, 0.06) 0px,
            rgba(255, 255, 255, 0.06) 1px,
            transparent 1px,
            transparent 60px
          );
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
        }

        .cta-badge {
          margin-bottom: 20px;
          background: #ffffff;
          color: ${WINE};
        }

        .cta-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: ${WINE};
        }

        .cta-heading {
          max-width: 700px;
          margin: 0 0 18px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.18;
          font-weight: 700;
          letter-spacing: -0.8px;
          color: #ffffff;
        }

        .cta-description {
          max-width: 620px;
          margin: 0 0 28px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.72;
          font-weight: 400;
          color: #d9c3cf;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cta-primary-button,
        .cta-secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 20px;
          border-radius: 6px;
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .cta-primary-button {
          border: 1px solid #ffffff;
          background: #ffffff;
          color: ${WINE};
        }

        .cta-primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        .cta-secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: transparent;
          color: #ffffff;
        }

        .cta-secondary-button:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }

        @media (max-width: 1200px) {
          .why-container {
            padding: 72px 40px;
          }

          .cta-section {
            padding: 72px 40px;
          }

          .cta-container {
            padding: 52px 48px;
          }

          .cta-heading {
            font-size: 37px;
          }
        }

        @media (max-width: 1100px) {
          .why-container {
            padding: 64px 40px;
          }

          .reasons-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .cta-section {
            padding: 64px 40px;
          }

          .cta-container {
            padding: 46px 42px;
          }

          .cta-heading {
            font-size: 34px;
          }
        }

        @media (max-width: 900px) {
          .why-container {
            padding: 56px 40px;
          }

          .why-heading {
            font-size: 29px;
          }

          .reasons-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 15px;
          }

          .cta-section {
            padding: 56px 40px;
          }

          .cta-container {
            padding: 42px 36px;
          }

          .cta-heading {
            font-size: 32px;
          }

          .cta-description {
            font-size: 13px;
          }
        }

        @media (max-width: 700px) {
          .why-container {
            padding: 50px 24px;
          }

          .why-heading {
            font-size: 27px;
          }

          .reason-card {
            padding: 19px;
          }

          .cta-section {
            padding: 48px 24px;
          }

          .cta-container {
            padding: 36px 30px;
          }

          .cta-heading {
            font-size: 29px;
          }
        }

        @media (max-width: 600px) {
          .why-container {
            padding: 46px 24px;
          }

          .why-badge,
          .cta-badge {
            font-size: 8px;
            padding: 5px 10px;
          }

          .why-badge-dot,
          .cta-badge-dot {
            width: 5px;
            height: 5px;
          }

          .why-heading {
            margin-bottom: 24px;
            font-size: 25px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .reasons-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .reason-card {
            padding: 19px;
          }

          .reason-top {
            margin-bottom: 14px;
          }

          .reason-icon {
            width: 35px;
            height: 35px;
          }

          .reason-title {
            font-size: 13.5px;
          }

          .reason-body {
            font-size: 11.5px;
            line-height: 1.65;
          }

          .cta-section {
            padding: 42px 24px;
          }

          .cta-container {
            padding: 34px 24px;
            border-radius: 20px;
          }

          .cta-badge {
            margin-bottom: 17px;
          }

          .cta-heading {
            margin-bottom: 16px;
            font-size: 27px;
            line-height: 1.18;
            letter-spacing: -0.5px;
          }

          .cta-description {
            margin-bottom: 23px;
            font-size: 12px;
            line-height: 1.7;
          }

          .cta-buttons {
            width: 100%;
            gap: 9px;
          }

          .cta-primary-button,
          .cta-secondary-button {
            min-height: 40px;
            padding: 0 16px;
            font-size: 8.5px;
            border-radius: 6px;
          }

          .cta-primary-button svg {
            width: 13px;
            height: 13px;
          }
        }

        @media (max-width: 400px) {
          .why-container {
            padding: 40px 16px;
          }

          .why-heading {
            font-size: 23px;
            line-height: 1.2;
          }

          .reason-card {
            padding: 17px;
          }

          .reason-title {
            font-size: 13px;
          }

          .reason-body {
            font-size: 11px;
          }

          .cta-section {
            padding: 36px 16px;
          }

          .cta-container {
            padding: 30px 19px;
            border-radius: 17px;
          }

          .cta-heading {
            font-size: 24px;
          }

          .cta-description {
            font-size: 11.5px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .cta-primary-button,
          .cta-secondary-button {
            width: 100%;
            border-radius: 6px;
          }
        }

        @media (max-width: 340px) {
          .why-container {
            padding: 36px 16px;
          }

          .why-heading {
            font-size: 21px;
          }

          .reason-card {
            padding: 16px;
          }

          .cta-section {
            padding: 32px 16px;
          }

          .cta-container {
            padding: 27px 17px;
          }

          .cta-heading {
            font-size: 22px;
          }

          .cta-description {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-techtorch-section .reasons-grid.reveal-enabled
          > .reason-reveal,
          .why-techtorch-section .reasons-grid.reveal-enabled
          > .reason-reveal.is-visible {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .reason-card,
          .cta-primary-button,
          .cta-secondary-button {
            transition: none;
          }

          .reason-card:hover,
          .cta-primary-button:hover,
          .cta-secondary-button:hover {
            transform: none;
          }
        }
      `}</style>

      {/* WHY TECHTORCH */}
      <section className="why-section">
        <div className="why-container">
          <span className="why-badge">
            <span className="why-badge-dot" />
            WHY TECHTORCH
          </span>

          <h2 className="why-heading">
            Technology Aligned With Business Requirements
          </h2>

          <div ref={reasonsRef} className="reasons-grid">
            {reasons.map(({ icon: Icon, tag, title, body }, index) => (
              <div
                key={title}
                className="reason-reveal"
                data-index={index}
              >
                <div className="reason-card">
                  <div className="reason-top">
                    <span className="reason-icon">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>

                    <span className="reason-tag">{tag}</span>
                  </div>

                  <h3 className="reason-title">{title}</h3>
                  <p className="reason-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-pattern" aria-hidden="true" />

          <div className="cta-content">
            <span className="cta-badge">
              <span className="cta-badge-dot" />
              ENTERPRISE PARTNERSHIP
            </span>

            <h2 className="cta-heading">
              Build a Stronger Technology Foundation for Your Insurance
              Business
            </h2>

            <p className="cta-description">
              Modern insurance operations require technology that can
              support business processes, connect information and adapt to
              changing requirements.
            </p>

            <div className="cta-buttons">
              <button
                type="button"
                className="cta-primary-button"
              >
                TALK TO OUR EXPERTS
                <ArrowRight size={15} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                className="cta-secondary-button"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}