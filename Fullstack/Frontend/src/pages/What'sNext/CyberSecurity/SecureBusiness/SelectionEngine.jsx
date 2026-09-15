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
              className="scope-card"
            >
              <div className="scope-card-top">

                <div className="scope-icon">
                  {card.icon}
                </div>

                <div className="scope-check">
                  ✓
                </div>

              </div>

              <h3>
                {card.title}
              </h3>

              <p className="scope-description">
                {card.description}
              </p>

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

        /* ================= HEADER ================= */

        .scope-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .scope-eyebrow {
          margin-bottom: 10px;
          color: #6d1645;
          font-size: 11px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .scope-header h2 {
          margin: 0;
          color: #1e222a;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 25px;
          line-height: 1.25;
          font-weight: 600;
          letter-spacing: -0.7px;
        }

        .scope-header p {
          margin: 9px auto 0;
          color: #766e75;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 500;
        }

        /* ================= GRID ================= */

        .scope-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));

          /* Increased horizontal gap */
          column-gap: 36px;
          row-gap: 18px;
        }

        /* ================= CARD ================= */

        .scope-card {
          min-height: 212px;
          padding: 18px 18px 16px;

          display: flex;
          flex-direction: column;

          border: 1px solid #e1e7ec;
          border-radius: 9px;
          background: #ffffff;

          box-shadow: 0 3px 10px rgba(35, 38, 45, 0.04);

          color: #20242d;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
        }

        .scope-card:hover {
          transform: translateY(-6px);
          background: #771440;
          border-color: #771440;
          color: #ffffff;

          box-shadow: 0 10px 25px rgba(119, 20, 64, 0.22);
        }

        /* ================= CARD TOP ================= */

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

          font-size: 17px;
          font-weight: 700;

          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        .scope-card:hover .scope-icon {
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

          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        .scope-card:hover .scope-check {
          background: #e56a9e;
          color: #ffffff;
        }

        /* ================= CARD TEXT ================= */

        .scope-card h3 {
          margin: 0;

          color: #252931;
          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          line-height: 1.3;
          font-weight: 700;
          letter-spacing: -0.2px;

          transition: color 0.3s ease;
        }

        .scope-card:hover h3 {
          color: #ffffff;
        }

        .scope-description {
          margin: 8px 0 0;

          color: #746c73;

          font-size: 12.5px;
          line-height: 1.5;
          font-weight: 500;

          transition: color 0.3s ease;
        }

        .scope-card:hover .scope-description {
          color: #f1dbe5;
        }

        /* ================= TAGS ================= */

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
          font-size: 10px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.7px;

          white-space: nowrap;

          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        .scope-card:hover .scope-tag {
          background: #56052d;
          color: #ffffff;
        }

        /* =====================================================
           LARGE DESKTOP
        ===================================================== */

        @media (min-width: 1400px) {

          .scope-container {
            max-width: 1060px;
            padding-top: 55px;
          }

          .scope-grid {
            column-gap: 38px;
            row-gap: 19px;
          }

          .scope-card {
            min-height: 215px;
            padding: 19px 19px 17px;
          }
        }

        /* =====================================================
           LAPTOP / SMALL DESKTOP
        ===================================================== */

        @media (max-width: 1100px) {

          .scope-container {
            max-width: 940px;
            padding-left: 25px;
            padding-right: 25px;
          }

          .scope-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 30px;
            row-gap: 16px;
          }

          .scope-card {
            min-height: 210px;
            padding: 17px 17px 15px;
          }

          .scope-card h3 {
            font-size: 14px;
          }

          .scope-description {
            font-size: 12px;
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 800px) {

          .scope-container {
            max-width: 700px;
            padding: 42px 22px;
          }

          .scope-header {
            margin-bottom: 30px;
          }

          .scope-header h2 {
            font-size: 24px;
          }

          .scope-header p {
            font-size: 12px;
          }

          .scope-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 24px;
            row-gap: 15px;
          }

          .scope-card {
            min-height: 205px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 560px) {

          .scope-container {
            width: 100%;
            max-width: 100%;
            padding: 35px 16px 38px;
          }

          .scope-header {
            margin-bottom: 27px;
          }

          .scope-eyebrow {
            margin-bottom: 9px;
            font-size: 9px;
            letter-spacing: 0.7px;
          }

          .scope-header h2 {
            font-size: 22px;
            line-height: 1.25;
            letter-spacing: -0.5px;
          }

          .scope-header p {
            margin-top: 9px;
            font-size: 11px;
            line-height: 1.5;
          }

          .scope-desktop-break {
            display: none;
          }

          .scope-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 13px;
          }

          .scope-card {
            width: 100%;
            min-height: 190px;
            padding: 16px;
          }

          .scope-card-top {
            margin-bottom: 12px;
          }

          .scope-card h3 {
            font-size: 15px;
            line-height: 1.3;
          }

          .scope-description {
            font-size: 11px;
            line-height: 1.5;
          }

          .scope-tags {
            gap: 5px;
            padding-top: 12px;
          }

          .scope-tag {
            font-size: 9px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .scope-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .scope-header {
            margin-bottom: 24px;
          }

          .scope-eyebrow {
            font-size: 8px;
          }

          .scope-header h2 {
            font-size: 20px;
          }

          .scope-header p {
            font-size: 10px;
          }

          .scope-grid {
            row-gap: 12px;
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

        /* =====================================================
           VERY SMALL DEVICES
        ===================================================== */

        @media (max-width: 320px) {

          .scope-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .scope-header h2 {
            font-size: 18px;
          }

          .scope-header p {
            font-size: 9px;
          }

          .scope-card {
            padding: 14px;
          }

          .scope-card h3 {
            font-size: 13px;
          }

          .scope-description {
            font-size: 9.5px;
          }

          .scope-icon {
            width: 28px;
            height: 28px;
            font-size: 16px;
          }

          .scope-check {
            width: 17px;
            height: 17px;
            font-size: 9px;
          }

          .scope-tag {
            font-size: 6.5px;
          }
        }

        /* =====================================================
           TOUCH DEVICES
        ===================================================== */

        @media (hover: none) and (pointer: coarse) {

          .scope-card:hover {
            transform: none;
          }
        }

      `}</style>
    </section>
  );
}