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

      const getCenter = (id) => {
        const element = iconRefs.current[id];

        if (!element) return null;

        const rect = element.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      };

      const understand = getCenter("understand");
      const develop = getCenter("develop");

      if (!understand || !develop) return;

      /*
        EXACT SCREENSHOT STRUCTURE

        Understand ------------------------------┐
                                                 │
                                                 │
        Develop ---------------------------------┘
      */

      // Screenshot ki right side wali vertical line
      const rightEdge = containerRect.width - 1;

      const path = `
        M ${understand.x} ${understand.y}
        H ${rightEdge}
        V ${develop.y}
        H ${develop.x}
      `;

      setLinePath(path);
    };

    const observer = new ResizeObserver(() => {
      computePath();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    computePath();

    window.addEventListener("resize", computePath);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", computePath);
    };
  }, []);

  return (
    <section
      style={{
        padding: "70px 40px",
        background: "#ffffff",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* ================= HEADING ================= */}

        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            textAlign: "center",
            color: "#1a1a1a",
            margin: "0 0 12px 0",
          }}
        >
          A Structured Approach to{" "}
          <span style={{ color: MAROON }}>
            Software Development
          </span>
        </h1>

        <p
          style={{
            fontSize: "15px",
            textAlign: "center",
            color: "#333333",
            margin: "0 auto 6px auto",
            maxWidth: "700px",
          }}
        >
          Successful software starts with a clear understanding of the
          problem.
        </p>

        <p
          style={{
            fontSize: "15px",
            textAlign: "center",
            color: "#333333",
            margin: "0 auto 60px auto",
            maxWidth: "700px",
            lineHeight: 1.6,
          }}
        >
          Our development approach brings business requirements, user needs
          and technology together at every stage.
        </p>

        {/* ================= GRID ================= */}

        <div
          ref={containerRef}
          className="structured-grid"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            columnGap: "40px",
            rowGap: "70px",
          }}
        >
          {/* ================= 3 CONNECTED LINES ================= */}

          {containerSize.width > 0 && linePath && (
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}
              preserveAspectRatio="none"
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 0,
                overflow: "visible",
              }}
            >
              <path
                d={linePath}
                fill="none"
                stroke={MAROON}
                strokeWidth="1"
                opacity="0.45"
              />
            </svg>
          )}

          {/* ================= STEPS ================= */}

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                style={{
                  position: "relative",
                  zIndex: 1,
                  maxWidth: "340px",
                }}
              >
                {/* ICON */}

                <div
                  ref={(element) => {
                    iconRefs.current[step.id] = element;
                  }}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: `1px solid ${MAROON}`,
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                  }}
                >
                  <Icon
                    size={20}
                    color={MAROON}
                    strokeWidth={2}
                  />
                </div>

                {/* TITLE */}

                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 10px 0",
                  }}
                >
                  {step.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#555555",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= RESPONSIVE ================= */}

      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 50px 25px !important;
          }

          .structured-grid {
            grid-template-columns: 1fr !important;
            row-gap: 45px !important;
          }

          .structured-grid svg {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 45px 20px !important;
          }

          section h1 {
            font-size: 24px !important;
            line-height: 1.3 !important;
          }
        }
      `}</style>
    </section>
  );
}