import React from "react";

// Public folder image
import teamMeetingImage from "/hero03slide2.png";

export default function SoftwareWorksSection() {
  return (
    <section
      style={{
        padding: "55px 80px",
        background: "#f7f4ef",
        fontFamily: "plus jakarta sans, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
          maxWidth: "1300px",
          margin: "0 auto",
          gap: "40px",
        }}
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="software-works-content"
          style={{
            // Text width kam ki
            maxWidth: "450px",
            flex: "1 1 380px",
          }}
        >
          <h1
            style={{
              fontSize: "38px",
              lineHeight: 1.25,
              fontWeight: 700,
              color: "#1a1a1a",
              margin: "0 0 22px 0",
            }}
          >
            Software That Works
            <br />
            For <span style={{ color: "#7a1338" }}>Your Business</span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#333333",
              margin: "0 0 16px 0",
            }}
          >
            Every organization has different processes, priorities and
            challenges. Yet many businesses still rely on software that
            doesn't fully fit the way their teams work.
            <br />
            We take a different approach.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#333333",
              margin: "0 0 16px 0",
            }}
          >
            At TechTorch, we start by understanding your business and the
            problem you want to solve. We look at your existing processes,
            systems and user needs before defining the right solution.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#333333",
              margin: "0 0 16px 0",
            }}
          >
            That could mean building a new application, connecting systems
            that currently operate separately, or modernizing an existing
            platform.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#333333",
              margin: 0,
            }}
          >
            The technology is important, but the business outcome comes
            first.
          </p>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div
          className="software-works-image"
          style={{
            flex: "1 1 420px",
            maxWidth: "520px",
          }}
        >
          <img
            src={teamMeetingImage}
            alt="Team collaborating in a meeting room"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "16px",
            }}
          />

          <p
  style={{
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#7a1338",
    fontWeight: 700,
    margin: "18px 0 0 60px",
    maxWidth: "540px",
  }}
>
  We build software to make your business work
  <br />
    better—not simply to add another system.
</p>
        </div>
      </div>

      {/* ================= RESPONSIVE ================= */}
      <style>{`
        @media (max-width: 1100px) {
          section {
            padding: 50px 50px !important;
          }

          section > div {
            gap: 35px !important;
          }

          .software-works-content {
            max-width: 420px !important;
          }

          .software-works-image {
            max-width: 520px !important;
          }
        }

        @media (max-width: 900px) {
          section {
            padding: 45px 40px !important;
          }

          section > div {
            gap: 40px !important;
          }

          .software-works-content {
            max-width: 100% !important;
          }

          .software-works-image {
            max-width: 100% !important;
            flex-basis: 380px !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 40px 25px !important;
          }

          section > div {
            gap: 35px !important;
          }

          .software-works-content {
            width: 100% !important;
            max-width: 100% !important;
            flex-basis: 100% !important;
          }

          .software-works-image {
            width: 100% !important;
            max-width: 100% !important;
            flex-basis: 100% !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 35px 20px !important;
          }

          section h1 {
            font-size: 30px !important;
          }

          section > div {
            gap: 30px !important;
          }

          .software-works-image p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}