import React from "react";

export default function PerspectiveAnalysis() {
  return (
    <section className="perspective-analysis">
      <div className="perspective-container">

        {/* LEFT COLUMN */}
        <div className="perspective-left">

          <div className="perspective-badge">
            <span></span>
            PERSPECTIVE & ANALYSIS
          </div>

          <h2>
            When More Data
            <br />
            Creates More Complexity
          </h2>

          <div className="executive-card">
            <div className="card-label">EXECUTIVE REALIZATION</div>

            <h3>
              The challenge is no longer about
              <br />
              finding data.
            </h3>

            <p>
              The challenge is understanding what the data
              <br />
              is telling you in real business context.
            </p>
          </div>

          <div className="thesis-card">
            <div className="card-label">CORE OPERATING THESIS</div>

            <p>
              Data volume provides zero competitive advantage without
              context, coherence, and decision velocity.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="perspective-right">

          <h3 className="right-heading">
            Data has become part of almost every business decision.
          </h3>

          <p className="right-description">
            Sales generate customer records. Finance generates ledger entries.
            Operations track throughput. Supply chains monitor inventory and
            freight. Customer touchpoints continuously stream new signals.
          </p>

          <div className="friction-section">
            <div className="friction-title">
              SYSTEMIC FRICTION POINTS
            </div>

            <div className="friction-grid">

              <div className="friction-card">
                <span>•</span>
                <p>
                  Information fragmented across isolated
                  systems & silos
                </p>
              </div>

              <div className="friction-card">
                <span>•</span>
                <p>
                  Teams waste hours manually collecting
                  & comparing reports
                </p>
              </div>

              <div className="friction-card">
                <span>•</span>
                <p>
                  Numbers arrive without context, stalling
                  confident action
                </p>
              </div>

              <div className="friction-card">
                <span>•</span>
                <p>
                  Operational bottlenecks emerge before
                  leadership detects them
                </p>
              </div>

            </div>
          </div>

          {/* ENTERPRISE DILEMMA */}
          <div className="enterprise-card">

            <div className="enterprise-label">
              THE ENTERPRISE DILEMMA
            </div>

            <h3>
              More data does not always mean more
              <br />
              clarity.
            </h3>

            <p>
              The real value comes when information is connected,
              organized and presented in a way that helps leaders
              understand what is truly happening across their
              business.
            </p>

          </div>

          <p className="bottom-description">
            A strong digital environment moves beyond passive record-keeping.
            It identifies patterns, benchmarks operational performance,
            surfaces hidden risks, and empowers leaders to act with decisive
            clarity.
          </p>

          <p className="bottom-bold">
            This is the role of data-driven technology across modern ERP,
            Operations, Supply Chain, and Financial ecosystems.
          </p>

          <div className="goal-card">
            <p>
              The goal is not to collect more information.
            </p>

            <h3>
              The goal is to make better use of the information
              <br />
              already available.
            </h3>
          </div>

        </div>
      </div>

      <style>{`

        * {
          box-sizing: border-box;
        }

        .perspective-analysis {
          width: 100%;
          padding: 28px 0 50px;
          margin: 0;
          background: #ffffff;
          color: #151a2a;
          font-family: "Inter", sans-serif;
        }

        .perspective-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 22px;

          display: grid;
          grid-template-columns: 0.95fr 1.4fr;
          gap: 55px;

          align-items: start;
        }

        /* LEFT */

        .perspective-left {
          padding-top: 2px;
        }

        .perspective-badge {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 7px 12px;

          border: 1px solid #ecc7d8;
          border-radius: 20px;
          background: #fff8fb;

          color: #8f0050;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.7px;

          margin-bottom: 23px;
        }

        .perspective-badge span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #970052;
        }

        .perspective-left h2 {
          margin: 0 0 24px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 26px;
          line-height: 1.18;
          letter-spacing: -1px;
          font-weight: 600;

          color: #151a2a;
        }

        /* EXECUTIVE */

        .executive-card {
          width: 100%;
          padding: 24px 22px 23px;

          background: #f7f9fb;
          border-left: 2px solid #e5ebf1;
          border-radius: 10px;

          margin-bottom: 21px;
        }

        .card-label {
          margin-bottom: 11px;

          color: #970052;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        .executive-card h3 {
          margin: 0 0 11px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 700;

          color: #172033;
        }

        .executive-card p {
          margin: 0;

          color: #596579;

          font-size: 13px;
          font-family: "Inter", sans-serif;
          font-weight: 500;
          line-height: 1.7;
        }

        /* THESIS */

        .thesis-card {
          width: 100%;
          padding: 19px 20px;

          border: 1px solid #eed7e1;
          border-radius: 10px;

          background: #fffafd;
        }

        .thesis-card p {
          margin: 0;

          color: #5d6574;

          font-size: 12px;
           font-family: "Inter", sans-serif;
          font-weight: 500;
          line-height: 1.65;
        }

        /* RIGHT */

        .perspective-right {
          padding-top: 2px;
        }

        .right-heading {
          margin: 0 0 14px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 17px;
          line-height: 1.4;
          font-weight: 600;

          color: #171d2c;
        }

        .right-description {
          margin: 0 0 21px;

          color: #596579;
           font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        /* FRICTION */

        .friction-section {
          margin-bottom: 26px;
        }

        .friction-title {
          margin-bottom: 9px;

          color: #68748a;

          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.55px;
        }

        .friction-grid {
          display: grid;

          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .friction-card {
          min-height: 53px;

          display: flex;
          align-items: flex-start;

          gap: 9px;

          padding: 11px 12px;

          background: #f7f9fb;

          border: 1px solid #e4e9ef;
          border-radius: 8px;
        }

        .friction-card span {
          flex: 0 0 auto;

          color: #970052;

          font-size: 15px;
          line-height: 1;
        }

        .friction-card p {
          margin: 0;

          color: #354054;
          font-family: "Inter", sans-serif;
          font-size: 11.5px;
          line-height: 1.5;

          font-weight: 600;
        }

        /* ENTERPRISE DILEMMA - COMPACT */

        .enterprise-card {
          width: 100%;

          padding: 18px 19px;

          background: #060b20;

          border-radius: 9px;

          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);

          margin-bottom: 20px;
        }

        .enterprise-label {
          margin-bottom: 9px;

          color: #ef9bb9;

          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .enterprise-card h3 {
          margin: 0 0 10px;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 16px;
          line-height: 1.3;
          font-weight: 700;
        }

        .enterprise-card p {
          max-width: 520px;

          margin: 0;

          color: rgba(239, 243, 250, 0.75);
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.6;
        }

        /* BOTTOM */

        .bottom-description {
          margin: 0 0 14px;

          color: #596579;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.7;
        }

        .bottom-bold {
          margin: 0 0 22px;

          color: #2e3749;
font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.6;

          font-weight: 600;
        }

        /* GOAL */

        .goal-card {
          width: 100%;

          padding: 19px 21px;

          border: 1px solid #e7c8d6;
          border-radius: 10px;

          background: #fff9fc;
        }

        .goal-card p {
          margin: 0 0 7px;

          color: #41495a;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.5;
        }

        .goal-card h3 {
          margin: 0;

          color: #8c0750;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          line-height: 1.4;
          font-weight: 800;
        }

        /* XL & DESKTOP */
        /* Left content slightly left, right content slightly right */

        @media (min-width: 1201px) {
          .perspective-container {
            max-width: 1280px;
            padding-left: 10px;
            padding-right: 10px;
            gap: 65px;
          }
        }

        /* TABLET */

        @media (max-width: 900px) {

          .perspective-analysis {
            padding-top: 24px;
          }

          .perspective-container {
            grid-template-columns: 1fr 1.25fr;
            gap: 35px;
            padding: 0 22px;
          }

          .perspective-left h2 {
            font-size: 25px;
          }

          .right-heading {
            font-size: 16px;
          }

          .enterprise-card h3 {
            font-size: 15px;
          }
        }

        /* MOBILE */

        @media (max-width: 700px) {

          .perspective-analysis {
            padding: 20px 0 38px;
          }

          .perspective-container {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 0 20px;
          }

          .perspective-left h2 {
            font-size: 25px;
          }

          .right-heading {
            font-size: 16px;
          }

          .right-description,
          .bottom-description {
            font-size: 10.5px;
          }

          .friction-grid {
            grid-template-columns: 1fr;
          }

          .executive-card {
            padding: 21px 19px;
          }

          .enterprise-card {
            padding: 18px 17px;
          }
        }

        /* SMALL MOBILE */

        @media (max-width: 420px) {

          .perspective-analysis {
            padding-top: 18px;
          }

          .perspective-container {
            padding: 0 16px;
          }

          .perspective-left h2 {
            font-size: 22px;
          }

          .executive-card h3 {
            font-size: 14px;
          }

          .enterprise-card h3 {
            font-size: 15px;
          }
        }

      `}</style>
    </section>
  );
}