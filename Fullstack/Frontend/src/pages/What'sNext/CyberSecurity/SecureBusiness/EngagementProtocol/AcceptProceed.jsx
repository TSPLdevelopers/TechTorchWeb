import React, { useState } from "react";

export default function SecurityIntake() {
  // Initially NO scope is selected
  const [selectedScopes, setSelectedScopes] = useState([]);

  const [telemetryMode, setTelemetryMode] = useState("readonly");

  const scopes = [
    "Multi-Cloud (AWS / Azure / GCP)",
    "Hybrid Enterprise & On-Prem",
    "Kubernetes & Container Mesh",
    "Enterprise SaaS & Identity (Okta / Entra ID)",
    "AI Agent & LLM Pipelines",
  ];

  const toggleScope = (scope) => {
    setSelectedScopes((prev) =>
      prev.includes(scope)
        ? prev.filter((item) => item !== scope)
        : [...prev, scope]
    );
  };

  return (
    <div className="security-intake">

      {/* ================= TOP HEADER ================= */}

      <header className="intake-header">

        <div className="intake-top-row">

          <div className="intake-label">
            TECHTORCH SECURITY ENGAGEMENT · PHASE 01 INTAKE
          </div>

          <div className="intake-security">
            <span>
              ◉ MNDA REF: <b>TT-SEC-2026-V4</b>
            </span>

            <span>◉ E2E Encrypted</span>
          </div>

        </div>

        <div className="intake-heading">

          <h1>
            Enterprise Security Intake & Scope Authorization
          </h1>

          <p>
            Formalize technical perimeter boundaries, assign verified
            executive liaisons, and authorize zero-impact diagnostic
            telemetry ahead of technical assessment.
          </p>

        </div>

      </header>


      {/* ================= PROGRESS ================= */}

      <section className="progress-bar">

        <div className="progress-step completed">

          <span className="step-number">01</span>

          <div>
            <small>STEP 01 · COMPLETE</small>
            <strong>Protocol Acceptance</strong>
          </div>

        </div>

        <div className="progress-step active">

          <span className="step-number">02</span>

          <div>
            <small>STEP 02 · CURRENT</small>
            <strong>Scope & Telemetry Config</strong>
          </div>

        </div>

        <div className="progress-step next">

          <span className="step-number">03</span>

          <div>
            <small>STEP 03 · NEXT</small>
            <strong>Architect Dispatch</strong>
          </div>

        </div>

      </section>


      {/* ================= MAIN GRID ================= */}

      <main className="intake-grid">

        {/* ================= LEFT ================= */}

        <div className="intake-left">

          {/* ================= SECTION 01 ================= */}

          <section className="intake-card">

            <div className="section-top">

              <div>

                <span className="section-label">
                  SECTION 01
                </span>

                <h2>
                  Primary Infrastructure Perimeter
                </h2>

              </div>

              <div className="section-icon">
                ✣
              </div>

            </div>

            <p className="section-description">
              Select production enclaves eligible for read-only
              cryptographic interrogation. Scopes remain strictly
              bounded by mutual authorization.
            </p>

            <label className="field-label">
              TARGET ENCLAVES & SUBSYSTEMS
            </label>

            <div className="scope-options">

              {scopes.map((scope) => (

                <button
                  key={scope}
                  type="button"
                  className={`scope-pill ${
                    selectedScopes.includes(scope)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleScope(scope)}
                >

                  <span>
                    {selectedScopes.includes(scope)
                      ? "⊙"
                      : "○"}
                  </span>

                  {scope}

                </button>

              ))}

            </div>

            <label className="field-label">
              PRIMARY / ROOT CIDR RANGE
            </label>

            <div className="input-box">

              <span>▤</span>

              <input
                type="text"
                defaultValue="corp.fintech-global.internal, 10.240.0.0/16"
              />

            </div>

            <p className="field-note">
              Accepts apex domain records, staging VPC CIDR subnets,
              or Cloudflare DNS zone anchors.
            </p>

          </section>


          {/* ================= SECTION 02 ================= */}

          <section className="intake-card">

            <div className="section-top">

              <div>

                <span className="section-label">
                  SECTION 02
                </span>

                <h2>
                  Designated Security Authority
                </h2>

              </div>

              <div className="section-icon">
                ♢
              </div>

            </div>

            <p className="section-description">
              Specify the verified corporate officer authorized to
              approve telemetry handshakes and inspect confidential
              findings.
            </p>

            <div className="form-grid">

              <div className="form-field">

                <label>
                  LEAD AUTHORIZED EXECUTIVE
                </label>

                <div className="input-box">

                  <span>♙</span>

                  <input
                    type="text"
                    defaultValue="Katherine Montgomery"
                  />

                </div>

              </div>

              <div className="form-field">

                <label>
                  WORK EMAIL ADDRESS
                </label>

                <div className="input-box">

                  <span>✉</span>

                  <input
                    type="email"
                    defaultValue="k.montgomery@fintech-global.corp"
                  />

                </div>

              </div>

            </div>

            <div className="form-field emergency-field">

              <label>
                EMERGENCY ESCALATION LINE{" "}
                <span>
                  (optional · 24/7 incident hotline)
                </span>
              </label>

              <div className="input-box">

                <span>♧</span>

                <input
                  type="text"
                  defaultValue="+1 (555) 839-2041"
                />

              </div>

            </div>

          </section>


          {/* ================= SECTION 03 ================= */}

          <section className="intake-card telemetry-card">

            <div className="section-top">

              <div>

                <span className="section-label">
                  SECTION 03
                </span>

                <h2>
                  Diagnostic Telemetry Mode
                </h2>

              </div>

              <div className="section-icon">
                ◉
              </div>

            </div>

            <p className="section-description">
              All diagnostics are strictly non-disruptive,
              authenticated via ephemeral keys, and operate under
              zero-write protocols.
            </p>

            <div className="telemetry-options">

              <TelemetryOption
                value="readonly"
                selected={telemetryMode === "readonly"}
                onClick={() => setTelemetryMode("readonly")}
                title="Read-Only Cloud IAM & Policy Scan"
                recommended
                description="Zero agent, zero downtime. Evaluates cross-account trust configurations, privilege escalation vectors, and KMS encryption policies."
              />

              <TelemetryOption
                value="external"
                selected={telemetryMode === "external"}
                onClick={() => setTelemetryMode("external")}
                title="Passive External Attack Surface Mapping"
                description="Automated OSINT perimeter analysis, SPF/DKIM validation, and exposed subservice inventory without requiring credentials."
              />

              <TelemetryOption
                value="comprehensive"
                selected={telemetryMode === "comprehensive"}
                onClick={() => setTelemetryMode("comprehensive")}
                title="Comprehensive Architecture & Agentic Code Review"
                description="Read-only repository access for LLM pipeline orchestration, autonomous agent prompt-injection testing, and Terraform/IaC compliance."
              />

            </div>

          </section>


          {/* ================= AUTHORIZE ================= */}

          <button className="authorize-button">

            AUTHORIZE SCOPE & DISPATCH INTAKE DOSSIER

            <span>→</span>

          </button>

          <div className="authorize-note">
            ♧ Cryptographically sealed under bilateral MNDA.
            Zero data storage beyond diagnostic session.
          </div>

        </div>


        {/* ================= RIGHT ================= */}

        <aside className="intake-right">

          {/* ================= PROTOCOL RECAP ================= */}

          <section className="side-card">

            <div className="side-card-header">

              <h3>
                Active Protocol Recap
              </h3>

              <span className="validated">
                VALIDATED
              </span>

            </div>

            <div className="recap-list">

              <RecapRow
                label="Protocol Reference"
                value="TT-SEC-2026-V4"
              />

              <RecapRow
                label="Legal Framework"
                value="Mutual MNDA Sealed"
              />

              <RecapRow
                label="Diagnostic Window"
                value="48-Hour Non-Intrusive"
              />

              <RecapRow
                label="Production Guarantee"
                value="100% Zero-Impact SLA"
              />

            </div>

            <div className="handshake">

              <div className="handshake-header">

                <strong>
                  Telemetry Handshake Node
                </strong>

                <span>
                  READY FOR PING
                </span>

              </div>

              <div className="handshake-grid">

                <div>
                  <small>LATENCY</small>
                  <strong>&lt; 14ms</strong>
                </div>

                <div>
                  <small>PROTOCOL</small>
                  <strong>mTLS 1.3</strong>
                </div>

                <div>
                  <small>ENCLAVE</small>
                  <strong>us-east-1</strong>
                </div>

              </div>

            </div>

          </section>


          {/* ================= ARCHITECTS ================= */}

          <section className="side-card">

            <div className="side-card-header">

              <h3>
                Assigned Principal Architects
              </h3>

              <span className="tier-badge">
                TIER-1 CLEARED
              </span>

            </div>

            <Architect
              image="/EvelynVance.png"
              name="Dr. Evelyn Vance"
              title="Principal Director · Chief Cyber Architect"
              credential="CISSP · ex-DRPA Fellow · Cloud Enclave Lead"
            />

            <Architect
              image="/MarcusChen.png"
              name="Marcus Chen"
              title="VP, Autonomous Threat Defense"
              credential="Zero-Trust Mesh · AI Agent Red Teaming"
            />

          </section>


          {/* ================= ZERO RETENTION ================= */}

          <section className="side-card retention-card">

            <div className="retention-title">

              <span className="retention-icon">
                ♢
              </span>

              <h3>
                Zero-Retention Cryptographic
                Guarantee
              </h3>

            </div>

            <p>
              Diagnostic telemetry executes strictly in volatile
              memory. All temporary diagnostic artifacts are securely
              expunged with SHA-256 verification upon dossier
              transmission. No customer credentials or persistent
              payloads are ever stored.
            </p>

            <div className="retention-certificates">

              <span>
                ◉ SOC 2 Type II Certified
              </span>

              <span>
                ◉ ISO/IEC 27001
              </span>

            </div>

          </section>

        </aside>

      </main>


      {/* ================= INCIDENT BANNER ================= */}

      <section className="incident-banner">

        <div className="incident-content">

          <div className="incident-icon">
            ◉
          </div>

          <div>

            <h2>
              Facing an Active Incident or Suspected Breach?
            </h2>

            <p>
              Bypass standard intake queues for immediate zero-day
              rapid response triage and architect assignment.
            </p>

          </div>

        </div>

        <div className="incident-actions">

          <a
            href="tel:+919999366708"
            className="incident-phone"
          >
            ♧ &nbsp; +91 99933 66708
          </a>

          <a
            href="mailto:advisory@techtorch.solutions"
            className="incident-email"
          >
            ✉ &nbsp; advisory@techtorch.solutions
          </a>

        </div>

      </section>


      <style>{`

        * {
          box-sizing: border-box;
        }

        .security-intake {
          width: 100%;
          min-height: 100vh;
          padding: 50px 28px 35px;
          background: #f7f8f9;
          color: #20242b;
          font-family: "Inter", Arial, sans-serif;
        }


        /* ================= HEADER ================= */

        .intake-header {
          max-width: 1180px;
          margin: 0 auto;
        }

        .intake-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .intake-label {
          padding: 5px 20px;
          border-radius: 4px;
          background: #ffffff;
          color: #5c6068;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .5px;
          box-shadow: 0 1px 4px rgba(0,0,0,.04);
        }

        .intake-security {
          display: flex;
          align-items: center;
          gap: 18px;
          color: #666b74;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .intake-security b {
          color: #4b5059;
        }

        .intake-heading {
          margin-top: 27px;
        }

        .intake-heading h1 {
          margin: 0;
          color: #202327;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 36px;
          line-height: 1.12;
          letter-spacing: -1.6px;
          font-weight: 650;
        }

        .intake-heading p {
          max-width: 800px;
          margin: 10px 0 0;
          color: #454b54;
          font-size: 15px;
          line-height: 1.55;
        }


        /* ================= PROGRESS ================= */

        .progress-bar {
          max-width: 1180px;
          margin: 27px auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
        }

        .progress-step {
          min-height: 51px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 8px 15px;
          border-radius: 5px;
          background: #ffffff;
          border: 1px solid #e9eaec;
        }

        /* STEP 02 IS NOW NORMAL */
        .progress-step.active {
          background: #ffffff;
          border-color: #e9eaec;
          color: #20242b;
        }

        .progress-step.next {
          background: #f0f1f2;
        }

        .step-number {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background: #f1f2f3;
          color: #666b72;
          font-size: 11px;
          font-weight: 800;
        }

        /* STEP 02 NUMBER ALSO NORMAL */
        .active .step-number {
          background: #f1f2f3;
          color: #666b72;
        }

        .progress-step small {
          display: block;
          margin-bottom: 3px;
          color: #8a8e95;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        /* STEP 02 SMALL TEXT NORMAL */
        .active small {
          color: #8a8e95;
        }

        .progress-step strong {
          display: block;
          color: #292d32;
          font-size: 12px;
          font-weight: 800;
        }

        /* STEP 02 STRONG TEXT NORMAL */
        .active strong {
          color: #292d32;
        }


        /* ================= MAIN ================= */

        .intake-grid {
          max-width: 1180px;
          margin: 27px auto 0;
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(300px, 1fr);
          gap: 22px;
          align-items: start;
        }

        .intake-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .intake-card,
        .side-card {
          background: #ffffff;
          border: 1px solid #e7e8ea;
          border-radius: 8px;
          box-shadow: 0 2px 7px rgba(20, 25, 30, .025);
        }

        .intake-card {
          padding: 25px 21px;
        }


        /* ================= SECTION ================= */

        .section-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          padding-bottom: 14px;
          border-bottom: 1px solid #eeeeef;
        }

        .section-label {
          display: block;
          margin-bottom: 5px;
          color: #701040;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .8px;
        }

        .section-top h2 {
          margin: 0;
          color: #22262c;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 25px;
          line-height: 1.1;
          letter-spacing: -.8px;
          font-weight: 600;
        }

        .section-icon {
          color: #72003e;
          font-size: 22px;
          padding-top: 2px;
        }

        .section-description {
          margin: 16px 0 17px;
          max-width: 680px;
          color: #565d66;
          font-size: 14px;
          line-height: 1.55;
        }

        .field-label,
        .form-field label {
          display: block;
          margin-bottom: 7px;
          color: #383d45;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: .25px;
        }


        /* ================= SCOPES ================= */

        .scope-options {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-bottom: 18px;
        }

        .scope-pill {
          height: 28px;
          padding: 0 10px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border: 1px solid #e2e3e5;
          border-radius: 4px;
          background: #f7f7f8;
          color: #4d535c;
          font-size: 11.5px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ONLY USER-SELECTED SCOPE BECOMES BEETROOT */
        .scope-pill.selected {
          background: #650033;
          border-color: #650033;
          color: #ffffff;
        }


        /* ================= INPUTS ================= */

        .input-box {
          height: 31px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 10px;
          border: 1px solid #e6e7e9;
          border-radius: 6px;
          background: #ffffff;
        }

        .input-box > span {
          color: #7a7f87;
          font-size: 15px;
        }

        .input-box input {
          width: 100%;
          border: 0;
          outline: none;
          background: transparent;
          color: #444a52;
          font-family: inherit;
          font-size: 12.5px;
        }

        .field-note {
          margin: 9px 0 0;
          color: #8a6f7e;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: .8px;
        }


        /* ================= FORM ================= */

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .emergency-field {
          margin-top: 15px;
        }

        .form-field label span {
          color: #765968;
          font-weight: 600;
        }


        /* ================= TELEMETRY ================= */

        .telemetry-options {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .telemetry-option {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 10px;
          border: 1px solid #ececee;
          border-radius: 6px;
          cursor: pointer;
          transition: .2s ease;
        }

        .telemetry-option.selected {
          border: 2px solid #72003e;
          padding: 11px 9px;
        }

        .radio {
          width: 12px;
          height: 12px;
          margin-top: 2px;
          border: 1px solid #a5a8ad;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .selected .radio {
          border-color: #72003e;
        }

        .selected .radio::after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #72003e;
        }

        .telemetry-content {
          flex: 1;
        }

        .telemetry-title {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #33383f;
          font-size: 13px;
          font-weight: 800;
        }

        .recommended {
          padding: 3px 5px;
          border-radius: 3px;
          background: #72003e;
          color: white;
          font-size: 9px;
          letter-spacing: .3px;
        }

        .telemetry-description {
          margin: 6px 0 0;
          color: #60666f;
          font-size: 12px;
          line-height: 1.5;
        }


        /* ================= AUTHORIZE ================= */

        .authorize-button {
          width: 100%;
          height: 42px;
          border: 1px solid #650033;
          border-radius: 6px;
          background: #650033;
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .2px;
          box-shadow: 0 5px 12px rgba(101, 0, 51, .12);
        }

        .authorize-button span {
          margin-left: 7px;
          font-size: 16px;
        }

        .authorize-note {
          margin-top: -12px;
          padding-left: 2px;
          color: #806b76;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: .7px;
        }


        /* ================= SIDEBAR ================= */

        .intake-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side-card {
          padding: 20px;
        }

        .side-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 13px;
        }

        .side-card-header h3 {
          margin: 0;
          color: #282c31;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 16px;
          font-weight: 650;
          letter-spacing: -.3px;
        }

        .validated {
          padding: 4px 7px;
          border-radius: 3px;
          background: #b9f2ad;
          color: #24652b;
          font-size: 9px;
          font-weight: 850;
        }

        .tier-badge {
          padding: 4px 6px;
          border-radius: 3px;
          background: #eceeef;
          color: #60656c;
          font-size: 8px;
          font-weight: 850;
        }


        /* ================= RECAP ================= */

        .recap-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .recap-row {
          min-height: 27px;
          padding: 0 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border-radius: 5px;
          background: #f0f1f2;
        }

        .recap-row span {
          color: #5e646d;
          font-size: 12px;
          font-weight: 600;
        }

        .recap-row strong {
          color: #373c44;
          font-size: 11px;
          text-align: right;
        }

        .handshake {
          margin-top: 13px;
          padding: 10px;
          border-radius: 6px;
          background: #f0f1f2;
        }

        .handshake-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 9px;
        }

        .handshake-header strong {
          color: #474d55;
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .handshake-header span {
          color: #4d535b;
          font-size: 11px;
          font-weight: 800;
        }

        .handshake-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
        }

        .handshake-grid div {
          padding: 7px 4px;
          text-align: center;
          background: #ffffff;
          border-radius: 3px;
        }

        .handshake-grid small {
          display: block;
          margin-bottom: 3px;
          color: #858990;
          font-size: 10px;
          font-weight: 700;
        }

        .handshake-grid strong {
          color: #3d424a;
          font-size: 10px;
        }


        /* ================= ARCHITECTS ================= */

        .architect {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px;
          margin-bottom: 8px;
          border: 1px solid #e9eaec;
          border-radius: 6px;
        }

        .architect:last-child {
          margin-bottom: 0;
        }

        .architect img {
          width: 36px;
          height: 36px;
          object-fit: cover;
          border-radius: 50%;
          background: #d9dde2;
        }

        .architect-info {
          min-width: 0;
        }

        .architect-name {
          color: #30353d;
          font-size: 12.5px;
          font-weight: 800;
        }

        .architect-title {
          margin-top: 2px;
          color: #711040;
          font-size: 10.5px;
          font-weight: 800;
        }

        .architect-credential {
          margin-top: 2px;
          color: #727881;
          font-size: 10px;
        }


        /* ================= RETENTION ================= */

        .retention-title {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding-bottom: 13px;
          border-bottom: 1px solid #eeeeef;
        }

        .retention-icon {
          color: #72003e;
          font-size: 15px;
        }

        .retention-title h3 {
          margin: 0;
          color: #30343b;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.25;
        }

        .retention-card > p {
          margin: 13px 0 15px;
          color: #555b64;
          font-size: 12.5px;
          line-height: 1.55;
        }

        .retention-certificates {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #4b5159;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .8px;
        }


        /* ================= INCIDENT ================= */

        .incident-banner {
          max-width: 1180px;
          min-height: 104px;
          margin: 37px auto 0;
          padding: 18px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          border-radius: 8px;
          background: #5e0030;
          color: white;
          box-shadow: 0 7px 18px rgba(60, 0, 32, .12);
        }

        .incident-content {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .incident-icon {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffd6dc;
          color: #9b2941;
          flex-shrink: 0;
        }

        .incident-content h2 {
          margin: 0;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 20px;
          line-height: 1.1;
          letter-spacing: -.5px;
        }

        .incident-content p {
          margin: 7px 0 0;
          color: #e8cdd9;
          font-size: 12px;
        }

        .incident-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .incident-phone,
        .incident-email {
          height: 37px;
          display: flex;
          align-items: center;
          padding: 0 13px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        .incident-phone {
          background: white;
          color: #5d1637;
        }

        .incident-email {
          background: #771044;
          color: white;
        }


        /* ================= LAPTOP ================= */

        @media (max-width: 1050px) {

          .security-intake {
            padding-left: 20px;
            padding-right: 20px;
          }

          .intake-heading h1 {
            font-size: 30px;
          }

          .intake-grid {
            grid-template-columns: 1.45fr 1fr;
          }

          .incident-banner {
            flex-direction: column;
            align-items: flex-start;
          }

          .incident-actions {
            width: 100%;
          }

          .incident-actions a {
            flex: 1;
          }

        }


        /* ================= TABLET ================= */

        @media (max-width: 800px) {

          .intake-top-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .intake-security {
            width: 100%;
            justify-content: space-between;
          }

          .progress-bar {
            grid-template-columns: 1fr;
          }

          .intake-grid {
            grid-template-columns: 1fr;
          }

          .intake-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }

          .retention-card {
            grid-column: 1 / -1;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 600px) {

          .security-intake {
            padding: 25px 12px;
          }

          .intake-label {
            font-size: 7px;
            line-height: 1.3;
            padding: 6px 10px;
          }

          .intake-security {
            flex-wrap: wrap;
            font-size: 7px;
            gap: 7px;
          }

          .intake-heading {
            margin-top: 22px;
          }

          .intake-heading h1 {
            font-size: 25px;
            letter-spacing: -1px;
          }

          .intake-heading p {
            font-size: 10.5px;
          }

          .progress-bar {
            margin-top: 21px;
          }

          .intake-grid {
            margin-top: 20px;
          }

          .intake-card,
          .side-card {
            padding: 18px 15px;
          }

          .section-label {
            font-size: 10.5px;
          }

          .section-top h2 {
            font-size: 22px;
          }

          .section-icon {
            font-size: 20px;
          }

          .section-description {
            font-size: 12.5px;
          }

          .field-label,
          .form-field label {
            font-size: 10px;
          }

          .scope-options {
            gap: 7px;
          }

          .scope-pill {
            height: auto;
            min-height: 28px;
            padding: 6px 8px;
            font-size: 10.5px;
          }

          .input-box > span {
            font-size: 14px;
          }

          .input-box input {
            font-size: 12px;
          }

          .field-note {
            font-size: 9px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .telemetry-title {
            font-size: 11px;
            line-height: 1.35;
          }

          .telemetry-description {
            font-size: 10px;
          }

          .recommended {
            font-size: 8px;
          }

          .architect-name {
            font-size: 11.5px;
          }

          .architect-title {
            font-size: 9.5px;
          }

          .architect-credential {
            font-size: 9px;
          }

          .retention-card > p {
            font-size: 11px;
          }

          .retention-certificates {
            font-size: 9px;
          }

          .recap-row span {
            font-size: 10px;
          }

          .recap-row strong {
            font-size: 10px;
          }

          .handshake-header strong {
            font-size: 9px;
          }

          .handshake-header span {
            font-size: 9px;
          }

          .handshake-grid small {
            font-size: 8px;
          }

          .handshake-grid strong {
            font-size: 9px;
          }

          .intake-right {
            display: flex;
          }

          .incident-banner {
            margin-top: 28px;
            padding: 18px 15px;
          }

          .incident-content {
            align-items: flex-start;
          }

          .incident-content h2 {
            font-size: 17px;
          }

          .incident-content p {
            line-height: 1.4;
          }

          .incident-actions {
            flex-direction: column;
            width: 100%;
          }

          .incident-actions a {
            width: 100%;
            justify-content: center;
          }

        }

      `}</style>

    </div>
  );
}


/* ================= RECAP ROW ================= */

function RecapRow({ label, value }) {

  return (

    <div className="recap-row">

      <span>{label}</span>

      <strong>{value}</strong>

    </div>

  );

}


/* ================= TELEMETRY OPTION ================= */

function TelemetryOption({
  selected,
  onClick,
  title,
  description,
  recommended,
}) {

  return (

    <div
      className={`telemetry-option ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >

      <div className="radio"></div>

      <div className="telemetry-content">

        <div className="telemetry-title">

          {title}

          {recommended && (
            <span className="recommended">
              RECOMMENDED
            </span>
          )}

        </div>

        <p className="telemetry-description">
          {description}
        </p>

      </div>

    </div>

  );

}


/* ================= ARCHITECT ================= */

function Architect({
  image,
  name,
  title,
  credential,
}) {

  return (

    <div className="architect">

      <img
        src={image}
        alt={name}
      />

      <div className="architect-info">

        <div className="architect-name">
          {name}
        </div>

        <div className="architect-title">
          {title}
        </div>

        <div className="architect-credential">
          {credential}
        </div>

      </div>

    </div>

  );

}