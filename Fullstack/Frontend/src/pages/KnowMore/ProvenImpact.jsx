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

              <h3>IoT-Driven Yield Optimization</h3>

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


      {/* ================= CSS ================= */}

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .proven-impact-section {
          width: 100%;
          background: #730042;
          box-sizing: border-box;
          overflow: hidden;

          /* SAME AS FOOTER */
          padding: 40px 16px;
        }


        /* =====================================================
           FOOTER ALIGNMENT
        ===================================================== */

        @media (min-width: 640px) {
          .proven-impact-section {
            padding: 48px 24px;
          }
        }

        @media (min-width: 768px) {
          .proven-impact-section {
            padding: 56px 40px;
          }
        }

        @media (min-width: 1024px) {
          .proven-impact-section {
            padding: 64px 100px;
          }
        }

        @media (min-width: 1280px) {
          .proven-impact-section {
            padding: 80px 100px;
          }
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .proven-impact-container {
          width: 100%;
          margin: 0;
          padding: 0;
        }


        /* =====================================================
           HEADER
        ===================================================== */

        .proven-impact-header {
          width: 100%;

          display: flex;
          align-items: flex-end;
          justify-content: space-between;

          gap: 25px;
          margin-bottom: 20px;
        }

        .proven-impact-title-wrap {
          min-width: 0;
        }


        /* =====================================================
           LABEL
        ===================================================== */

        .proven-impact-label {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 8px;
        }

        .proven-impact-label span {
          display: block;

          width: 3px;
          height: 17px;

          background: #ffffff;
        }

        .proven-impact-label p {
          margin: 0;

          color: #ffffff;

          font-size: 12px;
          font-weight: 420;

          letter-spacing: 1.4px;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .proven-impact-title-wrap h2 {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 34px;
          line-height: 1.05;

          font-weight: 500;

          letter-spacing: -1.4px;

          opacity: 0.9;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .proven-impact-subtitle {
          margin: 8px 0 0;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 16px;
          line-height: 1.4;

          font-weight: 400;

          opacity: 0.9;
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

          font-family: "Inter", sans-serif;

          font-size: 13px;
          font-weight: 500;

          cursor: pointer;

          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .view-industries-btn:hover {
          background: rgba(255, 255, 255, 0.08);

          border-color: rgba(255, 255, 255, 0.5);
        }


        /* =====================================================
           CARD GRID
           
           EXACT SAME LEFT/RIGHT ALIGNMENT AS FOOTER
           
           Footer:
           mobile  = 16px
           sm       = 24px
           md       = 40px
           lg       = 100px
           
           Grid = 100%
        ===================================================== */

        .proven-impact-grid {
          width: 100%;
          margin: 0;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr)
            minmax(0, 0.92fr);

          column-gap: 30px;
          row-gap: 40px;
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

          box-sizing: border-box;
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .impact-image-wrap {
          position: relative;

          width: 100%;
          height: 200px;

          overflow: hidden;
        }

        .impact-image {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          margin: 0;
          padding: 0;

          border: 0;
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

          font-family: "Inter", sans-serif;

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

          box-sizing: border-box;
        }

        .impact-card-content h3 {
          margin: 0;

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 20px;
          line-height: 1.23;

          font-weight: 500;

          letter-spacing: -0.3px;

          opacity: 0.9;
        }

        .impact-card-content p {
          margin: 8px 0 0;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 16px;
          line-height: 1.42;

          font-weight: 400;

          opacity: 0.9;
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

          font-family: "Inter", sans-serif;

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

          background: linear-gradient(
            to bottom right,
            #70154f 0%,
            #4a123d 50%,
            #241126 100%
          );

          box-sizing: border-box;
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

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 24px;
          line-height: 1.2;

          font-weight: 500;
        }

        .more-industries-card p {
          margin: 9px 0 0;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 17px;
          line-height: 1.5;

          font-weight: 400;
        }

        .more-industries-card a {
          margin-top: 17px;

          color: #ffffff;

          font-family: "Inter", sans-serif;

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

          .proven-impact-grid {
            width: 100%;
            margin: 0;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr)
              minmax(0, 0.92fr);

            column-gap: 24px;
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
           TABLET
        ===================================================== */

        @media (max-width: 950px) and (min-width: 701px) {

          .proven-impact-header {
            flex-direction: row;

            align-items: flex-end;
            justify-content: space-between;

            gap: 18px;
          }

          .view-industries-btn {
            align-self: flex-end;

            margin-left: auto;
          }

          .proven-impact-grid {
            width: 100%;
            margin: 0;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr)
              minmax(0, 1fr);

            column-gap: 18px;
            row-gap: 0;
          }

          .impact-image-wrap {
            height: 175px;
          }

          .impact-card-content {
            min-height: 190px;

            padding: 14px;
          }

          .impact-card-content h3 {
            font-size: 18px;

            line-height: 1.2;
          }

          .impact-card-content p {
            font-size: 14px;

            line-height: 1.4;
          }

          .impact-tags {
            gap: 5px;

            margin-top: 10px;
          }

          .impact-tags span {
            font-size: 9px;

            padding: 5px 6px;
          }

          .impact-image-label {
            left: 12px;
            bottom: 11px;

            font-size: 11px;
          }

          .industry-icon {
            font-size: 15px;
          }

          .more-industries-card {
            min-height: 365px;

            padding: 20px 12px;
          }

          .more-industries-card h3 {
            font-size: 20px;
          }

          .more-industries-card p {
            font-size: 14px;

            line-height: 1.45;
          }

          .more-industries-card a {
            font-size: 12px;

            margin-top: 14px;
          }

          .more-industries-icon {
            width: 50px;
            height: 50px;

            margin-bottom: 12px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .proven-impact-header {
            flex-direction: column;

            align-items: stretch;
            justify-content: flex-start;

            gap: 18px;
          }

          .proven-impact-title-wrap {
            width: 100%;
          }

          .proven-impact-title-wrap h2 {
            font-size: 34px;

            overflow-wrap: break-word;
          }

          .proven-impact-subtitle {
            font-size: 15px;

            line-height: 1.45;

            max-width: 100%;
          }

          .desktop-break {
            display: none;
          }

          .view-industries-btn {
            width: 100%;

            min-width: 0;
          }

          .proven-impact-grid {
            width: 100%;
            margin: 0;

            grid-template-columns: 1fr;

            column-gap: 0;
            row-gap: 20px;
          }

          .impact-image-wrap {
            width: 100%;

            height: auto;

            aspect-ratio: 16 / 10;
          }

          .impact-image {
            width: 100%;
            height: 100%;

            object-fit: cover;
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
            min-height: 270px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

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
            width: 100%;

            height: auto;

            aspect-ratio: 16 / 10;
          }

          .impact-image {
            width: 100%;
            height: 100%;

            object-fit: cover;
          }

          .impact-image-label {
            left: 12px;
            bottom: 10px;

            font-size: 11px;
          }

          .industry-icon {
            font-size: 15px;
          }

          .impact-card-content {
            padding: 14px;
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


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 360px) {

          .proven-impact-header {
            gap: 16px;
          }

          .proven-impact-title-wrap h2 {
            font-size: 27px;

            line-height: 1.08;
          }

          .proven-impact-subtitle {
            font-size: 13px;

            line-height: 1.45;
          }

          .impact-image-wrap {
            width: 100%;

            height: auto;

            aspect-ratio: 16 / 10;
          }

          .impact-image {
            width: 100%;
            height: 100%;

            object-fit: cover;
          }

          .impact-image-label {
            left: 12px;
            bottom: 10px;

            font-size: 11px;
          }

          .industry-icon {
            font-size: 15px;
          }

          .impact-card-content {
            padding: 14px;
          }

          .impact-card-content h3 {
            font-size: 18px;

            line-height: 1.2;
          }

          .impact-card-content p {
            font-size: 13px;

            line-height: 1.4;
          }
        }

      `}</style>
    </section>
  );
}