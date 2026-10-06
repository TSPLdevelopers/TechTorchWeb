import React from "react";
import { BookOpen, ShieldCheck, FileText } from "lucide-react";

export default function SmarterHiringApproach() {
  return (
    <section className="smarter-hiring-section">
      <div className="smarter-hiring-container">

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="smarter-hiring-grid">

          {/* ===================================================
              SIDEBAR
          =================================================== */}

          <aside className="smarter-hiring-sidebar">

            {/* =================================================
                EXECUTIVE BRIEFING CARD
            ================================================= */}

            <div className="smarter-hiring-briefing">

              <div className="smarter-hiring-card-eyebrow">
                <BookOpen />

                <span>
                  EXECUTIVE BRIEFING
                </span>
              </div>

              <h3 className="smarter-hiring-sidebar-title">
                The True Cost of a Mis-Hire
              </h3>

              <p className="smarter-hiring-sidebar-description">
                Why forward-thinking CTOs and Heads of Talent structure
                permanent engineering recruitment through contract-to-hire
                validation.
              </p>

              {/* =================================================
                  METRICS
              ================================================= */}

              <div className="smarter-hiring-metrics">

                {/* Traditional Bad Hire */}
                <div className="smarter-hiring-metric">

                  <div className="smarter-hiring-metric-header">
                    <span>
                      Traditional Bad Hire Cost
                    </span>

                    <strong>
                      3x Annual Salary
                    </strong>
                  </div>

                  <div className="smarter-hiring-progress">
                    <div
                      className="smarter-hiring-progress-fill"
                      style={{ width: "85%" }}
                    />
                  </div>

                </div>

                {/* TechTorch Severance */}
                <div className="smarter-hiring-metric">

                  <div className="smarter-hiring-metric-header">
                    <span>
                      TechTorch Severance Exposure
                    </span>

                    <strong className="highlight">
                      0% Liability
                    </strong>
                  </div>

                  <div className="smarter-hiring-progress">
                    <div
                      className="smarter-hiring-progress-fill"
                      style={{ width: "4%" }}
                    />
                  </div>

                </div>

                {/* Candidate Swap */}
                <div className="smarter-hiring-metric-simple">

                  <span>
                    Candidate Swap Guarantee
                  </span>

                  <strong>
                    &lt; 48 Hours
                  </strong>

                </div>

              </div>
            </div>

            {/* =================================================
                TRANSITION PROTOCOL
            ================================================= */}

            <div className="smarter-hiring-protocol">

              <div className="smarter-hiring-protocol-header">

                <ShieldCheck />

                <h3>
                  Seamless Transition Protocol
                </h3>

              </div>

              <p>
                All intellectual property assignments, proprietary code
                agreements, and SOC 2 / HIPAA compliance protocols transition
                seamlessly without contractual downtime or legal disruption.
              </p>

            </div>

          </aside>

          {/* ===================================================
              MAIN CONTENT
          =================================================== */}

          <main className="smarter-hiring-main">

            {/* Eyebrow */}
            <div className="smarter-hiring-eyebrow">

              <span />

              <span>
                Contract-to-Hire Framework
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="smarter-hiring-heading">
              A Smarter Approach to Technology Hiring
            </h1>

            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <div className="smarter-hiring-body">

              <p>
                Finding the right technology talent is about more than
                matching a resume with a job description. The right
                professional needs the technical expertise, problem-solving
                ability, communication, and adaptability to work effectively
                within your organisation.
              </p>

              <p>
                TechTorch's Contract-to-Hire approach provides a flexible way
                to evaluate technology professionals through practical
                project engagement. Instead of relying only on interviews and
                assessments, organisations can experience how a professional
                contributes to real work, collaborates with teams, and adapts
                to their technology environment.
              </p>

            </div>

            {/* =================================================
                PULL QUOTE
            ================================================= */}

            <blockquote className="smarter-hiring-quote">

              <p>
                "Evaluate the fit. Experience the capability. Build with
                confidence."
              </p>

              <div className="smarter-hiring-quote-label">

                <FileText />

                <span>
                  TECHTORCH TALENT ADVISORY PRINCIPLE
                </span>

              </div>

            </blockquote>

            {/* =================================================
                CONTINUED CONTENT
            ================================================= */}

            <div className="smarter-hiring-body">

              <p>
                This approach helps businesses gain a clearer understanding
                of technical capability, working style, team compatibility,
                and long-term potential before moving toward a permanent
                engagement.
              </p>

              <p>
                With TechTorch, organisations can create a more informed path
                from initial engagement to long-term technology
                partnership—helping them build capable teams while
                maintaining the flexibility to make the right hiring
                decision.
              </p>

            </div>

          </main>
        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .smarter-hiring-section {
          width: 100%;
          min-height: auto;

          background: #ffffff;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .smarter-hiring-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 64px;
          padding-bottom: 64px;
        }

        /* =====================================================
           MAIN GRID
        ===================================================== */

        .smarter-hiring-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(260px, 330px)
            minmax(0, 1fr);

          gap: 64px;

          align-items: start;
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .smarter-hiring-sidebar {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 20px;
        }

        /* =====================================================
           BRIEFING CARD
        ===================================================== */

        .smarter-hiring-briefing {
          width: 100%;

          padding: 22px;

          background: #ffffff;

          border: 1px solid #e5e5e5;

          border-radius: 12px;
        }

        .smarter-hiring-card-eyebrow {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 15px;
        }

        .smarter-hiring-card-eyebrow svg {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          color: #730024;
        }

        .smarter-hiring-card-eyebrow span {
          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.06em;

          color: #730024;
        }

        .smarter-hiring-sidebar-title {
          margin: 0 0 9px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 17px;
          font-weight: 600;

          line-height: 1.35;

          color: #1c1c1c;
        }

        .smarter-hiring-sidebar-description {
          margin: 0 0 22px;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          font-weight: 400;

          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           METRICS
        ===================================================== */

        .smarter-hiring-metrics {
          display: flex;
          flex-direction: column;

          gap: 20px;
        }

        .smarter-hiring-metric {
          width: 100%;
        }

        .smarter-hiring-metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          margin-bottom: 8px;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;
        }

        .smarter-hiring-metric-header span {
          color: #737373;
        }

        .smarter-hiring-metric-header strong {
          color: #1c1c1c;

          font-weight: 600;

          white-space: nowrap;
        }

        .smarter-hiring-metric-header strong.highlight {
          color: #730024;
        }

        .smarter-hiring-progress {
          width: 100%;
          height: 4px;

          overflow: hidden;

          border-radius: 999px;

          background: #f0f0f0;
        }

        .smarter-hiring-progress-fill {
          height: 100%;

          border-radius: inherit;

          background: #730024;
        }

        .smarter-hiring-metric-simple {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;
        }

        .smarter-hiring-metric-simple span {
          color: #737373;
        }

        .smarter-hiring-metric-simple strong {
          color: #1c1c1c;

          font-weight: 600;

          white-space: nowrap;
        }

        /* =====================================================
           PROTOCOL
        ===================================================== */

        .smarter-hiring-protocol {
          width: 100%;

          padding: 20px 22px;

          background: rgba(115, 0, 36, 0.05);

          border: 1px solid rgba(115, 0, 36, 0.1);

          border-radius: 12px;
        }

        .smarter-hiring-protocol-header {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-bottom: 10px;
        }

        .smarter-hiring-protocol-header svg {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          color: #730024;
        }

        .smarter-hiring-protocol-header h3 {
          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 12px;
          font-weight: 600;

          line-height: 1.4;

          color: #730024;
        }

        .smarter-hiring-protocol p {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;
          font-weight: 400;

          line-height: 1.7;

          color: #666666;
        }

        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .smarter-hiring-main {
          width: 100%;
          min-width: 0;

          max-width: 900px;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .smarter-hiring-eyebrow {
          display: flex;
          align-items: center;

          gap: 9px;

          margin-bottom: 17px;
        }

        .smarter-hiring-eyebrow > span:first-child {
          width: 20px;
          height: 1px;

          flex-shrink: 0;

          background: #730024;
        }

        .smarter-hiring-eyebrow > span:last-child {
          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 10px;
          font-weight: 600;

          letter-spacing: 0.04em;

          color: #730024;
        }

        /* =====================================================
           MAIN HEADING
        ===================================================== */

        .smarter-hiring-heading {
          margin: 0 0 24px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(30px, 3vw, 43px);

          font-weight: 600;

          line-height: 1.2;

          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        /* =====================================================
           BODY
        ===================================================== */

        .smarter-hiring-body {
          display: flex;
          flex-direction: column;

          gap: 19px;

          margin-bottom: 28px;

          font-family: "Inter", sans-serif;

          font-size: 14px;
          font-weight: 400;

          line-height: 1.8;

          color: #666666;
        }

        .smarter-hiring-body p {
          margin: 0;
        }

        /* =====================================================
           PULL QUOTE
        ===================================================== */

        .smarter-hiring-quote {
          margin: 0 0 29px;

          padding: 23px 25px;

          border-left: 3px solid #730024;

          background: rgba(115, 0, 36, 0.05);
        }

        .smarter-hiring-quote p {
          margin: 0 0 14px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 19px;
          font-weight: 600;

          line-height: 1.45;

          color: #1c1c1c;
        }

        .smarter-hiring-quote-label {
          display: flex;
          align-items: center;

          gap: 8px;
        }

        .smarter-hiring-quote-label svg {
          width: 14px;
          height: 14px;

          flex-shrink: 0;

          color: #730024;
        }

        .smarter-hiring-quote-label span {
          font-family: "Inter", sans-serif;

          font-size: 9.5px;
          font-weight: 600;

          letter-spacing: 0.06em;

          color: #730024;
        }

        /* =====================================================
           LARGE TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .smarter-hiring-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .smarter-hiring-grid {
            gap: 45px;
          }

          .smarter-hiring-main {
            max-width: 100%;
          }

          .smarter-hiring-heading {
            font-size: 38px;
          }
        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .smarter-hiring-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .smarter-hiring-grid {
            grid-template-columns: 1fr;

            gap: 38px;
          }

          .smarter-hiring-sidebar {
            display: grid;

            grid-template-columns: repeat(2, minmax(0, 1fr));

            gap: 16px;
          }

          .smarter-hiring-heading {
            font-size: 36px;
          }

          .smarter-hiring-body {
            font-size: 13.5px;
          }
        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .smarter-hiring-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .smarter-hiring-grid {
            gap: 32px;
          }

          .smarter-hiring-sidebar {
            display: flex;
            flex-direction: column;

            gap: 16px;
          }

          .smarter-hiring-briefing {
            padding: 19px;
          }

          .smarter-hiring-protocol {
            padding: 18px 19px;
          }

          .smarter-hiring-heading {
            font-size: 32px;

            line-height: 1.22;
          }

          .smarter-hiring-body {
            font-size: 13px;

            line-height: 1.7;

            gap: 17px;
          }

          .smarter-hiring-quote {
            padding: 20px 20px;

            margin-bottom: 25px;
          }

          .smarter-hiring-quote p {
            font-size: 17px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .smarter-hiring-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 36px;
            padding-bottom: 36px;
          }

          .smarter-hiring-card-eyebrow span {
            font-size: 8px;
          }

          .smarter-hiring-sidebar-title {
            font-size: 15px;
          }

          .smarter-hiring-sidebar-description {
            font-size: 11px;

            margin-bottom: 19px;
          }

          .smarter-hiring-metrics {
            gap: 17px;
          }

          .smarter-hiring-metric-header,
          .smarter-hiring-metric-simple {
            font-size: 9.5px;
          }

          .smarter-hiring-protocol-header h3 {
            font-size: 11px;
          }

          .smarter-hiring-protocol p {
            font-size: 10.5px;
          }

          .smarter-hiring-eyebrow {
            gap: 7px;

            margin-bottom: 14px;
          }

          .smarter-hiring-eyebrow > span:first-child {
            width: 16px;
          }

          .smarter-hiring-eyebrow > span:last-child {
            font-size: 8.5px;
          }

          .smarter-hiring-heading {
            font-size: 28px;

            letter-spacing: -0.02em;

            margin-bottom: 19px;
          }

          .smarter-hiring-body {
            font-size: 11.5px;

            line-height: 1.7;

            gap: 15px;

            margin-bottom: 23px;
          }

          .smarter-hiring-quote {
            padding: 18px 17px;

            margin-bottom: 23px;
          }

          .smarter-hiring-quote p {
            font-size: 15px;

            line-height: 1.45;

            margin-bottom: 11px;
          }

          .smarter-hiring-quote-label {
            gap: 6px;
          }

          .smarter-hiring-quote-label svg {
            width: 12px;
            height: 12px;
          }

          .smarter-hiring-quote-label span {
            font-size: 7.5px;
          }
        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .smarter-hiring-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .smarter-hiring-heading {
            font-size: 25px;
          }

          .smarter-hiring-body {
            font-size: 11px;
          }

          .smarter-hiring-quote p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}