import React from "react";
import {
  FileText,
  ShieldCheck,
  Quote,
  ShieldCheck as Shield2,
  Repeat,
} from "lucide-react";

const BRAND_COLOR = "#730024";

export default function ElasticEngineeringCapacity() {
  return (
    <>
      <div className="elastic-page">

        {/* =====================================================
            MAIN SECTION
        ===================================================== */}

        <section className="elastic-section">
          <div className="elastic-container">

            <div className="elastic-grid">

              {/* =================================================
                  SIDEBAR
              ================================================= */}

              <aside className="elastic-sidebar">

                {/* Executive Briefing */}
                <div className="elastic-side-card">

                  <div className="elastic-side-label">
                    <FileText />
                    <span>EXECUTIVE BRIEFING</span>
                  </div>

                  <h3>
                    The Agility Mandate
                  </h3>

                  <p>
                    Why forward-looking CTOs and engineering directors
                    structure their engineering spend with high-velocity
                    contractor elasticity.
                  </p>

                  <div className="elastic-stats">

                    <div className="elastic-stat">
                      <span>
                        Traditional Sourcing Cycle
                      </span>

                      <strong>
                        60–90 Days
                      </strong>
                    </div>

                    <div className="elastic-stat">
                      <span>
                        TechTorch Turnaround
                      </span>

                      <strong className="elastic-highlight">
                        48 Hours
                      </strong>
                    </div>

                  </div>
                </div>

                {/* IP Compliance */}
                <div className="elastic-compliance-card">

                  <div className="elastic-compliance-title">
                    <ShieldCheck />

                    <span>
                      Full IP & Compliance Shield
                    </span>
                  </div>

                  <p>
                    Comprehensive intellectual property assignments, NDAs,
                    and enterprise security protocols are established prior
                    to initial code repository access.
                  </p>

                </div>

              </aside>


              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

              <main className="elastic-main">

                {/* Eyebrow */}
                <div className="elastic-eyebrow">
                  <span />
                  <span>CAPACITY ANALYSIS</span>
                </div>


                {/* Main Heading */}
                <h1 className="elastic-main-heading">
                  01 The Strategic Imperative of Elastic Engineering Capacity
                </h1>


                {/* Body */}
                <div className="elastic-prose">

                  <p>
                    Modern software enterprises operate under continuous
                    delivery stress. High-stakes platform deadlines,
                    sudden spikes in customer workload, and unexpected
                    architectural migrations can expose severe internal
                    resource bottlenecks without warning. When teams
                    scramble to accommodate urgent features, core product
                    roadmaps suffer debilitating delays.
                  </p>

                  <p>
                    Traditionally, organizations attempt to resolve
                    capacity shortages through conventional full-time
                    recruitment. Yet with average enterprise hiring cycles
                    stretching across 60 to 90 days, permanent recruiting
                    cannot respond fast enough to volatile demand spikes.
                    Long hiring lags leave vital initiatives stalled, while
                    overburdened internal engineering leads burn out under
                    unsustainable sprint loads.
                  </p>

                </div>


                {/* =================================================
                    PULL QUOTE
                ================================================= */}

                <blockquote className="elastic-quote">

                  <p>
                    "Contract staffing is no longer a tactical headcount
                    stopgap. In modern engineering, it is an architectural
                    buffer that protects core product roadmaps while
                    absorbing volatile sprint loads."
                  </p>

                  <div className="elastic-quote-author">
                    <Quote />

                    <span>
                      TechTorch Augmentation Practice Group
                    </span>
                  </div>

                </blockquote>


                {/* =================================================
                    SECTION 2
                ================================================= */}

                <h2 className="elastic-heading">
                  Decoupling Time-to-Market from Recruiting Latency
                </h2>

                <div className="elastic-prose">

                  <p>
                    TechTorch eliminates recruiting friction by maintaining
                    an active, pre-assessed bench of seasoned tech
                    practitioners. Rather than sifting through generic
                    resumes, hiring managers receive targeted candidate
                    portfolios curated specifically for the technical
                    demands of their stack.
                  </p>

                  <p>
                    Every candidate is evaluated through hands-on system
                    design scenarios, real-world refactoring exercises,
                    and architectural defense panels. Because we filter for
                    high autonomy and battle-tested industry depth, our
                    engineers begin writing production-ready code on day one
                    without demanding lengthy internal mentorship cycles
                    from your senior architects.
                  </p>

                </div>


                {/* =================================================
                    INFO CARDS
                ================================================= */}

                <div className="elastic-info-grid">

                  {/* Card 1 */}
                  <div className="elastic-info-card">

                    <div className="elastic-info-title">
                      <Shield2 />

                      <span>
                        Production-Vetted Competence
                      </span>
                    </div>

                    <p>
                      Verified track records in microservice decoupling,
                      high-load database sharding, and high-load
                      distributed architectures.
                    </p>

                  </div>


                  {/* Card 2 */}
                  <div className="elastic-info-card">

                    <div className="elastic-info-title">
                      <Repeat />

                      <span>
                        Turnkey Integration
                      </span>
                    </div>

                    <p>
                      Familiarity with modern enterprise CI/CD pipelines,
                      GitOps workflows, and automated test-driven
                      development methodologies.
                    </p>

                  </div>

                </div>


                {/* =================================================
                    SECTION 3
                ================================================= */}

                <h2 className="elastic-heading">
                  Seamless Integration & Zero Operational Friction
                </h2>

                <div className="elastic-prose">

                  <p>
                    Augmentation is only effective when external
                    contributors harmonize with your existing engineering
                    rituals. TechTorch practitioners adapt smoothly to your
                    team's standups, sprint estimation cadences, and review
                    standards, operating as a natural extension of your
                    team.
                  </p>

                  <p>
                    We guarantee overlapping business hours to facilitate
                    immediate communication, backed by clear sprint
                    accountability and bi-weekly performance reviews. Your
                    organization gets the exact velocity boost needed
                    without legal friction, complicated offboarding, or
                    long-term financial liabilities.
                  </p>

                </div>

              </main>

            </div>
          </div>
        </section>

      </div>


      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`

        /* =====================================================
           BASE
        ===================================================== */

        .elastic-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #1c1c1c;
          overflow: hidden;
          font-family: Inter, sans-serif;
        }

        .elastic-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;

          /* UNIVERSAL SPACING SYSTEM */
          padding-left: 100px;
          padding-right: 100px;
        }

        .elastic-page h1,
        .elastic-page h2,
        .elastic-page h3 {
          font-family: "Plus Jakarta Sans", sans-serif;
        }


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .elastic-section {
          width: 100%;
          padding-top: 70px;
          padding-bottom: 75px;
        }

        .elastic-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 300px minmax(0, 1fr);
          gap: 65px;
          align-items: start;
        }


        /* =====================================================
           SIDEBAR
        ===================================================== */

        .elastic-sidebar {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .elastic-side-card,
        .elastic-compliance-card {
          width: 100%;
          border-radius: 13px;
        }

        .elastic-side-card {
          padding: 21px;
          background: #fafafa;
          border: 1px solid #e4e4e4;
        }

        .elastic-side-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .elastic-side-label svg {
          width: 15px;
          height: 15px;
          flex-shrink: 0;
          color: ${BRAND_COLOR};
        }

        .elastic-side-label span {
          color: ${BRAND_COLOR};
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .elastic-side-card h3 {
          margin: 0 0 8px;
          color: #1c1c1c;
          font-size: 17px;
          line-height: 1.3;
          font-weight: 700;
        }

        .elastic-side-card > p {
          margin: 0 0 18px;
          color: #6b6b6b;
          font-size: 12px;
          line-height: 1.7;
        }

        .elastic-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 13px;
          border-top: 1px solid #e2e2e2;
        }

        .elastic-stat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .elastic-stat span {
          color: #999999;
          font-size: 10px;
          line-height: 1.4;
        }

        .elastic-stat strong {
          color: #5f5f5f;
          font-size: 10px;
          white-space: nowrap;
        }

        .elastic-stat .elastic-highlight {
          color: ${BRAND_COLOR};
        }


        /* =====================================================
           COMPLIANCE
        ===================================================== */

        .elastic-compliance-card {
          padding: 21px;
          background: rgba(115, 0, 36, 0.045);
          border: 1px solid rgba(115, 0, 36, 0.1);
        }

        .elastic-compliance-title {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-bottom: 12px;
        }

        .elastic-compliance-title svg {
          width: 15px;
          height: 15px;
          margin-top: 2px;
          flex-shrink: 0;
          color: ${BRAND_COLOR};
        }

        .elastic-compliance-title span {
          color: ${BRAND_COLOR};
          font-size: 12px;
          line-height: 1.4;
          font-weight: 600;
        }

        .elastic-compliance-card p {
          margin: 0;
          color: #626262;
          font-size: 11.5px;
          line-height: 1.7;
        }


        /* =====================================================
           MAIN CONTENT
        ===================================================== */

        .elastic-main {
          width: 100%;
          min-width: 0;
        }

        .elastic-eyebrow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 17px;
        }

        .elastic-eyebrow > span:first-child {
          width: 20px;
          height: 1px;
          flex-shrink: 0;
          background: ${BRAND_COLOR};
        }

        .elastic-eyebrow > span:last-child {
          color: ${BRAND_COLOR};
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .elastic-main-heading {
          max-width: 900px;
          margin: 0 0 25px;
          color: #1c1c1c;
          font-size: 32px;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .elastic-prose {
          display: flex;
          flex-direction: column;
          gap: 19px;
          margin-bottom: 30px;
          color: #626262;
          font-size: 13.5px;
          line-height: 1.8;
        }

        .elastic-prose p {
          margin: 0;
        }


        /* =====================================================
           PULL QUOTE
        ===================================================== */

        .elastic-quote {
          margin: 0 0 32px;
          padding: 19px 22px;
          border-left: 3px solid ${BRAND_COLOR};
          background: rgba(115, 0, 36, 0.05);
        }

        .elastic-quote > p {
          margin: 0 0 13px;
          color: #484848;
          font-size: 13px;
          line-height: 1.75;
          font-style: italic;
        }

        .elastic-quote-author {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .elastic-quote-author svg {
          width: 13px;
          height: 13px;
          margin-top: 2px;
          flex-shrink: 0;
          color: ${BRAND_COLOR};
        }

        .elastic-quote-author span {
          color: ${BRAND_COLOR};
          font-size: 10px;
          line-height: 1.5;
          font-weight: 600;
        }


        /* =====================================================
           SECTION HEADINGS
        ===================================================== */

        .elastic-heading {
          margin: 0 0 16px;
          color: #1c1c1c;
          font-size: 25px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.02em;
        }


        /* =====================================================
           INFO CARDS
        ===================================================== */

        .elastic-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 17px;
          margin-bottom: 34px;
        }

        .elastic-info-card {
          min-width: 0;
          padding: 19px;
          border: 1px solid #e3e3e3;
          border-radius: 10px;
          background: #fafafa;
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .elastic-info-card:hover {
          transform: translateY(-3px);
          border-color: rgba(115, 0, 36, 0.18);
          box-shadow: 0 10px 24px rgba(115, 0, 36, 0.05);
        }

        .elastic-info-title {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-bottom: 10px;
        }

        .elastic-info-title svg {
          width: 15px;
          height: 15px;
          margin-top: 1px;
          flex-shrink: 0;
          color: ${BRAND_COLOR};
        }

        .elastic-info-title span {
          color: #1c1c1c;
          font-size: 11.5px;
          line-height: 1.4;
          font-weight: 600;
        }

        .elastic-info-card p {
          margin: 0;
          color: #707070;
          font-size: 11px;
          line-height: 1.7;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1200px) {
          .elastic-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .elastic-grid {
            gap: 45px;
          }

          .elastic-main-heading {
            font-size: 29px;
          }
        }


        /* =====================================================
           TABLET / SMALL LAPTOP
        ===================================================== */

        @media (max-width: 900px) {
          .elastic-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .elastic-section {
            padding-top: 55px;
            padding-bottom: 60px;
          }

          .elastic-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .elastic-sidebar {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
          }

          .elastic-main-heading {
            max-width: 850px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {
          .elastic-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .elastic-section {
            padding-top: 45px;
            padding-bottom: 50px;
          }

          .elastic-sidebar {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .elastic-main-heading {
            font-size: 27px;
            line-height: 1.25;
            margin-bottom: 21px;
          }

          .elastic-prose {
            font-size: 12.5px;
            line-height: 1.75;
            gap: 16px;
            margin-bottom: 25px;
          }

          .elastic-quote {
            padding: 17px 18px;
            margin-bottom: 27px;
          }

          .elastic-quote > p {
            font-size: 12px;
          }

          .elastic-heading {
            font-size: 22px;
            margin-bottom: 13px;
          }

          .elastic-info-grid {
            grid-template-columns: 1fr;
            gap: 13px;
            margin-bottom: 28px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .elastic-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .elastic-section {
            padding-top: 35px;
            padding-bottom: 40px;
          }

          .elastic-side-card,
          .elastic-compliance-card {
            padding: 17px;
            border-radius: 11px;
          }

          .elastic-side-card h3 {
            font-size: 15px;
          }

          .elastic-side-card > p {
            font-size: 11px;
          }

          .elastic-stat {
            align-items: flex-start;
            flex-direction: column;
            gap: 3px;
          }

          .elastic-main-heading {
            font-size: 24px;
          }

          .elastic-prose {
            font-size: 11.5px;
          }

          .elastic-quote {
            padding: 15px 14px;
          }

          .elastic-quote > p {
            font-size: 11.5px;
          }

          .elastic-heading {
            font-size: 20px;
          }

          .elastic-info-card {
            padding: 16px;
          }
        }


        /* =====================================================
           EXTRA SMALL
        ===================================================== */

        @media (max-width: 360px) {
          .elastic-main-heading {
            font-size: 22px;
          }

          .elastic-heading {
            font-size: 19px;
          }

          .elastic-prose {
            font-size: 11px;
          }

          .elastic-side-card > p,
          .elastic-compliance-card p {
            font-size: 10.5px;
          }
        }

      `}</style>
    </>
  );
}