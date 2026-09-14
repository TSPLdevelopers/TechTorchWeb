import React from "react";

export default function AdvisoryBottomFeatures() {
  return (
    <section className="advisory-bottom-features">

      {/* 01 */}
      <div className="bottom-feature">
        <div className="bottom-feature-icon">
          ♧
        </div>

        <h3>
          Zero Data Ingestion
        </h3>

        <p>
          Read-only non-intrusive
          <br />
          diagnostic probes
        </p>
      </div>


      {/* 02 */}
      <div className="bottom-feature">
        <div className="bottom-feature-icon">
          ♙
        </div>

        <h3>
          CISSP &amp; CISM Leadership
        </h3>

        <p>
          Direct oversight by senior
          <br />
          practitioners
        </p>
      </div>


      {/* 03 */}
      <div className="bottom-feature">
        <div className="bottom-feature-icon">
          ⚡
        </div>

        <h3>
          Scale at Speed™
        </h3>

        <p>
          Proven engineering
          <br />
          mobilization methodology
        </p>
      </div>


      {/* 04 */}
      <div className="bottom-feature">
        <div className="bottom-feature-icon">
          ⚖
        </div>

        <h3>
          Institutional Compliance
        </h3>

        <p>
          ISO 27001, SOC 2 Type II,
          <br />
          FedRAMP alignment
        </p>
      </div>


      <style>{`

        .advisory-bottom-features {
          width: 100%;

          display: grid;
          grid-template-columns: repeat(4, 1fr);

          gap: 32px;

          padding: 40px 50px 38px;

          background: #ffffff;

          border-top: 1px solid #eeeeee;

          font-family: "Inter", sans-serif;
        }


        .bottom-feature {
          min-width: 0;

          text-align: center;
        }


        .bottom-feature-icon {
          width: 28px;
          height: 28px;

          margin: 0 auto 9px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #74123f;

          font-size: 21px;

          line-height: 1;
        }


        .bottom-feature h3 {
          margin: 0 0 7px;

          color: #282b32;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 14px;

          line-height: 1.25;

          font-weight: 700;
        }


        .bottom-feature p {
          margin: 0;

          color: #756c72;

          font-size: 8px;

          line-height: 1.5;

          font-weight: 600;

          letter-spacing: 1.35px;
        }


        /* =========================
           HOVER
        ========================= */

        .bottom-feature {
          transition: transform 0.3s ease;
        }


        .bottom-feature:hover {
          transform: translateY(-3px);
        }


        .bottom-feature:hover .bottom-feature-icon {
          color: #970052;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 850px) {

          .advisory-bottom-features {
            grid-template-columns: repeat(2, 1fr);

            gap: 30px 20px;

            padding: 34px 28px;
          }


          .bottom-feature h3 {
            font-size: 13px;
          }


          .bottom-feature p {
            font-size: 8px;
          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 550px) {

          .advisory-bottom-features {
            grid-template-columns: repeat(2, 1fr);

            gap: 25px 12px;

            padding: 30px 14px;
          }


          .bottom-feature-icon {
            width: 25px;
            height: 25px;

            font-size: 18px;
          }


          .bottom-feature h3 {
            font-size: 11px;

            line-height: 1.3;
          }


          .bottom-feature p {
            font-size: 7px;

            line-height: 1.45;

            letter-spacing: 0.9px;
          }

        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 380px) {

          .advisory-bottom-features {
            grid-template-columns: 1fr;

            gap: 23px;

            padding: 28px 15px;
          }


          .bottom-feature h3 {
            font-size: 12px;
          }

        }

      `}</style>
    </section>
  );
}