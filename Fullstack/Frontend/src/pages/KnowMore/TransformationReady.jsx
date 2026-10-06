import React from "react";

export default function TransformationReady() {
  return (
    <section className="transformation-section">
      <div className="transformation-container">

        {/* ================= LEFT IMAGE ================= */}

        <div className="transformation-image-wrap">
          <div className="transformation-image-box">
            <img
              src="/Transformation Ready.png"
              alt="Transformation Ready"
              className="transformation-image"
            />
          </div>

          {/* ================= UPTIME CARD ================= */}

          <div className="uptime-card">
            <div className="uptime-icon">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 19L10 14L14 17L21.5 9.5"
                  stroke="#13875A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M16.5 9.5H21.5V14.5"
                  stroke="#13875A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="uptime-content">
              <strong>99.99%</strong>
              <span>Uptime Guarantee</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}

        <div className="transformation-content">

          <div className="transformation-label">
            <span></span>
            <p>TRANSFORMATION READY</p>
          </div>

          <h2>
            Be Future-Ready with
            <br />
            TechTorch
          </h2>

          <p className="transformation-description">
            In a rapidly evolving digital landscape, stagnation is the only
            true risk. We architect enterprise systems that don't just survive
            change—they thrive on it. By decoupling complexity and embedding
            agility at the core, we ensure your infrastructure is a competitive
            advantage, not a bottleneck.
          </p>

          <div className="transformation-features">

            <div className="transformation-feature">
              <span className="check-icon">✓</span>
              <p>Microservices architectures for independent scaling.</p>
            </div>

            <div className="transformation-feature">
              <span className="check-icon">✓</span>
              <p>Zero-trust security models built into the foundation.</p>
            </div>

            <div className="transformation-feature">
              <span className="check-icon">✓</span>
              <p>Cloud-agnostic deployments to prevent vendor lock-in.</p>
            </div>

          </div>
        </div>
      </div>

      <style>{`

        /* =====================================================
           SECTION
        ===================================================== */

        .transformation-section {
          width: 100%;
          background: #ffffff;
          padding: 40px 16px;
          overflow: hidden;
          box-sizing: border-box;
        }


        /* =====================================================
           FOOTER-ALIGNED RESPONSIVE PADDING
        ===================================================== */

        @media (min-width: 640px) {
          .transformation-section {
            padding: 48px 24px;
          }
        }

        @media (min-width: 768px) {
          .transformation-section {
            padding: 56px 40px;
          }
        }

        @media (min-width: 1024px) {
          .transformation-section {
            padding: 64px 100px;
          }
        }

        @media (min-width: 1280px) {
          .transformation-section {
            padding: 80px 100px;
          }
        }


        /* =====================================================
           MAIN CONTAINER
           LEFT + RIGHT EDGES MATCH FOOTER
        ===================================================== */

        .transformation-container {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: 70px;
          margin: 0;
          box-sizing: border-box;
        }


        /* =====================================================
           IMAGE WRAPPER
        ===================================================== */

        .transformation-image-wrap {
          position: relative;
          width: 100%;
          max-width: 560px;
          padding-bottom: 18px;
          justify-self: start;
        }


        /* =====================================================
           IMAGE BOX
        ===================================================== */

        .transformation-image-box {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 18px;
          clip-path: inset(0 round 18px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .transformation-image {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 1.55 / 1;
          object-fit: cover;
          margin: 0;
          padding: 0;
          border: 0;
        }


        /* =====================================================
           UPTIME CARD
        ===================================================== */

        .uptime-card {
          position: absolute;
          right: 12px;
          bottom: 0;

          min-width: 210px;

          padding: 14px 16px;

          display: flex;
          align-items: center;
          gap: 14px;

          background: #ffffff;
          border-radius: 8px;

          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.14);
        }


        /* =====================================================
           GREEN ICON
        ===================================================== */

        .uptime-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 10px;
          background: #91f0bb;

          font-size: 0;
        }


        .uptime-icon svg {
          display: block;
          width: 25px;
          height: 25px;
        }


        /* =====================================================
           UPTIME CONTENT
        ===================================================== */

        .uptime-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .uptime-content strong {
          font-size: 23px;
          line-height: 1.05;
          font-weight: 700;
          color: #17263b;
        }

        .uptime-content span {
          font-size: 11px;
          line-height: 1.2;
          font-weight: 600;
          color: #687080;
        }


        /* =====================================================
           RIGHT CONTENT
        ===================================================== */

        .transformation-content {
          width: 100%;
          max-width: 560px;
          padding-bottom: 2px;
          justify-self: end;
        }


        /* =====================================================
           LABEL
        ===================================================== */

        .transformation-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 23px;
        }

        .transformation-label span {
          width: 3px;
          height: 20px;
          display: block;
          background: #730042;
          flex-shrink: 0;
        }

        .transformation-label p {
          margin: 0;
          font-size: 12px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: #730042;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .transformation-content h2 {
          margin: 0;
          font-size: 38px;
          line-height: 1.14;
          font-weight: 700;
          letter-spacing: -1.8px;
          color: #10243a;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .transformation-description {
          margin: 25px 0 0;
          font-size: 15px;
          font-family: "Inter", sans-serif;
          line-height: 1.48;
          font-weight: 400;
          color: #5f6268;
        }


        /* =====================================================
           FEATURES
        ===================================================== */

        .transformation-features {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-top: 28px;
        }

        .transformation-feature {
          display: flex;
          align-items: flex-start;
          gap: 11px;
        }

        .transformation-feature p {
          margin: 0;
          font-size: 14px;
          font-family: "Inter", sans-serif;
          line-height: 1.4;
          font-weight: 500;
          color: #304157;
        }


        /* =====================================================
           CHECK ICON
        ===================================================== */

        .check-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 2px solid #249968;
          border-radius: 50%;

          color: #249968;
          font-size: 13px;
          font-weight: 800;
          line-height: 1;
        }


        /* =====================================================
           1100px
        ===================================================== */

        @media (max-width: 1100px) {

          .transformation-container {
            gap: 45px;
          }

          .transformation-image-wrap {
            max-width: 500px;
          }

          .transformation-content {
            max-width: 520px;
          }

          .transformation-content h2 {
            font-size: 39px;
          }

          .transformation-description {
            font-size: 16px;
          }

          .uptime-card {
            min-width: 200px;
            right: 6px;
            padding: 13px 15px;
          }

          .uptime-icon {
            width: 43px;
            height: 43px;
          }

          .uptime-content strong {
            font-size: 21px;
          }
        }


        /* =====================================================
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .transformation-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .transformation-image-wrap {
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
            justify-self: center;
          }

          .transformation-content {
            width: 100%;
            max-width: 650px;
            margin: 0 auto;
            justify-self: center;
          }

          .transformation-content h2 {
            font-size: 40px;
          }

          .transformation-description {
            font-size: 16px;
          }
        }


        /* =====================================================
           768px
        ===================================================== */

        @media (max-width: 768px) {

          .transformation-container {
            display: flex;
            flex-direction: column;
            gap: 45px;
          }

          .transformation-image-wrap {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding-bottom: 17px;
          }

          .transformation-image-box {
            border-radius: 16px;
            clip-path: inset(0 round 16px);
          }

          .transformation-image {
            width: 100%;
            aspect-ratio: 1.35 / 1;
            object-fit: cover;
          }

          .uptime-card {
            right: 0;
            bottom: 0;
            min-width: 190px;
            padding: 11px 13px;
            gap: 11px;
          }

          .uptime-icon {
            width: 40px;
            height: 40px;
            border-radius: 9px;
          }

          .uptime-icon svg {
            width: 22px;
            height: 22px;
          }

          .uptime-content strong {
            font-size: 19px;
          }

          .uptime-content span {
            font-size: 10px;
          }

          .transformation-content {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
          }

          .transformation-label {
            margin-bottom: 18px;
            gap: 9px;
          }

          .transformation-label span {
            height: 18px;
          }

          .transformation-label p {
            font-size: 10px;
            letter-spacing: 1.2px;
          }

          .transformation-content h2 {
            font-size: 34px;
            line-height: 1.14;
            letter-spacing: -1.1px;
          }

          .transformation-description {
            margin-top: 20px;
            font-size: 15px;
            line-height: 1.55;
          }

          .transformation-features {
            margin-top: 23px;
            gap: 12px;
          }

          .transformation-feature {
            gap: 9px;
          }

          .transformation-feature p {
            font-size: 13px;
            line-height: 1.45;
          }

          .check-icon {
            width: 19px;
            height: 19px;
            font-size: 11px;
          }
        }


        /* =====================================================
           600px
        ===================================================== */

        @media (max-width: 600px) {

          .transformation-container {
            gap: 40px;
          }

          .transformation-image-wrap {
            max-width: 100%;
            padding-bottom: 17px;
          }

          .transformation-image-box {
            border-radius: 15px;
            clip-path: inset(0 round 15px);
          }

          .transformation-image {
            aspect-ratio: 1.3 / 1;
          }

          .uptime-card {
            right: -1px;
            min-width: 185px;
            padding: 10px 12px;
          }

          .uptime-icon {
            width: 39px;
            height: 39px;
          }

          .uptime-content strong {
            font-size: 18px;
          }

          .uptime-content span {
            font-size: 10px;
          }

          .transformation-content h2 {
            font-size: 32px;
          }

          .transformation-description {
            font-size: 15px;
          }

          .transformation-feature p {
            font-size: 13px;
          }
        }


        /* =====================================================
           400px
        ===================================================== */

        @media (max-width: 400px) {

          .transformation-container {
            gap: 36px;
          }

          .transformation-image-box {
            border-radius: 14px;
            clip-path: inset(0 round 14px);
          }

          .transformation-content h2 {
            font-size: 29px;
          }

          .transformation-description {
            font-size: 14px;
          }

          .transformation-feature p {
            font-size: 12px;
          }

          .uptime-card {
            min-width: 170px;
            padding: 9px 10px;
          }

          .uptime-icon {
            width: 35px;
            height: 35px;
          }

          .uptime-icon svg {
            width: 19px;
            height: 19px;
          }

          .uptime-content strong {
            font-size: 16px;
          }

          .uptime-content span {
            font-size: 9px;
          }
        }

      `}</style>
    </section>
  );
}