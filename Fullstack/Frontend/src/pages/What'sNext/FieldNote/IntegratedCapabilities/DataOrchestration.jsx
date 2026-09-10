import React from "react";

export default function DataOrchestration() {
  return (
    <div className="data-orchestration-page">

      {/* ================= HERO ================= */}
      <section className="data-orchestration-hero">

        <img
          src="https://talweg.ai/_astro/agentic-bridge-diagram.BMToK1Dl.png"
          alt="Advanced Data Orchestration"
          className="data-orchestration-hero-image"
        />

        <div className="data-orchestration-hero-overlay"></div>

        <div className="data-orchestration-hero-content">

          <div className="data-orchestration-eyebrow">
            <span></span>
            CORE CAPABILITY
          </div>

          <h1>
            Advanced Data
            <br />
            Orchestration:
            <br />
            <strong>
              Turning Information into
              <br />
              Intelligence
            </strong>
          </h1>

        </div>

      </section>


      {/* ================= SINGLE SOURCE ================= */}
      <section className="data-single-source">

        <div className="data-single-title">
          <div className="data-title-line"></div>

          <h2>
            The Single
            <br />
            Source
            <br />
            of Truth
          </h2>
        </div>

        <div className="data-single-text">
          <p>
            At TechTorch, we believe data should not merely exist; it must
            flow, connect, and illuminate. Our advanced data orchestration
            engine dismantles legacy silos, weaving disparate data streams
            into a unified, crystalline architecture. This rigorous approach
            to data governance ensures that every piece of information across
            your enterprise is accurate, synchronized, and actionable in
            real-time.
          </p>
        </div>

      </section>


      {/* ================= THREE CARDS ================= */}
      <section className="data-capability-cards">

        {/* CARD 1 */}
        <div className="data-capability-card">

          <div className="data-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="4" y="4" width="6" height="6" />
              <rect x="14" y="14" width="6" height="6" />
              <path d="M10 7h4a2 2 0 0 1 2 2v5" />
              <path d="M14 17h-4a2 2 0 0 1-2-2v-5" />
            </svg>
          </div>

          <h3>
            Crystalline
            <br />
            Architecture
          </h3>

          <p>
            Our proprietary pillar concept treats data entities as faceted
            nodes within a rigid, yet highly elastic network. This ensures
            absolute structural integrity while permitting fluid querying
            across immense datasets.
          </p>

        </div>


        {/* CARD 2 */}
        <div className="data-capability-card">

          <div className="data-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M5 15a7 7 0 1 1 14 0" />
              <path d="M12 12l4-4" />
              <path d="M5 15h3" />
              <path d="M16 15h3" />
            </svg>
          </div>

          <h3>
            Real-Time
            <br />
            Processing
          </h3>

          <p>
            Latency is the enemy of intelligence. TechTorch employs event-driven
            streaming architectures to ingest, transform, and route millions
            of records per second, powering split-second decision-making.
          </p>

        </div>


        {/* CARD 3 */}
        <div className="data-capability-card">

          <div className="data-card-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3z" />
              <path d="M9.5 12a2.5 2.5 0 1 0 5 0" />
              <path d="M12 9.5v5" />
            </svg>
          </div>

          <h3>
            Strict Governance
          </h3>

          <p>
            Security and compliance are built into the bedrock of our platform.
            Automated lineage tracking, role-based access control, and
            continuous auditing ensure your data remains pristine and
            protected.
          </p>

        </div>

      </section>


      {/* ================= VISUALIZING FLOW ================= */}
      <section className="data-flow-section">

        <div className="data-flow-content">

          <h2>
            Visualizing the Flow
          </h2>

          <p>
            We don't just move data; we orchestrate it. Watch as raw inputs
            are cleansed, validated, and aligned into the crystalline pillar
            structure, ready for enterprise consumption.
          </p>


          {/* INGESTION RATE */}
          <div className="data-metric">

            <div className="data-metric-left">

              <span className="data-metric-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 5v14" />
                  <path d="M17 5v14" />
                  <path d="M7 5l4 4" />
                  <path d="M7 19l4-4" />
                  <path d="M17 5l-4 4" />
                  <path d="M17 19l-4-4" />
                </svg>
              </span>

              <span>
                Ingestion Rate
              </span>

            </div>

            <strong>
              4.2M / sec
            </strong>

          </div>


          {/* DATA PURITY */}
          <div className="data-metric">

            <div className="data-metric-left">

              <span className="data-metric-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>

              <span>
                Data Purity
              </span>

            </div>

            <strong>
              99.99%
            </strong>

          </div>

        </div>


        {/* FLOW IMAGE */}
        <div className="data-flow-image-box">

          <img
            src="https://dfttelecom.com/cdn/shop/files/www.dfttelecom.com.jpg?v=1764510103&width=1500"
            alt="Enterprise Data Flow"
            className="data-flow-image"
          />

        </div>

      </section>


      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .data-orchestration-page {
          width: 100%;
          min-height: 100vh;
          background: #f7f8fa;
          color: #171717;
          font-family: "Inter", sans-serif;
          padding: 0 28px 60px;
        }


        /* ================= HERO ================= */

        .data-orchestration-hero {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 500px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 0 0 7px 7px;
        }

        .data-orchestration-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .data-orchestration-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(30, 12, 25, 0.85) 0%,
              rgba(30, 12, 25, 0.62) 50%,
              rgba(20, 20, 22, 0.68) 100%
            );
        }

        .data-orchestration-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 80px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .data-orchestration-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #f0dce7;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.3px;
        }

        .data-orchestration-eyebrow span {
          display: block;
          width: 25px;
          height: 2px;
          background: #f0dce7;
        }

        .data-orchestration-hero h1 {
          margin: 28px 0 0;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(44px, 5.2vw, 72px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          font-weight: 800;
        }

        .data-orchestration-hero h1 strong {
          color: #f39abd;
          font-weight: 800;
        }


        /* ================= SINGLE SOURCE ================= */

        .data-single-source {
          width: 100%;
          max-width: 850px;
          margin: 42px auto 75px;
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 25px;
        }

        .data-single-title {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .data-title-line {
          width: 4px;
          min-height: 85px;
          background: #8a0050;
          border-radius: 2px;
        }

        .data-single-title h2 {
          margin: 0;
          color: #760044;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 25px;
          line-height: 1.15;
          font-weight: 750;
          letter-spacing: -0.7px;
        }

        .data-single-text p {
          margin: 0;
          color: #786a70;
          font-size: 18px;
          line-height: 1.5;
        }


        /* ================= CARDS ================= */

        .data-capability-cards {
          width: 100%;
          max-width: 850px;
          margin: 0 auto 60px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .data-capability-card {
          min-height: 340px;
          padding: 28px 25px;
          background: #ffffff;
          border: 1px solid #e4e8ec;
          border-radius: 7px;
          box-shadow: 0 4px 18px rgba(20, 15, 20, 0.025);
        }

        .data-card-icon {
          width: 40px;
          height: 40px;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fbf0f6;
          border-radius: 3px;
          color: #87004c;
        }

        .data-card-icon svg {
          width: 21px;
          height: 21px;
        }

        .data-capability-card h3 {
          margin: 0 0 17px;
          color: #202020;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          line-height: 1.2;
          font-weight: 750;
          letter-spacing: -0.4px;
        }

        .data-capability-card p {
          margin: 0;
          color: #76696e;
          font-size: 13px;
          line-height: 1.52;
        }


        /* ================= FLOW ================= */

        .data-flow-section {
          width: 100%;
          max-width: 850px;
          min-height: 385px;
          margin: 0 auto;
          padding: 38px 30px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 28px;
          align-items: center;
          background: #eef0f2;
          border-radius: 14px;
          border: 1px solid #e5e7e9;
        }

        .data-flow-content {
          min-width: 0;
        }

        .data-flow-content h2 {
          margin: 0 0 16px;
          color: #202020;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 750;
          letter-spacing: -0.8px;
        }

        .data-flow-content p {
          max-width: 390px;
          margin: 0 0 27px;
          color: #76696e;
          font-size: 15px;
          line-height: 1.5;
        }

        .data-metric {
          min-height: 55px;
          border-bottom: 1px solid #dce0e3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .data-metric-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #343034;
          font-size: 11px;
          font-weight: 700;
        }

        .data-metric-icon {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b0050;
        }

        .data-metric-icon svg {
          width: 17px;
          height: 17px;
        }

        .data-metric strong {
          color: #252225;
          font-size: 14px;
          white-space: nowrap;
        }

        .data-flow-image-box {
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 5px;
          background: #ffffff;
          border: 1px solid #e4e7e9;
        }

        .data-flow-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .data-orchestration-page {
            padding-left: 20px;
            padding-right: 20px;
          }

          .data-orchestration-hero {
            height: 450px;
          }

          .data-orchestration-hero-content {
            padding: 70px 40px;
          }

          .data-orchestration-hero h1 {
            font-size: clamp(39px, 6vw, 58px);
          }

          .data-single-source {
            max-width: 800px;
          }

          .data-capability-cards {
            max-width: 800px;
          }

          .data-flow-section {
            max-width: 800px;
            grid-template-columns: 1fr 270px;
          }

          .data-flow-image-box {
            height: 270px;
          }
        }


        /* ================= MOBILE ================= */

        @media (max-width: 650px) {

          .data-orchestration-page {
            padding: 0 14px 40px;
          }

          .data-orchestration-hero {
            height: 500px;
          }

          .data-orchestration-hero-content {
            padding: 55px 25px;
          }

          .data-orchestration-eyebrow {
            font-size: 9px;
          }

          .data-orchestration-eyebrow span {
            width: 20px;
          }

          .data-orchestration-hero h1 {
            margin-top: 23px;
            font-size: clamp(34px, 9vw, 48px);
            line-height: 1.07;
            letter-spacing: -1.5px;
          }


          .data-single-source {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin: 35px auto 55px;
          }

          .data-single-title h2 {
            font-size: 24px;
          }

          .data-title-line {
            min-height: 82px;
          }

          .data-single-text p {
            font-size: 15px;
            line-height: 1.55;
          }


          .data-capability-cards {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 35px;
          }

          .data-capability-card {
            min-height: auto;
            padding: 25px 22px;
          }

          .data-card-icon {
            margin-bottom: 18px;
          }

          .data-capability-card h3 {
            font-size: 19px;
          }

          .data-capability-card p {
            font-size: 13px;
          }


          .data-flow-section {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 25px;
            padding: 28px 22px;
            min-height: auto;
          }

          .data-flow-content h2 {
            font-size: 25px;
          }

          .data-flow-content p {
            font-size: 14px;
          }

          .data-flow-image-box {
            width: 100%;
            height: 290px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 420px) {

          .data-orchestration-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .data-orchestration-hero {
            height: 450px;
          }

          .data-orchestration-hero-content {
            padding-left: 20px;
            padding-right: 20px;
          }

          .data-orchestration-hero h1 {
            font-size: 31px;
            letter-spacing: -1px;
          }

          .data-single-title h2 {
            font-size: 22px;
          }

          .data-single-text p {
            font-size: 14px;
          }

          .data-capability-card {
            padding: 22px 19px;
          }

          .data-flow-section {
            padding: 25px 18px;
          }

          .data-flow-image-box {
            height: 250px;
          }

        }

      `}</style>
    </div>
  );
}