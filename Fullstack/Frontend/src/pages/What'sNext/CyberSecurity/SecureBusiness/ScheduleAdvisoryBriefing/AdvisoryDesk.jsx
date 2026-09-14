import React from "react";

export default function AdvisoryHero() {
  return (
    <section className="advisory-hero">
      <div className="advisory-hero-glow"></div>

      <div className="advisory-hero-content">
        <h1>
          Schedule Your Executive Security
          <br />
          Advisory Briefing
        </h1>

        <p>
          A focused, 45-minute tactical consultation with TechTorch Principal
          <br />
          Cyber Architects and Practice Directors. Formulate your actionable 30-
          <br />
          60-90 day defense posture roadmap.
        </p>

        <div className="advisory-hero-badges">
          <span>
            <b>◷</b>
            45-Minute Timeboxed Consultation
          </span>

          <span>
            <b>♢</b>
            Zero-Data Retention Discovery
          </span>

          <span>
            <b>▣</b>
            C-Level 30-60-90 Playbook Included
          </span>

          <span>
            <b>▣</b>
            Bilateral MNDA Safeguarded
          </span>
        </div>
      </div>

      <style>{`
        .advisory-hero {
          position: relative;
          width: 100%;
          min-height: 560px;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(151, 0, 82, 0.42) 0%,
              rgba(151, 0, 82, 0.18) 24%,
              rgba(8, 9, 14, 0.95) 55%,
              #07090e 78%
            );
          display: flex;
          justify-content: center;
          align-items: flex-start;
          font-family: "Inter", sans-serif;
        }

        .advisory-hero-glow {
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 720px;
          height: 400px;
          background: rgba(151, 0, 82, 0.28);
          filter: blur(90px);
          border-radius: 50%;
          pointer-events: none;
        }

        .advisory-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1050px;
          padding: 72px 24px 70px;
          text-align: center;
        }

        .advisory-hero h1 {
          margin: 0;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 48px;
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: -1.8px;
        }

        .advisory-hero-content > p {
          margin: 30px auto 0;
          max-width: 760px;
          color: #e4dfe3;
          font-size: 19px;
          line-height: 1.42;
          font-weight: 400;
          letter-spacing: -0.2px;
        }

        .advisory-hero-badges {
          margin: 48px auto 0;
          max-width: 600px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px 16px;
        }

        .advisory-hero-badges span {
          min-height: 31px;
          padding: 7px 14px;
          border: 1px solid rgba(220, 185, 207, 0.24);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.055);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 4px 15px rgba(0, 0, 0, 0.12);
          color: #d7ced4;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          line-height: 1;
          font-weight: 600;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }

        .advisory-hero-badges b {
          color: #e58ab8;
          font-size: 13px;
          font-weight: 500;
        }

        @media (max-width: 900px) {
          .advisory-hero {
            min-height: 520px;
          }

          .advisory-hero-content {
            padding-top: 65px;
          }

          .advisory-hero h1 {
            font-size: 42px;
          }

          .advisory-hero-content > p {
            font-size: 17px;
          }
        }

        @media (max-width: 650px) {
          .advisory-hero {
            min-height: 500px;
          }

          .advisory-hero-content {
            padding: 55px 18px 60px;
          }

          .advisory-hero h1 {
            font-size: 34px;
            line-height: 1.08;
            letter-spacing: -1px;
          }

          .advisory-hero-content > p {
            margin-top: 24px;
            font-size: 15px;
            line-height: 1.5;
          }

          .advisory-hero-content > p br {
            display: none;
          }

          .advisory-hero-badges {
            margin-top: 35px;
            gap: 10px;
          }

          .advisory-hero-badges span {
            font-size: 9px;
            padding: 7px 10px;
          }
        }

        @media (max-width: 420px) {
          .advisory-hero {
            min-height: 470px;
          }

          .advisory-hero-content {
            padding: 48px 14px 55px;
          }

          .advisory-hero h1 {
            font-size: 29px;
          }

          .advisory-hero-content > p {
            font-size: 14px;
          }

          .advisory-hero-badges span {
            font-size: 8.5px;
          }
        }
      `}</style>
    </section>
  );
}