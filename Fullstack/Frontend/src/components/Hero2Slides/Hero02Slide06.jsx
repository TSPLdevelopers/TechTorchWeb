import React from "react";

const MAROON = "#7a1140";

const icons = {
  automate: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),

  understand: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M9 7h6M9 11l2 2 4-4" />
    </svg>
  ),

  improve: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="15 6 21 6 21 12" />
    </svg>
  ),

  support: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const cards = [
  {
    icon: icons.automate,
    title: "Automate",
    desc: "Reduce repetitive tasks and give your teams more time to focus on important work.",
  },
  {
    icon: icons.understand,
    title: "Understand",
    desc: "Use your business information to see what is working and where there is room to improve.",
  },
  {
    icon: icons.improve,
    title: "Improve",
    desc: "Find ways to make everyday processes faster and more efficient.",
  },
  {
    icon: icons.support,
    title: "Support",
    desc: "Give your teams access to the right information when they need it.",
  },
];

export default function ErpIntelligence() {
  return (
    <section
      style={{
        width: "100%",
        background: "#f6f3ec",

        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 48px)",

        fontFamily: "'Plus Jakarta Sans', sans-serif",

        // Reduced section height
        padding: "38px 0 48px",

        overflow: "hidden",
      }}
    >
      {/* ================= CONTAINER ================= */}

      <div
        className="erp-intelligence-container"
        style={{
          width: "100%",
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "0 32px",
          boxSizing: "border-box",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* ================= HEADER ================= */}

        <p
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#141414",
            letterSpacing: "0.02em",

            // Slightly higher
            margin: "-8px 14px 12px",
          }}
        >
          ERP &amp; INTELLIGENCE
        </p>

        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "1.15",
            color: "#141414",
            margin: "0 14px 16px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Get More From{" "}
          <span style={{ color: MAROON }}>
            Your Business Data
          </span>
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#2c2c2c",
            lineHeight: "1.6",
            margin: "0 15px 32px",
            maxWidth: "820px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Once your business processes and information are connected, you can
          do more with the data you already have.
          <br />
          From automation and reporting to analytics and intelligent tools, a
          connected ERP system can help your teams work faster and make more
          informed decisions.
        </p>

        {/* ================= CARDS ================= */}

        <div
          className="erp-intelligence-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "22px",
            width: "100%",
            height: "auto",
            margin: "0 18px",
          }}
        >
          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: "#ffffff",
                width: "90%",

                // Reduced card height
                minHeight: "260px",

                // Reduced padding
                padding: "32px 32px",

                boxSizing: "border-box",

                display: "flex",
                flexDirection: "column",

                boxShadow: "0 10px 28px rgba(20,20,20,0.05)",

                // Rounded corners
                borderRadius: "16px",
              }}
            >
              {/* ================= ICON ================= */}

              <div
                style={{
                  width: "68px",
                  height: "68px",
                  minWidth: "68px",
                  borderRadius: "50%",
                  background: MAROON,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  // Reduced gap
                  marginBottom: "24px",
                }}
              >
                {icon}
              </div>

              {/* ================= TITLE ================= */}

              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#141414",
                  margin: "0 0 10px",
                  lineHeight: "1.2",
                }}
              >
                {title}
              </p>

              {/* ================= DESCRIPTION ================= */}

              <p
                style={{
                  fontSize: "15px",
                  color: "#3a3a3a",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RESPONSIVE ================= */}

      <style>{`
        @media (max-width: 1100px) {
          .erp-intelligence-container {
            padding: 0 24px !important;
          }

          .erp-intelligence-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            width: 100% !important;
            margin: 0 !important;
          }
        }

        @media (max-width: 640px) {
          .erp-intelligence-container {
            padding: 0 18px !important;
          }

          .erp-intelligence-cards {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }

          .erp-intelligence-cards > div {
            min-height: 240px !important;
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}