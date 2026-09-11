import React from "react";

import executiveStrategyImage from "/ExecutiveStrategy.png";

export default function ExecutiveStrategy() {
  return (
    <section className="executive-strategy">
      <div className="executive-strategy-card">

        <div className="executive-strategy-content">

          <div className="executive-strategy-badge">
            <span className="strategy-dot"></span>
            NEXT STEPS · EXECUTIVE STRATEGY
          </div>

          <h2>
            Turn Information Into Better
            <br /> Decisions
          </h2>

          <p className="strategy-description">
            Your business already generates valuable information.
            <br />
            The opportunity is to connect it, understand it and use
            <br />
            it more effectively.
          </p>

          <p className="strategy-highlight">
            Improve visibility. Strengthen operations. Connect critical
            <br />
            business information. Make decisions with greater confidence.
          </p>

          <p className="strategy-action">
            Let's build a clearer path from data to action.
          </p>

          <div className="strategy-buttons">
            <button className="strategy-primary">
              Talk to Our Experts <span>→</span>
            </button>

            <button className="strategy-secondary">
              Explore Digital Solutions
            </button>
          </div>

        </div>

        <div className="executive-strategy-image">
          <img
            src={executiveStrategyImage}
            alt="Executive Strategy"
          />
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .executive-strategy {
          width: 100%;
          padding: 35px 0;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .executive-strategy-card {
          width: calc(100% - 140px);
          max-width: 1320px;
          min-height: 520px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          background: #f7fafc;
          border: 1px solid #e0e7ed;
          border-radius: 22px;
          overflow: hidden;
        }

        .executive-strategy-content {
          padding: 42px 45px 40px 55px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          min-width: 0;
        }

        .executive-strategy-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          max-width: 100%;
          height: 32px;
          padding: 0 12px;
          border: 1px solid #e5bfd1;
          border-radius: 20px;
          background: #fff9fc;
          color: #8b0750;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.7px;
          white-space: nowrap;
        }

        .strategy-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #970052;
        }

        .executive-strategy-content h2 {
          margin: 23px 0 18px;
          color: #101629;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 35px;
          line-height: 1.12;
          letter-spacing: -1.4px;
          font-weight: 500;
        }

        .strategy-description {
          margin: 0;
          color: #64738a;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
        }

        .strategy-highlight {
          margin: 16px 0 0;
          color: #202a3e;
          font-size: 13px;
          line-height: 1.48;
          font-weight: 600;
        }

        .strategy-action {
          margin: 16px 0 0;
          color: #8d0750;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 750;
        }

        .strategy-buttons {
          margin-top: 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .strategy-primary,
        .strategy-secondary {
          min-width: 255px;
          height: 45px;
          padding: 0 14px;
          border-radius: 10px;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .strategy-primary {
          border: 1px solid #970052;
          background: #970052;
          color: #ffffff;
          box-shadow: 0 7px 15px rgba(151, 0, 82, 0.18);
        }

        .strategy-primary span {
          margin-left: 5px;
          font-size: 17px;
        }

        .strategy-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(151, 0, 82, 0.24);
        }

        .strategy-secondary {
          border: 1px solid #dfe6ed;
          background: #ffffff;
          color: #263044;
        }

        .strategy-secondary:hover {
          transform: translateY(-2px);
          background: #fafbfc;
        }

        .executive-strategy-image {
          width: 100%;
          height: 100%;
          min-height: 520px;
          overflow: hidden;
          background: #202633;
        }

        .executive-strategy-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Large Desktop */
        @media (min-width: 1600px) {
          .executive-strategy-card {
            max-width: 1380px;
            min-height: 550px;
          }

          .executive-strategy-content {
            padding-left: 65px;
            padding-right: 50px;
          }

          .executive-strategy-image {
            min-height: 550px;
          }
        }

        /* Laptop / Tablet Landscape */
        @media (max-width: 1100px) {
          .executive-strategy {
            padding: 30px 0;
          }

          .executive-strategy-card {
            width: calc(100% - 70px);
            min-height: 470px;
            grid-template-columns: 1fr 0.9fr;
          }

          .executive-strategy-content {
            padding: 35px 28px 35px 38px;
          }

          .executive-strategy-content h2 {
            margin-top: 20px;
            font-size: 31px;
          }

          .strategy-description {
            font-size: 13px;
          }

          .strategy-highlight {
            font-size: 12px;
          }

          .strategy-action {
            font-size: 13px;
          }

          .strategy-primary,
          .strategy-secondary {
            min-width: 215px;
            height: 43px;
            padding: 0 12px;
            font-size: 12px;
          }

          .executive-strategy-image {
            min-height: 470px;
          }
        }

        /* Tablet */
        @media (max-width: 800px) {
          .executive-strategy-card {
            width: calc(100% - 40px);
            min-height: auto;
            grid-template-columns: 1fr;
          }

          .executive-strategy-content {
            padding: 35px 30px;
          }

          .executive-strategy-content h2 {
            font-size: 30px;
          }

          .strategy-description,
          .strategy-highlight {
            font-size: 13px;
          }

          .strategy-action {
            font-size: 14px;
          }

          .strategy-primary,
          .strategy-secondary {
            min-width: 225px;
            height: 43px;
            padding: 0 12px;
          }

          .executive-strategy-image {
            height: 320px;
            min-height: 320px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .executive-strategy {
            padding: 20px 0 28px;
          }

          .executive-strategy-card {
            width: calc(100% - 24px);
            border-radius: 16px;
          }

          .executive-strategy-content {
            padding: 28px 22px 30px;
          }

          .executive-strategy-badge {
            height: 28px;
            padding: 0 10px;
            font-size: 8px;
            gap: 6px;
          }

          .strategy-dot {
            width: 6px;
            height: 6px;
          }

          .executive-strategy-content h2 {
            margin: 20px 0 16px;
            font-size: 27px;
            line-height: 1.12;
            letter-spacing: -1px;
          }

          .strategy-description {
            font-size: 12px;
            line-height: 1.55;
          }

          .strategy-highlight {
            margin-top: 16px;
            font-size: 12px;
            line-height: 1.5;
          }

          .strategy-action {
            margin-top: 16px;
            font-size: 13px;
          }

          .strategy-buttons {
            width: 100%;
            margin-top: 20px;
            gap: 10px;
          }

          .strategy-primary,
          .strategy-secondary {
            width: 100%;
            min-width: 0;
            height: 44px;
            padding: 0 11px;
            font-size: 12px;
          }

          .executive-strategy-image {
            height: 245px;
            min-height: 245px;
          }
        }

        /* Small Mobile */
        @media (max-width: 420px) {
          .executive-strategy-card {
            width: calc(100% - 18px);
          }

          .executive-strategy-content {
            padding: 25px 18px 27px;
          }

          .executive-strategy-content h2 {
            font-size: 24px;
          }

          .strategy-description,
          .strategy-highlight {
            font-size: 11px;
          }

          .strategy-action {
            font-size: 12px;
          }

          .strategy-primary,
          .strategy-secondary {
            height: 42px;
            padding: 0 10px;
            font-size: 11px;
          }

          .executive-strategy-image {
            height: 220px;
            min-height: 220px;
          }
        }

        /* Very Small Screens */
        @media (max-width: 350px) {
          .executive-strategy-content h2 {
            font-size: 22px;
          }

          .strategy-description,
          .strategy-highlight {
            font-size: 10.5px;
          }

          .strategy-primary,
          .strategy-secondary {
            font-size: 10.5px;
            padding: 0 9px;
          }

          .executive-strategy-image {
            height: 200px;
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
}