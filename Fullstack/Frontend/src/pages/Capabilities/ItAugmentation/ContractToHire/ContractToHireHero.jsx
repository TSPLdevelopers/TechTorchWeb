import React from "react";
import {
  Sparkle,
  ArrowRight,
  CheckCircle2,
  ScanFace,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const tracks = [
  "Architecture Fit",
  "Code Quality & Testing",
  "Team Velocity Synergy",
  "Cultural Harmony",
];

const features = [
  {
    number: "01",
    title: "Evaluate Talent Through Real Work",
    tag: "PRACTICAL PROJECT ASSESSMENT",
    description:
      "Assess technology professionals through practical project involvement, technical capability, problem-solving, communication, and collaboration.",
  },
  {
    number: "02",
    title: "A Flexible Path to Long-Term Hiring",
    tag: "SEAMLESS TRANSITION MODEL",
    description:
      "Move from contract engagement toward a permanent role when the professional demonstrates the right technical capability, team alignment, and long-term potential.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ContractToHireHero() {
  return (
    <section className="contract-hire-hero">
      <div className="contract-hire-container">

        {/* =====================================================
            TOP GRID
        ===================================================== */}

        <div className="contract-hire-top-grid">

          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <div className="contract-hire-content">

            {/* Eyebrow */}
            <div className="contract-hire-eyebrow">
              <Sparkle className="contract-hire-eyebrow-icon" />

              <span>CONTRACT-TO-HIRE</span>
            </div>

            {/* Heading */}
            <h1 className="contract-hire-heading">
              Find the Right Technology Talent.{" "}
              <span>Build with Confidence.</span>
            </h1>

            {/* Description */}
            <p className="contract-hire-description">
              Evaluate technical capability, collaboration, and team alignment
              through real-world engagement before making a long-term hiring
              decision.
            </p>

            {/* CTA */}
            <button
              type="button"
              className="contract-hire-button"
            >
              <span>Talk to Our Experts</span>

              <ArrowRight className="contract-hire-button-icon" />
            </button>

          </div>

          {/* ===================================================
              RIGHT EVALUATION CARD
          =================================================== */}

          <div className="contract-hire-card">

            {/* =================================================
                CARD HEADER
            ================================================= */}

            <div className="contract-hire-card-header">

              <div className="contract-hire-card-title-group">

                <div className="contract-hire-scan-icon">
                  <ScanFace />
                </div>

                <div className="contract-hire-card-title-content">

                  <div className="contract-hire-card-title">
                    Contract-to-Hire Evaluation Matrix
                  </div>

                  <div className="contract-hire-card-subtitle">
                    Live Engineering &amp; Team Fit Benchmark
                  </div>

                </div>

              </div>

              <span className="contract-hire-status">
                <span />
                Active Trial
              </span>

            </div>

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="contract-hire-image">

              <div className="contract-hire-image-bg" />

              <div className="contract-hire-image-overlay" />

              <div className="contract-hire-image-info">

                <span>
                  <CheckCircle2 />
                  Sprint-Validated Pairing
                </span>

                <span>90-Day Direct Track</span>

              </div>

            </div>

            {/* =================================================
                TRACKS
            ================================================= */}

            <div className="contract-hire-tracks">

              <div className="contract-hire-tracks-label">
                CONTINUOUS SPRINT EVALUATION TRACKS
              </div>

              <div className="contract-hire-track-grid">

                {tracks.map((track) => (
                  <div
                    key={track}
                    className="contract-hire-track"
                  >
                    <span />

                    <span className="contract-hire-track-text">
                      {track}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* =================================================
                CARD FOOTER
            ================================================= */}

            <div className="contract-hire-card-footer">

              <span className="contract-hire-conversion">
                ↗ Trial-to-Perm Conversion Rate: 94.8%
              </span>

              <span className="contract-hire-ownership">
                Full IP &amp; Code Ownership Guaranteed
              </span>

            </div>

          </div>
        </div>

        {/* =====================================================
            FEATURE CARDS
        ===================================================== */}

        <div className="contract-hire-features">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="contract-hire-feature-card"
            >

              {/* Number */}
              <span className="contract-hire-feature-number">
                {feature.number}
              </span>

              {/* Heading */}
              <h2 className="contract-hire-feature-title">
                {feature.title}
              </h2>

              {/* Tag */}
              <div className="contract-hire-feature-tag">
                {feature.tag}
              </div>

              {/* Description */}
              <p className="contract-hire-feature-description">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* =========================================================
          STYLES
      ========================================================= */}

      <style>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .contract-hire-hero {
          width: 100%;
          min-height: auto;

          background: #ffffff;

          font-family: "Inter", sans-serif;

          overflow: hidden;
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .contract-hire-container {
          width: 100%;
          max-width: 1600px;

          margin: 0 auto;

          padding-left: 100px;
          padding-right: 100px;

          padding-top: 64px;
          padding-bottom: 64px;
        }

        /* =====================================================
           TOP GRID
        ===================================================== */

        .contract-hire-top-grid {
          width: 100%;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(360px, 400px);

          gap: 64px;

          align-items: center;

          margin-bottom: 48px;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .contract-hire-content {
          width: 100%;
          max-width: 780px;
        }

        /* =====================================================
           EYEBROW
        ===================================================== */

        .contract-hire-eyebrow {
          display: inline-flex;
          align-items: center;

          gap: 7px;

          width: fit-content;

          padding: 7px 12px;

          margin-bottom: 21px;

          border-radius: 999px;

          background: rgba(115, 0, 36, 0.05);

          border: 1px solid rgba(115, 0, 36, 0.1);

          color: #730024;

          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 700;

          letter-spacing: 0.04em;
          line-height: 1;
        }

        .contract-hire-eyebrow-icon {
          width: 13px;
          height: 13px;

          flex-shrink: 0;
        }

        /* =====================================================
           HEADING
        ===================================================== */

        .contract-hire-heading {
          width: 100%;
          max-width: 760px;

          margin: 0 0 18px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: clamp(36px, 3.35vw, 52px);

          font-weight: 600;

          line-height: 1.1;

          letter-spacing: -0.025em;

          color: #1c1c1c;
        }

        .contract-hire-heading span {
          color: #730024;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .contract-hire-description {
          width: 100%;
          max-width: 650px;

          margin: 0 0 28px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          font-weight: 500;

          line-height: 1.7;

          color: #737373;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .contract-hire-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 9px;

          min-height: 45px;

          padding: 0 22px;

          border: 1px solid #730024;

          border-radius: 6px;

          background: #730024;
          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.25s ease,
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contract-hire-button:hover {
          background: #5c001d;

          transform: translateY(-2px);

          box-shadow:
            0 8px 22px rgba(115, 0, 36, 0.16);
        }

        .contract-hire-button-icon {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          transition: transform 0.25s ease;
        }

        .contract-hire-button:hover
        .contract-hire-button-icon {
          transform: translateX(3px);
        }

        /* =====================================================
           EVALUATION CARD
        ===================================================== */

        .contract-hire-card {
          width: 100%;
          max-width: 400px;

          justify-self: end;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid #e5e5e5;

          border-radius: 13px;

          box-shadow:
            0 8px 28px rgba(0, 0, 0, 0.045);
        }

        /* =====================================================
           CARD HEADER
        ===================================================== */

        .contract-hire-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 12px;

          padding: 14px 15px;
        }

        .contract-hire-card-title-group {
          display: flex;
          align-items: center;

          gap: 10px;

          min-width: 0;
        }

        .contract-hire-scan-icon {
          width: 34px;
          height: 34px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background: rgba(115, 0, 36, 0.05);
        }

        .contract-hire-scan-icon svg {
          width: 15px;
          height: 15px;

          color: #730024;
        }

        .contract-hire-card-title-content {
          min-width: 0;
        }

        .contract-hire-card-title {
          font-family: "Inter", sans-serif;

          font-size: 12.5px;
          font-weight: 600;

          line-height: 1.3;

          color: #1c1c1c;
        }

        .contract-hire-card-subtitle {
          margin-top: 2px;

          font-family: "Inter", sans-serif;

          font-size: 10px;
          font-weight: 400;

          color: #a3a3a3;
        }

        .contract-hire-status {
          display: inline-flex;
          align-items: center;

          gap: 5px;

          width: fit-content;

          padding: 5px 8px;

          border-radius: 999px;

          background: #ecfdf3;

          color: #059669;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 600;

          white-space: nowrap;

          flex-shrink: 0;
        }

        .contract-hire-status span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #10b981;
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .contract-hire-image {
          position: relative;

          width: calc(100% - 24px);

          height: 220px;

          margin: 0 12px;

          overflow: hidden;

          border-radius: 9px;
        }

        .contract-hire-image-bg {
          position: absolute;
          inset: 0;

          background-image: url("/cth.png");

          background-size: cover;
          background-position: center;
        }

        .contract-hire-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.08) 65%,
              transparent
            );
        }

        .contract-hire-image-info {
          position: absolute;

          left: 12px;
          right: 12px;
          bottom: 11px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          color: #ffffff;

          font-family: "Inter", sans-serif;

          font-size: 9.5px;
          font-weight: 500;
        }

        .contract-hire-image-info span {
          display: flex;
          align-items: center;

          gap: 5px;
        }

        .contract-hire-image-info svg {
          width: 13px;
          height: 13px;

          flex-shrink: 0;
        }

        /* =====================================================
           TRACKS
        ===================================================== */

        .contract-hire-tracks {
          padding: 16px 15px 13px;
        }

        .contract-hire-tracks-label {
          margin-bottom: 10px;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 600;

          letter-spacing: 0.05em;

          color: #a3a3a3;
        }

        .contract-hire-track-grid {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          column-gap: 20px;
          row-gap: 9px;
        }

        .contract-hire-track {
          display: flex;
          align-items: center;

          gap: 7px;

          min-width: 0;

          font-family: "Inter", sans-serif;

          font-size: 10.5px;
          font-weight: 400;

          color: #666666;
        }

        .contract-hire-track > span:first-child {
          width: 4px;
          height: 4px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #730024;
        }

        .contract-hire-track-text {
          min-width: 0;
        }

        /* =====================================================
           CARD FOOTER
        ===================================================== */

        .contract-hire-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          padding: 11px 15px;

          border-top: 1px solid #f0f0f0;
        }

        .contract-hire-conversion {
          font-family: "Inter", sans-serif;

          font-size: 9.5px;
          font-weight: 600;

          color: #730024;
        }

        .contract-hire-ownership {
          font-family: "Inter", sans-serif;

          font-size: 9.5px;
          font-weight: 500;

          color: #a3a3a3;

          text-align: right;
        }

        /* =====================================================
           FEATURE CARDS
        ===================================================== */

        .contract-hire-features {
          width: 100%;

          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 20px;
        }

        .contract-hire-feature-card {
          padding: 20px;

          background: #fafafa;

          border: 1px solid #e5e5e5;

          border-radius: 10px;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contract-hire-feature-card:hover {
          transform: translateY(-3px);

          border-color: rgba(115, 0, 36, 0.14);

          box-shadow:
            0 8px 24px rgba(115, 0, 36, 0.045);
        }

        .contract-hire-feature-number {
          display: inline-flex;
          align-items: center;

          margin-bottom: 12px;

          padding: 4px 8px;

          border-radius: 4px;

          background: rgba(115, 0, 36, 0.05);

          border: 1px solid rgba(115, 0, 36, 0.1);

          color: #730024;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 700;
        }

        .contract-hire-feature-title {
          margin: 0 0 5px;

          font-family: "Plus Jakarta Sans", sans-serif;

          font-size: 15px;
          font-weight: 600;

          line-height: 1.35;

          color: #1c1c1c;
        }

        .contract-hire-feature-tag {
          margin-bottom: 10px;

          font-family: "Inter", sans-serif;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.04em;

          color: #730024;
        }

        .contract-hire-feature-description {
          margin: 0;

          font-family: "Inter", sans-serif;

          font-size: 11.5px;
          font-weight: 400;

          line-height: 1.65;

          color: #737373;
        }

        /* =====================================================
           LARGE TABLET
           1200px
        ===================================================== */

        @media (max-width: 1200px) {

          .contract-hire-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .contract-hire-top-grid {
            gap: 45px;
          }

          .contract-hire-heading {
            font-size: 44px;
          }
        }

        /* =====================================================
           TABLET
           900px
        ===================================================== */

        @media (max-width: 900px) {

          .contract-hire-container {
            padding-left: 40px;
            padding-right: 40px;

            padding-top: 52px;
            padding-bottom: 52px;
          }

          .contract-hire-top-grid {
            grid-template-columns: 1fr;

            gap: 38px;

            margin-bottom: 40px;
          }

          .contract-hire-content {
            max-width: 760px;
          }

          .contract-hire-card {
            max-width: 100%;

            justify-self: stretch;
          }

          .contract-hire-image {
            height: 250px;
          }

          .contract-hire-features {
            gap: 16px;
          }
        }

        /* =====================================================
           MOBILE
           700px
        ===================================================== */

        @media (max-width: 700px) {

          .contract-hire-container {
            padding-left: 24px;
            padding-right: 24px;

            padding-top: 44px;
            padding-bottom: 44px;
          }

          .contract-hire-top-grid {
            gap: 30px;
          }

          .contract-hire-eyebrow {
            font-size: 8.5px;

            padding: 7px 10px;

            margin-bottom: 18px;
          }

          .contract-hire-heading {
            font-size: 35px;

            line-height: 1.12;

            margin-bottom: 15px;
          }

          .contract-hire-description {
            font-size: 13px;

            line-height: 1.65;

            margin-bottom: 22px;
          }

          .contract-hire-button {
            min-height: 43px;

            padding: 0 19px;

            font-size: 11px;
          }

          .contract-hire-card-header {
            align-items: flex-start;
          }

          .contract-hire-image {
            height: 225px;
          }

          .contract-hire-features {
            grid-template-columns: 1fr;
          }

          .contract-hire-feature-card {
            padding: 17px;
          }
        }

        /* =====================================================
           SMALL MOBILE
           480px
        ===================================================== */

        @media (max-width: 480px) {

          .contract-hire-container {
            padding-left: 16px;
            padding-right: 16px;

            padding-top: 36px;
            padding-bottom: 36px;
          }

          .contract-hire-heading {
            font-size: 29px;

            letter-spacing: -0.02em;
          }

          .contract-hire-description {
            font-size: 12px;

            margin-bottom: 20px;
          }

          .contract-hire-button {
            min-height: 41px;

            padding: 0 16px;

            font-size: 10px;
          }

          .contract-hire-button-icon {
            width: 13px;
            height: 13px;
          }

          .contract-hire-card {
            border-radius: 11px;
          }

          .contract-hire-card-header {
            padding: 12px;
          }

          .contract-hire-scan-icon {
            width: 31px;
            height: 31px;
          }

          .contract-hire-scan-icon svg {
            width: 14px;
            height: 14px;
          }

          .contract-hire-card-title {
            font-size: 10.5px;
          }

          .contract-hire-card-subtitle {
            font-size: 8.5px;
          }

          .contract-hire-status {
            font-size: 7.5px;

            padding: 5px 7px;
          }

          .contract-hire-image {
            width: calc(100% - 18px);

            height: 190px;

            margin-left: 9px;
            margin-right: 9px;
          }

          .contract-hire-image-info {
            left: 10px;
            right: 10px;
            bottom: 9px;

            font-size: 8px;

            flex-direction: column;
            align-items: flex-start;

            gap: 3px;
          }

          .contract-hire-tracks {
            padding: 13px 12px 11px;
          }

          .contract-hire-tracks-label {
            font-size: 7.5px;
          }

          .contract-hire-track-grid {
            grid-template-columns: 1fr;

            row-gap: 7px;
          }

          .contract-hire-track {
            font-size: 9.5px;
          }

          .contract-hire-card-footer {
            padding: 10px 12px;

            flex-direction: column;

            align-items: flex-start;
          }

          .contract-hire-conversion,
          .contract-hire-ownership {
            font-size: 8px;

            text-align: left;
          }

          .contract-hire-feature-card {
            padding: 15px;
          }

          .contract-hire-feature-number {
            margin-bottom: 10px;

            font-size: 8px;
          }

          .contract-hire-feature-title {
            font-size: 13.5px;
          }

          .contract-hire-feature-tag {
            font-size: 8px;
          }

          .contract-hire-feature-description {
            font-size: 10px;
          }
        }

        /* =====================================================
           EXTRA SMALL
           360px
        ===================================================== */

        @media (max-width: 360px) {

          .contract-hire-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .contract-hire-heading {
            font-size: 26px;
          }

          .contract-hire-description {
            font-size: 11.5px;
          }

          .contract-hire-status {
            display: none;
          }

          .contract-hire-image {
            height: 175px;
          }

          .contract-hire-feature-title {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
}