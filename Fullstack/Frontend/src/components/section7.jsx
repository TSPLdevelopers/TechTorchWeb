import React from "react";

// ---- Brand tokens -----------------------------------------------------
const colors = {
  cream: "#F9F8F2",
  ink: "#191013",
  inkSoft: "#4A3E43",
  brand: "#730042",
};

// ---- Small building blocks ---------------------------------------------

function Eyebrow({ children }) {
  return (
    <div
      className="flex items-center gap-2.5"
      style={{
        marginBottom: "clamp(16px, 2.4vw, 28px)",
        fontSize: "clamp(10px, 0.9vw, 12px)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        color: colors.ink,
      }}
    >
      {children}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CTAButton({ children }) {
  return (
    <button
      className="tx-cta inline-flex items-center justify-center gap-2.5 self-start rounded-lg whitespace-nowrap w-full sm:w-auto"
      style={{
        marginTop: "clamp(16px, 2vw, 24px)",
        border: `1.5px solid ${colors.brand}`,
        color: colors.brand,
        padding: "12px 22px",
        fontSize: "clamp(14px, 1vw, 16px)",
        fontWeight: 700,
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
    >
      {children}
      <ArrowIcon />
    </button>
  );
}

function CopyPanel() {
  return (
    <div
      className="flex w-full flex-col justify-center"
      style={{
        padding:
          "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px)",
      }}
    >
      <Eyebrow>The Next Chapter</Eyebrow>

      <h1
        style={{
          marginBottom: "clamp(12px, 1.6vw, 24px)",
          fontSize: "clamp(26px, 3.2vw, 42px)",
          lineHeight: 1.18,
          fontWeight: 700,
          color: colors.ink,
          letterSpacing: "-0.01em",
        }}
      >
        One suite.{" "}
        <span style={{ color: colors.brand }}>Every screen,</span> working
        together.
      </h1>

      <p
        style={{
          marginBottom: "clamp(12px, 1.4vw, 20px)",
          fontSize: "clamp(18px, 1.8vw, 30px)",
          fontWeight: 600,
          lineHeight: 1.25,
          color: colors.brand,
          letterSpacing: "-0.005em",
        }}
      >
        Watch TorchX in motion
      </p>

      <p
        style={{
          marginBottom: "clamp(20px, 3vw, 40px)",
          maxWidth: "28rem",
          fontSize: "clamp(14px, 1vw, 17px)",
          lineHeight: 1.65,
          fontWeight: 400,
          color: colors.inkSoft,
        }}
      >
        HR, finance, payroll, inventory, and customer data — moving through
        one connected experience. This is what your team opens every
        morning, not a slide about it.
      </p>

      <CTAButton>Watch the full walkthrough</CTAButton>
    </div>
  );
}

function ImagePanel() {
  return (
    <div className="tx-image-panel relative w-full overflow-hidden">
      <img
        src="/sec7.png"
        alt="TorchX"
        className="tx-image block w-full h-full"
      />
    </div>
  );
}

// ---- Main component ------------------------------------------------------

export default function TorchXVideoSection() {
  return (
    <div
      className="w-full font-sans overflow-hidden"
      style={{
        backgroundColor: "#fff",
        isolation: "isolate",
      }}
    >
      <style>{`
        /* ---------------------------------------------------------------
           CTA
        ---------------------------------------------------------------- */

        .tx-cta {
          transition:
            background-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s ease;
        }

        .tx-cta:hover {
          background-color: ${colors.brand} !important;
          color: ${colors.cream} !important;
          transform: translateY(-1px);
        }

        .tx-cta svg {
          transition: transform 0.25s ease;
        }

        .tx-cta:hover svg {
          transform: translateX(3px);
        }


        /* ---------------------------------------------------------------
           MAIN SECTION
        ---------------------------------------------------------------- */

        .tx-section {
          width: 100%;
          background: ${colors.cream};
        }


        /* ---------------------------------------------------------------
           IMAGE
        ---------------------------------------------------------------- */

        .tx-image-panel {
          width: 100%;
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${colors.cream};
        }

        .tx-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          object-position: center;
        }


        /* ---------------------------------------------------------------
           TABLET / MEDIUM
        ---------------------------------------------------------------- */

        @media (min-width: 640px) and (max-width: 1023px) {
          .tx-section {
            display: grid;
            grid-template-columns: 1fr;
          }

          .tx-image-panel {
            max-height: 500px;
          }

          .tx-image {
            max-height: 500px;
            object-fit: contain;
          }
        }


        /* ---------------------------------------------------------------
           LAPTOP
        ---------------------------------------------------------------- */

        @media (min-width: 1024px) {
          .tx-section {
            display: grid;
            grid-template-columns: 50% 50%;
            min-height: 560px;
          }

          .tx-image-panel {
            height: 560px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            overflow: hidden;
          }

          .tx-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: right center;
          }
        }


        /* ---------------------------------------------------------------
           LARGE DESKTOP
        ---------------------------------------------------------------- */

        @media (min-width: 1280px) {
          .tx-section {
            grid-template-columns: 50% 50%;
            min-height: 600px;
          }

          .tx-image-panel {
            height: 600px;
          }

          .tx-image {
            object-position: right center;
          }
        }


        /* ---------------------------------------------------------------
           EXTRA LARGE DESKTOP
        ---------------------------------------------------------------- */

        @media (min-width: 1536px) {
          .tx-section {
            grid-template-columns: 48% 52%;
            min-height: 620px;
          }

          .tx-image-panel {
            height: 620px;
          }
        }


        /* ---------------------------------------------------------------
           MOBILE
        ---------------------------------------------------------------- */

        @media (max-width: 639px) {
          .tx-section {
            display: flex;
            flex-direction: column;
          }

          .tx-image-panel {
            order: 1;
          }

          .tx-image {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        }
      `}</style>

      <section className="tx-section">
        {/* IMAGE */}
        <div className="order-1 lg:order-2 w-full">
          <ImagePanel />
        </div>

        {/* COPY */}
        <div className="order-2 lg:order-1 flex items-center w-full">
          <CopyPanel />
        </div>
      </section>
    </div>
  );
}