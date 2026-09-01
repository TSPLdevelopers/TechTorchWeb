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
        marginBottom: "28px",
        fontSize: "15px",
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
        marginTop: "10px",
        border: `1.5px solid ${colors.brand}`,
        color: colors.brand,
        padding: "6px 14px",
        fontSize: "18px",
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
        paddingTop: "65px",
        paddingBottom: "65px",
        paddingLeft: "70px",
        paddingRight: "70px",
      }}
    >
      <Eyebrow>The Next Chapter</Eyebrow>

      <h1
        className="tx-heading"
        style={{
          marginBottom: "24px",
          fontSize: "28px",
          lineHeight: 1.18,
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 600,
          color: colors.ink,
          letterSpacing: "-0.01em",
        }}
      >
        We had an{" "}
        <span style={{ color: colors.brand }}>idea.</span> Then we{" "}
        <span style={{ color: colors.brand }}>built it.</span>
      </h1>

      <p
        className="tx-suite"
        style={{
          marginBottom: "20px",
          
          fontSize: "30px",
          fontFamily: "Plus Jakarta Sans",
          fontWeight: 600,
          lineHeight: 1.25,
          color: colors.brand,
        }}
      >
        TorchX Suite
      </p>

      <p
        className="tx-intro"
        style={{
          marginBottom: "40px",
          fontSize: "21px",
          fontFamily: "Plus Jakarta Sans",
          maxWidth: "28rem",
          lineHeight: 1.5,
          fontWeight: 500,
          color: "#1e1e1e",
        }}
      >
        One connected platform for the way your business works.
      </p>

      <p
        className="tx-description"
        style={{
          marginBottom: "16px",
           marginTop: "-10px",
          fontSize: "17px",
          fontFamily: "Inter",
          maxWidth: "28rem",
          lineHeight: 1.65,
          fontWeight: 400,
          color: "#1e1e1e",
        }}
      >
        TorchX Suite brings HR, finance, payroll, inventory, and customer
        operations together in one place — helping teams work with less
        complexity, better visibility, and more confidence.
      </p>

      <CTAButton>Explore TorchX Suite</CTAButton>
    </div>
  );
}

// ---- Image --------------------------------------------------------------

function ImagePanel() {
  return (
    <div className="tx-image-panel relative w-full h-full flex items-center justify-end overflow-hidden">
      <img
        src="/sec7.png"
        alt="TorchX"
        className="tx-image block"
      />
    </div>
  );
}

// ---- Main component ------------------------------------------------------

export default function TorchXVideoSection() {
  return (
    <div
      className="w-full font-sans"
      style={{
        backgroundColor: "#fff",
        isolation: "isolate",
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
           MAIN SECTION
        ===================================================== */

        .tx-section {
          width: 100%;
          display: grid;
          grid-template-columns: 45% 55%;
          align-items: stretch;
          background: ${colors.cream};
          overflow: hidden;
        }

        .tx-copy-wrapper {
          width: 100%;
          min-width: 0;
          display: flex;
          align-items: center;
        }

        .tx-image-wrapper {
          width: 100%;
          min-width: 0;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
        }

        .tx-image-panel {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          overflow: hidden;
        }

        /*
          Image remains fully visible.
          object-fit: contain prevents vertical cropping.
        */

        .tx-image {
          display: block;
          width: 120%;
          height: 100%;
          object-fit: contain;
          object-position: center right;
          max-width: none;
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

          .tx-copy-wrapper {
            order: 1;
            width: 100%;
            height: auto;
          }

          .tx-image-wrapper {
            order: 2;
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .tx-copy {
            width: 100%;
            max-width: none;
            padding: 40px 20px 35px !important;
          }

          .tx-heading {
            font-size: 26px !important;
            line-height: 1.25 !important;
            margin-bottom: 18px !important;
          }

          .tx-suite {
            font-size: 25px !important;
            margin-bottom: 14px !important;
          }

          .tx-intro {
            font-size: 18px !important;
            line-height: 1.5 !important;
            margin-bottom: 22px !important;
            max-width: 100% !important;
          }

          .tx-description {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 18px !important;
            max-width: 100% !important;
          }

          .tx-cta {
            width: 100%;
            font-size: 15px !important;
            padding: 11px 18px !important;
          }

          .tx-image-panel {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .tx-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: contain;
            object-position: center center;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) and (max-width: 1023px) {
          .tx-section {
            height: 450px;
            grid-template-columns: 46% 54%;
            align-items: stretch;
          }

          .tx-copy-wrapper {
            height: 450px;
          }

          .tx-image-wrapper {
            height: 450px;
          }

          .tx-image-panel {
            width: 100%;
            height: 450px;
          }

          .tx-copy {
            padding-left: 35px !important;
            padding-right: 30px !important;
            padding-top: 45px !important;
            padding-bottom: 45px !important;
          }

          .tx-heading {
            font-size: 28px !important;
          }

          .tx-suite {
            font-size: 27px !important;
          }

          .tx-intro {
            font-size: 20px !important;
          }

          .tx-description {
            font-size: 17px !important;
          }

          .tx-image {
            width: 120%;
            height: 100%;
            max-width: none;
            object-fit: contain;
            object-position: center right;
          }
        }

        /* =====================================================
           DESKTOP
        ===================================================== */

        @media (min-width: 1024px) and (max-width: 1279px) {
          .tx-section {
            height: 460px;
            grid-template-columns: 44% 56%;
            align-items: stretch;
          }

          .tx-copy-wrapper {
            height: 460px;
          }

          .tx-image-wrapper {
            height: 460px;
          }

          .tx-image-panel {
            width: 100%;
            height: 460px;
          }

          .tx-copy {
            padding-left: 50px !important;
            padding-right: 35px !important;
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }

          .tx-heading {
            font-size: 30px !important;
          }

          .tx-suite {
            font-size: 28px !important;
          }

          .tx-intro {
            font-size: 21px !important;
          }

          .tx-description {
            font-size: 17px !important;
          }

          .tx-image {
            width: 125%;
            height: 100%;
            max-width: none;
            object-fit: contain;
            object-position: center right;
          }
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1280px) {
          .tx-section {
            height: 510px;
            grid-template-columns: 43% 57%;
            align-items: stretch;
          }

          .tx-copy-wrapper {
            height: 510px;
          }

          .tx-image-wrapper {
            height: 510px;
          }

          .tx-image-panel {
            width: 100%;
            height: 510px;
          }

          .tx-copy {
            padding-left: 65px !important;
            padding-right: 45px !important;
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }

          .tx-image {
            width: 125%;
            height: 100%;
            max-width: none;
            object-fit: contain;
            object-position: center right;
          }
        }

        /* =====================================================
           EXTRA LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1600px) {
          .tx-section {
            height: 490px;
            grid-template-columns: 42% 58%;
          }

          .tx-copy {
            padding-left: 75px !important;
            padding-right: 55px !important;
          }

          .tx-image {
            width: 130%;
            height: 100%;
            max-width: none;
            object-fit: contain;
            object-position: center right;
          }
        }
      `}</style>

      <section className="tx-section">
        {/* ================= COPY ================= */}

        <div className="tx-copy-wrapper">
          <CopyPanel />
        </div>

        {/* ================= IMAGE ================= */}

        <div className="tx-image-wrapper">
          <ImagePanel />
        </div>
      </section>
    </div>
  );
}