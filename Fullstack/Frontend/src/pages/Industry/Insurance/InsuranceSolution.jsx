import React, { useEffect, useRef } from "react";
import {
  Users,
  FileText,
  CreditCard,
  Briefcase,
  Code2,
  Cloud,
} from "lucide-react";

const WINE = "#730042";

const solutions = [
  {
    icon: Users,
    title: "Customer Relationship Management",
    body: "Manage customer information and interactions through a structured digital environment that supports consistent relationship management.",
    bullets: [
      "Customer Information",
      "Relationship Management",
      "Communication",
      "Service Management",
    ],
  },
  {
    icon: FileText,
    title: "Financial Management",
    body: "Improve control and visibility across financial activities with connected systems for managing information, transactions and reporting.",
    bullets: [
      "Financial Operations",
      "Transaction Management",
      "Financial Records",
      "Business Reporting",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Management",
    body: "Support payment-related operations with digital processes that provide better organization, visibility and control over transactions.",
    bullets: [
      "Payment Processing",
      "Transaction Management",
      "Payment Information",
      "Reporting",
    ],
  },
  {
    icon: Briefcase,
    title: "Enterprise Resource Planning",
    body: "Connect core business functions through an integrated technology environment that supports centralized information and coordinated operations.",
    bullets: [
      "Process Integration",
      "Centralized Data",
      "Workflow Management",
      "Business Analytics",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    body: "Develop and modernize digital applications according to your organization's specific business and technology requirements.",
    bullets: [
      "Custom Software",
      "Web Applications",
      "Enterprise Applications",
      "System Integration",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Cybersecurity",
    body: "Establish a reliable technology foundation with scalable infrastructure and security-focused solutions for your digital environment.",
    bullets: [
      "Cloud Infrastructure",
      "Cybersecurity",
      "Data Protection",
      "Technical Support",
    ],
  },
];

export default function InsuranceSolutionsGridSection() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll(".insurance-card-reveal")
    );

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let observer;

    function setupAnimation() {
      observer?.disconnect();

      if (
        motionPreference.matches ||
        !("IntersectionObserver" in window)
      ) {
        grid.classList.remove("reveal-enabled");
        return;
      }

      cards.forEach((card) => {
        card.classList.remove("is-visible");
      });

      grid.classList.add("reveal-enabled");

      observer = new IntersectionObserver(
        (entries) => {
          // Stagger cards entering together in their original order.
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
              `${index * 160}ms`
            );

            entry.target.classList.add("is-visible");
          });

          // Reset off-screen cards so their animation can replay.
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
    }

    setupAnimation();
    motionPreference.addEventListener("change", setupAnimation);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", setupAnimation);
      grid.classList.remove("reveal-enabled");
    };
  }, []);

  return (
    <section className="insurance-solutions-section">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

        .insurance-solutions-section {
          --wine: ${WINE};
          --light-pink: #fce7f1;
          --ink: #1b1b2a;
          --muted: #5b5a63;

          width: 100%;
          background: #f5f2ec;
          color: var(--ink);
          font-family: "Inter", sans-serif;
          overflow: hidden;
          box-sizing: border-box;
        }

        .insurance-solutions-section *,
        .insurance-solutions-section *::before,
        .insurance-solutions-section *::after {
          box-sizing: border-box;
        }

        .insurance-solutions-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 80px 100px;
        }

        .insurance-solutions-header {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 72px;
          align-items: start;
          margin-bottom: 56px;
        }

        .insurance-solutions-header-left,
        .insurance-solutions-header-right {
          min-width: 0;
          max-width: 620px;
        }

        .insurance-solutions-header-right {
          padding-top: 8px;
        }

        .insurance-solutions-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 18px;
          padding: 6px 11px;
          border-radius: 999px;
          background: var(--light-pink);
          color: var(--wine);
          font-size: 9px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .insurance-solutions-badge-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--wine);
        }

        .insurance-solutions-heading {
          max-width: 620px;
          margin: 0;
          color: var(--ink);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.16;
          font-weight: 700;
          letter-spacing: -0.8px;
        }

        .insurance-solutions-subheading {
          max-width: 620px;
          margin: 0;
          color: var(--muted);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.75;
          font-weight: 500;
        }

        .insurance-solutions-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        /* Separate entrance animation from card hover. */
        .insurance-card-reveal {
          display: flex;
          min-width: 0;
        }

        .insurance-solutions-grid.reveal-enabled
        .insurance-card-reveal {
          opacity: 0;
          transform: translateY(36px) scale(0.96);
        }

        .insurance-solutions-grid.reveal-enabled
        .insurance-card-reveal.is-visible {
          animation: insurance-card-open
            650ms
            cubic-bezier(0.22, 1, 0.36, 1)
            var(--reveal-delay, 0ms)
            both;
        }

        @keyframes insurance-card-open {
          from {
            opacity: 0;
            transform: translateY(36px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .insurance-solution-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
          padding: 24px;
          background: #ffffff;
          border: 1px solid rgba(27, 27, 42, 0.05);
          border-radius: 13px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          transition:
            background-color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease,
            border-color 300ms ease;
        }

        .insurance-solution-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 17px;
          border-radius: 9px;
          background: #fbeef5;
          color: var(--wine);
          transition:
            background-color 300ms ease,
            color 300ms ease,
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .insurance-solution-title {
          margin: 0 0 9px;
          color: var(--ink);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 700;
          transition: color 300ms ease;
        }

        .insurance-solution-body {
          margin: 0 0 17px;
          color: var(--muted);
          font-size: 11.5px;
          line-height: 1.7;
          font-weight: 400;
        }

        .insurance-solution-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin: auto 0 0;
          padding: 0;
          list-style: none;
        }

        .insurance-solution-list-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--ink);
          font-size: 11px;
          line-height: 1.5;
          font-weight: 500;
        }

        .insurance-solution-list-dot {
          width: 5px;
          height: 5px;
          flex-shrink: 0;
          margin-top: 5px;
          border-radius: 50%;
          background: var(--wine);
        }

        @media (hover: hover) {
          .insurance-solution-card:hover {
            background: var(--light-pink);
            transform: translateY(-6px);
            border-color: rgba(115, 0, 66, 0.2);
            box-shadow: 0 14px 30px rgba(115, 0, 66, 0.12);
          }

          .insurance-solution-card:hover .insurance-solution-icon {
            background: var(--wine);
            color: #ffffff;
            transform: scale(1.1);
            box-shadow:
              0 0 0 5px rgba(115, 0, 66, 0.07),
              0 8px 18px rgba(115, 0, 66, 0.2);
          }

          .insurance-solution-card:hover .insurance-solution-title {
            color: var(--wine);
          }
        }

        @media (max-width: 1200px) {
          .insurance-solutions-container {
            padding: 72px 40px;
          }

          .insurance-solutions-header {
            gap: 50px;
            margin-bottom: 50px;
          }

          .insurance-solutions-heading {
            font-size: 36px;
          }

          .insurance-solutions-subheading {
            font-size: 13.5px;
          }

          .insurance-solution-card {
            padding: 21px;
          }

          .insurance-solutions-grid {
            gap: 16px;
          }
        }

        @media (max-width: 900px) {
          .insurance-solutions-container {
            padding: 62px 40px;
          }

          .insurance-solutions-header {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 40px;
          }

          .insurance-solutions-header-left,
          .insurance-solutions-header-right {
            max-width: 760px;
          }

          .insurance-solutions-header-right {
            padding-top: 0;
          }

          .insurance-solutions-heading {
            font-size: 34px;
          }

          .insurance-solutions-subheading {
            font-size: 13px;
            line-height: 1.7;
          }

          .insurance-solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .insurance-solutions-container {
            padding: 50px 24px;
          }

          .insurance-solutions-header {
            gap: 16px;
            margin-bottom: 32px;
          }

          .insurance-solutions-badge {
            margin-bottom: 14px;
            padding: 5px 10px;
            font-size: 8px;
          }

          .insurance-solutions-badge-dot {
            width: 5px;
            height: 5px;
          }

          .insurance-solutions-heading {
            font-size: 29px;
            line-height: 1.18;
            letter-spacing: -0.5px;
          }

          .insurance-solutions-subheading {
            font-size: 12px;
            line-height: 1.7;
          }

          .insurance-solutions-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 13px;
          }

          .insurance-solution-card {
            padding: 19px;
            border-radius: 12px;
          }

          .insurance-solution-icon {
            width: 37px;
            height: 37px;
            margin-bottom: 14px;
          }

          .insurance-solution-title {
            font-size: 13px;
            margin-bottom: 7px;
          }

          .insurance-solution-body {
            font-size: 11px;
            line-height: 1.68;
            margin-bottom: 15px;
          }

          .insurance-solution-list {
            gap: 6px;
          }

          .insurance-solution-list-item {
            font-size: 10.5px;
          }
        }

        @media (max-width: 400px) {
          .insurance-solutions-container {
            padding: 42px 16px;
          }

          .insurance-solutions-heading {
            font-size: 26px;
          }

          .insurance-solutions-subheading {
            font-size: 11.5px;
            line-height: 1.68;
          }

          .insurance-solution-card {
            padding: 18px;
          }

          .insurance-solution-title {
            font-size: 12.5px;
          }

          .insurance-solution-body {
            font-size: 10.8px;
          }

          .insurance-solution-list-item {
            font-size: 10.2px;
          }
        }

        @media (max-width: 340px) {
          .insurance-solutions-container {
            padding: 36px 16px;
          }

          .insurance-solutions-heading {
            font-size: 24px;
          }

          .insurance-solutions-subheading {
            font-size: 11px;
          }

          .insurance-solution-card {
            padding: 16px;
          }

          .insurance-solution-body {
            font-size: 10.5px;
          }

          .insurance-solution-list-item {
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .insurance-solutions-grid.reveal-enabled
          .insurance-card-reveal,
          .insurance-solutions-grid.reveal-enabled
          .insurance-card-reveal.is-visible {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .insurance-solution-card,
          .insurance-solution-icon,
          .insurance-solution-title {
            transition: none;
          }

          .insurance-solution-card:hover,
          .insurance-solution-card:hover .insurance-solution-icon {
            transform: none;
          }
        }
      `}</style>

      <div className="insurance-solutions-container">
        <div className="insurance-solutions-header">
          <div className="insurance-solutions-header-left">
            <span className="insurance-solutions-badge">
              <span className="insurance-solutions-badge-dot" />
              INSURANCE SOLUTIONS
            </span>

            <h2 className="insurance-solutions-heading">
              Connected Technology for Insurance Businesses
            </h2>
          </div>

          <div className="insurance-solutions-header-right">
            <p className="insurance-solutions-subheading">
              Technology should support the way your organization operates.
              TechTorch helps bring essential business functions, information
              and digital systems together through solutions designed around
              specific operational requirements.
            </p>
          </div>
        </div>

        <div ref={gridRef} className="insurance-solutions-grid">
          {solutions.map(({ icon: Icon, title, body, bullets }, index) => (
            <div
              key={title}
              data-index={index}
              className="insurance-card-reveal"
            >
              <article className="insurance-solution-card">
                <span className="insurance-solution-icon">
                  <Icon size={18} strokeWidth={1.8} />
                </span>

                <h3 className="insurance-solution-title">{title}</h3>

                <p className="insurance-solution-body">{body}</p>

                <ul className="insurance-solution-list">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="insurance-solution-list-item"
                    >
                      <span className="insurance-solution-list-dot" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}