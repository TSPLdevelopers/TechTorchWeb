import React from "react";

const heroImage =
  "/ERPIntegration.png";

const architectureImage =
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85";

const capabilities = [
  {
    title: "Real-Time Visibility",
    text:
      "Eliminate data silos. Gain immediate, contextualized insights across your entire operational footprint, enabling proactive decision-making rather than reactive crisis management.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Automated Reconciliation",
    text:
      "Streamline financial operations. Automate complex reconciliation processes between disparate ledgers, reducing manual effort, minimizing errors, and accelerating period-end close.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20h16" />
        <path d="M6 17h12" />
        <path d="M7 17V9h10v8" />
        <path d="M5 9h14" />
        <path d="m8 6 4-3 4 3" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Transparency",
    text:
      "Connect procurement, inventory, and logistics systems. Achieve end-to-end traceability, optimize inventory holding costs, and build a resilient supply network capable of adapting to disruption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="14" rx="1.5" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M15 16h3" />
      </svg>
    ),
  },
];

export default function ERPIntegration() {
  return (
    <div className="erp-page">

      <section className="erp-hero">

        <div
          className="erp-hero-image"
          style={{
            backgroundImage: `url("${heroImage}")`,
          }}
        />

        <div className="erp-hero-overlay" />

        <div className="erp-hero-content">

          <div className="erp-eyebrow">
            <span className="erp-eyebrow-icon">✣</span>
            <span>CORE CAPABILITY</span>
          </div>

          <h1>
            Seamless ERP Integration:
            <br />
            The Backbone of Connected
            <br />
            Operations
          </h1>

          <p>
            Bridge the gap between disparate enterprise systems. TechTorch
            establishes a unified data flow across SAP, Oracle, Microsoft, and
            legacy platforms, transforming fragmented operations into a
            cohesive, intelligent nervous system.
          </p>

        </div>

      </section>

      <section className="erp-capabilities">

        <div className="erp-capabilities-grid">

          {capabilities.map((item) => (
            <article
              className="erp-capability-card"
              key={item.title}
            >

              <div className="erp-card-icon">
                {item.icon}
              </div>

              <h2>{item.title}</h2>

              <p>{item.text}</p>

            </article>
          ))}

        </div>

      </section>

      <section className="erp-architecture">

        <div className="erp-architecture-image-wrap">

          <div
            className="erp-architecture-image"
            style={{
              backgroundImage: `url("${architectureImage}")`,
            }}
          />

          <div className="erp-network-overlay">

            <div className="erp-network-center">
              TechTorch
            </div>

            <div className="erp-network-node erp-node-sap">
              SAP
            </div>

            <div className="erp-network-node erp-node-oracle">
              Oracle
            </div>

            <div className="erp-network-node erp-node-ms">
              MSFT
            </div>

            <div className="erp-network-node erp-node-legacy">
              Legacy
            </div>

            <div className="erp-network-line line-1" />
            <div className="erp-network-line line-2" />
            <div className="erp-network-line line-3" />
            <div className="erp-network-line line-4" />

          </div>

          <div className="erp-data-card">
            <span>DATA THROUGHPUT</span>
            <strong>2.4M msg/sec</strong>
          </div>

          <div className="erp-latency-card">
            <span>LATENCY</span>
            <strong>&lt; 10ms</strong>
          </div>

        </div>

        <div className="erp-architecture-content">

          <div className="erp-section-label">
            ENTERPRISE ARCHITECTURE
          </div>

          <h2>
            Architected for
            <br />
            Complexity
          </h2>

          <p>
            Modern enterprises run on a patchwork of systems assembled over
            decades. Ripping and replacing is rarely viable. TechTorch
            approaches integration as an orchestration layer, sitting above
            your existing ERPs to harmonize data without disrupting core
            transactional systems.
          </p>

          <p>
            Through high-performance connectors and intelligent data mapping,
            we translate disparate schemas into a canonical model. This
            unified language enables cross-system workflows, ensuring that an
            order placed in SAP instantly reflects in your legacy warehouse
            management system and Oracle financials.
          </p>

        </div>

      </section>

      <style>{`

        .erp-page {
          width: 100%;
          min-height: 100vh;
          background: #f7f8fa;
          color: #171717;
          font-family: "Inter", sans-serif;
          overflow: hidden;
        }

        /* =========================
           HERO
        ========================== */

        .erp-hero {
          position: relative;
          width: 100%;
          min-height: 470px;
          overflow: hidden;
          background: #dedfdd;
        }

        .erp-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center center;
          background-color: #dedfdd;
        }

        .erp-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,0.96) 0%,
              rgba(255,255,255,0.88) 28%,
              rgba(255,255,255,0.56) 58%,
              rgba(255,255,255,0.16) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0) 38%,
              rgba(255,255,255,0.94) 100%
            );
        }

        .erp-hero-content {
          position: relative;
          z-index: 2;

          width: 100%;
          max-width: 1050px;
          min-height: 470px;

          margin: 0 auto;

          padding:
            105px
            55px
            75px;
        }

        .erp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding:
            7px
            12px;

          border-radius: 14px;

          background: rgba(247,226,235,0.82);

          color: #79123f;

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .erp-eyebrow-icon {
          font-size: 14px;
          line-height: 1;
        }

        .erp-hero-content h1 {
          max-width: 770px;

          margin:
            20px
            0
            0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 48px;
          line-height: 1.08;

          font-weight: 700;

          letter-spacing: -2px;

          color: #111111;
        }

        .erp-hero-content p {
          max-width: 760px;

          margin:
            24px
            0
            0;

          font-size: 17px;
          line-height: 1.55;

          font-weight: 400;

          color: #685960;
        }


        /* =========================
           CARDS
        ========================== */

        .erp-capabilities {
          width: 100%;

          padding:
            65px
            55px
            80px;
        }

        .erp-capabilities-grid {
          width: 100%;
          max-width: 1050px;

          margin: 0 auto;

          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 20px;
        }

        .erp-capability-card {
          min-height: 425px;

          padding:
            22px
            20px
            25px;

          background: #ffffff;

          border: 1px solid #e0e3e7;

          border-radius: 5px;

          box-shadow:
            0 2px 8px rgba(20,20,20,0.025);
        }

        .erp-card-icon {
          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          margin-bottom: 20px;

          border-radius: 5px;

          background: #faf0f5;

          color: #7c1646;
        }

        .erp-card-icon svg {
          width: 21px;
          height: 21px;
        }

        .erp-capability-card h2 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 17px;
          line-height: 1.25;

          font-weight: 700;

          color: #1a1a1a;
        }

        .erp-capability-card p {
          margin:
            14px
            0
            0;

          font-size: 16px;
          line-height: 1.55;

          color: #6b5a60;
        }


        /* =========================
           ARCHITECTURE
        ========================== */

        .erp-architecture {
          width: calc(100% - 110px);

          max-width: 1050px;

          min-height: 575px;

          margin:
            0
            auto
            80px;

          padding:
            60px
            25px;

          display: grid;

          grid-template-columns:
            1.05fr
            0.95fr;

          align-items: center;

          gap: 55px;

          background: #f1f1f1;
        }

        .erp-architecture-image-wrap {
          position: relative;

          width: 100%;

          min-height: 390px;

          display: flex;

          align-items: center;
          justify-content: center;
        }

        .erp-architecture-image {
          width: 100%;

          max-width: 470px;

          height: 320px;

          border-radius: 10px;

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;

          opacity: 0.18;

          filter: saturate(0.5);
        }


        /* =========================
           NETWORK
        ========================== */

        .erp-network-overlay {
          position: absolute;

          width: 300px;
          height: 250px;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);
        }

        .erp-network-center,
        .erp-network-node {
          position: absolute;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          font-family: "Inter", sans-serif;

          font-weight: 700;
        }

        .erp-network-center {
          width: 62px;
          height: 62px;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          background: #8a0048;

          color: #ffffff;

          font-size: 9px;

          z-index: 3;
        }

        .erp-network-node {
          width: 42px;
          height: 42px;

          background: #ffffff;

          color: #5e5055;

          font-size: 8px;

          border: 1px solid #ded8dc;

          z-index: 3;
        }

        .erp-node-sap {
          left: 20px;
          top: 35px;
        }

        .erp-node-oracle {
          right: 20px;
          top: 35px;
        }

        .erp-node-ms {
          left: 20px;
          bottom: 35px;
        }

        .erp-node-legacy {
          right: 20px;
          bottom: 35px;
        }

        .erp-network-line {
          position: absolute;

          width: 115px;
          height: 1px;

          left: 50%;
          top: 50%;

          transform-origin: left center;

          background: #b85b83;

          opacity: 0.65;

          z-index: 1;
        }

        .line-1 {
          transform:
            translateY(-50%)
            rotate(202deg);
        }

        .line-2 {
          transform:
            translateY(-50%)
            rotate(-22deg);
        }

        .line-3 {
          transform:
            translateY(-50%)
            rotate(158deg);
        }

        .line-4 {
          transform:
            translateY(-50%)
            rotate(22deg);
        }


        /* =========================
           DATA CARDS
        ========================== */

        .erp-data-card,
        .erp-latency-card {
          position: absolute;

          display: flex;
          flex-direction: column;

          padding:
            10px
            13px;

          background: #ffffff;

          border-radius: 2px;

          box-shadow:
            0 8px 25px rgba(40,20,30,0.12);
        }

        .erp-data-card {
          top: 25px;
          right: 5px;
        }

        .erp-latency-card {
          bottom: 25px;
          left: 0;
        }

        .erp-data-card span,
        .erp-latency-card span {
          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.8px;

          color: #83777b;
        }

        .erp-data-card strong,
        .erp-latency-card strong {
          margin-top: 4px;

          font-size: 14px;

          color: #74113e;
        }


        /* =========================
           ARCHITECTURE TEXT
        ========================== */

        .erp-architecture-content {
          padding-right: 20px;
        }

        .erp-section-label {
          margin-bottom: 14px;

          color: #7a1338;

          font-size: 9px;

          font-weight: 700;

          letter-spacing: 1.5px;
        }

        .erp-architecture-content h2 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 29px;

          line-height: 1.15;

          font-weight: 700;

          letter-spacing: -1px;

          color: #171717;
        }

        .erp-architecture-content p {
          margin:
            22px
            0
            0;

          font-size: 15px;

          line-height: 1.65;

          color: #685960;
        }

        .erp-architecture-content p + p {
          margin-top: 20px;
        }


        /* =========================
           TABLET
        ========================== */

        @media (max-width: 900px) {

          .erp-hero {
            min-height: 430px;
          }

          .erp-hero-content {
            min-height: 430px;

            padding:
              85px
              35px
              65px;
          }

          .erp-hero-content h1 {
            font-size: 40px;
            max-width: 650px;
          }

          .erp-hero-content p {
            max-width: 620px;
            font-size: 15px;
          }

          .erp-capabilities {
            padding:
              55px
              35px
              65px;
          }

          .erp-capabilities-grid {
            gap: 15px;
          }

          .erp-capability-card {
            min-height: 390px;

            padding:
              20px
              16px;
          }

          .erp-capability-card p {
            font-size: 14px;
          }

          .erp-architecture {
            width: calc(100% - 70px);

            grid-template-columns:
              1fr
              1fr;

            gap: 30px;

            padding:
              45px
              25px;
          }
        }


        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 650px) {

          .erp-hero {
            min-height: 540px;
          }

          .erp-hero-image {
            background-position: center center;
            background-size: contain;
          }

          .erp-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255,255,255,0.97) 0%,
                rgba(255,255,255,0.88) 55%,
                rgba(255,255,255,0.38) 100%
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0) 40%,
                rgba(255,255,255,0.98) 100%
              );
          }

          .erp-hero-content {
            min-height: 540px;

            padding:
              70px
              22px
              60px;
          }

          .erp-eyebrow {
            font-size: 8px;

            padding:
              6px
              10px;
          }

          .erp-hero-content h1 {
            margin-top: 17px;

            font-size: 31px;

            line-height: 1.12;

            letter-spacing: -1px;
          }

          .erp-hero-content p {
            margin-top: 19px;

            font-size: 14px;

            line-height: 1.55;
          }

          .erp-capabilities {
            padding:
              45px
              18px
              55px;
          }

          .erp-capabilities-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .erp-capability-card {
            min-height: auto;

            padding: 20px;
          }

          .erp-capability-card p {
            font-size: 14px;

            line-height: 1.55;
          }

          .erp-architecture {
            width: calc(100% - 36px);

            min-height: auto;

            margin-bottom: 45px;

            padding:
              35px
              18px;

            grid-template-columns: 1fr;

            gap: 25px;
          }

          .erp-architecture-image-wrap {
            min-height: 290px;
          }

          .erp-architecture-image {
            height: 230px;
          }

          .erp-network-overlay {
            width: 270px;
            height: 220px;
          }

          .erp-data-card {
            right: 0;
            top: 12px;
          }

          .erp-latency-card {
            left: 0;
            bottom: 12px;
          }

          .erp-architecture-content {
            padding-right: 0;
          }

          .erp-architecture-content h2 {
            font-size: 26px;
          }

          .erp-architecture-content p {
            font-size: 14px;
          }
        }


        /* =========================
           SMALL MOBILE
        ========================== */

        @media (max-width: 380px) {

          .erp-hero {
            min-height: 570px;
          }

          .erp-hero-content {
            padding:
              60px
              17px
              50px;
          }

          .erp-hero-content h1 {
            font-size: 28px;
          }

          .erp-hero-content p {
            font-size: 13px;
          }

          .erp-capabilities {
            padding-left: 14px;
            padding-right: 14px;
          }

          .erp-architecture {
            width: calc(100% - 28px);
          }

          .erp-network-overlay {
            transform:
              translate(-50%, -50%)
              scale(0.88);
          }
        }

      `}</style>

    </div>
  );
}