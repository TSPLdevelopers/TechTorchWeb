import React from "react";
import { useNavigate } from "react-router-dom";

export default function LifecycleGovernance() {
  const navigate = useNavigate();

  return (
    <div className="lifecycle-page">
      <style>{`
        /* =========================================================
           FONT + BASE
        ========================================================= */

        .lifecycle-page {
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          font-family: "Inter", sans-serif;
          color: #15151a;
        }

        .lifecycle-page *,
        .lifecycle-page *::before,
        .lifecycle-page *::after {
          box-sizing: border-box;
        }

        .lifecycle-page h1,
        .lifecycle-page h2,
        .lifecycle-page h3,
        .lifecycle-page h4,
        .lifecycle-page h5,
        .lifecycle-page h6 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        /* =========================================================
           UNIVERSAL CONTAINER
        ========================================================= */

        .lifecycle-container {
          width: 100%;
          padding-left: 100px;
          padding-right: 100px;
        }

        /* =========================================================
           SECTION 1 - LIFECYCLE GOVERNANCE
        ========================================================= */

        .lifecycle-intro {
          width: 100%;
          min-height: 390px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9f8f3;
          text-align: center;
          padding-top: 70px;
          padding-bottom: 70px;
        }

        .lifecycle-intro-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .lifecycle-label {
          margin: 0 0 16px;
          font-family: "Inter", sans-serif;
          font-size: 11px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8b0047;
        }

        .lifecycle-heading {
          width: 100%;
          max-width: 800px;
          margin: 0;
          font-size: 32px;
          line-height: 1.12;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #15151a;
        }

        .lifecycle-subtitle {
          margin: 8px 0 0;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
          color: #5e5960;
        }

        .lifecycle-paragraphs {
          width: 100%;
          max-width: 760px;
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .lifecycle-paragraphs p {
          margin: 0;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 400;
          color: #5b5b63;
        }

        /* =========================================================
           SECTION 2 - COLLABORATION PHILOSOPHY
        ========================================================= */

        .collaboration-section {
          width: 100%;
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          text-align: center;
          padding-top: 70px;
          padding-bottom: 70px;
        }

        .collaboration-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .collaboration-heading {
          width: 100%;
          max-width: 850px;
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 32px;
          line-height: 1.12;
          font-weight: 600;
          letter-spacing: -0.03em;
          color: #15151a;
        }

        .collaboration-description {
          width: 100%;
          max-width: 760px;
          margin: 24px 0 0;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 400;
          color: #5b5b63;
        }

        /* =========================================================
           SECTION 3 - CTA
        ========================================================= */

        .lifecycle-cta {
          position: relative;
          width: 100%;
          min-height: 500px;
          overflow: hidden;
        }

        .lifecycle-cta-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .lifecycle-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(48, 0, 25, 0.60);
        }

        .lifecycle-cta-content {
          position: relative;
          z-index: 2;
          width: 100%;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-top: 70px;
          padding-bottom: 60px;
        }

        /* Badge */

        .lifecycle-badge {
          margin-bottom: 20px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 16px;
          border: 1px solid rgba(255, 255, 255, 0.20);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .lifecycle-badge-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 8px;
          border-radius: 50%;
          background: #43e6b2;
        }

        .lifecycle-badge-text {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ffffff;
        }

        /* CTA Heading */

        .lifecycle-cta-heading {
          width: 100%;
          max-width: 850px;
          margin: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 40px;
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: -0.035em;
          color: #ffffff;
        }

        .lifecycle-cta-description {
          width: 100%;
          max-width: 700px;
          margin: 22px 0 0;
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 1.55;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.80);
        }

        /* Buttons */

        .lifecycle-buttons {
          width: 100%;
          margin-top: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .lifecycle-primary-btn,
        .lifecycle-secondary-btn {
          min-height: 50px;
          border-radius: 9px;
          padding: 0 28px;
          font-family: "Inter", sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .lifecycle-primary-btn {
          min-width: 360px;
          border: 1px solid #780042;
          background: #780042;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .lifecycle-primary-btn:hover {
          background: #8e004b;
          border-color: #8e004b;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(120, 0, 66, 0.25);
        }

        .lifecycle-primary-arrow {
          margin-left: 9px;
          font-size: 18px;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        .lifecycle-primary-btn:hover .lifecycle-primary-arrow {
          transform: translateX(4px);
        }

        .lifecycle-secondary-btn {
          min-width: 190px;
          border: 1px solid rgba(255, 255, 255, 0.30);
          background: rgba(255, 255, 255, 0.10);
          color: #ffffff;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .lifecycle-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.20);
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-2px);
        }

        /* Benefits */

        .lifecycle-benefits {
          width: 100%;
          max-width: 900px;
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          column-gap: 32px;
          row-gap: 14px;
        }

        .lifecycle-benefit {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: "Inter", sans-serif;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.80);
        }

        .lifecycle-benefit-check {
          color: #35d6a4;
          font-size: 14px;
          font-weight: 700;
        }

        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1199px) {
          .lifecycle-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .lifecycle-intro {
            min-height: 380px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .collaboration-section {
            min-height: 340px;
            padding-top: 60px;
            padding-bottom: 60px;
          }

          .lifecycle-cta-heading {
            font-size: 36px;
          }

          .lifecycle-cta-description {
            font-size: 15px;
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {
          .lifecycle-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .lifecycle-intro {
            min-height: auto;
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .lifecycle-label {
            margin-bottom: 13px;
            font-size: 10px;
          }

          .lifecycle-heading {
            max-width: 650px;
            font-size: 28px;
            line-height: 1.15;
          }

          .lifecycle-subtitle {
            margin-top: 7px;
            font-size: 13px;
          }

          .lifecycle-paragraphs {
            margin-top: 22px;
            gap: 14px;
          }

          .lifecycle-paragraphs p {
            font-size: 13px;
            line-height: 1.7;
          }

          .collaboration-section {
            min-height: auto;
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .collaboration-heading {
            font-size: 28px;
            line-height: 1.15;
          }

          .collaboration-description {
            margin-top: 22px;
            font-size: 13px;
            line-height: 1.7;
          }

          .lifecycle-cta {
            min-height: 540px;
          }

          .lifecycle-cta-content {
            min-height: 540px;
            padding-top: 60px;
            padding-bottom: 50px;
          }

          .lifecycle-badge {
            margin-bottom: 18px;
            padding: 8px 13px;
          }

          .lifecycle-badge-text {
            font-size: 9px;
          }

          .lifecycle-cta-heading {
            max-width: 650px;
            font-size: 31px;
            line-height: 1.08;
          }

          .lifecycle-cta-description {
            margin-top: 18px;
            font-size: 14px;
            line-height: 1.6;
          }

          .lifecycle-buttons {
            margin-top: 26px;
            flex-direction: column;
            gap: 10px;
          }

          .lifecycle-primary-btn,
          .lifecycle-secondary-btn {
            width: 100%;
            max-width: 360px;
          }

          .lifecycle-benefits {
            margin-top: 30px;
            padding-top: 20px;
            column-gap: 20px;
            row-gap: 11px;
          }

          .lifecycle-benefit {
            font-size: 11px;
          }
        }

        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {
          .lifecycle-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .lifecycle-intro {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .lifecycle-heading {
            font-size: 25px;
          }

          .lifecycle-subtitle {
            font-size: 12px;
          }

          .lifecycle-paragraphs {
            margin-top: 20px;
            gap: 13px;
          }

          .lifecycle-paragraphs p {
            font-size: 12px;
            line-height: 1.7;
          }

          .collaboration-section {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .collaboration-heading {
            font-size: 25px;
          }

          .collaboration-description {
            margin-top: 20px;
            font-size: 12px;
          }

          .lifecycle-cta {
            min-height: 570px;
          }

          .lifecycle-cta-content {
            min-height: 570px;
            padding-top: 50px;
            padding-bottom: 42px;
          }

          .lifecycle-badge {
            max-width: 100%;
            padding: 8px 11px;
          }

          .lifecycle-badge-text {
            font-size: 8px;
            letter-spacing: 0.06em;
          }

          .lifecycle-cta-heading {
            font-size: 27px;
            line-height: 1.1;
          }

          .lifecycle-cta-description {
            margin-top: 17px;
            font-size: 12px;
            line-height: 1.65;
          }

          .lifecycle-buttons {
            margin-top: 24px;
          }

          .lifecycle-primary-btn,
          .lifecycle-secondary-btn {
            min-height: 48px;
            min-width: 0;
            max-width: 100%;
            padding-left: 18px;
            padding-right: 18px;
            font-size: 12px;
          }

          .lifecycle-benefits {
            margin-top: 26px;
            padding-top: 18px;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 10px;
          }

          .lifecycle-benefit {
            font-size: 10px;
          }
        }
      `}</style>

      {/* =========================================================
          LIFECYCLE GOVERNANCE
      ========================================================= */}
      <section className="lifecycle-intro">
        <div className="lifecycle-container">
          <div className="lifecycle-intro-inner">
            <p className="lifecycle-label">Lifecycle Governance</p>

            <h2 className="lifecycle-heading">
              Support Through the Software Lifecycle
            </h2>

            <p className="lifecycle-subtitle">
              From Development to Continuous Improvement
            </p>

            <div className="lifecycle-paragraphs">
              <p>
                Software development does not end when an application is
                launched. Applications often require ongoing maintenance,
                enhancements, integrations, testing, security updates, and
                technical improvements.
              </p>

              <p>
                TechTorch can support development requirements across the
                software lifecycle, helping businesses continue improving
                their applications as their technology and business needs
                evolve.
              </p>

              <p>
                This approach provides businesses with the flexibility to use
                dedicated technical resources not only for initial projects but
                also for ongoing product development and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COLLABORATION PHILOSOPHY
      ========================================================= */}
      <section className="collaboration-section">
        <div className="lifecycle-container">
          <div className="collaboration-inner">
            <p className="lifecycle-label">Collaboration Philosophy</p>

            <h2 className="collaboration-heading">
              A Team That Works With Your Business
            </h2>

            <p className="lifecycle-subtitle">
              Technology Expertise That Complements Your Team
            </p>

            <p className="collaboration-description">
              The purpose of an offshore development team is to become a
              useful extension of your technology capabilities. TechTorch
              focuses on understanding your requirements, establishing the
              right team structure, and providing technical expertise that
              fits your development environment. Whether you need additional
              developers, a dedicated engineering team, or support for a
              specific technology requirement, the team can be structured
              around your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA / DEVELOPMENT TEAM
      ========================================================= */}
      <section className="lifecycle-cta">
        {/* Background Image */}
        <img
          src="/LifecycleGovernance.png"
          alt="Development team"
          className="lifecycle-cta-image"
        />

        {/* Dark / Maroon Overlay */}
        <div className="lifecycle-cta-overlay" />

        {/* Content */}
        <div className="lifecycle-container">
          <div className="lifecycle-cta-content">
            {/* Badge */}
            <div className="lifecycle-badge">
              <span className="lifecycle-badge-dot" />

              <span className="lifecycle-badge-text">
                Accelerate Engineering Capability
              </span>
            </div>

            {/* CTA Heading */}
            <h2 className="lifecycle-cta-heading">
              Ready to Strengthen Your Development
              <br className="desktop-break" /> Team?
            </h2>

            {/* Description */}
            <p className="lifecycle-cta-description">
              Tell us about your project, technology requirements, and the
              capabilities you are looking for. Our team can help you explore
              a development model that fits your business.
            </p>

            {/* Buttons */}
            <div className="lifecycle-buttons">
              <button
                onClick={() => navigate("/development-requirements")}
                className="lifecycle-primary-btn"
              >
                Discuss Your Development Requirements

                <span className="lifecycle-primary-arrow">→</span>
              </button>

              <button className="lifecycle-secondary-btn">
                Talk to Our Experts
              </button>
            </div>

            {/* Bottom Benefits */}
            <div className="lifecycle-benefits">
              <div className="lifecycle-benefit">
                <span className="lifecycle-benefit-check">✓</span>
                Mutual NDA Protected
              </div>

              <div className="lifecycle-benefit">
                <span className="lifecycle-benefit-check">✓</span>
                Direct Technical Consultation (&lt;24h)
              </div>

              <div className="lifecycle-benefit">
                <span className="lifecycle-benefit-check">✓</span>
                Flexible &amp; Transparent Engagement
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}