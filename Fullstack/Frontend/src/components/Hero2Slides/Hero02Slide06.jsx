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
      className="erp-intelligence-section"
      style={{
        width: "100%",
        background: "#f6f3ec",
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 48px)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        padding: "38px 0 48px",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div className="erp-intelligence-container">

        {/* ================= HEADER ================= */}

        <div className="erp-header">

          <p className="erp-label">
            ERP &amp; INTELLIGENCE
          </p>

          <h2 className="erp-heading">
            Get More From{" "}
            <span>Your Business Data</span>
          </h2>

          <p className="erp-description">
            Once your business processes and information are connected, you can
            do more with the data you already have.
            <br className="desktop-break" />
            From automation and reporting to analytics and intelligent tools, a
            connected ERP system can help your teams work faster and make more
            informed decisions.
          </p>

        </div>


        {/* ================= CARDS ================= */}

        <div className="erp-intelligence-cards">

          {cards.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="erp-card"
            >

              {/* ICON */}
              <div className="erp-icon">
                {icon}
              </div>

              {/* TITLE */}
              <p className="erp-card-title">
                {title}
              </p>

              {/* DESCRIPTION */}
              <p className="erp-card-description">
                {desc}
              </p>

            </div>
          ))}

        </div>

      </div>


      {/* ================= RESPONSIVE CSS ================= */}

      <style>{`

        /* =================================================
           DESKTOP
        ================================================= */

        .erp-intelligence-container {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          padding: 0 32px;
          box-sizing: border-box;
        }

        .erp-header {
          width: 100%;
          max-width: 950px;

          /* Small right shift */
          margin-left: 50px;

          box-sizing: border-box;
        }

        .erp-label {
          font-size: 24px;
          font-weight: 700;
          color: #141414;

          letter-spacing: 0.02em;

          margin: -8px 0 12px;

          text-align: left;
        }

        .erp-heading {
          font-size: 32px;
          font-weight: 700;

          line-height: 1.15;

          color: #141414;

          margin: 0 0 16px;

          text-align: left;
        }

        .erp-heading span {
          color: ${MAROON};
        }

        .erp-description {
          font-size: 16px;

          color: #2c2c2c;

          line-height: 1.6;

          margin: 0 0 32px;

          max-width: 820px;

          font-family: "Inter", sans-serif;

          text-align: left;
        }


        /* =================================================
           CARDS
        ================================================= */

        .erp-intelligence-cards {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 28px;

          width: 95%;

          margin-left: 0;

          box-sizing: border-box;

          /* Slight right movement */
          transform: translateX(30px);
        }

        .erp-card {
          width: 100%;
          min-width: 0;

          min-height: 260px;

          background: #ffffff;

          padding: 32px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;

          border-radius: 16px;

          box-shadow:
            0 10px 28px rgba(20, 20, 20, 0.05);
        }

        .erp-icon {
          width: 68px;
          height: 68px;

          min-width: 68px;

          border-radius: 50%;

          background: ${MAROON};

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 24px;
        }

        .erp-card-title {
          font-size: 22px;

          font-weight: 700;

          color: #141414;

          margin: 0 0 10px;

          line-height: 1.2;
        }

        .erp-card-description {
          font-size: 15px;

          color: #3a3a3a;

          line-height: 1.5;

          margin: 0;
        }


        /* =================================================
           LARGE TABLET
        ================================================= */

        @media (max-width: 1200px) {

          .erp-intelligence-container {
            padding: 0 28px;
          }

          .erp-header {
            margin-left: 35px;
            max-width: 850px;
          }

          .erp-intelligence-cards {
            width: 96%;
            gap: 22px;

            transform: translateX(20px);
          }

          .erp-card {
            padding: 28px;
            min-height: 250px;
          }

          .erp-card-title {
            font-size: 20px;
          }

          .erp-card-description {
            font-size: 14px;
          }
        }


        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 900px) {

          .erp-intelligence-section {
            padding: 36px 0 44px !important;
          }

          .erp-intelligence-container {
            padding: 0 24px;
          }

          .erp-header {
            width: 100%;
            max-width: 800px;

            margin-left: 15px;
          }

          .erp-label {
            font-size: 21px;
          }

          .erp-heading {
            font-size: 29px;
          }

          .erp-description {
            font-size: 15px;
            max-width: 700px;
          }

          .erp-intelligence-cards {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            width: 100%;

            gap: 20px;

            transform: translateX(10px);
          }

          .erp-card {
            min-height: 240px;

            padding: 26px 24px;

            border-radius: 14px;
          }

          .erp-icon {
            width: 62px;
            height: 62px;

            min-width: 62px;

            margin-bottom: 20px;
          }

          .erp-card-title {
            font-size: 20px;
          }

          .erp-card-description {
            font-size: 14px;
          }
        }


        /* =================================================
           SMALL TABLET
        ================================================= */

        @media (max-width: 768px) {

          .erp-intelligence-section {
            padding: 32px 0 40px !important;
          }

          .erp-intelligence-container {
            padding: 0 20px;
          }

          /* Remove horizontal shift */

          .erp-header {
            max-width: 100%;
            margin-left: 0;
            margin-right: 0;
          }

          .erp-label {
            font-size: 20px;

            margin: 0 0 10px;

            text-align: left;
          }

          .erp-heading {
            font-size: 28px;

            line-height: 1.2;

            margin: 0 0 14px;

            text-align: left;
          }

          .erp-description {
            font-size: 15px;

            line-height: 1.55;

            margin: 0 0 28px;

            max-width: 100%;
          }

          .erp-intelligence-cards {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            width: 100%;

            gap: 18px;

            transform: translateX(0);
          }

          .erp-card {
            min-height: 230px;

            padding: 25px 22px;
          }

          .erp-icon {
            width: 60px;
            height: 60px;

            min-width: 60px;

            margin-bottom: 18px;
          }

          .erp-icon svg {
            width: 22px;
            height: 22px;
          }

          .erp-card-title {
            font-size: 19px;

            margin-bottom: 8px;
          }

          .erp-card-description {
            font-size: 14px;

            line-height: 1.5;
          }
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 600px) {

          .erp-intelligence-section {
            padding: 28px 0 36px !important;
          }

          .erp-intelligence-container {
            padding: 0 16px;
          }

          .erp-header {
            width: 100%;
            margin: 0;
          }

          .erp-label {
            font-size: 18px;

            line-height: 1.3;

            margin: 0 0 9px;
          }

          .erp-heading {
            font-size: 25px;

            line-height: 1.2;

            margin: 0 0 13px;
          }

          .erp-description {
            font-size: 14px;

            line-height: 1.55;

            margin: 0 0 24px;

            max-width: 100%;
          }

          .desktop-break {
            display: none;
          }


          /* One card per row */

          .erp-intelligence-cards {
            display: grid;

            grid-template-columns: 1fr;

            width: 100%;

            gap: 16px;

            transform: none;
          }

          .erp-card {
            width: 100%;

            min-height: auto;

            padding: 24px 20px;

            border-radius: 14px;
          }

          .erp-icon {
            width: 58px;
            height: 58px;

            min-width: 58px;

            margin-bottom: 17px;
          }

          .erp-icon svg {
            width: 21px;
            height: 21px;
          }

          .erp-card-title {
            font-size: 19px;

            line-height: 1.2;

            margin-bottom: 8px;
          }

          .erp-card-description {
            font-size: 14px;

            line-height: 1.5;
          }
        }


        /* =================================================
           VERY SMALL MOBILE
        ================================================= */

        @media (max-width: 400px) {

          .erp-intelligence-container {
            padding: 0 14px;
          }

          .erp-label {
            font-size: 17px;
          }

          .erp-heading {
            font-size: 23px;
          }

          .erp-description {
            font-size: 13.5px;
          }

          .erp-card {
            padding: 22px 18px;
          }

          .erp-icon {
            width: 56px;
            height: 56px;

            min-width: 56px;
          }

          .erp-card-title {
            font-size: 18px;
          }

          .erp-card-description {
            font-size: 13.5px;
          }
        }

      `}</style>
    </section>
  );
}