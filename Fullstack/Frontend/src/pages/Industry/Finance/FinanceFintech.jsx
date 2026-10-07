import React, { useEffect, useRef } from "react";
import {
  Link2,
  RefreshCw,
  Briefcase,
  LifeBuoy,
  MoreHorizontal,
} from "lucide-react";

const WINE = "#730042";
const INK = "#1B1B2A";
const MUTED = "#5b5a63";
const LIGHT_PINK = "#fce7f1";

const capabilities = [
  {
    icon: Link2,
    title: "Integrate",
    body: "Connect applications and systems for better information flow.",
  },
  {
    icon: RefreshCw,
    title: "Modernize",
    body: "Upgrade and improve existing technology environments.",
  },
  {
    icon: Briefcase,
    title: "Build",
    body: "Develop custom solutions for specific business needs.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    body: "Ensure systems stay reliable with ongoing maintenance and assistance.",
  },
];

const steps = [
  {
    num: "01",
    title: "Understand",
    body: "Analyze requirements and existing technology.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Define solution and implementation approach.",
  },
  {
    num: "03",
    title: "Develop",
    body: "Build and integrate the required technology.",
  },
  {
    num: "04",
    title: "Deploy",
    body: "Test and implement with focus on usability.",
  },
  {
    num: "05",
    title: "Support",
    body: "Provide ongoing maintenance and technical support.",
  },
];

function useRepeatReveal() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = Array.from(
      grid.querySelectorAll(".fintech-card-observer")
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    function setupAnimation() {
      observer?.disconnect();
      grid.classList.remove("fintech-reveal-enabled");

      items.forEach((item) => {
        item.classList.remove("is-visible");
      });

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        return;
      }

      grid.classList.add("fintech-reveal-enabled");

      observer = new IntersectionObserver(
        (entries) => {
          const entering = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) =>
                Number(a.target.dataset.index) -
                Number(b.target.dataset.index)
            );

          entering.forEach((entry, index) => {
            entry.target.style.setProperty(
              "--reveal-delay",
              `${index * 180}ms`
            );

            entry.target.classList.add("is-visible");
          });

          // Reset off-screen cards so they animate again on return.
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0 }
      );

      items.forEach((item) => observer.observe(item));
    }

    setupAnimation();
    motionPreference.addEventListener("change", setupAnimation);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", setupAnimation);
      grid.classList.remove("fintech-reveal-enabled");
    };
  }, []);

  return gridRef;
}

export default function FintechEngineeringAndApproachSections() {
  const capabilitiesRef = useRepeatReveal();
  const stepsRef = useRepeatReveal();

  return (
    <div className="fintech-sections">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .fintech-sections {
          --fintech-wine: ${WINE};
          --fintech-pink: ${LIGHT_PINK};

          width: 100%;
          overflow: hidden;
          color: ${INK};
          font-family: "Inter", Arial, sans-serif;
          box-sizing: border-box;
        }

        .fintech-sections *,
        .fintech-sections *::before,
        .fintech-sections *::after {
          box-sizing: border-box;
        }

        .fintech-sections .fintech-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding-left: 100px;
          padding-right: 100px;
        }

        .fintech-sections .fintech-engineering {
          width: 100%;
          background: var(--fintech-wine);
        }

        .fintech-sections .fintech-engineering-container {
          padding-top: 78px;
          padding-bottom: 78px;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 60px;
          align-items: start;
        }

        .fintech-sections .fintech-engineering-container > *,
        .fintech-sections .approach-header > * {
          min-width: 0;
        }

        .fintech-sections .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          max-width: 100%;
          padding: 6px 12px;
          margin-bottom: 20px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          line-height: 1.4;
        }

        .fintech-sections .engineering-badge {
          background: rgba(255, 255, 255, 0.12);
          color: #f3d9e2;
        }

        .fintech-sections .badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .fintech-sections .engineering-dot {
          background: #ffffff;
        }

        .fintech-sections .engineering-heading {
          margin: 0 0 24px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 38px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
          max-width: 760px;
        }

        .fintech-sections .engineering-copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 780px;
        }

        .fintech-sections .engineering-description {
          margin: 0;
          color: #e9c9db;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
        }

        .fintech-sections .engineering-description.highlight {
          color: #f3e2e8;
          font-weight: 600;
        }

        .fintech-sections .capabilities-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        /* Stationary wrapper for reliable viewport detection */
        .fintech-sections .fintech-card-observer {
          display: flex;
          min-width: 0;
        }

        .fintech-sections .fintech-card-reveal {
          display: flex;
          width: 100%;
          min-width: 0;
        }

        .fintech-sections .fintech-reveal-enabled
        > .fintech-card-observer
        > .fintech-card-reveal {
          opacity: 0;
        }

        .fintech-sections .fintech-reveal-enabled
        > .fintech-card-observer.is-visible
        > .fintech-card-reveal {
          animation: fintech-card-enter
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay, 0ms)
            both;
        }

        @keyframes fintech-card-enter {
          from {
            opacity: 0;
            transform: translateY(32px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fintech-sections .capability-card {
          width: 100%;
          min-width: 0;
          padding: 22px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fintech-sections .capability-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          transition:
            background-color 0.3s ease,
            transform 0.3s ease;
        }

        .fintech-sections .capability-title {
          margin: 0 0 6px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .fintech-sections .capability-body {
          margin: 0;
          color: #e6bfd5;
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .fintech-sections .approach-section {
          width: 100%;
          margin: 0;
          background: #f4f1ec;
        }

        .fintech-sections .approach-container {
          padding-top: 78px;
          padding-bottom: 78px;
        }

        .fintech-sections .approach-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 60px;
          align-items: start;
          margin-bottom: 40px;
        }

        .fintech-sections .approach-badge {
          background: #fbeef1;
          color: var(--fintech-wine);
        }

        .fintech-sections .approach-dot {
          background: var(--fintech-wine);
        }

        .fintech-sections .approach-heading {
          margin: 0;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 34px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .fintech-sections .approach-heading span {
          color: var(--fintech-wine);
        }

        .fintech-sections .approach-description {
          margin: 0;
          padding-top: 4px;
          color: ${MUTED};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 15px;
          line-height: 1.75;
          font-weight: 500;
          max-width: 700px;
        }

        .fintech-sections .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }

        .fintech-sections .step-card {
          width: 100%;
          min-width: 0;
          padding: 22px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .fintech-sections .step-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 16px;
        }

        .fintech-sections .step-number {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--fintech-wine);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
        }

        .fintech-sections .step-title {
          margin: 0 0 6px;
          color: ${INK};
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .fintech-sections .step-body {
          margin: 0;
          color: ${MUTED};
          font-size: 12px;
          line-height: 1.7;
          font-weight: 400;
        }

        @media (hover: hover) {
          .fintech-sections .capability-card:hover {
            transform: translateY(-4px);
            background: var(--fintech-pink);
            border-color: #f2bfd8;
            box-shadow: 0 12px 28px rgba(40, 0, 24, 0.2);
          }

          .fintech-sections .capability-card:hover .capability-icon {
            background: var(--fintech-wine);
            transform: scale(1.08);
          }

          .fintech-sections .capability-card:hover .capability-title {
            color: var(--fintech-wine);
          }

          .fintech-sections .capability-card:hover .capability-body {
            color: #68344f;
          }

          .fintech-sections .step-card:hover {
            transform: translateY(-4px);
            background: var(--fintech-pink);
            box-shadow: 0 10px 25px rgba(115, 0, 66, 0.1);
          }

          .fintech-sections .step-card:hover .step-title {
            color: var(--fintech-wine);
          }
        }

        @media (max-width: 1200px) {
          .fintech-sections .fintech-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .fintech-sections .fintech-engineering-container,
          .fintech-sections .approach-header {
            gap: 42px;
          }

          .fintech-sections .engineering-heading {
            font-size: 34px;
          }

          .fintech-sections .approach-heading {
            font-size: 31px;
          }

          .fintech-sections .steps-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .fintech-sections .fintech-engineering-container {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-top: 62px;
            padding-bottom: 62px;
          }

          .fintech-sections .engineering-heading {
            max-width: 760px;
            font-size: 32px;
          }

          .fintech-sections .engineering-copy {
            max-width: 800px;
          }

          .fintech-sections .approach-container {
            padding-top: 62px;
            padding-bottom: 62px;
          }

          .fintech-sections .approach-header {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 34px;
          }

          .fintech-sections .approach-description {
            padding-top: 0;
            max-width: 800px;
          }

          .fintech-sections .approach-heading {
            font-size: 30px;
          }

          .fintech-sections .steps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .fintech-sections .fintech-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .fintech-sections .fintech-engineering-container {
            padding-top: 52px;
            padding-bottom: 52px;
            gap: 30px;
          }

          .fintech-sections .section-badge {
            margin-bottom: 16px;
            font-size: 10px;
          }

          .fintech-sections .engineering-heading {
            margin-bottom: 20px;
            font-size: 26px;
            line-height: 1.3;
          }

          .fintech-sections .engineering-copy {
            gap: 14px;
          }

          .fintech-sections .engineering-description {
            font-size: 13px;
            line-height: 1.7;
          }

          .fintech-sections .capabilities-grid,
          .fintech-sections .steps-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .fintech-sections .capability-card,
          .fintech-sections .step-card {
            padding: 19px;
          }

          .fintech-sections .capability-body {
            line-height: 1.65;
          }

          .fintech-sections .approach-container {
            padding-top: 52px;
            padding-bottom: 52px;
          }

          .fintech-sections .approach-header {
            gap: 16px;
            margin-bottom: 28px;
          }

          .fintech-sections .approach-heading {
            font-size: 25px;
            line-height: 1.35;
          }

          .fintech-sections .approach-description {
            font-size: 13px;
            line-height: 1.7;
          }
        }

        @media (max-width: 480px) {
          .fintech-sections .fintech-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .fintech-sections .fintech-engineering-container,
          .fintech-sections .approach-container {
            padding-top: 44px;
            padding-bottom: 44px;
          }

          .fintech-sections .engineering-heading {
            font-size: 23px;
          }

          .fintech-sections .engineering-description,
          .fintech-sections .approach-description {
            font-size: 12px;
          }

          .fintech-sections .approach-heading {
            font-size: 22px;
          }

          .fintech-sections .capability-card,
          .fintech-sections .step-card {
            padding: 17px;
          }

          .fintech-sections .capability-icon {
            width: 35px;
            height: 35px;
            margin-bottom: 14px;
          }

          .fintech-sections .step-number {
            width: 30px;
            height: 30px;
            font-size: 10px;
          }
        }

        @media (max-width: 340px) {
          .fintech-sections .fintech-engineering-container,
          .fintech-sections .approach-container {
            padding-top: 38px;
            padding-bottom: 38px;
          }

          .fintech-sections .engineering-heading {
            font-size: 21px;
          }

          .fintech-sections .approach-heading {
            font-size: 20px;
          }

          .fintech-sections .engineering-description,
          .fintech-sections .approach-description {
            font-size: 11.5px;
          }

          .fintech-sections .capability-body,
          .fintech-sections .step-body {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fintech-sections .fintech-reveal-enabled
          > .fintech-card-observer
          > .fintech-card-reveal,
          .fintech-sections .fintech-reveal-enabled
          > .fintech-card-observer.is-visible
          > .fintech-card-reveal {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .fintech-sections .capability-card,
          .fintech-sections .capability-icon,
          .fintech-sections .capability-title,
          .fintech-sections .capability-body,
          .fintech-sections .step-card,
          .fintech-sections .step-title {
            transition: none;
          }

          .fintech-sections .capability-card:hover,
          .fintech-sections .capability-card:hover .capability-icon,
          .fintech-sections .step-card:hover {
            transform: none;
          }
        }
      `}</style>

      {/* FINTECH ENGINEERING */}
      <section className="fintech-engineering">
        <div className="fintech-container fintech-engineering-container">
          <div>
            <span className="section-badge engineering-badge">
              <span className="badge-dot engineering-dot" />
              FINTECH ENGINEERING &amp; TRANSFORMATION
            </span>

            <h2 className="engineering-heading">
              Modernize the Technology Behind Your Financial Operations
            </h2>

            <div className="engineering-copy">
              <p className="engineering-description">
                Legacy financial applications and disjointed spreadsheets
                increase compliance liabilities and slow execution.
                TechTorch delivers purpose-built software engineering to
                refactor, integrate, and modernize critical transaction
                platforms.
              </p>

              <p className="engineering-description">
                Our senior engineering teams develop bespoke client portals,
                secure API integrations, high-performance microservices,
                automated payment gateways, and compliant cloud
                infrastructures tailored to stringent financial standards.
              </p>

              <p className="engineering-description highlight">
                We engineer modular systems designed for scale—ensuring your
                tech stack evolves as your transaction volume and reporting
                mandates expand.
              </p>
            </div>
          </div>

          <div ref={capabilitiesRef} className="capabilities-grid">
            {capabilities.map(({ icon: Icon, title, body }, index) => (
              <div
                key={title}
                className="fintech-card-observer"
                data-index={index}
              >
                <div className="fintech-card-reveal">
                  <article className="capability-card">
                    <span className="capability-icon">
                      <Icon size={16} strokeWidth={1.8} />
                    </span>

                    <h3 className="capability-title">{title}</h3>
                    <p className="capability-body">{body}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="approach-section">
        <div className="fintech-container approach-container">
          <div className="approach-header">
            <div>
              <span className="section-badge approach-badge">
                <span className="badge-dot approach-dot" />
                OUR APPROACH
              </span>

              <h2 className="approach-heading">
                From Business Requirements
                <br />
                to Practical <span>Technology</span>
              </h2>
            </div>

            <p className="approach-description">
              Every technology initiative begins with an understanding of
              the business requirement. Our approach focuses on creating
              practical solutions that align technology with operational
              objectives.
            </p>
          </div>

          <div ref={stepsRef} className="steps-grid">
            {steps.map(({ num, title, body }, index) => (
              <div
                key={num}
                className="fintech-card-observer"
                data-index={index}
              >
                <div className="fintech-card-reveal">
                  <article className="step-card">
                    <div className="step-top">
                      <span className="step-number">{num}</span>

                      <MoreHorizontal
                        size={14}
                        style={{ color: "#c9c4bc" }}
                      />
                    </div>

                    <h3 className="step-title">{title}</h3>
                    <p className="step-body">{body}</p>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}