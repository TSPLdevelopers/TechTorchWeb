import React from "react";

const MAROON = "#8f1046";
const LINE_COLOR = "#d3a9bc";

const icons = {
  search: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),

  clipboard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  ),

  code: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  send: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  ),

  trend: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={MAROON}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We start by understanding your business, your challenges and what you want to achieve.",
    icon: icons.search,
  },
  {
    num: "02",
    title: "Define",
    desc: "We identify the right priorities and shape an approach around your specific needs.",
    icon: icons.clipboard,
  },
  {
    num: "03",
    title: "Build",
    desc: "We bring together the right technology and expertise to develop a solution that works.",
    icon: icons.code,
  },
  {
    num: "04",
    title: "Deliver",
    desc: "We focus on a smooth implementation with minimal disruption to your business.",
    icon: icons.send,
  },
  {
    num: "05",
    title: "Evolve",
    desc: "We continue to improve and scale the solution as your business needs change.",
    icon: icons.trend,
  },
];

export default function Slide13() {
  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
        fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
      }}
    >
      <div
        className="how-work-container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px 70px",
        }}
      >
        {/* ================= HEADER ================= */}

        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#141414",
            marginBottom: "16px",
          }}
        >
          HOW WE WORK
        </p>

        <h2
          className="how-work-title"
          style={{
            textAlign: "center",
            fontSize: "33px",
            fontWeight: 700,
            color: "#141414",
            margin: "0 0 16px",
            lineHeight: "1.25",
          }}
        >
          From Business Challenge to{" "}
          <span style={{ color: MAROON }}>Practical Solutions</span>
        </h2>

        <p
          className="how-work-subtitle"
          style={{
            textAlign: "center",
            fontSize: "17px",
            color: "#444",
            fontWeight: 400,
            margin: "0 auto 60px",
            maxWidth: "620px",
            lineHeight: "1.6",
          }}
        >
          A clear, collaborative approach focused on delivering solutions
          that create real and lasting value.
        </p>

        {/* ================= DESKTOP TIMELINE ================= */}

        <div
          className="how-work-desktop"
          style={{
            position: "relative",
            width: "100%",
            height: "520px",
          }}
        >
          {/* Top horizontal line */}
          <div
            style={{
              position: "absolute",
              left: "10%",
              top: "33%",
              width: "84%",
              height: "1px",
              background: LINE_COLOR,
            }}
          />

          {/* Right vertical line */}
          <div
            style={{
              position: "absolute",
              right: "6%",
              top: "33%",
              width: "1px",
              height: "45%",
              background: LINE_COLOR,
            }}
          />

          {/* Bottom horizontal line */}
          <div
            style={{
              position: "absolute",
              left: "10%",
              top: "78%",
              width: "84%",
              height: "1px",
              background: LINE_COLOR,
            }}
          />

          {/* Step 01 */}
          <Step
            step={steps[0]}
            left="10%"
            top="33%"
          />

          {/* Step 02 */}
          <Step
            step={steps[1]}
            left="42%"
            top="33%"
          />

          {/* Step 03 */}
          <Step
            step={steps[2]}
            left="74%"
            top="33%"
          />

          {/* Step 04 */}
          <Step
            step={steps[3]}
            left="10%"
            top="78%"
          />

          {/* Step 05 */}
          <Step
            step={steps[4]}
            left="42%"
            top="78%"
          />
        </div>

        {/* ================= MOBILE ================= */}

        <div className="how-work-mobile">
          {steps.map((step) => (
            <div
              key={step.num}
              className="mobile-step"
            >
              <div className="mobile-icon">
                {step.icon}
              </div>

              <div>
                <p className="step-number">
                  {step.num}
                </p>

                <p className="step-title">
                  {step.title}
                </p>

                <p className="step-desc">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RESPONSIVE CSS ================= */}

      <style>
        {`
          .how-work-mobile {
            display: none;
          }

          .mobile-step {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            padding: 24px 0;
            border-bottom: 1px solid ${LINE_COLOR};
          }

          .mobile-icon {
            width: 58px;
            height: 58px;
            min-width: 58px;
            border-radius: 50%;
            border: 1.5px solid ${MAROON};
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .step-number {
            font-size: 14px;
            font-weight: 600;
            color: #141414;
            margin: 0 0 4px;
          }

          .step-title {
            font-size: 18px;
            font-weight: 700;
            color: ${MAROON};
            margin: 0 0 8px;
          }

          .step-desc {
            font-size: 14px;
            color: #3a3a3a;
            line-height: 1.55;
            margin: 0;
          }

          @media (max-width: 768px) {

            .how-work-container {
              padding: 45px 20px 55px !important;
            }

            .how-work-title {
              font-size: 27px !important;
            }

            .how-work-subtitle {
              font-size: 15px !important;
              margin-bottom: 35px !important;
            }

            .how-work-desktop {
              display: none !important;
            }

            .how-work-mobile {
              display: block;
            }
          }

          @media (max-width: 480px) {

            .how-work-title {
              font-size: 24px !important;
            }

            .how-work-subtitle {
              font-size: 14px !important;
            }

            .mobile-step {
              gap: 15px;
            }

            .mobile-icon {
              width: 52px;
              height: 52px;
              min-width: 52px;
            }

            .step-title {
              font-size: 17px;
            }

            .step-desc {
              font-size: 13px;
            }
          }
        `}
      </style>
    </section>
  );
}


// =================================================
// STEP COMPONENT
// =================================================

function Step({ step, left, top }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        transform: "translate(-50%, -50%)",
        width: "230px",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          border: `1.5px solid ${MAROON}`,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {step.icon}
      </div>

      {/* Content */}
      <div style={{ marginTop: "20px" }}>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#141414",
            margin: "0 0 4px",
          }}
        >
          {step.num}
        </p>

        <p
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: MAROON,
            margin: "0 0 10px",
          }}
        >
          {step.title}
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#3a3a3a",
            lineHeight: "1.55",
            margin: 0,
            maxWidth: "210px",
          }}
        >
          {step.desc}
        </p>
      </div>
    </div>
  );
}