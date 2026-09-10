import React from "react";

export default function LegacyModernization() {
  return (
    <div className="legacy-modernization-page">

      {/* ================= HERO ================= */}
      <section className="legacy-hero">

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85"
          alt="Legacy Technology"
          className="legacy-hero-image"
        />

        <div className="legacy-hero-overlay"></div>

        <div className="legacy-hero-content">

          <div className="legacy-eyebrow">
            CORE TRANSFORMATION
          </div>

          <h1>
            Legacy Modernization: Future-
            <br />
            Proofing the Enterprise Core
          </h1>

          <p>
            Bridge decades of stable infrastructure with modern
            <br className="desktop-break" />
            microservices. We transform legacy constraints into
            <br className="desktop-break" />
            scalable agility.
          </p>

        </div>

      </section>


      {/* ================= MAIN CARD ================= */}
      <section className="legacy-main-card">

        <div className="legacy-top-content">

          {/* LEFT CONTENT */}
          <div className="legacy-copy">

            <h2>
              Bridging Decades of
              <br />
              Architecture
            </h2>

            <p>
              Modernizing legacy systems is rarely about a complete rewrite.
              It is an exercise in architectural translation—safely exposing
              the business logic locked in COBOL and mainframe environments
              to modern, API-driven ecosystems.
            </p>

            <p>
              By strategically implementing the strangler fig pattern, we
              incrementally decouple monolithic structures. This approach
              allows enterprise IT to leverage cloud-native microservices
              while maintaining the transactional integrity of core systems.
            </p>

          </div>


          {/* RIGHT CONTENT */}
          <div className="legacy-right-column">

            {/* ARCHITECTURE CARD */}
            <div className="architecture-card">

              <div className="architecture-heading">

                <h3>
                  Scalable
                  <br />
                  Architecture
                </h3>

                <span>
                  Target
                  <br />
                  State
                </span>

              </div>

              <div className="architecture-image-wrapper">

                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85"
                  alt="Modern Architecture"
                  className="architecture-image"
                />

              </div>

            </div>


            {/* IMPACT CARD */}
            <div className="impact-card">

              <div className="impact-label">
                PROJECTED IMPACT
              </div>

              <div className="impact-number">
                60%
                <span>reduction</span>
              </div>

              <p>
                in technical debt and legacy maintenance costs over 36
                months, allowing reallocation of IT budget to innovation
                initiatives.
              </p>

            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <div className="legacy-divider"></div>


        {/* ================= STRATEGIC PRIORITIES ================= */}
        <section className="strategic-section">

          <h2>
            Strategic Priorities
          </h2>

          <div className="priority-grid">

            {/* RISK MITIGATION */}
            <div className="priority-card">

              <div className="priority-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3Z" />
                  <path d="M9.5 12h5" />
                  <path d="M12 9.5v5" />
                </svg>
              </div>

              <h3>
                Risk
                <br />
                Mitigation
              </h3>

              <p>
                Phased migrations and rigorous automated testing ensure zero
                downtime and absolute data integrity during the transition.
              </p>

            </div>


            {/* PERFORMANCE EDGE */}
            <div className="priority-card">

              <div className="priority-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M5 17a7 7 0 1 1 14 0" />
                  <path d="M12 17l4-6" />
                  <path d="M5 17h14" />
                </svg>
              </div>

              <h3>
                Performance
                <br />
                Edge
              </h3>

              <p>
                Introducing in-memory caching and optimized API gateways to
                dramatically reduce legacy system load and response times.
              </p>

            </div>

          </div>

        </section>

      </section>


      {/* ================= CSS ================= */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        .legacy-modernization-page {
          width: 100%;
          min-height: 100vh;
          padding: 30px 28px 70px;
          background: #f7f8fa;
          color: #171717;
          font-family: "Inter", sans-serif;
        }


        /* ================= HERO ================= */

        .legacy-hero {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 430px;
          margin: 0 auto;
          overflow: hidden;
        }

        .legacy-hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .legacy-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,0.88) 0%,
              rgba(255,255,255,0.68) 48%,
              rgba(255,255,255,0.35) 100%
            );
        }

        .legacy-hero-content {
          position: relative;
          z-index: 2;
          height: 100%;
          padding: 70px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .legacy-eyebrow {
          margin-bottom: 20px;
          color: #78003f;
          font-size: 11px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .legacy-hero h1 {
          max-width: 850px;
          margin: 0 0 25px;
          color: #171719;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(42px, 5vw, 66px);
          line-height: 1.03;
          font-weight: 800;
          letter-spacing: -2.5px;
        }

        .legacy-hero p {
          margin: 0;
          color: #796c72;
          font-size: 20px;
          line-height: 1.5;
          font-weight: 400;
        }


        /* ================= MAIN CARD ================= */

        .legacy-main-card {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: -5px auto 0;
          padding: 72px 48px 78px;
          background: #ffffff;
          border-radius: 30px 30px 0 0;
          box-shadow: 0 -2px 30px rgba(20, 20, 20, 0.025);
        }


        /* ================= TOP CONTENT ================= */

        .legacy-top-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 315px;
          gap: 55px;
          align-items: start;
        }

        .legacy-copy {
          min-width: 0;
        }

        .legacy-copy h2 {
          margin: 0 0 35px;
          color: #202020;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 750;
          letter-spacing: -1px;
        }

        .legacy-copy p {
          max-width: 560px;
          margin: 0 0 27px;
          color: #796c72;
          font-size: 18px;
          line-height: 1.58;
        }


        /* ================= RIGHT COLUMN ================= */

        .legacy-right-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }


        /* ================= ARCHITECTURE CARD ================= */

        .architecture-card {
          width: 100%;
          padding: 28px;
          background: #f8f8fa;
          border: 1px solid #e5e8ec;
          border-radius: 17px;
          box-shadow: 0 7px 18px rgba(30, 20, 30, 0.08);
        }

        .architecture-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 25px;
        }

        .architecture-heading h3 {
          margin: 0;
          color: #292629;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          line-height: 1.15;
          font-weight: 750;
        }

        .architecture-heading span {
          padding: 7px 10px;
          border-radius: 12px;
          background: #dcebdd;
          color: #6b9670;
          font-size: 9px;
          line-height: 1.1;
          font-weight: 700;
        }

        .architecture-image-wrapper {
          width: 100%;
          height: 175px;
          overflow: hidden;
          border-radius: 7px;
          background: #ffffff;
          border: 1px solid #e3e7eb;
        }

        .architecture-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
        }


        /* ================= IMPACT ================= */

        .impact-card {
          min-height: 215px;
          padding: 30px;
          background: #72003e;
          border-radius: 17px;
          color: #ffffff;
          box-shadow: 0 9px 22px rgba(95, 0, 50, 0.18);
        }

        .impact-label {
          margin-bottom: 23px;
          color: #e8b9d0;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .impact-number {
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: #ffffff;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 38px;
          line-height: 1;
          font-weight: 800;
        }

        .impact-number span {
          color: #e9cada;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          font-weight: 500;
        }

        .impact-card p {
          max-width: 250px;
          margin: 23px 0 0;
          color: #e2c6d3;
          font-size: 12px;
          line-height: 1.5;
        }


        /* ================= DIVIDER ================= */

        .legacy-divider {
          width: 100%;
          height: 1px;
          margin: 55px 0 48px;
          background: #e7e8ea;
        }


        /* ================= STRATEGIC PRIORITIES ================= */

        .strategic-section h2 {
          margin: 0 0 28px;
          color: #242224;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 750;
        }

        .priority-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 150px 150px;
          gap: 25px;
        }

        .priority-card {
          min-height: 290px;
          padding: 25px;
          background: #fafbfc;
          border: 1px solid #e2e6ea;
          border-radius: 13px;
        }

        .priority-icon {
          width: 39px;
          height: 39px;
          margin-bottom: 23px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #f1dce7;
          color: #71003e;
        }

        .priority-icon svg {
          width: 19px;
          height: 19px;
        }

        .priority-card h3 {
          margin: 0 0 18px;
          color: #252326;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 17px;
          line-height: 1.15;
          font-weight: 750;
        }

        .priority-card p {
          margin: 0;
          color: #766970;
          font-size: 12px;
          line-height: 1.52;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .legacy-modernization-page {
            padding: 22px 20px 55px;
          }

          .legacy-hero {
            height: 400px;
          }

          .legacy-hero-content {
            padding: 60px 40px;
          }

          .legacy-hero h1 {
            font-size: clamp(38px, 6vw, 56px);
          }

          .legacy-hero p {
            font-size: 17px;
          }

          .legacy-main-card {
            padding: 55px 38px 65px;
          }

          .legacy-top-content {
            grid-template-columns: minmax(0, 1fr) 275px;
            gap: 35px;
          }

          .legacy-copy h2 {
            font-size: 27px;
          }

          .legacy-copy p {
            font-size: 16px;
          }

          .architecture-card {
            padding: 23px;
          }

          .impact-card {
            padding: 25px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 650px) {

          .legacy-modernization-page {
            padding: 0 14px 40px;
          }

          .legacy-hero {
            height: 470px;
          }

          .legacy-hero-content {
            padding: 50px 25px;
          }

          .legacy-eyebrow {
            font-size: 9px;
            letter-spacing: 1.5px;
          }

          .legacy-hero h1 {
            font-size: clamp(33px, 8.5vw, 46px);
            line-height: 1.07;
            letter-spacing: -1.5px;
          }

          .legacy-hero p {
            font-size: 15px;
            line-height: 1.5;
          }

          .desktop-break {
            display: none;
          }


          .legacy-main-card {
            margin-top: -15px;
            padding: 40px 22px 50px;
            border-radius: 24px 24px 0 0;
          }


          .legacy-top-content {
            display: flex;
            flex-direction: column;
            gap: 35px;
          }

          .legacy-copy h2 {
            font-size: 25px;
            margin-bottom: 25px;
          }

          .legacy-copy p {
            font-size: 15px;
            line-height: 1.55;
          }


          .legacy-right-column {
            width: 100%;
          }

          .architecture-card {
            padding: 22px;
          }

          .architecture-image-wrapper {
            height: 190px;
          }

          .impact-card {
            min-height: 200px;
          }


          .legacy-divider {
            margin: 42px 0 35px;
          }

          .strategic-section h2 {
            font-size: 20px;
          }

          .priority-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }

          .priority-card {
            min-height: 275px;
            padding: 20px 17px;
          }

          .priority-card h3 {
            font-size: 16px;
          }

          .priority-card p {
            font-size: 12px;
          }

        }


        /* ================= SMALL MOBILE ================= */

        @media (max-width: 420px) {

          .legacy-modernization-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .legacy-hero {
            height: 440px;
          }

          .legacy-hero-content {
            padding-left: 20px;
            padding-right: 20px;
          }

          .legacy-hero h1 {
            font-size: 30px;
            letter-spacing: -1px;
          }

          .legacy-hero p {
            font-size: 14px;
          }

          .legacy-main-card {
            padding-left: 18px;
            padding-right: 18px;
          }

          .legacy-copy h2 {
            font-size: 23px;
          }

          .legacy-copy p {
            font-size: 14px;
          }

          .architecture-heading h3 {
            font-size: 16px;
          }

          .architecture-image-wrapper {
            height: 175px;
          }

          .impact-number {
            font-size: 34px;
          }

          .priority-grid {
            grid-template-columns: 1fr;
          }

          .priority-card {
            min-height: auto;
          }

        }

      `}</style>
    </div>
  );
}