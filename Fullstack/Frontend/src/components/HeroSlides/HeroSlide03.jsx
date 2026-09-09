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
    <section className="how-work-section">

      <div className="how-work-container">

        {/* ================= HEADER ================= */}

        <p className="how-work-label">
          HOW WE WORK
        </p>

        <h2 className="how-work-heading">
          From Business Challenge to{" "}
          <span>Practical Solutions</span>
        </h2>

        <p className="how-work-description">
          A clear, collaborative approach focused on delivering solutions that
          create real and lasting value.
        </p>


        {/* ================= PROCESS ================= */}

        <div className="process-wrapper">

          {/* ================= CONNECTING LINE ================= */}

          <svg
            className="process-line"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
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


          {/* ================= STEPS ================= */}

          <Step
            step={steps[0]}
            className="step-1"
          />

          <Step
            step={steps[1]}
            className="step-2"
          />

          <Step
            step={steps[2]}
            className="step-3"
          />

          <Step
            step={steps[3]}
            className="step-4"
          />

          <Step
            step={steps[4]}
            className="step-5"
          />

        </div>
      </div>


      {/* ================= RESPONSIVE CSS ================= */}

      <style>{`

        /* =================================================
           SECTION
        ================================================= */

        .how-work-section {
          width: 100%;
          background: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          overflow: hidden;
        }


        /* =================================================
           CONTAINER
        ================================================= */

        .how-work-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;

          padding: 56px 32px 70px;

          box-sizing: border-box;
        }


        /* =================================================
           HEADER
        ================================================= */

        .how-work-label {
          text-align: center;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 0.12em;

          color: #141414;

          margin: -15px 0 16px;
        }

        .how-work-heading {
          text-align: center;

          font-size: 30px;
          font-weight: 700;

          line-height: 1.25;

          color: #141414;

          margin: 0 0 16px;
        }

        .how-work-heading span {
          color: ${MAROON};
        }

        .how-work-description {
          text-align: center;

          font-size: 17px;
          font-weight: 400;

          color: #444;

          line-height: 1.5;

          margin: 0 auto 56px;

          max-width: 820px;
        }


        /* =================================================
           PROCESS WRAPPER
        ================================================= */

        .process-wrapper {
          position: relative;

          width: 100%;

          height: 520px;
        }


        /* =================================================
           CONNECTING LINE
        ================================================= */

        .process-line {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          pointer-events: none;

          z-index: 1;
        }


        /* =================================================
           STEP
        ================================================= */

        .process-step {
          position: absolute;

          transform: translate(-50%, -50%);

          width: 230px;

          z-index: 2;

          font-family: "Inter", sans-serif;
        }


        /* =================================================
           STEP POSITIONS
        ================================================= */

        .step-1 {
          left: 12%;
          top: 100px;
        }

        .step-2 {
          left: 50%;
          top: 100px;
        }

        .step-3 {
          left: 90%;
          top: 100px;
        }

        .step-4 {
          left: 11%;
          top: 400px;
        }

        .step-5 {
          left: 44%;
          top: 400px;
        }


        /* =================================================
           ICON
        ================================================= */

        .step-icon {
          width: 62px;
          height: 62px;

          border-radius: 50%;

          border: 1.5px solid ${MAROON};

          background: #ffffff;

          display: flex;

          align-items: center;
          justify-content: center;

          position: relative;

          z-index: 3;
        }


        /* =================================================
           TEXT
        ================================================= */

        .step-content {
          margin-top: 20px;
        }

        .step-number {
          font-size: 15px;
          font-weight: 600;

          color: #141414;

          margin: 0 0 4px;
        }

        .step-title {
          font-size: 18px;
          font-weight: 700;

          color: ${MAROON};

          margin: 0 0 10px;
        }

        .step-description {
          font-size: 14px;

          color: #3a3a3a;

          line-height: 1.55;

          margin: 0;

          max-width: 210px;
        }


        /* =================================================
           LARGE TABLET
        ================================================= */

        @media (max-width: 1100px) {

          .how-work-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .process-step {
            width: 210px;
          }

          .step-description {
            max-width: 195px;
            font-size: 13.5px;
          }

          .step-1 {
            left: 11%;
          }

          .step-2 {
            left: 50%;
          }

          .step-3 {
            left: 89%;
          }

          .step-4 {
            left: 12%;
          }

          .step-5 {
            left: 45%;
          }
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 850px) {

          .how-work-container {
            padding: 48px 22px 60px;
          }

          .how-work-heading {
            font-size: 28px;
          }

          .how-work-description {
            font-size: 16px;
            margin-bottom: 45px;
          }

          .process-wrapper {
            height: 560px;
          }

          .process-step {
            width: 190px;
          }

          .step-icon {
            width: 58px;
            height: 58px;
          }

          .step-title {
            font-size: 17px;
          }

          .step-description {
            font-size: 13px;
            max-width: 180px;
          }

          .step-1 {
            left: 12%;
            top: 100px;
          }

          .step-2 {
            left: 50%;
            top: 100px;
          }

          .step-3 {
            left: 88%;
            top: 100px;
          }

          .step-4 {
            left: 20%;
            top: 420px;
          }

          .step-5 {
            left: 55%;
            top: 420px;
          }
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {

          .how-work-container {
            padding: 38px 18px 50px;
          }

          .how-work-label {
            font-size: 11px;
            margin: 0 0 12px;
          }

          .how-work-heading {
            font-size: 24px;
            line-height: 1.25;

            margin-bottom: 12px;
          }

          .how-work-description {
            font-size: 14px;

            line-height: 1.55;

            max-width: 340px;

            margin-bottom: 35px;
          }


          /* Vertical process */

          .process-wrapper {
            height: auto;

            display: flex;

            flex-direction: column;

            gap: 38px;

            padding: 5px 0 5px 8px;
          }


          /* Hide desktop zig-zag line */

          .process-line {
            display: none;
          }


          /* Reset positions */

          .process-step {
            position: relative;

            left: auto !important;
            top: auto !important;

            transform: none;

            width: 100%;

            max-width: 420px;

            display: grid;

            grid-template-columns: 62px 1fr;

            column-gap: 18px;

            align-items: start;
          }


          .step-icon {
            width: 58px;
            height: 58px;

            grid-row: span 2;
          }


          .step-content {
            margin-top: 0;

            padding-top: 1px;
          }


          .step-number {
            font-size: 13px;

            margin-bottom: 3px;
          }


          .step-title {
            font-size: 18px;

            margin-bottom: 7px;
          }


          .step-description {
            font-size: 13.5px;

            line-height: 1.55;

            max-width: 100%;
          }
        }


        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 400px) {

          .how-work-container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .how-work-heading {
            font-size: 22px;
          }

          .how-work-description {
            font-size: 13.5px;
          }

          .process-wrapper {
            gap: 32px;
            padding-left: 4px;
          }

          .process-step {
            grid-template-columns: 54px 1fr;
            column-gap: 15px;
          }

          .step-icon {
            width: 52px;
            height: 52px;
          }

          .step-icon svg {
            width: 21px;
            height: 21px;
          }

          .step-number {
            font-size: 12px;
          }

          .step-title {
            font-size: 17px;
          }

          .step-description {
            font-size: 13px;
          }
        }

      `}</style>
    </section>
  );
}


/* =================================================
   STEP COMPONENT
================================================= */

function Step({ step, className }) {
  return (
    <div className={`process-step ${className}`}>

      {/* ICON */}

      <div className="step-icon">
        {step.icon}
      </div>


      {/* TEXT */}

      <div className="step-content">

        <p className="step-number">
          {step.num}
        </p>

        <p className="step-title">
          {step.title}
        </p>

        <p className="step-description">
          {step.desc}
        </p>

      </div>

    </div>
  );
}