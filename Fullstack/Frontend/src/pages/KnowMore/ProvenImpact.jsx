import React from "react";

export default function ProvenImpact() {
  return (
    <section className="proven-impact-section">
      <div className="proven-impact-container">

        {/* ================= HEADER ================= */}
        <div className="proven-impact-header">

          <div className="proven-impact-title-wrap">
            <div className="proven-impact-label">
              <span></span>
              <p>PROVEN IMPACT</p>
            </div>

            <h2>Domain Expertise Applied</h2>

            <p className="proven-impact-subtitle">
              Precision engineering tailored to the unique regulatory,
              <br className="desktop-break" />
              scale, and operational demands of distinct industries.
            </p>
          </div>

          <button className="view-industries-btn">
            View All Industries
          </button>

        </div>


        {/* ================= CARDS ================= */}
        <div className="proven-impact-grid">

          {/* ================= MANUFACTURING ================= */}
          <div className="impact-card">

            <div className="impact-image-wrap">
              <img
                src="/Proven Impact1.png"
                alt="Manufacturing"
                className="impact-image"
              />

              <div className="impact-image-label">
                <span className="industry-icon">⚙</span>
                <span>Manufacturing</span>
              </div>
            </div>

            <div className="impact-card-content">

              <h3>
                IoT-Driven Yield Optimization
              </h3>

              <p>
                Implemented real-time edge computing pipelines
                processing 4M+ telemetry...
              </p>

              <div className="impact-tags">
                <span>Edge Computing</span>
                <span>Telemetry</span>
              </div>

            </div>
          </div>


          {/* ================= FINANCIAL SERVICES ================= */}
          <div className="impact-card">

            <div className="impact-image-wrap">
              <img
                src="/Proven Impact2.png"
                alt="Financial Services"
                className="impact-image"
              />

              <div className="impact-image-label">
                <span className="industry-icon">♜</span>
                <span>Financial Services</span>
              </div>
            </div>

            <div className="impact-card-content">

              <h3>
                Sub-Millisecond
                <br />
                Reconciliation
              </h3>

              <p>
                Architected a distributed ledger system replacing
                legacy mainframe batch jobs,
              </p>

              <div className="impact-tags">
                <span>Distributed Ledger</span>
                <span>Event-Driven</span>
              </div>

            </div>
          </div>


          {/* ================= MORE INDUSTRIES ================= */}
          <div className="more-industries-card">

            <div className="more-industries-icon">
              <span>△</span>
              <span>○</span>
              <span>□</span>
            </div>

            <h3>More Industries</h3>

            <p>
              Healthcare, Retail,
              <br />
              Logistics, and Telecom
              <br />
              architectures.
            </p>

            <a href="#">
              Explore Case Studies →
            </a>

          </div>

        </div>
      </div>


      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =====================================================
           SECTION
        ===================================================== */

        .proven-impact-section {
          width: 100%;
          background: #85003f;
          padding: 20px 0 38px;
          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .proven-impact-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .proven-impact-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 20px;
        }


        .proven-impact-title-wrap {
          transform: translateX(-35px);
        }


        .proven-impact-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }


        .proven-impact-label span {
          width: 3px;
          height: 17px;
          background: #ffffff;
          display: block;
        }


        .proven-impact-label p {
          margin: 0;
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 1.4px;
        }


        /* =====================================================
           TITLE
        ===================================================== */

        .proven-impact-title-wrap h2 {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 36px;

          line-height: 1.05;

          font-weight: 700;

          letter-spacing: -1.4px;
        }


        .proven-impact-subtitle {
          margin: 8px 0 0;

          color: #ffffff;

          font-size: 16px;

          line-height: 1.4;

          font-weight: 400;
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .view-industries-btn {
          flex-shrink: 0;

          min-width: 180px;

          height: 44px;

          padding: 0 22px;

          background: transparent;

          border: 1px solid rgba(255, 255, 255, 0.28);

          color: #ffffff;

          font-size: 13px;

          font-weight: 500;

          cursor: pointer;

          transition: all 0.25s ease;
        }


        .view-industries-btn:hover {
          background: rgba(255, 255, 255, 0.08);

          border-color: rgba(255, 255, 255, 0.5);
        }


        /* =====================================================
           GRID
        ===================================================== */

        .proven-impact-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 0.92fr)
            minmax(0, 0.88fr);

          /* MORE GAP */
          column-gap: 40px;
          row-gap: 40px;

          transform: translateX(-35px);

          width: calc(100% - 35px);
        }


        /* =====================================================
           NORMAL CARD
        ===================================================== */

        .impact-card {
          min-width: 0;

          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.18);

          border-radius: 8px;

          background: #951554;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .impact-image-wrap {
          position: relative;

          width: 100%;

          /* IMAGE SIZE SAME */
          height: 200px;

          overflow: hidden;
        }


        .impact-image {
          display: block;

          width: 100%;

          height: 100%;

          object-fit: cover;

          object-position: center;
        }


        .impact-image-wrap::after {
          content: "";

          position: absolute;

          inset: 0;

          background: linear-gradient(
            to bottom,
            transparent 45%,
            rgba(0, 0, 0, 0.52) 100%
          );

          pointer-events: none;
        }


        /* =====================================================
           IMAGE LABEL
        ===================================================== */

        .impact-image-label {
          position: absolute;

          left: 16px;

          bottom: 13px;

          z-index: 2;

          display: flex;

          align-items: center;

          gap: 8px;

          color: #ffffff;

          font-size: 13px;

          font-weight: 500;
        }


        .industry-icon {
          color: #ffffff;

          font-size: 17px;

          line-height: 1;
        }


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .impact-card-content {
          min-height: 200px;

          padding: 15px 16px 13px;
        }


        .impact-card-content h3 {
          margin: 0;

          color: #ffffff;

          font-size: 22px;

          line-height: 1.23;

          font-weight: 500;

          letter-spacing: -0.3px;
        }


        .impact-card-content p {
          margin: 8px 0 0;

          color: #ffffff;

          font-size: 16px;

          line-height: 1.42;

          font-weight: 400;
        }


        /* =====================================================
           TAGS
        ===================================================== */

        .impact-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 6px;

          margin-top: 12px;
        }


        .impact-tags span {
          padding: 5px 8px;

          background: rgba(255, 255, 255, 0.12);

          color: #ffffff;

          font-size: 10px;

          line-height: 1;

          border-radius: 2px;
        }


        /* =====================================================
           MORE INDUSTRIES
        ===================================================== */

        .more-industries-card {
          min-height: 400px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 24px 18px;

          border: 1px solid rgba(255, 255, 255, 0.18);

          border-radius: 8px;

          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(255, 255, 255, 0.05),
              transparent 55%
            ),
            #270f28;
        }


        .more-industries-icon {
          position: relative;

          width: 56px;

          height: 56px;

          display: flex;

          align-items: center;

          justify-content: center;

          margin-bottom: 14px;

          border-radius: 10px;

          background: rgba(255, 255, 255, 0.08);

          border: 1px solid rgba(255, 255, 255, 0.12);

          color: #ffffff;
        }


        .more-industries-icon span:nth-child(1) {
          position: absolute;

          top: 10px;

          left: 21px;

          font-size: 14px;
        }


        .more-industries-icon span:nth-child(2) {
          position: absolute;

          bottom: 10px;

          left: 13px;

          font-size: 11px;
        }


        .more-industries-icon span:nth-child(3) {
          position: absolute;

          bottom: 10px;

          right: 12px;

          font-size: 11px;
        }


        .more-industries-card h3 {
          margin: 0;

          color: #ffffff;

          font-size: 24px;

          line-height: 1.2;

          font-weight: 500;
        }


        .more-industries-card p {
          margin: 9px 0 0;

          color: #ffffff;

          font-size: 17px;

          line-height: 1.5;

          font-weight: 400;
        }


        .more-industries-card a {
          margin-top: 17px;

          color: #ffffff;

          text-decoration: none;

          font-size: 13px;

          font-weight: 500;
        }


        .more-industries-card a:hover {
          text-decoration: underline;
        }


        /* =====================================================
           1100px
        ===================================================== */

        @media (max-width: 1100px) {

          .proven-impact-container {
            max-width: 1100px;

            padding: 0 20px;
          }


          .proven-impact-title-wrap {
            transform: translateX(-25px);
          }


          .proven-impact-grid {
            transform: translateX(-25px);

            width: calc(100% - 25px);

            grid-template-columns:
              minmax(0, 0.92fr)
              minmax(0, 0.92fr)
              minmax(0, 0.88fr);

            /* TABLET GAP */
            column-gap: 30px;

            row-gap: 30px;
          }


          .proven-impact-title-wrap h2 {
            font-size: 39px;
          }


          .proven-impact-subtitle {
            font-size: 16px;
          }


          .impact-image-wrap {
            height: 190px;
          }


          .impact-card-content {
            min-height: 190px;
          }


          .impact-card-content h3 {
            font-size: 20px;
          }


          .impact-card-content p {
            font-size: 15px;
          }


          .more-industries-card {
            min-height: 380px;
          }
        }


        /* =====================================================
           950px
        ===================================================== */

        @media (max-width: 950px) {

          .proven-impact-header {
            align-items: flex-start;

            flex-direction: column;

            gap: 18px;
          }


          .proven-impact-title-wrap {
            transform: none;
          }


          .view-industries-btn {
            align-self: flex-start;
          }


          .proven-impact-grid {
            grid-template-columns: 1fr 1fr;

            transform: none;

            width: 100%;

            /* GAP */
            column-gap: 30px;

            row-gap: 30px;
          }


          .more-industries-card {
            grid-column: 1 / -1;

            min-height: 240px;
          }
        }


        /* =====================================================
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .proven-impact-section {
            padding: 24px 0 38px;
          }


          .proven-impact-container {
            padding: 0 20px;
          }


          .proven-impact-title-wrap h2 {
            font-size: 34px;
          }


          .proven-impact-subtitle {
            font-size: 15px;

            line-height: 1.45;
          }


          .desktop-break {
            display: none;
          }


          .view-industries-btn {
            width: 100%;
          }


          .proven-impact-grid {
            grid-template-columns: 1fr;

            transform: none;

            width: 100%;

            column-gap: 0;

            /* MOBILE GAP */
            row-gap: 20px;
          }


          .impact-image-wrap {
            height: 220px;
          }


          .impact-card-content {
            min-height: auto;

            padding: 16px;
          }


          .impact-card-content h3 {
            font-size: 22px;
          }


          .impact-card-content p {
            font-size: 15px;
          }


          .more-industries-card {
            grid-column: auto;

            min-height: 270px;
          }
        }


        /* =====================================================
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .proven-impact-section {
            padding: 22px 0 34px;
          }


          .proven-impact-container {
            padding: 0 16px;
          }


          .proven-impact-title-wrap h2 {
            font-size: 30px;

            letter-spacing: -0.8px;
          }


          .proven-impact-subtitle {
            font-size: 14px;
          }


          .proven-impact-label p {
            font-size: 10px;

            letter-spacing: 1.1px;
          }


          .impact-image-wrap {
            height: 200px;
          }


          .impact-card-content h3 {
            font-size: 20px;
          }


          .impact-card-content p {
            font-size: 14px;
          }


          .impact-tags span {
            font-size: 10px;
          }


          .more-industries-card {
            min-height: 250px;

            padding: 20px 15px;
          }


          .more-industries-card h3 {
            font-size: 22px;
          }


          .more-industries-card p {
            font-size: 15px;
          }


          .more-industries-icon {
            width: 52px;

            height: 52px;
          }
        }

      `}</style>
    </section>
  );
}