import React from "react";
import { useNavigate } from "react-router-dom";

export default function EngagementProtocol() {
  const navigate = useNavigate();

  const stages = [
    {
      number: "01",
      title: "Pre-Assessment Legal & NDA Sealing",
      timeline: "Hour 00 – 04 · Mutual Execution",
      status: "Ready for Seal",
      statusType: "green",
      description:
        "Instant mutual MNDA execution establishing attorney-client-adjacent architectural privilege. Cryptographic privilege keys are provisioned for all telemetry handshakes, locking stakeholder authorization rosters into immutable auditable logs.",
      tags: [
        ["Bilateral Non-Disclosure Execution", "shield"],
        ["ECDSA P-384 Privilege Keys Generated", "key"],
      ],
    },
    {
      number: "02",
      title: "Zero-Intrusion Passive Reconnaissance",
      timeline: "Hour 04 – 24 · Read-Only Telemetry",
      status: "Passive Mode",
      statusType: "gray",
      description:
        "Non-intrusive surface telemetry and perimeter configuration parsing via read-only APIs and external DNS/egress surface mapping. Absolutely no credential injection, zero active credential harvesting, and an ironclad SLA guaranteeing 0.00% production latency degradation.",
      tags: [
        ["Non-Agentic Read-Only API Ingestion", "api"],
        ["Zero Downtime SLA Binding", "clock"],
      ],
    },
    {
      number: "03",
      title: "Diagnostic Gap Synthesis & Modeling",
      timeline: "Hour 24 – 48 · Advanced Correlation",
      status: "Synthesis",
      statusType: "gray",
      description:
        "Cross-referencing multi-cloud IAM privilege graphs, autonomous AI agent execution boundaries, and microservice mesh configurations against known CVE databases and sovereign zero-day registries without touching customer payloads.",
      tags: [
        ["Multi-Cloud Graph Privilege Traversal", "graph"],
        ["AI Agent Prompt-Injection Boundary Test", "ai"],
      ],
    },
    {
      number: "04",
      title: "Executive Debrief & Telemetry Handoff",
      timeline: "Hour 48+ · Board-Ready Reporting",
      status: "Encrypted Egress",
      statusType: "green",
      description:
        "Delivery of the classified 30-60-90 day remediation matrix and board-ready executive security portfolio. All temporary telemetry scratchspaces are cryptographically shredded in accordance with DoD 5220.22-M zero-footprint directives.",
      tags: [
        ["End-to-End PGP Armor Distribution", "lock"],
        ["Zero Retained Telemetry Certificate", "certificate"],
      ],
    },
  ];

  const guardrails = [
    {
      title: "Zero Production Disruption Guarantee",
      text: "SLA backed 100% passive query limits. Diagnostic tools operate below 0.5% system ceiling.",
    },
    {
      title: "Strict Read-Only Probing",
      text: "Zero write permissions requested. Zero database mutation or privileged customer record traversal.",
    },
    {
      title: "Data Privacy & 7-Day Purge SLA",
      text: "All configuration hashes and architectural metadata fully expunged within 168 hours of presentation.",
    },
    {
      title: "Sovereign Data Boundary Enforced",
      text: "Diagnostic telemetry strictly restricted to specified cloud regions (US-East/EU-West as mandated).",
    },
  ];

  return (
    <div className="protocol-page">

      {/* HEADER */}
      <header className="protocol-header">
        <div className="protocol-badge">
          <span className="badge-dot" />
          TECHTORCH SECURITY GOVERNANCE & LEGAL COMPLIANCE · INSTITUTIONAL PROTOCOL
        </div>

        <div className="protocol-meta">
          <span className="protocol-id">
            <Icon name="dot" size={13} />
            PROTOCOL ID: TT-ENG-2024-SEC-09
          </span>

          <span className="version-badge">
            V4.2 CERTIFIED
          </span>
        </div>
      </header>

      {/* HERO */}
      <section className="protocol-hero">
        <div className="hero-content">
          <h1>Enterprise Security Engagement Protocol</h1>

          <p>
            A formal, zero-disruption operating agreement establishing
            non-intrusive diagnostic boundaries, mutual non-disclosure
            privilege, and institutional security governance before
            engagement.
          </p>
        </div>

        <div className="hero-actions">
          <button
            className="export-btn"
            onClick={() => navigate("/export-protocol")}
          >
            <Icon name="download" size={14} />
            Export Protocol Package
          </button>

          <button
            className="accept-btn"
            onClick={() => navigate("/accept-proceed")}
          >
            Accept & Proceed
            <Icon name="arrow-right" size={15} />
          </button>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certification-strip">
        <Certification
          icon="award"
          title="ISO/IEC 27001"
          subtitle="Global Certified"
        />

        <Certification
          icon="shield"
          title="SOC 2 Type II"
          subtitle="Continuous Audit"
        />

        <Certification
          icon="at"
          title="FedRAMP High"
          subtitle="Control Alignment"
        />

        <Certification
          icon="key"
          title="Tier-IV NDA"
          subtitle="Privileged Sealing"
        />

        <Certification
          icon="retention"
          title="Zero Retention"
          subtitle="Ephemeral Storage"
          green
        />
      </section>

      {/* MAIN CONTENT */}
      <main className="protocol-main">

        {/* LEFT */}
        <div className="roadmap-column">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">
                SEQUENTIAL ROADMAP
              </div>

              <h2>
                Protocol Execution Stages
              </h2>
            </div>

            <div className="lifecycle">
              <Icon name="clock" size={14} />
              48h Full Lifecycle
            </div>
          </div>

          <div className="stage-list">
            {stages.map((stage) => (
              <StageCard
                key={stage.number}
                {...stage}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <aside className="sidebar">

          {/* GUARDRAILS */}
          <section className="side-card">
            <div className="side-title">
              <div className="side-icon green-icon">
                <Icon name="shield-check" size={23} />
              </div>

              <div>
                <div className="side-eyebrow">
                  STRICT WARRANTIES
                </div>

                <h3>
                  Operational Guardrails
                </h3>
              </div>
            </div>

            <div className="guardrail-list">
              {guardrails.map((item, index) => (
                <div
                  className="guardrail"
                  key={index}
                >
                  <div className="check">
                    <Icon name="check" size={11} />
                  </div>

                  <div>
                    <strong>
                      {item.title}
                    </strong>

                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PERSONNEL */}
          <section className="side-card personnel-card">
            <div className="side-title">
              <div className="side-icon purple-icon">
                <Icon name="badge" size={23} />
              </div>

              <div>
                <div className="side-eyebrow">
                  GOVERNANCE & PERSONNEL
                </div>

                <h3>
                  Assigned Lead Architects
                </h3>
              </div>
            </div>

            <Person
              image="/EvelynVance.png"
              name="Dr. Evelyn Vance"
              role="LEAD PARTNER"
              credential="CISSP, CISM · ex-DRPA Cyber Fellow"
              specialty="Lead Defense & Cryptographic Architecture"
            />

            <Person
              image="/MarcusChen.png"
              name="Marcus Chen"
              role="PRINCIPAL"
              credential="Cloud Security Alliance (CSA) Fellow"
              specialty="Zero-Trust & Infrastructure Synthesis"
            />

            <div className="legal-section">
              <h4>
                LEGAL JURISDICTION & VENUE
              </h4>

              <p>
                Engagement subject to standard Delaware bilateral choice
                of law with expedited arbitration under the American
                Arbitration Association (AAA) Commercial Rules.
              </p>
            </div>
          </section>
        </aside>
      </main>

      {/* PACKAGE */}
      <section className="package-card">
        <div className="package-info">
          <h2>
            <Icon name="file" size={19} />
            Institutional Protocol Package (v4.2)
          </h2>

          <p>
            Complete non-disclosure covenants, bilateral non-liability
            guarantees, passive probing technical manifests, and
            incident response liability boundaries.
          </p>

          <div className="hash">
            SHA-256:
            <br />
            8f3d198a24c55e9ed91f9bc9a7702f54a8b79d612e4b85c13e4e9f7832ad5106
          </div>
        </div>

        <div className="package-actions">
          <button className="clarification-btn">
            <Icon name="phone" size={15} />
            Schedule Clarification Call
          </button>

          <button className="package-accept">
            Accept Protocol & Proceed to Intake
            <Icon name="arrow-right" size={15} />
          </button>
        </div>
      </section>

      {/* PURPLE FOOTER */}
      <footer className="protocol-footer">

        <div className="footer-item">
          <span className="footer-icon">
            <Icon name="support" size={19} />
          </span>

          <div className="footer-text">
            <strong>
              Security Governance Desk:
            </strong>

            <br />

            <a
              href="mailto:legal@techtorch.solutions"
              className="footer-link"
            >
              legal@techtorch.solutions
            </a>
          </div>
        </div>

        <div className="footer-item">
          <span className="footer-icon">
            <Icon name="phone" size={18} />
          </span>

          <div className="footer-text">
            <strong>
              Priority Line:
            </strong>

            <br />

            <a
              href="tel:+915813500381"
              className="footer-link"
            >
              +91 581 350 0381
            </a>
          </div>
        </div>

        <div className="footer-item footer-copyright">
          <span className="footer-icon">
            <Icon name="certificate" size={17} />
          </span>

          <div className="footer-text">
            © 2024–2026 TechTorch Solutions. All engagements protected
            under bilateral legal privilege.
          </div>
        </div>

      </footer>

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        .protocol-page {
          width: 100%;
          min-height: 100vh;

          /* INCREASED DESKTOP PADDING */
          padding: 50px 130px 35px;

          background: #f7f8fa;
          color: #172033;
          font-family: "Inter", Arial, sans-serif;
        }

        /* HEADER */

        .protocol-header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .protocol-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 27px;
          padding: 0 12px;
          border: 1px solid #dfc8d5;
          border-radius: 20px;
          background: #f4edf1;
          color: #71123f;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #76003d;
          flex-shrink: 0;
        }

        .protocol-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #6c778b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .protocol-id {
          display: flex;
          align-items: center;
          gap: 5px;
          white-space: nowrap;
        }

        .version-badge {
          padding: 5px 8px;
          border-radius: 4px;
          background: #e8ebef;
          color: #4d586a;
          font-size: 10px;
          letter-spacing: .3px;
        }

        /* HERO */

        .protocol-hero {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          padding: 29px 0 26px;
        }

        .hero-content {
          max-width: 690px;
          min-width: 0;
        }

        .hero-content h1 {
          margin: 0 0 12px;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 30px;
          line-height: 1.16;
          letter-spacing: -1.5px;
          font-weight: 600;
          color: #111a2c;
        }

        .hero-content p {
          margin: 0;
          max-width: 720px;
          color: #657389;
          font-size: 14px;
          line-height: 1.55;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 9px;
          padding-bottom: 1px;
          flex-shrink: 0;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        .export-btn,
        .accept-btn {
          min-height: 35px;
          padding: 0 15px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 700;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .export-btn {
          border: 1px solid #e2e5e9;
          background: #e9ebee;
          color: #475367;
        }

        .accept-btn {
          border: 1px solid #75003e;
          background: #75003e;
          color: white;
          box-shadow: 0 5px 12px rgba(117, 0, 62, .14);
        }

        /* CERTIFICATIONS */

        .certification-strip {
          width: 100%;
          min-height: 74px;
          padding: 12px 20px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          gap: 20px;
          background: white;
          border: 1px solid #e4e7eb;
          border-radius: 9px;
          box-shadow: 0 2px 7px rgba(20, 30, 45, .025);
        }

        .certification {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .cert-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #f1f2f4;
          color: #72003e;
          flex-shrink: 0;
        }

        .cert-icon.green {
          color: #21875e;
        }

        .certification strong {
          display: block;
          color: #263045;
          font-size: 12.5px;
          font-weight: 800;
          margin-bottom: 3px;
        }

        .certification span {
          display: block;
          color: #718096;
          font-size: 10.5px;
        }

        /* MAIN */

        .protocol-main {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(320px, 1fr);
          gap: 24px;
          margin-top: 29px;
        }

        .section-heading-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 15px;
        }

        .eyebrow,
        .side-eyebrow {
          color: #741040;
          font-size: 10.5px;
          font-weight: 900;
        }

        .section-heading-row h2 {
          margin: 3px 0 0;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -.8px;
          color: #151e31;
        }

        .lifecycle {
          padding: 5px 9px;
          border-radius: 15px;
          background: #e9ebed;
          color: #647084;
          font-size: 10.5px;
          font-weight: 700;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        /* STAGES */

        .stage-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .stage-card {
          padding: 20px;
          background: white;
          border: 1px solid #e4e7eb;
          border-radius: 9px;
          box-shadow: 0 2px 7px rgba(20, 30, 45, .025);
        }

        .stage-top {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .stage-number {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #73003e;
          color: white;
          font-size: 12px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .stage-title-box {
          flex: 1;
          min-width: 0;
        }

        .stage-title-box h3 {
          margin: 0 0 3px;
          color: #202a3e;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -.25px;
        }

        .timeline {
          color: #748096;
          font-size: 11px;
          font-weight: 600;
        }

        .stage-status {
          padding: 5px 9px;
          border-radius: 14px;
          font-size: 10.5px;
          font-weight: 750;
          white-space: nowrap;
        }

        .status-green {
          color: #159368;
          border: 1px solid #a5ebd2;
          background: #effcf7;
        }

        .status-gray {
          color: #617086;
          background: #e8ebee;
        }

        .stage-description {
          margin: 13px 0 15px;
          color: #647187;
          font-size: 13.5px;
          line-height: 1.52;
        }

        .stage-tags {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .stage-tag {
          min-height: 29px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 0 10px;
          border-radius: 6px;
          background: #f0f1f3;
          color: #4e5b6e;
          font-size: 10.5px;
          font-weight: 750;
          min-width: 0;
        }

        .stage-tag-icon {
          color: #741040;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* SIDEBAR */

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 19px;
          min-width: 0;
        }

        .side-card {
          padding: 20px;
          background: white;
          border: 1px solid #e4e7eb;
          border-radius: 9px;
          box-shadow: 0 2px 7px rgba(20, 30, 45, .025);
        }

        .side-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .side-icon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          flex-shrink: 0;
        }

        .green-icon {
          color: white;
          background: #08644d;
        }

        .purple-icon {
          color: #7a174e;
          background: #f1e8ee;
        }

        .side-title h3 {
          margin: 2px 0 0;
          color: #182237;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -.35px;
        }

        .guardrail-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .guardrail {
          display: flex;
          gap: 9px;
          padding: 12px 10px;
          border-radius: 6px;
          background: #f0f1f3;
        }

        .check {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #1aa176;
          border-radius: 50%;
          color: #15956e;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .guardrail strong {
          display: block;
          color: #344056;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .guardrail p {
          margin: 0;
          color: #6d7889;
          font-size: 11px;
          line-height: 1.45;
        }

        /* PERSONNEL */

        .personnel-card {
          padding-bottom: 17px;
        }

        .person {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px;
          margin-bottom: 9px;
          border-radius: 6px;
          background: #f0f1f3;
        }

        .person img {
          width: 39px;
          height: 39px;
          object-fit: cover;
          border-radius: 50%;
          background: #d9dce1;
          flex-shrink: 0;
        }

        .person-info {
          min-width: 0;
        }

        .person-name {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #273247;
          font-size: 13px;
          font-weight: 800;
          flex-wrap: wrap;
        }

        .person-role {
          padding: 2px 4px;
          background: #e4e6e9;
          color: #7b8493;
          font-size: 9px;
          font-weight: 900;
        }

        .person-credential {
          margin-top: 3px;
          color: #741040;
          font-size: 10px;
          font-weight: 700;
        }

        .person-specialty {
          margin-top: 2px;
          color: #6e7889;
          font-size: 10px;
          font-weight: 700;
        }

        .legal-section {
          padding-top: 11px;
          border-top: 1px solid #e3e5e8;
        }

        .legal-section h4 {
          margin: 0 0 6px;
          color: #182237;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .4px;
        }

        .legal-section p {
          margin: 0;
          color: #727d8f;
          font-size: 12px;
          line-height: 1.5;
        }

        /* PACKAGE */

        .package-card {
          margin-top: 54px;
          padding: 25px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          background: white;
          border: 1px solid #e4e7eb;
          border-radius: 9px;
          box-shadow: 0 2px 7px rgba(20, 30, 45, .035);
        }

        .package-info {
          min-width: 0;
          max-width: 570px;
        }

        .package-info h2 {
          margin: 0 0 9px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #1b2538;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -.4px;
        }

        .package-info h2 svg {
          color: #72003e;
          flex-shrink: 0;
        }

        .package-info p {
          margin: 0 0 14px;
          color: #69758a;
          font-size: 13px;
          line-height: 1.45;
        }

        .hash {
          padding: 7px 10px;
          border-radius: 5px;
          background: #e9ebee;
          color: #6d7788;
          font-family: monospace;
          font-size: 11px;
          line-height: 1.4;
          word-break: break-all;
        }

        .package-actions {
          display: flex;
          align-items: center;
          gap: 9px;
          flex-shrink: 0;
        }

        .clarification-btn,
        .package-accept {
          min-height: 37px;
          padding: 0 14px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 750;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        .clarification-btn {
          border: 1px solid #e1e4e8;
          background: #e8eaed;
          color: #536075;
        }

        .package-accept {
          border: 1px solid #73003e;
          background: #73003e;
          color: white;
        }

        /* PURPLE FOOTER */

        .protocol-footer {
          min-height: 68px;
          margin-top: 29px;
          padding: 15px 32px;

          display: grid;
          grid-template-columns: 1fr 1fr 1.5fr;
          align-items: center;
          gap: 35px;

          border-radius: 8px;
          background: #58002f;
          color: #f6dfea;

          font-size: 12px;
          line-height: 1.45;
          letter-spacing: .7px;
        }

        .footer-item {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
        }

        .footer-icon {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #f8e8f0;
        }

        .footer-text {
          min-width: 0;
        }

        .protocol-footer strong {
          font-size: 10px;
          letter-spacing: 1px;
          color: #f8e8f0;
        }

        .footer-link {
          color: #f6dfea;
          text-decoration: none;
          transition: color .2s ease;
          overflow-wrap: anywhere;
        }

        .footer-link:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .footer-copyright {
          align-items: center;
        }

        .footer-copyright .footer-text {
          line-height: 1.45;
        }

        /* =========================================
           LARGE LAPTOP
        ========================================= */

        @media (max-width: 1400px) {

          .protocol-page {
            padding-left: 110px;
            padding-right: 110px;
          }

        }

        /* =========================================
           LAPTOP / SMALL DESKTOP
        ========================================= */

        @media (max-width: 1200px) {

          .protocol-page {
            padding-left: 80px;
            padding-right: 80px;
          }

          .protocol-main {
            grid-template-columns: minmax(0, 1.35fr) minmax(300px, 1fr);
            gap: 20px;
          }

          .certification-strip {
            gap: 14px;
          }

          .protocol-hero {
            gap: 20px;
          }

          .hero-content h1 {
            font-size: 28px;
          }

          .package-card {
            gap: 18px;
          }

        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1000px) {

          .protocol-page {
            padding-left: 60px;
            padding-right: 60px;
          }

          .protocol-main {
            grid-template-columns: 1fr;
          }

          .sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }

          .package-card {
            flex-direction: column;
            align-items: stretch;
          }

          .package-info {
            max-width: none;
          }

          .package-actions {
            width: 100%;
          }

          .package-actions button {
            flex: 1;
          }

        }

        /* =========================================
           SMALL TABLET
        ========================================= */

        @media (max-width: 768px) {

          .protocol-page {
            padding-left: 45px;
            padding-right: 45px;
          }

          .protocol-header {
            align-items: flex-start;
            flex-direction: column;
          }

          .protocol-meta {
            width: 100%;
            justify-content: space-between;
          }

          .protocol-hero {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .hero-content {
            max-width: 100%;
          }

          .hero-content h1 {
            font-size: 27px;
          }

          .hero-actions {
            width: 100%;
          }

          .hero-actions button {
            flex: 1;
          }

          .certification-strip {
            grid-template-columns: repeat(2, 1fr);
          }

          .sidebar {
            grid-template-columns: 1fr;
          }

          .protocol-footer {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 14px 20px;
          }

          .footer-copyright {
            grid-column: 1 / -1;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .protocol-page {
            padding: 20px 20px 22px;
          }

          .protocol-badge {
            width: 100%;
            height: auto;
            min-height: 28px;
            padding: 6px 10px;
            font-size: 8.5px;
            line-height: 1.3;
          }

          .protocol-meta {
            flex-wrap: wrap;
            gap: 7px;
            font-size: 9px;
          }

          .protocol-hero {
            padding: 23px 0 20px;
            gap: 20px;
          }

          .hero-content h1 {
            font-size: 25px;
            letter-spacing: -1px;
          }

          .hero-content p {
            font-size: 13px;
            line-height: 1.55;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-actions button {
            width: 100%;
            flex: none;
          }

          .certification-strip {
            grid-template-columns: 1fr;
            gap: 13px;
            padding: 15px;
          }

          .protocol-main {
            margin-top: 23px;
          }

          .section-heading-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .section-heading-row h2 {
            font-size: 20px;
          }

          .stage-card {
            padding: 16px;
          }

          .stage-top {
            align-items: flex-start;
          }

          .stage-title-box h3 {
            font-size: 13px;
            line-height: 1.3;
          }

          .timeline {
            font-size: 9.5px;
          }

          .stage-status {
            font-size: 9px;
          }

          .stage-description {
            font-size: 12.5px;
          }

          .stage-tags {
            grid-template-columns: 1fr;
          }

          .sidebar {
            display: flex;
          }

          .package-card {
            margin-top: 30px;
            padding: 19px 16px;
          }

          .package-info h2 {
            font-size: 15px;
          }

          .package-info p {
            font-size: 11.5px;
          }

          .package-actions {
            flex-direction: column;
          }

          .package-actions button {
            width: 100%;
          }

          .protocol-footer {
            grid-template-columns: 1fr;
            gap: 13px;
            min-height: 68px;
            padding: 16px;
          }

          .footer-copyright {
            grid-column: auto;
          }

          .footer-item {
            align-items: center;
          }

        }

        /* =========================================
           EXTRA SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {

          .protocol-page {
            padding: 15px 15px 18px;
          }

          .protocol-badge {
            font-size: 8px;
          }

          .protocol-id {
            white-space: normal;
          }

          .hero-content h1 {
            font-size: 22px;
          }

          .hero-content p {
            font-size: 12px;
          }

          .certification-strip {
            padding: 13px;
          }

          .stage-card {
            padding: 14px;
          }

          .stage-number {
            width: 29px;
            height: 29px;
          }

          .stage-title-box h3 {
            font-size: 12.5px;
          }

          .stage-description {
            font-size: 12px;
          }

          .side-card {
            padding: 16px;
          }

          .package-card {
            padding: 17px 14px;
          }

          .package-info h2 {
            font-size: 14px;
          }

          .protocol-footer {
            padding: 14px;
            font-size: 11px;
          }

        }

      `}</style>
    </div>
  );
}


/* =========================================================
   ICON SYSTEM
========================================================= */

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {

    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="5.2" />
          <path d="M8.8 12.1 7.5 21l4.5-2.4 4.5 2.4-1.3-8.9" />
          <path d="m12 5.5.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.8-1.6.8.3-1.8-1.3-1.3 1.8-.3L12 5.5Z" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5.5c0 5.1-3.2 8.3-8 9.5-4.8-1.2-8-4.4-8-9.5V6l8-3Z" />
          <path d="m8.5 12 2.2 2.2 4.8-4.8" />
        </svg>
      );

    case "shield-check":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5.5c0 5.1-3.2 8.3-8 9.5-4.8-1.2-8-4.4-8-9.5V6l8-3Z" />
          <path d="m8.3 12 2.3 2.3 5.1-5.1" />
        </svg>
      );

    case "at":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3 6.7" />
        </svg>
      );

    case "key":
      return (
        <svg {...common}>
          <circle cx="8" cy="15" r="4" />
          <path d="m11 12 9-9" />
          <path d="m17 6 2 2" />
          <path d="m14.5 8.5 2 2" />
        </svg>
      );

    case "retention":
      return (
        <svg {...common}>
          <path d="M12 5a7 7 0 1 1-6.2 3.7" />
          <path d="M5 5v4h4" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
      );

    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5v4.8l3 1.8" />
        </svg>
      );

    case "dot":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
        </svg>
      );

    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v11" />
          <path d="m7.5 9.5 4.5 4.5 4.5-4.5" />
          <path d="M5 20h14" />
        </svg>
      );

    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12.5 4.2 4.2L19 7" />
        </svg>
      );

    case "badge":
      return (
        <svg {...common}>
          <rect
            x="5"
            y="4"
            width="14"
            height="16"
            rx="2"
          />
          <path d="M9 4V2h6v2" />
          <circle cx="12" cy="10" r="2" />
          <path d="M8.5 16c1.2-1.8 5.8-1.8 7 0" />
        </svg>
      );

    case "api":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="m8 11 8-4" />
          <path d="m8 13 8 4" />
        </svg>
      );

    case "graph":
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="m7.8 7.5 8.4-1" />
          <path d="m7.2 8.7 3.6 7.2" />
          <path d="m16.8 7.7-3.6 8.4" />
        </svg>
      );

    case "ai":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5V3" />
          <path d="M12 21v-2" />
          <path d="M5 12H3" />
          <path d="M21 12h-2" />
          <path d="m7 7-1.5-1.5" />
          <path d="m18.5 18.5-1.5-1.5" />
          <path d="m17 7 1.5-1.5" />
          <path d="m6.5 18.5 1.5-1.5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect
            x="5"
            y="10"
            width="14"
            height="10"
            rx="2"
          />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      );

    case "certificate":
      return (
        <svg {...common}>
          <circle cx="12" cy="10" r="5" />
          <path d="m9.5 14 1 7 1.5-2 1.5 2 1-7" />
          <path d="m12 7 .8 1.5 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3L12 7Z" />
        </svg>
      );

    case "file":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h4" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M7 4h3l1.5 4-2 1.5a14 14 0 0 0 5 5l1.5-2 4 1.5v3c0 1-1 2-2 2C11 19.5 4.5 13 4.5 6c0-1 1-2 2.5-2Z" />
        </svg>
      );

    case "support":
      return (
        <svg {...common}>
          <path d="M4 13a8 8 0 0 1 16 0" />
          <path d="M4 13v3a2 2 0 0 0 2 2h2v-5H6" />
          <path d="M20 13v3a2 2 0 0 1-2 2h-2v-5h2" />
          <path d="M9 19h6" />
        </svg>
      );

    default:
      return null;
  }
}


/* =========================================================
   CERTIFICATION COMPONENT
========================================================= */

function Certification({
  icon,
  title,
  subtitle,
  green = false,
}) {
  return (
    <div className="certification">

      <div
        className={`cert-icon ${
          green ? "green" : ""
        }`}
      >
        <Icon
          name={icon}
          size={18}
        />
      </div>

      <div>
        <strong>
          {title}
        </strong>

        <span>
          {subtitle}
        </span>
      </div>

    </div>
  );
}


/* =========================================================
   STAGE CARD
========================================================= */

function StageCard({
  number,
  title,
  timeline,
  status,
  statusType,
  description,
  tags,
}) {
  return (
    <article className="stage-card">

      <div className="stage-top">

        <div className="stage-number">
          {number}
        </div>

        <div className="stage-title-box">

          <h3>
            {title}
          </h3>

          <div className="timeline">
            Timeline: {timeline}
          </div>

        </div>

        <div
          className={`stage-status ${
            statusType === "green"
              ? "status-green"
              : "status-gray"
          }`}
        >
          <span>●</span>
          {status}
        </div>

      </div>

      <p className="stage-description">
        {description}
      </p>

      <div className="stage-tags">

        {tags.map(([text, icon], index) => (
          <div
            className="stage-tag"
            key={index}
          >
            <span className="stage-tag-icon">
              <Icon
                name={icon}
                size={14}
              />
            </span>

            {text}
          </div>
        ))}

      </div>

    </article>
  );
}


/* =========================================================
   PERSON
========================================================= */

function Person({
  image,
  name,
  role,
  credential,
  specialty,
}) {
  return (
    <div className="person">

      <img
        src={image}
        alt={name}
      />

      <div className="person-info">

        <div className="person-name">
          {name}

          <span className="person-role">
            {role}
          </span>
        </div>

        <div className="person-credential">
          {credential}
        </div>

        <div className="person-specialty">
          {specialty}
        </div>

      </div>

    </div>
  );
}