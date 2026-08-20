import React from "react";

// ---- Brand tokens -----------------------------------------------------
const colors = {
  cream: "#F9F8F2",
  ink: "#191013",
  inkSoft: "#4A3E43",
  brand: "#730042",
};

const VIDEO_SRC = "sec7.mp4";

// ---- Small building blocks ---------------------------------------------

function Eyebrow({ children }) {
  return (
    <div
      className="
        flex items-center gap-2.5
        mb-5 sm:mb-6 lg:mb-7
        text-[10px] sm:text-xs
        font-bold uppercase
      "
      style={{
        letterSpacing: "0.14em",
        color: colors.ink,
      }}
    >
      <span
        className="shrink-0"
        style={{
          width: 18,
          height: 2,
          backgroundColor: colors.brand,
        }}
      />
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
      className="
        tx-cta
        inline-flex
        items-center
        justify-center
        gap-2
        sm:gap-2.5
        self-start
        rounded-lg
        px-5
        sm:px-6
        lg:px-7
        py-3
        sm:py-3.5
        lg:py-4
        text-sm
        sm:text-base
        font-bold
        whitespace-nowrap
      "
      style={{
        border: `1.5px solid ${colors.brand}`,
        color: colors.brand,
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
      className="
        flex
        w-full
        max-w-2xl
        flex-col
        justify-center
        px-5
        py-12
        sm:px-8
        sm:py-14
        md:px-10
        md:py-16
        lg:px-16
        lg:py-20
        xl:px-20
      "
    >
      <Eyebrow>See it live</Eyebrow>

      <h1
        className="
          mb-4
          sm:mb-5
          lg:mb-6
          text-2xl
          sm:text-3xl
          md:text-3xl
          lg:text-4xl
          xl:text-[42px]
          font-extrabold
          leading-[1.15]
        "
        style={{
          color: colors.ink,
          letterSpacing: "-0.01em",
        }}
      >
        One suite.{" "}
        <span style={{ color: colors.brand }}>
          Every screen,
        </span>{" "}
        working together.
      </h1>

      <p
        className="
          mb-4
          sm:mb-5
          text-xl
          sm:text-2xl
          lg:text-3xl
          font-extrabold
          leading-tight
        "
        style={{
          color: colors.brand,
          letterSpacing: "-0.005em",
        }}
      >
        Watch TorchX in motion
      </p>

      <p
        className="
          mb-7
          sm:mb-8
          lg:mb-10
          max-w-md
          text-base
          sm:text-lg
          leading-relaxed
        "
        style={{
          color: colors.inkSoft,
        }}
      >
        HR, finance, payroll, inventory, and customer data — moving through
        one connected experience. This is what your team opens every
        morning, not a slide about it.
      </p>

      <CTAButton>
        Watch the full walkthrough
      </CTAButton>
    </div>
  );
}

function ImagePanel() {
  return (
    <div
      className="
        relative
        w-full
        h-[300px]
        sm:h-[380px]
        md:h-full
        min-h-[300px]
        md:min-h-[500px]
        lg:min-h-[550px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <img
        src="/sec7.png"
        alt="TorchX"
        className="
          w-full
          h-full
          object-contain
          object-center
        "
      />
    </div>
  );
}

// ---- Main component ------------------------------------------------------

export default function TorchXVideoSection() {
  return (
    <div
      className="w-full font-sans overflow-hidden"
      style={{ backgroundColor: "#fff" }}
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

        @media (max-width: 639px) {
          .tx-cta {
            width: 100%;
          }
        }
      `}</style>

      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          w-full
          overflow-hidden
        "
        style={{
          backgroundColor: colors.cream,
        }}
      >
        {/* LEFT CONTENT */}
        <CopyPanel />

        {/* RIGHT IMAGE */}
        <ImagePanel />
      </section>
    </div>
  );
}