import React from "react";

export default function IntegratedAutomation() {
  return (
    <section className="integrated-automation">
      <div className="automation-container">

        {/* BADGE */}
        <div className="automation-badge">
          <span className="automation-badge-dot"></span>
          INTEGRATED AUTOMATION
        </div>

        {/* HEADING */}
        <h2 className="automation-heading">
          Better Decisions Start With Better
          <br />
          Processes
        </h2>

        {/* SUBHEADING */}
        <p className="automation-subheading">
          Good decisions depend on good information. And good information
          depends on
          <br className="desktop-break" />
          good processes.
        </p>

        {/* MAIN CARDS */}
        <div className="automation-cards">

          {/* LEFT CARD */}
          <div className="automation-card manual-card">

            <div className="automation-card-title">
              <span className="card-title-dot manual-dot"></span>
              <h3>THE COST OF MANUAL FRICTION</h3>
            </div>

            <p className="automation-card-description">
              When business information is created through disconnected or
              highly manual workflows, organizations face unavoidable delays,
              inconsistencies, repetitive reconciliation, and unnecessary
              administrative burden.
            </p>

            <div className="automation-points">
              <div>
                • Stale spreadsheets hindering real-time decisions
              </div>

              <div>
                • Human transcription errors across siloed databases
              </div>

              <div>
                • High operational drag on high-value employees
              </div>
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="automation-card intelligent-card">

            <div className="automation-card-title">
              <span className="card-title-dot intelligent-dot"></span>
              <h3>INTELLIGENT PROCESS AUTOMATION</h3>
            </div>

            <p className="automation-card-description">
              Automation reduces repetitive tasks, improves consistency, and
              frees operational teams to focus on strategic work that requires
              judgment, creativity, and human problem-solving.
            </p>

            <div className="automation-points">
              <div>
                • Unified cross-functional workflows with guaranteed integrity
              </div>

              <div>
                • Instant notification and routing of mission-critical tasks
              </div>

              <div>
                • Embedded AI, cloud infrastructure, and modern software
                support
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="automation-bottom">

          <div className="automation-bottom-main">
            Less manual effort. Better visibility. More reliable information.
            Faster decisions.
          </div>

          <div className="automation-bottom-small">
            TECHTORCH ERP &amp; AUTOMATION ARCHITECTURE
          </div>

        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ================================
           MAIN SECTION
        ================================= */

        .integrated-automation {
          width: 100%;
          margin: 0;
          padding: 52px 0 58px;
          background: #faf9f4;
          color: #11172b;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        .automation-container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 0 38px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ================================
           BADGE
        ================================= */

        .automation-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 25px;
          padding: 0 13px;
          border: 1px solid #e6c8d8;
          border-radius: 20px;
          background: #fffafd;
          color: #8c0750;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.65px;
          margin-bottom: 17px;
        }

        .automation-badge-dot {
          width: 6px;
          height: 6px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #970052;
        }

        /* ================================
           HEADING
        ================================= */

        .automation-heading {
          width: 100%;
          margin: 0;
          text-align: center;
          color: #11172b;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.12;
          letter-spacing: -1.2px;
          font-weight: 600;
        }

        /* ================================
           SUBHEADING
        ================================= */

        .automation-subheading {
          margin: 13px 0 0;
          width: 100%;
          text-align: center;
          color: #8d0750;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 500;
        }

        /* ================================
           MAIN CARDS
        ================================= */

        .automation-cards {
          width: 100%;
          max-width: 1100px;
          margin: 38px auto 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        /* ================================
           CARD
        ================================= */

        .automation-card {
          min-width: 0;
          min-height: 313px;
          padding: 29px 27px 25px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;

          /* BOTH CARDS SAME INITIALLY */
          background: #f7fafc;
          border: 1px solid #e3e9ef;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        /* ================================
           BOTH CARDS HOVER
        ================================= */

        .automation-card:hover {
          transform: translateY(-7px);
          background: #fcf8f8;
          border-color: #e8d1dd;
          box-shadow:
            0 12px 28px rgba(151, 0, 82, 0.10);
        }

        /* ================================
           CARD TITLE
        ================================= */

        .automation-card-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .automation-card-title h3 {
          margin: 0;
          color: #202a3e;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.2px;

          transition: color 0.3s ease;
        }

        /* HOVER TITLE FOR BOTH */

        .automation-card:hover .automation-card-title h3 {
          color: #8d0750;
        }

        /* ================================
           DOT
        ================================= */

        .card-title-dot {
          width: 9px;
          height: 9px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: #91a4bb;

          transition: background 0.3s ease;
        }

        /* HOVER DOT FOR BOTH */

        .automation-card:hover .card-title-dot {
          background: #970052;
        }

        /* ================================
           CARD DESCRIPTION
        ================================= */

        .automation-card-description {
          margin: 0;
          max-width: 560px;
          color: #627188;
          font-family: "Inter", sans-serif;
          font-size: 13px;
          line-height: 1.65;
          font-weight: 500;
        }

        /* ================================
           POINTS BOX
        ================================= */

        .automation-points {
          width: 100%;
          margin-top: 20px;
          padding: 13px 13px;
          border: 1px solid #e4e9ee;
          border-radius: 9px;
          background: #ffffff;
          color: #617087;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.65;
          font-weight: 600;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        /* HOVER POINTS FOR BOTH */

        .automation-card:hover .automation-points {
          border-color: #ead6df;
        }

        .automation-points div + div {
          margin-top: 3px;
        }

        /* ================================
           BOTTOM MESSAGE
        ================================= */

        .automation-bottom {
          width: 100%;
          max-width: 1100px;
          min-height: 97px;
          margin-top: 38px;
          padding: 20px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid #e3bdd0;
          border-radius: 12px;
          background: #fff8fb;
        }

        .automation-bottom-main {
          color: #8d0750;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 720;
          letter-spacing: -0.3px;
        }

        .automation-bottom-small {
          margin-top: 6px;
          color: #7d8da4;
          font-size: 10px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: 0.25px;
        }

        /* ================================
           LARGE DESKTOP
        ================================= */

        @media (min-width: 1600px) {

          .automation-container {
            max-width: 1600px;
            padding: 0 45px;
          }

          .automation-heading {
            font-size: 38px;
          }

          .automation-subheading {
            font-size: 14px;
          }

          .automation-cards {
            max-width: 1150px;
            gap: 26px;
            margin-top: 40px;
          }

          .automation-card {
            min-height: 325px;
            padding: 31px 29px 27px;
          }

          .automation-card-title h3 {
            font-size: 16px;
          }

          .automation-card-description {
            font-size: 11.5px;
          }

          .automation-points {
            font-size: 10px;
          }

          .automation-bottom {
            max-width: 1150px;
          }

          .automation-bottom-main {
            font-size: 18px;
          }
        }

        /* ================================
           SMALL DESKTOP / TABLET
        ================================= */

        @media (max-width: 1100px) {

          .integrated-automation {
            padding: 45px 0 52px;
          }

          .automation-container {
            padding: 0 25px;
          }

          .automation-heading {
            font-size: 31px;
          }

          .automation-subheading {
            font-size: 12px;
          }

          .automation-cards {
            max-width: 950px;
            gap: 18px;
          }

          .automation-card {
            min-height: 300px;
            padding: 25px 22px 22px;
          }

          .automation-card-title h3 {
            font-size: 14px;
          }

          .automation-card-description {
            font-size: 10px;
          }

          .automation-points {
            font-size: 9px;
          }

          .automation-bottom {
            max-width: 950px;
          }

          .automation-bottom-main {
            font-size: 15px;
          }
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 800px) {

          .automation-heading {
            font-size: 28px;
          }

          .automation-subheading {
            font-size: 11px;
          }

          .automation-cards {
            grid-template-columns: 1fr;
            max-width: 650px;
            gap: 16px;
          }

          .automation-card {
            min-height: auto;
            padding: 25px 23px 23px;
          }

          .automation-bottom {
            max-width: 650px;
            margin-top: 30px;
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 600px) {

          .integrated-automation {
            padding: 38px 0 44px;
          }

          .automation-container {
            padding: 0 17px;
          }

          .automation-badge {
            height: 24px;
            padding: 0 11px;
            font-size: 7.5px;
          }

          .automation-heading {
            font-size: 25px;
            line-height: 1.13;
            letter-spacing: -0.8px;
          }

          .automation-subheading {
            margin-top: 12px;
            font-size: 10px;
            line-height: 1.6;
          }

          .desktop-break {
            display: none;
          }

          .automation-cards {
            width: 100%;
            margin-top: 28px;
            gap: 13px;
          }

          .automation-card {
            width: 100%;
            min-height: 0;
            padding: 21px 18px 19px;
            border-radius: 13px;
          }

          .automation-card:hover {
            transform: translateY(-5px);
          }

          .automation-card-title {
            gap: 8px;
            margin-bottom: 15px;
          }

          .card-title-dot {
            width: 8px;
            height: 8px;
          }

          .automation-card-title h3 {
            font-size: 13px;
            line-height: 1.35;
          }

          .automation-card-description {
            font-size: 10px;
            line-height: 1.65;
          }

          .automation-points {
            margin-top: 17px;
            padding: 12px 11px;
            font-size: 9px;
            line-height: 1.65;
          }

          .automation-bottom {
            width: 100%;
            min-height: 0;
            margin-top: 27px;
            padding: 18px 16px;
            border-radius: 11px;
          }

          .automation-bottom-main {
            font-size: 13px;
            line-height: 1.45;
          }

          .automation-bottom-small {
            margin-top: 7px;
            font-size: 7px;
          }
        }

        /* ================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 380px) {

          .automation-container {
            padding: 0 14px;
          }

          .automation-heading {
            font-size: 22px;
          }

          .automation-subheading {
            font-size: 9.5px;
          }

          .automation-card {
            padding: 19px 16px 17px;
          }

          .automation-card-title h3 {
            font-size: 12px;
          }

          .automation-card-description {
            font-size: 9.5px;
          }

          .automation-points {
            font-size: 8.5px;
            padding: 11px 10px;
          }

          .automation-bottom-main {
            font-size: 11.5px;
          }

          .automation-bottom-small {
            font-size: 6.5px;
          }
        }
      `}</style>
    </section>
  );
}