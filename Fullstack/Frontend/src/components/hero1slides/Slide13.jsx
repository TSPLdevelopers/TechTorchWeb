import React from "react";

const MAROON = "#8f1046";
const LINE_COLOR = "#8f1046";

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

export default function HowWeWork() {
  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "56px 24px 64px",
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
            marginTop: "-20px",
          }}
        >
          HOW WE WORK
        </p>

        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: 700,
            color: "#141414",
            margin: "0 0 16px",
            lineHeight: "1.25",
          }}
        >
          From Business Challenge to{" "}
          <span style={{ color: MAROON }}>
            Practical Solutions
          </span>
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "17px",
            color: "#444",
            fontWeight: 400,
            margin: "0 auto 56px",
            maxWidth: "820px",
          }}
        >
          A clear, collaborative approach focused on delivering solutions that
          create real and lasting value.
        </p>

        {/* ================= PROCESS ================= */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "520px",
          }}
        >

          {/* ================= CONNECTING LINE ================= */}

          <svg
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
            }}
          >
            <path
              d="
                M 45 35
                H 440
                H 857
                H 1000
                V 260
                H 10
                V 325
                H 370
              "
              fill="none"
              stroke={LINE_COLOR}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* ================= STEP 01 ================= */}

          <Step
            step={steps[0]}
            style={{
              left: "12%",
              top: "100px",
            }}
          />

          {/* ================= STEP 02 ================= */}

          <Step
            step={steps[1]}
            style={{
              left: "50%",
              top: "100px",
            }}
          />

          {/* ================= STEP 03 ================= */}

          <Step
            step={steps[2]}
            style={{
              left: "90%",
              top: "100px",
            }}
          />

          {/* ================= STEP 04 ================= */}

          <Step
            step={steps[3]}
            style={{
              left: "11%",
              top: "400px",
            }}
          />

          {/* ================= STEP 05 ================= */}

          <Step
            step={steps[4]}
            style={{
              left: "44%",
              top: "400px",
            }}
          />

        </div>
      </div>
    </section>
  );
}


/* ================================================= */
/* STEP COMPONENT */
/* ================================================= */

function Step({ step, style }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        width: "230px",
        zIndex: 2,
        fontFamily: "inter, sans-serif",
        ...style,
      }}
    >

      {/* ================= ICON ================= */}

      <div
        style={{
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          border: `1.5px solid ${MAROON}`,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 3,
        }}
      >
        {step.icon}
      </div>

      {/* ================= TEXT ================= */}

      <div
        style={{
          marginTop: "20px",
        }}
      >

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