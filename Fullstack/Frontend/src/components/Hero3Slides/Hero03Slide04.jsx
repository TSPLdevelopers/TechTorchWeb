import React, { useLayoutEffect, useRef, useState } from "react";
import {
  Search,
  ClipboardList,
  UserCog,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: "understand",
    icon: Search,
    title: "Understand",
    description:
      "We learn how your business works, understand your users and review the systems and processes already in place.",
  },
  {
    id: "define",
    icon: ClipboardList,
    title: "Define",
    description:
      "We translate business requirements into clear priorities, functionality and a practical technical direction.",
  },
  {
    id: "design",
    icon: UserCog,
    title: "Design",
    description:
      "We design user journeys, interfaces and workflows around the people who will use the solution.",
  },
  {
    id: "develop",
    icon: Code2,
    title: "Develop",
    description:
      "Our engineering team builds the solution with a focus on quality, reliability, performance and maintainability.",
  },
  {
    id: "validate",
    icon: CheckCircle2,
    title: "Validate",
    description:
      "We test the software against business requirements to make sure it works as intended and is ready for real users.",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch & Evolve",
    description:
      "Going live is only the beginning. We support improvements, enhancements and changes as your business continues to develop.",
  },
];

const MAROON = "#7a1338";

export default function StructuredApproachSection() {
  const containerRef = useRef(null);
  const iconRefs = useRef({});

  const [linePath, setLinePath] = useState("");
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const computePath = () => {
      const container = containerRef.current;

      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      setContainerSize({
        width: containerRect.width,
        height: containerRect.height,
      });

      const getPosition = (id) => {
        const element = iconRefs.current[id];

        if (!element) return null;

        const rect = element.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
          top: rect.top - containerRect.top,
          bottom: rect.bottom - containerRect.top,
        };
      };

      const understand = getPosition("understand");
      const develop = getPosition("develop");
      const validate = getPosition("validate");
      const launch = getPosition("launch");

      if (!understand || !develop || !validate || !launch) return;

      // Right edge
      const rightEdge = containerRect.width - 1;

      // Existing bottom line level
      const bottomLineY = develop.top - 28;

      /*
        Pattern:

        Understand  -----------------------------┐
                                                 │
                                                 │
        Develop      ----------------------------┘
           │
           │
           └──────────── Validate ──────────── Launch

        Bottom row ke tino icons ko same pattern mein connect karega.
      */

      const path = `
        M ${understand.x} ${understand.y}
        H ${rightEdge}
        V ${bottomLineY}
        H ${develop.x}
        V ${develop.y}
        H ${validate.x}
        H ${launch.x}
      `;

      setLinePath(path);
    };

    computePath();

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(computePath);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", computePath);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", computePath);
    };
  }, []);

  return (
    <section className="structured-approach-section">
      <div className="structured-container">
        <h1>
          A Structured Approach to <span>Software Development</span>
        </h1>

        <p className="intro-text">
          Successful software starts with a clear understanding of the problem.
        </p>

        <p className="intro-text intro-bottom">
          Our development approach brings business requirements, user needs and
          technology together at every stage.
        </p>

        <div ref={containerRef} className="structured-grid">
          {/* CONNECTING LINE */}

          {containerSize.width > 0 && linePath && (
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
              preserveAspectRatio="none"
              className="connector-svg"
            >
              <path
                d={linePath}
                fill="none"
                stroke={MAROON}
                strokeWidth="1"
                opacity="0.90"
              />
            </svg>
          )}

          {/* STEPS */}

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.id} className="step-card">
                <div
                  ref={(element) => {
                    iconRefs.current[step.id] = element;
                  }}
                  className="step-icon"
                >
                  <Icon
                    size={20}
                    color={MAROON}
                    strokeWidth={2}
                  />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .structured-approach-section {
          padding: 70px 40px;
          background-color: #ffffff;
          background-image:
            repeating-linear-gradient(
              -45deg,
              rgba(122, 19, 56, 0.06) 0px,
              rgba(122, 19, 56, 0.06) 1px,
              transparent 1px,
              transparent 50px
            );
          font-family: "Segoe UI", Arial, sans-serif;
          box-sizing: border-box;
          overflow: hidden;
        }

        .structured-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* HEADING */

        .structured-container > h1 {
          font-size: 28px;
          font-weight: 700;
          text-align: center;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .structured-container > h1 span {
          color: ${MAROON};
        }

        .intro-text {
          font-size: 15px;
          text-align: center;
          color: #333333;
          margin: 0 auto 6px auto;
          max-width: 700px;
          line-height: 1.6;
        }

        .intro-bottom {
          margin-bottom: 60px;
        }

        /* GRID */

        .structured-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          column-gap: 40px;
          row-gap: 70px;
        }

        /* CONNECTING SVG */

        .connector-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: visible;
        }

        /* CARD */

        .step-card {
          position: relative;
          z-index: 1;
          max-width: 340px;
        }

        /* ICON */

        .step-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid ${MAROON};
          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          position: relative;
          z-index: 2;
        }

        /* TITLE */

        .step-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 10px 0;
        }

        /* DESCRIPTION */

        .step-card p {
          font-size: 14px;
          line-height: 1.6;
          color: #555555;
          margin: 0;
        }

        /* TABLET */

        @media (max-width: 900px) {
          .structured-approach-section {
            padding: 60px 30px;
          }

          .structured-grid {
            column-gap: 30px;
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {
          .structured-approach-section {
            padding: 50px 25px;
          }

          .structured-grid {
            grid-template-columns: 1fr;
            row-gap: 45px;
          }

          .connector-svg {
            display: none;
          }

          .step-card {
            max-width: 100%;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {
          .structured-approach-section {
            padding: 45px 20px;
          }

          .structured-container > h1 {
            font-size: 24px;
            line-height: 1.3;
          }

          .intro-text {
            font-size: 14px;
          }

          .step-card h3 {
            font-size: 16px;
          }

          .step-card p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}