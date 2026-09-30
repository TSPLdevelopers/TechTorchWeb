import React, { useState } from "react";

export default function AcceptProceed() {
  const [email, setEmail] = useState("ciso@enterprise-corp.com");
  const [copied, setCopied] = useState(false);

  const hash =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const artifacts = [
    {
      number: "01",
      icon: "⚖",
      title: "Bilateral Mutual Non-Disclosure Agreement (MNDA)",
      description:
        "Cryptographically counter-signed via TechTorch KMS Enclave. Universal jurisdiction binding covenants.",
      type: "PDF / A-1b",
      size: "2.4 MB",
      status: "Signed & Locked",
      statusType: "green",
    },
    {
      number: "02",
      icon: "◎",
      title: "Diagnostic Telemetry & Non-Intrusive Scanning Scope Matrix",
      description:
        "Explicit CIDR network boundaries, VPC telemetry hook definitions, passive inspection guarantees.",
      type: "XLSX / PDF",
      size: "1.8 MB",
      status: "Production-Safe",
      statusType: "gray",
    },
    {
      number: "03",
      icon: "♢",
      title: "Institutional SLA & Incident Escalation Matrix",
      description:
        "Zero-Impact operational uptime warranty, 15-minute Tier-1 warm room SLA, legal liability indemnification.",
      type: "PDF",
      size: "1.2 MB",
      status: "Underwritten",
      statusType: "green",
    },
    {
      number: "04",
      icon: "♙",
      title: "Lead Architect Clearance & Accreditation Dossier",
      description:
        "Dr. Evelyn Vance & Marcus Chen credentials, ISO/IEC 27001 Lead Auditor certifications, background clearance.",
      type: "PDF / Portfolios",
      size: "3.6 MB",
      status: "Gov-Grade Clearance",
      statusType: "gray",
    },
    {
      number: "05",
      icon: "⚿",
      title: "Digital Signature & Verification Key Ring",
      description:
        "TechTorch OpenPGP 4096-bit public master key, per-document SHA-256 manifests, and timestamped root certs.",
      type: "ASC / TXT",
      size: "48 KB",
      status: "4096-bit RSA",
      statusType: "purple",
    },
  ];

  const copyHash = async () => {
    try {
      await navigator.clipboard.writeText(hash);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadArchive = () => {
    alert("Signed archive download initiated.");
  };

  const dispatchLink = () => {
    if (!email.trim()) {
      alert("Please enter a corporate email address.");
      return;
    }

    alert(`Ephemeral link dispatched to ${email}`);
  };

  return (
    <div className="accept-proceed-page">

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <header className="export-header">

        <div className="breadcrumb">
          <span>PROTOCOL MANAGEMENT</span>
          <b>/</b>
          <span>ENGAGEMENT PROTOCOLS</span>
          <b>/</b>
          <strong>PACKAGE TT-SEC-2026-V4.2</strong>
        </div>

        <div className="verification-badges">

          <span className="verified-badge">
            ♙ CRYPTOGRAPHICALLY VERIFIED BUNDLE
          </span>

          <span className="hash-badge">
            ◉ SHA-256 Validated
          </span>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="export-hero">

        <h1>
          Export Institutional Protocol Package
        </h1>

        <p>
          Download or securely dispatch the authoritative governance
          archive. This dossier contains executed Bilateral MNDAs,
          diagnostic telemetry scope definitions, SLA covenants, and
          independent third-party auditor clearance credentials.
        </p>

      </section>


      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <main className="export-grid">

        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <div className="export-left">

          {/* DOCUMENT MANIFEST */}

          <section className="manifest-card">

            <div className="manifest-heading">

              <div>
                <span className="small-heading">
                  DOCUMENT MANIFEST
                </span>

                <h2>
                  Package File Inventory
                </h2>
              </div>

              <div className="artifact-count">
                5 Artifacts · 9.04 MB
              </div>

            </div>


            <div className="artifact-list">

              {artifacts.map((artifact) => (
                <Artifact
                  key={artifact.number}
                  {...artifact}
                />
              ))}

            </div>


            <div className="manifest-footer">

              <div>
                <span className="manifest-check">
                  ◉
                </span>

                All 5 artifacts compile to standard
                ISO/IEC 27001 evidentiary preservation specs.
              </div>

              <button>
                Export manifest as
                <br />
                JSON
              </button>

            </div>

          </section>


          {/* =================================================
              CRYPTOGRAPHIC INTEGRITY
          ================================================= */}

          <section className="integrity-card">

            <div className="integrity-heading">

              <div>

                <h2>
                  ▣ Cryptographic Integrity & Custody
                </h2>

                <p>
                  The generated package archive matches the exact
                  cryptographic hash generated by the TechTorch trust
                  engine. Verify this checksum in your local terminal
                  prior to opening any unencrypted archive files.
                </p>

              </div>

              <span className="immutable">
                IMMUTABLE HASH
              </span>

            </div>


            <div className="master-hash">

              <div>
                <span>
                  SHA-256 MASTER FINGERPRINT
                </span>

                <strong>
                  {hash}
                </strong>
              </div>

              <button onClick={copyHash}>
                {copied ? "COPIED" : "COPY HASH"}
              </button>

            </div>


            <div className="certification-boxes">

              <Certification
                icon="♙"
                title="ISO/IEC 27001"
                subtitle="Clause A.18 Certified"
              />

              <Certification
                icon="♜"
                title="SOC 2 Type II"
                subtitle="Trust Criteria Evaluated"
              />

              <Certification
                icon="⌁"
                title="CSA STAR"
                subtitle="Level 2 Attestation"
              />

            </div>

          </section>

        </div>


        {/* =================================================
            RIGHT COLUMN
        ================================================= */}

        <aside className="export-right">

          {/* PRIMARY DELIVERY */}

          <section className="delivery-card primary-card">

            <span className="right-label">
              ● PRIMARY DELIVERY
            </span>

            <h2>
              Direct Instant Download
            </h2>

            <p>
              Immediate retrieval of the complete digitally-signed
              archive package formatted for legal and enterprise
              architecture review.
            </p>


            <div className="zip-file">

              <div className="zip-icon">
                ZIP
              </div>

              <div className="zip-info">

                <strong>
                  TechTorch_Sec_Protocol_v4.2.zip
                </strong>

                <span>
                  Full Package · 9.04 MB · Signed
                </span>

              </div>

              <div className="lock-icon">
                ♧
              </div>

            </div>


            <button
              className="download-button"
              onClick={downloadArchive}
            >
              DOWNLOAD SIGNED ARCHIVE (.ZIP)
              <span>→</span>
            </button>


            <div className="encryption-note">
              ♧ &nbsp; AES-256 Enclave Encryption standard applied
            </div>

          </section>


          {/* SECURE ENCLAVE RELAY */}

          <section className="delivery-card relay-card">

            <span className="right-label plain-label">
              SECURE ENCLAVE RELAY
            </span>

            <h2>
              Encrypted Dispatch
            </h2>

            <p>
              Deliver an ephemeral, single-use download portal access
              key directly to your corporate inbox or designated
              outside legal counsel.
            </p>


            <label>
              Authorized Corporate Email
            </label>

            <div className="email-input">

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span>
                ✉
              </span>

            </div>


            <div className="expiry">
              ◷ &nbsp; Expires strictly 48 hours from generation.
            </div>


            <button
              className="dispatch-button"
              onClick={dispatchLink}
            >
              ▷ Dispatch Ephemeral Link
            </button>

          </section>


          {/* EXECUTIVE PRESENTATION */}

          <section className="delivery-card presentation-card">

            <div className="presentation-top">

              <span className="right-label plain-label">
                EXECUTIVE PRESENTATION
              </span>

              <span className="wide-badge">
                16:9 Widescreen
              </span>

            </div>

            <h2>
              Boardroom Briefing Deck
            </h2>

            <p>
              Curated visual deck designed specifically for Audit
              Committee, Chief Legal Officer, and Board Governance
              reviews.
            </p>


            <div className="presentation-actions">

              <button>
                ▷ &nbsp; Deck (PPTX)
              </button>

              <button>
                ▤ &nbsp; Briefing (PDF)
              </button>

            </div>

          </section>

        </aside>

      </main>


      {/* =====================================================
          ARCHITECT ATTESTATION
      ===================================================== */}

      <section className="attestation-card">

        <div className="attestation-person">

          <img
            src="/EvelynVance.png"
            alt="Dr. Evelyn Vance"
          />

          <div>

            <h3>
              Dr. Evelyn Vance, CISSP
            </h3>

            <span>
              Principal Advisory Architect & Engagement Director
              · TechTorch Solutions
            </span>

            <p>
              "Every artifact packaged within TT-SEC-2026-V4.2 has
              undergone rigorous multi-signature review. Scope
              constraints are cryptographically bound to protect
              production workloads without compromise."
            </p>

          </div>

        </div>


        <div className="attestation-stamp">

          <span>
            STAMP OF ATTESTATION
          </span>

          <strong>
            VAL-2026-ENCLAVE-91
          </strong>

        </div>

      </section>


      {/* =====================================================
          FOOTER CONTACT
      ===================================================== */}

      <footer className="export-footer">

        <div className="footer-question-icon">
          ?
        </div>

        <div className="footer-message">

          <h2>
            Questions Regarding Scope or Governance Terms?
          </h2>

          <p>
            Direct real-time consultation with the assigned
            engagement lead and governance council.
          </p>

        </div>


        <a
          href="tel:+919999366708"
          className="footer-phone"
        >
          ♧ &nbsp; +91 99933 66708
        </a>


        <a
          href="mailto:advisory@techtorch.solutions"
          className="footer-email"
        >
          ✉ &nbsp; advisory@techtorch.solutions
        </a>

      </footer>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        .accept-proceed-page {
          min-height: 100vh;
          padding: 35px 30px 0;
          background: #f7f8fa;
          color: #222630;
          font-family: "Inter", Arial, sans-serif;
        }


        /* ===============================================
           HEADER
        =============================================== */

        .export-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 9px;
          color: #707680;
          font-size: 8.5px;
          font-weight: 750;
          letter-spacing: 1px;
        }

        .breadcrumb b {
          color: #b8bbc0;
        }

        .breadcrumb strong {
          color: #5e103c;
        }

        .verification-badges {
          display: flex;
          align-items: center;
          gap: 9px;
          flex-shrink: 0;
        }

        .verified-badge,
        .hash-badge {
          padding: 5px 9px;
          border-radius: 12px;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: .6px;
          white-space: nowrap;
        }

        .verified-badge {
          background: #005b20;
          color: white;
        }

        .hash-badge {
          background: #e8e7eb;
          color: #64103e;
        }


        /* ===============================================
           HERO
        =============================================== */

        .export-hero {
          max-width: 1180px;
          margin: 30px auto 0;
        }

        .export-hero h1 {
          margin: 0;
          color: #22262a;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 31px;
          line-height: 1.15;
          letter-spacing: -1.4px;
          font-weight: 650;
        }

        .export-hero p {
          max-width: 850px;
          margin: 12px 0 0;
          color: #66545d;
          font-size: 14px;
          line-height: 1.55;
        }


        /* ===============================================
           MAIN GRID
        =============================================== */

        .export-grid {
          max-width: 1180px;
          margin: 38px auto 0;
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(320px, 1fr);
          gap: 25px;
          align-items: start;
        }

        .export-left,
        .export-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }


        /* ===============================================
           COMMON CARD
        =============================================== */

        .manifest-card,
        .integrity-card,
        .delivery-card,
        .attestation-card {
          background: #ffffff;
          border: 1px solid #e5e7e9;
          border-radius: 9px;
          box-shadow: 0 2px 8px rgba(20, 25, 30, .025);
        }


        /* ===============================================
           MANIFEST
        =============================================== */

        .manifest-card {
          padding: 23px 24px;
        }

        .manifest-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 17px;
        }

        .small-heading,
        .right-label {
          display: block;
          color: #6b0b3c;
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .manifest-heading h2 {
          margin: 6px 0 0;
          color: #272b31;
          font-size: 17px;
          font-weight: 650;
        }

        .artifact-count {
          padding: 6px 10px;
          border-radius: 4px;
          background: #e9ebed;
          color: #535b66;
          font-family: monospace;
          font-size: 8px;
          letter-spacing: .5px;
          white-space: nowrap;
        }


        /* ===============================================
           ARTIFACT
        =============================================== */

        .artifact-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .artifact {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 9px 11px;
          border-radius: 6px;
          background: #f4f5f6;
        }

        .artifact-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #e9dfe5;
          color: #68103e;
          font-size: 15px;
          flex-shrink: 0;
        }

        .artifact-content {
          flex: 1;
          min-width: 0;
        }

        .artifact-title {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #2f3339;
          font-size: 10.5px;
          font-weight: 800;
        }

        .artifact-title span {
          color: #6b0b3c;
          font-family: monospace;
          letter-spacing: .6px;
        }

        .artifact-description {
          margin: 4px 0 5px;
          color: #68717c;
          font-size: 8.5px;
          line-height: 1.35;
        }

        .artifact-meta {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .file-type {
          padding: 3px 5px;
          border-radius: 3px;
          background: #dedfe1;
          color: #424951;
          font-size: 6.5px;
          font-weight: 850;
        }

        .file-size {
          color: #656c75;
          font-size: 7px;
        }

        .file-status {
          font-family: monospace;
          font-size: 6.8px;
        }

        .status-green {
          color: #28663a;
        }

        .status-gray {
          color: #646a72;
        }

        .status-purple {
          color: #721044;
        }

        .artifact-download {
          border: 0;
          background: transparent;
          color: #5c636d;
          font-size: 13px;
        }


        /* ===============================================
           MANIFEST FOOTER
        =============================================== */

        .manifest-footer {
          min-height: 49px;
          margin-top: 15px;
          padding: 8px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border-radius: 6px;
          background: #f1f2f3;
          color: #6c737c;
          font-size: 8px;
          line-height: 1.35;
        }

        .manifest-check {
          color: #75103f;
          margin-right: 7px;
        }

        .manifest-footer button {
          border: 0;
          background: transparent;
          color: #6b0b3c;
          font-size: 8px;
          font-weight: 800;
          text-align: right;
        }


        /* ===============================================
           RIGHT CARDS
        =============================================== */

        .delivery-card {
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .primary-card::after {
          content: "";
          position: absolute;
          width: 75px;
          height: 75px;
          right: -1px;
          top: -1px;
          border-radius: 50%;
          background: #f6f0f3;
          z-index: 0;
        }

        .primary-card > * {
          position: relative;
          z-index: 1;
        }

        .delivery-card h2 {
          margin: 8px 0 7px;
          color: #272b30;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 16px;
          font-weight: 650;
          letter-spacing: -.4px;
        }

        .delivery-card p {
          margin: 0;
          color: #6a6268;
          font-size: 9.5px;
          line-height: 1.5;
        }


        /* ===============================================
           ZIP
        =============================================== */

        .zip-file {
          min-height: 51px;
          margin-top: 16px;
          padding: 8px 11px;
          display: flex;
          align-items: center;
          gap: 9px;
          border-radius: 6px;
          background: #f4f5f6;
        }

        .zip-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background: #ffd8e4;
          color: #721040;
          font-size: 8px;
          font-weight: 900;
        }

        .zip-info {
          flex: 1;
        }

        .zip-info strong {
          display: block;
          color: #3c4148;
          font-size: 9.5px;
        }

        .zip-info span {
          display: block;
          margin-top: 3px;
          color: #737981;
          font-size: 7.5px;
        }

        .lock-icon {
          color: #126225;
          font-size: 17px;
        }


        /* ===============================================
           BUTTONS
        =============================================== */

        .download-button {
          width: 100%;
          height: 37px;
          margin-top: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 0;
          border-radius: 6px;
          background: #650033;
          color: white;
          font-size: 9.5px;
          font-weight: 850;
          letter-spacing: .4px;
          box-shadow: 0 5px 10px rgba(101, 0, 51, .14);
        }

        .download-button span {
          font-size: 15px;
        }

        .encryption-note {
          margin-top: 13px;
          text-align: center;
          color: #757a80;
          font-size: 7.5px;
        }


        /* ===============================================
           RELAY
        =============================================== */

        .plain-label {
          color: #73777c;
        }

        .relay-card h2 {
          margin-top: 8px;
        }

        .relay-card label {
          display: block;
          margin: 16px 0 7px;
          color: #3f444a;
          font-family: monospace;
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .email-input {
          height: 34px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          border-radius: 5px;
          background: #f2f3f4;
        }

        .email-input input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #7d6b74;
          font-size: 9px;
        }

        .email-input span {
          color: #777d84;
          font-size: 13px;
        }

        .expiry {
          margin-top: 11px;
          color: #777d84;
          font-size: 7.5px;
        }

        .dispatch-button {
          width: 100%;
          height: 32px;
          margin-top: 13px;
          border: 0;
          border-radius: 6px;
          background: #e9eaec;
          color: #68103d;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .3px;
        }


        /* ===============================================
           PRESENTATION
        =============================================== */

        .presentation-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .wide-badge {
          padding: 4px 7px;
          border-radius: 4px;
          background: #f0e9ee;
          color: #6b0b3c;
          font-size: 6.5px;
          font-weight: 800;
        }

        .presentation-card h2 {
          margin-top: 10px;
        }

        .presentation-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-top: 15px;
        }

        .presentation-actions button {
          height: 34px;
          border: 0;
          border-radius: 6px;
          background: #f5f5f6;
          color: #3d4249;
          font-size: 8px;
          font-weight: 800;
        }


        /* ===============================================
           INTEGRITY
        =============================================== */

        .integrity-card {
          padding: 24px;
        }

        .integrity-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
        }

        .integrity-heading h2 {
          margin: 0;
          color: #272c32;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 17px;
        }

        .integrity-heading p {
          max-width: 680px;
          margin: 10px 0 0;
          color: #6b737e;
          font-size: 9.5px;
          line-height: 1.5;
        }

        .immutable {
          padding: 6px 8px;
          border-radius: 4px;
          background: #e5eee6;
          color: #5b9661;
          font-family: monospace;
          font-size: 7px;
          font-weight: 800;
          white-space: nowrap;
        }

        .master-hash {
          min-height: 54px;
          margin-top: 17px;
          padding: 9px 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border-radius: 6px;
          background: #e7e8ea;
        }

        .master-hash span {
          display: block;
          margin-bottom: 5px;
          color: #747b83;
          font-family: monospace;
          font-size: 7px;
          letter-spacing: 1px;
        }

        .master-hash strong {
          display: block;
          color: #3d434a;
          font-family: monospace;
          font-size: 7px;
          word-break: break-all;
        }

        .master-hash button {
          height: 27px;
          padding: 0 10px;
          border: 0;
          border-radius: 4px;
          background: #eef0f1;
          color: #41464c;
          font-size: 7px;
          font-weight: 850;
          white-space: nowrap;
        }

        .certification-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
          margin-top: 17px;
        }

        .certification {
          min-height: 66px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 6px;
          background: #f6f7f8;
        }

        .certification-icon {
          color: #710b3e;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .certification strong {
          color: #343941;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .certification span {
          margin-top: 4px;
          color: #777e86;
          font-size: 7px;
        }


        /* ===============================================
           ATTESTATION
        =============================================== */

        .attestation-card {
          max-width: 1180px;
          min-height: 101px;
          margin: 42px auto 0;
          padding: 17px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .attestation-person {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .attestation-person img {
          width: 55px;
          height: 55px;
          object-fit: cover;
          border-radius: 50%;
          background: #ddd;
        }

        .attestation-person h3 {
          margin: 0;
          color: #272b31;
          font-size: 11px;
          font-weight: 850;
        }

        .attestation-person span {
          display: block;
          margin-top: 3px;
          color: #7a8088;
          font-size: 7.5px;
        }

        .attestation-person p {
          max-width: 730px;
          margin: 7px 0 0;
          color: #6d737b;
          font-size: 7.5px;
          line-height: 1.4;
        }

        .attestation-stamp {
          min-width: 135px;
          padding: 9px 12px;
          border-radius: 5px;
          background: #f7f2f5;
          text-align: center;
        }

        .attestation-stamp span {
          display: block;
          color: #6b0b3c;
          font-size: 7px;
          font-weight: 850;
          letter-spacing: .7px;
        }

        .attestation-stamp strong {
          display: block;
          margin-top: 5px;
          color: #7a8089;
          font-family: monospace;
          font-size: 7px;
        }


        /* ===============================================
           FOOTER
        =============================================== */

        .export-footer {
          min-height: 90px;
          margin: 48px -30px 0;
          padding: 16px max(30px, calc((100vw - 1180px) / 2));
          display: flex;
          align-items: center;
          gap: 15px;
          background: #5b0030;
          color: white;
        }

        .footer-question-icon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #731044;
          color: white;
          font-size: 17px;
          flex-shrink: 0;
        }

        .footer-message {
          flex: 1;
        }

        .footer-message h2 {
          margin: 0;
          color: white;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 15px;
        }

        .footer-message p {
          margin: 4px 0 0;
          color: #e5cbd8;
          font-size: 8px;
        }

        .footer-phone,
        .footer-email {
          height: 38px;
          padding: 0 15px;
          display: flex;
          align-items: center;
          border-radius: 6px;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        .footer-phone {
          background: #731044;
          color: white;
        }

        .footer-email {
          background: white;
          color: #5f1239;
        }


        /* ===============================================
           LAPTOP
        =============================================== */

        @media (max-width: 1050px) {

          .accept-proceed-page {
            padding-left: 20px;
            padding-right: 20px;
          }

          .export-grid {
            grid-template-columns: 1.4fr 1fr;
          }

          .export-footer {
            margin-left: -20px;
            margin-right: -20px;
          }

          .footer-message h2 {
            font-size: 13px;
          }

        }


        /* ===============================================
           TABLET
        =============================================== */

        @media (max-width: 850px) {

          .export-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .verification-badges {
            width: 100%;
          }

          .export-grid {
            grid-template-columns: 1fr;
          }

          .export-right {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }

          .presentation-card {
            grid-column: 1 / -1;
          }

          .attestation-card {
            align-items: flex-start;
          }

          .export-footer {
            flex-wrap: wrap;
          }

        }


        /* ===============================================
           MOBILE
        =============================================== */

        @media (max-width: 600px) {

          .accept-proceed-page {
            padding: 20px 12px 0;
          }

          .breadcrumb {
            font-size: 7px;
            line-height: 1.5;
          }

          .verification-badges {
            flex-wrap: wrap;
          }

          .verified-badge,
          .hash-badge {
            font-size: 6.5px;
          }

          .export-hero {
            margin-top: 23px;
          }

          .export-hero h1 {
            font-size: 25px;
            letter-spacing: -1px;
          }

          .export-hero p {
            font-size: 10.5px;
          }

          .export-grid {
            margin-top: 25px;
          }

          .manifest-card,
          .integrity-card,
          .delivery-card {
            padding: 17px 15px;
          }

          .manifest-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .artifact {
            align-items: flex-start;
          }

          .artifact-title {
            font-size: 9px;
            line-height: 1.35;
          }

          .artifact-description {
            font-size: 7.5px;
          }

          .artifact-meta {
            flex-wrap: wrap;
            gap: 5px;
          }

          .artifact-download {
            display: none;
          }

          .manifest-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .manifest-footer button {
            text-align: left;
          }

          .export-right {
            display: flex;
          }

          .integrity-heading {
            flex-direction: column;
          }

          .master-hash {
            align-items: flex-start;
            flex-direction: column;
          }

          .master-hash button {
            width: 100%;
          }

          .certification-boxes {
            grid-template-columns: 1fr;
          }

          .attestation-card {
            flex-direction: column;
            padding: 17px;
          }

          .attestation-person {
            align-items: flex-start;
          }

          .attestation-person img {
            width: 45px;
            height: 45px;
          }

          .attestation-stamp {
            width: 100%;
          }

          .export-footer {
            margin-left: -12px;
            margin-right: -12px;
            padding: 20px 15px;
            flex-direction: column;
            align-items: stretch;
          }

          .footer-message h2 {
            font-size: 14px;
          }

          .footer-phone,
          .footer-email {
            justify-content: center;
            width: 100%;
          }

        }

      `}</style>

    </div>
  );
}


/* =========================================================
   ARTIFACT COMPONENT
========================================================= */

function Artifact({
  number,
  icon,
  title,
  description,
  type,
  size,
  status,
  statusType,
}) {
  return (
    <div className="artifact">

      <div className="artifact-icon">
        {icon}
      </div>

      <div className="artifact-content">

        <div className="artifact-title">
          <span>{number}</span>
          {title}
        </div>

        <p className="artifact-description">
          {description}
        </p>

        <div className="artifact-meta">

          <span className="file-type">
            {type}
          </span>

          <span className="file-size">
            {size}
          </span>

          <span
            className={`file-status status-${statusType}`}
          >
            {status}
          </span>

        </div>

      </div>

      <button className="artifact-download">
        ⇩
      </button>

    </div>
  );
}


/* =========================================================
   CERTIFICATION COMPONENT
========================================================= */

function Certification({
  icon,
  title,
  subtitle,
}) {
  return (
    <div className="certification">

      <div className="certification-icon">
        {icon}
      </div>

      <strong>
        {title}
      </strong>

      <span>
        {subtitle}
      </span>

    </div>
  );
}