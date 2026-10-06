import React, { useState } from "react";
import {
  Gavel,
  Target,
  Shield,
  BadgeCheck,
  KeyRound,
  Download,
  FileCheck2,
  Building2,
  Cloud,
  LockKeyhole,
  Mail,
  Clock3,
  Send,
  Presentation,
  FileText,
  CircleHelp,
  Phone,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function ExportProtocolPackage() {
  const [downloadInitiated, setDownloadInitiated] = useState(false);

  const artifacts = [
    {
      number: "01",
      icon: Gavel,
      title: "Bilateral Mutual Non-Disclosure Agreement (MNDA)",
      description:
        "Cryptographically counter-signed via TechTorch KMS Enclave. Universal jurisdiction binding covenants.",
      tags: ["PDF / A-1b", "2.4 MB", "Signed & Locked"],
    },
    {
      number: "02",
      icon: Target,
      title: "Diagnostic Telemetry & Non-Intrusive Scanning Scope Matrix",
      description:
        "Explicit CIDR network boundaries, VPC telemetry hook definitions, passive inspection guarantees.",
      tags: ["XLSX / PDF", "1.8 MB", "Production-Safe"],
    },
    {
      number: "03",
      icon: Shield,
      title: "Institutional SLA & Incident Escalation Matrix",
      description:
        "Zero-Impact operational uptime warranty, 15-minute Tier-1 warm SLA, legal liability indemnification.",
      tags: ["PDF", "1.2 MB", "Underwritten"],
    },
    {
      number: "04",
      icon: BadgeCheck,
      title: "Lead Architect Clearance & Accreditation Dossier",
      description:
        "Dr. Evelyn Vance & Marcus Chen credentials, ISO/IEC 27001 Lead Auditor certifications, background clearance.",
      tags: ["PDF / Portfolios", "3.6 MB", "Gov-Grade Clearance"],
    },
    {
      number: "05",
      icon: KeyRound,
      title: "Digital Signature & Verification Key Ring",
      description:
        "TechTorch OpenPGP 4096-bit public master key, per-document SHA-256 manifests, and timestamped root certs.",
      tags: ["ASC / TXT", "48 KB", "4096-bit RSA"],
    },
  ];

  return (
    <div className="protocol-page">

      {/* ================= DOWNLOAD ALERT ================= */}

      {downloadInitiated && (
        <div className="download-alert-overlay">
          <div className="download-alert">
            <div className="download-alert-icon">
              <CheckCircle2 size={18} strokeWidth={2} />
            </div>

            <div className="download-alert-content">
              <strong>DOWNLOAD INITIATED</strong>
              <span>
                Your signed archive download has been initiated.
              </span>
            </div>

            <button
              className="download-alert-ok"
              onClick={() => setDownloadInitiated(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f7f8f9;
          color: #20242b;
          font-family: "Inter", Arial, sans-serif;
        }

        .protocol-page {
          width: 100%;
          min-height: 100vh;
          padding: 50px 28px 35px;
          background: #f7f8f9;
        }

        .protocol-container {
          max-width: 1180px;
          margin: 0 auto;
        }

        /* ================= DOWNLOAD ALERT ================= */

        .download-alert-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 25px;
          background: rgba(20, 24, 28, 0.18);
        }

        .download-alert {
          width: min(420px, calc(100% - 30px));
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 16px;
          border: 1px solid #dfe1e4;
          border-radius: 7px;
          background: #ffffff;
          color: #30343a;
          box-shadow: 0 10px 30px rgba(20, 25, 30, 0.15);
          animation: downloadAlertIn 0.25s ease-out;
        }

        .download-alert-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e8f1e9;
          color: #4d8054;
        }

        .download-alert-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .download-alert-content strong {
          color: #30343a;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.35px;
        }

        .download-alert-content span {
          color: #777c83;
          font-size: 10px;
          line-height: 1.4;
        }

        .download-alert-ok {
          flex-shrink: 0;
          min-width: 48px;
          height: 30px;
          padding: 0 12px;
          border: 1px solid #d7d9dc;
          border-radius: 5px;
          background: #f1f2f3;
          color: #30343a;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .download-alert-ok:hover {
          background: #e4e5e7;
        }

        @keyframes downloadAlertIn {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ================= TOP ================= */

        .protocol-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.65px;
          text-transform: uppercase;
          color: #666b73;
        }

        .breadcrumbs span {
          white-space: nowrap;
        }

        .breadcrumbs .separator {
          color: #c5c7ca;
        }

        .breadcrumbs .current {
          color: #650033;
        }

        .verification {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .verify-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.45px;
          white-space: nowrap;
        }

        .verify-green {
          background: #005b20;
          color: #fff;
        }

        .verify-grey {
          background: #e4e5e7;
          color: #650033;
        }

        /* ================= HEADING ================= */

        .protocol-heading {
          margin-top: 27px;
        }

        .protocol-heading h1 {
          margin: 0;
          color: #202327;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 32px;
          line-height: 1.12;
          letter-spacing: -1.6px;
          font-weight: 550;
        }

        .protocol-heading p {
          max-width: 800px;
          margin: 11px 0 0;
          color: #555b64;
          font-size: 14px;
          line-height: 1.55;
        }

        /* ================= GRID ================= */

        .protocol-grid {
          margin-top: 27px;
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(300px, 1fr);
          gap: 22px;
          align-items: start;
        }

        .left-column,
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ================= CARD ================= */

        .protocol-card {
          background: #ffffff;
          border: 1px solid #e7e8ea;
          border-radius: 8px;
          box-shadow: 0 2px 7px rgba(20, 25, 30, 0.025);
        }

        .manifest-card {
          padding: 25px 21px;
        }

        /* ================= MANIFEST ================= */

        .manifest-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 15px;
          padding-bottom: 14px;
          border-bottom: 1px solid #eeeeef;
        }

        .eyebrow {
          display: block;
          margin: 0 0 5px;
          color: #701040;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .manifest-title {
          margin: 0;
          color: #22262c;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 18px;
          line-height: 1.1;
          letter-spacing: -0.8px;
          font-weight: 600;
        }

        .artifact-count {
          padding: 6px 9px;
          border-radius: 4px;
          background: #eceeef;
          color: #22262c;
          font-weight: 600;
          font-family: monospace;
          font-size: 10px;
          white-space: nowrap;
        }

        .artifact-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-top: 17px;
        }

        .artifact {
          display: grid;
          grid-template-columns: 36px minmax(0, 1fr) 20px;
          gap: 10px;
          align-items: start;
          padding: 12px 10px;
          border-radius: 6px;
          background: #f7f8f9;
        }

        .artifact-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #e9e0e5;
          color: #650033;
        }

        .artifact-title {
          margin: 0;
          color: #33383f;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 800;
        }

        .artifact-number {
          margin-right: 6px;
          color: #650033;
          font-size: 11px;
          letter-spacing: 0.8px;
        }

        .artifact-description {
          margin: 4px 0 7px;
          color: #626871;
          font-size: 12px;
          line-height: 1.45;
        }

        .artifact-tags {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
        }

        .artifact-tag {
          padding: 3px 5px;
          border-radius: 3px;
          background: #dedfe1;
          color: #44484e;
          font-size: 8.5px;
          font-weight: 800;
        }

        .artifact-tag:last-child {
          padding-left: 0;
          background: transparent;
          color: #4a8054;
        }

        .artifact-download {
          display: flex;
          justify-content: center;
          color: #565b62;
        }

        /* ================= MANIFEST FOOTER ================= */

        .manifest-footer {
          margin-top: 17px;
          padding: 11px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          border-radius: 6px;
          background: #f0f1f2;
        }

        .manifest-note {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #666b73;
          font-size: 11px;
          line-height: 1.4;
        }

        .manifest-note-icon {
          color: #650033;
          flex-shrink: 0;
        }

        .manifest-json {
          color: #650033;
          font-size: 11px;
          font-weight: 800;
          text-align: right;
        }

        /* ================= CRYPTO ================= */

        .crypto-card {
          padding: 25px 21px;
        }

        .crypto-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          padding-bottom: 13px;
          border-bottom: 1px solid #eeeeef;
        }

        .crypto-title {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .crypto-icon {
          color: #72003e;
          flex-shrink: 0;
        }

        .crypto-title h2 {
          margin: 0;
          color: #22262c;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 18px;
          font-weight: 600;
        }

        .immutable {
          padding: 5px 8px;
          border-radius: 3px;
          background: #dce8dc;
          color: #4d9a55;
          font-family: monospace;
          font-size: 9px;
          font-weight: 800;
          white-space: nowrap;
        }

        .crypto-description {
          margin: 14px 0 16px;
          color: #565d66;
          font-size: 13px;
          line-height: 1.55;
        }

        .hash-box {
          padding: 11px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          border-radius: 6px;
          background: #e7e8ea;
        }

        .hash-content {
          min-width: 0;
        }

        .hash-label {
          display: block;
          margin-bottom: 5px;
          color: #777c83;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .hash-value {
          display: block;
          color: #292d32;
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          word-break: break-all;
        }

        .copy-hash {
          border: 0;
          padding: 7px 9px;
          border-radius: 4px;
          background: #f0f1f2;
          color: #30343a;
          font-size: 9px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
          margin-top: 18px;
        }

        .compliance-item {
          min-height: 65px;
          padding: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 6px;
          background: #f7f8f9;
        }

        .compliance-item .icon {
          margin-bottom: 5px;
          color: #650033;
        }

        .compliance-item strong {
          color: #30343a;
          font-size: 9.5px;
          letter-spacing: 1px;
        }

        .compliance-item span {
          margin-top: 4px;
          color: #777c82;
          font-size: 10px;
        }

        /* ================= RIGHT CARDS ================= */

        .right-card {
          padding: 20px;
        }

        .delivery-card {
          position: relative;
          overflow: hidden;
          padding: 25px 21px;
        }

        .delivery-card::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          right: -38px;
          top: -45px;
          border-radius: 50%;
          background: #f3edf0;
        }

        .delivery-content {
          position: relative;
          z-index: 1;
        }

        .delivery-label {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 7px;
          color: #650033;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.8px;
        }

        .delivery-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #650033;
        }

        .right-card h2 {
          margin: 0;
          color: #22262c;
          font-family: "Plus Jakarta Sans", "Inter", Arial, sans-serif;
          font-size: 18px;
          line-height: 1.15;
          font-weight: 600;
        }

        .right-description {
          margin: 9px 0 15px;
          color: #60545a;
          font-size: 12px;
          line-height: 1.5;
        }

        /* ================= ZIP FILE ================= */

        .zip-file {
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 7px;
          border-radius: 6px;
          background: #f5f6f7;
        }

        .zip-icon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 4px;
          background: #ffdce9;
          color: #650033;
          font-size: 10px;
          font-weight: 900;
        }

        .zip-info {
          flex: 1;
          min-width: 0;
        }

        .zip-info strong {
          display: block;
          margin-bottom: 4px;
          color: #30343a;
          font-size: 11px;
          line-height: 1.1;
        }

        .zip-info span {
          display: block;
          margin-top: 0;
          color: #777c83;
          font-size: 10px;
          line-height: 1.1;
        }

        .zip-lock {
          display: flex;
          flex-shrink: 0;
          color: #075d20;
        }

        /* ================= DOWNLOAD ================= */

        .download-button {
          width: 100%;
          height: 40px;
          margin-top: 15px;
          border: 1px solid #650033;
          border-radius: 6px;
          background: #650033;
          color: white;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.25px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          transition: 0.2s ease;
        }

        .download-button:hover {
          background: #4e0028;
        }

        .encryption-note {
          margin: 13px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #777c83;
          font-size: 10px;
        }

        /* ================= DISPATCH ================= */

        .dispatch-label {
          margin-bottom: 6px;
          color: #701040;
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .dispatch-description {
          margin: 8px 0 15px;
          color: #5f565b;
          font-size: 12px;
          line-height: 1.55;
        }

        .email-label {
          margin-bottom: 6px;
          color: #30343a;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.9px;
        }

        .email-input-wrapper {
          position: relative;
          width: 100%;
        }

        .email-input {
          width: 100%;
          height: 34px;
          padding: 0 34px 0 10px;
          border: 0;
          outline: none;
          border-radius: 6px;
          background: #f2f3f4;
          color: #866e78;
          font-family: monospace;
          font-size: 10px;
        }

        .email-input-wrapper svg {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #555b62;
          pointer-events: none;
        }

        .expiry {
          margin: 11px 0 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #777b81;
          font-size: 10px;
        }

        .dispatch-button {
          width: 100%;
          height: 35px;
          border: 0;
          border-radius: 5px;
          background: #e9eaec;
          color: #650033;
          font-size: 11px;
          font-weight: 850;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        /* ================= PRESENTATION ================= */

        .presentation-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .presentation-title {
          margin: 0 0 7px !important;
        }

        .presentation-description {
          margin: 0;
          color: #60555b;
          font-size: 12px;
          line-height: 1.5;
        }

        .aspect {
          padding: 5px 7px;
          border-radius: 3px;
          background: #eee7eb;
          color: #650033;
          font-size: 8px;
          font-weight: 850;
          white-space: nowrap;
        }

        .presentation-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-top: 15px;
        }

        .presentation-button {
          height: 34px;
          border: 0;
          border-radius: 5px;
          background: #f6f7f8;
          color: #30343a;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 0.7px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        /* ================= ATTESTATION ================= */

        .attestation {
          max-width: 1180px;
          margin: 37px auto 0;
          padding: 20px 21px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          background: #ffffff;
          border: 1px solid #e7e8ea;
          border-radius: 8px;
          box-shadow: 0 2px 7px rgba(20, 25, 30, 0.025);
        }

        .attestation-person {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .person-image {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          object-fit: cover;
          border-radius: 50%;
          background: #d9dde2;
        }

        .person-info h3 {
          margin: 0 0 3px;
          color: #292d32;
          font-size: 12px;
          font-weight: 800;
        }

        .person-designation {
          margin-bottom: 6px;
          color: #777c83;
          font-size: 11px;
        }

        .quote {
          max-width: 750px;
          margin: 0;
          color: #62585d;
          font-size: 10px;
          line-height: 1.45;
        }

        .attestation-stamp {
          min-width: 130px;
          padding: 8px 11px;
          text-align: center;
          border-radius: 5px;
          background: #faf7f8;
        }

        .stamp-title {
          display: block;
          margin-bottom: 0;
          color: #650033;
          font-size: 9px;
          font-weight: 850;
          letter-spacing: 0.7px;
          line-height: 1;
        }

        .stamp-code {
          display: block;
          margin-top: 0;
          color: #777b81;
          font-family: monospace;
          font-size: 10px;
          line-height: 1;
        }

        /* ================= FOOTER ================= */

        .protocol-footer {
          width: calc(100% + 56px);
          margin-left: -28px;
          margin-top: 37px;
          min-height: 104px;
          padding: 18px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #5e0030;
          color: white;
        }

        .footer-inner {
          width: 100%;
          max-width: 1180px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
        }

        .footer-content {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .footer-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.12);
        }

        .footer-content h3 {
          margin: 0 0 4px;
          font-size: 16px;
          line-height: 1.15;
        }

        .footer-content p {
          margin: 0;
          color: #e7ceda;
          font-size: 11px;
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-contact {
          height: 37px;
          padding: 0 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border-radius: 5px;
          font-size: 10.5px;
          font-weight: 800;
          white-space: nowrap;
        }

        .footer-phone {
          background: #771044;
          color: white;
        }

        .footer-email {
          background: white;
          color: #5d1637;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1050px) {
          .protocol-grid {
            grid-template-columns: 1.45fr 1fr;
          }

          .protocol-heading h1 {
            font-size: 33px;
          }
        }

        @media (max-width: 800px) {
          .protocol-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .verification {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
          }

          .protocol-grid {
            grid-template-columns: 1fr;
          }

          .right-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .delivery-card {
            grid-column: 1 / -1;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-actions {
            width: 100%;
          }

          .footer-contact {
            flex: 1;
          }
        }

        @media (max-width: 600px) {
          .protocol-page {
            padding: 25px 12px;
          }

          .download-alert-overlay {
            padding-top: 15px;
            padding-left: 12px;
            padding-right: 12px;
          }

          .download-alert {
            width: 100%;
            padding: 13px;
            gap: 10px;
          }

          .download-alert-content strong {
            font-size: 11px;
          }

          .download-alert-content span {
            font-size: 9.5px;
          }

          .download-alert-ok {
            min-width: 44px;
            height: 29px;
            font-size: 9.5px;
          }

          .protocol-heading {
            margin-top: 22px;
          }

          .protocol-heading h1 {
            font-size: 28px;
            letter-spacing: -1px;
          }

          .protocol-heading p {
            font-size: 12px;
          }

          .protocol-grid {
            margin-top: 20px;
          }

          .manifest-card,
          .crypto-card,
          .right-card {
            padding: 20px 15px;
          }

          .manifest-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .manifest-title {
            font-size: 22px;
          }

          .artifact {
            grid-template-columns: 32px minmax(0, 1fr) 16px;
            gap: 8px;
          }

          .artifact-title {
            font-size: 11.5px;
          }

          .artifact-description {
            font-size: 9.5px;
          }

          .compliance-grid {
            grid-template-columns: 1fr;
          }

          .hash-box {
            flex-direction: column;
            align-items: flex-start;
          }

          .copy-hash {
            align-self: flex-end;
          }

          .right-column {
            display: flex;
          }

          .presentation-buttons {
            grid-template-columns: 1fr;
          }

          .attestation {
            margin-top: 28px;
            padding: 18px 15px;
            flex-direction: column;
            align-items: flex-start;
          }

          .attestation-stamp {
            align-self: stretch;
          }

          .protocol-footer {
            width: calc(100% + 24px);
            margin-left: -12px;
            margin-top: 28px;
            padding: 18px 15px;
          }

          .footer-actions {
            flex-direction: column;
          }

          .footer-contact {
            width: 100%;
          }
        }
      `}</style>

      <div className="protocol-container">

        {/* ================= TOP ================= */}

        <div className="protocol-top">
          <div className="breadcrumbs">
            <span>Protocol Management</span>
            <span className="separator">/</span>
            <span>Engagement Protocols</span>
            <span className="separator">/</span>
            <span className="current">
              Package TT-SEC-2026-V4.2
            </span>
          </div>

          <div className="verification">
            <span className="verify-badge verify-green">
              <Lock size={10} strokeWidth={2} />
              CRYPTOGRAPHICALLY VERIFIED BUNDLE
            </span>

            <span className="verify-badge verify-grey">
              <CheckCircle2 size={10} strokeWidth={2} />
              SHA-256 Validated
            </span>
          </div>
        </div>

        {/* ================= HEADING ================= */}

        <div className="protocol-heading">
          <h1>Export Institutional Protocol Package</h1>

          <p>
            Download or securely dispatch the authoritative governance
            archive. This dossier contains executed Bilateral MNDAs,
            diagnostic telemetry scope definitions, SLA covenants, and
            independent third-party auditor clearance credentials.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="protocol-grid">

          {/* ================= LEFT ================= */}

          <div className="left-column">

            <section className="protocol-card manifest-card">
              <div className="manifest-header">
                <div>
                  <span className="eyebrow">
                    Document Manifest
                  </span>

                  <h2 className="manifest-title">
                    Package File Inventory
                  </h2>
                </div>

                <div className="artifact-count">
                  5 Artifacts · 9.04 MB
                </div>
              </div>

              <div className="artifact-list">
                {artifacts.map((artifact) => {
                  const Icon = artifact.icon;

                  return (
                    <div
                      className="artifact"
                      key={artifact.number}
                    >
                      <div className="artifact-icon">
                        <Icon
                          size={17}
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <p className="artifact-title">
                          <span className="artifact-number">
                            {artifact.number}
                          </span>

                          {artifact.title}
                        </p>

                        <p className="artifact-description">
                          {artifact.description}
                        </p>

                        <div className="artifact-tags">
                          {artifact.tags.map((tag, index) => (
                            <span
                              className="artifact-tag"
                              key={index}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="artifact-download">
                        <Download
                          size={15}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="manifest-footer">
                <div className="manifest-note">
                  <CheckCircle2
                    className="manifest-note-icon"
                    size={13}
                    strokeWidth={1.8}
                  />

                  <span>
                    All 5 artifacts compile to standard ISO/IEC
                    27001 evidentiary preservation specs.
                  </span>
                </div>

                <div className="manifest-json">
                  Export manifest as JSON
                </div>
              </div>
            </section>

            <section className="protocol-card crypto-card">
              <div className="crypto-header">
                <div className="crypto-title">
                  <FileCheck2
                    className="crypto-icon"
                    size={18}
                    strokeWidth={1.8}
                  />

                  <h2>
                    Cryptographic Integrity &amp; Custody
                  </h2>
                </div>

                <span className="immutable">
                  IMMUTABLE HASH
                </span>
              </div>

              <p className="crypto-description">
                The generated package archive matches the exact
                cryptographic hash generated by the TechTorch Trust
                Engine. Verify this checksum in your local terminal
                prior to opening any unencrypted archive files.
              </p>

              <div className="hash-box">
                <div className="hash-content">
                  <span className="hash-label">
                    SHA-256 MASTER FINGERPRINT
                  </span>

                  <span className="hash-value">
                    e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                  </span>
                </div>

                <button className="copy-hash">
                  COPY HASH
                </button>
              </div>

              <div className="compliance-grid">
                <div className="compliance-item">
                  <Building2
                    className="icon"
                    size={17}
                    strokeWidth={1.8}
                  />

                  <strong>ISO/IEC 27001</strong>

                  <span>
                    Clause A.18 Certified
                  </span>
                </div>

                <div className="compliance-item">
                  <Shield
                    className="icon"
                    size={17}
                    strokeWidth={1.8}
                  />

                  <strong>SOC 2 Type II</strong>

                  <span>
                    Trust Criteria Evaluated
                  </span>
                </div>

                <div className="compliance-item">
                  <Cloud
                    className="icon"
                    size={17}
                    strokeWidth={1.8}
                  />

                  <strong>CSA STAR</strong>

                  <span>
                    Level 2 Attestation
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="right-column">

            <section className="protocol-card delivery-card">
              <div className="delivery-content">

                <div className="delivery-label">
                  <span className="delivery-dot"></span>
                  PRIMARY DELIVERY
                </div>

                <h2>
                  Direct Instant Download
                </h2>

                <p className="right-description">
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

                  <span className="zip-lock">
                    <LockKeyhole
                      size={18}
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                <button
                  className="download-button"
                  onClick={() => {
                    setDownloadInitiated(true);
                  }}
                >
                  DOWNLOAD SIGNED ARCHIVE (.ZIP)

                  <Download
                    size={14}
                    strokeWidth={1.8}
                  />
                </button>

                <p className="encryption-note">
                  <Lock
                    size={10}
                    strokeWidth={1.8}
                  />

                  AES-256 Enclave Encryption standard applied
                </p>
              </div>
            </section>

            <section className="protocol-card right-card">
              <div className="dispatch-label">
                Secure Enclave Relay
              </div>

              <h2>
                Encrypted Dispatch
              </h2>

              <p className="dispatch-description">
                Deliver an ephemeral, single-use download portal
                access key directly to your corporate inbox or
                designated outside legal counsel.
              </p>

              <div className="email-label">
                Authorized Corporate Email
              </div>

              <div className="email-input-wrapper">
                <input
                  type="email"
                  className="email-input"
                  defaultValue="ciso@enterprise-corp.com"
                />

                <Mail
                  size={14}
                  strokeWidth={1.7}
                />
              </div>

              <div className="expiry">
                <Clock3
                  size={11}
                  strokeWidth={1.8}
                />

                Expires strictly 48 hours from generation.
              </div>

              <button className="dispatch-button">
                <Send
                  size={12}
                  strokeWidth={1.8}
                />

                Dispatch Ephemeral Link
              </button>
            </section>

            <section className="protocol-card right-card">
              <div className="presentation-header">
                <div>
                  <div className="eyebrow">
                    Executive Presentation
                  </div>

                  <h2 className="presentation-title">
                    Boardroom Briefing Deck
                  </h2>

                  <p className="presentation-description">
                    Curated visual deck designed specifically for
                    Audit Committee, Chief Legal Officer, and Board
                    Governance reviews.
                  </p>
                </div>

                <span className="aspect">
                  16:9 Widescreen
                </span>
              </div>

              <div className="presentation-buttons">
                <button className="presentation-button">
                  <Presentation
                    size={12}
                    strokeWidth={1.8}
                  />

                  Deck (PPTX)
                </button>

                <button className="presentation-button">
                  <FileText
                    size={12}
                    strokeWidth={1.8}
                  />

                  Briefing (PDF)
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* ================= ATTESTATION ================= */}

        <section className="attestation">
          <div className="attestation-person">
            <img
              src="/EvelynVance.png"
              alt="Dr. Evelyn Vance"
              className="person-image"
            />

            <div className="person-info">
              <h3>
                Dr. Evelyn Vance, CISSP
              </h3>

              <div className="person-designation">
                Principal Advisory Architect &amp; Engagement Director
                · TechTorch Solutions
              </div>

              <p className="quote">
                "Every artifact packaged within TT-SEC-2026-V4.2 has
                undergone rigorous multi-signature review. Scope
                constraints are cryptographically bound to protect
                production workloads without compromise."
              </p>
            </div>
          </div>

          <div className="attestation-stamp">
            <span className="stamp-title">
              STAMP OF ATTESTATION
            </span>

            <span className="stamp-code">
              VAL-2026-ENCLAVE-91
            </span>
          </div>
        </section>
      </div>

      {/* ================= FOOTER ================= */}

      <footer className="protocol-footer">
        <div className="footer-inner">

          <div className="footer-content">
            <div className="footer-icon">
              <CircleHelp
                size={17}
                strokeWidth={1.8}
              />
            </div>

            <div>
              <h3>
                Questions Regarding Scope or Governance Terms?
              </h3>

              <p>
                Direct real-time consultation with the assigned
                engagement lead and governance council.
              </p>
            </div>
          </div>

          <div className="footer-actions">
            <a
              href="tel:+919999366708"
              className="footer-contact footer-phone"
            >
              <Phone
                size={12}
                strokeWidth={1.8}
              />

              +91 99933 66708
            </a>

            <a
              href="mailto:advisory@techtorch.solutions"
              className="footer-contact footer-email"
            >
              <Mail
                size={12}
                strokeWidth={1.8}
              />

              advisory@techtorch.solutions
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}