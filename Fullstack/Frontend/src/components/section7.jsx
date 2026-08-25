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
        marginTop: "clamp(16px, 2vw, 0px)",
        border: `1.5px solid ${colors.brand}`,
        color: colors.brand,
        padding: "clamp(12px, 1.4vw, 12px) clamp(20px, 2.2vw, 22px)",
        fontSize: "clamp(14px, 1vw, 16px)",
        fontWeight: 700,
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
      className="flex w-full max-w-2xl flex-col justify-center tx-copy"
      style={{
        padding: "clamp(40px, 6vw, 80px) clamp(20px, 4vw, 80px)",
        transform: "translateY(-50px)",
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
    transform: "translateY(10px)",
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
    transform: "translateY(10px)",
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
    transform: "translate(-6px, 20px)",
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

// ---- Image --------------------------------------------------------------

function ImagePanel() {
  return (
    <div className="relative w-[85%] h-full overflow-hidden flex items-center justify-center md:justify-end">
      <img
        src="/sec7.png"
        alt="TorchX"
        className="tx-image block h-auto md:h-full object-contain md:object-fill"
      />
    </div>
  );
}

// ---- Main component ------------------------------------------------------

export default function TorchXVideoSection() {
  return (
    <div
  className="w-full overflow-hidden"
  style={{
    backgroundColor: "#fff",
    isolation: "isolate",
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  }}
>
      <style>{`
        .tx-cta {
          transition: all 0.25s ease;
        }

        .tx-cta:hover {
          background-color: ${colors.brand};
          color: ${colors.cream} !important;
          transform: translateY(-1px);
        }

        .tx-cta svg {
          transition: transform 0.25s ease;
        }

        .tx-cta:hover svg {
          transform: translateX(3px);
        }

        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 767px) {
          .tx-section {
            display: flex;
            flex-direction: column;
            height: auto;
          }

          /* CONTENT FIRST */
          .tx-copy-wrapper {
            order: 1;
          }

          /* IMAGE AFTER CONTENT */
          .tx-image-wrapper {
            order: 2;
          }

          .tx-copy {
            transform: none !important;
            padding: 40px 20px 35px;
          }

          .tx-image-wrapper {
            width: 100%;
            height: auto;
          }

          .tx-image {
            width: 100%;
            height: auto;
            object-fit: contain;
          }
        }

        /* =====================================================
           TABLET
           ===================================================== */

        @media (min-width: 768px) {
          .tx-section {
            height: 500px;
          }

          .tx-image {
            width: 100%;
          }
        }

        /* =====================================================
           DESKTOP
           ===================================================== */

        @media (min-width: 1024px) {
          .tx-section {
            height: 520px;
          }

          .tx-image {
            width: 110%;
          }

          .tx-copy {
            transform: translateX(40px);
          }
        }

        /* =====================================================
           LARGE DESKTOP
           ===================================================== */

        @media (min-width: 1280px) {
          .tx-section {
            height: 550px;
          }

          .tx-image {
            width: 88%;
          }

          .tx-copy {
            transform: translateX(60px);
          }
        }
      `}</style>

      <section
        className="tx-section grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden"
        style={{
          backgroundColor: colors.cream,
        }}
      >
        {/* ================= IMAGE ================= */}
        <div className="tx-image-wrapper order-1 md:order-2 h-full min-h-0 flex justify-end">
          <ImagePanel />
        </div>

        {/* ================= COPY ================= */}
        <div className="tx-copy-wrapper order-2 md:order-1 flex items-center">
          <CopyPanel />
        </div>
      </section>
    </div>
  );
}