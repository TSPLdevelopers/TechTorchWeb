import React from "react";

const heroImage = "/ERPIntegration.png";

const capabilities = [
  {
    title: "Real-Time Visibility",
    text:
      "Eliminate data silos. Gain immediate, contextualized insights across your entire operational footprint, enabling proactive decision-making rather than reactive crisis management.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
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
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
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

      {/* =========================
          HERO
      ========================== */}

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


      {/* =========================
          CAPABILITY CARDS
      ========================== */}

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


      {/* =========================
          ARCHITECTURE SECTION
      ========================== */}

      <section className="erp-architecture">

        <div className="erp-architecture-image-wrap">

          <div className="erp-diagram-panel" />

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

        * {
          box-sizing: border-box;
        }

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
           DESKTOP / XL UNCHANGED
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
          background-size: 115% auto;
          background-position: center center;
          background-color: #dedfdd;
        }

        .erp-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,0.78) 0%,
              rgba(255,255,255,0.68) 28%,
              rgba(255,255,255,0.38) 58%,
              rgba(255,255,255,0.10) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0) 38%,
              rgba(255,255,255,0.78) 100%
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
          font-size: 44px;
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

          font-size: 15px;
          font-family: "Inter", sans-serif;
          line-height: 1.55;
          font-weight: 400;
          color: #685960;
        }


        /* =========================
           CAPABILITY CARDS
        ========================== */

        .erp-capabilities {
          width: 100%;

          padding:
            55px
            55px
            65px;
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
          min-height: 300px;
          height: 300px;

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
          width: 18px;
          height: 18px;
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

          font-size: 14px;
          font-family: "Inter", sans-serif;
          line-height: 1.55;

          color: #6b5a60;
        }


        /* =========================
           ARCHITECTURE
           DESKTOP / XL UNCHANGED
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

          background: transparent;
        }

        .erp-diagram-panel {
          position: absolute;

          width: 76%;
          height: 86%;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          background:
            linear-gradient(
              135deg,
              #ddd5db 0%,
              #e9e4e8 42%,
              #f5f2f4 100%
            );

          border: 1px solid #ddd6db;

          border-radius: 12px;

          z-index: 0;
        }

        .erp-network-overlay {
          position: absolute;

          width: 300px;
          height: 250px;

          left: 50%;
          top: 50%;

          transform: translate(-50%, -50%);

          z-index: 2;
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

          width: 129px;
          height: 0;

          left: 50%;
          top: 50%;

          transform-origin: left center;

          border-top: 3px dotted #b85b83;

          background: transparent;

          opacity: 0.8;

          z-index: 1;
        }

        .line-1 {
          transform:
            translateY(-50%)
            rotate(212.3deg);
        }

        .line-2 {
          transform:
            translateY(-50%)
            rotate(-32.3deg);
        }

        .line-3 {
          transform:
            translateY(-50%)
            rotate(147.7deg);
        }

        .line-4 {
          transform:
            translateY(-50%)
            rotate(32.3deg);
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

          z-index: 3;
        }

        .erp-data-card {
          top: 38px;
          right: 5px;
        }

        .erp-latency-card {
          bottom: 40px;
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

        .erp-architecture-content h2 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 28px;

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

          font-size: 14.5px;

          font-family: "Inter", sans-serif;

          line-height: 1.65;

          color: #685960;
        }

        .erp-architecture-content p + p {
          margin-top: 20px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) and (min-width: 901px) {

          .erp-hero-content {
            max-width: 100%;
            padding-left: 45px;
            padding-right: 45px;
          }

          .erp-capabilities {
            padding-left: 40px;
            padding-right: 40px;
          }

          .erp-capabilities-grid {
            max-width: 100%;
          }

          .erp-architecture {
            width: calc(100% - 80px);
            max-width: none;

            gap: 35px;

            padding-left: 30px;
            padding-right: 30px;
          }

        }


        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {

          .erp-hero {
            min-height: 430px;
          }

          .erp-hero-image {
            background-size: 120% auto;
          }

          .erp-hero-content {
            max-width: 100%;
            min-height: 430px;

            padding:
              80px
              35px
              60px;
          }

          .erp-hero-content h1 {
            font-size: 40px;
            max-width: 680px;
          }

          .erp-hero-content p {
            max-width: 650px;
            font-size: 15px;
          }


          .erp-capabilities {
            padding:
              50px
              35px
              60px;
          }

          .erp-capabilities-grid {
            max-width: 100%;
            gap: 16px;
          }

          .erp-capability-card {
            min-height: 300px;
            height: auto;

            padding:
              20px
              17px;
          }

          .erp-capability-card p {
            font-size: 14px;
          }


          .erp-architecture {
            width: calc(100% - 70px);
            max-width: none;

            min-height: 540px;

            padding:
              45px
              25px;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);

            gap: 30px;
          }

          .erp-architecture-image-wrap {
            min-width: 0;
            min-height: 390px;
          }

          .erp-diagram-panel {
            width: 82%;
            height: 84%;
          }

          .erp-network-overlay {
            width: 270px;
            height: 225px;
          }

          .erp-network-line {
            width: 115px;
          }

          .erp-data-card {
            top: 38px;
            right: 0;
          }

          .erp-latency-card {
            bottom: 40px;
            left: 0;
          }

          .erp-architecture-content {
            min-width: 0;
            padding-right: 5px;
          }

          .erp-architecture-content h2 {
            font-size: 27px;
          }

          .erp-architecture-content p {
            font-size: 14px;
          }
        }


        /* =====================================================
           MOBILE
           ===================================================== */

        @media (max-width: 650px) {

          .erp-hero {
            min-height: 540px;
          }

          .erp-hero-image {
            background-position: center center;
            background-size: 125% auto;
          }

          .erp-hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(255,255,255,0.82) 0%,
                rgba(255,255,255,0.72) 55%,
                rgba(255,255,255,0.28) 100%
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0) 40%,
                rgba(255,255,255,0.84) 100%
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

            max-width: 100%;

            font-size: 31px;

            line-height: 1.12;

            letter-spacing: -1px;
          }

          .erp-hero-content p {
            max-width: 100%;

            margin-top: 19px;

            font-size: 14px;

            line-height: 1.55;
          }


          /* =========================
             CAPABILITY CARDS
          ========================== */

          .erp-capabilities {
            padding:
              40px
              18px
              50px;
          }

          .erp-capabilities-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .erp-capability-card {
            width: 100%;

            min-height: auto;
            height: auto;

            padding: 20px;
          }

          .erp-capability-card h2 {
            font-size: 17px;
          }

          .erp-capability-card p {
            font-size: 14px;

            line-height: 1.55;
          }


          /* =========================
             MOBILE ARCHITECTURE
          ========================== */

          .erp-architecture {
            width: calc(100% - 36px);

            max-width: none;

            min-height: auto;

            margin:
              0
              auto
              45px;

            padding:
              35px
              18px;

            grid-template-columns: 1fr;

            gap: 25px;

            overflow: hidden;
          }

          .erp-architecture-image-wrap {
            width: 100%;
            min-width: 0;
            min-height: 300px;

            overflow: hidden;
          }

          /*
             The grey panel is kept inside the available
             mobile width so the network cannot escape.
          */
          .erp-diagram-panel {
            width: 88%;
            height: 82%;

            max-width: 330px;

            border-radius: 10px;
          }

          /*
             Network is scaled down as one unit.
             This keeps ALL four nodes inside the panel.
          */
          .erp-network-overlay {
            width: 250px;
            height: 205px;

            max-width: 72%;
            max-height: 72%;

            transform:
              translate(-50%, -50%)
              scale(0.88);

            transform-origin: center center;
          }

          .erp-network-center {
            width: 56px;
            height: 56px;

            font-size: 8px;
          }

          .erp-network-node {
            width: 38px;
            height: 38px;

            font-size: 7px;
          }

          .erp-node-sap {
            left: 18px;
            top: 30px;
          }

          .erp-node-oracle {
            right: 18px;
            top: 30px;
          }

          .erp-node-ms {
            left: 18px;
            bottom: 30px;
          }

          .erp-node-legacy {
            right: 18px;
            bottom: 30px;
          }

          .erp-network-line {
            width: 105px;
            border-top-width: 2px;
          }


          /*
             Cards stay within the diagram area.
          */
          .erp-data-card {
            top: 24px;
            right: 4px;

            padding:
              8px
              10px;

            max-width: 135px;
          }

          .erp-latency-card {
            left: 4px;
            bottom: 26px;

            padding:
              8px
              10px;
          }

          .erp-data-card span,
          .erp-latency-card span {
            font-size: 7px;
          }

          .erp-data-card strong,
          .erp-latency-card strong {
            font-size: 12px;
          }


          .erp-architecture-content {
            width: 100%;

            min-width: 0;

            padding-right: 0;
          }

          .erp-architecture-content h2 {
            font-size: 26px;

            line-height: 1.15;
          }

          .erp-architecture-content p {
            margin-top: 18px;

            font-size: 14px;

            line-height: 1.6;
          }

          .erp-architecture-content p + p {
            margin-top: 18px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .erp-hero {
            min-height: 550px;
          }

          .erp-hero-content {
            padding:
              65px
              18px
              55px;
          }

          .erp-hero-content h1 {
            font-size: 29px;
          }

          .erp-hero-content p {
            font-size: 13.5px;
          }


          .erp-capabilities {
            padding:
              35px
              14px
              45px;
          }

          .erp-capability-card {
            padding: 18px;
          }

          .erp-card-icon {
            margin-bottom: 17px;
          }


          .erp-architecture {
            width: calc(100% - 28px);

            padding:
              28px
              10px;

            gap: 22px;
          }

          .erp-architecture-image-wrap {
            min-height: 285px;
          }

          /*
             Smaller grey panel.
             The network is now safely contained.
          */
          .erp-diagram-panel {
            width: 86%;
            height: 80%;
          }

          .erp-network-overlay {
            width: 225px;
            height: 185px;

            max-width: 68%;
            max-height: 68%;

            transform:
              translate(-50%, -50%)
              scale(0.86);
          }

          .erp-network-center {
            width: 52px;
            height: 52px;

            font-size: 7px;
          }

          .erp-network-node {
            width: 34px;
            height: 34px;

            font-size: 6.5px;
          }

          .erp-node-sap {
            left: 17px;
            top: 28px;
          }

          .erp-node-oracle {
            right: 17px;
            top: 28px;
          }

          .erp-node-ms {
            left: 17px;
            bottom: 28px;
          }

          .erp-node-legacy {
            right: 17px;
            bottom: 28px;
          }

          .erp-network-line {
            width: 94px;
            border-top-width: 2px;
          }


          .erp-data-card {
            top: 20px;
            right: 2px;

            padding:
              7px
              9px;

            transform: scale(0.92);

            transform-origin: top right;
          }

          .erp-latency-card {
            left: 2px;
            bottom: 22px;

            padding:
              7px
              9px;

            transform: scale(0.92);

            transform-origin: bottom left;
          }

          .erp-data-card span,
          .erp-latency-card span {
            font-size: 6.5px;
          }

          .erp-data-card strong,
          .erp-latency-card strong {
            font-size: 11px;
          }


          .erp-architecture-content h2 {
            font-size: 24px;
          }

          .erp-architecture-content p {
            font-size: 13.5px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .erp-hero {
            min-height: 570px;
          }

          .erp-hero-image {
            background-size: 130% auto;
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
            width: calc(100% - 20px);

            padding-left: 8px;
            padding-right: 8px;
          }

          .erp-architecture-image-wrap {
            min-height: 265px;
          }

          /*
             At very small widths the complete diagram
             scales together, keeping every icon inside.
          */
          .erp-diagram-panel {
            width: 88%;
            height: 78%;
          }

          .erp-network-overlay {
            width: 205px;
            height: 170px;

            max-width: 64%;
            max-height: 64%;

            transform:
              translate(-50%, -50%)
              scale(0.80);
          }

          .erp-network-center {
            width: 48px;
            height: 48px;

            font-size: 6.5px;
          }

          .erp-network-node {
            width: 31px;
            height: 31px;

            font-size: 6px;
          }

          .erp-node-sap {
            left: 15px;
            top: 25px;
          }

          .erp-node-oracle {
            right: 15px;
            top: 25px;
          }

          .erp-node-ms {
            left: 15px;
            bottom: 25px;
          }

          .erp-node-legacy {
            right: 15px;
            bottom: 25px;
          }

          .erp-network-line {
            width: 84px;
            border-top-width: 2px;
          }


          .erp-data-card {
            right: 0;
            top: 18px;

            transform: scale(0.85);

            transform-origin: top right;
          }

          .erp-latency-card {
            left: 0;
            bottom: 19px;

            transform: scale(0.85);

            transform-origin: bottom left;
          }


          .erp-architecture-content h2 {
            font-size: 23px;
          }

          .erp-architecture-content p {
            font-size: 13px;
          }

        }


        /* =====================================================
           EXTRA SMALL DEVICES
        ===================================================== */

        @media (max-width: 320px) {

          .erp-hero {
            min-height: 590px;
          }

          .erp-hero-content {
            padding-left: 14px;
            padding-right: 14px;
          }

          .erp-hero-content h1 {
            font-size: 26px;
          }


          .erp-capability-card {
            padding: 16px;
          }


          .erp-architecture {
            width: calc(100% - 14px);

            padding-left: 6px;
            padding-right: 6px;
          }

          .erp-architecture-image-wrap {
            min-height: 245px;
          }

          /*
             Final containment for 320px and below.
          */
          .erp-diagram-panel {
            width: 90%;
            height: 76%;
          }

          .erp-network-overlay {
            width: 185px;
            height: 155px;

            max-width: 60%;
            max-height: 60%;

            transform:
              translate(-50%, -50%)
              scale(0.72);
          }

          .erp-network-center {
            width: 44px;
            height: 44px;

            font-size: 6px;
          }

          .erp-network-node {
            width: 28px;
            height: 28px;

            font-size: 5.5px;
          }

          .erp-node-sap {
            left: 14px;
            top: 23px;
          }

          .erp-node-oracle {
            right: 14px;
            top: 23px;
          }

          .erp-node-ms {
            left: 14px;
            bottom: 23px;
          }

          .erp-node-legacy {
            right: 14px;
            bottom: 23px;
          }

          .erp-network-line {
            width: 75px;
            border-top-width: 2px;
          }


          .erp-data-card {
            right: 0;
            top: 15px;

            transform: scale(0.78);

            transform-origin: top right;
          }

          .erp-latency-card {
            left: 0;
            bottom: 16px;

            transform: scale(0.78);

            transform-origin: bottom left;
          }

        }

      `}</style>

    </div>
  );
}