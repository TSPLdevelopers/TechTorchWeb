import React from "react";

export default function ScopeSelectionEngine() {
  const scopeCards = [
    {
      icon: "⌁",
      title: "Cloud & Infra Hardening",
      description:
        "AWS, Azure, GCP & on-premises Kubernetes posture analysis, container runtime defense, and immutable IaC pipeline auditing.",
      tags: ["Terraform", "EKS / GKE", "CSPM"],
    },
    {
      icon: "▣",
      title: "Autonomous & AI Governance",
      description:
        "Agentic workflow validation, LLM prompt injection safeguards, model weight exfiltration boundaries, and vector database isolation.",
      tags: ["LLM Firewalls", "Agent Guardrails", "RAG Security"],
    },
    {
      icon: "‹›",
      title: "Enterprise AppSec & DevSecOps",
      description:
        "Continuous dynamic and static code vulnerability sweeps, microservices fuzzing, open-source SBOM lineage, and API security.",
      tags: ["SAST/DAST", "SBOM Provenance", "GraphQL/gRPC"],
    },
    {
      icon: "♢",
      title: "Zero Trust & IAM Architecture",
      description:
        "Privileged access management (PAM), enterprise Okta/Entra ID policy reconciliation, contextual MFA, and non-human identity control.",
      tags: ["Least-Privilege", "PAM Architecture", "SSO Federation"],
    },
    {
      icon: "▯",
      title: "SOC & Incident Resilience",
      description:
        "24/7 dedicated SOC monitoring integration, red team war-gaming, ransomware disaster failover exercises, and business continuity.",
      tags: ["MDR / XDR", "Red Teaming", "Disaster Recovery"],
    },
    {
      icon: "✥",
      title: "Comprehensive C-Level Audit",
      description:
        "Complete full-stack diagnostic encompassing all 5 dimensions above, curated specifically for Board presentation and underwriting.",
      tags: ["Full Advisory", "Board-Ready Deck"],
      selected: true,
    },
  ];

  return (
    <section className="scope-section">
      <div className="scope-container">

        {/* HEADER */}
        <div className="scope-header">

          <div className="scope-eyebrow">
            SCOPE SELECTION ENGINE
          </div>

          <h2>
            Select Your Primary Transformation Vectors
          </h2>

          <p>
            Tailor the assessment criteria to match your high-priority
            operational vulnerabilities and strategic
            <br className="scope-desktop-break" />
            modernization initiatives.
          </p>

        </div>


        {/* CARDS */}
        <div className="scope-grid">

          {scopeCards.map((card, index) => (
            <div
              key={index}
              className={`scope-card ${
                card.selected ? "scope-card-selected" : ""
              }`}
            >

              {/* CARD TOP */}
              <div className="scope-card-top">

                <div className="scope-icon">
                  {card.icon}
                </div>

                <div className="scope-check">
                  ✓
                </div>

              </div>


              {/* CONTENT */}
              <h3>
                {card.title}
              </h3>

              <p className="scope-description">
                {card.description}
              </p>


              {/* TAGS */}
              <div className="scope-tags">

                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="scope-tag"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>


      <style>{`

        * {
          box-sizing: border-box;
        }


        /* =========================================
           SECTION
        ========================================= */

        .scope-section {
          width: 100%;
          background: #ffffff;

          font-family: "Inter", sans-serif;

          color: #20242d;

          overflow: hidden;
        }


        .scope-container {
          width: 100%;
          max-width: 1000px;

          margin: 0 auto;

          padding: 50px 30px 48px;
        }


        /* =========================================
           HEADER
        ========================================= */

        .scope-header {
          text-align: center;

          margin-bottom: 35px;
        }


        .scope-eyebrow {
          margin-bottom: 10px;

          color: #6d1645;

          font-size: 10px;

          line-height: 1;

          font-weight: 800;

          letter-spacing: 0.8px;
        }


        .scope-header h2 {
          margin: 0;

          color: #1e222a;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 25px;

          line-height: 1.25;

          font-weight: 500;

          letter-spacing: -0.7px;
        }


        .scope-header p {
          margin: 9px auto 0;

          color: #766e75;

          font-size: 12px;

          line-height: 1.55;

          font-weight: 400;
        }


        /* =========================================
           GRID
        ========================================= */

        .scope-grid {
          width: 100%;

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 18px;
        }


        /* =========================================
           CARD
        ========================================= */

        .scope-card {
          min-height: 212px;

          padding: 18px 18px 16px;

          display: flex;

          flex-direction: column;

          border: 1px solid #e1e7ec;

          border-radius: 9px;

          background: #f7f8fa;

          box-shadow:
            0 3px 10px rgba(35, 38, 45, 0.04);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }


        .scope-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 8px 20px rgba(35, 38, 45, 0.09);

          border-color: #d5dbe1;
        }


        /* =========================================
           SELECTED CARD
        ========================================= */

        .scope-card-selected {
          background: #771440;

          border-color: #771440;

          color: #ffffff;

          box-shadow:
            0 8px 20px rgba(119, 20, 64, 0.22);
        }


        .scope-card-selected:hover {
          background: #771440;

          border-color: #771440;
        }


        /* =========================================
           CARD TOP
        ========================================= */

        .scope-card-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 13px;
        }


        .scope-icon {
          width: 30px;

          height: 30px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 5px;

          background: #62002f;

          color: #ffffff;

          font-size: 16px;

          font-weight: 700;
        }


        .scope-card-selected .scope-icon {
          background: #ffffff;

          color: #771440;
        }


        .scope-check {
          width: 18px;

          height: 18px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: #e2e5e7;

          color: #596169;

          font-size: 10px;

          font-weight: 800;
        }


        .scope-card-selected .scope-check {
          background: #e56a9e;

          color: #ffffff;
        }


        /* =========================================
           TITLE
        ========================================= */

        .scope-card h3 {
          margin: 0;

          color: #252931;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;

          line-height: 1.3;

          font-weight: 750;

          letter-spacing: -0.2px;
        }


        .scope-card-selected h3 {
          color: #ffffff;
        }


        /* =========================================
           DESCRIPTION
        ========================================= */

        .scope-description {
          margin: 8px 0 0;

          color: #746c73;

          font-size: 11px;

          line-height: 1.5;

          font-weight: 400;
        }


        .scope-card-selected .scope-description {
          color: #f1dbe5;
        }


        /* =========================================
           TAGS
        ========================================= */

        .scope-tags {
          display: flex;

          flex-wrap: wrap;

          gap: 5px;

          margin-top: auto;

          padding-top: 13px;
        }


        .scope-tag {
          display: inline-flex;

          align-items: center;

          min-height: 18px;

          padding: 2px 8px;

          border-radius: 3px;

          background: #e8e8e9;

          color: #756d73;

          font-family: monospace;

          font-size: 8px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 0.7px;

          white-space: nowrap;
        }


        .scope-card-selected .scope-tag {
          background: #56052d;

          color: #ffffff;
        }


        /* =========================================
           LARGE DESKTOP
        ========================================= */

        @media (min-width: 1400px) {

          .scope-container {
            max-width: 1060px;

            padding-top: 55px;
          }


          .scope-grid {
            gap: 19px;
          }


          .scope-card {
            min-height: 215px;

            padding: 19px 19px 17px;
          }
        }


        /* =========================================
           LAPTOP
        ========================================= */

        @media (max-width: 1100px) {

          .scope-container {
            max-width: 940px;

            padding-left: 25px;
            padding-right: 25px;
          }


          .scope-grid {
            gap: 16px;
          }


          .scope-card {
            min-height: 210px;

            padding: 17px 17px 15px;
          }


          .scope-card h3 {
            font-size: 14px;
          }
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 800px) {

          .scope-container {
            padding: 42px 22px;
          }


          .scope-grid {
            grid-template-columns: repeat(2, 1fr);

            gap: 15px;
          }


          .scope-card {
            min-height: 205px;
          }
        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 560px) {

          .scope-container {
            padding: 35px 16px 38px;
          }


          .scope-header {
            margin-bottom: 27px;
          }


          .scope-eyebrow {
            font-size: 9px;
          }


          .scope-header h2 {
            font-size: 22px;

            line-height: 1.25;
          }


          .scope-header p {
            font-size: 11px;

            line-height: 1.5;
          }


          .scope-desktop-break {
            display: none;
          }


          .scope-grid {
            grid-template-columns: 1fr;

            gap: 13px;
          }


          .scope-card {
            min-height: 190px;

            padding: 16px;
          }


          .scope-card h3 {
            font-size: 15px;
          }


          .scope-description {
            font-size: 11px;

            line-height: 1.5;
          }
        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 380px) {

          .scope-container {
            padding-left: 12px;
            padding-right: 12px;
          }


          .scope-header h2 {
            font-size: 20px;
          }


          .scope-card {
            min-height: 185px;

            padding: 15px;
          }


          .scope-card h3 {
            font-size: 14px;
          }


          .scope-description {
            font-size: 10px;
          }


          .scope-tag {
            font-size: 7px;

            padding-left: 7px;
            padding-right: 7px;
          }
        }

      `}</style>
    </section>
  );
}