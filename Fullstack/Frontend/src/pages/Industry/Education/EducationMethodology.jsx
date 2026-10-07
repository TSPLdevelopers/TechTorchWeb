import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  Headphones,
  Search,
  Compass,
  Rocket,
  TrendingUp,
} from "lucide-react";

const WINE = "#730042";

const steps = [
  {
    num: "01",
    stage: "DISCOVERY",
    icon: Headphones,
    title: "Listen",
    body: "Engage campus leaders, educators, and administrators to uncover nuanced daily pain points and operational aspirations.",
    bullets: ["Stakeholder Discovery", "Pain-Point Mapping"],
  },
  {
    num: "02",
    stage: "DEEP-DIVE",
    icon: Search,
    title: "Understand",
    body: "Audit existing databases, legacy spreadsheets, and siloed software to map true departmental dependencies and compliance needs.",
    bullets: ["Workflow Analysis", "Data Interoperability"],
  },
  {
    num: "03",
    stage: "ARCHITECTURE",
    icon: Compass,
    title: "Design",
    body: "Architect unified data models and intuitive user journeys configured specifically around your academic calendar and governance.",
    bullets: ["Tailored Architecture", "User Journeys"],
  },
  {
    num: "04",
    stage: "DEPLOYMENT",
    icon: Rocket,
    title: "Implement",
    body: "Execute controlled phased migrations with parallel testing and high-touch staff enablement for immediate trust and comfort.",
    bullets: ["Phased Migration", "Staff Training"],
  },
  {
    num: "05",
    stage: "MOMENTUM",
    icon: TrendingUp,
    title: "Evolve",
    body: "Continuous performance reviews, automated updates, and capability expansions as campus demographics and pedagogy expand.",
    bullets: ["AI Optimization", "Long-Term Scaling"],
  },
];

const institutions = [
  {
    label: "Schools",
    body: "Support academics, attendance, communication and everyday classroom operations.",
    image: "/Education2.png",
    alt: "Students working at a school library",
  },
  {
    label: "Colleges",
    body: "Manage academic and administrative requirements, registration, and courses with ease.",
    image: "/college.png",
    alt: "College students studying together",
  },
  {
    label: "Universities",
    body: "Connect multiple departments, research functions and complex academic structures.",
    image: "/rrmain.png",
    alt: "University laboratory and lecture environment",
  },
  {
    label: "Multi-Campus Institutions",
    body: "Bring centralized visibility and synchronized coordination across all regional locations.",
    image: "/campus.png",
    alt: "Students walking through a university campus",
  },
];

// Reset when the section leaves the viewport; replay on re-entry.
function useRepeatReveal() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    function setupObserver() {
      observer?.disconnect();

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        setIsVisible(true);
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0,
        }
      );

      observer.observe(section);
    }

    setupObserver();
    motionPreference.addEventListener("change", setupObserver);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", setupObserver);
    };
  }, []);

  return { sectionRef, isVisible };
}

function Eyebrow({ children }) {
  return (
    <div className="methodology-eyebrow">
      <ChevronRight size={12} strokeWidth={3} />
      <span>{children}</span>
    </div>
  );
}

export default function MethodologyAndInstitutionsSections() {
  const methodology = useRepeatReveal();
  const environments = useRepeatReveal();

  return (
    <div className="methodology-page">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .methodology-page {
          --wine: ${WINE};
          --wine-light: #f4e6ee;
          --ink: #1b1b2a;
          --muted: #5b5a63;

          width: 100%;
          overflow: hidden;
          font-family: "Inter", sans-serif;
          color: var(--ink);
        }

        .methodology-page,
        .methodology-page * {
          box-sizing: border-box;
        }

        .methodology-page .methodology-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 100px;
        }

        .methodology-page .methodology-eyebrow {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;
          color: var(--wine);
          font-size: 11px;
          line-height: 1.5;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .methodology-page .methodology-eyebrow svg {
          flex-shrink: 0;
        }

        .methodology-page .methodology-heading,
        .methodology-page .institutions-heading {
          margin: 0;
          max-width: 760px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.7px;
          color: var(--ink);
        }

        .methodology-page .methodology-subheading {
          margin: 16px 0 0;
          max-width: 760px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          color: var(--muted);
        }

        .methodology-page .methodology-section,
        .methodology-page .institutions-section {
          width: 100%;
          padding: 80px 0;
        }

        .methodology-page .methodology-section {
          background: #f4f1ec;
        }

        .methodology-page .institutions-section {
          background: #ffffff;
        }

        .methodology-page .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
          margin-top: 40px;
        }

        .methodology-page .institutions-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        /* Entrance wrapper: resets immediately when section exits. */
        .methodology-page .card-reveal {
          display: flex;
          min-width: 0;
          opacity: 0;
          transform: translateY(35px) scale(0.96);
        }

        .methodology-page .reveal-active .card-reveal {
          animation: methodology-card-open
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--card-delay, 0ms)
            both;
        }

        @keyframes methodology-card-open {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .methodology-page .step-card {
          width: 100%;
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 20px;
          border: 1px solid transparent;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition:
            background-color 300ms ease,
            border-color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .methodology-page .step-top {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .methodology-page .step-number {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--wine);
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
        }

        .methodology-page .step-stage {
          padding: 5px 8px;
          border-radius: 999px;
          background: var(--wine-light);
          color: var(--wine);
          font-size: 9px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .methodology-page .step-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 8px;
          background: var(--wine-light);
          color: var(--wine);
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .methodology-page .step-title,
        .methodology-page .institution-title {
          margin: 0 0 8px;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          color: var(--ink);
          transition: color 300ms ease;
        }

        .methodology-page .step-body {
          margin: 0 0 16px;
          font-size: 12px;
          line-height: 1.7;
          color: var(--muted);
        }

        .methodology-page .step-bullets {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin: auto 0 0;
          padding: 0;
          list-style: none;
        }

        .methodology-page .step-bullet {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 11px;
          line-height: 1.5;
          color: var(--muted);
        }

        .methodology-page .step-bullet-dot {
          width: 4px;
          height: 4px;
          flex-shrink: 0;
          margin-top: 6px;
          border-radius: 50%;
          background: var(--wine);
        }

        .methodology-page .institution-card {
          width: 100%;
          min-width: 0;
          overflow: hidden;
          border-radius: 12px;
          background: #ffffff;
          transition:
            background-color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .methodology-page .institution-image-wrapper {
          width: 100%;
          height: 180px;
          margin-bottom: 16px;
          overflow: hidden;
          border-radius: 12px;
          background: #e9e4e0;
        }

        .methodology-page .institution-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 400ms ease;
        }

        .methodology-page .institution-content {
          padding: 0 12px 16px;
        }

        .methodology-page .institution-body {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          color: var(--muted);
        }

        @media (hover: hover) {
          .methodology-page .step-card:hover {
            background: var(--wine-light);
            border-color: rgba(115, 0, 66, 0.2);
            transform: translateY(-6px);
            box-shadow: 0 14px 30px rgba(115, 0, 66, 0.12);
          }

          .methodology-page .step-card:hover .step-icon {
            background: var(--wine);
            color: #ffffff;
            transform: translateY(-2px) scale(1.12);
            box-shadow:
              0 0 0 5px rgba(115, 0, 66, 0.08),
              0 8px 18px rgba(115, 0, 66, 0.22);
          }

          .methodology-page .step-card:hover .step-title,
          .methodology-page .institution-card:hover .institution-title {
            color: var(--wine);
          }

          .methodology-page .institution-card:hover {
            background: var(--wine-light);
            transform: translateY(-5px);
            box-shadow: 0 14px 30px rgba(115, 0, 66, 0.1);
          }

          .methodology-page .institution-card:hover .institution-image {
            transform: scale(1.05);
          }
        }

        @media (min-width: 1440px) {
          .methodology-page .steps-grid {
            gap: 20px;
          }

          .methodology-page .step-card {
            padding: 22px;
          }

          .methodology-page .methodology-heading,
          .methodology-page .institutions-heading {
            font-size: 42px;
          }
        }

        @media (min-width: 768px) and (max-width: 1100px) {
          .methodology-page .methodology-container {
            padding: 0 40px;
          }

          .methodology-page .methodology-section,
          .methodology-page .institutions-section {
            padding: 64px 0;
          }

          .methodology-page .methodology-heading,
          .methodology-page .institutions-heading {
            font-size: 36px;
          }

          .methodology-page .methodology-subheading {
            font-size: 15px;
          }

          .methodology-page .steps-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .methodology-page .institutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .methodology-page .institution-image-wrapper {
            height: 190px;
          }
        }

        @media (max-width: 767px) {
          .methodology-page .methodology-container {
            padding: 0 24px;
          }

          .methodology-page .methodology-section,
          .methodology-page .institutions-section {
            padding: 60px 0;
          }

          .methodology-page .methodology-heading,
          .methodology-page .institutions-heading {
            font-size: 32px;
            line-height: 1.18;
            letter-spacing: -0.5px;
          }

          .methodology-page .methodology-subheading {
            margin-top: 14px;
            font-size: 14px;
            line-height: 1.7;
          }

          .methodology-page .steps-grid,
          .methodology-page .institutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-top: 32px;
          }

          .methodology-page .steps-grid {
            gap: 14px;
          }

          .methodology-page .step-card {
            padding: 18px;
          }

          .methodology-page .step-top {
            margin-bottom: 16px;
          }

          .methodology-page .step-title,
          .methodology-page .institution-title {
            font-size: 14px;
          }

          .methodology-page .step-body,
          .methodology-page .institution-body {
            font-size: 12px;
            line-height: 1.65;
          }

          .methodology-page .institution-image-wrapper {
            height: 170px;
          }
        }

        @media (max-width: 480px) {
          .methodology-page .methodology-container {
            padding: 0 16px;
          }

          .methodology-page .methodology-section,
          .methodology-page .institutions-section {
            padding: 48px 0;
          }

          .methodology-page .methodology-eyebrow {
            margin-bottom: 12px;
            font-size: 10px;
            letter-spacing: 0.045em;
          }

          .methodology-page .methodology-heading,
          .methodology-page .institutions-heading {
            font-size: 27px;
            line-height: 1.2;
          }

          .methodology-page .methodology-subheading {
            margin-top: 12px;
            font-size: 13px;
          }

          .methodology-page .steps-grid,
          .methodology-page .institutions-grid {
            grid-template-columns: minmax(0, 1fr);
            margin-top: 28px;
          }

          .methodology-page .steps-grid {
            gap: 12px;
          }

          .methodology-page .step-card {
            padding: 17px;
          }

          .methodology-page .institutions-grid {
            gap: 28px;
          }

          .methodology-page .institution-image-wrapper {
            height: 210px;
            margin-bottom: 14px;
          }

          .methodology-page .institution-body {
            font-size: 12.5px;
            line-height: 1.7;
          }
        }

        @media (max-width: 360px) {
          .methodology-page .methodology-heading,
          .methodology-page .institutions-heading {
            font-size: 25px;
          }

          .methodology-page .institution-image-wrapper {
            height: 190px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .methodology-page .card-reveal,
          .methodology-page .reveal-active .card-reveal {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .methodology-page .step-card,
          .methodology-page .step-icon,
          .methodology-page .step-title,
          .methodology-page .institution-card,
          .methodology-page .institution-title,
          .methodology-page .institution-image {
            transition: none;
          }

          .methodology-page .step-card:hover,
          .methodology-page .step-card:hover .step-icon,
          .methodology-page .institution-card:hover,
          .methodology-page .institution-card:hover .institution-image {
            transform: none;
          }
        }
      `}</style>

      {/* SECTION 1: METHODOLOGY */}
      <section
        ref={methodology.sectionRef}
        className={`methodology-section ${
          methodology.isVisible ? "reveal-active" : ""
        }`}
      >
        <div className="methodology-container">
          <Eyebrow>
            OUR METHODOLOGY &amp; DELIVERY FRAMEWORK
          </Eyebrow>

          <h2 className="methodology-heading">
            We start with your institution, not a software checklist.
          </h2>

          <p className="methodology-subheading">
            A predictable, collaborative methodology engineered to modernize
            institutional processes with zero disruption to daily academic
            life.
          </p>

          <div className="steps-grid">
            {steps.map(
              ({ num, stage, icon: Icon, title, body, bullets }, index) => (
                <div
                  key={num}
                  className="card-reveal"
                  style={{ "--card-delay": `${index * 180}ms` }}
                >
                  <article className="step-card">
                    <div className="step-top">
                      <span className="step-number">{num}</span>
                      <span className="step-stage">{stage}</span>
                    </div>

                    <span className="step-icon">
                      <Icon size={18} strokeWidth={1.8} />
                    </span>

                    <h3 className="step-title">{title}</h3>
                    <p className="step-body">{body}</p>

                    <ul className="step-bullets">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="step-bullet">
                          <span className="step-bullet-dot" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONS */}
      <section
        ref={environments.sectionRef}
        className={`institutions-section ${
          environments.isVisible ? "reveal-active" : ""
        }`}
      >
        <div className="methodology-container">
          <Eyebrow>
            SOLUTIONS FOR DIFFERENT EDUCATIONAL ENVIRONMENTS
          </Eyebrow>

          <h2 className="institutions-heading">
            Different institutions. Different priorities.
          </h2>

          <div className="institutions-grid">
            {institutions.map(({ label, body, image, alt }, index) => (
              <div
                key={label}
                className="card-reveal"
                style={{ "--card-delay": `${index * 180}ms` }}
              >
                <article className="institution-card">
                  <div className="institution-image-wrapper">
                    <img
                      src={image}
                      alt={alt}
                      className="institution-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="institution-content">
                    <h3 className="institution-title">{label}</h3>
                    <p className="institution-body">{body}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}