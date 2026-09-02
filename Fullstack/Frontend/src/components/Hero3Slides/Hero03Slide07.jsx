import React from "react";

// Images
import bgImage from "/bgslide07.png";
import photoImage from "/hero03slide07.png";

export default function BusinessChallengeSection() {
  return (
    <section
      className="business-challenge-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "55px 80px",
        background: "#ffffff",
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "55% auto",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      <div
        className="business-challenge-container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "0 auto",
          gap: "60px",
        }}
      >
        {/* ================= TEXT ================= */}
        <div
          className="business-challenge-content"
          style={{
            maxWidth: "480px",
            flex: "1 1 380px",
          }}
        >
          {/* ================= HEADING ================= */}
          <h1
            className="business-challenge-heading"
            style={{
              fontSize: "40px",
              lineHeight: 1.2,
              fontWeight: 700,
              color: "#1a1a1a",
              transform: "translateY(-15px)",
              margin: "0 0 30px 0",
            }}
          >
            Have a Business
            <br />
            Challenge to Solve
          </h1>

          {/* ================= PARAGRAPH 1 ================= */}
          <p
            className="business-challenge-paragraph"
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              maxWidth: "400px",
              margin: "15px 0 20px 0",
            }}
          >
            Whether you're planning a new application, modernizing an
            existing system or looking for a better way to manage a business
            process, the right place to start is with the problem.
          </p>

          {/* ================= PARAGRAPH 2 ================= */}
          <p
            className="business-challenge-paragraph"
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#4a4a4a",
              maxWidth: "400px",
              margin: "0 0 20px 0",
            }}
          >
            We'll work with you to understand the opportunity, define a
            practical solution and build software that fits the way your
            business works.
          </p>

          {/* ================= BUTTON ================= */}
          <a
            href="#"
            className="business-challenge-button"
            style={{
              display: "inline-block",
              marginTop: "42px",
              background: "#7a1338",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 30px",
              borderRadius: "6px",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#5c0e2a";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#7a1338";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Talk to Experts
          </a>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="business-challenge-image-wrapper"
          style={{
            flex: "1 1 340px",
            maxWidth: "620px",
            transform: "translateX(40px)",
          }}
        >
          <img
            className="business-challenge-image"
            src={photoImage}
            alt="Team discussing business challenge"
            style={{
              width: "100%",
              height: "520px",
              display: "block",
              objectFit: "cover",
              borderRadius: "18px",
              boxShadow: "0 25px 50px rgba(122, 19, 56, 0.15)",
            }}
          />
        </div>
      </div>

      {/* ================= RESPONSIVE CSS ================= */}
      <style>{`
        /* ================= LARGE LAPTOP ================= */
        @media (max-width: 1200px) {
          .business-challenge-section {
            padding: 55px 50px !important;
            background-size: 60% auto !important;
          }

          .business-challenge-container {
            gap: 40px !important;
          }

          .business-challenge-image-wrapper {
            max-width: 560px !important;
            transform: translateX(20px) !important;
          }

          .business-challenge-image {
            height: 480px !important;
          }
        }

        /* ================= TABLET ================= */
        @media (max-width: 900px) {
          .business-challenge-section {
            padding: 50px 35px !important;
            background-size: 70% auto !important;
          }

          .business-challenge-container {
            gap: 35px !important;
          }

          .business-challenge-content {
            flex: 1 1 320px !important;
          }

          .business-challenge-heading {
            font-size: 34px !important;
          }

          .business-challenge-image-wrapper {
            flex: 1 1 320px !important;
            max-width: 480px !important;
            transform: translateX(0) !important;
          }

          .business-challenge-image {
            height: 430px !important;
          }
        }

        /* ================= MOBILE ================= */
        @media (max-width: 700px) {
          .business-challenge-section {
            padding: 45px 25px !important;
            background-size: 100% auto !important;
            background-position: right bottom !important;
          }

          .business-challenge-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 45px !important;
          }

          .business-challenge-content {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
          }

          .business-challenge-heading {
            font-size: 32px !important;
            transform: translateY(0) !important;
            margin-bottom: 25px !important;
          }

          .business-challenge-paragraph {
            max-width: 100% !important;
            font-size: 15px !important;
            line-height: 1.7 !important;
          }

          .business-challenge-button {
            margin-top: 30px !important;
            font-size: 15px !important;
            padding: 13px 26px !important;
          }

          .business-challenge-image-wrapper {
            width: 100% !important;
            max-width: 100% !important;
            flex: none !important;
            transform: translateX(0) !important;
          }

          .business-challenge-image {
            width: 100% !important;
            height: auto !important;
            aspect-ratio: 4 / 3 !important;
          }
        }

        /* ================= SMALL MOBILE ================= */
        @media (max-width: 480px) {
          .business-challenge-section {
            padding: 35px 18px !important;
          }

          .business-challenge-heading {
            font-size: 28px !important;
            line-height: 1.25 !important;
          }

          .business-challenge-paragraph {
            font-size: 14px !important;
            line-height: 1.65 !important;
          }

          .business-challenge-button {
            margin-top: 25px !important;
            padding: 12px 24px !important;
          }

          .business-challenge-container {
            gap: 35px !important;
          }

          .business-challenge-image {
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}