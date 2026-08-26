import React from "react";

const MAROON_BG = "#5c0e34";

export default function OnePlatformSection() {
  return (
    <section
      style={{
        width: "100%",
        background: MAROON_BG,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        padding: "24px 0 40px",
        overflow: "hidden",
      }}
    >
      {/* ================= CANVAS ================= */}
      <div
        style={{
          position: "relative",
          width: "853px",
          height: "431px",
          margin: "0 auto",
        }}
      >
        {/* ================= HEADING ================= */}
        <h2
          style={{
            position: "absolute",
            left: "-130px",
            top: "18px",
            width: "330px",
            fontSize: "27px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: "1.3",
            margin: 0,
          }}
        >
          One Platform for Your Everyday Business
        </h2>

        {/* ================= PARAGRAPH ================= */}
        <p
          style={{
            position: "absolute",
            left: "500px",
            top: "34px",
            width: "420px",
            fontSize: "14.5px",
            fontWeight: 600,
            color: "#ffffff",
            lineHeight: "1.55",
            margin: 0,
          }}
        >
          An ERP system should make it easier for different parts of your
          business to work together. We help connect the functions that
          matter most to your day-to-day operations.
        </p>

        {/* ================= CONNECTOR ================= */}
        <svg
          viewBox="0 0 853 431"
          style={{
            position: "absolute",
            inset: 0,
            width: "853px",
            height: "431px",
            pointerEvents: "none",
            zIndex: 1,
            overflow: "visible",
          }}
        >
          {/* Curved dotted line connecting both cards */}
          <path
            d="M 216,285
               C 310,220
                 490,220
                 603,235"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeDasharray="3 5"
            fill="none"
            opacity="0.9"
          />

          {/* Left connection dot */}
          <circle
            cx="216"
            cy="285"
            r="4"
            fill="#ffffff"
          />

          {/* Right connection dot */}
          <circle
            cx="603"
            cy="235"
            r="4"
            fill="#ffffff"
          />
        </svg>

        {/* ================= CARD 1 ================= */}
        <div
          style={{
            position: "absolute",
            left: "-90px",
            top: "205px",
            width: "306px",
            borderRadius: "10px",
            background: "#ffffff",
            padding: "24px 24px 26px",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: MAROON_BG,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
              color: "#ffffff",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            ₹
          </div>

          {/* Title */}
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#141414",
              margin: "0 0 10px",
            }}
          >
            Finance &amp; Accounting
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "13.5px",
              color: "#3a3a3a",
              lineHeight: "1.55",
              margin: 0,
            }}
          >
            Keep your financial information organised and get a clearer view
            of your business performance.
          </p>
        </div>

        {/* ================= CARD 2 ================= */}
        <div
          style={{
            position: "absolute",
            left: "603px",
            top: "137px",
            width: "303px",
            borderRadius: "10px",
            background: "#ffffff",
            padding: "24px 24px 26px",
            zIndex: 2,
            boxSizing: "border-box",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: MAROON_BG,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="22"
              height="22"
            >
              <path d="M3 10.5 12 3l9 7.5" />
              <path d="M5 9.5V21h14V9.5" />
              <rect x="9.5" y="13" width="5" height="8" />
            </svg>
          </div>

          {/* Title */}
          <p
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#141414",
              margin: "0 0 10px",
            }}
          >
            Inventory &amp; Supply Chain
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "13.5px",
              color: "#3a3a3a",
              lineHeight: "1.55",
              margin: 0,
            }}
          >
            Keep track of stock, purchasing and movement so your teams know
            what is available and what needs attention.
          </p>
        </div>
      </div>
    </section>
  );
}